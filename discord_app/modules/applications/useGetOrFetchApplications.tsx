// === Module 5967: useGetOrFetchApplications ===

// Module 5967 (useGetOrFetchApplications)
import closure_3 from "noop" /* 19 */;
import closure_4 from "addApplication" /* 4519 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/applications/useGetOrFetchApplications.tsx");

export default function useGetOrFetchApplications(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  dependencyMap = undefined;
  dependencyMap = React.useRef([]);
  const items = [arg0, flag];
  const effect = React.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = !items1(ref[2]).areArraysShallowEqual(items1, ref.current);
      const obj = items1(ref[2]);
    }
    if (tmp) {
      const obj2 = flag(ref[3]);
      const found = flag(ref[4])(items1).filter(items1(ref[5]).isNotNullish);
      const arr = flag(ref[4])(items1);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = items1;
      const iter = found.uniq();
    }
  }, items);
  const items1 = [closure_4];
  return _require(586).useStateFromStoresArray(items1, () => items1.map((arg0) => {
    let application;
    if (null != arg0) {
      application = application.getApplication(arg0);
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
  dependencyMap = undefined;
  dependencyMap = React.useRef([]);
  const items2 = [items1, flag];
  const effect = React.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = !items1(ref[2]).areArraysShallowEqual(items1, ref.current);
      const obj = items1(ref[2]);
    }
    if (tmp) {
      const obj2 = flag(ref[3]);
      const found = flag(ref[4])(items1).filter(items1(ref[5]).isNotNullish);
      const arr = flag(ref[4])(items1);
      const applications = obj2.fetchApplications(found.uniq().value(), false);
      ref.current = items1;
      const iter = found.uniq();
    }
  }, items2);
  const items3 = [closure_4];
  return items1(586).useStateFromStoresArray(items3, () => items1.map((arg0) => {
    let application;
    if (null != arg0) {
      application = application.getApplication(arg0);
    }
    return application;
  }))[0];
};