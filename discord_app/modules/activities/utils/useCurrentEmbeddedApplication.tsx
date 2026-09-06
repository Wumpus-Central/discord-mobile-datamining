// === Module 9632: useCurrentEmbeddedApplication ===

// Module 9632 (useCurrentEmbeddedApplication)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7168 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 9633 */;
import _slicedToArray from "module_32" /* 32 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

export default function useCurrentEmbeddedApplication() {
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
};