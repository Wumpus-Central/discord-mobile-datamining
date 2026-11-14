// discord_app/modules/hexagon_campaign/HexagonCampaignPersistedStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let obj = {
  hasAppliedPerk: false,
  hasVisitedDisplayNameStyles: false,
  previousPerkValues: {},
  hasRestoredExpiredClientTheme: false,
};
let closure_1 = obj;
const PersistedStore = initializeDefault.PersistedStore;
class HexagonCampaignPersistedStore extends PersistedStore {}
const prototype = HexagonCampaignPersistedStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(arg0);
    closure_1 = obj;
  }
};
prototype["getState"] = function getState() {
  return closure_1;
};
Object.defineProperty(prototype, "hasAppliedPerk", {
  get: function hasAppliedPerk() {
    return closure_1.hasAppliedPerk;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasVisitedDisplayNameStyles", {
  get: function hasVisitedDisplayNameStyles() {
    return closure_1.hasVisitedDisplayNameStyles;
  },
  set: undefined,
});
Object.defineProperty(prototype, "previousPerkValues", {
  get: function previousPerkValues() {
    return closure_1.previousPerkValues;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasRestoredExpiredClientTheme", {
  get: function hasRestoredExpiredClientTheme() {
    return closure_1.hasRestoredExpiredClientTheme;
  },
  set: undefined,
});
HexagonCampaignPersistedStore.displayName = "HexagonCampaignPersistedStore";
HexagonCampaignPersistedStore.persistKey = "HexagonCampaignPersistedStore";
const items = [
  (hasVisitedDisplayNameStyles) => {
    obj = {};
    const merged = Object.assign(hasVisitedDisplayNameStyles);
    let flag;
    if (hasVisitedDisplayNameStyles != null) {
      flag = hasVisitedDisplayNameStyles.hasVisitedDisplayNameStyles;
    }
    if (flag == null) {
      flag = false;
    }
    obj.hasVisitedDisplayNameStyles = flag;
    return obj;
  },
  (previousPerkValues) => {
    obj = {};
    const merged = Object.assign(previousPerkValues);
    previousPerkValues = undefined;
    if (previousPerkValues != null) {
      previousPerkValues = previousPerkValues.previousPerkValues;
    }
    if (previousPerkValues == null) {
      previousPerkValues = {};
    }
    obj.previousPerkValues = previousPerkValues;
    return obj;
  },
  (hasRestoredExpiredClientTheme) => {
    obj = {};
    const merged = Object.assign(hasRestoredExpiredClientTheme);
    let flag;
    if (hasRestoredExpiredClientTheme != null) {
      flag = hasRestoredExpiredClientTheme.hasRestoredExpiredClientTheme;
    }
    if (flag == null) {
      flag = false;
    }
    obj.hasRestoredExpiredClientTheme = flag;
    return obj;
  },
];
HexagonCampaignPersistedStore.migrations = items;
const hexagonCampaignPersistedStore = new HexagonCampaignPersistedStore(DispatcherDefault, {
  HEXAGON_CAMPAIGN_PERK_APPLIED: function handlePerkApplied() {
    obj = {};
    const merged = Object.assign(closure_1);
    obj.hasAppliedPerk = true;
    closure_1 = obj;
  },
  HEXAGON_CAMPAIGN_APPLIED_PERKS_CLEARED: function handleAppliedPerksCleared() {
    obj = {};
    const merged = Object.assign(closure_1);
    obj.hasAppliedPerk = false;
    closure_1 = obj;
  },
  HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES_VISITED: function handleDisplayNameStylesVisited() {
    if (closure_1.hasVisitedDisplayNameStyles) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(closure_1);
      obj.hasVisitedDisplayNameStyles = true;
      closure_1 = obj;
    }
  },
  HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED: function handlePreviousPerkValuesSaved(previousPerkValues) {
    obj = {};
    const merged = Object.assign(closure_1);
    const merged1 = Object.assign(closure_1.previousPerkValues);
    const merged2 = Object.assign(previousPerkValues.previousPerkValues);
    obj.previousPerkValues = {};
    closure_1 = obj;
  },
  HEXAGON_CAMPAIGN_EXPIRED_CLIENT_THEME_RESTORED: function handleExpiredClientThemeRestored() {
    if (closure_1.hasRestoredExpiredClientTheme) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(closure_1);
      obj.hasRestoredExpiredClientTheme = true;
      closure_1 = obj;
    }
  },
  LOGOUT: function handleLogout() {
    closure_1 = obj;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignPersistedStore.tsx");

export default hexagonCampaignPersistedStore;
