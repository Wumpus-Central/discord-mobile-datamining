// discord_app/modules/dismissible_content/DismissibleContentTypes.tsx
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING,
  dismissible_content.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE,
  dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
  dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE,
  dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER,
  dismissible_content.DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL,
  dismissible_content.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
  dismissible_content.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA,
  dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER,
  dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER,
];
const items1 = [
  dismissible_content.DismissibleContent.GIFTING_INTENT_FRIENDS_TAB_BADGE,
  dismissible_content.DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL,
  dismissible_content.DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK,
  dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION,
  dismissible_content.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
  dismissible_content.DismissibleContent.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK,
  dismissible_content.DismissibleContent.NITRO_TENURE_BADGE_LEVEL_UP,
  dismissible_content.DismissibleContent.CHANNEL_REORDER_MODAL_DISMISS_SETTING,
  dismissible_content.DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
  dismissible_content.DismissibleContent.NAGBAR_NOTICE_OFFER_EXPIRING,
  dismissible_content.DismissibleContent.NOTIFICATION_NUDGE_DM_HOME_BANNER,
  dismissible_content.DismissibleContent.NOTIFICATION_NUDGE_CHAT_BOTTOM_BANNER,
  dismissible_content.DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER,
  dismissible_content.DismissibleContent.NOTIFICATION_NUDGE_POST_REACTION_BANNER,
  dismissible_content.DismissibleContent.GUILD_TAG_UPDATED_COACHMARK,
  dismissible_content.DismissibleContent.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
  dismissible_content.DismissibleContent.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
  dismissible_content.DismissibleContent.FIRST_BOOSTER_UPSELL_OVERSEER,
  dismissible_content.DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE,
  dismissible_content.DismissibleContent.RIOT_CONNECTION_DEPRECATION,
  dismissible_content.DismissibleContent.RIOT_CONNECTION_DEPRECATION_ADMIN,
  dismissible_content.DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT,
  dismissible_content.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION,
  dismissible_content.DismissibleContent.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
  dismissible_content.DismissibleContent.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
  dismissible_content.DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR,
  dismissible_content.DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING,
  dismissible_content.DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK,
  dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX,
  dismissible_content.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION,
  dismissible_content.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES,
];
const items2 = [
  dismissible_content.DismissibleContent.GIFTING_PROMOTION_ICON,
  dismissible_content.DismissibleContent.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
  dismissible_content.DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
  dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
  dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL,
  dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
  dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
  dismissible_content.DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET,
  dismissible_content.DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
  dismissible_content.DismissibleContent.PREMIUM_ORBS_REWARDS_DROP_POPOVER,
  dismissible_content.DismissibleContent.QUEST_HOME_ENTRYPOINT_TAKEOVER_BADGE,
  dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2,
  dismissible_content.DismissibleContent.ML_REVERSE_TRIAL_UPSELL_MODAL,
  dismissible_content.DismissibleContent.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL,
  dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
  dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_USER_SETTINGS_OFFER_BADGE,
  dismissible_content.DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK,
  dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
  dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER,
  dismissible_content.DismissibleContent.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
  dismissible_content.DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK,
  dismissible_content.DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR,
  dismissible_content.DismissibleContent.MONTHLY_TO_YEARLY_UPSELL_NITRO_TAB_POPOVER,
  dismissible_content.DismissibleContent.PREMIUM_SHOP_NAGBAR_NOTICE,
  dismissible_content.DismissibleContent.GUILD_HEADER_COACHMARK,
  dismissible_content.DismissibleContent.GUILD_BOOST_TAB_BANNER,
];
const items3 = [
  dismissible_content.DismissibleContent.GAME_SHOP_NEW_BADGE,
  dismissible_content.DismissibleContent.GAME_SHOP_NEW_DROP_POPOVER,
];
const items4 = [
  dismissible_content.DismissibleContent.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
  dismissible_content.DismissibleContent.GAME_SERVER_HOSTING_NEW_BADGE,
  dismissible_content.DismissibleContent.GAME_SERVER_HOSTING_NEW_COACHMARK,
  dismissible_content.DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK_V2,
  dismissible_content.DismissibleContent.GAME_CLAIM_COACHMARK,
  dismissible_content.DismissibleContent.FIRST_BOOSTER_UPSELL,
  dismissible_content.DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER,
  dismissible_content.DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION,
];
const items5 = [
  dismissible_content.DismissibleContent.BOOST_TO_UNLOCK_COACHMARK,
  dismissible_content.DismissibleContent.EXPIRING_POWERUP_COACHMARK,
  dismissible_content.DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD,
];
const keys = Object.keys(dismissible_content.DismissibleContent);
const mapped = keys.map((item) => parseInt(item));
const found = mapped.filter((item) => !isNaN(item));
const found1 = found.filter(isSingleUseDismissibleContent);
const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentTypes.tsx");

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
