import noop from "noop";
import handleSafetyHubRequestAgeVerificationResetModalAction from "handleSafetyHubRequestAgeVerificationResetModalAction";
import { ViolationType } from "SafetyHubView";

const require = arg1;
const result = require("SafetyHubView").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubClassifications.tsx");

export const useSafetyHubClassifications = function useSafetyHubClassifications() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  const stateFromStoresArray = require(589) /* initialize */.useStateFromStoresArray(items, () => classifications.getClassifications());
  return stateFromStoresArray.sort((id, id2) => {
    const obj = callback(11);
    const extractTimestampResult = callback(11).extractTimestamp(id2.id);
    return extractTimestampResult - callback(11).extractTimestamp(id.id);
  });
};
export const useSafetyHubClassification = function useSafetyHubClassification(classificationId) {
  const _require = classificationId;
  let obj = _require(589);
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getClassification(closure_0));
  const items1 = [handleSafetyHubRequestAgeVerificationResetModalAction];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => outer1_5.getClassificationRequestState(closure_0));
  const obj2 = _require(589);
  let tmp = _require;
  const items2 = [handleSafetyHubRequestAgeVerificationResetModalAction];
  const stateFromStores2 = _require(589).useStateFromStores(items2, () => store.getIsDsaEligible());
  const obj3 = _require(589);
  const items3 = [handleSafetyHubRequestAgeVerificationResetModalAction];
  let stateFromStores3 = _require(589).useStateFromStores(items3, () => store.getIsAppealEligible());
  const obj4 = _require(589);
  if (obj5.isGuildClassification(stateFromStores)) {
    const guild_metadata = stateFromStores.guild_metadata;
    let member_type;
    if (guild_metadata != null) {
      member_type = guild_metadata.member_type;
    }
    if (member_type === tmp(6760).MemberType.OWNER) {
      let GUILD_MEMBER = ViolationType.GUILD_OWNER;
    } else {
      GUILD_MEMBER = ViolationType.GUILD_MEMBER;
    }
  } else {
    const items4 = [classificationId, stateFromStores, stateFromStores1];
    const effect = React.useEffect(() => {
      let tmp = undefined === stateFromStores;
      if (tmp) {
        tmp = null == stateFromStores1;
      }
      if (tmp) {
        const safetyHubDataForClassification = stateFromStores1(outer1_3[7]).getSafetyHubDataForClassification(closure_0);
        const obj = stateFromStores1(outer1_3[7]);
      }
    }, items4);
    obj = { classification: null, classificationRequestState: null, isDsaEligible: null, isAppealEligible: null, violationType: null };
    obj[0] = stateFromStores;
    obj[1] = stateFromStores1;
    obj[2] = stateFromStores2;
    if (stateFromStores3) {
      stateFromStores3 = null != stateFromStores;
    }
    if (stateFromStores3) {
      stateFromStores3 = null == stateFromStores.appeal_status;
    }
    obj[3] = stateFromStores3;
    obj[4] = ViolationType.USER;
    return obj;
  }
};
export const useActiveSafetyHubClassifications = function useActiveSafetyHubClassifications() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  const stateFromStoresArray = date(589).useStateFromStoresArray(items, () => classifications.getClassifications());
  const sorted = stateFromStoresArray.sort((id, id2) => {
    const obj = callback(11);
    const extractTimestampResult = callback(11).extractTimestamp(id2.id);
    return extractTimestampResult - callback(11).extractTimestamp(id.id);
  });
  date = new Date();
  return sorted.filter((max_expiration_time) => {
    const date = new Date(max_expiration_time.max_expiration_time);
    return date > date;
  });
};
export const useExpiredSafetyHubClassifications = function useExpiredSafetyHubClassifications() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  const stateFromStoresArray = date(589).useStateFromStoresArray(items, () => classifications.getClassifications());
  const sorted = stateFromStoresArray.sort((id, id2) => {
    const obj = callback(11);
    const extractTimestampResult = callback(11).extractTimestamp(id2.id);
    return extractTimestampResult - callback(11).extractTimestamp(id.id);
  });
  date = new Date();
  return sorted.filter((max_expiration_time) => {
    const date = new Date(max_expiration_time.max_expiration_time);
    return date <= date;
  });
};
export const useSafetyHubAppealSignal = function useSafetyHubAppealSignal() {
  const items = [handleSafetyHubRequestAgeVerificationResetModalAction];
  return require(589) /* initialize */.useStateFromStores(items, () => appealSignal.getAppealSignal());
};