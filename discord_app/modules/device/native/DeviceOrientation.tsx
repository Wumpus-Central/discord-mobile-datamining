// === Module 8671: handleOrientationChange ===

// Module 8671 (handleOrientationChange)
import obj132 from "obj132" /* 500 */;
import batchUpdates from "batchUpdates" /* 705 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;
import noop from "noop" /* 19 */;
import { AppState } from "get ActivityIndicator" /* 17 */;
import keys from "keys" /* 644 */;
import importDefaultResult from "get ActivityIndicator" /* 8672 */;

require = fn;
function handleOrientationChange(initialOrientation) {
  obj = obj132;
  if (obj.isIOS()) {
    handleDeviceOrientationChange(initialOrientation);
  }
  if (closure_7 !== initialOrientation) {
    closure_7 = initialOrientation;
    const orientationLock = obj.getState().orientationLock;
    let hasItem = null != orientationLock;
    if (hasItem) {
      hasItem = closure_5.includes(orientationLock);
    }
    if ("LANDSCAPE" === closure_7) {
      if (!hasItem) {
        let tmpResult = batchUpdates;
        tmpResult.batchUpdates(() => store.setState({ orientation: constants.LANDSCAPE }));
      }
    }
    let tmp9 = "PORTRAIT" === closure_7;
    if (!tmp9) {
      tmpResult = DCDDeviceManager;
      let isIpadOSResult = tmpResult.isIpadOS();
      if (isIpadOSResult) {
        isIpadOSResult = "PORTRAITUPSIDEDOWN" === closure_7;
      }
      tmp9 = isIpadOSResult;
    }
    if (tmp9) {
      tmp9 = "LANDSCAPE" !== orientationLock;
    }
    if (tmp9) {
      batchUpdates.batchUpdates(() => store.setState({ orientation: constants.PORTRAIT }));
      const tmpResult1 = batchUpdates;
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
          let tmp14Result = obj132;
          if (tmp14Result.isIOS()) {
            tmp14Result = DCDDeviceManager;
            tmp14Result.getSystemVersionMajor() >= 16;
          }
        }
        obj13 = obj132;
        importDefaultResult.ignoreAutoRotate(false);
        const result = importDefaultResult.unlockAllOrientations();
        batchUpdates.batchUpdates(() => {
          state.setState({ orientationLock: null });
        });
        c8 = false;
        const tmp14Result1 = batchUpdates;
      }
    } else if ("PORTRAIT" === LANDSCAPE) {
      if ("PORTRAIT" === orientationLock) {
        const orientationLock2 = obj.getState().orientationLock;
        if (!obj12.isAndroid()) {
          let tmp12Result = obj132;
          if (tmp12Result.isIOS()) {
            tmp12Result = DCDDeviceManager;
            tmp12Result.getSystemVersionMajor() >= 16;
          }
        }
        obj12 = obj132;
        importDefaultResult.ignoreAutoRotate(false);
        const result1 = importDefaultResult.unlockAllOrientations();
        batchUpdates.batchUpdates(() => {
          state.setState({ orientationLock: null });
        });
        c8 = false;
        const tmp12Result1 = batchUpdates;
      }
    }
  }
}
function lockOrientationForiOS(PORTRAIT) {
  let isAndroidResult = obj132.isAndroid();
  if (!isAndroidResult) {
    let tmpResult = DCDDeviceManager;
    let isIpadOSResult = tmpResult.isIpadOS();
    if (isIpadOSResult) {
      isIpadOSResult = null == PORTRAIT;
    }
    isAndroidResult = isIpadOSResult;
  }
  if (!isAndroidResult) {
    importDefaultResult.ignoreAutoRotate(false);
    c8 = false;
    if ("LANDSCAPE" === PORTRAIT) {
      let tmp6Result = importDefaultResult;
      tmp6Result.lockToLandscapeLeft();
      tmpResult = batchUpdates;
      tmpResult.batchUpdates(() => {
        store.setState({ orientationLock: "LANDSCAPE" });
      });
    } else {
      tmp6Result = importDefaultResult;
      tmp6Result.lockToPortrait();
      batchUpdates.batchUpdates(() => {
        store.setState({ orientationLock: "PORTRAIT" });
      });
      const tmpResult1 = batchUpdates;
    }
  }
}
let closure_5 = ["PORTRAIT", "PORTRAITUPSIDEDOWN"];
let obj = keys.create(() => {
  obj = { orientation: obj.PORTRAIT, orientationLock: null };
  return obj;
});
let c7 = null;
let c8 = false;
let result = importDefaultResult.addOrientationDegreesChangeListener(function handleOrientationDegreesChange(arg0) {
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
let result1 = importDefaultResult.addOrientationListener(handleOrientationChange);
const importDefaultResult1 = importDefaultResult;
const result2 = handleOrientationChange(importDefaultResult.getInitialOrientation());
const listener = AppState.addEventListener("change", function applyLockStateOnAppActive(event) {
  const orientationLock = obj.getState().orientationLock;
  let tmp = "active" === event;
  if (tmp) {
    tmp = null != orientationLock;
  }
  if (tmp) {
    obj = importDefaultResult;
    obj.ignoreAutoRotate(true);
    c8 = false;
    if ("LANDSCAPE" === orientationLock) {
      let tmp3Result = importDefaultResult;
      tmp3Result.lockToLandscapeLeft();
      batchUpdates.batchUpdates(() => {
        store.setState({ orientationLock: "LANDSCAPE" });
      });
    } else {
      tmp3Result = importDefaultResult;
      tmp3Result.lockToPortrait();
      batchUpdates.batchUpdates(() => {
        store.setState({ orientationLock: "PORTRAIT" });
      });
    }
  }
});
const importDefaultResult2 = importDefaultResult;
const result3 = require("obj132").fileFinishedImporting("modules/device/native/DeviceOrientation.tsx");

export const OrientationType = obj;
export const useStore = obj;
export { handleOrientationChange };
export const unlockOrientation = function unlockOrientation(unlockAfterRotatingToPreviousLock) {
  obj = obj132;
  if (obj.isAndroid()) {
    if (unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock) {
      if (null != obj.getState().orientationLock) {
        c8 = true;
      }
    }
  } else {
    let tmpResult = obj132;
    if (tmpResult.isIOS()) {
      tmpResult = DCDDeviceManager;
    }
  }
  importDefaultResult.ignoreAutoRotate(false);
  const result = importDefaultResult.unlockAllOrientations();
  batchUpdates.batchUpdates(() => {
    state.setState({ orientationLock: null });
  });
  const tmpResult1 = batchUpdates;
};
export const lockOrientation = function lockOrientation(PORTRAIT, flag) {
  if (flag == null) {
    flag = false;
  }
  importDefaultResult.ignoreAutoRotate(flag);
  c8 = false;
  if ("LANDSCAPE" === PORTRAIT) {
    let tmpResult = importDefaultResult;
    tmpResult.lockToLandscapeLeft();
    batchUpdates.batchUpdates(() => {
      store.setState({ orientationLock: "LANDSCAPE" });
    });
  } else {
    tmpResult = importDefaultResult;
    tmpResult.lockToPortrait();
    batchUpdates.batchUpdates(() => {
      store.setState({ orientationLock: "PORTRAIT" });
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
  const effect = React.useEffect(() => obj.subscribe(closure_0), items);
};
export const restoreDefaultOrientation = function restoreDefaultOrientation() {
  obj = obj132;
  if (obj.isIOS()) {
    let tmpResult = DCDDeviceManager;
  }
  const orientationLock = obj.getState().orientationLock;
  tmpResult = obj132;
  if (!tmpResult.isAndroid()) {
    if (tmpResult1.isIOS()) {
      DCDDeviceManager.getSystemVersionMajor() >= 16;
      const tmpResult2 = DCDDeviceManager;
    }
    tmpResult1 = obj132;
  }
  importDefaultResult.ignoreAutoRotate(false);
  const result = importDefaultResult.unlockAllOrientations();
  batchUpdates.batchUpdates(() => {
    state.setState({ orientationLock: null });
  });
  lockOrientationForiOS();
  const tmpResult3 = batchUpdates;
};