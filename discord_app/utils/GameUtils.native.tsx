// === Module 9231: GameUtils ===

// Module 9231 (GameUtils)
import waitForFrameSubscriptionDefault from "waitForFrameSubscription" /* 9232 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 9235 */;
import size from "module_2" /* 2 */;

let c2 = "not supported";
const result = size.fileFinishedImporting("utils/GameUtils.native.tsx");

export default {
  waitSubscribed() {
    return Promise.resolve();
  },
  waitFrameSubscribed(frameId, ACTIVITY_JOIN) {
    return waitForFrameSubscriptionDefault(NativeRPCServerDefault, frameId, ACTIVITY_JOIN);
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
    const error = new Error(c2);
    return Promise.reject(error);
  },
  launchDispatchApplication() {
    const error = new Error(c2);
    return Promise.reject(error);
  },
  removeShortcuts() {
    return Promise.resolve(false);
  },
  createShortcuts() {
    return Promise.resolve(false);
  },
  launchGame() {
    const error = new Error(c2);
    return Promise.reject(error);
  },
  isProtocolRegistered() {
    return Promise.resolve(false);
  },
  setRecentGames() {

  }
};