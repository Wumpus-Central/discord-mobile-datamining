import _getSystemLocale from "_getSystemLocale";
import set from "set";
import initializeState from "initializeState";
import QuestsExperimentLocations from "QuestsExperimentLocations";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function getQuestDeliveryDataForPlacement(arg0, adContentId) {
  if (arg0 === require(5040) /* QuestsVisibleMessagesChangedSource */.AdPlacement.QUEST_HOME_MOBILE_CAROUSEL) {
    let tmp3 = null;
    if (null != adContentId) {
      adDecisionByPlacementAndAdCreativeId = adDecisionByPlacementAndAdCreativeId.getAdDecisionByPlacementAndAdCreativeId(arg0, adContentId);
      let tmp8 = null;
      if (null != adDecisionByPlacementAndAdCreativeId) {
        let obj = { questId: null, adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null };
        ({ questId: obj[0], adCreativeId: obj[1], adDecisionData: obj[2], adContext: obj[3], metadataSealed: obj[4], trafficMetadataSealed: obj[5] } = adDecisionByPlacementAndAdCreativeId);
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
    const questAdDecisionByPlacement = quest.questAdDecisionByPlacement;
    let value = questAdDecisionByPlacement.get(arg0);
    if (arg0 === tmp(5040).AdPlacement.QUEST_HOME_BANNER_DESKTOP) {
      if (null != value) {
        obj = { questId: null, adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null };
        ({ questId: obj4[0], adCreativeId: obj4[1], adDecisionData: obj4[2], adContext: obj4[3], metadataSealed: obj4[4], trafficMetadataSealed: obj4[5] } = value);
        return obj;
      }
    }
    if (obj5.getConfig({ location: "getQuestDeliveryDataForPlacement" }).enableNewRequestBehavior) {
      let tmp11 = null;
      if (null != value) {
        obj = { questId: null, adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null };
        ({ questId: obj3[0], adCreativeId: obj3[1], adDecisionData: obj3[2], adContext: obj3[3], metadataSealed: obj3[4], trafficMetadataSealed: obj3[5] } = value);
        tmp11 = obj;
      }
      return tmp11;
    } else {
      const questToDeliverForPlacement = tmp13.questToDeliverForPlacement;
      value = questToDeliverForPlacement.get(arg0);
      let tmp10 = null;
      if (null != value) {
        const obj1 = { questId: null, adCreativeId: null, adDecisionData: null, adContext: null, metadataSealed: null, trafficMetadataSealed: null };
        obj1[0] = value.quest.id;
        obj1[1] = value.quest.id;
        ({ adDecisionData: obj2[2], adContext: obj2[3], metadataSealed: obj2[4], trafficMetadataSealed: obj2[5] } = value);
        tmp10 = obj1;
      }
      return tmp10;
    }
    obj5 = importDefault(6004);
    tmp13 = quest;
  }
}
({ DismissibleQuestContentFlags: closure_6, BILLABLE_PLACEMENTS: error, EMPTY_AD_DECISION_DATA: metroImportAll } = QuestsExperimentLocations);
let c9 = 2592000000;
let obj = {};
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR] = require("QuestsVisibleMessagesChangedSource").AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR_V2] = require("QuestsVisibleMessagesChangedSource").AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR_MOBILE] = require("QuestsVisibleMessagesChangedSource").AdPlacement.MOBILE_HOME_DOCK_AREA;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_HOME_HERO] = require("QuestsVisibleMessagesChangedSource").AdPlacement.QUEST_HOME_BANNER_DESKTOP;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_HOME_HERO_SHELF] = require("QuestsVisibleMessagesChangedSource").AdPlacement.QUEST_HOME_BANNER_DESKTOP;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_HOME_MOBILE_CAROUSEL] = require("QuestsVisibleMessagesChangedSource").AdPlacement.QUEST_HOME_MOBILE_CAROUSEL;
obj[require("QuestsVisibleMessagesChangedSource").QuestContent.VIDEO_MODAL_MOBILE] = require("QuestsVisibleMessagesChangedSource").AdPlacement.VIDEO_MODAL_MOBILE;
const result = require("initializeState").fileFinishedImporting("modules/quests/utils/QuestDataUtils.tsx");

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
  let map1 = excludedQuests;
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
  const keys = Object.keys(closure_6);
  return keys.includes(require(5040) /* QuestsVisibleMessagesChangedSource */.QuestContent[closure_1]);
};
export const isDismissed = function isDismissed(dismissedQuestContent) {
  const keys = Object.keys(closure_6);
  if (keys.includes(require(5040) /* QuestsVisibleMessagesChangedSource */.QuestContent[arg1])) {
    return tmp2(1384).hasFlag(dismissedQuestContent.dismissedQuestContent, tmp[tmp2(undefined, 5040).QuestContent[arg1]]);
  } else {
    return false;
  }
  tmp = closure_6;
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
    const diff = Date.now() - c9;
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
  let obj = arg1;
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
export const getQuestForPlacement = function getQuestForPlacement(quests, questToDeliverForPlacement, MOBILE_HOME_DOCK_AREA) {
  let value = questToDeliverForPlacement.get(MOBILE_HOME_DOCK_AREA);
  if (null != value) {
    value = quests.get(value.quest.id);
    let tmp4;
    if (null != value) {
      const _Date = Date;
      const date = new Date(value.config.expiresAt);
      const _Date2 = Date;
      if (valueOfResult > Date.now()) {
        tmp4 = value;
      }
      valueOfResult = date.valueOf();
    }
    return tmp4;
  }
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
    return closure_8;
  } else {
    obj = getQuestDeliveryDataForPlacement(tmp, adContentId);
    if (obj == null) {
      obj = {};
    }
    const adDecisionData = obj.adDecisionData;
    if (null == adDecisionData) {
      let tmp6 = closure_8;
    } else {
      tmp6 = adDecisionData;
      if (tmp4 !== adContentId) {
        tmp6 = adDecisionData;
        if (tmp5 !== adContentId) {
          tmp6 = adDecisionData;
          if (adDecisionData.ad_id !== adContentId) {
            tmp6 = closure_8;
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
export const getAdContext = function getAdContext(questContent, adContentId) {
  if (null != obj[questContent]) {
    const tmp4 = getQuestDeliveryDataForPlacement(tmp, adContentId);
    let adContext;
    if (tmp4 != null) {
      adContext = tmp4.adContext;
    }
    return adContext;
  }
};
export const captureQuestsException = function captureQuestsException(error, tags) {
  let obj = importDefault(1208);
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