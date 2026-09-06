// discord_app/modules/build_overrides/BuildOverrideUtils.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import BuildOverrideConstants from "BuildOverrideConstants.tsx";
import URLUtilsDefault from "../../utils/URLUtils.tsx";
import UrlAll from "../../../_runtime/01367_Url.js";
import _modDef1370 from "../../../_runtime/metro/01370__.js";
import ClientInfoUtils from "../../utils/native/ClientInfoUtils.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4 = BuildOverrideConstants.BUILD_OVERRIDE_COOKIE_NAME;
const PRIMARY_DOMAIN = Constants.PRIMARY_DOMAIN;
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
      let obj = { targetBuildOverride: null, validForUserIds: null, expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT" };
      obj = {};
      const _HermesInternal = HermesInternal;
      const obj1 = { type: "branch", id: match[1] };
      obj["discord_" + obj.getNativePlatform()] = obj1;
      obj.targetBuildOverride = obj;
      obj.validForUserIds = [];
      return obj;
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
  let obj = URLUtilsDefault;
  const safeParseWithQueryResult = obj.safeParseWithQuery(
    "" + location.protocol + "//" + location.host + "/__development/build_overrides",
  );
  if (null == safeParseWithQueryResult) {
    let resolved = Promise.resolve(null);
  } else {
    safeParseWithQueryResult.search = null;
    if (Version) {
      safeParseWithQueryResult.query.version = tmp3;
    }
    const HTTP = HTTPUtils.HTTP;
    obj = { url: UrlAll.format(safeParseWithQueryResult), oldFormErrors: true, rejectWithError: false };
    value = HTTP.get(obj);
    resolved = value.then(
      (body) => body.body || null,
      () => null,
    );
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
        let obj = { targetBuildOverride: null, validForUserIds: null, expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT" };
        obj = {};
        const _HermesInternal = HermesInternal;
        const obj1 = { type: "branch", id: match[1] };
        obj["discord_" + PlatformUtils.getNativePlatform()] = obj1;
        obj.targetBuildOverride = obj;
        obj.validForUserIds = [];
        tmp13 = obj;
      }
    }
    return Promise.resolve(tmp13);
  } else {
    obj = URLUtilsDefault;
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
      const HTTP = HTTPUtils.HTTP;
      let obj2 = { url: null, oldFormErrors: true, rejectWithError: false };
      obj2 = UrlAll;
      obj2.url = obj2.format(safeParseWithQueryResult);
      value = HTTP.get(obj2);
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
    let experiments = _modDef1370;
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
export const validateURL = function validateURL(url) {
  let isMatch = null != url;
  if (isMatch) {
    isMatch = regExp1.test(url);
  }
  if (isMatch) {
    let obj = { payload: null, url };
    return obj;
  } else {
    obj = URLUtilsDefault;
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
                let query = url.query;
                delete tmp[tmp2];
                continue;
              }
              continue;
            }
            obj = { payload: url.query.s, url: UrlAll.format(url) };
            return obj;
          }
        }
      }
      return null;
    }
  }
};
