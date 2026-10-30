// === Module 10850: ConjureSpendLimitStore ===

// Module 10850 (ConjureSpendLimitStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

const map = new Map();
const Store = initializeDefault.Store;
class ConjureSpendLimitStore extends Store {
}
ConjureSpendLimitStore.prototype["getSpendLimit"] = function getSpendLimit(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
const conjureSpendLimitStore = new ConjureSpendLimitStore(DispatcherDefault, {
  CONJURE_SPEND_LIMIT_SET: function handleSpendLimitSet(arg0) {
    ({ projectId, spendLimit } = arg0);
    if (null == spendLimit) {
      return map.delete(projectId);
    } else {
      const result = map.set(projectId, spendLimit);
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/usage/ConjureSpendLimitStore.tsx");

export default conjureSpendLimitStore;