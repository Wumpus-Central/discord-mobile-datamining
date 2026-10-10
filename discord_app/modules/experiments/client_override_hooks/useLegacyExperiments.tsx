// === Module 10673: useLegacyExperiments ===

// Module 10673 (useLegacyExperiments)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ExperimentManager from "ExperimentManager" /* 5021 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 5016 */;

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
        experimentBucketName = closure_1(8142).getExperimentBucketName(item);
        const obj3 = closure_1(8142);
      }
      obj.label = experimentBucketName;
      obj.shortLabel = closure_1(8142).getExperimentBucketName(item);
      if (item === constants.CONTROL) {
        let TREATMENT = obj(8144).Variation_Type.CONTROL;
      } else if (item === tmp4.NOT_ELIGIBLE) {
        TREATMENT = obj(8144).Variation_Type.UNSPECIFIED;
      } else {
        TREATMENT = obj(8144).Variation_Type.TREATMENT;
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
const ExperimentConstants = fn(5017);
({ ExperimentBuckets: metroRequire, ExperimentTypes: closure_7 } = ExperimentConstants);
const ReactCompilerGating = fn(558);
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
export const useLegacyExperiments = ReactCompilerGating.isReactCompilerEnabled() ? (function useLegacyExperiments() {
  const cResult = c.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ExperimentStore];
    const fn = function s() {
      return ExperimentStore.getRegisteredExperiments();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ExperimentStore];
    const fn2 = function c() {
      return ExperimentStore.getAllExperimentOverrideDescriptors();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStoresObject1 = initialize.useStateFromStoresObject(tmp8, tmp9);
  if (cResult[4] !== stateFromStoresObject) {
    const tmp14 = parseRegisteredExperiments(stateFromStoresObject);
    cResult[4] = stateFromStoresObject;
    cResult[5] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== stateFromStoresObject1) {
    const tmp17 = getLegacyOverridesInfo(stateFromStoresObject1);
    cResult[6] = stateFromStoresObject1;
    cResult[7] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === tmp12) {
    if (cResult[9] === tmp15) {
      let tmp18 = cResult[10];
    }
    return tmp18;
  }
  const obj2 = { experiments: tmp12, overridesInfo: tmp15 };
  cResult[8] = tmp12;
  cResult[9] = tmp15;
  cResult[10] = obj2;
  tmp18 = obj2;
  const tmpResult2 = initialize;
}) : (function useLegacyExperiments() {
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
});