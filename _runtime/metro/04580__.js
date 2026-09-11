// === Module 4580: ? ===

// Module 4580
import _mod19 from "module_19" /* 19 */;
import _modDef4577 from "module_4577" /* 4577 */;

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
      closure_1_1(4577).stop();
    },
    isSupported() {
      return closure_1_1(4577).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      closure_0(4581);
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
    setEnabled: _modDef4577.setEnabled,
    isEnabled: _modDef4577.isEnabled,
    getSystemHapticStatus: _modDef4577.getSystemHapticStatus,
    playAHAP: _modDef4577.playAHAP
  }), items);
};