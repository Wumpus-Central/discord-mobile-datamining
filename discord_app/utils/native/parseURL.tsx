// discord_app/utils/native/parseURL.tsx
import expandEventPropertiesDefault from "../AnalyticsUtils.tsx";
import isDiscordProxiedAssetUrlDefault from "../URLUtils.tsx";
import UrlDefault from "../../../_runtime/01367_Url.js";
import parseDefault from "../../../_runtime/01471_parse.js";
import tDefault from "../../../_runtime/04257_t.js";
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
    return Object.fromEntries(
      entries.map((arg0) => {
        [tmp, tmp2] = arg0;
        const items = [tmp];
        let first = tmp2;
        if (Array.isArray(tmp2)) {
          first = tmp2[0];
        }
        items[1] = first;
        return items;
      }),
    );
  } catch (err) {
    return {};
  }
}
({ AnalyticEvents: c4, GuildSettingsSections: c5, GuildSettingsSubsections: closure_6, LinkingTypes: error } = ME);
({ CollectibleShopTab: closure_8, CollectiblesMobileShopScreen: c9 } = items);
({ MobileWebRedirectCheckoutDeepLinkActions: unpackModuleId, MobileWebRedirectCheckoutDeepLinkQueryKeys: closure_12 } =
  CustomCheckoutFlow);
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
const re28 = /^\/quest-bar-preview/;
const re29 = /subscriptions\/(\d+)/;
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
    let tmp90Result = tmp90(str);
    ({ fingerprint, attemptId, installationId, referrer_id, sort, filter } = tmp90Result);
    ({ username, didRegister, custom_id, link_id } = tmp90Result);
    obj1 = getPathsFromURL;
    const findCodedLinkResult = obj1.findCodedLink(sanitizeUrlResult);
    if (null != findCodedLinkResult) {
      const type = findCodedLinkResult.type;
      if (tmp5(4548).CodedLinkType.INVITE === type) {
        obj1 = { fingerprint: null, attemptId: null, installationId: null, didRegister: null, payload: null };
        obj1[0] = fingerprint;
        obj1[1] = attemptId;
        obj1[2] = installationId;
        obj1[3] = "true" === didRegister;
        const obj2 = { type: null, inviteCode: null, username: null, deeplinkAttemptId: null };
        obj2[0] = closure_7.INVITE;
        obj2[1] = findCodedLinkResult.code;
        obj2[2] = username;
        obj2[3] = attemptId;
        obj1[4] = obj2;
        return obj1;
      } else if (tmp5(4548).CodedLinkType.TEMPLATE === type) {
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
        if (tmp5(4548).CodedLinkType.BUILD_OVERRIDE !== type) {
          if (tmp5(4548).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
            if (tmp5(4548).CodedLinkType.EXPERIMENT !== type) {
              if (tmp5(4548).CodedLinkType.EVENT !== type) {
                if (tmp5(4548).CodedLinkType.CHANNEL_LINK !== type) {
                  if (tmp5(4548).CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
                    if (tmp5(4548).CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      const obj5 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                      obj5[0] = fingerprint;
                      obj5[1] = attemptId;
                      obj5[2] = installationId;
                      const obj6 = {
                        type: null,
                        applicationId: null,
                        customId: null,
                        referrerId: null,
                        linkId: null,
                        isDeepLink: null,
                      };
                      obj6[0] = closure_7.ACTIVITY;
                      obj6[1] = findCodedLinkResult.code;
                      obj6[2] = custom_id;
                      obj6[3] = referrer_id;
                      obj6[4] = link_id;
                      obj6[5] = flag;
                      obj5[3] = obj6;
                      return obj5;
                    } else if (tmp5(4548).CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                      if (tmp5(4548).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (tmp5(4548).CodedLinkType.SERVER_SHOP !== type) {
                          if (tmp5(4548).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (tmp5(4548).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (tmp5(4548).CodedLinkType.QUESTS_EMBED !== type) {
                                if (tmp5(4548).CodedLinkType.GAME_PROFILE === type) {
                                  const obj7 = {
                                    fingerprint: null,
                                    attemptId: null,
                                    installationId: null,
                                    payload: null,
                                  };
                                  obj7[0] = fingerprint;
                                  obj7[1] = attemptId;
                                  obj7[2] = installationId;
                                  const obj8 = { type: null, gameId: null };
                                  obj8[0] = closure_7.GAME_PROFILE;
                                  obj8[1] = findCodedLinkResult.code;
                                  obj7[3] = obj8;
                                  return obj7;
                                } else if (tmp5(4548).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (tmp5(4548).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (tmp5(4548).CodedLinkType.APP_OAUTH2_LINK !== type) {
                                      if (tmp5(4548).CodedLinkType.COLLECTIBLES_SHOP === type) {
                                        let tmp5Result = tmp5(12945);
                                        const tmp10 = callback(findCodedLinkResult.code.split("-"), 2)[1];
                                        if (tmp5Result.isVirtualCurrencyEnabled().enabled) {
                                          if (tmp9 === constants2.ORBS) {
                                            let FEATURED_PAGE = constants3.ORBS;
                                          }
                                          const obj9 = {
                                            fingerprint: null,
                                            attemptId: null,
                                            installationId: null,
                                            payload: null,
                                          };
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
                                      } else if (tmp5(4548).CodedLinkType.GAME_SERVER_SHARE !== type) {
                                        if (tmp5(4548).CodedLinkType.USER_PROFILE !== type) {
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
      tmp5Result = tmp5(13848);
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
        const tryParseDiceRollLinkResult = tmp5(4714).tryParseDiceRollLink(pathname);
        if (null != tryParseDiceRollLinkResult) {
          const obj23 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
          obj23[0] = fingerprint;
          obj23[1] = attemptId;
          obj23[2] = installationId;
          const obj24 = { type: null, guildId: null, channelId: null, diceCount: null, diceSides: null };
          obj24[0] = closure_7.ROLL_DICE;
          ({
            guildId: obj66[1],
            channelId: obj66[2],
            diceCount: obj66[3],
            diceSides: obj66[4],
          } = tryParseDiceRollLinkResult);
          obj23[3] = obj24;
          return obj23;
        } else {
          const tryParseChannelPathResult = tmp5(4714).tryParseChannelPath(pathname);
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
            ({ guildId: obj64[1], channelId: obj64[2], messageId: obj64[3] } = tryParseChannelPathResult);
            obj26[4] = tmp90(query).summaryId;
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
            if (null != pathname.match(closure_28)) {
              let str5 = query;
              if (query == null) {
                str5 = "";
              }
              let ad_creative_ids = parseDefault.parse(str5).ad_creative_ids;
              if (ad_creative_ids == null) {
                ad_creative_ids = [];
              }
              const items = [ad_creative_ids];
              const first = callback(items.flat(), 1)[0];
              if (null != first) {
                const obj31 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                obj31[0] = fingerprint;
                obj31[1] = attemptId;
                obj31[2] = installationId;
                const obj32 = { type: null, adCreativeId: null };
                obj32[0] = closure_7.QUEST_BAR_PREVIEW;
                obj32[1] = first;
                obj31[3] = obj32;
                return obj31;
              }
              const uRLResult4 = parseDefault;
            }
            if (null != pathname.match(closure_27)) {
              let str14 = query;
              if (query == null) {
                str14 = "";
              }
              let ad_creative_ids1 = parseDefault.parse(str14).ad_creative_ids;
              if (ad_creative_ids1 == null) {
                ad_creative_ids1 = [];
              }
              const items1 = [ad_creative_ids1];
              const flatResult = items1.flat();
              if (flatResult.length > 0) {
                const obj33 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                obj33[0] = fingerprint;
                obj33[1] = attemptId;
                obj33[2] = installationId;
                const obj34 = { type: null, adCreativeIds: null };
                obj34[0] = closure_7.QUEST_HOME_PREVIEW;
                obj34[1] = flatResult;
                obj33[3] = obj34;
                let obj35 = obj33;
              } else {
                obj35 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                obj35[0] = fingerprint;
                obj35[1] = attemptId;
                obj35[2] = installationId;
                const obj36 = { type: null, referrerId: null, sort: null, filter: null };
                obj36[0] = closure_7.QUESTS;
                obj36[1] = referrer_id;
                obj36[2] = sort;
                obj36[3] = filter;
                obj35[3] = obj36;
              }
              return obj35;
            } else if (null != pathname.match(closure_29)) {
              const obj37 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
              obj37[0] = fingerprint;
              obj37[1] = attemptId;
              obj37[2] = installationId;
              const obj38 = { type: null };
              obj38[0] = closure_7.SUBSCRIPTION_SETTINGS;
              obj37[3] = obj38;
              return obj37;
            } else {
              const match3 = pathname.match(closure_15);
              if (null != match3) {
                if (match3.length > 1) {
                  const obj39 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                  obj39[0] = fingerprint;
                  obj39[1] = attemptId;
                  obj39[2] = installationId;
                  const obj40 = { type: null, userId: null };
                  obj40[0] = closure_7.USER_PROFILE;
                  obj40[1] = match3[1];
                  obj39[3] = obj40;
                  return obj39;
                }
              }
              if (null != pathname.match(closure_16)) {
                let str6 = query;
                if (query == null) {
                  str6 = "";
                }
                const result1 = tmp5(9237).parseOAuth2AuthorizeProps(str6);
                if (null != result1) {
                  const obj41 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                  obj41[0] = fingerprint;
                  obj41[1] = attemptId;
                  obj41[2] = installationId;
                  const obj42 = { type: null, props: null };
                  obj42[0] = closure_7.OAUTH2_AUTHORIZE;
                  const obj43 = {};
                  const merged = Object.assign(result1);
                  obj43.wasDeepLink = flag;
                  obj42[1] = obj43;
                  obj41[3] = obj42;
                  return obj41;
                }
                const tmp5Result3 = tmp5(9237);
              }
              if (null != pathname.match(closure_17)) {
                let str13 = query;
                if (query == null) {
                  str13 = "";
                }
                let token = tmp90(str13).token;
                const obj44 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                obj44[0] = fingerprint;
                obj44[1] = attemptId;
                obj44[2] = installationId;
                const obj45 = { type: null, token: null };
                obj45[0] = closure_7.ONE_TIME_LOGIN;
                if (token == null) {
                  token = null;
                }
                obj45[1] = token;
                obj44[3] = obj45;
                return obj44;
              } else {
                const match4 = pathname.match(closure_14);
                if (null != match4) {
                  if (match4.length > 1) {
                    const obj46 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                    obj46[0] = fingerprint;
                    obj46[1] = attemptId;
                    obj46[2] = installationId;
                    const obj47 = { type: null, guildId: null };
                    obj47[0] = closure_7.BOOST_MARKETING;
                    obj47[1] = match4[1];
                    obj46[3] = obj47;
                    return obj46;
                  }
                }
                const match5 = pathname.match(closure_13);
                const result2 = tmp5(4714).tryParseEventDetailsPath(pathname);
                if (null != result2) {
                  const obj49 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                  obj49[0] = fingerprint;
                  obj49[1] = attemptId;
                  obj49[2] = installationId;
                  const obj50 = { type: null, guildEventId: null, guildId: null, recurrenceId: null };
                  obj50[0] = closure_7.GUILD_EVENT_DETAILS;
                  ({ guildEventId: obj40[1], guildId: obj40[2], recurrenceId: obj40[3] } = result2);
                  obj49[3] = obj50;
                  return obj49;
                } else if (null != pathname.match(closure_19)) {
                  const _decodeURIComponent = decodeURIComponent;
                  tmp90Result = tmp90(decodeURIComponent(query));
                  ({ key, redirect, fingerprint: fingerprint2 } = tmp90Result);
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
                      const obj51 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                      obj51[0] = fingerprint2;
                      obj51[1] = attemptId;
                      obj51[2] = installationId;
                      const obj52 = { type: null, nonce: null, redirectUrl: null, fingerprint: null };
                      obj52[0] = closure_7.MOBILE_WEB_HANDOFF;
                      obj52[1] = key;
                      obj52[2] = uRL;
                      obj52[3] = fingerprint2;
                      obj51[3] = obj52;
                      return obj51;
                    }
                  }
                  const obj53 = { reason: "invalid_query_params", fingerprint: null };
                  const uRLResult6 = expandEventPropertiesDefault;
                  obj53[1] = tmp5(1255).maybeExtractId(fingerprint2);
                  const obj54 = { fingerprint: null };
                  obj54[0] = fingerprint2;
                  uRLResult6.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj53, obj54);
                  const _Error = Error;
                  error = new Error("Missing nonce or redirect query params");
                  throw error;
                } else {
                  uRL = closure_20;
                  uRL = pathname.match(closure_20);
                  if (null != uRL) {
                    let str10 = query;
                    if (query == null) {
                      str10 = "";
                    }
                    const obj55 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                    obj55[0] = fingerprint;
                    obj55[1] = attemptId;
                    obj55[2] = installationId;
                    const obj56 = { type: null, provider: null, callbackCode: null, callbackState: null };
                    obj56[0] = closure_7.USER_CONNECTIONS_LINK_CALLBACK;
                    obj56[1] = uRL[1];
                    ({ code: obj32[2], state: obj32[3] } = tmp90(decodeURIComponent(str10)));
                    obj55[3] = obj56;
                    return obj55;
                  } else {
                    uRL = closure_21;
                    uRL = pathname.match(closure_21);
                    if (null != uRL) {
                      const tmp48 = callback(uRL, 2);
                      const first1 = tmp48[0];
                      let str9 = query;
                      if (query == null) {
                        str9 = "";
                      }
                      const obj57 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                      obj57[0] = fingerprint;
                      obj57[1] = attemptId;
                      obj57[2] = installationId;
                      const obj58 = { type: null, provider: null, searchParams: null };
                      obj58[0] = closure_7.USER_CONNECTIONS_CALLBACK;
                      obj58[1] = tmp48[1];
                      obj58[2] = tmp90(decodeURIComponent(str9));
                      obj57[3] = obj58;
                      return obj57;
                    } else {
                      uRL = closure_22;
                      uRL = pathname.match(closure_22);
                      if (null != uRL) {
                        const tmp43 = callback(uRL, 4);
                        const obj59 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                        obj59[0] = fingerprint;
                        obj59[1] = attemptId;
                        obj59[2] = installationId;
                        const obj60 = { type: null, guildId: null, settingsSection: null, settingsSubsection: null };
                        obj60[0] = closure_7.GUILD_SETTINGS;
                        obj60[1] = tmp43[1];
                        obj60[2] = urlPartToSettingsEnumDefault(closure_5, tmp43[2]);
                        obj60[3] = urlPartToSettingsEnumDefault(closure_6, tmp43[3]);
                        obj59[3] = obj60;
                        return obj59;
                      } else {
                        uRL = closure_23;
                        uRL = pathname.match(closure_23);
                        if (null != uRL) {
                          const tmp38 = callback(uRL, 3);
                          let str8 = query;
                          if (query == null) {
                            str8 = "";
                          }
                          const obj61 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                          obj61[0] = fingerprint;
                          obj61[1] = attemptId;
                          obj61[2] = installationId;
                          const obj62 = { type: null, settingsSection: null, settingsSubsection: null, feature: null };
                          obj62[0] = closure_7.GUILD_SETTINGS_PICKER;
                          obj62[1] = urlPartToSettingsEnumDefault(closure_5, tmp38[1]);
                          obj62[2] = urlPartToSettingsEnumDefault(closure_6, tmp38[2]);
                          obj62[3] = tmp90(str8).feature;
                          obj61[3] = obj62;
                          return obj61;
                        } else {
                          uRL = closure_24;
                          if (null != pathname.match(closure_24)) {
                            let str7 = query;
                            if (query == null) {
                              str7 = "";
                            }
                            const obj63 = { fingerprint: null, attemptId: null, installationId: null, payload: null };
                            obj63[0] = fingerprint;
                            obj63[1] = attemptId;
                            obj63[2] = installationId;
                            const obj64 = { type: null, userCode: null };
                            obj64[0] = closure_7.ACTIVATE_DEVICE;
                            obj64[1] = tmp90(decodeURIComponent(str7)).user_code;
                            obj63[3] = obj64;
                            return obj63;
                          }
                        }
                      }
                    }
                  }
                }
                const tmp5Result4 = tmp5(4714);
              }
            }
          }
          const tmp5Result2 = tmp5(4714);
        }
        const tmp5Result1 = tmp5(4714);
      }
      uRLResult1 = isDiscordProxiedAssetUrlDefault;
    }
    const uRLResult = UrlDefault;
  }
}
