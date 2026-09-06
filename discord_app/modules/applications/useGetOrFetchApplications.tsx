// === Module 7168: useGetOrFetchApplications ===

// Module 7168 (useGetOrFetchApplications)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 7163 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useGetOrFetchApplications.tsx");

export default function useGetOrFetchApplications(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  dependencyMap = noop.useRef([]);
  const items = [arg0, flag];
  const effect = noop.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = !discord_common_shallowEqual.areArraysShallowEqual(items1, ref.current);
    }
    if (tmp) {
      const obj2 = ApplicationActionCreatorsDefault;
      const found = _modDef12(items1).filter(GlobalUtils.isNotNullish);
      const arr = _modDef12(items1);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = items1;
      const iter = found.uniq();
    }
  }, items);
  const items1 = [ApplicationStore];
  return require("initialize").useStateFromStoresArray(items1, () => items1.map((item) => {
    application = undefined;
    if (null != item) {
      application = application.getApplication(item);
    }
    return application;
  }));
};
export const useGetOrFetchApplication = function useGetOrFetchApplication(applicationId, fetchesApplication) {
  let flag = fetchesApplication;
  if (fetchesApplication === undefined) {
    flag = true;
  }
  if (null != applicationId) {
    const items = [applicationId];
    let items1 = items;
  } else {
    items1 = [];
  }
  if (flag === undefined) {
    flag = true;
  }
  dependencyMap = noop.useRef([]);
  const items2 = [items1, flag];
  const effect = noop.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = !discord_common_shallowEqual.areArraysShallowEqual(items1, ref.current);
    }
    if (tmp) {
      const obj2 = ApplicationActionCreatorsDefault;
      const found = _modDef12(items1).filter(GlobalUtils.isNotNullish);
      const arr = _modDef12(items1);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = items1;
      const iter = found.uniq();
    }
  }, items2);
  const items3 = [ApplicationStore];
  return items1(504).useStateFromStoresArray(items3, () => items1.map((item) => {
    application = undefined;
    if (null != item) {
      application = application.getApplication(item);
    }
    return application;
  }))[0];
};