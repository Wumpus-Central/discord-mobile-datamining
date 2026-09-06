// === Module 1946: DCFEventStore ===

// Module 1946 (DCFEventStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let DCFEventTypes = { DC_SHOWN: 0, [0]: "DC_SHOWN", DC_SHOW_REQUEST: 1, [1]: "DC_SHOW_REQUEST", DC_DISMISSED: 2, [2]: "DC_DISMISSED" };
let closure_1 = [];
const Store = initializeDefault.Store;
class DCFEventStore extends Store {
}
DCFEventStore.prototype["getDCFEvents"] = function getDCFEvents() {
  return closure_1;
};
DCFEventStore.displayName = "DCFEventStore";
DCFEventTypes = {
  LOGOUT: function reset() {
    closure_1 = [];
  },
  DCF_EVENT_LOGGED: function handleGenericEvent(arg0) {
    ({ eventType, dismissibleContent } = arg0);
  },
  DCF_HANDLE_DC_DISMISSED: function handleDCDismissed(arg0) {

  },
  DCF_HANDLE_DC_SHOWN: function handleDCShownToUser(arg0) {

  }
};
const dCFEventStore = new DCFEventStore(DispatcherDefault, DCFEventTypes);
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/DCFEventStore.tsx");

export default dCFEventStore;
export { DCFEventTypes };