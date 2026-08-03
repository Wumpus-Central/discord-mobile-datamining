// === Module 16786: experimentStoreUpdateHandler ===

// Module 16786 (experimentStoreUpdateHandler)
import initialize from "initialize";
import "initialize";

const require = arg1;
function experimentStoreUpdateHandler() {
  let obj = require(1869) /* isBlockedDomain */;
  if (obj.isLibdiscoreInitialized()) {
    if (!tmpResult.isExperimentSyncDisabled()) {
      obj = {};
      const ALL_LIBDISCORE_EXPERIMENTS = tmp(1866).ALL_LIBDISCORE_EXPERIMENTS;
      for (const item10018 of ALL_LIBDISCORE_EXPERIMENTS) {
        obj[item10018.id] = item10018.getCurrentConfig();
        continue;
      }
      let tmp7 = null != obj;
      if (tmp7) {
        tmp7 = importDefault(643)(obj, obj);
      }
      if (!tmp7) {
        const experimentCacher = require(1869) /* isBlockedDomain */.getExperimentCacher();
        const _JSON = JSON;
        experimentCacher.flushToCache(JSON.stringify(obj));
        const obj4 = require(1869) /* isBlockedDomain */;
      }
    }
    tmpResult = tmp(1866);
  }
}
let c4 = null;
class LibdiscoreExperimentManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = {};
    map = new Map();
    applyArgumentsResult.stores = map.set(experimentStoreUpdateHandler, experimentStoreUpdateHandler);
    return applyArgumentsResult;
  }
}
const prototype = LibdiscoreExperimentManager.prototype;
prototype["_initialize"] = function _initialize() {
  const prop = require(1866) /* items */.ALL_LIBDISCORE_EXPERIMENTS;
  const item = prop.forEach((id) => {
    let obj = callback(table[4]);
    obj = { kind: "user", name: id.id, defaultConfig: { treatmentId: -1 }, variations: null };
    const treatments = id.getTreatments();
    obj[3] = Object.fromEntries(treatments.map((treatmentId) => {
      treatmentId = treatmentId.treatmentId;
      const items = [treatmentId, { treatmentId }];
      return items;
    }));
    id.setExperiment(obj.createApexExperiment(obj));
  });
};
prototype["_terminate"] = function _terminate() {

};
const libdiscoreExperimentManager = new LibdiscoreExperimentManager();
const result = require("items").fileFinishedImporting("modules/libdiscore/LibdiscoreExperimentManager.tsx");

export default libdiscoreExperimentManager;