// discord_app/modules/intelligence_layer/search/native/components/SmartSearchBottomFade.tsx
import _modDef672 from "../../../../../../_runtime/metro/00672__.js";
import LinearGradientDefault from "../../../../../../_runtime/05286_LinearGradient.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const VerticalGradient = fn(1074).VerticalGradient;
const jsx = fn(21).jsx;
const locations = [0, 0.8];
const createStyles = fn(4829);
let closure_7 = createStyles.createStyles((height) => {
  const obj = { fade: null };
  const rect = { position: "absolute", left: 0, right: 0, bottom: 0, height };
  obj.fade = rect;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SmartSearchBottomFade.tsx",
);

export default noop.memo((height) => {
  let searchHostSurfaceColor;
  const tmp = closure_7(height.height);
  searchHostSurfaceColor = searchHostSurfaceColor(16480).useSearchHostSurfaceColor();
  let items = [searchHostSurfaceColor];
  const memo = noop.useMemo(() => {
    const obj = _modDef672(searchHostSurfaceColor);
    const items = [_modDef672(searchHostSurfaceColor).alpha(0).hex(), searchHostSurfaceColor];
    return items;
  }, items);
  return jsx(LinearGradientDefault, {
    pointerEvents: "none",
    style: tmp.fade,
    start: VerticalGradient.START,
    end: VerticalGradient.END,
    colors: memo,
    locations,
  });
});
