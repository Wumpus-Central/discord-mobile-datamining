// === Module 1804: ReducedMotionConfig ===

// Module 1804 (ReducedMotionConfig)
import _mod19 from "module_19" /* 19 */;
import _mod1662 from "module_1662" /* 1662 */;
import _mod1678 from "module_1678" /* 1678 */;

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
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