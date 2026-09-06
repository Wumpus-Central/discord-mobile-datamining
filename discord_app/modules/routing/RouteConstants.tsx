// discord_app/modules/routing/RouteConstants.tsx
import CollectiblesShopConstants from "../collectibles/CollectiblesShopConstants.tsx";
import ConferenceModeConstants from "../conference_mode/ConferenceModeConstants.tsx";
import GlobalDiscoveryAppsConstants from "../global_discovery_apps/GlobalDiscoveryAppsConstants.tsx";
import PathUtils from "../../../discord_common/js/shared/utils/PathUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const CollectibleShopTab = CollectiblesShopConstants.CollectibleShopTab;
({ ApplicationDirectoryProfileSections: closure_1, GlobalDiscoveryAppsSections: c2 } = GlobalDiscoveryAppsConstants);
let c3 = "@me";
const items = ["@me", "@favorites", "@guilds-empty-nux", "@inbox", "@guild-upsell-list"];
const obj = {
  INDEX: "/",
  APP: "/app",
  APP_WITH_INVITE_AND_GUILD_ONBOARDING(code) {
    return "/app/invite-with-guild-onboarding/" + code;
  },
  APP_WITH_GIFT_CODE(arg0) {
    return "/app/gifts/" + arg0;
  },
  ACTIVITY: "/activity",
  ACTIVITIES: "/activities",
  ACTIVITIES_HAPPENING_NOW: "/activities/happening-now",
  ACTIVITY_DETAILS(applicationId) {
    return "/activities/" + applicationId;
  },
  APPLICATION_LIBRARY: "/library",
  APPLICATION_LIBRARY_INVENTORY: "/library/inventory",
  APPLICATION_LIBRARY_ACTION(arg0, arg1) {
    return "/library/" + arg0 + "/" + arg1;
  },
  APPLICATION_LIBRARY_SETTINGS: "/library/settings",
  APPLICATION_STORE: "/store",
  APPLICATION_STORE_LISTING_SKU(arg0, arg1) {
    let str = "";
    if (null != arg1) {
      const _HermesInternal = HermesInternal;
      str = "/" + arg1;
    }
    return "/store/skus/" + arg0 + str;
  },
  APPLICATION_STORE_LISTING_APPLICATION(arg0, arg1) {
    let str = "";
    if (null != arg1) {
      const _HermesInternal = HermesInternal;
      str = "/" + arg1;
    }
    return "/store/applications/" + arg0 + str;
  },
  BILLING_PREFIX: "/billing",
  BILLING_LOGIN_HANDOFF: "/billing/login/handoff",
  BILLING_PREMIUM_SUBSCRIBE: "/billing/premium/subscribe",
  BILLING_PAYMENT_SOURCES_CREATE: "/billing/payment-sources/create",
  BILLING_PREMIUM_SWITCH_PLAN: "/billing/premium/switch-plan",
  BILLING_GUILD_SUBSCRIPTIONS_PURCHASE: "/billing/guild-subscriptions/purchase",
  BILLING_PAYMENTS: "/billing/payments",
  BILLING_PROMOTION_REDEMPTION(arg0) {
    return "/billing/promotions/" + arg0;
  },
  BILLING_PROMOTION_REDEMPTION_GENERIC: "/billing/promotions",
  BILLING_PROMOTION_DIRECT_FULFILLMENT_REDEMPTION(arg0, arg1) {
    return "/billing/partner-promotions/" + arg0 + "/" + arg1;
  },
  GIFT_CARD_REDEEM: "/redeem",
  FRIENDS: "/channels/@me",
  ME: "/channels/@me",
  MESSAGE_REQUESTS: "/message-requests",
  CHANNEL(arg0, arg1, arg2) {
    let tmp = arg0;
    if (null == arg1) {
      if (!tmp) {
        tmp = c3;
      }
      const _HermesInternal2 = HermesInternal;
      let combined = "/channels/" + tmp;
    } else {
      let tmp2 = tmp;
      if (!tmp) {
        tmp2 = c3;
      }
      const _HermesInternal = HermesInternal;
      combined = "/channels/" + tmp2 + "/" + arg1;
    }
    let combined1 = combined;
    if (null != arg2) {
      const _HermesInternal3 = HermesInternal;
      combined1 = "" + combined + "/" + arg2;
    }
    return combined1;
  },
  CHANNEL_THREAD_VIEW(guildId, id, id2, result) {
    const combined = "/channels/" + guildId + "/" + id + "/threads/" + id2;
    let combined1 = combined;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      combined1 = "" + combined + "/" + result;
    }
    return combined1;
  },
  VOICE_CHAT_CHANNEL_PARTIAL(guildIdResult1, RouteParam4, messageId) {
    const combined = "/voice/" + guildIdResult1 + "/" + RouteParam4;
    let combined1 = combined;
    if (null != messageId) {
      const _HermesInternal = HermesInternal;
      combined1 = "" + combined + "/" + messageId;
    }
    return combined1;
  },
  LOGIN: "/login",
  LOGIN_HANDOFF: "/login/handoff",
  LOGIN_ONE_TIME: "/login/one-time",
  REGISTER: "/register",
  DEFAULT_LOGGED_OUT: null,
  INVITE: null,
  INVITE_LOGIN: null,
  INVITE_REGISTER: null,
  INVITE_PROXY: null,
  GUILD_TEMPLATE: null,
  GUILD_TEMPLATE_LOGIN: null,
  GIFT_CODE: null,
  GIFT_CODE_LOGIN: null,
  WELCOME: null,
  VERIFY: "/verify",
  VERIFY_REQUEST: "/verify-request",
  RESET: "/reset",
  APPS: "/apps",
  ACTIVATE: "/activate",
  ACTIVATE_HANDOFF: "/activate/handoff",
  CONNECTION_LINK: null,
  CONNECTION_LINK_AUTHORIZE: null,
  CONNECTIONS_SUCCESS: null,
  CONNECTIONS_ERROR: null,
  CONNECTIONS: null,
  CONNECTIONS_AUTHORIZE_CONTINUE: null,
  CONNECT_AUTHORIZE: "/connect/authorize",
  OAUTH2_AUTHORIZE: "/oauth2/authorize",
  OAUTH2_AUTHORIZED: "/oauth2/authorized",
  OAUTH2_ERROR: "/oauth2/error",
  SETTINGS: null,
  DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE: "/settings/advanced/activate-application-test-mode",
  SNOWSGIVING: "/snowsgiving",
  PLAYGROUND: null,
  CHANGELOGS: null,
  USERS: null,
  GUILD_CREATE: "/guilds/create",
  DISABLE_EMAIL_NOTIFICATIONS: "/disable-email-notifications",
  DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS: "/disable-server-highlight-notifications",
  USER_GUILD_NOTIFICATION_SETTINGS: null,
  AUTHORIZE_IP: "/authorize-ip",
  REJECT_IP: "/reject-ip",
  REJECT_MFA: "/reject-mfa",
  AUTHORIZE_PAYMENT: "/authorize-payment",
  HANDOFF: "/handoff",
  DOMAIN_MIGRATION: "/domain-migration",
  XBOX_EDU: "/connections/xbox/intro",
  XBOX_PIN: "/connections/xbox/pin",
  DOWNLOAD_QR_CODE_REDIRECT: "/download-qr-code",
  BILLING_POPUP_BRIDGE_CALLBACK: "/billing/popup-bridge/callback",
  OAUTH2_WHITELIST_ACCEPT: "/oauth2/allowlist/accept",
  GUILD_DISCOVERY: "/guild-discovery",
  GLOBAL_DISCOVERY: "/discovery",
  QUEST_HOME_DEPRECATED: "/discovery/quests",
  QUEST_HOME: "/quest-home",
  GLOBAL_DISCOVERY_SERVERS: "/discovery/servers",
  GLOBAL_DISCOVERY_APPS: "/discovery/applications",
  GLOBAL_DISCOVERY_APPS_CATEGORY: null,
  GLOBAL_DISCOVERY_APPS_PROFILE: null,
  GLOBAL_DISCOVERY_APPS_PROFILE_SECTION: null,
  GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU: null,
  GLOBAL_DISCOVERY_APPS_SEARCH: "/discovery/applications/search",
  GUILD_MEMBER_VERIFICATION: null,
  GUILD_MEMBER_VERIFICATION_FOR_HUB: null,
  POPOUT_WINDOW: "/popout",
  UPCOMING_STAGES: null,
  VERIFY_HUB_EMAIL: "/verify-hub-email",
  OPEN_APP_FROM_EMAIL: "/open-app-from-email",
  BILLING_MANAGE_SUBSCRIPTION: "/billing/premium/manage",
  BILLING_PAST_DUE_SUBSCRIPTION: "/billing/premium/past-due",
  BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK: null,
  BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE: null,
  BILLING_STANDALONE_CHECKOUT_PAGE: null,
  BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE: null,
  GUILD_BOOSTING_MARKETING: null,
  GUILD_SETTINGS: null,
  PICK_GUILD_SETTINGS: null,
  GUILD_EVENT_DETAILS: null,
  FEATURE: null,
  GUILD_FEATURE: null,
  GUILD_JOIN_REQUEST: null,
  MOBILE_WEB_HANDOFF: "/mweb-handoff",
  APPLICATION_DIRECTORY: "/application-directory",
  APPLICATION_DIRECTORY_PROFILE: null,
  APPLICATION_DIRECTORY_PROFILE_SECTION: null,
  APPLICATION_DIRECTORY_PROFILE_STORE_SKU: null,
  APPLICATION_DIRECTORY_SEARCH: "/application-directory/search",
  FAMILY_CENTER: "/family-center",
  FAMILY_CENTER_MY_FAMILY: null,
  SERVER_SHOP: null,
  CHANNELS_GAME_SHOP: null,
  GAME_SHOP: null,
  GUILD_PRODUCT: null,
  REPORT: "/report",
  REPORT_SECOND_LOOK: "/report-review",
  COLLECTIBLES_SHOP: "/shop",
  COLLECTIBLES_SHOP_GAME_SHOP: null,
  COLLECTIBLES_SHOP_WITH_TAB: null,
  COLLECTIBLES_SHOP_COLLECTION_DETAIL: null,
  COLLECTIBLES_SHOP_PRODUCT_DETAIL: null,
  COLLECTIBLES_SHOP_LAYOUT: null,
  NITRO_HOME: "/store",
  ACCOUNT_STANDING: "/account-standing",
  CHANNEL_SUMMARIES: null,
  CHANNEL_SUMMARY: null,
  USER_SUMMARIES: "/users/@me/summaries",
  QUESTS: null,
  GAME_PROFILE: null,
  ACCOUNT_REVERT: null,
  POWERUP_STORE: null,
  CONFERENCE_MODE: "/conference-mode",
  CONFERENCE_MODE_VOICE: null,
  QUEST_PREVIEW: null,
  QUEST_PREVIEW_TOOL_2: null,
  ICYMI: "/icymi",
};
let str = "/login";
if (ConferenceModeConstants.CONFERENCE_MODE_ENABLED) {
  str = "/register";
}
obj.DEFAULT_LOGGED_OUT = str;
obj.INVITE = function INVITE(arg0) {
  return "/invite/" + arg0;
};
obj.INVITE_LOGIN = function INVITE_LOGIN(arg0) {
  return "/invite/" + arg0 + "/login";
};
obj.INVITE_REGISTER = function INVITE_REGISTER(arg0) {
  return "/invite/" + arg0 + "/register";
};
obj.INVITE_PROXY = function INVITE_PROXY(targetChannelId, targetMessageId) {
  if (null != targetMessageId) {
    const _HermesInternal2 = HermesInternal;
    let combined = "/invite-proxy/" + targetChannelId + "?messageId=" + targetMessageId;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "/invite-proxy/" + targetChannelId;
  }
  return combined;
};
obj.GUILD_TEMPLATE = function GUILD_TEMPLATE(arg0) {
  return "/template/" + arg0;
};
obj.GUILD_TEMPLATE_LOGIN = function GUILD_TEMPLATE_LOGIN(arg0) {
  return "/template/" + arg0 + "/login";
};
obj.GIFT_CODE = function GIFT_CODE(arg0) {
  return "/gifts/" + arg0;
};
obj.GIFT_CODE_LOGIN = function GIFT_CODE_LOGIN(arg0) {
  return "/gifts/" + arg0 + "/login";
};
obj.WELCOME = function WELCOME(arg0, arg1) {
  let tmp = arg0;
  if (null != arg1) {
    if (tmp == null) {
      tmp = c3;
    }
    const _HermesInternal2 = HermesInternal;
    let combined = "/welcome/" + tmp + "/" + arg1;
  } else {
    let tmp2 = tmp;
    if (tmp == null) {
      tmp2 = c3;
    }
    const _HermesInternal = HermesInternal;
    combined = "/welcome/" + tmp2;
  }
  return combined;
};
obj.CONNECTION_LINK = function CONNECTION_LINK(arg0) {
  return "/connections/" + arg0 + "/link";
};
obj.CONNECTION_LINK_AUTHORIZE = function CONNECTION_LINK_AUTHORIZE(arg0) {
  return "/connections/" + arg0 + "/link-authorize";
};
obj.CONNECTIONS_SUCCESS = function CONNECTIONS_SUCCESS(arg0) {
  return "/connections/" + arg0 + "/success";
};
obj.CONNECTIONS_ERROR = function CONNECTIONS_ERROR(arg0) {
  return "/connections/" + arg0 + "/error";
};
obj.CONNECTIONS = function CONNECTIONS(arg0) {
  return "/connections/" + arg0;
};
obj.CONNECTIONS_AUTHORIZE_CONTINUE = function CONNECTIONS_AUTHORIZE_CONTINUE(arg0) {
  return "/connections/" + arg0 + "/authorize-continue";
};
obj.SETTINGS = function SETTINGS(arg0, arg1) {
  let str = "";
  if (null != arg1) {
    const _HermesInternal = HermesInternal;
    str = "/" + arg1;
  }
  return "/settings/" + arg0 + str;
};
obj.PLAYGROUND = function PLAYGROUND(arg0, arg1) {
  let str = "/playground";
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    const text = `/playground${"/" + arg0}`;
    let text1 = text;
    if (null != arg1) {
      const _HermesInternal2 = HermesInternal;
      text1 = `/playground${"/" + arg0}${"/" + arg1}`;
    }
    str = text1;
  }
  return str;
};
obj.CHANGELOGS = function CHANGELOGS(arg0) {
  let str = "";
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    str = "/" + arg0;
  }
  return "/settings/changelogs" + str;
};
obj.USERS = function USERS(arg0) {
  return "/users/" + arg0;
};
obj.USER_GUILD_NOTIFICATION_SETTINGS = function USER_GUILD_NOTIFICATION_SETTINGS(arg0) {
  return "/guilds/" + arg0 + "/notification-settings";
};
obj.GLOBAL_DISCOVERY_APPS_CATEGORY = function GLOBAL_DISCOVERY_APPS_CATEGORY(arg0) {
  return "/discovery/applications/categories/" + arg0;
};
obj.GLOBAL_DISCOVERY_APPS_PROFILE = function GLOBAL_DISCOVERY_APPS_PROFILE(arg0) {
  return "/discovery/applications/" + arg0;
};
obj.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION = function GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(arg0, arg1) {
  return "/discovery/applications/" + arg0 + "/" + arg1;
};
obj.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU = function GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(arg0, arg1) {
  return "/discovery/applications/" + arg0 + "/" + constants2.STORE + "/" + arg1;
};
obj.GUILD_MEMBER_VERIFICATION = function GUILD_MEMBER_VERIFICATION(arg0) {
  return "/member-verification/" + arg0;
};
obj.GUILD_MEMBER_VERIFICATION_FOR_HUB = function GUILD_MEMBER_VERIFICATION_FOR_HUB(arg0, arg1) {
  let str = "";
  if (null != arg1) {
    const _HermesInternal = HermesInternal;
    str = "/" + arg1;
  }
  return "/member-verification-for-hub/" + arg0 + str;
};
obj.UPCOMING_STAGES = function UPCOMING_STAGES(arg0, arg1) {
  let str = "";
  if (null != arg1) {
    const _HermesInternal = HermesInternal;
    str = "/" + arg1;
  }
  return "/guild-stages/" + arg0 + str;
};
obj.BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK = function BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK(
  MOBILE_WEB_REDIRECT_CHECKOUT,
  loadId,
) {
  let str = "";
  if (null != loadId) {
    const _HermesInternal = HermesInternal;
    str = "&load_id=" + loadId;
  }
  return "/billing/premium/manage?deep_link_type=" + MOBILE_WEB_REDIRECT_CHECKOUT + str;
};
obj.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE = function BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(
  META_QUEST_WEB_REDIRECT_CHECKOUT,
  loadId,
) {
  let str = "";
  if (null != loadId) {
    const _HermesInternal = HermesInternal;
    str = "&load_id=" + loadId;
  }
  return "/billing/premium/manage?flow_type=" + META_QUEST_WEB_REDIRECT_CHECKOUT + str;
};
obj.BILLING_STANDALONE_CHECKOUT_PAGE = function BILLING_STANDALONE_CHECKOUT_PAGE(
  planId,
  isGift,
  loadId,
  paymentMethodType,
  deepLinkType,
  usePresetOffer,
  flowType,
) {
  let str = "";
  let str2 = "";
  if (null != paymentMethodType) {
    const _HermesInternal = HermesInternal;
    str2 = "&payment_method_type=" + paymentMethodType;
  }
  let combined = str;
  if (null != deepLinkType) {
    const _HermesInternal2 = HermesInternal;
    combined = "&deep_link_type=" + deepLinkType;
  }
  let combined1 = str;
  if (null != usePresetOffer) {
    const _HermesInternal3 = HermesInternal;
    combined1 = "&use_preset_offer=" + usePresetOffer;
  }
  if (null != flowType) {
    const _HermesInternal4 = HermesInternal;
    str = "&flow_type=" + flowType;
  }
  return (
    "/billing/premium/subscribe?plan_id=" +
    planId +
    "&gift=" +
    isGift +
    "&load_id=" +
    loadId +
    str2 +
    combined +
    combined1 +
    str
  );
};
obj.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE = function BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(
  guild_id,
  prop,
  newAnalyticsLoadId,
  prop1,
) {
  let str = "";
  let str2 = "";
  if (null != prop) {
    const _HermesInternal = HermesInternal;
    str2 = "&deep_link_type=" + prop;
  }
  let combined = str;
  if (null != newAnalyticsLoadId) {
    const _HermesInternal2 = HermesInternal;
    combined = "&load_id=" + newAnalyticsLoadId;
  }
  if (null != prop1) {
    const _HermesInternal3 = HermesInternal;
    str = "&flow_type=" + prop1;
  }
  return "/billing/guild-subscriptions/purchase?guild_id=" + guild_id + str2 + combined + str;
};
obj.GUILD_BOOSTING_MARKETING = function GUILD_BOOSTING_MARKETING(RouteParam3) {
  return "/guilds/" + RouteParam3 + "/premium-guild-subscriptions";
};
obj.GUILD_SETTINGS = function GUILD_SETTINGS(arg0, arg1, arg2) {
  let str = "";
  if (null != arg1) {
    const _HermesInternal = HermesInternal;
    str = "/" + arg1;
  }
  const combined = "/guilds/" + arg0 + "/settings" + str;
  let combined1 = combined;
  if (null != arg2) {
    const _HermesInternal2 = HermesInternal;
    combined1 = "" + combined + "/" + arg2;
  }
  return combined1;
};
obj.PICK_GUILD_SETTINGS = function PICK_GUILD_SETTINGS(arg0, arg1, arg2) {
  let str = "";
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    str = "/" + arg0;
  }
  const text = `/guilds/settings${str}`;
  let combined = text;
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + `/guilds/settings${str}` + "/" + arg1;
  }
  let str4 = "";
  if (null != arg2) {
    const _HermesInternal3 = HermesInternal;
    str4 = "?feature=" + arg2;
  }
  return "" + combined + str4;
};
obj.GUILD_EVENT_DETAILS = function GUILD_EVENT_DETAILS(guild_id, id, arg2) {
  let str = "";
  const combined = "/events/" + guild_id + "/" + id;
  if (null != arg2) {
    const _HermesInternal = HermesInternal;
    str = "/" + arg2;
  }
  return combined + str;
};
obj.FEATURE = function FEATURE(DAVE_PROTOCOL_VERIFICATION) {
  return "/feature/" + DAVE_PROTOCOL_VERIFICATION;
};
obj.GUILD_FEATURE = function GUILD_FEATURE(arg0, arg1) {
  return "/feature/" + arg0 + "/" + arg1;
};
obj.GUILD_JOIN_REQUEST = function GUILD_JOIN_REQUEST(arg0, arg1) {
  return "/guilds/" + arg0 + "/requests/" + arg1;
};
obj.APPLICATION_DIRECTORY_PROFILE = function APPLICATION_DIRECTORY_PROFILE(arg0) {
  return "/application-directory/" + arg0;
};
obj.APPLICATION_DIRECTORY_PROFILE_SECTION = function APPLICATION_DIRECTORY_PROFILE_SECTION(arg0, arg1) {
  return "/application-directory/" + arg0 + "/" + arg1;
};
obj.APPLICATION_DIRECTORY_PROFILE_STORE_SKU = function APPLICATION_DIRECTORY_PROFILE_STORE_SKU(arg0, arg1) {
  return "/application-directory/" + arg0 + "/" + constants.STORE + "/" + arg1;
};
obj.FAMILY_CENTER_MY_FAMILY = function FAMILY_CENTER_MY_FAMILY(arg0, arg1) {
  return "/feature/family-center/my-family/" + arg0 + "/" + arg1;
};
obj.SERVER_SHOP = function SERVER_SHOP(arg0) {
  return "/channels/" + arg0 + "/shop";
};
obj.CHANNELS_GAME_SHOP = function CHANNELS_GAME_SHOP(guildId, pageIndex, skuId, arg3) {
  let num = pageIndex;
  const combined = "/channels/" + guildId + "/game-shop";
  if (pageIndex == null) {
    num = 0;
  }
  const sum = combined + "/" + num;
  let tmp3 = sum;
  if (null != skuId) {
    const _HermesInternal = HermesInternal;
    const sum1 = sum + "/" + skuId;
    let sum2 = sum1;
    if (null != arg3) {
      const _HermesInternal2 = HermesInternal;
      sum2 = sum1 + "/" + arg3;
    }
    tmp3 = sum2;
  }
  return tmp3;
};
obj.GAME_SHOP = function GAME_SHOP(arg0, id, slug) {
  const combined = "/game-shop/" + arg0;
  let tmp2 = combined;
  if (null != id) {
    const _HermesInternal = HermesInternal;
    const sum = combined + "/" + id;
    let sum1 = sum;
    if (null != slug) {
      const _HermesInternal2 = HermesInternal;
      sum1 = sum + "/" + slug;
    }
    tmp2 = sum1;
  }
  return tmp2;
};
obj.GUILD_PRODUCT = function GUILD_PRODUCT(arg0, arg1) {
  return "/channels/" + arg0 + "/shop/" + arg1;
};
obj.COLLECTIBLES_SHOP_GAME_SHOP = function COLLECTIBLES_SHOP_GAME_SHOP(applicationId, pageIndex, id, slug) {
  const combined = "/shop?tab=" + CollectibleShopTab.GAME_SHOPS + "&applicationId=" + applicationId;
  let sum = combined;
  if (null != pageIndex) {
    const _HermesInternal = HermesInternal;
    sum = combined + "&pageIndex=" + pageIndex;
  }
  let sum1 = sum;
  if (null != id) {
    const _HermesInternal2 = HermesInternal;
    sum1 = sum + "&skuId=" + id;
  }
  let sum2 = sum1;
  if (null != slug) {
    const _HermesInternal3 = HermesInternal;
    sum2 = sum1 + "&slug=" + slug;
  }
  return sum2;
};
obj.COLLECTIBLES_SHOP_WITH_TAB = function COLLECTIBLES_SHOP_WITH_TAB(arg0) {
  return "/shop?tab=" + arg0;
};
obj.COLLECTIBLES_SHOP_COLLECTION_DETAIL = function COLLECTIBLES_SHOP_COLLECTION_DETAIL(arg0) {
  return "/shop/collection/" + arg0;
};
obj.COLLECTIBLES_SHOP_PRODUCT_DETAIL = function COLLECTIBLES_SHOP_PRODUCT_DETAIL(arg0) {
  return "/shop/product/" + arg0;
};
obj.COLLECTIBLES_SHOP_LAYOUT = function COLLECTIBLES_SHOP_LAYOUT(arg0) {
  return "/shop/layout/" + arg0;
};
obj.CHANNEL_SUMMARIES = function CHANNEL_SUMMARIES(channelId) {
  return "/channels/" + channelId + "/summaries";
};
obj.CHANNEL_SUMMARY = function CHANNEL_SUMMARY(channelId, id) {
  return "/channels/" + channelId + "/summaries/" + id;
};
obj.QUESTS = function QUESTS(arg0) {
  return "/quests/" + arg0;
};
obj.GAME_PROFILE = function GAME_PROFILE(arg0) {
  return "/games/" + arg0;
};
obj.ACCOUNT_REVERT = function ACCOUNT_REVERT(arg0) {
  return "/wasntme/" + arg0;
};
obj.POWERUP_STORE = function POWERUP_STORE(arg0) {
  return "/channels/" + arg0 + "/boosts";
};
obj.CONFERENCE_MODE_VOICE = function CONFERENCE_MODE_VOICE(arg0, arg1) {
  return "/conference-mode/voice/" + arg0 + "/" + arg1;
};
obj.QUEST_PREVIEW = function QUEST_PREVIEW(arg0) {
  return "/quest-preview/" + arg0;
};
obj.QUEST_PREVIEW_TOOL_2 = function QUEST_PREVIEW_TOOL_2(arg0) {
  return "/quest-home?tab=preview_tool&quest_id=" + arg0;
};
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/routing/RouteConstants.tsx");

export const ME = "@me";
export const FAVORITES = "@favorites";
export const NOTIFICATIONS_INBOX = "@inbox";
export const EMPTY_NUX_SERVER = "@guilds-empty-nux";
export const MOBILE_GUILD_UPSELL_LIST = "@guild-upsell-list";
export const PSEUDO_GUILD_IDS = items;
export const Routes = PathUtils.wrapPaths(frozen, [":", "?", "@"]);
