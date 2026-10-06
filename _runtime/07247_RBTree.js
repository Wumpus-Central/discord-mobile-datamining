// _runtime/07247_RBTree.js
import _mod7248 from "metro/07248__.js";

class TDigest {
  constructor(arg0, arg1, arg2) {
    let num;
    let num2;
    let num3;
    let rBTree;
    const obj = { discrete: false === arg0, delta: num, K: num2, CX: num3, centroids: rBTree, nreset: 0 };
    num2 = 25;
    num = arg0 || 0.01;
    if (undefined !== arg1) {
      num2 = arg1;
    }
    num3 = 1.1;
    if (undefined !== arg2) {
      num3 = arg2;
    }
    rBTree = new _mod7248.RBTree(compare_centroid_means);
    obj.reset();
  }
  reset() {
    const centroids = this.centroids;
    centroids.clear();
    this.n = 0;
    this.nreset = this.nreset + 1;
    this.last_cumulate = 0;
  }
  size() {
    return this.centroids.size;
  }
  toArray(arg0) {
    const self = this;
    const items = [];
    const tmp = arg0;
    if (tmp) {
      self._cumulate(true);
      const centroids2 = self.centroids;
      centroids2.each((arg0) => {
        items.push(arg0);
      });
    } else {
      const centroids = self.centroids;
      centroids.each((mean) => {
        const obj = { mean: mean.mean, n: mean.n };
        items.push(obj);
      });
    }
    return items;
  }
  summary() {
    const self = this;
    let str = "approximating ";
    if (this.discrete) {
      str = "exact ";
    }
    const sum = str + self.n;
    const items = [
      `${tmp} samples using ${self.size()} centroids`,
      `min = ${self.percentile(0)}`,
      `Q1  = ${self.percentile(0.25)}`,
      `Q2  = ${self.percentile(0.5)}`,
      `Q3  = ${self.percentile(0.75)}`,
      `max = ${self.percentile(1)}`,
    ];
    return items.join("\n");
  }
  push(arg0, arg1) {
    let length;
    const self = this;
    let arr = arg0;
    const tmp = arg1 || 1;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      arr = items;
    }
    let num = 0;
    if (0 < arr.length) {
      do {
        let _digestResult = self._digest(arr[num], tmp);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
  }
  push_centroid(arg0) {
    let length;
    const self = this;
    let arr = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      arr = items;
    }
    let num = 0;
    if (0 < arr.length) {
      do {
        let _digestResult = self._digest(arr[num].mean, arr[num].n);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
  }
  _cumulate(arg0) {
    let sum;
    const self = this;
    if (this.n !== this.last_cumulate) {
      require = 0;
      const centroids = self.centroids;
      centroids.each((arg0) => {
        arg0.mean_cumn = require + arg0.n / 2;
        require = require + arg0.n;
        arg0.cumn = require;
      });
      self.last_cumulate = require;
      self.n = require;
    }
  }
  find_nearest(mean) {
    const self = this;
    if (0 === this.size()) {
      return null;
    } else {
      let prevResult;
      const centroids = self.centroids;
      const obj = { mean };
      const lowerBoundResult = centroids.lowerBound(obj);
      if (null === lowerBoundResult.data()) {
        prevResult = lowerBoundResult.prev();
      } else {
        prevResult = lowerBoundResult.data();
      }
      if (prevResult.mean !== mean) {
        if (!self.discrete) {
          const prevResult1 = lowerBoundResult.prev();
          let tmp3 = prevResult;
          if (prevResult1) {
            const _Math = Math;
            const _Math2 = Math;
            const absolute = Math.abs(prevResult1.mean - mean);
            tmp3 = prevResult;
            if (absolute < Math.abs(prevResult.mean - mean)) {
              tmp3 = prevResult1;
            }
          }
          return tmp3;
        }
      }
      return prevResult;
    }
  }
  _new_centroid(mean, n, cumn) {
    const obj = { mean, n, cumn };
    const centroids = this.centroids;
    centroids.insert(obj);
    this.n = this.n + n;
    return obj;
  }
  _addweight(mean, arg1, arg2) {
    if (arg1 !== mean.mean) {
      mean.mean = mean.mean + (arg2 * (arg1 - mean.mean)) / (mean.n + arg2);
    }
    mean.cumn = mean.cumn + arg2;
    mean.mean_cumn = mean.mean_cumn + arg2 / 2;
    mean.n = mean.n + arg2;
    this.n = this.n + arg2;
  }
  _digest(arg0, arg1) {
    let centroids;
    let centroids2;
    const self = this;
    ({ centroids, centroids: centroids2 } = this);
    const minResult = centroids.min();
    const maxResult = centroids2.max();
    const find_nearestResult = this.find_nearest(arg0);
    if (find_nearestResult) {
      if (find_nearestResult.mean === arg0) {
        self._addweight(find_nearestResult, arg0, arg1);
      }
      self._cumulate(false);
      const tmp13 = !self.discrete && self.K && self.size() > self.K / self.delta;
      if (tmp13) {
        self.compress();
      }
    }
    if (find_nearestResult === minResult) {
      self._new_centroid(arg0, arg1, 0);
    } else if (find_nearestResult === maxResult) {
      self._new_centroid(arg0, arg1, self.n);
    } else if (self.discrete) {
      self._new_centroid(arg0, arg1, find_nearestResult.cumn);
    } else {
      const result = find_nearestResult.mean_cumn / self.n;
      const _Math = Math;
      if (Math.floor(4 * self.n * self.delta * result * (1 - result)) - find_nearestResult.n >= arg1) {
        self._addweight(find_nearestResult, arg0, arg1);
      } else {
        self._new_centroid(arg0, arg1, find_nearestResult.cumn);
      }
    }
  }
  bound_mean(mean) {
    const centroids = this.centroids;
    const obj = { mean };
    const iter = centroids.upperBound(obj);
    let prevResult = iter.prev();
    const items = [prevResult];
    if (prevResult.mean !== mean) {
      prevResult = iter.next();
    }
    items[1] = prevResult;
    return items;
  }
  p_rank(arg0) {
    let arr = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      arr = items;
    }
    const mapped = arr.map(this._p_rank, this);
    let first = mapped;
    if (!Array.isArray(arg0)) {
      first = mapped[0];
    }
    return first;
  }
  _p_rank(arg0) {
    let tmp5;
    let tmp6;
    const self = this;
    if (0 !== this.size()) {
      const centroids = self.centroids;
      if (arg0 < centroids.min().mean) {
        return 0;
      } else {
        const centroids2 = self.centroids;
        if (arg0 > centroids2.max().mean) {
          return 1;
        } else {
          self._cumulate(true);
          [tmp5, tmp6] = self.bound_mean(arg0);
          self.bound_mean(arg0);
          if (self.discrete) {
            return tmp5.cumn / self.n;
          } else {
            const mean_cumn = tmp5.mean_cumn;
            let sum = mean_cumn;
            if (tmp5 !== tmp6) {
              sum = mean_cumn + ((arg0 - tmp5.mean) * (tmp6.mean_cumn - tmp5.mean_cumn)) / (tmp6.mean - tmp5.mean);
            }
            return sum / self.n;
          }
        }
      }
    }
  }
  bound_mean_cumn(mean_cumn) {
    this.centroids._comparator = compare_centroid_mean_cumns;
    const centroids = this.centroids;
    const obj = { mean_cumn };
    const iter = centroids.upperBound(obj);
    this.centroids._comparator = compare_centroid_means;
    let prevResult = iter.prev();
    const items = [prevResult];
    if (!prevResult) {
      prevResult = iter.next();
    }
    items[1] = prevResult;
    return items;
  }
  percentile(arg0) {
    let arr = arg0;
    if (!Array.isArray(arg0)) {
      const items = [arg0];
      arr = items;
    }
    const mapped = arr.map(this._percentile, this);
    let first = mapped;
    if (!Array.isArray(arg0)) {
      first = mapped[0];
    }
    return first;
  }
  _percentile(arg0) {
    let tmp7;
    let tmp8;
    const self = this;
    if (0 !== this.size()) {
      self._cumulate(true);
      const centroids = self.centroids;
      centroids.min();
      const centroids2 = self.centroids;
      centroids2.max();
      const result = self.n * arg0;
      [tmp7, tmp8] = self.bound_mean_cumn(result);
      self.bound_mean_cumn(result);
      if (tmp8 !== tmp8) {
        if (null !== tmp8) {
          let mean;
          if (null !== tmp8) {
            if (self.discrete) {
              mean = result <= tmp8.cumn ? tmp8.mean : tmp8.mean;
            } else {
              mean =
                tmp8.mean + ((result - tmp8.mean_cumn) * (tmp8.mean - tmp8.mean)) / (tmp8.mean_cumn - tmp8.mean_cumn);
            }
          }
          return mean;
        }
      }
      mean = tmp8.mean;
    }
  }
  compress() {
    let length;
    const self = this;
    if (!this.compressing) {
      const toArrayResult = self.toArray();
      self.reset();
      self.compressing = true;
      if (toArrayResult.length > 0) {
        do {
          let _Math = Math;
          let _Math2 = Math;
          let push_centroidResult = self.push_centroid(
            toArrayResult.splice(Math.floor(Math.random() * toArrayResult.length), 1)[0],
          );
          length = toArrayResult.length;
        } while (length > 0);
      }
      self._cumulate(true);
      self.compressing = false;
    }
  }
}
function compare_centroid_means(mean, mean2) {
  let num = 1;
  if (mean.mean <= mean2.mean) {
    let num2 = 0;
    if (mean.mean < mean2.mean) {
      num2 = -1;
    }
    num = num2;
  }
  return num;
}
function compare_centroid_mean_cumns(mean_cumn, mean_cumn2) {
  return mean_cumn.mean_cumn - mean_cumn2.mean_cumn;
}
class Digest {
  constructor(delta) {
    const self = this;
    const tmp = delta || {};
    this.config = tmp;
    self.mode = this.config.mode || "auto";
    delta = "cont" === self.mode;
    const call = TDigest.call;
    if (delta) {
      delta = delta.delta;
    }
    call(self, delta);
    self.digest_ratio = self.config.ratio || 0.9;
    self.digest_thresh = self.config.thresh || 1000;
    self.n_unique = 0;
  }
  push(arg0) {
    const self = this;
    const push = TDigest.prototype.push;
    push.call(self, arg0);
    self.check_continuous();
  }
  _new_centroid(arg0, arg1, arg2) {
    const self = this;
    this.n_unique = this.n_unique + 1;
    const _new_centroid = TDigest.prototype._new_centroid;
    _new_centroid.call(self, arg0, arg1, arg2);
  }
  _addweight(arg0, arg1, arg2) {
    const self = this;
    if (1 === arg0.n) {
      self.n_unique = self.n_unique - 1;
    }
    const _addweight = TDigest.prototype._addweight;
    _addweight.call(self, arg0, arg1, arg2);
  }
  check_continuous() {
    const self = this;
    let tmp2 = !("auto" !== this.mode || self.size() < self.digest_thresh);
    "auto" !== this.mode || self.size() < self.digest_thresh;
    if (tmp2) {
      let flag = self.n_unique / self.size() > self.digest_ratio;
      if (flag) {
        self.mode = "cont";
        self.discrete = false;
        self.delta = self.config.delta || 0.01;
        self.compress();
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  }
}
Digest.prototype = Object.create(TDigest.prototype);
Digest.prototype.constructor = Digest;
let obj = { TDigest, Digest };

export default obj;
