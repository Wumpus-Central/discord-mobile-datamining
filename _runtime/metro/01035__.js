// _runtime/metro/01035__.js
import _mod867 from "00867__.js";
import feedbackAsyncIntegration from "../00889_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;

export const breadcrumbsIntegration = () => {
  let obj = merged1;
  if (merged1 === undefined) {
    obj = {};
  }
  let _fetch = obj.fetch;
  const merged = Object.assign({ xhr: true, console: true, sentry: true }, obj);
  if (null === _fetch) {
    _fetch = _mod867.isWeb();
  }
  const obj3 = { fetch: _fetch, dom: null, history: null };
  let isWebResult = _mod867.isWeb();
  if (isWebResult) {
    const dom = obj.dom;
    isWebResult = null === dom || undefined === dom || dom;
    const tmp7 = null === dom || undefined === dom || dom;
  }
  obj3.dom = isWebResult;
  let isWebResult1 = _mod867.isWeb();
  if (isWebResult1) {
    const history = obj.history;
    isWebResult1 = null === history || undefined === history || history;
    const tmp9 = null === history || undefined === history || history;
  }
  obj3.history = isWebResult1;
  merged1 = Object.assign(merged, obj3);
  const tmp4Result = _mod867;
  return feedbackAsyncIntegration.breadcrumbsIntegration(merged1);
};
