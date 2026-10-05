// === Module 581: navigationStart ===

// Module 581 (navigationStart)
import module_582 from "module_582" /* 582 */;
import size from "module_2" /* 2 */;

try {
  let _Date = Date;
  if (null == Date.now) {
    const _Date2 = Date;
    Date.now = () => {
      const date = new Date();
      return date.valueOf();
    };
  }
} catch (err) {
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
    const timeOrigin = global.performance.timeOrigin ?? closure_1;
    return timeOrigin;
  } catch (err) {
    const _Date = Date;
    return Date.now();
  }
})();
if (null == global.performance.timing) {
  try {
    const obj = { navigationStart: tmp4 };
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
let _performance = global.performance;
const result = size.fileFinishedImporting("../discord_common/js/packages/performance-utils/index.js");
const navigationStart_export = tmp4;
const timeOrigin_export = tmp5;

export { navigationStart_export as navigationStart };
export { timeOrigin_export as timeOrigin };
export const performance = _performance;