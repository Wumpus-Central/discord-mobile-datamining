// === Module 4349: useHaptics ===

// Module 4349 (useHaptics)
import noop from "noop" /* 19 */;
import setEnabledDefault from "setEnabled" /* 4346 */;

const useMemo = noop.useMemo;

export const useHaptics = function useHaptics(enableVibrateFallback) {
  closure_0 = enableVibrateFallback;
  let prop;
  if (enableVibrateFallback != null) {
    prop = enableVibrateFallback.enableVibrateFallback;
  }
  let prop1;
  if (enableVibrateFallback != null) {
    prop1 = enableVibrateFallback.ignoreAndroidSystemSettings;
  }
  const items = [prop, prop1];
  return useMemo(() => ({
    trigger(arg0, arg1) {
      closure_1_1(closure_1_2[1]);
      const obj = {};
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(arg1);
      obj.trigger(arg0, obj);
    },
    triggerPattern(arg0, arg1) {
      closure_1_1(closure_1_2[1]);
      const obj = {};
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(arg1);
      obj.triggerPattern(arg0, obj);
    },
    stop() {
      callback(4346).stop();
    },
    isSupported() {
      return callback(4346).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      enableVibrateFallback(closure_1_2[2]);
      const obj = {};
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(arg2);
      return obj.playHaptic(arg0, arg1, obj);
    },
    impact(arg0, arg1, arg2) {
      closure_1_1(closure_1_2[1]);
      const obj = {};
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(arg2);
      obj.impact(arg0, arg1, obj);
    },
    setEnabled: setEnabledDefault.setEnabled,
    isEnabled: setEnabledDefault.isEnabled,
    getSystemHapticStatus: setEnabledDefault.getSystemHapticStatus,
    playAHAP: setEnabledDefault.playAHAP
  }), items);
};