// === Module 12562: ConjureScopeCardView ===

// Module 12562 (ConjureScopeCardView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5271 */;
import ConjureScopeServerCardDefault from "ConjureScopeServerCard" /* 12563 */;
import ConjureClarificationCardDefault from "ConjureClarificationCard" /* 12570 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5005);
const obj2 = { container: { gap: nativeDefault.space.PX_4 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeCardView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureScopeCardView(arg0) {
  const cResult = c.c(10);
  ({ projectId, card, onInputFocusChange } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === card) {
    if (cResult[1] === onInputFocusChange) {
      if (cResult[2] === projectId) {
        if (cResult[4] !== card.failure) {
          let tmp12 = null;
          if (null != card.failure) {
            const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: card.failure };
            tmp12 = React4(Text_Text.Text, obj3);
          }
          cResult[4] = card.failure;
          cResult[5] = tmp12;
          let tmp11 = tmp12;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] === tmp4.container) {
          if (cResult[7] === tmp5) {
            if (cResult[8] === tmp11) {
              let tmp14 = cResult[9];
            }
            return tmp14;
          }
        }
        const obj4 = { style: tmp4.container, children: null };
        const items = [cResult[3], tmp11];
        obj4.children = items;
        const tmp17 = hasOwnProperty(View, obj4);
        cResult[6] = tmp4.container;
        cResult[7] = cResult[3];
        cResult[8] = tmp11;
        cResult[9] = tmp17;
        tmp14 = tmp17;
      }
    }
  }
  if (true === card.serverStep) {
    const obj5 = { projectId, card };
    let tmp8 = React4(ConjureScopeServerCardDefault, obj5, card.clarification.id);
  } else {
    const obj9 = { projectId, clarification: null, onSubmit: null, submitText: null, onBack: null, backText: null, hideSubmit: null, onInputFocusChange: null };
    ({ clarification: obj2.clarification, onSubmit: obj2.onSubmit, submitText: obj2.submitText, onBack: obj2.onBack, backText: obj2.backText, hideSubmit: obj2.hideSubmit } = card);
    obj9.onInputFocusChange = onInputFocusChange;
    tmp8 = React4(ConjureClarificationCardDefault, obj9, card.clarification.id);
  }
  cResult[0] = card;
  cResult[1] = onInputFocusChange;
  cResult[2] = projectId;
  cResult[3] = tmp8;
}) : (function ConjureScopeCardView(onInputFocusChange) {
  ({ projectId, card } = onInputFocusChange);
  const obj = { style: closure_6().container, children: null };
  if (true === card.serverStep) {
    const obj3 = { projectId, card };
    let tmp6 = React4(ConjureScopeServerCardDefault, obj3, card.clarification.id);
    let tmp3 = React4;
  } else {
    tmp3 = React4;
    const obj4 = { projectId, clarification: null, onSubmit: null, submitText: null, onBack: null, backText: null, hideSubmit: null, onInputFocusChange: null };
    ({ clarification: obj2.clarification, onSubmit: obj2.onSubmit, submitText: obj2.submitText, onBack: obj2.onBack, backText: obj2.backText, hideSubmit: obj2.hideSubmit } = card);
    obj4.onInputFocusChange = onInputFocusChange.onInputFocusChange;
    tmp6 = React4(ConjureClarificationCardDefault, obj4, card.clarification.id);
  }
  const items = [tmp6, ];
  let tmp3Result = null;
  if (null != card.failure) {
    const obj7 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: card.failure };
    tmp3Result = tmp3(Text_Text.Text, obj7);
  }
  items[1] = tmp3Result;
  obj.children = items;
  return hasOwnProperty(View, obj);
});