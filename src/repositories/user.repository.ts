import { usersList } from '../database/users';

export class UserRepository {
  public getEmail(email: string) {
    return usersList.find((user) => user.email === email);
  }
}