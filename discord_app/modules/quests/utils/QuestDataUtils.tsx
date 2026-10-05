// === Module 7183: QuestDataUtils ===

// Module 7183 (QuestDataUtils)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import AdDecisionUtils from "AdDecisionUtils" /* 7185 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7184 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import BountyStore from "BountyStore" /* 7186 */;
import QuestStore from "QuestStore" /* 7187 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import size from "module_2" /* 2 */;

let map, map1;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function getQuestDeliveryDataForPlacement(questPlacementFromQuestContent, item) {
  let obj2;
  let obj3;
  let tmp11Result;
  let tmp11Result4;
  let tmp11Result5;
  let tmp11Result6;
  let tmp = null;
  if (set.has(questPlacementFromQuestContent)) {
    tmp = null;
    if (null != item) {
      const adDecisionByPlacementAndAdCreativeId = BountyStore.getAdDecisionByPlacementAndAdCreativeId(questPlacementFromQuestContent, item);
      let tmp5 = null;
      if (null != adDecisionByPlacementAndAdCreativeId) {
        obj = { questId: obj2.getDeliveredQuestId(adDecisionByPlacementAndAdCreativeId.creative), adCreativeId: obj3.getDeliveredAdCreativeId(adDecisionByPlacementAndAdCreativeId.creative), adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
        obj2 = AdDecisionUtils;
        ({ adDecisionData: obj.adDecisionData, adContext: obj.adContext, metadataSealed: obj.metadataSealed, trafficMetadataSealed: obj.trafficMetadataSealed, provenanceMetadataSealed: obj.provenanceMetadataSealed } = adDecisionByPlacementAndAdCreativeId);
        tmp5 = obj;
        obj3 = AdDecisionUtils;
      }
      tmp = tmp5;
    }
  }
  if (null != tmp) {
    return tmp;
  } else {
    let tmp8;
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    const value = deliveryAdDecisionByPlacement.get(questPlacementFromQuestContent);
    if (questPlacementFromQuestContent === QuestTypes.AdPlacement.QUEST_HOME_BANNER_DESKTOP) {
      if (null != value) {
        const obj5 = { questId: tmp11Result.getDeliveredQuestId(value.creative), adCreativeId: tmp11Result4.getDeliveredAdCreativeId(value.creative), adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
        tmp11Result = AdDecisionUtils;
        ({ adDecisionData: obj7.adDecisionData, adContext: obj7.adContext, metadataSealed: obj7.metadataSealed, trafficMetadataSealed: obj7.trafficMetadataSealed, provenanceMetadataSealed: obj7.provenanceMetadataSealed } = value);
        tmp8 = obj5;
        tmp11Result4 = AdDecisionUtils;
      }
      return tmp8;
    }
    tmp8 = null;
    if (null != value) {
      const obj6 = { questId: tmp11Result5.getDeliveredQuestId(value.creative), adCreativeId: tmp11Result6.getDeliveredAdCreativeId(value.creative), adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
      tmp11Result5 = AdDecisionUtils;
      ({ adDecisionData: obj4.adDecisionData, adContext: obj4.adContext, metadataSealed: obj4.metadataSealed, trafficMetadataSealed: obj4.trafficMetadataSealed, provenanceMetadataSealed: obj4.provenanceMetadataSealed } = value);
      tmp8 = obj6;
      tmp11Result6 = AdDecisionUtils;
    }
  }
}
({ DismissibleQuestContentFlags: metroImportDefault, BILLABLE_PLACEMENTS: metroImportAll, NON_BILLABLE_CREATIVE_TYPES: c9, EMPTY_AD_DECISION_DATA: c10 } = QuestConstants);
let c11 = 2592000000;
let obj = {};
obj[QuestTypes.QuestContent.QUEST_BAR] = QuestTypes.AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
obj[QuestTypes.QuestContent.QUEST_BAR_V2] = QuestTypes.AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
obj[QuestTypes.QuestContent.QUEST_BAR_MOBILE] = QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA;
obj[QuestTypes.QuestContent.QUEST_HOME_HERO] = QuestTypes.AdPlacement.QUEST_HOME_BANNER_DESKTOP;
obj[QuestTypes.QuestContent.QUEST_HOME_HERO_SHELF] = QuestTypes.AdPlacement.QUEST_HOME_BANNER_DESKTOP;
obj[QuestTypes.QuestContent.VIDEO_MODAL_MOBILE] = QuestTypes.AdPlacement.VIDEO_MODAL_MOBILE;
let items = [QuestTypes.AdPlacement.VIDEO_MODAL_MOBILE];
const set = new Set(items);
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
  map = quests;
  if (Array.isArray(quests)) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map(quests.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }
  map1 = excludedQuests;
  if (Array.isArray(excludedQuests)) {
    const _Map2 = Map;
    const self3 = this;
    const self4 = this;
    map1 = new Map(excludedQuests.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }
  const value = map.get(scrollToQuestId);
  if (null != value) {
    return value;
  } else {
    const value3 = map1.get(scrollToQuestId);
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
  const keys = Object.keys(metroImportDefault);
  return keys.includes(QuestTypes.QuestContent[content]);
};
export const isDismissed = function isDismissed(dismissedQuestContent, ACTIVITY_PANEL) {
  const keys = Object.keys(metroImportDefault);
  if (keys.includes(QuestTypes.QuestContent[ACTIVITY_PANEL])) {
    const tmp5 = QuestTypes.QuestContent[ACTIVITY_PANEL];
    const tmp2Result = FlagUtils;
    return tmp2Result.hasFlag(dismissedQuestContent.dismissedQuestContent, metroImportDefault[tmp5]);
  } else {
    return false;
  }
};
export const isQuestConfigExpired = function isQuestConfigExpired(expiresAt) {
  const date = new Date(expiresAt.expiresAt);
  const valueOfResult = date.valueOf();
  return valueOfResult <= Date.now();
};
export const isQuestExpired = function isQuestExpired(config) {
  const date = new Date(config.config.expiresAt);
  const valueOfResult = date.valueOf();
  return valueOfResult <= Date.now();
};
export const getIsQuestExpiredButWithinThirtyDayLookback = function getIsQuestExpiredButWithinThirtyDayLookback(quest) {
  const date = new Date(quest.config.expiresAt);
  const valueOfResult = date.valueOf();
  if (valueOfResult <= Date.now()) {
    const _Date = Date;
    const _Date2 = Date;
    const self = this;
    const self2 = this;
    const diff = Date.now() - c11;
    const date1 = new Date(quest.config.expiresAt);
    const tmp6 = null != quest.config.expiresAt && date1.valueOf() > diff;
    return tmp6;
  } else {
    return false;
  }
};
export const findNextUpcomingExpirationEpochMs = function findNextUpcomingExpirationEpochMs(arg0) {
  let tmp = null;
  const timestamp = Date.now();
  const tmp3 = arg0[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let _Date = Date;
    let self = this;
    let self2 = this;
    let date = new Date(tmp4.config.expiresAt);
    let valueOfResult = date.valueOf();
    if (valueOfResult > timestamp) {
      let tmp9 = null == tmp;
      if (!tmp9) {
        tmp9 = tmp7 < tmp;
      }
      if (tmp9) {
        tmp = valueOfResult;
      }
    }
    continue;
  }
  return tmp;
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
    const self = this;
    const self2 = this;
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
  const hasItem = null != tmp2 && metroImportAll.has(tmp2);
  return hasItem;
};
export const isBountyQuestHomePlacement = function isBountyQuestHomePlacement(arg0) {
  return set.has(arg0);
};
export const getBountyByPlacementAndId = function getBountyByPlacementAndId(questPlacementFromQuestContent, bountyId) {
  if (set.has(questPlacementFromQuestContent)) {
    const adDecisionByPlacementAndAdCreativeId = BountyStore.getAdDecisionByPlacementAndAdCreativeId(questPlacementFromQuestContent, bountyId);
    let creative;
    const getDeliveredBounty = AdDecisionUtils.getDeliveredBounty;
    AdDecisionUtils;
    if (adDecisionByPlacementAndAdCreativeId != null) {
      creative = adDecisionByPlacementAndAdCreativeId.creative;
    }
    if (creative == null) {
      creative = null;
    }
    const deliveredBounty = getDeliveredBounty(creative);
    if (null != deliveredBounty) {
      return deliveredBounty;
    }
  }
  const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
  const getDeliveredBounty2 = AdDecisionUtils.getDeliveredBounty;
  AdDecisionUtils;
  const value = deliveryAdDecisionByPlacement.get(questPlacementFromQuestContent);
  let creative1;
  if (value != null) {
    creative1 = value.creative;
  }
  if (creative1 == null) {
    creative1 = null;
  }
  const deliveredBounty2 = getDeliveredBounty2(creative1);
  let tmp13 = null;
  if (null != deliveredBounty2) {
    tmp13 = null;
    if (deliveredBounty2.id === bountyId) {
      tmp13 = deliveredBounty2;
    }
  }
  return tmp13;
};
export const getAdDecisionData = function getAdDecisionData(adContentId, sourceQuestContent) {
  if (null == obj[sourceQuestContent]) {
    return authStore;
  } else {
    obj = getQuestDeliveryDataForPlacement(tmp, adContentId);
    if (obj == null) {
      obj = {};
    }
    const adDecisionData = obj.adDecisionData;
    if (null != adDecisionData) {
      return adDecisionData;
    }
    const noFillForPlacement = AdDeliveryStore.getNoFillForPlacement(tmp, { includeExpired: true });
    if (null != noFillForPlacement) {
      let tmp4;
      if (noFillForPlacement.decisionId === adContentId) {
        tmp4 = { decision_id: noFillForPlacement.decisionId, is_targeted: false };
        const obj2 = { decision_id: noFillForPlacement.decisionId, is_targeted: false };
      }
      return tmp4;
    }
    tmp4 = authStore;
  }
};
export const getAdMetadataSealed = function getAdMetadataSealed(sourceQuestContent, adCreativeId) {
  if (null != obj[sourceQuestContent]) {
    const tmp4 = getQuestDeliveryDataForPlacement(obj[sourceQuestContent], adCreativeId);
    let metadataSealed;
    if (tmp4 != null) {
      metadataSealed = tmp4.metadataSealed;
    }
    if (null != metadataSealed) {
      return metadataSealed;
    } else {
      const noFillForPlacement = AdDeliveryStore.getNoFillForPlacement(tmp, { includeExpired: true });
      let metadataSealed1;
      if (null != noFillForPlacement) {
        if (noFillForPlacement.decisionId === adCreativeId) {
          metadataSealed1 = noFillForPlacement.metadataSealed;
        }
      }
      return metadataSealed1;
    }
  }
};
export const getAdProvenanceMetadataSealed = function getAdProvenanceMetadataSealed(sourceQuestContent, item) {
  if (null != obj[sourceQuestContent]) {
    const tmp4 = getQuestDeliveryDataForPlacement(obj[sourceQuestContent], item);
    let prop;
    if (tmp4 != null) {
      prop = tmp4.provenanceMetadataSealed;
    }
    return prop;
  }
};
export const getAdTrafficMetadataSealed = function getAdTrafficMetadataSealed(sourceQuestContent, adCreativeId, adContentId) {
  if (null != obj[sourceQuestContent]) {
    const noFillForPlacement = AdDeliveryStore.getNoFillForPlacement(tmp, { includeExpired: true });
    if (null != noFillForPlacement) {
      if (noFillForPlacement.decisionId === adContentId) {
        return noFillForPlacement.trafficMetadataSealed;
      }
    }
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
    const tmp4 = getQuestDeliveryDataForPlacement(obj[sourceQuestContent], item);
    let adContext;
    if (tmp4 != null) {
      adContext = tmp4.adContext;
    }
    return adContext;
  }
};
export const captureQuestsException = function captureQuestsException(error, tags) {
  let obj2;
  obj = { tags: obj2 };
  const captureException = SentryUtilsDefault.captureException;
  SentryUtilsDefault;
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  obj2 = { app_context: "quests" };
  const merged1 = Object.assign(tags);
  captureException(error, obj);
};