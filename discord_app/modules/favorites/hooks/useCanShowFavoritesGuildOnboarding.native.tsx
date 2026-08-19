// discord_app/modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import coerceMainRoute from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import setContent from "../../action_sheet/native/ActionSheetStore.tsx";
import handleConnectionOpen from "../../../stores/SelectedChannelStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx");

export default function useCanShowFavoritesGuildOnboarding() {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => null != voiceChannelId.getVoiceChannelId());
  const items1 = [closure_2];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => open.isOpen());
  let tmp4 = !stateFromStores;
  const isModalOpen = coerceMainRoute.useIsModalOpen();
  if (!stateFromStores) {
    tmp4 = !stateFromStores1;
  }
  if (tmp4) {
    tmp4 = !isModalOpen;
  }
  return tmp4;
};