// discord_app/modules/favorites/FavoriteManager.tsx
import "initialize";
import { getNextPositionFromChannels } from "FavoritesActionCreators.tsx";

const require = arg1;
function handleChannelDelete(channel) {
  const result = getNextPositionFromChannels /* getNextPositionFromChannels */.removeFavoriteChannel(channel.channel.id, { trackAnalytics: false });
}
function handleCategoryCollapse(id) {
  const result = getNextPositionFromChannels /* getNextPositionFromChannels */.setFavoriteCategoryCollapsed(id.id, true);
}
function handleCategoryExpand(id) {
  const result = getNextPositionFromChannels /* getNextPositionFromChannels */.setFavoriteCategoryCollapsed(id.id, false);
}
function handleCategoryCollapseAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = getNextPositionFromChannels /* getNextPositionFromChannels */.setAllFavoriteCategoriesCollapsed(true);
    const tmpResult = getNextPositionFromChannels /* getNextPositionFromChannels */;
  }
}
function handleCategoryExpandAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = getNextPositionFromChannels /* getNextPositionFromChannels */.setAllFavoriteCategoriesCollapsed(false);
    const tmpResult = getNextPositionFromChannels /* getNextPositionFromChannels */;
  }
}
let prototype = function FavoriteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_DELETE: handleChannelDelete, CATEGORY_COLLAPSE: handleCategoryCollapse, CATEGORY_EXPAND: handleCategoryExpand, CATEGORY_COLLAPSE_ALL: handleCategoryCollapseAll, CATEGORY_EXPAND_ALL: handleCategoryExpandAll };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("initialize").fileFinishedImporting("modules/favorites/FavoriteManager.tsx");

export default prototype;