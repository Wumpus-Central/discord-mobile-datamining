// === Module 5162: ? ===

// Module 5162
import _mod19 from "module_19" /* 19 */;
import _modDef5159 from "module_5159" /* 5159 */;

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
      _modDef5159.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5159.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5159).stop();
    },
    isSupported() {
      return closure_1_1(5159).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5163).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5159.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5159.setEnabled,
    isEnabled: _modDef5159.isEnabled,
    getSystemHapticStatus: _modDef5159.getSystemHapticStatus,
    playAHAP: _modDef5159.playAHAP
  }), items);
};