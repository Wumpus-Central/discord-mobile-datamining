// discord_app/modules/activities/utils/useCurrentEmbeddedApplication.tsx
import _slicedToArray from "_slicedToArray";
import { useGetOrFetchApplications } from "../../applications/useGetOrFetchApplications.tsx";
import { useCurrentEmbeddedActivity } from "useCurrentEmbeddedActivity.tsx";

const result = require("useGetOrFetchApplications").fileFinishedImporting("modules/activities/utils/useCurrentEmbeddedApplication.tsx");

export default function useCurrentEmbeddedApplication() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.fetchesApplication;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = useCurrentEmbeddedActivity();
  if (null == tmp) {
    let items = [];
  } else {
    items = [tmp.applicationId];
  }
  const first = callback(useGetOrFetchApplications(items, flag), 1)[0];
  return first;
};