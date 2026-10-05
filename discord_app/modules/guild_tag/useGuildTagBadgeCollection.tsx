// discord_app/modules/guild_tag/useGuildTagBadgeCollection.tsx
import react from "../../../_runtime/00019_react.js";
import GuildSettingsStore from "../guild_settings/GuildSettingsStore.tsx";
import GuildPowerupsStore from "../premium/powerups/GuildPowerupsStore.tsx";
import GuildTagConstants from "GuildTagConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const useMemo = react.useMemo;
({ BADGE_PACKS: hasOwnProperty, BADGES: metroRequire, BADGE_PACK_TO_SKU_ID: metroImportDefault } = GuildTagConstants);
const result = size.fileFinishedImporting("modules/guild_tag/useGuildTagBadgeCollection.tsx");

export default function useGuildTagBadgeCollection() {
  let guild;
  let stateFromStores;
  let stateFromStores1;
  let items = [GuildSettingsStore];
  const obj = stateFromStores(stateFromStores1[4]);
  stateFromStores = obj.useStateFromStores(items, () => guild.getGuild());
  let items1 = [GuildPowerupsStore];
  const obj2 = stateFromStores(stateFromStores1[4]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let id;
    const getStateForGuild = GuildPowerupsStore.getStateForGuild;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const stateForGuild = getStateForGuild(id);
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
        let tmp2;
        const arr = hasOwnProperty[item];
        if (stateFromStores1 != null) {
          tmp2 = stateFromStores1[metroImportDefault[item]];
        }
        let title;
        if (tmp2 != null) {
          title = tmp2.title;
        }
        const mapped = arr.map((kind) => ({ kind, packName: title }));
        const features = stateFromStores.features;
        if (features.has(item)) {
          const push2 = unlockedBadges.push;
          const items = [];
          HermesBuiltin.arraySpread(items, mapped, 0);
          HermesBuiltin.apply(push2, items, unlockedBadges);
        } else {
          const push = lockedBadges.push;
          const items1 = [];
          HermesBuiltin.arraySpread(items1, mapped, 0);
          HermesBuiltin.apply(push, items1, lockedBadges);
        }
      });
    }
    return { unlockedBadges, lockedBadges };
  }, items2);
}
