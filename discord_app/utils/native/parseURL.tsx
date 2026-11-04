// === Module 5879: parseURL ===

// Module 5879 (parseURL)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import FingerprintUtils from "FingerprintUtils" /* 1265 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import URLUtilsDefault from "URLUtils" /* 1378 */;
import UrlDefault from "Url" /* 1381 */;
import _modDef1487 from "module_1487" /* 1487 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import _modDef2072 from "module_2072" /* 2072 */;
import LinkUtils from "LinkUtils" /* 5788 */;
import findCodedLinks from "findCodedLinks" /* 5882 */;
import CodedLink from "CodedLink" /* 5886 */;
import GiftCodeUtils from "GiftCodeUtils" /* 6579 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 7729 */;
import SecureFramesDeeplinkExperiment from "SecureFramesDeeplinkExperiment" /* 9420 */;
import Authorize from "Authorize" /* 9892 */;
import useVirtualCurrencyMobileEnabled from "useVirtualCurrencyMobileEnabled" /* 14969 */;
import QRLoginUtils from "QRLoginUtils" /* 15902 */;
import urlPartToSettingsEnumDefault from "urlPartToSettingsEnum" /* 15903 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function parseQuery(arg0) {
  try {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(_modDef1487.parse(arg0));
    return Object.fromEntries(entries.map((item) => {
      [tmp, tmp2] = item;
      items = [tmp, ];
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
const Constants = fn(1072);
({ AnalyticEvents: closure_4, GuildSettingsSections: hasOwnProperty, GuildSettingsSubsections: closure_6, LinkingTypes: metroImportDefault } = Constants);
const CollectiblesShopConstants = fn(1074);
({ CollectibleShopTab: closure_8, CollectiblesMobileShopScreen: closure_9 } = CollectiblesShopConstants);
const CONVERSATION_QUERY_PARAM = fn(5789).CONVERSATION_QUERY_PARAM;
const UPDATE_CONFIG = fn(5880).UPDATE_CONFIG;
const PaymentConstants = fn(5881);
({ MobileWebRedirectCheckoutDeepLinkActions: closure_12, MobileWebRedirectCheckoutDeepLinkQueryKeys: map1 } = PaymentConstants);
const re14 = /feature\/([\w-]+)/;
const re15 = /feature\/boost\/([0-9]+)/;
const re16 = /users\/(\d+)/;
const re17 = /(?:connect|oauth2)\/authorize/;
const re18 = /login\/one-time/;
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
const re29 = /^\/subscriptions\/?$/;
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/parseURL.tsx");

export default function parseURL(ctaLink) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const sanitizeUrlResult = _modDef2072.sanitizeUrl(ctaLink);
  if (null == sanitizeUrlResult) {
    const obj3 = { payload: null };
    const obj4 = { type: metroImportDefault.NONE };
    obj3.payload = obj4;
    return obj3;
  } else {
    const parsed = UrlDefault.parse(sanitizeUrlResult);
    ({ host, hostname, pathname, query } = parsed);
    let str = query;
    if (query == null) {
      str = "";
    }
    const tmp144Result = parseQuery(str);
    ({ fingerprint, attemptId, installationId, referrer_id, sort, filter } = tmp144Result);
    ({ username, didRegister, custom_id, link_id, channel_id } = tmp144Result);
    const tmpResult = UrlDefault;
    const findCodedLinkResult = findCodedLinks.findCodedLink(sanitizeUrlResult);
    if (null != findCodedLinkResult) {
      const type = findCodedLinkResult.type;
      if (CodedLink.CodedLinkType.INVITE === type) {
        const obj5 = { fingerprint, attemptId, installationId, didRegister: "true" === didRegister, payload: null };
        const obj6 = { type: metroImportDefault.INVITE, inviteCode: findCodedLinkResult.code, username, deeplinkAttemptId: attemptId };
        obj5.payload = obj6;
        return obj5;
      } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
        const obj7 = { fingerprint, attemptId, installationId, payload: null };
        const obj8 = { type: metroImportDefault.GUILD_TEMPLATE, guildTemplateCode: findCodedLinkResult.code };
        obj7.payload = obj8;
        return obj7;
      } else {
        if (CodedLink.CodedLinkType.BUILD_OVERRIDE !== type) {
          if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
            if (CodedLink.CodedLinkType.EXPERIMENT !== type) {
              if (CodedLink.CodedLinkType.EVENT !== type) {
                if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                  if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
                    if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      const obj9 = { fingerprint, attemptId, installationId, payload: null };
                      const obj10 = { type: metroImportDefault.ACTIVITY, applicationId: findCodedLinkResult.code, customId: custom_id, referrerId: referrer_id, linkId: link_id, channelId: channel_id, isDeepLink: flag };
                      obj9.payload = obj10;
                      return obj9;
                    } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE !== type) {
                      if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                        if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                          if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (CodedLink.CodedLinkType.QUESTS_EMBED !== type) {
                                if (CodedLink.CodedLinkType.GAME_PROFILE === type) {
                                  const obj11 = { fingerprint, attemptId, installationId, payload: null };
                                  const obj12 = { type: metroImportDefault.GAME_PROFILE, gameId: findCodedLinkResult.code };
                                  obj11.payload = obj12;
                                  return obj11;
                                } else if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK !== type) {
                                      if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP === type) {
                                        const tmp5Result = useVirtualCurrencyMobileEnabled;
                                        const tmp10 = _slicedToArray(findCodedLinkResult.code.split("-"), 2)[1];
                                        if (tmp5Result.isVirtualCurrencyEnabled().enabled) {
                                          if (tmp9 === constants2.ORBS) {
                                            let FEATURED_PAGE = constants3.ORBS;
                                          }
                                          const obj13 = { fingerprint, attemptId, installationId, payload: null };
                                          const obj14 = { type: metroImportDefault.SHOP, screen: FEATURED_PAGE, skuId: null };
                                          let tmp15;
                                          if ("" !== tmp10) {
                                            tmp15 = tmp10;
                                          }
                                          obj14.skuId = tmp15;
                                          obj13.payload = obj14;
                                          return obj13;
                                        }
                                        FEATURED_PAGE = constants3.FEATURED_PAGE;
                                        const tmp8 = _slicedToArray(findCodedLinkResult.code.split("-"), 2);
                                      } else if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                        if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE !== type) {
                                          if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
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
        }
        const obj15 = { fingerprint, attemptId, installationId, payload: null };
        const obj16 = { type: metroImportDefault.BUILD_OVERRIDE, overrideUrl: findCodedLinkResult.code };
        obj15.payload = obj16;
        return obj15;
      }
    }
    const findGiftCodesResult = GiftCodeUtils.findGiftCodes(sanitizeUrlResult);
    if (findGiftCodesResult.length > 0) {
      const obj17 = { fingerprint, attemptId, installationId, payload: null };
      const obj18 = { type: metroImportDefault.GIFT_CODE, giftCode: findGiftCodesResult[0] };
      obj17.payload = obj18;
      return obj17;
    } else {
      const result = QRLoginUtils.findRemoteAuthFingerprint(host, pathname);
      if (null != result) {
        if (result.length > 0) {
          const obj19 = { fingerprint, attemptId, installationId, payload: null };
          const obj20 = { type: metroImportDefault.REMOTE_AUTH, remoteAuthFingerprint: result };
          obj19.payload = obj20;
          return obj19;
        }
      }
      const tmp5Result10 = QRLoginUtils;
      if (!tmpResult8.isDiscordHostname(host)) {
        if (!tmpResult9.isDiscordProtocol(parsed.protocol)) {
          URLUtilsDefault;
        }
        if ("promos.discord.gg" === hostname) {
          const obj21 = { fingerprint, attemptId, installationId, payload: null };
          const obj23 = { type: metroImportDefault.PROMOTIONS, url: sanitizeUrlResult };
          obj21.payload = obj23;
          let obj26 = obj21;
        } else {
          let host1;
          if (UPDATE_CONFIG != null) {
            host1 = UPDATE_CONFIG.url.host;
          }
          if (host === host1) {
            const obj24 = { fingerprint, attemptId, installationId, payload: null };
            const obj25 = { type: metroImportDefault.MOBILE_NATIVE_UPDATE, url: sanitizeUrlResult };
            obj24.payload = obj25;
            obj26 = obj24;
          } else {
            obj26 = { fingerprint, attemptId, installationId, payload: null };
            const obj27 = { type: metroImportDefault.NONE };
            obj26.payload = obj27;
          }
        }
        return obj26;
      }
      if (null != pathname) {
        const result1 = findCodedLinks.tryParseSocialLayerStorefrontPath(pathname, { allowUnpagedChannelPath: true });
        if (null != result1) {
          const obj28 = { fingerprint, attemptId, installationId, payload: null };
          const obj29 = { type: metroImportDefault.SOCIAL_LAYER_STOREFRONT, guildId: null, skuId: null };
          ({ guildId: obj100.guildId, skuId: obj100.skuId } = result1);
          obj28.payload = obj29;
          return obj28;
        } else {
          const tryParseDiceRollLinkResult = LinkUtils.tryParseDiceRollLink(pathname);
          if (null != tryParseDiceRollLinkResult) {
            const obj30 = { fingerprint, attemptId, installationId, payload: null };
            const obj31 = { type: metroImportDefault.ROLL_DICE, guildId: null, channelId: null, diceCount: null, diceSides: null };
            ({ guildId: obj98.guildId, channelId: obj98.channelId, diceCount: obj98.diceCount, diceSides: obj98.diceSides } = tryParseDiceRollLinkResult);
            obj30.payload = obj31;
            return obj30;
          } else {
            const tryParseChannelPathResult = LinkUtils.tryParseChannelPath(pathname);
            if (null != tryParseChannelPathResult) {
              if (query == null) {
                query = "";
              }
              const tmp144Result8 = parseQuery(query);
              let castResult = null;
              if (null != tmp144Result8[CONVERSATION_QUERY_PARAM]) {
                castResult = null;
                if (tmpResult11.isProbablyAValidSnowflake(tmp131)) {
                  castResult = SnowflakeUtilsDefault.cast(tmp131);
                  const tmpResult12 = SnowflakeUtilsDefault;
                }
                tmpResult11 = SnowflakeUtilsDefault;
              }
              const obj32 = { fingerprint, attemptId, installationId, payload: null };
              if (null != tryParseChannelPathResult.messageId) {
                let CHANNEL = metroImportDefault.MESSAGE;
              } else {
                CHANNEL = metroImportDefault.CHANNEL;
              }
              const obj33 = { type: CHANNEL, guildId: null, channelId: null, messageId: null, summaryId: null, conversationId: null };
              ({ guildId: obj96.guildId, channelId: obj96.channelId, messageId: obj96.messageId } = tryParseChannelPathResult);
              obj33.summaryId = tmp144Result8.summaryId;
              obj33.conversationId = castResult;
              obj32.payload = obj33;
              return obj32;
            } else {
              const match = pathname.match(re25);
              if (null != match) {
                if (match.length > 1) {
                  const obj34 = { fingerprint, attemptId, installationId, payload: null };
                  const obj36 = { type: metroImportDefault.QUESTS, questId: match[1], referrerId: referrer_id, sort, filter };
                  obj34.payload = obj36;
                  return obj34;
                }
              }
              const match1 = pathname.match(re26);
              if (null != match1) {
                if (match1.length > 1) {
                  const obj37 = { fingerprint, attemptId, installationId, payload: null };
                  const obj39 = { type: metroImportDefault.QUEST_PREVIEW_TOOL, questId: match1[1] };
                  obj37.payload = obj39;
                  return obj37;
                }
              }
              if (null != pathname.match(re28)) {
                let str5 = query;
                if (query == null) {
                  str5 = "";
                }
                let ad_creative_ids = _modDef1487.parse(str5).ad_creative_ids;
                if (ad_creative_ids == null) {
                  ad_creative_ids = [];
                }
                items = [ad_creative_ids];
                const first = _slicedToArray(items.flat(), 1)[0];
                if (null != first) {
                  const obj40 = { fingerprint, attemptId, installationId, payload: null };
                  const obj41 = { type: metroImportDefault.QUEST_BAR_PREVIEW, adCreativeId: first };
                  obj40.payload = obj41;
                  return obj40;
                }
                const tmpResult13 = _modDef1487;
              }
              if (null != pathname.match(re27)) {
                let str27 = query;
                if (query == null) {
                  str27 = "";
                }
                let ad_creative_ids1 = _modDef1487.parse(str27).ad_creative_ids;
                if (ad_creative_ids1 == null) {
                  ad_creative_ids1 = [];
                }
                const items1 = [ad_creative_ids1];
                const flatResult = items1.flat();
                if (flatResult.length > 0) {
                  const obj42 = { fingerprint, attemptId, installationId, payload: null };
                  const obj43 = { type: metroImportDefault.QUEST_HOME_PREVIEW, adCreativeIds: flatResult };
                  obj42.payload = obj43;
                  let obj44 = obj42;
                } else {
                  obj44 = { fingerprint, attemptId, installationId, payload: null };
                  const obj46 = { type: metroImportDefault.QUESTS, referrerId: referrer_id, sort, filter };
                  obj44.payload = obj46;
                }
                return obj44;
              } else if (null != pathname.match(re29)) {
                const obj47 = { fingerprint, attemptId, installationId, payload: null };
                const obj48 = { type: metroImportDefault.SUBSCRIPTION_SETTINGS };
                obj47.payload = obj48;
                return obj47;
              } else {
                const match2 = pathname.match(re16);
                if (null != match2) {
                  if (match2.length > 1) {
                    const obj49 = { fingerprint, attemptId, installationId, payload: null };
                    const obj50 = { type: metroImportDefault.USER_PROFILE, userId: match2[1] };
                    obj49.payload = obj50;
                    return obj49;
                  }
                }
                if (null != pathname.match(re17)) {
                  let str6 = query;
                  if (query == null) {
                    str6 = "";
                  }
                  const result2 = Authorize.parseOAuth2AuthorizeProps(str6);
                  if (null != result2) {
                    const obj51 = { fingerprint, attemptId, installationId, payload: null };
                    const element = { type: metroImportDefault.OAUTH2_AUTHORIZE, props: null };
                    const obj52 = {};
                    const merged = Object.assign(result2);
                    obj52.wasDeepLink = flag;
                    element.props = obj52;
                    obj51.payload = element;
                    return obj51;
                  }
                  const tmp5Result14 = Authorize;
                }
                if (null != pathname.match(re18)) {
                  let str26 = query;
                  if (query == null) {
                    str26 = "";
                  }
                  let token = parseQuery(str26).token;
                  const obj53 = { fingerprint, attemptId, installationId, payload: null };
                  const obj54 = { type: metroImportDefault.ONE_TIME_LOGIN, token: null };
                  if (token == null) {
                    token = null;
                  }
                  obj54.token = token;
                  obj53.payload = obj54;
                  return obj53;
                } else {
                  const match3 = pathname.match(re15);
                  if (null != match3) {
                    if (match3.length > 1) {
                      const obj55 = { fingerprint, attemptId, installationId, payload: null };
                      const obj56 = { type: metroImportDefault.BOOST_MARKETING, guildId: match3[1] };
                      obj55.payload = obj56;
                      return obj55;
                    }
                  }
                  const match4 = pathname.match(re14);
                  if (null != match4) {
                    if (match4.length > 1) {
                      let tmp27 = null;
                      switch (match4[1]) {
                        case "composeMessage":
                          const obj57 = { type: metroImportDefault.COMPOSE_MESSAGE };
                          tmp27 = obj57;
                          while (true) {
                            if (null != tmp27) {
                              let obj58 = { fingerprint, attemptId, installationId, payload: tmp27 };
                              return obj58;
                            }
                          }
                        break;
                        case "contactSync":
                          const obj59 = { type: metroImportDefault.CONTACT_SYNC };
                          tmp27 = obj59;
                        break;
                        case "addFriends":
                          const obj60 = { type: metroImportDefault.ADD_FRIENDS };
                          tmp27 = obj60;
                        break;
                        case "friends":
                          let str18 = query;
                          if (query == null) {
                            str18 = "";
                          }
                          const obj62 = { type: metroImportDefault.FRIENDS, userId: parseQuery(str18).user_id };
                          tmp27 = obj62;
                        break;
                        case "editProfile":
                          const obj63 = { type: metroImportDefault.EDIT_PROFILE };
                          tmp27 = obj63;
                        break;
                        case "badges":
                          const obj65 = { type: metroImportDefault.BADGE_DIRECTORY };
                          tmp27 = obj65;
                        break;
                        case "voiceChannel":
                          let str17 = query;
                          if (query == null) {
                            str17 = "";
                          }
                          const obj66 = { type: metroImportDefault.VOICE_CHANNEL, guildId: null, channelId: null, userId: null, via: null, action: null };
                          ({ guild_id: obj38.guildId, channel_id: obj38.channelId, user_id: obj38.userId, via: obj38.via, action: obj38.action } = parseQuery(str17));
                          tmp27 = obj66;
                          const tmp144Result9 = parseQuery(str17);
                        break;
                        case "sessionManagement":
                          const obj67 = { type: metroImportDefault.SESSION_MANAGEMENT };
                          tmp27 = obj67;
                        break;
                        case "messageRequests":
                          const obj68 = { type: metroImportDefault.MESSAGE_REQUESTS };
                          tmp27 = obj68;
                        break;
                        case "home":
                          let str16 = query;
                          if (query == null) {
                            str16 = "";
                          }
                          const obj70 = { type: metroImportDefault.GUILD_HOME, guildId: null, highlightChannelId: null, highlightMessageId: null };
                          ({ guild_id: obj35.guildId, highlight_channel_id: obj35.highlightChannelId, highlight_message_id: obj35.highlightMessageId } = parseQuery(str16));
                          tmp27 = obj70;
                          const tmp144Result10 = parseQuery(str16);
                        break;
                        case "icymi":
                          const obj71 = { type: metroImportDefault.ICYMI };
                          tmp27 = obj71;
                        break;
                        case "connections":
                          let str15 = query;
                          if (query == null) {
                            str15 = "";
                          }
                          const obj72 = { type: metroImportDefault.CONNECTIONS, source: parseQuery(str15).source };
                          tmp27 = obj72;
                        break;
                        case "family-center":
                          const obj73 = { type: metroImportDefault.FAMILY_CENTER, pathname };
                          tmp27 = obj73;
                        break;
                        case "promo-url":
                          let str14 = query;
                          if (query == null) {
                            str14 = "";
                          }
                          const promo_url = parseQuery(str14).promo_url;
                          tmp27 = null;
                          if (undefined !== promo_url) {
                            const obj74 = { type: metroImportDefault.FEATURE_PROMO_URL, promoUrl: promo_url };
                            tmp27 = obj74;
                          }
                        break;
                        case "account-standing":
                          const obj75 = { type: metroImportDefault.ACCOUNT_STANDING, pathname };
                          tmp27 = obj75;
                        break;
                        case "mobile-web-redirect-checkout":
                          let result3 = MobileWebRedirectCheckoutUtils.isMobileWebRedirectCheckoutEnabled();
                          if (result3) {
                            result3 = !MetaQuestUtils.isMetaQuest();
                            const tmp5Result16 = MetaQuestUtils;
                          }
                          let str13 = query;
                          if (query == null) {
                            str13 = "";
                          }
                          const tmp5Result15 = MobileWebRedirectCheckoutUtils;
                          let DEFAULT = parseQuery(str13)[constants5.DEEP_LINK_ACTION];
                          tmp27 = null;
                          if (result3) {
                            const obj76 = { type: metroImportDefault.MOBILE_WEB_REDIRECT_CHECKOUT, deepLinkAction: null, guildId: null };
                            if (DEFAULT == null) {
                              DEFAULT = constants4.DEFAULT;
                            }
                            obj76.deepLinkAction = DEFAULT;
                            obj76.guildId = tmp50;
                            tmp27 = obj76;
                          }
                          const tmp144Result11 = parseQuery(str13);
                        break;
                        case "open-shop":
                          const obj77 = { type: metroImportDefault.SHOP };
                          tmp27 = obj77;
                        break;
                        case "authorized-apps":
                          const obj78 = { type: metroImportDefault.AUTHORIZED_APPS };
                          tmp27 = obj78;
                        break;
                        case "share":
                          tmp27 = null;
                          if (tmp5Result17.isIOS()) {
                            let str12 = query;
                            if (query == null) {
                              str12 = "";
                            }
                            function isValidUUID(shareId) {
                              return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(shareId);
                            }
                            ({ text, channelId, shareId, attachmentManifest } = parseQuery(str12));
                            let items2 = [];
                            if (typeof attachmentManifest === "string") {
                              try {
                                const _JSON = JSON;
                                items2 = JSON.parse(attachmentManifest);
                              } catch (err) {
                                items2 = [];
                              }
                            }
                            const _Array = Array;
                            if (Array.isArray(items2)) {
                              let items3 = items2;
                            } else {
                              items3 = [];
                            }
                            const items4 = [];
                            items2 = items3;
                            items3[Symbol.iterator]();
                            const tmp144Result12 = parseQuery(str12);
                          }
                          tmp5Result17 = PlatformUtils;
                        break;
                        case "dave-protocol-verification":
                          let str11 = query;
                          if (query == null) {
                            str11 = "";
                          }
                          ({ userId, fingerprint: fingerprint2 } = parseQuery(str11));
                          tmp27 = null;
                          if (null != userId) {
                            tmp27 = null;
                            if (null != fingerprint2) {
                              tmp27 = null;
                              if (tmp5Result18.getSecureFramesDeeplinkExperiment({ location: "parseUrl" }).enabled) {
                                const obj79 = { type: metroImportDefault.DAVE_PROTOCOL_VERIFICATION, userId, fingerprint: fingerprint2 };
                                tmp27 = obj79;
                              }
                              tmp5Result18 = SecureFramesDeeplinkExperiment;
                            }
                          }
                          const tmp144Result13 = parseQuery(str11);
                        break;
                        case "agekey-return":
                          let str10 = query;
                          if (query == null) {
                            str10 = "";
                          }
                          const obj80 = { type: metroImportDefault.AGE_VERIFICATION_AGEKEY_RETURN, result: null, ageKeySaved: null, verificationId: null };
                          ({ result: obj22.result, ageKeySaved: obj22.ageKeySaved, verificationId: obj22.verificationId } = parseQuery(str10));
                          tmp27 = obj80;
                          const tmp144Result14 = parseQuery(str10);
                        break;
                        case "gift":
                          const obj81 = { type: metroImportDefault.GIFT };
                          tmp27 = obj81;
                        break;
                        case "store":
                          let str9 = query;
                          if (query == null) {
                            str9 = "";
                          }
                          const obj82 = { type: metroImportDefault.NITRO_HOME, section: parseQuery(str9).section };
                          tmp27 = obj82;
                        break;
                        case "connected-games":
                          const obj83 = { type: metroImportDefault.CONNECTED_GAMES };
                          tmp27 = obj83;
                        break;
                        case "boost-settings":
                          const obj84 = { type: metroImportDefault.BOOST_SETTINGS };
                          tmp27 = obj84;
                        break;
                        case "quest-preview-tool":
                          let str8 = query;
                          if (query == null) {
                            str8 = "";
                          }
                          const obj85 = { type: metroImportDefault.QUEST_PREVIEW_TOOL, questId: parseQuery(str8).quest_id };
                          tmp27 = obj85;
                        break;
                        case "subscription-settings":
                          const obj86 = { type: metroImportDefault.SUBSCRIPTION_SETTINGS };
                          tmp27 = obj86;
                        break;
                        case "conjure":
                          let str7 = query;
                          if (query == null) {
                            str7 = "";
                          }
                          const project_id = parseQuery(str7).project_id;
                          tmp27 = null;
                          if (null != project_id) {
                            const obj87 = { type: metroImportDefault.CONJURE, projectId: project_id };
                            tmp27 = obj87;
                          }
                        break;
                      }
                    }
                  }
                  const result4 = LinkUtils.tryParseEventDetailsPath(pathname);
                  if (null != result4) {
                    const obj88 = { fingerprint, attemptId, installationId, payload: null };
                    const obj89 = { type: metroImportDefault.GUILD_EVENT_DETAILS, guildEventId: null, guildId: null, recurrenceId: null };
                    ({ guildEventId: obj69.guildEventId, guildId: obj69.guildId, recurrenceId: obj69.recurrenceId } = result4);
                    obj88.payload = obj89;
                    return obj88;
                  } else if (null != pathname.match(re19)) {
                    const _decodeURIComponent = decodeURIComponent;
                    ({ key, redirect, fingerprint: fingerprint3 } = parseQuery(decodeURIComponent(query)));
                    if (null != key) {
                      if (null != redirect) {
                        const _URL = URL;
                        const _location = location;
                        const _window = window;
                        const _HermesInternal2 = HermesInternal;
                        const uRL = new URL(redirect, "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
                        if (null != fingerprint3) {
                          const searchParams = uRL.searchParams;
                          searchParams.append("fingerprint", fingerprint3);
                        }
                        const obj90 = { fingerprint: fingerprint3, attemptId, installationId, payload: null };
                        const obj91 = { type: metroImportDefault.MOBILE_WEB_HANDOFF, nonce: key, redirectUrl: uRL, fingerprint: fingerprint3 };
                        obj90.payload = obj91;
                        return obj90;
                      }
                    }
                    const tmp104 = parseQuery(decodeURIComponent(query));
                    const obj92 = { reason: "invalid_query_params", fingerprint: null };
                    const obj64 = AnalyticsUtilsDefault;
                    obj92.fingerprint = FingerprintUtils.maybeExtractId(fingerprint3);
                    const obj93 = { fingerprint: fingerprint3 };
                    obj64.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj92, obj93);
                    const _Error = Error;
                    const error = new Error("Missing nonce or redirect query params");
                    throw error;
                  } else {
                    const match5 = pathname.match(re20);
                    if (null != match5) {
                      let str23 = query;
                      if (query == null) {
                        str23 = "";
                      }
                      const obj94 = { fingerprint, attemptId, installationId, payload: null };
                      const obj95 = { type: metroImportDefault.USER_CONNECTIONS_LINK_CALLBACK, provider: match5[1], callbackCode: null, callbackState: null };
                      ({ code: obj61.callbackCode, state: obj61.callbackState } = parseQuery(decodeURIComponent(str23)));
                      obj94.payload = obj95;
                      return obj94;
                    } else {
                      const match6 = pathname.match(re21);
                      if (null != match6) {
                        const tmp93 = _slicedToArray(match6, 2);
                        const first1 = tmp93[0];
                        let str22 = query;
                        if (query == null) {
                          str22 = "";
                        }
                        const obj97 = { fingerprint, attemptId, installationId, payload: null };
                        const obj99 = { type: metroImportDefault.USER_CONNECTIONS_CALLBACK, provider: tmp93[1], searchParams: parseQuery(decodeURIComponent(str22)) };
                        obj97.payload = obj99;
                        return obj97;
                      } else {
                        const match7 = pathname.match(re22);
                        if (null != match7) {
                          const tmp87 = _slicedToArray(match7, 4);
                          const obj101 = { fingerprint, attemptId, installationId, payload: null };
                          const obj102 = { type: metroImportDefault.GUILD_SETTINGS, guildId: tmp87[1], settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp87[2]), settingsSubsection: urlPartToSettingsEnumDefault(timestampProducer, tmp87[3]) };
                          obj101.payload = obj102;
                          return obj101;
                        } else {
                          const match8 = pathname.match(re23);
                          if (null != match8) {
                            const tmp80 = _slicedToArray(match8, 3);
                            let str21 = query;
                            if (query == null) {
                              str21 = "";
                            }
                            const obj103 = { fingerprint, attemptId, installationId, payload: null };
                            const obj104 = { type: metroImportDefault.GUILD_SETTINGS_PICKER, settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp80[1]), settingsSubsection: urlPartToSettingsEnumDefault(timestampProducer, tmp80[2]), feature: parseQuery(str21).feature };
                            obj103.payload = obj104;
                            return obj103;
                          } else if (null != pathname.match(re24)) {
                            let str20 = query;
                            if (query == null) {
                              str20 = "";
                            }
                            const obj105 = { fingerprint, attemptId, installationId, payload: null };
                            const obj106 = { type: metroImportDefault.ACTIVATE_DEVICE, userCode: parseQuery(decodeURIComponent(str20)).user_code };
                            obj105.payload = obj106;
                            return obj105;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const tmp5Result13 = LinkUtils;
          }
          const tmp5Result12 = LinkUtils;
        }
        const tmp5Result11 = findCodedLinks;
      }
      tmpResult8 = URLUtilsDefault;
    }
  }
};