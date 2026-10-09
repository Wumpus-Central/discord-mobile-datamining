// === Module 12993: BlockedDomainActionSheet ===

// Module 12993 (BlockedDomainActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import Stack_Stack from "Stack/Stack" /* 5374 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import TrafficConeSpotIllustration from "TrafficConeSpotIllustration" /* 6273 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6836 */;
import URLCallout from "URLCallout" /* 12994 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { padding: nativeDefault.space.PX_16 }, title: { textAlign: "center" }, warningMessage: { textAlign: "center" } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/blocked_domains/components/native/BlockedDomainActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BlockedDomainActionSheet(url) {
  const cResult = c.c(17);
  url = url.url;
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React3(TrafficConeSpotIllustration.TrafficConeSpotIllustration, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["2B3wj8"]);
    cResult[1] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.title) {
    const obj2 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp8 };
    const tmp12 = React3(Text_Text.Text, obj2);
    cResult[2] = tmp4.title;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const formatResult = intl2.format(util.t.jnHyYU, {});
    cResult[4] = formatResult;
    let tmp13 = formatResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.warningMessage) {
    const obj3 = { style: tmp4.warningMessage, variant: "text-md/medium", children: tmp13 };
    const tmp17 = React3(Text_Text.Text, obj3);
    cResult[5] = tmp4.warningMessage;
    cResult[6] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp10) {
    if (cResult[8] === tmp15) {
      let tmp18 = cResult[9];
    }
    if (cResult[10] !== url) {
      const obj4 = { url };
      const tmp22 = React3(URLCallout.URLCallout, obj4);
      cResult[10] = url;
      cResult[11] = tmp22;
      let tmp20 = tmp22;
    } else {
      tmp20 = cResult[11];
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { grow: true, text: null, onPress: null };
      const intl3 = util.intl;
      obj5.text = intl3.string(util.t["/g10LC"]);
      obj5.onPress = function onPress() {
        return ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      const tmp25 = React3(components_Button_Button.Button, obj5);
      cResult[12] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] === tmp4.container) {
      if (cResult[14] === tmp20) {
        if (cResult[15] === tmp18) {
          let tmp26 = cResult[16];
        }
        return tmp26;
      }
    }
    const obj6 = { startExpanded: true, children: null };
    const obj7 = { spacing: 16, justify: "center", align: "center", style: tmp4.container, children: null };
    const items = [tmp18, tmp20, tmp23];
    obj7.children = items;
    obj6.children = React4(Stack_Stack.Stack, obj7);
    const tmp29 = React3(Sheet_BottomSheet.BottomSheet, obj6);
    cResult[13] = tmp4.container;
    cResult[14] = tmp20;
    cResult[15] = tmp18;
    cResult[16] = tmp29;
    tmp26 = tmp29;
  }
  const obj8 = { spacing: 8, justify: "center", align: "center", children: null };
  const items1 = [first, tmp10, tmp15];
  obj8.children = items1;
  const tmp19 = React4(Stack_Stack.Stack, obj8);
  cResult[7] = tmp10;
  cResult[8] = tmp15;
  cResult[9] = tmp19;
  tmp18 = tmp19;
}) : (function BlockedDomainActionSheet(url) {
  const tmp = closure_5();
  const obj = { startExpanded: true, children: null };
  const obj2 = { spacing: 16, justify: "center", align: "center", style: tmp.container, children: null };
  const obj3 = { spacing: 8, justify: "center", align: "center", children: null };
  const items = [React3(TrafficConeSpotIllustration.TrafficConeSpotIllustration, {}), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["2B3wj8"]);
  items[1] = React3(Text_Text.Text, obj4);
  const obj5 = { style: tmp.warningMessage, variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.format(util.t.jnHyYU, {});
  items[2] = React3(Text_Text.Text, obj5);
  obj3.children = items;
  const items1 = [React4(Stack_Stack.Stack, obj3), React3(URLCallout.URLCallout, { url: url.url }), ];
  const obj6 = { grow: true, text: null, onPress: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["/g10LC"]);
  obj6.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items1[2] = React3(components_Button_Button.Button, obj6);
  obj2.children = items1;
  obj.children = React4(Stack_Stack.Stack, obj2);
  return React3(Sheet_BottomSheet.BottomSheet, obj);
});