// === Module 7869: Badge ===

// Module 7869 (Badge)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let obj = { badge: null, badgeClassic: null, mask: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.badge = obj;
const createStyles = { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.badgeClassic = createStyles;
obj.mask = { alignItems: "center", justifyContent: "center" };
let closure_2 = createStyles.createStyles(obj);
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/Badge.tsx");

export default noop.memo(function Badge(size) {
  let num = size.size;
  if (num === undefined) {
    num = 12;
  }
  let num2 = size.maskSize;
  if (num2 === undefined) {
    num2 = 4;
  }
  let flag = size.classic;
  if (flag === undefined) {
    flag = false;
  }
  const maskColor = size.maskColor;
  ({ style, badgeStyle } = size);
  const tmp = closure_2();
  const sum = num + 2 * num2;
  let tmp3;
  if (null != maskColor) {
    size = { backgroundColor: maskColor, height: sum, width: sum, borderRadius: sum / 2 };
    tmp3 = size;
  }
  let obj = { style: null, children: null };
  const items = [tmp.mask, tmp3, style];
  obj.style = items;
  obj = { style: null };
  const items1 = [flag ? tmp.badgeClassic : tmp.badge, { height: num, width: num, borderRadius: num / 2 }, badgeStyle];
  obj.style = items1;
  obj.children = <View style={null} />;
  return <View style={null} />;
});
export const DEFAULT_BADGE_SIZE = 12;
export const CHANNEL_BADGE_SIZE = 8;
export const DEFAULT_BADGE_MASK_SIZE = 4;