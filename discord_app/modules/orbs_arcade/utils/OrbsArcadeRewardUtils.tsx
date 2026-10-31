// === Module 17017: OrbsArcadeRewardUtils ===

// Module 17017 (OrbsArcadeRewardUtils)
import util from "util" /* 1113 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 17011 */;
import size from "module_2" /* 2 */;

function getOrbsArcadeRewardStatus(reward, gameState, ownedRewardSkuIds) {
  let tmp;
  if (gameState != null) {
    tmp = gameState.rewardGrants[reward.id];
  }
  let claimedAt;
  if (tmp != null) {
    claimedAt = tmp.claimedAt;
  }
  if (null == claimedAt) {
    let pendingAt;
    if (gameState != null) {
      if (gameState.rewardGrants[reward.id] != null) {
        pendingAt = tmp3.pendingAt;
      }
    }
    let hasItem = null == pendingAt;
    if (hasItem) {
      hasItem = ownedRewardSkuIds.has(reward.skuId);
    }
    if (!hasItem) {
      let pendingAt1;
      if (tmp != null) {
        pendingAt1 = tmp.pendingAt;
      }
      if (null != pendingAt1) {
        let CLAIMED = OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMABLE;
      } else {
        CLAIMED = OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
      }
    }
    return CLAIMED;
  }
  CLAIMED = OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMED;
}
const result = size.fileFinishedImporting("modules/orbs_arcade/utils/OrbsArcadeRewardUtils.tsx");

export { getOrbsArcadeRewardStatus };
export function getOrbsArcadeFocusedReward(rewards, stateFromStores, stateFromStores1) {
  closure_0 = stateFromStores;
  closure_1 = stateFromStores1;
  const items = [...rewards];
  const sorted = items.sort((scoreTarget, scoreTarget2) => scoreTarget.scoreTarget - scoreTarget2.scoreTarget);
  return sorted.find((item) => getOrbsArcadeRewardStatus(item, closure_0, closure_1) !== OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMED);
}
export function getOrbsArcadeClaimableRewards(rewards, gameStateForGame) {
  closure_0 = gameStateForGame;
  const found = rewards.filter((item) => {
    let tmp2;
    if (closure_0 != null) {
      tmp2 = tmp.rewardGrants[item.id];
    }
    let pendingAt;
    if (tmp2 != null) {
      pendingAt = tmp2.pendingAt;
    }
    return null != pendingAt && null == tmp2.claimedAt;
  });
  return found.sort((scoreTarget, scoreTarget2) => scoreTarget.scoreTarget - scoreTarget2.scoreTarget);
}
export function hasOrbsArcadeUnlockedRewards(stateFromStores1) {
  let rewardGrants;
  if (stateFromStores1 != null) {
    rewardGrants = stateFromStores1.rewardGrants;
  }
  if (rewardGrants == null) {
    rewardGrants = {};
  }
  const values = Object.values(rewardGrants);
  return values.some((pendingAt) => null != pendingAt.pendingAt);
}
export function hasOrbsArcadeUnclaimedRewards(gameState) {
  let rewardGrants;
  if (gameState != null) {
    rewardGrants = gameState.rewardGrants;
  }
  if (rewardGrants == null) {
    rewardGrants = {};
  }
  const values = Object.values(rewardGrants);
  return values.some((pendingAt) => null != pendingAt.pendingAt && null == pendingAt.claimedAt);
}
export function isOrbsArcadeEnrollmentOver(gameStateForGame) {
  let tmp = null != gameStateForGame.expiresAt;
  if (tmp) {
    const _Date = Date;
    const _Date2 = Date;
    const parsed = Date.parse(gameStateForGame.expiresAt);
    tmp = parsed <= Date.now();
  }
  if (tmp) {
    let rewardGrants;
    if (gameStateForGame != null) {
      rewardGrants = gameStateForGame.rewardGrants;
    }
    if (rewardGrants == null) {
      rewardGrants = {};
    }
    const values = Object.values(rewardGrants);
    tmp = !values.some((pendingAt) => null != pendingAt.pendingAt && null == pendingAt.claimedAt);
  }
  return tmp;
}
export function mustClaimOrbsArcadeRewardsToPlay(gameStateForGame) {
  let someResult = null != gameStateForGame.expiresAt;
  if (someResult) {
    const _Date = Date;
    const _Date2 = Date;
    const parsed = Date.parse(gameStateForGame.expiresAt);
    someResult = parsed <= Date.now();
  }
  if (someResult) {
    let rewardGrants;
    if (gameStateForGame != null) {
      rewardGrants = gameStateForGame.rewardGrants;
    }
    if (rewardGrants == null) {
      rewardGrants = {};
    }
    const values = Object.values(rewardGrants);
    someResult = values.some((pendingAt) => null != pendingAt.pendingAt && null == pendingAt.claimedAt);
  }
  return someResult;
}
export function getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus, gameState, ownedRewardSkuIds) {
  let pendingAt;
  if (gameState != null) {
    if (gameState.rewardGrants[tmp] != null) {
      pendingAt = tmp3.pendingAt;
    }
  }
  let enrolledAt;
  if (gameState != null) {
    enrolledAt = gameState.enrolledAt;
  }
  let tmp5 = null != pendingAt && null != enrolledAt;
  if (tmp5) {
    const _Date = Date;
    const _Date2 = Date;
    const parsed = Date.parse(pendingAt);
    tmp5 = parsed < Date.parse(enrolledAt);
  }
  if (!tmp5) {
    let pendingAt1;
    if (gameState != null) {
      if (gameState.rewardGrants[reward.id] != null) {
        pendingAt1 = tmp9.pendingAt;
      }
    }
    let hasItem = null == pendingAt1;
    if (hasItem) {
      hasItem = ownedRewardSkuIds.has(reward.skuId);
    }
    if (!hasItem) {
      const intl = util.intl;
      if (orbsArcadeRewardStatus === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
        let Q8Vv0m = util.t.XKyikw;
      } else {
        Q8Vv0m = util.t.Q8Vv0m;
      }
      const obj = { score: reward.scoreTarget };
      let formatToPlainStringResult = intl.formatToPlainString(Q8Vv0m, obj);
    }
    return formatToPlainStringResult;
  }
  const intl2 = util.intl;
  formatToPlainStringResult = intl2.string(util.t.xdWlbE);
}