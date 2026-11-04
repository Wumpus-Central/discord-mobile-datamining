// === Module 18675: InterestTileEdge ===

// Module 18675 (InterestTileEdge)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import noop from "module_19" /* 19 */;

const GRID_COVER_HAIRLINE_WIDTH = fn(18671).GRID_COVER_HAIRLINE_WIDTH;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_4 = createStyles.createStyles((borderRadius) => {
  const obj = { edge: { position: "absolute", inset: 0, borderWidth: GRID_COVER_HAIRLINE_WIDTH, borderRadius, borderColor: nativeDefault.colors.BORDER_MUTED } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestTileEdge.tsx");

export default function InterestTileEdge(radius) {
  const obj = { accessible: false, pointerEvents: "none", style: null };
  items = [closure_4(radius.radius).edge, radius.style];
  obj.style = items;
  return jsx(_modDef1652.View, { accessible: false, pointerEvents: "none", style: null });
};