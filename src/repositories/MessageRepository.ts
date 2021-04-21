import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/message";

@EntityRepository(Message)
class MessageRepository extends Repository<Message> {

}

export { MessageRepository }