// === Module 8877: GameProfileSkeletonCardRow ===

// Module 8877 (GameProfileSkeletonCardRow)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_4 = createStyles.createStyles((gap) => {
  let obj = { viewport: { overflow: "hidden" }, row: null };
  obj = { flexDirection: "row", gap };
  obj.row = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeletonCardRow.tsx");

export default function GameProfileSkeletonCardRow(gap) {
  let PX_12 = gap.gap;
  ({ children, contentContainerStyle } = gap);
  if (PX_12 === undefined) {
    PX_12 = nativeDefault.space.PX_12;
  }
  const tmp3 = closure_4(PX_12);
  let obj = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items = [tmp3.viewport, gap.style];
  obj.style = items;
  obj = { style: null, children };
  const items1 = [tmp3.row, contentContainerStyle];
  obj.style = items1;
  obj.children = <View style={null}>{children}</View>;
  return <View style={null}>{children}</View>;
};