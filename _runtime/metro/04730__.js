// === Module 4730: ? ===

// Module 4730
import _mod19 from "module_19" /* 19 */;
import _modDef4727 from "module_4727" /* 4727 */;

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
      _modDef4727.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4727.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4727).stop();
    },
    isSupported() {
      return closure_1_1(4727).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4731).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4727.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4727.setEnabled,
    isEnabled: _modDef4727.isEnabled,
    getSystemHapticStatus: _modDef4727.getSystemHapticStatus,
    playAHAP: _modDef4727.playAHAP
  }), items);
};