// discord_app/modules/dismissible_content/DismissibleContentTypes.tsx
import set from "../../../_runtime/00002_set.js";
import DismissibleContent from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";

function isSingleUseDismissibleContent(item10020) {
  let hasItem = items1.includes(item10020);
  if (!hasItem) {
    hasItem = items.includes(item10020);
  }
  if (!hasItem) {
    hasItem = items2.includes(item10020);
  }
  return !hasItem;
}
const items = [
  DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING,
  DismissibleContent.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE,
  DismissibleContent.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
  DismissibleContent.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE,
  DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER,
  DismissibleContent.DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL,
  DismissibleContent.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
  DismissibleContent.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA,
  DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
  DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER,
];
const items1 = [
  DismissibleContent.DismissibleContent.GIFTING_INTENT_FRIENDS_TAB_BADGE,
  DismissibleContent.DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL,
  DismissibleContent.DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK,
  DismissibleContent.DismissibleContent.GUILD_POWERUP_NOTIFICATION,
  DismissibleContent.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
  DismissibleContent.DismissibleContent.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK,
  DismissibleContent.DismissibleContent.NITRO_TENURE_BADGE_LEVEL_UP,
  DismissibleContent.DismissibleContent.CHANNEL_REORDER_MODAL_DISMISS_SETTING,
  DismissibleContent.DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
  DismissibleContent.DismissibleContent.NAGBAR_NOTICE_OFFER_EXPIRING,
  DismissibleContent.DismissibleContent.NOTIFICATION_NUDGE_DM_HOME_BANNER,
  DismissibleContent.DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER,
  DismissibleContent.DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER,
  DismissibleContent.DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER,
  DismissibleContent.DismissibleContent.GUILD_TAG_UPDATED_COACHMARK,
  DismissibleContent.DismissibleContent.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
  DismissibleContent.DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
  DismissibleContent.DismissibleContent.FIRST_BOOSTER_UPSELL_OVERSEER,
  DismissibleContent.DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE,
  DismissibleContent.DismissibleContent.RIOT_CONNECTION_DEPRECATION,
  DismissibleContent.DismissibleContent.RIOT_CONNECTION_DEPRECATION_ADMIN,
  DismissibleContent.DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT,
  DismissibleContent.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION,
  DismissibleContent.DismissibleContent.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
  DismissibleContent.DismissibleContent.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
  DismissibleContent.DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR,
  DismissibleContent.DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING,
  DismissibleContent.DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK,
  DismissibleContent.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX,
  DismissibleContent.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION,
  DismissibleContent.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES,
];
const items2 = [
  DismissibleContent.DismissibleContent.GIFTING_PROMOTION_ICON,
  DismissibleContent.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
  DismissibleContent.DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
  DismissibleContent.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
  DismissibleContent.DismissibleContent.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL,
  DismissibleContent.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
  DismissibleContent.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
  DismissibleContent.DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET,
  DismissibleContent.DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
  DismissibleContent.DismissibleContent.PREMIUM_ORBS_REWARDS_DROP_POPOVER,
  DismissibleContent.DismissibleContent.QUEST_HOME_ENTRYPOINT_TAKEOVER_BADGE,
  DismissibleContent.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2,
  DismissibleContent.DismissibleContent.ML_REVERSE_TRIAL_UPSELL_MODAL,
  DismissibleContent.DismissibleContent.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL,
  DismissibleContent.DismissibleContent.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
  DismissibleContent.DismissibleContent.PREMIUM_MARKETING_MOMENT_USER_SETTINGS_OFFER_BADGE,
  DismissibleContent.DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK,
  DismissibleContent.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
  DismissibleContent.DismissibleContent.GIFTING_PROMOTION_REMINDER,
  DismissibleContent.DismissibleContent.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
  DismissibleContent.DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK,
  DismissibleContent.DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR,
  DismissibleContent.DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_NITRO_TAB_POPOVER,
  DismissibleContent.DismissibleContent.PREMIUM_SHOP_NAGBAR_NOTICE,
];
const items3 = [
  DismissibleContent.DismissibleContent.GAME_SHOP_NEW_BADGE,
  DismissibleContent.DismissibleContent.GAME_SHOP_NEW_DROP_POPOVER,
];
const items4 = [
  DismissibleContent.DismissibleContent.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
  DismissibleContent.DismissibleContent.GAME_SERVER_HOSTING_NEW_BADGE,
  DismissibleContent.DismissibleContent.GAME_SERVER_HOSTING_NEW_COACHMARK,
  DismissibleContent.DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK_V2,
  DismissibleContent.DismissibleContent.GAME_CLAIM_COACHMARK,
  DismissibleContent.DismissibleContent.FIRST_BOOSTER_UPSELL,
  DismissibleContent.DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER,
  DismissibleContent.DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION,
];
const items5 = [
  DismissibleContent.DismissibleContent.BOOST_TO_UNLOCK_COACHMARK,
  DismissibleContent.DismissibleContent.EXPIRING_POWERUP_COACHMARK,
  DismissibleContent.DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD,
];
const keys = Object.keys(DismissibleContent.DismissibleContent);
const mapped = keys.map((joined) => parseInt(joined));
const found = mapped.filter((arg0) => !isNaN(arg0));
const found1 = found.filter(isSingleUseDismissibleContent);
const result = set.fileFinishedImporting("modules/dismissible_content/DismissibleContentTypes.tsx");

export const versionedDismissibleContents = items;
export const timeRecurringDismissibleContents = items1;
export const snowflakeBoundDismissibleContents = items2;
export const snowflakeBoundGuildDismissibleContents = items3;
export const singleUseGuildDismissibleContents = items4;
export const timeRecurringGuildDismissibleContents = items5;
export const isTimeRecurringDismissibleContent = function isTimeRecurringDismissibleContent(id) {
  return items1.includes(id);
};
export const isVersionedDismissibleContent = function isVersionedDismissibleContent(id) {
  return items.includes(id);
};
export const isSnowflakeBoundDismissibleContent = function isSnowflakeBoundDismissibleContent(id) {
  return items2.includes(id);
};
export const isRecurringDismissibleContent = function isRecurringDismissibleContent(arg0) {
  let hasItem = items1.includes(arg0);
  if (!hasItem) {
    hasItem = items.includes(arg0);
  }
  if (!hasItem) {
    hasItem = items2.includes(arg0);
  }
  return hasItem;
};
export { isSingleUseDismissibleContent };
export const isSingleUseGuildDismissibleContent = function isSingleUseGuildDismissibleContent(GDM_INVITE_REMINDER) {
  return items4.includes(GDM_INVITE_REMINDER);
};
export const isTimeRecurringGuildDismissibleContent = function isTimeRecurringGuildDismissibleContent(
  GDM_INVITE_REMINDER,
) {
  return items5.includes(GDM_INVITE_REMINDER);
};
export const isSnowflakeBoundGuildDismissibleContent = function isSnowflakeBoundGuildDismissibleContent(
  GDM_INVITE_REMINDER,
) {
  return items3.includes(GDM_INVITE_REMINDER);
};
export const isGuildDismissibleContent = function isGuildDismissibleContent(dismissibleContent) {
  let hasItem = items4.includes(dismissibleContent);
  if (!hasItem) {
    hasItem = items5.includes(dismissibleContent);
  }
  if (!hasItem) {
    hasItem = items3.includes(dismissibleContent);
  }
  return hasItem;
};
export const ALL_DISMISSIBLE_CONTENT = found;
export const ALL_SINGLE_USE_DISMISSIBLE_CONTENT = found1;
