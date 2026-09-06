// discord_app/modules/launchpad/native/LaunchPadPullTabCache.tsx
import Storage2 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import NativeDeviceSettingsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx";
import LaunchPadConstants from "LaunchPadConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function setLaunchPadPullTabExclusionRect(arg0) {
  let tmp = arg0;
  if (arg0 === undefined) {
    const Storage = Storage2.Storage;
    value = Storage.get(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY);
    if (value == null) {
      value = React4;
    }
    tmp = value;
  }
  if (obj.isAndroid()) {
    let tmp7Result = tmp7(1477);
    const diff = tmp7Result.getWindowDimensions().width - hasOwnProperty;
    tmp7Result = tmp7(1477);
    const width = tmp7Result.getWindowDimensions().width;
    const sum = tmp + React3;
    let left;
    if (_undefined != null) {
      left = _undefined.left;
    }
    let tmp15 = left === diff;
    if (tmp15) {
      let right;
      if (_undefined != null) {
        right = _undefined.right;
      }
      tmp15 = right === width;
    }
    if (tmp15) {
      let top;
      if (_undefined != null) {
        top = _undefined.top;
      }
      tmp15 = top === tmp;
    }
    if (tmp15) {
      let bottom;
      if (_undefined != null) {
        bottom = _undefined.bottom;
      }
      tmp15 = bottom === sum;
    }
    if (!tmp15) {
      const rect = { left: diff, right: width, top: tmp, bottom: sum };
      _undefined = rect;
      const items = [_undefined];
      const result = NativeDeviceSettingsModuleDefault.setSystemGestureExclusionRects(items);
    }
  }
}
({
  LAUNCH_PAD_PULL_TAB_HEIGHT: c3,
  LAUNCH_PAD_PULL_TAB_INITIAL_POSITION: closure_4,
  LAUNCH_PAD_PULL_TAB_WIDTH: hasOwnProperty,
} = LaunchPadConstants);
const LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY = "LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY";
let c7 = 0;
let c8;
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadPullTabCache.tsx");

export const getLaunchPadPullTabPositionCached = function getLaunchPadPullTabPositionCached() {
  const Storage = Storage2.Storage;
  value = Storage.get(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY);
  if (value == null) {
    value = React4;
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
    const Storage = Storage2.Storage;
    const result = Storage.set(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY, closure_0);
    if (null != c8) {
      setLaunchPadPullTabExclusionRect(closure_0);
    }
  }, 300);
};
export const clearLaunchPadPullTabExclusionRect = function clearLaunchPadPullTabExclusionRect() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != c8;
  }
  if (isAndroidResult) {
    c8 = undefined;
    const result = NativeDeviceSettingsModuleDefault.setSystemGestureExclusionRects([]);
  }
};
export { setLaunchPadPullTabExclusionRect };
