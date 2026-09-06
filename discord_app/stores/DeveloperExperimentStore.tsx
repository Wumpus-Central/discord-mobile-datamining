// discord_app/stores/DeveloperExperimentStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import UserStoreUtils from "../modules/user/UserStoreUtils.tsx";
import GuildStore from "GuildStore.tsx";
import UserStore from "UserStore.tsx";

require = fn;
const ExperimentBuckets = fn(4477).ExperimentBuckets;
const Environments = fn(1383).Environments;
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
class DeveloperExperimentStore extends Store {}
const prototype = DeveloperExperimentStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.waitFor(UserStore, GuildStore);
  let obj = { isDeveloper: null };
  obj = {
    configurable: false,
    get() {
      return closure_5;
    },
    set() {},
  };
  obj.isDeveloper = obj;
  Object.defineProperties(this, obj);
  closure_5 = self(1382).isStaffEnv(UserStore.getCurrentUser());
  const timerId = setTimeout(() => Object.freeze(self));
};
prototype["getExperimentDescriptor"] = function getExperimentDescriptor() {
  let tmp = null;
  if (closure_5) {
    const obj = {
      type: "developer",
      name: "discord_dev_testing",
      revision: 1,
      override: true,
      bucket: ExperimentBuckets.TREATMENT_1,
    };
    tmp = obj;
  }
  return tmp;
};
DeveloperExperimentStore.displayName = "DeveloperExperimentStore";
const developerExperimentStore = new DeveloperExperimentStore(DispatcherDefault, {
  CONNECTION_OPEN: init,
  OVERLAY_INITIALIZE: init,
  CURRENT_USER_UPDATE: init,
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/DeveloperExperimentStore.tsx");

export default developerExperimentStore;
