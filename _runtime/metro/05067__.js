// === Module 5067: ? ===

// Module 5067
import _mod19 from "module_19" /* 19 */;
import _modDef5064 from "module_5064" /* 5064 */;

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
      _modDef5064.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5064.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5064).stop();
    },
    isSupported() {
      return closure_1_1(5064).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5068).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5064.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5064.setEnabled,
    isEnabled: _modDef5064.isEnabled,
    getSystemHapticStatus: _modDef5064.getSystemHapticStatus,
    playAHAP: _modDef5064.playAHAP
  }), items);
};