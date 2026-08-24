// === Module 7875: addToMetricsAggregator ===

// Module 7875 (addToMetricsAggregator)
import addToMetricsAggregator from "addToMetricsAggregator" /* 7872 */;
import MetricsAggregator from "MetricsAggregator" /* 7876 */;

require = arg1;
const dependencyMap = arg6;
arg5.metricsDefault = {
  increment(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    const metrics = addToMetricsAggregator.metrics;
    metrics.increment(MetricsAggregator.MetricsAggregator, arg0, num, arg2);
  },
  distribution(arg0, arg1, arg2) {
    const metrics = addToMetricsAggregator.metrics;
    metrics.distribution(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  set(arg0, arg1, arg2) {
    const metrics = addToMetricsAggregator.metrics;
    const result = metrics.set(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  gauge(arg0, arg1, arg2) {
    const metrics = addToMetricsAggregator.metrics;
    metrics.gauge(MetricsAggregator.MetricsAggregator, arg0, arg1, arg2);
  },
  timing(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "second";
    }
    const metrics = addToMetricsAggregator.metrics;
    return metrics.timing(MetricsAggregator.MetricsAggregator, arg0, arg1, str, arg3);
  },
  getMetricsAggregatorForClient(arg0) {
    const metrics = addToMetricsAggregator.metrics;
    return metrics.getMetricsAggregatorForClient(arg0, MetricsAggregator.MetricsAggregator);
  }
};