import { Injectable } from '@angular/core';
import axios from 'axios';
import { gql } from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://101014890-comp-3133-assignment1.vercel.app/graphql';

  constructor() {}

  async getUsers() {
    const query = gql`
      query getUsers {
        users {
          id
          name
          email
        }
      }
    `;
    const result = await axios.post(this.apiUrl, { query });
    return result.data.data.users;
  }
}