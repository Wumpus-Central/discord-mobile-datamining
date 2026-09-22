// === Module 2055: FavoritesConstants ===

// Module 2055 (FavoritesConstants)
import GuildRecordUtils from "GuildRecordUtils" /* 2056 */;
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