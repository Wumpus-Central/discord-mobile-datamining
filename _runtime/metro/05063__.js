// === Module 5063: ? ===

// Module 5063
import _mod19 from "module_19" /* 19 */;
import _modDef5060 from "module_5060" /* 5060 */;

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
      _modDef5060.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5060.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5060).stop();
    },
    isSupported() {
      return closure_1_1(5060).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5064).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5060.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5060.setEnabled,
    isEnabled: _modDef5060.isEnabled,
    getSystemHapticStatus: _modDef5060.getSystemHapticStatus,
    playAHAP: _modDef5060.playAHAP
  }), items);
};