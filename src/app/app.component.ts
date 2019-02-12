import { Component } from '@angular/core';
import { GameLogic } from './gameLogic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playerWeapon: string;
  computerWeapon: string;
  result: string;
  availableWeapons = ['Rock', 'Paper', 'Scissors'];

  constructor(private gameLogic: GameLogic) {}

  /**
   * Sets the player-chosen weapon, randomly selects a weapon for the computer and
   * determines the winner of the rock-paper-scissors battle.
   */
  fight(weapon: string) {
    this.playerWeapon = weapon;
    this.selectComputerWeapon();
    this.result = this.gameLogic.determineWinner(
      this.playerWeapon,
      this.computerWeapon
    );
  }

  /**
   * Randomly selects a weapon for the computer.
   */
  selectComputerWeapon() {
    this.computerWeapon = this.availableWeapons[
      Math.floor(Math.random() * this.availableWeapons.length)
    ];
  }

  /**
   * Resets the game state for a new round.
   */
  resetGame() {
    this.playerWeapon = undefined;
    this.computerWeapon = undefined;
    this.result = undefined;
  }
}
