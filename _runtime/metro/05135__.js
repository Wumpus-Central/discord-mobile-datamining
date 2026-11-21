// _runtime/metro/05135__.js
import _mod19 from "00019__.js";
import _modDef5132 from "05132__.js";

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
  return useMemo(
    () => ({
      trigger(arg0, arg1) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        _modDef5132.trigger(arg0, {});
      },
      triggerPattern(arg0, arg1) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        _modDef5132.triggerPattern(arg0, {});
      },
      stop() {
        closure_1_1(5132).stop();
      },
      isSupported() {
        return closure_1_1(5132).isSupported();
      },
      playHaptic(arg0, arg1, arg2) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        return closure_0(5136).playHaptic(arg0, arg1, {});
      },
      impact(arg0, arg1, arg2) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        _modDef5132.impact(arg0, arg1, {});
      },
      setEnabled: _modDef5132.setEnabled,
      isEnabled: _modDef5132.isEnabled,
      getSystemHapticStatus: _modDef5132.getSystemHapticStatus,
      playAHAP: _modDef5132.playAHAP,
    }),
    items,
  );
}
