// === Module 12439: ConjureSharedProjectStore ===

// Module 12439 (ConjureSharedProjectStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectLink from "conjureProjectLink" /* 12440 */;

require = fn;
const map = new Map();
const Store = initializeDefault.Store;
class ConjureSharedProjectStore extends Store {
}
ConjureSharedProjectStore.prototype["getStatus"] = function getStatus(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  value = map.get(conjureProjectLink.conjureProjectLinkCode(arg0, tmp));
  if (value == null) {
    value = null;
  }
  return value;
};
const conjureSharedProjectStore = new ConjureSharedProjectStore(DispatcherDefault, {
  CONJURE_SHARED_PROJECT_STATUS: function handleStatus(arg0) {
    ({ linkCode, status } = arg0);
    if (null != status) {
      const result = map.set(linkCode, status);
    } else if (!map.delete(linkCode)) {
      return false;
    }
  },
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      return false;
    } else {
      map.clear();
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/ConjureSharedProjectStore.tsx");

export default conjureSharedProjectStore;