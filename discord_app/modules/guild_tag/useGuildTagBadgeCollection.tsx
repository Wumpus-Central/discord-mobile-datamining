// === Module 17590: useGuildTagBadgeCollection ===

// Module 17590 (useGuildTagBadgeCollection)
import _mod19 from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;
import GuildTagConstants from "GuildTagConstants" /* 7944 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
({ BADGE_PACKS: hasOwnProperty, BADGES: metroRequire, BADGE_PACK_TO_SKU_ID: closure_7 } = GuildTagConstants);
const result = size.fileFinishedImporting("modules/guild_tag/useGuildTagBadgeCollection.tsx");

export default function useGuildTagBadgeCollection() {
  let items = [GuildSettingsStore];
  stateFromStores = stateFromStores(stateFromStores1[4]).useStateFromStores(items, () => guild.getGuild());
  const obj = stateFromStores(stateFromStores1[4]);
  let items1 = [GuildPowerupsStore];
  stateFromStores1 = stateFromStores(stateFromStores1[4]).useStateFromStores(items1, () => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const stateForGuild = GuildPowerupsStore.getStateForGuild(id);
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
    const unlockedBadges = closure_1_6.map((kind) => ({ kind }));
    const lockedBadges = [];
    if (unlockedBadges != null) {
      features = unlockedBadges.features;
    }
    if (null != features) {
      const _Object = Object;
      const keys = Object.keys(closure_1_5);
      const item = keys.forEach((item) => {
        let tmp;
        if (stateFromStores1 != null) {
          tmp = stateFromStores1[React5[item]];
        }
        let title;
        if (tmp != null) {
          title = tmp.title;
        }
        const mapped = hasOwnProperty[item].map((kind) => ({ kind, packName: title }));
        const features = stateFromStores.features;
        if (features.has(item)) {
          const push2 = unlockedBadges.push;
          const items = [];
          HermesBuiltin.arraySpread(mapped, 0);
          HermesBuiltin.apply(items, unlockedBadges);
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