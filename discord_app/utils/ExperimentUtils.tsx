// discord_app/utils/ExperimentUtils.tsx
import _slicedToArray from "_slicedToArray";
import getHash from "getHash";
import ExperimentBuckets from "ExperimentBuckets";

let c5;
let closure_6;
const require = arg1;
function getFirstEligibleUserExperiment(arg0) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = authStore;
    let tmp2 = nextResult;
    let userExperimentDescriptor = authStore.getUserExperimentDescriptor(nextResult);
    let tmp5 = userExperimentDescriptor;
    if (null != userExperimentDescriptor) {
      let tmp6 = nextResult;
      let items = [tmp2, userExperimentDescriptor];
      let tmp7 = iter;
      iter.return();
      return items;
    }
  }
  return null;
}
({ ExperimentTypes: c5, ExperimentBuckets: closure_6 } = ExperimentBuckets);
let result = require("ExperimentBuckets").fileFinishedImporting("utils/ExperimentUtils.tsx");

export default {
  getFirstEligibleUserExperiment,
  isInExperimentBucket(id) {
    return authStore.getUserExperimentBucket(id) === arg1;
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
          } else if (type.type === constants.USER) {
            if (type2.type === tmp.USER) {
              return require("../../_runtime/00012_apply.js").isEqual(type.context, type2.context);
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
      const tmp3 = callback(tmp, 2);
      const result = require("../modules/experiments/ExperimentManager.tsx") /* trackExposureToExperiment */.trackExposureToExperiment(tmp3[0], tmp4);
      return tmp3[1];
    }
  },
  getExperimentBucketName(bucket) {
    let str = "Control";
    if (bucket !== constants2.CONTROL) {
      let str2 = "Not Eligible";
      if (bucket !== constants2.NOT_ELIGIBLE) {
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
    return entries.reduce((arg0, arg1) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg1;
      let tmp3 = (function isRecentExperiment(str, closure_0) {
        let tmp4;
        let tmp5;
        try {
          [tmp4, tmp5] = callback(str.split("-"), 2);
          if (null == tmp5) {
            return false;
          } else {
            const _Date = Date;
            const _HermesInternal = HermesInternal;
            const date = new Date("" + tmp4 + "-" + arr.slice(0, 2) + "-01");
            return date > closure_0;
          }
          arr = tmp5;
          const tmp3 = callback(str.split("-"), 2);
        } catch (err) {
          return false;
        }
      })(tmp, closure_0);
      if (tmp3) {
        tmp3 = tmp2 > outer1_6.CONTROL;
      }
      if (tmp3) {
        arg0[tmp] = tmp2;
      }
      return arg0;
    }, {});
  }
};