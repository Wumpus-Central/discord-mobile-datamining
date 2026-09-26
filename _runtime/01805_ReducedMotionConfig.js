// _runtime/01805_ReducedMotionConfig.js
import _mod19 from "metro/00019__.js";
import _mod1663 from "metro/01663__.js";
import _mod1679 from "metro/01679__.js";

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {}, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1679.ReducedMotionManager.jsValue;
    if (_mod1663.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = _mod1679.ReducedMotionManager;
      ReducedMotionManager3.setEnabled(_mod1679.isReducedMotionEnabledInSystem());
      const tmpResult = _mod1679;
    } else if (_mod1663.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = _mod1679.ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (_mod1663.ReduceMotion.Never === mode) {
      let ReducedMotionManager = _mod1679.ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
