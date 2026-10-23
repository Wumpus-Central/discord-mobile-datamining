// === Module 5216: ? ===

// Module 5216
import _mod19 from "module_19" /* 19 */;
import _modDef5213 from "module_5213" /* 5213 */;

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
      _modDef5213.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5213.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5213).stop();
    },
    isSupported() {
      return closure_1_1(5213).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5217).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5213.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5213.setEnabled,
    isEnabled: _modDef5213.isEnabled,
    getSystemHapticStatus: _modDef5213.getSystemHapticStatus,
    playAHAP: _modDef5213.playAHAP
  }), items);
};