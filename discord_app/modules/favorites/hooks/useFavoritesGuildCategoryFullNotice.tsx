// discord_app/modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import FavoritesConstants from "../FavoritesConstants.tsx";
import FavoritesUtils from "../FavoritesUtils.tsx";
import _modDef3395 from "../intl/FavoritesGuild.messages.js";
import FavoritesHooks from "../FavoritesHooks.tsx";
import FavoriteStore from "../FavoriteStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4 = FavoritesConstants.FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME;
const ChannelTypes = Constants.ChannelTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (getGuildId, str) => {
      let autoAddJoinedThreads;
      let intl;
      let intl2;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FavoriteStore];
        const fn = function _() {
          return autoAddJoinedThreads.autoAddJoinedThreads;
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
      FavoritesHooks;
      let tmp10 = null;
      if (stateFromStores) {
        tmp10 = null;
        if (tmp9) {
          tmp10 = null;
          if (null != str) {
            tmp10 = null;
            const tmpResult4 = FavoritesUtils;
            if (tmpResult4.isFavoritesGuildId(getGuildId.getGuildId())) {
              tmp10 = null;
              if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
                str = str.trim();
                const formatted = str.toLowerCase();
                tmp10 = null;
                if (formatted === closure_4.toLowerCase()) {
                  let tmp14;
                  const _Symbol = Symbol;
                  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj2 = { label: intl.string(_modDef3395.WsUrMD), tooltip: intl2.string(_modDef3395.dW9Kov) };
                    intl = intl3.intl;
                    intl2 = intl3.intl;
                    cResult[2] = obj2;
                    tmp14 = obj2;
                  } else {
                    tmp14 = cResult[2];
                  }
                  tmp10 = tmp14;
                }
              }
            }
          }
        }
      }
      return tmp10;
    }
  : (getGuildId, str) => {
      let autoAddJoinedThreads;
      let intl;
      let intl2;
      const items = [FavoriteStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => autoAddJoinedThreads.autoAddJoinedThreads);
      FavoritesHooks;
      let tmp6 = null;
      if (stateFromStores) {
        tmp6 = null;
        if (tmp5) {
          tmp6 = null;
          if (null != str) {
            tmp6 = null;
            const tmpResult = FavoritesUtils;
            if (tmpResult.isFavoritesGuildId(getGuildId.getGuildId())) {
              tmp6 = null;
              if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
                str = str.trim();
                const formatted = str.toLowerCase();
                tmp6 = null;
                if (formatted === closure_4.toLowerCase()) {
                  const obj2 = { label: intl.string(_modDef3395.WsUrMD), tooltip: intl2.string(_modDef3395.dW9Kov) };
                  intl = intl3.intl;
                  intl2 = intl3.intl;
                  tmp6 = obj2;
                }
              }
            }
          }
        }
      }
      return tmp6;
    };
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default tmp2;
