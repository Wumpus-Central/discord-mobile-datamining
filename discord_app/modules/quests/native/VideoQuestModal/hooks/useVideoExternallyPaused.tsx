// discord_app/modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx
import setContent from "setContent";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = require("../../../../../design/components/ContextMenu/native/ContextMenuState.native.tsx") /* updateContextMenuState */.useActiveContextMenu();
  const obj = require("../../../../../design/components/ContextMenu/native/ContextMenuState.native.tsx") /* updateContextMenuState */;
  const openModalKey = require("../../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx") /* navigationToRootTabHelper */.useOpenModalKey();
  const obj2 = require("../../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx") /* navigationToRootTabHelper */;
  const videoQuestModalKey = require("../../../utils/VideoQuestUtils.tsx") /* getVideoQuestWatchCtaText */.getVideoQuestModalKey(id);
  const obj3 = require("../../../utils/VideoQuestUtils.tsx") /* getVideoQuestWatchCtaText */;
  const items = [setContent];
  const stateFromStores = require("../../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => key.getKey());
  const obj4 = require("../../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const obj5 = require("../../../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */;
  const tmp5 = require("../../../../../design/components/AlertModal/native/useAlertStore.native.tsx") /* useAlertStore */.useAlertStore((alerts) => alerts.alerts).length > 0;
  let tmp6 = require("../../../../../utils/PlatformUtils.tsx") /* set */.isIOS() && arg1;
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