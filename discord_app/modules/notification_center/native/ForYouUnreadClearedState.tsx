// === Module 16426: ForYouUnreadClearedState ===

// Module 16426 (ForYouUnreadClearedState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import AssetRegistryDefault from "AssetRegistry" /* 10396 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginBottom: 4, marginHorizontal: 24, alignItems: "center", flexDirection: "row" }, imageContainer: size, icon: obj2, headerText: { marginBottom: 2 } };
size = { width: 48, height: 48, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_400, opacity: 0.16, borderRadius: nativeDefault.radii.xl, marginRight: 16, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
obj2 = { margin: 12, position: "absolute", color: nativeDefault.unsafe_rawColors.GREEN_400 };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl2;
  let items;
  let items1;
  let tmp13;
  let tmp15;
  let tmp18;
  let tmp21;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(15);
  const tmp4 = closure_6();
  const container = tmp4.container;
  if (cResult[0] !== tmp4.imageContainer) {
    const obj2 = { style: tmp4.imageContainer };
    const tmp8 = React3(View, obj2);
    cResult[0] = tmp4.imageContainer;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4.icon) {
    const obj3 = { source: AssetRegistryDefault, style: tmp4.icon, color: tmp4.icon.color };
    const Icon = native.Icon;
    const tmp12 = React3(Icon, obj3);
    cResult[2] = tmp4.icon;
    cResult[3] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  const headerText = tmp4.headerText;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.DonStq);
    cResult[4] = stringResult;
    tmp13 = stringResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.headerText) {
    const obj4 = { color: "mobile-text-heading-primary", variant: "text-md/semibold", style: headerText, children: tmp13 };
    const tmp17 = React3(Text_Text.Text, obj4);
    cResult[5] = tmp4.headerText;
    cResult[6] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { color: "text-default", variant: "text-md/medium", children: intl2.string(intl3.t.jXFsai) };
    const Text = Text_Text.Text;
    intl2 = intl3.intl;
    const tmp20 = React3(Text, obj5);
    cResult[7] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp15) {
    const obj6 = { children: items };
    items = [tmp15, tmp18];
    const tmp24 = hasOwnProperty(View, obj6);
    cResult[8] = tmp15;
    cResult[9] = tmp24;
    tmp21 = tmp24;
  } else {
    tmp21 = cResult[9];
  }
  if (cResult[10] === tmp4.container) {
    if (cResult[11] === tmp5) {
      if (cResult[12] === tmp9) {
        let tmp25;
        if (cResult[13] === tmp21) {
          tmp25 = cResult[14];
        }
        return tmp25;
      }
    }
  }
  const obj7 = { style: container, children: items1 };
  items1 = [tmp5, tmp9, tmp21];
  const tmp26 = hasOwnProperty(View, obj7);
  cResult[10] = tmp4.container;
  cResult[11] = tmp5;
  cResult[12] = tmp9;
  cResult[13] = tmp21;
  cResult[14] = tmp26;
  tmp25 = tmp26;
}) : (() => {
  let intl;
  let intl2;
  let items;
  let items1;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  items = [, , ];
  const obj2 = { style: tmp.imageContainer };
  items[0] = React3(View, obj2);
  const obj3 = { source: AssetRegistryDefault, style: tmp.icon, color: tmp.icon.color };
  const Icon = native.Icon;
  items[1] = React3(Icon, obj3);
  const obj4 = { children: items1 };
  const obj5 = { color: "mobile-text-heading-primary", variant: "text-md/semibold", style: tmp.headerText, children: intl.string(intl3.t.DonStq) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [React3(Text, obj5), ];
  const obj6 = { color: "text-default", variant: "text-md/medium", children: intl2.string(intl3.t.jXFsai) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[1] = React3(Text2, obj6);
  items[2] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouUnreadClearedState.tsx");

export const ForYouUnreadClearedState = tmp5;