// discord_app/modules/safety_hub/hooks/useSafetyHubClassifications.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import handleSafetyHubRequestAgeVerificationResetModalAction from "../SafetyHubStore.tsx";
import { ViolationType } from "../SafetyHubConstants.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { parseMessageEmbedForProps } from "../SafetyHubUtils.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubClassifications.tsx");

export const useSafetyHubClassifications = function useSafetyHubClassifications() {
  const items = [closure_5];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => classifications.getClassifications());
  return stateFromStoresArray.sort((id, id2) => {
    const obj = callback(11);
    const extractTimestampResult = callback(11).extractTimestamp(id2.id);
    return extractTimestampResult - callback(11).extractTimestamp(id.id);
  });
};
export const useSafetyHubClassification = function useSafetyHubClassification(classificationId) {
  const _require = classificationId;
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getClassification(closure_0));
  const items1 = [closure_5];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => closure_1_5.getClassificationRequestState(closure_0));
  const obj2 = initialize;
  let tmp = _require;
  const items2 = [closure_5];
  const stateFromStores2 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => store.getIsDsaEligible());
  const obj3 = initialize;
  const items3 = [closure_5];
  let stateFromStores3 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items3, () => store.getIsAppealEligible());
  const obj4 = initialize;
  if (obj5.isGuildClassification(stateFromStores)) {
    const guild_metadata = stateFromStores.guild_metadata;
    let member_type;
    if (guild_metadata != null) {
      member_type = guild_metadata.member_type;
    }
    if (member_type === tmp(5439).MemberType.OWNER) {
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
        const safetyHubDataForClassification = stateFromStores1(dependencyMap[7]).getSafetyHubDataForClassification(closure_0);
        const obj = stateFromStores1(dependencyMap[7]);
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
  obj5 = parseMessageEmbedForProps;
};
export const useActiveSafetyHubClassifications = function useActiveSafetyHubClassifications() {
  const items = [closure_5];
  const stateFromStoresArray = date(589).useStateFromStoresArray(items, () => classifications.getClassifications());
  const sorted = stateFromStoresArray.sort((id, id2) => {
    const obj = callback(11);
    const extractTimestampResult = callback(11).extractTimestamp(id2.id);
    return extractTimestampResult - callback(11).extractTimestamp(id.id);
  });
  date = new Date();
  return sorted.filter((item, index) => {
    date = new Date(item.max_expiration_time);
    return date > date;
  });
};
export const useExpiredSafetyHubClassifications = function useExpiredSafetyHubClassifications() {
  const items = [closure_5];
  const stateFromStoresArray = date(589).useStateFromStoresArray(items, () => classifications.getClassifications());
  const sorted = stateFromStoresArray.sort((id, id2) => {
    const obj = callback(11);
    const extractTimestampResult = callback(11).extractTimestamp(id2.id);
    return extractTimestampResult - callback(11).extractTimestamp(id.id);
  });
  date = new Date();
  return sorted.filter((item, index) => {
    date = new Date(item.max_expiration_time);
    return date <= date;
  });
};
export const useSafetyHubAppealSignal = function useSafetyHubAppealSignal() {
  const items = [closure_5];
  return initialize.useStateFromStores(items, () => appealSignal.getAppealSignal());
};