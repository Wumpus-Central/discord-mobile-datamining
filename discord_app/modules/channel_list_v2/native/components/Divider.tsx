// === Module 11778: Divider ===

// Module 11778 (Divider)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_4 = createStyles.createStyles(() => {
  const obj = { divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 8, marginBottom: 8, marginHorizontal: 16 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default function Divider() {
  return <View style={closure_4().divider} />;
};
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;