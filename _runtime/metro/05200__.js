// === Module 5200: ? ===

// Module 5200
import _mod19 from "module_19" /* 19 */;
import _modDef5197 from "module_5197" /* 5197 */;

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
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5197.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5197.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5197).stop();
    },
    isSupported() {
      return closure_1_1(5197).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5201).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5197.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5197.setEnabled,
    isEnabled: _modDef5197.isEnabled,
    getSystemHapticStatus: _modDef5197.getSystemHapticStatus,
    playAHAP: _modDef5197.playAHAP
  }), items);
};