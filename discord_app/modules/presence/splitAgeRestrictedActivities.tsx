// discord_app/modules/presence/splitAgeRestrictedActivities.tsx
import ContentClassificationReference from "../content_classification/ContentClassificationReference.tsx";
import ContentClassificationPresenceFilterExperiment2 from "ContentClassificationPresenceFilterExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/presence/splitAgeRestrictedActivities.tsx");

export default function splitAgeRestrictedActivities(activities, hiddenActivities) {
  const ContentClassificationPresenceFilterExperiment =
    ContentClassificationPresenceFilterExperiment2.ContentClassificationPresenceFilterExperiment;
  if (ContentClassificationPresenceFilterExperiment.getConfig({ location: "presence_filtering" }).enabled) {
    const items = [];
    const items1 = [];
    const iter = activities[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let obj2 = ContentClassificationReference;
      if (obj2.isAgeRestrictedClassificationReference(nextResult.content_classification)) {
        let arr = items1.push(tmp5);
      } else {
        arr = items.push(tmp5);
      }
      continue;
    }
    if (0 === items1.length) {
      let obj = { activities, hiddenActivities };
    } else {
      obj = { activities: items, hiddenActivities: null };
      const items2 = [];
      HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(hiddenActivities, 0));
      obj.hiddenActivities = items2;
    }
    return obj;
  } else {
    obj = { activities, hiddenActivities };
    return obj;
  }
}
