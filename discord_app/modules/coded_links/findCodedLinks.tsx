// === Module 4358: trimTrailingPunctuation ===

// Module 4358 (trimTrailingPunctuation)
import Url from "Url" /* 1489 */;
import updateInvite from "updateInvite" /* 4359 */;
import { PRIMARY_DOMAIN } from "ME" /* 676 */;
import { CollectibleShopTab } from "items" /* 678 */;
import importDefaultResult from "ip" /* 1488 */;
import importDefaultResult1 from "obj132" /* 4362 */;

require = fn;
function trimTrailingPunctuation(str) {
  return str.replace(closure_23, "");
}
function getPathsFromURL(target) {
  const url = parseURLSafely(target);
  if (null != url) {
    if (null != url.pathname) {
      obj = { url: null, inviteHostRemainingPath: null, templateHostRemainingPath: null, primaryHostRemainingPath: null };
      obj[0] = url;
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
      obj[1] = tmp2;
      let replaced1;
      if (url.host != null) {
        replaced1 = str5.replace(/^www[.]/i, "");
      }
      let tmp7 = null;
      if (replaced1 === obj1.host) {
        let str7 = url.pathname;
        if (str7 == null) {
          str7 = "";
        }
        let str8 = obj1.pathPrefix;
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
      obj[2] = tmp7;
      let replaced2;
      if (url.host != null) {
        replaced2 = str10.replace(/^www[.]/i, "");
      }
      let tmp12 = null;
      if (replaced2 === obj3.host) {
        let str12 = url.pathname;
        if (str12 == null) {
          str12 = "";
        }
        let str13 = obj3.pathPrefix;
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
        if (replaced3 === obj5.host) {
          let str16 = url.pathname;
          if (str16 == null) {
            str16 = "";
          }
          let str17 = obj5.pathPrefix;
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
        if (replaced4 === obj7.host) {
          let str20 = url.pathname;
          if (str20 == null) {
            str20 = "";
          }
          let str21 = obj7.pathPrefix;
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
        if (replaced5 === obj10.host) {
          let str24 = url.pathname;
          if (str24 == null) {
            str24 = "";
          }
          let str25 = obj10.pathPrefix;
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
        if (replaced6 === obj12.host) {
          let str28 = url.pathname;
          if (str28 == null) {
            str28 = "";
          }
          let str29 = obj12.pathPrefix;
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
      obj[3] = tmp12;
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
const re4 = /^\/([a-zA-Z0-9-]+)$/;
const re5 = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/;
const re6 = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/;
const regExp = new RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?");
const re8 = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/;
const re9 = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/;
const re10 = /^\/activities\/([0-9-]+)\/?$/;
const re11 = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/;
const re12 = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/;
const re13 = /^\/channels\/([0-9]+)\/shop$/;
const re14 = /^\/quests\/([0-9-]+)\/?$/;
const re15 = /^\/game-servers\/share\/([A-Za-z0-9_-]+)$/;
const re16 = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/;
const re17 = /^\/users\/([0-9]+)\/?$/;
const re18 = /^\/oauth2\/authorize/;
const re19 = /^#itemSkuId=([0-9]+)$/;
let tmp3 = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i;
const re20 = tmp3;
const regExp1 = new RegExp("(?:(?:(?:https?:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|" + importDefaultResult.v4().source + "|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s\"()\\[\\]<>]*)?", "ig");
const re22 = /`{3,}[\s\S]*?(?:`{3,}|$)|(`{1,2})[^`]+\1(?!`)/g;
const re23 = /[.,;:?'*_~|]+$/;
if (null == INVITE_HOST) {
  let obj = { host: null, pathPrefix: null };
} else if (INVITE_HOST.indexOf("/") >= 0) {
  let obj2 = require("Url");
  let parsed = obj2.parse(INVITE_HOST, undefined, true);
  obj = { host: null, pathPrefix: null };
  ({ host: obj4[0], pathname: obj4[1] } = parsed);
} else {
  obj = { host: null, pathPrefix: null };
  obj[0] = INVITE_HOST;
}
if (null == GUILD_TEMPLATE_HOST) {
  let obj1 = { host: null, pathPrefix: null };
} else if (GUILD_TEMPLATE_HOST.indexOf("/") >= 0) {
  let obj5 = require("Url");
  const parsed1 = obj5.parse(GUILD_TEMPLATE_HOST, undefined, true);
  obj2 = { host: null, pathPrefix: null };
  ({ host: obj7[0], pathname: obj7[1] } = parsed1);
  obj1 = obj2;
} else {
  obj1 = { host: null, pathPrefix: null };
  obj1[0] = GUILD_TEMPLATE_HOST;
}
if (WEBAPP_ENDPOINT == null) {
  let _HermesInternal = HermesInternal;
  WEBAPP_ENDPOINT = "//canary." + PRIMARY_DOMAIN;
}
if (null == WEBAPP_ENDPOINT) {
  let obj3 = { host: null, pathPrefix: null };
} else if (WEBAPP_ENDPOINT.indexOf("/") >= 0) {
  let obj8 = require("Url");
  const parsed2 = obj8.parse(WEBAPP_ENDPOINT, undefined, true);
  let obj4 = { host: null, pathPrefix: null };
  ({ host: obj10[0], pathname: obj10[1] } = parsed2);
  obj3 = obj4;
} else {
  obj3 = { host: null, pathPrefix: null };
  obj3[0] = WEBAPP_ENDPOINT;
}
let combined = "//canary." + PRIMARY_DOMAIN;
if (null == combined) {
  obj5 = { host: null, pathPrefix: null };
} else if (combined.indexOf("/") >= 0) {
  let obj11 = require("Url");
  const parsed3 = obj11.parse(combined, undefined, true);
  ({ host: obj13[0], pathname: obj13[1] } = parsed3);
  obj5 = { host: null, pathPrefix: null };
} else {
  obj5 = { host: null, pathPrefix: null };
  obj5[0] = combined;
}
let combined1 = "//ptb." + PRIMARY_DOMAIN;
if (null == combined1) {
  let obj7 = { host: null, pathPrefix: null };
} else if (combined1.indexOf("/") >= 0) {
  const parsed4 = require("Url").parse(combined1, undefined, true);
  obj8 = { host: null, pathPrefix: null };
  ({ host: obj16[0], pathname: obj16[1] } = parsed4);
  obj7 = obj8;
  let obj15 = require("Url");
} else {
  obj7 = { host: null, pathPrefix: null };
  obj7[0] = combined1;
}
if ("discordapp.com".indexOf("/") >= 0) {
  const parsed5 = require("Url").parse("discordapp.com", undefined, true);
  ({ host: obj19[0], pathname: obj19[1] } = parsed5);
  let obj10 = { host: null, pathPrefix: null };
  let obj18 = require("Url");
} else {
  obj10 = { host: "discordapp.com", pathPrefix: null };
}
if ("discord.com".indexOf("/") >= 0) {
  const parsed6 = require("Url").parse("discord.com", undefined, true);
  obj11 = { host: null, pathPrefix: null };
  ({ host: obj22[0], pathname: obj22[1] } = parsed6);
  let obj12 = obj11;
  let obj21 = require("Url");
} else {
  obj12 = { host: "discord.com", pathPrefix: null };
}
let str7 = obj.host;
if (str7 == null) {
  str7 = "";
}
let items = [importDefaultResult1.escape(str7), , , , ];
let str8 = obj1.host;
if (str8 == null) {
  str8 = "";
}
items[1] = importDefaultResult1.escape(str8);
const importDefaultResult2 = importDefaultResult1;
let str9 = obj3.host;
if (str9 == null) {
  str9 = "";
}
items[2] = importDefaultResult1.escape(str9);
const importDefaultResult3 = importDefaultResult1;
let str10 = obj10.host;
if (str10 == null) {
  str10 = "";
}
items[3] = importDefaultResult1.escape(str10);
const importDefaultResult4 = importDefaultResult1;
let str11 = obj12.host;
if (str11 == null) {
  str11 = "";
}
function findCodedLinks(str) {
  if (null == str) {
    return [];
  } else {
    let mapped;
    str = str.replace(regExp2, (arg0, arg1, arg2, arg3) => {
      let combined = arg0;
      if (null == arg2) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg1 + "http://" + arg3;
      }
      return combined;
    });
    const match = str.replaceAll(closure_22, " ").match(regExp1);
    if (match != null) {
      mapped = match.map(trimTrailingPunctuation);
    }
    if (mapped == null) {
      mapped = null;
    }
    let match1 = str.match(closure_20);
    if (mapped == null) {
      mapped = [];
    }
    if (match1 == null) {
      match1 = [];
    }
    function coerceLinksToCodedLinks(arg0) {
      if (null != arg0) {
        if (0 !== arg0.length) {
          const _Set = Set;
          const set = new Set();
          const items = [];
          function _loop(iter) {
            ({ url, inviteHostRemainingPath, templateHostRemainingPath, primaryHostRemainingPath } = closure_1_33(iter));
            if (null != url) {
              if (null != url.pathname) {
                let query = null;
                if (null != url.query) {
                  query = null;
                  if (url.query.length <= 1000) {
                    query = url.query;
                  }
                }
                obj = set(items[7]);
                if (obj.isBuildOverrideLink(iter)) {
                  obj1 = set;
                  if (!set.has(iter)) {
                    obj1.add(iter);
                    obj = { type: null, code: null, url: null };
                    obj[0] = set(items[6]).CodedLinkType.BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                let tmp4Result = set(items[7]);
                if (tmp4Result.isManualBuildOverrideLink(iter)) {
                  let obj4 = set;
                  if (!set.has(iter)) {
                    obj4.add(iter);
                    obj = { type: null, code: null, url: null };
                    obj[0] = set(items[6]).CodedLinkType.MANUAL_BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                tmp4Result = set(items[8]);
                if (tmp4Result.isExperimentEmbedURL(iter)) {
                  obj7 = set;
                  if (!set.has(iter)) {
                    obj7.add(iter);
                    obj1 = { type: null, code: null, url: null };
                    obj1[0] = set(items[6]).CodedLinkType.EXPERIMENT;
                    obj1[1] = iter;
                    obj1[2] = iter;
                    items.push(obj1);
                  }
                }
                let match;
                if (inviteHostRemainingPath != null) {
                  match = inviteHostRemainingPath.match(closure_1_4);
                }
                if (null != match) {
                  if ("https:" === url.protocol) {
                    const inviteKeyFromUrlParams = set(items[9]).generateInviteKeyFromUrlParams(inviteHostRemainingPath.substring(1), url.search);
                    const invite = closure_1_2.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (tmp4Result2.isEmbeddedApplicationInvite(invite)) {
                        let obj13 = set;
                        if (!set.has(inviteKeyFromUrlParams)) {
                          obj13.add(inviteKeyFromUrlParams);
                          const obj2 = { type: null, code: null, url: null };
                          obj2[0] = set(items[6]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE;
                          obj2[1] = inviteKeyFromUrlParams;
                          obj2[2] = iter;
                          items.push(obj2);
                        }
                      }
                      tmp4Result2 = set(items[10]);
                    }
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      let obj11 = set;
                      if (!set.has(inviteKeyFromUrlParams)) {
                        obj11.add(inviteKeyFromUrlParams);
                        obj3 = { type: null, code: null, url: null };
                        obj3[0] = set(items[6]).CodedLinkType.INVITE;
                        obj3[1] = inviteKeyFromUrlParams;
                        obj3[2] = iter;
                        items.push(obj3);
                      }
                    }
                    const tmp4Result1 = set(items[9]);
                  }
                }
                let match1;
                if (templateHostRemainingPath != null) {
                  match1 = templateHostRemainingPath.match(closure_1_4);
                }
                if (null != match1) {
                  const substr = templateHostRemainingPath.substring(1);
                  let obj15 = set;
                  if (!set.has(substr)) {
                    obj15.add(substr);
                    obj4 = { type: null, code: null, url: null };
                    obj4[0] = set(items[6]).CodedLinkType.TEMPLATE;
                    obj4[1] = substr;
                    obj4[2] = iter;
                    items.push(obj4);
                  }
                }
                let match2;
                if (primaryHostRemainingPath != null) {
                  match2 = primaryHostRemainingPath.match(closure_1_6);
                }
                if (null != match2) {
                  const formatted = match2[1].toUpperCase();
                  if (formatted === set(items[6]).CodedLinkType.INVITE) {
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      const inviteKeyFromUrlParams1 = set(items[9]).generateInviteKeyFromUrlParams(match2[2], url.search);
                      let obj20 = set;
                      if (!set.has(inviteKeyFromUrlParams1)) {
                        obj20.add(inviteKeyFromUrlParams1);
                        obj5 = { type: null, code: null, url: null };
                        obj5[0] = set(items[6]).CodedLinkType.INVITE;
                        obj5[1] = inviteKeyFromUrlParams1;
                        obj5[2] = iter;
                        items.push(obj5);
                      }
                      const tmp4Result3 = set(items[9]);
                    }
                  } else {
                    let obj17 = set;
                    if (!set.has(match2[2])) {
                      obj17.add(tmp34);
                      const obj6 = { type: null, code: null, url: null };
                      obj6[0] = formatted;
                      obj6[1] = tmp34;
                      obj6[2] = iter;
                      items.push(obj6);
                    }
                  }
                }
                let match3;
                if (primaryHostRemainingPath != null) {
                  match3 = primaryHostRemainingPath.match(closure_1_5);
                }
                if (null != match3) {
                  const replaced = primaryHostRemainingPath.replace("/channels/", "");
                  let obj22 = set;
                  if (!set.has(replaced)) {
                    obj22.add(replaced);
                    obj7 = { type: null, code: null, url: null };
                    obj7[0] = set(items[6]).CodedLinkType.CHANNEL_LINK;
                    obj7[1] = replaced;
                    obj7[2] = iter;
                    items.push(obj7);
                  }
                }
                let tmp48 = null;
                if (null != url.pathname) {
                  const match4 = str6.match(closure_1_7);
                  tmp48 = null;
                  if (null != match4) {
                    tmp48 = null;
                    if (match4.length >= 4) {
                      let tmp51 = null;
                      if (null != match4[2]) {
                        const obj8 = { guildId: null, guildEventId: null, recurrenceId: null };
                        obj8[0] = match4[1];
                        obj8[1] = tmp50;
                        obj8[2] = match4[4];
                        tmp51 = obj8;
                      }
                      tmp48 = tmp51;
                    }
                  }
                }
                if (null != tmp48) {
                  const _HermesInternal6 = HermesInternal;
                  let str7 = "";
                  const combined = "" + tmp48.guildId + "-" + tmp48.guildEventId;
                  if (null != tmp48.recurrenceId) {
                    const _HermesInternal = HermesInternal;
                    str7 = "-" + tmp48.recurrenceId;
                  }
                  const sum = combined + str7;
                  if (!set.has(sum)) {
                    set.add(sum);
                    const obj9 = { type: null, code: null, url: null };
                    obj9[0] = set(items[6]).CodedLinkType.EVENT;
                    obj9[1] = sum;
                    obj9[2] = iter;
                    items.push(obj9);
                  }
                }
                let match5;
                if (primaryHostRemainingPath != null) {
                  match5 = primaryHostRemainingPath.match(closure_1_18);
                }
                if (null != match5) {
                  if (null != query) {
                    const result = set(items[11]).parseOAuth2AuthorizeProps(query);
                    const clientId = result.clientId;
                    let tmp58 = null == clientId;
                    if (!tmp58) {
                      tmp58 = "" === clientId;
                    }
                    if (!tmp58) {
                      const scopes = result.scopes;
                      let someResult;
                      if (scopes != null) {
                        someResult = scopes.some((item, index) => item !== callback(table[12]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                      }
                      tmp58 = someResult;
                    }
                    if (!tmp58) {
                      if (!set.has(clientId)) {
                        set.add(clientId);
                        obj10 = { type: null, code: null, url: null };
                        obj10[0] = set(items[6]).CodedLinkType.APP_OAUTH2_LINK;
                        obj10[1] = clientId;
                        obj10[2] = iter;
                        items.push(obj10);
                      }
                    }
                    const tmp4Result4 = set(items[11]);
                  }
                }
                let match6;
                if (primaryHostRemainingPath != null) {
                  match6 = primaryHostRemainingPath.match(closure_1_8);
                }
                if (null != match6) {
                  if (!set.has(match6[2])) {
                    set.add(tmp65);
                    obj11 = { type: null, code: null, url: null };
                    obj11[0] = set(items[6]).CodedLinkType.APP_DIRECTORY_PROFILE;
                    obj11[1] = tmp65;
                    obj11[2] = iter;
                    items.push(obj11);
                  }
                }
                let match7;
                if (primaryHostRemainingPath != null) {
                  match7 = primaryHostRemainingPath.match(closure_1_9);
                }
                if (null != match7) {
                  if (null != match7[3]) {
                    const storefrontSKUCodedLink = set(items[13]).makeStorefrontSKUCodedLink(tmp150, tmp151);
                    if (!set.has(storefrontSKUCodedLink)) {
                      set.add(storefrontSKUCodedLink);
                      obj12 = { type: null, code: null, url: null };
                      obj12[0] = set(items[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU;
                      obj12[1] = storefrontSKUCodedLink;
                      obj12[2] = iter;
                      items.push(obj12);
                    }
                    const tmp4Result5 = set(items[13]);
                  } else if (!set.has(tmp150)) {
                    set.add(tmp150);
                    obj13 = { type: null, code: null, url: null };
                    obj13[0] = set(items[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT;
                    obj13[1] = tmp150;
                    obj13[2] = iter;
                    items.push(obj13);
                  }
                }
                let match8;
                if (primaryHostRemainingPath != null) {
                  match8 = primaryHostRemainingPath.match(closure_1_10);
                }
                if (null != match8) {
                  if (!set.has(match8[1])) {
                    set.add(tmp80);
                    const obj14 = { type: null, code: null, url: null };
                    obj14[0] = set(items[6]).CodedLinkType.ACTIVITY_BOOKMARK;
                    obj14[1] = tmp80;
                    obj14[2] = iter;
                    items.push(obj14);
                  }
                }
                let match9;
                if (primaryHostRemainingPath != null) {
                  match9 = primaryHostRemainingPath.match(closure_1_11);
                }
                if (null != match9) {
                  const _HermesInternal2 = HermesInternal;
                  const combined1 = "" + match9[1] + "-" + match9[2];
                  if (!set.has(combined1)) {
                    set.add(combined1);
                    obj15 = { type: null, code: null, url: null };
                    obj15[0] = set(items[6]).CodedLinkType.GUILD_PRODUCT;
                    obj15[1] = combined1;
                    obj15[2] = iter;
                    items.push(obj15);
                  }
                }
                let match10;
                if (primaryHostRemainingPath != null) {
                  match10 = primaryHostRemainingPath.match(closure_1_13);
                }
                if (null != match10) {
                  if (!set.has(match10[1])) {
                    set.add(tmp93);
                    const obj16 = { type: null, code: null, url: null };
                    obj16[0] = set(items[6]).CodedLinkType.SERVER_SHOP;
                    obj16[1] = tmp93;
                    obj16[2] = iter;
                    items.push(obj16);
                  }
                }
                let match11;
                if (primaryHostRemainingPath != null) {
                  match11 = primaryHostRemainingPath.match(closure_1_12);
                }
                if (null != match11) {
                  let tmp99 = match11[1];
                  if (tmp99 == null) {
                    tmp99 = match11[2];
                  }
                  const _HermesInternal3 = HermesInternal;
                  const combined2 = "" + match11[3] + "-" + tmp99;
                  if (!set.has(combined2)) {
                    set.add(combined2);
                    obj17 = { type: null, code: null, url: null };
                    obj17[0] = set(items[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT;
                    obj17[1] = combined2;
                    obj17[2] = iter;
                    items.push(obj17);
                  }
                }
                const str13 = closure_1_33(iter).primaryHostRemainingPath;
                let match12;
                if (str13 != null) {
                  match12 = str13.match(closure_1_14);
                }
                let tmp107;
                if (match12 != null) {
                  tmp107 = match12[1];
                }
                if (tmp107 == null) {
                  tmp107 = null;
                }
                if (null != tmp107) {
                  if (!set.has(tmp107)) {
                    set.add(tmp107);
                    const obj18 = { type: null, code: null, url: null };
                    obj18[0] = set(items[6]).CodedLinkType.QUESTS_EMBED;
                    obj18[1] = tmp107;
                    obj18[2] = iter;
                    items.push(obj18);
                  }
                }
                let match13;
                if (primaryHostRemainingPath != null) {
                  match13 = primaryHostRemainingPath.match(closure_1_16);
                }
                if (null != match13) {
                  if (!set.has(match13[1])) {
                    set.add(tmp113);
                    const obj19 = { type: null, code: null, url: null };
                    obj19[0] = set(items[6]).CodedLinkType.GAME_PROFILE;
                    obj19[1] = tmp113;
                    obj19[2] = iter;
                    items.push(obj19);
                  }
                }
                let match14;
                if (primaryHostRemainingPath != null) {
                  match14 = primaryHostRemainingPath.match(closure_1_15);
                }
                if (null != match14) {
                  if (!set.has(match14[1])) {
                    set.add(tmp119);
                    obj20 = { type: null, code: null, url: null };
                    obj20[0] = set(items[6]).CodedLinkType.GAME_SERVER_SHARE;
                    obj20[1] = tmp119;
                    obj20[2] = iter;
                    items.push(obj20);
                  }
                }
                let match15;
                if (primaryHostRemainingPath != null) {
                  match15 = primaryHostRemainingPath.match(closure_1_17);
                }
                if (null != match15) {
                  if (!set.has(match15[1])) {
                    set.add(tmp125);
                    const obj21 = { type: null, code: null, url: null };
                    obj21[0] = set(items[6]).CodedLinkType.USER_PROFILE;
                    obj21[1] = tmp125;
                    obj21[2] = iter;
                    items.push(obj21);
                  }
                }
                if ("/shop" === primaryHostRemainingPath) {
                  let parsed = null;
                  if (null != query) {
                    parsed = set(items[14]).parse(query);
                    const tmp4Result6 = set(items[14]);
                  }
                  let str15;
                  if (parsed != null) {
                    str15 = parsed.tab;
                  }
                  if (str15 === closure_1_3.GAME_SHOPS) {
                    applicationId = undefined;
                    if (parsed != null) {
                      applicationId = parsed.applicationId;
                    }
                    if (null != applicationId) {
                      skuId = undefined;
                      if (parsed != null) {
                        skuId = parsed.skuId;
                      }
                      if (null != skuId) {
                        ({ applicationId, skuId } = parsed);
                        let tmp140 = typeof applicationId === "string";
                        if (typeof applicationId === "string") {
                          tmp140 = typeof skuId === "string";
                        }
                        if (tmp140) {
                          const _HermesInternal5 = HermesInternal;
                          const combined3 = "" + skuId + "-" + applicationId;
                          if (!set.has(combined3)) {
                            set.add(combined3);
                            obj22 = { type: null, code: null, url: null };
                            obj22[0] = set(items[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP;
                            obj22[1] = combined3;
                            obj22[2] = iter;
                            items.push(obj22);
                          }
                        }
                      }
                    }
                  }
                  let match16;
                  if (url.hash != null) {
                    match16 = str16.match(closure_1_19);
                  }
                  if (str15 == null) {
                    str15 = "";
                  }
                  let str17;
                  if (match16 != null) {
                    str17 = match16[1];
                  }
                  if (str17 == null) {
                    str17 = "";
                  }
                  const _HermesInternal4 = HermesInternal;
                  const combined4 = "" + str15 + "-" + str17;
                  if (!set.has(combined4)) {
                    set.add(combined4);
                    const obj23 = { type: null, code: null, url: null };
                    obj23[0] = set(items[6]).CodedLinkType.COLLECTIBLES_SHOP;
                    obj23[1] = combined4;
                    obj23[2] = iter;
                    items.push(obj23);
                  }
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
    }
    const result = coerceLinksToCodedLinks(mapped.concat(match1));
    return result.slice(0, 10);
  }
}
function parseQuestsEmbedCode(target) {
  const str = getPathsFromURL(target).primaryHostRemainingPath;
  let match;
  if (str != null) {
    match = str.match(closure_14);
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
items[4] = importDefaultResult1.escape(str11);
const found = items.filter(Boolean);
const regExp2 = new RegExp("((https?://[^ ]*)|^|\\s)(" + found.join("|") + ")", "g");
const importDefaultResult5 = importDefaultResult1;
let result = require("obj132").fileFinishedImporting("modules/coded_links/findCodedLinks.tsx");

export default findCodedLinks;
export const DEVLINK_REGEX = tmp3;
export const remainingPathFromDiscordHostMatch = function remainingPathFromDiscordHostMatch(parseURLSafelyResult) {
  let replaced;
  if (parseURLSafelyResult.host != null) {
    replaced = str.replace(/^www[.]/i, "");
  }
  let tmp3 = null;
  if (replaced === obj3.host) {
    let str3 = parseURLSafelyResult.pathname;
    if (str3 == null) {
      str3 = "";
    }
    let str4 = obj3.pathPrefix;
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
    if (replaced1 === obj5.host) {
      let str7 = parseURLSafelyResult.pathname;
      if (str7 == null) {
        str7 = "";
      }
      let str8 = obj5.pathPrefix;
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
    if (replaced2 === obj7.host) {
      let str11 = parseURLSafelyResult.pathname;
      if (str11 == null) {
        str11 = "";
      }
      let str12 = obj7.pathPrefix;
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
    if (replaced3 === obj10.host) {
      let str15 = parseURLSafelyResult.pathname;
      if (str15 == null) {
        str15 = "";
      }
      let str16 = obj10.pathPrefix;
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
    if (replaced4 === obj12.host) {
      let str19 = parseURLSafelyResult.pathname;
      if (str19 == null) {
        str19 = "";
      }
      let str20 = obj12.pathPrefix;
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
        const items = [obj3, obj5, obj7, obj10, obj12];
        if (items.some((item, index) => {
          let replaced;
          if (url.host != null) {
            replaced = str.replace(/^www[.]/i, "");
          }
          return replaced === item.host;
        })) {
          let flag;
          if (url.pathname != null) {
            const formatted = str2.toUpperCase();
            flag = formatted.includes(url(4363).CodedLinkType.INVITE);
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
    match = str.match(closure_17);
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
    match = str.match(closure_15);
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
    let mapped;
    const str = sanitizeUrlResult.replace(regExp2, (arg0, arg1, arg2, arg3) => {
      let combined = arg0;
      if (null == arg2) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg1 + "http://" + arg3;
      }
      return combined;
    });
    let match = str.replaceAll(closure_22, " ").match(regExp1);
    if (match != null) {
      mapped = match.map(trimTrailingPunctuation);
    }
    if (mapped == null) {
      mapped = null;
    }
    let match1 = str.match(closure_20);
    if (mapped == null) {
      mapped = [];
    }
    if (match1 == null) {
      match1 = [];
    }
    function coerceLinksToCodedLinks(arg0) {
      if (null != arg0) {
        if (0 !== arg0.length) {
          const _Set = Set;
          const set = new Set();
          const items = [];
          function _loop(iter) {
            ({ url, inviteHostRemainingPath, templateHostRemainingPath, primaryHostRemainingPath } = closure_1_33(iter));
            if (null != url) {
              if (null != url.pathname) {
                let query = null;
                if (null != url.query) {
                  query = null;
                  if (url.query.length <= 1000) {
                    query = url.query;
                  }
                }
                obj = set(items[7]);
                if (obj.isBuildOverrideLink(iter)) {
                  obj1 = set;
                  if (!set.has(iter)) {
                    obj1.add(iter);
                    obj = { type: null, code: null, url: null };
                    obj[0] = set(items[6]).CodedLinkType.BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                let tmp4Result = set(items[7]);
                if (tmp4Result.isManualBuildOverrideLink(iter)) {
                  let obj4 = set;
                  if (!set.has(iter)) {
                    obj4.add(iter);
                    obj = { type: null, code: null, url: null };
                    obj[0] = set(items[6]).CodedLinkType.MANUAL_BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                tmp4Result = set(items[8]);
                if (tmp4Result.isExperimentEmbedURL(iter)) {
                  obj7 = set;
                  if (!set.has(iter)) {
                    obj7.add(iter);
                    obj1 = { type: null, code: null, url: null };
                    obj1[0] = set(items[6]).CodedLinkType.EXPERIMENT;
                    obj1[1] = iter;
                    obj1[2] = iter;
                    items.push(obj1);
                  }
                }
                let match;
                if (inviteHostRemainingPath != null) {
                  match = inviteHostRemainingPath.match(closure_1_4);
                }
                if (null != match) {
                  if ("https:" === url.protocol) {
                    const inviteKeyFromUrlParams = set(items[9]).generateInviteKeyFromUrlParams(inviteHostRemainingPath.substring(1), url.search);
                    const invite = closure_1_2.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (tmp4Result2.isEmbeddedApplicationInvite(invite)) {
                        let obj13 = set;
                        if (!set.has(inviteKeyFromUrlParams)) {
                          obj13.add(inviteKeyFromUrlParams);
                          const obj2 = { type: null, code: null, url: null };
                          obj2[0] = set(items[6]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE;
                          obj2[1] = inviteKeyFromUrlParams;
                          obj2[2] = iter;
                          items.push(obj2);
                        }
                      }
                      tmp4Result2 = set(items[10]);
                    }
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      let obj11 = set;
                      if (!set.has(inviteKeyFromUrlParams)) {
                        obj11.add(inviteKeyFromUrlParams);
                        obj3 = { type: null, code: null, url: null };
                        obj3[0] = set(items[6]).CodedLinkType.INVITE;
                        obj3[1] = inviteKeyFromUrlParams;
                        obj3[2] = iter;
                        items.push(obj3);
                      }
                    }
                    const tmp4Result1 = set(items[9]);
                  }
                }
                let match1;
                if (templateHostRemainingPath != null) {
                  match1 = templateHostRemainingPath.match(closure_1_4);
                }
                if (null != match1) {
                  const substr = templateHostRemainingPath.substring(1);
                  let obj15 = set;
                  if (!set.has(substr)) {
                    obj15.add(substr);
                    obj4 = { type: null, code: null, url: null };
                    obj4[0] = set(items[6]).CodedLinkType.TEMPLATE;
                    obj4[1] = substr;
                    obj4[2] = iter;
                    items.push(obj4);
                  }
                }
                let match2;
                if (primaryHostRemainingPath != null) {
                  match2 = primaryHostRemainingPath.match(closure_1_6);
                }
                if (null != match2) {
                  const formatted = match2[1].toUpperCase();
                  if (formatted === set(items[6]).CodedLinkType.INVITE) {
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      const inviteKeyFromUrlParams1 = set(items[9]).generateInviteKeyFromUrlParams(match2[2], url.search);
                      let obj20 = set;
                      if (!set.has(inviteKeyFromUrlParams1)) {
                        obj20.add(inviteKeyFromUrlParams1);
                        obj5 = { type: null, code: null, url: null };
                        obj5[0] = set(items[6]).CodedLinkType.INVITE;
                        obj5[1] = inviteKeyFromUrlParams1;
                        obj5[2] = iter;
                        items.push(obj5);
                      }
                      const tmp4Result3 = set(items[9]);
                    }
                  } else {
                    let obj17 = set;
                    if (!set.has(match2[2])) {
                      obj17.add(tmp34);
                      const obj6 = { type: null, code: null, url: null };
                      obj6[0] = formatted;
                      obj6[1] = tmp34;
                      obj6[2] = iter;
                      items.push(obj6);
                    }
                  }
                }
                let match3;
                if (primaryHostRemainingPath != null) {
                  match3 = primaryHostRemainingPath.match(closure_1_5);
                }
                if (null != match3) {
                  const replaced = primaryHostRemainingPath.replace("/channels/", "");
                  let obj22 = set;
                  if (!set.has(replaced)) {
                    obj22.add(replaced);
                    obj7 = { type: null, code: null, url: null };
                    obj7[0] = set(items[6]).CodedLinkType.CHANNEL_LINK;
                    obj7[1] = replaced;
                    obj7[2] = iter;
                    items.push(obj7);
                  }
                }
                let tmp48 = null;
                if (null != url.pathname) {
                  const match4 = str6.match(closure_1_7);
                  tmp48 = null;
                  if (null != match4) {
                    tmp48 = null;
                    if (match4.length >= 4) {
                      let tmp51 = null;
                      if (null != match4[2]) {
                        const obj8 = { guildId: null, guildEventId: null, recurrenceId: null };
                        obj8[0] = match4[1];
                        obj8[1] = tmp50;
                        obj8[2] = match4[4];
                        tmp51 = obj8;
                      }
                      tmp48 = tmp51;
                    }
                  }
                }
                if (null != tmp48) {
                  const _HermesInternal6 = HermesInternal;
                  let str7 = "";
                  const combined = "" + tmp48.guildId + "-" + tmp48.guildEventId;
                  if (null != tmp48.recurrenceId) {
                    const _HermesInternal = HermesInternal;
                    str7 = "-" + tmp48.recurrenceId;
                  }
                  const sum = combined + str7;
                  if (!set.has(sum)) {
                    set.add(sum);
                    const obj9 = { type: null, code: null, url: null };
                    obj9[0] = set(items[6]).CodedLinkType.EVENT;
                    obj9[1] = sum;
                    obj9[2] = iter;
                    items.push(obj9);
                  }
                }
                let match5;
                if (primaryHostRemainingPath != null) {
                  match5 = primaryHostRemainingPath.match(closure_1_18);
                }
                if (null != match5) {
                  if (null != query) {
                    const result = set(items[11]).parseOAuth2AuthorizeProps(query);
                    const clientId = result.clientId;
                    let tmp58 = null == clientId;
                    if (!tmp58) {
                      tmp58 = "" === clientId;
                    }
                    if (!tmp58) {
                      const scopes = result.scopes;
                      let someResult;
                      if (scopes != null) {
                        someResult = scopes.some((item, index) => item !== callback(table[12]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                      }
                      tmp58 = someResult;
                    }
                    if (!tmp58) {
                      if (!set.has(clientId)) {
                        set.add(clientId);
                        obj10 = { type: null, code: null, url: null };
                        obj10[0] = set(items[6]).CodedLinkType.APP_OAUTH2_LINK;
                        obj10[1] = clientId;
                        obj10[2] = iter;
                        items.push(obj10);
                      }
                    }
                    const tmp4Result4 = set(items[11]);
                  }
                }
                let match6;
                if (primaryHostRemainingPath != null) {
                  match6 = primaryHostRemainingPath.match(closure_1_8);
                }
                if (null != match6) {
                  if (!set.has(match6[2])) {
                    set.add(tmp65);
                    obj11 = { type: null, code: null, url: null };
                    obj11[0] = set(items[6]).CodedLinkType.APP_DIRECTORY_PROFILE;
                    obj11[1] = tmp65;
                    obj11[2] = iter;
                    items.push(obj11);
                  }
                }
                let match7;
                if (primaryHostRemainingPath != null) {
                  match7 = primaryHostRemainingPath.match(closure_1_9);
                }
                if (null != match7) {
                  if (null != match7[3]) {
                    const storefrontSKUCodedLink = set(items[13]).makeStorefrontSKUCodedLink(tmp150, tmp151);
                    if (!set.has(storefrontSKUCodedLink)) {
                      set.add(storefrontSKUCodedLink);
                      obj12 = { type: null, code: null, url: null };
                      obj12[0] = set(items[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU;
                      obj12[1] = storefrontSKUCodedLink;
                      obj12[2] = iter;
                      items.push(obj12);
                    }
                    const tmp4Result5 = set(items[13]);
                  } else if (!set.has(tmp150)) {
                    set.add(tmp150);
                    obj13 = { type: null, code: null, url: null };
                    obj13[0] = set(items[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT;
                    obj13[1] = tmp150;
                    obj13[2] = iter;
                    items.push(obj13);
                  }
                }
                let match8;
                if (primaryHostRemainingPath != null) {
                  match8 = primaryHostRemainingPath.match(closure_1_10);
                }
                if (null != match8) {
                  if (!set.has(match8[1])) {
                    set.add(tmp80);
                    const obj14 = { type: null, code: null, url: null };
                    obj14[0] = set(items[6]).CodedLinkType.ACTIVITY_BOOKMARK;
                    obj14[1] = tmp80;
                    obj14[2] = iter;
                    items.push(obj14);
                  }
                }
                let match9;
                if (primaryHostRemainingPath != null) {
                  match9 = primaryHostRemainingPath.match(closure_1_11);
                }
                if (null != match9) {
                  const _HermesInternal2 = HermesInternal;
                  const combined1 = "" + match9[1] + "-" + match9[2];
                  if (!set.has(combined1)) {
                    set.add(combined1);
                    obj15 = { type: null, code: null, url: null };
                    obj15[0] = set(items[6]).CodedLinkType.GUILD_PRODUCT;
                    obj15[1] = combined1;
                    obj15[2] = iter;
                    items.push(obj15);
                  }
                }
                let match10;
                if (primaryHostRemainingPath != null) {
                  match10 = primaryHostRemainingPath.match(closure_1_13);
                }
                if (null != match10) {
                  if (!set.has(match10[1])) {
                    set.add(tmp93);
                    const obj16 = { type: null, code: null, url: null };
                    obj16[0] = set(items[6]).CodedLinkType.SERVER_SHOP;
                    obj16[1] = tmp93;
                    obj16[2] = iter;
                    items.push(obj16);
                  }
                }
                let match11;
                if (primaryHostRemainingPath != null) {
                  match11 = primaryHostRemainingPath.match(closure_1_12);
                }
                if (null != match11) {
                  let tmp99 = match11[1];
                  if (tmp99 == null) {
                    tmp99 = match11[2];
                  }
                  const _HermesInternal3 = HermesInternal;
                  const combined2 = "" + match11[3] + "-" + tmp99;
                  if (!set.has(combined2)) {
                    set.add(combined2);
                    obj17 = { type: null, code: null, url: null };
                    obj17[0] = set(items[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT;
                    obj17[1] = combined2;
                    obj17[2] = iter;
                    items.push(obj17);
                  }
                }
                const str13 = closure_1_33(iter).primaryHostRemainingPath;
                let match12;
                if (str13 != null) {
                  match12 = str13.match(closure_1_14);
                }
                let tmp107;
                if (match12 != null) {
                  tmp107 = match12[1];
                }
                if (tmp107 == null) {
                  tmp107 = null;
                }
                if (null != tmp107) {
                  if (!set.has(tmp107)) {
                    set.add(tmp107);
                    const obj18 = { type: null, code: null, url: null };
                    obj18[0] = set(items[6]).CodedLinkType.QUESTS_EMBED;
                    obj18[1] = tmp107;
                    obj18[2] = iter;
                    items.push(obj18);
                  }
                }
                let match13;
                if (primaryHostRemainingPath != null) {
                  match13 = primaryHostRemainingPath.match(closure_1_16);
                }
                if (null != match13) {
                  if (!set.has(match13[1])) {
                    set.add(tmp113);
                    const obj19 = { type: null, code: null, url: null };
                    obj19[0] = set(items[6]).CodedLinkType.GAME_PROFILE;
                    obj19[1] = tmp113;
                    obj19[2] = iter;
                    items.push(obj19);
                  }
                }
                let match14;
                if (primaryHostRemainingPath != null) {
                  match14 = primaryHostRemainingPath.match(closure_1_15);
                }
                if (null != match14) {
                  if (!set.has(match14[1])) {
                    set.add(tmp119);
                    obj20 = { type: null, code: null, url: null };
                    obj20[0] = set(items[6]).CodedLinkType.GAME_SERVER_SHARE;
                    obj20[1] = tmp119;
                    obj20[2] = iter;
                    items.push(obj20);
                  }
                }
                let match15;
                if (primaryHostRemainingPath != null) {
                  match15 = primaryHostRemainingPath.match(closure_1_17);
                }
                if (null != match15) {
                  if (!set.has(match15[1])) {
                    set.add(tmp125);
                    const obj21 = { type: null, code: null, url: null };
                    obj21[0] = set(items[6]).CodedLinkType.USER_PROFILE;
                    obj21[1] = tmp125;
                    obj21[2] = iter;
                    items.push(obj21);
                  }
                }
                if ("/shop" === primaryHostRemainingPath) {
                  let parsed = null;
                  if (null != query) {
                    parsed = set(items[14]).parse(query);
                    const tmp4Result6 = set(items[14]);
                  }
                  let str15;
                  if (parsed != null) {
                    str15 = parsed.tab;
                  }
                  if (str15 === closure_1_3.GAME_SHOPS) {
                    applicationId = undefined;
                    if (parsed != null) {
                      applicationId = parsed.applicationId;
                    }
                    if (null != applicationId) {
                      skuId = undefined;
                      if (parsed != null) {
                        skuId = parsed.skuId;
                      }
                      if (null != skuId) {
                        ({ applicationId, skuId } = parsed);
                        let tmp140 = typeof applicationId === "string";
                        if (typeof applicationId === "string") {
                          tmp140 = typeof skuId === "string";
                        }
                        if (tmp140) {
                          const _HermesInternal5 = HermesInternal;
                          const combined3 = "" + skuId + "-" + applicationId;
                          if (!set.has(combined3)) {
                            set.add(combined3);
                            obj22 = { type: null, code: null, url: null };
                            obj22[0] = set(items[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP;
                            obj22[1] = combined3;
                            obj22[2] = iter;
                            items.push(obj22);
                          }
                        }
                      }
                    }
                  }
                  let match16;
                  if (url.hash != null) {
                    match16 = str16.match(closure_1_19);
                  }
                  if (str15 == null) {
                    str15 = "";
                  }
                  let str17;
                  if (match16 != null) {
                    str17 = match16[1];
                  }
                  if (str17 == null) {
                    str17 = "";
                  }
                  const _HermesInternal4 = HermesInternal;
                  const combined4 = "" + str15 + "-" + str17;
                  if (!set.has(combined4)) {
                    set.add(combined4);
                    const obj23 = { type: null, code: null, url: null };
                    obj23[0] = set(items[6]).CodedLinkType.COLLECTIBLES_SHOP;
                    obj23[1] = combined4;
                    obj23[2] = iter;
                    items.push(obj23);
                  }
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
    }
    let result = coerceLinksToCodedLinks(mapped.concat(match1));
    items = result.slice(0, 10);
    const str3 = str.replaceAll(closure_22, " ");
  }
  return items[0];
};