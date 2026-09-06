// === Module 17891: SentryExperimentFeatureFlagManager ===

// Module 17891 (SentryExperimentFeatureFlagManager)
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

function isLikelyControl(registeredExperiments, variantId2) {
  if (null == registeredExperiments) {
    return true;
  } else {
    let tmp3 = null == tmp2;
    if (!tmp3) {
      const _JSON = JSON;
      const _JSON2 = JSON;
      const json = JSON.stringify(tmp2);
      tmp3 = json === JSON.stringify(registeredExperiments.defaultConfig);
    }
    return tmp3;
  }
}
function flushFlags(items, set) {
  const sorted = items.sort();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let obj = SentryUtilsDefault;
    let addFeatureFlagResult = obj.addFeatureFlag(nextResult, true);
    if (set != null) {
      let addResult = set.add(tmp3);
    }
    continue;
  }
}
function syncAllExperimentFlags() {
  (function resetGuildFlags() {
    while (tmp2 !== undefined) {
      let obj = SentryUtilsDefault;
      let addFeatureFlagResult = obj.addFeatureFlag(tmp3, false);
      continue;
    }
    set.clear();
    tmp2 = set[Symbol.iterator]();
  })();
  const items = [];
  const items1 = [];
  const items2 = [];
  const items3 = [];
  const guildId = SelectedGuildStore.getGuildId();
  const allExperimentAssignments = ExperimentStore.getAllExperimentAssignments();
  for (const key10027 in allExperimentAssignments) {
    let tmp40 = allExperimentAssignments[key10027];
    let tmp4 = null == tmp40;
    if (!tmp4) {
      tmp4 = tmp40 <= 0;
    }
    if (tmp4) {
      continue;
    } else {
      if (key10027.includes(":")) {
        let startsWithResult = null != guildId;
        if (startsWithResult) {
          let _HermesInternal2 = HermesInternal;
          startsWithResult = key10027.startsWith("" + guildId + ":");
        }
        if (!startsWithResult) {
          continue;
        } else {
          let _HermesInternal3 = HermesInternal;
          let arr = items1.push("" + key10027.split(":")[1] + ":" + tmp40);
          continue;
        }
        continue;
      } else {
        let _HermesInternal = HermesInternal;
        arr = items.push("" + key10027 + ":" + tmp40);
        continue;
      }
      continue;
    }
    continue;
  }
  let registeredExperiments = ApexExperimentStore.getRegisteredExperiments();
  const tmp9 = (function getHashToName() {
    const registeredExperiments = ApexExperimentStore.getRegisteredExperiments();
    const obj = {};
    for (const key10006 in registeredExperiments) {
      obj[ApexExperimentStore.getHash(key10006)] = key10006;
      continue;
    }
    return obj;
  })();
  const evaluatedExperiments = ApexExperimentStore.getState().evaluatedExperiments;
  const items4 = ["user", "installation"];
  for (const item10060 of items4) {
    let tmp11;
    if (evaluatedExperiments != null) {
      tmp11 = evaluatedExperiments[item10060];
    }
    for (const key10068 in tmp11) {
      let tmp43 = evaluatedExperiments[item10060];
      let obj;
      if (tmp43 != null) {
        obj = tmp43[tmp41];
      }
      if (obj == null) {
        obj = {};
      }
      let assignments = obj.assignments;
      let tmp15 = assignments;
      let keys = Object.keys();
      if (keys === undefined) {
        continue;
      } else {
        let tmp18 = keys[tmp43];
        while (tmp18 !== undefined) {
          let tmp46 = tmp9[tmp18];
          let tmp47 = tmp46;
          if (null == tmp46) {
            continue;
          } else {
            let variantId = tmp15[tmp45].variantId;
            let tmp21 = variantId;
            if (null == variantId) {
              continue;
            } else {
              let _HermesInternal4 = HermesInternal;
              let combined = "" + tmp47 + ":" + tmp21;
              let arr6 = items3;
              if (isLikelyControl(registeredExperiments[tmp47], tmp21)) {
                arr6 = items2;
              }
              let arr1 = arr6.push(combined);
              continue;
            }
            continue;
          }
          continue;
        }
      }
      continue;
    }
    continue;
  }
  const items5 = [];
  const items6 = [];
  if (null != guildId) {
    let tmp28 = evaluatedExperiments == null;
    let tmp29;
    if (!tmp28) {
      const guild = evaluatedExperiments.guild;
      tmp28 = guild == null;
      if (!tmp28) {
        tmp29 = guild[guildId];
      }
    }
    if (null != tmp29) {
      for (const key10101 in tmp29.assignments) {
        let tmp49 = tmp9[key10101];
        if (null == tmp49) {
          continue;
        } else {
          let variantId2 = tmp29.assignments[key10101].variantId;
          if (null == variantId2) {
            continue;
          } else {
            let _HermesInternal5 = HermesInternal;
            let combined1 = "" + tmp49 + ":" + variantId2;
            let arr9 = items6;
            if (isLikelyControl(registeredExperiments[tmp49], variantId2)) {
              arr9 = items5;
            }
            let arr2 = arr9.push(combined1);
            continue;
          }
          continue;
        }
        continue;
      }
    }
  }
  flushFlags(items);
  flushFlags(items1, set);
  flushFlags(items2);
  flushFlags(items5, set);
  flushFlags(items3);
  flushFlags(items6, set);
}
const set = new Set();
let prototype = function SentryExperimentFeatureFlagManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(ExperimentStore, syncAllExperimentFlags);
  const result1 = result.set(ApexExperimentStore, syncAllExperimentFlags);
  applyArgumentsResult.stores = result1.set(SelectedGuildStore, syncAllExperimentFlags);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/sentry/SentryExperimentFeatureFlagManager.tsx");

export default prototype;