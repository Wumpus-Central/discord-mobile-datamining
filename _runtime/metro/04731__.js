// === Module 4731: ? ===

// Module 4731
import _mod19 from "module_19" /* 19 */;
import _modDef4728 from "module_4728" /* 4728 */;

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
      _modDef4728.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4728.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4728).stop();
    },
    isSupported() {
      return closure_1_1(4728).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4732).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4728.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4728.setEnabled,
    isEnabled: _modDef4728.isEnabled,
    getSystemHapticStatus: _modDef4728.getSystemHapticStatus,
    playAHAP: _modDef4728.playAHAP
  }), items);
};