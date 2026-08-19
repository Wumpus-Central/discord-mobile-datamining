// === Module 13309: splitAgeRestrictedActivities ===

// Module 13309 (splitAgeRestrictedActivities)
import obj132 from "obj132" /* 2 */;
import isAgeRestrictedClassificationReference from "isAgeRestrictedClassificationReference" /* 4785 */;
import apexExperiment from "apexExperiment" /* 13310 */;

const result = obj132.fileFinishedImporting("modules/presence/splitAgeRestrictedActivities.tsx");

export default function splitAgeRestrictedActivities(arg0, arg1) {
  const ContentClassificationPresenceFilterExperiment = apexExperiment.ContentClassificationPresenceFilterExperiment;
  if (ContentClassificationPresenceFilterExperiment.getConfig({ location: "presence_filtering" }).enabled) {
    const items = [];
    const items1 = [];
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let obj2 = isAgeRestrictedClassificationReference;
      if (obj2.isAgeRestrictedClassificationReference(nextResult.content_classification)) {
        let arr = items1.push(tmp5);
      } else {
        arr = items.push(tmp5);
      }
      continue;
    }
    if (0 === items1.length) {
      let obj = { activities: null, hiddenActivities: null };
      obj[0] = arg0;
      obj[1] = arg1;
    } else {
      obj = { activities: null, hiddenActivities: null };
      obj[0] = items;
      const items2 = [];
      HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(arg1, 0));
      obj[1] = items2;
    }
    return obj;
  } else {
    obj = { activities: null, hiddenActivities: null };
    obj[0] = arg0;
    obj[1] = arg1;
    return obj;
  }
};