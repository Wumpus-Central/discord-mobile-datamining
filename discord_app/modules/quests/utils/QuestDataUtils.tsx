// discord_app/modules/quests/utils/QuestDataUtils.tsx
import _modDef1208 from "../../../utils/SentryUtils.native.tsx";
import QuestsVisibleMessagesChangedSource from "../QuestTypes.tsx";
import closure_3 from "../../ads/AdDeliveryStore.tsx";
import closure_4 from "../../user_settings/LocaleStore.tsx";
import closure_5 from "../BountyStore.tsx";
import closure_6 from "../QuestStore.tsx";
import QuestsExperimentLocations from "../QuestConstants.tsx";

require = arg1;
function getQuestDeliveryDataForPlacement(arg0, adContentId) {
  if (arg0 === QuestsVisibleMessagesChangedSource.AdPlacement.QUEST_HOME_MOBILE_CAROUSEL) {
    let tmp3 = null;
    if (null != adContentId) {
      adDecisionByPlacementAndAdCreativeId = adDecisionByPlacementAndAdCreativeId.getAdDecisionByPlacementAndAdCreativeId(arg0, adContentId);
      let tmp8 = null;
      if (null != adDecisionByPlacementAndAdCreativeId) {
        obj = { questId: null, adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
        let tmpResult = tmp(7413);
        obj[0] = tmpResult.getDeliveredQuestId(adDecisionByPlacementAndAdCreativeId.creative);
        tmpResult = tmp(7413);
        obj[1] = tmpResult.getDeliveredAdCreativeId(adDecisionByPlacementAndAdCreativeId.creative);
        ({ adDecisionData: obj[2], adContext: obj[3], metadataSealed: obj[4], trafficMetadataSealed: obj[5], provenanceMetadataSealed: obj[6] } = adDecisionByPlacementAndAdCreativeId);
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
    const deliveryAdDecisionByPlacement = obj.deliveryAdDecisionByPlacement;
    const value = deliveryAdDecisionByPlacement.get(arg0);
    if (arg0 === tmp(5358).AdPlacement.QUEST_HOME_BANNER_DESKTOP) {
      if (null != value) {
        obj = { questId: null, adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
        obj[0] = tmp(7413).getDeliveredQuestId(value.creative);
        const tmpResult1 = tmp(7413);
        obj[1] = tmp(7413).getDeliveredAdCreativeId(value.creative);
        ({ adDecisionData: obj7[2], adContext: obj7[3], metadataSealed: obj7[4], trafficMetadataSealed: obj7[5], provenanceMetadataSealed: obj7[6] } = value);
        let tmp9 = obj;
        const tmpResult2 = tmp(7413);
      }
      return tmp9;
    }
    tmp9 = null;
    if (null != value) {
      obj = { questId: null, adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null, provenanceMetadataSealed: null };
      obj[0] = tmp(7413).getDeliveredQuestId(value.creative);
      const tmpResult3 = tmp(7413);
      obj[1] = tmp(7413).getDeliveredAdCreativeId(value.creative);
      ({ adDecisionData: obj4[2], adContext: obj4[3], metadataSealed: obj4[4], trafficMetadataSealed: obj4[5], provenanceMetadataSealed: obj4[6] } = value);
      tmp9 = obj;
      const tmpResult4 = tmp(7413);
    }
  }
}
({ DismissibleQuestContentFlags: error, BILLABLE_PLACEMENTS: closure_8, EMPTY_AD_DECISION_DATA: c9 } = QuestsExperimentLocations);
let c10 = 2592000000;
let obj = {};
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR] = require("QuestsVisibleMessagesChangedSource").AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR_V2] = require("QuestsVisibleMessagesChangedSource").AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR_MOBILE] = require("QuestsVisibleMessagesChangedSource").AdPlacement.MOBILE_HOME_DOCK_AREA;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_HOME_HERO] = require("QuestsVisibleMessagesChangedSource").AdPlacement.QUEST_HOME_BANNER_DESKTOP;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_HOME_HERO_SHELF] = require("QuestsVisibleMessagesChangedSource").AdPlacement.QUEST_HOME_BANNER_DESKTOP;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_HOME_MOBILE_CAROUSEL] = require("QuestsVisibleMessagesChangedSource").AdPlacement.QUEST_HOME_MOBILE_CAROUSEL;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.VIDEO_MODAL_MOBILE] = require("QuestsVisibleMessagesChangedSource").AdPlacement.VIDEO_MODAL_MOBILE;
const result = require("set").fileFinishedImporting("modules/quests/utils/QuestDataUtils.tsx");

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
  let value = map.get(questId);
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
export const isDismissible = function isDismissible(closure_1) {
  const keys = Object.keys(closure_7);
  return keys.includes(QuestsVisibleMessagesChangedSource.QuestContent[closure_1]);
};
export const isDismissed = function isDismissed(dismissedQuestContent) {
  const keys = Object.keys(closure_7);
  if (keys.includes(QuestsVisibleMessagesChangedSource.QuestContent[arg1])) {
    return tmp2(1399).hasFlag(dismissedQuestContent.dismissedQuestContent, tmp[tmp2(undefined, 5358).QuestContent[arg1]]);
  } else {
    return false;
  }
  tmp = closure_7;
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
    const diff = Date.now() - c10;
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
    let tmp7 = date;
    let valueOfResult = date.valueOf();
    if (valueOfResult > timestamp) {
      let tmp10 = tmp;
      let tmp11 = null == tmp;
      if (!tmp11) {
        let tmp12 = valueOfResult;
        let tmp13 = tmp;
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
  obj = arg1;
  if (arg1 === undefined) {
    obj = { dateStyle: "short" };
  }
  let str = "";
  if (null != expiresAtPremium) {
    const _Date = Date;
    const date = new Date(expiresAtPremium);
    str = date.toLocaleDateString(locale.locale, obj);
  }
  return str;
};
export const getQuestPlacementFromQuestContent = function getQuestPlacementFromQuestContent(questContent) {
  return obj[questContent];
};
export const isBillableQuestContent = function isBillableQuestContent(questContent) {
  let hasItem = null != tmp;
  if (hasItem) {
    hasItem = set.has(tmp);
  }
  return hasItem;
};
export const getAdDecisionData = function getAdDecisionData(adContentId, sourceQuestContent) {
  if (null == obj[sourceQuestContent]) {
    return closure_9;
  } else {
    obj = getQuestDeliveryDataForPlacement(tmp, adContentId);
    if (obj == null) {
      obj = {};
    }
    const adDecisionData = obj.adDecisionData;
    if (null == adDecisionData) {
      let tmp6 = closure_9;
    } else {
      tmp6 = adDecisionData;
      if (tmp4 !== adContentId) {
        tmp6 = adDecisionData;
        if (tmp5 !== adContentId) {
          tmp6 = adDecisionData;
          if (adDecisionData.ad_id !== adContentId) {
            tmp6 = closure_9;
          }
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
export const getAdProvenanceMetadataSealed = function getAdProvenanceMetadataSealed(sourceQuestContent, adContentId) {
  if (null != obj[sourceQuestContent]) {
    const tmp4 = getQuestDeliveryDataForPlacement(tmp, adContentId);
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
    quest = quest.getQuest(adCreativeId);
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
  obj = _modDef1208;
  obj = {};
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  obj = {};
  const merged1 = Object.assign(tags);
  obj.app_context = "quests";
  obj.tags = obj;
  obj.captureException(error, obj);
};