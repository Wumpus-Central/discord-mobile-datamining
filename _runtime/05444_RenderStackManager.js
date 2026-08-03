// === Module 5444: RenderStackManager ===

// Module 5444 (RenderStackManager)
import RenderStackManager from "_slicedToArray";
import _classCallCheck from "_classCallCheck";

class RenderStackManager {
  constructor() {
    MAX_SAFE_INTEGER = global;
    if (global === undefined) {
      tmp = globalThis;
      _Number = Number;
      MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    }
    tmp2 = outer1_1(this, RenderStackManager);
    this.disableRecycling = false;
    this.maxItemsInRecyclePool = MAX_SAFE_INTEGER;
    map = new Map();
    this.recycleKeyPools = map;
    map1 = new Map();
    this.keyMap = map1;
    map2 = new Map();
    this.stableIdMap = map2;
    this.keyCounter = 0;
    set = new Set();
    this.unProcessedIndices = set;
    return;
  }
}
let items = [
  {
    key: "sync",
    value: function sync(arg0, arg1, arr) {
      let self = this;
      self = this;
      let _classCallCheck = arg0;
      let closure_2 = arg1;
      let closure_3 = arr;
      let closure_0 = arg3;
      this.clearRecyclePool();
      let unProcessedIndices = this.unProcessedIndices;
      unProcessedIndices.clear();
      let keyMap = this.keyMap;
      const item = keyMap.forEach((index) => {
        index = index.index;
        if (index >= closure_0) {
          self.recycleKey(arg1);
        } else {
          if (!self.disableRecycling) {
            const unProcessedIndices = obj.unProcessedIndices;
            unProcessedIndices.add(index);
          }
          if (arr.includes(index)) {
            const tmp7 = callback(index);
            if (!tmp9) {
              obj.recycleKey(arg1);
            }
            tmp9 = tmp === callback(index) && tmp2 === callback2(index);
          } else {
            obj.recycleKey(arg1);
          }
        }
      });
      const iter = arr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        if (self.hasOptimizedKey(arg0(nextResult))) {
          let tmp6 = nextResult;
          let tmp7 = arg1(tmp5);
          let syncItemResult = self.syncItem(tmp5, tmp7, arg0(tmp5));
        }
        continue;
      }
      const iter2 = arr[Symbol.iterator]();
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp10 = nextResult1;
        if (!self.hasOptimizedKey(arg0(nextResult1))) {
          let tmp11 = nextResult1;
          let tmp12 = arg1(tmp10);
          let syncItemResult1 = self.syncItem(tmp10, tmp12, arg0(tmp10));
        }
        continue;
      }
      const items = [];
      keyMap = self.keyMap;
      const values = keyMap.values();
      for (const item10057 of values) {
        let index = item10057.index;
        let tmp15 = index;
        let tmp16 = index < arg3;
        if (tmp16) {
          let tmp17 = index;
          tmp16 = !arg2.includes(tmp15);
        }
        if (tmp16) {
          let tmp18 = index;
          arr = items.push(tmp15);
        }
        continue;
      }
      for (const item10072 of items) {
        let tmp20 = item10072;
        if (self.hasOptimizedKey(arg0(item10072))) {
          let tmp21 = item10072;
          let tmp22 = arg1(tmp20);
          let syncItemResult2 = self.syncItem(tmp20, tmp22, arg0(tmp20));
        }
        continue;
      }
      for (const item10087 of items) {
        let tmp24 = item10087;
        if (!self.hasOptimizedKey(arg0(item10087))) {
          let tmp25 = item10087;
          let tmp26 = arg1(tmp24);
          let syncItemResult3 = self.syncItem(tmp24, tmp26, arg0(tmp24));
        }
        continue;
      }
      self.cleanup(arg0, arg1, arr, arg3);
    }
  },
  {
    key: "hasOptimizedKey",
    value: function hasOptimizedKey(arg0) {
      const stableIdMap = this.stableIdMap;
      return stableIdMap.has(arg0);
    }
  },
  {
    key: "cleanup",
    value: function cleanup(arg0, arg1, arr) {
      let index;
      let itemType;
      let itemType2;
      let stableId;
      let stableId2;
      let tmp39;
      let tmp40;
      let tmp7;
      let tmp8;
      const self = this;
      arr = new Array();
      const keyMap = this.keyMap;
      const entries = keyMap.entries();
      while (tmp3 !== undefined) {
        let tmp5 = RenderStackManager;
        let tmp6 = RenderStackManager(tmp4, 2);
        [tmp7, tmp8] = tmp6;
        ({ index, itemType, stableId } = tmp8);
        let tmp10 = index >= arg3;
        let tmp12 = !tmp10;
        let tmp11 = tmp10;
        if (!tmp10) {
          let tmp13 = index;
          let tmp14 = stableId;
          tmp12 = arg0(tmp9) !== stableId;
        }
        let tmp16 = tmp10;
        if (tmp11) {
          let unProcessedIndices = self.unProcessedIndices;
          let iter = unProcessedIndices.values();
          let value = iter.next().value;
          let tmp18 = value;
          let flag = true;
          if (undefined !== value) {
            let tmp19 = value;
            let tmp20 = arg1(tmp18);
            let tmp21 = tmp20;
            let tmp22 = arg0(tmp18);
            let tmp23 = itemType;
            if (itemType === tmp20) {
              let tmp24 = value;
              let tmp25 = tmp20;
              let tmp26 = tmp22;
              let syncItemResult = self.syncItem(tmp18, tmp21, tmp22);
              flag = false;
            }
          }
          let tmp28 = flag;
          if (flag) {
            let tmp29 = itemType;
            let tmp30 = tmp7;
            let result = self.deleteKeyFromRecyclePool(itemType, tmp7);
            let stableIdMap = self.stableIdMap;
            let tmp32 = stableId;
            let deleteResult = stableIdMap.delete(stableId);
            arr = arr.push(tmp7);
          }
        } else {
          let tmp17 = tmp12;
        }
        continue;
      }
      for (const item10080 of arr) {
        let keyMap2 = self.keyMap;
        let deleteResult1 = keyMap2.delete(item10080);
        continue;
      }
      const diff = self.keyMap.size - arr.length;
      if (diff > self.maxItemsInRecyclePool) {
        const diff1 = diff - self.maxItemsInRecyclePool;
        const _Array = Array;
        const keyMap4 = self.keyMap;
        arr = Array.from(keyMap4.entries());
        const reversed = arr.reverse();
        if (0 < reversed.length) {
          let num = 0;
          let num2 = 0;
          if (0 < diff1) {
            while (true) {
              let tmp37 = RenderStackManager;
              let tmp38 = RenderStackManager(reversed[num], 2);
              [tmp39, tmp40] = tmp38;
              ({ itemType: itemType2, stableId: stableId2 } = tmp40);
              let tmp41 = num;
              let tmp42 = num2;
              let sum = num2;
              if (!arr.includes(tmp40.index)) {
                let result1 = self.deleteKeyFromRecyclePool(itemType2, tmp39);
                let stableIdMap2 = self.stableIdMap;
                let deleteResult2 = stableIdMap2.delete(stableId2);
                let keyMap3 = self.keyMap;
                let deleteResult3 = keyMap3.delete(tmp39);
                sum = num2 + 1;
              }
              let sum1 = num + 1;
              if (sum1 >= reversed.length) {
                break;
              } else {
                num = sum1;
                num2 = sum;
                if (sum >= diff1) {
                  break;
                }
              }
            }
          }
        }
      }
    }
  },
  {
    key: "recycleKey",
    value: function recycleKey(arg0) {
      const self = this;
      if (!this.disableRecycling) {
        const keyMap = self.keyMap;
        const value = keyMap.get(arg0);
        if (value) {
          const recyclePoolForType = self.getRecyclePoolForType(value.itemType);
          recyclePoolForType.add(arg0);
        }
      }
    }
  },
  {
    key: "getRenderStack",
    value: function getRenderStack() {
      return this.keyMap;
    }
  },
  {
    key: "syncItem",
    value: function syncItem(index, itemType, stableId) {
      const self = this;
      const stableIdMap = this.stableIdMap;
      const tmp = stableIdMap.get(stableId) || self.getKeyFromRecyclePool(itemType) || self.generateKey();
      const unProcessedIndices = self.unProcessedIndices;
      unProcessedIndices.delete(index);
      const keyMap = self.keyMap;
      const value = keyMap.get(tmp);
      if (value) {
        const result = self.deleteKeyFromRecyclePool(itemType, tmp);
        const result1 = self.deleteKeyFromRecyclePool(value.itemType, tmp);
        const stableIdMap2 = self.stableIdMap;
        stableIdMap2.delete(value.stableId);
        value.index = index;
        value.itemType = itemType;
        value.stableId = stableId;
      } else {
        const keyMap2 = self.keyMap;
        const obj = { itemType: null, index: null, stableId: null };
        obj[0] = itemType;
        obj[1] = index;
        obj[2] = stableId;
        const result2 = keyMap2.set(tmp, obj);
      }
      const stableIdMap3 = self.stableIdMap;
      const result3 = stableIdMap3.set(stableId, tmp);
      return tmp;
    }
  },
  {
    key: "clearRecyclePool",
    value: function clearRecyclePool() {
      const recycleKeyPools = this.recycleKeyPools;
      const values = recycleKeyPools.values();
      for (const item10008 of values) {
        let clearResult = item10008.clear();
        continue;
      }
    }
  },
  {
    key: "generateKey",
    value: function generateKey() {
      this.keyCounter = +this.keyCounter + 1;
      return +this.keyCounter.toString();
    }
  },
  {
    key: "deleteKeyFromRecyclePool",
    value: function deleteKeyFromRecyclePool(itemType, arg1) {
      const recycleKeyPools = this.recycleKeyPools;
      const value = recycleKeyPools.get(itemType);
      if (value != null) {
        value.delete(arg1);
      }
    }
  },
  {
    key: "getRecyclePoolForType",
    value: function getRecyclePoolForType(itemType) {
      const recycleKeyPools = this.recycleKeyPools;
      let value = recycleKeyPools.get(itemType);
      if (!value) {
        const _Set = Set;
        const set = new Set();
        const recycleKeyPools2 = this.recycleKeyPools;
        const result = recycleKeyPools2.set(itemType, set);
        value = set;
      }
      return value;
    }
  },
  {
    key: "getKeyFromRecyclePool",
    value: function getKeyFromRecyclePool(itemType) {
      const recyclePoolForType = this.getRecyclePoolForType(itemType);
      if (recyclePoolForType.size > 0) {
        const value = recyclePoolForType.values().next().value;
        recyclePoolForType.delete(value);
        return value;
      }
    }
  }
];

export const RenderStackManager = require("_createClass")(RenderStackManager, items);