// discord_app/modules/premium/OverridePremiumTypeStore.tsx
import set from "../../../_runtime/00002_set.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import parseServerPerkConfigKind from "perks_state/PerksStateUtils.tsx";
import validatePremiumType from "../user/UserStoreUtils.tsx";
import GuildFeatures from "PremiumConstants.tsx";

function setActualFromUser(user) {
  user = user.user;
  if ("CURRENT_USER_UPDATE" !== user.type) {
    closure_4.premiumTypeActual = validatePremiumType.getPremiumTypeFromRawValue(user.premium_type);
    const obj = validatePremiumType;
  }
  const user2 = user.user;
  if ("CURRENT_USER_UPDATE" !== user.type) {
    const perks = user2.perks;
    let tmp5 = null;
    if (null != perks) {
      let parseServerPerksResult = perks;
      if (!("activePerksBitmask" in perks)) {
        parseServerPerksResult = parseServerPerkConfigKind.parseServerPerks(perks);
        const obj2 = parseServerPerkConfigKind;
      }
      tmp5 = parseServerPerksResult;
    }
    closure_4.perksActual = tmp5;
    const tmp4 = closure_4;
  }
  if (false === flag) {
    if (false === flag2) {
      return false;
    }
  }
}
const UNSELECTED_CREATED_AT_DATE = GuildFeatures.UNSELECTED_CREATED_AT_DATE;
const UNSELECTED_PREMIUM_TYPE_OVERRIDE = GuildFeatures.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
let closure_4 = { premiumTypeOverride: UNSELECTED_PREMIUM_TYPE_OVERRIDE, premiumTypeActual: UNSELECTED_PREMIUM_TYPE_OVERRIDE, createdAtOverride: UNSELECTED_CREATED_AT_DATE, perksActual: null };
const PersistedStore = initializeDefault.PersistedStore;
class OverridePremiumTypeStore extends PersistedStore {
}
const prototype = OverridePremiumTypeStore.prototype;
prototype["initialize"] = function initialize(premiumTypeActual) {
  if (null != premiumTypeActual) {
    premiumTypeActual = undefined;
    if (premiumTypeActual != null) {
      premiumTypeActual = premiumTypeActual.premiumTypeActual;
    }
    closure_4.premiumTypeActual = premiumTypeActual;
    let premiumTypeOverride;
    if (premiumTypeActual != null) {
      premiumTypeOverride = premiumTypeActual.premiumTypeOverride;
    }
    closure_4.premiumTypeOverride = premiumTypeOverride;
    let perksActual;
    if (premiumTypeActual != null) {
      perksActual = premiumTypeActual.perksActual;
    }
    if (perksActual == null) {
      perksActual = null;
    }
    closure_4.perksActual = perksActual;
    if (null != premiumTypeActual.createdAtOverride) {
      const _Date = Date;
      const date = new Date(premiumTypeActual.createdAtOverride);
      tmp4.createdAtOverride = date;
    } else {
      tmp4.createdAtOverride = UNSELECTED_CREATED_AT_DATE;
    }
  } else {
    closure_4.premiumTypeOverride = UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    closure_4.createdAtOverride = UNSELECTED_CREATED_AT_DATE;
  }
};
prototype["getPremiumTypeOverride"] = function getPremiumTypeOverride() {
  return closure_4.premiumTypeOverride;
};
prototype["getPremiumTypeActual"] = function getPremiumTypeActual() {
  return closure_4.premiumTypeActual;
};
prototype["getPerksActual"] = function getPerksActual() {
  return closure_4.perksActual;
};
prototype["getCreatedAtOverride"] = function getCreatedAtOverride() {
  return closure_4.createdAtOverride;
};
prototype["getState"] = function getState() {
  return closure_4;
};
Object.defineProperty(prototype, "premiumType", {
  get: function premiumType() {
    return closure_4.premiumTypeOverride;
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
const overridePremiumTypeStore = new OverridePremiumTypeStore(dispatcherDefault, {
  SET_PREMIUM_TYPE_OVERRIDE: function setPremiumTypeOverride(premiumType) {
    closure_4.premiumTypeOverride = premiumType.premiumType;
  },
  SET_CREATED_AT_OVERRIDE: function setCreatedAtOverride(createdAt) {
    closure_4.createdAtOverride = createdAt.createdAt;
  },
  CURRENT_USER_UPDATE: setActualFromUser,
  CONNECTION_OPEN: setActualFromUser
});
const result = set.fileFinishedImporting("modules/premium/OverridePremiumTypeStore.tsx");

export default overridePremiumTypeStore;