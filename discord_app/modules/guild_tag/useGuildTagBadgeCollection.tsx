// === Module 16447: useGuildTagBadgeCollection ===

// Module 16447 (useGuildTagBadgeCollection)
import { useMemo } from "noop";
import handleFormInit from "handleFormInit";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import items from "items";

let c5;
let closure_6;
let error;
({ BADGE_PACKS: c5, BADGES: closure_6, BADGE_PACK_TO_SKU_ID: error } = items);
const result = require("calculateAppliedBoosts").fileFinishedImporting("modules/guild_tag/useGuildTagBadgeCollection.tsx");

export default function useGuildTagBadgeCollection() {
  let items = [handleFormInit];
  stateFromStores = stateFromStores(stateFromStores1[4]).useStateFromStores(items, () => guild.getGuild());
  const obj = stateFromStores(stateFromStores1[4]);
  let items1 = [calculateAppliedBoosts];
  stateFromStores1 = stateFromStores(stateFromStores1[4]).useStateFromStores(items1, () => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const stateForGuild = outer1_4.getStateForGuild(id);
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
    const unlockedBadges = outer1_6.map((kind) => ({ kind }));
    const lockedBadges = [];
    if (unlockedBadges != null) {
      features = unlockedBadges.features;
    }
    if (null != features) {
      const _Object = Object;
      const keys = Object.keys(outer1_5);
      const item = keys.forEach((arg0) => {
        let tmp;
        if (lockedBadges != null) {
          tmp = lockedBadges[outer2_7[arg0]];
        }
        let title;
        if (tmp != null) {
          title = tmp.title;
        }
        const mapped = outer2_5[arg0].map((kind) => ({ kind, packName: title }));
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