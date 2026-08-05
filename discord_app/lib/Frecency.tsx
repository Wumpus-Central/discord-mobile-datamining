// discord_app/lib/Frecency.tsx
import { apply } from "../../_runtime/00012_apply.js";
import { t } from "../../_runtime/03867_t.js";
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
prototype["overwriteHistory"] = function overwriteHistory(arg0, pendingUsages) {
  let self = this;
  self = this;
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  self.usageHistory = self(12).mapValues(obj, (arg0) => {
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
  let timestamp;
  let usesSinceLastTrack;
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
      obj = { totalUses: null, recentUses: null, frecency: -1, score: 0 };
      obj[0] = usesSinceLastTrack;
      if (timestamp == null) {
        usesSinceLastTrack = items.Date;
        timestamp = usesSinceLastTrack.now();
      }
      items = [timestamp];
      obj[1] = items;
      let tmp5 = obj;
    } else {
      tmp.frecency = -1;
      let num = usesSinceLastTrack;
      if (usesSinceLastTrack == null) {
        num = 1;
      }
      tmp.totalUses = tmp.totalUses + num;
      if (null == timestamp) {
        let recentUses = tmp.recentUses;
        const _Date = Date;
        recentUses.push(Date.now());
      } else {
        const recentUses1 = tmp.recentUses;
        recentUses1.push(timestamp);
        recentUses = tmp.recentUses;
        const sorted = recentUses.sort();
      }
      tmp5 = tmp;
      if (tmp.recentUses.length > self.maxSamples) {
        do {
          let recentUses2 = tmp.recentUses;
          let arr1 = recentUses2.shift();
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
  let self = this;
  self = this;
  const dependencyMap = t();
  let maxByResult = null;
  if (this.calculateMaxTotalUse) {
    let tmpResult = tmp(12);
    const _Object = Object;
    maxByResult = tmpResult.maxBy(Object.values(self.usageHistory), (totalUses) => totalUses.totalUses);
  }
  importDefault = maxByResult;
  tmpResult = tmp(12);
  let item = tmpResult.forEach(self.usageHistory, (recentUses) => {
    recentUses = recentUses.recentUses;
    if (-1 === recentUses.frecency) {
      const table = self.computeBonus(arg1) / 100;
      recentUses.score = 0;
      const item = maxByResult(table[0]).forEach(recentUses, (arg0, arg1) => {
        if (arg1 >= outer1_2.maxSamples) {
          return false;
        } else {
          score.score = score.score + closure_1 * obj.computeWeight(closure_1.diff(maxByResult(closure_1[1])(arg0), "days"));
        }
        obj = outer1_2;
      });
      if (recentUses.score > 0) {
        if (recentUses.recentUses.length > 0) {
          let obj = { numOfRecentUses: null, maxTotalUse: null };
          obj[0] = recentUses.length;
          let totalUses;
          if (maxByResult != null) {
            totalUses = maxByResult.totalUses;
          }
          obj[1] = totalUses;
          recentUses.frecency = obj2.computeFrecency(tmp3, recentUses.score, obj);
        }
        obj2.usageHistory[arg1] = recentUses;
      } else {
        const usageHistory = obj2.usageHistory;
        delete tmp2[tmp];
      }
      const arr2 = maxByResult(table[0]);
    }
  });
  const mapped = apply(self.usageHistory).map((frecency) => {
    const lookupKeyResult = self.lookupKey(arg1);
    let tmp2 = null;
    if (null != lookupKeyResult) {
      const items = [lookupKeyResult, frecency.frecency];
      tmp2 = items;
    }
    return tmp2;
  });
  const found = mapped.filter((arg0) => null !== arg0);
  let arr2 = apply(self.usageHistory);
  const mapped1 = found.sortBy((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return -tmp;
  }).map((arg0) => {
    let tmp;
    [tmp] = arg0;
    return tmp;
  });
  const sortByResult = found.sortBy((arg0) => {
    let tmp;
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
  set: undefined
});
Object.defineProperty(prototype, "frequently", {
  get: undefined,
  set: function frequently(_frequently) {
    this._frequently = _frequently;
  }
});
const result = require("set").fileFinishedImporting("lib/Frecency.tsx");

export default Frecency;