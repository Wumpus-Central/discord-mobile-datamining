// discord_app/modules/quests/AdContentSeenStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestExpirationUtils from "utils/QuestExpirationUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import QuestStore from "QuestStore.tsx";

require = fn;
function getOrCreateSet(QUEST) {
  value = map.get(QUEST);
  if (null == value) {
    const _Set = Set;
    set = new Set();
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
    let hasItem = obj.has(tmp5);
    if (!hasItem) {
      let obj2 = QuestExpirationUtils;
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
      for (const item10062 of obj) {
        value = quests.get(item10062);
        let isQuestExpiredResult = null == value;
        if (!isQuestExpiredResult) {
          let obj3 = QuestExpirationUtils;
          isQuestExpiredResult = obj3.isQuestExpired(tmp26);
        }
        if (isQuestExpiredResult) {
          let deleteResult = obj.delete(item10062);
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
  this.waitFor(QuestStore);
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
      set = new Set(tmp8);
      let result = map.set(NumberResult, set);
      continue;
    }
  }
  items = [QuestStore];
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
      if (!obj.has(item10013)) {
        let addResult = obj.add(item10013);
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
        if (value.has(item10014)) {
          let deleteResult = value.delete(item10014);
          flag = true;
        }
        continue;
      }
      return flag;
    }
  },
  QUESTS_FETCH_QUEST_HOME_HERO_SUCCESS: function handleFetchQuestHomeHeroSuccess(questHomeHero) {
    questHomeHero = questHomeHero.questHomeHero;
    value = map.get(AdCreativeType.AdCreativeType.QUEST_HOME_HERO);
    if (null == value) {
      return false;
    } else {
      let flag = false;
      for (const item10019 of value) {
        let id;
        if (questHomeHero != null) {
          id = questHomeHero.id;
        }
        if (item10019 !== id) {
          let deleteResult = value.delete(item10019);
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
