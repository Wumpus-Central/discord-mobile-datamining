// === Module 11481: useApexExperiments ===

// Module 11481 (useApexExperiments)
import apex_ApexTypes from "apex/ApexTypes" /* 1436 */;
import ExperimentManager from "ExperimentManager" /* 4481 */;
import experiment from "experiment" /* 7893 */;
import _slicedToArray from "module_32" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;

require = fn;
function makeClientVariant(id) {
  return { id, label: "Variant " + id, shortLabel: "Variant " + id, type: experiment.Variation_Type.UNSPECIFIED };
}
function mergeApexExperiments(experimentsMetadata, registeredExperiments) {
  _require = registeredExperiments;
  let obj = {};
  function _loop() {
    variants = variants.variants;
    const mapped = variants.map((id) => ({ id: id.id, label: "Variant " + id.id + ": " + id.label, shortLabel: "Variant " + id.id, type: id.type }));
    new Set(mapped.map((id) => id.id));
    if (null != dependencyMap[_slicedToArray]) {
      const _Object = Object;
      const keys = Object.keys(tmp4.variations);
      const mapped1 = keys.map((item) => Number(item));
      const found = mapped1.filter((item) => !set.has(item));
      let mapped2 = found.map(makeClientVariant);
    } else {
      mapped2 = [];
    }
    obj = { system: ExperimentManager.ExperimentSystem.APEX, kind: apex_ApexTypes.UnitTypeToKind[variants.unitType], name: variants.name, title: variants.title, variants: null };
    const items = [...mapped2];
    obj.variants = items.sort((id, id2) => id.id - id2.id);
    obj[_slicedToArray] = obj;
  }
  const entries = Object.entries(experimentsMetadata);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [_slicedToArray, closure_3] = tmp5;
    let _loopResult = _loop();
    continue;
  }
  const entries1 = Object.entries(registeredExperiments);
  tmp2 = entries[Symbol.iterator]();
  while (tmp8 !== undefined) {
    let tmp11 = _slicedToArray(tmp9, 2);
    [tmp12, tmp14] = tmp11;
    if (null == obj[tmp12]) {
      obj = { system: null, kind: null, name: null, title: null, variants: null };
      obj.system = require("ExperimentManager").ExperimentSystem.APEX;
      ({ kind: obj2.kind, name: obj2.name, name: obj2.title } = tmp14);
      let _Object = Object;
      let keys = Object.keys(tmp14.variations);
      obj.variants = keys.map((item) => {
        const NumberResult = Number(item);
        obj = { id: NumberResult, label: "Variant " + NumberResult, shortLabel: "Variant " + NumberResult, type: dependencyMap(obj[3]).Variation_Type.UNSPECIFIED };
        return obj;
      });
      obj[tmp13] = obj;
    }
    continue;
  }
  return obj;
}
function getApexExperimentOverridesInfo(clientOverrides) {
  let obj = {};
  const entries = Object.entries(clientOverrides);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    obj = { experimentId: tmp6, variantId: tmp7.variantId, originalDescriptor: tmp7 };
    obj[tmp6] = obj;
    continue;
  }
  return obj;
}
const noop = fn(19);
({ useEffect: c3, useMemo: closure_4 } = noop);
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useApexExperiments.tsx");

export { mergeApexExperiments };
export { getApexExperimentOverridesInfo };
export const getApexExperiments = function getApexExperiments() {
  const obj = { experiments: null, overridesInfo: null };
  const experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
  obj.experiments = mergeApexExperiments(experimentsMetadata, ApexExperimentStore.getRegisteredExperiments());
  obj.overridesInfo = getApexExperimentOverridesInfo(ApexExperimentStore.getClientOverrides());
  return obj;
};
export const useApexExperiments = function useApexExperiments() {
  closure_3(() => {
    const apexExperimentsMetadata = stateFromStores(stateFromStores1[6]).fetchApexExperimentsMetadata(stateFromStores(stateFromStores1[3]).Experiment_Surface.APP);
  }, []);
  let obj = stateFromStores(stateFromStores1[7]);
  const items = [ApexExperimentStore];
  stateFromStores = obj.useStateFromStores(items, () => ApexExperimentStore.getExperimentsMetadata());
  const items1 = [ApexExperimentStore];
  stateFromStores1 = stateFromStores(stateFromStores1[7]).useStateFromStores(items1, () => ApexExperimentStore.getRegisteredExperiments());
  const items2 = [stateFromStores, stateFromStores1];
  const obj2 = stateFromStores(stateFromStores1[7]);
  const tmp4 = closure_4(() => mergeApexExperiments(stateFromStores, stateFromStores1), items2);
  const items3 = [ApexExperimentStore];
  const stateFromStores2 = stateFromStores(stateFromStores1[7]).useStateFromStores(items3, () => ApexExperimentStore.getClientOverrides());
  obj = { experiments: tmp4, overridesInfo: null };
  const items4 = [stateFromStores2];
  obj.overridesInfo = closure_4(() => getApexExperimentOverridesInfo(stateFromStores2), items4);
  return obj;
};