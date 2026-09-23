// _runtime/metro/04801__.js
import _mod19 from "00019__.js";
import _modDef4798 from "04798__.js";

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
        _modDef4798.trigger(arg0, {});
      },
      triggerPattern(arg0, arg1) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg1);
        _modDef4798.triggerPattern(arg0, {});
      },
      stop() {
        closure_1_1(4798).stop();
      },
      isSupported() {
        return closure_1_1(4798).isSupported();
      },
      playHaptic(arg0, arg1, arg2) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        return closure_0(4802).playHaptic(arg0, arg1, {});
      },
      impact(arg0, arg1, arg2) {
        const merged = Object.assign(enableVibrateFallback);
        const merged1 = Object.assign(arg2);
        _modDef4798.impact(arg0, arg1, {});
      },
      setEnabled: _modDef4798.setEnabled,
      isEnabled: _modDef4798.isEnabled,
      getSystemHapticStatus: _modDef4798.getSystemHapticStatus,
      playAHAP: _modDef4798.playAHAP,
    }),
    items,
  );
};
