// === Module 1818: ReducedMotionConfig ===

// Module 1818 (ReducedMotionConfig)
import _mod19 from "module_19" /* 19 */;
import _mod1676 from "module_1676" /* 1676 */;
import _mod1692 from "module_1692" /* 1692 */;

const useEffect = _mod19.useEffect;

export function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {

  }, []);
  const items = [mode];
  useEffect(() => {
    const jsValue = _mod1692.ReducedMotionManager.jsValue;
    if (_mod1676.ReduceMotion.System === mode) {
      const ReducedMotionManager3 = _mod1692.ReducedMotionManager;
      ReducedMotionManager3.setEnabled(_mod1692.isReducedMotionEnabledInSystem());
      const tmpResult = _mod1692;
    } else if (_mod1676.ReduceMotion.Always === mode) {
      const ReducedMotionManager2 = _mod1692.ReducedMotionManager;
      ReducedMotionManager2.setEnabled(true);
    } else if (_mod1676.ReduceMotion.Never === mode) {
      let ReducedMotionManager = _mod1692.ReducedMotionManager;
      ReducedMotionManager.setEnabled(false);
    }
    return () => {
      const ReducedMotionManager = mode(dependencyMap[2]).ReducedMotionManager;
      ReducedMotionManager.setEnabled(jsValue);
    };
  }, items);
  return null;
}