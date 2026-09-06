// discord_app/modules/device/native/DeviceOrientation.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import get_ActivityIndicator from "../../../../_runtime/metro/08333__.js";

require = fn;
function handleOrientationChange(initialOrientation) {
  obj = PlatformUtils;
  if (obj.isIOS()) {
    handleDeviceOrientationChange(initialOrientation);
  }
  if (global !== initialOrientation) {
    global = initialOrientation;
    const orientationLock = obj.getState().orientationLock;
    let hasItem = null != orientationLock;
    if (hasItem) {
      hasItem = closure_5.includes(orientationLock);
    }
    if ("LANDSCAPE" === global) {
      if (!hasItem) {
        let tmpResult = ReactBatchUpdates;
        tmpResult.batchUpdates(() => obj.setState({ orientation: constants.LANDSCAPE }));
      }
    }
    let tmp9 = "PORTRAIT" === global;
    if (!tmp9) {
      tmpResult = DeviceUtils;
      let isIpadOSResult = tmpResult.isIpadOS();
      if (isIpadOSResult) {
        isIpadOSResult = "PORTRAITUPSIDEDOWN" === global;
      }
      tmp9 = isIpadOSResult;
    }
    if (tmp9) {
      tmp9 = "LANDSCAPE" !== orientationLock;
    }
    if (tmp9) {
      ReactBatchUpdates.batchUpdates(() => obj.setState({ orientation: constants.PORTRAIT }));
      const tmpResult1 = ReactBatchUpdates;
    }
  }
}
function handleDeviceOrientationChange(LANDSCAPE) {
  const orientationLock = obj.getState().orientationLock;
  if (c8) {
    if ("LANDSCAPE" === LANDSCAPE) {
      if ("LANDSCAPE" === orientationLock) {
        const orientationLock3 = obj.getState().orientationLock;
        if (!obj13.isAndroid()) {
          let tmp14Result = PlatformUtils;
          if (tmp14Result.isIOS()) {
            tmp14Result = DeviceUtils;
            tmp14Result.getSystemVersionMajor() >= 16;
          }
        }
        obj13 = PlatformUtils;
        get_ActivityIndicator.ignoreAutoRotate(false);
        const result = get_ActivityIndicator.unlockAllOrientations();
        ReactBatchUpdates.batchUpdates(() => {
          state.setState({ orientationLock: null });
        });
        c8 = false;
        const tmp14Result1 = ReactBatchUpdates;
      }
    } else if ("PORTRAIT" === LANDSCAPE) {
      if ("PORTRAIT" === orientationLock) {
        const orientationLock2 = obj.getState().orientationLock;
        if (!obj12.isAndroid()) {
          let tmp12Result = PlatformUtils;
          if (tmp12Result.isIOS()) {
            tmp12Result = DeviceUtils;
            tmp12Result.getSystemVersionMajor() >= 16;
          }
        }
        obj12 = PlatformUtils;
        get_ActivityIndicator.ignoreAutoRotate(false);
        const result1 = get_ActivityIndicator.unlockAllOrientations();
        ReactBatchUpdates.batchUpdates(() => {
          state.setState({ orientationLock: null });
        });
        c8 = false;
        const tmp12Result1 = ReactBatchUpdates;
      }
    }
  }
}
function lockOrientationForiOS(PORTRAIT) {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (!isAndroidResult) {
    let tmpResult = DeviceUtils;
    let isIpadOSResult = tmpResult.isIpadOS();
    if (isIpadOSResult) {
      isIpadOSResult = null == PORTRAIT;
    }
    isAndroidResult = isIpadOSResult;
  }
  if (!isAndroidResult) {
    get_ActivityIndicator.ignoreAutoRotate(false);
    c8 = false;
    if ("LANDSCAPE" === PORTRAIT) {
      let tmp6Result = get_ActivityIndicator;
      tmp6Result.lockToLandscapeLeft();
      tmpResult = ReactBatchUpdates;
      tmpResult.batchUpdates(() => {
        obj.setState({ orientationLock: "LANDSCAPE" });
      });
    } else {
      tmp6Result = get_ActivityIndicator;
      tmp6Result.lockToPortrait();
      ReactBatchUpdates.batchUpdates(() => {
        obj.setState({ orientationLock: "PORTRAIT" });
      });
      const tmpResult1 = ReactBatchUpdates;
    }
  }
}
const AppState = fn(17).AppState;
let obj = { PORTRAIT: 0, [0]: "PORTRAIT", LANDSCAPE: 1, [1]: "LANDSCAPE" };
let closure_5 = ["PORTRAIT", "PORTRAITUPSIDEDOWN"];
const module_560 = fn(560);
obj = module_560.create(() => {
  obj = { orientation: obj.PORTRAIT, orientationLock: null };
  return obj;
});
let global = null;
let c8 = false;
let result = get_ActivityIndicator.addOrientationDegreesChangeListener(function handleOrientationDegreesChange(arg0) {
  let tmp = arg0 >= 0;
  if (tmp) {
    tmp = arg0 <= 5;
  }
  if (!tmp) {
    tmp = arg0 >= 355;
  }
  let str = "PORTRAIT";
  if (tmp !== true) {
    let tmp2 = arg0 >= 85;
    if (tmp2) {
      tmp2 = arg0 <= 95;
    }
    str = "LANDSCAPE-RIGHT";
    if (tmp2 !== true) {
      let tmp3 = arg0 >= 175;
      if (tmp3) {
        tmp3 = arg0 <= 185;
      }
      str = "PORTRAITUPSIDEDOWN";
      if (tmp3 !== true) {
        let tmp4 = arg0 >= 265;
        if (tmp4) {
          tmp4 = arg0 <= 275;
        }
        str = "LANDSCAPE-LEFT";
        if (tmp4 !== true) {
          str = "UNKNOWN";
        }
      }
    }
  }
  if ("LANDSCAPE-LEFT" !== str) {
    if ("LANDSCAPE-RIGHT" !== str) {
      if ("PORTRAIT" === str) {
        handleDeviceOrientationChange("PORTRAIT");
      }
    }
  }
  handleDeviceOrientationChange("LANDSCAPE");
});
let result1 = get_ActivityIndicator.addOrientationListener(handleOrientationChange);
const result2 = handleOrientationChange(get_ActivityIndicator.getInitialOrientation());
const listener = AppState.addEventListener("change", function applyLockStateOnAppActive(event) {
  const orientationLock = obj.getState().orientationLock;
  let tmp = "active" === event;
  if (tmp) {
    tmp = null != orientationLock;
  }
  if (tmp) {
    obj = get_ActivityIndicator;
    obj.ignoreAutoRotate(true);
    c8 = false;
    if ("LANDSCAPE" === orientationLock) {
      let tmp3Result = get_ActivityIndicator;
      tmp3Result.lockToLandscapeLeft();
      ReactBatchUpdates.batchUpdates(() => {
        obj.setState({ orientationLock: "LANDSCAPE" });
      });
    } else {
      tmp3Result = get_ActivityIndicator;
      tmp3Result.lockToPortrait();
      ReactBatchUpdates.batchUpdates(() => {
        obj.setState({ orientationLock: "PORTRAIT" });
      });
    }
  }
});
const size = fn(2);
const result3 = size.fileFinishedImporting("modules/device/native/DeviceOrientation.tsx");

export const OrientationType = obj;
export const useStore = obj;
export { handleOrientationChange };
export const unlockOrientation = function unlockOrientation(unlockAfterRotatingToPreviousLock) {
  obj = PlatformUtils;
  if (obj.isAndroid()) {
    if (unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock) {
      if (null != obj.getState().orientationLock) {
        c8 = true;
      }
    }
  } else {
    let tmpResult = PlatformUtils;
    if (tmpResult.isIOS()) {
      tmpResult = DeviceUtils;
    }
  }
  get_ActivityIndicator.ignoreAutoRotate(false);
  const result = get_ActivityIndicator.unlockAllOrientations();
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ orientationLock: null });
  });
  const tmpResult1 = ReactBatchUpdates;
};
export const lockOrientation = function lockOrientation(PORTRAIT, flag) {
  if (flag == null) {
    flag = false;
  }
  get_ActivityIndicator.ignoreAutoRotate(flag);
  c8 = false;
  if ("LANDSCAPE" === PORTRAIT) {
    let tmpResult = get_ActivityIndicator;
    tmpResult.lockToLandscapeLeft();
    ReactBatchUpdates.batchUpdates(() => {
      obj.setState({ orientationLock: "LANDSCAPE" });
    });
  } else {
    tmpResult = get_ActivityIndicator;
    tmpResult.lockToPortrait();
    ReactBatchUpdates.batchUpdates(() => {
      obj.setState({ orientationLock: "PORTRAIT" });
    });
  }
};
export { lockOrientationForiOS };
export const getOrientation = function getOrientation() {
  return obj.getState().orientation;
};
export const getOrientationLock = function getOrientationLock() {
  return obj.getState().orientationLock;
};
export const useOrientation = function useOrientation() {
  return obj().orientation;
};
export const useOrientationListener = function useOrientationListener(callback2) {
  closure_0 = callback2;
  const items = [callback2];
  const effect = noop.useEffect(() => obj.subscribe(closure_0), items);
};
export const restoreDefaultOrientation = function restoreDefaultOrientation() {
  obj = PlatformUtils;
  if (obj.isIOS()) {
    let tmpResult = DeviceUtils;
  }
  const orientationLock = obj.getState().orientationLock;
  tmpResult = PlatformUtils;
  if (!tmpResult.isAndroid()) {
    if (tmpResult1.isIOS()) {
      DeviceUtils.getSystemVersionMajor() >= 16;
      const tmpResult2 = DeviceUtils;
    }
    tmpResult1 = PlatformUtils;
  }
  get_ActivityIndicator.ignoreAutoRotate(false);
  const result = get_ActivityIndicator.unlockAllOrientations();
  ReactBatchUpdates.batchUpdates(() => {
    state.setState({ orientationLock: null });
  });
  lockOrientationForiOS();
  const tmpResult3 = ReactBatchUpdates;
};
