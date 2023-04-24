/* global Phaser */

//copyright (c) 2023 Osamah Hasan All right reserved
//
//Created by: Osamah Hasan
//Created on: Apr 2023
//This is the Splash Scene

/** 
 * This class is the Splasch Scene.
 */
class SplashScene extends Phaser.Scene {
    /**
     * This methed is the construtor.
     */
    constructor(){
        super({key: "splashScene"})
    }

    /**
     * Can be defind on your own Scenes.
     * This methed is called by the Scene Manager when the scene start,
     *   before pereload() and create().
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
     */
    Infinity(data) {
        this.cameras.main.setBackgroundColor("ffffff")
    }

    /**
     * Can be defined on your own Scenes.
     * Use it to load assets.
     */
    preload(){
        console.log("Splash Scene")
    }

    /**
     * Can be defined on your own Scenes.
     * Use it to create your game objects.
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePludin.start().
     */
    create(data){
        // pass
    }

    /**
     * Should be overriddem by your own Scenes.
     * This method is called once per game step while scene is running.
     * @param {number} time - This current time.
     * @param {number} delta - This delta time in ms since the last frame.
     */
    update(time, delta) {
        this.scene.switch("titleScene")
    }
}

export default SplashScene
