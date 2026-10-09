// _runtime/01823_ReducedMotionConfig.js
import _mod19 from "metro/00019__.js";
import _mod1681 from "metro/01681__.js";
import _mod1697 from "metro/01697__.js";

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {}, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1697.ReducedMotionManager.jsValue;
    if (_mod1681.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = _mod1697.ReducedMotionManager;
      ReducedMotionManager3.setEnabled(_mod1697.isReducedMotionEnabledInSystem());
      const tmpResult = _mod1697;
    } else if (_mod1681.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = _mod1697.ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (_mod1681.ReduceMotion.Never === mode) {
      let ReducedMotionManager = _mod1697.ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};
