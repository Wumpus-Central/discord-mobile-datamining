// === Module 4927: Frecency ===

// Module 4927 (Frecency)
import _modDef12 from "module_12" /* 12 */;
import _modDef4461 from "module_4461" /* 4461 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_1, dependencyMap, hasOwnProperty, importDefault;

function DEFAULT_FRECENCY(arg0, arg1, numOfRecentUses) {
  return Math.ceil(arg0 * (arg1 / numOfRecentUses.numOfRecentUses));
}
function DEFAULT_WEIGHT(arg0) {
  let num = 100;
  if (arg0 > 3) {
    num = 70;
    if (arg0 > 15) {
      num = 50;
      if (arg0 > 30) {
        num = 30;
        if (arg0 > 45) {
          num = 1;
          if (arg0 <= 80) {
            num = 10;
          }
        }
      }
    }
  }
  return num;
}
class Frecency {
  constructor(computeWeight) {
    let afterCompute;
    let lookupKey;
    let numFrequentlyItems;
    computeWeight = computeWeight.computeWeight;
    const computeBonus = computeWeight.computeBonus;
    if (computeWeight === undefined) {
      computeWeight = DEFAULT_WEIGHT;
    }
    let computeFrecency = computeWeight.computeFrecency;
    if (computeFrecency === undefined) {
      computeFrecency = DEFAULT_FRECENCY;
    }
    let flag = computeWeight.calculateMaxTotalUse;
    if (flag === undefined) {
      flag = false;
    }
    ({ numFrequentlyItems, lookupKey, afterCompute } = computeWeight);
    if (numFrequentlyItems === undefined) {
      numFrequentlyItems = 32;
    }
    let num = computeWeight.maxSamples;
    if (num === undefined) {
      num = 10;
    }
    const obj = Object.create(new.target.prototype);
    obj.computeBonus = computeBonus;
    obj.computeWeight = computeWeight;
    obj.computeFrecency = computeFrecency;
    obj.calculateMaxTotalUse = flag;
    obj.afterCompute = afterCompute;
    obj.lookupKey = lookupKey;
    obj.usageHistory = {};
    obj.frequently = [];
    obj.maxSamples = num;
    obj.numFrequentlyItems = numFrequentlyItems;
    obj.dirty = false;
    obj.version = 0;
    return obj;
  }
  overwriteHistory(arg0, pendingUsages) {
    const self = this;
    let obj = arg0;
    const mapValues = _modDef12.mapValues;
    _modDef12;
    if (arg0 == null) {
      obj = {};
    }
    self.usageHistory = mapValues(obj, (arg0) => {
      const obj = { frecency: -1 };
      const merged = Object.assign(arg0);
      return obj;
    });
    if (pendingUsages != null) {
      const item = pendingUsages.forEach((timestamp) => {
        const obj = { timestamp: timestamp.timestamp };
        return self.track(timestamp.key, obj);
      });
    }
    self.markDirty();
  }
  markDirty() {
    this.dirty = true;
    this.version = this.version + 1;
  }
  isDirty() {
    return this.dirty;
  }
  track(arg0) {
    let items;
    let length;
    let maxSamples;
    let timestamp;
    let usesSinceLastTrack;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ timestamp, usesSinceLastTrack } = obj);
    if (null != arg0) {
      let tmp5;
      const self = this;
      const _Object = Object;
      let tmp;
      if (Object.hasOwn(this.usageHistory, arg0)) {
        tmp = self.usageHistory[arg0];
      }
      if (null == tmp) {
        if (usesSinceLastTrack == null) {
          usesSinceLastTrack = 1;
        }
        const obj2 = { totalUses: usesSinceLastTrack, recentUses: items, frecency: -1, score: 0 };
        if (timestamp == null) {
          const _Date2 = Date;
          timestamp = Date.now();
        }
        items = [timestamp];
        tmp5 = obj2;
      } else {
        tmp.frecency = -1;
        let num = usesSinceLastTrack;
        const totalUses = tmp.totalUses;
        if (usesSinceLastTrack == null) {
          num = 1;
        }
        tmp.totalUses = totalUses + num;
        if (null == timestamp) {
          const recentUses1 = tmp.recentUses;
          const _Date = Date;
          recentUses1.push(Date.now());
        } else {
          const recentUses2 = tmp.recentUses;
          recentUses2.push(timestamp);
          const recentUses = tmp.recentUses;
          const sorted = recentUses.sort();
        }
        tmp5 = tmp;
        if (tmp.recentUses.length > self.maxSamples) {
          do {
            let recentUses3 = tmp.recentUses;
            let arr3 = recentUses3.shift();
            tmp5 = tmp;
            length = tmp.recentUses.length;
            maxSamples = self.maxSamples;
          } while (length > maxSamples);
        }
      }
      self.usageHistory[arg0] = tmp5;
      self.markDirty();
    }
  }
  getEntry(id) {
    let tmp = null;
    if (null != id) {
      const self = this;
      if (this.dirty) {
        self.compute();
      }
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let tmp4;
      if (hasOwnProperty.call(self.usageHistory, id)) {
        tmp4 = self.usageHistory[id];
      }
      tmp = tmp4;
    }
    return tmp;
  }
  getScore(id) {
    const entry = this.getEntry(id);
    let score = null;
    if (null != entry) {
      score = entry.score;
    }
    return score;
  }
  getFrecency(id) {
    const entry = this.getEntry(id);
    let frecency = null;
    if (null != entry) {
      frecency = entry.frecency;
    }
    return frecency;
  }
  compute() {
    const self = this;
    const tmp = importDefault;
    let tmp2 = dependencyMap;
    dependencyMap = _modDef4461();
    let maxByResult = null;
    if (this.calculateMaxTotalUse) {
      let tmp4 = globalThis;
      const _Object = Object;
      const tmpResult = _modDef12;
      maxByResult = tmpResult.maxBy(Object.values(self.usageHistory), (totalUses) => totalUses.totalUses);
    }
    importDefault = maxByResult;
    const tmpResult2 = _modDef12;
    let item = tmpResult2.forEach(self.usageHistory, (recentUses, arg1) => {
      let totalUses;
      importDefault = recentUses;
      recentUses = recentUses.recentUses;
      if (-1 === recentUses.frecency) {
        closure_1 = self.computeBonus(arg1) / 100;
        recentUses.score = 0;
        const arr2 = require("module_12");
        const item = arr2.forEach(recentUses, (arg0, arg1) => {
          if (arg1 >= self.maxSamples) {
            return false;
          } else {
            recentUses.score = recentUses.score + closure_1 * self.computeWeight(closure_1.diff(_modDef4461(arg0), "days"));
          }
        });
        const tmp4 = arg1;
        if (recentUses.score > 0) {
          if (recentUses.recentUses.length > 0) {
            const obj = { numOfRecentUses: recentUses.length, maxTotalUse: totalUses };
            totalUses = undefined;
            const computeFrecency = self.computeFrecency;
            const score = recentUses.score;
            if (importDefault != null) {
              totalUses = importDefault.totalUses;
            }
            recentUses.frecency = computeFrecency(tmp, score, obj);
          }
          self.usageHistory[arg1] = recentUses;
        } else {
          delete self.usageHistory[tmp4];
        }
      }
    });
    let arr2 = _modDef12(self.usageHistory);
    const mapped = arr2.map((frecency, index) => {
      const lookupKeyResult = self.lookupKey(index);
      let tmp2 = null;
      if (null != lookupKeyResult) {
        const items = [lookupKeyResult, frecency.frecency];
        tmp2 = items;
      }
      return tmp2;
    });
    const found = mapped.filter((item) => null !== item);
    const sortByResult = found.sortBy((arg0) => {
      let tmp;
      [, tmp] = arg0;
      return -tmp;
    });
    const mapped1 = sortByResult.map((item) => {
      let tmp;
      [tmp] = item;
      return tmp;
    });
    const iter = mapped1.take(self.numFrequentlyItems);
    self.frequently = iter.value();
    self.dirty = false;
    self.afterCompute(self.usageHistory, self._frequently);
  }
}
const prototype = Frecency.prototype;
Object.defineProperty(prototype, "frequently", {
  get: function frequently() {
    const self = this;
    if (this.dirty) {
      self.compute();
    }
    return self._frequently;
  },
  set: undefined
});
Object.defineProperty(prototype, "frequently", {
  get: undefined,
  set: function frequently(_frequently) {
    this._frequently = _frequently;
  }
});
const result = size.fileFinishedImporting("lib/Frecency.tsx");

export default Frecency;