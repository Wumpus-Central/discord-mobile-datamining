// === Module 16446: ForYouUnreadClearedState ===

// Module 16446 (ForYouUnreadClearedState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import _modDef10652 from "module_10652" /* 10652 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { marginBottom: 4, marginHorizontal: 24, alignItems: "center", flexDirection: "row" }, imageContainer: null, icon: null, headerText: null };
let size = { width: 48, height: 48, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_400, opacity: 0.16, borderRadius: nativeDefault.radii.xl, marginRight: 16, justifyContent: "center", alignItems: "center" };
createStyles.imageContainer = size;
createStyles = { margin: 12, position: "absolute", color: nativeDefault.unsafe_rawColors.GREEN_400 };
createStyles.icon = createStyles;
createStyles.headerText = { marginBottom: 2 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouUnreadClearedState.tsx");

export const ForYouUnreadClearedState = function ForYouUnreadClearedState() {
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.imageContainer };
  const items = [React4(View, obj), , ];
  obj = { source: _modDef10652, style: tmp.icon, color: tmp.icon.color };
  items[1] = React4(native.Icon, obj);
  const obj1 = { children: null };
  const obj2 = { color: "mobile-text-heading-primary", variant: "text-md/semibold", style: tmp.headerText, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.DonStq);
  const items1 = [React4(Text_Text.Text, obj2), ];
  const obj3 = { color: "text-default", variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.jXFsai);
  items1[1] = React4(Text_Text.Text, obj3);
  obj1.children = items1;
  items[2] = hasOwnProperty(View, obj1);
  obj.children = items;
  return hasOwnProperty(View, obj);
};