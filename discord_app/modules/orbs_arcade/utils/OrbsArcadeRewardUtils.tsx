// === Module 19096: OrbsArcadeRewardUtils ===

// Module 19096 (OrbsArcadeRewardUtils)
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 19094 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/utils/OrbsArcadeRewardUtils.tsx");

export const getOrbsArcadeRewardStatus = function getOrbsArcadeRewardStatus(arg0, arg1) {
  let tmp;
  if (arg1 != null) {
    tmp = arg1.rewardGrants[arg0];
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
};
export const getOrbsArcadeFocusedReward = function getOrbsArcadeFocusedReward(arg0, arg1) {
  closure_0 = arg1;
  const items = [...arg0];
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
};
export const getOrbsArcadeClaimableRewards = function getOrbsArcadeClaimableRewards(arr, arg1) {
  closure_0 = arg1;
  const found = arr.filter((item) => {
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
};
export const hasOrbsArcadeUnclaimedRewards = function hasOrbsArcadeUnclaimedRewards(gameState) {
  const values = Object.values(gameState.rewardGrants);
  return values.some((pendingAt) => null != pendingAt.pendingAt && null == pendingAt.claimedAt);
};
export const isOrbsArcadeEnrollmentOver = function isOrbsArcadeEnrollmentOver(gameStateForGame) {
  let tmp = null != gameStateForGame.expiresAt;
  if (tmp) {
    const _Date = Date;
    const _Date2 = Date;
    const parsed = Date.parse(gameStateForGame.expiresAt);
    tmp = parsed <= Date.now();
  }
  if (tmp) {
    const _Object = Object;
    const values = Object.values(gameStateForGame.rewardGrants);
    tmp = !values.some((pendingAt) => null != pendingAt.pendingAt && null == pendingAt.claimedAt);
  }
  return tmp;
};