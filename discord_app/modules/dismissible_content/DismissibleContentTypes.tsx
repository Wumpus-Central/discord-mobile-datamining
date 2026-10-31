// discord_app/modules/dismissible_content/DismissibleContentTypes.tsx
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import size from "../../../_runtime/metro/00002__.js";

function isSingleUseDismissibleContent(item) {
  let hasItem = items1.includes(item);
  if (!hasItem) {
    hasItem = items.includes(item);
  }
  if (!hasItem) {
    hasItem = items2.includes(item);
  }
  let tmp4 = !hasItem;
  if (!hasItem) {
    let hasItem1 = items4.includes(item);
    if (!hasItem1) {
      hasItem1 = items5.includes(item);
    }
    if (!hasItem1) {
      hasItem1 = items3.includes(item);
    }
    tmp4 = !hasItem1;
  }
  return tmp4;
}
const items = [
  dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING,
  dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING_COACHMARK,
  dismissible_content.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE,
  dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
  dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE,
  dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER,
  dismissible_content.DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL,
  dismissible_content.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
  dismissible_content.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA,
  dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER,
  dismissible_content.DismissibleContent.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED,
];
const items1 = [
  dismissible_content.DismissibleContent.GIFTING_INTENT_FRIENDS_TAB_BADGE,
  dismissible_content.DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL,
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
  dismissible_content.DismissibleContent.QUEST_HOME_NEW_QUEST_BADGE,
  dismissible_content.DismissibleContent.NOTIFICATION_NUDGE_POST_CALL_DISCONNECT,
  dismissible_content.DismissibleContent.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
  dismissible_content.DismissibleContent.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
  dismissible_content.DismissibleContent.COD_RELINK_NOTICE,
  dismissible_content.DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING,
  dismissible_content.DismissibleContent.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK,
  dismissible_content.DismissibleContent.BOUNTIES_RECURRING_SWIPE_UP_NUX,
  dismissible_content.DismissibleContent.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED,
  dismissible_content.DismissibleContent.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED,
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
  dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2,
  dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_RECURRING_REMINDER,
  dismissible_content.DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT,
  dismissible_content.DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_RECURRING_REMINDER,
  dismissible_content.DismissibleContent.ML_REVERSE_TRIAL_UPSELL_MODAL,
  dismissible_content.DismissibleContent.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL,
  dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
  dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_USER_SETTINGS_OFFER_BADGE,
  dismissible_content.DismissibleContent.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK,
  dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
  dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER,
  dismissible_content.DismissibleContent.GAME_SERVER_NEW_GAMES_COACHMARK,
  dismissible_content.DismissibleContent.PREMIUM_SHOP_NAGBAR_NOTICE,
  dismissible_content.DismissibleContent.SHOP_TAB_TOOLTIP,
  dismissible_content.DismissibleContent.GUILD_HEADER_COACHMARK,
  dismissible_content.DismissibleContent.GUILD_BOOST_TAB_BANNER,
  dismissible_content.DismissibleContent.GUILD_BOOST_TAB_HIGHLIGHT,
];
const items3 = [
  dismissible_content.DismissibleContent.GAME_SHOP_NEW_BADGE,
  dismissible_content.DismissibleContent.GAME_SHOP_NEW_DROP_POPOVER,
  dismissible_content.DismissibleContent.SOUNDBOARD_NEW_SOUNDS_BADGE,
];
const items4 = [
  dismissible_content.DismissibleContent.GAME_SERVER_HOSTING_NEW_BADGE,
  dismissible_content.DismissibleContent.GAME_SERVER_HOSTING_NEW_COACHMARK,
  dismissible_content.DismissibleContent.GUILD_TAG_AVAILABLE_COACHMARK_V2,
  dismissible_content.DismissibleContent.GAME_CLAIM_COACHMARK,
  dismissible_content.DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER,
  dismissible_content.DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION,
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
export function isTimeRecurringDismissibleContent(id) {
  return items1.includes(id);
}
export function isVersionedDismissibleContent(id) {
  return items.includes(id);
}
export function isSnowflakeBoundDismissibleContent(id) {
  return items2.includes(id);
}
export function isRecurringDismissibleContent(item10020) {
  let hasItem = items1.includes(item10020);
  if (!hasItem) {
    hasItem = items.includes(item10020);
  }
  if (!hasItem) {
    hasItem = items2.includes(item10020);
  }
  return hasItem;
}
export { isSingleUseDismissibleContent };
export function isSingleUseGuildDismissibleContent(GDM_INVITE_REMINDER) {
  return items4.includes(GDM_INVITE_REMINDER);
}
export function isTimeRecurringGuildDismissibleContent(GDM_INVITE_REMINDER) {
  return items5.includes(GDM_INVITE_REMINDER);
}
export function isSnowflakeBoundGuildDismissibleContent(GDM_INVITE_REMINDER) {
  return items3.includes(GDM_INVITE_REMINDER);
}
export function isGuildDismissibleContent(dismissibleContent) {
  let hasItem = items4.includes(dismissibleContent);
  if (!hasItem) {
    hasItem = items5.includes(dismissibleContent);
  }
  if (!hasItem) {
    hasItem = items3.includes(dismissibleContent);
  }
  return hasItem;
}
export const ALL_DISMISSIBLE_CONTENT = found;
export const ALL_SINGLE_USE_DISMISSIBLE_CONTENT = found1;
