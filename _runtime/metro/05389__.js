// === Module 5389: ? ===

// Module 5389
import _mod19 from "module_19" /* 19 */;
import _modDef5386 from "module_5386" /* 5386 */;

const useMemo = _mod19.useMemo;

export function useHaptics(enableVibrateFallback) {
  closure_0 = enableVibrateFallback;
  let prop;
  if (enableVibrateFallback != null) {
    prop = enableVibrateFallback.enableVibrateFallback;
  }
  let prop1;
  if (enableVibrateFallback != null) {
    prop1 = enableVibrateFallback.ignoreAndroidSystemSettings;
  }
  items = [prop, prop1];
  return useMemo(() => ({
    trigger(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5386.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef5386.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(5386).stop();
    },
    isSupported() {
      return closure_1_1(5386).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(5390).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef5386.impact(arg0, arg1, {});
    },
    setEnabled: _modDef5386.setEnabled,
    isEnabled: _modDef5386.isEnabled,
    getSystemHapticStatus: _modDef5386.getSystemHapticStatus,
    playAHAP: _modDef5386.playAHAP
  }), items);
}