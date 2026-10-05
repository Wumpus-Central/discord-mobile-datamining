// === Module 16865: SmartSearchBottomFade ===

// Module 16865 (SmartSearchBottomFade)
import c from "c" /* 576 */;
import _modDef683 from "module_683" /* 683 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import useSearchHostSurface from "useSearchHostSurface" /* 16866 */;
import noop from "module_19" /* 19 */;

require = fn;
const VerticalGradient = fn(1085).VerticalGradient;
const jsx = fn(21).jsx;
const locations = [0, 0.8];
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles((height) => {
  const obj = { fade: null };
  const rect = { position: "absolute", left: 0, right: 0, bottom: 0, height };
  obj.fade = rect;
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchBottomFade.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((height) => {
  const cResult = c.c(8);
  const tmp3 = closure_7(height.height);
  const searchHostSurfaceColor = useSearchHostSurface.useSearchHostSurfaceColor();
  if (cResult[0] !== searchHostSurfaceColor) {
    const obj3 = _modDef683(searchHostSurfaceColor);
    const hexResult = _modDef683(searchHostSurfaceColor).alpha(0).hex();
    cResult[0] = searchHostSurfaceColor;
    cResult[1] = hexResult;
    let tmp5 = hexResult;
    const alphaResult = _modDef683(searchHostSurfaceColor).alpha(0);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === searchHostSurfaceColor) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp8) {
      if (cResult[6] === tmp3.fade) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
    const obj4 = { pointerEvents: "none", style: tmp3.fade, start: null, end: null, colors: null, locations: null };
    ({ START: obj5.start, END: obj5.end } = VerticalGradient);
    obj4.colors = tmp8;
    obj4.locations = locations;
    const tmp14 = jsx(LinearGradientDefault, { pointerEvents: "none", style: tmp3.fade, start: null, end: null, colors: null, locations: null });
    cResult[5] = tmp8;
    cResult[6] = tmp3.fade;
    cResult[7] = tmp14;
    tmp9 = tmp14;
  }
  const items = [tmp5, searchHostSurfaceColor];
  cResult[2] = searchHostSurfaceColor;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp8 = items;
}) : ((height) => {
  let searchHostSurfaceColor;
  const tmp = closure_7(height.height);
  searchHostSurfaceColor = searchHostSurfaceColor(16866).useSearchHostSurfaceColor();
  let items = [searchHostSurfaceColor];
  const memo = noop.useMemo(() => {
    const obj = _modDef683(searchHostSurfaceColor);
    const items = [_modDef683(searchHostSurfaceColor).alpha(0).hex(), searchHostSurfaceColor];
    return items;
  }, items);
  return jsx(LinearGradientDefault, { pointerEvents: "none", style: tmp.fade, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo, locations });
}));