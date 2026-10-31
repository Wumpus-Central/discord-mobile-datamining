// === Module 15625: OrbChallengesStore ===

// Module 15625 (OrbChallengesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import OrbChallengeTypes from "OrbChallengeTypes" /* 15626 */;
import OrbChallengeActionCreators from "OrbChallengeActionCreators" /* 15627 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
function constructOrbChallengeItemFromUserAchievement(achievementIdentifier) {
  return { achievementIdentifier: achievementIdentifier.achievement_identifier, achievementDefinitionId: String(achievementIdentifier.achievement_definition_id), title: achievementIdentifier.title, orbRewardAmount: achievementIdentifier.reward_amount, achievementStatus: achievementIdentifier.status };
}
const items = [null, fn(15626).UserAchievementStatus.NONE, fn(15626).UserAchievementStatus.IN_PROGRESS, fn(15626).UserAchievementStatus.ELIGIBLE, fn(15626).UserAchievementStatus.COMPLETED];
const set = new Set(items);
const ClientUnreadNotificationType = { NEW_ACHIEVEMENT: "new_achievement", UNCLAIMED_ACHIEVEMENT: "unclaimed_achievement" };
let obj2 = { CLAIM_CHALLENGE: "claim_challenge", FETCH_CHALLENGES: "fetch_challenges" };
const Store = initializeDefault.Store;
class OrbChallengesStore extends Store {
  constructor() {
    closure_0 = undefined;
    obj = {
      ORB_CHALLENGES_LIST_FETCH(arg0) {
            return closure_0.handleOrbChallengesFetchStart(arg0);
          },
      ORB_CHALLENGES_LIST_FETCH_SUCCESS(response) {
            return closure_0.handleOrbChallengesFetchSuccess(response);
          },
      ORB_CHALLENGES_LIST_FETCH_FAIL(error) {
            return closure_0.handleOrbChallengesFetchFail(error);
          },
      ORB_CHALLENGES_UNREAD_UPDATE(achievementUnreadState) {
            return closure_0.handleUnreadUpdate(achievementUnreadState);
          },
      ORB_CHALLENGES_UNREAD_ACK() {
            return closure_0.handleUnreadAck();
          },
      ORB_CHALLENGE_CLAIM(achievementIdentifier) {
            return closure_0.handleOrbChallengeClaim(achievementIdentifier);
          },
      ORB_CHALLENGE_CLAIM_SUCCESS(achievementIdentifier) {
            return closure_0.handleOrbChallengeClaimSuccess(achievementIdentifier);
          },
      ORB_CHALLENGE_CLAIM_FAIL(achievementIdentifier) {
            return closure_0.handleOrbChallengeClaimFail(achievementIdentifier);
          },
      USER_DISCORD_ACHIEVEMENT_STATE_UPDATE(payload) {
            return closure_0.handleUserAchievementStateUpdate(payload);
          },
      CURRENT_USER_UPDATE() {
            return closure_0.handleCurrentUserPremiumTypeChange();
          },
      UPDATE_CLIENT_PREMIUM_TYPE() {
            return closure_0.handleCurrentUserPremiumTypeChange();
          },
      LOGIN_SUCCESS() {
            return closure_0.handleReset();
          },
      CONNECTION_OPEN() {
            return closure_0.handleConnectionOpen();
          }
    };
    tmp21 = new tmp2(closure_1(closure_2[3]), obj, new.target, tmp2, tmp, new.target);
    closure_0 = tmp21;
    tmp21.state = { challenges: [], isFetchingChallenges: false, hasFetchedChallenges: false, fetchChallengesError: null, isClaimingChallengeMap: {}, claimChallengeErrorMap: {}, orbRewardMultiplier: null, nitroGatedOrbMultiplier: null, achievementUnreadState: null, lastFetchedPremiumType: "flexDirection", userOpenedWalletViaProfileDCF: "bindOpenGdmCustomizeActionSheet" };
    return tmp21;
  }
}
const prototype = OrbChallengesStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["handleCurrentUserPremiumTypeChange"] = function handleCurrentUserPremiumTypeChange() {
  const currentUser = UserStore.getCurrentUser();
  if (null == currentUser) {
    return false;
  } else {
    const self = this;
    const premiumType = currentUser.premiumType;
    const hasFetchedChallenges = this.state.hasFetchedChallenges;
    let tmp2 = !hasFetchedChallenges;
    if (hasFetchedChallenges) {
      tmp2 = premiumType === self.state.lastFetchedPremiumType;
    }
    let flag = !tmp2;
    if (!tmp2) {
      self.state.lastFetchedPremiumType = premiumType;
      flag = false;
      if (!self.state.isFetchingChallenges) {
        const orbChallenges = OrbChallengeActionCreators.fetchOrbChallenges();
        flag = false;
      }
    }
    return flag;
  }
};
prototype["handleReset"] = function handleReset() {
  this.state = { challenges: [], isFetchingChallenges: false, hasFetchedChallenges: false, fetchChallengesError: null, isClaimingChallengeMap: {}, claimChallengeErrorMap: {}, orbRewardMultiplier: null, nitroGatedOrbMultiplier: null, achievementUnreadState: null, lastFetchedPremiumType: "flexDirection", userOpenedWalletViaProfileDCF: "bindOpenGdmCustomizeActionSheet" };
};
prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  const hasFetchedChallenges = this.state.hasFetchedChallenges;
  let isFetchingChallenges = !hasFetchedChallenges;
  if (hasFetchedChallenges) {
    isFetchingChallenges = this.state.isFetchingChallenges;
  }
  if (!isFetchingChallenges) {
    const orbChallenges = OrbChallengeActionCreators.fetchOrbChallenges();
  }
  return false;
};
prototype["handleOrbChallengesFetchStart"] = function handleOrbChallengesFetchStart(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const self = this;
    this.state.isFetchingChallenges = true;
    this.state.fetchChallengesError = null;
  }
};
prototype["setAchievementUnreadState"] = function setAchievementUnreadState(arg0) {
  let prop = this.state.achievementUnreadState;
  if (prop == null) {
    prop = { has_unread_new_achievement: false, has_unclaimed_achievements: false };
  }
  const achievementUnreadState = {};
  const merged = Object.assign(prop);
  const merged1 = Object.assign(arg0);
  this.state.achievementUnreadState = achievementUnreadState;
};
prototype["handleOrbChallengesFetchSuccess"] = function handleOrbChallengesFetchSuccess(response) {
  response = response.response;
  const achievements = response.achievements;
  this.state.challenges = achievements.map(constructOrbChallengeItemFromUserAchievement);
  ({ orb_multiplier: this.state.orbRewardMultiplier, nitro_gated_orb_multiplier: this.state.nitroGatedOrbMultiplier } = response);
  const result = this.setAchievementUnreadState({ has_unclaimed_achievements: response.has_unclaimed_achievements });
  this.state.hasFetchedChallenges = true;
  this.state.isFetchingChallenges = false;
  const currentUser = UserStore.getCurrentUser();
  let premiumType = null;
  if (null != currentUser) {
    premiumType = currentUser.premiumType;
  }
  this.state.lastFetchedPremiumType = premiumType;
};
prototype["handleUnreadUpdate"] = function handleUnreadUpdate(achievementUnreadState) {
  this.state.achievementUnreadState = achievementUnreadState.achievementUnreadState;
};
prototype["handleUnreadAck"] = function handleUnreadAck() {
  const result = this.setAchievementUnreadState({ has_unread_new_achievement: false });
};
prototype["handleOrbChallengesFetchFail"] = function handleOrbChallengesFetchFail(error) {
  this.state.fetchChallengesError = error.error;
  this.state.isFetchingChallenges = false;
};
prototype["handleOrbChallengeClaim"] = function handleOrbChallengeClaim(achievementIdentifier) {
  achievementIdentifier = achievementIdentifier.achievementIdentifier;
  this.state.isClaimingChallengeMap[achievementIdentifier] = true;
  this.state.claimChallengeErrorMap[achievementIdentifier] = null;
};
prototype["handleOrbChallengeClaimSuccess"] = function handleOrbChallengeClaimSuccess(achievementIdentifier) {
  achievementIdentifier = achievementIdentifier.achievementIdentifier;
  const response = achievementIdentifier.response;
  this.state.isClaimingChallengeMap[achievementIdentifier] = false;
  this.state.claimChallengeErrorMap[achievementIdentifier] = null;
  const challenges = this.state.challenges;
  this.state.challenges = challenges.map((achievementIdentifier) => {
    let tmp = achievementIdentifier;
    if (achievementIdentifier.achievementIdentifier === achievementIdentifier) {
      obj = { achievementIdentifier: response.achievement_identifier, achievementDefinitionId: null, title: null, orbRewardAmount: null, achievementStatus: null };
      const _String = String;
      obj.achievementDefinitionId = String(response.achievement_definition_id);
      ({ title: obj.title, reward_amount: obj.orbRewardAmount, status: obj.achievementStatus } = response);
      tmp = obj;
    }
    return tmp;
  });
};
prototype["handleOrbChallengeClaimFail"] = function handleOrbChallengeClaimFail(achievementIdentifier) {
  achievementIdentifier = achievementIdentifier.achievementIdentifier;
  this.state.isClaimingChallengeMap[achievementIdentifier] = false;
  this.state.claimChallengeErrorMap[achievementIdentifier] = achievementIdentifier.error;
};
prototype["handleUserAchievementStateUpdate"] = function handleUserAchievementStateUpdate(payload) {
  payload = payload.payload;
  const orbChallenges = OrbChallengeActionCreators.fetchOrbChallenges();
  if ("achievement_completed" !== payload.type) {
    const type = payload.type;
    return false;
  } else {
    const self = this;
    const result = this.setAchievementUnreadState({ has_unclaimed_achievements: true });
  }
};
prototype["setUserOpenedWalletViaProfileDCF"] = function setUserOpenedWalletViaProfileDCF(userOpenedWalletViaProfileDCF) {
  this.state.userOpenedWalletViaProfileDCF = userOpenedWalletViaProfileDCF;
};
Object.defineProperty(prototype, "orbChallengesDisplayError", {
  get: function orbChallengesDisplayError() {
    const state = this.state;
    const fetchChallengesError = state.fetchChallengesError;
    const values = Object.values(state.claimChallengeErrorMap);
    const found = values.find((item) => null != item);
    if (null != found) {
      obj2 = { error: found, errorType: null };
      obj2.errorType = obj2.CLAIM_CHALLENGE;
      let tmp2 = obj2;
    } else {
      tmp2 = null;
      if (null != fetchChallengesError) {
        obj = { error: fetchChallengesError, errorType: obj2.FETCH_CHALLENGES };
        tmp2 = obj;
      }
    }
    return tmp2;
  },
  set: undefined
});
Object.defineProperty(prototype, "userOpenedWalletViaProfileDCF", {
  get: function userOpenedWalletViaProfileDCF() {
    return this.state.userOpenedWalletViaProfileDCF;
  },
  set: undefined
});
Object.defineProperty(prototype, "orbRewardMultiplier", {
  get: function orbRewardMultiplier() {
    return this.state.orbRewardMultiplier;
  },
  set: undefined
});
Object.defineProperty(prototype, "nitroGatedOrbMultiplier", {
  get: function nitroGatedOrbMultiplier() {
    return this.state.nitroGatedOrbMultiplier;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasUnclaimedAchievements", {
  get: function hasUnclaimedAchievements() {
    const state = this.state;
    if (this.state.hasFetchedChallenges) {
      const challenges = state.challenges;
      let someResult = challenges.some((achievementStatus) => achievementStatus.achievementStatus === OrbChallengeTypes.UserAchievementStatus.COMPLETED);
    } else {
      someResult = null != state.achievementUnreadState && tmp.state.achievementUnreadState.has_unclaimed_achievements;
    }
    return someResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "clientUnreadNotificationType", {
  get: function clientUnreadNotificationType() {
    const self = this;
    if (null === this.state.achievementUnreadState) {
      return null;
    } else if (self.state.achievementUnreadState.has_unread_new_achievement) {
      let NEW_ACHIEVEMENT = obj.NEW_ACHIEVEMENT;
    } else {
      NEW_ACHIEVEMENT = null;
      if (self.hasUnclaimedAchievements) {
        NEW_ACHIEVEMENT = obj.UNCLAIMED_ACHIEVEMENT;
      }
    }
  },
  set: undefined
});
Object.defineProperty(prototype, "hasUnreadUpdate", {
  get: function hasUnreadUpdate() {
    return null != this.clientUnreadNotificationType;
  },
  set: undefined
});
Object.defineProperty(prototype, "challenges", {
  get: function challenges() {
    return this.state.challenges;
  },
  set: undefined
});
Object.defineProperty(prototype, "challengesForOrbWallet", {
  get: function challengesForOrbWallet() {
    const challenges = this.state.challenges;
    return challenges.filter((achievementStatus) => set.has(achievementStatus.achievementStatus));
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchedChallenges", {
  get: function hasFetchedChallenges() {
    return this.state.hasFetchedChallenges;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingChallenges", {
  get: function isFetchingChallenges() {
    return this.state.isFetchingChallenges;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchChallengesError", {
  get: function fetchChallengesError() {
    return this.state.fetchChallengesError;
  },
  set: undefined
});
OrbChallengesStore.displayName = "OrbChallengesStore";
const orbChallengesStore = new OrbChallengesStore();
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/stores/OrbChallengesStore.tsx");

export default orbChallengesStore;
export { ClientUnreadNotificationType };
export const OrbChallengesDisplayErrorType = obj2;