// === Module 8575: ContentInventoryFeedKey ===

// Module 8575 (ContentInventoryFeedKey)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryConstants.tsx");

export const ContentInventoryFeedKey = { GLOBAL_FEED: "global feed", GAME_PROFILE_FEED: "game profile feed" };
export const ContentInventorySurfaceTypes = { GUILD_MEMBER_LIST: 1, [1]: "GUILD_MEMBER_LIST" };
export const ContentInventoryInteractionTypes = { CARD_POPOUT_OPEN: 2, [2]: "CARD_POPOUT_OPEN", REACTION_EMOJI_REACT_SENT: 3, [3]: "REACTION_EMOJI_REACT_SENT", DM_REACTION_MESSAGE_SENT: 4, [4]: "DM_REACTION_MESSAGE_SENT", CHANNEL_REACTION_MESSAGE_SENT: 5, [5]: "CHANNEL_REACTION_MESSAGE_SENT", VOICE_CHANNEL_JOINED: 6, [6]: "VOICE_CHANNEL_JOINED", VOICE_CHANNEL_PREVIEWED: 7, [7]: "VOICE_CHANNEL_PREVIEWED", OPENED_GAME_PROFILE: 8, [8]: "OPENED_GAME_PROFILE", COPIED_LEADERBOARD_ROW: 9, [9]: "COPIED_LEADERBOARD_ROW", APPLICATION_WIDGET_PREVIEW_VIEW_MORE: 10, [10]: "APPLICATION_WIDGET_PREVIEW_VIEW_MORE" };
export const FEED_OFF_BY_DEFAULT_ABOVE_MEMBER_COUNT = 10000;
export const NEW_RELEASE_CUTOFF_DAYS = 7;
export const IGDB_ATTRIBUTION_LINK = "https://www.igdb.com/about";
export const ContentInventoryEntryProviderTypes = { SPOTIFY: 1, [1]: "SPOTIFY", CRUNCHYROLL: 2, [2]: "CRUNCHYROLL", XBOX: 3, [3]: "XBOX", PLAYSTATION: 4, [4]: "PLAYSTATION" };