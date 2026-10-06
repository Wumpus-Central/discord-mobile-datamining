// === Module 10718: useFavoritesGuildCategoryAddAction ===

// Module 10718 (useFavoritesGuildCategoryAddAction)
import Constants from "Constants" /* 1085 */;
import _modDef3395 from "module_3395" /* 3395 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 10719 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelTypes = Constants.ChannelTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let tmp4;
  _require = id;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] !== id.id) {
    const fn = function l() {
      const obj = { parentId: id.id, source: "favorites_add_to_category" };
      openFavoritesGuildAddChannelModalDefault(obj);
    };
    cResult[0] = id.id;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  let tmp5 = null;
  const tmpResult = require("FavoritesUtils");
  if (tmpResult.isFavoritesGuildId(id.getGuildId())) {
    tmp5 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      let tmp7;
      let tmp10;
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3395["1QJmIL"]);
        cResult[2] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const obj2 = { label: tmp7, perform: tmp4 };
        cResult[3] = tmp4;
        cResult[4] = obj2;
        tmp10 = obj2;
      } else {
        tmp10 = cResult[4];
      }
      tmp5 = tmp10;
    }
  }
  return tmp5;
}) : ((id) => {
  let intl;
  _require = id;
  const items = [id.id];
  const callback = react.useCallback(() => {
    const obj = { parentId: id.id, source: "favorites_add_to_category" };
    openFavoritesGuildAddChannelModalDefault(obj);
  }, items);
  let obj = require("FavoritesUtils");
  let tmp4 = null;
  const tmp2 = _require;
  if (obj.isFavoritesGuildId(id.getGuildId())) {
    tmp4 = null;
    if (id.type === ChannelTypes.GUILD_CATEGORY) {
      const obj2 = { label: intl.string(_modDef3395["1QJmIL"]), perform: callback };
      intl = tmp2(1126).intl;
      tmp4 = obj2;
    }
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default tmp2;