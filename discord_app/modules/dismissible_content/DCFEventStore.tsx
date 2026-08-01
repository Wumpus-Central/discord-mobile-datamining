// === Module 1361: getDCFEvents ===

// Module 1361 (getDCFEvents)
import { Store } from "initialize";

let obj = { DC_SHOWN: 0, [0]: "DC_SHOWN", DC_SHOW_REQUEST: 1, [1]: "DC_SHOW_REQUEST", DC_DISMISSED: 2, [2]: "DC_DISMISSED" };
let closure_1 = [];
class DCFEventStore extends Store {
}
DCFEventStore.prototype["getDCFEvents"] = function getDCFEvents() {
  return closure_1;
};
DCFEventStore.displayName = "DCFEventStore";
obj = {
  LOGOUT: function reset() {
    let closure_1 = [];
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
const dCFEventStore = new DCFEventStore(require("dispatcher"), obj);
const result = require("set").fileFinishedImporting("modules/dismissible_content/DCFEventStore.tsx");

export default dCFEventStore;
export const DCFEventTypes = obj;