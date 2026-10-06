// === Module 10062: useCanShowFavoritesGuildOnboarding ===

// Module 10062 (useCanShowFavoritesGuildOnboarding)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import ActionSheetStore from "ActionSheetStore" /* 4567 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let open;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let voiceChannelId;
  const obj = react;
  const cResult = obj.c(4);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ActionSheetStore];
    const fn2 = function c() {
      return open.isOpen();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = get_initialized;
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  let tmp13 = !stateFromStores;
  const tmpResult4 = NavigationRouteUtils;
  const isModalOpen = tmpResult4.useIsModalOpen();
  if (!stateFromStores) {
    tmp13 = !stateFromStores1;
  }
  if (tmp13) {
    tmp13 = !isModalOpen;
  }
  return tmp13;
}) : (() => {
  let open;
  let voiceChannelId;
  const items = [SelectedChannelStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => null != voiceChannelId.getVoiceChannelId());
  const items1 = [ActionSheetStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => open.isOpen());
  let tmp4 = !stateFromStores;
  const obj3 = NavigationRouteUtils;
  const isModalOpen = obj3.useIsModalOpen();
  if (!stateFromStores) {
    tmp4 = !stateFromStores1;
  }
  if (tmp4) {
    tmp4 = !isModalOpen;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx");

export default tmp2;