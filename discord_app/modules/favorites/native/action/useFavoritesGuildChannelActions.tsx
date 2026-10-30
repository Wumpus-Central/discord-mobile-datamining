// discord_app/modules/favorites/native/action/useFavoritesGuildChannelActions.tsx
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import FavoriteStore from "../../FavoriteStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default function useFavoritesGuildChannelActions(channelId) {
  _require = channelId;
  let isFavoritableChannelResult = require("FavoritesUtils").isFavoritableChannel(channelId);
  const obj = require("FavoritesUtils");
  const items = [FavoriteStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => FavoriteStore.isFavorite(channelId.id));
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
}
