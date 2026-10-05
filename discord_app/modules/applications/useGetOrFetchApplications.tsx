// === Module 6663: useGetOrFetchApplications ===

// Module 6663 (useGetOrFetchApplications)
import _modDef12 from "module_12" /* 12 */;
import shallowEqual from "shallowEqual" /* 568 */;
import react2 from "react" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6658 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, application, dependencyMap;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((current, arg1) => {
  let first;
  let ref;
  _require = current;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(8);
  let closure_1 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  dependencyMap = react.useRef(first);
  if (cResult[1] === current) {
    let tmp6;
    let tmp7;
    let tmp9;
    let tmp11;
    if (cResult[2] === (undefined === arg1 || arg1)) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const effect = react.useEffect(tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ApplicationStore];
      cResult[5] = items1;
      tmp9 = items1;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== current) {
      const fn2 = function h() {
        return current.map((item) => {
          application = undefined;
          if (null != item) {
            application = application.getApplication(item);
          }
          return application;
        });
      };
      cResult[6] = current;
      cResult[7] = fn2;
      tmp11 = fn2;
    } else {
      tmp11 = cResult[7];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStoresArray(tmp9, tmp11);
  }
  const fn = function f() {
    let tmp = closure_1;
    if (tmp) {
      const obj = shallowEqual;
      tmp = !obj.areArraysShallowEqual(current, ref.current);
    }
    if (tmp) {
      const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
      ApplicationActionCreatorsDefault;
      const arr = _modDef12(current);
      const found = arr.filter(GlobalUtils.isNotNullish);
      const iter = found.uniq();
      const applications = fetchApplications(iter.value(), false);
      ref.current = current;
    }
  };
  const items2 = [current, undefined === arg1 || arg1];
  cResult[1] = current;
  cResult[2] = undefined === arg1 || arg1;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = fn;
}) : ((current) => {
  let ref;
  _require = current;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  dependencyMap = react.useRef([]);
  const items = [current, flag];
  const effect = react.useEffect(() => {
    let tmp = flag;
    if (tmp) {
      const obj = shallowEqual;
      tmp = !obj.areArraysShallowEqual(current, ref.current);
    }
    if (tmp) {
      const fetchApplications = ApplicationActionCreatorsDefault.fetchApplications;
      ApplicationActionCreatorsDefault;
      const arr = _modDef12(current);
      const found = arr.filter(GlobalUtils.isNotNullish);
      const iter = found.uniq();
      const applications = fetchApplications(iter.value(), false);
      ref.current = current;
    }
  }, items);
  let obj = require("get initialized");
  const items1 = [ApplicationStore];
  return obj.useStateFromStoresArray(items1, () => current.map((item) => {
    application = undefined;
    if (null != item) {
      application = application.getApplication(item);
    }
    return application;
  }));
});
let closure_5 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = undefined === arg1 || arg1;
  if (cResult[0] !== arg0) {
    let items1;
    if (null != arg0) {
      const items = [arg0];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = arg0;
    cResult[1] = items1;
    tmp3 = items1;
  } else {
    tmp3 = cResult[1];
  }
  return closure_5(tmp3, tmp2)[0];
}) : ((arg0) => {
  let items1;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  if (null != arg0) {
    const items = [arg0];
    items1 = items;
  } else {
    items1 = [];
  }
  return closure_5(items1, flag)[0];
});
const result = size.fileFinishedImporting("modules/applications/useGetOrFetchApplications.tsx");

export default tmp2;
export const useGetOrFetchApplication = tmp3;