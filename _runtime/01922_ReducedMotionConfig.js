// _runtime/01922_ReducedMotionConfig.js
import _mod19 from "metro/00019__.js";
import LayoutAnimationType from "01699_LayoutAnimationType.js";
import _mod1845 from "metro/01845__.js";

const useEffect = _mod19.useEffect;

export function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {}, []);
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
