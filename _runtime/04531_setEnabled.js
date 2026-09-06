// === Module 4531: setEnabled ===

// Module 4531 (setEnabled)
import isRingerSilent from "isRingerSilent" /* 4532 */;
import RNHapticFeedbackDefault from "RNHapticFeedback" /* 4533 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

require = arg1;
let closure_4 = { [arg1(4532).HapticFeedbackTypes.impactLight]: 0.3, [arg1(4532).HapticFeedbackTypes.impactMedium]: 0.6, [arg1(4532).HapticFeedbackTypes.impactHeavy]: 0.8, [arg1(4532).HapticFeedbackTypes.rigid]: 1, [arg1(4532).HapticFeedbackTypes.soft]: 0.1, [arg1(4532).HapticFeedbackTypes.selection]: 0.3 };
let closure_5 = { enableVibrateFallback: false, ignoreAndroidSystemSettings: false };
let c6 = true;

export default {
  setEnabled(arg0) {
    closure_6 = arg0;
  },
  isEnabled() {
    return c6;
  },
  trigger() {
    let selection = arg0;
    if (arg0 === undefined) {
      selection = isRingerSilent.HapticFeedbackTypes.selection;
    }
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (c6) {
      try {
        obj = {};
        const merged = Object.assign(closure_5);
        const merged1 = Object.assign(obj);
        RNHapticFeedbackDefault.trigger(selection, obj);
        const obj2 = RNHapticFeedbackDefault;
      } catch (tmp12) {
        const _console = console;
        console.warn("RNReactNativeHapticFeedback: trigger failed \u2013", tmp12);
      }
    }
  },
  stop() {
    if (c6) {
      try {
        RNHapticFeedbackDefault.stop();
        const obj = RNHapticFeedbackDefault;
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
    if (c6) {
      try {
        obj = {};
        const merged = Object.assign(closure_5);
        const merged1 = Object.assign(obj);
        RNHapticFeedbackDefault.triggerPattern(arg0, obj);
        const obj2 = RNHapticFeedbackDefault;
      } catch (tmp11) {
        const _console = console;
        console.warn("RNReactNativeHapticFeedback: triggerPattern failed \u2013", tmp11);
      }
    }
  },
  playAHAP(arg0) {
    if (c6) {
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
      impactMedium = isRingerSilent.HapticFeedbackTypes.impactMedium;
    }
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    if (c6) {
      let num2 = table[impactMedium];
      if (num2 == null) {
        num2 = 0.5;
      }
      const _Math = Math;
      const _Math2 = Math;
      try {
        obj = { time: 0, intensity: null, sharpness: null };
        obj[1] = tmp7;
        obj[2] = num2;
        const items = [obj];
        obj = {};
        const merged = Object.assign(closure_5);
        const merged1 = Object.assign(obj);
        RNHapticFeedbackDefault.triggerPattern(items, obj);
        const obj2 = RNHapticFeedbackDefault;
      } catch (tmp17) {
        const _console = tmp.console;
        _console.warn("RNReactNativeHapticFeedback: impact failed \u2013", tmp17);
      }
    }
  },
  getSystemHapticStatus() {
    return callback(function*() {
      if (c0 === 2) {
        c0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let table = 1;
              let obj3 = v0(table[2]);
              v0 = 2;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.getSystemHapticStatus();
              return obj1;
            }
          } else if (1 === tmp6) {
            table = 0;
            c0 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = { vibrationEnabled: false, ringerMode: null };
            return obj2;
          } else if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 0;
            c0 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            table = 0;
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp9) {
          if (tmp3 === table) {
            c0 = tmp2;
            throw tmp9;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
  }
};