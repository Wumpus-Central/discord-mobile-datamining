// discord_app/modules/activities/utils/useCurrentEmbeddedApplication.tsx
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7145 */;
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity" /* 11234 */;
import closure_2 from "_slicedToArray" /* 32 */;

const result = require("set").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

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
  const first = callback(useGetOrFetchApplicationsDefault(items, flag), 1)[0];
  return first;
};