// discord_app/stores/DeveloperExperimentStore.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ExperimentBuckets } from "ExperimentBuckets";
import { Environments } from "Environments";
import { Store } from "initialize";

const require = arg1;
let tmp2 = "production" === Environments.DEVELOPMENT;
if (!tmp2) {
  const _window = window;
  tmp2 = window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING;
}
function init() {
  let closure_5 = require("../modules/user/UserStoreUtils.tsx") /* validatePremiumType */.isStaffEnv(authStore.getCurrentUser());
}
let c5 = tmp2;
class DeveloperExperimentStore extends Store {
}
const prototype = DeveloperExperimentStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.waitFor(authStore, createGuildRecordFromRust);
  Object.defineProperties(this, {
    isDeveloper: {
      configurable: false,
      get() {
        return closure_5;
      },
      set() {

      }
    }
  });
  let closure_5 = self(1880).isStaffEnv(authStore.getCurrentUser());
  const timerId = setTimeout(() => Object.freeze(self));
};
prototype["getExperimentDescriptor"] = function getExperimentDescriptor() {
  let tmp = null;
  if (closure_5) {
    const obj = { type: "developer", name: "discord_dev_testing", revision: 1, override: true, bucket: null };
    obj[4] = ExperimentBuckets.TREATMENT_1;
    tmp = obj;
  }
  return tmp;
};
DeveloperExperimentStore.displayName = "DeveloperExperimentStore";
const developerExperimentStore = new DeveloperExperimentStore(require("dispatcher"), { CONNECTION_OPEN: init, OVERLAY_INITIALIZE: init, CURRENT_USER_UPDATE: init });
const result = require("ExperimentBuckets").fileFinishedImporting("stores/DeveloperExperimentStore.tsx");

export default developerExperimentStore;