// discord_app/modules/build_overrides/BuildOverrideUtils.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import BuildOverrideConstants from "BuildOverrideConstants.tsx";
import URLUtilsDefault from "../../utils/URLUtils.tsx";
import urlParseAll from "../../../_runtime/01373_urlParse.js";
import _modDef1376 from "../../../_runtime/metro/01376__.js";
import react_native_mod from "../../utils/native/ClientInfoUtils.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let Version;
let closure_4 = BuildOverrideConstants.BUILD_OVERRIDE_COOKIE_NAME;
const PRIMARY_DOMAIN = Constants.PRIMARY_DOMAIN;
let react_native = react_native_mod;
react_native = react_native.getConstants();
if (PlatformUtils.isAndroid()) {
  const str = react_native.Version;
  Version = str.split(" - ")[0];
} else {
  const _module2 = PlatformUtils;
  if (_module2.isIOS()) {
    Version = react_native.Version;
  }
}
function getAPIEndpoint(arg0) {
  return "" + location.protocol + "//" + location.host + arg0;
}
function isManualBuildOverrideLink(iter) {
  const isMatch = null != iter && regExp1.test(iter);
  return isMatch;
}
function manualOverrideLinkMeta(str) {
  let obj3;
  const match = str.match(regExp1);
  if (null != match) {
    if (2 === match.length) {
      const obj2 = { targetBuildOverride: obj3, validForUserIds: [], expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT" };
      obj3 = {};
      const _HermesInternal = HermesInternal;
      const obj4 = { type: "branch", id: match[1] };
      obj3["discord_" + PlatformUtils.getNativePlatform()] = obj4;
      PlatformUtils;
      return obj2;
    }
  }
  return null;
}
const regExp = new RegExp(
  "^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link/?\\?[\\S]+$",
  "i",
);
const regExp1 = new RegExp("^dev://branch/([\\w-./]+)$", "i");
const set = new Set([
  "canary.discord.com",
  "ptb.discord.com",
  "discord.com",
  "canary.discordapp.com",
  "ptb.discordapp.com",
  "discordapp.com",
]);
const set1 = new Set(["/__development/link", "/__development/link/"]);
const result = size.fileFinishedImporting("modules/build_overrides/BuildOverrideUtils.tsx");

export const APP_VERSION = Version;
export { getAPIEndpoint };
export const getBuildOverride = function getBuildOverride() {
  let obj3;
  let resolved;
  const obj = URLUtilsDefault;
  const safeParseWithQueryResult = obj.safeParseWithQuery(
    "" + location.protocol + "//" + location.host + "/__development/build_overrides",
  );
  if (null == safeParseWithQueryResult) {
    resolved = Promise.resolve(null);
  } else {
    safeParseWithQueryResult.search = null;
    if (Version) {
      safeParseWithQueryResult.query.version = tmp3;
    }
    const HTTP = HTTPUtils.HTTP;
    const get = HTTP.get;
    const obj2 = { url: obj3.format(safeParseWithQueryResult), oldFormErrors: true, rejectWithError: false };
    obj3 = urlParseAll;
    const value = get(obj2);
    resolved = value.then(
      (body) => body.body || null,
      () => null,
    );
  }
  return resolved;
};
export const getBuildOverrideMeta = function getBuildOverrideMeta(url) {
  let obj3;
  let obj5;
  const isMatch = null != url && regExp1.test(url);
  if (isMatch) {
    const match = url.match(regExp1);
    let tmp13 = null;
    if (null != match) {
      tmp13 = null;
      if (2 === match.length) {
        const obj2 = { targetBuildOverride: obj5, validForUserIds: [], expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT" };
        obj5 = {};
        const _HermesInternal = HermesInternal;
        const obj6 = { type: "branch", id: match[1] };
        obj5["discord_" + PlatformUtils.getNativePlatform()] = obj6;
        tmp13 = obj2;
        PlatformUtils;
      }
    }
    return resolve(tmp13);
  } else {
    let resolved;
    const obj = URLUtilsDefault;
    const safeParseWithQueryResult = obj.safeParseWithQuery(url);
    if (null == safeParseWithQueryResult) {
      resolved = Promise.resolve(null);
    } else {
      safeParseWithQueryResult.search = null;
      safeParseWithQueryResult.query.meta = "true";
      if (Version) {
        safeParseWithQueryResult.query.version = tmp16;
      }
      const _window = window;
      safeParseWithQueryResult.host = window.location.host;
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj7 = { url: obj3.format(safeParseWithQueryResult), oldFormErrors: true, rejectWithError: false };
      obj3 = urlParseAll;
      const value = get(obj7);
      resolved = value.then(
        (body) => body.body || null,
        () => null,
      );
    }
    return resolved;
  }
};
export const probablyHasBuildOverride = function probablyHasBuildOverride() {
  return -1 !== cookie.indexOf("" + closure_4 + "=");
};
export const getBuildOverrideExperiments = function getBuildOverrideExperiments() {
  try {
    let obj2;
    const _window = window;
    const obj = _modDef1376;
    const tmp5 = obj.parse(window.document.cookie)[closure_4];
    if (null == tmp5) {
      obj2 = {};
    } else {
      const _JSON = JSON;
      const _atob = atob;
      obj2 = JSON.parse(atob(str.substring(str.indexOf(".") + 1))).$meta.experiments ?? {};
    }
    return obj2;
  } catch (err) {
    return {};
  }
};
export const isBuildOverrideLink = function isBuildOverrideLink(target) {
  const isMatch = null != target && regExp.test(target);
  return isMatch;
};
export { isManualBuildOverrideLink };
export { manualOverrideLinkMeta };
export const validateURL = function validateURL(url) {
  let obj3;
  const isMatch = null != url && regExp1.test(url);
  if (isMatch) {
    return { payload: null, url };
  } else {
    const obj = URLUtilsDefault;
    url = obj.safeParseWithQuery(url);
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
                delete url.query[tmp9];
                continue;
              }
              continue;
            }
            const obj4 = { payload: url.query.s, url: obj3.format(url) };
            obj3 = urlParseAll;
            return obj4;
          }
        }
      }
      return null;
    }
  }
};
