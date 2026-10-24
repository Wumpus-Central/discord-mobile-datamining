// discord_app/modules/conjure/scope_setup/native/ConjureScopeSetupCard.tsx
import c from "../../../../../_runtime/00576_c.js";
import useConjureScopeCards from "../useConjureScopeCards.tsx";
import ConjureScopeCardViewDefault from "ConjureScopeCardView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/scope_setup/native/ConjureScopeSetupCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureScopeSetupCard(projectId) {
      const cResult = c.c(3);
      projectId = projectId.projectId;
      const conjureScopeSetupCard = useConjureScopeCards.useConjureScopeSetupCard(projectId);
      if (cResult[0] === conjureScopeSetupCard) {
        if (cResult[1] === projectId) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      let tmp5 = null;
      if (null != conjureScopeSetupCard) {
        const obj3 = { projectId, card: conjureScopeSetupCard };
        tmp5 = jsx(ConjureScopeCardViewDefault, { projectId, card: conjureScopeSetupCard });
      }
      cResult[0] = conjureScopeSetupCard;
      cResult[1] = projectId;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : function ConjureScopeSetupCard(projectId) {
      projectId = projectId.projectId;
      const conjureScopeSetupCard = useConjureScopeCards.useConjureScopeSetupCard(projectId);
      let tmp3 = null;
      if (null != conjureScopeSetupCard) {
        const obj2 = { projectId, card: conjureScopeSetupCard };
        tmp3 = jsx(ConjureScopeCardViewDefault, { projectId, card: conjureScopeSetupCard });
      }
      return tmp3;
    };
