// === Module 4816: ? ===

// Module 4816
import _mod19 from "module_19" /* 19 */;
import _modDef4813 from "module_4813" /* 4813 */;

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
      _modDef4813.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4813.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4813).stop();
    },
    isSupported() {
      return closure_1_1(4813).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4817).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4813.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4813.setEnabled,
    isEnabled: _modDef4813.isEnabled,
    getSystemHapticStatus: _modDef4813.getSystemHapticStatus,
    playAHAP: _modDef4813.playAHAP
  }), items);
};