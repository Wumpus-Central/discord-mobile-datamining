// === Module 1922: ReducedMotionConfig ===

// Module 1922 (ReducedMotionConfig)
import _mod19 from "module_19" /* 19 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1699 */;
import _mod1845 from "module_1845" /* 1845 */;

const useEffect = _mod19.useEffect;

export function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
  items = [mode];
  useEffect(() => {
    const jsValue = _mod1845.ReducedMotionManager.jsValue;
    if (LayoutAnimationType.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = _mod1845.ReducedMotionManager;
      ReducedMotionManager3.setEnabled(_mod1845.isReducedMotionEnabledInSystem());
      const tmpResult = _mod1845;
    } else if (LayoutAnimationType.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = _mod1845.ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (LayoutAnimationType.ReduceMotion.Never === mode) {
      let ReducedMotionManager = _mod1845.ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
}