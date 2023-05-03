/* global Phaser */

//Copyright (c) 2023 Osamah Hasan All rights reserved
//
//Created by: Osamah Hasan
//Created on: May 2023
//This is the Menu Scene

/**
 * This class is the Menu Scene
 */
class MenuScene extends Phaser.Scene {
  /**
   * This methed is the construtor.
   */
  constructor() {
    super({ key: "menuScene" })
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
    console.log("Menu Scene")
  }

  /**
   * Can be difined on your own Scene.
   * Use it to create your gmae object.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePulgin.start().
   */
  create(data) {
    //pass
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

export default MenuScene
