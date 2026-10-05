// discord_app/stores/DeveloperExperimentStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import UserStoreUtils from "../modules/user/UserStoreUtils.tsx";
import UserStoreConstants from "../modules/user/UserStoreConstants.tsx";
import ExperimentConstants from "../modules/experiments/ExperimentConstants.tsx";
import GuildStore from "GuildStore.tsx";
import UserStore from "UserStore.tsx";
import size from "../../_runtime/metro/00002__.js";

const ExperimentBuckets = ExperimentConstants.ExperimentBuckets;
const Environments = UserStoreConstants.Environments;
let tmp2 = "production" === Environments.DEVELOPMENT;
if (!tmp2) {
  const _window = window;
  tmp2 = window.GLOBAL_ENV.RELEASE_CHANNEL === Environments.STAGING;
}
function init() {
  const obj = UserStoreUtils;
  closure_5 = obj.isStaffEnv(UserStore.getCurrentUser());
}
let closure_5 = tmp2;
const Store = get_initializedDefault.Store;
class DeveloperExperimentStore extends Store {
  initialize() {
    let obj2;
    const self = this;
    this.waitFor(UserStore, GuildStore);
    const obj = { isDeveloper: obj2 };
    obj2 = {
      configurable: false,
      get() {
        return closure_5;
      },
      set() {},
    };
    Object.defineProperties(this, obj);
    const obj3 = self(1388);
    closure_5 = obj3.isStaffEnv(UserStore.getCurrentUser());
    const timerId = setTimeout(() => Object.freeze(self));
  }
  getExperimentDescriptor() {
    let tmp = null;
    if (closure_5) {
      tmp = {
        type: "developer",
        name: "discord_dev_testing",
        revision: 1,
        override: true,
        bucket: ExperimentBuckets.TREATMENT_1,
      };
      const obj = {
        type: "developer",
        name: "discord_dev_testing",
        revision: 1,
        override: true,
        bucket: ExperimentBuckets.TREATMENT_1,
      };
    }
    return tmp;
  }
}
const prototype = DeveloperExperimentStore.prototype;
DeveloperExperimentStore.displayName = "DeveloperExperimentStore";
let obj = { CONNECTION_OPEN: init, OVERLAY_INITIALIZE: init, CURRENT_USER_UPDATE: init };
const developerExperimentStore = new DeveloperExperimentStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/DeveloperExperimentStore.tsx");

export default developerExperimentStore;
