import updateInvite from "updateInvite";
import { PRIMARY_DOMAIN } from "ME";
import { CollectibleShopTab } from "items";
import importDefaultResult from "set";
import importDefaultResult1 from "set";
import importDefaultResult2 from "set";
import importDefaultResult3 from "set";
import importDefaultResult4 from "set";

const require = arg1;
function getPathsFromURL(target) {
  const url = parseURLSafely(target);
  if (null != url) {
    if (null != url.pathname) {
      let obj = { url: null, inviteHostRemainingPath: null, templateHostRemainingPath: null, primaryHostRemainingPath: null };
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
      if (replaced1 === obj.host) {
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
      if (replaced2 === obj2.host) {
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
        if (replaced3 === obj4.host) {
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
        if (replaced4 === obj6.host) {
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
        if (replaced5 === obj9.host) {
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
        if (replaced6 === obj11.host) {
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
    return require(1469) /* Url */.parse(url);
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
const re17 = /^\/oauth2\/authorize/;
const re18 = /^#itemSkuId=([0-9]+)$/;
let tmp3 = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i;
let closure_19 = tmp3;
if (null == INVITE_HOST) {
  let obj = { host: null, pathPrefix: null };
} else if (INVITE_HOST.indexOf("/") >= 0) {
  let obj1 = require("Url");
  const parsed = obj1.parse(INVITE_HOST, undefined, true);
  obj = { host: null, pathPrefix: null };
  ({ host: obj3[0], pathname: obj3[1] } = parsed);
} else {
  obj = { host: null, pathPrefix: null };
  obj[0] = INVITE_HOST;
}
if (null == GUILD_TEMPLATE_HOST) {
  obj = { host: null, pathPrefix: null };
} else if (GUILD_TEMPLATE_HOST.indexOf("/") >= 0) {
  let obj4 = require("Url");
  const parsed1 = obj4.parse(GUILD_TEMPLATE_HOST, undefined, true);
  obj1 = { host: null, pathPrefix: null };
  ({ host: obj6[0], pathname: obj6[1] } = parsed1);
  obj = obj1;
} else {
  obj = { host: null, pathPrefix: null };
  obj[0] = GUILD_TEMPLATE_HOST;
}
if (WEBAPP_ENDPOINT == null) {
  let _HermesInternal = HermesInternal;
  WEBAPP_ENDPOINT = "//canary." + PRIMARY_DOMAIN;
}
if (null == WEBAPP_ENDPOINT) {
  let obj2 = { host: null, pathPrefix: null };
} else if (WEBAPP_ENDPOINT.indexOf("/") >= 0) {
  let obj7 = require("Url");
  const parsed2 = obj7.parse(WEBAPP_ENDPOINT, undefined, true);
  let obj3 = { host: null, pathPrefix: null };
  ({ host: obj9[0], pathname: obj9[1] } = parsed2);
  obj2 = obj3;
} else {
  obj2 = { host: null, pathPrefix: null };
  obj2[0] = WEBAPP_ENDPOINT;
}
let combined = "//canary." + PRIMARY_DOMAIN;
if (null == combined) {
  obj4 = { host: null, pathPrefix: null };
} else if (combined.indexOf("/") >= 0) {
  let obj10 = require("Url");
  const parsed3 = obj10.parse(combined, undefined, true);
  ({ host: obj12[0], pathname: obj12[1] } = parsed3);
  obj4 = { host: null, pathPrefix: null };
  let obj5 = { host: null, pathPrefix: null };
} else {
  obj4 = { host: null, pathPrefix: null };
  obj4[0] = combined;
}
let combined1 = "//ptb." + PRIMARY_DOMAIN;
if (null == combined1) {
  let obj6 = { host: null, pathPrefix: null };
} else if (combined1.indexOf("/") >= 0) {
  const parsed4 = require("Url").parse(combined1, undefined, true);
  obj7 = { host: null, pathPrefix: null };
  ({ host: obj15[0], pathname: obj15[1] } = parsed4);
  obj6 = obj7;
  let obj14 = require("Url");
} else {
  obj6 = { host: null, pathPrefix: null };
  obj6[0] = combined1;
}
if ("discordapp.com".indexOf("/") >= 0) {
  const parsed5 = require("Url").parse("discordapp.com", undefined, true);
  ({ host: obj18[0], pathname: obj18[1] } = parsed5);
  let obj9 = { host: null, pathPrefix: null };
  let obj17 = require("Url");
  let obj8 = { host: null, pathPrefix: null };
} else {
  obj9 = { host: "discordapp.com", pathPrefix: null };
}
if ("discord.com".indexOf("/") >= 0) {
  const parsed6 = require("Url").parse("discord.com", undefined, true);
  obj10 = { host: null, pathPrefix: null };
  ({ host: obj21[0], pathname: obj21[1] } = parsed6);
  let obj11 = obj10;
  let obj20 = require("Url");
} else {
  obj11 = { host: "discord.com", pathPrefix: null };
}
let str7 = obj.host;
if (str7 == null) {
  str7 = "";
}
let items = [require("set").escape(str7), , , , ];
let str8 = obj.host;
if (str8 == null) {
  str8 = "";
}
items[1] = require("set").escape(str8);
let str9 = obj2.host;
if (str9 == null) {
  str9 = "";
}
items[2] = require("set").escape(str9);
let str10 = obj9.host;
if (str10 == null) {
  str10 = "";
}
items[3] = require("set").escape(str10);
let str11 = obj11.host;
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
    const items = [];
    let combined = items;
    const _default = combined(4245).default;
    const parseToASTResult = combined(4245).default.parseToAST(str, true, { allowLinks: true });
    combined(7894).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === combined(outer1_1[8]).AST_KEY.LINK && typeof type.target === "y";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        combined.push(type.target);
      }
    });
    let match = str.match(closure_19);
    if (match == null) {
      match = [];
    }
    function coerceLinksToCodedLinks(combined) {
      if (null != combined) {
        if (0 !== combined.length) {
          const _Set = Set;
          const set = new Set();
          const items = [];
          function _loop(iter) {
            let applicationId;
            let inviteHostRemainingPath;
            let primaryHostRemainingPath;
            let skuId;
            let templateHostRemainingPath;
            let url;
            let formatted = outer1_28;
            ({ url, inviteHostRemainingPath, templateHostRemainingPath, primaryHostRemainingPath } = outer1_28(iter));
            if (null != url) {
              if (null != url.pathname) {
                formatted = set;
                formatted = items;
                if (obj55.isBuildOverrideLink(iter)) {
                  let obj = set;
                  if (!set.has(iter)) {
                    obj.add(iter);
                    obj = { type: null, code: null, url: null };
                    obj[0] = formatted(formatted[5]).CodedLinkType.BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                obj55 = set(items[9]);
                if (formattedResult.isManualBuildOverrideLink(iter)) {
                  let obj3 = set;
                  if (!set.has(iter)) {
                    obj3.add(iter);
                    obj = { type: null, code: null, url: null };
                    obj[0] = formatted(formatted[5]).CodedLinkType.MANUAL_BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                formattedResult = formatted(formatted[9]);
                if (formattedResult1.isExperimentEmbedURL(iter)) {
                  let obj6 = set;
                  if (!set.has(iter)) {
                    obj6.add(iter);
                    const obj1 = { type: null, code: null, url: null };
                    obj1[0] = formatted(formatted[5]).CodedLinkType.EXPERIMENT;
                    obj1[1] = iter;
                    obj1[2] = iter;
                    items.push(obj1);
                  }
                }
                let match;
                if (inviteHostRemainingPath != null) {
                  match = inviteHostRemainingPath.match(outer1_4);
                }
                if (null != match) {
                  if ("https:" === url.protocol) {
                    const inviteKeyFromUrlParams = formatted(formatted[11]).generateInviteKeyFromUrlParams(inviteHostRemainingPath.substring(1), url.search);
                    const invite = outer1_2.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (formattedResult3.isEmbeddedApplicationInvite(invite)) {
                        let obj12 = set;
                        if (!set.has(inviteKeyFromUrlParams)) {
                          obj12.add(inviteKeyFromUrlParams);
                          const obj2 = { type: null, code: null, url: null };
                          obj2[0] = formatted(formatted[5]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE;
                          obj2[1] = inviteKeyFromUrlParams;
                          obj2[2] = iter;
                          items.push(obj2);
                        }
                      }
                      formattedResult3 = formatted(formatted[12]);
                    }
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      let obj10 = set;
                      if (!set.has(inviteKeyFromUrlParams)) {
                        obj10.add(inviteKeyFromUrlParams);
                        obj3 = { type: null, code: null, url: null };
                        obj3[0] = formatted(formatted[5]).CodedLinkType.INVITE;
                        obj3[1] = inviteKeyFromUrlParams;
                        obj3[2] = iter;
                        items.push(obj3);
                      }
                    }
                    const formattedResult2 = formatted(formatted[11]);
                  }
                }
                let match1;
                if (templateHostRemainingPath != null) {
                  match1 = templateHostRemainingPath.match(outer1_4);
                }
                if (null != match1) {
                  const substr = templateHostRemainingPath.substring(1);
                  let obj14 = set;
                  if (!set.has(substr)) {
                    obj14.add(substr);
                    const obj4 = { type: null, code: null, url: null };
                    obj4[0] = formatted(formatted[5]).CodedLinkType.TEMPLATE;
                    obj4[1] = substr;
                    obj4[2] = iter;
                    items.push(obj4);
                  }
                }
                let match2;
                if (primaryHostRemainingPath != null) {
                  match2 = primaryHostRemainingPath.match(outer1_6);
                }
                if (null != match2) {
                  formatted = match2[1].toUpperCase();
                  if (formatted === formatted(formatted[5]).CodedLinkType.INVITE) {
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      const inviteKeyFromUrlParams1 = formatted(formatted[11]).generateInviteKeyFromUrlParams(match2[2], url.search);
                      let obj19 = set;
                      if (!set.has(inviteKeyFromUrlParams1)) {
                        obj19.add(inviteKeyFromUrlParams1);
                        const obj5 = { type: null, code: null, url: null };
                        obj5[0] = formatted(formatted[5]).CodedLinkType.INVITE;
                        obj5[1] = inviteKeyFromUrlParams1;
                        obj5[2] = iter;
                        items.push(obj5);
                      }
                      const formattedResult4 = formatted(formatted[11]);
                    }
                  } else {
                    let obj16 = set;
                    if (!set.has(match2[2])) {
                      obj16.add(tmp31);
                      obj6 = { type: null, code: null, url: null };
                      obj6[0] = formatted;
                      obj6[1] = tmp31;
                      obj6[2] = iter;
                      items.push(obj6);
                    }
                  }
                  const str23 = match2[1];
                }
                let match3;
                if (primaryHostRemainingPath != null) {
                  match3 = primaryHostRemainingPath.match(outer1_5);
                }
                if (null != match3) {
                  const replaced = primaryHostRemainingPath.replace("/channels/", "");
                  let obj21 = set;
                  if (!set.has(replaced)) {
                    obj21.add(replaced);
                    const obj7 = { type: null, code: null, url: null };
                    obj7[0] = formatted(formatted[5]).CodedLinkType.CHANNEL_LINK;
                    obj7[1] = replaced;
                    obj7[2] = iter;
                    items.push(obj7);
                  }
                }
                let tmp45 = null;
                if (null != url.pathname) {
                  const match4 = str6.match(outer1_7);
                  let tmp47 = null;
                  if (null != match4) {
                    tmp47 = null;
                    if (match4.length >= 4) {
                      const obj8 = { guildId: null, guildEventId: null, recurrenceId: null };
                      obj8[0] = match4[1];
                      obj8[1] = match4[2];
                      obj8[2] = match4[4];
                      tmp47 = obj8;
                    }
                  }
                  tmp45 = tmp47;
                }
                if (null != tmp45) {
                  formatted = globalThis;
                  const _HermesInternal6 = HermesInternal;
                  let str7 = "";
                  formatted = "" + tmp45.guildId + "-" + tmp45.guildEventId;
                  if (null != tmp45.recurrenceId) {
                    const _HermesInternal = HermesInternal;
                    str7 = "-" + tmp45.recurrenceId;
                  }
                  const sum = formatted + str7;
                  if (!set.has(sum)) {
                    obj25.add(sum);
                    const obj9 = { type: null, code: null, url: null };
                    obj9[0] = formatted(formatted[5]).CodedLinkType.EVENT;
                    obj9[1] = sum;
                    obj9[2] = iter;
                    items.push(obj9);
                  }
                  obj25 = set;
                }
                let match5;
                if (primaryHostRemainingPath != null) {
                  match5 = primaryHostRemainingPath.match(outer1_17);
                }
                if (null != match5) {
                  if (null != url.query) {
                    formatted = formatted(formatted[13]).parseOAuth2AuthorizeProps(url.query);
                    const clientId = formatted.clientId;
                    let tmp54 = null == clientId;
                    if (!tmp54) {
                      tmp54 = "" === clientId;
                    }
                    if (!tmp54) {
                      const scopes = formatted.scopes;
                      let someResult;
                      if (scopes != null) {
                        someResult = scopes.some((arg0) => arg0 !== callback(table[14]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                      }
                      tmp54 = someResult;
                    }
                    if (!tmp54) {
                      if (!set.has(clientId)) {
                        obj27.add(clientId);
                        obj10 = { type: null, code: null, url: null };
                        obj10[0] = formatted(formatted[5]).CodedLinkType.APP_OAUTH2_LINK;
                        obj10[1] = clientId;
                        obj10[2] = iter;
                        items.push(obj10);
                      }
                      obj27 = set;
                    }
                    const formattedResult5 = formatted(formatted[13]);
                  }
                }
                let match6;
                if (primaryHostRemainingPath != null) {
                  match6 = primaryHostRemainingPath.match(outer1_8);
                }
                if (null != match6) {
                  if (!set.has(match6[2])) {
                    obj29.add(tmp61);
                    const obj11 = { type: null, code: null, url: null };
                    obj11[0] = formatted(formatted[5]).CodedLinkType.APP_DIRECTORY_PROFILE;
                    obj11[1] = tmp61;
                    obj11[2] = iter;
                    items.push(obj11);
                  }
                  obj29 = set;
                }
                let match7;
                if (primaryHostRemainingPath != null) {
                  match7 = primaryHostRemainingPath.match(outer1_9);
                }
                if (null != match7) {
                  formatted = match7[2];
                  formatted = match7[3];
                  if (null != formatted) {
                    const storefrontSKUCodedLink = formatted(formatted[15]).makeStorefrontSKUCodedLink(formatted, formatted);
                    if (!set.has(storefrontSKUCodedLink)) {
                      obj34.add(storefrontSKUCodedLink);
                      obj12 = { type: null, code: null, url: null };
                      obj12[0] = formatted(formatted[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU;
                      obj12[1] = storefrontSKUCodedLink;
                      obj12[2] = iter;
                      items.push(obj12);
                    }
                    const formattedResult6 = formatted(formatted[15]);
                    obj34 = set;
                  } else {
                    if (!set.has(formatted)) {
                      obj31.add(formatted);
                      const obj13 = { type: null, code: null, url: null };
                      obj13[0] = formatted(formatted[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT;
                      obj13[1] = formatted;
                      obj13[2] = iter;
                      items.push(obj13);
                    }
                    obj31 = set;
                  }
                }
                let match8;
                if (primaryHostRemainingPath != null) {
                  match8 = primaryHostRemainingPath.match(outer1_10);
                }
                if (null != match8) {
                  if (!set.has(match8[1])) {
                    obj36.add(tmp76);
                    obj14 = { type: null, code: null, url: null };
                    obj14[0] = formatted(formatted[5]).CodedLinkType.ACTIVITY_BOOKMARK;
                    obj14[1] = tmp76;
                    obj14[2] = iter;
                    items.push(obj14);
                  }
                  obj36 = set;
                }
                let match9;
                if (primaryHostRemainingPath != null) {
                  match9 = primaryHostRemainingPath.match(outer1_11);
                }
                if (null != match9) {
                  const _HermesInternal2 = HermesInternal;
                  const combined = "" + match9[1] + "-" + match9[2];
                  if (!set.has(combined)) {
                    obj38.add(combined);
                    const obj15 = { type: null, code: null, url: null };
                    obj15[0] = formatted(formatted[5]).CodedLinkType.GUILD_PRODUCT;
                    obj15[1] = combined;
                    obj15[2] = iter;
                    items.push(obj15);
                  }
                  obj38 = set;
                }
                let match10;
                if (primaryHostRemainingPath != null) {
                  match10 = primaryHostRemainingPath.match(outer1_13);
                }
                if (null != match10) {
                  if (!set.has(match10[1])) {
                    obj40.add(tmp89);
                    obj16 = { type: null, code: null, url: null };
                    obj16[0] = formatted(formatted[5]).CodedLinkType.SERVER_SHOP;
                    obj16[1] = tmp89;
                    obj16[2] = iter;
                    items.push(obj16);
                  }
                  obj40 = set;
                }
                let match11;
                if (primaryHostRemainingPath != null) {
                  match11 = primaryHostRemainingPath.match(outer1_12);
                }
                if (null != match11) {
                  let tmp95 = match11[1];
                  if (tmp95 == null) {
                    tmp95 = match11[2];
                  }
                  const _HermesInternal3 = HermesInternal;
                  const combined1 = "" + match11[3] + "-" + tmp95;
                  if (!set.has(combined1)) {
                    obj42.add(combined1);
                    const obj17 = { type: null, code: null, url: null };
                    obj17[0] = formatted(formatted[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT;
                    obj17[1] = combined1;
                    obj17[2] = iter;
                    formatted = items.push(obj17);
                  }
                  obj42 = set;
                }
                const str13 = formatted(iter).primaryHostRemainingPath;
                formatted = undefined;
                if (str13 != null) {
                  formatted = outer1_14;
                  formatted = str13.match(outer1_14);
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
                    formatted = obj44.add(formatted);
                    formatted = items;
                    const obj18 = { type: null, code: null, url: null };
                    obj18[0] = formatted(formatted[5]).CodedLinkType.QUESTS_EMBED;
                    obj18[1] = formatted;
                    obj18[2] = iter;
                    formatted = items.push(obj18);
                  }
                  obj44 = set;
                }
                formatted = undefined;
                if (primaryHostRemainingPath != null) {
                  formatted = outer1_16;
                  formatted = primaryHostRemainingPath.match(outer1_16);
                }
                if (null != formatted) {
                  formatted = formatted[1];
                  if (!set.has(formatted)) {
                    formatted = obj46.add(formatted);
                    formatted = items;
                    obj19 = { type: null, code: null, url: null };
                    obj19[0] = formatted(formatted[5]).CodedLinkType.GAME_PROFILE;
                    obj19[1] = formatted;
                    obj19[2] = iter;
                    formatted = items.push(obj19);
                  }
                  obj46 = set;
                }
                formatted = undefined;
                if (primaryHostRemainingPath != null) {
                  formatted = outer1_15;
                  formatted = primaryHostRemainingPath.match(outer1_15);
                }
                if (null != formatted) {
                  formatted = formatted[1];
                  if (!set.has(formatted)) {
                    formatted = obj48.add(formatted);
                    formatted = items;
                    const obj20 = { type: null, code: null, url: null };
                    obj20[0] = formatted(formatted[5]).CodedLinkType.GAME_SERVER_SHARE;
                    obj20[1] = formatted;
                    obj20[2] = iter;
                    formatted = items.push(obj20);
                  }
                  obj48 = set;
                }
                if ("/shop" === primaryHostRemainingPath) {
                  formatted = null;
                  if (null != url.query) {
                    formatted = formatted(formatted[16]).parse(url.query);
                    const formattedResult7 = formatted(formatted[16]);
                  }
                  let str15;
                  if (formatted != null) {
                    str15 = formatted.tab;
                  }
                  formatted = outer1_3;
                  if (str15 === outer1_3.GAME_SHOPS) {
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
                        formatted = typeof applicationId === "y";
                        if (typeof applicationId !== "ge") {
                          formatted = typeof skuId === "y";
                        }
                        if (formatted) {
                          formatted = globalThis;
                          const _HermesInternal5 = HermesInternal;
                          formatted = "" + skuId + "-" + applicationId;
                          if (!set.has(formatted)) {
                            formatted = obj53.add(formatted);
                            formatted = items;
                            obj21 = { type: null, code: null, url: null };
                            obj21[0] = formatted(formatted[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP;
                            obj21[1] = formatted;
                            obj21[2] = iter;
                            formatted = items.push(obj21);
                          }
                          obj53 = set;
                        }
                      }
                    }
                  }
                  formatted = undefined;
                  if (url.hash != null) {
                    formatted = outer1_18;
                    formatted = str16.match(outer1_18);
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
                    formatted = obj51.add(formatted);
                    formatted = items;
                    const obj22 = { type: null, code: null, url: null };
                    obj22[0] = formatted(formatted[5]).CodedLinkType.COLLECTIBLES_SHOP;
                    obj22[1] = formatted;
                    obj22[2] = iter;
                    formatted = items.push(obj22);
                  }
                  obj51 = set;
                }
              }
            }
            return 0;
          }
          const iter = combined[Symbol.iterator]();
          while (iter !== undefined) {
            let _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      return [];
    }
    combined = items.concat(match);
    const result = coerceLinksToCodedLinks(combined);
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
items[4] = require("set").escape(str11);
const found = items.filter(Boolean);
const regExp1 = new RegExp("((https?://[^ ]*)|^|\\s)(" + found.join("|") + ")", "g");
let result = require("items").fileFinishedImporting("modules/coded_links/findCodedLinks.tsx");

export default findCodedLinks;
export const DEVLINK_REGEX = tmp3;
export const remainingPathFromDiscordHostMatch = function remainingPathFromDiscordHostMatch(parseURLSafelyResult) {
  let replaced;
  if (parseURLSafelyResult.host != null) {
    replaced = str.replace(/^www[.]/i, "");
  }
  let tmp3 = null;
  if (replaced === obj2.host) {
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
    if (replaced1 === obj4.host) {
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
    if (replaced2 === obj6.host) {
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
    if (replaced3 === obj9.host) {
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
    if (replaced4 === obj11.host) {
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
        const items = [obj2, obj4, obj6, obj9, obj11];
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
            flag = formatted.includes(url(4244).CodedLinkType.INVITE);
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
    const str = sanitizeUrlResult.replace(regExp1, (arg0, arg1, arg2, arg3) => {
      let combined = arg0;
      if (null == arg2) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg1 + "http://" + arg3;
      }
      return combined;
    });
    const items1 = [];
    let combined = items1;
    const _default = combined(4245).default;
    const parseToASTResult = combined(4245).default.parseToAST(str, true, { allowLinks: true });
    combined(7894).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === combined(outer1_1[8]).AST_KEY.LINK && typeof type.target === "y";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        combined.push(type.target);
      }
    });
    let match = str.match(closure_19);
    if (match == null) {
      match = [];
    }
    function coerceLinksToCodedLinks(combined) {
      if (null != combined) {
        if (0 !== combined.length) {
          const _Set = Set;
          const set = new Set();
          const items = [];
          function _loop(iter) {
            let applicationId;
            let inviteHostRemainingPath;
            let primaryHostRemainingPath;
            let skuId;
            let templateHostRemainingPath;
            let url;
            let formatted = outer1_28;
            ({ url, inviteHostRemainingPath, templateHostRemainingPath, primaryHostRemainingPath } = outer1_28(iter));
            if (null != url) {
              if (null != url.pathname) {
                formatted = set;
                formatted = items;
                if (obj55.isBuildOverrideLink(iter)) {
                  let obj = set;
                  if (!set.has(iter)) {
                    obj.add(iter);
                    obj = { type: null, code: null, url: null };
                    obj[0] = formatted(formatted[5]).CodedLinkType.BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                obj55 = set(items[9]);
                if (formattedResult.isManualBuildOverrideLink(iter)) {
                  let obj3 = set;
                  if (!set.has(iter)) {
                    obj3.add(iter);
                    obj = { type: null, code: null, url: null };
                    obj[0] = formatted(formatted[5]).CodedLinkType.MANUAL_BUILD_OVERRIDE;
                    obj[1] = iter;
                    obj[2] = iter;
                    items.push(obj);
                  }
                }
                formattedResult = formatted(formatted[9]);
                if (formattedResult1.isExperimentEmbedURL(iter)) {
                  let obj6 = set;
                  if (!set.has(iter)) {
                    obj6.add(iter);
                    const obj1 = { type: null, code: null, url: null };
                    obj1[0] = formatted(formatted[5]).CodedLinkType.EXPERIMENT;
                    obj1[1] = iter;
                    obj1[2] = iter;
                    items.push(obj1);
                  }
                }
                let match;
                if (inviteHostRemainingPath != null) {
                  match = inviteHostRemainingPath.match(outer1_4);
                }
                if (null != match) {
                  if ("https:" === url.protocol) {
                    const inviteKeyFromUrlParams = formatted(formatted[11]).generateInviteKeyFromUrlParams(inviteHostRemainingPath.substring(1), url.search);
                    const invite = outer1_2.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (formattedResult3.isEmbeddedApplicationInvite(invite)) {
                        let obj12 = set;
                        if (!set.has(inviteKeyFromUrlParams)) {
                          obj12.add(inviteKeyFromUrlParams);
                          const obj2 = { type: null, code: null, url: null };
                          obj2[0] = formatted(formatted[5]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE;
                          obj2[1] = inviteKeyFromUrlParams;
                          obj2[2] = iter;
                          items.push(obj2);
                        }
                      }
                      formattedResult3 = formatted(formatted[12]);
                    }
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      let obj10 = set;
                      if (!set.has(inviteKeyFromUrlParams)) {
                        obj10.add(inviteKeyFromUrlParams);
                        obj3 = { type: null, code: null, url: null };
                        obj3[0] = formatted(formatted[5]).CodedLinkType.INVITE;
                        obj3[1] = inviteKeyFromUrlParams;
                        obj3[2] = iter;
                        items.push(obj3);
                      }
                    }
                    const formattedResult2 = formatted(formatted[11]);
                  }
                }
                let match1;
                if (templateHostRemainingPath != null) {
                  match1 = templateHostRemainingPath.match(outer1_4);
                }
                if (null != match1) {
                  const substr = templateHostRemainingPath.substring(1);
                  let obj14 = set;
                  if (!set.has(substr)) {
                    obj14.add(substr);
                    const obj4 = { type: null, code: null, url: null };
                    obj4[0] = formatted(formatted[5]).CodedLinkType.TEMPLATE;
                    obj4[1] = substr;
                    obj4[2] = iter;
                    items.push(obj4);
                  }
                }
                let match2;
                if (primaryHostRemainingPath != null) {
                  match2 = primaryHostRemainingPath.match(outer1_6);
                }
                if (null != match2) {
                  formatted = match2[1].toUpperCase();
                  if (formatted === formatted(formatted[5]).CodedLinkType.INVITE) {
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      const inviteKeyFromUrlParams1 = formatted(formatted[11]).generateInviteKeyFromUrlParams(match2[2], url.search);
                      let obj19 = set;
                      if (!set.has(inviteKeyFromUrlParams1)) {
                        obj19.add(inviteKeyFromUrlParams1);
                        const obj5 = { type: null, code: null, url: null };
                        obj5[0] = formatted(formatted[5]).CodedLinkType.INVITE;
                        obj5[1] = inviteKeyFromUrlParams1;
                        obj5[2] = iter;
                        items.push(obj5);
                      }
                      const formattedResult4 = formatted(formatted[11]);
                    }
                  } else {
                    let obj16 = set;
                    if (!set.has(match2[2])) {
                      obj16.add(tmp31);
                      obj6 = { type: null, code: null, url: null };
                      obj6[0] = formatted;
                      obj6[1] = tmp31;
                      obj6[2] = iter;
                      items.push(obj6);
                    }
                  }
                  const str23 = match2[1];
                }
                let match3;
                if (primaryHostRemainingPath != null) {
                  match3 = primaryHostRemainingPath.match(outer1_5);
                }
                if (null != match3) {
                  const replaced = primaryHostRemainingPath.replace("/channels/", "");
                  let obj21 = set;
                  if (!set.has(replaced)) {
                    obj21.add(replaced);
                    const obj7 = { type: null, code: null, url: null };
                    obj7[0] = formatted(formatted[5]).CodedLinkType.CHANNEL_LINK;
                    obj7[1] = replaced;
                    obj7[2] = iter;
                    items.push(obj7);
                  }
                }
                let tmp45 = null;
                if (null != url.pathname) {
                  const match4 = str6.match(outer1_7);
                  let tmp47 = null;
                  if (null != match4) {
                    tmp47 = null;
                    if (match4.length >= 4) {
                      const obj8 = { guildId: null, guildEventId: null, recurrenceId: null };
                      obj8[0] = match4[1];
                      obj8[1] = match4[2];
                      obj8[2] = match4[4];
                      tmp47 = obj8;
                    }
                  }
                  tmp45 = tmp47;
                }
                if (null != tmp45) {
                  formatted = globalThis;
                  const _HermesInternal6 = HermesInternal;
                  let str7 = "";
                  formatted = "" + tmp45.guildId + "-" + tmp45.guildEventId;
                  if (null != tmp45.recurrenceId) {
                    const _HermesInternal = HermesInternal;
                    str7 = "-" + tmp45.recurrenceId;
                  }
                  const sum = formatted + str7;
                  if (!set.has(sum)) {
                    obj25.add(sum);
                    const obj9 = { type: null, code: null, url: null };
                    obj9[0] = formatted(formatted[5]).CodedLinkType.EVENT;
                    obj9[1] = sum;
                    obj9[2] = iter;
                    items.push(obj9);
                  }
                  obj25 = set;
                }
                let match5;
                if (primaryHostRemainingPath != null) {
                  match5 = primaryHostRemainingPath.match(outer1_17);
                }
                if (null != match5) {
                  if (null != url.query) {
                    formatted = formatted(formatted[13]).parseOAuth2AuthorizeProps(url.query);
                    const clientId = formatted.clientId;
                    let tmp54 = null == clientId;
                    if (!tmp54) {
                      tmp54 = "" === clientId;
                    }
                    if (!tmp54) {
                      const scopes = formatted.scopes;
                      let someResult;
                      if (scopes != null) {
                        someResult = scopes.some((arg0) => arg0 !== callback(table[14]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                      }
                      tmp54 = someResult;
                    }
                    if (!tmp54) {
                      if (!set.has(clientId)) {
                        obj27.add(clientId);
                        obj10 = { type: null, code: null, url: null };
                        obj10[0] = formatted(formatted[5]).CodedLinkType.APP_OAUTH2_LINK;
                        obj10[1] = clientId;
                        obj10[2] = iter;
                        items.push(obj10);
                      }
                      obj27 = set;
                    }
                    const formattedResult5 = formatted(formatted[13]);
                  }
                }
                let match6;
                if (primaryHostRemainingPath != null) {
                  match6 = primaryHostRemainingPath.match(outer1_8);
                }
                if (null != match6) {
                  if (!set.has(match6[2])) {
                    obj29.add(tmp61);
                    const obj11 = { type: null, code: null, url: null };
                    obj11[0] = formatted(formatted[5]).CodedLinkType.APP_DIRECTORY_PROFILE;
                    obj11[1] = tmp61;
                    obj11[2] = iter;
                    items.push(obj11);
                  }
                  obj29 = set;
                }
                let match7;
                if (primaryHostRemainingPath != null) {
                  match7 = primaryHostRemainingPath.match(outer1_9);
                }
                if (null != match7) {
                  formatted = match7[2];
                  formatted = match7[3];
                  if (null != formatted) {
                    const storefrontSKUCodedLink = formatted(formatted[15]).makeStorefrontSKUCodedLink(formatted, formatted);
                    if (!set.has(storefrontSKUCodedLink)) {
                      obj34.add(storefrontSKUCodedLink);
                      obj12 = { type: null, code: null, url: null };
                      obj12[0] = formatted(formatted[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU;
                      obj12[1] = storefrontSKUCodedLink;
                      obj12[2] = iter;
                      items.push(obj12);
                    }
                    const formattedResult6 = formatted(formatted[15]);
                    obj34 = set;
                  } else {
                    if (!set.has(formatted)) {
                      obj31.add(formatted);
                      const obj13 = { type: null, code: null, url: null };
                      obj13[0] = formatted(formatted[5]).CodedLinkType.APP_DIRECTORY_STOREFRONT;
                      obj13[1] = formatted;
                      obj13[2] = iter;
                      items.push(obj13);
                    }
                    obj31 = set;
                  }
                }
                let match8;
                if (primaryHostRemainingPath != null) {
                  match8 = primaryHostRemainingPath.match(outer1_10);
                }
                if (null != match8) {
                  if (!set.has(match8[1])) {
                    obj36.add(tmp76);
                    obj14 = { type: null, code: null, url: null };
                    obj14[0] = formatted(formatted[5]).CodedLinkType.ACTIVITY_BOOKMARK;
                    obj14[1] = tmp76;
                    obj14[2] = iter;
                    items.push(obj14);
                  }
                  obj36 = set;
                }
                let match9;
                if (primaryHostRemainingPath != null) {
                  match9 = primaryHostRemainingPath.match(outer1_11);
                }
                if (null != match9) {
                  const _HermesInternal2 = HermesInternal;
                  const combined = "" + match9[1] + "-" + match9[2];
                  if (!set.has(combined)) {
                    obj38.add(combined);
                    const obj15 = { type: null, code: null, url: null };
                    obj15[0] = formatted(formatted[5]).CodedLinkType.GUILD_PRODUCT;
                    obj15[1] = combined;
                    obj15[2] = iter;
                    items.push(obj15);
                  }
                  obj38 = set;
                }
                let match10;
                if (primaryHostRemainingPath != null) {
                  match10 = primaryHostRemainingPath.match(outer1_13);
                }
                if (null != match10) {
                  if (!set.has(match10[1])) {
                    obj40.add(tmp89);
                    obj16 = { type: null, code: null, url: null };
                    obj16[0] = formatted(formatted[5]).CodedLinkType.SERVER_SHOP;
                    obj16[1] = tmp89;
                    obj16[2] = iter;
                    items.push(obj16);
                  }
                  obj40 = set;
                }
                let match11;
                if (primaryHostRemainingPath != null) {
                  match11 = primaryHostRemainingPath.match(outer1_12);
                }
                if (null != match11) {
                  let tmp95 = match11[1];
                  if (tmp95 == null) {
                    tmp95 = match11[2];
                  }
                  const _HermesInternal3 = HermesInternal;
                  const combined1 = "" + match11[3] + "-" + tmp95;
                  if (!set.has(combined1)) {
                    obj42.add(combined1);
                    const obj17 = { type: null, code: null, url: null };
                    obj17[0] = formatted(formatted[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT;
                    obj17[1] = combined1;
                    obj17[2] = iter;
                    formatted = items.push(obj17);
                  }
                  obj42 = set;
                }
                const str13 = formatted(iter).primaryHostRemainingPath;
                formatted = undefined;
                if (str13 != null) {
                  formatted = outer1_14;
                  formatted = str13.match(outer1_14);
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
                    formatted = obj44.add(formatted);
                    formatted = items;
                    const obj18 = { type: null, code: null, url: null };
                    obj18[0] = formatted(formatted[5]).CodedLinkType.QUESTS_EMBED;
                    obj18[1] = formatted;
                    obj18[2] = iter;
                    formatted = items.push(obj18);
                  }
                  obj44 = set;
                }
                formatted = undefined;
                if (primaryHostRemainingPath != null) {
                  formatted = outer1_16;
                  formatted = primaryHostRemainingPath.match(outer1_16);
                }
                if (null != formatted) {
                  formatted = formatted[1];
                  if (!set.has(formatted)) {
                    formatted = obj46.add(formatted);
                    formatted = items;
                    obj19 = { type: null, code: null, url: null };
                    obj19[0] = formatted(formatted[5]).CodedLinkType.GAME_PROFILE;
                    obj19[1] = formatted;
                    obj19[2] = iter;
                    formatted = items.push(obj19);
                  }
                  obj46 = set;
                }
                formatted = undefined;
                if (primaryHostRemainingPath != null) {
                  formatted = outer1_15;
                  formatted = primaryHostRemainingPath.match(outer1_15);
                }
                if (null != formatted) {
                  formatted = formatted[1];
                  if (!set.has(formatted)) {
                    formatted = obj48.add(formatted);
                    formatted = items;
                    const obj20 = { type: null, code: null, url: null };
                    obj20[0] = formatted(formatted[5]).CodedLinkType.GAME_SERVER_SHARE;
                    obj20[1] = formatted;
                    obj20[2] = iter;
                    formatted = items.push(obj20);
                  }
                  obj48 = set;
                }
                if ("/shop" === primaryHostRemainingPath) {
                  formatted = null;
                  if (null != url.query) {
                    formatted = formatted(formatted[16]).parse(url.query);
                    const formattedResult7 = formatted(formatted[16]);
                  }
                  let str15;
                  if (formatted != null) {
                    str15 = formatted.tab;
                  }
                  formatted = outer1_3;
                  if (str15 === outer1_3.GAME_SHOPS) {
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
                        formatted = typeof applicationId === "y";
                        if (typeof applicationId !== "ge") {
                          formatted = typeof skuId === "y";
                        }
                        if (formatted) {
                          formatted = globalThis;
                          const _HermesInternal5 = HermesInternal;
                          formatted = "" + skuId + "-" + applicationId;
                          if (!set.has(formatted)) {
                            formatted = obj53.add(formatted);
                            formatted = items;
                            obj21 = { type: null, code: null, url: null };
                            obj21[0] = formatted(formatted[5]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP;
                            obj21[1] = formatted;
                            obj21[2] = iter;
                            formatted = items.push(obj21);
                          }
                          obj53 = set;
                        }
                      }
                    }
                  }
                  formatted = undefined;
                  if (url.hash != null) {
                    formatted = outer1_18;
                    formatted = str16.match(outer1_18);
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
                    formatted = obj51.add(formatted);
                    formatted = items;
                    const obj22 = { type: null, code: null, url: null };
                    obj22[0] = formatted(formatted[5]).CodedLinkType.COLLECTIBLES_SHOP;
                    obj22[1] = formatted;
                    obj22[2] = iter;
                    formatted = items.push(obj22);
                  }
                  obj51 = set;
                }
              }
            }
            return 0;
          }
          const iter = combined[Symbol.iterator]();
          while (iter !== undefined) {
            let _loopResult = _loop(iter.next());
            continue;
          }
          return items;
        }
      }
      return [];
    }
    combined = items1.concat(match);
    const result = coerceLinksToCodedLinks(combined);
    items = result.slice(0, 10);
    let obj = combined(7894);
  }
  return items[0];
};