// === Module 16354: handleChannelDelete ===

// Module 16354 (handleChannelDelete)
import "initialize";

const require = arg1;
function handleChannelDelete(channel) {
  const result = require(10227) /* getNextPositionFromChannels */.removeFavoriteChannel(channel.channel.id, { trackAnalytics: false });
}
function handleCategoryCollapse(id) {
  const result = require(10227) /* getNextPositionFromChannels */.setFavoriteCategoryCollapsed(id.id, true);
}
function handleCategoryExpand(id) {
  const result = require(10227) /* getNextPositionFromChannels */.setFavoriteCategoryCollapsed(id.id, false);
}
function handleCategoryCollapseAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = require(10227) /* getNextPositionFromChannels */.setAllFavoriteCategoriesCollapsed(true);
    const tmpResult = require(10227) /* getNextPositionFromChannels */;
  }
}
function handleCategoryExpandAll(guildId) {
  if (obj.isFavoritesGuildId(guildId.guildId)) {
    const result = require(10227) /* getNextPositionFromChannels */.setAllFavoriteCategoriesCollapsed(false);
    const tmpResult = require(10227) /* getNextPositionFromChannels */;
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