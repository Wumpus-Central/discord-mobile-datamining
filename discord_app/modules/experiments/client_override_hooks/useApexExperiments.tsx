// === Module 11273: useApexExperiments ===

// Module 11273 (useApexExperiments)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import apex_ApexTypes from "apex/ApexTypes" /* 1455 */;
import ExperimentManager from "ExperimentManager" /* 4981 */;
import experiment from "experiment" /* 8120 */;
import _slicedToArray from "module_32" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;

const require = globalThis.__r;

require = fn;
function makeClientVariant(id) {
  return { id, label: "Variant " + id, shortLabel: "Variant " + id, type: experiment.Variation_Type.UNSPECIFIED };
}
function mergeApexExperiments(stateFromStores, stateFromStores1) {
  _require = stateFromStores1;
  let obj = {};
  function _loop() {
    variants = variants.variants;
    const mapped = variants.map((id) => ({ id: id.id, label: "Variant " + id.id + ": " + id.label, shortLabel: "Variant " + id.id, type: id.type }));
    new Set(mapped.map((id) => id.id));
    if (null != stateFromStores1[_slicedToArray]) {
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
  const entries = Object.entries(stateFromStores);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [_slicedToArray, closure_3] = tmp5;
    let _loopResult = _loop();
    continue;
  }
  const entries1 = Object.entries(stateFromStores1);
  tmp2 = entries[Symbol.iterator]();
  while (tmp8 !== undefined) {
    let tmp11 = _slicedToArray(tmp9, 2);
    [tmp12, tmp14] = tmp11;
    if (null == obj[tmp12]) {
      let obj3 = { system: null, kind: null, name: null, title: null, variants: null };
      obj3.system = require("ExperimentManager").ExperimentSystem.APEX;
      ({ kind: obj2.kind, name: obj2.name, name: obj2.title } = tmp14);
      let _Object = Object;
      let keys = Object.keys(tmp14.variations);
      obj3.variants = keys.map((item) => {
        const NumberResult = Number(item);
        obj = { id: NumberResult, label: "Variant " + NumberResult, shortLabel: "Variant " + NumberResult, type: stateFromStores1(obj[3]).Variation_Type.UNSPECIFIED };
        return obj;
      });
      obj[tmp13] = obj3;
    }
    continue;
  }
  return obj;
}
function getApexExperimentOverridesInfo(stateFromStores2) {
  const obj = {};
  const entries = Object.entries(stateFromStores2);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj2 = { experimentId: tmp6, variantId: tmp7.variantId, originalDescriptor: tmp7 };
    obj[tmp6] = obj2;
    continue;
  }
  return obj;
}
const noop = fn(19);
({ useEffect: c3, useMemo: closure_4 } = noop);
const ReactCompilerGating = fn(558);
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
export const useApexExperiments = ReactCompilerGating.isReactCompilerEnabled() ? (function useApexExperiments() {
  const cResult = c.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const apexExperimentsMetadata = require("ApexActionCreators").fetchApexExperimentsMetadata(require("experiment").Experiment_Surface.APP);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  React3(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApexExperimentStore];
    const fn2 = function o() {
      return ApexExperimentStore.getExperimentsMetadata();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp8 = fn2;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const stateFromStores = initialize.useStateFromStores(tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ApexExperimentStore];
    const fn3 = function l() {
      return ApexExperimentStore.getRegisteredExperiments();
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    let tmp12 = fn3;
    let tmp11 = items2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp11, tmp12);
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === stateFromStores1) {
      let tmp15 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [ApexExperimentStore];
      class A {
        constructor() {
          return closure_1_5.getClientOverrides();
        }
      }
      cResult[9] = items3;
      cResult[10] = A;
      let tmp18 = A;
      let tmp17 = items3;
    } else {
      tmp17 = cResult[9];
      tmp18 = cResult[10];
    }
    const stateFromStores2 = initialize.useStateFromStores(tmp17, tmp18);
    if (cResult[11] !== stateFromStores2) {
      const tmp23 = getApexExperimentOverridesInfo(stateFromStores2);
      class A {
        constructor() {
          return closure_1_5.getClientOverrides();
        }
      }
      cResult[12] = tmp23;
      let tmp21 = tmp23;
    } else {
      tmp21 = cResult[12];
    }
    if (cResult[13] === tmp15) {
      if (cResult[14] === tmp21) {
        let tmp24 = cResult[15];
      }
      return tmp24;
    }
    const obj2 = { experiments: tmp15, overridesInfo: tmp21 };
    cResult[13] = tmp15;
    cResult[14] = tmp21;
    cResult[15] = obj2;
    tmp24 = obj2;
    const tmpResult4 = initialize;
  }
  const tmp16 = mergeApexExperiments(stateFromStores, stateFromStores1);
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = tmp16;
  tmp15 = tmp16;
  const tmpResult3 = initialize;
}) : (function useApexExperiments() {
  closure_3(() => {
    const apexExperimentsMetadata = stateFromStores(stateFromStores1[8]).fetchApexExperimentsMetadata(stateFromStores(stateFromStores1[3]).Experiment_Surface.APP);
  }, []);
  const items = [ApexExperimentStore];
  stateFromStores = stateFromStores(stateFromStores1[9]).useStateFromStores(items, () => ApexExperimentStore.getExperimentsMetadata());
  const obj = stateFromStores(stateFromStores1[9]);
  const items1 = [ApexExperimentStore];
  stateFromStores1 = stateFromStores(stateFromStores1[9]).useStateFromStores(items1, () => ApexExperimentStore.getRegisteredExperiments());
  const items2 = [stateFromStores, stateFromStores1];
  const obj2 = stateFromStores(stateFromStores1[9]);
  const tmp4 = closure_4(() => mergeApexExperiments(stateFromStores, stateFromStores1), items2);
  const items3 = [ApexExperimentStore];
  const stateFromStores2 = stateFromStores(stateFromStores1[9]).useStateFromStores(items3, () => ApexExperimentStore.getClientOverrides());
  const obj4 = { experiments: tmp4, overridesInfo: null };
  const items4 = [stateFromStores2];
  obj4.overridesInfo = closure_4(() => getApexExperimentOverridesInfo(stateFromStores2), items4);
  return obj4;
});