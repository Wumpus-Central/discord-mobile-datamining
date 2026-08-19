// discord_app/modules/guild_tag/useGuildTagBadgeCollection.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import noop from "../../../_runtime/00019_noop.js";
import handleFormInit from "../guild_settings/GuildSettingsStore.tsx";
import calculateAppliedBoosts from "../premium/powerups/GuildPowerupsStore.tsx";
import items from "GuildTagConstants.tsx";

const useMemo = noop.useMemo;
({ BADGE_PACKS: c5, BADGES: closure_6, BADGE_PACK_TO_SKU_ID: error } = items);
const result = obj132.fileFinishedImporting("modules/guild_tag/useGuildTagBadgeCollection.tsx");

export default function useGuildTagBadgeCollection() {
  let items = [closure_3];
  stateFromStores = stateFromStores(stateFromStores1[4]).useStateFromStores(items, () => guild.getGuild());
  const obj = stateFromStores(stateFromStores1[4]);
  let items1 = [closure_4];
  stateFromStores1 = stateFromStores(stateFromStores1[4]).useStateFromStores(items1, () => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const stateForGuild = closure_1_4.getStateForGuild(id);
    let allPowerups;
    if (stateForGuild != null) {
      allPowerups = stateForGuild.allPowerups;
    }
    return allPowerups;
  });
  let features;
  if (stateFromStores != null) {
    features = stateFromStores.features;
  }
  const items2 = [features, stateFromStores1];
  return useMemo(() => {
    let features;
    const unlockedBadges = closure_1_6.map((item, index) => ({ kind: item }));
    const lockedBadges = [];
    if (unlockedBadges != null) {
      features = unlockedBadges.features;
    }
    if (null != features) {
      const _Object = Object;
      const keys = Object.keys(closure_1_5);
      const item = keys.forEach((item, index) => {
        let tmp;
        if (lockedBadges != null) {
          tmp = lockedBadges[closure_2_7[item]];
        }
        let title;
        if (tmp != null) {
          title = tmp.title;
        }
        const mapped = closure_2_5[item].map((item, index) => ({ kind: item, packName: title }));
        const features = unlockedBadges.features;
        if (features.has(item)) {
          const push2 = title.push;
          const items = [];
          HermesBuiltin.arraySpread(mapped, 0);
          HermesBuiltin.apply(items, title);
        } else {
          const push = lockedBadges.push;
          const items1 = [];
          HermesBuiltin.arraySpread(mapped, 0);
          HermesBuiltin.apply(items1, lockedBadges);
        }
      });
    }
    return { unlockedBadges, lockedBadges };
  }, items2);
};