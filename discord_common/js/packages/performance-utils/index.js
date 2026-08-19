// discord_common/js/packages/performance-utils/index.js
import obj132 from "../../../../_runtime/00002_obj132.js";
import u from "performance-polyfill.js";

try {
  let _Date = Date;
  if (null == Date.now) {
    const _Date2 = Date;
    Date.now = () => new Date().valueOf();
  }
  const tmp4 = (() => {
    try {
      let navigationStart = global.performance.timing.navigationStart;
      if (navigationStart == null) {
        const _performance = global.performance;
        navigationStart = _performance.now();
      }
      return navigationStart;
    } catch (err) {
      const _Date = Date;
      return Date.now();
    }
  })();
  let closure_1 = tmp4;
  const tmp5 = (() => {
    try {
      let timeOrigin = global.performance.timeOrigin;
      if (timeOrigin == null) {
        timeOrigin = closure_1;
      }
      return timeOrigin;
    } catch (err) {
      const _Date = Date;
      return Date.now();
    }
  })();
  if (null == global.performance.timing) {
    try {
      const obj = { navigationStart: null };
      obj[0] = tmp4;
      global.performance.timing = obj;
    } catch (err) {
    }
  }
  if (null == global.performance.timeOrigin) {
    try {
      global.performance.timeOrigin = tmp5;
    } catch (err) {
    }
  }
  const _module1 = obj132;
  const result = _module1.fileFinishedImporting("../discord_common/js/packages/performance-utils/index.js");
  exports.navigationStart = tmp4;
  exports.timeOrigin = tmp5;
  exports.performance = global.performance;
} catch (err) {
}