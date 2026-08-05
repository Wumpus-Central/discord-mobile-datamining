// discord_app/modules/quests/AdContentSeenStore.tsx
import _slicedToArray from "_slicedToArray";
import initializeState from "initializeState";
import { PersistedStore } from "initialize";

const require = arg1;
function getOrCreateSet(QUEST) {
  let value = map.get(QUEST);
  if (null == value) {
    const _Set = Set;
    const set = new Set();
    const result = map.set(QUEST, set);
    value = set;
  }
  return value;
}
function syncWithQuestStore() {
  let tmp5;
  let tmp7;
  const quests = lastFetchedQuestHomeHero.quests;
  const obj = getOrCreateSet(require(7108) /* AdCreativeType */.AdCreativeType.QUEST);
  let flag = false;
  while (tmp !== undefined) {
    let tmp3 = callback;
    let tmp4 = callback(tmp2, 2);
    [tmp5, tmp7] = tmp4;
    let tmp6 = tmp5;
    let hasItem = obj.has(tmp5);
    if (!hasItem) {
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let obj2 = require(7078) /* getQuestDeliveryDataForPlacement */;
      let tmp11 = tmp7;
      hasItem = obj2.isQuestExpired(tmp7);
    }
    if (!hasItem) {
      let tmp12 = tmp7;
      let userStatus = tmp7.userStatus;
      let tmp13 = userStatus;
      let tmp14 = null == userStatus;
      if (!tmp14) {
        let tmp15 = userStatus;
        let tmp16 = null == tmp13.enrolledAt;
        if (tmp16) {
          let tmp17 = userStatus;
          tmp16 = null == tmp13.completedAt;
        }
        if (tmp16) {
          let tmp18 = userStatus;
          tmp16 = null == tmp13.claimedAt;
        }
        if (tmp16) {
          let tmp19 = userStatus;
          tmp16 = 0 === tmp13.dismissedQuestContent;
        }
        tmp14 = tmp16;
      }
      hasItem = tmp14;
    }
    if (!hasItem) {
      let tmp20 = tmp5;
      let addResult = obj.add(tmp6);
      flag = true;
    }
    continue;
  }
  if (0 !== lastFetchedQuestHomeHero.lastFetchedCurrentQuests) {
    if (quests.size > 0) {
      for (const item10063 of obj) {
        let tmp24 = item10063;
        let value = quests.get(item10063);
        let isQuestExpiredResult = null == value;
        if (!isQuestExpiredResult) {
          let tmp28 = require;
          let tmp29 = dependencyMap;
          let obj3 = require(7078) /* getQuestDeliveryDataForPlacement */;
          let tmp30 = value;
          isQuestExpiredResult = obj3.isQuestExpired(tmp26);
        }
        if (isQuestExpiredResult) {
          let tmp31 = item10063;
          let deleteResult = obj.delete(tmp24);
          flag = true;
        }
        continue;
      }
    }
  }
  const obj4 = getOrCreateSet(require(7108) /* AdCreativeType */.AdCreativeType.QUEST_HOME_HERO);
  if (null != lastFetchedQuestHomeHero.getLastFetchedQuestHomeHero()) {
    if (obj4.size > 0) {
      const questHomeHero = lastFetchedQuestHomeHero.getQuestHomeHero();
      for (const item10097 of obj4) {
        let tmp36 = item10097;
        let tmp37 = null != questHomeHero;
        if (tmp37) {
          let tmp38 = item10097;
          tmp37 = tmp36 === questHomeHero.id;
        }
        if (!tmp37) {
          let tmp39 = item10097;
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
class AdContentSeenStore extends PersistedStore {
}
const prototype = AdContentSeenStore.prototype;
prototype["initialize"] = function initialize(seenContentIds) {
  const self = this;
  this.waitFor(initializeState);
  const map = new Map();
  if (null != seenContentIds) {
    const _Object = Object;
    const entries = Object.entries(seenContentIds.seenContentIds);
    const tmp20 = entries[Symbol.iterator]();
    while (tmp20 !== undefined) {
      let tmp6 = callback;
      let tmp7 = callback(tmp4, 2);
      let tmp8 = tmp7[1];
      let tmp9 = map;
      let _Number = Number;
      let _Set = Set;
      let tmp11 = new.target;
      let tmp12 = new.target;
      let tmp13 = tmp8;
      let NumberResult = Number(tmp7[0]);
      let set = new Set(tmp8);
      let tmp15 = set;
      let result = map.set(NumberResult, set);
      continue;
    }
  }
  const items = [initializeState];
  self.syncWith(items, syncWithQuestStore);
};
prototype["getState"] = function getState() {
  const seenContentIds = {};
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    let _Array = Array;
    seenContentIds[tmp5[0]] = Array.from(tmp5[1]);
    continue;
  }
  return { seenContentIds };
};
prototype["hasSeen"] = function hasSeen(arg0, arg1) {
  const value = map.get(arg0);
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
const adContentSeenStore = new AdContentSeenStore(require("dispatcher"), {
  AD_CONTENT_MARK_SEEN: function handleMarkSeen(adCreativeType) {
    const obj = getOrCreateSet(adCreativeType.adCreativeType);
    let flag = false;
    for (const item10013 of tmp) {
      let tmp2 = item10013;
      if (!obj.has(item10013)) {
        let tmp3 = item10013;
        let addResult = obj.add(tmp2);
        flag = true;
      }
      continue;
    }
    return flag;
  },
  AD_CONTENT_MARK_UNSEEN: function handleMarkUnseen(adCreativeType) {
    const value = map.get(adCreativeType.adCreativeType);
    if (null == value) {
      return false;
    } else {
      let flag = false;
      const contentIds = adCreativeType.contentIds;
      for (const item10014 of contentIds) {
        let tmp3 = item10014;
        if (value.has(item10014)) {
          let tmp4 = item10014;
          let deleteResult = value.delete(tmp3);
          flag = true;
        }
        continue;
      }
      return flag;
    }
  }
});
let result = require("AdCreativeType").fileFinishedImporting("modules/quests/AdContentSeenStore.tsx");

export default adContentSeenStore;