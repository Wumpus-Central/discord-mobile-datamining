// === Module 16904: useGuildTagBadgeCollection ===

// Module 16904 (useGuildTagBadgeCollection)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_3 from "handleFormInit" /* 8912 */;
import closure_4 from "calculateAppliedBoosts" /* 4265 */;
import items from "items" /* 8207 */;

const useMemo = noop.useMemo;
({ BADGE_PACKS: c5, BADGES: closure_6, BADGE_PACK_TO_SKU_ID: error } = items);
const result = set.fileFinishedImporting("modules/guild_tag/useGuildTagBadgeCollection.tsx");

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
    const unlockedBadges = closure_1_6.map((kind) => ({ kind }));
    const lockedBadges = [];
    if (unlockedBadges != null) {
      features = unlockedBadges.features;
    }
    if (null != features) {
      const _Object = Object;
      const keys = Object.keys(closure_1_5);
      const item = keys.forEach((arg0) => {
        let tmp;
        if (lockedBadges != null) {
          tmp = lockedBadges[closure_2_7[arg0]];
        }
        let title;
        if (tmp != null) {
          title = tmp.title;
        }
        const mapped = closure_2_5[arg0].map((kind) => ({ kind, packName: title }));
        const features = unlockedBadges.features;
        if (features.has(arg0)) {
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