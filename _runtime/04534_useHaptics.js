// === Module 4534: useHaptics ===

// Module 4534 (useHaptics)
import noop from "noop" /* 19 */;

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
      let obj = closure_1_1(closure_1_2[1]);
      obj = {};
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(arg1);
      obj.trigger(arg0, obj);
    },
    triggerPattern(arg0, arg1) {
      let obj = closure_1_1(closure_1_2[1]);
      obj = {};
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(arg1);
      obj.triggerPattern(arg0, obj);
    },
    stop() {
      callback(4531).stop();
    },
    isSupported() {
      return callback(4531).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      let obj = closure_1_0(closure_1_2[2]);
      obj = {};
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(arg2);
      return obj.playHaptic(arg0, arg1, obj);
    },
    impact(arg0, arg1, arg2) {
      let obj = closure_1_1(closure_1_2[1]);
      obj = {};
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(arg2);
      obj.impact(arg0, arg1, obj);
    },
    setEnabled: closure_1_1(closure_1_2[1]).setEnabled,
    isEnabled: closure_1_1(closure_1_2[1]).isEnabled,
    getSystemHapticStatus: closure_1_1(closure_1_2[1]).getSystemHapticStatus,
    playAHAP: closure_1_1(closure_1_2[1]).playAHAP
  }), items);
};