// === Module 16717: handleChannelDelete ===

// Module 16717 (handleChannelDelete)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 5038 */;
import getNextPositionFromChannels from "getNextPositionFromChannels" /* 9978 */;
import items from "items" /* 15464 */;

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
  callback(closure_2);
}
({ NO_SUGGESTIONS: obj1, setFavoritesGuildSuggestions: c3 } = items);
initializeDefault;
let prototype = function FavoriteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_DELETE: handleChannelDelete, CATEGORY_COLLAPSE: handleCategoryCollapse, CATEGORY_EXPAND: handleCategoryExpand, CATEGORY_COLLAPSE_ALL: handleCategoryCollapseAll, CATEGORY_EXPAND_ALL: handleCategoryExpandAll, LOGOUT: handleLogout };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default prototype;