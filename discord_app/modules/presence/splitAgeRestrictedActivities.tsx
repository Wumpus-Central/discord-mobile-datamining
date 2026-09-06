// === Module 13760: splitAgeRestrictedActivities ===

// Module 13760 (splitAgeRestrictedActivities)
import ContentClassificationReference from "ContentClassificationReference" /* 9480 */;
import ContentClassificationPresenceFilterExperiment2 from "ContentClassificationPresenceFilterExperiment" /* 13761 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence/splitAgeRestrictedActivities.tsx");

export default function splitAgeRestrictedActivities(activities, hiddenActivities) {
  const ContentClassificationPresenceFilterExperiment = ContentClassificationPresenceFilterExperiment2.ContentClassificationPresenceFilterExperiment;
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
};