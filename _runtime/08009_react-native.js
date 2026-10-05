// _runtime/08009_react-native.js
import react_native from "00017_react-native.js";

const Orientation = react_native.NativeModules.Orientation;
const Platform = react_native.Platform;
const DeviceEventEmitter = react_native.DeviceEventEmitter;
let closure_2 = {};
let c3 = 0;
const __listener_id = "__listener_id";
let obj = {
  getOrientation(arg0) {
    let closure_0 = arg0;
    const orientation = Orientation.getOrientation((arg0, arg1) => {
      closure_0(arg0, arg1);
    });
  },
  getSpecificOrientation(arg0) {
    let closure_0 = arg0;
    const specificOrientation = Orientation.getSpecificOrientation((arg0, arg1) => {
      closure_0(arg0, arg1);
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
    let str;
    let closure_0 = handleOrientationChange;
    if (handleOrientationChange.hasOwnProperty(__listener_id)) {
      str = handleOrientationChange[__listener_id];
    } else {
      const _Object = Object;
      str = "F";
      if (Object.isExtensible(handleOrientationChange)) {
        const _Object2 = Object;
        const sum = c3 + 1;
        c3 = sum;
        const obj = { value: `L${tmp4}` };
        Object.defineProperty(handleOrientationChange, __listener_id, obj);
      }
    }
    closure_2[str] = DeviceEventEmitter.addListener("orientationDidChange", (orientation) => {
      closure_0(orientation.orientation);
    });
  },
  addOrientationDegreesChangeListener(arg0) {
    let str;
    let closure_0 = arg0;
    if (arg0.hasOwnProperty(__listener_id)) {
      str = arg0[__listener_id];
    } else {
      const _Object = Object;
      str = "F";
      if (Object.isExtensible(arg0)) {
        const _Object2 = Object;
        const sum = c3 + 1;
        c3 = sum;
        const obj = { value: `L${tmp4}` };
        Object.defineProperty(arg0, __listener_id, obj);
      }
    }
    closure_2[str] = DeviceEventEmitter.addListener("orientationDegreesDidChange", (orientationDegrees) => {
      closure_0(orientationDegrees.orientationDegrees);
    });
  },
  removeOrientationListener(arg0) {
    let str;
    if (arg0.hasOwnProperty(__listener_id)) {
      str = arg0[__listener_id];
    } else {
      const _Object = Object;
      str = "F";
      if (Object.isExtensible(arg0)) {
        const _Object2 = Object;
        const sum = c3 + 1;
        c3 = sum;
        const obj = { value: `L${tmp4}` };
        Object.defineProperty(arg0, __listener_id, obj);
      }
    }
    if (closure_2[str]) {
      const obj2 = closure_2[str];
      obj2.remove();
      closure_2[str] = null;
    }
  },
  addSpecificOrientationListener(arg0) {
    let str;
    let closure_0 = arg0;
    if (arg0.hasOwnProperty(__listener_id)) {
      str = arg0[__listener_id];
    } else {
      const _Object = Object;
      str = "F";
      if (Object.isExtensible(arg0)) {
        const _Object2 = Object;
        const sum = c3 + 1;
        c3 = sum;
        const obj = { value: `L${tmp4}` };
        Object.defineProperty(arg0, __listener_id, obj);
      }
    }
    closure_2[str] = DeviceEventEmitter.addListener("specificOrientationDidChange", (specificOrientation) => {
      closure_0(specificOrientation.specificOrientation);
    });
  },
  removeSpecificOrientationListener(arg0) {
    let str;
    if (arg0.hasOwnProperty(__listener_id)) {
      str = arg0[__listener_id];
    } else {
      const _Object = Object;
      str = "F";
      if (Object.isExtensible(arg0)) {
        const _Object2 = Object;
        const sum = c3 + 1;
        c3 = sum;
        const obj = { value: `L${tmp4}` };
        Object.defineProperty(arg0, __listener_id, obj);
      }
    }
    if (closure_2[str]) {
      const obj2 = closure_2[str];
      obj2.remove();
      closure_2[str] = null;
    }
  },
  getInitialOrientation() {
    return Orientation.initialOrientation;
  },
};

export default obj;
