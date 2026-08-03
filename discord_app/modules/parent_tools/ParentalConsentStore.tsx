import { PersistedStore } from "initialize";

let c0 = false;
class ParentalConsentStore extends PersistedStore {
}
const prototype = ParentalConsentStore.prototype;
prototype["initialize"] = function initialize(shouldShowGuardianConnect) {
  let flag;
  if (shouldShowGuardianConnect != null) {
    flag = shouldShowGuardianConnect.shouldShowGuardianConnect;
  }
  if (flag == null) {
    flag = false;
  }
};
prototype["getShouldShowGuardianConnect"] = function getShouldShowGuardianConnect() {
  return c0;
};
prototype["getState"] = function getState() {
  return { shouldShowGuardianConnect: c0 };
};
ParentalConsentStore.displayName = "ParentalConsentStore";
ParentalConsentStore.persistKey = "ParentalConsentStore";
const parentalConsentStore = new ParentalConsentStore(require("dispatcher"), {
  GUARDIAN_CONNECT_REQUIRED: function handleGuardianConnectRequired(shouldShowGuardianConnect) {
    let closure_0 = true === shouldShowGuardianConnect.shouldShowGuardianConnect;
    parentalConsentStore.persist();
  },
  GUARDIAN_CONNECT_CLEARED: function handleGuardianConnectCleared() {
    let c0 = false;
    parentalConsentStore.persist();
  },
  NUF_COMPLETE: function handleNUFCompleted() {
    let c0 = false;
    parentalConsentStore.persist();
  }
});
const result = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentStore.tsx");

export default parentalConsentStore;