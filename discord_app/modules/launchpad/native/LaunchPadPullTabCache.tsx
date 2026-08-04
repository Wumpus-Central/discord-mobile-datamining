// discord_app/modules/launchpad/native/LaunchPadPullTabCache.tsx
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG";

let c3;
let c4;
let c5;
function setLaunchPadPullTabExclusionRect() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const Storage = require(595) /* Storage */.Storage;
    let value = Storage.get(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY);
    if (value == null) {
      value = closure_4;
    }
    tmp = value;
  }
  let obj = require(500) /* set */;
  if (obj.isAndroid()) {
    let tmp7Result = tmp7(1474);
    const diff = tmp7Result.getWindowDimensions().width - closure_5;
    tmp7Result = tmp7(1474);
    const width = tmp7Result.getWindowDimensions().width;
    const sum = tmp + closure_3;
    let left;
    if (obj != null) {
      left = obj.left;
    }
    let tmp15 = left === diff;
    if (tmp15) {
      let right;
      if (obj != null) {
        right = obj.right;
      }
      tmp15 = right === width;
    }
    if (tmp15) {
      let top;
      if (obj != null) {
        top = obj.top;
      }
      tmp15 = top === tmp;
    }
    if (tmp15) {
      let bottom;
      if (obj != null) {
        bottom = obj.bottom;
      }
      tmp15 = bottom === sum;
    }
    if (!tmp15) {
      obj = { left: null, right: null, top: null, bottom: null };
      obj[0] = diff;
      obj[1] = width;
      obj[2] = tmp;
      obj[3] = sum;
      const items = [obj];
      const result = importDefault(4745).setSystemGestureExclusionRects(items);
      const obj5 = importDefault(4745);
    }
  }
}
({ LAUNCH_PAD_PULL_TAB_HEIGHT: c3, LAUNCH_PAD_PULL_TAB_INITIAL_POSITION: c4, LAUNCH_PAD_PULL_TAB_WIDTH: c5 } = LAUNCH_PAD_SPRING_CONFIG);
const LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY = "LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY";
let c7 = 0;
let c8;
let result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadPullTabCache.tsx");

export const getLaunchPadPullTabPositionCached = function getLaunchPadPullTabPositionCached() {
  const Storage = require(595) /* Storage */.Storage;
  let value = Storage.get(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY);
  if (value == null) {
    value = closure_4;
  }
  return value;
};
export const setLaunchPadPullTabPositionCached = function setLaunchPadPullTabPositionCached(arg0) {
  const Storage = require(595) /* Storage */.Storage;
  const result = Storage.set(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY, arg0);
};
export const persistLaunchPadPullTabPosition = function persistLaunchPadPullTabPosition(arg0) {
  let closure_0 = arg0;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    const Storage = callback(outer1_2[1]).Storage;
    const result = Storage.set(outer1_6, callback);
    if (null != outer1_8) {
      outer1_9(callback);
    }
  }, 300);
};
export const clearLaunchPadPullTabExclusionRect = function clearLaunchPadPullTabExclusionRect() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != c8;
  }
  if (isAndroidResult) {
    c8 = undefined;
    const result = importDefault(4745).setSystemGestureExclusionRects([]);
    const obj2 = importDefault(4745);
  }
};
export { setLaunchPadPullTabExclusionRect };