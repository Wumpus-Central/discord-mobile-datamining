// discord_app/modules/quests/BountyStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

let c0 = false;
let closure_1 = [];
let set = new Set();
let set1 = new Set();
let map = new Map();
let map1 = new Map();
const Store = initializeDefault.Store;
class BountyStore extends Store {
}
const prototype = BountyStore.prototype;
Object.defineProperty(prototype, "isFetchingQuestHomeBounties", {
  get: function isFetchingQuestHomeBounties() {
    return c0;
  },
  set: undefined
});
Object.defineProperty(prototype, "questHomeBounties", {
  get: function questHomeBounties() {
    return closure_1;
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
prototype["isClaimingBountyReward"] = function isClaimingBountyReward(closure_0) {
  return set1.has(closure_0);
};
prototype["areAllBountiesCompleted"] = function areAllBountiesCompleted() {
  return closure_1.every((item, index) => set.has(item.id));
};
prototype["getAdDecisionByPlacementAndAdCreativeId"] = function getAdDecisionByPlacementAndAdCreativeId(arg0, adContentId) {
  map.get(arg0);
  let value;
  if (value != null) {
    value = value.get(adContentId);
  }
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getBountyVideoProgress"] = function getBountyVideoProgress(id) {
  let value = map1.get(id);
  if (value == null) {
    value = null;
  }
  return value;
};
BountyStore.displayName = "BountyStore";
const bountyStore = new BountyStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    c0 = false;
    closure_1 = [];
    set = new Set();
    set1 = new Set();
    map = new Map();
    map1 = new Map();
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: function handleFetchQuestHomeBountiesBegin() {
    c0 = true;
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: function handleFetchQuestHomeBountiesSuccess(bounties) {
    c0 = false;
    bounties = bounties.bounties;
    ({ placement, adDecisionsByAdCreativeId } = bounties);
    set = new Set();
    map = new Map();
    map1 = new Map(map1);
    const result = map1.set(placement, adDecisionsByAdCreativeId);
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: function handleFetchQuestHomeBountiesFailure(placement) {
    c0 = false;
    closure_1 = [];
    set = new Set();
    map = new Map(map);
    map.delete(placement.placement);
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
let result = require("obj132").fileFinishedImporting("modules/quests/BountyStore.tsx");

export default bountyStore;