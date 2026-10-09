// === Module 10878: useCurrentEmbeddedApplication ===

// Module 10878 (useCurrentEmbeddedApplication)
import c from "c" /* 576 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6854 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 10879 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentEmbeddedApplication(arg0) {
  const cResult = c.c(4);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  const fetchesApplication = tmp3.fetchesApplication;
  const tmp6 = useCurrentEmbeddedActivityDefault();
  if (cResult[2] !== tmp6) {
    if (null == tmp6) {
      let items = [];
    } else {
      items = [tmp6.applicationId];
    }
    cResult[2] = tmp6;
    cResult[3] = items;
  } else {
    const first = _slicedToArray(useGetOrFetchApplicationsDefault(cResult[3], tmp4), 1)[0];
    return first;
  }
  tmp4 = undefined === fetchesApplication || fetchesApplication;
}) : (function useCurrentEmbeddedApplication() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = useCurrentEmbeddedActivityDefault();
  if (null == tmp) {
    let items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items, flag), 1)[0];
  return first;
});