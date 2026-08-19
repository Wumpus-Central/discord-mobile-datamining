// === Module 16180: setLaunchPadPullTabExclusionRect ===

// Module 16180 (setLaunchPadPullTabExclusionRect)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import Storage2 from "Storage" /* 595 */;
import useWindowDimensions from "useWindowDimensions" /* 1494 */;
import enforcingDefault from "enforcing" /* 4849 */;
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG" /* 10665 */;

function setLaunchPadPullTabExclusionRect(callback) {
  let tmp = callback;
  if (callback === undefined) {
    const Storage = Storage2.Storage;
    let value = Storage.get(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY);
    if (value == null) {
      value = closure_4;
    }
    tmp = value;
  }
  let obj = obj1322;
  if (obj.isAndroid()) {
    let tmp7Result = useWindowDimensions;
    const diff = tmp7Result.getWindowDimensions().width - closure_5;
    tmp7Result = useWindowDimensions;
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
      const result = enforcingDefault.setSystemGestureExclusionRects(items);
    }
  }
}
({ LAUNCH_PAD_PULL_TAB_HEIGHT: c3, LAUNCH_PAD_PULL_TAB_INITIAL_POSITION: c4, LAUNCH_PAD_PULL_TAB_WIDTH: c5 } = LAUNCH_PAD_SPRING_CONFIG);
const LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY = "LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY";
let c7 = 0;
let c8;
let result = obj132.fileFinishedImporting("modules/launchpad/native/LaunchPadPullTabCache.tsx");

export const getLaunchPadPullTabPositionCached = function getLaunchPadPullTabPositionCached() {
  const Storage = Storage2.Storage;
  let value = Storage.get(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY);
  if (value == null) {
    value = closure_4;
  }
  return value;
};
export const setLaunchPadPullTabPositionCached = function setLaunchPadPullTabPositionCached(arg0) {
  const Storage = Storage2.Storage;
  const result = Storage.set(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY, arg0);
};
export const persistLaunchPadPullTabPosition = function persistLaunchPadPullTabPosition(arg0) {
  closure_0 = arg0;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    const Storage = callback(dependencyMap[1]).Storage;
    const result = Storage.set(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY, callback);
    if (null != closure_1_8) {
      setLaunchPadPullTabExclusionRect(callback);
    }
  }, 300);
};
export const clearLaunchPadPullTabExclusionRect = function clearLaunchPadPullTabExclusionRect() {
  let isAndroidResult = obj1322.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != c8;
  }
  if (isAndroidResult) {
    c8 = undefined;
    const result = enforcingDefault.setSystemGestureExclusionRects([]);
  }
};
export { setLaunchPadPullTabExclusionRect };