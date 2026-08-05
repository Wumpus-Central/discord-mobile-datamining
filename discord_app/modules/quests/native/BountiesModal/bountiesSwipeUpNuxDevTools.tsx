// discord_app/modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx
import { useLocalStorageState } from "../../../../hooks/useLocalStorageState.tsx";
let c2 = "devtools-force-bounties-swipe-up-nux";
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/bountiesSwipeUpNuxDevTools.tsx");

export const FORCE_BOUNTIES_SWIPE_UP_NUX_STORAGE_KEY = "devtools-force-bounties-swipe-up-nux";
export const useForceBountiesSwipeUpNux = function useForceBountiesSwipeUpNux() {
  return useLocalStorageState /* useLocalStorageState */.useLocalStorageState(c2, false);
};