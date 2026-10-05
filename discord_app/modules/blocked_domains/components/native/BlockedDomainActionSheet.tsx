// === Module 12750: BlockedDomainActionSheet ===

// Module 12750 (BlockedDomainActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import TrafficConeSpotIllustration from "TrafficConeSpotIllustration" /* 6078 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import URLCallout from "URLCallout" /* 12751 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, url;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, title: { textAlign: "center" }, warningMessage: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((url) => {
  let first;
  let intl3;
  let items;
  let items1;
  let obj7;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(17);
  url = url.url;
  const tmp4 = closure_5();
  const container = tmp4.container;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = _false(TrafficConeSpotIllustration.TrafficConeSpotIllustration, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  const title = tmp4.title;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["2B3wj8"]);
    cResult[1] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.title) {
    const obj2 = { style: title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp8 };
    const tmp12 = _false(Text_Text.Text, obj2);
    cResult[2] = tmp4.title;
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  const warningMessage = tmp4.warningMessage;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const formatResult = intl2.format(intl4.t.jnHyYU, {});
    cResult[4] = formatResult;
    tmp13 = formatResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.warningMessage) {
    const obj3 = { style: warningMessage, variant: "text-md/medium", children: tmp13 };
    const tmp17 = _false(Text_Text.Text, obj3);
    cResult[5] = tmp4.warningMessage;
    cResult[6] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp10) {
    let tmp18;
    let tmp20;
    let tmp23;
    if (cResult[8] === tmp15) {
      tmp18 = cResult[9];
    }
    if (cResult[10] !== url) {
      const obj4 = { url };
      const tmp22 = _false(URLCallout.URLCallout, obj4);
      cResult[10] = url;
      cResult[11] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[11];
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = {
        grow: true,
        text: intl3.string(intl4.t["/g10LC"]),
        onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              return obj.hideActionSheet();
            }
      };
      const Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      const tmp25 = _false(Button, obj5);
      cResult[12] = tmp25;
      tmp23 = tmp25;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] === tmp4.container) {
      if (cResult[14] === tmp20) {
        let tmp26;
        if (cResult[15] === tmp18) {
          tmp26 = cResult[16];
        }
        return tmp26;
      }
    }
    const obj6 = { startExpanded: true, children: React3(Stack_Stack.Stack, obj7) };
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    obj7 = { spacing: 16, justify: "center", align: "center", style: container, children: items };
    items = [tmp18, tmp20, tmp23];
    const tmp29 = _false(BottomSheet, obj6);
    cResult[13] = tmp4.container;
    cResult[14] = tmp20;
    cResult[15] = tmp18;
    cResult[16] = tmp29;
    tmp26 = tmp29;
  }
  const obj8 = { spacing: 8, justify: "center", align: "center", children: items1 };
  items1 = [first, tmp10, tmp15];
  const tmp19 = React3(Stack_Stack.Stack, obj8);
  cResult[7] = tmp10;
  cResult[8] = tmp15;
  cResult[9] = tmp19;
  tmp18 = tmp19;
}) : ((url) => {
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj2;
  url = url.url;
  const tmp = closure_5();
  let obj = { startExpanded: true, children: React3(Stack, obj2) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { spacing: 16, justify: "center", align: "center", style: tmp.container, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { spacing: 8, justify: "center", align: "center", children: items };
  const Stack2 = Stack_Stack.Stack;
  items = [_false(TrafficConeSpotIllustration.TrafficConeSpotIllustration, {}), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["2B3wj8"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = _false(Text, obj4);
  const obj5 = { style: tmp.warningMessage, variant: "text-md/medium", children: intl2.format(intl4.t.jnHyYU, {}) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = _false(Text2, obj5);
  items1 = [React3(Stack2, obj3), _false(URLCallout.URLCallout, { url }), ];
  const obj6 = {
    grow: true,
    text: intl3.string(intl4.t["/g10LC"]),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet();
    }
  };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[2] = _false(Button, obj6);
  return _false(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/blocked_domains/components/native/BlockedDomainActionSheet.tsx");

export default tmp4;