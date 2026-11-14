// discord_app/modules/waterwheels/interest/native/InterestTileEdge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1655 from "../../../../../_runtime/metro/01655__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const GRID_COVER_HAIRLINE_WIDTH = fn(19025).GRID_COVER_HAIRLINE_WIDTH;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let closure_4 = createStyles.createStyles((borderRadius) => {
  const obj = {
    edge: {
      position: "absolute",
      inset: 0,
      borderWidth: GRID_COVER_HAIRLINE_WIDTH,
      borderRadius,
      borderColor: nativeDefault.colors.BORDER_MUTED,
    },
  };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestTileEdge.tsx");

export default function InterestTileEdge(radius) {
  const obj = { accessible: false, pointerEvents: "none", style: null };
  items = [closure_4(radius.radius).edge, radius.style];
  obj.style = items;
  return jsx(_modDef1655.View, { accessible: false, pointerEvents: "none", style: null });
}
