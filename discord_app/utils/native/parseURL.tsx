// === Module 5872: parseURL ===

// Module 5872 (parseURL)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import FingerprintUtils from "FingerprintUtils" /* 1265 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import URLUtilsDefault from "URLUtils" /* 1378 */;
import UrlDefault from "Url" /* 1381 */;
import _modDef1487 from "module_1487" /* 1487 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import _modDef2067 from "module_2067" /* 2067 */;
import LinkUtils from "LinkUtils" /* 5780 */;
import findCodedLinks from "findCodedLinks" /* 5875 */;
import CodedLink from "CodedLink" /* 5879 */;
import GiftCodeUtils from "GiftCodeUtils" /* 6579 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 7668 */;
import SecureFramesDeeplinkExperiment from "SecureFramesDeeplinkExperiment" /* 9361 */;
import Authorize from "Authorize" /* 9838 */;
import conjureProjectLink from "conjureProjectLink" /* 11723 */;
import useVirtualCurrencyMobileEnabled from "useVirtualCurrencyMobileEnabled" /* 15020 */;
import QRLoginUtils from "QRLoginUtils" /* 16008 */;
import urlPartToSettingsEnumDefault from "urlPartToSettingsEnum" /* 16009 */;
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
const CONVERSATION_QUERY_PARAM = fn(5781).CONVERSATION_QUERY_PARAM;
const UPDATE_CONFIG = fn(5873).UPDATE_CONFIG;
const PaymentConstants = fn(5874);
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
  const sanitizeUrlResult = _modDef2067.sanitizeUrl(ctaLink);
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
    const tmp145Result = parseQuery(str);
    ({ fingerprint, attemptId, installationId, referrer_id, sort, filter } = tmp145Result);
    ({ username, didRegister, custom_id, link_id, channel_id } = tmp145Result);
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
                                        const tmp11 = _slicedToArray(findCodedLinkResult.code.split("-"), 2)[1];
                                        if (tmp5Result.isVirtualCurrencyEnabled().enabled) {
                                          if (tmp10 === constants2.ORBS) {
                                            let FEATURED_PAGE = constants3.ORBS;
                                          }
                                          const obj13 = { fingerprint, attemptId, installationId, payload: null };
                                          const obj14 = { type: metroImportDefault.SHOP, screen: FEATURED_PAGE, skuId: null };
                                          let tmp16;
                                          if ("" !== tmp11) {
                                            tmp16 = tmp11;
                                          }
                                          obj14.skuId = tmp16;
                                          obj13.payload = obj14;
                                          return obj13;
                                        }
                                        FEATURED_PAGE = constants3.FEATURED_PAGE;
                                        const tmp9 = _slicedToArray(findCodedLinkResult.code.split("-"), 2);
                                      } else if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                        if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE !== type) {
                                          if (CodedLink.CodedLinkType.CONJURE_PROJECT === type) {
                                            const obj15 = { fingerprint, attemptId, installationId, payload: null };
                                            const obj16 = { type: metroImportDefault.CONJURE_PROJECT_LINK, applicationId: findCodedLinkResult.code, ticket: conjureProjectLink.conjureProjectLinkTicket(findCodedLinkResult.url) };
                                            obj15.payload = obj16;
                                            return obj15;
                                          } else if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                            if (CodedLink.CodedLinkType.USER_WISHLIST !== type) {
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
        }
        const obj17 = { fingerprint, attemptId, installationId, payload: null };
        const obj18 = { type: metroImportDefault.BUILD_OVERRIDE, overrideUrl: findCodedLinkResult.code };
        obj17.payload = obj18;
        return obj17;
      }
    }
    const findGiftCodesResult = GiftCodeUtils.findGiftCodes(sanitizeUrlResult);
    if (findGiftCodesResult.length > 0) {
      const obj19 = { fingerprint, attemptId, installationId, payload: null };
      const obj20 = { type: metroImportDefault.GIFT_CODE, giftCode: findGiftCodesResult[0] };
      obj19.payload = obj20;
      return obj19;
    } else {
      const result = QRLoginUtils.findRemoteAuthFingerprint(host, pathname);
      if (null != result) {
        if (result.length > 0) {
          const obj21 = { fingerprint, attemptId, installationId, payload: null };
          const obj22 = { type: metroImportDefault.REMOTE_AUTH, remoteAuthFingerprint: result };
          obj21.payload = obj22;
          return obj21;
        }
      }
      const tmp5Result12 = QRLoginUtils;
      if (!tmpResult8.isDiscordHostname(host)) {
        if (!tmpResult9.isDiscordProtocol(parsed.protocol)) {
          URLUtilsDefault;
        }
        if ("promos.discord.gg" === hostname) {
          const obj23 = { fingerprint, attemptId, installationId, payload: null };
          const obj24 = { type: metroImportDefault.PROMOTIONS, url: sanitizeUrlResult };
          obj23.payload = obj24;
          let obj28 = obj23;
        } else {
          let host1;
          if (UPDATE_CONFIG != null) {
            host1 = UPDATE_CONFIG.url.host;
          }
          if (host === host1) {
            const obj26 = { fingerprint, attemptId, installationId, payload: null };
            const obj27 = { type: metroImportDefault.MOBILE_NATIVE_UPDATE, url: sanitizeUrlResult };
            obj26.payload = obj27;
            obj28 = obj26;
          } else {
            obj28 = { fingerprint, attemptId, installationId, payload: null };
            const obj29 = { type: metroImportDefault.NONE };
            obj28.payload = obj29;
          }
        }
        return obj28;
      }
      if (null != pathname) {
        const result1 = findCodedLinks.tryParseSocialLayerStorefrontPath(pathname, { allowUnpagedChannelPath: true });
        if (null != result1) {
          const obj30 = { fingerprint, attemptId, installationId, payload: null };
          const obj31 = { type: metroImportDefault.SOCIAL_LAYER_STOREFRONT, guildId: null, skuId: null };
          ({ guildId: obj103.guildId, skuId: obj103.skuId } = result1);
          obj30.payload = obj31;
          return obj30;
        } else {
          const tryParseDiceRollLinkResult = LinkUtils.tryParseDiceRollLink(pathname);
          if (null != tryParseDiceRollLinkResult) {
            const obj32 = { fingerprint, attemptId, installationId, payload: null };
            const obj33 = { type: metroImportDefault.ROLL_DICE, guildId: null, channelId: null, diceCount: null, diceSides: null };
            ({ guildId: obj101.guildId, channelId: obj101.channelId, diceCount: obj101.diceCount, diceSides: obj101.diceSides } = tryParseDiceRollLinkResult);
            obj32.payload = obj33;
            return obj32;
          } else {
            const tryParseChannelPathResult = LinkUtils.tryParseChannelPath(pathname);
            if (null != tryParseChannelPathResult) {
              if (query == null) {
                query = "";
              }
              const tmp145Result8 = parseQuery(query);
              let castResult = null;
              if (null != tmp145Result8[CONVERSATION_QUERY_PARAM]) {
                castResult = null;
                if (tmpResult11.isProbablyAValidSnowflake(tmp132)) {
                  castResult = SnowflakeUtilsDefault.cast(tmp132);
                  const tmpResult12 = SnowflakeUtilsDefault;
                }
                tmpResult11 = SnowflakeUtilsDefault;
              }
              const obj34 = { fingerprint, attemptId, installationId, payload: null };
              if (null != tryParseChannelPathResult.messageId) {
                let CHANNEL = metroImportDefault.MESSAGE;
              } else {
                CHANNEL = metroImportDefault.CHANNEL;
              }
              const obj35 = { type: CHANNEL, guildId: null, channelId: null, messageId: null, summaryId: null, conversationId: null };
              ({ guildId: obj99.guildId, channelId: obj99.channelId, messageId: obj99.messageId } = tryParseChannelPathResult);
              obj35.summaryId = tmp145Result8.summaryId;
              obj35.conversationId = castResult;
              obj34.payload = obj35;
              return obj34;
            } else {
              const match = pathname.match(re25);
              if (null != match) {
                if (match.length > 1) {
                  const obj36 = { fingerprint, attemptId, installationId, payload: null };
                  const obj37 = { type: metroImportDefault.QUESTS, questId: match[1], referrerId: referrer_id, sort, filter };
                  obj36.payload = obj37;
                  return obj36;
                }
              }
              const match1 = pathname.match(re26);
              if (null != match1) {
                if (match1.length > 1) {
                  const obj39 = { fingerprint, attemptId, installationId, payload: null };
                  const obj40 = { type: metroImportDefault.QUEST_PREVIEW_TOOL, questId: match1[1] };
                  obj39.payload = obj40;
                  return obj39;
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
                  const obj42 = { fingerprint, attemptId, installationId, payload: null };
                  const obj43 = { type: metroImportDefault.QUEST_BAR_PREVIEW, adCreativeId: first };
                  obj42.payload = obj43;
                  return obj42;
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
                  const obj44 = { fingerprint, attemptId, installationId, payload: null };
                  const obj45 = { type: metroImportDefault.QUEST_HOME_PREVIEW, adCreativeIds: flatResult };
                  obj44.payload = obj45;
                  let obj46 = obj44;
                } else {
                  obj46 = { fingerprint, attemptId, installationId, payload: null };
                  const obj47 = { type: metroImportDefault.QUESTS, referrerId: referrer_id, sort, filter };
                  obj46.payload = obj47;
                }
                return obj46;
              } else if (null != pathname.match(re29)) {
                const obj49 = { fingerprint, attemptId, installationId, payload: null };
                const obj50 = { type: metroImportDefault.SUBSCRIPTION_SETTINGS };
                obj49.payload = obj50;
                return obj49;
              } else {
                const match2 = pathname.match(re16);
                if (null != match2) {
                  if (match2.length > 1) {
                    const obj51 = { fingerprint, attemptId, installationId, payload: null };
                    const obj52 = { type: metroImportDefault.USER_PROFILE, userId: match2[1] };
                    obj51.payload = obj52;
                    return obj51;
                  }
                }
                if (null != pathname.match(re17)) {
                  let str6 = query;
                  if (query == null) {
                    str6 = "";
                  }
                  const result2 = Authorize.parseOAuth2AuthorizeProps(str6);
                  if (null != result2) {
                    const obj53 = { fingerprint, attemptId, installationId, payload: null };
                    const element = { type: metroImportDefault.OAUTH2_AUTHORIZE, props: null };
                    const obj54 = {};
                    const merged = Object.assign(result2);
                    obj54.wasDeepLink = flag;
                    element.props = obj54;
                    obj53.payload = element;
                    return obj53;
                  }
                  const tmp5Result16 = Authorize;
                }
                if (null != pathname.match(re18)) {
                  let str26 = query;
                  if (query == null) {
                    str26 = "";
                  }
                  let token = parseQuery(str26).token;
                  const obj55 = { fingerprint, attemptId, installationId, payload: null };
                  const obj56 = { type: metroImportDefault.ONE_TIME_LOGIN, token: null };
                  if (token == null) {
                    token = null;
                  }
                  obj56.token = token;
                  obj55.payload = obj56;
                  return obj55;
                } else {
                  const match3 = pathname.match(re15);
                  if (null != match3) {
                    if (match3.length > 1) {
                      const obj57 = { fingerprint, attemptId, installationId, payload: null };
                      const obj58 = { type: metroImportDefault.BOOST_MARKETING, guildId: match3[1] };
                      obj57.payload = obj58;
                      return obj57;
                    }
                  }
                  const match4 = pathname.match(re14);
                  if (null != match4) {
                    if (match4.length > 1) {
                      let tmp28 = null;
                      switch (match4[1]) {
                        case "composeMessage":
                          const obj59 = { type: metroImportDefault.COMPOSE_MESSAGE };
                          tmp28 = obj59;
                          while (true) {
                            if (null != tmp28) {
                              let obj60 = { fingerprint, attemptId, installationId, payload: tmp28 };
                              return obj60;
                            }
                          }
                        break;
                        case "contactSync":
                          const obj61 = { type: metroImportDefault.CONTACT_SYNC };
                          tmp28 = obj61;
                        break;
                        case "addFriends":
                          const obj62 = { type: metroImportDefault.ADD_FRIENDS };
                          tmp28 = obj62;
                        break;
                        case "friends":
                          let str18 = query;
                          if (query == null) {
                            str18 = "";
                          }
                          const obj63 = { type: metroImportDefault.FRIENDS, userId: parseQuery(str18).user_id };
                          tmp28 = obj63;
                        break;
                        case "editProfile":
                          const obj65 = { type: metroImportDefault.EDIT_PROFILE };
                          tmp28 = obj65;
                        break;
                        case "badges":
                          const obj66 = { type: metroImportDefault.BADGE_DIRECTORY };
                          tmp28 = obj66;
                        break;
                        case "voiceChannel":
                          let str17 = query;
                          if (query == null) {
                            str17 = "";
                          }
                          const obj68 = { type: metroImportDefault.VOICE_CHANNEL, guildId: null, channelId: null, userId: null, via: null, action: null };
                          ({ guild_id: obj41.guildId, channel_id: obj41.channelId, user_id: obj41.userId, via: obj41.via, action: obj41.action } = parseQuery(str17));
                          tmp28 = obj68;
                          const tmp145Result9 = parseQuery(str17);
                        break;
                        case "sessionManagement":
                          const obj69 = { type: metroImportDefault.SESSION_MANAGEMENT };
                          tmp28 = obj69;
                        break;
                        case "messageRequests":
                          const obj70 = { type: metroImportDefault.MESSAGE_REQUESTS };
                          tmp28 = obj70;
                        break;
                        case "home":
                          let str16 = query;
                          if (query == null) {
                            str16 = "";
                          }
                          const obj71 = { type: metroImportDefault.GUILD_HOME, guildId: null, highlightChannelId: null, highlightMessageId: null };
                          ({ guild_id: obj38.guildId, highlight_channel_id: obj38.highlightChannelId, highlight_message_id: obj38.highlightMessageId } = parseQuery(str16));
                          tmp28 = obj71;
                          const tmp145Result10 = parseQuery(str16);
                        break;
                        case "icymi":
                          const obj73 = { type: metroImportDefault.ICYMI };
                          tmp28 = obj73;
                        break;
                        case "connections":
                          let str15 = query;
                          if (query == null) {
                            str15 = "";
                          }
                          const obj74 = { type: metroImportDefault.CONNECTIONS, source: parseQuery(str15).source };
                          tmp28 = obj74;
                        break;
                        case "family-center":
                          const obj75 = { type: metroImportDefault.FAMILY_CENTER, pathname };
                          tmp28 = obj75;
                        break;
                        case "promo-url":
                          let str14 = query;
                          if (query == null) {
                            str14 = "";
                          }
                          const promo_url = parseQuery(str14).promo_url;
                          tmp28 = null;
                          if (undefined !== promo_url) {
                            const obj76 = { type: metroImportDefault.FEATURE_PROMO_URL, promoUrl: promo_url };
                            tmp28 = obj76;
                          }
                        break;
                        case "account-standing":
                          const obj77 = { type: metroImportDefault.ACCOUNT_STANDING, pathname };
                          tmp28 = obj77;
                        break;
                        case "mobile-web-redirect-checkout":
                          let result3 = MobileWebRedirectCheckoutUtils.isMobileWebRedirectCheckoutEnabled();
                          if (result3) {
                            result3 = !MetaQuestUtils.isMetaQuest();
                            const tmp5Result18 = MetaQuestUtils;
                          }
                          let str13 = query;
                          if (query == null) {
                            str13 = "";
                          }
                          const tmp5Result17 = MobileWebRedirectCheckoutUtils;
                          let DEFAULT = parseQuery(str13)[constants5.DEEP_LINK_ACTION];
                          tmp28 = null;
                          if (result3) {
                            const obj78 = { type: metroImportDefault.MOBILE_WEB_REDIRECT_CHECKOUT, deepLinkAction: null, guildId: null };
                            if (DEFAULT == null) {
                              DEFAULT = constants4.DEFAULT;
                            }
                            obj78.deepLinkAction = DEFAULT;
                            obj78.guildId = tmp51;
                            tmp28 = obj78;
                          }
                          const tmp145Result11 = parseQuery(str13);
                        break;
                        case "open-shop":
                          const obj79 = { type: metroImportDefault.SHOP };
                          tmp28 = obj79;
                        break;
                        case "authorized-apps":
                          const obj80 = { type: metroImportDefault.AUTHORIZED_APPS };
                          tmp28 = obj80;
                        break;
                        case "share":
                          tmp28 = null;
                          if (tmp5Result19.isIOS()) {
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
                            const tmp145Result12 = parseQuery(str12);
                          }
                          tmp5Result19 = PlatformUtils;
                        break;
                        case "dave-protocol-verification":
                          let str11 = query;
                          if (query == null) {
                            str11 = "";
                          }
                          ({ userId, fingerprint: fingerprint2 } = parseQuery(str11));
                          tmp28 = null;
                          if (null != userId) {
                            tmp28 = null;
                            if (null != fingerprint2) {
                              tmp28 = null;
                              if (tmp5Result20.getSecureFramesDeeplinkExperiment({ location: "parseUrl" }).enabled) {
                                const obj81 = { type: metroImportDefault.DAVE_PROTOCOL_VERIFICATION, userId, fingerprint: fingerprint2 };
                                tmp28 = obj81;
                              }
                              tmp5Result20 = SecureFramesDeeplinkExperiment;
                            }
                          }
                          const tmp145Result13 = parseQuery(str11);
                        break;
                        case "agekey-return":
                          let str10 = query;
                          if (query == null) {
                            str10 = "";
                          }
                          const obj82 = { type: metroImportDefault.AGE_VERIFICATION_AGEKEY_RETURN, result: null, ageKeySaved: null, verificationId: null };
                          ({ result: obj25.result, ageKeySaved: obj25.ageKeySaved, verificationId: obj25.verificationId } = parseQuery(str10));
                          tmp28 = obj82;
                          const tmp145Result14 = parseQuery(str10);
                        break;
                        case "gift":
                          const obj83 = { type: metroImportDefault.GIFT };
                          tmp28 = obj83;
                        break;
                        case "store":
                          let str9 = query;
                          if (query == null) {
                            str9 = "";
                          }
                          const obj84 = { type: metroImportDefault.NITRO_HOME, section: parseQuery(str9).section };
                          tmp28 = obj84;
                        break;
                        case "connected-games":
                          const obj85 = { type: metroImportDefault.CONNECTED_GAMES };
                          tmp28 = obj85;
                        break;
                        case "boost-settings":
                          const obj86 = { type: metroImportDefault.BOOST_SETTINGS };
                          tmp28 = obj86;
                        break;
                        case "quest-preview-tool":
                          let str8 = query;
                          if (query == null) {
                            str8 = "";
                          }
                          const obj87 = { type: metroImportDefault.QUEST_PREVIEW_TOOL, questId: parseQuery(str8).quest_id };
                          tmp28 = obj87;
                        break;
                        case "subscription-settings":
                          const obj88 = { type: metroImportDefault.SUBSCRIPTION_SETTINGS };
                          tmp28 = obj88;
                        break;
                        case "conjure":
                          let str7 = query;
                          if (query == null) {
                            str7 = "";
                          }
                          const project_id = parseQuery(str7).project_id;
                          tmp28 = null;
                          if (null != project_id) {
                            const obj89 = { type: metroImportDefault.CONJURE, projectId: project_id };
                            tmp28 = obj89;
                          }
                        break;
                      }
                    }
                  }
                  const result4 = LinkUtils.tryParseEventDetailsPath(pathname);
                  if (null != result4) {
                    const obj90 = { fingerprint, attemptId, installationId, payload: null };
                    const obj91 = { type: metroImportDefault.GUILD_EVENT_DETAILS, guildEventId: null, guildId: null, recurrenceId: null };
                    ({ guildEventId: obj72.guildEventId, guildId: obj72.guildId, recurrenceId: obj72.recurrenceId } = result4);
                    obj90.payload = obj91;
                    return obj90;
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
                        const obj92 = { fingerprint: fingerprint3, attemptId, installationId, payload: null };
                        const obj93 = { type: metroImportDefault.MOBILE_WEB_HANDOFF, nonce: key, redirectUrl: uRL, fingerprint: fingerprint3 };
                        obj92.payload = obj93;
                        return obj92;
                      }
                    }
                    const tmp105 = parseQuery(decodeURIComponent(query));
                    const obj94 = { reason: "invalid_query_params", fingerprint: null };
                    const obj67 = AnalyticsUtilsDefault;
                    obj94.fingerprint = FingerprintUtils.maybeExtractId(fingerprint3);
                    const obj95 = { fingerprint: fingerprint3 };
                    obj67.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj94, obj95);
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
                      const obj96 = { fingerprint, attemptId, installationId, payload: null };
                      const obj97 = { type: metroImportDefault.USER_CONNECTIONS_LINK_CALLBACK, provider: match5[1], callbackCode: null, callbackState: null };
                      ({ code: obj64.callbackCode, state: obj64.callbackState } = parseQuery(decodeURIComponent(str23)));
                      obj96.payload = obj97;
                      return obj96;
                    } else {
                      const match6 = pathname.match(re21);
                      if (null != match6) {
                        const tmp94 = _slicedToArray(match6, 2);
                        const first1 = tmp94[0];
                        let str22 = query;
                        if (query == null) {
                          str22 = "";
                        }
                        const obj98 = { fingerprint, attemptId, installationId, payload: null };
                        const obj100 = { type: metroImportDefault.USER_CONNECTIONS_CALLBACK, provider: tmp94[1], searchParams: parseQuery(decodeURIComponent(str22)) };
                        obj98.payload = obj100;
                        return obj98;
                      } else {
                        const match7 = pathname.match(re22);
                        if (null != match7) {
                          const tmp88 = _slicedToArray(match7, 4);
                          const obj102 = { fingerprint, attemptId, installationId, payload: null };
                          const obj104 = { type: metroImportDefault.GUILD_SETTINGS, guildId: tmp88[1], settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp88[2]), settingsSubsection: urlPartToSettingsEnumDefault(timestampProducer, tmp88[3]) };
                          obj102.payload = obj104;
                          return obj102;
                        } else {
                          const match8 = pathname.match(re23);
                          if (null != match8) {
                            const tmp81 = _slicedToArray(match8, 3);
                            let str21 = query;
                            if (query == null) {
                              str21 = "";
                            }
                            const obj105 = { fingerprint, attemptId, installationId, payload: null };
                            const obj106 = { type: metroImportDefault.GUILD_SETTINGS_PICKER, settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp81[1]), settingsSubsection: urlPartToSettingsEnumDefault(timestampProducer, tmp81[2]), feature: parseQuery(str21).feature };
                            obj105.payload = obj106;
                            return obj105;
                          } else if (null != pathname.match(re24)) {
                            let str20 = query;
                            if (query == null) {
                              str20 = "";
                            }
                            const obj107 = { fingerprint, attemptId, installationId, payload: null };
                            const obj108 = { type: metroImportDefault.ACTIVATE_DEVICE, userCode: parseQuery(decodeURIComponent(str20)).user_code };
                            obj107.payload = obj108;
                            return obj107;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const tmp5Result15 = LinkUtils;
          }
          const tmp5Result14 = LinkUtils;
        }
        const tmp5Result13 = findCodedLinks;
      }
      tmpResult8 = URLUtilsDefault;
    }
  }
};