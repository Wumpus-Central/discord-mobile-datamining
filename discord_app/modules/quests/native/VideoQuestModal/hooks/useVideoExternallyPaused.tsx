// === Module 14509: useVideoExternallyPaused ===

// Module 14509 (useVideoExternallyPaused)
import obj132 from "obj132" /* 500 */;
import initialize from "initialize" /* 589 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import useAlertStore from "useAlertStore" /* 4657 */;
import updateContextMenuState from "updateContextMenuState" /* 9959 */;
import getVideoQuestWatchCtaText from "getVideoQuestWatchCtaText" /* 10704 */;
import setContent from "setContent" /* 4086 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = updateContextMenuState.useActiveContextMenu();
  const openModalKey = coerceMainRoute.useOpenModalKey();
  const videoQuestModalKey = getVideoQuestWatchCtaText.getVideoQuestModalKey(id);
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => key.getKey());
  const tmp5 = useAlertStore.useAlertStore((alerts) => alerts.alerts).length > 0;
  let tmp6 = obj132.isIOS() && arg1;
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