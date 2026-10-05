// === Module 16706: ConjureIdeasOffer ===

// Module 16706 (ConjureIdeasOffer)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import ConjureNativeMarkdownDefault from "ConjureNativeMarkdown" /* 16667 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/reminders/native/ConjureIdeasOffer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ style, attribution, onAsk } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: null };
    const intl = util.intl;
    obj2.source = intl.string(_modDef3723.s96AWB);
    const tmp8 = React4(ConjureNativeMarkdownDefault, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult = intl2.string(_modDef3723["U/bLzU"]);
    cResult[1] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === onAsk) {
    if (cResult[3] === tmp9) {
      let tmp13 = cResult[4];
    }
    if (cResult[5] === attribution) {
      if (cResult[6] === style) {
        if (cResult[7] === tmp13) {
          let tmp15 = cResult[8];
        }
        return tmp15;
      }
    }
    const obj3 = { style, children: null };
    const items = [attribution, first, tmp13];
    obj3.children = items;
    const tmp18 = hasOwnProperty(View, obj3);
    cResult[5] = attribution;
    cResult[6] = style;
    cResult[7] = tmp13;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  const tmp14 = React4(Stack_Stack.Stack, { direction: "horizontal", children: React4(components_Button_Button.Button, { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: tmp10 }) });
  cResult[2] = onAsk;
  cResult[3] = null == onAsk;
  cResult[4] = tmp14;
  tmp13 = tmp14;
  const obj4 = { direction: "horizontal", children: React4(components_Button_Button.Button, { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: tmp10 }) };
}) : ((onAsk) => {
  onAsk = onAsk.onAsk;
  const obj = { style: onAsk.style, children: null };
  const items = [onAsk.attribution, , ];
  const obj2 = { source: null };
  const intl = util.intl;
  obj2.source = intl.string(_modDef3723.s96AWB);
  items[1] = React4(ConjureNativeMarkdownDefault, obj2);
  const obj3 = { direction: "horizontal", children: null };
  const obj4 = { variant: "secondary", size: "sm", disabled: null == onAsk, onPress: onAsk, text: null };
  const intl2 = util.intl;
  obj4.text = intl2.string(_modDef3723["U/bLzU"]);
  obj3.children = React4(components_Button_Button.Button, obj4);
  items[2] = React4(Stack_Stack.Stack, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});