// === Module 12886: ConjureScopeSwitchCard ===

// Module 12886 (ConjureScopeSwitchCard)
import useConjureScopeCards from "useConjureScopeCards" /* 12887 */;
import ConjureScopeCardViewDefault from "ConjureScopeCardView" /* 12888 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeSwitchCard.tsx");

export default function ConjureScopeSwitchCard(onInputFocusChange) {
  const merged = Object.assign(onInputFocusChange, Object.assign({ onInputFocusChange: 0 }));
  const conjureScopeSwitchCard = useConjureScopeCards.useConjureScopeSwitchCard(merged);
  return jsx(ConjureScopeCardViewDefault, { projectId: merged.projectId, card: conjureScopeSwitchCard, onInputFocusChange: onInputFocusChange.onInputFocusChange });
};