// === Module 12508: ConjureScopeCardView ===

// Module 12508 (ConjureScopeCardView)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5270 */;
import ConjureClarificationCardDefault from "ConjureClarificationCard" /* 12509 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5004);
let obj2 = { container: { gap: nativeDefault.space.PX_4 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeCardView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureScopeCardView(arg0) {
  const cResult = c.c(15);
  ({ projectId, card, onInputFocusChange } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === card.backText) {
    if (cResult[1] === card.clarification) {
      if (cResult[2] === card.hideSubmit) {
        if (cResult[3] === card.onBack) {
          if (cResult[4] === card.onSubmit) {
            if (cResult[5] === card.submitText) {
              if (cResult[6] === onInputFocusChange) {
                if (cResult[7] === projectId) {
                  let tmp5 = cResult[8];
                }
                if (cResult[9] !== card.failure) {
                  let tmp8 = null;
                  if (null != card.failure) {
                    const obj2 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: card.failure };
                    tmp8 = React4(Text_Text.Text, obj2);
                  }
                  cResult[9] = card.failure;
                  cResult[10] = tmp8;
                  let tmp7 = tmp8;
                } else {
                  tmp7 = cResult[10];
                }
                if (cResult[11] === tmp4.container) {
                  if (cResult[12] === tmp5) {
                    if (cResult[13] === tmp7) {
                      let tmp10 = cResult[14];
                    }
                    return tmp10;
                  }
                }
                const obj3 = { style: tmp4.container, children: null };
                const items = [tmp5, tmp7];
                obj3.children = items;
                const tmp13 = hasOwnProperty(View, obj3);
                cResult[11] = tmp4.container;
                cResult[12] = tmp5;
                cResult[13] = tmp7;
                cResult[14] = tmp13;
                tmp10 = tmp13;
              }
            }
          }
        }
      }
    }
  }
  const tmp6 = React4(ConjureClarificationCardDefault, { projectId, clarification: card.clarification, onSubmit: card.onSubmit, submitText: card.submitText, onBack: card.onBack, backText: card.backText, hideSubmit: card.hideSubmit, onInputFocusChange }, card.clarification.id);
  cResult[0] = card.backText;
  cResult[1] = card.clarification;
  cResult[2] = card.hideSubmit;
  cResult[3] = card.onBack;
  cResult[4] = card.onSubmit;
  cResult[5] = card.submitText;
  cResult[6] = onInputFocusChange;
  cResult[7] = projectId;
  cResult[8] = tmp6;
  tmp5 = tmp6;
  const obj4 = { projectId, clarification: card.clarification, onSubmit: card.onSubmit, submitText: card.submitText, onBack: card.onBack, backText: card.backText, hideSubmit: card.hideSubmit, onInputFocusChange };
}) : (function ConjureScopeCardView(card) {
  card = card.card;
  ({ projectId, onInputFocusChange } = card);
  const obj = { style: closure_6().container, children: null };
  const items = [React4(ConjureClarificationCardDefault, { projectId, clarification: card.clarification, onSubmit: card.onSubmit, submitText: card.submitText, onBack: card.onBack, backText: card.backText, hideSubmit: card.hideSubmit, onInputFocusChange }, card.clarification.id), ];
  let tmp3Result = null;
  if (null != card.failure) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: card.failure };
    tmp3Result = React4(Text_Text.Text, obj3);
  }
  items[1] = tmp3Result;
  obj.children = items;
  return hasOwnProperty(View, obj);
});