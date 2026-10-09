// === Module 16451: useFavoritesGuildCategoryFullNotice ===

// Module 16451 (useFavoritesGuildCategoryFullNotice)
import c from "c" /* 576 */;
import _modDef3439 from "module_3439" /* 3439 */;
import FavoriteStore from "FavoriteStore" /* 2067 */;

const initialize = intl(504);
const util = intl(1126);
const FavoritesUtils = intl(2089);
const FavoritesHooks = intl(10279);
require = fn;
let closure_4 = fn(2077).FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME;
const ChannelTypes = fn(1085).ChannelTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryFullNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  let intl = require;
  let stringResult = dependencyMap;
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function c() {
      return autoAddJoinedThreads.autoAddJoinedThreads;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
  FavoritesHooks;
  let tmp9 = null;
  if (stateFromStores) {
    tmp9 = null;
    if (tmp8) {
      tmp9 = null;
      if (null != str) {
        tmp9 = null;
        if (intlResult2.isFavoritesGuildId(getGuildId.getGuildId())) {
          tmp9 = null;
          if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
            str = str.trim();
            const formatted = str.toLowerCase();
            tmp9 = null;
            if (formatted === closure_4.toLowerCase()) {
              const _Symbol = Symbol;
              if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { label: null, tooltip: null };
                const intl2 = util.intl;
                obj2.label = intl2.string(_modDef3439.WsUrMD);
                intl = util.intl;
                stringResult = intl.string(_modDef3439.dW9Kov);
                obj2.tooltip = stringResult;
                cResult[2] = obj2;
              }
            }
          }
        }
        intlResult2 = FavoritesUtils;
      }
    }
  }
  return tmp9;
}) : (function useFavoritesGuildCategoryFullNotice(getGuildId, str) {
  const items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(items, () => autoAddJoinedThreads.autoAddJoinedThreads);
  FavoritesHooks;
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = null;
    if (tmp5) {
      tmp6 = null;
      if (null != str) {
        tmp6 = null;
        if (tmpResult.isFavoritesGuildId(getGuildId.getGuildId())) {
          tmp6 = null;
          if (getGuildId.type === ChannelTypes.GUILD_CATEGORY) {
            str = str.trim();
            const formatted = str.toLowerCase();
            tmp6 = null;
            if (formatted === closure_4.toLowerCase()) {
              const obj2 = { label: null, tooltip: null };
              const intl = util.intl;
              obj2.label = intl.string(_modDef3439.WsUrMD);
              const intl2 = util.intl;
              obj2.tooltip = intl2.string(_modDef3439.dW9Kov);
              tmp6 = obj2;
            }
          }
        }
        tmpResult = FavoritesUtils;
      }
    }
  }
  return tmp6;
});