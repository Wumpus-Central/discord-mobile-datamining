// _runtime/01035_breadcrumbsIntegration.js
import isHermesEnabled from "00867_isHermesEnabled.js";

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
    const obj2 = isHermesEnabled;
  }
  obj = { fetch: _fetch, dom: null, history: null };
  let isWebResult = isHermesEnabled.isWeb();
  if (isWebResult) {
    const dom = obj.dom;
    isWebResult = null === dom || undefined === dom || dom;
    const tmp7 = null === dom || undefined === dom || dom;
  }
  obj[1] = isWebResult;
  let tmp4Result = tmp4(867);
  let isWebResult1 = tmp4Result.isWeb();
  if (isWebResult1) {
    const history = obj.history;
    isWebResult1 = null === history || undefined === history || history;
    const tmp9 = null === history || undefined === history || history;
  }
  obj[2] = isWebResult1;
  const merged1 = Object.assign(merged, obj);
  tmp4Result = tmp4(889);
  return tmp4Result.breadcrumbsIntegration(merged1);
};
