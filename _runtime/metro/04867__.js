// === Module 4867: ? ===

// Module 4867
import _mod19 from "module_19" /* 19 */;
import _modDef4864 from "module_4864" /* 4864 */;

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
      _modDef4864.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4864.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4864).stop();
    },
    isSupported() {
      return closure_1_1(4864).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4868).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4864.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4864.setEnabled,
    isEnabled: _modDef4864.isEnabled,
    getSystemHapticStatus: _modDef4864.getSystemHapticStatus,
    playAHAP: _modDef4864.playAHAP
  }), items);
};