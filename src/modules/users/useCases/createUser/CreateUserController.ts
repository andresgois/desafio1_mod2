import e, { Response, Request } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;

      this.createUserUseCase.execute({ name, email });
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }

    return response.status(201).send();
  }
}

export { CreateUserController };
