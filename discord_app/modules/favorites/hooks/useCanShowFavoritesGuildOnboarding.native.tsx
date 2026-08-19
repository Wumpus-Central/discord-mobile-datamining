// === Module 9989: useCanShowFavoritesGuildOnboarding ===

// Module 9989 (useCanShowFavoritesGuildOnboarding)
import initialize from "initialize" /* 589 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import setContent from "setContent" /* 4086 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;

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