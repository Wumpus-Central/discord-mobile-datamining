// discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx
import sortedIndexByDefault from "../../../../_runtime/04511_sortedIndexBy.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault;

let closure_3 = [];
let result = size.fileFinishedImporting("../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx");
class SecondaryIndexMap {
  constructor(guildJoinRequestsIndex, getGuildMemberSecondarySortBy) {
    let fn = arg2;
    if (arg2 === undefined) {
      fn = function n(arg0, arg1) {
        return arg0 === arg1;
      };
    }
    const merged = Object.assign({
      valueMap: null,
      valueArray: null,
      valueIndexes: null,
      valueIndexesForGetter: null,
      dirty: false,
      _version: 0,
    });
    merged[0] = new Map();
    merged[1] = [];
    merged[2] = {};
    merged[3] = {};
    merged.indexBy = guildJoinRequestsIndex;
    merged.sortBy = getGuildMemberSecondarySortBy;
    merged.isEqual = fn;
    new Map();
    return merged;
  }
  indexes() {
    const self = this;
    if (flag) {
      return self.valueIndexes;
    } else {
      if (!flag) {
        if (self.dirty) {
          const obj = {};
          const _Object = Object;
          const entries = Object.entries(self.valueIndexes);
          const tmp5 = entries[Symbol.iterator]();
          while (tmp5 !== undefined) {
            let tmp10 = _slicedToArray(tmp7, 2);
            let items = [];
            let first = tmp10[0];
            let arraySpreadResult = HermesBuiltin.arraySpread(items, tmp10[1], 0);
            obj[first] = items;
            continue;
          }
          self.valueIndexesForGetter = obj;
          self.dirty = false;
        }
      }
      return self.valueIndexesForGetter;
    }
  }
  keys() {
    const valueMap = this.valueMap;
    return valueMap.keys();
  }
  values(arg0) {
    let flag;
    let valueArray;
    if (flag === undefined) {
      flag = false;
    }
    const self = this;
    if (null == arg0) {
      valueArray = self.valueArray;
    } else {
      valueArray = self.indexes(flag)[arg0];
      if (valueArray == null) {
        valueArray = closure_3;
      }
    }
    return valueArray;
  }
  size(arg0) {
    let num;
    const self = this;
    if (null == arg0) {
      num = self.valueArray.length;
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
  }
  clear() {
    const valueMap = this.valueMap;
    valueMap.clear();
    this.valueArray = [];
    this.valueIndexes = {};
    this.valueIndexesForGetter = {};
  }
  has(arg0) {
    const valueMap = this.valueMap;
    return valueMap.has(arg0);
  }
  get(arg0) {
    const valueMap = this.valueMap;
    return valueMap.get(arg0);
  }
  set(arg0, value) {
    let sortBy;
    let valueArray;
    const self = this;
    dependencyMap = value;
    value = this.get(arg0);
    importDefault = value;
    let tmp2 = null != value || null != value;
    if (tmp2) {
      let flag = null == value || null == value || !self.isEqual(value, value);
      if (flag) {
        if (null != value) {
          const valueMap2 = self.valueMap;
          const result = valueMap2.set(arg0, value);
        } else {
          const valueMap = self.valueMap;
          valueMap.delete(arg0);
        }
        ({ valueArray, sortBy } = self);
        if (null != value) {
          let tmp5 = importDefault;
          let tmp6 = dependencyMap;
          let tmp7 = sortedIndexByDefault(valueArray, value, sortBy);
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
          valueArray.splice(sortedIndexByDefault(valueArray, value, sortBy), 0, value);
        }
        if (null != value) {
          const indexByResult = self.indexBy(value);
          const item = indexByResult.forEach((item) => {
            const index = self.getIndex(item);
            if (null != importDefault) {
              const tmp5 = sortedIndexByDefault(index, importDefault, tmp2);
              let tmp6 = tmp5;
              if (index[tmp5] !== importDefault) {
                let tmp7 = tmp5;
                tmp6 = tmp5;
                if (tmp5 < index.length - 1) {
                  const sum = tmp7 + 1;
                  tmp6 = sum;
                  while (index[sum] !== importDefault) {
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
        }
        if (null != value) {
          const indexByResult1 = self.indexBy(value);
          const item1 = indexByResult1.forEach((item) => {
            const index = self.getIndex(item);
            if (null != dependencyMap) {
              index.splice(sortedIndexByDefault(index, dependencyMap, tmp2), 0, dependencyMap);
            }
          });
        }
        self.dirty = true;
        self._version = self._version + 1;
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  }
  delete(arg0) {
    return this.set(arg0, null);
  }
  getIndex(arg0) {
    let tmp2 = this.valueIndexes[arg0];
    if (null == tmp2) {
      const items = [];
      tmp.valueIndexes[arg0] = items;
      tmp2 = items;
    }
    return tmp2;
  }
}
Object.defineProperty(SecondaryIndexMap.prototype, "version", {
  get: function version() {
    return this._version;
  },
  set: undefined,
});

export { SecondaryIndexMap };
