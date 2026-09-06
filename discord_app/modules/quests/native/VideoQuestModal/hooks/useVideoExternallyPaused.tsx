// discord_app/modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import NavigationRouteUtils from "../../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import ContextMenuState from "../../../../../design/components/ContextMenu/native/ContextMenuState.native.tsx";
import VideoQuestUtils from "../../../utils/VideoQuestUtils.tsx";
import ActionSheetStore from "../../../../action_sheet/native/ActionSheetStore.tsx";

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
