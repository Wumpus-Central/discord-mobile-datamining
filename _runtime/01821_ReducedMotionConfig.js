// === Module 1821: ReducedMotionConfig ===

// Module 1821 (ReducedMotionConfig)
import noop from "noop" /* 19 */;

const useEffect = noop.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = mode(dependencyMap[2]).ReducedMotionManager.jsValue;
    if (mode(dependencyMap[3]).ReduceMotion.System === jsValue) {
      const ReducedMotionManager3 = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager3.setEnabled(mode(dependencyMap[2]).isReducedMotionEnabledInSystem());
      const tmpResult = mode(dependencyMap[2]);
    } else if (mode(dependencyMap[3]).ReduceMotion.Always === tmp3) {
      const ReducedMotionManager2 = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (mode(dependencyMap[3]).ReduceMotion.Never === tmp3) {
      let ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = jsValue(closure_1_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};