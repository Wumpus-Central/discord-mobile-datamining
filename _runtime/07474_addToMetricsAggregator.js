// _runtime/07474_addToMetricsAggregator.js
import { addToMetricsAggregator } from "07471_addToMetricsAggregator.js";
import { MetricsAggregator } from "07475_MetricsAggregator.js";
const require = arg1;
const dependencyMap = arg6;
arg5.metricsDefault = {
  increment(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    const metrics = addToMetricsAggregator /* addToMetricsAggregator */.metrics;
    metrics.increment(MetricsAggregator /* MetricsAggregator */.MetricsAggregator, arg0, num, arg2);
  },
  distribution(arg0, arg1, arg2) {
    const metrics = addToMetricsAggregator /* addToMetricsAggregator */.metrics;
    metrics.distribution(MetricsAggregator /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  set(arg0, arg1, arg2) {
    const metrics = addToMetricsAggregator /* addToMetricsAggregator */.metrics;
    const result = metrics.set(MetricsAggregator /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  gauge(arg0, arg1, arg2) {
    const metrics = addToMetricsAggregator /* addToMetricsAggregator */.metrics;
    metrics.gauge(MetricsAggregator /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  timing(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "second";
    }
    const metrics = addToMetricsAggregator /* addToMetricsAggregator */.metrics;
    return metrics.timing(MetricsAggregator /* MetricsAggregator */.MetricsAggregator, arg0, arg1, str, arg3);
  },
  getMetricsAggregatorForClient(arg0) {
    const metrics = addToMetricsAggregator /* addToMetricsAggregator */.metrics;
    return metrics.getMetricsAggregatorForClient(arg0, MetricsAggregator /* MetricsAggregator */.MetricsAggregator);
  }
};