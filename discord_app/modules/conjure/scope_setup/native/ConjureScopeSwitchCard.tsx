// === Module 12560: ConjureScopeSwitchCard ===

// Module 12560 (ConjureScopeSwitchCard)
import c from "c" /* 576 */;
import useConjureScopeCards from "useConjureScopeCards" /* 12561 */;
import ConjureScopeCardViewDefault from "ConjureScopeCardView" /* 12562 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["onInputFocusChange"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeSwitchCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureScopeSwitchCard(onInputFocusChange) {
  const cResult = c.c(7);
  if (cResult[0] !== onInputFocusChange) {
    onInputFocusChange = onInputFocusChange.onInputFocusChange;
    const tmp8 = _objectWithoutProperties(onInputFocusChange, closure_3);
    cResult[0] = onInputFocusChange;
    cResult[1] = onInputFocusChange;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = onInputFocusChange;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const conjureScopeSwitchCard = useConjureScopeCards.useConjureScopeSwitchCard(tmp5);
  if (cResult[3] === conjureScopeSwitchCard) {
    if (cResult[4] === tmp4) {
      if (cResult[5] === tmp5.projectId) {
        let tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const tmp11 = jsx(ConjureScopeCardViewDefault, { projectId: tmp5.projectId, card: conjureScopeSwitchCard, onInputFocusChange: tmp4 });
  cResult[3] = conjureScopeSwitchCard;
  cResult[4] = tmp4;
  cResult[5] = tmp5.projectId;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  const obj2 = { projectId: tmp5.projectId, card: conjureScopeSwitchCard, onInputFocusChange: tmp4 };
  const tmpResult = useConjureScopeCards;
}) : (function ConjureScopeSwitchCard(onInputFocusChange) {
  const merged = Object.assign(onInputFocusChange, Object.assign({ onInputFocusChange: 0 }));
  const conjureScopeSwitchCard = useConjureScopeCards.useConjureScopeSwitchCard(merged);
  return jsx(ConjureScopeCardViewDefault, { projectId: merged.projectId, card: conjureScopeSwitchCard, onInputFocusChange: onInputFocusChange.onInputFocusChange });
});