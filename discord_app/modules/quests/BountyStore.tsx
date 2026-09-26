// === Module 7115: BountyStore ===

// Module 7115 (BountyStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;

require = fn;
function resetStateForDeliveredBounties(items) {
  set = new Set(set);
  map = new Map(map);
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (set.delete(nextResult)) {
      let deleteResult = map.delete(tmp2);
    }
    continue;
  }
}
let c2 = false;
let closure_3 = [];
new Set();
let set = new Set();
new Map();
let set1 = new Set();
let map = new Map();
const Store = initializeDefault.Store;
class BountyStore extends Store {
}
const prototype = BountyStore.prototype;
Object.defineProperty(prototype, "isFetchingQuestHomeBounties", {
  get: function isFetchingQuestHomeBounties() {
    return c2;
  },
  set: undefined
});
Object.defineProperty(prototype, "questHomeBounties", {
  get: function questHomeBounties() {
    return closure_3;
  },
  set: undefined
});
prototype["isBountyCompleted"] = function isBountyCompleted(id) {
  return set.has(id);
};
prototype["getCompletedBountyCount"] = function getCompletedBountyCount(arg0) {
  let num = 0;
  while (tmp !== undefined) {
    if (set.has(tmp2.id)) {
      num = num + 1;
    }
    continue;
  }
  return num;
};
prototype["isClaimingBountyReward"] = function isClaimingBountyReward(bountyId) {
  return set.has(bountyId);
};
prototype["areAllBountiesCompleted"] = function areAllBountiesCompleted() {
  return closure_3.every((id) => set.has(id.id));
};
prototype["getAdDecisionByPlacementAndAdCreativeId"] = function getAdDecisionByPlacementAndAdCreativeId(questPlacementFromQuestContent, bountyId) {
  value = map.get(questPlacementFromQuestContent);
  value2 = undefined;
  if (value != null) {
    value2 = value.get(bountyId);
  }
  if (value2 == null) {
    value2 = null;
  }
  return value2;
};
prototype["getBountyVideoProgress"] = function getBountyVideoProgress(bountyId) {
  value = map.get(bountyId);
  if (value == null) {
    value = null;
  }
  return value;
};
BountyStore.displayName = "BountyStore";
const bountyStore = new BountyStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    c2 = false;
    closure_3 = [];
    new Set();
    set = new Set();
    new Map();
    const set1 = new Set();
    map = new Map();
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: function handleFetchQuestHomeBountiesBegin() {
    c2 = true;
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: function handleFetchQuestHomeBountiesSuccess(bounties) {
    bounties = bounties.bounties;
    c2 = false;
    closure_3 = bounties;
    ({ placement, adDecisionsByAdCreativeId } = bounties);
    resetStateForDeliveredBounties(bounties.map((id) => id.id));
    map = new Map(map);
    const result = map.set(placement, adDecisionsByAdCreativeId);
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: function handleFetchQuestHomeBountiesFailure(placement) {
    c2 = false;
    closure_3 = [];
    map = new Map(map);
    map.delete(placement.placement);
  },
  QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function handleFetchQuestToDeliverSuccess(creative) {
    creative = creative.creative;
    let type;
    if (creative != null) {
      type = creative.type;
    }
    if (type !== AdCreativeType.AdCreativeType.BOUNTY) {
      return false;
    } else {
      const items = [creative.bounty.id];
      resetStateForDeliveredBounties(items);
    }
  },
  BOUNTIES_CLAIM_REWARD_BEGIN: function handleClaimBountyRewardBegin(bountyId) {
    set = new Set(set);
    set.add(bountyId.bountyId);
  },
  BOUNTIES_CLAIM_REWARD_SUCCESS: function handleClaimBountyRewardSuccess(bountyId) {
    bountyId = bountyId.bountyId;
    set = new Set(set);
    set.delete(bountyId);
    const set1 = new Set(set);
    set1.add(bountyId);
    set = set1;
  },
  BOUNTIES_CLAIM_REWARD_FAILURE: function handleClaimBountyRewardFailure(bountyId) {
    set = new Set(set);
    set.delete(bountyId.bountyId);
  },
  BOUNTIES_VIDEO_PROGRESS_UPDATE: function handleBountyVideoProgressUpdate(arg0) {
    ({ bountyId, timestampSec, maxTimestampSec, duration } = arg0);
    map = new Map(map);
    const result = map.set(bountyId, { timestampSec, maxTimestampSec, duration });
  },
  AD_SESSION_RESET: function handleAdSessionReset() {
    map = new Map();
  },
  ADS_CREATIVE_PREVIEW_DELIVERY_STATE_RESET: function handleAdsCreativePreviewDeliveryStateReset(adCreativeId) {
    adCreativeId = adCreativeId.adCreativeId;
    const hasItem = set.has(adCreativeId);
    const hasItem1 = map.has(adCreativeId);
    if (!hasItem) {
      if (!hasItem1) {
        return false;
      }
    }
    if (hasItem) {
      const _Set = Set;
      set = new Set(set);
      set.delete(adCreativeId);
    }
    if (hasItem1) {
      const _Map = Map;
      map = new Map(map);
      map.delete(adCreativeId);
    }
  },
  ADS_PREVIEW_DELIVERY_STATE_LOOKBACK_RESET: function handleAdsPreviewDeliveryStateLookbackReset() {
    if (0 === set.size) {
      if (0 === map.size) {
        return false;
      }
    }
    set = new Set();
    map = new Map();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/BountyStore.tsx");

export default bountyStore;