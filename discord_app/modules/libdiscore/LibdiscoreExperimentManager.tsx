// discord_app/modules/libdiscore/LibdiscoreExperimentManager.tsx
import shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import items2 from "libdiscoreExperiments.tsx";
import isBlockedDomain from "../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import initialize from "../experiments/apex/ApexExperimentStore.tsx";

require = fn;
function experimentStoreUpdateHandler() {
  let obj = isBlockedDomain;
  if (obj.isLibdiscoreInitialized()) {
    if (!tmpResult.isExperimentSyncDisabled()) {
      obj = {};
      const ALL_LIBDISCORE_EXPERIMENTS = items2.ALL_LIBDISCORE_EXPERIMENTS;
      for (const item10018 of ALL_LIBDISCORE_EXPERIMENTS) {
        obj[item10018.id] = item10018.getCurrentConfig();
        continue;
      }
      let tmp7 = null != obj;
      if (tmp7) {
        tmp7 = shallowEqualDefault(obj, obj);
      }
      if (!tmp7) {
        const experimentCacher = isBlockedDomain.getExperimentCacher();
        const _JSON = JSON;
        experimentCacher.flushToCache(JSON.stringify(obj));
      }
    }
    tmpResult = items2;
  }
}
let c4 = null;
initializeDefault;
class LibdiscoreExperimentManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = {};
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_3, experimentStoreUpdateHandler);
    return applyArgumentsResult;
  }
}
const prototype = LibdiscoreExperimentManager.prototype;
prototype["_initialize"] = function _initialize() {
  const prop = items2.ALL_LIBDISCORE_EXPERIMENTS;
  const item = prop.forEach((item, index) => {
    callback(table[4]);
    const obj = { kind: "user", name: item.id, defaultConfig: { treatmentId: -1 }, variations: null };
    const treatments = item.getTreatments();
    obj[3] = Object.fromEntries(treatments.map((item, index) => {
      const treatmentId = item.treatmentId;
      const items = [treatmentId, { treatmentId }];
      return items;
    }));
    item.setExperiment(obj.createApexExperiment(obj));
  });
};
prototype["_terminate"] = function _terminate() {

};
const libdiscoreExperimentManager = new LibdiscoreExperimentManager();
const result = require("obj132").fileFinishedImporting("modules/libdiscore/LibdiscoreExperimentManager.tsx");

export default libdiscoreExperimentManager;