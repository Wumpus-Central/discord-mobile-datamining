// === Module 12444: publish/useConjureStartPublish ===

// Module 12444 (publish/useConjureStartPublish)
import ConjurePublishTypes from "ConjurePublishTypes" /* 10960 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2, arg3) {
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
};