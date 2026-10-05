// discord_app/utils/ExperimentUtils.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import ExperimentManager from "../modules/experiments/ExperimentManager.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import ExperimentStore from "../modules/experiments/ExperimentStore.tsx";
import ExperimentConstants from "../modules/experiments/ExperimentConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
function getFirstEligibleUserExperiment(arg0) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let userExperimentDescriptor = ExperimentStore.getUserExperimentDescriptor(nextResult);
    if (null != userExperimentDescriptor) {
      let items = [tmp2, userExperimentDescriptor];
      iter.return();
      return items;
    }
  }
  return null;
}
({ ExperimentTypes: hasOwnProperty, ExperimentBuckets: metroRequire } = ExperimentConstants);
let obj = {
  getFirstEligibleUserExperiment,
  isInExperimentBucket(id, arg1) {
    return ExperimentStore.getUserExperimentBucket(id) === arg1;
  },
  experimentDescriptorEquals(type, type2) {
    if (null == type) {
      if (null == type2) {
        return true;
      }
    }
    if (type === type2) {
      return true;
    } else {
      if (null == type) {
        if (null != type2) {
          return false;
        }
      }
      if (null != type) {
        if (null == type2) {
          return false;
        }
      }
      if (null != type) {
        if (null != type2) {
          if (type.type !== type2.type) {
            return false;
          } else if (type.bucket !== type2.bucket) {
            return false;
          } else if (type.revision !== type2.revision) {
            return false;
          } else if (type.type === hasOwnProperty.USER) {
            if (type2.type === tmp.USER) {
              const obj = _modDef12;
              return obj.isEqual(type.context, type2.context);
            }
          }
        }
      }
      return true;
    }
  },
  trackExposureToFirstEligibleUserExperiment(arg0) {
    const tmp = getFirstEligibleUserExperiment(arg0);
    if (null != tmp) {
      const tmp3 = _slicedToArray(tmp, 2);
      const first = tmp3[0];
      const obj = ExperimentManager;
      const result = obj.trackExposureToExperiment(first, tmp5);
      return tmp3[1];
    }
  },
  getExperimentBucketName(bucket) {
    let str = "Control";
    if (bucket !== metroRequire.CONTROL) {
      let str2 = "Not Eligible";
      if (bucket !== metroRequire.NOT_ELIGIBLE) {
        const _HermesInternal = HermesInternal;
        str2 = "Treatment " + bucket;
      }
      str = str2;
    }
    return str;
  },
  getRecentExperimentBuckets(arg0, arg1) {
    let closure_0 = arg1;
    const entries = Object.entries(arg0);
    return entries.reduce((acc, item) => {
      let tmp;
      let tmp2;
      function isRecentExperiment(str, arg1) {
        let tmp4;
        let tmp5;
        try {
          [tmp4, tmp5] = closure_1_3("-".split("-"), 2);
          closure_1_3("-".split("-"), 2);
          if (null == tmp5) {
            return false;
          } else {
            const _Date = Date;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const date = new Date("" + tmp4 + "-" + tmp5.slice(0, 2) + "-01");
            return date > arg1;
          }
        } catch (err) {
          return false;
        }
      }
      [tmp, tmp2] = item;
      const tmp3 = isRecentExperiment(tmp, closure_0) && tmp2 > metroRequire.CONTROL;
      if (tmp3) {
        acc[tmp] = tmp2;
      }
      return acc;
    }, {});
  },
};
let result = size.fileFinishedImporting("utils/ExperimentUtils.tsx");

export default obj;
