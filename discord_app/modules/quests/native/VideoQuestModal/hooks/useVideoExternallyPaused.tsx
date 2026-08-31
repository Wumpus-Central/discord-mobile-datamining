// === Module 14724: useVideoExternallyPaused ===

// Module 14724 (useVideoExternallyPaused)
import set from "set" /* 500 */;
import initialize from "initialize" /* 589 */;
import coerceMainRoute from "coerceMainRoute" /* 4302 */;
import useAlertStore from "useAlertStore" /* 4827 */;
import updateContextMenuState from "updateContextMenuState" /* 8756 */;
import getVideoQuestWatchCtaText from "getVideoQuestWatchCtaText" /* 11074 */;
import closure_2 from "setContent" /* 4156 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = updateContextMenuState.useActiveContextMenu();
  const obj = updateContextMenuState;
  const openModalKey = coerceMainRoute.useOpenModalKey();
  const obj2 = coerceMainRoute;
  const videoQuestModalKey = getVideoQuestWatchCtaText.getVideoQuestModalKey(id);
  const obj3 = getVideoQuestWatchCtaText;
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => key.getKey());
  const obj4 = initialize;
  const obj5 = useAlertStore;
  const tmp5 = useAlertStore.useAlertStore((alerts) => alerts.alerts).length > 0;
  let tmp6 = set.isIOS() && arg1;
  if (!tmp6) {
    tmp6 = null != stateFromStores;
  }
  if (!tmp6) {
    tmp6 = null != activeContextMenu;
  }
  if (!tmp6) {
    tmp6 = openModalKey !== videoQuestModalKey;
  }
  if (!tmp6) {
    tmp6 = tmp5;
  }
  return tmp6;
};