// === Module 1361: BuildOverrideUtils ===

// Module 1361 (BuildOverrideUtils)
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import BuildOverrideConstants from "BuildOverrideConstants" /* 1362 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import UrlAll from "Url" /* 1368 */;
import _modDef1371 from "module_1371" /* 1371 */;
import ClientInfoUtils_mod from "ClientInfoUtils" /* 1363 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let closure_4 = BuildOverrideConstants.BUILD_OVERRIDE_COOKIE_NAME;
const PRIMARY_DOMAIN = Constants.PRIMARY_DOMAIN;
let ClientInfoUtils = ClientInfoUtils_mod;
ClientInfoUtils = ClientInfoUtils.getConstants();
if (PlatformUtils.isAndroid()) {
  let Version = ClientInfoUtils.Version.split(" - ")[0];
} else {
  const _module2 = PlatformUtils;
  if (_module2.isIOS()) {
    Version = ClientInfoUtils.Version;
  }
}
function getAPIEndpoint(arg0) {
  return "" + location.protocol + "//" + location.host + arg0;
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
      const obj2 = { targetBuildOverride: null, validForUserIds: null, expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT" };
      const obj3 = {};
      const _HermesInternal = HermesInternal;
      const obj4 = { type: "branch", id: match[1] };
      obj3["discord_" + PlatformUtils.getNativePlatform()] = obj4;
      obj2.targetBuildOverride = obj3;
      obj2.validForUserIds = [];
      return obj2;
    }
  }
  return null;
}
const regExp = new RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link/?\\?[\\S]+$", "i");
const regExp1 = new RegExp("^dev://branch/([\\w-./]+)$", "i");
const set = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]);
const set1 = new Set(["/__development/link", "/__development/link/"]);
const result = size.fileFinishedImporting("modules/build_overrides/BuildOverrideUtils.tsx");

export const APP_VERSION = Version;
export { getAPIEndpoint };
export const getBuildOverride = function getBuildOverride() {
  const safeParseWithQueryResult = URLUtilsDefault.safeParseWithQuery("" + location.protocol + "//" + location.host + "/__development/build_overrides");
  if (null == safeParseWithQueryResult) {
    let resolved = Promise.resolve(null);
  } else {
    safeParseWithQueryResult.search = null;
    if (Version) {
      safeParseWithQueryResult.query.version = tmp3;
    }
    const HTTP = HTTPUtils.HTTP;
    const obj2 = { url: UrlAll.format(safeParseWithQueryResult), oldFormErrors: true, rejectWithError: false };
    value = HTTP.get(obj2);
    resolved = value.then((body) => body.body || null, () => null);
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
        const obj2 = { targetBuildOverride: null, validForUserIds: null, expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT" };
        const obj5 = {};
        const _HermesInternal = HermesInternal;
        const obj6 = { type: "branch", id: match[1] };
        obj5["discord_" + PlatformUtils.getNativePlatform()] = obj6;
        obj2.targetBuildOverride = obj5;
        obj2.validForUserIds = [];
        tmp13 = obj2;
      }
    }
    return Promise.resolve(tmp13);
  } else {
    const safeParseWithQueryResult = URLUtilsDefault.safeParseWithQuery(url);
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
      const HTTP = HTTPUtils.HTTP;
      const obj7 = { url: UrlAll.format(safeParseWithQueryResult), oldFormErrors: true, rejectWithError: false };
      value = HTTP.get(obj7);
      resolved = value.then((body) => body.body || null, () => null);
    }
    return resolved;
  }
};
export const probablyHasBuildOverride = function probablyHasBuildOverride() {
  return -1 !== cookie.indexOf("" + closure_4 + "=");
};
export const getBuildOverrideExperiments = function getBuildOverrideExperiments() {
  try {
    const _window = window;
    const tmp5 = _modDef1371.parse(window.document.cookie)[closure_4];
    if (null == tmp5) {
      let obj2 = {};
    } else {
      const _JSON = JSON;
      const _atob = atob;
      obj2 = JSON.parse(atob(str.substring(str.indexOf(".") + 1))).$meta.experiments;
      if (obj2 == null) {
        obj2 = {};
      }
    }
    return obj2;
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
export const validateURL = function validateURL(url) {
  let isMatch = null != url;
  if (isMatch) {
    isMatch = regExp1.test(url);
  }
  if (isMatch) {
    const obj2 = { payload: null, url };
    return obj2;
  } else {
    url = URLUtilsDefault.safeParseWithQuery(url);
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
            const obj4 = { payload: url.query.s, url: UrlAll.format(url) };
            return obj4;
          }
        }
      }
      return null;
    }
  }
};