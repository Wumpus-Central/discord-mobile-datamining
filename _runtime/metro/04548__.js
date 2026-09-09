// === Module 4548: ? ===

// Module 4548
import _mod19 from "module_19" /* 19 */;
import _modDef4545 from "module_4545" /* 4545 */;

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
      const obj = {};
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      obj.trigger(arg0, obj);
    },
    triggerPattern(arg0, arg1) {
      const obj = {};
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      obj.triggerPattern(arg0, obj);
    },
    stop() {
      closure_1_1(4545).stop();
    },
    isSupported() {
      return closure_1_1(4545).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      closure_0(4549);
      const obj = {};
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return obj.playHaptic(arg0, arg1, obj);
    },
    impact(arg0, arg1, arg2) {
      const obj = {};
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      obj.impact(arg0, arg1, obj);
    },
    setEnabled: _modDef4545.setEnabled,
    isEnabled: _modDef4545.isEnabled,
    getSystemHapticStatus: _modDef4545.getSystemHapticStatus,
    playAHAP: _modDef4545.playAHAP
  }), items);
};