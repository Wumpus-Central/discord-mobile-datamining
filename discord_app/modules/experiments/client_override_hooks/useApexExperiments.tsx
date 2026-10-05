// discord_app/modules/experiments/client_override_hooks/useApexExperiments.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import apex_ApexTypes from "../apex/ApexTypes.tsx";
import ExperimentManager from "../ExperimentManager.tsx";
import experiment from "../../../../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ApexExperimentStore from "../apex/ApexExperimentStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, set, variants;

let c3;
let closure_4;
function makeClientVariant(id) {
  const obj = { id, label: "Variant " + id, shortLabel: "Variant " + id, type: experiment.Variation_Type.UNSPECIFIED };
  return obj;
}
function mergeApexExperiments(stateFromStores, stateFromStores1) {
  let closure_3;
  let keys;
  let tmp12;
  let tmp14;
  _require = stateFromStores1;
  let obj = {};
  function _loop() {
    let items;
    let mapped2;
    variants = variants.variants;
    const mapped = variants.map((id) => {
      obj = { id: id.id, label: "Variant " + id.id + ": " + id.label, shortLabel: "Variant " + id.id, type: id.type };
      return obj;
    });
    set = new Set(mapped.map((id) => id.id));
    if (null != stateFromStores1[_slicedToArray]) {
      const _Object = Object;
      const keys = Object.keys(tmp4.variations);
      const mapped1 = keys.map((item) => Number(item));
      const found = mapped1.filter((item) => !set.has(item));
      mapped2 = found.map(makeClientVariant);
    } else {
      mapped2 = [];
    }
    obj = {
      system: ExperimentManager.ExperimentSystem.APEX,
      kind: apex_ApexTypes.UnitTypeToKind[tmp.unitType],
      name: tmp.name,
      title: tmp.title,
      variants: items.sort((id, id2) => id.id - id2.id),
    };
    items = [...mapped2];
    obj[_slicedToArray] = obj;
  }
  const entries = Object.entries(stateFromStores);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [_slicedToArray, closure_3] = tmp5;
    let _loopResult = _loop();
    continue;
  }
  const entries1 = Object.entries(stateFromStores1);
  const tmp8 = entries1[Symbol.iterator]();
  while (tmp8 !== undefined) {
    let tmp11 = _slicedToArray(tmp9, 2);
    [tmp12, tmp14] = tmp11;
    if (null == obj[tmp12]) {
      let obj3 = {
        system: require("ExperimentManager").ExperimentSystem.APEX,
        kind: null,
        name: null,
        title: null,
        variants: keys.map((item) => {
          const NumberResult = Number(item);
          obj = {
            id: NumberResult,
            label: "Variant " + NumberResult,
            shortLabel: "Variant " + NumberResult,
            type: stateFromStores1(obj[3]).Variation_Type.UNSPECIFIED,
          };
          return obj;
        }),
      };
      ({ kind: obj2.kind, name: obj2.name, name: obj2.title } = tmp14);
      let _Object = Object;
      keys = Object.keys(tmp14.variations);
      obj[tmp13] = obj3;
    }
    continue;
  }
  return obj;
}
function getApexExperimentOverridesInfo(stateFromStores2) {
  let tmp6;
  let tmp7;
  const obj = {};
  const entries = Object.entries(stateFromStores2);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj2 = { experimentId: tmp6, variantId: tmp7.variantId, originalDescriptor: tmp7 };
    obj[tmp6] = obj2;
    continue;
  }
  return obj;
}
({ useEffect: c3, useMemo: closure_4 } = react);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useApexExperiments() {
      let tmp11;
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = require("ApexActionCreators");
          const apexExperimentsMetadata = obj.fetchApexExperimentsMetadata(
            require("experiment").Experiment_Surface.APP,
          );
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp4 = fn;
        tmp5 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      _false(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApexExperimentStore];
        const fn2 = function o() {
          return ApexExperimentStore.getExperimentsMetadata();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp8 = fn2;
        tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ApexExperimentStore];
        const fn3 = function l() {
          return ApexExperimentStore.getRegisteredExperiments();
        };
        cResult[4] = items2;
        cResult[5] = fn3;
        tmp12 = fn3;
        tmp11 = items2;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult3 = get_initialized;
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, tmp12);
      if (cResult[6] === stateFromStores) {
        let tmp15;
        let tmp18;
        let tmp17;
        let tmp21;
        if (cResult[7] === stateFromStores1) {
          tmp15 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [ApexExperimentStore];
          class A {
            constructor() {
              return ApexExperimentStore.getClientOverrides();
            }
          }
          cResult[9] = items3;
          cResult[10] = A;
          tmp18 = A;
          tmp17 = items3;
        } else {
          tmp17 = cResult[9];
          tmp18 = cResult[10];
        }
        const tmpResult4 = get_initialized;
        const stateFromStores2 = tmpResult4.useStateFromStores(tmp17, tmp18);
        if (cResult[11] !== stateFromStores2) {
          const tmp23 = getApexExperimentOverridesInfo(stateFromStores2);
          class A {
            constructor() {
              return ApexExperimentStore.getClientOverrides();
            }
          }
          cResult[12] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[12];
        }
        if (cResult[13] === tmp15) {
          let tmp24;
          if (cResult[14] === tmp21) {
            tmp24 = cResult[15];
          }
          return tmp24;
        }
        const obj2 = { experiments: tmp15, overridesInfo: tmp21 };
        cResult[13] = tmp15;
        cResult[14] = tmp21;
        cResult[15] = obj2;
        tmp24 = obj2;
      }
      const tmp16 = mergeApexExperiments(stateFromStores, stateFromStores1);
      cResult[6] = stateFromStores;
      cResult[7] = stateFromStores1;
      cResult[8] = tmp16;
      tmp15 = tmp16;
    }
  : function useApexExperiments() {
      let items4;
      let stateFromStores;
      let stateFromStores1;
      closure_3(() => {
        const obj = stateFromStores(stateFromStores1[8]);
        const apexExperimentsMetadata = obj.fetchApexExperimentsMetadata(
          stateFromStores(stateFromStores1[3]).Experiment_Surface.APP,
        );
      }, []);
      let obj = stateFromStores(stateFromStores1[9]);
      const items = [ApexExperimentStore];
      stateFromStores = obj.useStateFromStores(items, () => ApexExperimentStore.getExperimentsMetadata());
      const items1 = [ApexExperimentStore];
      const obj2 = stateFromStores(stateFromStores1[9]);
      stateFromStores1 = obj2.useStateFromStores(items1, () => ApexExperimentStore.getRegisteredExperiments());
      const items2 = [stateFromStores, stateFromStores1];
      const items3 = [ApexExperimentStore];
      const tmp4 = closure_4(() => mergeApexExperiments(stateFromStores, stateFromStores1), items2);
      const obj3 = stateFromStores(stateFromStores1[9]);
      const stateFromStores2 = obj3.useStateFromStores(items3, () => ApexExperimentStore.getClientOverrides());
      const obj4 = {
        experiments: tmp4,
        overridesInfo: closure_4(() => getApexExperimentOverridesInfo(stateFromStores2), items4),
      };
      items4 = [stateFromStores2];
      return obj4;
    };
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useApexExperiments.tsx");

export { mergeApexExperiments };
export { getApexExperimentOverridesInfo };
export const getApexExperiments = function getApexExperiments() {
  let experimentsMetadata;
  const obj = {
    experiments: mergeApexExperiments(experimentsMetadata, ApexExperimentStore.getRegisteredExperiments()),
    overridesInfo: getApexExperimentOverridesInfo(ApexExperimentStore.getClientOverrides()),
  };
  experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
  return obj;
};
export const useApexExperiments = tmp3;
