// _runtime/16623_AgeRangeThresholdManager.js
import AgeRangeThresholdManager from "_classCallCheck";

class AgeRangeThresholdManager {
  constructor() {
    tmp = AgeRangeThresholdManager(this, AgeRangeThresholdManager);
    this.thresholds = null;
    return;
  }
}
let obj = {
  key: "setAgeRangeThresholds",
  value: function setAgeRangeThresholds(arg0) {
    if (undefined !== arg0[0]) {
      if (null !== arg0[0]) {
        if (arg0[0] >= 1) {
          if (arg0[0] <= 18) {
            let num = 1;
            if (1 < arg0.length) {
              while (true) {
                let tmp = arg0[num];
                let tmp2 = arg0[num - 1];
                let tmp3 = num;
                if (undefined !== tmp) {
                  if (undefined !== tmp2) {
                    if (tmp <= tmp2) {
                      break;
                    }
                  }
                }
                num = num + 1;
              }
              const _Error2 = Error;
              const error = new Error("PlayAgeRangeDeclaration: Age range thresholds must be in ascending order");
              throw error;
            }
            let num3 = 1;
            if (1 < arg0.length) {
              while (true) {
                let tmp4 = arg0[num3];
                let tmp5 = arg0[num3 - 1];
                let tmp6 = num3;
                if (undefined !== tmp4) {
                  if (undefined !== tmp5) {
                    if (tmp4 - tmp5 < 2) {
                      break;
                    }
                  }
                }
                num3 = num3 + 1;
              }
              const _Error = Error;
              const error1 = new Error("PlayAgeRangeDeclaration: Age range thresholds must be at least 2 years apart");
              throw error1;
            }
            const self = this;
            const items = [, , ];
            [arr[0], arr[1], arr[2]] = arg0;
            this.thresholds = items;
          }
        }
        const _Error3 = Error;
        const error2 = new Error("PlayAgeRangeDeclaration: setAgeRangeThresholds: Age range thresholds must be between 1 and 18 (inclusive)");
        throw error2;
      }
    }
    const error3 = new Error("PlayAgeRangeDeclaration: First threshold age is required");
    throw error3;
  }
};
let items = [
  obj,
  {
    key: "getThresholds",
    value: function getThresholds() {
      if (null === this.thresholds) {
        const _Error = Error;
        const error = new Error("PlayAgeRangeDeclaration: ageRangeThresholds not set");
        throw error;
      } else {
        return tmp.thresholds;
      }
    }
  }
];
obj = {
  key: "getInstance",
  value: function getInstance() {
    if (!AgeRangeThresholdManager.instance) {
      const obj = Object.create(tmp.prototype);
      AgeRangeThresholdManager(obj, tmp);
      obj.thresholds = null;
      tmp.instance = obj;
    }
    return AgeRangeThresholdManager.instance;
  }
};
const items1 = [obj];

export const ageRangeThresholdManager = require("_createClass")(AgeRangeThresholdManager, items, items1).getInstance();