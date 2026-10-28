// === Module 12191: publish/useConjureStartPublish ===

// Module 12191 (publish/useConjureStartPublish)
import ConjurePublishTypes from "ConjurePublishTypes" /* 10842 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureStartPublish.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureStartPublish(arg0, arg1, arg2, arg3) {
  _require = arg0;
  dependencyMap = arg1;
  let context = arg2;
  noop = arg3;
  const cResult = require("c").c(5);
  if (arg2 == null) {
    context = noop.useContext(require("useConjurePublishAction").ConjurePublishActionContext);
  }
  if (cResult[0] === arg3) {
    if (cResult[1] === arg0) {
      if (cResult[2] === arg1) {
        if (cResult[3] === context) {
          let tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const fn = function o(entryPoint) {
    if (null != closure_0) {
      if (null != closure_1) {
        if (null != context) {
          if (!closure_1.disabled) {
            const status = closure_1.status;
            if (status != null) {
              const publishState = status.publishState;
            }
            if (closure_1.awaitingApproval) {
              closure_1.run(entryPoint);
            } else {
              if (null != publishState) {
                ConjurePublishTypes;
              }
              const obj2 = { projectId: tmp, publishOptions: tmp8, entryPoint };
              closure_2(obj2);
            }
          }
        }
      }
    }
  };
  cResult[0] = arg3;
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = context;
  cResult[4] = fn;
  tmp3 = fn;
}) : (function useConjureStartPublish(arg0, arg1, arg2, arg3) {
  _require = arg0;
  dependencyMap = arg1;
  let context = arg2;
  noop = arg3;
  if (arg2 == null) {
    context = noop.useContext(require("useConjurePublishAction").ConjurePublishActionContext);
  }
  const items = [arg0, arg1, context, arg3];
  return noop.useCallback((entryPoint) => {
    if (null != closure_0) {
      if (null != closure_1) {
        if (null != context) {
          if (!closure_1.disabled) {
            const status = closure_1.status;
            if (status != null) {
              const publishState = status.publishState;
            }
            if (closure_1.awaitingApproval) {
              closure_1.run(entryPoint);
            } else {
              if (null != publishState) {
                ConjurePublishTypes;
              }
              const obj2 = { projectId: tmp, publishOptions: tmp8, entryPoint };
              closure_2(obj2);
            }
          }
        }
      }
    }
  }, items);
});