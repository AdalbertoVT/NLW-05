import { Request, Response } from "express";
import { UsersService } from "../services/UserService";


class UserController {

    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        const userService = new UsersService();

        const user = await userService.create(email);

        return response.json(user);
    }

}

export { UserController };