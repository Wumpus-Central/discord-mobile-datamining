// === Module 11044: makeClientVariant ===

// Module 11044 (makeClientVariant)
import create from "create" /* 7604 */;
import closure_2 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import closure_5 from "initialize" /* 1212 */;

require = arg1;
function makeClientVariant(id) {
  return { id, label: "Variant " + id, shortLabel: "Variant " + id, type: create.Variation_Type.UNSPECIFIED };
}
function mergeApexExperiments(experimentsMetadata, registeredExperiments) {
  const _require = registeredExperiments;
  let obj = {};
  function _loop() {
    variants = variants.variants;
    const mapped = variants.map((id) => ({ id: id.id, label: "Variant " + id.id + ": " + id.label, shortLabel: "Variant " + id.id, type: id.type }));
    const set = new Set(mapped.map((id) => id.id));
    if (null != set[closure_2]) {
      const _Object = Object;
      const keys = Object.keys(tmp4.variations);
      const mapped1 = keys.map((arg0) => Number(arg0));
      const found = mapped1.filter((arg0) => !set.has(arg0));
      let mapped2 = found.map(closure_1_6);
    } else {
      mapped2 = [];
    }
    obj = { system: callback(obj[4]).ExperimentSystem.APEX, kind: callback(obj[5]).UnitTypeToKind[variants.unitType], name: variants.name, title: variants.title, variants: items.sort((id, id2) => id.id - id2.id) };
    items = [...mapped2];
    obj[closure_2] = obj;
  }
  const entries = Object.entries(experimentsMetadata);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [closure_2, closure_3] = tmp5;
    let _loopResult = _loop();
    continue;
  }
  const entries1 = Object.entries(registeredExperiments);
  tmp2 = entries[Symbol.iterator]();
  while (tmp8 !== undefined) {
    let tmp10 = callback;
    let tmp11 = callback(tmp9, 2);
    [tmp12, tmp14] = tmp11;
    if (null == obj[tmp12]) {
      let tmp15 = tmp12;
      obj = { system: null, kind: null, name: null, title: null, variants: null };
      let tmp16 = _require;
      let tmp17 = obj;
      obj[0] = _require(obj[4]).ExperimentSystem.APEX;
      let tmp18 = tmp14;
      ({ kind: obj2[1], name: obj2[2], name: obj2[3] } = tmp14);
      let _Object = Object;
      let keys = Object.keys(tmp14.variations);
      obj[4] = keys.map((arg0) => {
        const NumberResult = Number(arg0);
        obj = { id: NumberResult, label: "Variant " + NumberResult, shortLabel: "Variant " + NumberResult, type: callback(obj[3]).Variation_Type.UNSPECIFIED };
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
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    obj = { experimentId: null, variantId: null, originalDescriptor: null };
    obj[0] = tmp6;
    obj[1] = tmp7.variantId;
    obj[2] = tmp7;
    obj[tmp6] = obj;
    continue;
  }
  return obj;
}
({ useEffect: c3, useMemo: c4 } = noop);
const result = require("set").fileFinishedImporting("modules/experiments/client_override_hooks/useApexExperiments.tsx");

export { mergeApexExperiments };
export { getApexExperimentOverridesInfo };
export const getApexExperiments = function getApexExperiments() {
  const obj = { experiments: null, overridesInfo: null };
  const experimentsMetadata = store.getExperimentsMetadata();
  obj[0] = mergeApexExperiments(experimentsMetadata, store.getRegisteredExperiments());
  obj[1] = getApexExperimentOverridesInfo(store.getClientOverrides());
  return obj;
};
export const useApexExperiments = function useApexExperiments() {
  callback2(() => {
    const apexExperimentsMetadata = stateFromStores(stateFromStores1[6]).fetchApexExperimentsMetadata(stateFromStores(stateFromStores1[3]).Experiment_Surface.APP);
  }, []);
  let obj = stateFromStores(stateFromStores1[7]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => store.getExperimentsMetadata());
  const items1 = [closure_5];
  stateFromStores1 = stateFromStores(stateFromStores1[7]).useStateFromStores(items1, () => store.getRegisteredExperiments());
  const items2 = [stateFromStores, stateFromStores1];
  const obj2 = stateFromStores(stateFromStores1[7]);
  const tmp4 = callback3(() => closure_1_7(stateFromStores, stateFromStores1), items2);
  const items3 = [closure_5];
  const stateFromStores2 = stateFromStores(stateFromStores1[7]).useStateFromStores(items3, () => store.getClientOverrides());
  obj = { experiments: tmp4, overridesInfo: callback3(() => closure_1_8(stateFromStores2), items4) };
  items4 = [stateFromStores2];
  return obj;
};