// === Module 11735: useLegacyExperiments ===

// Module 11735 (useLegacyExperiments)
import ExperimentManager from "ExperimentManager" /* 4676 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4671 */;

require = fn;
function parseRegisteredExperiments(stateFromStoresObject) {
  function _loop(type) {
    obj = { system: ExperimentManager.ExperimentSystem.LEGACY, kind: null, name: null, title: null, variants: null };
    let str = "guild";
    if (type.type === constants.USER) {
      str = "user";
    }
    obj.kind = str;
    obj.name = name;
    ({ title: obj.title, buckets } = type);
    obj.variants = buckets.map((item, index) => {
      obj = { id: item.valueOf(), label: null, shortLabel: null, type: null };
      if (typeof type.description === "object") {
        let experimentBucketName = tmp.description[index];
      } else {
        experimentBucketName = closure_1(8135).getExperimentBucketName(item);
        const obj3 = closure_1(8135);
      }
      obj.label = experimentBucketName;
      obj.shortLabel = closure_1(8135).getExperimentBucketName(item);
      if (item === constants.CONTROL) {
        let TREATMENT = obj(8137).Variation_Type.CONTROL;
      } else if (item === tmp4.NOT_ELIGIBLE) {
        TREATMENT = obj(8137).Variation_Type.UNSPECIFIED;
      } else {
        TREATMENT = obj(8137).Variation_Type.TREATMENT;
      }
      obj.type = TREATMENT;
      return obj;
    });
    obj[name] = obj;
  }
  const entries = Object.entries(stateFromStoresObject);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let name = tmp5[0];
    let _loopResult = _loop(tmp5[1]);
    continue;
  }
  return {};
}
function getLegacyOverridesInfo(stateFromStoresObject1) {
  const obj = {};
  const entries = Object.entries(stateFromStoresObject1);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj2 = { experimentId: tmp6, variantId: null, originalDescriptor: null };
    let bucket = tmp7.bucket;
    obj2.variantId = bucket.valueOf();
    obj2.originalDescriptor = tmp7;
    obj[tmp6] = obj2;
    continue;
  }
  return obj;
}
const useMemo = fn(19).useMemo;
const ExperimentConstants = fn(4672);
({ ExperimentBuckets: metroRequire, ExperimentTypes: closure_7 } = ExperimentConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useLegacyExperiments.tsx");

export { parseRegisteredExperiments };
export { getLegacyOverridesInfo };
export const getLegacyExperiments = function getLegacyExperiments() {
  const registeredExperiments = ExperimentStore.getRegisteredExperiments();
  const obj = { experiments: null, overridesInfo: null };
  const allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
  obj.experiments = parseRegisteredExperiments(registeredExperiments);
  obj.overridesInfo = getLegacyOverridesInfo(allExperimentOverrideDescriptors);
  return obj;
};
export const useLegacyExperiments = function useLegacyExperiments() {
  const items = [ExperimentStore];
  stateFromStoresObject = stateFromStoresObject(504).useStateFromStoresObject(items, () => ExperimentStore.getRegisteredExperiments());
  const obj = stateFromStoresObject(504);
  const items1 = [ExperimentStore];
  const stateFromStoresObject1 = stateFromStoresObject(504).useStateFromStoresObject(items1, () => ExperimentStore.getAllExperimentOverrideDescriptors());
  const obj3 = { experiments: null, overridesInfo: null };
  const items2 = [stateFromStoresObject];
  obj3.experiments = useMemo(() => parseRegisteredExperiments(stateFromStoresObject), items2);
  const items3 = [stateFromStoresObject1];
  obj3.overridesInfo = useMemo(() => getLegacyOverridesInfo(stateFromStoresObject1), items3);
  return obj3;
};