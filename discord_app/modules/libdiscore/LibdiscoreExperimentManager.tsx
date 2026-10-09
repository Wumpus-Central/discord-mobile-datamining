// === Module 18546: LibdiscoreExperimentManager ===

// Module 18546 (LibdiscoreExperimentManager)
import libdiscoreExperiments from "libdiscoreExperiments" /* 559 */;
import js_shim_shim from "js_shim/shim" /* 562 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 568 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1259 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;

require = fn;
function experimentStoreUpdateHandler() {
  if (obj.isLibdiscoreInitialized()) {
    if (!tmpResult.isExperimentSyncDisabled()) {
      obj2 = {};
      const ALL_LIBDISCORE_EXPERIMENTS = libdiscoreExperiments.ALL_LIBDISCORE_EXPERIMENTS;
      for (const item10018 of ALL_LIBDISCORE_EXPERIMENTS) {
        let currentConfig = item10018.getCurrentConfig({ autoTrackExposure: false });
        obj2[item10018.id] = currentConfig;
        let result = item10018.trackExposureIfCachedConfigMatches(currentConfig);
        continue;
      }
      let tmp9 = null != obj2;
      if (tmp9) {
        tmp9 = discord_common_shallowEqualDefault(obj2, obj2);
      }
      if (!tmp9) {
        const experimentCacher = js_shim_shim.getExperimentCacher();
        const _JSON = JSON;
        experimentCacher.flushToCache(JSON.stringify(obj2));
      }
    }
    tmpResult = libdiscoreExperiments;
  }
  obj = js_shim_shim;
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
    obj2 = { kind: "user", name: id.id, defaultConfig: { treatmentId: -1 }, variations: null };
    const treatments = id.getTreatments();
    obj2.variations = Object.fromEntries(treatments.map((treatmentId) => {
      treatmentId = treatmentId.treatmentId;
      const items = [treatmentId, { treatmentId }];
      return items;
    }));
    id.setExperiment(ApexExperiment.createApexExperiment(obj2));
  });
};
prototype["_terminate"] = function _terminate() {

};
const libdiscoreExperimentManager = new LibdiscoreExperimentManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/libdiscore/LibdiscoreExperimentManager.tsx");

export default libdiscoreExperimentManager;