// discord_app/modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx
import obj132 from "../../../../../utils/PlatformUtils.tsx";
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import coerceMainRoute from "../../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import updateContextMenuState from "../../../../../design/components/ContextMenu/native/ContextMenuState.native.tsx";
import getVideoQuestWatchCtaText from "../../../utils/VideoQuestUtils.tsx";
import setContent from "../../../../action_sheet/native/ActionSheetStore.tsx";

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