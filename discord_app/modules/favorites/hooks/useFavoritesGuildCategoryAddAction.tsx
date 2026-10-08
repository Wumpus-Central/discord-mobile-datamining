// discord_app/modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx
import _modDef3439 from "../intl/FavoritesGuild.messages.js";
import openFavoritesGuildAddChannelModalDefault from "../utils/openFavoritesGuildAddChannelModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const ChannelTypes = fn(1085).ChannelTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategoryAddAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildCategoryAddAction(id) {
      _require = id;
      const cResult = require("c").c(5);
      if (cResult[0] !== id.id) {
        const fn = function l() {
          openFavoritesGuildAddChannelModalDefault({ parentId: id.id, source: "favorites_add_to_category" });
        };
        cResult[0] = id.id;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      const obj = require("c");
      let tmp5 = null;
      if (tmpResult.isFavoritesGuildId(id.getGuildId())) {
        tmp5 = null;
        if (id.type === ChannelTypes.GUILD_CATEGORY) {
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(_modDef3439["1QJmIL"]);
            cResult[2] = stringResult;
            let tmp7 = stringResult;
          } else {
            tmp7 = cResult[2];
          }
          if (cResult[3] !== tmp4) {
            const obj2 = { label: tmp7, perform: tmp4 };
            cResult[3] = tmp4;
            cResult[4] = obj2;
          }
        }
      }
      return tmp5;
    }
  : function useFavoritesGuildCategoryAddAction(id) {
      _require = id;
      const items = [id.id];
      const callback = noop.useCallback(() => {
        openFavoritesGuildAddChannelModalDefault({ parentId: id.id, source: "favorites_add_to_category" });
      }, items);
      let tmp4 = null;
      if (obj.isFavoritesGuildId(id.getGuildId())) {
        tmp4 = null;
        if (id.type === ChannelTypes.GUILD_CATEGORY) {
          const obj2 = { label: null, perform: null };
          const intl = require("util").intl;
          obj2.label = intl.string(_modDef3439["1QJmIL"]);
          obj2.perform = callback;
          tmp4 = obj2;
        }
      }
      return tmp4;
    };
