// discord_app/modules/device/native/DeviceOrientation.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react_native2 from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import 00570__ from "../../../../_runtime/metro/00570__.js";
import react_native3_mod from "../../../../_runtime/08019_react-native.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const f96287 = () => {
  state.setState({ orientationLock: null });
};
function handleOrientationChange(initialOrientation) {
  let obj = PlatformUtils;
  if (obj.isIOS()) {
    handleDeviceOrientationChange(initialOrientation);
  }
  if (c7 !== initialOrientation) {
    c7 = initialOrientation;
    const orientationLock = obj2.getState().orientationLock;
    const hasItem = null != orientationLock && closure_5.includes(orientationLock);
    const tmp7 = c7;
    if ("LANDSCAPE" === c7) {
      if (!hasItem) {
        const tmpResult = react_native2;
        tmpResult.batchUpdates(() => {
          const obj = { orientation: constants.LANDSCAPE };
          return obj2.setState(obj);
        });
      }
    }
    let tmp9 = "PORTRAIT" === tmp7;
    if (!tmp9) {
      const tmpResult3 = DeviceUtils;
      tmp9 = tmpResult3.isIpadOS() && "PORTRAITUPSIDEDOWN" === c7;
      const isIpadOSResult = tmpResult3.isIpadOS() && "PORTRAITUPSIDEDOWN" === c7;
    }
    if (tmp9) {
      tmp9 = "LANDSCAPE" !== orientationLock;
    }
    if (tmp9) {
      const tmpResult4 = react_native2;
      tmpResult4.batchUpdates(() => {
        const obj = { orientation: constants.PORTRAIT };
        return obj2.setState(obj);
      });
    }
  }
}
function handleDeviceOrientationChange(LANDSCAPE) {
  const orientationLock = obj2.getState().orientationLock;
  const tmp = c8;
  if (tmp) {
    if ("LANDSCAPE" === LANDSCAPE) {
      if ("LANDSCAPE" === orientationLock) {
        const orientationLock3 = obj2.getState().orientationLock;
        const obj13 = PlatformUtils;
        if (!obj13.isAndroid()) {
          const tmp15Result = PlatformUtils;
          if (tmp15Result.isIOS()) {
            const tmp15Result3 = DeviceUtils;
            tmp15Result3.getSystemVersionMajor() >= 16;
          }
        }
        const obj9 = react_native;
        obj9.ignoreAutoRotate(false);
        const obj10 = react_native;
        const result = obj10.unlockAllOrientations();
        const tmp15Result4 = react_native2;
        tmp15Result4.batchUpdates(f96287);
        c8 = false;
      }
    } else if ("PORTRAIT" === LANDSCAPE) {
      if ("PORTRAIT" === orientationLock) {
        const orientationLock2 = obj2.getState().orientationLock;
        const obj12 = PlatformUtils;
        if (!obj12.isAndroid()) {
          const tmp13Result = PlatformUtils;
          if (tmp13Result.isIOS()) {
            const tmp13Result3 = DeviceUtils;
            tmp13Result3.getSystemVersionMajor() >= 16;
          }
        }
        const obj4 = react_native;
        obj4.ignoreAutoRotate(false);
        const obj5 = react_native;
        const result1 = obj5.unlockAllOrientations();
        const tmp13Result4 = react_native2;
        tmp13Result4.batchUpdates(f96287);
        c8 = false;
      }
    }
  }
}
function lockOrientationForiOS(PORTRAIT) {
  const obj = PlatformUtils;
  let isAndroidResult = obj.isAndroid();
  if (!isAndroidResult) {
    const tmpResult = DeviceUtils;
    isAndroidResult = tmpResult.isIpadOS() && null == PORTRAIT;
    const isIpadOSResult = tmpResult.isIpadOS() && null == PORTRAIT;
  }
  if (!isAndroidResult) {
    const obj3 = react_native;
    obj3.ignoreAutoRotate(false);
    c8 = false;
    if ("LANDSCAPE" === PORTRAIT) {
      const tmp6Result = react_native;
      tmp6Result.lockToLandscapeLeft();
      const tmpResult3 = react_native2;
      tmpResult3.batchUpdates(() => {
        obj2.setState({ orientationLock: "LANDSCAPE" });
      });
    } else {
      const tmp6Result2 = react_native;
      tmp6Result2.lockToPortrait();
      const tmpResult4 = react_native2;
      tmpResult4.batchUpdates(() => {
        obj2.setState({ orientationLock: "PORTRAIT" });
      });
    }
  }
}
const AppState = react_native.AppState;
const OrientationType = { PORTRAIT: 0, [0]: "PORTRAIT", LANDSCAPE: 1, [1]: "LANDSCAPE" };
let closure_5 = ["PORTRAIT", "PORTRAITUPSIDEDOWN"];
let obj2 = module_570.create(() => {
  let obj;
  obj = { orientation: obj.PORTRAIT, orientationLock: null };
  return obj;
});
let c7 = null;
let c8 = false;
let react_native3 = react_native3_mod;
let result = react_native3.addOrientationDegreesChangeListener(function handleOrientationDegreesChange(arg0) {
  let str = "PORTRAIT";
  const tmp = arg0 >= 0 && arg0 <= 5 || arg0 >= 355;
  if (tmp !== true) {
    str = "LANDSCAPE-RIGHT";
    const tmp2 = arg0 >= 85 && arg0 <= 95;
    if (tmp2 !== true) {
      str = "PORTRAITUPSIDEDOWN";
      const tmp3 = arg0 >= 175 && arg0 <= 185;
      if (tmp3 !== true) {
        str = "LANDSCAPE-LEFT";
        const tmp4 = arg0 >= 265 && arg0 <= 275;
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
react_native3 = react_native3_mod;
let result1 = react_native3.addOrientationListener(handleOrientationChange);
react_native3 = react_native3_mod;
const result2 = handleOrientationChange(react_native3.getInitialOrientation());
const listener = AppState.addEventListener("change", function applyLockStateOnAppActive(event) {
  const orientationLock = obj2.getState().orientationLock;
  const tmp = "active" === event && null != orientationLock;
  if (tmp) {
    const obj = react_native;
    obj.ignoreAutoRotate(true);
    c8 = false;
    if ("LANDSCAPE" === orientationLock) {
      const tmp3Result = react_native;
      tmp3Result.lockToLandscapeLeft();
      const obj5 = react_native2;
      obj5.batchUpdates(() => {
        obj2.setState({ orientationLock: "LANDSCAPE" });
      });
    } else {
      const tmp3Result2 = react_native;
      tmp3Result2.lockToPortrait();
      const obj3 = react_native2;
      obj3.batchUpdates(() => {
        obj2.setState({ orientationLock: "PORTRAIT" });
      });
    }
  }
});
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
function unlockOrientation(unlockAfterRotatingToPreviousLock) {
  unlockAfterRotatingToPreviousLock = unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock;
  const orientationLock = obj2.getState().orientationLock;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    if (unlockAfterRotatingToPreviousLock) {
      if (null != orientationLock) {
        c8 = true;
      }
    }
  } else {
    const tmpResult = PlatformUtils;
    if (tmpResult.isIOS()) {
      DeviceUtils;
    }
  }
  const obj4 = react_native;
  obj4.ignoreAutoRotate(false);
  const obj5 = react_native;
  const result = obj5.unlockAllOrientations();
  const tmpResult4 = react_native2;
  tmpResult4.batchUpdates(f96287);
}
function lockOrientation(PORTRAIT, flag) {
  const ignoreAutoRotate = react_native.ignoreAutoRotate;
  react_native;
  ignoreAutoRotate(flag);
  c8 = false;
  if ("LANDSCAPE" === PORTRAIT) {
    const tmpResult = react_native;
    tmpResult.lockToLandscapeLeft();
    const obj4 = react_native2;
    obj4.batchUpdates(() => {
      obj2.setState({ orientationLock: "LANDSCAPE" });
    });
  } else {
    const tmpResult2 = react_native;
    tmpResult2.lockToPortrait();
    obj2 = react_native2;
    obj2.batchUpdates(() => {
      obj2.setState({ orientationLock: "PORTRAIT" });
    });
  }
}
let fn = () => obj2().orientation;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return obj2.subscribe(closure_0);
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => obj2.subscribe(closure_0), items);
});
const result4 = size.fileFinishedImporting("modules/device/native/DeviceOrientation.tsx");

export { OrientationType };
export const useStore = obj2;
export { handleOrientationChange };
export { unlockOrientation };
export { lockOrientation };
export { lockOrientationForiOS };
export const getOrientation = function getOrientation() {
  return obj2.getState().orientation;
};
export const getOrientationLock = function getOrientationLock() {
  return obj2.getState().orientationLock;
};
export const useOrientation = fn;
export const useOrientationListener = tmp8;
export const restoreDefaultOrientation = function restoreDefaultOrientation() {
  let state;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    DeviceUtils;
  }
  const orientationLock = obj2.getState().orientationLock;
  const tmpResult5 = PlatformUtils;
  if (!tmpResult5.isAndroid()) {
    const tmpResult6 = PlatformUtils;
    if (tmpResult6.isIOS()) {
      const tmpResult7 = DeviceUtils;
      tmpResult7.getSystemVersionMajor() >= 16;
    }
  }
  const obj6 = react_native;
  obj6.ignoreAutoRotate(false);
  const obj7 = react_native;
  const result = obj7.unlockAllOrientations();
  const tmpResult8 = react_native2;
  tmpResult8.batchUpdates(f96287);
  lockOrientationForiOS();
};