// === Module 14465: FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY ===

// Module 14465 (FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY)
import set from "set" /* 2 */;
import useLocalStorageState from "useLocalStorageState" /* 10896 */;

let c2 = "devtools-force-bounties-swipe-up-nux";
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return useLocalStorageState.useLocalStorageState(c2, false);
};