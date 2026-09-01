// discord_app/modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import coerceMainRoute from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import closure_2 from "../../action_sheet/native/ActionSheetStore.tsx";
import closure_3 from "../../../stores/SelectedChannelStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx",
);

export default function useCanShowFavoritesGuildOnboarding() {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => null != voiceChannelId.getVoiceChannelId());
  const obj = initialize;
  const items1 = [closure_2];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => open.isOpen());
  const obj2 = initialize;
  let tmp4 = !stateFromStores;
  const isModalOpen = coerceMainRoute.useIsModalOpen();
  if (!stateFromStores) {
    tmp4 = !stateFromStores1;
  }
  if (tmp4) {
    tmp4 = !isModalOpen;
  }
  return tmp4;
}
