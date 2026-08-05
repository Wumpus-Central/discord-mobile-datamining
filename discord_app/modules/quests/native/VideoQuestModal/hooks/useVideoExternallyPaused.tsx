// discord_app/modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx
import setContent from "setContent";
import { initialize } from "../../../../../../discord_common/js/packages/flux/index.tsx";
import { useAlertStore } from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import { updateContextMenuState } from "../../../../../design/components/ContextMenu/native/ContextMenuState.native.tsx";
import { set } from "../../../../../utils/PlatformUtils.tsx";
import { navigationToRootTabHelper } from "../../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import { getVideoQuestWatchCtaText } from "../../../utils/VideoQuestUtils.tsx";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = updateContextMenuState.useActiveContextMenu();
  const obj = updateContextMenuState;
  const openModalKey = navigationToRootTabHelper.useOpenModalKey();
  const obj2 = navigationToRootTabHelper;
  const videoQuestModalKey = getVideoQuestWatchCtaText.getVideoQuestModalKey(id);
  const obj3 = getVideoQuestWatchCtaText;
  const items = [setContent];
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