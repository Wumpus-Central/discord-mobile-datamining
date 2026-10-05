// discord_common/js/shared/Constants.tsx
import generated_ThemeTypes from "config/colors/generated/ThemeTypes.tsx";
import NoopUtils from "utils/NoopUtils.tsx";
import GameGenres from "shared-constants/GameGenres.tsx";
import "BigFlagUtils";
import BigFlagUtils_mod from "utils/BigFlagUtils.tsx";
import PathUtils_mod from "utils/PathUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let BigFlagUtils;
let str4;
let str5;
let str = "";
if (typeof location !== "undefined") {
  const _location = location;
  str = location.protocol;
}
let str2 = "";
if (typeof window !== "undefined") {
  let _window = window;
  str2 = window.GLOBAL_ENV.WEBAPP_ENDPOINT;
}
const sum = str + str2;
_window = sum;
const text = `${str}//discord.gg`;
let map = text;
const obj = {
  STRIPE: 1,
  [1]: "STRIPE",
  BRAINTREE: 2,
  [2]: "BRAINTREE",
  APPLE: 3,
  [3]: "APPLE",
  GOOGLE: 4,
  [4]: "GOOGLE",
  ADYEN: 5,
  [5]: "ADYEN",
  APPLE_PARTNER: 6,
  [6]: "APPLE_PARTNER",
  VIRTUAL_CURRENCY: 8,
  [8]: "VIRTUAL_CURRENCY",
  APPLE_ADVANCED_COMMERCE: 9,
  [9]: "APPLE_ADVANCED_COMMERCE",
  TDS: 10,
  [10]: "TDS",
};
const frozen = Object.freeze({
  HINT_PURPLE: "#c9d2f0",
  DARK_PURPLE: "#697ec4",
  MODAL_GREY: "#EFEFF4",
  ORANGE: "#f57731",
  GUILDS_GREY: "#1e2124",
  ACCOUNT_GREY: "#282b30",
  CHAT_GREY: "#36393e",
  UNREAD_GREY: "#8a8e94",
  HIGHLIGHT_GREY: "#25282c",
  AVATAR_GREY: "#747F8C",
  WHITE2: "#f3f3f3",
  WHITE3: "#f0f0f0",
  WHITE7: "#dbdde1",
  WHITE8: "#cdcdcd",
  GREY1: "#99aab5",
  GREY2: "#87909c",
  GREY3: "#737f8d",
  GREY4: "#949494",
  GREY5: "#535559",
  GREY6: "#4f545c",
  GREY7: "#1c242b",
  GREY9: "#202226",
});
let str3 = "";
const frozen1 = Object.freeze({
  [obj.STRIPE]: "Stripe",
  [obj.BRAINTREE]: "Braintree",
  [obj.APPLE]: "Apple",
  [obj.GOOGLE]: "Google",
  [obj.ADYEN]: "Adyen",
  [obj.APPLE_PARTNER]: "Apple Partner",
  [obj.VIRTUAL_CURRENCY]: "Virtual Currency",
  [obj.APPLE_ADVANCED_COMMERCE]: "Apple",
  [obj.TDS]: "TDS",
});
const _Object = Object;
if (typeof window !== "undefined") {
  const _window2 = window;
  str3 = window.GLOBAL_ENV.BRAINTREE_KEY;
}
const obj2 = {
  BRAINTREE: { KEY: str3, PAYMENT_GATEWAY: "braintree" },
  STRIPE: { KEY: str4, PAYMENT_GATEWAY: "stripe" },
  ADYEN: { KEY: str5, PAYMENT_GATEWAY: "adyen" },
};
str4 = "";
if (typeof window !== "undefined") {
  const _window3 = window;
  str4 = window.GLOBAL_ENV.STRIPE_KEY;
}
str5 = "";
if (typeof window !== "undefined") {
  const _window4 = window;
  str5 = window.GLOBAL_ENV.ADYEN_KEY;
}
const obj3 = {
  UNKNOWN: 0,
  [0]: "UNKNOWN",
  CARD: 1,
  [1]: "CARD",
  PAYPAL: 2,
  [2]: "PAYPAL",
  GIROPAY: 3,
  [3]: "GIROPAY",
  SOFORT: 4,
  [4]: "SOFORT",
  PRZELEWY24: 5,
  [5]: "PRZELEWY24",
  SEPA_DEBIT: 6,
  [6]: "SEPA_DEBIT",
  PAYSAFE_CARD: 7,
  [7]: "PAYSAFE_CARD",
  GCASH: 8,
  [8]: "GCASH",
  GRABPAY_MY: 9,
  [9]: "GRABPAY_MY",
  MOMO_WALLET: 10,
  [10]: "MOMO_WALLET",
  VENMO: 11,
  [11]: "VENMO",
  GOPAY_WALLET: 12,
  [12]: "GOPAY_WALLET",
  KAKAOPAY: 13,
  [13]: "KAKAOPAY",
  BANCONTACT: 14,
  [14]: "BANCONTACT",
  EPS: 15,
  [15]: "EPS",
  IDEAL: 16,
  [16]: "IDEAL",
  CASH_APP: 17,
  [17]: "CASH_APP",
  APPLE: 18,
  [18]: "APPLE",
  TDS_WALLET: 19,
  [19]: "TDS_WALLET",
  PIX: 20,
  [20]: "PIX",
  PIX_AUTOMATICO: 21,
  [21]: "PIX_AUTOMATICO",
  PAYMENT_REQUEST: 99,
  [99]: "PAYMENT_REQUEST",
};
const items = [obj3.PAYSAFE_CARD, "paysafecard"];
const items1 = [items, , , , , ,];
const items2 = [obj3.GCASH, "gcash"];
items1[1] = items2;
const items3 = [obj3.GRABPAY_MY, "grabpay_MY"];
items1[2] = items3;
const items4 = [obj3.MOMO_WALLET, "momo_wallet"];
items1[3] = items4;
const items5 = [obj3.KAKAOPAY, "kakaopay"];
items1[4] = items5;
const items6 = [obj3.GOPAY_WALLET, "gopay_wallet"];
items1[5] = items6;
const items7 = [obj3.CASH_APP, "cashapp"];
items1[6] = items7;
const items8 = [];
const freezeResult = freeze(obj2);
HermesBuiltin.arraySpread(items8, items1, 0);
map = new Map(items8);
const items9 = [obj3.BANCONTACT, "bancontact"];
const items10 = [items9, , ,];
const items11 = [obj3.GIROPAY, "giropay"];
items10[1] = items11;
const items12 = [obj3.IDEAL, "ideal"];
items10[2] = items12;
const items13 = [obj3.PIX, "pix"];
items10[3] = items13;
const items14 = [, , , , , , , , , , , ,];
({
  PAYSAFE_CARD: arr15[0],
  GCASH: arr15[1],
  GRABPAY_MY: arr15[2],
  GOPAY_WALLET: arr15[3],
  MOMO_WALLET: arr15[4],
  KAKAOPAY: arr15[5],
  BANCONTACT: arr15[6],
  EPS: arr15[7],
  IDEAL: arr15[8],
  SOFORT: arr15[9],
  GIROPAY: arr15[10],
  PRZELEWY24: arr15[11],
  CASH_APP: arr15[12],
} = obj3);
const items15 = [, , , , , , ,];
({
  PAYSAFE_CARD: arr16[0],
  GRABPAY_MY: arr16[1],
  GIROPAY: arr16[2],
  PRZELEWY24: arr16[3],
  SOFORT: arr16[4],
  BANCONTACT: arr16[5],
  EPS: arr16[6],
  IDEAL: arr16[7],
} = obj3);
const map1 = new Map(items10);
const items16 = [, , , , , , , , , ,];
({
  CARD: arr17[0],
  PAYPAL: arr17[1],
  SEPA_DEBIT: arr17[2],
  GCASH: arr17[3],
  MOMO_WALLET: arr17[4],
  VENMO: arr17[5],
  KAKAOPAY: arr17[6],
  GOPAY_WALLET: arr17[7],
  CASH_APP: arr17[8],
  TDS_WALLET: arr17[9],
  PIX_AUTOMATICO: arr17[10],
} = obj3);
const set = new Set(items14);
const items17 = [, , , , ,];
({
  GIROPAY: arr18[0],
  SOFORT: arr18[1],
  PRZELEWY24: arr18[2],
  BANCONTACT: arr18[3],
  EPS: arr18[4],
  IDEAL: arr18[5],
} = obj3);
const items18 = [];
const items19 = [, ,];
({ PAYSAFE_CARD: arr20[0], GRABPAY_MY: arr20[1], GOPAY_WALLET: arr20[2] } = obj3);
const set1 = new Set(items15);
const set2 = new Set(items16);
HermesBuiltin.arraySpread(items18, items19, HermesBuiltin.arraySpread(items18, items17, 0));
const items20 = [...items18];
const items21 = [obj3.SEPA_DEBIT];
const items22 = [obj3.SOFORT];
const set3 = new Set(items20);
const obj4 = { SUBSCRIPTION: 0, [0]: "SUBSCRIPTION", ONE_TIME: 1, [1]: "ONE_TIME" };
const set4 = new Set(items21);
const set5 = new Set(items22);
const frozen2 = Object.freeze({ CONSTANT: 1, APPLE_STICKER: 2 });
const obj5 = {
  CREATE_INSTANT_INVITE: BigFlagUtils.getBrandedFlag(0),
  KICK_MEMBERS: BigFlagUtils.getBrandedFlag(1),
  BAN_MEMBERS: BigFlagUtils.getBrandedFlag(2),
  ADMINISTRATOR: BigFlagUtils.getBrandedFlag(3),
  MANAGE_CHANNELS: BigFlagUtils.getBrandedFlag(4),
  MANAGE_GUILD: BigFlagUtils.getBrandedFlag(5),
  CHANGE_NICKNAME: BigFlagUtils.getBrandedFlag(26),
  MANAGE_NICKNAMES: BigFlagUtils.getBrandedFlag(27),
  MANAGE_ROLES: BigFlagUtils.getBrandedFlag(28),
  MANAGE_WEBHOOKS: BigFlagUtils.getBrandedFlag(29),
  MANAGE_GUILD_EXPRESSIONS: BigFlagUtils.getBrandedFlag(30),
  CREATE_GUILD_EXPRESSIONS: BigFlagUtils.getBrandedFlag(43),
  VIEW_AUDIT_LOG: BigFlagUtils.getBrandedFlag(7),
  VIEW_CHANNEL: BigFlagUtils.getBrandedFlag(10),
  VIEW_GUILD_ANALYTICS: BigFlagUtils.getBrandedFlag(19),
  VIEW_CREATOR_MONETIZATION_ANALYTICS: BigFlagUtils.getBrandedFlag(41),
  MODERATE_MEMBERS: BigFlagUtils.getBrandedFlag(40),
  USE_EMBEDDED_ACTIVITIES: BigFlagUtils.getBrandedFlag(39),
  USE_EXTERNAL_APPS: BigFlagUtils.getBrandedFlag(50),
  SEND_MESSAGES: BigFlagUtils.getBrandedFlag(11),
  SEND_TTS_MESSAGES: BigFlagUtils.getBrandedFlag(12),
  MANAGE_MESSAGES: BigFlagUtils.getBrandedFlag(13),
  EMBED_LINKS: BigFlagUtils.getBrandedFlag(14),
  ATTACH_FILES: BigFlagUtils.getBrandedFlag(15),
  READ_MESSAGE_HISTORY: BigFlagUtils.getBrandedFlag(16),
  MENTION_EVERYONE: BigFlagUtils.getBrandedFlag(17),
  USE_EXTERNAL_EMOJIS: BigFlagUtils.getBrandedFlag(18),
  ADD_REACTIONS: BigFlagUtils.getBrandedFlag(6),
  USE_APPLICATION_COMMANDS: BigFlagUtils.getBrandedFlag(31),
  MANAGE_THREADS: BigFlagUtils.getBrandedFlag(34),
  CREATE_PUBLIC_THREADS: BigFlagUtils.getBrandedFlag(35),
  CREATE_PRIVATE_THREADS: BigFlagUtils.getBrandedFlag(36),
  USE_EXTERNAL_STICKERS: BigFlagUtils.getBrandedFlag(37),
  SEND_MESSAGES_IN_THREADS: BigFlagUtils.getBrandedFlag(38),
  SEND_VOICE_MESSAGES: BigFlagUtils.getBrandedFlag(46),
  SEND_POLLS: BigFlagUtils.getBrandedFlag(49),
  PIN_MESSAGES: BigFlagUtils.getBrandedFlag(51),
  BYPASS_SLOWMODE: BigFlagUtils.getBrandedFlag(52),
  MANAGE_OFFICIAL_MESSAGES: BigFlagUtils.getBrandedFlag(53),
  CONNECT: BigFlagUtils.getBrandedFlag(20),
  SPEAK: BigFlagUtils.getBrandedFlag(21),
  MUTE_MEMBERS: BigFlagUtils.getBrandedFlag(22),
  DEAFEN_MEMBERS: BigFlagUtils.getBrandedFlag(23),
  MOVE_MEMBERS: BigFlagUtils.getBrandedFlag(24),
  USE_VAD: BigFlagUtils.getBrandedFlag(25),
  PRIORITY_SPEAKER: BigFlagUtils.getBrandedFlag(8),
  STREAM: BigFlagUtils.getBrandedFlag(9),
  USE_SOUNDBOARD: BigFlagUtils.getBrandedFlag(42),
  USE_EXTERNAL_SOUNDS: BigFlagUtils.getBrandedFlag(45),
  SET_VOICE_CHANNEL_STATUS: BigFlagUtils.getBrandedFlag(48),
  REQUEST_TO_SPEAK: BigFlagUtils.getBrandedFlag(32),
  MANAGE_EVENTS: BigFlagUtils.getBrandedFlag(33),
  CREATE_EVENTS: BigFlagUtils.getBrandedFlag(44),
};
const frozen3 = Object.freeze({ [obj4.SUBSCRIPTION]: "subscription", [obj4.ONE_TIME]: "sku" });
const freeze2 = Object.freeze;
const freeze2Result = freeze2(obj5);
const items23 = [, , , , , , , ,];
({
  KICK_MEMBERS: arr24[0],
  BAN_MEMBERS: arr24[1],
  ADMINISTRATOR: arr24[2],
  MANAGE_CHANNELS: arr24[3],
  MANAGE_GUILD: arr24[4],
  MANAGE_ROLES: arr24[5],
  MANAGE_MESSAGES: arr24[6],
  MANAGE_THREADS: arr24[7],
  MODERATE_MEMBERS: arr24[8],
} = freeze2Result);
BigFlagUtils = BigFlagUtils_mod;
const items24 = [...items23];
const obj6 = {
  PRESSKIT: "https://app.box.com/s/5puqm5ijahrrdao7yldi7fr3zah5i1am",
  REBRAND_PRESSKIT:
    "https://www.dropbox.com/scl/fo/2vittfakjukwa3zl4gnxh/AOS0AZlx-zA4TjDyv-M-dgk?rlkey=kn0v1lcqfq1lurj3lk3x1ujhf&dl=0",
  STATUS: "https://discordstatus.com",
  HELP_AND_SUPPORT: "//" + "support.discord.com" + "/hc/en-us",
  HELP_ARTICLE_ORBS_FAQ: "https://" + "support.discord.com" + "/hc/en-us/articles/30593690165783",
  FEEDBACK: "//" + "feedback.discord.com",
  EMAIL_SUPPORT: "mailto:support@" + "discord.com",
  EMAIL_LAW_ENFORCEMENT: "mailto:lawenforcement@" + "discord.com",
  EMAIL_HYPESQUAD: "mailto:hypesquad@" + "discord.com",
  EMAIL_JOBS: "mailto:jobs@" + "discord.com",
  DEV_PERKS_FORM: "https://goo.gl/forms/oZfKBStV3sR8GHdU2",
  VERIFICATION_REQUIREMENTS: "https://dis.gd/vfqual",
  BASE_URL: "https://" + "discord.com",
  PRESS_INQUIRIES: "mailto:press@" + "discord.com",
  CONTACT_US: "https://dis.gd/contact",
  DEV_LANDING: "/build",
  DEV_PORTAL: "/developers",
  DEV_PORTAL_APPLICATIONS: "/developers/applications",
  DEV_PORTAL_DOCUMENTATION: "/developers/docs",
  DEV_PORTAL_SELF_SERVE_MODAL: "/developers/?store_signup=true",
  PARTNER_CODE_OF_CONDUCT: "https://" + "support.discord.com" + "/hc/en-us/articles/360024871991",
  SUBMIT_TNS_REPORT: "https://dis.gd/request",
  MERCH_STORE: "https://discordmerch.com",
  MOD_ACADEMY_EXAM: "https://dis.gd/exam",
  OFFICIAL_3RD_PARTY_MERCH: "https://discordmerch.com/evergreenfooter",
  COMMUNITY: "/community",
  TWITTER_SUPPORT: "https://twitter.com/discord_support",
  QUESTS: "/quests",
};
const applyResult = BigFlagUtils.combine.apply(items24);
const combined = "https://" + "status.discord.com";
const obj8 = {
  WELCOME: "" + sum + "/welcome/",
  ME: "" + sum + "/channels/@me",
  SETTINGS(arg0, arg1) {
    let str = "";
    if (null != arg1) {
      str = "";
      if ("" !== arg1) {
        const _HermesInternal = HermesInternal;
        str = "/" + arg1;
      }
    }
    return "" + _window + "/settings/" + arg0 + str;
  },
  CONNECTION(arg0) {
    return "" + _window + "/connections/" + arg0;
  },
  CHANGELOGS: "" + sum + "/settings/changelogs",
  LOGIN: "" + sum + "/login",
  LOGIN_WITH_REDIRECT(arg0) {
    return "" + _window + "/login?redirect_to=" + arg0;
  },
  REGISTER: "" + sum + "/register",
  REGISTER_WITH_REDIRECT(arg0) {
    return "" + _window + "/register?redirect_to=" + arg0;
  },
  CREATE_GUILD: "" + sum + "/guilds/create",
  VANITY_INVITE(arg0) {
    return "" + map + "/" + arg0;
  },
  HYPESQUAD_ONLINE: "" + sum + "/settings/hypesquad-online",
  BROWSE_NITRO_TITLES: "" + sum + "/store/browse?type=nitro",
  SKU_DETAILS(arg0, arg1) {
    let str = "";
    if (null != arg1) {
      const _HermesInternal = HermesInternal;
      str = "?store_listing_id=" + arg1;
    }
    return "" + _window + "/store/skus/" + arg0 + str;
  },
  MESSAGE(arg0, arg1, arg2) {
    return "/channels/" + arg0 + "/" + arg1 + "/" + arg2;
  },
  CHANNEL(arg0, arg1) {
    return "/channels/" + arg0 + "/" + arg1;
  },
  REPORT: "" + sum + "/report",
  QUEST_PREVIEW_TOOL_2(arg0) {
    return "" + _window + "/quest-preview/" + arg0;
  },
  QUEST_HOME_PREVIEW(arg0) {
    return "" + _window + "/quest-home?ad_creative_ids=" + arg0;
  },
  QUEST_BAR_PREVIEW(arg0) {
    return "" + _window + "/quest-bar-preview?ad_creative_ids=" + arg0;
  },
};
const obj7 = {
  TWITTER: Object.freeze({ default: "https://twitter.com/discord", ja: "https://twitter.com/discord_jp" }),
};
const frozen4 = Object.freeze(obj7);
const freeze3 = Object.freeze;
const freeze3Result = freeze3(obj8);
let PathUtils = PathUtils_mod;
const wrapPathsResult = PathUtils.wrapPaths(freeze3Result);
PathUtils = PathUtils_mod;
const wrapPathsResult1 = PathUtils.wrapPaths({
  INDEX: "/",
  INDEX_WORD: "/index",
  INDEX_BUCKET: "/index/:bucketId",
  CHANGELOGS: "/changelogs/:date",
  COMMUNITY: "/community",
  COMPANY: "/company",
  COMPANY_INFORMATION: "/company-information",
  CREATORS: "/creators",
  DOWNLOADS: "/downloads",
  DOWNLOAD: "/download",
  GAMING: "/gaming",
  PRIVACY: "/privacy",
  TOS: "/tos",
  TERMS: "/terms",
  STORE_TERMS: "/store-terms",
  ACKNOWLEDGEMENTS: "/acknowledgements",
  LICENSES: "/licenses",
  PARTNERS: "/partners",
  HYPESQUAD: "/hypesquad",
  HYPESQUAD_RIOT: "/hypesquad-riot",
  BRANDING: "/branding",
  ERROR_404: "/404",
  JOBS: "/jobs",
  JOB: "/jobs/:jobId",
  STREAMKIT: "/streamkit",
  SECURITY: "/security",
  NITRO: "/nitro",
  DISCOVER: "/servers",
  QUESTS: "/ads/quests",
  GUIDELINES: "/guidelines",
  RICH_PRESENCE: "/rich-presence",
  VERIFICATION: "/verification",
  OPEN_SOURCE: "/open-source",
  WARFRAME: "/warframe",
  REMOTE_AUTH: "/ra/:remoteAuthFingerprint",
  SAFETY_LANDING: "/safetycenter",
  SAFETY_ARTICLE_ROOT: "/safety",
  SAFETY_ARTICLE: "/safety/:article",
  NEWSROOM: "/newsroom",
  INSPIRATION: "/inspiration",
  MOD_ACADEMY_LANDING: "/moderation",
  MOD_ACADEMY_EXAM: "/moderation/exam",
  MOD_ACADEMY_ARTICLE: "/moderation/:article",
  BLOG: "/blog",
  BUILD: "/build",
  DEVELOPERS: "/developers",
  APP_DIRECTORY: "/application-directory",
  REFRESH_INDEX: "/new",
  REFRESH_INDEX_WORD: "/new/index",
  REFRESH_COMPANY: "/new/company",
  REFRESH_DOWNLOAD: "/new/download",
  REFRESH_PRIVACY: "/new/privacy",
  REFRESH_TERMS: "/new/terms",
  REFRESH_ACKNOWLEDGEMENTS: "/new/acknowledgements",
  REFRESH_LICENSES: "/new/licenses",
  REFRESH_BRANDING: "/new/branding",
  REFRESH_JOBS: "/new/jobs",
  REFRESH_JOB: "/new/jobs/:jobId",
  REFRESH_STREAMKIT: "/new/streamkit",
  REFRESH_NITRO: "/new/nitro",
  REFRESH_GUIDELINES: "/new/guidelines",
  REFRESH_SAFETY_LANDING: "/new/safety",
  REFRESH_SAFETY_ARTICLE: "/new/safety/:article",
  COLLEGE: "/college",
  LEAGUE_CLUBS: "/league-communities",
  DISCORD_RECRUITING_SCAMS: "/discord-recruitment-scams",
  DEV_NEWSLETTER_SIGNUP: "/dev-newsletter",
  LEGACY_DEV_NEWSLETTER: "/newsletter",
  LEGAL_ARCHIVE: "/archive/",
  TERMS_MAY_2020: "/archive/terms/may-2020",
  PRIVACY_JUNE_2020: "/archive/privacy/june-2020",
  GUIDELINES_MAY_2020: "/archive/guidelines/may-2020",
  FALL_RELEASE_2023: "/fallrelease",
  MOBILE_REDESIGN_2023: "/mobile",
  REFRESH_XBOX_OFFER: "/new/discord-xbox-offer-2019",
  REFRESH_WHY_DISCORD: "/why-discord-is-different",
  WHY_DISCORD: "/why-discord",
  XBOX_OFFER: "/discord-xbox-offer-2020",
  COLLEGE_BRUINS: "/bruins",
  COLLEGE_ANTEATERS: "/anteaters",
  COLLEGE_GAUCHOS: "/gauchos",
  COLLEGE_BEARS: "/bears",
  COLLEGE_SLUGS: "/slugs",
  BACK_TO_SCHOOL_GIVEAWAY_INSTAGRAM: "/terms/back-to-school-2020/instagram",
  BACK_TO_SCHOOL_GIVEAWAY_TWITTER: "/terms/back-to-school-2020/twitter",
  SNOWSGIVING_GIVEAWAY_INSTAGRAM: "/terms/snowsgiving-2020/instagram",
  SNOWSGIVING_GIVEAWAY_TWITTER: "/terms/snowsgiving-2020/twitter",
});
const frozen5 = Object.freeze({
  FACEBOOK_URL: "https://www.facebook.com/discord/",
  INSTAGRAM_URL: "https://www.instagram.com/discord/",
  YOUTUBE_URL: "https://www.youtube.com/discord/",
  TIKTOK_URL: "https://www.tiktok.com/@discord",
});
const result = size.fileFinishedImporting("../discord_common/js/shared/Constants.tsx");
const GameGenres_export = GameGenres.GameGenres;

export const ThemeExtends = generated_ThemeTypes.ThemeExtends;
export const ThemeTypes = generated_ThemeTypes.ThemeTypes;
export const APP_URL_PREFIX = sum;
export const VANITY_URL_PREFIX = text;
export const PRIMARY_DOMAIN = "discord.com";
export const SUPPORT_DOMAIN = "support.discord.com";
export const SUPPORT_DEV_DOMAIN = "support-dev.discord.com";
export const EMAIL_DOMAIN = "discord.com";
export const BLOG_DOMAIN = "blog.discord.com";
export const FEEDBACK_DOMAIN = "feedback.discord.com";
export const DOCS_DOMAIN = "docs.discord.com";
export const UNSAFE_Colors = frozen;
export const Fonts = {
  PRIMARY_NORMAL: "ggsans-Normal, NotoSans-Normal",
  PRIMARY_NORMAL_ITALIC: "ggsans-NormalItalic, NotoSans-NormalItalic",
  PRIMARY_MEDIUM: "ggsans-Medium, NotoSans-Medium",
  PRIMARY_MEDIUM_ITALIC: "ggsans-MediumItalic, NotoSans-MediumItalic",
  PRIMARY_SEMIBOLD: "ggsans-Semibold, NotoSans-Semibold",
  PRIMARY_BOLD: "ggsans-Bold, NotoSans-Bold",
  PRIMARY_EXTRABOLD: "ggsans-ExtraBold, NotoSans-ExtraBold",
  DISPLAY_NORMAL: "ggsans-Normal, NotoSans-Normal",
  DISPLAY_MEDIUM: "ggsans-Medium, NotoSans-Medium",
  DISPLAY_SEMIBOLD: "ggsans-Semibold, NotoSans-Semibold",
  DISPLAY_BOLD: "ggsans-Bold, NotoSans-Bold",
  DISPLAY_EXTRABOLD: "ggsans-ExtraBold, NotoSans-ExtraBold",
  CODE_NORMAL: "ggmono-Normal, SourceCodePro-Normal",
  CODE_BOLD: "ggmono-Bold, SourceCodePro-Bold",
  GINTO_NORD_EXTRA_BOLD: "ABCGintoNord-ExtraBold",
  GINTO_NORD_EXTRA_BOLD_ITALIC: "ABCGintoNord-ExtraBoldItalic",
  GINTO_DISCORD_NORD_BOLD: "ABCGintoDiscordNord-Bold",
  GINTO_DISCORD_NORD_BOLD_ITALIC: "ABCGintoDiscordNord-BoldItalic",
  GINTO_DISCORD_NORD_BLACK_ITALIC: "ABCGintoDiscordNord-BlackItalic",
};
export const StatusTypes = {
  ONLINE: "online",
  OFFLINE: "offline",
  IDLE: "idle",
  DND: "dnd",
  INVISIBLE: "invisible",
  STREAMING: "streaming",
  UNKNOWN: "unknown",
};
export const ClientTypes = { DESKTOP: "desktop", WEB: "web", MOBILE: "mobile", VR: "vr", UNKNOWN: "unknown" };
export const RECAPTCHA_SITE_KEY = "6Lef5iQTAAAAAKeIvIY-DeexoO3gj7ryl9rLMEnn";
export const RevenueCampaigns = {
  CHECKOUT_RECOVERY: 1,
  [1]: "CHECKOUT_RECOVERY",
  CASH_APP_PAY_AWARENESS: 2,
  [2]: "CASH_APP_PAY_AWARENESS",
};
export const PaymentGateways = obj;
export const InternalPaymentGateways = { VIRTUAL_CURRENCY: 8, [8]: "VIRTUAL_CURRENCY" };
export const PaymentGatewayToFriendlyName = frozen1;
export const PaymentSettings = freezeResult;
export const BrowserAutofillPaymentMethodTypes = { GOOGLE_PAY: "google_pay", APPLE_PAY: "apple_pay" };
export const PaymentSourceTypes = obj3;
export const ADYEN_PAYMENT_SOURCE_ENTRIES = items1;
export const ADYEN_PAYMENT_SOURCES = map;
export const STRIPE_PAYMENT_SOURCES = map1;
export const IRREDEEMABLE_PAYMENT_SOURCES = set;
export const PREPAID_PAYMENT_SOURCES = set1;
export const VAULTABLE_PAYMENT_SOURCES = set2;
export const REDIRECTED_PAYMENT_SOURCES = set3;
export const DELAYED_PAYMENTS = set4;
export const PROACTIVE_FULFILLMENT = set5;
export const PaymentSourceFlags = { NEW: 1, [1]: "NEW", FAILED_ADDRESS: 16, [16]: "FAILED_ADDRESS" };
export const PaymentStatusTypes = {
  PENDING: 0,
  [0]: "PENDING",
  COMPLETED: 1,
  [1]: "COMPLETED",
  FAILED: 2,
  [2]: "FAILED",
  REVERSED: 3,
  [3]: "REVERSED",
  REFUNDED: 4,
  [4]: "REFUNDED",
  CANCELED: 5,
  [5]: "CANCELED",
};
export const SubscriptionTypes = {
  PREMIUM: 1,
  [1]: "PREMIUM",
  GUILD: 2,
  [2]: "GUILD",
  APPLICATION: 3,
  [3]: "APPLICATION",
  GAME_SERVER: 4,
  [4]: "GAME_SERVER",
  GIFT: 5,
  [5]: "GIFT",
};
export const BraintreeErrors = {
  PAYPAL_POPUP_CLOSED: "PAYPAL_POPUP_CLOSED",
  VENMO_APP_CANCELED: "VENMO_APP_CANCELED",
  VENMO_DESKTOP_CANCELED: "VENMO_DESKTOP_CANCELED",
  VENMO_CANCELED: "VENMO_CANCELED",
};
export const ExternalSKUStrategyTypes = frozen2;
export const RevenueSurfaces = { DISCOVERY: 0, [0]: "DISCOVERY", CHECKOUT: 1, [1]: "CHECKOUT" };
export const PurchaseTypes = obj4;
export const PurchaseTypeToAnalyticsPaymentType = frozen3;
export const OfferTriggerTypes = {
  PREMIUM_UPSELL_VIEWED: "premium_upsell_viewed",
  VIDEO_STREAM_ENDED: "video_stream_ended",
  USER_PROFILE_ACTION: "user_profile_action",
  JOIN_VOICE_CHANNEL: "join_voice_channel",
  CHANNEL_OPENED: "channel_opened",
};
export const BasicPermissions = {
  VIEW_CHANNEL: 1024,
  [1024]: "VIEW_CHANNEL",
  READ_MESSAGE_HISTORY: 65536,
  [65536]: "READ_MESSAGE_HISTORY",
  CONNECT: 1048576,
  [1048576]: "CONNECT",
};
export const Permissions = freeze2Result;
export const NOOP = NoopUtils.NOOP;
export const NOOP_NULL = NoopUtils.NOOP_NULL;
export const NOOP_PROMISE = NoopUtils.NOOP_PROMISE;
export const NOOP_TRUE = NoopUtils.NOOP_TRUE;
export const ElevatedPermissionsList = items23;
export const ElevatedPermissions = applyResult;
export const RPC_VERSION = 1;
export const RPC_STARTING_PORT = 6463;
export const RPC_PORT_RANGE = 10;
export const RPC_APPLICATION_LOGGING_CATEGORY = "RpcApplicationLogger";
export const RPCCommands = {
  DISPATCH: "DISPATCH",
  SET_CONFIG: "SET_CONFIG",
  AUTHORIZE: "AUTHORIZE",
  AUTHENTICATE: "AUTHENTICATE",
  GET_GUILD: "GET_GUILD",
  GET_GUILDS: "GET_GUILDS",
  GET_CHANNEL: "GET_CHANNEL",
  GET_CHANNELS: "GET_CHANNELS",
  GET_CHANNEL_PERMISSIONS: "GET_CHANNEL_PERMISSIONS",
  CREATE_CHANNEL_INVITE: "CREATE_CHANNEL_INVITE",
  GET_RELATIONSHIPS: "GET_RELATIONSHIPS",
  GET_USER: "GET_USER",
  SUBSCRIBE: "SUBSCRIBE",
  UNSUBSCRIBE: "UNSUBSCRIBE",
  SET_USER_VOICE_SETTINGS: "SET_USER_VOICE_SETTINGS",
  SET_USER_VOICE_SETTINGS_2: "SET_USER_VOICE_SETTINGS_2",
  PUSH_TO_TALK: "PUSH_TO_TALK",
  SELECT_VOICE_CHANNEL: "SELECT_VOICE_CHANNEL",
  GET_SELECTED_VOICE_CHANNEL: "GET_SELECTED_VOICE_CHANNEL",
  SELECT_TEXT_CHANNEL: "SELECT_TEXT_CHANNEL",
  GET_VOICE_SETTINGS: "GET_VOICE_SETTINGS",
  SET_VOICE_SETTINGS_2: "SET_VOICE_SETTINGS_2",
  SET_VOICE_SETTINGS: "SET_VOICE_SETTINGS",
  GET_CLIENT_VOICE_SETTINGS: "GET_CLIENT_VOICE_SETTINGS",
  SET_ACTIVITY: "SET_ACTIVITY",
  SEND_ACTIVITY_JOIN_INVITE: "SEND_ACTIVITY_JOIN_INVITE",
  CLOSE_ACTIVITY_JOIN_REQUEST: "CLOSE_ACTIVITY_JOIN_REQUEST",
  ACTIVITY_INVITE_USER: "ACTIVITY_INVITE_USER",
  ACCEPT_ACTIVITY_INVITE: "ACCEPT_ACTIVITY_INVITE",
  OPEN_INVITE_DIALOG: "OPEN_INVITE_DIALOG",
  OPEN_SHARE_MOMENT_DIALOG: "OPEN_SHARE_MOMENT_DIALOG",
  SHARE_INTERACTION: "SHARE_INTERACTION",
  INITIATE_IMAGE_UPLOAD: "INITIATE_IMAGE_UPLOAD",
  SHARE_LINK: "SHARE_LINK",
  SHARE_CONTENT: "SHARE_CONTENT",
  OPEN_CONTEXT_MENU: "OPEN_CONTEXT_MENU",
  OPEN_MEDIA_VIEWER: "OPEN_MEDIA_VIEWER",
  OPEN_USER_PROFILE: "OPEN_USER_PROFILE",
  OPEN_USER_POPOUT: "OPEN_USER_POPOUT",
  SHOW_TOOLTIP: "SHOW_TOOLTIP",
  HIDE_TOOLTIP: "HIDE_TOOLTIP",
  SHOW_TOAST: "SHOW_TOAST",
  SHOW_CONFIRM_MODAL: "SHOW_CONFIRM_MODAL",
  INVITE_BROWSER: "INVITE_BROWSER",
  DEEP_LINK: "DEEP_LINK",
  CONNECTIONS_CALLBACK: "CONNECTIONS_CALLBACK",
  BILLING_POPUP_BRIDGE_CALLBACK: "BILLING_POPUP_BRIDGE_CALLBACK",
  BRAINTREE_POPUP_BRIDGE_CALLBACK: "BRAINTREE_POPUP_BRIDGE_CALLBACK",
  GIFT_CODE_BROWSER: "GIFT_CODE_BROWSER",
  GUILD_TEMPLATE_BROWSER: "GUILD_TEMPLATE_BROWSER",
  OPEN_INVITE: "OPEN_INVITE",
  OPEN_MESSAGE: "OPEN_MESSAGE",
  SET_SUPPRESS_NOTIFICATIONS: "SET_SUPPRESS_NOTIFICATIONS",
  OVERLAY: "OVERLAY",
  BROWSER_HANDOFF: "BROWSER_HANDOFF",
  SET_CERTIFIED_DEVICES: "SET_CERTIFIED_DEVICES",
  GET_IMAGE: "GET_IMAGE",
  SET_OVERLAY_LOCKED: "SET_OVERLAY_LOCKED",
  OPEN_OVERLAY_ACTIVITY_INVITE: "OPEN_OVERLAY_ACTIVITY_INVITE",
  OPEN_OVERLAY_GUILD_INVITE: "OPEN_OVERLAY_GUILD_INVITE",
  OPEN_OVERLAY_VOICE_SETTINGS: "OPEN_OVERLAY_VOICE_SETTINGS",
  VALIDATE_APPLICATION: "VALIDATE_APPLICATION",
  GET_ENTITLEMENT_TICKET: "GET_ENTITLEMENT_TICKET",
  GET_APPLICATION_TICKET: "GET_APPLICATION_TICKET",
  START_PURCHASE: "START_PURCHASE",
  START_PREMIUM_PURCHASE: "START_PREMIUM_PURCHASE",
  GET_SKUS: "GET_SKUS",
  GET_ENTITLEMENTS: "GET_ENTITLEMENTS",
  GET_SKUS_EMBEDDED: "GET_SKUS_EMBEDDED",
  GET_ENTITLEMENTS_EMBEDDED: "GET_ENTITLEMENTS_EMBEDDED",
  GET_NETWORKING_CONFIG: "GET_NETWORKING_CONFIG",
  NETWORKING_SYSTEM_METRICS: "NETWORKING_SYSTEM_METRICS",
  NETWORKING_PEER_METRICS: "NETWORKING_PEER_METRICS",
  NETWORKING_CREATE_TOKEN: "NETWORKING_CREATE_TOKEN",
  USER_SETTINGS_GET_LOCALE: "USER_SETTINGS_GET_LOCALE",
  SEND_GENERIC_EVENT: "SEND_GENERIC_EVENT",
  SEND_ANALYTICS_EVENT: "SEND_ANALYTICS_EVENT",
  OPEN_EXTERNAL_LINK: "OPEN_EXTERNAL_LINK",
  CAPTURE_LOG: "CAPTURE_LOG",
  ENCOURAGE_HW_ACCELERATION: "ENCOURAGE_HW_ACCELERATION",
  SET_ORIENTATION_LOCK_STATE: "SET_ORIENTATION_LOCK_STATE",
  SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY: "SET_PREFERS_PICTURE_IN_PICTURE_ON_NAVIGATE_AWAY",
  GET_PLATFORM_BEHAVIORS: "GET_PLATFORM_BEHAVIORS",
  GET_SOUNDBOARD_SOUNDS: "GET_SOUNDBOARD_SOUNDS",
  PLAY_SOUNDBOARD_SOUND: "PLAY_SOUNDBOARD_SOUND",
  TOGGLE_VIDEO: "TOGGLE_VIDEO",
  TOGGLE_SCREENSHARE: "TOGGLE_SCREENSHARE",
  TOGGLE_VOICE_CHANNEL_CHAT: "TOGGLE_VOICE_CHANNEL_CHAT",
  GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS: "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS",
  GET_VOICE_CAPABILITIES: "GET_VOICE_CAPABILITIES",
  GET_VOICE_SESSION_PARTICIPANTS: "GET_VOICE_SESSION_PARTICIPANTS",
  START_VOICE_SESSION: "START_VOICE_SESSION",
  STOP_VOICE_SESSION: "STOP_VOICE_SESSION",
  ENABLE_VOICE_SPATIAL: "ENABLE_VOICE_SPATIAL",
  DISABLE_VOICE_SPATIAL: "DISABLE_VOICE_SPATIAL",
  UPDATE_VOICE_SPATIAL: "UPDATE_VOICE_SPATIAL",
  RELAUNCH_FRAME: "RELAUNCH_FRAME",
  GET_APPLICATION_STREAMING_VIEW_CAPABILITIES: "GET_APPLICATION_STREAMING_VIEW_CAPABILITIES",
  START_APPLICATION_STREAMING_VIEW: "START_APPLICATION_STREAMING_VIEW",
  SUSPEND_APPLICATION_STREAMING_VIEW: "SUSPEND_APPLICATION_STREAMING_VIEW",
  RESUME_APPLICATION_STREAMING_VIEW: "RESUME_APPLICATION_STREAMING_VIEW",
  WATCH_APPLICATION_STREAMING_VIEW_ON_DISCORD: "WATCH_APPLICATION_STREAMING_VIEW_ON_DISCORD",
  STOP_APPLICATION_STREAMING_VIEW: "STOP_APPLICATION_STREAMING_VIEW",
  GET_CAMERA_VIEW_CAPABILITIES: "GET_CAMERA_VIEW_CAPABILITIES",
  START_CAMERA_VIEW: "START_CAMERA_VIEW",
  SUSPEND_CAMERA_VIEW: "SUSPEND_CAMERA_VIEW",
  RESUME_CAMERA_VIEW: "RESUME_CAMERA_VIEW",
  STOP_CAMERA_VIEW: "STOP_CAMERA_VIEW",
  GET_PROVIDER_ACCESS_TOKEN: "GET_PROVIDER_ACCESS_TOKEN",
  MAYBE_GET_PROVIDER_ACCESS_TOKEN: "MAYBE_GET_PROVIDER_ACCESS_TOKEN",
  NAVIGATE_TO_CONNECTIONS: "NAVIGATE_TO_CONNECTIONS",
  INVITE_USER_EMBEDDED: "INVITE_USER_EMBEDDED",
  REQUEST_PROXY_TICKET_REFRESH: "REQUEST_PROXY_TICKET_REFRESH",
  GET_QUEST_ENROLLMENT_STATUS: "GET_QUEST_ENROLLMENT_STATUS",
  QUEST_START_TIMER: "QUEST_START_TIMER",
  GET_QUEST: "GET_QUEST",
};
export const RPCEvents = {
  CURRENT_USER_UPDATE: "CURRENT_USER_UPDATE",
  CURRENT_GUILD_MEMBER_UPDATE: "CURRENT_GUILD_MEMBER_UPDATE",
  GUILD_STATUS: "GUILD_STATUS",
  GUILD_CREATE: "GUILD_CREATE",
  CHANNEL_CREATE: "CHANNEL_CREATE",
  RELATIONSHIP_UPDATE: "RELATIONSHIP_UPDATE",
  VOICE_CHANNEL_SELECT: "VOICE_CHANNEL_SELECT",
  VOICE_STATE_CREATE: "VOICE_STATE_CREATE",
  VOICE_STATE_DELETE: "VOICE_STATE_DELETE",
  VOICE_STATE_UPDATE: "VOICE_STATE_UPDATE",
  VOICE_SETTINGS_UPDATE: "VOICE_SETTINGS_UPDATE",
  VOICE_SETTINGS_UPDATE_2: "VOICE_SETTINGS_UPDATE_2",
  CLIENT_VOICE_SETTINGS_UPDATE: "CLIENT_VOICE_SETTINGS_UPDATE",
  VOICE_CONNECTION_STATUS: "VOICE_CONNECTION_STATUS",
  SPEAKING_START: "SPEAKING_START",
  SPEAKING_STOP: "SPEAKING_STOP",
  VOICE_SESSION_PARTICIPANTS_UPDATE: "VOICE_SESSION_PARTICIPANTS_UPDATE",
  VOICE_SESSION_SPEAKING_START: "VOICE_SESSION_SPEAKING_START",
  VOICE_SESSION_SPEAKING_STOP: "VOICE_SESSION_SPEAKING_STOP",
  GAME_JOIN: "GAME_JOIN",
  GAME_SPECTATE: "GAME_SPECTATE",
  ACTIVITY_JOIN: "ACTIVITY_JOIN",
  ACTIVITY_JOIN_REQUEST: "ACTIVITY_JOIN_REQUEST",
  ACTIVITY_SPECTATE: "ACTIVITY_SPECTATE",
  ACTIVITY_INVITE: "ACTIVITY_INVITE",
  ACTIVITY_PIP_MODE_UPDATE: "ACTIVITY_PIP_MODE_UPDATE",
  ACTIVITY_LAYOUT_MODE_UPDATE: "ACTIVITY_LAYOUT_MODE_UPDATE",
  FRAME_LAYOUT_MODE_UPDATE: "FRAME_LAYOUT_MODE_UPDATE",
  THERMAL_STATE_UPDATE: "THERMAL_STATE_UPDATE",
  ORIENTATION_UPDATE: "ORIENTATION_UPDATE",
  ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE: "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE",
  NOTIFICATION_CREATE: "NOTIFICATION_CREATE",
  MESSAGE_CREATE: "MESSAGE_CREATE",
  MESSAGE_UPDATE: "MESSAGE_UPDATE",
  MESSAGE_DELETE: "MESSAGE_DELETE",
  OVERLAY: "OVERLAY",
  OVERLAY_UPDATE: "OVERLAY_UPDATE",
  ENTITLEMENT_CREATE: "ENTITLEMENT_CREATE",
  ENTITLEMENT_DELETE: "ENTITLEMENT_DELETE",
  VOICE_CHANNEL_EFFECT_SEND: "VOICE_CHANNEL_EFFECT_SEND",
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: "VOICE_CHANNEL_EFFECT_RECENT_EMOJI",
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: "VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE",
  SCREENSHARE_STATE_UPDATE: "SCREENSHARE_STATE_UPDATE",
  VIDEO_STATE_UPDATE: "VIDEO_STATE_UPDATE",
  AUTHORIZE_REQUEST: "AUTHORIZE_REQUEST",
  QUEST_ENROLLMENT_STATUS_UPDATE: "QUEST_ENROLLMENT_STATUS_UPDATE",
  DISCORD_ENV_UPDATE: "DISCORD_ENV_UPDATE",
  READY: "READY",
  ERROR: "ERROR",
};
export const RPCErrors = {
  UNKNOWN_ERROR: 1000,
  [1000]: "UNKNOWN_ERROR",
  SERVICE_UNAVAILABLE: 1001,
  [1001]: "SERVICE_UNAVAILABLE",
  TRANSACTION_ABORTED: 1002,
  [1002]: "TRANSACTION_ABORTED",
  INVALID_PAYLOAD: 4000,
  [4000]: "INVALID_PAYLOAD",
  INVALID_COMMAND: 4002,
  [4002]: "INVALID_COMMAND",
  INVALID_GUILD: 4003,
  [4003]: "INVALID_GUILD",
  INVALID_EVENT: 4004,
  [4004]: "INVALID_EVENT",
  INVALID_CHANNEL: 4005,
  [4005]: "INVALID_CHANNEL",
  INVALID_PERMISSIONS: 4006,
  [4006]: "INVALID_PERMISSIONS",
  INVALID_CLIENTID: 4007,
  [4007]: "INVALID_CLIENTID",
  INVALID_ORIGIN: 4008,
  [4008]: "INVALID_ORIGIN",
  INVALID_TOKEN: 4009,
  [4009]: "INVALID_TOKEN",
  INVALID_USER: 4010,
  [4010]: "INVALID_USER",
  INVALID_INVITE: 4011,
  [4011]: "INVALID_INVITE",
  INVALID_ACTIVITY_JOIN_REQUEST: 4012,
  [4012]: "INVALID_ACTIVITY_JOIN_REQUEST",
  INVALID_ENTITLEMENT: 4015,
  [4015]: "INVALID_ENTITLEMENT",
  INVALID_GIFT_CODE: 4016,
  [4016]: "INVALID_GIFT_CODE",
  INVALID_GUILD_TEMPLATE: 4017,
  [4017]: "INVALID_GUILD_TEMPLATE",
  INVALID_SOUND: 4018,
  [4018]: "INVALID_SOUND",
  INVALID_PROVIDER: 4019,
  [4019]: "INVALID_PROVIDER",
  INVALID_CONNECTION_CALLBACK_STATE: 4020,
  [4020]: "INVALID_CONNECTION_CALLBACK_STATE",
  BAD_REQUEST_FOR_PROVIDER: 4021,
  [4021]: "BAD_REQUEST_FOR_PROVIDER",
  OAUTH2_ERROR: 5000,
  [5000]: "OAUTH2_ERROR",
  SELECT_CHANNEL_TIMED_OUT: 5001,
  [5001]: "SELECT_CHANNEL_TIMED_OUT",
  GET_GUILD_TIMED_OUT: 5002,
  [5002]: "GET_GUILD_TIMED_OUT",
  SELECT_VOICE_FORCE_REQUIRED: 5003,
  [5003]: "SELECT_VOICE_FORCE_REQUIRED",
  INVALID_ACTIVITY_SECRET: 5005,
  [5005]: "INVALID_ACTIVITY_SECRET",
  NO_ELIGIBLE_ACTIVITY: 5006,
  [5006]: "NO_ELIGIBLE_ACTIVITY",
  PURCHASE_CANCELED: 5008,
  [5008]: "PURCHASE_CANCELED",
  PURCHASE_ERROR: 5009,
  [5009]: "PURCHASE_ERROR",
  UNAUTHORIZED_FOR_ACHIEVEMENT: 5010,
  [5010]: "UNAUTHORIZED_FOR_ACHIEVEMENT",
  RATE_LIMITED: 5011,
  [5011]: "RATE_LIMITED",
  UNAUTHORIZED_FOR_APPLICATION: 5012,
  [5012]: "UNAUTHORIZED_FOR_APPLICATION",
  NO_CONNECTION_FOUND: 5013,
  [5013]: "NO_CONNECTION_FOUND",
};
export const RPCCloseCodes = {
  CLOSE_NORMAL: 1000,
  [1000]: "CLOSE_NORMAL",
  CLOSE_UNSUPPORTED: 1003,
  [1003]: "CLOSE_UNSUPPORTED",
  CLOSE_ABNORMAL: 1006,
  [1006]: "CLOSE_ABNORMAL",
  INVALID_CLIENTID: 4000,
  [4000]: "INVALID_CLIENTID",
  INVALID_ORIGIN: 4001,
  [4001]: "INVALID_ORIGIN",
  RATELIMITED: 4002,
  [4002]: "RATELIMITED",
  TOKEN_REVOKED: 4003,
  [4003]: "TOKEN_REVOKED",
  INVALID_VERSION: 4004,
  [4004]: "INVALID_VERSION",
  INVALID_ENCODING: 4005,
  [4005]: "INVALID_ENCODING",
};
export const ROUGH_COUNT_MILLION_PLAYERS = 250;
export const TOKEN_KEY = "token";
export const ANALYTICS_TOKEN_KEY = "analyticsToken";
export const TOKENS_KEY = "tokens";
export const STATUS_DOMAIN = "status.discord.com";
export const STATUS_PAGE_ENDPOINT = combined;
export const Links = obj6;
export const LocalizedLinks = frozen4;
export const AppRoutes = wrapPathsResult;
export const WebRoutes = wrapPathsResult1;
export const SOCIAL_LINKS = frozen5;
export const WebAnalyticsEvents = {
  EXPERIMENT_USER_TRIGGERED: "experiment_user_triggered",
  EXPERIMENT_GUILD_TRIGGERED: "experiment_guild_triggered",
  EXPERIMENT_SAVE_EXPOSURE_FAILED: "experiment_save_exposure_failed",
  EXPERIMENT_USER_EVALUATION_EXPOSED: "experiment_user_evaluation_exposed",
  EXPERIMENT_USER_EXPOSURE_SUPPRESSED: "experiment_user_exposure_suppressed",
  EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED: "experiment_installation_evaluation_exposed",
  EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED: "experiment_installation_exposure_suppressed",
  EXPERIMENT_GUILD_EVALUATION_EXPOSED: "experiment_guild_evaluation_exposed",
  EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED: "experiment_guild_exposure_suppressed",
  MKTG_PAGE_VIEWED: "mktg_page_viewed",
  CLICK_LANDING_CTA: "click_landing_cta",
  DOWNLOAD_APP: "download_app",
  MKTG_HYPESQUAD_FORM_SUBMITTED: "mktg_hypesquad_form_submitted",
  MKTG_HYPESQUAD_FORM_OPENED: "mktg_hypesquad_form_opened",
  CHANGE_MARKETING_LOCALE: "change_marketing_locale",
  GAME_CLICKED_LANDING: "game_clicked_landing",
  MAIN_NAVIGATION_MENU: "main_navigation_menu",
  MKTG_APPLICATION_STEP: "mktg_application_step",
  MKTG_WARFRAME_CTA_CLICKED: "mktg_warframe_cta_clicked",
  MKTG_PAGE_CTA_CLICKED: "mktg_page_cta_clicked",
  MKTG_PAGE_SCROLLED: "mktg_page_scrolled",
  MKTG_CONSENT_TIMING_MEASURED: "mktg_consent_timing_measured",
  MKTG_VIDEO_PLAYED: "mktg_video_played",
  DEEP_LINK_CLICKED: "deep_link_clicked",
  SEO_PAGE_VIEWED: "seo_server_landing_page_viewed",
  SEO_PAGE_CTA_CLICKED: "seo_server_landing_page_cta_clicked",
  SEO_TRENDING_GAMES_CTA_CLICKED: "seo_trending_games_cta_clicked",
  SEO_AGGREGATOR_PAGE_VIEWED: "seo_aggregator_page_viewed",
  SEO_AGGREGATOR_CTA_CLICKED: "seo_aggregator_page_cta_clicked",
  SEO_AGGREGATOR_SEARCH_PERFORMED: "seo_aggregator_search_performed",
  LOCATION_STACK_METADATA: "location_stack_metadata",
  CREATOR_STORE_PAGE_VIEWED: "creator_store_page_viewed",
  CREATOR_STORE_PAGE_CTA_CLICKED: "creator_store_page_cta_clicked",
  SEO_PAGE_CWV_MEASURED: "seo_page_cwv_measured",
  ADS_MANAGER_PAGE_VIEWED: "ads_manager_page_viewed",
  ADS_MANAGER_CTA_CLICKED: "ads_manager_cta_clicked",
  ADS_MANAGER_NO_AD_ACCOUNTS_VIEWED: "ads_manager_no_ad_accounts_viewed",
};
export const WebAnalyticsPageLoads = { MKTG_ACKNOWLEDGEMENTS_MODAL_OPEN: "mktg_ack_modal_open" };
export const TelemetryEvents = { CLIENT_TELEMETRY: "client_telemetry" };
export const TelemetryEndpoints = { CLIENT_TELEMETRY: "/beaker" };
export const CurrencyCodes = {
  AED: "aed",
  AFN: "afn",
  ALL: "all",
  AMD: "amd",
  ANG: "ang",
  AOA: "aoa",
  ARS: "ars",
  AUD: "aud",
  AWG: "awg",
  AZN: "azn",
  BAM: "bam",
  BBD: "bbd",
  BDT: "bdt",
  BGN: "bgn",
  BHD: "bhd",
  BIF: "bif",
  BMD: "bmd",
  BND: "bnd",
  BOB: "bob",
  BOV: "bov",
  BRL: "brl",
  BSD: "bsd",
  BTN: "btn",
  BWP: "bwp",
  BYN: "byn",
  BYR: "byr",
  BZD: "bzd",
  CAD: "cad",
  CDF: "cdf",
  CHE: "che",
  CHF: "chf",
  CHW: "chw",
  CLF: "clf",
  CLP: "clp",
  CNY: "cny",
  COP: "cop",
  COU: "cou",
  CRC: "crc",
  CUC: "cuc",
  CUP: "cup",
  CVE: "cve",
  CZK: "czk",
  DJF: "djf",
  DKK: "dkk",
  DOP: "dop",
  DZD: "dzd",
  EGP: "egp",
  ERN: "ern",
  ETB: "etb",
  EUR: "eur",
  FJD: "fjd",
  FKP: "fkp",
  GBP: "gbp",
  GEL: "gel",
  GHS: "ghs",
  GIP: "gip",
  GMD: "gmd",
  GNF: "gnf",
  GTQ: "gtq",
  GYD: "gyd",
  HKD: "hkd",
  HNL: "hnl",
  HRK: "hrk",
  HTG: "htg",
  HUF: "huf",
  IDR: "idr",
  ILS: "ils",
  INR: "inr",
  IQD: "iqd",
  IRR: "irr",
  ISK: "isk",
  JMD: "jmd",
  JOD: "jod",
  JPY: "jpy",
  KES: "kes",
  KGS: "kgs",
  KHR: "khr",
  KMF: "kmf",
  KPW: "kpw",
  KRW: "krw",
  KWD: "kwd",
  KYD: "kyd",
  KZT: "kzt",
  LAK: "lak",
  LBP: "lbp",
  LKR: "lkr",
  LRD: "lrd",
  LSL: "lsl",
  LTL: "ltl",
  LVL: "lvl",
  LYD: "lyd",
  MAD: "mad",
  MDL: "mdl",
  MGA: "mga",
  MKD: "mkd",
  MMK: "mmk",
  MNT: "mnt",
  MOP: "mop",
  MRO: "mro",
  MUR: "mur",
  MVR: "mvr",
  MWK: "mwk",
  MXN: "mxn",
  MXV: "mxv",
  MYR: "myr",
  MZN: "mzn",
  NAD: "nad",
  NGN: "ngn",
  NIO: "nio",
  NOK: "nok",
  NPR: "npr",
  NZD: "nzd",
  OMR: "omr",
  PAB: "pab",
  PEN: "pen",
  PGK: "pgk",
  PHP: "php",
  PKR: "pkr",
  PLN: "pln",
  PYG: "pyg",
  QAR: "qar",
  RON: "ron",
  RSD: "rsd",
  RUB: "rub",
  RWF: "rwf",
  SAR: "sar",
  SBD: "sbd",
  SCR: "scr",
  SDG: "sdg",
  SEK: "sek",
  SGD: "sgd",
  SHP: "shp",
  SLL: "sll",
  SOS: "sos",
  SRD: "srd",
  SSP: "ssp",
  STD: "std",
  SVC: "svc",
  SYP: "syp",
  SZL: "szl",
  THB: "thb",
  TJS: "tjs",
  TMT: "tmt",
  TND: "tnd",
  TOP: "top",
  TRY: "try",
  TTD: "ttd",
  TWD: "twd",
  TZS: "tzs",
  UAH: "uah",
  UGX: "ugx",
  USD: "usd",
  USN: "usn",
  USS: "uss",
  UYI: "uyi",
  UYU: "uyu",
  UZS: "uzs",
  VEF: "vef",
  VND: "vnd",
  VUV: "vuv",
  WST: "wst",
  XAF: "xaf",
  XAG: "xag",
  XAU: "xau",
  XBA: "xba",
  XBB: "xbb",
  XBC: "xbc",
  XBD: "xbd",
  XCD: "xcd",
  XDR: "xdr",
  XFU: "xfu",
  XOF: "xof",
  XPD: "xpd",
  XPF: "xpf",
  XPT: "xpt",
  XSU: "xsu",
  XTS: "xts",
  XUA: "xua",
  YER: "yer",
  ZAR: "zar",
  ZMW: "zmw",
  ZWL: "zwl",
  DISCORD_ORB: "discord_orb",
};
export const FallbackCurrencyCountry = "US";
export const MobilePaymentDefault = { COUNTRY: "US", CURRENCY: "usd" };
export const SKUFeatureTypes = {
  SINGLE_PLAYER: 1,
  [1]: "SINGLE_PLAYER",
  ONLINE_MULTIPLAYER: 2,
  [2]: "ONLINE_MULTIPLAYER",
  LOCAL_MULTIPLAYER: 3,
  [3]: "LOCAL_MULTIPLAYER",
  PVP: 4,
  [4]: "PVP",
  LOCAL_COOP: 5,
  [5]: "LOCAL_COOP",
  CROSS_PLATFORM: 6,
  [6]: "CROSS_PLATFORM",
  RICH_PRESENCE: 7,
  [7]: "RICH_PRESENCE",
  DISCORD_GAME_INVITES: 8,
  [8]: "DISCORD_GAME_INVITES",
  SPECTATOR_MODE: 9,
  [9]: "SPECTATOR_MODE",
  CONTROLLER_SUPPORT: 10,
  [10]: "CONTROLLER_SUPPORT",
  CLOUD_SAVES: 11,
  [11]: "CLOUD_SAVES",
  ONLINE_COOP: 12,
  [12]: "ONLINE_COOP",
  SECURE_NETWORKING: 13,
  [13]: "SECURE_NETWORKING",
};
export { GameGenres_export as GameGenres };
export const PriceTierTypes = {
  GUILD_ROLE_SUBSCRIPTIONS: 1,
  [1]: "GUILD_ROLE_SUBSCRIPTIONS",
  GUILD_PRODUCTS: 2,
  [2]: "GUILD_PRODUCTS",
};
export const UserMediaErrors = {
  PERMISSION_DENIED: "PERMISSION_DENIED",
  PERMISSION_DISMISSED: "PERMISSION_DISMISSED",
  NO_DEVICES_FOUND: "NO_DEVICES_FOUND",
};
export const NavigateEventSource = { SWIPE: "SWIPE", BROWSER: "BROWSER", KEYBIND: "KEYBIND" };
export const RoleFlags = { IN_PROMPT: 1, [1]: "IN_PROMPT" };
export const DiscoveryBannedSearchWords = [
  "pepe",
  "nude",
  "nsfw",
  "18+",
  "hentai",
  "sex",
  "porn",
  "shit",
  "rape",
  "fuck",
  "penis",
  "pussy",
  "incest",
  "cum",
  "jizz",
  "cuck",
  "kkk",
  "terrorism",
];
