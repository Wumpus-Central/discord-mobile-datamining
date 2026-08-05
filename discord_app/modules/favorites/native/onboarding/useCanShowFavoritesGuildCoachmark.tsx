// discord_app/modules/favorites/native/onboarding/useCanShowFavoritesGuildCoachmark.tsx
import setContent from "setContent";
import handleConnectionOpen from "handleConnectionOpen";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { navigationToRootTabHelper } from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/favorites/native/onboarding/useCanShowFavoritesGuildCoachmark.tsx");

export default function useCanShowFavoritesGuildCoachmark() {
  const items = [handleConnectionOpen];
  const stateFromStores = initialize.useStateFromStores(items, () => null != voiceChannelId.getVoiceChannelId());
  const obj = initialize;
  const items1 = [setContent];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => open.isOpen());
  const obj2 = initialize;
  let tmp4 = !stateFromStores;
  const isModalOpen = navigationToRootTabHelper.useIsModalOpen();
  if (!stateFromStores) {
    tmp4 = !stateFromStores1;
  }
  if (tmp4) {
    tmp4 = !isModalOpen;
  }
  return tmp4;
};