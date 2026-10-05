// discord_app/modules/presence/splitAgeRestrictedActivities.tsx
import ContentClassificationReference from "../content_classification/ContentClassificationReference.tsx";
import ContentClassificationPresenceFilterExperiment2 from "ContentClassificationPresenceFilterExperiment.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/presence/splitAgeRestrictedActivities.tsx");

export default function splitAgeRestrictedActivities(activities, hiddenActivities) {
  let items2;
  const ContentClassificationPresenceFilterExperiment =
    ContentClassificationPresenceFilterExperiment2.ContentClassificationPresenceFilterExperiment;
  if (ContentClassificationPresenceFilterExperiment.getConfig({ location: "presence_filtering" }).enabled) {
    let obj4;
    const items = [];
    const items1 = [];
    const iter = activities[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let obj2 = ContentClassificationReference;
      if (obj2.isAgeRestrictedClassificationReference(nextResult.content_classification)) {
        let arr = items1.push(tmp6);
      } else {
        let arr2 = items.push(tmp6);
      }
      continue;
    }
    if (0 === items1.length) {
      obj4 = { activities, hiddenActivities };
      const obj3 = { activities, hiddenActivities };
    } else {
      obj4 = { activities: items, hiddenActivities: items2 };
      items2 = [];
      HermesBuiltin.arraySpread(items2, items1, HermesBuiltin.arraySpread(items2, hiddenActivities, 0));
    }
    return obj4;
  } else {
    return { activities, hiddenActivities };
  }
}
