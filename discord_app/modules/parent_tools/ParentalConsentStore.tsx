// discord_app/modules/parent_tools/ParentalConsentStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let c0 = false;
const PersistedStore = initializeDefault.PersistedStore;
class ParentalConsentStore extends PersistedStore {}
const prototype = ParentalConsentStore.prototype;
prototype["initialize"] = function initialize(shouldShowGuardianConnect) {
  let flag;
  if (shouldShowGuardianConnect != null) {
    flag = shouldShowGuardianConnect.shouldShowGuardianConnect;
  }
  if (flag == null) {
    flag = false;
  }
  c0 = flag;
};
prototype["getShouldShowGuardianConnect"] = function getShouldShowGuardianConnect() {
  return c0;
};
prototype["getState"] = function getState() {
  return { shouldShowGuardianConnect };
};
ParentalConsentStore.displayName = "ParentalConsentStore";
ParentalConsentStore.persistKey = "ParentalConsentStore";
const parentalConsentStore = new ParentalConsentStore(DispatcherDefault, {
  GUARDIAN_CONNECT_REQUIRED: function handleGuardianConnectRequired(shouldShowGuardianConnect) {
    c0 = true === shouldShowGuardianConnect.shouldShowGuardianConnect;
    parentalConsentStore.persist();
  },
  GUARDIAN_CONNECT_CLEARED: function handleGuardianConnectCleared() {
    c0 = false;
    parentalConsentStore.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    c0 = false;
    parentalConsentStore.persist();
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/ParentalConsentStore.tsx");

export default parentalConsentStore;
