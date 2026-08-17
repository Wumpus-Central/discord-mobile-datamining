// discord_app/modules/dismissible_content/DCFEventStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

let obj = { DC_SHOWN: 0, [0]: "DC_SHOWN", DC_SHOW_REQUEST: 1, [1]: "DC_SHOW_REQUEST", DC_DISMISSED: 2, [2]: "DC_DISMISSED" };
let closure_1 = [];
const Store = initializeDefault.Store;
class DCFEventStore extends Store {
}
DCFEventStore.prototype["getDCFEvents"] = function getDCFEvents() {
  return closure_1;
};
DCFEventStore.displayName = "DCFEventStore";
obj = {
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
const dCFEventStore = new DCFEventStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/dismissible_content/DCFEventStore.tsx");

export default dCFEventStore;
export const DCFEventTypes = obj;