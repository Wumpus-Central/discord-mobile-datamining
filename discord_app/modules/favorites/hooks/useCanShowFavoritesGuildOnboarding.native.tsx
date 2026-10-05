// discord_app/modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
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
    };
const result = size.fileFinishedImporting("modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx");

export default tmp2;
