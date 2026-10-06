// === Module 8352: GameProfileAnalyticUtils ===

// Module 8352 (GameProfileAnalyticUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import v1 from "v1" /* 1266 */;
import ContentInventoryConstants from "ContentInventoryConstants" /* 8037 */;
import ContentInventoryStore from "ContentInventoryStore" /* 8022 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const ContentInventoryFeedKey = ContentInventoryConstants.ContentInventoryFeedKey;
const result = size.fileFinishedImporting("modules/game_profile/GameProfileAnalyticUtils.tsx");

export const GameProfileEmbedAction = { CopyLink: 0, [0]: "CopyLink" };
export const GameProfileTrackActionActions = { FollowGame: 0, [0]: "FollowGame", UnfollowGame: 1, [1]: "UnfollowGame", ClickMessageUser: 2, [2]: "ClickMessageUser", SendMessageUser: 3, [3]: "SendMessageUser", JoinVC: 4, [4]: "JoinVC", WatchStream: 5, [5]: "WatchStream", ClickSimilarGame: 6, [6]: "ClickSimilarGame", WebsiteLink: 7, [7]: "WebsiteLink", XLink: 8, [8]: "XLink", YouTubeLink: 9, [9]: "YouTubeLink", ShowMore: 10, [10]: "ShowMore", ShowLess: 11, [11]: "ShowLess", JoinServer: 12, [12]: "JoinServer", ClickImage: 13, [13]: "ClickImage", GameShop: 14, [14]: "GameShop", LinkAccount: 15, [15]: "LinkAccount", ClaimGame: 16, [16]: "ClaimGame", FacebookLink: 17, [17]: "FacebookLink", InstagramLink: 18, [18]: "InstagramLink", BlueskyLink: 19, [19]: "BlueskyLink", RedditLink: 20, [20]: "RedditLink", TwitchLink: 21, [21]: "TwitchLink", SteamStoreLink: 22, [22]: "SteamStoreLink", EpicStoreLink: 23, [23]: "EpicStoreLink", RobloxStoreLink: 24, [24]: "RobloxStoreLink", BattlenetStoreLink: 25, [25]: "BattlenetStoreLink", RiotStoreLink: 26, [26]: "RiotStoreLink", MinecraftStoreLink: 27, [27]: "MinecraftStoreLink", DiscordCollectiblesShop: 28, [28]: "DiscordCollectiblesShop", DiscordCollectiblesShopItem: 29, [29]: "DiscordCollectiblesShopItem", GameShopItem: 30, [30]: "GameShopItem", SteamReviews: 31, [31]: "SteamReviews", OpenCriticReviews: 32, [32]: "OpenCriticReviews", Announcements: 33, [33]: "Announcements", AnnouncementsItem: 34, [34]: "AnnouncementsItem", CloudPlay: 35, [35]: "CloudPlay", ClickTrailer: 36, [36]: "ClickTrailer", Feedback: 37, [37]: "Feedback", XboxGamePassStoreLink: 38, [38]: "XboxGamePassStoreLink", CopyLink: 39, [39]: "CopyLink", Overview: 40, [40]: "Overview", Communities: 41, [41]: "Communities" };
export const GameProfileSources = { ActivityCard: "activity_card", ActivityCardContextMenu: "activity_card_context_menu", UserProfile: "user_profile", UserProfileApplicationWidget: "user_profile_application_widget", UserProfileCardContextMenu: "user_profile_card_context_menu", SimilarGames: "similar_games", DevTools: "dev_tools", Embed: "embed", GameProfileEmbed: "game_profile_embed", RtcPanel: "rtc_panel", FriendsActivityFeed: "friends_activity_feed", MiniGameProfile: "mini_game_profile", GameMention: "game_mention", GameSheet: "game_sheet", QuestBar: "quest_bar", QuestHome: "quest_home_desktop", QuestInGameModal: "quest_in_game_modal", QuestActivityPanel: "quest_activity_panel", QuestEmbed: "quest_embed", QuestLiveStream: "quest_live_stream", ClipEmbed: "clip_embed", ClipsReminder: "clips_reminder", AnnouncementChannelReturn: "announcement_channel_return", CallTile: "call_tile", InAppBrowserReturn: "in_app_browser_return", Deeplink: "deeplink", DmHeaderActivity: "dm_header_activity", VcHeaderActivity: "vc_header_activity", QuickSwitcher: "quick_switcher", GuildProfileGames: "guild_profile_games", GameInvitesChannel: "game_invites_channel", VoiceChannelGames: "voice_channel_games" };
export const GameProfileTypes = { FullProfile: "full_profile", MiniProfile: "mini_profile" };
export const getGuildIdAndVerifiedFromInvite = function getGuildIdAndVerifiedFromInvite(current) {
  let flag;
  let id;
  if (current != null) {
    const guild = current.guild;
    if (guild != null) {
      id = guild.id;
    }
  }
  if (id == null) {
    id = null;
  }
  const obj = { guildId: id, isVerified: flag };
  flag = undefined;
  if (current != null) {
    const guild2 = current.guild;
    if (guild2 != null) {
      const features = guild2.features;
      flag = features.includes(hasOwnProperty.VERIFIED);
    }
  }
  if (flag == null) {
    flag = false;
  }
  return obj;
};
export const generateViewId = function generateViewId() {
  const obj = v1;
  return obj.v4();
};
export const trackGameProfileOpen = function trackGameProfileOpen(viewId) {
  let authorId;
  let gameId;
  let gameName;
  let profileType;
  let source;
  viewId = viewId.viewId;
  ({ source, gameName, gameId, authorId, profileType } = viewId);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { view_id: viewId, source, game_name: gameName, application_id: gameId, author_id: authorId, request_id: ContentInventoryStore.getFeedRequestId(ContentInventoryFeedKey.GLOBAL_FEED), profile_type: profileType };
  obj.track(constants.GAME_PROFILE_OPEN, obj2);
  return viewId;
};
export const trackGameProfileClose = function trackGameProfileClose(guildId) {
  let gameId;
  let gameName;
  let isVerified;
  let playedFriendIds;
  let playedFriendsData;
  let similarGames;
  let tmp2;
  let viewId;
  guildId = guildId.guildId;
  ({ viewId, gameName, gameId, playedFriendIds, playedFriendsData, similarGames, isVerified } = guildId);
  const tmp = AnalyticsUtilsDefault;
  const track = tmp.track;
  const GAME_PROFILE_CLOSE = constants.GAME_PROFILE_CLOSE;
  const obj = { view_id: viewId, game_name: gameName, application_id: gameId, played_friend_ids: playedFriendIds, played_friends_data: playedFriendsData, similar_games: similarGames, request_id: ContentInventoryStore.getFeedRequestId(ContentInventoryFeedKey.GLOBAL_FEED), official_guild_id: tmp2, guild_id: guildId };
  tmp2 = undefined;
  if (isVerified) {
    tmp2 = guildId;
  }
  track(GAME_PROFILE_CLOSE, obj);
};
export const trackGameProfileAction = function trackGameProfileAction(guildId) {
  let action;
  let gameId;
  let gameName;
  let isVerified;
  let recipientUserId;
  let similarGameId;
  let source;
  let tmp2;
  let viewId;
  guildId = guildId.guildId;
  ({ gameName, gameId, action, recipientUserId, similarGameId, viewId, isVerified, source } = guildId);
  const obj = { game_name: gameName, application_id: gameId, action, recipient_user_id: recipientUserId, similar_game_id: similarGameId, view_id: viewId, official_guild_id: tmp2, guild_id: guildId, source };
  tmp2 = undefined;
  const track = AnalyticsUtilsDefault.track;
  const GAME_PROFILE_ACTION = constants.GAME_PROFILE_ACTION;
  AnalyticsUtilsDefault;
  if (isVerified) {
    tmp2 = guildId;
  }
  track(GAME_PROFILE_ACTION, obj);
};
export const trackGameProfileEmbedAction = function trackGameProfileEmbedAction(arg0) {
  let action;
  let gameId;
  let gameName;
  ({ gameName, gameId, action } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.GAME_PROFILE_EMBED_ACTION, { game_name: gameName, application_id: gameId, action });
};
export const trackGameProfileFeedback = function trackGameProfileFeedback(arg0) {
  let applicationId;
  let feedback;
  let submitted;
  let suggestedGameApplicationId;
  let suggestedGameName;
  let viewId;
  ({ viewId, applicationId, suggestedGameName, suggestedGameApplicationId, feedback, submitted } = arg0);
  const obj = AnalyticsUtilsDefault;
  return obj.track(constants.GAME_PROFILE_FEEDBACK, { view_id, application_id, suggested_game_name, suggested_game_application_id, feedback, submitted });
};