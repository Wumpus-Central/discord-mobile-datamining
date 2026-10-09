// _runtime/metro/05062__.js
import _mod19 from "00019__.js";
import _modDef5059 from "05059__.js";

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
        _modDef5059.trigger(arg0, {});
      },
      triggerPattern(arg0, arg1) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        _modDef5059.triggerPattern(arg0, {});
      },
      stop() {
        closure_1_1(5059).stop();
      },
      isSupported() {
        return closure_1_1(5059).isSupported();
      },
      playHaptic(arg0, arg1, arg2) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        return closure_0(5063).playHaptic(arg0, arg1, {});
      },
      impact(arg0, arg1, arg2) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        _modDef5059.impact(arg0, arg1, {});
      },
      setEnabled: _modDef5059.setEnabled,
      isEnabled: _modDef5059.isEnabled,
      getSystemHapticStatus: _modDef5059.getSystemHapticStatus,
      playAHAP: _modDef5059.playAHAP,
    }),
    items,
  );
};
