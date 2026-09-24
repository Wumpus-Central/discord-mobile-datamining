// === Module 4803: ? ===

// Module 4803
import _mod19 from "module_19" /* 19 */;
import _modDef4800 from "module_4800" /* 4800 */;

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
      _modDef4800.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4800.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4800).stop();
    },
    isSupported() {
      return closure_1_1(4800).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4804).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4800.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4800.setEnabled,
    isEnabled: _modDef4800.isEnabled,
    getSystemHapticStatus: _modDef4800.getSystemHapticStatus,
    playAHAP: _modDef4800.playAHAP
  }), items);
};