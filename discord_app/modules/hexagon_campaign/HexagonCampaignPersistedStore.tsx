// === Module 14177: HexagonCampaignPersistedStore ===

// Module 14177 (HexagonCampaignPersistedStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function handleAppliedPerksCleared() {

}
let obj = { hasAppliedPerk: false };
const PersistedStore = get_initializedDefault.PersistedStore;
class HexagonCampaignPersistedStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(arg0);
    }
  }
  getState() {
    return obj;
  }
}
Object.defineProperty(HexagonCampaignPersistedStore.prototype, "hasAppliedPerk", {
  get: function hasAppliedPerk() {
    return obj.hasAppliedPerk;
  },
  set: undefined
});
HexagonCampaignPersistedStore.displayName = "HexagonCampaignPersistedStore";
HexagonCampaignPersistedStore.persistKey = "HexagonCampaignPersistedStore";
const obj2 = {
  HEXAGON_CAMPAIGN_PERK_APPLIED: function handlePerkApplied() {
    obj = { hasAppliedPerk: true };
    const merged = Object.assign(obj);
  },
  HEXAGON_CAMPAIGN_APPLIED_PERKS_CLEARED: handleAppliedPerksCleared,
  LOGOUT: handleAppliedPerksCleared
};
const hexagonCampaignPersistedStore = new HexagonCampaignPersistedStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignPersistedStore.tsx");

export default hexagonCampaignPersistedStore;