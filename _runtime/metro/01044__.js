// === Module 1044: ? ===

// Module 1044
import _mod879 from "module_879" /* 879 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;

require = arg1;
const dependencyMap = arg6;

export () => {
  let obj = merged1;
  if (merged1 === undefined) {
    obj = {};
  }
  let _fetch = obj.fetch;
  const merged = Object.assign({ xhr: true, console: true, sentry: true }, obj);
  if (null === _fetch) {
    _fetch = _mod879.isWeb();
  }
  const obj3 = { fetch: _fetch, dom: null, history: null };
  let isWebResult = _mod879.isWeb();
  if (isWebResult) {
    const dom = obj.dom;
    isWebResult = null === dom || undefined === dom || dom;
    const tmp7 = null === dom || undefined === dom || dom;
  }
  obj3.dom = isWebResult;
  let isWebResult1 = _mod879.isWeb();
  if (isWebResult1) {
    const history = obj.history;
    isWebResult1 = null === history || undefined === history || history;
    const tmp9 = null === history || undefined === history || history;
  }
  obj3.history = isWebResult1;
  merged1 = Object.assign(merged, obj3);
  const tmp4Result = _mod879;
  return feedbackAsyncIntegration.breadcrumbsIntegration(merged1);
}