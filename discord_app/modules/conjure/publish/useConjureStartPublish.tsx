// === Module 14412: useConjureStartPublish ===

// Module 14412 (useConjureStartPublish)
import useConjurePublishAction from "useConjurePublishAction" /* 14403 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let context = arg2;
  if (arg2 == null) {
    context = noop.useContext(useConjurePublishAction.ConjurePublishActionContext);
  }
  items = [arg0, arg1, context];
  return noop.useCallback((arg0) => {
    let disabled = null == closure_0;
    if (!disabled) {
      disabled = null == closure_1;
    }
    if (!disabled) {
      disabled = null == context;
    }
    if (!disabled) {
      disabled = closure_1.disabled;
    }
    if (!disabled) {
      closure_1.run(arg0);
    }
  }, items);
};