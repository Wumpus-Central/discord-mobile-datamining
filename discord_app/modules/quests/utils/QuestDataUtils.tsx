// === Module 7380: QuestDataUtils ===

// Module 7380 (QuestDataUtils)
import SentryUtilsDefault from "SentryUtils" /* 1255 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import QuestTypes from "QuestTypes" /* 5982 */;
import AdDecisionUtils from "AdDecisionUtils" /* 7382 */;
import QuestExpirationUtils from "QuestExpirationUtils" /* 7390 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7381 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import BountyStore from "BountyStore" /* 7383 */;
import QuestStore from "QuestStore" /* 7384 */;

require = fn;
function getQuestDeliveryDataForPlacement(questPlacementFromQuestContent, item) {
  let tmp = null;
  if (set.has(questPlacementFromQuestContent)) {
    tmp = null;
    if (null != item) {
      const adDecisionByPlacementAndAdCreativeId = BountyStore.getAdDecisionByPlacementAndAdCreativeId(questPlacementFromQuestContent, item);
      let tmp5 = null;
      if (null != adDecisionByPlacementAndAdCreativeId) {
        obj = { questId: AdDecisionUtils.getDeliveredQuestId(adDecisionByPlacementAndAdCreativeId.creative), adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
        obj.adCreativeId = AdDecisionUtils.getDeliveredAdCreativeId(adDecisionByPlacementAndAdCreativeId.creative);
        ({ adDecisionData: obj.adDecisionData, adContext: obj.adContext, metadataSealed: obj.metadataSealed, trafficMetadataSealed: obj.trafficMetadataSealed, provenanceMetadataSealed: obj.provenanceMetadataSealed } = adDecisionByPlacementAndAdCreativeId);
        tmp5 = obj;
      }
      tmp = tmp5;
    }
  }
  if (null != tmp) {
    return tmp;
  } else {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    value = deliveryAdDecisionByPlacement.get(questPlacementFromQuestContent);
    if (questPlacementFromQuestContent === QuestTypes.AdPlacement.QUEST_HOME_BANNER_DESKTOP) {
      if (null != value) {
        const obj5 = { questId: AdDecisionUtils.getDeliveredQuestId(value.creative), adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
        const tmp11Result = AdDecisionUtils;
        obj5.adCreativeId = AdDecisionUtils.getDeliveredAdCreativeId(value.creative);
        ({ adDecisionData: obj7.adDecisionData, adContext: obj7.adContext, metadataSealed: obj7.metadataSealed, trafficMetadataSealed: obj7.trafficMetadataSealed, provenanceMetadataSealed: obj7.provenanceMetadataSealed } = value);
        let tmp8 = obj5;
        const tmp11Result4 = AdDecisionUtils;
      }
      return tmp8;
    }
    tmp8 = null;
    if (null != value) {
      const obj6 = { questId: AdDecisionUtils.getDeliveredQuestId(value.creative), adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
      const tmp11Result5 = AdDecisionUtils;
      obj6.adCreativeId = AdDecisionUtils.getDeliveredAdCreativeId(value.creative);
      ({ adDecisionData: obj4.adDecisionData, adContext: obj4.adContext, metadataSealed: obj4.metadataSealed, trafficMetadataSealed: obj4.trafficMetadataSealed, provenanceMetadataSealed: obj4.provenanceMetadataSealed } = value);
      tmp8 = obj6;
      const tmp11Result6 = AdDecisionUtils;
    }
  }
}
const QuestConstants = fn(5979);
({ DismissibleQuestContentFlags: closure_7, BILLABLE_PLACEMENTS: closure_8, NON_BILLABLE_CREATIVE_TYPES: closure_9, EMPTY_AD_DECISION_DATA: c10 } = QuestConstants);
let c11 = 2592000000;
let obj = {};
obj[fn(5982).QuestContent.QUEST_BAR] = fn(5982).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
obj[fn(5982).QuestContent.QUEST_BAR_V2] = fn(5982).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
obj[fn(5982).QuestContent.QUEST_BAR_MOBILE] = fn(5982).AdPlacement.MOBILE_HOME_DOCK_AREA;
obj[fn(5982).QuestContent.QUEST_HOME_HERO] = fn(5982).AdPlacement.QUEST_HOME_BANNER_DESKTOP;
obj[fn(5982).QuestContent.QUEST_HOME_HERO_SHELF] = fn(5982).AdPlacement.QUEST_HOME_BANNER_DESKTOP;
obj[fn(5982).QuestContent.VIDEO_MODAL_MOBILE] = fn(5982).AdPlacement.VIDEO_MODAL_MOBILE;
let items = [fn(5982).AdPlacement.VIDEO_MODAL_MOBILE];
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/utils/QuestDataUtils.tsx");

export const THIRTY_DAYS_MS = 2592000000;
export const earnedDecisionIsValid = function earnedDecisionIsValid(value) {
  let tmp = null != value;
  if (tmp) {
    const _Date = Date;
    const sum = value.fetchedAt + value.ttlMillis;
    tmp = sum >= Date.now();
  }
  return tmp;
};
export const findQuestOrReplacement = function findQuestOrReplacement(scrollToQuestId, quests, excludedQuests) {
  let map = quests;
  if (Array.isArray(quests)) {
    const _Map = Map;
    map = new Map(quests.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }
  let map1 = excludedQuests;
  if (Array.isArray(excludedQuests)) {
    const _Map2 = Map;
    map1 = new Map(excludedQuests.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }
  value = map.get(scrollToQuestId);
  if (null != value) {
    return value;
  } else {
    value3 = map1.get(scrollToQuestId);
    let replacementId;
    if (value3 != null) {
      replacementId = value3.replacementId;
    }
    let value4;
    if (null != replacementId) {
      value4 = map.get(replacementId);
    }
    return value4;
  }
};
export const isDismissible = function isDismissible(content) {
  const keys = Object.keys(React5);
  return keys.includes(QuestTypes.QuestContent[content]);
};
export const isDismissed = function isDismissed(dismissedQuestContent, ACTIVITY_PANEL) {
  const keys = Object.keys(React5);
  if (keys.includes(QuestTypes.QuestContent[ACTIVITY_PANEL])) {
    return FlagUtils.hasFlag(dismissedQuestContent.dismissedQuestContent, React5[QuestTypes.QuestContent[ACTIVITY_PANEL]]);
  } else {
    return false;
  }
};
export const getIsQuestExpiredButWithinThirtyDayLookback = function getIsQuestExpiredButWithinThirtyDayLookback(quest) {
  if (obj.isQuestExpired(quest)) {
    const _Date = Date;
    const _Date2 = Date;
    const diff = Date.now() - c11;
    const date = new Date(quest.config.expiresAt);
    return null != quest.config.expiresAt && date.valueOf() > diff;
  } else {
    return false;
  }
  obj = QuestExpirationUtils;
};
export const hasUnclaimedReward = function hasUnclaimedReward(userStatus) {
  return null != userStatus && null != userStatus.completedAt && null == userStatus.claimedAt;
};
export const getQuestFormattedDate = function getQuestFormattedDate(expiresAtPremium) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = { dateStyle: "short" };
  }
  let str = "";
  if (null != expiresAtPremium) {
    const _Date = Date;
    const date = new Date(expiresAtPremium);
    str = date.toLocaleDateString(LocaleStore.locale, obj);
  }
  return str;
};
export const getQuestPlacementFromQuestContent = function getQuestPlacementFromQuestContent(questContent) {
  return obj[questContent];
};
export const isBillableQuestContent = function isBillableQuestContent(questContent, adCreativeType) {
  if (null != adCreativeType) {
    if (set2.has(adCreativeType)) {
      return false;
    }
  }
  let hasItem = null != tmp2;
  if (hasItem) {
    hasItem = set.has(tmp2);
  }
  return hasItem;
};
export const isBountyQuestHomePlacement = function isBountyQuestHomePlacement(arg0) {
  return set.has(arg0);
};
export const getBountyByPlacementAndId = function getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId) {
  if (set.has(questPlacementFromQuestContent)) {
    const adDecisionByPlacementAndAdCreativeId = BountyStore.getAdDecisionByPlacementAndAdCreativeId(questPlacementFromQuestContent, bountyId);
    let creative;
    if (adDecisionByPlacementAndAdCreativeId != null) {
      creative = adDecisionByPlacementAndAdCreativeId.creative;
    }
    if (creative == null) {
      creative = null;
    }
    const deliveredBounty = AdDecisionUtils.getDeliveredBounty(creative);
    if (null != deliveredBounty) {
      return deliveredBounty;
    }
  }
  const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
  value = deliveryAdDecisionByPlacement.get(questPlacementFromQuestContent);
  let creative1;
  if (value != null) {
    creative1 = value.creative;
  }
  if (creative1 == null) {
    creative1 = null;
  }
  const deliveredBounty1 = AdDecisionUtils.getDeliveredBounty(creative1);
  let tmp11 = null;
  if (null != deliveredBounty1) {
    tmp11 = null;
    if (deliveredBounty1.id === bountyId) {
      tmp11 = deliveredBounty1;
    }
  }
  return tmp11;
};
export const getAdDecisionData = function getAdDecisionData(adContentId, sourceQuestContent) {
  if (null == obj[sourceQuestContent]) {
    return collapsed;
  } else {
    obj = getQuestDeliveryDataForPlacement(tmp, adContentId);
    if (obj == null) {
      obj = {};
    }
    const adDecisionData = obj.adDecisionData;
    if (null == adDecisionData) {
      let tmp6 = collapsed;
    } else {
      tmp6 = adDecisionData;
      if (tmp4 !== adContentId) {
        tmp6 = adDecisionData;
        if (tmp5 !== adContentId) {
          tmp6 = adDecisionData;
        }
      }
    }
    return tmp6;
  }
};
export const getAdMetadataSealed = function getAdMetadataSealed(sourceQuestContent, adCreativeId) {
  if (null != obj[sourceQuestContent]) {
    const tmp4 = getQuestDeliveryDataForPlacement(tmp, adCreativeId);
    let metadataSealed;
    if (tmp4 != null) {
      metadataSealed = tmp4.metadataSealed;
    }
    return metadataSealed;
  }
};
export const getAdProvenanceMetadataSealed = function getAdProvenanceMetadataSealed(sourceQuestContent, item) {
  if (null != obj[sourceQuestContent]) {
    const tmp4 = getQuestDeliveryDataForPlacement(tmp, item);
    let prop;
    if (tmp4 != null) {
      prop = tmp4.provenanceMetadataSealed;
    }
    return prop;
  }
};
export const getAdTrafficMetadataSealed = function getAdTrafficMetadataSealed(sourceQuestContent, adCreativeId, adContentId) {
  if (null != obj[sourceQuestContent]) {
    obj = getQuestDeliveryDataForPlacement(tmp, adContentId);
    if (obj == null) {
      obj = {};
    }
    const trafficMetadataSealed = obj.trafficMetadataSealed;
    if (null != trafficMetadataSealed) {
      return trafficMetadataSealed;
    }
  }
  if (null != adCreativeId) {
    const quest = QuestStore.getQuest(adCreativeId);
    let prop;
    if (quest != null) {
      prop = quest.trafficMetadataSealed;
    }
    return prop;
  }
};
export const getAdContext = function getAdContext(sourceQuestContent, item) {
  if (null != obj[sourceQuestContent]) {
    const tmp4 = getQuestDeliveryDataForPlacement(tmp, item);
    let adContext;
    if (tmp4 != null) {
      adContext = tmp4.adContext;
    }
    return adContext;
  }
};
export const captureQuestsException = function captureQuestsException(error, tags) {
  const obj2 = {};
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  const obj3 = {};
  const merged1 = Object.assign(tags);
  obj3.app_context = "quests";
  obj2.tags = obj3;
  SentryUtilsDefault.captureException(error, obj2);
};