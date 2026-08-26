// discord_app/utils/native/parseURL.tsx
import expandEventPropertiesDefault from "../AnalyticsUtils.tsx";
import parseDefault from "../../../_runtime/01484_parse.js";
import isDiscordProxiedAssetUrlDefault from "../URLUtils.tsx";
import UrlDefault from "../../../_runtime/01489_Url.js";
import tDefault from "../../../_runtime/04160_t.js";
import getPathsFromURL from "../../modules/coded_links/findCodedLinks.tsx";
import _resolveGiftCode from "../GiftCodeUtils.tsx";
import urlPartToSettingsEnumDefault from "../../modules/guild_settings/urlPartToSettingsEnum.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import ME from "../../Constants.tsx";
import items from "../../modules/collectibles/CollectiblesShopConstants.tsx";
import { UPDATE_CONFIG } from "../../modules/mobile_native_updater/MobileNativeUpdateConstants.tsx";
import CustomCheckoutFlow from "../../modules/payments/PaymentConstants.tsx";

require = arg1;
function parseQuery(arg0) {
  try {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(parseDefault.parse(arg0));
    return Object.fromEntries(entries.map((arg0) => {
      [tmp, tmp2] = arg0;
      const items = [tmp, ];
      let first = tmp2;
      if (Array.isArray(tmp2)) {
        first = tmp2[0];
      }
      items[1] = first;
      return items;
    }));
  } catch (err) {
    return {};
  }
}
({ AnalyticEvents: c4, GuildSettingsSections: c5, GuildSettingsSubsections: closure_6, LinkingTypes: error } = ME);
({ CollectibleShopTab: closure_8, CollectiblesMobileShopScreen: c9 } = items);
({ MobileWebRedirectCheckoutDeepLinkActions: unpackModuleId, MobileWebRedirectCheckoutDeepLinkQueryKeys: closure_12 } = CustomCheckoutFlow);
const re13 = /feature\/([\w-]+)/;
const re14 = /feature\/boost\/([0-9]+)/;
const re15 = /users\/(\d+)/;
const re16 = /(?:connect|oauth2)\/authorize/;
const re17 = /login\/one-time/;
const re18 = /promos\.discord\.gg/;
const re19 = /mweb-handoff/;
const re20 = /connections\/(xbox|playstation|playstation-stg|crunchyroll)\/link/;
const re21 = /connections\/([a-z-]+)/;
const re22 = /guilds\/(\d+)\/settings(?:\/([a-z-]+)(?:\/([a-z-]+))?)?/;
const re23 = /guilds\/settings(?:\/([a-z-]+)(?:\/([a-z-]+))?)?/;
const re24 = /activate/;
const re25 = /^\/quests\/(\d+)/;
const re26 = /^\/quest-preview\/(\d+)/;
const re27 = /^\/quest-home/;
const re28 = /subscriptions\/(\d+)/;
let result = require("set").fileFinishedImporting("utils/native/parseURL.tsx");

export default function parseURL(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let uRL = importDefault;
  let obj = tDefault;
  const sanitizeUrlResult = obj.sanitizeUrl(arg0);
  if (null == sanitizeUrlResult) {
    obj = { payload: null };
    obj = { type: null };
    obj[0] = closure_7.NONE;
    obj[0] = obj;
    return obj;
  } else {
    const parsed = UrlDefault.parse(sanitizeUrlResult);
    ({ host, pathname, query } = parsed);
    let str = query;
    ({ protocol, hostname } = parsed);
    if (query == null) {
      str = "";
    }
    let tmp87Result = tmp87(str);
    ({ fingerprint, attemptId, installationId, referrer_id, sort, filter } = tmp87Result);
    ({ username, custom_id, link_id } = tmp87Result);
    obj1 = getPathsFromURL;
    const findCodedLinkResult = obj1.findCodedLink(sanitizeUrlResult);
    if (null != findCodedLinkResult) {
      const type = findCodedLinkResult.type;
      if (tmp5(4432).CodedLinkType.INVITE === type) {
        obj1 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
        obj1[0] = fingerprint;
        obj1[1] = attemptId;
        obj1[2] = installationId;
        const obj2 = { type: null, inviteCode: null, username: null, deeplinkAttemptId: null };
        obj2[0] = closure_7.INVITE;
        obj2[1] = findCodedLinkResult.code;
        obj2[2] = username;
        obj2[3] = attemptId;
        obj1[3] = obj2;
        return obj1;
      } else if (tmp5(4432).CodedLinkType.TEMPLATE === type) {
        const obj3 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
        obj3[0] = fingerprint;
        obj3[1] = attemptId;
        obj3[2] = installationId;
        const obj4 = { type: null, guildTemplateCode: null };
        obj4[0] = closure_7.GUILD_TEMPLATE;
        obj4[1] = findCodedLinkResult.code;
        obj3[3] = obj4;
        return obj3;
      } else {
        if (tmp5(4432).CodedLinkType.BUILD_OVERRIDE !== type) {
          if (tmp5(4432).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
            if (tmp5(4432).CodedLinkType.EXPERIMENT !== type) {
              if (tmp5(4432).CodedLinkType.EVENT !== type) {
                if (tmp5(4432).CodedLinkType.CHANNEL_LINK !== type) {
                  if (tmp5(4432).CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
                    if (tmp5(4432).CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      const obj5 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                      obj5[0] = fingerprint;
                      obj5[1] = attemptId;
                      obj5[2] = installationId;
                      const obj6 = { type: null, applicationId: null, customId: null, referrerId: null, linkId: null, isDeepLink: null };
                      obj6[0] = closure_7.ACTIVITY;
                      obj6[1] = findCodedLinkResult.code;
                      obj6[2] = custom_id;
                      obj6[3] = referrer_id;
                      obj6[4] = link_id;
                      obj6[5] = flag;
                      obj5[3] = obj6;
                      return obj5;
                    } else if (tmp5(4432).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                      if (tmp5(4432).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (tmp5(4432).CodedLinkType.SERVER_SHOP !== type) {
                          if (tmp5(4432).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (tmp5(4432).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (tmp5(4432).CodedLinkType.QUESTS_EMBED !== type) {
                                if (tmp5(4432).CodedLinkType.GAME_PROFILE === type) {
                                  const obj7 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                                  obj7[0] = fingerprint;
                                  obj7[1] = attemptId;
                                  obj7[2] = installationId;
                                  const obj8 = { type: null, gameId: null };
                                  obj8[0] = closure_7.GAME_PROFILE;
                                  obj8[1] = findCodedLinkResult.code;
                                  obj7[3] = obj8;
                                  return obj7;
                                } else if (tmp5(4432).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (tmp5(4432).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (tmp5(4432).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                      if (tmp5(4432).CodedLinkType.COLLECTIBLES_SHOP === type) {
                                        let tmp5Result = tmp5(12499);
                                        const tmp10 = callback(findCodedLinkResult.code.split("-"), 2)[1];
                                        if (tmp5Result.isVirtualCurrencyEnabled().enabled) {
                                          if (tmp9 === constants2.ORBS) {
                                            let FEATURED_PAGE = constants3.ORBS;
                                          }
                                          const obj9 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                                          obj9[0] = fingerprint;
                                          obj9[1] = attemptId;
                                          obj9[2] = installationId;
                                          const obj10 = { type: null, screen: null, skuId: null };
                                          obj10[0] = closure_7.SHOP;
                                          obj10[1] = FEATURED_PAGE;
                                          let tmp15;
                                          if ("" !== tmp10) {
                                            tmp15 = tmp10;
                                          }
                                          obj10[2] = tmp15;
                                          obj9[3] = obj10;
                                          return obj9;
                                        }
                                        FEATURED_PAGE = constants3.FEATURED_PAGE;
                                        const str2 = findCodedLinkResult.code;
                                        const tmp8 = callback(findCodedLinkResult.code.split("-"), 2);
                                      } else if (tmp5(4432).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                        if (tmp5(4432).CodedLinkType.USER_PROFILE !== type) {
                                          const _Error2 = Error;
                                          const _HermesInternal = HermesInternal;
                                          throw Error("Unknown coded link type: " + findCodedLinkResult.type);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj11 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
        obj11[0] = fingerprint;
        obj11[1] = attemptId;
        obj11[2] = installationId;
        const obj12 = { type: null, overrideUrl: null };
        obj12[0] = closure_7.BUILD_OVERRIDE;
        obj12[1] = findCodedLinkResult.code;
        obj11[3] = obj12;
        return obj11;
      }
    }
    const findGiftCodesResult = _resolveGiftCode.findGiftCodes(sanitizeUrlResult);
    if (findGiftCodesResult.length > 0) {
      const obj13 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
      obj13[0] = fingerprint;
      obj13[1] = attemptId;
      obj13[2] = installationId;
      const obj14 = { type: null, giftCode: null };
      obj14[0] = closure_7.GIFT_CODE;
      obj14[1] = findGiftCodesResult[0];
      obj13[3] = obj14;
      return obj13;
    } else {
      tmp5Result = tmp5(13474);
      const result = tmp5Result.findRemoteAuthFingerprint(host, pathname);
      if (null != result) {
        if (result.length > 0) {
          const obj15 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
          obj15[0] = fingerprint;
          obj15[1] = attemptId;
          obj15[2] = installationId;
          const obj16 = { type: null, remoteAuthFingerprint: null };
          obj16[0] = closure_7.REMOTE_AUTH;
          obj16[1] = result;
          obj15[3] = obj16;
          return obj15;
        }
      }
      if (!uRLResult1.isDiscordHostname(host)) {
        if (!uRLResult2.isDiscordProtocol(protocol)) {
          const uRLResult3 = isDiscordProxiedAssetUrlDefault;
        }
        let match;
        if (host != null) {
          match = host.match(closure_18);
        }
        if (null != match) {
          const obj17 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
          obj17[0] = fingerprint;
          obj17[1] = attemptId;
          obj17[2] = installationId;
          const obj18 = { type: null, url: null };
          obj18[0] = closure_7.PROMOTIONS;
          obj18[1] = sanitizeUrlResult;
          obj17[3] = obj18;
          let obj21 = obj17;
        } else {
          host = undefined;
          if (UPDATE_CONFIG != null) {
            host = UPDATE_CONFIG.url.host;
          }
          if (host === host) {
            const obj19 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
            obj19[0] = fingerprint;
            obj19[1] = attemptId;
            obj19[2] = installationId;
            const obj20 = { type: null, url: null };
            obj20[0] = closure_7.MOBILE_NATIVE_UPDATE;
            obj20[1] = sanitizeUrlResult;
            obj19[3] = obj20;
            obj21 = obj19;
          } else {
            obj21 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
            obj21[0] = fingerprint;
            obj21[1] = attemptId;
            obj21[2] = installationId;
            const obj22 = { type: null };
            obj22[0] = closure_7.NONE;
            obj21[3] = obj22;
          }
        }
        return obj21;
      }
      if (null != pathname) {
        const tryParseDiceRollLinkResult = tmp5(4639).tryParseDiceRollLink(pathname);
        if (null != tryParseDiceRollLinkResult) {
          const obj23 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
          obj23[0] = fingerprint;
          obj23[1] = attemptId;
          obj23[2] = installationId;
          const obj24 = { type: null, guildId: null, channelId: null, diceCount: null, diceSides: null };
          obj24[0] = closure_7.ROLL_DICE;
          ({ guildId: obj62[1], channelId: obj62[2], diceCount: obj62[3], diceSides: obj62[4] } = tryParseDiceRollLinkResult);
          obj23[3] = obj24;
          return obj23;
        } else {
          const tryParseChannelPathResult = tmp5(4639).tryParseChannelPath(pathname);
          if (null != tryParseChannelPathResult) {
            if (query == null) {
              query = "";
            }
            const obj25 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
            obj25[0] = fingerprint;
            obj25[1] = attemptId;
            obj25[2] = installationId;
            if (null != tryParseChannelPathResult.messageId) {
              let CHANNEL = closure_7.MESSAGE;
            } else {
              CHANNEL = closure_7.CHANNEL;
            }
            const obj26 = { type: null, guildId: null, channelId: null, messageId: null, summaryId: null };
            obj26[0] = CHANNEL;
            ({ guildId: obj60[1], channelId: obj60[2], messageId: obj60[3] } = tryParseChannelPathResult);
            obj26[4] = tmp87(query).summaryId;
            obj25[3] = obj26;
            return obj25;
          } else {
            const match1 = pathname.match(closure_25);
            if (null != match1) {
              if (match1.length > 1) {
                const obj27 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                obj27[0] = fingerprint;
                obj27[1] = attemptId;
                obj27[2] = installationId;
                const obj28 = { type: null, questId: null, referrerId: null, sort: null, filter: null };
                obj28[0] = closure_7.QUESTS;
                obj28[1] = match1[1];
                obj28[2] = referrer_id;
                obj28[3] = sort;
                obj28[4] = filter;
                obj27[3] = obj28;
                return obj27;
              }
            }
            const match2 = pathname.match(closure_26);
            if (null != match2) {
              if (match2.length > 1) {
                const obj29 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                obj29[0] = fingerprint;
                obj29[1] = attemptId;
                obj29[2] = installationId;
                const obj30 = { type: null, questId: null };
                obj30[0] = closure_7.QUEST_PREVIEW_TOOL;
                obj30[1] = match2[1];
                obj29[3] = obj30;
                return obj29;
              }
            }
            if (null != pathname.match(closure_27)) {
              let str13 = query;
              if (query == null) {
                str13 = "";
              }
              let ad_creative_ids = parseDefault.parse(str13).ad_creative_ids;
              if (ad_creative_ids == null) {
                ad_creative_ids = [];
              }
              const items = [ad_creative_ids];
              const flatResult = items.flat();
              if (flatResult.length > 0) {
                const obj31 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                obj31[0] = fingerprint;
                obj31[1] = attemptId;
                obj31[2] = installationId;
                const obj32 = { type: null, adCreativeIds: null };
                obj32[0] = closure_7.QUEST_HOME_PREVIEW;
                obj32[1] = flatResult;
                obj31[3] = obj32;
                let obj33 = obj31;
              } else {
                obj33 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                obj33[0] = fingerprint;
                obj33[1] = attemptId;
                obj33[2] = installationId;
                const obj34 = { type: null, referrerId: null, sort: null, filter: null };
                obj34[0] = closure_7.QUESTS;
                obj34[1] = referrer_id;
                obj34[2] = sort;
                obj34[3] = filter;
                obj33[3] = obj34;
              }
              return obj33;
            } else if (null != pathname.match(closure_28)) {
              const obj35 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
              obj35[0] = fingerprint;
              obj35[1] = attemptId;
              obj35[2] = installationId;
              const obj36 = { type: null };
              obj36[0] = closure_7.SUBSCRIPTION_SETTINGS;
              obj35[3] = obj36;
              return obj35;
            } else {
              const match3 = pathname.match(closure_15);
              if (null != match3) {
                if (match3.length > 1) {
                  const obj37 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                  obj37[0] = fingerprint;
                  obj37[1] = attemptId;
                  obj37[2] = installationId;
                  const obj38 = { type: null, userId: null };
                  obj38[0] = closure_7.USER_PROFILE;
                  obj38[1] = match3[1];
                  obj37[3] = obj38;
                  return obj37;
                }
              }
              if (null != pathname.match(closure_16)) {
                let str5 = query;
                if (query == null) {
                  str5 = "";
                }
                const result1 = tmp5(10651).parseOAuth2AuthorizeProps(str5);
                if (null != result1) {
                  const obj39 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                  obj39[0] = fingerprint;
                  obj39[1] = attemptId;
                  obj39[2] = installationId;
                  const obj40 = { type: null, props: null };
                  obj40[0] = closure_7.OAUTH2_AUTHORIZE;
                  const obj41 = {};
                  const merged = Object.assign(result1);
                  obj41.wasDeepLink = flag;
                  obj40[1] = obj41;
                  obj39[3] = obj40;
                  return obj39;
                }
                const tmp5Result3 = tmp5(10651);
              }
              if (null != pathname.match(closure_17)) {
                let str12 = query;
                if (query == null) {
                  str12 = "";
                }
                let token = tmp87(str12).token;
                const obj42 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                obj42[0] = fingerprint;
                obj42[1] = attemptId;
                obj42[2] = installationId;
                const obj43 = { type: null, token: null };
                obj43[0] = closure_7.ONE_TIME_LOGIN;
                if (token == null) {
                  token = null;
                }
                obj43[1] = token;
                obj42[3] = obj43;
                return obj42;
              } else {
                const match4 = pathname.match(closure_14);
                if (null != match4) {
                  if (match4.length > 1) {
                    const obj44 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                    obj44[0] = fingerprint;
                    obj44[1] = attemptId;
                    obj44[2] = installationId;
                    const obj45 = { type: null, guildId: null };
                    obj45[0] = closure_7.BOOST_MARKETING;
                    obj45[1] = match4[1];
                    obj44[3] = obj45;
                    return obj44;
                  }
                }
                const match5 = pathname.match(closure_13);
                const result2 = tmp5(4639).tryParseEventDetailsPath(pathname);
                if (null != result2) {
                  const obj46 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                  obj46[0] = fingerprint;
                  obj46[1] = attemptId;
                  obj46[2] = installationId;
                  const obj47 = { type: null, guildEventId: null, guildId: null, recurrenceId: null };
                  obj47[0] = closure_7.GUILD_EVENT_DETAILS;
                  ({ guildEventId: obj38[1], guildId: obj38[2], recurrenceId: obj38[3] } = result2);
                  obj46[3] = obj47;
                  return obj46;
                } else if (null != pathname.match(closure_19)) {
                  const _decodeURIComponent = decodeURIComponent;
                  tmp87Result = tmp87(decodeURIComponent(query));
                  ({ key, redirect, fingerprint: fingerprint2 } = tmp87Result);
                  if (null != key) {
                    if (null != redirect) {
                      const _URL = URL;
                      const _location = location;
                      const _window = window;
                      const _HermesInternal2 = HermesInternal;
                      uRL = new.target;
                      uRL = new.target;
                      uRL = redirect;
                      uRL = new URL(redirect, "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
                      if (null != fingerprint2) {
                        const searchParams = uRL.searchParams;
                        searchParams.append("fingerprint", fingerprint2);
                      }
                      const obj48 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                      obj48[0] = fingerprint2;
                      obj48[1] = attemptId;
                      obj48[2] = installationId;
                      const obj49 = { type: null, nonce: null, redirectUrl: null, fingerprint: null };
                      obj49[0] = closure_7.MOBILE_WEB_HANDOFF;
                      obj49[1] = key;
                      obj49[2] = uRL;
                      obj49[3] = fingerprint2;
                      obj48[3] = obj49;
                      return obj48;
                    }
                  }
                  const obj50 = { reason: "invalid_query_params", fingerprint: null };
                  const uRLResult5 = expandEventPropertiesDefault;
                  obj50[1] = tmp5(513).maybeExtractId(fingerprint2);
                  const obj51 = { fingerprint: null };
                  obj51[0] = fingerprint2;
                  uRLResult5.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj50, obj51);
                  const _Error = Error;
                  error = new Error("Missing nonce or redirect query params");
                  throw error;
                } else {
                  const match6 = pathname.match(closure_20);
                  if (null != match6) {
                    let str9 = query;
                    if (query == null) {
                      str9 = "";
                    }
                    const obj52 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                    obj52[0] = fingerprint;
                    obj52[1] = attemptId;
                    obj52[2] = installationId;
                    const obj53 = { type: null, provider: null, callbackCode: null, callbackState: null };
                    obj53[0] = closure_7.USER_CONNECTIONS_LINK_CALLBACK;
                    obj53[1] = match6[1];
                    ({ code: obj30[2], state: obj30[3] } = tmp87(decodeURIComponent(str9)));
                    obj52[3] = obj53;
                    return obj52;
                  } else {
                    const match7 = pathname.match(closure_21);
                    if (null != match7) {
                      const tmp46 = callback(match7, 2);
                      const first = tmp46[0];
                      let str8 = query;
                      if (query == null) {
                        str8 = "";
                      }
                      const obj54 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                      obj54[0] = fingerprint;
                      obj54[1] = attemptId;
                      obj54[2] = installationId;
                      const obj55 = { type: null, provider: null, searchParams: null };
                      obj55[0] = closure_7.USER_CONNECTIONS_CALLBACK;
                      obj55[1] = tmp46[1];
                      obj55[2] = tmp87(decodeURIComponent(str8));
                      obj54[3] = obj55;
                      return obj54;
                    } else {
                      uRL = closure_22;
                      uRL = pathname.match(closure_22);
                      if (null != uRL) {
                        const tmp41 = callback(uRL, 4);
                        const obj56 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                        obj56[0] = fingerprint;
                        obj56[1] = attemptId;
                        obj56[2] = installationId;
                        const obj57 = { type: null, guildId: null, settingsSection: null, settingsSubsection: null };
                        obj57[0] = closure_7.GUILD_SETTINGS;
                        obj57[1] = tmp41[1];
                        obj57[2] = urlPartToSettingsEnumDefault(closure_5, tmp41[2]);
                        obj57[3] = urlPartToSettingsEnumDefault(closure_6, tmp41[3]);
                        obj56[3] = obj57;
                        return obj56;
                      } else {
                        uRL = closure_23;
                        uRL = pathname.match(closure_23);
                        if (null != uRL) {
                          const tmp36 = callback(uRL, 3);
                          let str7 = query;
                          if (query == null) {
                            str7 = "";
                          }
                          const obj58 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                          obj58[0] = fingerprint;
                          obj58[1] = attemptId;
                          obj58[2] = installationId;
                          const obj59 = { type: null, settingsSection: null, settingsSubsection: null, feature: null };
                          obj59[0] = closure_7.GUILD_SETTINGS_PICKER;
                          obj59[1] = urlPartToSettingsEnumDefault(closure_5, tmp36[1]);
                          obj59[2] = urlPartToSettingsEnumDefault(closure_6, tmp36[2]);
                          obj59[3] = tmp87(str7).feature;
                          obj58[3] = obj59;
                          return obj58;
                        } else {
                          uRL = closure_24;
                          if (null != pathname.match(closure_24)) {
                            let str6 = query;
                            if (query == null) {
                              str6 = "";
                            }
                            const obj60 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                            obj60[0] = fingerprint;
                            obj60[1] = attemptId;
                            obj60[2] = installationId;
                            const obj61 = { type: null, userCode: null };
                            obj61[0] = closure_7.ACTIVATE_DEVICE;
                            obj61[1] = tmp87(decodeURIComponent(str6)).user_code;
                            obj60[3] = obj61;
                            return obj60;
                          }
                        }
                      }
                    }
                  }
                }
                const tmp5Result4 = tmp5(4639);
              }
            }
          }
          const tmp5Result2 = tmp5(4639);
        }
        const tmp5Result1 = tmp5(4639);
      }
      uRLResult1 = isDiscordProxiedAssetUrlDefault;
    }
    const uRLResult = UrlDefault;
  }
};