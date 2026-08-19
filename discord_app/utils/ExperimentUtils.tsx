// === Module 4365: getFirstEligibleUserExperiment ===

// Module 4365 (getFirstEligibleUserExperiment)
import applyDefault from "apply" /* 12 */;
import trackExposureToExperiment from "trackExposureToExperiment" /* 4296 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import getHash from "getHash" /* 4288 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4289 */;

require = fn;
function getFirstEligibleUserExperiment(arg0) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let userExperimentDescriptor = authStore.getUserExperimentDescriptor(nextResult);
    if (null != userExperimentDescriptor) {
      let items = [tmp2, userExperimentDescriptor];
      iter.return();
      return items;
    }
  }
  return null;
}
({ ExperimentTypes: c5, ExperimentBuckets: closure_6 } = ExperimentBuckets);
let result = require("obj132").fileFinishedImporting("utils/ExperimentUtils.tsx");

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
              return applyDefault.isEqual(type.context, type2.context);
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
      const result = trackExposureToExperiment.trackExposureToExperiment(tmp3[0], tmp4);
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
    closure_0 = arg1;
    const entries = Object.entries(arg0);
    return entries.reduce((acc, item, index) => {
      [tmp, tmp2] = item;
      let tmp3 = (function isRecentExperiment(str, closure_0) {
        try {
          [tmp4, tmp5] = callback("-".split("-"), 2);
          if (null == tmp5) {
            return false;
          } else {
            const _Date = Date;
            const _HermesInternal = HermesInternal;
            const date = new Date("" + tmp4 + "-" + tmp5.slice(0, 2) + "-01");
            return date > closure_0;
          }
          const tmp3 = callback("-".split("-"), 2);
        } catch (err) {
          return false;
        }
      })(tmp, closure_0);
      if (tmp3) {
        tmp3 = tmp2 > closure_1_6.CONTROL;
      }
      if (tmp3) {
        acc[tmp] = tmp2;
      }
      return acc;
    }, {});
  }
};