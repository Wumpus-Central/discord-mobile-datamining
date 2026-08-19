// discord_app/modules/activities/utils/useCurrentEmbeddedApplication.tsx
import useGetOrFetchApplicationsDefault from "../../applications/useGetOrFetchApplications.tsx";
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";

const result = require("obj132").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

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