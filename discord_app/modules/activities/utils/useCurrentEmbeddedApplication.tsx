// discord_app/modules/activities/utils/useCurrentEmbeddedApplication.tsx
import useGetOrFetchApplicationsDefault from "../../applications/useGetOrFetchApplications.tsx";
import useCurrentEmbeddedActivityDefault from "useCurrentEmbeddedActivity.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

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
}
