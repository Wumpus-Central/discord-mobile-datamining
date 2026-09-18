// === Module 4696: ? ===

// Module 4696
import _mod19 from "module_19" /* 19 */;
import _modDef4693 from "module_4693" /* 4693 */;

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
      _modDef4693.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4693.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4693).stop();
    },
    isSupported() {
      return closure_1_1(4693).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4697).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4693.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4693.setEnabled,
    isEnabled: _modDef4693.isEnabled,
    getSystemHapticStatus: _modDef4693.getSystemHapticStatus,
    playAHAP: _modDef4693.playAHAP
  }), items);
};