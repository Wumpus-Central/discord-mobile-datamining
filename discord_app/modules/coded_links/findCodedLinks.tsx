// === Module 4740: findCodedLinks ===

// Module 4740 (findCodedLinks)
import BuildOverrideUtils from "BuildOverrideUtils" /* 1361 */;
import Url from "Url" /* 1368 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4742 */;
import CodedLink from "CodedLink" /* 4745 */;
import findCodedLinkUrlsDefault from "findCodedLinkUrls" /* 4746 */;
import keysSorter from "keysSorter" /* 5675 */;
import storefrontMessageEmbedCodedLink from "storefrontMessageEmbedCodedLink" /* 7930 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7980 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 8138 */;
import Authorize from "Authorize" /* 9335 */;
import storefrontCodedLink2 from "storefrontCodedLink" /* 13242 */;
import InviteStore from "InviteStore" /* 4741 */;
import RegexUtils_mod from "RegexUtils" /* 4744 */;

require = fn;
function getPathsFromURL(target) {
  const url = parseURLSafely(target);
  if (null != url) {
    if (null != url.pathname) {
      obj = { url, inviteHostRemainingPath: null, templateHostRemainingPath: null, primaryHostRemainingPath: null };
      let replaced;
      if (url.host != null) {
        replaced = str31.replace(/^www[.]/i, "");
      }
      let tmp2 = null;
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
      obj.inviteHostRemainingPath = tmp2;
      let replaced1;
      if (url.host != null) {
        replaced1 = str5.replace(/^www[.]/i, "");
      }
      let tmp7 = null;
      if (replaced1 === obj7.host) {
        let str7 = url.pathname;
        if (str7 == null) {
          str7 = "";
        }
        let str8 = obj7.pathPrefix;
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
      obj.templateHostRemainingPath = tmp7;
      let replaced2;
      if (url.host != null) {
        replaced2 = str10.replace(/^www[.]/i, "");
      }
      let tmp12 = null;
      if (replaced2 === obj13.host) {
        let str12 = url.pathname;
        if (str12 == null) {
          str12 = "";
        }
        let str13 = obj13.pathPrefix;
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
        if (replaced3 === obj19.host) {
          let str16 = url.pathname;
          if (str16 == null) {
            str16 = "";
          }
          let str17 = obj19.pathPrefix;
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
        if (replaced4 === obj23.host) {
          let str20 = url.pathname;
          if (str20 == null) {
            str20 = "";
          }
          let str21 = obj23.pathPrefix;
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
        if (replaced5 === obj26.host) {
          let str24 = url.pathname;
          if (str24 == null) {
            str24 = "";
          }
          let str25 = obj26.pathPrefix;
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
        if (replaced6 === obj41.host) {
          let str28 = url.pathname;
          if (str28 == null) {
            str28 = "";
          }
          let str29 = obj41.pathPrefix;
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
      obj.primaryHostRemainingPath = tmp12;
    }
    return obj;
  }
  obj = { url: null, inviteHostRemainingPath: null, templateHostRemainingPath: null, primaryHostRemainingPath: null };
}
function parseURLSafely(url) {
  try {
    return Url.parse(url);
  } catch (err) {
    return null;
  }
}
const PRIMARY_DOMAIN = fn(1074).PRIMARY_DOMAIN;
const CollectibleShopTab = fn(1076).CollectibleShopTab;
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
const re17 = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/;
const re18 = /^\/users\/([0-9]+)\/?$/;
const re19 = /^\/oauth2\/authorize/;
const re20 = /^#itemSkuId=([0-9]+)$/;
let tmp3 = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i;
const re21 = tmp3;
if (null == INVITE_HOST) {
  let obj = { host: null, pathPrefix: null };
} else if (INVITE_HOST.indexOf("/") >= 0) {
  let parsed = fn(1368).parse(INVITE_HOST, undefined, true);
  ({ host: obj3.host, pathname: obj3.pathPrefix } = parsed);
  obj = { host: null, pathPrefix: null };
  const obj2 = fn(1368);
  let obj4 = { host: null, pathPrefix: null };
} else {
  obj = { host: INVITE_HOST, pathPrefix: null };
}
if (null == GUILD_TEMPLATE_HOST) {
  let obj7 = { host: null, pathPrefix: null };
} else if (GUILD_TEMPLATE_HOST.indexOf("/") >= 0) {
  let parsed1 = fn(1368).parse(GUILD_TEMPLATE_HOST, undefined, true);
  ({ host: obj6.host, pathname: obj6.pathPrefix } = parsed1);
  obj7 = { host: null, pathPrefix: null };
  let obj10 = { host: null, pathPrefix: null };
  const obj5 = fn(1368);
} else {
  obj7 = { host: GUILD_TEMPLATE_HOST, pathPrefix: null };
}
if (WEBAPP_ENDPOINT == null) {
  let _HermesInternal = HermesInternal;
  WEBAPP_ENDPOINT = "//canary." + PRIMARY_DOMAIN;
}
if (null == WEBAPP_ENDPOINT) {
  let obj13 = { host: null, pathPrefix: null };
} else if (WEBAPP_ENDPOINT.indexOf("/") >= 0) {
  const parsed2 = fn(1368).parse(WEBAPP_ENDPOINT, undefined, true);
  ({ host: obj9.host, pathname: obj9.pathPrefix } = parsed2);
  obj13 = { host: null, pathPrefix: null };
  const obj16 = { host: null, pathPrefix: null };
  const obj8 = fn(1368);
} else {
  obj13 = { host: WEBAPP_ENDPOINT, pathPrefix: null };
}
let combined = "//canary." + PRIMARY_DOMAIN;
if (null == combined) {
  let obj19 = { host: null, pathPrefix: null };
} else if (combined.indexOf("/") >= 0) {
  const parsed3 = fn(1368).parse(combined, undefined, true);
  ({ host: obj12.host, pathname: obj12.pathPrefix } = parsed3);
  obj19 = { host: null, pathPrefix: null };
  let obj11 = fn(1368);
  let obj22 = { host: null, pathPrefix: null };
} else {
  obj19 = { host: combined, pathPrefix: null };
}
let combined1 = "//ptb." + PRIMARY_DOMAIN;
if (null == combined1) {
  let obj23 = { host: null, pathPrefix: null };
} else if (combined1.indexOf("/") >= 0) {
  const parsed4 = fn(1368).parse(combined1, undefined, true);
  ({ host: obj15.host, pathname: obj15.pathPrefix } = parsed4);
  obj23 = { host: null, pathPrefix: null };
  const obj14 = fn(1368);
  let obj24 = { host: null, pathPrefix: null };
} else {
  obj23 = { host: combined1, pathPrefix: null };
}
if ("discordapp.com".indexOf("/") >= 0) {
  const parsed5 = fn(1368).parse("discordapp.com", undefined, true);
  ({ host: obj18.host, pathname: obj18.pathPrefix } = parsed5);
  let obj26 = { host: null, pathPrefix: null };
  let obj17 = fn(1368);
  let obj25 = { host: null, pathPrefix: null };
} else {
  obj26 = { host: "discordapp.com", pathPrefix: null };
}
if ("discord.com".indexOf("/") >= 0) {
  const parsed6 = fn(1368).parse("discord.com", undefined, true);
  ({ host: obj21.host, pathname: obj21.pathPrefix } = parsed6);
  let obj41 = { host: null, pathPrefix: null };
  let obj20 = fn(1368);
  let obj27 = { host: null, pathPrefix: null };
} else {
  obj41 = { host: "discord.com", pathPrefix: null };
}
let RegexUtils = RegexUtils_mod;
let str7 = obj.host;
if (str7 == null) {
  str7 = "";
}
let items = [RegexUtils.escape(str7), , , , ];
let RegexUtils = RegexUtils_mod;
let str8 = obj7.host;
if (str8 == null) {
  str8 = "";
}
items[1] = RegexUtils.escape(str8);
let RegexUtils = RegexUtils_mod;
let str9 = obj13.host;
if (str9 == null) {
  str9 = "";
}
items[2] = RegexUtils.escape(str9);
let RegexUtils = RegexUtils_mod;
let str10 = obj26.host;
if (str10 == null) {
  str10 = "";
}
items[3] = RegexUtils.escape(str10);
let RegexUtils = RegexUtils_mod;
let str11 = obj41.host;
if (str11 == null) {
  str11 = "";
}
function findCodedLinks(str) {
  if (null == str) {
    return [];
  } else {
    str = str.replace(regExp1, (arg0, arg1, arg2, arg3) => {
      let combined = arg0;
      if (null == arg2) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg1 + "http://" + arg3;
      }
      return combined;
    });
    let match = str.match(re21);
    if (match == null) {
      match = [];
    }
    function coerceLinksToCodedLinks(arg0) {
      if (null != arg0) {
        if (0 !== arg0.length) {
          const _Set = Set;
          const set = new Set();
          let items = [];
          function _loop(iter) {
            ({ url, inviteHostRemainingPath, templateHostRemainingPath, primaryHostRemainingPath } = getPathsFromURL(iter));
            if (null != url) {
              if (null != url.pathname) {
                let query = null;
                if (null != url.query) {
                  query = null;
                  if (url.query.length <= 1000) {
                    query = url.query;
                  }
                }
                if (obj.isBuildOverrideLink(iter)) {
                  if (!set.has(iter)) {
                    set.add(iter);
                    const obj3 = { type: CodedLink.CodedLinkType.BUILD_OVERRIDE, code: iter, url: iter };
                    items.push(obj3);
                  }
                }
                obj = BuildOverrideUtils;
                if (tmp4Result.isManualBuildOverrideLink(iter)) {
                  if (!set.has(iter)) {
                    set.add(iter);
                    const obj4 = { type: CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE, code: iter, url: iter };
                    items.push(obj4);
                  }
                }
                tmp4Result = BuildOverrideUtils;
                if (tmp4Result17.isExperimentEmbedURL(iter)) {
                  if (!set.has(iter)) {
                    set.add(iter);
                    const obj6 = { type: CodedLink.CodedLinkType.EXPERIMENT, code: iter, url: iter };
                    items.push(obj6);
                  }
                }
                let match;
                if (inviteHostRemainingPath != null) {
                  match = inviteHostRemainingPath.match(closure_2_5);
                }
                if (null != match) {
                  if ("https:" === url.protocol) {
                    const inviteKeyFromUrlParams = InviteCodeUtils.generateInviteKeyFromUrlParams(inviteHostRemainingPath.substring(1), url.search);
                    invite = invite.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (tmp4Result19.isEmbeddedApplicationInvite(invite)) {
                        if (!set.has(inviteKeyFromUrlParams)) {
                          set.add(inviteKeyFromUrlParams);
                          obj7 = { type: CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE, code: inviteKeyFromUrlParams, url: iter };
                          items.push(obj7);
                        }
                      }
                      tmp4Result19 = InviteTypeUtils;
                    }
                    if (iter.includes("\\")) {
                      return 0;
                    } else if (!set.has(inviteKeyFromUrlParams)) {
                      set.add(inviteKeyFromUrlParams);
                      const obj9 = { type: CodedLink.CodedLinkType.INVITE, code: inviteKeyFromUrlParams, url: iter };
                      items.push(obj9);
                    }
                    const tmp4Result18 = InviteCodeUtils;
                  }
                }
                let match1;
                if (templateHostRemainingPath != null) {
                  match1 = templateHostRemainingPath.match(closure_2_5);
                }
                if (null != match1) {
                  const substr = templateHostRemainingPath.substring(1);
                  if (!set.has(substr)) {
                    set.add(substr);
                    const obj10 = { type: CodedLink.CodedLinkType.TEMPLATE, code: substr, url: iter };
                    items.push(obj10);
                  }
                }
                let match2;
                if (primaryHostRemainingPath != null) {
                  match2 = primaryHostRemainingPath.match(closure_2_7);
                }
                if (null != match2) {
                  const formatted = match2[1].toUpperCase();
                  if (formatted === CodedLink.CodedLinkType.INVITE) {
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      const inviteKeyFromUrlParams1 = InviteCodeUtils.generateInviteKeyFromUrlParams(match2[2], url.search);
                      if (!set.has(inviteKeyFromUrlParams1)) {
                        set.add(inviteKeyFromUrlParams1);
                        const obj11 = { type: CodedLink.CodedLinkType.INVITE, code: inviteKeyFromUrlParams1, url: iter };
                        items.push(obj11);
                      }
                      const tmp4Result20 = InviteCodeUtils;
                    }
                  } else if (!set.has(match2[2])) {
                    set.add(tmp34);
                    obj13 = { type: formatted, code: tmp34, url: iter };
                    items.push(obj13);
                  }
                }
                let match3;
                if (primaryHostRemainingPath != null) {
                  match3 = primaryHostRemainingPath.match(closure_2_6);
                }
                if (null != match3) {
                  const replaced = primaryHostRemainingPath.replace("/channels/", "");
                  if (!set.has(replaced)) {
                    set.add(replaced);
                    const obj15 = { type: CodedLink.CodedLinkType.CHANNEL_LINK, code: replaced, url: iter };
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
                        const obj17 = { guildId: match4[1], guildEventId: tmp50, recurrenceId: match4[4] };
                        tmp51 = obj17;
                      }
                      tmp48 = tmp51;
                    }
                  }
                }
                if (null != tmp48) {
                  const _HermesInternal4 = HermesInternal;
                  let str7 = "";
                  const combined = "" + tmp48.guildId + "-" + tmp48.guildEventId;
                  if (null != tmp48.recurrenceId) {
                    const _HermesInternal = HermesInternal;
                    str7 = "-" + tmp48.recurrenceId;
                  }
                  const sum = combined + str7;
                  if (!set.has(sum)) {
                    set.add(sum);
                    obj19 = { type: CodedLink.CodedLinkType.EVENT, code: sum, url: iter };
                    items.push(obj19);
                  }
                }
                let match5;
                if (primaryHostRemainingPath != null) {
                  match5 = primaryHostRemainingPath.match(closure_2_19);
                }
                if (null != match5) {
                  if (null != query) {
                    const result = Authorize.parseOAuth2AuthorizeProps(query);
                    const clientId = result.clientId;
                    let tmp58 = null == clientId;
                    if (!tmp58) {
                      tmp58 = "" === clientId;
                    }
                    if (!tmp58) {
                      const scopes = result.scopes;
                      let someResult;
                      if (scopes != null) {
                        someResult = scopes.some((item) => item !== set(closure_1_2[12]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                      }
                      tmp58 = someResult;
                    }
                    if (!tmp58) {
                      if (!set.has(clientId)) {
                        set.add(clientId);
                        const obj20 = { type: CodedLink.CodedLinkType.APP_OAUTH2_LINK, code: clientId, url: iter };
                        items.push(obj20);
                      }
                    }
                    const tmp4Result21 = Authorize;
                  }
                }
                let match6;
                if (primaryHostRemainingPath != null) {
                  match6 = primaryHostRemainingPath.match(closure_2_9);
                }
                if (null != match6) {
                  if (!set.has(match6[2])) {
                    set.add(tmp65);
                    const obj22 = { type: CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE, code: tmp65, url: iter };
                    items.push(obj22);
                  }
                }
                let match7;
                if (primaryHostRemainingPath != null) {
                  match7 = primaryHostRemainingPath.match(closure_2_10);
                }
                if (null != match7) {
                  if (null != match7[3]) {
                    const storefrontSKUCodedLink = storefrontMessageEmbedCodedLink.makeStorefrontSKUCodedLink(tmp152, tmp153);
                    if (!set.has(storefrontSKUCodedLink)) {
                      set.add(storefrontSKUCodedLink);
                      const obj24 = { type: CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, code: storefrontSKUCodedLink, url: iter };
                      items.push(obj24);
                    }
                    const tmp4Result22 = storefrontMessageEmbedCodedLink;
                  } else if (!set.has(tmp152)) {
                    set.add(tmp152);
                    const obj25 = { type: CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT, code: tmp152, url: iter };
                    items.push(obj25);
                  }
                }
                let match8;
                if (primaryHostRemainingPath != null) {
                  match8 = primaryHostRemainingPath.match(closure_2_11);
                }
                if (null != match8) {
                  if (!set.has(match8[1])) {
                    set.add(tmp80);
                    const obj27 = { type: CodedLink.CodedLinkType.ACTIVITY_BOOKMARK, code: tmp80, url: iter };
                    items.push(obj27);
                  }
                }
                let match9;
                if (primaryHostRemainingPath != null) {
                  match9 = primaryHostRemainingPath.match(closure_2_12);
                }
                if (null != match9) {
                  const _HermesInternal2 = HermesInternal;
                  const combined1 = "" + match9[1] + "-" + match9[2];
                  if (!set.has(combined1)) {
                    set.add(combined1);
                    const obj29 = { type: CodedLink.CodedLinkType.GUILD_PRODUCT, code: combined1, url: iter };
                    items.push(obj29);
                  }
                }
                let match10;
                if (primaryHostRemainingPath != null) {
                  match10 = primaryHostRemainingPath.match(closure_2_14);
                }
                if (null != match10) {
                  if (!set.has(match10[1])) {
                    set.add(tmp93);
                    const obj31 = { type: CodedLink.CodedLinkType.SERVER_SHOP, code: tmp93, url: iter };
                    items.push(obj31);
                  }
                }
                let match11;
                if (primaryHostRemainingPath != null) {
                  match11 = primaryHostRemainingPath.match(closure_2_13);
                }
                if (null != match11) {
                  let tmp99 = match11[1];
                  if (tmp99 == null) {
                    tmp99 = match11[2];
                  }
                  let parsed = null;
                  if (null != query) {
                    parsed = keysSorter.parse(query);
                    const tmp4Result23 = keysSorter;
                  }
                  if (typeof match11[3] === "string") {
                    items = [tmp100];
                    let result1 = storefrontCodedLink2.normalizeStorefrontSkuIds(items);
                    const tmp4Result24 = storefrontCodedLink2;
                  } else {
                    let skuIds;
                    if (parsed != null) {
                      skuIds = parsed.skuIds;
                    }
                    if (typeof skuIds === "string") {
                      result1 = storefrontCodedLink2.normalizeStorefrontSkuIds(skuIds.split(","));
                      const tmp4Result25 = storefrontCodedLink2;
                    } else {
                      const _Array = Array;
                      if (Array.isArray(skuIds)) {
                        result1 = storefrontCodedLink2.normalizeStorefrontSkuIds(skuIds.flatMap((item) => {
                          if (typeof item === "string") {
                            let parts = item.split(",");
                          } else {
                            parts = [];
                          }
                          return parts;
                        }));
                        const tmp4Result26 = storefrontCodedLink2;
                      } else {
                        result1 = [];
                      }
                    }
                  }
                  if (result1.length > 0) {
                    const storefrontCodedLink = storefrontCodedLink2.makeStorefrontCodedLink(result1, tmp99);
                    if (!set.has(storefrontCodedLink)) {
                      set.add(storefrontCodedLink);
                      const obj33 = { type: CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT, code: storefrontCodedLink, url: iter };
                      items.push(obj33);
                    }
                    const tmp4Result27 = storefrontCodedLink2;
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
                  if (!set.has(tmp109)) {
                    set.add(tmp109);
                    const obj34 = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: tmp109, url: iter };
                    items.push(obj34);
                  }
                }
                let match13;
                if (primaryHostRemainingPath != null) {
                  match13 = primaryHostRemainingPath.match(closure_2_17);
                }
                if (null != match13) {
                  if (!set.has(match13[1])) {
                    set.add(tmp115);
                    const obj36 = { type: CodedLink.CodedLinkType.GAME_PROFILE, code: tmp115, url: iter };
                    items.push(obj36);
                  }
                }
                let match14;
                if (primaryHostRemainingPath != null) {
                  match14 = primaryHostRemainingPath.match(closure_2_16);
                }
                if (null != match14) {
                  if (!set.has(match14[1])) {
                    set.add(tmp121);
                    const obj38 = { type: CodedLink.CodedLinkType.GAME_SERVER_SHARE, code: tmp121, url: iter };
                    items.push(obj38);
                  }
                }
                let match15;
                if (primaryHostRemainingPath != null) {
                  match15 = primaryHostRemainingPath.match(closure_2_18);
                }
                if (null != match15) {
                  if (!set.has(match15[1])) {
                    set.add(tmp127);
                    const obj40 = { type: CodedLink.CodedLinkType.USER_PROFILE, code: tmp127, url: iter };
                    items.push(obj40);
                  }
                }
                if ("/shop" === primaryHostRemainingPath) {
                  let parsed1 = null;
                  if (null != query) {
                    parsed1 = keysSorter.parse(query);
                    const tmp4Result28 = keysSorter;
                  }
                  let str14;
                  if (parsed1 != null) {
                    str14 = parsed1.tab;
                  }
                  let applicationId;
                  if (parsed1 != null) {
                    applicationId = parsed1.applicationId;
                  }
                  if (str14 === constants.GAME_SHOPS) {
                    if (typeof applicationId === "string") {
                      let skuId;
                      if (parsed1 != null) {
                        skuId = parsed1.skuId;
                      }
                      if (typeof skuId === "string") {
                        const items1 = [skuId];
                        let result2 = storefrontCodedLink2.normalizeStorefrontSkuIds(items1);
                        const tmp4Result29 = storefrontCodedLink2;
                      } else {
                        let skuIds1;
                        if (parsed1 != null) {
                          skuIds1 = parsed1.skuIds;
                        }
                        if (typeof skuIds1 === "string") {
                          result2 = storefrontCodedLink2.normalizeStorefrontSkuIds(skuIds1.split(","));
                          const tmp4Result30 = storefrontCodedLink2;
                        } else {
                          const _Array2 = Array;
                          if (Array.isArray(skuIds1)) {
                            result2 = storefrontCodedLink2.normalizeStorefrontSkuIds(skuIds1.flatMap((item) => {
                              if (typeof item === "string") {
                                let parts = item.split(",");
                              } else {
                                parts = [];
                              }
                              return parts;
                            }));
                            const tmp4Result31 = storefrontCodedLink2;
                          } else {
                            result2 = [];
                          }
                        }
                      }
                    }
                  }
                  const items2 = [];
                  if (typeof applicationId === "string") {
                    if (items2.length > 0) {
                      const storefrontCodedLink1 = storefrontCodedLink2.makeStorefrontCodedLink(items2, applicationId);
                      if (!set.has(storefrontCodedLink1)) {
                        set.add(storefrontCodedLink1);
                        const obj42 = { type: CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP, code: storefrontCodedLink1, url: iter };
                        items.push(obj42);
                      }
                      const tmp4Result32 = storefrontCodedLink2;
                    }
                  }
                  let match16;
                  if (url.hash != null) {
                    match16 = str16.match(closure_2_20);
                  }
                  if (str14 == null) {
                    str14 = "";
                  }
                  let str17;
                  if (match16 != null) {
                    str17 = match16[1];
                  }
                  if (str17 == null) {
                    str17 = "";
                  }
                  const _HermesInternal3 = HermesInternal;
                  const combined2 = "" + str14 + "-" + str17;
                  if (!set.has(combined2)) {
                    set.add(combined2);
                    const obj43 = { type: CodedLink.CodedLinkType.COLLECTIBLES_SHOP, code: combined2, url: iter };
                    items.push(obj43);
                  }
                }
                tmp4Result17 = ExperimentEmbedUtils;
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
    }
    const result = coerceLinksToCodedLinks(findCodedLinkUrlsDefault(str).concat(match));
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
items[4] = RegexUtils.escape(str11);
const found = items.filter(Boolean);
const regExp1 = new RegExp("((https?://[^ ]*)|^|\\s)(" + found.join("|") + ")", "g");
const size = fn(2);
let result = size.fileFinishedImporting("modules/coded_links/findCodedLinks.tsx");

export default findCodedLinks;
export const DEVLINK_REGEX = tmp3;
export const remainingPathFromDiscordHostMatch = function remainingPathFromDiscordHostMatch(parseURLSafelyResult) {
  let replaced;
  if (parseURLSafelyResult.host != null) {
    replaced = str.replace(/^www[.]/i, "");
  }
  let tmp3 = null;
  if (replaced === obj13.host) {
    let str3 = parseURLSafelyResult.pathname;
    if (str3 == null) {
      str3 = "";
    }
    let str4 = obj13.pathPrefix;
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
    if (replaced1 === obj19.host) {
      let str7 = parseURLSafelyResult.pathname;
      if (str7 == null) {
        str7 = "";
      }
      let str8 = obj19.pathPrefix;
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
    if (replaced2 === obj23.host) {
      let str11 = parseURLSafelyResult.pathname;
      if (str11 == null) {
        str11 = "";
      }
      let str12 = obj23.pathPrefix;
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
    if (replaced3 === obj26.host) {
      let str15 = parseURLSafelyResult.pathname;
      if (str15 == null) {
        str15 = "";
      }
      let str16 = obj26.pathPrefix;
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
    if (replaced4 === obj41.host) {
      let str19 = parseURLSafelyResult.pathname;
      if (str19 == null) {
        str19 = "";
      }
      let str20 = obj41.pathPrefix;
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
        replaced = str3.replace(/^www[.]/i, "");
      }
      if (replaced === obj.host) {
        return true;
      } else {
        const items = [obj13, obj19, obj23, obj26, obj41];
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
    match = str.match(re18);
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
  if (null == sanitizeUrlResult) {
    let items = [];
  } else {
    const str = sanitizeUrlResult.replace(regExp1, (arg0, arg1, arg2, arg3) => {
      let combined = arg0;
      if (null == arg2) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg1 + "http://" + arg3;
      }
      return combined;
    });
    let match = str.match(re21);
    if (match == null) {
      match = [];
    }
    function coerceLinksToCodedLinks(arg0) {
      if (null != arg0) {
        if (0 !== arg0.length) {
          const _Set = Set;
          const set = new Set();
          let items = [];
          function _loop(iter) {
            ({ url, inviteHostRemainingPath, templateHostRemainingPath, primaryHostRemainingPath } = getPathsFromURL(iter));
            if (null != url) {
              if (null != url.pathname) {
                let query = null;
                if (null != url.query) {
                  query = null;
                  if (url.query.length <= 1000) {
                    query = url.query;
                  }
                }
                if (obj.isBuildOverrideLink(iter)) {
                  if (!set.has(iter)) {
                    set.add(iter);
                    const obj3 = { type: CodedLink.CodedLinkType.BUILD_OVERRIDE, code: iter, url: iter };
                    items.push(obj3);
                  }
                }
                obj = BuildOverrideUtils;
                if (tmp4Result.isManualBuildOverrideLink(iter)) {
                  if (!set.has(iter)) {
                    set.add(iter);
                    const obj4 = { type: CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE, code: iter, url: iter };
                    items.push(obj4);
                  }
                }
                tmp4Result = BuildOverrideUtils;
                if (tmp4Result17.isExperimentEmbedURL(iter)) {
                  if (!set.has(iter)) {
                    set.add(iter);
                    const obj6 = { type: CodedLink.CodedLinkType.EXPERIMENT, code: iter, url: iter };
                    items.push(obj6);
                  }
                }
                let match;
                if (inviteHostRemainingPath != null) {
                  match = inviteHostRemainingPath.match(closure_2_5);
                }
                if (null != match) {
                  if ("https:" === url.protocol) {
                    const inviteKeyFromUrlParams = InviteCodeUtils.generateInviteKeyFromUrlParams(inviteHostRemainingPath.substring(1), url.search);
                    invite = invite.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (tmp4Result19.isEmbeddedApplicationInvite(invite)) {
                        if (!set.has(inviteKeyFromUrlParams)) {
                          set.add(inviteKeyFromUrlParams);
                          obj7 = { type: CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE, code: inviteKeyFromUrlParams, url: iter };
                          items.push(obj7);
                        }
                      }
                      tmp4Result19 = InviteTypeUtils;
                    }
                    if (iter.includes("\\")) {
                      return 0;
                    } else if (!set.has(inviteKeyFromUrlParams)) {
                      set.add(inviteKeyFromUrlParams);
                      const obj9 = { type: CodedLink.CodedLinkType.INVITE, code: inviteKeyFromUrlParams, url: iter };
                      items.push(obj9);
                    }
                    const tmp4Result18 = InviteCodeUtils;
                  }
                }
                let match1;
                if (templateHostRemainingPath != null) {
                  match1 = templateHostRemainingPath.match(closure_2_5);
                }
                if (null != match1) {
                  const substr = templateHostRemainingPath.substring(1);
                  if (!set.has(substr)) {
                    set.add(substr);
                    const obj10 = { type: CodedLink.CodedLinkType.TEMPLATE, code: substr, url: iter };
                    items.push(obj10);
                  }
                }
                let match2;
                if (primaryHostRemainingPath != null) {
                  match2 = primaryHostRemainingPath.match(closure_2_7);
                }
                if (null != match2) {
                  const formatted = match2[1].toUpperCase();
                  if (formatted === CodedLink.CodedLinkType.INVITE) {
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      const inviteKeyFromUrlParams1 = InviteCodeUtils.generateInviteKeyFromUrlParams(match2[2], url.search);
                      if (!set.has(inviteKeyFromUrlParams1)) {
                        set.add(inviteKeyFromUrlParams1);
                        const obj11 = { type: CodedLink.CodedLinkType.INVITE, code: inviteKeyFromUrlParams1, url: iter };
                        items.push(obj11);
                      }
                      const tmp4Result20 = InviteCodeUtils;
                    }
                  } else if (!set.has(match2[2])) {
                    set.add(tmp34);
                    obj13 = { type: formatted, code: tmp34, url: iter };
                    items.push(obj13);
                  }
                }
                let match3;
                if (primaryHostRemainingPath != null) {
                  match3 = primaryHostRemainingPath.match(closure_2_6);
                }
                if (null != match3) {
                  const replaced = primaryHostRemainingPath.replace("/channels/", "");
                  if (!set.has(replaced)) {
                    set.add(replaced);
                    const obj15 = { type: CodedLink.CodedLinkType.CHANNEL_LINK, code: replaced, url: iter };
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
                        const obj17 = { guildId: match4[1], guildEventId: tmp50, recurrenceId: match4[4] };
                        tmp51 = obj17;
                      }
                      tmp48 = tmp51;
                    }
                  }
                }
                if (null != tmp48) {
                  const _HermesInternal4 = HermesInternal;
                  let str7 = "";
                  const combined = "" + tmp48.guildId + "-" + tmp48.guildEventId;
                  if (null != tmp48.recurrenceId) {
                    const _HermesInternal = HermesInternal;
                    str7 = "-" + tmp48.recurrenceId;
                  }
                  const sum = combined + str7;
                  if (!set.has(sum)) {
                    set.add(sum);
                    obj19 = { type: CodedLink.CodedLinkType.EVENT, code: sum, url: iter };
                    items.push(obj19);
                  }
                }
                let match5;
                if (primaryHostRemainingPath != null) {
                  match5 = primaryHostRemainingPath.match(closure_2_19);
                }
                if (null != match5) {
                  if (null != query) {
                    const result = Authorize.parseOAuth2AuthorizeProps(query);
                    const clientId = result.clientId;
                    let tmp58 = null == clientId;
                    if (!tmp58) {
                      tmp58 = "" === clientId;
                    }
                    if (!tmp58) {
                      const scopes = result.scopes;
                      let someResult;
                      if (scopes != null) {
                        someResult = scopes.some((item) => item !== set(closure_1_2[12]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                      }
                      tmp58 = someResult;
                    }
                    if (!tmp58) {
                      if (!set.has(clientId)) {
                        set.add(clientId);
                        const obj20 = { type: CodedLink.CodedLinkType.APP_OAUTH2_LINK, code: clientId, url: iter };
                        items.push(obj20);
                      }
                    }
                    const tmp4Result21 = Authorize;
                  }
                }
                let match6;
                if (primaryHostRemainingPath != null) {
                  match6 = primaryHostRemainingPath.match(closure_2_9);
                }
                if (null != match6) {
                  if (!set.has(match6[2])) {
                    set.add(tmp65);
                    const obj22 = { type: CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE, code: tmp65, url: iter };
                    items.push(obj22);
                  }
                }
                let match7;
                if (primaryHostRemainingPath != null) {
                  match7 = primaryHostRemainingPath.match(closure_2_10);
                }
                if (null != match7) {
                  if (null != match7[3]) {
                    const storefrontSKUCodedLink = storefrontMessageEmbedCodedLink.makeStorefrontSKUCodedLink(tmp152, tmp153);
                    if (!set.has(storefrontSKUCodedLink)) {
                      set.add(storefrontSKUCodedLink);
                      const obj24 = { type: CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, code: storefrontSKUCodedLink, url: iter };
                      items.push(obj24);
                    }
                    const tmp4Result22 = storefrontMessageEmbedCodedLink;
                  } else if (!set.has(tmp152)) {
                    set.add(tmp152);
                    const obj25 = { type: CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT, code: tmp152, url: iter };
                    items.push(obj25);
                  }
                }
                let match8;
                if (primaryHostRemainingPath != null) {
                  match8 = primaryHostRemainingPath.match(closure_2_11);
                }
                if (null != match8) {
                  if (!set.has(match8[1])) {
                    set.add(tmp80);
                    const obj27 = { type: CodedLink.CodedLinkType.ACTIVITY_BOOKMARK, code: tmp80, url: iter };
                    items.push(obj27);
                  }
                }
                let match9;
                if (primaryHostRemainingPath != null) {
                  match9 = primaryHostRemainingPath.match(closure_2_12);
                }
                if (null != match9) {
                  const _HermesInternal2 = HermesInternal;
                  const combined1 = "" + match9[1] + "-" + match9[2];
                  if (!set.has(combined1)) {
                    set.add(combined1);
                    const obj29 = { type: CodedLink.CodedLinkType.GUILD_PRODUCT, code: combined1, url: iter };
                    items.push(obj29);
                  }
                }
                let match10;
                if (primaryHostRemainingPath != null) {
                  match10 = primaryHostRemainingPath.match(closure_2_14);
                }
                if (null != match10) {
                  if (!set.has(match10[1])) {
                    set.add(tmp93);
                    const obj31 = { type: CodedLink.CodedLinkType.SERVER_SHOP, code: tmp93, url: iter };
                    items.push(obj31);
                  }
                }
                let match11;
                if (primaryHostRemainingPath != null) {
                  match11 = primaryHostRemainingPath.match(closure_2_13);
                }
                if (null != match11) {
                  let tmp99 = match11[1];
                  if (tmp99 == null) {
                    tmp99 = match11[2];
                  }
                  let parsed = null;
                  if (null != query) {
                    parsed = keysSorter.parse(query);
                    const tmp4Result23 = keysSorter;
                  }
                  if (typeof match11[3] === "string") {
                    items = [tmp100];
                    let result1 = storefrontCodedLink2.normalizeStorefrontSkuIds(items);
                    const tmp4Result24 = storefrontCodedLink2;
                  } else {
                    let skuIds;
                    if (parsed != null) {
                      skuIds = parsed.skuIds;
                    }
                    if (typeof skuIds === "string") {
                      result1 = storefrontCodedLink2.normalizeStorefrontSkuIds(skuIds.split(","));
                      const tmp4Result25 = storefrontCodedLink2;
                    } else {
                      const _Array = Array;
                      if (Array.isArray(skuIds)) {
                        result1 = storefrontCodedLink2.normalizeStorefrontSkuIds(skuIds.flatMap((item) => {
                          if (typeof item === "string") {
                            let parts = item.split(",");
                          } else {
                            parts = [];
                          }
                          return parts;
                        }));
                        const tmp4Result26 = storefrontCodedLink2;
                      } else {
                        result1 = [];
                      }
                    }
                  }
                  if (result1.length > 0) {
                    const storefrontCodedLink = storefrontCodedLink2.makeStorefrontCodedLink(result1, tmp99);
                    if (!set.has(storefrontCodedLink)) {
                      set.add(storefrontCodedLink);
                      const obj33 = { type: CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT, code: storefrontCodedLink, url: iter };
                      items.push(obj33);
                    }
                    const tmp4Result27 = storefrontCodedLink2;
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
                  if (!set.has(tmp109)) {
                    set.add(tmp109);
                    const obj34 = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: tmp109, url: iter };
                    items.push(obj34);
                  }
                }
                let match13;
                if (primaryHostRemainingPath != null) {
                  match13 = primaryHostRemainingPath.match(closure_2_17);
                }
                if (null != match13) {
                  if (!set.has(match13[1])) {
                    set.add(tmp115);
                    const obj36 = { type: CodedLink.CodedLinkType.GAME_PROFILE, code: tmp115, url: iter };
                    items.push(obj36);
                  }
                }
                let match14;
                if (primaryHostRemainingPath != null) {
                  match14 = primaryHostRemainingPath.match(closure_2_16);
                }
                if (null != match14) {
                  if (!set.has(match14[1])) {
                    set.add(tmp121);
                    const obj38 = { type: CodedLink.CodedLinkType.GAME_SERVER_SHARE, code: tmp121, url: iter };
                    items.push(obj38);
                  }
                }
                let match15;
                if (primaryHostRemainingPath != null) {
                  match15 = primaryHostRemainingPath.match(closure_2_18);
                }
                if (null != match15) {
                  if (!set.has(match15[1])) {
                    set.add(tmp127);
                    const obj40 = { type: CodedLink.CodedLinkType.USER_PROFILE, code: tmp127, url: iter };
                    items.push(obj40);
                  }
                }
                if ("/shop" === primaryHostRemainingPath) {
                  let parsed1 = null;
                  if (null != query) {
                    parsed1 = keysSorter.parse(query);
                    const tmp4Result28 = keysSorter;
                  }
                  let str14;
                  if (parsed1 != null) {
                    str14 = parsed1.tab;
                  }
                  let applicationId;
                  if (parsed1 != null) {
                    applicationId = parsed1.applicationId;
                  }
                  if (str14 === constants.GAME_SHOPS) {
                    if (typeof applicationId === "string") {
                      let skuId;
                      if (parsed1 != null) {
                        skuId = parsed1.skuId;
                      }
                      if (typeof skuId === "string") {
                        const items1 = [skuId];
                        let result2 = storefrontCodedLink2.normalizeStorefrontSkuIds(items1);
                        const tmp4Result29 = storefrontCodedLink2;
                      } else {
                        let skuIds1;
                        if (parsed1 != null) {
                          skuIds1 = parsed1.skuIds;
                        }
                        if (typeof skuIds1 === "string") {
                          result2 = storefrontCodedLink2.normalizeStorefrontSkuIds(skuIds1.split(","));
                          const tmp4Result30 = storefrontCodedLink2;
                        } else {
                          const _Array2 = Array;
                          if (Array.isArray(skuIds1)) {
                            result2 = storefrontCodedLink2.normalizeStorefrontSkuIds(skuIds1.flatMap((item) => {
                              if (typeof item === "string") {
                                let parts = item.split(",");
                              } else {
                                parts = [];
                              }
                              return parts;
                            }));
                            const tmp4Result31 = storefrontCodedLink2;
                          } else {
                            result2 = [];
                          }
                        }
                      }
                    }
                  }
                  const items2 = [];
                  if (typeof applicationId === "string") {
                    if (items2.length > 0) {
                      const storefrontCodedLink1 = storefrontCodedLink2.makeStorefrontCodedLink(items2, applicationId);
                      if (!set.has(storefrontCodedLink1)) {
                        set.add(storefrontCodedLink1);
                        const obj42 = { type: CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP, code: storefrontCodedLink1, url: iter };
                        items.push(obj42);
                      }
                      const tmp4Result32 = storefrontCodedLink2;
                    }
                  }
                  let match16;
                  if (url.hash != null) {
                    match16 = str16.match(closure_2_20);
                  }
                  if (str14 == null) {
                    str14 = "";
                  }
                  let str17;
                  if (match16 != null) {
                    str17 = match16[1];
                  }
                  if (str17 == null) {
                    str17 = "";
                  }
                  const _HermesInternal3 = HermesInternal;
                  const combined2 = "" + str14 + "-" + str17;
                  if (!set.has(combined2)) {
                    set.add(combined2);
                    const obj43 = { type: CodedLink.CodedLinkType.COLLECTIBLES_SHOP, code: combined2, url: iter };
                    items.push(obj43);
                  }
                }
                tmp4Result17 = ExperimentEmbedUtils;
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
    }
    let result = coerceLinksToCodedLinks(findCodedLinkUrlsDefault(str).concat(match));
    items = result.slice(0, 10);
    obj = findCodedLinkUrlsDefault(str);
  }
  return items[0];
};