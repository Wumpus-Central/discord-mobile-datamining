// discord_app/lib/Frecency.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import _modDef4416 from "../../_runtime/metro/04416__.js";
import size from "../../_runtime/metro/00002__.js";

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
  constructor(arg0) {
    computeWeight = global.computeWeight;
    if (computeWeight === undefined) {
      computeWeight = DEFAULT_WEIGHT;
    }
    computeFrecency = global.computeFrecency;
    if (computeFrecency === undefined) {
      computeFrecency = DEFAULT_FRECENCY;
    }
    flag = global.calculateMaxTotalUse;
    if (flag === undefined) {
      flag = false;
    }
    ({ numFrequentlyItems, lookupKey, afterCompute } = global);
    if (numFrequentlyItems === undefined) {
      numFrequentlyItems = 32;
    }
    num = global.maxSamples;
    if (num === undefined) {
      num = 10;
    }
    obj = Object.create(new.target.prototype);
    obj.computeBonus = global.computeBonus;
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
}
const prototype = Frecency.prototype;
prototype["overwriteHistory"] = function overwriteHistory(dependencyMap, pendingUsages) {
  const self = this;
  let obj = dependencyMap;
  if (dependencyMap == null) {
    obj = {};
  }
  self.usageHistory = _modDef12.mapValues(obj, (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.frecency = -1;
    return obj;
  });
  if (pendingUsages != null) {
    const item = pendingUsages.forEach((timestamp) => self.track(timestamp.key, { timestamp: timestamp.timestamp }));
  }
  self.markDirty();
};
prototype["markDirty"] = function markDirty() {
  this.dirty = true;
  this.version = this.version + 1;
};
prototype["isDirty"] = function isDirty() {
  return this.dirty;
};
prototype["track"] = function track(arg0) {
  let length;
  let maxSamples;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  ({ timestamp, usesSinceLastTrack } = obj);
  if (null != arg0) {
    const self = this;
    let items = globalThis;
    const _Object = Object;
    let tmp;
    if (Object.hasOwn(this.usageHistory, arg0)) {
      tmp = self.usageHistory[arg0];
    }
    if (null == tmp) {
      if (usesSinceLastTrack == null) {
        usesSinceLastTrack = 1;
      }
      const obj2 = { totalUses: usesSinceLastTrack, recentUses: null, frecency: -1, score: 0 };
      if (timestamp == null) {
        usesSinceLastTrack = items.Date;
        timestamp = usesSinceLastTrack.now();
      }
      items = [timestamp];
      obj2.recentUses = items;
      let tmp5 = obj2;
    } else {
      tmp.frecency = -1;
      let num = usesSinceLastTrack;
      if (usesSinceLastTrack == null) {
        num = 1;
      }
      tmp.totalUses = tmp.totalUses + num;
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
};
prototype["getEntry"] = function getEntry(id) {
  let tmp = null;
  if (null != id) {
    const self = this;
    if (this.dirty) {
      self.compute();
    }
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    const usageHistory = self.usageHistory;
    let tmp4;
    if (typeof call === "unknown" ? hasOwnProperty(id) : call(usageHistory, id)) {
      tmp4 = self.usageHistory[id];
    }
    tmp = tmp4;
  }
  return tmp;
};
prototype["getScore"] = function getScore(id) {
  const entry = this.getEntry(id);
  let score = null;
  if (null != entry) {
    score = entry.score;
  }
  return score;
};
prototype["getFrecency"] = function getFrecency(id) {
  const entry = this.getEntry(id);
  let frecency = null;
  if (null != entry) {
    frecency = entry.frecency;
  }
  return frecency;
};
prototype["compute"] = function compute() {
  const self = this;
  dependencyMap = _modDef4416();
  let maxByResult = null;
  if (this.calculateMaxTotalUse) {
    const _Object = Object;
    maxByResult = tmp(12).maxBy(Object.values(self.usageHistory), (totalUses) => totalUses.totalUses);
    const tmpResult = tmp(12);
  }
  importDefault = maxByResult;
  let item = _modDef12.forEach(self.usageHistory, (recentUses, arg1) => {
    recentUses = recentUses.recentUses;
    if (-1 === recentUses.frecency) {
      dependencyMap = self.computeBonus(arg1) / 100;
      recentUses.score = 0;
      const item = maxByResult(dependencyMap[0]).forEach(recentUses, (arg0, arg1) => {
        if (arg1 >= self.maxSamples) {
          return false;
        } else {
          score.score = score.score + closure_1 * self.computeWeight(closure_1.diff(_modDef4416(arg0), "days"));
        }
      });
      if (recentUses.score > 0) {
        if (recentUses.recentUses.length > 0) {
          const obj = { numOfRecentUses: recentUses.length, maxTotalUse: null };
          let totalUses;
          if (maxByResult != null) {
            totalUses = maxByResult.totalUses;
          }
          obj.maxTotalUse = totalUses;
          recentUses.frecency = self.computeFrecency(tmp3, recentUses.score, obj);
        }
        self.usageHistory[arg1] = recentUses;
      } else {
        const usageHistory = self.usageHistory;
        delete tmp2[tmp];
      }
      const arr2 = maxByResult(dependencyMap[0]);
    }
  });
  const tmpResult2 = _modDef12;
  const mapped = _modDef12(self.usageHistory).map((frecency, index) => {
    const lookupKeyResult = self.lookupKey(index);
    let tmp2 = null;
    if (null != lookupKeyResult) {
      const items = [lookupKeyResult, frecency.frecency];
      tmp2 = items;
    }
    return tmp2;
  });
  const found = mapped.filter((item) => null !== item);
  let arr2 = _modDef12(self.usageHistory);
  const mapped1 = found
    .sortBy((arg0) => {
      [, tmp] = arg0;
      return -tmp;
    })
    .map((item) => {
      [tmp] = item;
      return tmp;
    });
  const sortByResult = found.sortBy((arg0) => {
    [, tmp] = arg0;
    return -tmp;
  });
  self.frequently = mapped1.take(self.numFrequentlyItems).value();
  self.dirty = false;
  self.afterCompute(self.usageHistory, self._frequently);
};
Object.defineProperty(prototype, "frequently", {
  get: function frequently() {
    const self = this;
    if (this.dirty) {
      self.compute();
    }
    return self._frequently;
  },
  set: undefined,
});
Object.defineProperty(prototype, "frequently", {
  get: undefined,
  set: function frequently(_frequently) {
    this._frequently = _frequently;
  },
});
const result = size.fileFinishedImporting("lib/Frecency.tsx");

export default Frecency;
