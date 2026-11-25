// === Module 5234: ? ===

// Module 5234
import _mod19 from "module_19" /* 19 */;
import _modDef5231 from "module_5231" /* 5231 */;

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
      _modDef5231.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5231.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5231).stop();
    },
    isSupported() {
      return closure_1_1(5231).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5235).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5231.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5231.setEnabled,
    isEnabled: _modDef5231.isEnabled,
    getSystemHapticStatus: _modDef5231.getSystemHapticStatus,
    playAHAP: _modDef5231.playAHAP
  }), items);
}