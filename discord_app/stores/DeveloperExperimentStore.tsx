// === Module 7217: DeveloperExperimentStore ===

// Module 7217 (DeveloperExperimentStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserStoreUtils from "UserStoreUtils" /* 1388 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const ExperimentBuckets = fn(4783).ExperimentBuckets;
const Environments = fn(1389).Environments;
let tmp2 = "production" === Environments.DEVELOPMENT;
if (!tmp2) {
  const _window = window;
  tmp2 = window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING;
}
function init() {
  closure_5 = UserStoreUtils.isStaffEnv(UserStore.getCurrentUser());
}
let closure_5 = tmp2;
const Store = initializeDefault.Store;
class DeveloperExperimentStore extends Store {
}
const prototype = DeveloperExperimentStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.waitFor(UserStore, GuildStore);
  const obj = {
    isDeveloper: {
      configurable: false,
      get() {
        return closure_5;
      },
      set() {

      }
    }
  };
  Object.defineProperties(this, obj);
  closure_5 = self(1388).isStaffEnv(UserStore.getCurrentUser());
  const timerId = setTimeout(() => Object.freeze(self));
};
prototype["getExperimentDescriptor"] = function getExperimentDescriptor() {
  let tmp = null;
  if (closure_5) {
    const obj = { type: "developer", name: "discord_dev_testing", revision: 1, override: true, bucket: ExperimentBuckets.TREATMENT_1 };
    tmp = obj;
  }
  return tmp;
};
DeveloperExperimentStore.displayName = "DeveloperExperimentStore";
const developerExperimentStore = new DeveloperExperimentStore(DispatcherDefault, { CONNECTION_OPEN: init, OVERLAY_INITIALIZE: init, CURRENT_USER_UPDATE: init });
const size = fn(2);
const result = size.fileFinishedImporting("stores/DeveloperExperimentStore.tsx");

export default developerExperimentStore;