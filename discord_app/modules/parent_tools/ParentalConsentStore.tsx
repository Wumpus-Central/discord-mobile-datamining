// discord_app/modules/parent_tools/ParentalConsentStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const parentalConsentStore = new ParentalConsentStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/parent_tools/ParentalConsentStore.tsx");

export default parentalConsentStore;
