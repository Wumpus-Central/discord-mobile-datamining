// discord_app/utils/GameUtils.native.tsx
import size from "../../_runtime/metro/00002__.js";

let c0 = "not supported";
const obj = {
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
    return reject(error);
  },
  launchDispatchApplication() {
    const error = new Error(c0);
    return reject(error);
  },
  removeShortcuts() {
    return Promise.resolve(false);
  },
  createShortcuts() {
    return Promise.resolve(false);
  },
  launchGame() {
    const error = new Error(c0);
    return reject(error);
  },
  isProtocolRegistered() {
    return Promise.resolve(false);
  },
  setRecentGames() {},
};
const result = size.fileFinishedImporting("utils/GameUtils.native.tsx");

export default obj;
