// discord_app/modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx
import util from "../../intl/index.native.tsx";
import v1 from "../../../_runtime/01266_v1.js";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";

require = fn;
let closure_13 = async function _navigateToGuild() {
  const obj6 = {};
  const merged = Object.assign(closure_129_5);
  obj6.loadId = closure_129_0;
  closure_129_6 = obj6;
  await closure_130_2(closure_130_3[6]).startLurking(closure_129_1, closure_129_4, closure_129_6);
  closure_130_1(closure_130_3[7]).track(closure_130_12.GUILD_DISCOVERY_GUILD_SELECTED, {
    guild_id: closure_129_1,
    load_id: closure_129_0,
    card_index: closure_129_2,
    category_id: closure_129_3,
    location: closure_129_4,
  });
  await "HermesInternal";
  closure_1 = tmp2;
  ({
    loadId: closure_129_0,
    guildId: closure_129_1,
    index: closure_129_2,
    categoryId: closure_129_3,
    analyticsLocation: closure_129_4,
    options: closure_129_5,
  } = closure_0);
  return "flexDirection";
};
const GlobalDiscoveryServersConstants = fn(9174);
({
  GlobalDiscoveryServerTab: closure_6,
  FEATURED_GUILDS_CACHE_DURATION: metroImportDefault,
  CategoryId: closure_8,
  DISCOVERY_ALL_CATEGORIES_ID: closure_9,
  getLanguageOptions: closure_10,
  HUBS_CATEGORY_ID: closure_11,
} = GlobalDiscoveryServersConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx");

export function getGlobalDiscoveryServersTabTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t["RU+DCe"]);
  } else if (constants.GAMING === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t["CD/USA"]);
  } else if (constants.MUSIC === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["nt9PL+"]);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.gSbmdt);
  } else if (constants.TECH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["0A0By5"]);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.Gy9woq);
  } else if (constants.HUBS === arg0) {
    const intl = util.intl;
    return intl.string(util.t["q469/Z"]);
  }
}
export function getGlobalDiscoveryServersBannerTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t.OlDfzP);
  } else if (constants.GAMING === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t["CD/USA"]);
  } else if (constants.MUSIC === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["nt9PL+"]);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.gSbmdt);
  } else if (constants.TECH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["0A0By5"]);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.Gy9woq);
  } else if (constants.HUBS === arg0) {
    const intl = util.intl;
    return intl.string(util.t.X5xPlb);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
}
export function getGlobalDiscoveryServersBannerDescription(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t.SdMhrk);
  } else if (constants.GAMING === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.AAJ5ov);
  } else if (constants.MUSIC === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["SOio+D"]);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.R09vf0);
  } else if (constants.TECH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.Ew4d56);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.sasIWU);
  } else if (constants.HUBS === arg0) {
    const intl = util.intl;
    return intl.string(util.t["F/IQCI"]);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
}
export function getGlobalDiscoveryServersTabSectionTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.crt84X);
  } else if (constants.GAMING === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t.fWbIpf);
  } else if (constants.MUSIC === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.nfgDzz);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.k1CYxv);
  } else if (constants.TECH === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["4dawps"]);
  } else if (constants.EDUCATION === arg0) {
    const intl = util.intl;
    return intl.string(util.t.uexPgT);
  } else {
    return null;
  }
}
export function getCategoryIdFromServerTab(type) {
  if (constants.FEATURED === type) {
    return React6;
  } else if (constants.GAMING === type) {
    return React5.Activity;
  } else if (constants.MUSIC === type) {
    return React5.Music;
  } else if (constants.ENTERTAINMENT === type) {
    return React5.Television;
  } else if (constants.TECH === type) {
    return React5.Science;
  } else if (constants.EDUCATION === type) {
    return React5.Education;
  } else if (constants.HUBS === type) {
    return closure_1_11;
  } else {
    GlobalUtils.assertNever(type);
  }
}
export function isStaleFeaturedGuilds(arg0) {
  let tmp = null == arg0;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - arg0 > metroImportDefault;
  }
  return tmp;
}
export function fromDiscoverableGuildServer(id) {
  const obj = {
    id: id.id,
    name: id.name,
    description: id.description,
    splash: id.splash,
    banner: id.banner,
    icon: id.icon,
    features: new Set(id.features),
    presenceCount: null,
    memberCount: null,
    premiumSubscriptionCount: null,
    preferredLocale: null,
    discoverySplash: null,
    emojis: null,
    emojiCount: null,
  };
  ({
    approximate_presence_count: obj.presenceCount,
    approximate_member_count: obj.memberCount,
    premium_subscription_count: obj.premiumSubscriptionCount,
    preferred_locale: obj.preferredLocale,
    discovery_splash: obj.discoverySplash,
    emojis: obj.emojis,
    emoji_count: obj.emojiCount,
  } = id);
  return obj;
}
export function fromDiscoverableGuildSearchResult(id) {
  const obj = {
    id: id.id,
    name: id.name,
    description: id.description,
    splash: id.splash,
    banner: id.banner,
    icon: id.icon,
    features: new Set(id.features),
    presenceCount: null,
    memberCount: null,
    premiumSubscriptionCount: "r",
    preferredLocale: "isArray",
    discoverySplash:
      "(function computeOffsetIfDataChanged_Pnpm_computeOffsetIfDataChangedTs2(params){let[omitZero]=this.__closure;const{direction:direction,handlerOffset:_handlerOffset,size:size,previousLength:previousLength,currentLength:currentLength}=params;let handlerOffset=_handlerOffset;let positionIndex;let round;const isPositive=direction<0;if(isPositive){positionIndex=Math.abs(handlerOffset)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)));}else{positionIndex=(Math.abs(handlerOffset)-size)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)))+1;}const prevOffset=omitZero(previousLength,positionIndex%previousLength);const prevIndex=isPositive?prevOffset:previousLength-prevOffset-1;const changedLength=round*(currentLength-previousLength);const changedOffset=changedLength*size;if(prevIndex>currentLength-1&&currentLength<previousLength){if(isPositive)handlerOffset=(currentLength-1)*size*direction;else handlerOffset=(currentLength-1)*size*-1;}else{handlerOffset+=changedOffset*direction;}return handlerOffset;})",
    emojis:
      "(function computeOffsetIfSizeChanged_Pnpm_computeOffsetIfSizeChangedTs1(params){const{handlerOffset:handlerOffset,prevSize:prevSize,size:size}=params;return handlerOffset/prevSize*size;})",
  };
  ({
    approximate_presence_count: obj.presenceCount,
    approximate_member_count: obj.memberCount,
    discovery_splash: obj.discoverySplash,
  } = id);
  obj.emojis = [];
  return obj;
}
export function getLanguageCodeFallback() {
  let tmp = arg0;
  if (arg0 === undefined) {
    items = [LocaleStore];
    tmp = items;
  }
  [tmp3] = tmp;
  const arr2 = closure_1_10();
  const locale = tmp3.locale;
  let found = arr2.find((code) => code.code === locale);
  if (found == null) {
    found = arr2[0];
  }
  return found.code;
}
export function navigateToGuild() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function makeAnalyticsID() {
  return v1.v4().replace(/-/g, "");
}
