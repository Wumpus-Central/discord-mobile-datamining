// === Module 1803: ReducedMotionConfig ===

// Module 1803 (ReducedMotionConfig)
import _mod19 from "module_19" /* 19 */;
import _mod1661 from "module_1661" /* 1661 */;
import _mod1677 from "module_1677" /* 1677 */;

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1677.ReducedMotionManager.jsValue;
    if (_mod1661.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = tmp(1677).ReducedMotionManager;
      ReducedMotionManager3.setEnabled(tmp(1677).isReducedMotionEnabledInSystem());
      const tmpResult = tmp(1677);
    } else if (tmp(1661).ReduceMotion.Always === tmp3) {
      const ReducedMotionManager2 = tmp(1677).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (tmp(1661).ReduceMotion.Never === tmp3) {
      let ReducedMotionManager = tmp(1677).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};