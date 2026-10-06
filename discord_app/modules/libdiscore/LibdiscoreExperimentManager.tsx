// === Module 18097: LibdiscoreExperimentManager ===

// Module 18097 (LibdiscoreExperimentManager)
import libdiscoreExperiments from "libdiscoreExperiments" /* 559 */;
import shim from "shim" /* 562 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let map, treatmentId;

function experimentStoreUpdateHandler() {
  const obj = shim;
  if (obj.isLibdiscoreInitialized()) {
    const tmpResult = libdiscoreExperiments;
    if (!tmpResult.isExperimentSyncDisabled()) {
      obj2 = {};
      const ALL_LIBDISCORE_EXPERIMENTS = libdiscoreExperiments.ALL_LIBDISCORE_EXPERIMENTS;
      for (const item10018 of ALL_LIBDISCORE_EXPERIMENTS) {
        let currentConfig = item10018.getCurrentConfig({ autoTrackExposure: false });
        obj2[item10018.id] = currentConfig;
        let result = item10018.trackExposureIfCachedConfigMatches(currentConfig);
        continue;
      }
      const tmp9 = null != obj2 && shallowEqualDefault(obj2, obj2);
      if (!tmp9) {
        const obj4 = shim;
        const experimentCacher = obj4.getExperimentCacher();
        const _JSON = JSON;
        experimentCacher.flushToCache(JSON.stringify(obj2));
      }
    }
  }
}
let obj2 = null;
class LibdiscoreExperimentManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {};
    map = new Map();
    applyArgumentsResult.stores = map.set(ApexExperimentStore, experimentStoreUpdateHandler);
    return applyArgumentsResult;
  }
  _initialize() {
    const prop = libdiscoreExperiments.ALL_LIBDISCORE_EXPERIMENTS;
    const item = prop.forEach((name) => {
      let fromEntries;
      let treatments;
      const setExperiment = name.setExperiment;
      const obj = {
        kind: "user",
        name: name.id,
        defaultConfig: { treatmentId: -1 },
        variations: fromEntries(treatments.map((treatmentId) => {
          treatmentId = treatmentId.treatmentId;
          const items = [treatmentId, { treatmentId }];
          return items;
        }))
      };
      const createApexExperiment = ApexExperiment.createApexExperiment;
      fromEntries = Object.fromEntries;
      ApexExperiment;
      treatments = name.getTreatments();
      setExperiment(createApexExperiment(obj));
    });
  }
  _terminate() {

  }
}
const prototype = LibdiscoreExperimentManager.prototype;
const libdiscoreExperimentManager = new LibdiscoreExperimentManager();
let result = size.fileFinishedImporting("modules/libdiscore/LibdiscoreExperimentManager.tsx");

export default libdiscoreExperimentManager;