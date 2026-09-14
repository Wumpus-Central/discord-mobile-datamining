// === Module 4616: parseURL ===

// Module 4616 (parseURL)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import FingerprintUtils from "FingerprintUtils" /* 1253 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import UrlDefault from "Url" /* 1367 */;
import _modDef1471 from "module_1471" /* 1471 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import _modDef4333 from "module_4333" /* 4333 */;
import findCodedLinks from "findCodedLinks" /* 4619 */;
import CodedLink from "CodedLink" /* 4624 */;
import LinkUtils from "LinkUtils" /* 4790 */;
import GiftCodeUtils from "GiftCodeUtils" /* 4875 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 7509 */;
import SecureFramesDeeplinkExperiment from "SecureFramesDeeplinkExperiment" /* 9289 */;
import Authorize from "Authorize" /* 9366 */;
import useVirtualCurrencyMobileEnabled from "useVirtualCurrencyMobileEnabled" /* 13076 */;
import QRLoginUtils from "QRLoginUtils" /* 13937 */;
import urlPartToSettingsEnumDefault from "urlPartToSettingsEnum" /* 13938 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function parseQuery(arg0) {
  try {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(_modDef1471.parse(arg0));
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
const Constants = fn(1074);
({ AnalyticEvents: closure_4, GuildSettingsSections: hasOwnProperty, GuildSettingsSubsections: metroRequire, LinkingTypes: closure_7 } = Constants);
const CollectiblesShopConstants = fn(1076);
({ CollectibleShopTab: closure_8, CollectiblesMobileShopScreen: closure_9 } = CollectiblesShopConstants);
const UPDATE_CONFIG = fn(4617).UPDATE_CONFIG;
const PaymentConstants = fn(4618);
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
const re29 = /subscriptions\/(\d+)/;
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/parseURL.tsx");

export default function parseURL(ctaLink) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const sanitizeUrlResult = _modDef4333.sanitizeUrl(ctaLink);
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
    const tmp126Result = parseQuery(str);
    ({ fingerprint, attemptId, installationId, referrer_id, sort, filter } = tmp126Result);
    ({ username, didRegister, custom_id, link_id } = tmp126Result);
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
      const tmp5Result11 = QRLoginUtils;
      if (!tmpResult7.isDiscordHostname(host)) {
        if (!tmpResult8.isDiscordProtocol(protocol)) {
          URLUtilsDefault;
        }
        let match;
        if (host != null) {
          match = host.match(re18);
        }
        if (null != match) {
          const obj21 = { fingerprint, attemptId, installationId, payload: null };
          const obj22 = { type: React5.PROMOTIONS, url: sanitizeUrlResult };
          obj21.payload = obj22;
          let obj25 = obj21;
        } else {
          let host1;
          if (UPDATE_CONFIG != null) {
            host1 = UPDATE_CONFIG.url.host;
          }
          if (host === host1) {
            const obj23 = { fingerprint, attemptId, installationId, payload: null };
            const obj24 = { type: React5.MOBILE_NATIVE_UPDATE, url: sanitizeUrlResult };
            obj23.payload = obj24;
            obj25 = obj23;
          } else {
            obj25 = { fingerprint, attemptId, installationId, payload: null };
            const obj26 = { type: React5.NONE };
            obj25.payload = obj26;
          }
        }
        return obj25;
      }
      if (null != pathname) {
        const tryParseDiceRollLinkResult = LinkUtils.tryParseDiceRollLink(pathname);
        if (null != tryParseDiceRollLinkResult) {
          const obj27 = { fingerprint, attemptId, installationId, payload: null };
          const obj28 = { type: React5.ROLL_DICE, guildId: null, channelId: null, diceCount: null, diceSides: null };
          ({ guildId: obj94.guildId, channelId: obj94.channelId, diceCount: obj94.diceCount, diceSides: obj94.diceSides } = tryParseDiceRollLinkResult);
          obj27.payload = obj28;
          return obj27;
        } else {
          const tryParseChannelPathResult = LinkUtils.tryParseChannelPath(pathname);
          if (null != tryParseChannelPathResult) {
            if (query == null) {
              query = "";
            }
            const obj29 = { fingerprint, attemptId, installationId, payload: null };
            if (null != tryParseChannelPathResult.messageId) {
              let CHANNEL = React5.MESSAGE;
            } else {
              CHANNEL = React5.CHANNEL;
            }
            const obj30 = { type: CHANNEL, guildId: null, channelId: null, messageId: null, summaryId: null };
            ({ guildId: obj92.guildId, channelId: obj92.channelId, messageId: obj92.messageId } = tryParseChannelPathResult);
            obj30.summaryId = parseQuery(query).summaryId;
            obj29.payload = obj30;
            return obj29;
          } else {
            const match1 = pathname.match(re25);
            if (null != match1) {
              if (match1.length > 1) {
                const obj31 = { fingerprint, attemptId, installationId, payload: null };
                const obj32 = { type: React5.QUESTS, questId: match1[1], referrerId: referrer_id, sort, filter };
                obj31.payload = obj32;
                return obj31;
              }
            }
            const match2 = pathname.match(re26);
            if (null != match2) {
              if (match2.length > 1) {
                const obj33 = { fingerprint, attemptId, installationId, payload: null };
                const obj35 = { type: React5.QUEST_PREVIEW_TOOL, questId: match2[1] };
                obj33.payload = obj35;
                return obj33;
              }
            }
            if (null != pathname.match(re28)) {
              let str5 = query;
              if (query == null) {
                str5 = "";
              }
              let ad_creative_ids = _modDef1471.parse(str5).ad_creative_ids;
              if (ad_creative_ids == null) {
                ad_creative_ids = [];
              }
              const items = [ad_creative_ids];
              const first = _slicedToArray(items.flat(), 1)[0];
              if (null != first) {
                const obj36 = { fingerprint, attemptId, installationId, payload: null };
                const obj38 = { type: React5.QUEST_BAR_PREVIEW, adCreativeId: first };
                obj36.payload = obj38;
                return obj36;
              }
              const tmpResult10 = _modDef1471;
            }
            if (null != pathname.match(re27)) {
              let str24 = query;
              if (query == null) {
                str24 = "";
              }
              let ad_creative_ids1 = _modDef1471.parse(str24).ad_creative_ids;
              if (ad_creative_ids1 == null) {
                ad_creative_ids1 = [];
              }
              const items1 = [ad_creative_ids1];
              const flatResult = items1.flat();
              if (flatResult.length > 0) {
                const obj39 = { fingerprint, attemptId, installationId, payload: null };
                const obj40 = { type: React5.QUEST_HOME_PREVIEW, adCreativeIds: flatResult };
                obj39.payload = obj40;
                let obj41 = obj39;
              } else {
                obj41 = { fingerprint, attemptId, installationId, payload: null };
                const obj42 = { type: React5.QUESTS, referrerId: referrer_id, sort, filter };
                obj41.payload = obj42;
              }
              return obj41;
            } else if (null != pathname.match(re29)) {
              const obj43 = { fingerprint, attemptId, installationId, payload: null };
              const obj44 = { type: React5.SUBSCRIPTION_SETTINGS };
              obj43.payload = obj44;
              return obj43;
            } else {
              const match3 = pathname.match(re15);
              if (null != match3) {
                if (match3.length > 1) {
                  const obj45 = { fingerprint, attemptId, installationId, payload: null };
                  const obj46 = { type: React5.USER_PROFILE, userId: match3[1] };
                  obj45.payload = obj46;
                  return obj45;
                }
              }
              if (null != pathname.match(re16)) {
                let str6 = query;
                if (query == null) {
                  str6 = "";
                }
                const result1 = Authorize.parseOAuth2AuthorizeProps(str6);
                if (null != result1) {
                  const obj47 = { fingerprint, attemptId, installationId, payload: null };
                  const element = { type: React5.OAUTH2_AUTHORIZE, props: null };
                  const obj48 = {};
                  const merged = Object.assign(result1);
                  obj48.wasDeepLink = flag;
                  element.props = obj48;
                  obj47.payload = element;
                  return obj47;
                }
                const tmp5Result14 = Authorize;
              }
              if (null != pathname.match(re17)) {
                let str23 = query;
                if (query == null) {
                  str23 = "";
                }
                let token = parseQuery(str23).token;
                const obj49 = { fingerprint, attemptId, installationId, payload: null };
                const obj50 = { type: React5.ONE_TIME_LOGIN, token: null };
                if (token == null) {
                  token = null;
                }
                obj50.token = token;
                obj49.payload = obj50;
                return obj49;
              } else {
                const match4 = pathname.match(re14);
                if (null != match4) {
                  if (match4.length > 1) {
                    const obj51 = { fingerprint, attemptId, installationId, payload: null };
                    const obj52 = { type: React5.BOOST_MARKETING, guildId: match4[1] };
                    obj51.payload = obj52;
                    return obj51;
                  }
                }
                const match5 = pathname.match(re13);
                if (null != match5) {
                  if (match5.length > 1) {
                    let tmp28 = null;
                    switch (match5[1]) {
                      case "composeMessage":
                        const obj53 = { type: React5.COMPOSE_MESSAGE };
                        tmp28 = obj53;
                        if (null != tmp28) {
                          const obj54 = { fingerprint, attemptId, installationId, payload: tmp28 };
                          return obj54;
                        }
                      break;
                      case "contactSync":
                        const obj55 = { type: React5.CONTACT_SYNC };
                        tmp28 = obj55;
                      break;
                      case "addFriends":
                        const obj56 = { type: React5.ADD_FRIENDS };
                        tmp28 = obj56;
                      break;
                      case "friends":
                        let str16 = query;
                        if (query == null) {
                          str16 = "";
                        }
                        const obj57 = { type: React5.FRIENDS, userId: parseQuery(str16).user_id };
                        tmp28 = obj57;
                      break;
                      case "editProfile":
                        const obj58 = { type: React5.EDIT_PROFILE };
                        tmp28 = obj58;
                      break;
                      case "voiceChannel":
                        let str15 = query;
                        if (query == null) {
                          str15 = "";
                        }
                        const obj60 = { type: React5.VOICE_CHANNEL, guildId: null, channelId: null, userId: null, via: null, action: null };
                        ({ guild_id: obj37.guildId, channel_id: obj37.channelId, user_id: obj37.userId, via: obj37.via, action: obj37.action } = parseQuery(str15));
                        tmp28 = obj60;
                        const tmp126Result8 = parseQuery(str15);
                      break;
                      case "sessionManagement":
                        const obj61 = { type: React5.SESSION_MANAGEMENT };
                        tmp28 = obj61;
                      break;
                      case "messageRequests":
                        const obj62 = { type: React5.MESSAGE_REQUESTS };
                        tmp28 = obj62;
                      break;
                      case "home":
                        let str14 = query;
                        if (query == null) {
                          str14 = "";
                        }
                        const obj63 = { type: React5.GUILD_HOME, guildId: null, highlightChannelId: null, highlightMessageId: null };
                        ({ guild_id: obj34.guildId, highlight_channel_id: obj34.highlightChannelId, highlight_message_id: obj34.highlightMessageId } = parseQuery(str14));
                        tmp28 = obj63;
                        const tmp126Result9 = parseQuery(str14);
                      break;
                      case "icymi":
                        const obj64 = { type: React5.ICYMI };
                        tmp28 = obj64;
                      break;
                      case "connections":
                        let str13 = query;
                        if (query == null) {
                          str13 = "";
                        }
                        const obj65 = { type: React5.CONNECTIONS, source: parseQuery(str13).source };
                        tmp28 = obj65;
                      break;
                      case "family-center":
                        const obj66 = { type: React5.FAMILY_CENTER, pathname };
                        tmp28 = obj66;
                      break;
                      case "promo-url":
                        let str12 = query;
                        if (query == null) {
                          str12 = "";
                        }
                        const promo_url = parseQuery(str12).promo_url;
                        tmp28 = null;
                        if (undefined !== promo_url) {
                          const obj68 = { type: React5.FEATURE_PROMO_URL, promoUrl: promo_url };
                          tmp28 = obj68;
                        }
                      break;
                      case "account-standing":
                        const obj69 = { type: React5.ACCOUNT_STANDING, pathname };
                        tmp28 = obj69;
                      break;
                      case "mobile-web-redirect-checkout":
                        let result2 = MobileWebRedirectCheckoutUtils.isMobileWebRedirectCheckoutEnabled();
                        if (result2) {
                          result2 = !MetaQuestUtils.isMetaQuest();
                          const tmp5Result16 = MetaQuestUtils;
                        }
                        let str11 = query;
                        if (query == null) {
                          str11 = "";
                        }
                        const tmp5Result15 = MobileWebRedirectCheckoutUtils;
                        let DEFAULT = parseQuery(str11)[constants5.DEEP_LINK_ACTION];
                        tmp28 = null;
                        if (result2) {
                          const obj70 = { type: React5.MOBILE_WEB_REDIRECT_CHECKOUT, deepLinkAction: null, guildId: null };
                          if (DEFAULT == null) {
                            DEFAULT = constants4.DEFAULT;
                          }
                          obj70.deepLinkAction = DEFAULT;
                          obj70.guildId = tmp46;
                          tmp28 = obj70;
                        }
                        const tmp126Result10 = parseQuery(str11);
                      break;
                      case "open-shop":
                        const obj71 = { type: React5.SHOP };
                        tmp28 = obj71;
                      break;
                      case "authorized-apps":
                        const obj72 = { type: React5.AUTHORIZED_APPS };
                        tmp28 = obj72;
                      break;
                      case "share":
                        tmp28 = null;
                        if (tmp5Result17.isIOS()) {
                          let str10 = query;
                          if (query == null) {
                            str10 = "";
                          }
                          const tmp126Result11 = parseQuery(str10);
                          ({ shareId, attachmentManifest } = tmp126Result11);
                          let tmp37;
                          ({ text, channelId } = tmp126Result11);
                          if (typeof shareId === "string") {
                            if (obj111.test(shareId)) {
                              tmp37 = shareId;
                            }
                            obj111 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                          }
                          if (typeof attachmentManifest === "string") {
                            const _JSON = JSON;
                            let parsed1 = JSON.parse(attachmentManifest);
                          } else {
                            parsed1 = [];
                          }
                          const _Array = Array;
                          let items2 = parsed1;
                          if (!Array.isArray(parsed1)) {
                            items2 = [];
                          }
                          const obj73 = {
                            type: React5.SHARE,
                            text,
                            channelId,
                            shareId: tmp37,
                            attachmentManifest: items2.filter((originalFilename) => {
                                                      originalFilename = originalFilename.originalFilename;
                                                      let isMatch = typeof originalFilename === "string";
                                                      if (typeof originalFilename === "string") {
                                                        isMatch = typeof originalFilename.temporaryFilename === "string";
                                                      }
                                                      if (isMatch) {
                                                        isMatch = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(originalFilename.temporaryFilename);
                                                        const obj = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                                                      }
                                                      return isMatch;
                                                    })
                          };
                          tmp28 = obj73;
                        }
                        tmp5Result17 = PlatformUtils;
                      break;
                      case "dave-protocol-verification":
                        let str9 = query;
                        if (query == null) {
                          str9 = "";
                        }
                        ({ userId, fingerprint: fingerprint2 } = parseQuery(str9));
                        tmp28 = null;
                        if (null != userId) {
                          tmp28 = null;
                          if (null != fingerprint2) {
                            tmp28 = null;
                            if (tmp5Result18.getSecureFramesDeeplinkExperiment({ location: "parseUrl" }).enabled) {
                              const obj74 = { type: React5.DAVE_PROTOCOL_VERIFICATION, userId, fingerprint: fingerprint2 };
                              tmp28 = obj74;
                            }
                            tmp5Result18 = SecureFramesDeeplinkExperiment;
                          }
                        }
                        const tmp126Result12 = parseQuery(str9);
                      break;
                      case "gift":
                        const obj75 = { type: React5.GIFT };
                        tmp28 = obj75;
                      break;
                      case "store":
                        let str8 = query;
                        if (query == null) {
                          str8 = "";
                        }
                        const obj76 = { type: React5.NITRO_HOME, section: parseQuery(str8).section };
                        tmp28 = obj76;
                      break;
                      case "connected-games":
                        const obj77 = { type: React5.CONNECTED_GAMES };
                        tmp28 = obj77;
                      break;
                      case "boost-settings":
                        const obj78 = { type: React5.BOOST_SETTINGS };
                        tmp28 = obj78;
                      break;
                      case "quest-preview-tool":
                        let str7 = query;
                        if (query == null) {
                          str7 = "";
                        }
                        const obj79 = { type: React5.QUEST_PREVIEW_TOOL, questId: parseQuery(str7).quest_id };
                        tmp28 = obj79;
                      break;
                      case "subscription-settings":
                        const obj80 = { type: React5.SUBSCRIPTION_SETTINGS };
                        tmp28 = obj80;
                      break;
                    }
                  }
                }
                const result3 = LinkUtils.tryParseEventDetailsPath(pathname);
                if (null != result3) {
                  const obj81 = { fingerprint, attemptId, installationId, payload: null };
                  const obj82 = { type: React5.GUILD_EVENT_DETAILS, guildEventId: null, guildId: null, recurrenceId: null };
                  ({ guildEventId: obj67.guildEventId, guildId: obj67.guildId, recurrenceId: obj67.recurrenceId } = result3);
                  obj81.payload = obj82;
                  return obj81;
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
                      const obj83 = { fingerprint: fingerprint3, attemptId, installationId, payload: null };
                      const obj84 = { type: React5.MOBILE_WEB_HANDOFF, nonce: key, redirectUrl: uRL, fingerprint: fingerprint3 };
                      obj83.payload = obj84;
                      return obj83;
                    }
                  }
                  const tmp126Result13 = parseQuery(decodeURIComponent(query));
                  const obj85 = { reason: "invalid_query_params", fingerprint: null };
                  const tmpResult12 = AnalyticsUtilsDefault;
                  obj85.fingerprint = FingerprintUtils.maybeExtractId(fingerprint3);
                  const obj86 = { fingerprint: fingerprint3 };
                  tmpResult12.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj85, obj86);
                  const _Error = Error;
                  const error = new Error("Missing nonce or redirect query params");
                  throw error;
                } else {
                  const match6 = pathname.match(re20);
                  if (null != match6) {
                    let str20 = query;
                    if (query == null) {
                      str20 = "";
                    }
                    const obj87 = { fingerprint, attemptId, installationId, payload: null };
                    const obj88 = { type: React5.USER_CONNECTIONS_LINK_CALLBACK, provider: match6[1], callbackCode: null, callbackState: null };
                    ({ code: obj59.callbackCode, state: obj59.callbackState } = parseQuery(decodeURIComponent(str20)));
                    obj87.payload = obj88;
                    return obj87;
                  } else {
                    const match7 = pathname.match(re21);
                    if (null != match7) {
                      const tmp84 = _slicedToArray(match7, 2);
                      const first1 = tmp84[0];
                      let str19 = query;
                      if (query == null) {
                        str19 = "";
                      }
                      const obj89 = { fingerprint, attemptId, installationId, payload: null };
                      const obj90 = { type: React5.USER_CONNECTIONS_CALLBACK, provider: tmp84[1], searchParams: parseQuery(decodeURIComponent(str19)) };
                      obj89.payload = obj90;
                      return obj89;
                    } else {
                      const match8 = pathname.match(re22);
                      if (null != match8) {
                        const tmp79 = _slicedToArray(match8, 4);
                        const obj91 = { fingerprint, attemptId, installationId, payload: null };
                        const obj93 = { type: React5.GUILD_SETTINGS, guildId: tmp79[1], settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp79[2]), settingsSubsection: urlPartToSettingsEnumDefault(timestampProducer, tmp79[3]) };
                        obj91.payload = obj93;
                        return obj91;
                      } else {
                        const match9 = pathname.match(re23);
                        if (null != match9) {
                          const tmp74 = _slicedToArray(match9, 3);
                          let str18 = query;
                          if (query == null) {
                            str18 = "";
                          }
                          const obj95 = { fingerprint, attemptId, installationId, payload: null };
                          const obj96 = { type: React5.GUILD_SETTINGS_PICKER, settingsSection: urlPartToSettingsEnumDefault(hasOwnProperty, tmp74[1]), settingsSubsection: urlPartToSettingsEnumDefault(timestampProducer, tmp74[2]), feature: parseQuery(str18).feature };
                          obj95.payload = obj96;
                          return obj95;
                        } else if (null != pathname.match(re24)) {
                          let str17 = query;
                          if (query == null) {
                            str17 = "";
                          }
                          const obj97 = { fingerprint, attemptId, installationId, payload: null };
                          const obj98 = { type: React5.ACTIVATE_DEVICE, userCode: parseQuery(decodeURIComponent(str17)).user_code };
                          obj97.payload = obj98;
                          return obj97;
                        }
                      }
                    }
                  }
                }
                const tmp5Result19 = LinkUtils;
              }
            }
          }
          const tmp5Result13 = LinkUtils;
        }
        const tmp5Result12 = LinkUtils;
      }
      tmpResult7 = URLUtilsDefault;
    }
  }
};