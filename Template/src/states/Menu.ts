import { PLAY_STATE } from "../common/constants";
import { header, paragraph } from "../common/styles";

export class MenuState extends Phaser.State {
    preload() {
        this.game.add.text(80, 80, "This is the menu screen!", header);
        this.game.add.text(80, 150, "press ENTER to start", paragraph);

        this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
            .onDown.addOnce(this.startGame, this);
    }

    startGame() {
        this.game.state.start(PLAY_STATE);
    }
}
