// discord_app/modules/game_profile/native/components/GameProfileSkeletonCardRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_4 = createStyles.createStyles((gap) => {
  const obj = { viewport: { overflow: "hidden" }, row: { flexDirection: "row", gap } };
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
  const obj = {
    style: null,
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items = [tmp3.viewport, gap.style];
  obj.style = items;
  const obj2 = { style: null, children };
  const items1 = [tmp3.row, contentContainerStyle];
  obj2.style = items1;
  obj.children = <View style={null}>{children}</View>;
  return (
    <View style={null} accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {null}
    </View>
  );
}
