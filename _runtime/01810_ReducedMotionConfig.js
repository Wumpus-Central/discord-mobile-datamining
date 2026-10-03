// _runtime/01810_ReducedMotionConfig.js
import _mod19 from "metro/00019__.js";
import _mod1668 from "metro/01668__.js";
import _mod1684 from "metro/01684__.js";

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {}, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1684.ReducedMotionManager.jsValue;
    if (_mod1668.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = _mod1684.ReducedMotionManager;
      ReducedMotionManager3.setEnabled(_mod1684.isReducedMotionEnabledInSystem());
      const tmpResult = _mod1684;
    } else if (_mod1668.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = _mod1684.ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (_mod1668.ReduceMotion.Never === mode) {
      let ReducedMotionManager = _mod1684.ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
