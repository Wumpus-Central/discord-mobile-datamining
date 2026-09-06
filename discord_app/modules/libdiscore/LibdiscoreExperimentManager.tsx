// discord_app/modules/libdiscore/LibdiscoreExperimentManager.tsx
import discord_common_shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import js_shim_shim from "../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import libdiscoreExperiments from "libdiscoreExperiments.tsx";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function experimentStoreUpdateHandler() {
  obj = js_shim_shim;
  if (obj.isLibdiscoreInitialized()) {
    if (!tmpResult.isExperimentSyncDisabled()) {
      obj = {};
      const ALL_LIBDISCORE_EXPERIMENTS = tmp(1983).ALL_LIBDISCORE_EXPERIMENTS;
      for (const item10018 of ALL_LIBDISCORE_EXPERIMENTS) {
        obj[item10018.id] = item10018.getCurrentConfig();
        continue;
      }
      let tmp7 = null != obj;
      if (tmp7) {
        tmp7 = discord_common_shallowEqualDefault(obj, obj);
      }
      if (!tmp7) {
        const experimentCacher = js_shim_shim.getExperimentCacher();
        const _JSON = JSON;
        experimentCacher.flushToCache(JSON.stringify(obj));
      }
    }
    tmpResult = tmp(1983);
  }
}
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
  const prop = libdiscoreExperiments.ALL_LIBDISCORE_EXPERIMENTS;
  const item = prop.forEach((id) => {
    obj = { kind: "user", name: id.id, defaultConfig: { treatmentId: -1 }, variations: null };
    const treatments = id.getTreatments();
    obj.variations = Object.fromEntries(
      treatments.map((treatmentId) => {
        treatmentId = treatmentId.treatmentId;
        const items = [treatmentId, { treatmentId }];
        return items;
      }),
    );
    id.setExperiment(obj.createApexExperiment(obj));
  });
};
prototype["_terminate"] = function _terminate() {};
const libdiscoreExperimentManager = new LibdiscoreExperimentManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/libdiscore/LibdiscoreExperimentManager.tsx");

export default libdiscoreExperimentManager;
