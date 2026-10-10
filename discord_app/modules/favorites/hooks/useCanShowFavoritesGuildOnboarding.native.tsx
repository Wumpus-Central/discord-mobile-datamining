// === Module 10327: useCanShowFavoritesGuildOnboarding ===

// Module 10327 (useCanShowFavoritesGuildOnboarding)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import ActionSheetStore from "ActionSheetStore" /* 4802 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCanShowFavoritesGuildOnboarding() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore];
    const fn = function s() {
      return null != voiceChannelId.getVoiceChannelId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ActionSheetStore];
    const fn2 = function c() {
      return open.isOpen();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
  const tmpResult3 = initialize;
  let tmp13 = !stateFromStores;
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  if (!stateFromStores) {
    tmp13 = !stateFromStores1;
  }
  if (tmp13) {
    tmp13 = !isModalOpen;
  }
  return tmp13;
}) : (function useCanShowFavoritesGuildOnboarding() {
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
});