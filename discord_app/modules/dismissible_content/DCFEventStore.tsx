// === Module 2039: DCFEventStore ===

// Module 2039 (DCFEventStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const DCFEventTypes = { DC_SHOWN: 0, [0]: "DC_SHOWN", DC_SHOW_REQUEST: 1, [1]: "DC_SHOW_REQUEST", DC_DISMISSED: 2, [2]: "DC_DISMISSED" };
let closure_1 = [];
const Store = get_initializedDefault.Store;
class DCFEventStore extends Store {
  getDCFEvents() {
    return closure_1;
  }
}
const prototype = DCFEventStore.prototype;
DCFEventStore.displayName = "DCFEventStore";
const obj2 = {
  LOGOUT: function reset() {
    closure_1 = [];
  },
  DCF_EVENT_LOGGED: function handleGenericEvent(arg0) {
    let dismissibleContent;
    let eventType;
    ({ eventType, dismissibleContent } = arg0);
  },
  DCF_HANDLE_DC_DISMISSED: function handleDCDismissed(arg0) {

  },
  DCF_HANDLE_DC_SHOWN: function handleDCShownToUser(arg0) {

  }
};
const dCFEventStore = new DCFEventStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/dismissible_content/DCFEventStore.tsx");

export default dCFEventStore;
export { DCFEventTypes };