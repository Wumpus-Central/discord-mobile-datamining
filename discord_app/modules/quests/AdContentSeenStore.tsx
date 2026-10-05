// discord_app/modules/quests/AdContentSeenStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestDataUtils from "utils/QuestDataUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import AdDeliveryStore from "../ads/AdDeliveryStore.tsx";
import QuestStore from "QuestStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

function getOrCreateSet(QUEST) {
  let value = map.get(QUEST);
  if (null == value) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const result = map.set(QUEST, set);
    value = set;
  }
  return value;
}
function syncWithQuestStore() {
  let tmp5;
  let tmp7;
  const quests = QuestStore.quests;
  const obj = getOrCreateSet(AdCreativeType.AdCreativeType.QUEST);
  let flag = false;
  const tmp = quests[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [tmp5, tmp7] = tmp4;
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
      let addResult = obj.add(tmp5);
      flag = true;
    }
    continue;
  }
  if (0 !== QuestStore.lastFetchedCurrentQuests) {
    if (quests.size > 0) {
      for (const item10063 of obj) {
        let value = quests.get(item10063);
        let isQuestExpiredResult = null == value;
        if (!isQuestExpiredResult) {
          let obj3 = QuestDataUtils;
          isQuestExpiredResult = obj3.isQuestExpired(tmp26);
        }
        if (isQuestExpiredResult) {
          let deleteResult = obj.delete(item10063);
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
        let tmp37 = null != questHomeHero && item10097 === questHomeHero.id;
        if (!tmp37) {
          let deleteResult1 = obj4.delete(item10097);
          flag = true;
        }
        continue;
      }
    }
  }
  return flag;
}
let map = new Map();
const PersistedStore = get_initializedDefault.PersistedStore;
class AdContentSeenStore extends PersistedStore {
  initialize(seenContentIds) {
    const self = this;
    this.waitFor(QuestStore, AdDeliveryStore);
    map = new Map();
    if (null != seenContentIds) {
      const _Object = Object;
      const entries = Object.entries(seenContentIds.seenContentIds);
      const tmp18 = entries[Symbol.iterator]();
      while (tmp18 !== undefined) {
        let tmp7 = _slicedToArray(tmp4, 2);
        let tmp8 = tmp7[1];
        let _Number = Number;
        set = map.set;
        let _Set = Set;
        let self2 = this;
        let self3 = this;
        let NumberResult = Number(tmp7[0]);
        let set1 = new Set(tmp8);
        let result = set(NumberResult, set1);
        continue;
      }
    }
    const items = [QuestStore, AdDeliveryStore];
    self.syncWith(items, syncWithQuestStore);
  }
  getState() {
    const seenContentIds = {};
    const tmp2 = map[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let _Array = Array;
      seenContentIds[tmp5[0]] = Array.from(tmp5[1]);
      continue;
    }
    return { seenContentIds };
  }
  hasSeen(arg0, arg1) {
    const value = map.get(arg0);
    let flag;
    if (value != null) {
      flag = value.has(arg1);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
}
const prototype = AdContentSeenStore.prototype;
AdContentSeenStore.displayName = "AdContentSeenStore";
AdContentSeenStore.persistKey = "AdContentSeenStore";
let obj = {
  AD_CONTENT_MARK_SEEN: function handleMarkSeen(adCreativeType) {
    const obj = getOrCreateSet(adCreativeType.adCreativeType);
    let flag = false;
    const contentIds = adCreativeType.contentIds;
    for (const item10013 of contentIds) {
      if (!obj.has(item10013)) {
        let addResult = obj.add(item10013);
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
        if (value.has(item10014)) {
          let deleteResult = value.delete(item10014);
          flag = true;
        }
        continue;
      }
      return flag;
    }
  },
};
const adContentSeenStore = new AdContentSeenStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/quests/AdContentSeenStore.tsx");

export default adContentSeenStore;
