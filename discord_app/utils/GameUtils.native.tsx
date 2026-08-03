// === Module 8783: set ===

// Module 8783 (set)
let c0 = "not supported";
const result = require("set").fileFinishedImporting("utils/GameUtils.native.tsx");

export default {
  waitSubscribed() {
    return Promise.resolve();
  },
  waitParentSubscribed() {
    return Promise.resolve();
  },
  waitConnected() {
    return Promise.resolve();
  },
  waitParentConnected() {
    return Promise.resolve();
  },
  isLaunchable() {
    return Promise.resolve(false);
  },
  isGameLaunchable() {
    return Promise.resolve(false);
  },
  launch() {
    const error = new Error(c0);
    return Promise.reject(error);
  },
  launchDispatchApplication() {
    const error = new Error(c0);
    return Promise.reject(error);
  },
  removeShortcuts() {
    return Promise.resolve(false);
  },
  createShortcuts() {
    return Promise.resolve(false);
  },
  launchGame() {
    const error = new Error(c0);
    return Promise.reject(error);
  },
  isProtocolRegistered() {
    return Promise.resolve(false);
  },
  setRecentGames() {

  }
};