// === Module 11873: conjureAgentNeedsPreview ===

// Module 11873 (conjureAgentNeedsPreview)
import conjurePreviewControlLease from "conjurePreviewControlLease" /* 10762 */;
import ConjureChatStore from "ConjureChatStore" /* 10699 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/conjureAgentNeedsPreview.tsx");

export const conjureAgentNeedsPreview = function conjureAgentNeedsPreview(projectId) {
  let isThinkingResult = ConjureChatStore.isThinking(projectId);
  if (!isThinkingResult) {
    isThinkingResult = conjurePreviewControlLease.isConjureControlActive(projectId);
  }
  return isThinkingResult;
};
export const useConjureAgentNeedsPreview = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAgentNeedsPreview(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureChatStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ConjureChatStore.isThinking(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  let stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  const tmpResult = require("initialize");
  if (!stateFromStores) {
    stateFromStores = tmpResult2.useConjureControlActive(arg0);
  }
  return stateFromStores;
}) : (function useConjureAgentNeedsPreview(arg0) {
  _require = arg0;
  const items = [ConjureChatStore];
  const items1 = [arg0];
  let stateFromStores = require("initialize").useStateFromStores(items, () => ConjureChatStore.isThinking(closure_0), items1);
  const obj = require("initialize");
  if (!stateFromStores) {
    stateFromStores = obj2.useConjureControlActive(arg0);
  }
  return stateFromStores;
});