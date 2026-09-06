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