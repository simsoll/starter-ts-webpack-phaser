import { LOAD_STATE } from "../common/constants";

export class BootState extends Phaser.State {

    create(): void {
        // Set the background color
        this.game.stage.backgroundColor = "#3598db";

        // Prevent the browser from pausing the game (and it"s timers) if the tab loses focus
        this.stage.disableVisibilityChange = true;

        // Scale on all devices
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // Other typical settings
        //this.stage.scale.minWidth = 480;
        //this.stage.scale.minHeight = 260;
        //this.stage.scale.maxWidth = 1024;
        //this.stage.scale.maxHeight = 768;
        //this.stage.scale.forceLandscape = true;
        //this.stage.scale.setScreenSize(true);
        //this.input.maxPointers = 1;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // If we"re in development mode add the phase-debug plugin
        if (process.env.NODE_ENV === "development") {
            /* tslint:disable:no-require-imports */
            const debug = require("phaser-debug");
            this.add.plugin(debug);
        }

        // Start the loader state
        this.game.state.start(LOAD_STATE);
    }
}
