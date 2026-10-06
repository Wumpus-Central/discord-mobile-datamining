// === Module 6373: RenderStackManager ===

// Module 6373 (RenderStackManager)
import _createClassDefault from "_createClass" /* 6359 */;
import _slicedToArray from "_slicedToArray" /* 6349 */;
import _classCallCheck from "_classCallCheck" /* 6358 */;

let set;

class RenderStackManager {
  constructor() {
    let MAX_SAFE_INTEGER = maxItemsInRecyclePool;
    if (maxItemsInRecyclePool === undefined) {
      const _Number = Number;
      MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    }
    _classCallCheck(this, RenderStackManager);
    this.disableRecycling = false;
    this.maxItemsInRecyclePool = MAX_SAFE_INTEGER;
    this.recycleKeyPools = new Map();
    new Map();
    this.keyMap = new Map();
    new Map();
    this.stableIdMap = new Map();
    this.keyCounter = 0;
    new Map();
    this.unProcessedIndices = new Set();
    new Set();
  }
}
const entry = {
  key: "sync",
  value: function sync(fn, fn2, arr, arg3) {
    const self = this;
    let closure_1 = fn;
    let closure_2 = fn2;
    let closure_3 = arr;
    let closure_0 = arg3;
    this.clearRecyclePool();
    let unProcessedIndices = this.unProcessedIndices;
    unProcessedIndices.clear();
    const keyMap1 = this.keyMap;
    const item = keyMap1.forEach((item, index) => {
      index = item.index;
      if (index >= closure_0) {
        self.recycleKey(index);
      } else {
        if (!self.disableRecycling) {
          const unProcessedIndices = self.unProcessedIndices;
          unProcessedIndices.add(index);
        }
        if (arr.includes(index)) {
          const tmp7 = fn(index);
          const tmp9 = tmp === tmp7 && tmp2 === fn2(index);
          if (!tmp9) {
            self.recycleKey(index);
          }
        } else {
          self.recycleKey(index);
        }
      }
    });
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      if (self.hasOptimizedKey(fn(nextResult))) {
        let syncItem = self.syncItem;
        let tmp7 = fn2(tmp5);
        let syncItemResult = syncItem(tmp5, tmp7, fn(tmp5));
      }
      continue;
    }
    const iter2 = arr[Symbol.iterator]();
    const nextResult1 = iter2.next();
    while (iter2 !== undefined) {
      let tmp10 = nextResult1;
      if (!self.hasOptimizedKey(fn(nextResult1))) {
        let syncItem2 = self.syncItem;
        let tmp12 = fn2(tmp10);
        let syncItem2Result = syncItem2(tmp10, tmp12, fn(tmp10));
      }
      continue;
    }
    const items = [];
    const keyMap = self.keyMap;
    const values = keyMap.values();
    for (const item10057 of values) {
      let index = item10057.index;
      let tmp15 = index;
      let tmp16 = index < arg3;
      if (tmp16) {
        tmp16 = !arr.includes(tmp15);
      }
      if (tmp16) {
        arr = items.push(tmp15);
      }
      continue;
    }
    for (const item10072 of items) {
      if (self.hasOptimizedKey(fn(item10072))) {
        let syncItem3 = self.syncItem;
        let tmp22 = fn2(item10072);
        let syncItem3Result = syncItem3(item10072, tmp22, fn(item10072));
      }
      continue;
    }
    for (const item10087 of items) {
      if (!self.hasOptimizedKey(fn(item10087))) {
        let syncItem4 = self.syncItem;
        let tmp26 = fn2(item10087);
        let syncItem4Result = syncItem4(item10087, tmp26, fn(item10087));
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
      const tmp = arr;
      const tmp3 = entries[Symbol.iterator]();
      while (tmp3 !== undefined) {
        let tmp6 = _slicedToArray(tmp4, 2);
        [tmp7, tmp8] = tmp6;
        ({ index, itemType, stableId } = tmp8);
        let tmp10 = index >= arg3;
        let tmp12 = !tmp10;
        let tmp11 = tmp10;
        if (!tmp11) {
          tmp12 = fn(tmp9) !== stableId;
        }
        if (tmp11) {
          let unProcessedIndices = self.unProcessedIndices;
          let iter = unProcessedIndices.values();
          let value = iter.next().value;
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
          let tmp28 = flag;
          if (tmp28) {
            let result = self.deleteKeyFromRecyclePool(itemType, tmp7);
            let stableIdMap = self.stableIdMap;
            let deleteResult = stableIdMap.delete(stableId);
            let arr2 = arr.push(tmp7);
          }
        }
        continue;
      }
      for (const item10080 of tmp) {
        let keyMap2 = self.keyMap;
        let deleteResult1 = keyMap2.delete(item10080);
        continue;
      }
      const diff = self.keyMap.size - arr.length;
      if (diff > self.maxItemsInRecyclePool) {
        const diff1 = diff - self.maxItemsInRecyclePool;
        const _Array = Array;
        const keyMap4 = self.keyMap;
        const arr4 = Array.from(keyMap4.entries());
        const reversed = arr4.reverse();
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
        const value = keyMap.get(index);
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
      return (+this.keyCounter).toString();
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
        const self = this;
        const self2 = this;
        set = new Set();
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
        const iter = recyclePoolForType.values();
        const value = iter.next().value;
        recyclePoolForType.delete(value);
        return value;
      }
    }
  }
];
const RenderStackManager_export = _createClassDefault(RenderStackManager, items);

export { RenderStackManager_export as RenderStackManager };