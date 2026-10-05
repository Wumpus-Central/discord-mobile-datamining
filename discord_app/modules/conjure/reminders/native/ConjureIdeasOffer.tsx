// === Module 16706: ConjureIdeasOffer ===

// Module 16706 (ConjureIdeasOffer)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import ConjureNativeMarkdownDefault from "ConjureNativeMarkdown" /* 16667 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let attribution;
  let first;
  let intl;
  let items;
  let onAsk;
  let style;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(9);
  ({ style, attribution, onAsk } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: intl.string(_modDef3723.s96AWB) };
    const tmp7 = ConjureNativeMarkdownDefault;
    intl = intl3.intl;
    const tmp8 = React3(tmp7, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl3.intl;
    const stringResult = intl2.string(_modDef3723["U/bLzU"]);
    cResult[1] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === onAsk) {
    let tmp13;
    if (cResult[3] === null == onAsk) {
      tmp13 = cResult[4];
    }
    if (cResult[5] === attribution) {
      if (cResult[6] === style) {
        let tmp15;
        if (cResult[7] === tmp13) {
          tmp15 = cResult[8];
        }
        return tmp15;
      }
    }
    const obj3 = { style, children: items };
    items = [attribution, first, tmp13];
    const tmp18 = hasOwnProperty(View, obj3);
    cResult[5] = attribution;
    cResult[6] = style;
    cResult[7] = tmp13;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  const obj4 = { direction: "horizontal", children: React3(components_Button_Button.Button, { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: tmp10 }) };
  const Stack = Stack_Stack.Stack;
  const tmp14 = React3(Stack, obj4);
  cResult[2] = onAsk;
  cResult[3] = null == onAsk;
  cResult[4] = tmp14;
  tmp13 = tmp14;
}) : ((onAsk) => {
  let Button;
  let intl;
  let intl2;
  let items;
  let obj4;
  onAsk = onAsk.onAsk;
  const obj = { style: onAsk.style, children: items };
  items = [onAsk.attribution, , ];
  const obj2 = { source: intl.string(_modDef3723.s96AWB) };
  const tmp = ConjureNativeMarkdownDefault;
  intl = intl3.intl;
  items[1] = React3(tmp, obj2);
  const obj3 = { direction: "horizontal", children: React3(Button, obj4) };
  const Stack = Stack_Stack.Stack;
  obj4 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: intl2.string(_modDef3723["U/bLzU"]) };
  Button = components_Button_Button.Button;
  intl2 = intl3.intl;
  items[2] = React3(Stack, obj3);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/conjure/reminders/native/ConjureIdeasOffer.tsx");

export default tmp4;