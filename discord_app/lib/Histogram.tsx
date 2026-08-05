// discord_app/lib/Histogram.tsx
import { TDigest } from "../../_runtime/07123_TDigest.js";
const result = require("set").fileFinishedImporting("lib/Histogram.tsx");
class Histogram {
  constructor() {
    obj = Object.create(new.target.prototype);
    digest = new require("TDigest").Digest();
    obj[0] = digest;
    return obj;
  }
}
const prototype = Histogram.prototype;
prototype["getSamples"] = function getSamples() {
  return this.samples;
};
prototype["addSample"] = function addSample(currentCPUUsagePercent, diff) {
  let num = diff;
  if (diff === undefined) {
    num = 1;
  }
  this.total = this.total + currentCPUUsagePercent * num;
  this.totalWeight = this.totalWeight + num;
  this.samples = this.samples + 1;
  const push = TDigest /* TDigest */.TDigest.prototype.push;
  const call = push.call;
  const digest = this.digest;
  if (typeof call === "unknown") {
    push(currentCPUUsagePercent, num);
  } else {
    call(digest, currentCPUUsagePercent, num);
  }
  const digest2 = this.digest;
  digest2.check_continuous();
};
prototype["addSamples"] = function addSamples(prop3) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  this.total = this.total + prop3.reduce((arg0, arg1) => arg0 + arg1 * num, 0);
  this.totalWeight = this.totalWeight + num * prop3.length;
  this.samples = this.samples + prop3.length;
  const push = num(7123).TDigest.prototype.push;
  const call = push.call;
  const digest = this.digest;
  if (typeof call === "unknown") {
    push(prop3, num);
  } else {
    call(digest, prop3, num);
  }
  const digest2 = this.digest;
  digest2.check_continuous();
};
prototype["getReport"] = function getReport(items) {
  const self = this;
  if (items === undefined) {
    items = [25, 50, 75, 90, 95];
  }
  let obj = {};
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
  obj = { min: num2, max: null, count: null, percentiles: null, mean: null, samples: null };
  const digest3 = self.digest;
  let num3 = digest3.percentile(1);
  if (num3 == null) {
    num3 = 0;
  }
  obj[1] = num3;
  const digest4 = self.digest;
  let num4 = digest4.size();
  if (num4 == null) {
    num4 = 0;
  }
  obj[2] = num4;
  obj[3] = obj;
  let num5 = 0;
  if (self.totalWeight > 0) {
    num5 = self.total / self.totalWeight;
  }
  obj[4] = num5;
  obj[5] = self.samples;
  return obj;
};
prototype["getPercentile"] = function getPercentile(arg0) {
  const digest = this.digest;
  let num = digest.percentile(arg0 / 100);
  if (num == null) {
    num = 0;
  }
  return num;
};

export { Histogram };