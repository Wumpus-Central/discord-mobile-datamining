import { sortedIndexBy } from "../../../../_runtime/03910_sortedIndexBy.js";
// discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx
import _slicedToArray from "_slicedToArray";

let closure_3 = [];
let result = require("set").fileFinishedImporting("../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx");
class SecondaryIndexMap {
  constructor(arg0, arg1) {
    fn = importDefault;
    if (importDefault === undefined) {
      fn = function n(arg0, arg1) {
        return arg0 === arg1;
      };
    }
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj[0] = map;
    obj[1] = [];
    obj[2] = {};
    obj[3] = {};
    obj.indexBy = global;
    obj.sortBy = arg1;
    obj.isEqual = fn;
    return obj;
  }
}
const prototype = SecondaryIndexMap.prototype;
Object.defineProperty(prototype, "version", {
  get: function version() {
    return this._version;
  },
  set: undefined
});
prototype["indexes"] = function indexes(flag) {
  if (flag === undefined) {
    flag = false;
  }
  const self = this;
  if (flag) {
    return self.valueIndexes;
  } else {
    if (!flag) {
      if (self.dirty) {
        const obj = {};
        const _Object = Object;
        const entries = Object.entries(self.valueIndexes);
        const tmp4 = entries[Symbol.iterator]();
        while (tmp4 !== undefined) {
          let tmp8 = callback;
          let tmp9 = callback(tmp6, 2);
          let items = [];
          let tmp10 = items;
          let num2 = 0;
          let arraySpreadResult = HermesBuiltin.arraySpread(tmp9[1], 0);
          obj[tmp9[0]] = items;
          continue;
        }
        self.valueIndexesForGetter = obj;
        self.dirty = false;
      }
    }
    return self.valueIndexesForGetter;
  }
};
prototype["keys"] = function keys() {
  const valueMap = this.valueMap;
  return valueMap.keys();
};
prototype["values"] = function values(arg0, flag) {
  if (flag === undefined) {
    flag = false;
  }
  const self = this;
  if (null == arg0) {
    let valueArray = self.valueArray;
  } else {
    valueArray = self.indexes(flag)[arg0];
    if (valueArray == null) {
      valueArray = closure_3;
    }
  }
  return valueArray;
};
prototype["size"] = function size(arg0) {
  const self = this;
  if (null == arg0) {
    let num = self.valueArray.length;
  } else {
    num = undefined;
    if (self.valueIndexes[arg0] != null) {
      num = arr.length;
    }
    if (num == null) {
      num = 0;
    }
  }
  return num;
};
prototype["clear"] = function clear() {
  const valueMap = this.valueMap;
  valueMap.clear();
  this.valueArray = [];
  this.valueIndexes = {};
  this.valueIndexesForGetter = {};
};
prototype["has"] = function has(arg0) {
  const valueMap = this.valueMap;
  return valueMap.has(arg0);
};
prototype["get"] = function get(arg0) {
  const valueMap = this.valueMap;
  return valueMap.get(arg0);
};
prototype["set"] = function set(arg0, value) {
  let sortBy;
  let valueArray;
  let self = this;
  self = this;
  const dependencyMap = value;
  value = this.get(arg0);
  const importDefault = value;
  let tmp2 = null != value || null != value;
  if (tmp2) {
    let flag = null == value || null == value || !self.isEqual(value, value);
    if (flag) {
      if (null != value) {
        let valueMap = self.valueMap;
        const result = valueMap.set(arg0, value);
      } else {
        valueMap = self.valueMap;
        valueMap.delete(arg0);
      }
      ({ valueArray, sortBy } = self);
      if (null != value) {
        let tmp7 = sortedIndexBy(valueArray, value, sortBy);
        let tmp8 = tmp7;
        if (valueArray[tmp7] !== value) {
          let tmp9 = tmp7;
          tmp8 = tmp7;
          if (tmp7 < valueArray.length - 1) {
            let sum = tmp9 + 1;
            tmp8 = sum;
            while (valueArray[sum] !== value) {
              tmp9 = sum;
              tmp8 = sum;
              if (sum >= valueArray.length - 1) {
                break;
              }
            }
          }
        }
        valueArray.splice(tmp8, 1);
      }
      if (null != value) {
        valueArray.splice(sortedIndexBy(valueArray, value, sortBy), 0, value);
      }
      if (null != value) {
        const item = self.indexBy(value).forEach((arg0) => {
          const index = self.getIndex(arg0);
          if (null != closure_0) {
            const tmp5 = value(value[1])(index, tmp, tmp2);
            let tmp6 = tmp5;
            if (index[tmp5] !== tmp) {
              let tmp7 = tmp5;
              tmp6 = tmp5;
              if (tmp5 < index.length - 1) {
                const sum = tmp7 + 1;
                tmp6 = sum;
                while (index[sum] !== tmp) {
                  tmp7 = sum;
                  tmp6 = sum;
                  if (sum >= index.length - 1) {
                    break;
                  }
                }
              }
            }
            index.splice(tmp6, 1);
          }
        });
        const indexByResult = self.indexBy(value);
      }
      if (null != value) {
        const item1 = self.indexBy(value).forEach((arg0) => {
          const index = self.getIndex(arg0);
          if (null != value) {
            index.splice(value(value[1])(index, tmp, tmp2), 0, tmp);
          }
        });
        const indexByResult1 = self.indexBy(value);
      }
      self.dirty = true;
      self._version = self._version + 1;
      flag = true;
    }
    tmp2 = flag;
  }
  return tmp2;
};
prototype["delete"] = function delete(arg0) {
  return this.set(arg0, null);
};
prototype["getIndex"] = function getIndex(arg0) {
  let tmp2 = this.valueIndexes[arg0];
  if (null == tmp2) {
    const items = [];
    tmp.valueIndexes[arg0] = items;
    tmp2 = items;
  }
  return tmp2;
};

export { SecondaryIndexMap };