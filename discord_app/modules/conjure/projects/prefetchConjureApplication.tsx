// discord_app/modules/conjure/projects/prefetchConjureApplication.tsx
import ApplicationActionCreatorsDefault from "../../applications/ApplicationActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";

function fetchBatch() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _fetchBatch(arg0) {
  await ApplicationActionCreatorsDefault.fetchApplications(closure_0, false);
  if (1 === tmp6) {
    c3 = 0;
    c1 = 3;
  } else if (arg0 === 1) {
    c1 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c3 = 0;
  }
  return value;
};
function flush() {
  let length;
  let sum;
  closure_5 = null;
  items = [...set];
  let num = 0;
  set.clear();
  if (0 < items.length) {
    do {
      sum = num + 50;
      let tmp4 = fetchBatch(items.slice(num, sum));
      num = sum;
      length = items.length;
    } while (sum < length);
  }
}
const set = new Set();
let closure_5 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/prefetchConjureApplication.tsx");

export default function prefetchConjureApplication(application_id) {
  let isHydratedResult = null == application_id;
  if (!isHydratedResult) {
    isHydratedResult = ApplicationStore.isHydrated(application_id);
  }
  if (!isHydratedResult) {
    isHydratedResult = ApplicationStore.isFetchingApplication(application_id);
  }
  if (!isHydratedResult) {
    isHydratedResult = ApplicationStore.didFetchingApplicationFail(application_id);
  }
  if (!isHydratedResult) {
    set.add(application_id);
    if (timeout == null) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(flush, 0);
    }
  }
}
