// === Module 11815: GroupDMNitroCapInfoActionSheet ===

// Module 11815 (GroupDMNitroCapInfoActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const number = fn(11215).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, title: null, body: null, button: null };
let obj3 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.title = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj2.body = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
let obj5 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
obj2.button = { width: "100%", marginTop: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { width: "100%", marginTop: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapInfoActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(15);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  ({ container, title } = tmp4);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.u1ilug);
    cResult[1] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4.title) {
    const obj2 = { style: title, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: tmp6 };
    const tmp10 = timestampProducer(Text_Text.Text, obj2);
    cResult[2] = tmp4.title;
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const obj3 = { number };
    const formatToPlainStringResult = intl2.formatToPlainString(util.t["mr27w/"], obj3);
    cResult[4] = formatToPlainStringResult;
    let tmp11 = formatToPlainStringResult;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp4.body) {
    const obj4 = { style: tmp4.body, variant: "text-md/medium", color: "text-muted", children: tmp11 };
    const tmp16 = timestampProducer(Text_Text.Text, obj4);
    cResult[5] = tmp4.body;
    cResult[6] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { text: null, variant: "secondary", onPress: null, grow: true };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t.cpT0Cq);
    obj5.onPress = first;
    const tmp19 = timestampProducer(components_Button_Button.Button, obj5);
    cResult[7] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== tmp4.button) {
    const obj6 = { style: tmp4.button, children: tmp17 };
    const tmp23 = timestampProducer(View, obj6);
    cResult[8] = tmp4.button;
    cResult[9] = tmp23;
    let tmp20 = tmp23;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] === tmp4.container) {
    if (cResult[11] === tmp8) {
      if (cResult[12] === tmp14) {
        if (cResult[13] === tmp20) {
          let tmp24 = cResult[14];
        }
        return tmp24;
      }
    }
  }
  const obj7 = { showGradient: true, children: null };
  const obj8 = { style: container, children: null };
  const items = [tmp8, tmp14, tmp20];
  obj8.children = items;
  obj7.children = React5(View, obj8);
  const tmp25 = timestampProducer(Sheet_BottomSheet.BottomSheet, obj7);
  cResult[10] = tmp4.container;
  cResult[11] = tmp8;
  cResult[12] = tmp14;
  cResult[13] = tmp20;
  cResult[14] = tmp25;
  tmp24 = tmp25;
}) : (() => {
  const tmp = closure_8();
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, []);
  const obj = { showGradient: true, children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.u1ilug);
  const items = [timestampProducer(Text_Text.Text, obj3), , ];
  const obj4 = { style: tmp.body, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.formatToPlainString(util.t["mr27w/"], { number });
  items[1] = timestampProducer(Text_Text.Text, obj4);
  const obj6 = { style: tmp.button, children: null };
  const obj7 = { text: null, variant: "secondary", onPress: null, grow: true };
  const intl3 = util.intl;
  obj7.text = intl3.string(util.t.cpT0Cq);
  obj7.onPress = callback;
  obj6.children = timestampProducer(components_Button_Button.Button, obj7);
  items[2] = timestampProducer(View, obj6);
  obj2.children = items;
  obj.children = React5(View, obj2);
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
});