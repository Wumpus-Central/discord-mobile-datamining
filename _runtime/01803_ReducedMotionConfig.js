// === Module 1803: ReducedMotionConfig ===

// Module 1803 (ReducedMotionConfig)
import noop from "noop" /* 19 */;

const useEffect = noop.useEffect;

export const ReducedMotionConfig = function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = mode(closure_1_1[2]).ReducedMotionManager.jsValue;
    if (mode(closure_1_1[3]).ReduceMotion.System === jsValue) {
      const ReducedMotionManager3 = tmp(tmp2[2]).ReducedMotionManager;
      ReducedMotionManager3.setEnabled(tmp(tmp2[2]).isReducedMotionEnabledInSystem());
      const tmpResult = tmp(tmp2[2]);
    } else if (tmp(tmp2[3]).ReduceMotion.Always === tmp3) {
      const ReducedMotionManager2 = tmp(tmp2[2]).ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (tmp(tmp2[3]).ReduceMotion.Never === tmp3) {
      let ReducedMotionManager = tmp(tmp2[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = jsValue(closure_1_1[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
};