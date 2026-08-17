// discord_app/modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx
import set from "set" /* 2 */;
import useLocalStorageState from "useLocalStorageState" /* 12529 */;

let c2 = "devtools-force-bounties-swipe-up-nux";
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return useLocalStorageState.useLocalStorageState(c2, false);
};