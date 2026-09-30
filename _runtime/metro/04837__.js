// === Module 4837: ? ===

// Module 4837
import _mod19 from "module_19" /* 19 */;
import _modDef4834 from "module_4834" /* 4834 */;

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
      _modDef4834.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4834.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4834).stop();
    },
    isSupported() {
      return closure_1_1(4834).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4838).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4834.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4834.setEnabled,
    isEnabled: _modDef4834.isEnabled,
    getSystemHapticStatus: _modDef4834.getSystemHapticStatus,
    playAHAP: _modDef4834.playAHAP
  }), items);
};