// discord_app/modules/conjure/contexts/ConjureSmartContextStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

const map = new Map();
const Store = initializeDefault.Store;
class ConjureSmartContextStore extends Store {}
ConjureSmartContextStore.prototype["getSmartContext"] = function getSmartContext(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
const conjureSmartContextStore = new ConjureSmartContextStore(DispatcherDefault, {
  CONJURE_SMART_CONTEXT_SET: function handleSmartContextSet(arg0) {
    ({ projectId, enabled } = arg0);
    if (map.get(projectId) === enabled) {
      return false;
    } else {
      const result = map.set(projectId, enabled);
    }
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/contexts/ConjureSmartContextStore.tsx");

export default conjureSmartContextStore;
