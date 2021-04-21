import { getCustomRepository } from 'typeorm';

import { MessageRepository } from '../repositories/MessageRepository';

interface IMessageCreate {
    admin_id?: string;
    user_id: string;
    text: string;
}

class MessagesService {
    private messagesRepository: MessageRepository;

    constructor() {
        this.messagesRepository = getCustomRepository(MessageRepository);
    }

    async create({ admin_id, user_id, text }: IMessageCreate) {
        const message = this.messagesRepository.create({ admin_id, user_id, text });

        await this.messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id: string) {
        const list = await this.messagesRepository.find({
            where: { user_id },
            relations: ['user'],
        });

        return list;
    }
}

export { MessagesService };