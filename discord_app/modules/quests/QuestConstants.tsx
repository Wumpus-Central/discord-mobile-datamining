// discord_app/modules/quests/QuestConstants.tsx
import setDefault from "../../utils/Durations.tsx";
import QuestVariants from "../../../discord_common/js/shared/shared-constants/QuestVariants.tsx";
import Quests from "../../../discord_common/js/shared/shared-constants/Quests.tsx";
import QuestsVisibleMessagesChangedSource from "QuestTypes.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import set5 from "../../../discord_common/js/shared/shared-constants/FirstPartyQuestTaskTypes.tsx";
import DismissibleQuestContentFlags from "../../../discord_common/js/shared/shared-constants/DismissibleQuestContentFlags.tsx";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import apply from "../../../_runtime/00012_apply.js";
import set from "../../../_runtime/00002_set.js";

const items = [
  QuestVariants.QuestVariants.NITRO_2_POINT_0_CTA,
  QuestVariants.QuestVariants.ORBS_MULTIPLIER_QUEST,
  QuestVariants.QuestVariants.XBOX_GAME_PASS_QUEST,
];
let set = new Set(items);
const result = setDefault.Millis.MINUTE * Quests.Quests.ConsecutiveHeartbeatPeriodMinutes;
sendRequest = sendRequest.getAPIBaseURL();
if (-1 !== sendRequest.indexOf("localhost")) {
  const _HermesInternal = HermesInternal;
  let str2 = "" + sendRequest + "/_cdn_storage/";
} else {
  str2 = "https://cdn.discordapp.com/";
}
const text = `${str2}quests/`;
const items1 = [
  QuestsVisibleMessagesChangedSource.AdPlacement.DESKTOP_ACCOUNT_PANEL_AREA,
  QuestsVisibleMessagesChangedSource.AdPlacement.MOBILE_HOME_DOCK_AREA,
  QuestsVisibleMessagesChangedSource.AdPlacement.QUEST_HOME_BANNER_DESKTOP,
  QuestsVisibleMessagesChangedSource.AdPlacement.QUEST_HOME_MOBILE_CAROUSEL,
  QuestsVisibleMessagesChangedSource.AdPlacement.VIDEO_MODAL_MOBILE,
];
const items2 = [AdCreativeType.AdCreativeType.NO_FILL];
const set1 = new Set(items1);
const items3 = [
  set5.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP,
  set5.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP,
  set5.FirstPartyQuestTaskTypes.PLAY_ON_XBOX,
  set5.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION,
  set5.FirstPartyQuestTaskTypes.PLAY_ACTIVITY,
];
const set2 = new Set(items2);
const items4 = [
  set5.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP,
  set5.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP,
  set5.FirstPartyQuestTaskTypes.PLAY_ON_XBOX,
  set5.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION,
  set5.FirstPartyQuestTaskTypes.PLAY_ACTIVITY,
];
const set3 = new Set(items3);
const items5 = [
  set5.FirstPartyQuestTaskTypes.STREAM_ON_DESKTOP,
  set5.FirstPartyQuestTaskTypes.PLAY_ON_DESKTOP,
  set5.FirstPartyQuestTaskTypes.PLAY_ON_XBOX,
  set5.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION,
  set5.FirstPartyQuestTaskTypes.PLAY_ACTIVITY,
];
const set4 = new Set(items4);
let obj = { VIDEO: "task_video", PLAY: "task_play" };
obj = { VIRTUAL_CURRENCY: "reward_virtual_currency", COLLECTIBLE: "reward_collectible", IN_GAME: "reward_in_game" };
const items6 = [
  { group: "task", filter: obj.PLAY },
  { group: "task", filter: obj.VIDEO },
  { group: "reward", filter: obj.VIRTUAL_CURRENCY },
  { group: "reward", filter: obj.COLLECTIBLE },
  { group: "reward", filter: obj.IN_GAME },
];
let closure_2 = ["reward", "task"];
const entries = Object.entries(apply.groupBy(items6, "group"));
const sorted = entries.sort((arg0, arg1) => {
  const index = closure_2.indexOf(arg0[0]);
  const index1 = closure_2.indexOf(arg1[0]);
  let num = -1;
  if (index >= index1) {
    let num2 = 0;
    if (index1 < index) {
      num2 = 1;
    }
    num = num2;
  }
  return num;
});
const result1 = set.fileFinishedImporting("modules/quests/QuestConstants.tsx");

export const QuestsExperimentLocations = {
  ACTIVITY_PANEL: "quests_bar_activity_panel",
  QUESTS_MANAGER: "quests_manager",
  QUESTS_CONSOLE_OPTIMISTIC_UPDATES_MANAGER: "quests_console_optimistic_updates_manager",
  USER_SETTINGS_GIFT_INVENTORY: "user_settings_gift_inventory",
  USER_SETTINGS_SEARCH_GIFT_INVENTORY: "user_settings_search_gift_inventory",
  USE_QUESTS: "use_quests",
  STREAM_SOURCE_SELECT: "stream_source_select",
  MEMBERS_LIST: "members_list",
  QUESTS_BAR: "quests_bar",
  QUESTS_BAR_MOBILE: "quests_bar_mobile",
  REWARD_CODE_MODAL: "reward_code_modal",
  INGAME_REWARD_MODAL: "ingame_reward_modal",
  INGAME_CONNECTION_MODAL: "ingame_connection_modal",
  COLLECTIBLE_REWARD_MODAL: "collectible_reward_modal",
  ORBS_REWARD_MODAL: "orbs_reward_modal",
  QUESTS_MINOR_REWARD_CAPPING_CONFIG: "QUESTS_MINOR_REWARD_CAPPING_CONFIG",
  QUESTS_CARD: "quests_card",
  QUESTS_STORE: "quests_store",
  QUEST_CHANNEL_CALL_HEADER: "quests_channel_call_header",
  QUEST_HOME_DESKTOP: "quest_home_desktop",
  QUEST_HOME_HERO_SHELF_DESKTOP: "quest_home_hero_shelf_desktop",
  QUEST_HOME_DEFAULT_BANNER: "quest_home_default_banner",
  QUEST_HOME_MOBILE: "quest_home_mobile",
  QUEST_PROGRESS_BAR: "quest_progress_bar",
  EMBED_MOBILE: "embed_mobile",
  EMBED_DESKTOP: "embed_desktop",
  QUEST_CONTEXT_MENU: "context_menu",
  CODED_LINK: "coded_link",
  QUEST_DISCLOSURE_MODAL: "quest_disclosure_modal",
  DISCOVERY_SIDEBAR: "discovery_sidebar",
  DISCOVERY_COMPASS: "discovery_compass",
  BADGE: "badge",
  COLLECTIBLES_SHOP_HEADER_BAR: "collectibles_shop_header_bar",
  ORBS_ANNOUNCEMENT_MODAL: "orbs_announcement_modal",
  CONFLICT_CHECKS: "conflict_checks",
  VIDEO_MODAL: "video_modal",
  VIDEO_MODAL_MOBILE: "video_modal_mobile",
  GAME_WIDGETS_POPOVER: "game_widgets_popover",
  PRIVATE_CHANNELS_LIST: "private_channels_list",
  INTERNAL_TOOLING: "internal_tooling",
  QUEST_HOME_MOVED_CALLOUT: "quest_home_moved_callout",
  IN_APP_NAVIGATION: "in_app_navigation",
  QUEST_DEEP_LINK_UTIL: "quest_deep_link_util",
  YOU_TAB_PROFILE_HEADER: "you_tab_profile_header",
  QUEST_INSTRUCTIONS: "quest_instructions",
  QUEST_ACTIVITY_BOTTOM_SHEET: "quest_activity_bottom_sheet",
  QUEST_PRIMARY_CTA: "quest_primary_cta",
  QUEST_ACTIVITY_HEADER: "quest_activity_header",
  QUEST_ACTIVITY_UNENROLLED_MODAL: "quest_activity_unenrolled_modal",
  NITRO_HOME_MARKETING: "nitro_home_marketing",
  NITRO_HOME_TAB: "nitro_home_tab",
  QUEST_ORB_MULTIPLIER_TAB_TOOLTIP: "quest_orb_multiplier_tab_tooltip",
  PLAY_QUEST_CONNECTION_MODAL: "play_quest_connection_modal",
};
export const DismissibleQuestContentFlags = DismissibleQuestContentFlags.DismissibleQuestContentFlags;
export const QuestVariants = QuestVariants.QuestVariants;
export const NitroQuestVariants = set;
export const QUESTS_SETTINGS_SECTION = "inventory";
export const CONSECUTIVE_HEARTBEAT_PERIOD_MS = result;
export const QUEST_BAR_SPRING_CONFIG_QUEST_ACCEPTED = { tension: 900, friction: 45, clamp: true };
export const QUEST_BAR_SPRING_CONFIG_QUEST_UNACCEPTED = { tension: 360, friction: 30, clamp: true };
export const MIN_SEC_UNTIL_NEXT_PROGRESS_UPDATE = 6;
export const MIN_SEC_NOISE_PROGRESS_UPDATE = 2;
export const QuestTaskPlatform = { CONSOLE: "CONSOLE", DESKTOP: "DESKTOP" };
export const QuestAuthMethod = { IN_GAME: "in_game", WEB: "web" };
export const QUEST_SPLIT_MODAL_PANEL_WIDTH = 454;
export const QUEST_HERO_ASSET_ASPECT_RATIO = 3.5675675675675675;
export const CDN_URL_BASE = str2;
export const QUESTS_CDN_URL_BASE = text;
export const QuestDockMode = {
  COLLAPSED: "collapsed",
  EXPANDED: "expanded",
  CLOSED: "closed",
  SOFT_DISMISSED: "soft-dismissed",
  RESET_TO_PREVIOUS: "reset-to-previous",
};
export const DISCORD_APPLICATION_ID = "545364944258990091";
export const VideoKeyBindings = {
  PLAYBACK: "k",
  SPACE: " ",
  SEEK_BACK: "j",
  SEEK_FORWARD: "l",
  CAPTION: "c",
  FULLSCREEN: "f",
  MUTE: "m",
};
export const QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY = "QuestRewardCodeClaimBottomSheet";
export const QUEST_REWARD_DETAILS_BOTTOM_SHEET_KEY = "QuestRewardDetailsBottomSheet";
export const REWARD_CODE_PLACEHOLDER = "{reward_code}";
export const QuestEmbedFallbackReason = {
  EXCLUDED_QUEST: "excluded_quest",
  UNKNOWN_QUEST: "unknown_quest",
  NOT_SHAREABLE_QUEST: "not_shareable_quest",
};
export const BountyCarouselEmptyStateReason = { EMPTY: "empty", COMPLETED: "completed" };
export const ORBS_INTRO_QUEST_ID = "1333839522189938740";
export const MOBILE_ORBS_INTRO_QUEST_ID = "1410358070831480904";
export const PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID = "1420556874629251124";
export const PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID = "1402418703554842694";
export const DEFAULT_VIRTUAL_CURRENCY_QUEST_HOME_HERO_ID = "1496993616537587813";
export const DEFAULT_GENERIC_QUEST_HOME_HERO_ID = "1496993616537587812";
export const DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID = "1514687533122982012";
export const BILLABLE_PLACEMENTS = set1;
export const NON_BILLABLE_CREATIVE_TYPES = set2;
export const ACTIVE_NOW_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES = set3;
export const CHANNEL_HEADER_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES = set4;
export const MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES = new Set(items5);
export const EMPTY_AD_DECISION_DATA = { is_targeted: false };
export const QuestHomeSortMethods = {
  SUGGESTED: "suggested",
  MOST_RECENT: "most_recent",
  EXPIRING_SOON: "expiring_soon",
  RECENTLY_ENROLLED: "recently_enrolled",
};
export const TaskFilterTypes = obj;
export const RewardFilterTypes = obj;
export const getQuestHomeFilterOptionItem = function getQuestHomeFilterOptionItem(arg0) {
  let values = Object.values(obj);
  if (values.includes(arg0)) {
    obj = { group: "task", filter: null };
    obj[1] = arg0;
    let tmp2 = obj;
  } else {
    const _Object = Object;
    values = Object.values(obj);
    tmp2 = null;
    if (values.includes(arg0)) {
      obj = { group: "reward", filter: null };
      obj[1] = arg0;
      tmp2 = obj;
    }
  }
  return tmp2;
};
export const SORTED_QUEST_HOME_FILTER_GROUPS = sorted;
