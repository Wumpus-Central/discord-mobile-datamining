// === Module 16606: ForYouUnreadClearedState ===

// Module 16606 (ForYouUnreadClearedState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4636 */;
import _modDef10801 from "module_10801" /* 10801 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4640);
const obj2 = { container: { marginBottom: 4, marginHorizontal: 24, alignItems: "center", flexDirection: "row" }, imageContainer: null, icon: null, headerText: null };
let size = { width: 48, height: 48, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_400, opacity: 0.16, borderRadius: nativeDefault.radii.xl, marginRight: 16, justifyContent: "center", alignItems: "center" };
obj2.imageContainer = size;
obj2.icon = { margin: 12, position: "absolute", color: nativeDefault.unsafe_rawColors.GREEN_400 };
obj2.headerText = { marginBottom: 2 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouUnreadClearedState.tsx");

export const ForYouUnreadClearedState = function ForYouUnreadClearedState() {
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const items = [React4(View, { style: tmp.imageContainer }), React4(native.Icon, { source: _modDef10801, style: tmp.icon, color: tmp.icon.color }), ];
  const obj4 = { children: null };
  const obj5 = { color: "mobile-text-heading-primary", variant: "text-md/semibold", style: tmp.headerText, children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.DonStq);
  const items1 = [React4(Text_Text.Text, obj5), ];
  const obj6 = { color: "text-default", variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.jXFsai);
  items1[1] = React4(Text_Text.Text, obj6);
  obj4.children = items1;
  items[2] = hasOwnProperty(View, obj4);
  obj.children = items;
  return hasOwnProperty(View, obj);
};