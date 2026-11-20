// discord_app/modules/conjure/publish/useConjureStartPublish.tsx
import useConjurePublishAction from "useConjurePublishAction.tsx";
import conjurePublishReview from "conjurePublishReview.tsx";
import openConjurePublishReview from "openConjurePublishReview.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "ConjurePublishStatusStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_6 = async function _publishNow(arg0) {
  await require("useConjurePublishAction").runConjurePublishAction(closure_0, closure_1, closure_2);
  if (1 === tmp6) {
    c6 = 0;
    c3 = 3;
  } else if (arg0 === 1) {
    c3 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c6 = 0;
  }
  return value;
};
function startConjurePublish(projectId, entryPoint, context) {
  const project = ConjureProjectStore.getProject(projectId);
  let tmp2 = null != project;
  if (tmp2) {
    tmp2 = true !== context.busy;
  }
  if (tmp2) {
    tmp2 = !useConjurePublishAction.approvalPending(projectId);
  }
  if (tmp2) {
    tmp2 = !ConjurePublishStatusStore.isProjectPublishing(projectId);
  }
  if (tmp2) {
    tmp2 =
      null !=
      conjurePublishReview.conjurePublishReviewReason(project, ConjurePublishStatusStore.getPublishStatus(projectId));
  }
  if (tmp2) {
    const obj4 = { projectId, publishOptions: context, entryPoint };
    const result = openConjurePublishReview.openConjurePublishReview(obj4);
  } else {
    (function publishNow() {
      const self = this;
      const apply = closure_1_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, entryPoint, context);
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  let context = arg2;
  if (arg2 == null) {
    context = noop.useContext(require("useConjurePublishAction").ConjurePublishActionContext);
  }
  items = [arg0, arg1, context];
  return noop.useCallback((entryPoint) => {
    disabled = null == closure_0;
    if (!disabled) {
      disabled = null == disabled;
    }
    if (!disabled) {
      disabled = null == context;
    }
    if (!disabled) {
      disabled = disabled.disabled;
    }
    if (!disabled) {
      startConjurePublish(closure_0, entryPoint, context);
    }
  }, items);
}
export { startConjurePublish };
