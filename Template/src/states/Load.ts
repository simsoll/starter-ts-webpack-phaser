import { MENU_STATE } from "../common/constants";
import { header } from "../common/styles";

export class LoadState extends Phaser.State {

    preload(): void {
        this.game.add.text(80, 150, "loading...", header);

        this.game.load.image("phaser", "./assets/phaser.png");
    }

    create(): void {
        this.game.state.start(MENU_STATE);
    }
}
