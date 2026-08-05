// discord_app/modules/favorites/native/onboarding/useCanShowFavoritesGuildCoachmark.tsx
import setContent from "setContent";
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/favorites/native/onboarding/useCanShowFavoritesGuildCoachmark.tsx");

export default function useCanShowFavoritesGuildCoachmark() {
  const items = [handleConnectionOpen];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => null != voiceChannelId.getVoiceChannelId());
  const obj = require(589) /* initialize */;
  const items1 = [setContent];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => open.isOpen());
  const obj2 = require(589) /* initialize */;
  let tmp4 = !stateFromStores;
  const isModalOpen = require(4136) /* navigationToRootTabHelper */.useIsModalOpen();
  if (!stateFromStores) {
    tmp4 = !stateFromStores1;
  }
  if (tmp4) {
    tmp4 = !isModalOpen;
  }
  return tmp4;
};