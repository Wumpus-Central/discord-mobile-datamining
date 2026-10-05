// discord_app/modules/experiments/client_override_hooks/useLegacyExperiments.tsx
import react from "../../../../_runtime/00019_react.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import ExperimentManager from "../ExperimentManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import ExperimentStore from "../ExperimentStore.tsx";
import ExperimentConstants from "../ExperimentConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
function parseRegisteredExperiments(stateFromStoresObject) {
  let obj = {};
  function _loop(type) {
    let buckets;
    let str;
    let closure_0 = type;
    obj = {
      system: ExperimentManager.ExperimentSystem.LEGACY,
      kind: str,
      name,
      title: null,
      variants: buckets.map((item, index) => {
        let TREATMENT;
        let experimentBucketName;
        let obj2;
        obj = {
          id: item.valueOf(),
          label: experimentBucketName,
          shortLabel: obj2.getExperimentBucketName(item),
          type: TREATMENT,
        };
        if (typeof description.description === "object") {
          experimentBucketName = tmp.description[index];
        } else {
          const obj3 = name(closure_2_2[6]);
          experimentBucketName = obj3.getExperimentBucketName(item);
        }
        obj2 = name(closure_2_2[6]);
        if (item === constants.CONTROL) {
          TREATMENT = closure_2_0(closure_2_2[4]).Variation_Type.CONTROL;
        } else if (item === tmp4.NOT_ELIGIBLE) {
          TREATMENT = closure_2_0(closure_2_2[4]).Variation_Type.UNSPECIFIED;
        } else {
          TREATMENT = closure_2_0(closure_2_2[4]).Variation_Type.TREATMENT;
        }
        return obj;
      }),
    };
    const tmp = obj;
    str = "guild";
    if (type.type === metroImportDefault.USER) {
      str = "user";
    }
    ({ title: obj.title, buckets } = type);
    tmp[name] = obj;
  }
  const entries = Object.entries(stateFromStoresObject);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let name = tmp5[0];
    let _loopResult = _loop(tmp5[1]);
    continue;
  }
  return obj;
}
function getLegacyOverridesInfo(stateFromStoresObject1) {
  let bucket;
  let tmp6;
  let tmp7;
  const obj = {};
  const entries = Object.entries(stateFromStoresObject1);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj2 = { experimentId: tmp6, variantId: bucket.valueOf(), originalDescriptor: tmp7 };
    bucket = tmp7.bucket;
    obj[tmp6] = obj2;
    continue;
  }
  return obj;
}
const useMemo = react.useMemo;
({ ExperimentBuckets: metroRequire, ExperimentTypes: metroImportDefault } = ExperimentConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useLegacyExperiments() {
      let tmp12;
      let tmp15;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(11);
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
      const tmpResult = get_initialized;
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ExperimentStore];
        const fn2 = function c() {
          return ExperimentStore.getAllExperimentOverrideDescriptors();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult2 = get_initialized;
      const stateFromStoresObject1 = tmpResult2.useStateFromStoresObject(tmp8, tmp9);
      if (cResult[4] !== stateFromStoresObject) {
        const tmp14 = parseRegisteredExperiments(stateFromStoresObject);
        cResult[4] = stateFromStoresObject;
        cResult[5] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== stateFromStoresObject1) {
        const tmp17 = getLegacyOverridesInfo(stateFromStoresObject1);
        cResult[6] = stateFromStoresObject1;
        cResult[7] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] === tmp12) {
        let tmp18;
        if (cResult[9] === tmp15) {
          tmp18 = cResult[10];
        }
        return tmp18;
      }
      const obj2 = { experiments: tmp12, overridesInfo: tmp15 };
      cResult[8] = tmp12;
      cResult[9] = tmp15;
      cResult[10] = obj2;
      tmp18 = obj2;
    }
  : function useLegacyExperiments() {
      let items2;
      let items3;
      let stateFromStoresObject;
      const items = [ExperimentStore];
      const obj = stateFromStoresObject(504);
      stateFromStoresObject = obj.useStateFromStoresObject(items, () => ExperimentStore.getRegisteredExperiments());
      const items1 = [ExperimentStore];
      const obj2 = stateFromStoresObject(504);
      const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () =>
        ExperimentStore.getAllExperimentOverrideDescriptors(),
      );
      const obj3 = {
        experiments: useMemo(() => parseRegisteredExperiments(stateFromStoresObject), items2),
        overridesInfo: useMemo(() => getLegacyOverridesInfo(stateFromStoresObject1), items3),
      };
      items2 = [stateFromStoresObject];
      items3 = [stateFromStoresObject1];
      return obj3;
    };
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useLegacyExperiments.tsx");

export { parseRegisteredExperiments };
export { getLegacyOverridesInfo };
export const getLegacyExperiments = function getLegacyExperiments() {
  let allExperimentOverrideDescriptors;
  const registeredExperiments = ExperimentStore.getRegisteredExperiments();
  const obj = {
    experiments: parseRegisteredExperiments(registeredExperiments),
    overridesInfo: getLegacyOverridesInfo(allExperimentOverrideDescriptors),
  };
  allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
  return obj;
};
export const useLegacyExperiments = tmp3;
