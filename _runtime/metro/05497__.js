// === Module 5497: ? ===

// Module 5497
import _mod19 from "module_19" /* 19 */;
import _modDef5494 from "module_5494" /* 5494 */;

const useMemo = _mod19.useMemo;

export function useHaptics(enableVibrateFallback) {
  closure_0 = enableVibrateFallback;
  let prop;
  if (enableVibrateFallback != null) {
    prop = enableVibrateFallback.enableVibrateFallback;
  }
  let prop1;
  if (enableVibrateFallback != null) {
    prop1 = enableVibrateFallback.ignoreAndroidSystemSettings;
  }
  items = [prop, prop1];
  return useMemo(() => ({
    trigger(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5494.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5494.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5494).stop();
    },
    isSupported() {
      return closure_1_1(5494).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5498).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5494.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5494.setEnabled,
    isEnabled: _modDef5494.isEnabled,
    getSystemHapticStatus: _modDef5494.getSystemHapticStatus,
    playAHAP: _modDef5494.playAHAP
  }), items);
}