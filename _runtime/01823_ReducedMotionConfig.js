// === Module 1823: ReducedMotionConfig ===

// Module 1823 (ReducedMotionConfig)
import _mod19 from "module_19" /* 19 */;
import _mod1681 from "module_1681" /* 1681 */;
import _mod1697 from "module_1697" /* 1697 */;

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
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