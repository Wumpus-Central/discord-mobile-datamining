// === Module 12252: conjureAgentNeedsPreview ===

// Module 12252 (conjureAgentNeedsPreview)
import conjurePreviewControlLease from "conjurePreviewControlLease" /* 11049 */;
import ConjureChatStore from "ConjureChatStore" /* 10970 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/conjureAgentNeedsPreview.tsx");

export function conjureAgentNeedsPreview(id) {
  let isThinkingResult = ConjureChatStore.isThinking(id);
  if (!isThinkingResult) {
    isThinkingResult = conjurePreviewControlLease.isConjureControlActive(id);
  }
  return isThinkingResult;
}
export function useConjureAgentNeedsPreview(projectId) {
  _require = projectId;
  items = [ConjureChatStore];
  const items1 = [projectId];
  let stateFromStores = require("initialize").useStateFromStores(items, () => ConjureChatStore.isThinking(closure_0), items1);
  const obj = require("initialize");
  if (!stateFromStores) {
    stateFromStores = obj2.useConjureControlActive(projectId);
  }
  return stateFromStores;
}