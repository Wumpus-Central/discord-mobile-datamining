// === Module 4290: Version ===

// Module 4290 (Version)
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;
import UrlAll from "Url" /* 1489 */;
import BUILD_OVERRIDE_TARGET_NAMES from "BUILD_OVERRIDE_TARGET_NAMES" /* 4291 */;
import parseDefault from "parse" /* 4292 */;
import getConstants from "getConstants" /* 1626 */;
import obj132 from "obj132" /* 500 */;

let closure_4 = BUILD_OVERRIDE_TARGET_NAMES.BUILD_OVERRIDE_COOKIE_NAME;
const PRIMARY_DOMAIN = ME.PRIMARY_DOMAIN;
getConstants = getConstants.getConstants();
if (obj132.isAndroid()) {
  let Version = getConstants.Version.split(" - ")[0];
} else {
  const _module2 = obj132;
  if (_module2.isIOS()) {
    Version = getConstants.Version;
  }
}
function getAPIEndpoint(c5) {
  return "" + location.protocol + "//" + location.host + c5;
}
function isManualBuildOverrideLink(iter) {
  let isMatch = null != iter;
  if (isMatch) {
    isMatch = regExp1.test(iter);
  }
  return isMatch;
}
function manualOverrideLinkMeta(str) {
  const match = str.match(regExp1);
  if (null != match) {
    if (2 === match.length) {
      const obj = {};
      const _HermesInternal = HermesInternal;
      obj1 = { type: "branch", id: null };
      obj1[1] = match[1];
      obj["discord_" + obj.getNativePlatform()] = obj1;
      obj[0] = obj;
      obj[1] = [];
      return obj;
    }
  }
  return null;
}
const regExp = new RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");
const regExp1 = new RegExp("^dev://branch/([\\w-./]+)$", "i");
const set = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]);
const set1 = new Set(["/__development/link", "/__development/link/"]);
const result = obj132.fileFinishedImporting("modules/build_overrides/BuildOverrideUtils.tsx");

export const APP_VERSION = Version;
export { getAPIEndpoint };
export const getBuildOverride = function getBuildOverride() {
  let obj = isDiscordProxiedAssetUrlDefault;
  const safeParseWithQueryResult = obj.safeParseWithQuery("" + location.protocol + "//" + location.host + "/__development/build_overrides");
  if (null == safeParseWithQueryResult) {
    let resolved = Promise.resolve(null);
  } else {
    safeParseWithQueryResult.search = null;
    if (Version) {
      safeParseWithQueryResult.query.version = tmp3;
    }
    const HTTP = sendRequest.HTTP;
    obj = { url: null, oldFormErrors: true, rejectWithError: false };
    obj[0] = UrlAll.format(safeParseWithQueryResult);
    const value = HTTP.get(obj);
    resolved = value.then((result) => result.body || null, () => null);
  }
  return resolved;
};
export const getBuildOverrideMeta = function getBuildOverrideMeta(url) {
  let isMatch = null != url;
  if (isMatch) {
    isMatch = regExp1.test(url);
  }
  if (isMatch) {
    const match = url.match(regExp1);
    let tmp13 = null;
    if (null != match) {
      tmp13 = null;
      if (2 === match.length) {
        let obj = {};
        const _HermesInternal = HermesInternal;
        obj1 = { type: "branch", id: null };
        obj1[1] = match[1];
        obj["discord_" + obj132.getNativePlatform()] = obj1;
        obj[0] = obj;
        obj[1] = [];
        tmp13 = obj;
      }
    }
    return Promise.resolve(tmp13);
  } else {
    obj = isDiscordProxiedAssetUrlDefault;
    const safeParseWithQueryResult = obj.safeParseWithQuery(url);
    if (null == safeParseWithQueryResult) {
      let resolved = Promise.resolve(null);
    } else {
      safeParseWithQueryResult.search = null;
      safeParseWithQueryResult.query.meta = "true";
      if (Version) {
        safeParseWithQueryResult.query.version = tmp16;
      }
      const _window = window;
      safeParseWithQueryResult.host = window.location.host;
      const HTTP = sendRequest.HTTP;
      const obj2 = UrlAll;
      obj2[0] = obj2.format(safeParseWithQueryResult);
      const value = HTTP.get(obj2);
      resolved = value.then((result) => result.body || null, () => null);
    }
    return resolved;
  }
};
export const probablyHasBuildOverride = function probablyHasBuildOverride() {
  return -1 !== cookie.indexOf("" + closure_4 + "=");
};
export const getBuildOverrideExperiments = function getBuildOverrideExperiments() {
  try {
    let experiments = parseDefault;
    const _window = window;
    const tmp5 = experiments.parse(window.document.cookie)[closure_4];
    if (null == tmp5) {
      experiments = {};
    } else {
      const _JSON = JSON;
      const _atob = atob;
      experiments = JSON.parse(atob(str.substring(str.indexOf(".") + 1))).$meta.experiments;
      if (experiments == null) {
        experiments = {};
      }
    }
    return experiments;
  } catch (err) {
    return {};
  }
};
export const isBuildOverrideLink = function isBuildOverrideLink(target) {
  let isMatch = null != target;
  if (isMatch) {
    isMatch = regExp.test(target);
  }
  return isMatch;
};
export { isManualBuildOverrideLink };
export { manualOverrideLinkMeta };
export const validateURL = function validateURL(target) {
  let isMatch = null != target;
  if (isMatch) {
    isMatch = regExp1.test(target);
  }
  if (isMatch) {
    let obj = { payload: null, url: null };
    obj[1] = target;
    return obj;
  } else {
    obj = isDiscordProxiedAssetUrlDefault;
    const url = obj.safeParseWithQuery(target);
    if (null == url) {
      return null;
    } else {
      if (set.has(url.hostname)) {
        if ("s" in url.query) {
          if (set1.has(url.pathname)) {
            for (const key10021 in url.query) {
              if ("s" === key10021) {
                continue;
              } else {
                let query = url.query;
                delete tmp[tmp2];
                continue;
              }
              continue;
            }
            obj = { payload: null, url: null };
            obj[0] = url.query.s;
            obj[1] = UrlAll.format(url);
            return obj;
          }
        }
      }
      return null;
    }
  }
};