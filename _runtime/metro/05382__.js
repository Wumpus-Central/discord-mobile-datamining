// === Module 5382: ? ===

// Module 5382
import _mod19 from "module_19" /* 19 */;
import _modDef5379 from "module_5379" /* 5379 */;

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
      _modDef5379.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5379.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5379).stop();
    },
    isSupported() {
      return closure_1_1(5379).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5383).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5379.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5379.setEnabled,
    isEnabled: _modDef5379.isEnabled,
    getSystemHapticStatus: _modDef5379.getSystemHapticStatus,
    playAHAP: _modDef5379.playAHAP
  }), items);
}