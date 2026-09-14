// discord_app/modules/content_inventory/useEntryActivityAndApplication.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import ContentInventoryActivityStore from "ContentInventoryActivityStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/useEntryActivityAndApplication.tsx");

export default function useEntryActivityAndApplication(extra) {
  _require = extra;
  const items = [ContentInventoryActivityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    ContentInventoryActivityStore.getMatchingActivity(closure_0),
  );
  let application_id;
  const obj = require("initialize");
  const tmp = _require;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  const items1 = [application_id];
  let application_id1;
  if ("application_id" in extra.extra) {
    application_id1 = extra.extra.application_id;
  }
  items1[1] = application_id1;
  [activityApplication, obj2.fallbackApplication] = activityApplication(7271)(items1);
  const obj2 = {
    activity: stateFromStores,
    embeddedActivity: null,
    anyMatchingApplication: null,
    activityApplication: null,
    fallbackApplication: null,
  };
  const tmp4 = activityApplication(7271);
  const items2 = [EmbeddedActivitiesStore];
  obj2.embeddedActivity = tmp(504).useStateFromStores(items2, () => {
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
  obj2.anyMatchingApplication = tmp10;
  obj2.activityApplication = activityApplication;
  return obj2;
}
