// discord_app/modules/orbs_arcade/utils/OrbsArcadeRewardUtils.tsx
import util from "../../../intl/index.native.tsx";
import OrbsArcadeTypes from "../OrbsArcadeTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/orbs_arcade/utils/OrbsArcadeRewardUtils.tsx");

export function getOrbsArcadeRewardStatus(id, gameState) {
  let tmp;
  if (gameState != null) {
    tmp = gameState.rewardGrants[id];
  }
  let claimedAt;
  if (tmp != null) {
    claimedAt = tmp.claimedAt;
  }
  if (null != claimedAt) {
    let LOCKED = OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMED;
  } else {
    let pendingAt;
    if (tmp != null) {
      pendingAt = tmp.pendingAt;
    }
    if (null != pendingAt) {
      LOCKED = OrbsArcadeTypes.OrbsArcadeRewardStatus.CLAIMABLE;
    } else {
      LOCKED = OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED;
    }
  }
  return LOCKED;
}
export function getOrbsArcadeFocusedReward(rewards, stateFromStores) {
  closure_0 = stateFromStores;
  const items = [...rewards];
  const sorted = items.sort((scoreTarget, scoreTarget2) => scoreTarget.scoreTarget - scoreTarget2.scoreTarget);
  return sorted.find((item) => {
    let claimedAt;
    if (closure_0 != null) {
      if (tmp.rewardGrants[item.id] != null) {
        claimedAt = tmp4.claimedAt;
      }
    }
    return null == claimedAt;
  });
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
export function mustClaimOrbsArcadeRewardsToPlay(stateFromStores) {
  let someResult = null != stateFromStores.expiresAt;
  if (someResult) {
    const _Date = Date;
    const _Date2 = Date;
    const parsed = Date.parse(stateFromStores.expiresAt);
    someResult = parsed <= Date.now();
  }
  if (someResult) {
    let rewardGrants;
    if (stateFromStores != null) {
      rewardGrants = stateFromStores.rewardGrants;
    }
    if (rewardGrants == null) {
      rewardGrants = {};
    }
    const values = Object.values(rewardGrants);
    someResult = values.some((pendingAt) => null != pendingAt.pendingAt && null == pendingAt.claimedAt);
  }
  return someResult;
}
export function getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus) {
  const intl = util.intl;
  if (orbsArcadeRewardStatus === OrbsArcadeTypes.OrbsArcadeRewardStatus.LOCKED) {
    let Q8Vv0m = util.t.XKyikw;
  } else {
    Q8Vv0m = util.t.Q8Vv0m;
  }
  return intl.formatToPlainString(Q8Vv0m, { score: reward.scoreTarget });
}
