// === Module 7699: QuestDataUtils ===

// Module 7699 (QuestDataUtils)
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import AdDeliveryStore from "AdDeliveryStore" /* 7700 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import BountyStore from "BountyStore" /* 7702 */;
import QuestStore from "QuestStore" /* 7703 */;

require = fn;
function getQuestDeliveryDataForPlacement(arg0, adContentId) {
  if (arg0 === QuestTypes.AdPlacement.QUEST_HOME_MOBILE_CAROUSEL) {
    let tmp3 = null;
    if (null != adContentId) {
      const adDecisionByPlacementAndAdCreativeId = BountyStore.getAdDecisionByPlacementAndAdCreativeId(arg0, adContentId);
      let tmp8 = null;
      if (null != adDecisionByPlacementAndAdCreativeId) {
        let obj = { questId: null, adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
        let tmpResult = tmp(7701);
        obj.questId = tmpResult.getDeliveredQuestId(adDecisionByPlacementAndAdCreativeId.creative);
        tmpResult = tmp(7701);
        obj.adCreativeId = tmpResult.getDeliveredAdCreativeId(adDecisionByPlacementAndAdCreativeId.creative);
        ({ adDecisionData: obj.adDecisionData, adContext: obj.adContext, metadataSealed: obj.metadataSealed, trafficMetadataSealed: obj.trafficMetadataSealed, provenanceMetadataSealed: obj.provenanceMetadataSealed } = adDecisionByPlacementAndAdCreativeId);
        tmp8 = obj;
      }
      tmp3 = tmp8;
    }
  } else {
    tmp3 = null;
  }
  if (null != tmp3) {
    return tmp3;
  } else {
    const deliveryAdDecisionByPlacement = AdDeliveryStore.deliveryAdDecisionByPlacement;
    value = deliveryAdDecisionByPlacement.get(arg0);
    if (arg0 === tmp(5447).AdPlacement.QUEST_HOME_BANNER_DESKTOP) {
      if (null != value) {
        obj = { questId: tmp(7701).getDeliveredQuestId(value.creative), adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
        const tmpResult1 = tmp(7701);
        obj.adCreativeId = tmp(7701).getDeliveredAdCreativeId(value.creative);
        ({ adDecisionData: obj7.adDecisionData, adContext: obj7.adContext, metadataSealed: obj7.metadataSealed, trafficMetadataSealed: obj7.trafficMetadataSealed, provenanceMetadataSealed: obj7.provenanceMetadataSealed } = value);
        let tmp9 = obj;
        const tmpResult2 = tmp(7701);
      }
      return tmp9;
    }
    tmp9 = null;
    if (null != value) {
      obj = { questId: tmp(7701).getDeliveredQuestId(value.creative), adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
      const tmpResult3 = tmp(7701);
      obj.adCreativeId = tmp(7701).getDeliveredAdCreativeId(value.creative);
      ({ adDecisionData: obj4.adDecisionData, adContext: obj4.adContext, metadataSealed: obj4.metadataSealed, trafficMetadataSealed: obj4.trafficMetadataSealed, provenanceMetadataSealed: obj4.provenanceMetadataSealed } = value);
      tmp9 = obj;
      const tmpResult4 = tmp(7701);
    }
  }
}
const QuestConstants = fn(5444);
({ DismissibleQuestContentFlags: closure_7, BILLABLE_PLACEMENTS: closure_8, NON_BILLABLE_CREATIVE_TYPES: closure_9, EMPTY_AD_DECISION_DATA: c10 } = QuestConstants);
let c11 = 2592000000;
let tags = {};
tags[fn(5447).QuestContent.QUEST_BAR] = fn(5447).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
tags[fn(5447).QuestContent.QUEST_BAR_V2] = fn(5447).AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
tags[fn(5447).QuestContent.QUEST_BAR_MOBILE] = fn(5447).AdPlacement.MOBILE_HOME_DOCK_AREA;
tags[fn(5447).QuestContent.QUEST_HOME_HERO] = fn(5447).AdPlacement.QUEST_HOME_BANNER_DESKTOP;
tags[fn(5447).QuestContent.QUEST_HOME_HERO_SHELF] = fn(5447).AdPlacement.QUEST_HOME_BANNER_DESKTOP;
tags[fn(5447).QuestContent.QUEST_HOME_MOBILE_CAROUSEL] = fn(5447).AdPlacement.QUEST_HOME_MOBILE_CAROUSEL;
tags[fn(5447).QuestContent.VIDEO_MODAL_MOBILE] = fn(5447).AdPlacement.VIDEO_MODAL_MOBILE;
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
export const findQuestOrReplacement = function findQuestOrReplacement(questId, quests, excludedQuests) {
  let map = quests;
  if (Array.isArray(quests)) {
    const _Map = Map;
    map = new Map(quests.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }
  map1 = excludedQuests;
  if (Array.isArray(excludedQuests)) {
    const _Map2 = Map;
    map1 = new Map(excludedQuests.map((id) => {
      const items = [id.id, id];
      return items;
    }));
  }
  value = map.get(questId);
  if (null != value) {
    return value;
  } else {
    value = map1.get(questId);
    let replacementId;
    if (value != null) {
      replacementId = value.replacementId;
    }
    let value1;
    if (null != replacementId) {
      value1 = map.get(replacementId);
    }
    return value1;
  }
};
export const isDismissible = function isDismissible(arg0) {
  const keys = Object.keys(React5);
  return keys.includes(QuestTypes.QuestContent[arg0]);
};
export const isDismissed = function isDismissed(dismissedQuestContent, arg1) {
  const keys = Object.keys(React5);
  if (keys.includes(QuestTypes.QuestContent[arg1])) {
    return tmp2(1384).hasFlag(dismissedQuestContent.dismissedQuestContent, tmp[tmp2(undefined, 5447).QuestContent[arg1]]);
  } else {
    return false;
  }
  tmp = React5;
};
export const isQuestConfigExpired = function isQuestConfigExpired(expiresAt) {
  const date = new Date(expiresAt.expiresAt);
  return new Date(expiresAt.expiresAt).valueOf() <= Date.now();
};
export const isQuestExpired = function isQuestExpired(config) {
  const date = new Date(config.config.expiresAt);
  return new Date(config.config.expiresAt).valueOf() <= Date.now();
};
export const getIsQuestExpiredButWithinThirtyDayLookback = function getIsQuestExpiredButWithinThirtyDayLookback(quest) {
  const date = new Date(quest.config.expiresAt);
  if (valueOfResult <= Date.now()) {
    const _Date = Date;
    const _Date2 = Date;
    const diff = Date.now() - c11;
    const date1 = new Date(quest.config.expiresAt);
    return null != quest.config.expiresAt && date1.valueOf() > diff;
  } else {
    return false;
  }
  valueOfResult = new Date(quest.config.expiresAt).valueOf();
};
export const findNextUpcomingExpirationEpochMs = function findNextUpcomingExpirationEpochMs(arg0) {
  let tmp = null;
  const timestamp = Date.now();
  while (tmp3 !== undefined) {
    let _Date = Date;
    let tmp5 = new.target;
    let tmp6 = new.target;
    let date = new Date(tmp4.config.expiresAt);
    let valueOfResult = date.valueOf();
    if (valueOfResult > timestamp) {
      let tmp11 = null == tmp;
      if (!tmp11) {
        tmp11 = tmp9 < tmp;
      }
      if (tmp11) {
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
  let obj = arg1;
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
export const getAdDecisionData = function getAdDecisionData(adContentId, sourceQuestContent) {
  if (null == obj[sourceQuestContent]) {
    return closure_1_10;
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
      if (noFillForPlacement.decisionId === adContentId) {
        obj = { decision_id: noFillForPlacement.decisionId, is_targeted: false };
        let tmp4 = obj;
      }
      return tmp4;
    }
    tmp4 = closure_1_10;
  }
};
export const getAdMetadataSealed = function getAdMetadataSealed(sourceQuestContent, adCreativeId) {
  if (null != obj[sourceQuestContent]) {
    const tmp4 = getQuestDeliveryDataForPlacement(tmp, adCreativeId);
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
export const getAdContext = function getAdContext(sourceQuestContent, adContentId) {
  if (null != obj[sourceQuestContent]) {
    const tmp4 = getQuestDeliveryDataForPlacement(tmp, adContentId);
    let adContext;
    if (tmp4 != null) {
      adContext = tmp4.adContext;
    }
    return adContext;
  }
};
export const captureQuestsException = function captureQuestsException(error, tags) {
  tags = {};
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  tags = {};
  const merged1 = Object.assign(tags);
  tags.app_context = "quests";
  tags.tags = tags;
  tags.captureException(error, tags);
};