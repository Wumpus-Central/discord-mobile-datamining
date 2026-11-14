// === Module 5560: ? ===

// Module 5560
import _mod19 from "module_19" /* 19 */;
import _modDef5557 from "module_5557" /* 5557 */;

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
      _modDef5557.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5557.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5557).stop();
    },
    isSupported() {
      return closure_1_1(5557).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5561).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5557.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5557.setEnabled,
    isEnabled: _modDef5557.isEnabled,
    getSystemHapticStatus: _modDef5557.getSystemHapticStatus,
    playAHAP: _modDef5557.playAHAP
  }), items);
}