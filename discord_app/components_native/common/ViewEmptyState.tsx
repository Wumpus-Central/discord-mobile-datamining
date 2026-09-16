// discord_app/components_native/common/ViewEmptyState.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../design/void/native.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import TextStyles from "../../modules/rebrand/native/TextStyles.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 36 },
  emptyImage: { width: 170, height: 130 },
  fixOpticalIllusion: { marginTop: -50, alignItems: "center" },
  emptyLabel: null,
  emptyText: null,
};
const obj3 = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3.textAlign = "center";
obj3.marginTop = 32;
obj3.opacity = 0.8;
obj2.emptyLabel = obj3;
obj2.emptyText = {
  fontFamily: Fonts.PRIMARY_MEDIUM,
  fontSize: 13,
  marginTop: 8,
  marginHorizontal: 10,
  opacity: 0.6,
  fontWeight: "400",
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/ViewEmptyState.tsx");

export default function ViewEmptyState(arg0) {
  ({ label, text } = arg0);
  ({ source, style } = arg0);
  const tmp = closure_6();
  const obj = { style: null, children: null };
  const items = [tmp.emptyContainer, style];
  obj.style = items;
  const obj2 = { style: tmp.fixOpticalIllusion, children: null };
  const items1 = [React4(React3, { resizeMode: "contain", source, style: tmp.emptyImage }), ,];
  let tmp2Result = null;
  if (null != label) {
    const obj4 = { style: tmp.emptyLabel, children: label.toUpperCase() };
    tmp2Result = React4(native.LegacyText, obj4);
  }
  items1[1] = tmp2Result;
  let tmp2Result2 = null;
  if (null != text) {
    const obj5 = { style: null, children: null };
    const items2 = [,];
    ({ emptyLabel: arr3[0], emptyText: arr3[1] } = tmp);
    obj5.style = items2;
    obj5.children = text;
    tmp2Result2 = React4(native.LegacyText, obj5);
  }
  items1[2] = tmp2Result2;
  obj2.children = items1;
  obj.children = hasOwnProperty(React2, obj2);
  return React4(React2, obj);
}
