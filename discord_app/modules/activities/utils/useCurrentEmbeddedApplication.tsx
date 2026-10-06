// === Module 9166: useCurrentEmbeddedApplication ===

// Module 9166 (useCurrentEmbeddedApplication)
import react from "react" /* 576 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6670 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 9167 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp3;
  let tmp7;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  const fetchesApplication = tmp3.fetchesApplication;
  const tmp4 = undefined === fetchesApplication || fetchesApplication;
  const tmp6 = useCurrentEmbeddedActivityDefault();
  if (cResult[2] !== tmp6) {
    let items;
    if (null == tmp6) {
      items = [];
    } else {
      items = [tmp6.applicationId];
    }
    cResult[2] = tmp6;
    cResult[3] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[3];
  }
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(tmp7, tmp4), 1)[0];
  return first;
}) : (() => {
  let items;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = useCurrentEmbeddedActivityDefault();
  const tmp2 = useGetOrFetchApplicationsDefault;
  if (null == tmp) {
    items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = _slicedToArray(tmp2(items, flag), 1)[0];
  return first;
});
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

export default tmp2;