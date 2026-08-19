// === Module 1170: breadcrumbsIntegration ===

// Module 1170 (breadcrumbsIntegration)
import isHermesEnabled from "isHermesEnabled" /* 1002 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 1024 */;

require = arg1;
const dependencyMap = arg6;
arg5.breadcrumbsIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _fetch = obj.fetch;
  const merged = Object.assign({ xhr: true, console: true, sentry: true }, obj);
  if (null === _fetch) {
    _fetch = isHermesEnabled.isWeb();
  }
  obj = { fetch: _fetch, dom: null, history: null };
  let isWebResult = isHermesEnabled.isWeb();
  if (isWebResult) {
    const dom = obj.dom;
    isWebResult = null === dom || undefined === dom || dom;
  }
  obj[1] = isWebResult;
  let tmp4Result = isHermesEnabled;
  let isWebResult1 = tmp4Result.isWeb();
  if (isWebResult1) {
    const history = obj.history;
    isWebResult1 = null === history || undefined === history || history;
  }
  obj[2] = isWebResult1;
  const merged1 = Object.assign(merged, obj);
  tmp4Result = feedbackAsyncIntegration;
  return tmp4Result.breadcrumbsIntegration(merged1);
};