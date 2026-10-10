// === Module 5069: parseURL ===

// Module 5069 (parseURL)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import FingerprintUtils from "FingerprintUtils" /* 1278 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import URLUtilsDefault from "URLUtils" /* 1384 */;
import UrlDefault from "Url" /* 1386 */;
import _modDef1491 from "module_1491" /* 1491 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import _modDef1949 from "module_1949" /* 1949 */;
import findCodedLinks from "findCodedLinks" /* 5072 */;
import CodedLink from "CodedLink" /* 5077 */;
import LinkUtils from "LinkUtils" /* 5422 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5633 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 7122 */;
import SecureFramesDeeplinkExperiment from "SecureFramesDeeplinkExperiment" /* 8838 */;
import Authorize from "Authorize" /* 9225 */;
import useVirtualCurrencyMobileEnabled from "useVirtualCurrencyMobileEnabled" /* 13038 */;
import QRLoginUtils from "QRLoginUtils" /* 14047 */;
import urlPartToSettingsEnumDefault from "urlPartToSettingsEnum" /* 14048 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function parseQuery(arg0) {
  try {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(_modDef1491.parse(arg0));
    return Object.fromEntries(entries.map((item) => {
      [tmp, tmp2] = item;
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
const Constants = fn(1085);
({ AnalyticEvents: closure_4, GuildSettingsSections: hasOwnProperty, GuildSettingsSubsections: metroRequire, LinkingTypes: closure_7 } = Constants);
const CollectiblesShopConstants = fn(1087);
({ CollectibleShopTab: closure_8, CollectiblesMobileShopScreen: closure_9 } = CollectiblesShopConstants);
const UPDATE_CONFIG = fn(5070).UPDATE_CONFIG;
const PaymentConstants = fn(5071);
({ MobileWebRedirectCheckoutDeepLinkActions: closure_11, MobileWebRedirectCheckoutDeepLinkQueryKeys: closure_12 } = PaymentConstants);
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
const re29 = /^\/subscriptions\/?$/;
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/parseURL.tsx");

export default function parseURL(ctaLink) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const sanitizeUrlResult = _modDef1949.sanitizeUrl(ctaLink);
  if (null == sanitizeUrlResult) {
    const obj3 = { payload: null };
    const obj4 = { type: React5.NONE };
    obj3.payload = obj4;
    return obj3;
  } else {
    const parsed = UrlDefault.parse(sanitizeUrlResult);
    ({ host, pathname, query } = parsed);
    let str = query;
    ({ protocol, hostname } = parsed);
    if (query == null) {
      str = "";
    }
    const tmp143Result = parseQuery(str);
    ({ fingerprint, attemptId, installationId, referrer_id, sort, filter } = tmp143Result);
    ({ username, didRegister, custom_id, link_id } = tmp143Result);
    const tmpResult = UrlDefault;
    const findCodedLinkResult = findCodedLinks.findCodedLink(sanitizeUrlResult);
    if (null != findCodedLinkResult) {
      const type = findCodedLinkResult.type;
      if (CodedLink.CodedLinkType.INVITE === type) {
        const obj5 = { fingerprint, attemptId, installationId, didRegister: "true" === didRegister, payload: null };
        const obj6 = { type: React5.INVITE, inviteCode: findCodedLinkResult.code, username, deeplinkAttemptId: attemptId };
        obj5.payload = obj6;
        return obj5;
      } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
        const obj7 = { fingerprint, attemptId, installationId, payload: null };
        const obj8 = { type: React5.GUILD_TEMPLATE, guildTemplateCode: findCodedLinkResult.code };
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
                      const obj10 = { type: React5.ACTIVITY, applicationId: findCodedLinkResult.code, customId: custom_id, referrerId: referrer_id, linkId: link_id, isDeepLink: flag };
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
                                  const obj12 = { type: React5.GAME_PROFILE, gameId: findCodedLinkResult.code };
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
                                          const obj14 = { type: React5.SHOP, screen: FEATURED_PAGE, skuId: null };
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
        const obj16 = { type: React5.BUILD_OVERRIDE, overrideUrl: findCodedLinkResult.code };
        obj15.payload = obj16;
        return obj15;
      }
    }
    const findGiftCodesResult = GiftCodeUtils.findGiftCodes(sanitizeUrlResult);
    if (findGiftCodesResult.length > 0) {
      const obj17 = { fingerprint, attemptId, installationId, payload: null };
      const obj18 = { type: React5.GIFT_CODE, giftCode: findGiftCodesResult[0] };
      obj17.payload = obj18;
      return obj17;
    } else {
      const result = QRLoginUtils.findRemoteAuthFingerprint(host, pathname);
      if (null != result) {
        if (result.length > 0) {
          const obj19 = { fingerprint, attemptId, installationId, payload: null };
          const obj20 = { type: React5.REMOTE_AUTH, remoteAuthFingerprint: result };
          obj19.payload = obj20;
          return obj19;
        }
      }
      const tmp5Result9 = QRLoginUtils;
      if (!tmpResult6.isDiscordHostname(host)) {
        if (!tmpResult7.isDiscordProtocol(protocol)) {
          URLUtilsDefault;
        }
        let match;
        if (host != null) {
          match = host.match(re18);
        }
        if (null != match) {
          const obj21 = { fingerprint, attemptId, installationId, payload: null };
          const obj23 = { type: React5.PROMOTIONS, url: sanitizeUrlResult };
          obj21.payload = obj23;
          let obj26 = obj21;
        } else {
          let host1;
          if (UPDATE_CONFIG != null) {
            host1 = UPDATE_CONFIG.url.host;
          }
          if (host === host1) {
            const obj24 = { fingerprint, attemptId, installationId, payload: null };
            const obj25 = { type: React5.MOBILE_NATIVE_UPDATE, url: sanitizeUrlResult };
            obj24.payload = obj25;
            obj26 = obj24;
          } else {
            obj26 = { fingerprint, attemptId, installationId, payload: null };
            const obj27 = { type: React5.NONE };
            obj26.payload = obj27;
          }
        }
        return obj26;
      }
      if (null != pathname) {
        const tryParseDiceRollLinkResult = LinkUtils.tryParseDiceRollLink(pathname);
        if (null != tryParseDiceRollLinkResult) {
          const obj28 = { fingerprint, attemptId, installationId, payload: null };
          const obj29 = { type: React5.ROLL_DICE, guildId: null, channelId: null, diceCount: null, diceSides: null };
          ({ guildId: obj96.guildId, channelId: obj96.channelId, diceCount: obj96.diceCount, diceSides: obj96.diceSides } = tryParseDiceRollLinkResult);
          obj28.payload = obj29;
          return obj28;
        } else {
          const tryParseChannelPathResult = LinkUtils.tryParseChannelPath(pathname);
          if (null != tryParseChannelPathResult) {
            if (query == null) {
              query = "";
            }
            const obj30 = { fingerprint, attemptId, installationId, payload: null };
            if (null != tryParseChannelPathResult.messageId) {
              let CHANNEL = React5.MESSAGE;
            } else {
              CHANNEL = React5.CHANNEL;
            }
            const obj31 = { type: CHANNEL, guildId: null, channelId: null, messageId: null, summaryId: null };
            ({ guildId: obj94.guildId, channelId: obj94.channelId, messageId: obj94.messageId } = tryParseChannelPathResult);
            obj31.summaryId = parseQuery(query).summaryId;
            obj30.payload = obj31;
            return obj30;
          } else {
            const match1 = pathname.match(re25);
            if (null != match1) {
              if (match1.length > 1) {
                const obj32 = { fingerprint, attemptId, installationId, payload: null };
                const obj33 = { type: React5.QUESTS, questId: match1[1], referrerId: referrer_id, sort, filter };
                obj32.payload = obj33;
                return obj32;
              }
            }
            const match2 = pathname.match(re26);
            if (null != match2) {
              if (match2.length > 1) {
                const obj34 = { fingerprint, attemptId, installationId, payload: null };
                const obj36 = { type: React5.QUEST_PREVIEW_TOOL, questId: match2[1] };
                obj34.payload = obj36;
                return obj34;
              }
            }
            if (null != pathname.match(re28)) {
              let str5 = query;
              if (query == null) {
                str5 = "";
              }
              let ad_creative_ids = _modDef1491.parse(str5).ad_creative_ids;
              if (ad_creative_ids == null) {
                ad_creative_ids = [];
              }
              const items = [ad_creative_ids];
              const first = _slicedToArray(items.flat(), 1)[0];
              if (null != first) {
                const obj37 = { fingerprint, attemptId, installationId, payload: null };
                const obj39 = { type: React5.QUEST_BAR_PREVIEW, adCreativeId: first };
                obj37.payload = obj39;
                return obj37;
              }
              const tmpResult9 = _modDef1491;
            }
            if (null != pathname.match(re27)) {
              let str26 = query;
              if (query == null) {
                str26 = "";
              }
              let ad_creative_ids1 = _modDef1491.parse(str26).ad_creative_ids;
              if (ad_creative_ids1 == null) {
                ad_creative_ids1 = [];
              }
              const items1 = [ad_creative_ids1];
              const flatResult = items1.flat();
              if (flatResult.length > 0) {
                const obj40 = { fingerprint, attemptId, installationId, payload: null };
                const obj41 = { type: React5.QUEST_HOME_PREVIEW, adCreativeIds: flatResult };
                obj40.payload = obj41;
                let obj42 = obj40;
              } else {
                obj42 = { fingerprint, attemptId, installationId, payload: null };
                const obj43 = { type: React5.QUESTS, referrerId: referrer_id, sort, filter };
                obj42.payload = obj43;
              }
              return obj42;
            } else if (null != pathname.match(re29)) {
              const obj44 = { fingerprint, attemptId, installationId, payload: null };
              const obj46 = { type: React5.SUBSCRIPTION_SETTINGS };
              obj44.payload = obj46;
              return obj44;
            } else {
              const match3 = pathname.match(re15);
              if (null != match3) {
                if (match3.length > 1) {
                  const obj47 = { fingerprint, attemptId, installationId, payload: null };
                  const obj48 = { type: React5.USER_PROFILE, userId: match3[1] };
                  obj47.payload = obj48;
                  return obj47;
                }
              }
              if (null != pathname.match(re16)) {
                let str6 = query;
                if (query == null) {
                  str6 = "";
                }
                const result1 = Authorize.parseOAuth2AuthorizeProps(str6);
                if (null != result1) {
                  const obj49 = { fingerprint, attemptId, installationId, payload: null };
                  const element = { type: React5.OAUTH2_AUTHORIZE, props: null };
                  const obj50 = {};
                  const merged = Object.assign(result1);
                  obj50.wasDeepLink = flag;
                  element.props = obj50;
                  obj49.payload = element;
                  return obj49;
                }
                const tmp5Result12 = Authorize;
              }
              if (null != pathname.match(re17)) {
                let str25 = query;
                if (query == null) {
                  str25 = "";
                }
                let token = parseQuery(str25).token;
                const obj51 = { fingerprint, attemptId, installationId, payload: null };
                const obj52 = { type: React5.ONE_TIME_LOGIN, token: null };
                if (token == null) {
                  token = null;
                }
                obj52.token = token;
                obj51.payload = obj52;
                return obj51;
              } else {
                const match4 = pathname.match(re14);
                if (null != match4) {
                  if (match4.length > 1) {
                    const obj53 = { fingerprint, attemptId, installationId, payload: null };
                    const obj54 = { type: React5.BOOST_MARKETING, guildId: match4[1] };
                    obj53.payload = obj54;
                    return obj53;
                  }
                }
                const match5 = pathname.match(re13);
                if (null != match5) {
                  if (match5.length > 1) {
                    let tmp29 = null;
                    switch (match5[1]) {
                      case "composeMessage":
                        const obj55 = { type: React5.COMPOSE_MESSAGE };
                        tmp29 = obj55;
                        while (true) {
                          if (null != tmp29) {
                            let obj56 = { fingerprint, attemptId, installationId, payload: tmp29 };
                            return obj56;
                          }
                        }
                      break;
                      case "contactSync":
                        const obj57 = { type: React5.CONTACT_SYNC };
                        tmp29 = obj57;
                      break;
                      case "addFriends":
                        const obj58 = { type: React5.ADD_FRIENDS };
                        tmp29 = obj58;
                      break;
                      case "friends":
                        let str18 = query;
                        if (query == null) {
                          str18 = "";
                        }
                        const obj59 = { type: React5.FRIENDS, userId: parseQuery(str18).user_id };
                        tmp29 = obj59;
                      break;
                      case "editProfile":
                        const obj60 = { type: React5.EDIT_PROFILE };
                        tmp29 = obj60;
                      break;
                      case "badges":
                        const obj62 = { type: React5.BADGE_DIRECTORY };
                        tmp29 = obj62;
                      break;
                      case "voiceChannel":
                        let str17 = query;
                        if (query == null) {
                          str17 = "";
                        }
                        const obj63 = { type: React5.VOICE_CHANNEL, guildId: null, channelId: null, userId: null, via: null, action: null };
                        ({ guild_id: obj38.guildId, channel_id: obj38.channelId, user_id: obj38.userId, via: obj38.via, action: obj38.action } = parseQuery(str17));
                        tmp29 = obj63;
                        const tmp143Result8 = parseQuery(str17);
                      break;
                      case "sessionManagement":
                        const obj65 = { type: React5.SESSION_MANAGEMENT };
                        tmp29 = obj65;
                      break;
                      case "messageRequests":
                        const obj66 = { type: React5.MESSAGE_REQUESTS };
                        tmp29 = obj66;
                      break;
                      case "home":
                        let str16 = query;
                        if (query == null) {
                          str16 = "";
                        }
                        const obj67 = { type: React5.GUILD_HOME, guildId: null, highlightChannelId: null, highlightMessageId: null };
                        ({ guild_id: obj35.guildId, highlight_channel_id: obj35.highlightChannelId, highlight_message_id: obj35.highlightMessageId } = parseQuery(str16));
                        tmp29 = obj67;
                        const tmp143Result9 = parseQuery(str16);
                      break;
                      case "icymi":
                        const obj68 = { type: React5.ICYMI };
                        tmp29 = obj68;
                      break;
                      case "connections":
                        let str15 = query;
                        if (query == null) {
                          str15 = "";
                        }
                        const obj70 = { type: React5.CONNECTIONS, source: parseQuery(str15).source };
                        tmp29 = obj70;
                      break;
                      case "family-center":
                        const obj71 = { type: React5.FAMILY_CENTER, pathname };
                        tmp29 = obj71;
                      break;
                      case "promo-url":
                        let str14 = query;
                        if (query == null) {
                          str14 = "";
                        }
                        const promo_url = parseQuery(str14).promo_url;
                        tmp29 = null;
                        if (undefined !== promo_url) {
                          const obj72 = { type: React5.FEATURE_PROMO_URL, promoUrl: promo_url };
                          tmp29 = obj72;
                        }
                      break;
                      case "account-standing":
                        const obj73 = { type: React5.ACCOUNT_STANDING, pathname };
                        tmp29 = obj73;
                      break;
                      case "mobile-web-redirect-checkout":
                        let result2 = MobileWebRedirectCheckoutUtils.isMobileWebRedirectCheckoutEnabled();
                        if (result2) {
                          result2 = !MetaQuestUtils.isMetaQuest();
                          const tmp5Result14 = MetaQuestUtils;
                        }
                        let str13 = query;
                        if (query == null) {
                          str13 = "";
                        }
                        const tmp5Result13 = MobileWebRedirectCheckoutUtils;
                        let DEFAULT = parseQuery(str13)[constants5.DEEP_LINK_ACTION];
                        tmp29 = null;
                        if (result2) {
                          const obj74 = { type: React5.MOBILE_WEB_REDIRECT_CHECKOUT, deepLinkAction: null, guildId: null };
                          if (DEFAULT == null) {
                            DEFAULT = constants4.DEFAULT;
                          }
                          obj74.deepLinkAction = DEFAULT;
                          obj74.guildId = tmp52;
                          tmp29 = obj74;
                        }
                        const tmp143Result10 = parseQuery(str13);
                      break;
                      case "open-shop":
                        const obj75 = { type: React5.SHOP };
                        tmp29 = obj75;
                      break;
                      case "authorized-apps":
                        const obj76 = { type: React5.AUTHORIZED_APPS };
                        tmp29 = obj76;
                      break;
                      case "share":
                        tmp29 = null;
                        if (tmp5Result15.isIOS()) {
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
                          const tmp143Result11 = parseQuery(str12);
                        }
                        tmp5Result15 = PlatformUtils;
                      break;
                      case "dave-protocol-verification":
                        let str11 = query;
                        if (query == null) {
                          str11 = "";
                        }
                        ({ userId, fingerprint: fingerprint2 } = parseQuery(str11));
                        tmp29 = null;
                        if (null != userId) {
                          tmp29 = null;
                          if (null != fingerprint2) {
                            tmp29 = null;
                            if (tmp5Result16.getSecureFramesDeeplinkExperiment({ location: "parseUrl" }).enabled) {
                              const obj77 = { type: React5.DAVE_PROTOCOL_VERIFICATION, userId, fingerprint: fingerprint2 };
                              tmp29 = obj77;
                            }
                            tmp5Result16 = SecureFramesDeeplinkExperiment;
                          }
                        }
                        const tmp143Result12 = parseQuery(str11);
                      break;
                      case "agekey-return":
                        let str10 = query;
                        if (query == null) {
                          str10 = "";
                        }
                        const obj78 = { type: React5.AGE_VERIFICATION_AGEKEY_RETURN, result: null, ageKeySaved: null, verificationId: null };
                        ({ result: obj22.result, ageKeySaved: obj22.ageKeySaved, verificationId: obj22.verificationId } = parseQuery(str10));
                        tmp29 = obj78;
                        const tmp143Result13 = parseQuery(str10);
                      break;
                      case "gift":
                        const obj79 = { type: React5.GIFT };
                        tmp29 = obj79;
                      break;
                      case "store":
                        let str9 = query;
                        if (query == null) {
                          str9 = "";
                        }
                        const obj80 = { type: React5.NITRO_HOME, section: parseQuery(str9).section };
                        tmp29 = obj80;
                      break;
                      case "connected-games":
                        const obj81 = { type: React5.CONNECTED_GAMES };
                        tmp29 = obj81;
                      break;
                      case "boost-settings":
                        const obj82 = { type: React5.BOOST_SETTINGS };
                        tmp29 = obj82;
                      break;
                      case "quest-preview-tool":
                        let str8 = query;
                        if (query == null) {
                          str8 = "";
                        }
                        const obj83 = { type: React5.QUEST_PREVIEW_TOOL, questId: parseQuery(str8).quest_id };
                        tmp29 = obj83;
                      break;
                      case "subscription-settings":
                        const obj84 = { type: React5.SUBSCRIPTION_SETTINGS };
                        tmp29 = obj84;
                      break;
                      case "conjure":
                        let str7 = query;
                        if (query == null) {
                          str7 = "";
                        }
                        const project_id = parseQuery(str7).project_id;
                        tmp29 = null;
                        if (null != project_id) {
                          const obj85 = { type: React5.CONJURE, projectId: project_id, guildId: tmp28 };
                          tmp29 = obj85;
                        }
                        const tmp143Result14 = parseQuery(str7);
                      break;
                    }
                  }
                }
                const result3 = LinkUtils.tryParseEventDetailsPath(pathname);
                if (null != result3) {
                  const obj86 = { fingerprint, attemptId, installationId, payload: null };
                  const obj87 = { type: React5.GUILD_EVENT_DETAILS, guildEventId: null, guildId: null, recurrenceId: null };
                  ({ guildEventId: obj69.guildEventId, guildId: obj69.guildId, recurrenceId: obj69.recurrenceId } = result3);
                  obj86.payload = obj87;
                  return obj86;
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
                      const obj88 = { fingerprint: fingerprint3, attemptId, installationId, payload: null };
                      const obj89 = { type: React5.MOBILE_WEB_HANDOFF, nonce: key, redirectUrl: uRL, fingerprint: fingerprint3 };
                      obj88.payload = obj89;
                      return obj88;
                    }
                  }
                  const tmp108 = parseQuery(decodeURIComponent(query));
                  const obj90 = { reason: "invalid_query_params", fingerprint: null };
                  const obj64 = AnalyticsUtilsDefault;
                  obj90.fingerprint = FingerprintUtils.maybeExtractId(fingerprint3);
                  const obj91 = { fingerprint: fingerprint3 };
                  obj64.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj90, obj91);
                  const _Error = Error;
                  const error = new Error("Missing nonce or redirect query params");
                  throw error;
                } else {
                  const match6 = pathname.match(re20);
                  if (null != match6) {
                    let str22 = query;
                    if (query == null) {
                      str22 = "";
                    }
                    const obj92 = { fingerprint, attemptId, installationId, payload: null };
                    const obj93 = { type: React5.USER_CONNECTIONS_LINK_CALLBACK, provider: match6[1], callbackCode: null, callbackState: null };
                    ({ code: obj61.callbackCode, state: obj61.callbackState } = parseQuery(decodeURIComponent(str22)));
                    obj92.payload = obj93;
                    return obj92;
                  } else {
                    const match7 = pathname.match(re21);
                    if (null != match7) {
                      const tmp97 = _slicedToArray(match7, 2);
                      const first1 = tmp97[0];
                      let str21 = query;
                      if (query == null) {
                        str21 = "";
                      }
                      const obj95 = { fingerprint, attemptId, installationId, payload: null };
                      const obj97 = { type: React5.USER_CONNECTIONS_CALLBACK, provider: tmp97[1], searchParams: parseQuery(decodeURIComponent(str21)) };
                      obj95.payload = obj97;
                      return obj95;
                    } else {
                      const match8 = pathname.match(re22);
                      if (null != match8) {
                        const tmp91 = _slicedToArray(match8, 4);
                        const obj98 = { fingerprint, attemptId, installationId, payload: null };
                        const obj99 = { type: React5.GUILD_SETTINGS, guildId: tmp91[1], settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp91[2]), settingsSubsection: urlPartToSettingsEnumDefault(timestampProducer, tmp91[3]) };
                        obj98.payload = obj99;
                        return obj98;
                      } else {
                        const match9 = pathname.match(re23);
                        if (null != match9) {
                          const tmp84 = _slicedToArray(match9, 3);
                          let str20 = query;
                          if (query == null) {
                            str20 = "";
                          }
                          const obj100 = { fingerprint, attemptId, installationId, payload: null };
                          const obj101 = { type: React5.GUILD_SETTINGS_PICKER, settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp84[1]), settingsSubsection: urlPartToSettingsEnumDefault(timestampProducer, tmp84[2]), feature: parseQuery(str20).feature };
                          obj100.payload = obj101;
                          return obj100;
                        } else if (null != pathname.match(re24)) {
                          let str19 = query;
                          if (query == null) {
                            str19 = "";
                          }
                          const obj102 = { fingerprint, attemptId, installationId, payload: null };
                          const obj103 = { type: React5.ACTIVATE_DEVICE, userCode: parseQuery(decodeURIComponent(str19)).user_code };
                          obj102.payload = obj103;
                          return obj102;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const tmp5Result11 = LinkUtils;
        }
        const tmp5Result10 = LinkUtils;
      }
      tmpResult6 = URLUtilsDefault;
    }
  }
};