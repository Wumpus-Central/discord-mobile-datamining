// === Module 16420: useVideoExternallyPaused ===

// Module 16420 (useVideoExternallyPaused)
import initialize from "initialize" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4970 */;
import useAlertStore from "useAlertStore" /* 5743 */;
import ContextMenuState from "ContextMenuState" /* 8540 */;
import VideoQuestUtils from "VideoQuestUtils" /* 10495 */;
import ActionSheetStore from "ActionSheetStore" /* 5009 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = ContextMenuState.useActiveContextMenu();
  const openModalKey = NavigationRouteUtils.useOpenModalKey();
  const videoQuestModalKey = VideoQuestUtils.getVideoQuestModalKey(id);
  items = [ActionSheetStore];
  const stateFromStores = initialize.useStateFromStores(items, () => key.getKey());
  const tmp5 = useAlertStore.useAlertStore((alerts) => alerts.alerts).length > 0;
  let tmp6 = PlatformUtils.isIOS() && arg1;
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
}