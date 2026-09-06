// discord_app/modules/icymi/native/SeparatorDot.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { separatorDot: null };
let size = {
  width: 4,
  height: 4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
createStyles.separatorDot = size;
let closure_2 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/SeparatorDot.tsx");

export default function SeparatorDot() {
  const obj = { style: null };
  const items = [closure_2().separatorDot];
  obj.style = items;
  return <View style={null} />;
}
