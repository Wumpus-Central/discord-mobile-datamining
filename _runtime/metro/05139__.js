// _runtime/metro/05139__.js
import _mod19 from "00019__.js";
import _modDef5136 from "05136__.js";

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
        _modDef5136.trigger(arg0, {});
      },
      triggerPattern(arg0, arg1) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        _modDef5136.triggerPattern(arg0, {});
      },
      stop() {
        closure_1_1(5136).stop();
      },
      isSupported() {
        return closure_1_1(5136).isSupported();
      },
      playHaptic(arg0, arg1, arg2) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        return closure_0(5140).playHaptic(arg0, arg1, {});
      },
      impact(arg0, arg1, arg2) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        _modDef5136.impact(arg0, arg1, {});
      },
      setEnabled: _modDef5136.setEnabled,
      isEnabled: _modDef5136.isEnabled,
      getSystemHapticStatus: _modDef5136.getSystemHapticStatus,
      playAHAP: _modDef5136.playAHAP,
    }),
    items,
  );
}
