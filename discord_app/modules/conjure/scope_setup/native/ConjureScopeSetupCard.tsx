// discord_app/modules/conjure/scope_setup/native/ConjureScopeSetupCard.tsx
import useConjureScopeCards from "../useConjureScopeCards.tsx";
import ConjureScopeCardViewDefault from "ConjureScopeCardView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeSetupCard.tsx");

export default function ConjureScopeSetupCard(projectId) {
  projectId = projectId.projectId;
  const conjureScopeSetupCard = useConjureScopeCards.useConjureScopeSetupCard(projectId);
  let tmp3 = null;
  if (null != conjureScopeSetupCard) {
    const obj2 = { projectId, card: conjureScopeSetupCard };
    tmp3 = jsx(ConjureScopeCardViewDefault, { projectId, card: conjureScopeSetupCard });
  }
  return tmp3;
}
