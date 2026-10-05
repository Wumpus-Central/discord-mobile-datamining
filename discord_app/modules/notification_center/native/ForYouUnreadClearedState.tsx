// === Module 16386: ForYouUnreadClearedState ===

// Module 16386 (ForYouUnreadClearedState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import _modDef10383 from "module_10383" /* 10383 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { marginBottom: 4, marginHorizontal: 24, alignItems: "center", flexDirection: "row" }, imageContainer: null, icon: null, headerText: null };
let size = { width: 48, height: 48, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_400, opacity: 0.16, borderRadius: nativeDefault.radii.xl, marginRight: 16, justifyContent: "center", alignItems: "center" };
obj2.imageContainer = size;
obj2.icon = { margin: 12, position: "absolute", color: nativeDefault.unsafe_rawColors.GREEN_400 };
obj2.headerText = { marginBottom: 2 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { margin: 12, position: "absolute", color: nativeDefault.unsafe_rawColors.GREEN_400 };
size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouUnreadClearedState.tsx");

export const ForYouUnreadClearedState = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(15);
  const tmp4 = closure_6();
  if (cResult[0] !== tmp4.imageContainer) {
    const obj2 = { style: tmp4.imageContainer };
    const tmp8 = React4(View, obj2);
    cResult[0] = tmp4.imageContainer;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4.icon) {
    const obj3 = { source: _modDef10383, style: tmp4.icon, color: tmp4.icon.color };
    const tmp12 = React4(native.Icon, obj3);
    cResult[2] = tmp4.icon;
    cResult[3] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.DonStq);
    cResult[4] = stringResult;
    let tmp13 = stringResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.headerText) {
    const obj4 = { color: "mobile-text-heading-primary", variant: "text-md/semibold", style: tmp4.headerText, children: tmp13 };
    const tmp17 = React4(Text_Text.Text, obj4);
    cResult[5] = tmp4.headerText;
    cResult[6] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { color: "text-default", variant: "text-md/medium", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.jXFsai);
    const tmp20 = React4(Text_Text.Text, obj5);
    cResult[7] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp15) {
    const obj6 = { children: null };
    const items = [tmp15, tmp18];
    obj6.children = items;
    const tmp24 = hasOwnProperty(View, obj6);
    cResult[8] = tmp15;
    cResult[9] = tmp24;
    let tmp21 = tmp24;
  } else {
    tmp21 = cResult[9];
  }
  if (cResult[10] === tmp4.container) {
    if (cResult[11] === tmp5) {
      if (cResult[12] === tmp9) {
        if (cResult[13] === tmp21) {
          let tmp25 = cResult[14];
        }
        return tmp25;
      }
    }
  }
  const obj7 = { style: tmp4.container, children: null };
  const items1 = [tmp5, tmp9, tmp21];
  obj7.children = items1;
  const tmp26 = hasOwnProperty(View, obj7);
  cResult[10] = tmp4.container;
  cResult[11] = tmp5;
  cResult[12] = tmp9;
  cResult[13] = tmp21;
  cResult[14] = tmp26;
  tmp25 = tmp26;
}) : (() => {
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const items = [React4(View, { style: tmp.imageContainer }), React4(native.Icon, { source: _modDef10383, style: tmp.icon, color: tmp.icon.color }), ];
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
});