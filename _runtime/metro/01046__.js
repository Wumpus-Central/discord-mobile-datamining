// _runtime/metro/01046__.js
import _mod878 from "00878__.js";
import feedbackAsyncIntegration from "../00900_feedbackAsyncIntegration.js";

export const breadcrumbsIntegration = (arg0) => {
  let isWebResult;
  let isWebResult1;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const _Object = Object;
  let _fetch = obj.fetch;
  const merged = Object.assign({ xhr: true, console: true, sentry: true }, obj);
  if (null === _fetch) {
    const obj2 = _mod878;
    _fetch = obj2.isWeb();
  }
  const obj3 = { fetch: _fetch, dom: isWebResult, history: isWebResult1 };
  const obj4 = _mod878;
  isWebResult = obj4.isWeb();
  if (isWebResult) {
    const dom = obj.dom;
    isWebResult = null === dom || undefined === dom || dom;
  }
  const tmp4Result = _mod878;
  isWebResult1 = tmp4Result.isWeb();
  if (isWebResult1) {
    const history = obj.history;
    isWebResult1 = null === history || undefined === history || history;
  }
  const obj5 = assign(merged, obj3);
  const tmp4Result2 = feedbackAsyncIntegration;
  return tmp4Result2.breadcrumbsIntegration(obj5);
};
