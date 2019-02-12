import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogic {
  constructor() {}

  /**
   * Determines whether the player wins, loses or draws against
   * the computer.
   *
   * The three possible return values for this are: Player, Computer or Draw
   */
  determineWinner(playerWeapon: string, computerWeapon: string): string {
    const winner = 'Player';

    // Task: add the required code to determine the winner here.

    return winner;
  }
}
