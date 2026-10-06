// _runtime/metro/04864__.js
import HapticFeedbackTypes from "../04865_HapticFeedbackTypes.js";
import react_nativeDefault from "../04866_react-native.js";
import _asyncToGenerator from "00005__asyncToGenerator.js";

let c0, c1;

let closure_4 = {
  [HapticFeedbackTypes.HapticFeedbackTypes.impactLight]: 0.3,
  [HapticFeedbackTypes.HapticFeedbackTypes.impactMedium]: 0.6,
  [HapticFeedbackTypes.HapticFeedbackTypes.impactHeavy]: 0.8,
  [HapticFeedbackTypes.HapticFeedbackTypes.rigid]: 1,
  [HapticFeedbackTypes.HapticFeedbackTypes.soft]: 0.1,
  [HapticFeedbackTypes.HapticFeedbackTypes.selection]: 0.3,
};
let closure_5 = { enableVibrateFallback: false, ignoreAndroidSystemSettings: false };
let c6 = true;

export default {
  setEnabled(arg0) {
    c6 = arg0;
  },
  isEnabled() {
    return c6;
  },
  trigger() {
    let selection = arg0;
    if (arg0 === undefined) {
      selection = HapticFeedbackTypes.HapticFeedbackTypes.selection;
    }
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (c6) {
      try {
        const obj2 = {};
        const trigger = react_nativeDefault.trigger;
        react_nativeDefault;
        const merged = Object.assign(closure_5);
        const merged1 = Object.assign(obj);
        trigger(selection, obj2);
      } catch (tmp14) {
        const _console = console;
        console.warn("RNReactNativeHapticFeedback: trigger failed \u2013", tmp14);
      }
    }
  },
  stop() {
    if (c6) {
      try {
        const obj = react_nativeDefault;
        obj.stop();
      } catch (tmp5) {
        const _console = console;
        console.warn("RNReactNativeHapticFeedback: stop failed \u2013", tmp5);
      }
    }
  },
  isSupported() {
    try {
      const obj = react_nativeDefault;
      return obj.isSupported();
    } catch (err) {
      return false;
    }
  },
  triggerPattern(arg0) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (c6) {
      try {
        const obj2 = {};
        const triggerPattern = react_nativeDefault.triggerPattern;
        react_nativeDefault;
        const merged = Object.assign(closure_5);
        const merged1 = Object.assign(obj);
        triggerPattern(arg0, obj2);
      } catch (tmp13) {
        const _console = console;
        console.warn("RNReactNativeHapticFeedback: triggerPattern failed \u2013", tmp13);
      }
    }
  },
  playAHAP(arg0) {
    if (c6) {
      try {
        const obj = react_nativeDefault;
        return obj.playAHAP(arg0);
      } catch (err) {
        return Promise.resolve();
      }
    } else {
      return Promise.resolve();
    }
  },
  impact() {
    let impactMedium = arg0;
    if (arg0 === undefined) {
      impactMedium = HapticFeedbackTypes.HapticFeedbackTypes.impactMedium;
    }
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    if (c6) {
      let num2 = closure_4[impactMedium];
      if (num2 == null) {
        num2 = 0.5;
      }
      const _Math = Math;
      const _Math2 = Math;
      try {
        const items = [{ time: 0, intensity: tmp7, sharpness: num2 }];
        const obj2 = { time: 0, intensity: tmp7, sharpness: num2 };
        const obj3 = {};
        const triggerPattern = react_nativeDefault.triggerPattern;
        react_nativeDefault;
        const merged = Object.assign(closure_5);
        const merged1 = Object.assign(obj);
        triggerPattern(items, obj3);
      } catch (tmp18) {
        const _console = console;
        console.warn("RNReactNativeHapticFeedback: impact failed \u2013", tmp18);
      }
    }
  },
  getSystemHapticStatus() {
    return (async () => {
      let obj4;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c2;
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c2 = 1;
              c1 = 2;
              c0 = 1;
              const obj5 = { value: obj4.getSystemHapticStatus(), done: false };
              obj4 = react_nativeDefault;
              return obj5;
            }
          } else if (1 === tmp3) {
            c2 = 0;
            c0 = 3;
            const obj6 = { value: { vibrationEnabled: false, ringerMode: null }, done: true };
            return obj6;
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c0 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c2 = 0;
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp6) {
          if (0 === c2) {
            c0 = 3;
            throw tmp6;
          } else {
            c1 = 1;
          }
        }
      }
    })();
  },
};
