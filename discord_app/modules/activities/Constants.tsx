// discord_app/modules/activities/Constants.tsx
import { ChannelTypes } from "ME";
import set from "set";
import { PermissionOverwriteType } from "../../flow/Server.tsx";

const items = ["1037680572660727838", "235088799074484224", "1007373802981822582", "1067803140071620628", "1194351737264406548", "1245041113882955918", "1245040907732910201", "1245040436427489471", "1208090049871351890", "1235205910863806484", "1227719606223765687"];
const items1 = ["1247266306231898122", "1257458870390099989", "1276239071764680926"];
let obj = { UNLOCKED: 1, [1]: "UNLOCKED", PORTRAIT: 2, [2]: "PORTRAIT", LANDSCAPE: 3, [3]: "LANDSCAPE" };
const items2 = ["755600276941176913", "880218832743055411", "1050941315912835122", "880218394199220334"];
let set = new Set(items2);
obj = { label_type: require("PermissionOverwriteType").EmbeddedActivityLabelTypes.NONE, release_phase: "", label_from: null, label_until: null, omit_badge_from_surfaces: [] };
obj = { application_id: "", requires_age_gate: false, legacy_responsive_aspect_ratio: false, default_orientation_lock_state: obj.UNLOCKED, tablet_default_orientation_lock_state: obj.UNLOCKED, supported_platforms: null, client_platform_config: null, has_csp_exception: false, displays_advertisements: false, blocked_locales: null, supported_locales: null };
const items3 = [require("PermissionOverwriteType").EmbeddedActivitySupportedPlatforms.WEB];
obj[5] = items3;
obj[6] = { [PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.WEB]: obj, [PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.IOS]: obj, [PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.ANDROID]: obj };
obj[9] = [];
obj[10] = [];
const items4 = [, , ];
({ GUILD_TEXT: arr5[0], DM: arr5[1], GROUP_DM: arr5[2] } = ChannelTypes);
const items5 = [];
items5[HermesBuiltin.arraySpread(items4, 0)] = ChannelTypes.GUILD_VOICE;
const result = set.fileFinishedImporting("modules/activities/Constants.tsx");

export const ACTIVITY_INVITE_COVER_IMAGE_SIZE = 160;
export const validStreamURL = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/;
export const XBOX_ACTIVITY_APPLICATION_ID = "438122941302046720";
export const META_PRESENCE_APPLICATION_ID = "1417273808645259344";
export const END_GAME_APPLICATION_ID = "773336526917861400";
export const FISHINGTON_APPLICATION_ID = "814288819477020702";
export const YOUTUBE_APPLICATION_ID = "755600276941176913";
export const WATCH_YOUTUBE_DEV_APP_ID = "880218832743055411";
export const WATCH_YOUTUBE_QA_APP_ID = "1050941315912835122";
export const PUTT_PARTY_DEV_APP_ID = "910224161476083792";
export const PUTT_PARTY_QA_APP_ID = "945748195256979606";
export const JAM_SPACE_APPLICATION_ID = "1070087967294631976";
export const GARTIC_PHONE_APPLICATION_ID = "1007373802981822582";
export const GARTIC_PHONE_DEV_APPLICATION_ID = "1067803140071620628";
export const COLOR_TOGETHER_APPLICATION_ID = "1039835161136746497";
export const SPELL_CAST_APPLICATION_ID = "852509694341283871";
export const LAND_IO_APPLICATION_ID = "903769130790969345";
export const WATCH_YOUTUBE_PROD_APP_ID = "880218394199220334";
export const KWIM_APPLICATION_ID = "1078728822972764312";
export const BOBBLE_LEAGUE_APPLICATION_ID = "947957217959759964";
export const CHECKERS_IN_THE_PARK_APP_ID = "832013003968348200";
export const CHESS_IN_THE_PARK_APP_ID = "832012774040141894";
export const BLAZIN_8S_APPLICATION_ID = "832025144389533716";
export const POKER_NIGHT_APPLICATION_ID = "755827207812677713";
export const LETTER_LEAGUE_APPLICATION_ID = "879863686565621790";
export const SKETCH_HEADS_APPLICATION_ID = "902271654783242291";
export const CHEF_SHOWDOWN_APPLICATION_ID = "1037680572660727838";
export const PUTT_PARTY_PROD_APPLICATION_ID = "945737671223947305";
export const KRUNKER_STAGING_APPLICATION_ID = "1010174316991762534";
export const KRUNKER_STRIKE_APPLICATION_ID = "1011683823555199066";
export const COLONIST_APPLICATION_ID = "1106787098452832296";
export const AM_HARMONY_STG_APPLICATION_ID = "1234546995360694434";
export const AM_HARMONY_PRD_APPLICATION_ID = "1214629548377768066";
export const RYTHM_APPLICATION_ID = "235088799074484224";
export const PAPERY_MATCH_APPLICATION_ID = "1235205910863806484";
export const EXORACER_APPLICATION_ID = "1220052815590723654";
export const CLASH_GEM_CARD_PARTY_APPLICATION_ID = "1222080278672179220";
export const MAGIC_CIRCLE_APPLICATION_ID = "1227719606223765687";
export const DEATH_BY_AI_APPLICATION_ID = "1194351737264406548";
export const TINY_ROYALE_APP_1 = "1245041113882955918";
export const TINY_ROYALE_APP_2 = "1245040907732910201";
export const TINY_ROYALE_APP_3 = "1245040436427489471";
export const TINY_ROYALE_APP_4 = "1208090049871351890";
export const TWELVE_BULLETS_DEV = "1247266306231898122";
export const TWELVE_BULLETS_STG = "1257458870390099989";
export const TWELVE_BULLETS_PRD = "1276239071764680926";
export const EMBEDDED_ACTIVITY_SURVEY_URL = "https://discord.sjc1.qualtrics.com/jfe/form/SV_6SvWAOxlcSRWiEu";
export const EMBEDDED_ACTIVITIES_BLOG_POST_URL = "https://discord.com/blog/server-activities-games-voice-watch-together";
export const ImageSizes = { SMALL: 64, LARGE: 160 };
export const STAFF_RELEASE_PHASES = ["in_development", "activities_team", "employee_release"];
export const EXCLUDE_FULL_SCREEN_APPS = items;
export const SHARE_INTERACTION_APPS = items1;
export const ActivityFeedbackReasons = { ADS: "ADS", FAILED_LOAD: "FAILED_LOAD", LAGGING: "LAGGING", CONFUSING: "CONFUSING", NOT_FUN: "NOT_FUN", OTHER: "OTHER" };
export const ActivityIntent = { PLAY: 0, [0]: "PLAY", SPECTATE: 1, [1]: "SPECTATE" };
export const ActivityPlatform = { DESKTOP: "desktop", MOBILE: "mobile" };
export const ActivityTooltipName = { BETRAYAL_MARKETING_TOOLTIP: "BETRAYAL_MARKETING_TOOLTIP", FISHINGTON_MARKETING_TOOLTIP: "FISHINGTON_MARKETING_TOOLTIP", POKER_MARKETING_TOOLTIP: "POKER_MARKETING_TOOLTIP", YOUTUBE_MARKETING_TOOLTIP: "YOUTUBE_MARKETING_TOOLTIP" };
export const OrientationLockState = obj;
export const APPLICATIONS_WITH_ALLOWED_POPUPS = set;
export const ActivityScreenOrientation = { PORTRAIT: 0, [0]: "PORTRAIT", LANDSCAPE: 1, [1]: "LANDSCAPE" };
export const ActivityLayoutMode = { FOCUSED: 0, [0]: "FOCUSED", PIP: 1, [1]: "PIP", GRID: 2, [2]: "GRID" };
export const DEFAULT_EMBEDDED_ACTIVITY_CONFIG = obj;
export const SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES = items4;
export const SUPPORTED_ACTIVITIES_CHANNEL_TYPES = items5;
export function getAppIntentScheme(arg0) {
  if ("tiktok" === arg0) {
    return "tiktok://";
  } else if ("photos" === arg0) {
    return "photos-redirect://";
  } else if ("snapchat" === arg0) {
    return "snapchat://";
  } else if ("instagram" === arg0) {
    return "instagram://";
  }
}
export const PRIVATE_APPS_HELP_ARTICLE = "https://support-dev.discord.com/hc/en-us/articles/21692628851351-Private-Activity-Safety";
export const DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY = "disallowed_navigation_error_close_activity";
export const ACTIVITY_PORTRAIT_ASPECT_RATIO = 0.5625;
export const ACTIVITY_LANDSCAPE_ASPECT_RATIO = 1.7777777777777777;
export const ActivityPopoutWindowLayouts = { NORMAL: "normal", FULL_SCREEN: "full-screen" };
export const INVITE_EXPIRATION_MS = 21600000;