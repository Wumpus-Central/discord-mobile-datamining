// _runtime/metro/01035__.js
import _mod867 from "00867__.js";

require = arg1;
const dependencyMap = arg6;

export const breadcrumbsIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _fetch = obj.fetch;
  const merged = Object.assign({ xhr: true, console: true, sentry: true }, obj);
  if (null === _fetch) {
    _fetch = _mod867.isWeb();
  }
  obj = { fetch: _fetch, dom: null, history: null };
  let isWebResult = _mod867.isWeb();
  if (isWebResult) {
    const dom = obj.dom;
    isWebResult = null === dom || undefined === dom || dom;
    const tmp7 = null === dom || undefined === dom || dom;
  }
  obj.dom = isWebResult;
  let tmp4Result = tmp4(867);
  let isWebResult1 = tmp4Result.isWeb();
  if (isWebResult1) {
    const history = obj.history;
    isWebResult1 = null === history || undefined === history || history;
    const tmp9 = null === history || undefined === history || history;
  }
  obj.history = isWebResult1;
  const merged1 = Object.assign(merged, obj);
  tmp4Result = tmp4(889);
  return tmp4Result.breadcrumbsIntegration(merged1);
};
