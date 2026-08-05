// discord_app/modules/content_inventory/useEntryActivityAndApplication.tsx
import _slicedToArray from "_slicedToArray";
import participantFromServer from "participantFromServer";
import entryToKey from "entryToKey";

const require = arg1;
const result = require("entryToKey").fileFinishedImporting("modules/content_inventory/useEntryActivityAndApplication.tsx");

export default function useEntryActivityAndApplication(extra) {
  const _require = extra;
  let obj = _require(589);
  const items = [entryToKey];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getMatchingActivity(closure_0));
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  const items1 = [application_id, ];
  let application_id1;
  if ("application_id" in extra.extra) {
    application_id1 = extra.extra.application_id;
  }
  items1[1] = application_id1;
  const tmp7 = callback(first(5616)(items1), 2);
  first = tmp7[0];
  obj = { activity: stateFromStores, embeddedActivity: null, anyMatchingApplication: null, activityApplication: null, fallbackApplication: null };
  const tmp = _require;
  const tmp4 = first(5616);
  const items2 = [participantFromServer];
  obj[1] = _require(589).useStateFromStores(items2, () => {
    let id;
    if (first != null) {
      id = first.id;
    }
    return outer1_4.getEmbeddedActivityForUserId(extra.author_id, id);
  });
  let tmp10 = first;
  if (first == null) {
    tmp10 = tmp9;
  }
  obj[2] = tmp10;
  obj[3] = first;
  obj[4] = tmp7[1];
  return obj;
};