// discord_app/modules/experiments/client_override_hooks/useLegacyExperiments.tsx
import ExperimentManager from "../ExperimentManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import ExperimentStore from "../ExperimentStore.tsx";

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
        experimentBucketName = closure_1(7891).getExperimentBucketName(item);
        const obj3 = closure_1(7891);
      }
      obj.label = experimentBucketName;
      obj.shortLabel = closure_1(7891).getExperimentBucketName(item);
      if (item === constants.CONTROL) {
        let TREATMENT = obj(7893).Variation_Type.CONTROL;
      } else if (item === tmp4.NOT_ELIGIBLE) {
        TREATMENT = obj(7893).Variation_Type.UNSPECIFIED;
      } else {
        TREATMENT = obj(7893).Variation_Type.TREATMENT;
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
  let obj = {};
  const entries = Object.entries(stateFromStoresObject1);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    obj = { experimentId: tmp6, variantId: null, originalDescriptor: null };
    let bucket = tmp7.bucket;
    obj.variantId = bucket.valueOf();
    obj.originalDescriptor = tmp7;
    obj[tmp6] = obj;
    continue;
  }
  return obj;
}
const useMemo = fn(19).useMemo;
const ExperimentConstants = fn(4477);
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
  let obj = stateFromStoresObject(504);
  const items = [ExperimentStore];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => ExperimentStore.getRegisteredExperiments());
  const items1 = [ExperimentStore];
  const stateFromStoresObject1 = stateFromStoresObject(504).useStateFromStoresObject(items1, () =>
    ExperimentStore.getAllExperimentOverrideDescriptors(),
  );
  obj = { experiments: null, overridesInfo: null };
  const items2 = [stateFromStoresObject];
  obj.experiments = useMemo(() => parseRegisteredExperiments(stateFromStoresObject), items2);
  const items3 = [stateFromStoresObject1];
  obj.overridesInfo = useMemo(() => getLegacyOverridesInfo(stateFromStoresObject1), items3);
  return obj;
};
