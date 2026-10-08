// _runtime/01822_ReducedMotionConfig.js
import _mod19 from "metro/00019__.js";
import _mod1680 from "metro/01680__.js";
import _mod1696 from "metro/01696__.js";

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {}, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1696.ReducedMotionManager.jsValue;
    if (_mod1680.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = _mod1696.ReducedMotionManager;
      ReducedMotionManager3.setEnabled(_mod1696.isReducedMotionEnabledInSystem());
      const tmpResult = _mod1696;
    } else if (_mod1680.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = _mod1696.ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (_mod1680.ReduceMotion.Never === mode) {
      let ReducedMotionManager = _mod1696.ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
