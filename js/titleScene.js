/* global Phaser */

//Copyright (C) 2023 Osamah Hasan All right reserved
//
//Created by: Osamah Hasan
//Created on: Apr 2023]
//This is the Title Scene

/**
 * This class is the Title Scene
 */
class TitleScene extends Phaser.Scene{
    /**
     * This method is the construtor.
     */
    constructor(){
        super({key: "titleScene"})

        this.titleBackgroundImage = null
        this.titleSceneText = null
        this.titleSceneTextStyle = {
            font: "200px Times" ,
            fill: "#fde4b9",
            align: "center",
        }
    }

    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manger when the scene starts,
     *   before preload() and create().
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
     */
    init(data) {
        this.cameras.main.setBackgroundColor("ffffff")
    }

    /**
     * Can be defined defined on your own Scene.
     * Use it to load assets.
     */
    preload() {
        console.log("Title Scene")
        this.preload.image("titleSceneBackground", "assets/aliens_screen_image.png")
    }

    /**
     * Can be difined on your own Scene.
     * Use it to create your gmae object.
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePulgin.start().
     */
    create(data) {
        this.titleBackgroundImage = this.add
          .sprite(0, 0, "titleSceneBackground")
            .setScale(2.75)
        this.titleBackgroundImage.x = 1920 / 2
        this.titleBackgroundImage.y = 1080 / 2

        this.titleSceneText = this.add
          .text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.titleSceneTextStyle)
        .set0rigin(0.5)
    }

    /**
     * Should be overriddn by your own Scene.
     * This method is called once per game step while the scene is runing.
     * @param {number} time - This current time.
     * @param {number} delta - This delta time in ms since the last frame.
     */
    update(time, delta) {
        //pass
    }
}

export default TitleScene
