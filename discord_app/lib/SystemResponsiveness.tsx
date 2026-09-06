// === Module 13818: SystemResponsiveness ===

// Module 13818 (SystemResponsiveness)
import _modDef12 from "module_12" /* 12 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4615 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/SystemResponsiveness.tsx");
class SystemResponsiveness {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.sampleStats = function sampleStats(rtp) {
      if (null != rtp) {
        const item = _modDef12.forEach(rtp.rtp.outbound, (type) => {
          if ("audio" === type.type) {
            let prop = type.pttQueueLatencyMicrosSamples;
            if (prop == null) {
              prop = [];
            }
            const iter = prop[Symbol.iterator]();
            while (iter !== undefined) {
              let pttQueueLatencyHistogram = obj.pttQueueLatencyHistogram;
              let addSampleResult = pttQueueLatencyHistogram.addSample(iter.next() / 1000);
              continue;
            }
          }
        });
      }
    };
    obj.connection = global;
    histogram = new closure_0(closure_2[0]).Histogram();
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