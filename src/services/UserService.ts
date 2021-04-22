import { getCustomRepository } from 'typeorm';

import { UserRepository } from '../repositories/UserRepository';

class UsersService {
    private usersRepository: UserRepository;

    constructor() {
        this.usersRepository = getCustomRepository(UserRepository);
    }

    async create(email: string) {
        const userExists = await this.usersRepository.findOne({ email });

        if (userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({ email });

        await this.usersRepository.save(user);

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });

        return user;
    }
}

export { UsersService };