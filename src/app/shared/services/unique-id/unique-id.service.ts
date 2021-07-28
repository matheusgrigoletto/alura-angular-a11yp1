import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  generateUniqueIdWithPrefix(prefix: string): string {
    return `${prefix}-${this.generate()}`;
  }

  private generate(): string {
    return uuid.v1();
  }
}
