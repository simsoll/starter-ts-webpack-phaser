import { LOSE_STATE, WIN_STATE } from "../common/constants";
import { header, paragraph } from "../common/styles";

export class PlayState extends Phaser.State {
    preload() {
        this.game.add.text(80, 80, "This is the play screen!", header);
        this.game.add.text(80, 150, "press W to win", paragraph);
        this.game.add.text(80, 230, "press L to lose", paragraph);

        this.game.input.keyboard.addKey(Phaser.Keyboard.W)
            .onDown.addOnce(() => this.game.state.start(WIN_STATE), this);

        this.game.input.keyboard.addKey(Phaser.Keyboard.L)
            .onDown.addOnce(() => this.game.state.start(LOSE_STATE), this);
    }
}