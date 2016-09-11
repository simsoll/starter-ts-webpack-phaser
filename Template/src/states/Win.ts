import { MENU_STATE } from "../common/constants";
import { header, paragraph } from "../common/styles";

export class WinState extends Phaser.State {
    preload() {
        this.game.add.text(80, 80, "YOU WON!", header);
        this.game.add.text(80, 150, "press ENTER to continue", paragraph);

        this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER)
            .onDown.addOnce(() => this.game.state.start(MENU_STATE), this);
    }
}