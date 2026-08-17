// discord_app/modules/coded_links/findCodedLinks.tsx
import Url from "../../../_runtime/01489_Url.js";
import closure_2 from "../../stores/InviteStore.tsx";
import { PRIMARY_DOMAIN } from "../../Constants.tsx";
import { CollectibleShopTab } from "../collectibles/CollectiblesShopConstants.tsx";
import importDefaultResult from "../../../_runtime/01488_ip.js";
import importDefaultResult1 from "../../utils/RegexUtils.tsx";

require = arg1;
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
        let str8 = tmp5.pathPrefix;
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
        let str13 = tmp10.pathPrefix;
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
          let str17 = tmp32.pathPrefix;
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
          let str21 = tmp33.pathPrefix;
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
          let str25 = tmp34.pathPrefix;
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
          let str29 = tmp35.pathPrefix;
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
  const parsed = obj2.parse(INVITE_HOST, undefined, true);
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
  let obj6 = { host: null, pathPrefix: null };
} else {
  obj5 = { host: null, pathPrefix: null };
  obj5[0] = combined;
}
const combined1 = "//ptb." + PRIMARY_DOMAIN;
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
  let obj9 = { host: null, pathPrefix: null };
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
    function coerceLinksToCodedLinks(mapped) {
      if (null != mapped) {
        if (0 !== mapped.length) {
          const _Set = Set;
          const set = new Set();
          const items = [];
          function _loop(iter) {
            let formatted = closure_1_33;
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
                    obj[0] = tmp4(tmp5[6]).CodedLinkType.BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                let tmp4Result = tmp4(tmp5[7]);
                if (tmp4Result.isManualBuildOverrideLink(iter)) {
                  let obj4 = set;
                  if (!set.has(iter)) {
                    obj4.add(iter);
                    obj = { type: null, code: null, url: null };
                    obj[0] = tmp4(tmp5[6]).CodedLinkType.MANUAL_BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                tmp4Result = tmp4(tmp5[8]);
                if (tmp4Result.isExperimentEmbedURL(iter)) {
                  obj7 = set;
                  if (!set.has(iter)) {
                    obj7.add(iter);
                    obj1 = { type: null, code: null, url: null };
                    obj1[0] = tmp4(tmp5[6]).CodedLinkType.EXPERIMENT;
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
                    const inviteKeyFromUrlParams = tmp4(tmp5[9]).generateInviteKeyFromUrlParams(inviteHostRemainingPath.substring(1), url.search);
                    const invite = closure_1_2.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (tmp4Result2.isEmbeddedApplicationInvite(invite)) {
                        let obj13 = set;
                        if (!set.has(inviteKeyFromUrlParams)) {
                          obj13.add(inviteKeyFromUrlParams);
                          const obj2 = { type: null, code: null, url: null };
                          obj2[0] = tmp4(tmp5[6]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE;
                          obj2[1] = inviteKeyFromUrlParams;
                          obj2[2] = iter;
                          items.push(obj2);
                        }
                      }
                      tmp4Result2 = tmp4(tmp5[10]);
                    }
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      let obj11 = set;
                      if (!set.has(inviteKeyFromUrlParams)) {
                        obj11.add(inviteKeyFromUrlParams);
                        obj3 = { type: null, code: null, url: null };
                        obj3[0] = tmp4(tmp5[6]).CodedLinkType.INVITE;
                        obj3[1] = inviteKeyFromUrlParams;
                        obj3[2] = iter;
                        items.push(obj3);
                      }
                    }
                    const tmp4Result1 = tmp4(tmp5[9]);
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
                    obj4[0] = tmp4(tmp5[6]).CodedLinkType.TEMPLATE;
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
                  formatted = match2[1].toUpperCase();
                  if (formatted === tmp4(tmp5[6]).CodedLinkType.INVITE) {
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      const inviteKeyFromUrlParams1 = tmp4(tmp5[9]).generateInviteKeyFromUrlParams(match2[2], url.search);
                      let obj20 = set;
                      if (!set.has(inviteKeyFromUrlParams1)) {
                        obj20.add(inviteKeyFromUrlParams1);
                        obj5 = { type: null, code: null, url: null };
                        obj5[0] = tmp4(tmp5[6]).CodedLinkType.INVITE;
                        obj5[1] = inviteKeyFromUrlParams1;
                        obj5[2] = iter;
                        items.push(obj5);
                      }
                      const tmp4Result3 = tmp4(tmp5[9]);
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
                  const str23 = match2[1];
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
                    obj7[0] = tmp4(tmp5[6]).CodedLinkType.CHANNEL_LINK;
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
                  formatted = globalThis;
                  const _HermesInternal6 = HermesInternal;
                  let str7 = "";
                  formatted = "" + tmp48.guildId + "-" + tmp48.guildEventId;
                  if (null != tmp48.recurrenceId) {
                    const _HermesInternal = HermesInternal;
                    str7 = "-" + tmp48.recurrenceId;
                  }
                  const sum = formatted + str7;
                  if (!set.has(sum)) {
                    obj26.add(sum);
                    const obj9 = { type: null, code: null, url: null };
                    obj9[0] = tmp4(tmp5[6]).CodedLinkType.EVENT;
                    obj9[1] = sum;
                    obj9[2] = iter;
                    items.push(obj9);
                  }
                  obj26 = set;
                }
                let match5;
                if (primaryHostRemainingPath != null) {
                  match5 = primaryHostRemainingPath.match(closure_1_18);
                }
                if (null != match5) {
                  if (null != query) {
                    formatted = tmp4(tmp5[11]).parseOAuth2AuthorizeProps(query);
                    const clientId = formatted.clientId;
                    let tmp58 = null == clientId;
                    if (!tmp58) {
                      tmp58 = "" === clientId;
                    }
                    if (!tmp58) {
                      const scopes = formatted.scopes;
                      let someResult;
                      if (scopes != null) {
                        someResult = scopes.some((arg0) => arg0 !== callback(table[12]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                      }
                      tmp58 = someResult;
                    }
                    if (!tmp58) {
                      if (!set.has(clientId)) {
                        obj28.add(clientId);
                        obj10 = { type: null, code: null, url: null };
                        obj10[0] = tmp4(tmp5[6]).CodedLinkType.APP_OAUTH2_LINK;
                        obj10[1] = clientId;
                        obj10[2] = iter;
                        items.push(obj10);
                      }
                      obj28 = set;
                    }
                    const tmp4Result4 = tmp4(tmp5[11]);
                  }
                }
                let match6;
                if (primaryHostRemainingPath != null) {
                  match6 = primaryHostRemainingPath.match(closure_1_8);
                }
                if (null != match6) {
                  if (!set.has(match6[2])) {
                    obj30.add(tmp65);
                    obj11 = { type: null, code: null, url: null };
                    obj11[0] = tmp4(tmp5[6]).CodedLinkType.APP_DIRECTORY_PROFILE;
                    obj11[1] = tmp65;
                    obj11[2] = iter;
                    items.push(obj11);
                  }
                  obj30 = set;
                }
                let match7;
                if (primaryHostRemainingPath != null) {
                  match7 = primaryHostRemainingPath.match(closure_1_9);
                }
                if (null != match7) {
                  formatted = match7[2];
                  formatted = match7[3];
                  if (null != formatted) {
                    const storefrontSKUCodedLink = tmp4(tmp5[13]).makeStorefrontSKUCodedLink(formatted, formatted);
                    if (!set.has(storefrontSKUCodedLink)) {
                      obj35.add(storefrontSKUCodedLink);
                      obj12 = { type: null, code: null, url: null };
                      obj12[0] = tmp4(tmp5[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU;
                      obj12[1] = storefrontSKUCodedLink;
                      obj12[2] = iter;
                      items.push(obj12);
                    }
                    obj35 = set;
                    const tmp4Result5 = tmp4(tmp5[13]);
                  } else {
                    if (!set.has(formatted)) {
                      obj32.add(formatted);
                      obj13 = { type: null, code: null, url: null };
                      obj13[0] = tmp4(tmp5[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT;
                      obj13[1] = formatted;
                      obj13[2] = iter;
                      items.push(obj13);
                    }
                    obj32 = set;
                  }
                }
                let match8;
                if (primaryHostRemainingPath != null) {
                  match8 = primaryHostRemainingPath.match(closure_1_10);
                }
                if (null != match8) {
                  if (!set.has(match8[1])) {
                    obj37.add(tmp80);
                    const obj14 = { type: null, code: null, url: null };
                    obj14[0] = tmp4(tmp5[6]).CodedLinkType.ACTIVITY_BOOKMARK;
                    obj14[1] = tmp80;
                    obj14[2] = iter;
                    items.push(obj14);
                  }
                  obj37 = set;
                }
                let match9;
                if (primaryHostRemainingPath != null) {
                  match9 = primaryHostRemainingPath.match(closure_1_11);
                }
                if (null != match9) {
                  const _HermesInternal2 = HermesInternal;
                  const combined = "" + match9[1] + "-" + match9[2];
                  if (!set.has(combined)) {
                    obj39.add(combined);
                    obj15 = { type: null, code: null, url: null };
                    obj15[0] = tmp4(tmp5[6]).CodedLinkType.GUILD_PRODUCT;
                    obj15[1] = combined;
                    obj15[2] = iter;
                    items.push(obj15);
                  }
                  obj39 = set;
                }
                let match10;
                if (primaryHostRemainingPath != null) {
                  match10 = primaryHostRemainingPath.match(closure_1_13);
                }
                if (null != match10) {
                  if (!set.has(match10[1])) {
                    obj41.add(tmp93);
                    const obj16 = { type: null, code: null, url: null };
                    obj16[0] = tmp4(tmp5[6]).CodedLinkType.SERVER_SHOP;
                    obj16[1] = tmp93;
                    obj16[2] = iter;
                    items.push(obj16);
                  }
                  obj41 = set;
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
                  formatted = globalThis;
                  const _HermesInternal3 = HermesInternal;
                  formatted = "" + match11[3] + "-" + tmp99;
                  if (!set.has(formatted)) {
                    formatted = obj43.add(formatted);
                    formatted = items;
                    obj17 = { type: null, code: null, url: null };
                    obj17[0] = tmp4(tmp5[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT;
                    obj17[1] = formatted;
                    obj17[2] = iter;
                    formatted = items.push(obj17);
                  }
                  obj43 = set;
                }
                const str13 = formatted(iter).primaryHostRemainingPath;
                formatted = undefined;
                if (str13 != null) {
                  formatted = closure_1_14;
                  formatted = str13.match(closure_1_14);
                }
                formatted = undefined;
                if (formatted != null) {
                  formatted = formatted[1];
                }
                if (formatted == null) {
                  formatted = null;
                }
                if (null != formatted) {
                  if (!set.has(formatted)) {
                    formatted = obj45.add(formatted);
                    formatted = items;
                    const obj18 = { type: null, code: null, url: null };
                    obj18[0] = tmp4(tmp5[6]).CodedLinkType.QUESTS_EMBED;
                    obj18[1] = formatted;
                    obj18[2] = iter;
                    formatted = items.push(obj18);
                  }
                  obj45 = set;
                }
                formatted = undefined;
                if (primaryHostRemainingPath != null) {
                  formatted = closure_1_16;
                  formatted = primaryHostRemainingPath.match(closure_1_16);
                }
                if (null != formatted) {
                  formatted = formatted[1];
                  if (!set.has(formatted)) {
                    formatted = obj47.add(formatted);
                    formatted = items;
                    const obj19 = { type: null, code: null, url: null };
                    obj19[0] = tmp4(tmp5[6]).CodedLinkType.GAME_PROFILE;
                    obj19[1] = formatted;
                    obj19[2] = iter;
                    formatted = items.push(obj19);
                  }
                  obj47 = set;
                }
                formatted = undefined;
                if (primaryHostRemainingPath != null) {
                  formatted = closure_1_15;
                  formatted = primaryHostRemainingPath.match(closure_1_15);
                }
                if (null != formatted) {
                  formatted = formatted[1];
                  if (!set.has(formatted)) {
                    formatted = obj49.add(formatted);
                    formatted = items;
                    obj20 = { type: null, code: null, url: null };
                    obj20[0] = tmp4(tmp5[6]).CodedLinkType.GAME_SERVER_SHARE;
                    obj20[1] = formatted;
                    obj20[2] = iter;
                    formatted = items.push(obj20);
                  }
                  obj49 = set;
                }
                formatted = undefined;
                if (primaryHostRemainingPath != null) {
                  formatted = closure_1_17;
                  formatted = primaryHostRemainingPath.match(closure_1_17);
                }
                if (null != formatted) {
                  formatted = formatted[1];
                  if (!set.has(formatted)) {
                    formatted = obj51.add(formatted);
                    formatted = items;
                    const obj21 = { type: null, code: null, url: null };
                    obj21[0] = tmp4(tmp5[6]).CodedLinkType.USER_PROFILE;
                    obj21[1] = formatted;
                    obj21[2] = iter;
                    formatted = items.push(obj21);
                  }
                  obj51 = set;
                }
                if ("/shop" === primaryHostRemainingPath) {
                  formatted = null;
                  if (null != query) {
                    formatted = tmp4(tmp5[14]).parse(query);
                    const tmp4Result6 = tmp4(tmp5[14]);
                  }
                  let str15;
                  if (formatted != null) {
                    str15 = formatted.tab;
                  }
                  formatted = closure_1_3;
                  if (str15 === closure_1_3.GAME_SHOPS) {
                    formatted = undefined;
                    if (formatted != null) {
                      formatted = formatted.applicationId;
                    }
                    if (null != formatted) {
                      formatted = undefined;
                      if (formatted != null) {
                        formatted = formatted.skuId;
                      }
                      if (null != formatted) {
                        ({ applicationId, skuId } = formatted);
                        formatted = typeof applicationId === "string";
                        if (typeof applicationId === "string") {
                          formatted = typeof skuId === "string";
                        }
                        if (formatted) {
                          formatted = globalThis;
                          const _HermesInternal5 = HermesInternal;
                          formatted = "" + skuId + "-" + applicationId;
                          if (!set.has(formatted)) {
                            formatted = obj56.add(formatted);
                            formatted = items;
                            obj22 = { type: null, code: null, url: null };
                            obj22[0] = tmp4(tmp5[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP;
                            obj22[1] = formatted;
                            obj22[2] = iter;
                            formatted = items.push(obj22);
                          }
                          obj56 = set;
                        }
                      }
                    }
                  }
                  formatted = undefined;
                  if (url.hash != null) {
                    formatted = closure_1_19;
                    formatted = str16.match(closure_1_19);
                  }
                  if (str15 == null) {
                    str15 = "";
                  }
                  let str17;
                  if (formatted != null) {
                    str17 = formatted[1];
                  }
                  if (str17 == null) {
                    str17 = "";
                  }
                  formatted = globalThis;
                  const _HermesInternal4 = HermesInternal;
                  formatted = "" + str15 + "-" + str17;
                  if (!set.has(formatted)) {
                    formatted = obj54.add(formatted);
                    formatted = items;
                    const obj23 = { type: null, code: null, url: null };
                    obj23[0] = tmp4(tmp5[6]).CodedLinkType.COLLECTIBLES_SHOP;
                    obj23[1] = formatted;
                    obj23[2] = iter;
                    formatted = items.push(obj23);
                  }
                  obj54 = set;
                }
              }
            }
            return 0;
          }
          const iter = mapped[Symbol.iterator]();
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
let result = require("set").fileFinishedImporting("modules/coded_links/findCodedLinks.tsx");

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
    let str4 = tmp.pathPrefix;
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
      let str8 = tmp22.pathPrefix;
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
      let str12 = tmp23.pathPrefix;
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
      let str16 = tmp24.pathPrefix;
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
      let str20 = tmp25.pathPrefix;
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
      if (replaced === tmp6.host) {
        return true;
      } else {
        const items = [obj3, obj5, obj7, obj10, obj12];
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
            flag = formatted.includes(url(4363).CodedLinkType.INVITE);
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        }
      }
      tmp6 = obj;
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
    function coerceLinksToCodedLinks(mapped) {
      if (null != mapped) {
        if (0 !== mapped.length) {
          const _Set = Set;
          const set = new Set();
          const items = [];
          function _loop(iter) {
            let formatted = closure_1_33;
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
                    obj[0] = tmp4(tmp5[6]).CodedLinkType.BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                let tmp4Result = tmp4(tmp5[7]);
                if (tmp4Result.isManualBuildOverrideLink(iter)) {
                  let obj4 = set;
                  if (!set.has(iter)) {
                    obj4.add(iter);
                    obj = { type: null, code: null, url: null };
                    obj[0] = tmp4(tmp5[6]).CodedLinkType.MANUAL_BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                tmp4Result = tmp4(tmp5[8]);
                if (tmp4Result.isExperimentEmbedURL(iter)) {
                  obj7 = set;
                  if (!set.has(iter)) {
                    obj7.add(iter);
                    obj1 = { type: null, code: null, url: null };
                    obj1[0] = tmp4(tmp5[6]).CodedLinkType.EXPERIMENT;
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
                    const inviteKeyFromUrlParams = tmp4(tmp5[9]).generateInviteKeyFromUrlParams(inviteHostRemainingPath.substring(1), url.search);
                    const invite = closure_1_2.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (tmp4Result2.isEmbeddedApplicationInvite(invite)) {
                        let obj13 = set;
                        if (!set.has(inviteKeyFromUrlParams)) {
                          obj13.add(inviteKeyFromUrlParams);
                          const obj2 = { type: null, code: null, url: null };
                          obj2[0] = tmp4(tmp5[6]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE;
                          obj2[1] = inviteKeyFromUrlParams;
                          obj2[2] = iter;
                          items.push(obj2);
                        }
                      }
                      tmp4Result2 = tmp4(tmp5[10]);
                    }
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      let obj11 = set;
                      if (!set.has(inviteKeyFromUrlParams)) {
                        obj11.add(inviteKeyFromUrlParams);
                        obj3 = { type: null, code: null, url: null };
                        obj3[0] = tmp4(tmp5[6]).CodedLinkType.INVITE;
                        obj3[1] = inviteKeyFromUrlParams;
                        obj3[2] = iter;
                        items.push(obj3);
                      }
                    }
                    const tmp4Result1 = tmp4(tmp5[9]);
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
                    obj4[0] = tmp4(tmp5[6]).CodedLinkType.TEMPLATE;
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
                  formatted = match2[1].toUpperCase();
                  if (formatted === tmp4(tmp5[6]).CodedLinkType.INVITE) {
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      const inviteKeyFromUrlParams1 = tmp4(tmp5[9]).generateInviteKeyFromUrlParams(match2[2], url.search);
                      let obj20 = set;
                      if (!set.has(inviteKeyFromUrlParams1)) {
                        obj20.add(inviteKeyFromUrlParams1);
                        obj5 = { type: null, code: null, url: null };
                        obj5[0] = tmp4(tmp5[6]).CodedLinkType.INVITE;
                        obj5[1] = inviteKeyFromUrlParams1;
                        obj5[2] = iter;
                        items.push(obj5);
                      }
                      const tmp4Result3 = tmp4(tmp5[9]);
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
                  const str23 = match2[1];
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
                    obj7[0] = tmp4(tmp5[6]).CodedLinkType.CHANNEL_LINK;
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
                  formatted = globalThis;
                  const _HermesInternal6 = HermesInternal;
                  let str7 = "";
                  formatted = "" + tmp48.guildId + "-" + tmp48.guildEventId;
                  if (null != tmp48.recurrenceId) {
                    const _HermesInternal = HermesInternal;
                    str7 = "-" + tmp48.recurrenceId;
                  }
                  const sum = formatted + str7;
                  if (!set.has(sum)) {
                    obj26.add(sum);
                    const obj9 = { type: null, code: null, url: null };
                    obj9[0] = tmp4(tmp5[6]).CodedLinkType.EVENT;
                    obj9[1] = sum;
                    obj9[2] = iter;
                    items.push(obj9);
                  }
                  obj26 = set;
                }
                let match5;
                if (primaryHostRemainingPath != null) {
                  match5 = primaryHostRemainingPath.match(closure_1_18);
                }
                if (null != match5) {
                  if (null != query) {
                    formatted = tmp4(tmp5[11]).parseOAuth2AuthorizeProps(query);
                    const clientId = formatted.clientId;
                    let tmp58 = null == clientId;
                    if (!tmp58) {
                      tmp58 = "" === clientId;
                    }
                    if (!tmp58) {
                      const scopes = formatted.scopes;
                      let someResult;
                      if (scopes != null) {
                        someResult = scopes.some((arg0) => arg0 !== callback(table[12]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                      }
                      tmp58 = someResult;
                    }
                    if (!tmp58) {
                      if (!set.has(clientId)) {
                        obj28.add(clientId);
                        obj10 = { type: null, code: null, url: null };
                        obj10[0] = tmp4(tmp5[6]).CodedLinkType.APP_OAUTH2_LINK;
                        obj10[1] = clientId;
                        obj10[2] = iter;
                        items.push(obj10);
                      }
                      obj28 = set;
                    }
                    const tmp4Result4 = tmp4(tmp5[11]);
                  }
                }
                let match6;
                if (primaryHostRemainingPath != null) {
                  match6 = primaryHostRemainingPath.match(closure_1_8);
                }
                if (null != match6) {
                  if (!set.has(match6[2])) {
                    obj30.add(tmp65);
                    obj11 = { type: null, code: null, url: null };
                    obj11[0] = tmp4(tmp5[6]).CodedLinkType.APP_DIRECTORY_PROFILE;
                    obj11[1] = tmp65;
                    obj11[2] = iter;
                    items.push(obj11);
                  }
                  obj30 = set;
                }
                let match7;
                if (primaryHostRemainingPath != null) {
                  match7 = primaryHostRemainingPath.match(closure_1_9);
                }
                if (null != match7) {
                  formatted = match7[2];
                  formatted = match7[3];
                  if (null != formatted) {
                    const storefrontSKUCodedLink = tmp4(tmp5[13]).makeStorefrontSKUCodedLink(formatted, formatted);
                    if (!set.has(storefrontSKUCodedLink)) {
                      obj35.add(storefrontSKUCodedLink);
                      obj12 = { type: null, code: null, url: null };
                      obj12[0] = tmp4(tmp5[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU;
                      obj12[1] = storefrontSKUCodedLink;
                      obj12[2] = iter;
                      items.push(obj12);
                    }
                    obj35 = set;
                    const tmp4Result5 = tmp4(tmp5[13]);
                  } else {
                    if (!set.has(formatted)) {
                      obj32.add(formatted);
                      obj13 = { type: null, code: null, url: null };
                      obj13[0] = tmp4(tmp5[6]).CodedLinkType.APP_DIRECTORY_STOREFRONT;
                      obj13[1] = formatted;
                      obj13[2] = iter;
                      items.push(obj13);
                    }
                    obj32 = set;
                  }
                }
                let match8;
                if (primaryHostRemainingPath != null) {
                  match8 = primaryHostRemainingPath.match(closure_1_10);
                }
                if (null != match8) {
                  if (!set.has(match8[1])) {
                    obj37.add(tmp80);
                    const obj14 = { type: null, code: null, url: null };
                    obj14[0] = tmp4(tmp5[6]).CodedLinkType.ACTIVITY_BOOKMARK;
                    obj14[1] = tmp80;
                    obj14[2] = iter;
                    items.push(obj14);
                  }
                  obj37 = set;
                }
                let match9;
                if (primaryHostRemainingPath != null) {
                  match9 = primaryHostRemainingPath.match(closure_1_11);
                }
                if (null != match9) {
                  const _HermesInternal2 = HermesInternal;
                  const combined = "" + match9[1] + "-" + match9[2];
                  if (!set.has(combined)) {
                    obj39.add(combined);
                    obj15 = { type: null, code: null, url: null };
                    obj15[0] = tmp4(tmp5[6]).CodedLinkType.GUILD_PRODUCT;
                    obj15[1] = combined;
                    obj15[2] = iter;
                    items.push(obj15);
                  }
                  obj39 = set;
                }
                let match10;
                if (primaryHostRemainingPath != null) {
                  match10 = primaryHostRemainingPath.match(closure_1_13);
                }
                if (null != match10) {
                  if (!set.has(match10[1])) {
                    obj41.add(tmp93);
                    const obj16 = { type: null, code: null, url: null };
                    obj16[0] = tmp4(tmp5[6]).CodedLinkType.SERVER_SHOP;
                    obj16[1] = tmp93;
                    obj16[2] = iter;
                    items.push(obj16);
                  }
                  obj41 = set;
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
                  formatted = globalThis;
                  const _HermesInternal3 = HermesInternal;
                  formatted = "" + match11[3] + "-" + tmp99;
                  if (!set.has(formatted)) {
                    formatted = obj43.add(formatted);
                    formatted = items;
                    obj17 = { type: null, code: null, url: null };
                    obj17[0] = tmp4(tmp5[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT;
                    obj17[1] = formatted;
                    obj17[2] = iter;
                    formatted = items.push(obj17);
                  }
                  obj43 = set;
                }
                const str13 = formatted(iter).primaryHostRemainingPath;
                formatted = undefined;
                if (str13 != null) {
                  formatted = closure_1_14;
                  formatted = str13.match(closure_1_14);
                }
                formatted = undefined;
                if (formatted != null) {
                  formatted = formatted[1];
                }
                if (formatted == null) {
                  formatted = null;
                }
                if (null != formatted) {
                  if (!set.has(formatted)) {
                    formatted = obj45.add(formatted);
                    formatted = items;
                    const obj18 = { type: null, code: null, url: null };
                    obj18[0] = tmp4(tmp5[6]).CodedLinkType.QUESTS_EMBED;
                    obj18[1] = formatted;
                    obj18[2] = iter;
                    formatted = items.push(obj18);
                  }
                  obj45 = set;
                }
                formatted = undefined;
                if (primaryHostRemainingPath != null) {
                  formatted = closure_1_16;
                  formatted = primaryHostRemainingPath.match(closure_1_16);
                }
                if (null != formatted) {
                  formatted = formatted[1];
                  if (!set.has(formatted)) {
                    formatted = obj47.add(formatted);
                    formatted = items;
                    const obj19 = { type: null, code: null, url: null };
                    obj19[0] = tmp4(tmp5[6]).CodedLinkType.GAME_PROFILE;
                    obj19[1] = formatted;
                    obj19[2] = iter;
                    formatted = items.push(obj19);
                  }
                  obj47 = set;
                }
                formatted = undefined;
                if (primaryHostRemainingPath != null) {
                  formatted = closure_1_15;
                  formatted = primaryHostRemainingPath.match(closure_1_15);
                }
                if (null != formatted) {
                  formatted = formatted[1];
                  if (!set.has(formatted)) {
                    formatted = obj49.add(formatted);
                    formatted = items;
                    obj20 = { type: null, code: null, url: null };
                    obj20[0] = tmp4(tmp5[6]).CodedLinkType.GAME_SERVER_SHARE;
                    obj20[1] = formatted;
                    obj20[2] = iter;
                    formatted = items.push(obj20);
                  }
                  obj49 = set;
                }
                formatted = undefined;
                if (primaryHostRemainingPath != null) {
                  formatted = closure_1_17;
                  formatted = primaryHostRemainingPath.match(closure_1_17);
                }
                if (null != formatted) {
                  formatted = formatted[1];
                  if (!set.has(formatted)) {
                    formatted = obj51.add(formatted);
                    formatted = items;
                    const obj21 = { type: null, code: null, url: null };
                    obj21[0] = tmp4(tmp5[6]).CodedLinkType.USER_PROFILE;
                    obj21[1] = formatted;
                    obj21[2] = iter;
                    formatted = items.push(obj21);
                  }
                  obj51 = set;
                }
                if ("/shop" === primaryHostRemainingPath) {
                  formatted = null;
                  if (null != query) {
                    formatted = tmp4(tmp5[14]).parse(query);
                    const tmp4Result6 = tmp4(tmp5[14]);
                  }
                  let str15;
                  if (formatted != null) {
                    str15 = formatted.tab;
                  }
                  formatted = closure_1_3;
                  if (str15 === closure_1_3.GAME_SHOPS) {
                    formatted = undefined;
                    if (formatted != null) {
                      formatted = formatted.applicationId;
                    }
                    if (null != formatted) {
                      formatted = undefined;
                      if (formatted != null) {
                        formatted = formatted.skuId;
                      }
                      if (null != formatted) {
                        ({ applicationId, skuId } = formatted);
                        formatted = typeof applicationId === "string";
                        if (typeof applicationId === "string") {
                          formatted = typeof skuId === "string";
                        }
                        if (formatted) {
                          formatted = globalThis;
                          const _HermesInternal5 = HermesInternal;
                          formatted = "" + skuId + "-" + applicationId;
                          if (!set.has(formatted)) {
                            formatted = obj56.add(formatted);
                            formatted = items;
                            obj22 = { type: null, code: null, url: null };
                            obj22[0] = tmp4(tmp5[6]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP;
                            obj22[1] = formatted;
                            obj22[2] = iter;
                            formatted = items.push(obj22);
                          }
                          obj56 = set;
                        }
                      }
                    }
                  }
                  formatted = undefined;
                  if (url.hash != null) {
                    formatted = closure_1_19;
                    formatted = str16.match(closure_1_19);
                  }
                  if (str15 == null) {
                    str15 = "";
                  }
                  let str17;
                  if (formatted != null) {
                    str17 = formatted[1];
                  }
                  if (str17 == null) {
                    str17 = "";
                  }
                  formatted = globalThis;
                  const _HermesInternal4 = HermesInternal;
                  formatted = "" + str15 + "-" + str17;
                  if (!set.has(formatted)) {
                    formatted = obj54.add(formatted);
                    formatted = items;
                    const obj23 = { type: null, code: null, url: null };
                    obj23[0] = tmp4(tmp5[6]).CodedLinkType.COLLECTIBLES_SHOP;
                    obj23[1] = formatted;
                    obj23[2] = iter;
                    formatted = items.push(obj23);
                  }
                  obj54 = set;
                }
              }
            }
            return 0;
          }
          const iter = mapped[Symbol.iterator]();
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
    items = result.slice(0, 10);
    const str3 = str.replaceAll(closure_22, " ");
  }
  return items[0];
};