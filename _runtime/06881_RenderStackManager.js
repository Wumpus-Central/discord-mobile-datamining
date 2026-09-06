// === Module 6881: RenderStackManager ===

// Module 6881 (RenderStackManager)
import _modDef6867 from "module_6867" /* 6867 */;
import _slicedToArray from "module_6857" /* 6857 */;
import _classCallCheck from "module_6866" /* 6866 */;

class RenderStackManager {
  constructor() {
    MAX_SAFE_INTEGER = global;
    if (global === undefined) {
      tmp = globalThis;
      _Number = Number;
      MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    }
    tmp2 = closure_1(this, RenderStackManager);
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
_slicedToArray = RenderStackManager;
const entry = {
  key: "sync",
  value: function sync(fn, fn2, arr, arg3) {
    const self = this;
    closure_1 = fn;
    closure_2 = fn2;
    closure_3 = arr;
    closure_0 = arg3;
    this.clearRecyclePool();
    let unProcessedIndices = this.unProcessedIndices;
    unProcessedIndices.clear();
    let keyMap = this.keyMap;
    const item = keyMap.forEach((item, index) => {
      index = item.index;
      if (index >= closure_0) {
        self.recycleKey(index);
      } else {
        if (!self.disableRecycling) {
          const unProcessedIndices = obj.unProcessedIndices;
          unProcessedIndices.add(index);
        }
        if (closure_3.includes(index)) {
          const tmp7 = closure_1(index);
          if (!tmp9) {
            obj.recycleKey(index);
          }
          tmp9 = tmp === closure_1(index) && tmp2 === closure_2(index);
        } else {
          obj.recycleKey(index);
        }
      }
    });
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (self.hasOptimizedKey(fn(nextResult))) {
        let tmp7 = fn2(tmp5);
        let syncItemResult = self.syncItem(tmp5, tmp7, fn(tmp5));
      }
      continue;
    }
    const iter2 = arr[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp10 = nextResult1;
      if (!self.hasOptimizedKey(fn(nextResult1))) {
        let tmp12 = fn2(tmp10);
        let syncItemResult1 = self.syncItem(tmp10, tmp12, fn(tmp10));
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
        tmp16 = !arg2.includes(tmp15);
      }
      if (tmp16) {
        arr = items.push(tmp15);
      }
      continue;
    }
    for (const item10072 of items) {
      let tmp20 = item10072;
      if (self.hasOptimizedKey(arg0(item10072))) {
        let tmp22 = arg1(tmp20);
        let syncItemResult2 = self.syncItem(tmp20, tmp22, arg0(tmp20));
      }
      continue;
    }
    for (const item10087 of items) {
      let tmp24 = item10087;
      if (!self.hasOptimizedKey(arg0(item10087))) {
        let tmp26 = arg1(tmp24);
        let syncItemResult3 = self.syncItem(tmp24, tmp26, arg0(tmp24));
      }
      continue;
    }
    self.cleanup(fn, fn2, arr, arg3);
  }
};
let items = [
  entry,
  {
    key: "hasOptimizedKey",
    value: function hasOptimizedKey(arg0) {
      const stableIdMap = this.stableIdMap;
      return stableIdMap.has(arg0);
    }
  },
  {
    key: "cleanup",
    value: function cleanup(fn, fn2, arr, arg3) {
      const self = this;
      arr = new Array();
      const keyMap = this.keyMap;
      const entries = keyMap.entries();
      while (tmp3 !== undefined) {
        let tmp6 = _slicedToArray(tmp4, 2);
        [tmp7, tmp8] = tmp6;
        ({ index, itemType, stableId } = tmp8);
        let tmp10 = index >= arg3;
        let tmp12 = !tmp10;
        let tmp11 = tmp10;
        if (!tmp10) {
          tmp12 = fn(tmp9) !== stableId;
        }
        if (tmp11) {
          let unProcessedIndices = self.unProcessedIndices;
          let iter = unProcessedIndices.values();
          value = iter.next().value;
          let tmp18 = value;
          let flag = true;
          if (undefined !== value) {
            let tmp20 = fn2(tmp18);
            let tmp21 = tmp20;
            let tmp22 = fn(tmp18);
            if (itemType === tmp20) {
              let syncItemResult = self.syncItem(tmp18, tmp21, tmp22);
              flag = false;
            }
          }
          if (flag) {
            let result = self.deleteKeyFromRecyclePool(itemType, tmp7);
            let stableIdMap = self.stableIdMap;
            let deleteResult = stableIdMap.delete(stableId);
            arr = arr.push(tmp7);
          }
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
              let tmp38 = _slicedToArray(reversed[num], 2);
              [tmp39, tmp40] = tmp38;
              ({ itemType: itemType2, stableId: stableId2 } = tmp40);
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
    value: function recycleKey(index) {
      const self = this;
      if (!this.disableRecycling) {
        const keyMap = self.keyMap;
        value = keyMap.get(index);
        if (value) {
          const recyclePoolForType = self.getRecyclePoolForType(value.itemType);
          recyclePoolForType.add(index);
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
      value = keyMap.get(tmp);
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
        const obj = { itemType, index, stableId };
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
      value = recycleKeyPools.get(itemType);
      if (value != null) {
        value.delete(arg1);
      }
    }
  },
  {
    key: "getRecyclePoolForType",
    value: function getRecyclePoolForType(itemType) {
      const recycleKeyPools = this.recycleKeyPools;
      value = recycleKeyPools.get(itemType);
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
        value = recyclePoolForType.values().next().value;
        recyclePoolForType.delete(value);
        return value;
      }
    }
  }
];

export const RenderStackManager = _modDef6867(RenderStackManager, items);