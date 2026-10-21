// === Module 10673: ConjureRemixStore ===

// Module 10673 (ConjureRemixStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

const map = new Map();
const map1 = new Map();
const Store = initializeDefault.Store;
class ConjureRemixStore extends Store {
}
const prototype = ConjureRemixStore.prototype;
prototype["getFailure"] = function getFailure(arg0) {
  return map.get(arg0);
};
prototype["getSetupStartedAt"] = function getSetupStartedAt(arg0) {
  value = undefined;
  if (null === map.get(arg0)) {
    value = map1.get(arg0);
  }
  return value;
};
const conjureRemixStore = new ConjureRemixStore(DispatcherDefault, {
  CONJURE_REMIX_STATE_SET: function handleRemixStateSet(pending) {
    ({ projectId, failed } = pending);
    if (pending.pending) {
      let tmp5 = null == failed;
      if (tmp5) {
        tmp5 = null !== map.get(projectId);
      }
      if (tmp5) {
        const _Date = Date;
        const result = map1.set(projectId, Date.now());
      }
      const result1 = map.set(projectId, failed);
      let flag = true;
    } else {
      map1.delete(projectId);
      flag = map.delete(projectId);
    }
    return flag;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemixStore.tsx");

export default conjureRemixStore;