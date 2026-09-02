// === Module 10340: useCanShowFavoritesGuildOnboarding ===

// Module 10340 (useCanShowFavoritesGuildOnboarding)
import initialize from "initialize" /* 586 */;
import coerceMainRoute from "coerceMainRoute" /* 4332 */;
import closure_2 from "setContent" /* 4186 */;
import closure_3 from "handleConnectionOpen" /* 1980 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx");

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
};