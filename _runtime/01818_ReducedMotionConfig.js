// _runtime/01818_ReducedMotionConfig.js
import _mod19 from "metro/00019__.js";
import _mod1676 from "metro/01676__.js";
import _mod1692 from "metro/01692__.js";

const useEffect = _mod19.useEffect;

export function ReducedMotionConfig(mode) {
  mode = mode.mode;
  useEffect(() => {}, []);
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
