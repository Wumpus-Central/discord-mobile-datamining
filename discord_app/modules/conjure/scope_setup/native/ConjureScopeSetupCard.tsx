// === Module 12794: ConjureScopeSetupCard ===

// Module 12794 (ConjureScopeSetupCard)
import useConjureScopeCards from "useConjureScopeCards" /* 12751 */;
import ConjureScopeCardViewDefault from "ConjureScopeCardView" /* 12752 */;
import noop from "module_19" /* 19 */;

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
};