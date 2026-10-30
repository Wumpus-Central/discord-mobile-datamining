// === Module 12502: conjurePublishHistoryRequests ===

// Module 12502 (conjurePublishHistoryRequests)
import conjureWorkerFetch from "conjureWorkerFetch" /* 10929 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _fetchPublishHistory(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp2;
    if (null != before) {
      const tmp13 = { before };
    }
    await conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/publish-history", { query: tmp13 });
    closure_130_0 = value;
    if (!closure_130_0.ok) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("publish history failed (" + closure_130_0.status + ")");
      throw error;
    }
    await closure_130_0.json();
    return value;
  })();
};
let closure_4 = async function _fetchPublishHistoryNotes() {
  closure_2 = tmp2;
  const _encodeURIComponent = encodeURIComponent;
  const _HermesInternal2 = HermesInternal;
  await conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/publish-history/" + encodeURIComponent(closure_1) + "/notes", { method: "POST" });
  closure_130_0 = value;
  if (!closure_130_0.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("publish history notes failed (" + closure_130_0.status + ")");
    throw error;
  }
  await closure_130_0.json();
  return value.notes;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/history/conjurePublishHistoryRequests.tsx");

export function fetchPublishHistory() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function fetchPublishHistoryNotes() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}