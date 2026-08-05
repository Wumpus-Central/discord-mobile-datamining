// discord_app/modules/premium/OverridePremiumTypeStore.tsx
import GuildFeatures from "GuildFeatures";
import { PersistedStore } from "initialize";

function setPremiumTypeActual(user) {
  closure_4.premiumTypeActual = require("../user/UserStoreUtils.tsx") /* validatePremiumType */.getPremiumTypeFromRawValue(user.user.premium_type);
}
const UNSELECTED_CREATED_AT_DATE = GuildFeatures.UNSELECTED_CREATED_AT_DATE;
const UNSELECTED_PREMIUM_TYPE_OVERRIDE = GuildFeatures.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
let closure_4 = { premiumTypeOverride: UNSELECTED_PREMIUM_TYPE_OVERRIDE, premiumTypeActual: UNSELECTED_PREMIUM_TYPE_OVERRIDE, createdAtOverride: UNSELECTED_CREATED_AT_DATE };
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
const overridePremiumTypeStore = new OverridePremiumTypeStore(require("dispatcher"), {
  SET_PREMIUM_TYPE_OVERRIDE: function setPremiumTypeOverride(premiumType) {
    closure_4.premiumTypeOverride = premiumType.premiumType;
  },
  SET_CREATED_AT_OVERRIDE: function setCreatedAtOverride(createdAt) {
    closure_4.createdAtOverride = createdAt.createdAt;
  },
  CURRENT_USER_UPDATE: setPremiumTypeActual,
  CONNECTION_OPEN: setPremiumTypeActual
});
const result = require("initialize").fileFinishedImporting("modules/premium/OverridePremiumTypeStore.tsx");

export default overridePremiumTypeStore;