// === Module 6663: useGetOrFetchApplications ===

// Module 6663 (useGetOrFetchApplications)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 568 */;
import c from "c" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6658 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;

require = fn;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((current, arg1) => {
  _require = current;
  const cResult = require("c").c(8);
  closure_1 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  dependencyMap = noop.useRef(first);
  if (cResult[1] === current) {
    if (cResult[2] === tmp4) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ApplicationStore];
      cResult[5] = items1;
      let tmp9 = items1;
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
      let tmp11 = fn2;
    } else {
      tmp11 = cResult[7];
    }
    return tmp(504).useStateFromStoresArray(tmp9, tmp11);
  }
  const fn = function f() {
    let tmp = closure_1;
    if (closure_1) {
      tmp = !discord_common_shallowEqual.areArraysShallowEqual(current, ref.current);
    }
    if (tmp) {
      const obj2 = ApplicationActionCreatorsDefault;
      const found = _modDef12(current).filter(GlobalUtils.isNotNullish);
      const arr = _modDef12(current);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = current;
      const iter = found.uniq();
    }
  };
  const items2 = [current, undefined === arg1 || arg1];
  cResult[1] = current;
  cResult[2] = undefined === arg1 || arg1;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = fn;
  let obj = require("c");
  tmp = _require;
}) : ((current) => {
  _require = current;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  dependencyMap = noop.useRef([]);
  const items = [current, flag];
  const effect = noop.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = !discord_common_shallowEqual.areArraysShallowEqual(current, ref.current);
    }
    if (tmp) {
      const obj2 = ApplicationActionCreatorsDefault;
      const found = _modDef12(current).filter(GlobalUtils.isNotNullish);
      const arr = _modDef12(current);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = current;
      const iter = found.uniq();
    }
  }, items);
  const items1 = [ApplicationStore];
  return require("initialize").useStateFromStoresArray(items1, () => current.map((item) => {
    application = undefined;
    if (null != item) {
      application = application.getApplication(item);
    }
    return application;
  }));
});
let closure_5 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useGetOrFetchApplications.tsx");

export default tmp2;
export const useGetOrFetchApplication = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    if (null != arg0) {
      const items = [arg0];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = arg0;
    cResult[1] = items1;
  } else {
    return closure_5(cResult[1], tmp2)[0];
  }
  tmp2 = undefined === arg1 || arg1;
}) : ((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  if (null != arg0) {
    const items = [arg0];
    let items1 = items;
  } else {
    items1 = [];
  }
  return closure_5(items1, flag)[0];
});