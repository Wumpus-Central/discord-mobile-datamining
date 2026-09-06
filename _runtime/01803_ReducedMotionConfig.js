// _runtime/01803_ReducedMotionConfig.js
import _mod19 from "metro/00019__.js";
import _mod1661 from "metro/01661__.js";
import _mod1677 from "metro/01677__.js";

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {}, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1677.ReducedMotionManager.jsValue;
    if (_mod1661.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = _mod1677.ReducedMotionManager;
      ReducedMotionManager3.setEnabled(_mod1677.isReducedMotionEnabledInSystem());
      const tmpResult = _mod1677;
    } else if (_mod1661.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = _mod1677.ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (_mod1661.ReduceMotion.Never === mode) {
      let ReducedMotionManager = _mod1677.ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
