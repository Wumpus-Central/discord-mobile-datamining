// === Module 15879: ParentalConsentStore ===

// Module 15879 (ParentalConsentStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let flag = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class ParentalConsentStore extends PersistedStore {
  initialize(shouldShowGuardianConnect) {
    flag = undefined;
    if (shouldShowGuardianConnect != null) {
      flag = shouldShowGuardianConnect.shouldShowGuardianConnect;
    }
    if (flag == null) {
      flag = false;
    }
  }
  getShouldShowGuardianConnect() {
    return flag;
  }
  getState() {
    return { shouldShowGuardianConnect: flag };
  }
}
const prototype = ParentalConsentStore.prototype;
ParentalConsentStore.displayName = "ParentalConsentStore";
ParentalConsentStore.persistKey = "ParentalConsentStore";
const obj = {
  GUARDIAN_CONNECT_REQUIRED: function handleGuardianConnectRequired(shouldShowGuardianConnect) {
    parentalConsentStore.persist();
  },
  GUARDIAN_CONNECT_CLEARED: function handleGuardianConnectCleared() {
    parentalConsentStore.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    parentalConsentStore.persist();
  }
};
const parentalConsentStore = new ParentalConsentStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/parent_tools/ParentalConsentStore.tsx");

export default parentalConsentStore;