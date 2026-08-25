// === Module 17233: isLikelyControl ===

// Module 17233 (isLikelyControl)
import _modDef1208 from "module_1208" /* 1208 */;
import initializeDefault from "initialize" /* 5367 */;
import closure_2 from "getHash" /* 4293 */;
import closure_3 from "initialize" /* 1212 */;
import closure_4 from "handleConnectionOpen" /* 4202 */;
import set from "set" /* 2 */;

function isLikelyControl(defaultConfig, variantId2) {
  if (null == defaultConfig) {
    return true;
  } else {
    let tmp3 = null == tmp2;
    if (!tmp3) {
      const _JSON = JSON;
      const _JSON2 = JSON;
      const json = JSON.stringify(tmp2);
      tmp3 = json === JSON.stringify(defaultConfig.defaultConfig);
    }
    return tmp3;
  }
}
function flushFlags(items, set) {
  const sorted = items.sort();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = importDefault;
    let tmp5 = dependencyMap;
    let tmp3 = nextResult;
    let obj = _modDef1208;
    let addFeatureFlagResult = obj.addFeatureFlag(nextResult, true);
    if (set != null) {
      let tmp7 = nextResult;
      let addResult = set.add(tmp3);
    }
    continue;
  }
}
function syncAllExperimentFlags() {
  (function resetGuildFlags() {
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = table;
      let obj = callback(table[3]);
      let addFeatureFlagResult = obj.addFeatureFlag(tmp3, false);
      continue;
    }
    lib.clear();
  })();
  const items = [];
  const items1 = [];
  const items2 = [];
  const items3 = [];
  guildId = guildId.getGuildId();
  allExperimentAssignments = allExperimentAssignments.getAllExperimentAssignments();
  for (const key10027 in allExperimentAssignments) {
    let tmp39 = key10027;
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
  let registeredExperiments = store.getRegisteredExperiments();
  const tmp9 = (function getHashToName() {
    const registeredExperiments = store.getRegisteredExperiments();
    const obj = {};
    for (const key10006 in registeredExperiments) {
      let tmp2 = key10006;
      let tmp3 = store;
      obj[store.getHash(key10006)] = key10006;
      continue;
    }
    return obj;
  })();
  const evaluatedExperiments = store.getState().evaluatedExperiments;
  const items4 = ["user", "installation"];
  for (const item10060 of items4) {
    let tmp10 = item10060;
    let tmp11;
    if (evaluatedExperiments != null) {
      let tmp12 = item10060;
      tmp11 = evaluatedExperiments[tmp10];
    }
    let tmp13 = tmp11;
    for (const key10068 in tmp11) {
      let tmp42 = item10060;
      let tmp43 = evaluatedExperiments[tmp10];
      let obj;
      if (tmp43 != null) {
        let tmp14 = key10068;
        obj = tmp43[tmp41];
      }
      if (obj == null) {
        obj = {};
      }
      let assignments = obj.assignments;
      let tmp16 = assignments;
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
            let tmp19 = assignments;
            let tmp20 = tmp44;
            let variantId = tmp15[tmp45].variantId;
            let tmp21 = variantId;
            if (null == variantId) {
              continue;
            } else {
              let tmp22 = tmp46;
              let tmp23 = variantId;
              let _HermesInternal4 = HermesInternal;
              let combined = "" + tmp47 + ":" + tmp21;
              let tmp25 = isLikelyControl;
              let arr6 = items3;
              if (isLikelyControl(registeredExperiments[tmp47], tmp21)) {
                arr6 = items2;
              }
              let tmp26 = combined;
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
        let tmp48 = key10101;
        let tmp49 = tmp9[key10101];
        if (null == tmp49) {
          continue;
        } else {
          let variantId2 = tmp29.assignments[key10101].variantId;
          if (null == variantId2) {
            continue;
          } else {
            let _HermesInternal5 = HermesInternal;
            let tmp31 = isLikelyControl;
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
let set = new Set();
initializeDefault;
let prototype = function SentryExperimentFeatureFlagManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(closure_2, syncAllExperimentFlags);
  const result1 = result.set(closure_3, syncAllExperimentFlags);
  applyArgumentsResult.stores = result1.set(closure_4, syncAllExperimentFlags);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/sentry/SentryExperimentFeatureFlagManager.tsx");

export default prototype;