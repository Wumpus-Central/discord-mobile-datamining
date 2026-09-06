// === Module 11880: useSafetyHubClassifications ===

// Module 11880 (useSafetyHubClassifications)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11881 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

require = fn;
const ViolationType = fn(8419).ViolationType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubClassifications.tsx");

export const useSafetyHubClassifications = function useSafetyHubClassifications() {
  const items = [SafetyHubStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => classifications.getClassifications());
  return stateFromStoresArray.sort((id, id2) => {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id2.id);
    return extractTimestampResult - SnowflakeUtilsDefault.extractTimestamp(id.id);
  });
};
export const useSafetyHubClassification = function useSafetyHubClassification(classificationId) {
  _require = classificationId;
  let obj = require("initialize");
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getClassification(closure_0));
  const items1 = [SafetyHubStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => SafetyHubStore.getClassificationRequestState(closure_0));
  const obj2 = require("initialize");
  let tmp = _require;
  const items2 = [SafetyHubStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => SafetyHubStore.getIsDsaEligible());
  const obj3 = require("initialize");
  const items3 = [SafetyHubStore];
  let stateFromStores3 = require("initialize").useStateFromStores(items3, () => SafetyHubStore.getIsAppealEligible());
  const obj4 = require("initialize");
  if (obj5.isGuildClassification(stateFromStores)) {
    const guild_metadata = stateFromStores.guild_metadata;
    let member_type;
    if (guild_metadata != null) {
      member_type = guild_metadata.member_type;
    }
    if (member_type === tmp(8420).MemberType.OWNER) {
      let GUILD_MEMBER = ViolationType.GUILD_OWNER;
    } else {
      GUILD_MEMBER = ViolationType.GUILD_MEMBER;
    }
  } else {
    const items4 = [classificationId, stateFromStores, stateFromStores1];
    const effect = noop.useEffect(() => {
      let tmp = undefined === stateFromStores;
      if (tmp) {
        tmp = null == stateFromStores1;
      }
      if (tmp) {
        const safetyHubDataForClassification = SafetyHubActionCreatorsAll.getSafetyHubDataForClassification(closure_0);
      }
    }, items4);
    obj = { classification: stateFromStores, classificationRequestState: stateFromStores1, isDsaEligible: stateFromStores2, isAppealEligible: null, violationType: null };
    if (stateFromStores3) {
      stateFromStores3 = null != stateFromStores;
    }
    if (stateFromStores3) {
      stateFromStores3 = null == stateFromStores.appeal_status;
    }
    obj.isAppealEligible = stateFromStores3;
    obj.violationType = ViolationType.USER;
    return obj;
  }
  obj5 = require("SafetyHubUtils");
};
export const useActiveSafetyHubClassifications = function useActiveSafetyHubClassifications() {
  const items = [SafetyHubStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => classifications.getClassifications());
  const sorted = stateFromStoresArray.sort((id, id2) => {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id2.id);
    return extractTimestampResult - SnowflakeUtilsDefault.extractTimestamp(id.id);
  });
  let date = new Date();
  return sorted.filter((max_expiration_time) => {
    date = new Date(max_expiration_time.max_expiration_time);
    return date > date;
  });
};
export const useExpiredSafetyHubClassifications = function useExpiredSafetyHubClassifications() {
  const items = [SafetyHubStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => classifications.getClassifications());
  const sorted = stateFromStoresArray.sort((id, id2) => {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id2.id);
    return extractTimestampResult - SnowflakeUtilsDefault.extractTimestamp(id.id);
  });
  let date = new Date();
  return sorted.filter((max_expiration_time) => {
    date = new Date(max_expiration_time.max_expiration_time);
    return date <= date;
  });
};
export const useSafetyHubAppealSignal = function useSafetyHubAppealSignal() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => appealSignal.getAppealSignal());
};