// === Module 15608: splitAgeRestrictedActivities ===

// Module 15608 (splitAgeRestrictedActivities)
import ContentClassificationReference from "ContentClassificationReference" /* 5654 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence/splitAgeRestrictedActivities.tsx");

export default function splitAgeRestrictedActivities(activities, hiddenActivities) {
  const items = [];
  const items1 = [];
  const iter = activities[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let obj = ContentClassificationReference;
    if (obj.isAgeRestrictedClassificationReference(nextResult.content_classification)) {
      let arr = items1.push(tmp2);
    } else {
      let arr2 = items.push(tmp2);
    }
    continue;
  }
  if (0 === items1.length) {
    const obj2 = { activities, hiddenActivities };
    let obj3 = obj2;
  } else {
    obj3 = { activities: items, hiddenActivities: null };
    const items2 = [];
    HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(hiddenActivities, 0));
    obj3.hiddenActivities = items2;
  }
  return obj3;
};