// _runtime/metro/05122__.js
import _mod19 from "00019__.js";
import _modDef5119 from "05119__.js";

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
  return useMemo(
    () => ({
      trigger(arg0, arg1) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        _modDef5119.trigger(arg0, {});
      },
      triggerPattern(arg0, arg1) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        _modDef5119.triggerPattern(arg0, {});
      },
      stop() {
        closure_1_1(5119).stop();
      },
      isSupported() {
        return closure_1_1(5119).isSupported();
      },
      playHaptic(arg0, arg1, arg2) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        return closure_0(5123).playHaptic(arg0, arg1, {});
      },
      impact(arg0, arg1, arg2) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        _modDef5119.impact(arg0, arg1, {});
      },
      setEnabled: _modDef5119.setEnabled,
      isEnabled: _modDef5119.isEnabled,
      getSystemHapticStatus: _modDef5119.getSystemHapticStatus,
      playAHAP: _modDef5119.playAHAP,
    }),
    items,
  );
};
