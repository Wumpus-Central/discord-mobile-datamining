// discord_app/modules/favorites/FavoriteManager.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getFavoritesAwareGuildName from "FavoritesUtils.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import getNextPositionFromChannels from "FavoritesActionCreators.tsx";
import items from "FavoritesGuildSuggestionsStore.tsx";

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
  obj = getFavoritesAwareGuildName;
}
function handleCategoryExpandAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = getNextPositionFromChannels.setFavoriteCategoriesCollapsed(false);
    const tmpResult = getNextPositionFromChannels;
  }
  obj = getFavoritesAwareGuildName;
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
let result = obj132.fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default prototype;