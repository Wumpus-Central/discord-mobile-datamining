// discord_app/modules/experiments/client_override_hooks/useLegacyExperiments.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import { useMemo } from "../../../../_runtime/00019_noop.js";
import getHash from "../ExperimentStore.tsx";
import ExperimentBuckets from "../ExperimentConstants.tsx";

const require = fn;
function parseRegisteredExperiments(registeredExperiments) {
  function _loop(type) {
    closure_0 = type;
    obj = { system: obj(dependencyMap[5]).ExperimentSystem.LEGACY, kind: null, name: null, title: null, variants: null };
    let str = "guild";
    if (type.type === closure_1_7.USER) {
      str = "user";
    }
    obj[1] = str;
    obj[2] = closure_1;
    ({ title: obj[3], buckets } = type);
    obj[4] = buckets.map((item, index) => {
      obj = { id: item.valueOf(), label: null, shortLabel: null, type: null };
      if (typeof type.description === "object") {
        let experimentBucketName = tmp.description[index];
      } else {
        experimentBucketName = closure_1_1(closure_1_2[6]).getExperimentBucketName(item);
        const obj3 = closure_1_1(closure_1_2[6]);
      }
      obj[1] = experimentBucketName;
      obj[2] = closure_1_1(closure_1_2[6]).getExperimentBucketName(item);
      if (item === closure_1_6.CONTROL) {
        let TREATMENT = type(closure_1_2[4]).Variation_Type.CONTROL;
      } else if (item === tmp4.NOT_ELIGIBLE) {
        TREATMENT = type(closure_1_2[4]).Variation_Type.UNSPECIFIED;
      } else {
        TREATMENT = type(closure_1_2[4]).Variation_Type.TREATMENT;
      }
      obj[3] = TREATMENT;
      return obj;
    });
    closure_0[closure_1] = obj;
  }
  const entries = Object.entries(registeredExperiments);
  while (tmp2 !== undefined) {
    let tmp5 = callback(tmp3, 2);
    closure_1 = tmp5[0];
    let _loopResult = _loop(tmp5[1]);
    continue;
  }
  return {};
}
function getLegacyOverridesInfo(allExperimentOverrideDescriptors) {
  let obj = {};
  const entries = Object.entries(allExperimentOverrideDescriptors);
  while (tmp2 !== undefined) {
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    obj = { experimentId: null, variantId: null, originalDescriptor: null };
    obj[0] = tmp6;
    let bucket = tmp7.bucket;
    obj[1] = bucket.valueOf();
    obj[2] = tmp7;
    obj[tmp6] = obj;
    continue;
  }
  return obj;
}
({ ExperimentBuckets: closure_6, ExperimentTypes: error } = ExperimentBuckets);
const result = require("obj132").fileFinishedImporting("modules/experiments/client_override_hooks/useLegacyExperiments.tsx");

export { parseRegisteredExperiments };
export { getLegacyOverridesInfo };
export const getLegacyExperiments = function getLegacyExperiments() {
  const registeredExperiments = store.getRegisteredExperiments();
  const obj = { experiments: null, overridesInfo: null };
  const allExperimentOverrideDescriptors = store.getAllExperimentOverrideDescriptors();
  obj[0] = parseRegisteredExperiments(registeredExperiments);
  obj[1] = getLegacyOverridesInfo(allExperimentOverrideDescriptors);
  return obj;
};
export const useLegacyExperiments = function useLegacyExperiments() {
  let obj = stateFromStoresObject(589);
  const items = [closure_5];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => store.getRegisteredExperiments());
  const items1 = [closure_5];
  const stateFromStoresObject1 = stateFromStoresObject(589).useStateFromStoresObject(items1, () => store.getAllExperimentOverrideDescriptors());
  obj = { experiments: useMemo(() => parseRegisteredExperiments(stateFromStoresObject), items2), overridesInfo: useMemo(() => getLegacyOverridesInfo(stateFromStoresObject1), items3) };
  items2 = [stateFromStoresObject];
  items3 = [stateFromStoresObject1];
  return obj;
};