// discord_app/modules/hexagon_campaign/HexagonCampaignPersistedStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

function handleAppliedPerksCleared() {}
let obj = { hasAppliedPerk: false };
const PersistedStore = initializeDefault.PersistedStore;
class HexagonCampaignPersistedStore extends PersistedStore {}
const prototype = HexagonCampaignPersistedStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(arg0);
  }
};
prototype["getState"] = function getState() {
  return obj;
};
Object.defineProperty(prototype, "hasAppliedPerk", {
  get: function hasAppliedPerk() {
    return obj.hasAppliedPerk;
  },
  set: undefined,
});
HexagonCampaignPersistedStore.displayName = "HexagonCampaignPersistedStore";
HexagonCampaignPersistedStore.persistKey = "HexagonCampaignPersistedStore";
const hexagonCampaignPersistedStore = new HexagonCampaignPersistedStore(DispatcherDefault, {
  HEXAGON_CAMPAIGN_PERK_APPLIED: function handlePerkApplied() {
    obj = {};
    const merged = Object.assign(obj);
    obj.hasAppliedPerk = true;
  },
  HEXAGON_CAMPAIGN_APPLIED_PERKS_CLEARED: handleAppliedPerksCleared,
  LOGOUT: handleAppliedPerksCleared,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignPersistedStore.tsx");

export default hexagonCampaignPersistedStore;
