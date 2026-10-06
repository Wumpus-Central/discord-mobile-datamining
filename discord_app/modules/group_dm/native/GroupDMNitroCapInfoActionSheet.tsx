// === Module 11829: GroupDMNitroCapInfoActionSheet ===

// Module 11829 (GroupDMNitroCapInfoActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import GroupDMConstants from "GroupDMConstants" /* 11228 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const number = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, body: obj4, button: obj5 };
obj2 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj4 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
obj5 = { width: "100%", marginTop: nativeDefault.space.PX_24 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let container;
  let first;
  let intl3;
  let items;
  let obj8;
  let title;
  let tmp11;
  let tmp14;
  let tmp17;
  let tmp20;
  let tmp6;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(15);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  ({ container, title } = tmp4);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.u1ilug);
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4.title) {
    const obj2 = { style: title, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: tmp6 };
    const tmp10 = metroRequire(Text_Text.Text, obj2);
    cResult[2] = tmp4.title;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  const body = tmp4.body;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const obj3 = { number };
    const formatToPlainStringResult = intl2.formatToPlainString(intl4.t["mr27w/"], obj3);
    cResult[4] = formatToPlainStringResult;
    tmp11 = formatToPlainStringResult;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp4.body) {
    const obj4 = { style: body, variant: "text-md/medium", color: "text-muted", children: tmp11 };
    const tmp16 = metroRequire(Text_Text.Text, obj4);
    cResult[5] = tmp4.body;
    cResult[6] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { text: intl3.string(intl4.t.cpT0Cq), variant: "secondary", onPress: first, grow: true };
    const Button = components_Button_Button.Button;
    intl3 = intl4.intl;
    const tmp19 = metroRequire(Button, obj5);
    cResult[7] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== tmp4.button) {
    const obj6 = { style: tmp4.button, children: tmp17 };
    const tmp23 = metroRequire(View, obj6);
    cResult[8] = tmp4.button;
    cResult[9] = tmp23;
    tmp20 = tmp23;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] === tmp4.container) {
    if (cResult[11] === tmp8) {
      if (cResult[12] === tmp14) {
        let tmp24;
        if (cResult[13] === tmp20) {
          tmp24 = cResult[14];
        }
        return tmp24;
      }
    }
  }
  const obj7 = { showGradient: true, children: metroImportDefault(View, obj8) };
  obj8 = { style: container, children: items };
  items = [tmp8, tmp14, tmp20];
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const tmp25 = metroRequire(BottomSheet, obj7);
  cResult[10] = tmp4.container;
  cResult[11] = tmp8;
  cResult[12] = tmp14;
  cResult[13] = tmp20;
  cResult[14] = tmp25;
  tmp24 = tmp25;
}) : (() => {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let obj5;
  let obj7;
  const tmp = closure_8();
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, []);
  let obj = { showGradient: true, children: metroImportDefault(View, obj2) };
  obj2 = { style: tmp.container, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj3 = { style: tmp.title, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl.string(intl4.t.u1ilug) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [metroRequire(Text, obj3), , ];
  const obj4 = { style: tmp.body, variant: "text-md/medium", color: "text-muted", children: intl2.formatToPlainString(intl4.t["mr27w/"], obj5) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  obj5 = { number };
  items[1] = metroRequire(Text2, obj4);
  const obj6 = { style: tmp.button, children: metroRequire(Button, obj7) };
  obj7 = { text: intl3.string(intl4.t.cpT0Cq), variant: "secondary", onPress: callback, grow: true };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = metroRequire(View, obj6);
  return metroRequire(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapInfoActionSheet.tsx");

export default tmp4;