// === Module 7774: BountyStore ===

// Module 7774 (BountyStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AdCreativeType from "AdCreativeType" /* 5502 */;

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
let set = new Set();
let set1 = new Set();
set = set1;
new Map();
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
  return set1.has(id);
};
prototype["getCompletedBountyCount"] = function getCompletedBountyCount(arg0) {
  let num = 0;
  while (tmp !== undefined) {
    if (set1.has(tmp2.id)) {
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
  map.get(questPlacementFromQuestContent);
  value = undefined;
  if (value != null) {
    value = value.get(bountyId);
  }
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getBountyVideoProgress"] = function getBountyVideoProgress(id) {
  value = map.get(id);
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
    set = new Set();
    set1 = new Set();
    set = set1;
    new Map();
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
    set1 = new Set(set1);
    set1.add(bountyId);
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
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/BountyStore.tsx");

export default bountyStore;