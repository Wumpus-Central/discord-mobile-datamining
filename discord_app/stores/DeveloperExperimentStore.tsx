// === Module 7476: init ===

// Module 7476 (init)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import validatePremiumType from "validatePremiumType" /* 1932 */;
import closure_2 from "createGuildRecordFromRust" /* 1908 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import { ExperimentBuckets } from "ExperimentBuckets" /* 4392 */;
import { Environments } from "Environments" /* 1933 */;

require = arg1;
let tmp2 = "production" === Environments.DEVELOPMENT;
if (!tmp2) {
  const _window = window;
  tmp2 = window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING;
}
function init() {
  closure_5 = validatePremiumType.isStaffEnv(authStore.getCurrentUser());
}
let closure_5 = tmp2;
const Store = initializeDefault.Store;
class DeveloperExperimentStore extends Store {
}
const prototype = DeveloperExperimentStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.waitFor(authStore, closure_2);
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
  closure_5 = self(1932).isStaffEnv(authStore.getCurrentUser());
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
const developerExperimentStore = new DeveloperExperimentStore(dispatcherDefault, { CONNECTION_OPEN: init, OVERLAY_INITIALIZE: init, CURRENT_USER_UPDATE: init });
const result = require("set").fileFinishedImporting("stores/DeveloperExperimentStore.tsx");

export default developerExperimentStore;