// === Module 20258: FavoriteManager ===

// Module 20258 (FavoriteManager)
import FavoritesUtils from "FavoritesUtils" /* 5117 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10875 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;

require = fn;
function handleChannelDelete(channel) {
  const result = FavoritesActionCreators.removeFavoriteChannel(channel.channel.id, { trackAnalytics: false });
}
function handleCategoryCollapse(id) {
  const result = FavoritesActionCreators.setFavoriteCategoriesCollapsed(true, id.id);
}
function handleCategoryExpand(id) {
  const result = FavoritesActionCreators.setFavoriteCategoriesCollapsed(false, id.id);
}
function handleCategoryCollapseAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = FavoritesActionCreators.setFavoriteCategoriesCollapsed(true);
    const tmpResult = FavoritesActionCreators;
  }
  obj = FavoritesUtils;
}
function handleCategoryExpandAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = FavoritesActionCreators.setFavoriteCategoriesCollapsed(false);
    const tmpResult = FavoritesActionCreators;
  }
  obj = FavoritesUtils;
}
function handleLogout() {
  React4(React3);
}
function handleThreadMembersUpdate(arg0) {
  ({ id, addedMembers, removedMemberIds } = arg0);
  const id1 = AuthenticationStore.getId();
  if (null != id1) {
    let hasItem;
    if (removedMemberIds != null) {
      hasItem = removedMemberIds.includes(id1);
    }
    if (true !== hasItem) {
      let someResult;
      if (addedMembers != null) {
        someResult = addedMembers.some((userId) => userId.userId === id1);
      }
      if (true === someResult) {
        const result = FavoritesActionCreators.autoAddJoinedThreadToFavorites(id);
        result.catch(NOOP);
      }
    } else {
      const result1 = FavoritesActionCreators.removeFavoriteChannel(id, { trackAnalytics: false });
    }
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
    const result = FavoritesActionCreators.autoAddJoinedThreadToFavorites(channel.id);
    result.catch(NOOP);
  }
}
function handleThreadMemberUpdate(joinTimestamp) {
  joinTimestamp = joinTimestamp.joinTimestamp;
  ({ id, userId } = joinTimestamp);
  let tmp = AuthenticationStore.getId() === userId;
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
    const result = FavoritesActionCreators.autoAddJoinedThreadToFavorites(id);
    result.catch(NOOP);
  }
}
const FavoritesGuildSuggestionsStore = fn(18790);
({ NO_SUGGESTIONS: c3, setFavoritesGuildSuggestions: closure_4 } = FavoritesGuildSuggestionsStore);
const NOOP = fn(1072).NOOP;
const prototype = function FavoriteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_DELETE: handleChannelDelete, CATEGORY_COLLAPSE: handleCategoryCollapse, CATEGORY_EXPAND: handleCategoryExpand, CATEGORY_COLLAPSE_ALL: handleCategoryCollapseAll, CATEGORY_EXPAND_ALL: handleCategoryExpandAll, LOGOUT: handleLogout, THREAD_CREATE: handleThreadCreate, THREAD_MEMBERS_UPDATE: handleThreadMembersUpdate, THREAD_MEMBER_UPDATE: handleThreadMemberUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default prototype1;