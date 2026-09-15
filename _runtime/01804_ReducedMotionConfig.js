// _runtime/01804_ReducedMotionConfig.js
import _mod19 from "metro/00019__.js";
import _mod1662 from "metro/01662__.js";
import _mod1678 from "metro/01678__.js";

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {}, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1678.ReducedMotionManager.jsValue;
    if (_mod1662.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = _mod1678.ReducedMotionManager;
      ReducedMotionManager3.setEnabled(_mod1678.isReducedMotionEnabledInSystem());
      const tmpResult = _mod1678;
    } else if (_mod1662.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = _mod1678.ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (_mod1662.ReduceMotion.Never === mode) {
      let ReducedMotionManager = _mod1678.ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
