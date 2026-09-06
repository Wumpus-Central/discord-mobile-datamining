// === Module 13818: start ===

// Module 13818 (start)
import set from "set" /* 2 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4615 */;

const result = set.fileFinishedImporting("lib/SystemResponsiveness.tsx");
class SystemResponsiveness {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.sampleStats = function sampleStats(rtp) {
      if (null != rtp) {
        const item = closure_1_1(closure_1_2[2]).forEach(rtp.rtp.outbound, (type) => {
          if ("audio" === type.type) {
            let prop = type.pttQueueLatencyMicrosSamples;
            if (prop == null) {
              prop = [];
            }
            const iter = prop[Symbol.iterator]();
            while (iter !== undefined) {
              let tmp5 = obj;
              let pttQueueLatencyHistogram = obj.pttQueueLatencyHistogram;
              let addSampleResult = pttQueueLatencyHistogram.addSample(iter.next() / 1000);
              continue;
            }
          }
        });
        const arr = closure_1_1(closure_1_2[2]);
      }
    };
    obj.connection = global;
    histogram = new require("getSamples").Histogram();
    obj.pttQueueLatencyHistogram = histogram;
    return obj;
  }
}
const prototype = SystemResponsiveness.prototype;
prototype["start"] = function start() {
  const connection = this.connection;
  connection.on(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
};
prototype["stop"] = function stop() {
  const connection = this.connection;
  connection.off(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
};
prototype["getPttQueueLatencyStats"] = function getPttQueueLatencyStats() {
  const pttQueueLatencyHistogram = this.pttQueueLatencyHistogram;
  const report = pttQueueLatencyHistogram.getReport([50, 95]);
  return { ptt_queue_latency_max: report.max, ptt_queue_latency_mean: report.mean, ptt_queue_latency_p50: report.percentiles[50], ptt_queue_latency_p95: report.percentiles[95], ptt_queue_latency_samples: report.samples };
};

export default SystemResponsiveness;