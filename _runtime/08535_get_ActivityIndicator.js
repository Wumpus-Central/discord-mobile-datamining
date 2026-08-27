// === Module 8535: get ActivityIndicator ===

// Module 8535 (get ActivityIndicator)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

let Orientation = get_ActivityIndicator.NativeModules.Orientation;
const Platform = get_ActivityIndicator.Platform;
const DeviceEventEmitter = get_ActivityIndicator.DeviceEventEmitter;
let closure_2 = {};
let c3 = 0;
const __listener_id = "__listener_id";

export default {
  getOrientation(arg0) {
    Orientation = arg0;
    const orientation = Orientation.getOrientation((arg0, arg1) => {
      callback(arg0, arg1);
    });
  },
  getSpecificOrientation(arg0) {
    Orientation = arg0;
    const specificOrientation = Orientation.getSpecificOrientation((arg0, arg1) => {
      callback(arg0, arg1);
    });
  },
  ignoreAutoRotate(flag) {
    Orientation.ignoreAutoRotate(flag);
  },
  lockToPortrait() {
    Orientation.lockToPortrait();
  },
  lockToLandscape() {
    Orientation.lockToLandscape();
  },
  lockToLandscapeRight() {
    Orientation.lockToLandscapeRight();
  },
  lockToLandscapeLeft() {
    Orientation.lockToLandscapeLeft();
  },
  unlockAllOrientations() {
    const result = Orientation.unlockAllOrientations();
  },
  addOrientationListener(handleOrientationChange) {
    closure_0 = handleOrientationChange;
    if (handleOrientationChange.hasOwnProperty(__listener_id)) {
      let str = handleOrientationChange[tmp];
    } else {
      const _Object = Object;
      str = "F";
      if (Object.isExtensible(handleOrientationChange)) {
        const _Object2 = Object;
        const obj = { value: null };
        const sum = c3 + 1;
        c3 = sum;
        obj[0] = `L${tmp4}`;
        Object.defineProperty(handleOrientationChange, tmp, obj);
      }
    }
    closure_2[str] = DeviceEventEmitter.addListener("orientationDidChange", (orientation) => {
      handleOrientationChange(orientation.orientation);
    });
  },
  addOrientationDegreesChangeListener(arg0) {
    closure_0 = arg0;
    if (arg0.hasOwnProperty(__listener_id)) {
      let str = arg0[tmp];
    } else {
      const _Object = Object;
      str = "F";
      if (Object.isExtensible(arg0)) {
        const _Object2 = Object;
        const obj = { value: null };
        const sum = c3 + 1;
        c3 = sum;
        obj[0] = `L${tmp4}`;
        Object.defineProperty(arg0, tmp, obj);
      }
    }
    closure_2[str] = DeviceEventEmitter.addListener("orientationDegreesDidChange", (orientationDegrees) => {
      callback(orientationDegrees.orientationDegrees);
    });
  },
  removeOrientationListener(arg0) {
    if (arg0.hasOwnProperty(__listener_id)) {
      let str = arg0[tmp];
    } else {
      const _Object = Object;
      str = "F";
      if (Object.isExtensible(arg0)) {
        const _Object2 = Object;
        const obj = { value: null };
        const sum = c3 + 1;
        c3 = sum;
        obj[0] = `L${tmp4}`;
        Object.defineProperty(arg0, tmp, obj);
      }
    }
    if (dependencyMap[str]) {
      tmp6[str].remove();
      tmp6[str] = null;
      const obj2 = tmp6[str];
    }
  },
  addSpecificOrientationListener(arg0) {
    closure_0 = arg0;
    if (arg0.hasOwnProperty(__listener_id)) {
      let str = arg0[tmp];
    } else {
      const _Object = Object;
      str = "F";
      if (Object.isExtensible(arg0)) {
        const _Object2 = Object;
        const obj = { value: null };
        const sum = c3 + 1;
        c3 = sum;
        obj[0] = `L${tmp4}`;
        Object.defineProperty(arg0, tmp, obj);
      }
    }
    closure_2[str] = DeviceEventEmitter.addListener("specificOrientationDidChange", (specificOrientation) => {
      callback(specificOrientation.specificOrientation);
    });
  },
  removeSpecificOrientationListener(arg0) {
    if (arg0.hasOwnProperty(__listener_id)) {
      let str = arg0[tmp];
    } else {
      const _Object = Object;
      str = "F";
      if (Object.isExtensible(arg0)) {
        const _Object2 = Object;
        const obj = { value: null };
        const sum = c3 + 1;
        c3 = sum;
        obj[0] = `L${tmp4}`;
        Object.defineProperty(arg0, tmp, obj);
      }
    }
    if (dependencyMap[str]) {
      tmp6[str].remove();
      tmp6[str] = null;
      const obj2 = tmp6[str];
    }
  },
  getInitialOrientation() {
    return Orientation.initialOrientation;
  }
};