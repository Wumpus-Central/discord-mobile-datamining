// === Module 10502: parseRegisteredExperiments ===

// Module 10502 (parseRegisteredExperiments)
import _slicedToArray from "_slicedToArray";
import { useMemo } from "noop";
import getHash from "getHash";
import ExperimentBuckets from "ExperimentBuckets";

let closure_6;
let error;
const require = arg1;
function parseRegisteredExperiments(registeredExperiments) {
  let obj = {};
  function _loop(type) {
    let buckets;
    let closure_0 = type;
    obj = { system: obj(outer1_2[5]).ExperimentSystem.LEGACY, kind: null, name: null, title: null, variants: null };
    let str = "guild";
    if (type.type === outer1_7.USER) {
      str = "user";
    }
    obj[1] = str;
    obj[2] = closure_1;
    ({ title: obj[3], buckets } = type);
    obj[4] = buckets.map((bucket) => {
      const obj = { id: bucket.valueOf(), label: null, shortLabel: null, type: null };
      if (typeof type.description === "ay") {
        let experimentBucketName = tmp.description[arg1];
      } else {
        experimentBucketName = outer1_1(outer1_2[6]).getExperimentBucketName(bucket);
        const obj3 = outer1_1(outer1_2[6]);
      }
      obj[1] = experimentBucketName;
      obj[2] = outer1_1(outer1_2[6]).getExperimentBucketName(bucket);
      if (bucket === outer1_6.CONTROL) {
        let TREATMENT = type(outer1_2[4]).Variation_Type.CONTROL;
      } else if (bucket === tmp4.NOT_ELIGIBLE) {
        TREATMENT = type(outer1_2[4]).Variation_Type.UNSPECIFIED;
      } else {
        TREATMENT = type(outer1_2[4]).Variation_Type.TREATMENT;
      }
      obj[3] = TREATMENT;
      return obj;
    });
    closure_0[closure_1] = obj;
  }
  const entries = Object.entries(registeredExperiments);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    let closure_1 = tmp5[0];
    let _loopResult = _loop(tmp5[1]);
    continue;
  }
  return obj;
}
function getLegacyOverridesInfo(allExperimentOverrideDescriptors) {
  let tmp6;
  let tmp7;
  let obj = {};
  const entries = Object.entries(allExperimentOverrideDescriptors);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
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
const result = require("getHash").fileFinishedImporting("modules/experiments/client_override_hooks/useLegacyExperiments.tsx");

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
  const items = [getHash];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => store.getRegisteredExperiments());
  const items1 = [getHash];
  const stateFromStoresObject1 = stateFromStoresObject(589).useStateFromStoresObject(items1, () => store.getAllExperimentOverrideDescriptors());
  obj = { experiments: useMemo(() => outer1_8(stateFromStoresObject), items2), overridesInfo: useMemo(() => outer1_9(stateFromStoresObject1), items3) };
  items2 = [stateFromStoresObject];
  items3 = [stateFromStoresObject1];
  return obj;
};