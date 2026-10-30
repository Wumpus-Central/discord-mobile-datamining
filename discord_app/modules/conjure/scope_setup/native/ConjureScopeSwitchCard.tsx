// discord_app/modules/conjure/scope_setup/native/ConjureScopeSwitchCard.tsx
import useConjureScopeCards from "../useConjureScopeCards.tsx";
import ConjureScopeCardViewDefault from "ConjureScopeCardView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeSwitchCard.tsx");

export default function ConjureScopeSwitchCard(onInputFocusChange) {
  const merged = Object.assign(onInputFocusChange, Object.assign({ onInputFocusChange: 0 }));
  const conjureScopeSwitchCard = useConjureScopeCards.useConjureScopeSwitchCard(merged);
  return jsx(ConjureScopeCardViewDefault, {
    projectId: merged.projectId,
    card: conjureScopeSwitchCard,
    onInputFocusChange: onInputFocusChange.onInputFocusChange,
  });
}
