// === Module 15268: useVideoExternallyPaused ===

// Module 15268 (useVideoExternallyPaused)
import initialize from "initialize" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4497 */;
import useAlertStore from "useAlertStore" /* 4986 */;
import ContextMenuState from "ContextMenuState" /* 8053 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11666 */;
import ActionSheetStore from "ActionSheetStore" /* 4330 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = ContextMenuState.useActiveContextMenu();
  const openModalKey = NavigationRouteUtils.useOpenModalKey();
  const videoQuestModalKey = VideoQuestUtils.getVideoQuestModalKey(id);
  const items = [ActionSheetStore];
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
};