// === Module 14983: useVideoExternallyPaused ===

// Module 14983 (useVideoExternallyPaused)
import initialize from "initialize" /* 586 */;
import set from "set" /* 1234 */;
import coerceMainRoute from "coerceMainRoute" /* 4332 */;
import useAlertStore from "useAlertStore" /* 4859 */;
import updateContextMenuState from "updateContextMenuState" /* 8808 */;
import getVideoQuestWatchCtaText from "getVideoQuestWatchCtaText" /* 11332 */;
import closure_2 from "setContent" /* 4186 */;

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