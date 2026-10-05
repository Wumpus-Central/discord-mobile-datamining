// === Module 16033: useFavoritesGuildCategoryFullNotice ===

// Module 16033 (useFavoritesGuildCategoryFullNotice)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import FavoritesConstants from "FavoritesConstants" /* 2065 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import _modDef3367 from "module_3367" /* 3367 */;
import FavoritesHooks from "FavoritesHooks" /* 10036 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4 = FavoritesConstants.FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME;
const ChannelTypes = Constants.ChannelTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((getGuildId, str) => {
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
                const obj2 = { label: intl.string(_modDef3367.WsUrMD), tooltip: intl2.string(_modDef3367.dW9Kov) };
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
}) : ((getGuildId, str) => {
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
              const obj2 = { label: intl.string(_modDef3367.WsUrMD), tooltip: intl2.string(_modDef3367.dW9Kov) };
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
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default tmp2;