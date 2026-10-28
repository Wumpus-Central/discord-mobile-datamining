// discord_app/modules/conjure/templates/useConjureTemplatePrepare.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const prepareTemplate = fn(10733).prepareTemplate;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/templates/useConjureTemplatePrepare.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureTemplatePrepare(arg0, arg1, arg2) {
      _require = arg0;
      dependencyMap = arg1;
      noop = arg2;
      const cResult = require("c").c(5);
      if (cResult[0] === arg2) {
        if (cResult[1] === arg0) {
          if (cResult[2] === arg1) {
            let tmp2 = cResult[3];
            let tmp3 = cResult[4];
          }
          const effect = noop.useEffect(tmp2, tmp3);
        }
      }
      const fn = function s() {
        let tmp2 = null != closure_0;
        if (tmp2) {
          tmp2 = closure_2;
        }
        if (tmp2) {
          prepareTemplate(closure_0, closure_1);
        }
      };
      const items = [arg0, arg1, arg2];
      cResult[0] = arg2;
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items;
      tmp3 = items;
      tmp2 = fn;
    }
  : function useConjureTemplatePrepare(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      noop = arg2;
      const items = [arg0, arg1, arg2];
      const effect = noop.useEffect(() => {
        let tmp2 = null != closure_0;
        if (tmp2) {
          tmp2 = closure_2;
        }
        if (tmp2) {
          prepareTemplate(closure_0, closure_1);
        }
      }, items);
    };
