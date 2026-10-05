// === Module 7233: Histogram ===

// Module 7233 (Histogram)
import RBTree from "RBTree" /* 7234 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/Histogram.tsx");
class Histogram {
  constructor() {
    const merged = Object.assign({ digest: null, total: 0, samples: 0, totalWeight: 0 });
    const digest = new RBTree.Digest();
    merged[0] = digest;
    return merged;
  }
  getSamples() {
    return this.samples;
  }
  addSample(currentCPUUsagePercent) {
    let num = diff;
    if (diff === undefined) {
      num = 1;
    }
    this.total = this.total + currentCPUUsagePercent * num;
    this.totalWeight = this.totalWeight + num;
    this.samples = this.samples + 1;
    const push = RBTree.TDigest.prototype.push;
    push.call(this.digest, currentCPUUsagePercent, num);
    const digest = this.digest;
    digest.check_continuous();
  }
  addSamples(prop3) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    this.total = this.total + prop3.reduce((acc, item) => acc + item * num, 0);
    this.totalWeight = this.totalWeight + num * prop3.length;
    this.samples = this.samples + prop3.length;
    const push = RBTree.TDigest.prototype.push;
    push.call(this.digest, prop3, num);
    const digest = this.digest;
    digest.check_continuous();
  }
  getReport() {
    let items;
    let num3;
    let num4;
    let num5;
    const self = this;
    if (items === undefined) {
      items = [25, 50, 75, 90, 95];
    }
    const obj = {};
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let digest = self.digest;
      let num = digest.percentile(nextResult / 100);
      if (num == null) {
        num = 0;
      }
      obj[nextResult] = num;
      continue;
    }
    const digest2 = self.digest;
    let num2 = digest2.percentile(0);
    if (num2 == null) {
      num2 = 0;
    }
    const range = { min: num2, max: num3, count: num4, percentiles: obj, mean: num5, samples: self.samples };
    const digest3 = self.digest;
    num3 = digest3.percentile(1);
    if (num3 == null) {
      num3 = 0;
    }
    const digest4 = self.digest;
    num4 = digest4.size();
    if (num4 == null) {
      num4 = 0;
    }
    num5 = 0;
    if (self.totalWeight > 0) {
      num5 = self.total / self.totalWeight;
    }
    return range;
  }
  getPercentile(arg0) {
    const digest = this.digest;
    let num = digest.percentile(arg0 / 100);
    if (num == null) {
      num = 0;
    }
    return num;
  }
}
const prototype = Histogram.prototype;

export { Histogram };