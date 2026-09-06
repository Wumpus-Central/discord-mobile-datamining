// discord_app/modules/content_inventory/useEntryActivityAndApplication.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import ContentInventoryActivityStore from "ContentInventoryActivityStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/useEntryActivityAndApplication.tsx");

export default function useEntryActivityAndApplication(extra) {
  _require = extra;
  let obj = require("initialize");
  const items = [ContentInventoryActivityStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    ContentInventoryActivityStore.getMatchingActivity(closure_0),
  );
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  const items1 = [application_id];
  let application_id1;
  if ("application_id" in extra.extra) {
    application_id1 = extra.extra.application_id;
  }
  items1[1] = application_id1;
  const tmp7 = _slicedToArray(activityApplication(7168)(items1), 2);
  activityApplication = tmp7[0];
  obj = {
    activity: stateFromStores,
    embeddedActivity: null,
    anyMatchingApplication: null,
    activityApplication: null,
    fallbackApplication: null,
  };
  const tmp4 = activityApplication(7168);
  const items2 = [EmbeddedActivitiesStore];
  obj.embeddedActivity = require("initialize").useStateFromStores(items2, () => {
    let id;
    if (first != null) {
      id = first.id;
    }
    return EmbeddedActivitiesStore.getEmbeddedActivityForUserId(extra.author_id, id);
  });
  let tmp10 = activityApplication;
  if (activityApplication == null) {
    tmp10 = tmp9;
  }
  obj.anyMatchingApplication = tmp10;
  obj.activityApplication = activityApplication;
  obj.fallbackApplication = tmp7[1];
  return obj;
}
