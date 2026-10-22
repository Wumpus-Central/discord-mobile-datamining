// === Module 5204: ? ===

// Module 5204
import _mod19 from "module_19" /* 19 */;
import _modDef5201 from "module_5201" /* 5201 */;

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
      _modDef5201.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5201.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5201).stop();
    },
    isSupported() {
      return closure_1_1(5201).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5205).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5201.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5201.setEnabled,
    isEnabled: _modDef5201.isEnabled,
    getSystemHapticStatus: _modDef5201.getSystemHapticStatus,
    playAHAP: _modDef5201.playAHAP
  }), items);
};