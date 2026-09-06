// discord_app/modules/quests/AdContentSeenStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestDataUtils from "utils/QuestDataUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import AdDeliveryStore from "../ads/AdDeliveryStore.tsx";
import QuestStore from "QuestStore.tsx";

require = fn;
function getOrCreateSet(QUEST) {
  value = map.get(QUEST);
  if (null == value) {
    const _Set = Set;
    const set = new Set();
    const result = map.set(QUEST, set);
    value = set;
  }
  return value;
}
function syncWithQuestStore() {
  const quests = QuestStore.quests;
  const obj = getOrCreateSet(AdCreativeType.AdCreativeType.QUEST);
  let flag = false;
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp7] = tmp4;
    let tmp6 = tmp5;
    let hasItem = obj.has(tmp5);
    if (!hasItem) {
      let obj2 = QuestDataUtils;
      hasItem = obj2.isQuestExpired(tmp7);
    }
    if (!hasItem) {
      let userStatus = tmp7.userStatus;
      let tmp13 = userStatus;
      let tmp14 = null == userStatus;
      if (!tmp14) {
        let tmp16 = null == tmp13.enrolledAt;
        if (tmp16) {
          tmp16 = null == tmp13.completedAt;
        }
        if (tmp16) {
          tmp16 = null == tmp13.claimedAt;
        }
        if (tmp16) {
          tmp16 = 0 === tmp13.dismissedQuestContent;
        }
        tmp14 = tmp16;
      }
      hasItem = tmp14;
    }
    if (!hasItem) {
      let addResult = obj.add(tmp6);
      flag = true;
    }
    continue;
  }
  if (0 !== QuestStore.lastFetchedCurrentQuests) {
    if (quests.size > 0) {
      for (const item10063 of obj) {
        let tmp24 = item10063;
        value = quests.get(item10063);
        let isQuestExpiredResult = null == value;
        if (!isQuestExpiredResult) {
          let obj3 = QuestDataUtils;
          isQuestExpiredResult = obj3.isQuestExpired(tmp26);
        }
        if (isQuestExpiredResult) {
          let deleteResult = obj.delete(tmp24);
          flag = true;
        }
        continue;
      }
    }
  }
  const obj4 = getOrCreateSet(AdCreativeType.AdCreativeType.QUEST_HOME_HERO);
  if (null != AdDeliveryStore.getLastFetchedQuestHomeHero()) {
    if (obj4.size > 0) {
      const questHomeHero = AdDeliveryStore.getQuestHomeHero();
      for (const item10097 of obj4) {
        let tmp36 = item10097;
        let tmp37 = null != questHomeHero;
        if (tmp37) {
          tmp37 = tmp36 === questHomeHero.id;
        }
        if (!tmp37) {
          let deleteResult1 = obj4.delete(tmp36);
          flag = true;
        }
        continue;
      }
    }
  }
  return flag;
}
let map = new Map();
const PersistedStore = initializeDefault.PersistedStore;
class AdContentSeenStore extends PersistedStore {}
const prototype = AdContentSeenStore.prototype;
prototype["initialize"] = function initialize(seenContentIds) {
  const self = this;
  this.waitFor(QuestStore, AdDeliveryStore);
  map = new Map();
  if (null != seenContentIds) {
    const _Object = Object;
    const entries = Object.entries(seenContentIds.seenContentIds);
    const tmp20 = entries[Symbol.iterator]();
    while (tmp20 !== undefined) {
      let tmp7 = _slicedToArray(tmp4, 2);
      let tmp8 = tmp7[1];
      let _Number = Number;
      let _Set = Set;
      let tmp11 = new.target;
      let tmp12 = new.target;
      let NumberResult = Number(tmp7[0]);
      let set = new Set(tmp8);
      let result = map.set(NumberResult, set);
      continue;
    }
  }
  const items = [QuestStore, AdDeliveryStore];
  self.syncWith(items, syncWithQuestStore);
};
prototype["getState"] = function getState() {
  const seenContentIds = {};
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let _Array = Array;
    seenContentIds[tmp5[0]] = Array.from(tmp5[1]);
    continue;
  }
  return { seenContentIds };
};
prototype["hasSeen"] = function hasSeen(arg0, arg1) {
  value = map.get(arg0);
  let flag;
  if (value != null) {
    flag = value.has(arg1);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
AdContentSeenStore.displayName = "AdContentSeenStore";
AdContentSeenStore.persistKey = "AdContentSeenStore";
const adContentSeenStore = new AdContentSeenStore(DispatcherDefault, {
  AD_CONTENT_MARK_SEEN: function handleMarkSeen(adCreativeType) {
    const obj = getOrCreateSet(adCreativeType.adCreativeType);
    let flag = false;
    for (const item10013 of tmp) {
      let tmp2 = item10013;
      if (!obj.has(item10013)) {
        let addResult = obj.add(tmp2);
        flag = true;
      }
      continue;
    }
    return flag;
  },
  AD_CONTENT_MARK_UNSEEN: function handleMarkUnseen(adCreativeType) {
    value = map.get(adCreativeType.adCreativeType);
    if (null == value) {
      return false;
    } else {
      let flag = false;
      const contentIds = adCreativeType.contentIds;
      for (const item10014 of contentIds) {
        let tmp3 = item10014;
        if (value.has(item10014)) {
          let deleteResult = value.delete(tmp3);
          flag = true;
        }
        continue;
      }
      return flag;
    }
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/AdContentSeenStore.tsx");

export default adContentSeenStore;
