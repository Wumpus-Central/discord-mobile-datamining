// === Module 18792: SmartSearchBottomFade ===

// Module 18792 (SmartSearchBottomFade)
import _modDef671 from "module_671" /* 671 */;
import LinearGradientDefault from "LinearGradient" /* 5468 */;
import noop from "module_19" /* 19 */;

const require = fn;
const VerticalGradient = fn(1071).VerticalGradient;
const jsx = fn(21).jsx;
const locations = [0, 0.8];
const createStyles = fn(4913);
let closure_7 = createStyles.createStyles((height) => {
  const obj = { fade: null };
  const rect = { position: "absolute", left: 0, right: 0, bottom: 0, height };
  obj.fade = rect;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchBottomFade.tsx");

export default noop.memo(function SmartSearchBottomFade(height) {
  let searchHostSurfaceColor;
  const tmp = closure_7(height.height);
  searchHostSurfaceColor = searchHostSurfaceColor(18793).useSearchHostSurfaceColor();
  items = [searchHostSurfaceColor];
  const memo = noop.useMemo(() => {
    const obj = _modDef671(searchHostSurfaceColor);
    items = [_modDef671(searchHostSurfaceColor).alpha(0).hex(), searchHostSurfaceColor];
    return items;
  }, items);
  return jsx(LinearGradientDefault, { pointerEvents: "none", style: tmp.fade, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo, locations });
});