// === Module 17499: FavoriteManager ===

// Module 17499 (FavoriteManager)
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10223 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

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
function handleThreadMembersUpdate(addedMembers) {
  addedMembers = addedMembers.addedMembers;
  const id = AuthenticationStore.getId();
  if (tmp2) {
    const result = FavoritesActionCreators.autoAddJoinedThreadToFavorites(addedMembers.id);
    result.catch(NOOP);
  }
  tmp2 = null != id && null != addedMembers && addedMembers.some((userId) => userId.userId === id);
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
const FavoritesGuildSuggestionsStore = fn(16202);
({ NO_SUGGESTIONS: c3, setFavoritesGuildSuggestions: closure_4 } = FavoritesGuildSuggestionsStore);
const NOOP = fn(1074).NOOP;
let prototype = function FavoriteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_DELETE: handleChannelDelete, CATEGORY_COLLAPSE: handleCategoryCollapse, CATEGORY_EXPAND: handleCategoryExpand, CATEGORY_COLLAPSE_ALL: handleCategoryCollapseAll, CATEGORY_EXPAND_ALL: handleCategoryExpandAll, LOGOUT: handleLogout, THREAD_CREATE: handleThreadCreate, THREAD_MEMBERS_UPDATE: handleThreadMembersUpdate, THREAD_MEMBER_UPDATE: handleThreadMemberUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default prototype;