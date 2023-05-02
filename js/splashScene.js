/* global Phaser */

// Copyright (c) 2023 Osamah Hasan All rights reserved
//
//Created by: Osamah Hasan
//Created on: Apr 2023
//This is the Splash Scene

/**
 * This class is the Splash Scene
 */
class SplashScene extends Phaser.Scene {
    /**
     * This methed is the construtor.
     */
    constructor() {
        super({ key: "splashScene" })

        this.splashBackgroundImage = null
    }

    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manger when the scene starts,
     *    before preload() and create().
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
        console.log("Splash Scene")
        this.load.image("splashBackground", "./assets/splashSceneImage.png")
    }

    /**
     * Can be difined on your own Scene.
     * Use it to create your gmae object.
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePulgin.start().
     */
    create(data) {
        this.splashSceneBackgroundImage = this.add.sprite(
            0,
            0,
            "splashBackground"
        )
        this.splashSceneBackgroundImage.x = 1920 / 2
        this.splashSceneBackgroundImage.y = 1080 / 2
    }

    /**
     * Should be overriddn by your own Scene.
     * This method is called once per game step while the scene is runing.
     * @param {number} time - This current time.
     * @param {number} delta - This delta time in ms since the last frame.
     */
    update(time, delta) {
      if (time > 3000) {
        this.scene.switch("titleScene")
      }
    }
}

export default SplashScene
