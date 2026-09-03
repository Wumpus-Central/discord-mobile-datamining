// discord_app/modules/favorites/FavoriteManager.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import getNextPositionFromChannels from "FavoritesActionCreators.tsx";
import closure_2 from "../../stores/AuthenticationStore.tsx";
import items from "FavoritesGuildSuggestionsStore.tsx";
import { NOOP } from "../../Constants.tsx";

require = arg1;
function handleChannelDelete(channel) {
  const result = getNextPositionFromChannels.removeFavoriteChannel(channel.channel.id, { trackAnalytics: false });
}
function handleCategoryCollapse(id) {
  const result = getNextPositionFromChannels.setFavoriteCategoriesCollapsed(true, id.id);
}
function handleCategoryExpand(id) {
  const result = getNextPositionFromChannels.setFavoriteCategoriesCollapsed(false, id.id);
}
function handleCategoryCollapseAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = getNextPositionFromChannels.setFavoriteCategoriesCollapsed(true);
    const tmpResult = getNextPositionFromChannels;
  }
}
function handleCategoryExpandAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = getNextPositionFromChannels.setFavoriteCategoriesCollapsed(false);
    const tmpResult = getNextPositionFromChannels;
  }
}
function handleLogout() {
  callback(closure_3);
}
function handleThreadMembersUpdate(addedMembers) {
  addedMembers = addedMembers.addedMembers;
  let id;
  id = store.getId();
  if (tmp2) {
    const result = id(10332).autoAddJoinedThreadToFavorites(addedMembers.id);
    result.catch(NOOP);
    const obj = id(10332);
  }
}
function handleThreadCreate(channel) {
  channel = channel.channel;
  let member;
  if (channel != null) {
    member = channel.member;
  }
  let tmp2 = null != member;
  if (tmp2) {
    const joinTimestamp = channel.member.joinTimestamp;
    let tmp3 = null != joinTimestamp;
    if (tmp3) {
      const _Date = Date;
      const _Date2 = Date;
      const timestamp = Date.now();
      const date = new Date(joinTimestamp);
      tmp3 = timestamp - date.getTime() < 60000;
    }
    tmp2 = tmp3;
  }
  if (tmp2) {
    const result = getNextPositionFromChannels.autoAddJoinedThreadToFavorites(channel.id);
    result.catch(NOOP);
    const obj2 = getNextPositionFromChannels;
  }
}
function handleThreadMemberUpdate(joinTimestamp) {
  joinTimestamp = joinTimestamp.joinTimestamp;
  ({ id, userId } = joinTimestamp);
  let tmp = store.getId() === userId;
  if (tmp) {
    let tmp3 = null != joinTimestamp;
    if (tmp3) {
      const _Date = Date;
      const _Date2 = Date;
      const timestamp = Date.now();
      const date = new Date(joinTimestamp);
      tmp3 = timestamp - date.getTime() < 60000;
    }
    tmp = tmp3;
  }
  if (tmp) {
    const result = getNextPositionFromChannels.autoAddJoinedThreadToFavorites(id);
    result.catch(NOOP);
    const obj2 = getNextPositionFromChannels;
  }
}
({ NO_SUGGESTIONS: c3, setFavoritesGuildSuggestions: c4 } = items);
initializeDefault;
let prototype = function FavoriteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    CHANNEL_DELETE: handleChannelDelete,
    CATEGORY_COLLAPSE: handleCategoryCollapse,
    CATEGORY_EXPAND: handleCategoryExpand,
    CATEGORY_COLLAPSE_ALL: handleCategoryCollapseAll,
    CATEGORY_EXPAND_ALL: handleCategoryExpandAll,
    LOGOUT: handleLogout,
    THREAD_CREATE: handleThreadCreate,
    THREAD_MEMBERS_UPDATE: handleThreadMembersUpdate,
    THREAD_MEMBER_UPDATE: handleThreadMemberUpdate,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {}
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default prototype;
