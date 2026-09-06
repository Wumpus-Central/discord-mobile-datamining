// discord_app/modules/coded_links/findCodedLinks.tsx
import BuildOverrideUtils from "../build_overrides/BuildOverrideUtils.tsx";
import Url from "../../../_runtime/01367_Url.js";
import InviteCodeUtils from "../instant_invite/InviteCodeUtils.tsx";
import CodedLink from "CodedLink.tsx";
import findCodedLinkUrlsDefault from "findCodedLinkUrls.native.tsx";
import keysSorter from "../../../_runtime/05456_keysSorter.js";
import storefrontMessageEmbedCodedLink from "../application_storefront/storefrontMessageEmbedCodedLink.tsx";
import InviteTypeUtils from "../instant_invite/InviteTypeUtils.tsx";
import ExperimentEmbedUtils from "../experiments/ExperimentEmbedUtils.tsx";
import Authorize from "../oauth2/Authorize.tsx";
import InviteStore from "../../stores/InviteStore.tsx";
import RegexUtils from "../../utils/RegexUtils.tsx";

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
      obj.templateHostRemainingPath = tmp7;
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
        let str13 = obj2.pathPrefix;
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
          let str17 = obj4.pathPrefix;
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
          let str21 = obj6.pathPrefix;
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
          let str25 = obj9.pathPrefix;
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
          let str29 = obj11.pathPrefix;
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
const re13 = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/;
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
  let obj1 = fn(1367);
  let parsed = obj1.parse(INVITE_HOST, undefined, true);
  obj = { host: null, pathPrefix: null };
  ({ host: obj3.host, pathname: obj3.pathPrefix } = parsed);
} else {
  obj = { host: INVITE_HOST, pathPrefix: null };
}
if (null == GUILD_TEMPLATE_HOST) {
  obj = { host: null, pathPrefix: null };
} else if (GUILD_TEMPLATE_HOST.indexOf("/") >= 0) {
  let obj4 = fn(1367);
  const parsed1 = obj4.parse(GUILD_TEMPLATE_HOST, undefined, true);
  obj1 = { host: null, pathPrefix: null };
  ({ host: obj6.host, pathname: obj6.pathPrefix } = parsed1);
  obj = obj1;
} else {
  obj = { host: GUILD_TEMPLATE_HOST, pathPrefix: null };
}
if (WEBAPP_ENDPOINT == null) {
  let _HermesInternal = HermesInternal;
  WEBAPP_ENDPOINT = "//canary." + PRIMARY_DOMAIN;
}
if (null == WEBAPP_ENDPOINT) {
  let obj2 = { host: null, pathPrefix: null };
} else if (WEBAPP_ENDPOINT.indexOf("/") >= 0) {
  let obj7 = fn(1367);
  const parsed2 = obj7.parse(WEBAPP_ENDPOINT, undefined, true);
  let obj3 = { host: null, pathPrefix: null };
  ({ host: obj9.host, pathname: obj9.pathPrefix } = parsed2);
  obj2 = obj3;
} else {
  obj2 = { host: WEBAPP_ENDPOINT, pathPrefix: null };
}
let combined = "//canary." + PRIMARY_DOMAIN;
if (null == combined) {
  obj4 = { host: null, pathPrefix: null };
} else if (combined.indexOf("/") >= 0) {
  let obj10 = fn(1367);
  const parsed3 = obj10.parse(combined, undefined, true);
  ({ host: obj12.host, pathname: obj12.pathPrefix } = parsed3);
  obj4 = { host: null, pathPrefix: null };
  let obj5 = { host: null, pathPrefix: null };
} else {
  obj4 = { host: combined, pathPrefix: null };
}
let combined1 = "//ptb." + PRIMARY_DOMAIN;
if (null == combined1) {
  let obj6 = { host: null, pathPrefix: null };
} else if (combined1.indexOf("/") >= 0) {
  const parsed4 = fn(1367).parse(combined1, undefined, true);
  obj7 = { host: null, pathPrefix: null };
  ({ host: obj15.host, pathname: obj15.pathPrefix } = parsed4);
  obj6 = obj7;
  let obj14 = fn(1367);
} else {
  obj6 = { host: combined1, pathPrefix: null };
}
if ("discordapp.com".indexOf("/") >= 0) {
  const parsed5 = fn(1367).parse("discordapp.com", undefined, true);
  ({ host: obj18.host, pathname: obj18.pathPrefix } = parsed5);
  let obj9 = { host: null, pathPrefix: null };
  let obj17 = fn(1367);
  let obj8 = { host: null, pathPrefix: null };
} else {
  obj9 = { host: "discordapp.com", pathPrefix: null };
}
if ("discord.com".indexOf("/") >= 0) {
  const parsed6 = fn(1367).parse("discord.com", undefined, true);
  obj10 = { host: null, pathPrefix: null };
  ({ host: obj21.host, pathname: obj21.pathPrefix } = parsed6);
  let obj11 = obj10;
  let obj20 = fn(1367);
} else {
  obj11 = { host: "discord.com", pathPrefix: null };
}
let str7 = obj.host;
if (str7 == null) {
  str7 = "";
}
let items = [RegexUtils.escape(str7), , , ,];
let str8 = obj.host;
if (str8 == null) {
  str8 = "";
}
items[1] = RegexUtils.escape(str8);
let str9 = obj2.host;
if (str9 == null) {
  str9 = "";
}
items[2] = RegexUtils.escape(str9);
let str10 = obj9.host;
if (str10 == null) {
  str10 = "";
}
items[3] = RegexUtils.escape(str10);
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
    let match = str.match(re21);
    if (match == null) {
      match = [];
    }
    function coerceLinksToCodedLinks(arg0) {
      if (null != arg0) {
        if (0 !== arg0.length) {
          const _Set = Set;
          const set = new Set();
          const items = [];
          function _loop(iter) {
            ({ url, inviteHostRemainingPath, templateHostRemainingPath, primaryHostRemainingPath } =
              getPathsFromURL(iter));
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
                  let obj1 = set;
                  if (!set.has(iter)) {
                    obj1.add(iter);
                    obj = { type: CodedLink.CodedLinkType.BUILD_OVERRIDE, code: iter, url: iter };
                    items.push(obj);
                  }
                }
                let tmp4Result = BuildOverrideUtils;
                if (tmp4Result.isManualBuildOverrideLink(iter)) {
                  obj4 = set;
                  if (!set.has(iter)) {
                    obj4.add(iter);
                    obj = { type: CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE, code: iter, url: iter };
                    items.push(obj);
                  }
                }
                tmp4Result = ExperimentEmbedUtils;
                if (tmp4Result.isExperimentEmbedURL(iter)) {
                  let obj7 = set;
                  if (!set.has(iter)) {
                    obj7.add(iter);
                    obj1 = { type: CodedLink.CodedLinkType.EXPERIMENT, code: iter, url: iter };
                    items.push(obj1);
                  }
                }
                let match;
                if (inviteHostRemainingPath != null) {
                  match = inviteHostRemainingPath.match(closure_2_5);
                }
                if (null != match) {
                  if ("https:" === url.protocol) {
                    const inviteKeyFromUrlParams = InviteCodeUtils.generateInviteKeyFromUrlParams(
                      inviteHostRemainingPath.substring(1),
                      url.search,
                    );
                    invite = invite.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (tmp4Result2.isEmbeddedApplicationInvite(invite)) {
                        let obj13 = set;
                        if (!set.has(inviteKeyFromUrlParams)) {
                          obj13.add(inviteKeyFromUrlParams);
                          obj2 = {
                            type: CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE,
                            code: inviteKeyFromUrlParams,
                            url: iter,
                          };
                          items.push(obj2);
                        }
                      }
                      tmp4Result2 = InviteTypeUtils;
                    }
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      obj11 = set;
                      if (!set.has(inviteKeyFromUrlParams)) {
                        obj11.add(inviteKeyFromUrlParams);
                        const obj3 = { type: CodedLink.CodedLinkType.INVITE, code: inviteKeyFromUrlParams, url: iter };
                        items.push(obj3);
                      }
                    }
                    const tmp4Result1 = InviteCodeUtils;
                  }
                }
                let match1;
                if (templateHostRemainingPath != null) {
                  match1 = templateHostRemainingPath.match(closure_2_5);
                }
                if (null != match1) {
                  const substr = templateHostRemainingPath.substring(1);
                  let obj15 = set;
                  if (!set.has(substr)) {
                    obj15.add(substr);
                    obj4 = { type: CodedLink.CodedLinkType.TEMPLATE, code: substr, url: iter };
                    items.push(obj4);
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
                      const inviteKeyFromUrlParams1 = InviteCodeUtils.generateInviteKeyFromUrlParams(
                        match2[2],
                        url.search,
                      );
                      let obj20 = set;
                      if (!set.has(inviteKeyFromUrlParams1)) {
                        obj20.add(inviteKeyFromUrlParams1);
                        const obj5 = { type: CodedLink.CodedLinkType.INVITE, code: inviteKeyFromUrlParams1, url: iter };
                        items.push(obj5);
                      }
                      const tmp4Result3 = InviteCodeUtils;
                    }
                  } else {
                    let obj17 = set;
                    if (!set.has(match2[2])) {
                      obj17.add(tmp34);
                      obj6 = { type: formatted, code: tmp34, url: iter };
                      items.push(obj6);
                    }
                  }
                }
                let match3;
                if (primaryHostRemainingPath != null) {
                  match3 = primaryHostRemainingPath.match(closure_2_6);
                }
                if (null != match3) {
                  const replaced = primaryHostRemainingPath.replace("/channels/", "");
                  let obj22 = set;
                  if (!set.has(replaced)) {
                    obj22.add(replaced);
                    obj7 = { type: CodedLink.CodedLinkType.CHANNEL_LINK, code: replaced, url: iter };
                    items.push(obj7);
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
                        const obj8 = { guildId: match4[1], guildEventId: tmp50, recurrenceId: match4[4] };
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
                    obj9 = { type: CodedLink.CodedLinkType.EVENT, code: sum, url: iter };
                    items.push(obj9);
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
                        someResult = scopes.some(
                          (item) => item !== set(closure_1_2[12]).OAuth2Scopes.APPLICATIONS_COMMANDS,
                        );
                      }
                      tmp58 = someResult;
                    }
                    if (!tmp58) {
                      if (!set.has(clientId)) {
                        set.add(clientId);
                        const obj10 = { type: CodedLink.CodedLinkType.APP_OAUTH2_LINK, code: clientId, url: iter };
                        items.push(obj10);
                      }
                    }
                    const tmp4Result4 = Authorize;
                  }
                }
                let match6;
                if (primaryHostRemainingPath != null) {
                  match6 = primaryHostRemainingPath.match(closure_2_9);
                }
                if (null != match6) {
                  if (!set.has(match6[2])) {
                    set.add(tmp65);
                    obj11 = { type: CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE, code: tmp65, url: iter };
                    items.push(obj11);
                  }
                }
                let match7;
                if (primaryHostRemainingPath != null) {
                  match7 = primaryHostRemainingPath.match(closure_2_10);
                }
                if (null != match7) {
                  if (null != match7[3]) {
                    const storefrontSKUCodedLink = storefrontMessageEmbedCodedLink.makeStorefrontSKUCodedLink(
                      tmp150,
                      tmp151,
                    );
                    if (!set.has(storefrontSKUCodedLink)) {
                      set.add(storefrontSKUCodedLink);
                      const obj12 = {
                        type: CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU,
                        code: storefrontSKUCodedLink,
                        url: iter,
                      };
                      items.push(obj12);
                    }
                    const tmp4Result5 = storefrontMessageEmbedCodedLink;
                  } else if (!set.has(tmp150)) {
                    set.add(tmp150);
                    obj13 = { type: CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT, code: tmp150, url: iter };
                    items.push(obj13);
                  }
                }
                let match8;
                if (primaryHostRemainingPath != null) {
                  match8 = primaryHostRemainingPath.match(closure_2_11);
                }
                if (null != match8) {
                  if (!set.has(match8[1])) {
                    set.add(tmp80);
                    const obj14 = { type: CodedLink.CodedLinkType.ACTIVITY_BOOKMARK, code: tmp80, url: iter };
                    items.push(obj14);
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
                    obj15 = { type: CodedLink.CodedLinkType.GUILD_PRODUCT, code: combined1, url: iter };
                    items.push(obj15);
                  }
                }
                let match10;
                if (primaryHostRemainingPath != null) {
                  match10 = primaryHostRemainingPath.match(closure_2_14);
                }
                if (null != match10) {
                  if (!set.has(match10[1])) {
                    set.add(tmp93);
                    const obj16 = { type: CodedLink.CodedLinkType.SERVER_SHOP, code: tmp93, url: iter };
                    items.push(obj16);
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
                  const _HermesInternal3 = HermesInternal;
                  const combined2 = "" + match11[3] + "-" + tmp99;
                  if (!set.has(combined2)) {
                    set.add(combined2);
                    obj17 = { type: CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT, code: combined2, url: iter };
                    items.push(obj17);
                  }
                }
                const str13 = getPathsFromURL(iter).primaryHostRemainingPath;
                let match12;
                if (str13 != null) {
                  match12 = str13.match(closure_2_15);
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
                    const obj18 = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: tmp107, url: iter };
                    items.push(obj18);
                  }
                }
                let match13;
                if (primaryHostRemainingPath != null) {
                  match13 = primaryHostRemainingPath.match(closure_2_17);
                }
                if (null != match13) {
                  if (!set.has(match13[1])) {
                    set.add(tmp113);
                    const obj19 = { type: CodedLink.CodedLinkType.GAME_PROFILE, code: tmp113, url: iter };
                    items.push(obj19);
                  }
                }
                let match14;
                if (primaryHostRemainingPath != null) {
                  match14 = primaryHostRemainingPath.match(closure_2_16);
                }
                if (null != match14) {
                  if (!set.has(match14[1])) {
                    set.add(tmp119);
                    obj20 = { type: CodedLink.CodedLinkType.GAME_SERVER_SHARE, code: tmp119, url: iter };
                    items.push(obj20);
                  }
                }
                let match15;
                if (primaryHostRemainingPath != null) {
                  match15 = primaryHostRemainingPath.match(closure_2_18);
                }
                if (null != match15) {
                  if (!set.has(match15[1])) {
                    set.add(tmp125);
                    const obj21 = { type: CodedLink.CodedLinkType.USER_PROFILE, code: tmp125, url: iter };
                    items.push(obj21);
                  }
                }
                if ("/shop" === primaryHostRemainingPath) {
                  let parsed = null;
                  if (null != query) {
                    parsed = keysSorter.parse(query);
                    const tmp4Result6 = keysSorter;
                  }
                  let str15;
                  if (parsed != null) {
                    str15 = parsed.tab;
                  }
                  if (str15 === constants.GAME_SHOPS) {
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
                            obj22 = {
                              type: CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP,
                              code: combined3,
                              url: iter,
                            };
                            items.push(obj22);
                          }
                        }
                      }
                    }
                  }
                  let match16;
                  if (url.hash != null) {
                    match16 = str16.match(closure_2_20);
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
                    const obj23 = { type: CodedLink.CodedLinkType.COLLECTIBLES_SHOP, code: combined4, url: iter };
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
  if (replaced === obj2.host) {
    let str3 = parseURLSafelyResult.pathname;
    if (str3 == null) {
      str3 = "";
    }
    let str4 = obj2.pathPrefix;
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
      let str12 = obj6.pathPrefix;
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
      let str16 = obj9.pathPrefix;
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
      let str20 = obj11.pathPrefix;
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
        const items = [obj2, obj4, obj6, obj9, obj11];
        if (
          items.some((host) => {
            let replaced;
            if (url.host != null) {
              replaced = str.replace(/^www[.]/i, "");
            }
            return replaced === host.host;
          })
        ) {
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
          const items = [];
          function _loop(iter) {
            ({ url, inviteHostRemainingPath, templateHostRemainingPath, primaryHostRemainingPath } =
              getPathsFromURL(iter));
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
                  let obj1 = set;
                  if (!set.has(iter)) {
                    obj1.add(iter);
                    obj = { type: CodedLink.CodedLinkType.BUILD_OVERRIDE, code: iter, url: iter };
                    items.push(obj);
                  }
                }
                let tmp4Result = BuildOverrideUtils;
                if (tmp4Result.isManualBuildOverrideLink(iter)) {
                  obj4 = set;
                  if (!set.has(iter)) {
                    obj4.add(iter);
                    obj = { type: CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE, code: iter, url: iter };
                    items.push(obj);
                  }
                }
                tmp4Result = ExperimentEmbedUtils;
                if (tmp4Result.isExperimentEmbedURL(iter)) {
                  let obj7 = set;
                  if (!set.has(iter)) {
                    obj7.add(iter);
                    obj1 = { type: CodedLink.CodedLinkType.EXPERIMENT, code: iter, url: iter };
                    items.push(obj1);
                  }
                }
                let match;
                if (inviteHostRemainingPath != null) {
                  match = inviteHostRemainingPath.match(closure_2_5);
                }
                if (null != match) {
                  if ("https:" === url.protocol) {
                    const inviteKeyFromUrlParams = InviteCodeUtils.generateInviteKeyFromUrlParams(
                      inviteHostRemainingPath.substring(1),
                      url.search,
                    );
                    invite = invite.getInvite(inviteKeyFromUrlParams);
                    if (null != invite) {
                      if (tmp4Result2.isEmbeddedApplicationInvite(invite)) {
                        let obj13 = set;
                        if (!set.has(inviteKeyFromUrlParams)) {
                          obj13.add(inviteKeyFromUrlParams);
                          obj2 = {
                            type: CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE,
                            code: inviteKeyFromUrlParams,
                            url: iter,
                          };
                          items.push(obj2);
                        }
                      }
                      tmp4Result2 = InviteTypeUtils;
                    }
                    if (iter.includes("\\")) {
                      return 0;
                    } else {
                      obj11 = set;
                      if (!set.has(inviteKeyFromUrlParams)) {
                        obj11.add(inviteKeyFromUrlParams);
                        const obj3 = { type: CodedLink.CodedLinkType.INVITE, code: inviteKeyFromUrlParams, url: iter };
                        items.push(obj3);
                      }
                    }
                    const tmp4Result1 = InviteCodeUtils;
                  }
                }
                let match1;
                if (templateHostRemainingPath != null) {
                  match1 = templateHostRemainingPath.match(closure_2_5);
                }
                if (null != match1) {
                  const substr = templateHostRemainingPath.substring(1);
                  let obj15 = set;
                  if (!set.has(substr)) {
                    obj15.add(substr);
                    obj4 = { type: CodedLink.CodedLinkType.TEMPLATE, code: substr, url: iter };
                    items.push(obj4);
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
                      const inviteKeyFromUrlParams1 = InviteCodeUtils.generateInviteKeyFromUrlParams(
                        match2[2],
                        url.search,
                      );
                      let obj20 = set;
                      if (!set.has(inviteKeyFromUrlParams1)) {
                        obj20.add(inviteKeyFromUrlParams1);
                        const obj5 = { type: CodedLink.CodedLinkType.INVITE, code: inviteKeyFromUrlParams1, url: iter };
                        items.push(obj5);
                      }
                      const tmp4Result3 = InviteCodeUtils;
                    }
                  } else {
                    let obj17 = set;
                    if (!set.has(match2[2])) {
                      obj17.add(tmp34);
                      obj6 = { type: formatted, code: tmp34, url: iter };
                      items.push(obj6);
                    }
                  }
                }
                let match3;
                if (primaryHostRemainingPath != null) {
                  match3 = primaryHostRemainingPath.match(closure_2_6);
                }
                if (null != match3) {
                  const replaced = primaryHostRemainingPath.replace("/channels/", "");
                  let obj22 = set;
                  if (!set.has(replaced)) {
                    obj22.add(replaced);
                    obj7 = { type: CodedLink.CodedLinkType.CHANNEL_LINK, code: replaced, url: iter };
                    items.push(obj7);
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
                        const obj8 = { guildId: match4[1], guildEventId: tmp50, recurrenceId: match4[4] };
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
                    obj9 = { type: CodedLink.CodedLinkType.EVENT, code: sum, url: iter };
                    items.push(obj9);
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
                        someResult = scopes.some(
                          (item) => item !== set(closure_1_2[12]).OAuth2Scopes.APPLICATIONS_COMMANDS,
                        );
                      }
                      tmp58 = someResult;
                    }
                    if (!tmp58) {
                      if (!set.has(clientId)) {
                        set.add(clientId);
                        const obj10 = { type: CodedLink.CodedLinkType.APP_OAUTH2_LINK, code: clientId, url: iter };
                        items.push(obj10);
                      }
                    }
                    const tmp4Result4 = Authorize;
                  }
                }
                let match6;
                if (primaryHostRemainingPath != null) {
                  match6 = primaryHostRemainingPath.match(closure_2_9);
                }
                if (null != match6) {
                  if (!set.has(match6[2])) {
                    set.add(tmp65);
                    obj11 = { type: CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE, code: tmp65, url: iter };
                    items.push(obj11);
                  }
                }
                let match7;
                if (primaryHostRemainingPath != null) {
                  match7 = primaryHostRemainingPath.match(closure_2_10);
                }
                if (null != match7) {
                  if (null != match7[3]) {
                    const storefrontSKUCodedLink = storefrontMessageEmbedCodedLink.makeStorefrontSKUCodedLink(
                      tmp150,
                      tmp151,
                    );
                    if (!set.has(storefrontSKUCodedLink)) {
                      set.add(storefrontSKUCodedLink);
                      const obj12 = {
                        type: CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU,
                        code: storefrontSKUCodedLink,
                        url: iter,
                      };
                      items.push(obj12);
                    }
                    const tmp4Result5 = storefrontMessageEmbedCodedLink;
                  } else if (!set.has(tmp150)) {
                    set.add(tmp150);
                    obj13 = { type: CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT, code: tmp150, url: iter };
                    items.push(obj13);
                  }
                }
                let match8;
                if (primaryHostRemainingPath != null) {
                  match8 = primaryHostRemainingPath.match(closure_2_11);
                }
                if (null != match8) {
                  if (!set.has(match8[1])) {
                    set.add(tmp80);
                    const obj14 = { type: CodedLink.CodedLinkType.ACTIVITY_BOOKMARK, code: tmp80, url: iter };
                    items.push(obj14);
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
                    obj15 = { type: CodedLink.CodedLinkType.GUILD_PRODUCT, code: combined1, url: iter };
                    items.push(obj15);
                  }
                }
                let match10;
                if (primaryHostRemainingPath != null) {
                  match10 = primaryHostRemainingPath.match(closure_2_14);
                }
                if (null != match10) {
                  if (!set.has(match10[1])) {
                    set.add(tmp93);
                    const obj16 = { type: CodedLink.CodedLinkType.SERVER_SHOP, code: tmp93, url: iter };
                    items.push(obj16);
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
                  const _HermesInternal3 = HermesInternal;
                  const combined2 = "" + match11[3] + "-" + tmp99;
                  if (!set.has(combined2)) {
                    set.add(combined2);
                    obj17 = { type: CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT, code: combined2, url: iter };
                    items.push(obj17);
                  }
                }
                const str13 = getPathsFromURL(iter).primaryHostRemainingPath;
                let match12;
                if (str13 != null) {
                  match12 = str13.match(closure_2_15);
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
                    const obj18 = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: tmp107, url: iter };
                    items.push(obj18);
                  }
                }
                let match13;
                if (primaryHostRemainingPath != null) {
                  match13 = primaryHostRemainingPath.match(closure_2_17);
                }
                if (null != match13) {
                  if (!set.has(match13[1])) {
                    set.add(tmp113);
                    const obj19 = { type: CodedLink.CodedLinkType.GAME_PROFILE, code: tmp113, url: iter };
                    items.push(obj19);
                  }
                }
                let match14;
                if (primaryHostRemainingPath != null) {
                  match14 = primaryHostRemainingPath.match(closure_2_16);
                }
                if (null != match14) {
                  if (!set.has(match14[1])) {
                    set.add(tmp119);
                    obj20 = { type: CodedLink.CodedLinkType.GAME_SERVER_SHARE, code: tmp119, url: iter };
                    items.push(obj20);
                  }
                }
                let match15;
                if (primaryHostRemainingPath != null) {
                  match15 = primaryHostRemainingPath.match(closure_2_18);
                }
                if (null != match15) {
                  if (!set.has(match15[1])) {
                    set.add(tmp125);
                    const obj21 = { type: CodedLink.CodedLinkType.USER_PROFILE, code: tmp125, url: iter };
                    items.push(obj21);
                  }
                }
                if ("/shop" === primaryHostRemainingPath) {
                  let parsed = null;
                  if (null != query) {
                    parsed = keysSorter.parse(query);
                    const tmp4Result6 = keysSorter;
                  }
                  let str15;
                  if (parsed != null) {
                    str15 = parsed.tab;
                  }
                  if (str15 === constants.GAME_SHOPS) {
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
                            obj22 = {
                              type: CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP,
                              code: combined3,
                              url: iter,
                            };
                            items.push(obj22);
                          }
                        }
                      }
                    }
                  }
                  let match16;
                  if (url.hash != null) {
                    match16 = str16.match(closure_2_20);
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
                    const obj23 = { type: CodedLink.CodedLinkType.COLLECTIBLES_SHOP, code: combined4, url: iter };
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
    let result = coerceLinksToCodedLinks(findCodedLinkUrlsDefault(str).concat(match));
    items = result.slice(0, 10);
    obj = findCodedLinkUrlsDefault(str);
  }
  return items[0];
};
