// === Module 5168: FavoritesConstants ===

// Module 5168 (FavoritesConstants)
import GuildRecordUtils from "GuildRecordUtils" /* 5169 */;
import size from "module_2" /* 2 */;

const obj = { id: "373", name: "Favorites", description: "The place for all your favorite channels!", joinedAt: new Date(), maxMembers: 500000 };
const result = GuildRecordUtils.constructFromPartialGuildRecord(obj);
const result1 = size.fileFinishedImporting("modules/favorites/FavoritesConstants.tsx");

export const FAVORITES_RAW_GUILD_ID = "373";
export const FAVORITES_GUILD_RECORD = result;
export const FAVORITES_UNCATEGORIZED_PARENT_ID = "0";
export const MAX_FAVORITE_CHANNELS = 200;
export const MAX_FAVORITES_ADD_CHANNEL_COUNT = 20;
export const MAX_FAVORITE_CATEGORY_NAME_LENGTH = 100;
export const FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME = "Auto-Added Threads";
export const FAVORITES_AUTO_ADD_THREADS_PER_GUILD = "per-guild";
export const FAVORITES_AUTO_ADD_THREADS_OWN_CATEGORY = "own-category";
export const FAVORITES_AUTO_ADD_THREADS_NEVER = "never";
export const FAVORITES_PRUNE_WHEN_ARCHIVED = 0;
export const FAVORITES_PRUNE_INACTIVE_THREADS_DAY_OPTIONS = [0, 7, 14];
export const FAVORITES_PRUNE_SCOPE_AUTO_ADDED = "auto-added";
export const FAVORITES_PRUNE_SCOPE_ALL = "all";