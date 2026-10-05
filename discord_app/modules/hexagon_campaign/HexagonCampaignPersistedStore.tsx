// discord_app/modules/hexagon_campaign/HexagonCampaignPersistedStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleAppliedPerksCleared() {}
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
  set: undefined,
});
HexagonCampaignPersistedStore.displayName = "HexagonCampaignPersistedStore";
HexagonCampaignPersistedStore.persistKey = "HexagonCampaignPersistedStore";
const obj2 = {
  HEXAGON_CAMPAIGN_PERK_APPLIED: function handlePerkApplied() {
    obj = { hasAppliedPerk: true };
    const merged = Object.assign(obj);
  },
  HEXAGON_CAMPAIGN_APPLIED_PERKS_CLEARED: handleAppliedPerksCleared,
  LOGOUT: handleAppliedPerksCleared,
};
const hexagonCampaignPersistedStore = new HexagonCampaignPersistedStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignPersistedStore.tsx");

export default hexagonCampaignPersistedStore;
