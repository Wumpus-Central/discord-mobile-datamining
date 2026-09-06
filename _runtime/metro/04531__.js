// _runtime/metro/04531__.js
import HapticFeedbackTypes from "../04532_HapticFeedbackTypes.js";
import RNHapticFeedbackDefault from "../04533_RNHapticFeedback.js";
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";

require = arg1;
let closure_4 = {
  [arg1(4532).HapticFeedbackTypes.impactLight]: 0.3,
  [arg1(4532).HapticFeedbackTypes.impactMedium]: 0.6,
  [arg1(4532).HapticFeedbackTypes.impactHeavy]: 0.8,
  [arg1(4532).HapticFeedbackTypes.rigid]: 1,
  [arg1(4532).HapticFeedbackTypes.soft]: 0.1,
  [arg1(4532).HapticFeedbackTypes.selection]: 0.3,
};
let closure_5 = { enableVibrateFallback: false, ignoreAndroidSystemSettings: false };
let global = true;

export default {
  setEnabled(arg0) {
    global = arg0;
  },
  isEnabled() {
    return global;
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
    if (global) {
      try {
        obj = {};
        const merged = Object.assign(closure_5);
        const merged1 = Object.assign(obj);
        RNHapticFeedbackDefault.trigger(selection, obj);
      } catch (tmp12) {
        const _console = console;
        console.warn("RNReactNativeHapticFeedback: trigger failed \u2013", tmp12);
      }
    }
  },
  stop() {
    if (global) {
      try {
        RNHapticFeedbackDefault.stop();
      } catch (tmp4) {
        const _console = console;
        console.warn("RNReactNativeHapticFeedback: stop failed \u2013", tmp4);
      }
    }
  },
  isSupported() {
    try {
      return RNHapticFeedbackDefault.isSupported();
    } catch (err) {
      return false;
    }
  },
  triggerPattern(arg0) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (global) {
      try {
        obj = {};
        const merged = Object.assign(closure_5);
        const merged1 = Object.assign(obj);
        RNHapticFeedbackDefault.triggerPattern(arg0, obj);
      } catch (tmp11) {
        const _console = console;
        console.warn("RNReactNativeHapticFeedback: triggerPattern failed \u2013", tmp11);
      }
    }
  },
  playAHAP(arg0) {
    if (global) {
      try {
        return RNHapticFeedbackDefault.playAHAP(arg0);
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
    if (global) {
      let num2 = closure_4[impactMedium];
      if (num2 == null) {
        num2 = 0.5;
      }
      const _Math = Math;
      const _Math2 = Math;
      try {
        obj = { time: 0, intensity: tmp7, sharpness: num2 };
        const items = [obj];
        obj = {};
        const merged = Object.assign(closure_5);
        const merged1 = Object.assign(obj);
        RNHapticFeedbackDefault.triggerPattern(items, obj);
      } catch (tmp17) {
        const _console = tmp.console;
        _console.warn("RNReactNativeHapticFeedback: impact failed \u2013", tmp17);
      }
    }
  },
  getSystemHapticStatus() {
    return (async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c2 = 1;
              let obj3 = RNHapticFeedbackDefault;
              c1 = 2;
              c0 = 1;
              const obj1 = { value: obj3.getSystemHapticStatus(), done: false };
              return obj1;
            }
          } else if (1 === tmp6) {
            c2 = 0;
            c0 = 3;
            const obj2 = { value: { vibrationEnabled: false, ringerMode: null }, done: true };
            return obj2;
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c0 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            c2 = 0;
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp9) {
          if (tmp3 === c2) {
            c0 = tmp2;
            throw tmp9;
          } else {
            c1 = tmp;
          }
        }
      }
    })();
  },
};
