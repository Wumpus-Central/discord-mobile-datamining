// === Module 1429: date ===

// Module 1429 (date)
import obj132 from "obj132" /* 2 */;
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields" /* 1430 */;

const obj = { id: "373", name: "Favorites", description: "The place for all your favorite channels!", joinedAt: new Date(), maxMembers: 500000 };
const result = fromGuildPropertiesWithAdditionalFields.constructFromPartialGuildRecord(obj);
const date = new Date();
const result1 = obj132.fileFinishedImporting("modules/favorites/FavoritesConstants.tsx");

export const FAVORITES_RAW_GUILD_ID = "373";
export const FAVORITES_GUILD_RECORD = result;
export const FAVORITES_UNCATEGORIZED_PARENT_ID = "0";
export const MAX_FAVORITE_CHANNELS = 200;
export const MAX_FAVORITES_ADD_CHANNEL_COUNT = 20;
export const MAX_FAVORITE_CATEGORY_NAME_LENGTH = 100;