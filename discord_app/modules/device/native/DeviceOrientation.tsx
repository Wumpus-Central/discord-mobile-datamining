// discord_app/modules/device/native/DeviceOrientation.tsx
import noop from "noop";
import { AppState } from "get ActivityIndicator";
import keys from "keys";
import importDefaultResult from "get ActivityIndicator";
import importDefaultResult1 from "get ActivityIndicator";
import importDefaultResult2 from "get ActivityIndicator";
import { batchUpdates } from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";

const require = arg1;
function handleOrientationChange(initialOrientation) {
  const obj = set;
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
        let tmpResult = tmp(705);
        tmpResult.batchUpdates(() => store.setState({ orientation: constants.LANDSCAPE }));
      }
    }
    let tmp9 = "PORTRAIT" === closure_7;
    if (!tmp9) {
      tmpResult = tmp(4322);
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
      tmp(705).batchUpdates(() => store.setState({ orientation: constants.PORTRAIT }));
      const tmpResult1 = tmp(705);
    }
    const tmp7 = closure_7;
  }
}
function handleDeviceOrientationChange(LANDSCAPE) {
  const orientationLock = obj.getState().orientationLock;
  if (c8) {
    if ("LANDSCAPE" === LANDSCAPE) {
      if ("LANDSCAPE" === orientationLock) {
        const orientationLock3 = obj.getState().orientationLock;
        if (!obj13.isAndroid()) {
          let tmp14Result = tmp14(500);
          if (tmp14Result.isIOS()) {
            tmp14Result = tmp14(4322);
            tmp14Result.getSystemVersionMajor() >= 16;
          }
        }
        obj13 = set;
        require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */.ignoreAutoRotate(false);
        const obj9 = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */;
        const result = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */.unlockAllOrientations();
        const obj10 = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */;
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
          let tmp12Result = tmp12(500);
          if (tmp12Result.isIOS()) {
            tmp12Result = tmp12(4322);
            tmp12Result.getSystemVersionMajor() >= 16;
          }
        }
        obj12 = set;
        require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */.ignoreAutoRotate(false);
        const obj4 = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */;
        const result1 = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */.unlockAllOrientations();
        const obj5 = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */;
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
  let isAndroidResult = set.isAndroid();
  if (!isAndroidResult) {
    let tmpResult = tmp(4322);
    let isIpadOSResult = tmpResult.isIpadOS();
    if (isIpadOSResult) {
      isIpadOSResult = null == PORTRAIT;
    }
    isAndroidResult = isIpadOSResult;
  }
  if (!isAndroidResult) {
    require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */.ignoreAutoRotate(false);
    let c8 = false;
    if ("LANDSCAPE" === PORTRAIT) {
      let tmp6Result = tmp6(8945);
      tmp6Result.lockToLandscapeLeft();
      tmpResult = tmp(705);
      tmpResult.batchUpdates(() => {
        store.setState({ orientationLock: "LANDSCAPE" });
      });
    } else {
      tmp6Result = tmp6(8945);
      tmp6Result.lockToPortrait();
      tmp(705).batchUpdates(() => {
        store.setState({ orientationLock: "PORTRAIT" });
      });
      const tmpResult1 = tmp(705);
    }
    const obj3 = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */;
  }
}
let obj = { PORTRAIT: 0, [0]: "PORTRAIT", LANDSCAPE: 1, [1]: "LANDSCAPE" };
let closure_5 = ["PORTRAIT", "PORTRAITUPSIDEDOWN"];
obj = keys.create(() => {
  obj = { orientation: obj.PORTRAIT, orientationLock: null };
  return obj;
});
let c7 = null;
let c8 = false;
let result = require("get ActivityIndicator").addOrientationDegreesChangeListener(function handleOrientationDegreesChange(arg0) {
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
let result1 = require("get ActivityIndicator").addOrientationListener(handleOrientationChange);
const result2 = handleOrientationChange(require("get ActivityIndicator").getInitialOrientation());
const listener = AppState.addEventListener("change", function applyLockStateOnAppActive(arg0) {
  const orientationLock = obj.getState().orientationLock;
  let tmp = "active" === arg0;
  if (tmp) {
    tmp = null != orientationLock;
  }
  if (tmp) {
    obj = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */;
    obj.ignoreAutoRotate(true);
    let c8 = false;
    if ("LANDSCAPE" === orientationLock) {
      let tmp3Result = tmp3(8945);
      tmp3Result.lockToLandscapeLeft();
      batchUpdates.batchUpdates(() => {
        store.setState({ orientationLock: "LANDSCAPE" });
      });
      const obj5 = batchUpdates;
    } else {
      tmp3Result = tmp3(8945);
      tmp3Result.lockToPortrait();
      batchUpdates.batchUpdates(() => {
        store.setState({ orientationLock: "PORTRAIT" });
      });
      const obj3 = batchUpdates;
    }
  }
});
const result3 = require("keys").fileFinishedImporting("modules/device/native/DeviceOrientation.tsx");

export const OrientationType = obj;
export const useStore = obj;
export { handleOrientationChange };
export const unlockOrientation = function unlockOrientation(unlockAfterRotatingToPreviousLock) {
  const obj = set;
  if (obj.isAndroid()) {
    if (unlockAfterRotatingToPreviousLock.unlockAfterRotatingToPreviousLock) {
      if (null != obj.getState().orientationLock) {
        let c8 = true;
      }
    }
  } else {
    let tmpResult = tmp(500);
    if (tmpResult.isIOS()) {
      tmpResult = tmp(4322);
    }
  }
  require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */.ignoreAutoRotate(false);
  const obj4 = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */;
  const result = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */.unlockAllOrientations();
  const obj5 = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */;
  batchUpdates.batchUpdates(() => {
    state.setState({ orientationLock: null });
  });
};
export const lockOrientation = function lockOrientation(PORTRAIT, flag) {
  if (flag == null) {
    flag = false;
  }
  require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */.ignoreAutoRotate(flag);
  let c8 = false;
  if ("LANDSCAPE" === PORTRAIT) {
    let tmpResult = tmp(8945);
    tmpResult.lockToLandscapeLeft();
    batchUpdates.batchUpdates(() => {
      store.setState({ orientationLock: "LANDSCAPE" });
    });
    const obj5 = batchUpdates;
  } else {
    tmpResult = tmp(8945);
    tmpResult.lockToPortrait();
    batchUpdates.batchUpdates(() => {
      store.setState({ orientationLock: "PORTRAIT" });
    });
    const obj3 = batchUpdates;
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
  let closure_0 = callback2;
  const items = [callback2];
  const effect = React.useEffect(() => outer1_6.subscribe(closure_0), items);
};
export const restoreDefaultOrientation = function restoreDefaultOrientation() {
  const obj = set;
  if (obj.isIOS()) {
    let tmpResult = tmp(4322);
  }
  const orientationLock = obj.getState().orientationLock;
  tmpResult = tmp(500);
  if (!tmpResult.isAndroid()) {
    if (tmpResult1.isIOS()) {
      tmp(4322).getSystemVersionMajor() >= 16;
      const tmpResult2 = tmp(4322);
    }
    tmpResult1 = tmp(500);
  }
  require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */.ignoreAutoRotate(false);
  const obj6 = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */;
  const result = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */.unlockAllOrientations();
  const obj7 = require("../../../../_runtime/08945_get_ActivityIndicator.js") /* get ActivityIndicator */;
  batchUpdates.batchUpdates(() => {
    state.setState({ orientationLock: null });
  });
  lockOrientationForiOS();
};