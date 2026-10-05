// === Module 7186: BountyStore ===

// Module 7186 (BountyStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import size from "module_2" /* 2 */;

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
let bounties = [];
new Set();
let set1 = new Set();
let set = set1;
new Map();
const map1 = new Map();
let map = map1;
const Store = get_initializedDefault.Store;
class BountyStore extends Store {
  isBountyCompleted(id) {
    return set.has(id);
  }
  getCompletedBountyCount(first1) {
    let num = 0;
    const tmp = first1[Symbol.iterator]();
    while (tmp !== undefined) {
      if (set.has(tmp2.id)) {
        num = num + 1;
      }
      continue;
    }
    return num;
  }
  isClaimingBountyReward(bountyId) {
    return set.has(bountyId);
  }
  areAllBountiesCompleted() {
    return bounties.every((id) => set.has(id.id));
  }
  getAdDecisionByPlacementAndAdCreativeId(questPlacementFromQuestContent, bountyId) {
    const value = map.get(questPlacementFromQuestContent);
    let value2;
    if (value != null) {
      value2 = value.get(bountyId);
    }
    if (value2 == null) {
      value2 = null;
    }
    return value2;
  }
  getBountyVideoProgress(bountyId) {
    let value = map.get(bountyId);
    if (value == null) {
      value = null;
    }
    return value;
  }
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
    return bounties;
  },
  set: undefined
});
BountyStore.displayName = "BountyStore";
const obj = {
  LOGOUT: function handleLogout() {
    c2 = false;
    bounties = [];
    new Set();
    new Set();
    new Set();
    new Map();
    new Map();
    new Map();
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN: function handleFetchQuestHomeBountiesBegin() {
    c2 = true;
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS: function handleFetchQuestHomeBountiesSuccess(bounties) {
    let adDecisionsByAdCreativeId;
    let placement;
    bounties = bounties.bounties;
    c2 = false;
    ({ placement, adDecisionsByAdCreativeId } = bounties);
    resetStateForDeliveredBounties(bounties.map((id) => id.id));
    map = new Map(map);
    const result = map.set(placement, adDecisionsByAdCreativeId);
  },
  BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE: function handleFetchQuestHomeBountiesFailure(placement) {
    c2 = false;
    bounties = [];
    placement = placement.placement;
    map = new Map(map);
    map.delete(placement);
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
    bountyId = bountyId.bountyId;
    set = new Set(set);
    set.add(bountyId);
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
    bountyId = bountyId.bountyId;
    set = new Set(set);
    set.delete(bountyId);
  },
  BOUNTIES_VIDEO_PROGRESS_UPDATE: function handleBountyVideoProgressUpdate(arg0) {
    let bountyId;
    let duration;
    let maxTimestampSec;
    let timestampSec;
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
      const self = this;
      const self2 = this;
      set = new Set(set);
      set.delete(adCreativeId);
    }
    if (hasItem1) {
      const _Map = Map;
      const self3 = this;
      const self4 = this;
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
};
const bountyStore = new BountyStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/quests/BountyStore.tsx");

export default bountyStore;