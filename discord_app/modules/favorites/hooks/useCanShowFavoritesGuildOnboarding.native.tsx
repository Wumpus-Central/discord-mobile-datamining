// === Module 10496: useCanShowFavoritesGuildOnboarding ===

// Module 10496 (useCanShowFavoritesGuildOnboarding)
import initialize from "initialize" /* 504 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4613 */;
import ActionSheetStore from "ActionSheetStore" /* 4447 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx");

export default function useCanShowFavoritesGuildOnboarding() {
  const items = [SelectedChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => null != voiceChannelId.getVoiceChannelId());
  const items1 = [ActionSheetStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => open.isOpen());
  let tmp4 = !stateFromStores;
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  if (!stateFromStores) {
    tmp4 = !stateFromStores1;
  }
  if (tmp4) {
    tmp4 = !isModalOpen;
  }
  return tmp4;
};