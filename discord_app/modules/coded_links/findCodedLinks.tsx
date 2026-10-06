// === Module 4876: findCodedLinks ===

// Module 4876 (findCodedLinks)
import Constants from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import BuildOverrideUtils from "BuildOverrideUtils" /* 1366 */;
import urlParse from "urlParse" /* 1373 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4878 */;
import CodedLink from "CodedLink" /* 4881 */;
import findCodedLinkUrlsDefault from "findCodedLinkUrls" /* 4882 */;
import _mod5642 from "module_5642" /* 5642 */;
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils" /* 5798 */;
import _slicedToArray from "_slicedToArray" /* 7188 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7238 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 7545 */;
import Authorize from "Authorize" /* 8751 */;
import storefrontCodedLink2 from "storefrontCodedLink" /* 11162 */;
import InviteStore from "InviteStore" /* 4877 */;
import RegexUtils_mod from "RegexUtils" /* 4880 */;
import size from "module_2" /* 2 */;

let WEBAPP_ENDPOINT, invite, set;

let obj;
let obj17;
let obj20;
let obj4;
let obj7;
const f89502 = (arg0, arg1, arg2, arg3) => {
  let combined = arg0;
  if (null == arg2) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg1 + "http://" + arg3;
  }
  return combined;
};
const coerceLinksToCodedLinks2 = function coerceLinksToCodedLinks(arg0) {
  if (null != arg0) {
    if (0 !== arg0.length) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      let items = [];
      function _loop(iter) {
        let inviteHostRemainingPath;
        let primaryHostRemainingPath;
        let templateHostRemainingPath;
        let url;
        const f89504 = (item) => {
          let parts;
          if (typeof item === "string") {
            parts = item.split(",");
          } else {
            parts = [];
          }
          return parts;
        };
        ({ url, inviteHostRemainingPath, templateHostRemainingPath, primaryHostRemainingPath } = getPathsFromURL(iter));
        getPathsFromURL(iter);
        if (null != url) {
          if (null != url.pathname) {
            let query = null;
            if (null != url.query) {
              query = null;
              if (url.query.length <= 1000) {
                query = url.query;
              }
            }
            obj = BuildOverrideUtils;
            if (obj.isBuildOverrideLink(iter)) {
              const BUILD_OVERRIDE = CodedLink.CodedLinkType.BUILD_OVERRIDE;
              if (!set.has(iter)) {
                set.add(iter);
                const obj3 = { type: BUILD_OVERRIDE, code: iter, url: iter };
                items.push(obj3);
              }
            }
            const tmp4Result = BuildOverrideUtils;
            if (tmp4Result.isManualBuildOverrideLink(iter)) {
              const MANUAL_BUILD_OVERRIDE = CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE;
              if (!set.has(iter)) {
                set.add(iter);
                obj4 = { type: MANUAL_BUILD_OVERRIDE, code: iter, url: iter };
                items.push(obj4);
              }
            }
            const tmp4Result17 = ExperimentEmbedUtils;
            if (tmp4Result17.isExperimentEmbedURL(iter)) {
              const EXPERIMENT = CodedLink.CodedLinkType.EXPERIMENT;
              if (!set.has(iter)) {
                set.add(iter);
                const obj6 = { type: EXPERIMENT, code: iter, url: iter };
                items.push(obj6);
              }
            }
            let match;
            if (inviteHostRemainingPath != null) {
              match = inviteHostRemainingPath.match(closure_2_5);
            }
            if (null != match) {
              if ("https:" === url.protocol) {
                const tmp4Result18 = InviteCodeUtils;
                const inviteKeyFromUrlParams = tmp4Result18.generateInviteKeyFromUrlParams(inviteHostRemainingPath.substring(1), url.search);
                invite = invite.getInvite(inviteKeyFromUrlParams);
                if (null != invite) {
                  const tmp4Result19 = InviteTypeUtils;
                  if (tmp4Result19.isEmbeddedApplicationInvite(invite)) {
                    const EMBEDDED_ACTIVITY_INVITE = CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE;
                    if (!set.has(inviteKeyFromUrlParams)) {
                      set.add(inviteKeyFromUrlParams);
                      obj7 = { type: EMBEDDED_ACTIVITY_INVITE, code: inviteKeyFromUrlParams, url: iter };
                      items.push(obj7);
                    }
                  }
                }
                if (iter.includes("\\")) {
                  return 0;
                } else {
                  const INVITE = CodedLink.CodedLinkType.INVITE;
                  if (!set.has(inviteKeyFromUrlParams)) {
                    set.add(inviteKeyFromUrlParams);
                    const obj9 = { type: INVITE, code: inviteKeyFromUrlParams, url: iter };
                    items.push(obj9);
                  }
                }
              }
            }
            let match1;
            if (templateHostRemainingPath != null) {
              match1 = templateHostRemainingPath.match(closure_2_5);
            }
            if (null != match1) {
              const TEMPLATE = CodedLink.CodedLinkType.TEMPLATE;
              const substr = templateHostRemainingPath.substring(1);
              if (!set.has(substr)) {
                set.add(substr);
                obj10 = { type: TEMPLATE, code: substr, url: iter };
                items.push(obj10);
              }
            }
            let match2;
            if (primaryHostRemainingPath != null) {
              match2 = primaryHostRemainingPath.match(closure_2_7);
            }
            if (null != match2) {
              const str21 = match2[1];
              const formatted = str21.toUpperCase();
              if (formatted === CodedLink.CodedLinkType.INVITE) {
                if (iter.includes("\\")) {
                  return 0;
                } else {
                  const tmp4Result20 = InviteCodeUtils;
                  const inviteKeyFromUrlParams1 = tmp4Result20.generateInviteKeyFromUrlParams(match2[2], url.search);
                  const INVITE2 = CodedLink.CodedLinkType.INVITE;
                  if (!set.has(inviteKeyFromUrlParams1)) {
                    set.add(inviteKeyFromUrlParams1);
                    const obj11 = { type: INVITE2, code: inviteKeyFromUrlParams1, url: iter };
                    items.push(obj11);
                  }
                }
              } else if (!set.has(match2[2])) {
                set.add(match2[2]);
                obj13 = { type: formatted, code: match2[2], url: iter };
                items.push(obj13);
              }
            }
            let match3;
            if (primaryHostRemainingPath != null) {
              match3 = primaryHostRemainingPath.match(closure_2_6);
            }
            if (null != match3) {
              const CHANNEL_LINK = CodedLink.CodedLinkType.CHANNEL_LINK;
              const replaced = primaryHostRemainingPath.replace("/channels/", "");
              if (!set.has(replaced)) {
                set.add(replaced);
                const obj15 = { type: CHANNEL_LINK, code: replaced, url: iter };
                items.push(obj15);
              }
            }
            let tmp48 = null;
            if (null != url.pathname) {
              const match4 = str6.match(regExp);
              tmp48 = null;
              if (null != match4) {
                tmp48 = null;
                if (match4.length >= 4) {
                  let tmp51 = null;
                  if (null != match4[2]) {
                    tmp51 = { guildId: match4[1], guildEventId: match4[2], recurrenceId: match4[4] };
                    obj17 = { guildId: match4[1], guildEventId: match4[2], recurrenceId: match4[4] };
                  }
                  tmp48 = tmp51;
                }
              }
            }
            if (null != tmp48) {
              const _HermesInternal4 = HermesInternal;
              let str7 = "";
              const EVENT = CodedLink.CodedLinkType.EVENT;
              const combined = "" + tmp48.guildId + "-" + tmp48.guildEventId;
              if (null != tmp48.recurrenceId) {
                const _HermesInternal = HermesInternal;
                str7 = "-" + tmp48.recurrenceId;
              }
              const sum = combined + str7;
              if (!set.has(sum)) {
                set.add(sum);
                const obj19 = { type: EVENT, code: sum, url: iter };
                items.push(obj19);
              }
            }
            let match5;
            if (primaryHostRemainingPath != null) {
              match5 = primaryHostRemainingPath.match(closure_2_20);
            }
            if (null != match5) {
              if (null != query) {
                const tmp4Result21 = Authorize;
                const result = tmp4Result21.parseOAuth2AuthorizeProps(query);
                const clientId = result.clientId;
                let tmp58 = null == clientId || "" === clientId;
                if (!tmp58) {
                  const scopes = result.scopes;
                  let someResult;
                  if (scopes != null) {
                    someResult = scopes.some((item) => item !== set(closure_1_2[12]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                  }
                  tmp58 = someResult;
                }
                if (!tmp58) {
                  const APP_OAUTH2_LINK = CodedLink.CodedLinkType.APP_OAUTH2_LINK;
                  if (!set.has(clientId)) {
                    set.add(clientId);
                    obj20 = { type: APP_OAUTH2_LINK, code: clientId, url: iter };
                    items.push(obj20);
                  }
                }
              }
            }
            let match6;
            if (primaryHostRemainingPath != null) {
              match6 = primaryHostRemainingPath.match(closure_2_9);
            }
            if (null != match6) {
              const APP_DIRECTORY_PROFILE = CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE;
              if (!set.has(match6[2])) {
                set.add(match6[2]);
                const obj22 = { type: APP_DIRECTORY_PROFILE, code: match6[2], url: iter };
                items.push(obj22);
              }
            }
            let match7;
            if (primaryHostRemainingPath != null) {
              match7 = primaryHostRemainingPath.match(closure_2_10);
            }
            if (null != match7) {
              if (null != match7[3]) {
                const tmp4Result22 = _slicedToArray;
                const storefrontSKUCodedLink = tmp4Result22.makeStorefrontSKUCodedLink(tmp156, tmp157);
                const APP_DIRECTORY_STOREFRONT_SKU = CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU;
                if (!set.has(storefrontSKUCodedLink)) {
                  set.add(storefrontSKUCodedLink);
                  const obj24 = { type: APP_DIRECTORY_STOREFRONT_SKU, code: storefrontSKUCodedLink, url: iter };
                  items.push(obj24);
                }
              } else {
                const APP_DIRECTORY_STOREFRONT = CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT;
                if (!set.has(match7[2])) {
                  set.add(match7[2]);
                  const obj25 = { type: APP_DIRECTORY_STOREFRONT, code: match7[2], url: iter };
                  items.push(obj25);
                }
              }
            }
            let match8;
            if (primaryHostRemainingPath != null) {
              match8 = primaryHostRemainingPath.match(closure_2_11);
            }
            if (null != match8) {
              const ACTIVITY_BOOKMARK = CodedLink.CodedLinkType.ACTIVITY_BOOKMARK;
              if (!set.has(match8[1])) {
                set.add(match8[1]);
                const obj27 = { type: ACTIVITY_BOOKMARK, code: match8[1], url: iter };
                items.push(obj27);
              }
            }
            let match9;
            if (primaryHostRemainingPath != null) {
              match9 = primaryHostRemainingPath.match(closure_2_12);
            }
            if (null != match9) {
              const _HermesInternal2 = HermesInternal;
              const GUILD_PRODUCT = CodedLink.CodedLinkType.GUILD_PRODUCT;
              const combined1 = "" + match9[1] + "-" + match9[2];
              if (!set.has(combined1)) {
                set.add(combined1);
                const obj29 = { type: GUILD_PRODUCT, code: combined1, url: iter };
                items.push(obj29);
              }
            }
            let match10;
            if (primaryHostRemainingPath != null) {
              match10 = primaryHostRemainingPath.match(closure_2_14);
            }
            if (null != match10) {
              const SERVER_SHOP = CodedLink.CodedLinkType.SERVER_SHOP;
              if (!set.has(match10[1])) {
                set.add(match10[1]);
                const obj31 = { type: SERVER_SHOP, code: match10[1], url: iter };
                items.push(obj31);
              }
            }
            let match11;
            if (primaryHostRemainingPath != null) {
              match11 = primaryHostRemainingPath.match(closure_2_13);
            }
            if (null != match11) {
              let result1;
              let tmp99 = match11[1];
              if (tmp99 == null) {
                tmp99 = match11[2];
              }
              let parsed = null;
              if (null != query) {
                const tmp4Result23 = _mod5642;
                parsed = tmp4Result23.parse(query);
              }
              if (typeof match11[3] === "string") {
                items = [match11[3]];
                const tmp4Result24 = storefrontCodedLink2;
                result1 = tmp4Result24.normalizeStorefrontSkuIds(items);
              } else {
                let skuIds;
                if (parsed != null) {
                  skuIds = parsed.skuIds;
                }
                if (typeof skuIds === "string") {
                  const tmp4Result25 = storefrontCodedLink2;
                  result1 = tmp4Result25.normalizeStorefrontSkuIds(skuIds.split(","));
                } else {
                  const _Array = Array;
                  if (Array.isArray(skuIds)) {
                    const tmp4Result26 = storefrontCodedLink2;
                    result1 = tmp4Result26.normalizeStorefrontSkuIds(skuIds.flatMap(f89504));
                  } else {
                    result1 = [];
                  }
                }
              }
              if (result1.length > 0) {
                const SOCIAL_LAYER_STOREFRONT = CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT;
                const tmp4Result27 = storefrontCodedLink2;
                const storefrontCodedLink = tmp4Result27.makeStorefrontCodedLink(result1, tmp99);
                if (!set.has(storefrontCodedLink)) {
                  set.add(storefrontCodedLink);
                  const obj33 = { type: SOCIAL_LAYER_STOREFRONT, code: storefrontCodedLink, url: iter };
                  items.push(obj33);
                }
              }
            }
            const str12 = getPathsFromURL(iter).primaryHostRemainingPath;
            let match12;
            if (str12 != null) {
              match12 = str12.match(closure_2_15);
            }
            let tmp109;
            if (match12 != null) {
              tmp109 = match12[1];
            }
            if (tmp109 == null) {
              tmp109 = null;
            }
            if (null != tmp109) {
              const QUESTS_EMBED = CodedLink.CodedLinkType.QUESTS_EMBED;
              if (!set.has(tmp109)) {
                set.add(tmp109);
                const obj34 = { type: QUESTS_EMBED, code: tmp109, url: iter };
                items.push(obj34);
              }
            }
            let match13;
            if (primaryHostRemainingPath != null) {
              match13 = primaryHostRemainingPath.match(closure_2_18);
            }
            if (null != match13) {
              const GAME_PROFILE = CodedLink.CodedLinkType.GAME_PROFILE;
              if (!set.has(match13[1])) {
                set.add(match13[1]);
                const obj36 = { type: GAME_PROFILE, code: match13[1], url: iter };
                items.push(obj36);
              }
            }
            let match14;
            if (primaryHostRemainingPath != null) {
              match14 = primaryHostRemainingPath.match(closure_2_16);
            }
            if (null != match14) {
              const GAME_SERVER_SHARE = CodedLink.CodedLinkType.GAME_SERVER_SHARE;
              if (!set.has(match14[1])) {
                set.add(match14[1]);
                const obj38 = { type: GAME_SERVER_SHARE, code: match14[1], url: iter };
                items.push(obj38);
              }
            }
            let match15;
            if (primaryHostRemainingPath != null) {
              match15 = primaryHostRemainingPath.match(closure_2_17);
            }
            if (null != match15) {
              const GAME_ORGANIZATION_INVITE = CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE;
              if (!set.has(match15[1])) {
                set.add(match15[1]);
                const obj40 = { type: GAME_ORGANIZATION_INVITE, code: match15[1], url: iter };
                items.push(obj40);
              }
            }
            let match16;
            if (primaryHostRemainingPath != null) {
              match16 = primaryHostRemainingPath.match(closure_2_19);
            }
            if (null != match16) {
              const USER_PROFILE = CodedLink.CodedLinkType.USER_PROFILE;
              if (!set.has(match16[1])) {
                set.add(match16[1]);
                const obj42 = { type: USER_PROFILE, code: match16[1], url: iter };
                items.push(obj42);
              }
            }
            if ("/shop" === primaryHostRemainingPath) {
              let applicationId;
              let parsed1 = null;
              if (null != query) {
                const tmp4Result28 = _mod5642;
                parsed1 = tmp4Result28.parse(query);
              }
              let str14;
              if (parsed1 != null) {
                str14 = parsed1.tab;
              }
              if (parsed1 != null) {
                applicationId = parsed1.applicationId;
              }
              if (str14 === constants.GAME_SHOPS) {
                let items2;
                if (typeof applicationId === "string") {
                  let result2;
                  let skuId;
                  if (parsed1 != null) {
                    skuId = parsed1.skuId;
                  }
                  if (typeof skuId === "string") {
                    const items1 = [skuId];
                    const tmp4Result29 = storefrontCodedLink2;
                    result2 = tmp4Result29.normalizeStorefrontSkuIds(items1);
                  } else {
                    let skuIds1;
                    if (parsed1 != null) {
                      skuIds1 = parsed1.skuIds;
                    }
                    if (typeof skuIds1 === "string") {
                      const tmp4Result30 = storefrontCodedLink2;
                      result2 = tmp4Result30.normalizeStorefrontSkuIds(skuIds1.split(","));
                    } else {
                      const _Array2 = Array;
                      if (Array.isArray(skuIds1)) {
                        const tmp4Result31 = storefrontCodedLink2;
                        result2 = tmp4Result31.normalizeStorefrontSkuIds(skuIds1.flatMap(f89504));
                      } else {
                        result2 = [];
                      }
                    }
                  }
                  items2 = result2;
                }
                if (typeof applicationId === "string") {
                  if (items2.length > 0) {
                    const SOCIAL_LAYER_STOREFRONT_APP = CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP;
                    const tmp4Result32 = storefrontCodedLink2;
                    const storefrontCodedLink1 = tmp4Result32.makeStorefrontCodedLink(items2, applicationId);
                    if (!set.has(storefrontCodedLink1)) {
                      set.add(storefrontCodedLink1);
                      const obj43 = { type: SOCIAL_LAYER_STOREFRONT_APP, code: storefrontCodedLink1, url: iter };
                      items.push(obj43);
                    }
                  }
                }
                let match17;
                if (url.hash != null) {
                  match17 = str16.match(closure_2_21);
                }
                const COLLECTIBLES_SHOP = CodedLink.CodedLinkType.COLLECTIBLES_SHOP;
                if (str14 == null) {
                  str14 = "";
                }
                let str17;
                if (match17 != null) {
                  str17 = match17[1];
                }
                if (str17 == null) {
                  str17 = "";
                }
                const _HermesInternal3 = HermesInternal;
                const combined2 = "" + str14 + "-" + str17;
                if (!set.has(combined2)) {
                  set.add(combined2);
                  const obj44 = { type: COLLECTIBLES_SHOP, code: combined2, url: iter };
                  items.push(obj44);
                }
              }
              items2 = [];
            }
          }
        }
        return 0;
      }
      const iter = arg0[Symbol.iterator]();
      while (iter !== undefined) {
        let _loopResult = _loop(iter.next());
        continue;
      }
      return items;
    }
  }
  return [];
};
function getPathsFromURL(target) {
  let tmp12;
  let tmp2;
  let tmp7;
  const url = parseURLSafely(target);
  if (null != url) {
    if (null != url.pathname) {
      obj = { url, inviteHostRemainingPath: tmp2, templateHostRemainingPath: tmp7, primaryHostRemainingPath: tmp12 };
      let replaced;
      if (url.host != null) {
        replaced = str31.replace(/^www[.]/i, "");
      }
      tmp2 = null;
      if (replaced === obj.host) {
        let str2 = url.pathname;
        if (str2 == null) {
          str2 = "";
        }
        let str3 = tmp31.pathPrefix;
        if (str3 == null) {
          str3 = "";
        }
        tmp2 = null;
        if (str2.startsWith(str3)) {
          const substr = str2.substring(str3.length);
          let tmp4 = null;
          if ("" !== substr) {
            tmp4 = substr;
          }
          tmp2 = tmp4;
        }
      }
      let replaced1;
      if (url.host != null) {
        replaced1 = str5.replace(/^www[.]/i, "");
      }
      tmp7 = null;
      if (replaced1 === obj4.host) {
        let str7 = url.pathname;
        if (str7 == null) {
          str7 = "";
        }
        let str8 = obj4.pathPrefix;
        if (str8 == null) {
          str8 = "";
        }
        tmp7 = null;
        if (str7.startsWith(str8)) {
          const substr1 = str7.substring(str8.length);
          let tmp9 = null;
          if ("" !== substr1) {
            tmp9 = substr1;
          }
          tmp7 = tmp9;
        }
      }
      let replaced2;
      if (url.host != null) {
        replaced2 = str10.replace(/^www[.]/i, "");
      }
      tmp12 = null;
      if (replaced2 === obj7.host) {
        let str12 = url.pathname;
        if (str12 == null) {
          str12 = "";
        }
        let str13 = obj7.pathPrefix;
        if (str13 == null) {
          str13 = "";
        }
        tmp12 = null;
        if (str12.startsWith(str13)) {
          const substr2 = str12.substring(str13.length);
          let tmp14 = null;
          if ("" !== substr2) {
            tmp14 = substr2;
          }
          tmp12 = tmp14;
        }
      }
      if (tmp12 == null) {
        let replaced3;
        if (url.host != null) {
          replaced3 = str32.replace(/^www[.]/i, "");
        }
        let tmp16 = null;
        if (replaced3 === obj10.host) {
          let str16 = url.pathname;
          if (str16 == null) {
            str16 = "";
          }
          let str17 = obj10.pathPrefix;
          if (str17 == null) {
            str17 = "";
          }
          tmp16 = null;
          if (str16.startsWith(str17)) {
            const substr3 = str16.substring(str17.length);
            let tmp18 = null;
            if ("" !== substr3) {
              tmp18 = substr3;
            }
            tmp16 = tmp18;
          }
        }
        tmp12 = tmp16;
      }
      if (tmp12 == null) {
        let replaced4;
        if (url.host != null) {
          replaced4 = str33.replace(/^www[.]/i, "");
        }
        let tmp20 = null;
        if (replaced4 === obj13.host) {
          let str20 = url.pathname;
          if (str20 == null) {
            str20 = "";
          }
          let str21 = obj13.pathPrefix;
          if (str21 == null) {
            str21 = "";
          }
          tmp20 = null;
          if (str20.startsWith(str21)) {
            const substr4 = str20.substring(str21.length);
            let tmp22 = null;
            if ("" !== substr4) {
              tmp22 = substr4;
            }
            tmp20 = tmp22;
          }
        }
        tmp12 = tmp20;
      }
      if (tmp12 == null) {
        let replaced5;
        if (url.host != null) {
          replaced5 = str34.replace(/^www[.]/i, "");
        }
        let tmp24 = null;
        if (replaced5 === obj17.host) {
          let str24 = url.pathname;
          if (str24 == null) {
            str24 = "";
          }
          let str25 = obj17.pathPrefix;
          if (str25 == null) {
            str25 = "";
          }
          tmp24 = null;
          if (str24.startsWith(str25)) {
            const substr5 = str24.substring(str25.length);
            let tmp26 = null;
            if ("" !== substr5) {
              tmp26 = substr5;
            }
            tmp24 = tmp26;
          }
        }
        tmp12 = tmp24;
      }
      if (tmp12 == null) {
        let replaced6;
        if (url.host != null) {
          replaced6 = str35.replace(/^www[.]/i, "");
        }
        let tmp28 = null;
        if (replaced6 === obj20.host) {
          let str28 = url.pathname;
          if (str28 == null) {
            str28 = "";
          }
          let str29 = obj20.pathPrefix;
          if (str29 == null) {
            str29 = "";
          }
          tmp28 = null;
          if (str28.startsWith(str29)) {
            const substr6 = str28.substring(str29.length);
            let tmp30 = null;
            if ("" !== substr6) {
              tmp30 = substr6;
            }
            tmp28 = tmp30;
          }
        }
        tmp12 = tmp28;
      }
    }
    return obj;
  }
  obj = { url: null, inviteHostRemainingPath: null, templateHostRemainingPath: null, primaryHostRemainingPath: null };
}
function parseURLSafely(url) {
  try {
    obj = urlParse;
    return obj.parse(url);
  } catch (err) {
    return null;
  }
}
const PRIMARY_DOMAIN = Constants.PRIMARY_DOMAIN;
const CollectibleShopTab = CollectiblesShopConstants.CollectibleShopTab;
const re5 = /^\/([a-zA-Z0-9-]+)$/;
const re6 = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/;
const re7 = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/;
const regExp = new RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?");
const re9 = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/;
const re10 = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/;
const re11 = /^\/activities\/([0-9-]+)\/?$/;
const re12 = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/;
const re13 = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))(?:\/([0-9]+)(?:\/([^\/]+))?)?\/?$/;
const re14 = /^\/channels\/([0-9]+)\/shop$/;
const re15 = /^\/quests\/([0-9-]+)\/?$/;
const re16 = /^\/game-servers\/share\/([A-Za-z0-9_-]+)$/;
const re17 = /^\/game-organizations\/invite\/([A-Za-z0-9_-]+)\/?$/;
const re18 = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/;
const re19 = /^\/users\/([0-9]+)\/?$/;
const re20 = /^\/oauth2\/authorize/;
const re21 = /^#itemSkuId=([0-9]+)$/;
let tmp3 = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i;
const re22 = tmp3;
if (null == INVITE_HOST) {
  obj = { host: null, pathPrefix: null };
} else {
  let str = "/";
  let num = 0;
  if (INVITE_HOST.indexOf("/") >= 0) {
    const _module = urlParse;
    let flag = true;
    let parsed = _module.parse(INVITE_HOST, undefined, true);
    const obj2 = { host: null, pathPrefix: null };
    ({ host: obj3.host, pathname: obj3.pathPrefix } = parsed);
    obj = obj2;
  } else {
    obj = { host: INVITE_HOST, pathPrefix: null };
  }
}
if (null == GUILD_TEMPLATE_HOST) {
  obj4 = { host: null, pathPrefix: null };
} else {
  let str2 = "/";
  if (GUILD_TEMPLATE_HOST.indexOf("/") >= 0) {
    const _module1 = urlParse;
    let parsed1 = _module1.parse(GUILD_TEMPLATE_HOST, undefined, true);
    const obj5 = { host: null, pathPrefix: null };
    ({ host: obj6.host, pathname: obj6.pathPrefix } = parsed1);
    obj4 = obj5;
  } else {
    obj4 = { host: GUILD_TEMPLATE_HOST, pathPrefix: null };
  }
}
if (WEBAPP_ENDPOINT == null) {
  let _HermesInternal = HermesInternal;
  let str3 = "//canary.";
  WEBAPP_ENDPOINT = "//canary." + PRIMARY_DOMAIN;
}
if (null == WEBAPP_ENDPOINT) {
  obj7 = { host: null, pathPrefix: null };
} else {
  let str4 = "/";
  if (WEBAPP_ENDPOINT.indexOf("/") >= 0) {
    const _module2 = urlParse;
    const parsed2 = _module2.parse(WEBAPP_ENDPOINT, undefined, true);
    const obj8 = { host: null, pathPrefix: null };
    ({ host: obj9.host, pathname: obj9.pathPrefix } = parsed2);
    obj7 = obj8;
  } else {
    obj7 = { host: WEBAPP_ENDPOINT, pathPrefix: null };
  }
}
let combined = "//canary." + PRIMARY_DOMAIN;
if (null == combined) {
  let obj10 = { host: null, pathPrefix: null };
} else {
  const str5 = "/";
  if (combined.indexOf("/") >= 0) {
    const _module3 = urlParse;
    const parsed3 = _module3.parse(combined, undefined, true);
    let obj11 = { host: null, pathPrefix: null };
    ({ host: obj12.host, pathname: obj12.pathPrefix } = parsed3);
    obj10 = obj11;
  } else {
    obj10 = { host: combined, pathPrefix: null };
  }
}
let combined1 = "//ptb." + PRIMARY_DOMAIN;
if (null == combined1) {
  let obj13 = { host: null, pathPrefix: null };
} else {
  const str6 = "/";
  if (combined1.indexOf("/") >= 0) {
    const _module4 = urlParse;
    const parsed4 = _module4.parse(combined1, undefined, true);
    const obj14 = { host: null, pathPrefix: null };
    ({ host: obj15.host, pathname: obj15.pathPrefix } = parsed4);
    obj13 = obj14;
  } else {
    obj13 = { host: combined1, pathPrefix: null };
  }
}
if ("discordapp.com".indexOf("/") >= 0) {
  const _module5 = urlParse;
  const parsed5 = _module5.parse("discordapp.com", undefined, true);
  const obj16 = { host: null, pathPrefix: null };
  ({ host: obj18.host, pathname: obj18.pathPrefix } = parsed5);
  obj17 = obj16;
} else {
  obj17 = { host: "discordapp.com", pathPrefix: null };
}
if ("discord.com".indexOf("/") >= 0) {
  const _module6 = urlParse;
  const parsed6 = _module6.parse("discord.com", undefined, true);
  let obj19 = { host: null, pathPrefix: null };
  ({ host: obj21.host, pathname: obj21.pathPrefix } = parsed6);
  obj20 = obj19;
} else {
  obj20 = { host: "discord.com", pathPrefix: null };
}
let RegexUtils = RegexUtils_mod;
let str7 = obj.host;
const _escape = RegexUtils.escape;
if (str7 == null) {
  str7 = "";
}
let items = [_escape(str7), , , , ];
RegexUtils = RegexUtils_mod;
let str8 = obj4.host;
const _escape2 = RegexUtils.escape;
if (str8 == null) {
  str8 = "";
}
items[1] = _escape2(str8);
RegexUtils = RegexUtils_mod;
let str9 = obj7.host;
const _escape3 = RegexUtils.escape;
if (str9 == null) {
  str9 = "";
}
items[2] = _escape3(str9);
RegexUtils = RegexUtils_mod;
let str10 = obj17.host;
const _escape4 = RegexUtils.escape;
if (str10 == null) {
  str10 = "";
}
items[3] = _escape4(str10);
RegexUtils = RegexUtils_mod;
let str11 = obj20.host;
const _escape5 = RegexUtils.escape;
if (str11 == null) {
  str11 = "";
}
function findCodedLinks(str) {
  if (null == str) {
    return [];
  } else {
    str = str.replace(regExp1, f89502);
    const tmp4 = findCodedLinkUrlsDefault(str);
    let match = str.match(re22);
    const concat = tmp4.concat;
    if (match == null) {
      match = [];
    }
    const coerceLinksToCodedLinks = coerceLinksToCodedLinks2;
    const result = coerceLinksToCodedLinks(concat(match));
    return result.slice(0, 10);
  }
}
function parseQuestsEmbedCode(target) {
  const str = getPathsFromURL(target).primaryHostRemainingPath;
  let match;
  if (str != null) {
    match = str.match(re15);
  }
  let tmp3;
  if (match != null) {
    tmp3 = match[1];
  }
  if (tmp3 == null) {
    tmp3 = null;
  }
  return tmp3;
}
items[4] = _escape5(str11);
const found = items.filter(Boolean);
const regExp1 = new RegExp("((https?://[^ ]*)|^|\\s)(" + found.join("|") + ")", "g");
let result = size.fileFinishedImporting("modules/coded_links/findCodedLinks.tsx");

export default findCodedLinks;
export const DEVLINK_REGEX = tmp3;
export const remainingPathFromDiscordHostMatch = function remainingPathFromDiscordHostMatch(parseURLSafelyResult) {
  let replaced;
  if (parseURLSafelyResult.host != null) {
    replaced = str.replace(/^www[.]/i, "");
  }
  let tmp3 = null;
  if (replaced === obj7.host) {
    let str3 = parseURLSafelyResult.pathname;
    if (str3 == null) {
      str3 = "";
    }
    let str4 = obj7.pathPrefix;
    if (str4 == null) {
      str4 = "";
    }
    tmp3 = null;
    if (str3.startsWith(str4)) {
      const substr = str3.substring(str4.length);
      let tmp5 = null;
      if ("" !== substr) {
        tmp5 = substr;
      }
      tmp3 = tmp5;
    }
  }
  if (tmp3 == null) {
    let replaced1;
    if (parseURLSafelyResult.host != null) {
      replaced1 = str22.replace(/^www[.]/i, "");
    }
    let tmp7 = null;
    if (replaced1 === obj10.host) {
      let str7 = parseURLSafelyResult.pathname;
      if (str7 == null) {
        str7 = "";
      }
      let str8 = obj10.pathPrefix;
      if (str8 == null) {
        str8 = "";
      }
      tmp7 = null;
      if (str7.startsWith(str8)) {
        const substr1 = str7.substring(str8.length);
        let tmp9 = null;
        if ("" !== substr1) {
          tmp9 = substr1;
        }
        tmp7 = tmp9;
      }
    }
    tmp3 = tmp7;
  }
  if (tmp3 == null) {
    let replaced2;
    if (parseURLSafelyResult.host != null) {
      replaced2 = str23.replace(/^www[.]/i, "");
    }
    let tmp11 = null;
    if (replaced2 === obj13.host) {
      let str11 = parseURLSafelyResult.pathname;
      if (str11 == null) {
        str11 = "";
      }
      let str12 = obj13.pathPrefix;
      if (str12 == null) {
        str12 = "";
      }
      tmp11 = null;
      if (str11.startsWith(str12)) {
        const substr2 = str11.substring(str12.length);
        let tmp13 = null;
        if ("" !== substr2) {
          tmp13 = substr2;
        }
        tmp11 = tmp13;
      }
    }
    tmp3 = tmp11;
  }
  if (tmp3 == null) {
    let replaced3;
    if (parseURLSafelyResult.host != null) {
      replaced3 = str24.replace(/^www[.]/i, "");
    }
    let tmp15 = null;
    if (replaced3 === obj17.host) {
      let str15 = parseURLSafelyResult.pathname;
      if (str15 == null) {
        str15 = "";
      }
      let str16 = obj17.pathPrefix;
      if (str16 == null) {
        str16 = "";
      }
      tmp15 = null;
      if (str15.startsWith(str16)) {
        const substr3 = str15.substring(str16.length);
        let tmp17 = null;
        if ("" !== substr3) {
          tmp17 = substr3;
        }
        tmp15 = tmp17;
      }
    }
    tmp3 = tmp15;
  }
  if (tmp3 == null) {
    let replaced4;
    if (parseURLSafelyResult.host != null) {
      replaced4 = str25.replace(/^www[.]/i, "");
    }
    let tmp19 = null;
    if (replaced4 === obj20.host) {
      let str19 = parseURLSafelyResult.pathname;
      if (str19 == null) {
        str19 = "";
      }
      let str20 = obj20.pathPrefix;
      if (str20 == null) {
        str20 = "";
      }
      tmp19 = null;
      if (str19.startsWith(str20)) {
        const substr4 = str19.substring(str20.length);
        let tmp21 = null;
        if ("" !== substr4) {
          tmp21 = substr4;
        }
        tmp19 = tmp21;
      }
    }
    tmp3 = tmp19;
  }
  return tmp3;
};
export { getPathsFromURL };
export const isSuspiciousCodedLink = function isSuspiciousCodedLink(arr) {
  if (arr.includes("\\")) {
    const url = parseURLSafely(arr);
    if (null == url) {
      return false;
    } else {
      let replaced;
      if (url.host != null) {
        const str = "";
        replaced = str3.replace(/^www[.]/i, "");
      }
      if (replaced === obj.host) {
        return true;
      } else {
        const items = [obj7, obj10, obj13, obj17, obj20];
        if (items.some((host) => {
          let replaced;
          if (url.host != null) {
            replaced = str.replace(/^www[.]/i, "");
          }
          return replaced === host.host;
        })) {
          let flag;
          if (url.pathname != null) {
            const formatted = str2.toUpperCase();
            flag = formatted.includes(CodedLink.CodedLinkType.INVITE);
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        }
      }
    }
  }
  return false;
};
export { parseQuestsEmbedCode };
export const parseUserProfileEmbedCode = function parseUserProfileEmbedCode(target) {
  const str = getPathsFromURL(target).primaryHostRemainingPath;
  let match;
  if (str != null) {
    match = str.match(re19);
  }
  let tmp3;
  if (match != null) {
    tmp3 = match[1];
  }
  if (tmp3 == null) {
    tmp3 = null;
  }
  return tmp3;
};
export const parseGameServerShareCode = function parseGameServerShareCode(target) {
  const str = getPathsFromURL(target).primaryHostRemainingPath;
  let match;
  if (str != null) {
    match = str.match(re16);
  }
  let tmp3;
  if (match != null) {
    tmp3 = match[1];
  }
  if (tmp3 == null) {
    tmp3 = null;
  }
  return tmp3;
};
export { parseURLSafely };
export const findCodedLink = function findCodedLink(sanitizeUrlResult) {
  let items;
  if (null == sanitizeUrlResult) {
    items = [];
  } else {
    const str = sanitizeUrlResult.replace(regExp1, f89502);
    const tmp4 = findCodedLinkUrlsDefault(str);
    let match = str.match(re22);
    const concat = tmp4.concat;
    if (match == null) {
      match = [];
    }
    const coerceLinksToCodedLinks = coerceLinksToCodedLinks2;
    const result = coerceLinksToCodedLinks(concat(match));
    items = result.slice(0, 10);
  }
  return items[0];
};
export const containsCodedLink = function containsCodedLink(sanitizeWhitespaceResult) {
  let tmp = null != sanitizeWhitespaceResult;
  if (tmp) {
    let items;
    obj = UnicodeSanitizationUtils;
    const str = obj.sanitizeUnicodeConfusables(sanitizeWhitespaceResult);
    if (null == str) {
      items = [];
    } else {
      const str2 = str.replace(regExp1, f89502);
      const tmp6 = findCodedLinkUrlsDefault(str2);
      let match = str2.match(re22);
      const concat = tmp6.concat;
      if (match == null) {
        match = [];
      }
      const coerceLinksToCodedLinks = coerceLinksToCodedLinks2;
      let result = coerceLinksToCodedLinks(concat(match));
      items = result.slice(0, 10);
    }
    tmp = items.length > 0;
  }
  return tmp;
};