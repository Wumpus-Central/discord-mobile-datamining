// === Module 1390: OverridePremiumTypeStore ===

// Module 1390 (OverridePremiumTypeStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PerksStateUtils from "PerksStateUtils" /* 1395 */;
import UserStoreUtils from "UserStoreUtils" /* 1400 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function setActualFromUser(user) {
  user = user.user;
  if ("CURRENT_USER_UPDATE" !== user.type) {
    closure_5.premiumTypeActual = UserStoreUtils.getPremiumTypeFromRawValue(user.premium_type);
  }
  const user2 = user.user;
  if ("CURRENT_USER_UPDATE" !== user.type) {
    const perks = user2.perks;
    let tmp5 = null;
    if (null != perks) {
      let parseServerPerksResult = perks;
      if (!("activePerksBitmask" in perks)) {
        parseServerPerksResult = PerksStateUtils.parseServerPerks(perks);
      }
      tmp5 = parseServerPerksResult;
    }
    closure_5.perksActual = tmp5;
  }
  if (false === flag) {
    if (false === flag2) {
      return false;
    }
  }
}
const PremiumConstants = fn(1391);
const UNSELECTED_CREATED_AT_DATE = PremiumConstants.UNSELECTED_CREATED_AT_DATE;
const UNSELECTED_PREMIUM_TYPE_OVERRIDE = PremiumConstants.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
let closure_5 = { premiumTypeOverride: UNSELECTED_PREMIUM_TYPE_OVERRIDE, premiumTypeActual: UNSELECTED_PREMIUM_TYPE_OVERRIDE, createdAtOverride: UNSELECTED_CREATED_AT_DATE, perksActual: null };
const PersistedStore = initializeDefault.PersistedStore;
class OverridePremiumTypeStore extends PersistedStore {
}
const prototype = OverridePremiumTypeStore.prototype;
prototype["initialize"] = function initialize(premiumTypeActual) {
  this.waitFor(AuthenticationStore);
  if (null != premiumTypeActual) {
    premiumTypeActual = undefined;
    if (premiumTypeActual != null) {
      premiumTypeActual = premiumTypeActual.premiumTypeActual;
    }
    closure_5.premiumTypeActual = premiumTypeActual;
    let premiumTypeOverride;
    if (premiumTypeActual != null) {
      premiumTypeOverride = premiumTypeActual.premiumTypeOverride;
    }
    closure_5.premiumTypeOverride = premiumTypeOverride;
    let perksActual;
    if (premiumTypeActual != null) {
      perksActual = premiumTypeActual.perksActual;
    }
    if (perksActual == null) {
      perksActual = null;
    }
    closure_5.perksActual = perksActual;
    if (null != premiumTypeActual.createdAtOverride) {
      const _Date = Date;
      const date = new Date(premiumTypeActual.createdAtOverride);
      closure_5.createdAtOverride = date;
    } else {
      closure_5.createdAtOverride = UNSELECTED_CREATED_AT_DATE;
    }
  } else {
    closure_5.premiumTypeOverride = UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    closure_5.createdAtOverride = UNSELECTED_CREATED_AT_DATE;
  }
};
prototype["getPremiumTypeOverride"] = function getPremiumTypeOverride() {
  return closure_5.premiumTypeOverride;
};
prototype["hasPremiumTypeOverride"] = function hasPremiumTypeOverride(id) {
  let isStaffEnvResult = closure_5.premiumTypeOverride !== UNSELECTED_PREMIUM_TYPE_OVERRIDE;
  if (isStaffEnvResult) {
    isStaffEnvResult = null != id;
  }
  if (isStaffEnvResult) {
    isStaffEnvResult = id.id === AuthenticationStore.getId();
  }
  if (isStaffEnvResult) {
    isStaffEnvResult = UserStoreUtils.isStaffEnv(id);
  }
  return isStaffEnvResult;
};
prototype["getPremiumTypeActual"] = function getPremiumTypeActual() {
  return closure_5.premiumTypeActual;
};
prototype["getPerksActual"] = function getPerksActual() {
  return closure_5.perksActual;
};
prototype["getCreatedAtOverride"] = function getCreatedAtOverride() {
  return closure_5.createdAtOverride;
};
prototype["getState"] = function getState() {
  return closure_5;
};
Object.defineProperty(prototype, "premiumType", {
  get: function premiumType() {
    return closure_5.premiumTypeOverride;
  },
  set: undefined
});
OverridePremiumTypeStore.displayName = "OverridePremiumTypeStore";
OverridePremiumTypeStore.persistKey = "OverridePremiumTypeStore";
const items = [
  (createdAtOverride) => {
    createdAtOverride = undefined;
    if (createdAtOverride != null) {
      createdAtOverride = createdAtOverride.createdAtOverride;
    }
    if (null == createdAtOverride) {
      const obj = {};
      const merged = Object.assign(createdAtOverride);
      obj.createdAtOverride = UNSELECTED_CREATED_AT_DATE;
      return obj;
    }
  }
];
OverridePremiumTypeStore.migrations = items;
const overridePremiumTypeStore = new OverridePremiumTypeStore(DispatcherDefault, {
  SET_PREMIUM_TYPE_OVERRIDE: function setPremiumTypeOverride(premiumType) {
    closure_5.premiumTypeOverride = premiumType.premiumType;
  },
  SET_CREATED_AT_OVERRIDE: function setCreatedAtOverride(createdAt) {
    closure_5.createdAtOverride = createdAt.createdAt;
  },
  CURRENT_USER_UPDATE: setActualFromUser,
  CONNECTION_OPEN: setActualFromUser
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/OverridePremiumTypeStore.tsx");

export default overridePremiumTypeStore;