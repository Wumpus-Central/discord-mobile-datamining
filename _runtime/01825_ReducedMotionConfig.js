// === Module 1825: ReducedMotionConfig ===

// Module 1825 (ReducedMotionConfig)
import _mod19 from "module_19" /* 19 */;
import _mod1683 from "module_1683" /* 1683 */;
import _mod1699 from "module_1699" /* 1699 */;

const useEffect = _mod19.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1699.ReducedMotionManager.jsValue;
    if (_mod1683.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = _mod1699.ReducedMotionManager;
      ReducedMotionManager3.setEnabled(_mod1699.isReducedMotionEnabledInSystem());
      const tmpResult = _mod1699;
    } else if (_mod1683.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = _mod1699.ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (_mod1683.ReduceMotion.Never === mode) {
      let ReducedMotionManager = _mod1699.ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};