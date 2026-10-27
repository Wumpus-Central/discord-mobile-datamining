// discord_app/modules/favorites/native/action/useFavoritesGuildChannelActions.tsx
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import FavoriteStore from "../../FavoriteStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildChannelActions(channelId) {
      _require = channelId;
      const cResult = require("c").c(13);
      if (cResult[0] !== channelId) {
        const isFavoritableChannelResult = tmp(4849).isFavoritableChannel(channelId);
        cResult[0] = channelId;
        cResult[1] = isFavoritableChannelResult;
        let stateFromStores1 = isFavoritableChannelResult;
        const tmpResult = tmp(4849);
      } else {
        stateFromStores1 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FavoriteStore];
        cResult[2] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== channelId.id) {
        const fn = function c() {
          return FavoriteStore.isFavorite(channelId.id);
        };
        cResult[3] = channelId.id;
        cResult[4] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[4];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp8);
      const tmpResult4 = require("initialize");
      const isFavoritesGuildSelected = require("FavoritesHooks").useIsFavoritesGuildSelected();
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildMemberStore, AuthenticationStore];
        cResult[5] = items1;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== channelId.guild_id) {
        const fn2 = function _() {
          let isMemberResult = null == channelId.guild_id;
          if (!isMemberResult) {
            isMemberResult = GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
          }
          return isMemberResult;
        };
        cResult[6] = channelId.guild_id;
        cResult[7] = fn2;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[7];
      }
      const tmpResult5 = require("FavoritesHooks");
      if (stateFromStores1) {
        stateFromStores1 = tmpResult6.useStateFromStores(tmp11, tmp14);
      }
      if (cResult[8] === stateFromStores1) {
        if (cResult[9] === channelId.id) {
          if (cResult[10] === stateFromStores) {
            if (cResult[11] === isFavoritesGuildSelected) {
              let tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
      }
      const obj2 = {
        canFavoriteChannel: stateFromStores1,
        isChannelInFavorites: stateFromStores,
        isFavoritesGuild: isFavoritesGuildSelected,
        channelId: channelId.id,
      };
      cResult[8] = stateFromStores1;
      cResult[9] = channelId.id;
      cResult[10] = stateFromStores;
      cResult[11] = isFavoritesGuildSelected;
      cResult[12] = obj2;
      tmp15 = obj2;
      tmpResult6 = require("initialize");
    }
  : function useFavoritesGuildChannelActions(channelId) {
      _require = channelId;
      let isFavoritableChannelResult = require("FavoritesUtils").isFavoritableChannel(channelId);
      const obj = require("FavoritesUtils");
      const items = [FavoriteStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        FavoriteStore.isFavorite(channelId.id),
      );
      const obj2 = require("initialize");
      const isFavoritesGuildSelected = require("FavoritesHooks").useIsFavoritesGuildSelected();
      const obj3 = require("FavoritesHooks");
      const items1 = [GuildMemberStore, AuthenticationStore];
      if (isFavoritableChannelResult) {
        isFavoritableChannelResult = obj4.useStateFromStores(items1, () => {
          let isMemberResult = null == channelId.guild_id;
          if (!isMemberResult) {
            isMemberResult = GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
          }
          return isMemberResult;
        });
      }
      return {
        canFavoriteChannel: isFavoritableChannelResult,
        isChannelInFavorites: stateFromStores,
        isFavoritesGuild: isFavoritesGuildSelected,
        channelId: channelId.id,
      };
    };
