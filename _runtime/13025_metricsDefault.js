// === Module 13025: metricsDefault ===

// Module 13025 (metricsDefault)
import _mod13022 from "module_13022" /* 13022 */;
import MetricsAggregator from "MetricsAggregator" /* 13026 */;

require = arg1;
const dependencyMap = arg6;

export const metricsDefault = {
  increment(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    const metrics = _mod13022.metrics;
    metrics.increment(MetricsAggregator.MetricsAggregator, arg0, num, arg2);
  },
  distribution(arg0, arg1, arg2) {
    const metrics = _mod13022.metrics;
    metrics.distribution(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  set(arg0, arg1, arg2) {
    const metrics = _mod13022.metrics;
    const result = metrics.set(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  gauge(arg0, arg1, arg2) {
    const metrics = _mod13022.metrics;
    metrics.gauge(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  timing(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "second";
    }
    const metrics = _mod13022.metrics;
    return metrics.timing(MetricsAggregator.MetricsAggregator, arg0, arg1, str, arg3);
  },
  getMetricsAggregatorForClient(arg0) {
    const metrics = _mod13022.metrics;
    return metrics.getMetricsAggregatorForClient(arg0, MetricsAggregator.MetricsAggregator);
  }
};