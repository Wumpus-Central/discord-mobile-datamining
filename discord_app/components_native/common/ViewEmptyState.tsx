// === Module 7053: ViewEmptyState ===

// Module 7053 (ViewEmptyState)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 36 }, emptyImage: { width: 170, height: 130 }, fixOpticalIllusion: { marginTop: -50, alignItems: "center" }, emptyLabel: null, emptyText: null };
createStyles = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
createStyles.textAlign = "center";
createStyles.marginTop = 32;
createStyles.opacity = 0.8;
createStyles.emptyLabel = createStyles;
createStyles.emptyText = { fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 13, marginTop: 8, marginHorizontal: 10, opacity: 0.6, fontWeight: "400" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/ViewEmptyState.tsx");

export default function ViewEmptyState(arg0) {
  ({ label, text } = arg0);
  ({ source, style } = arg0);
  const tmp = closure_6();
  let obj = { style: null, children: null };
  const items = [tmp.emptyContainer, style];
  obj.style = items;
  obj = { style: tmp.fixOpticalIllusion, children: null };
  obj = { resizeMode: "contain", source, style: tmp.emptyImage };
  const items1 = [React4(React3, obj), , ];
  let tmp2Result = null;
  if (null != label) {
    const obj1 = { style: tmp.emptyLabel, children: label.toUpperCase() };
    tmp2Result = React4(native.LegacyText, obj1);
  }
  items1[1] = tmp2Result;
  tmp2Result = null;
  if (null != text) {
    const obj2 = { style: null, children: null };
    const items2 = [, ];
    ({ emptyLabel: arr3[0], emptyText: arr3[1] } = tmp);
    obj2.style = items2;
    obj2.children = text;
    tmp2Result = React4(native.LegacyText, obj2);
  }
  items1[2] = tmp2Result;
  obj.children = items1;
  obj.children = hasOwnProperty(React2, obj);
  return React4(React2, obj);
};