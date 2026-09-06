// === Module 4534: ? ===

// Module 4534
import _mod19 from "module_19" /* 19 */;
import _modDef4531 from "module_4531" /* 4531 */;

const useMemo = _mod19.useMemo;

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
      const obj = {};
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      obj.trigger(arg0, obj);
    },
    triggerPattern(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      obj.triggerPattern(arg0, obj);
    },
    stop() {
      closure_1_1(4531).stop();
    },
    isSupported() {
      return closure_1_1(4531).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      closure_0(4535);
      const obj = {};
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return obj.playHaptic(arg0, arg1, obj);
    },
    impact(arg0, arg1, arg2) {
      const obj = {};
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      obj.impact(arg0, arg1, obj);
    },
    setEnabled: _modDef4531.setEnabled,
    isEnabled: _modDef4531.isEnabled,
    getSystemHapticStatus: _modDef4531.getSystemHapticStatus,
    playAHAP: _modDef4531.playAHAP
  }), items);
};