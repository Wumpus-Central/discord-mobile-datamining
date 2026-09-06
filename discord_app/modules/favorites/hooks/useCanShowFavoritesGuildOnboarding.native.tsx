// discord_app/modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";

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
}
