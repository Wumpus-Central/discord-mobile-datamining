// === Module 17418: superagentPatch ===

// Module 17418 (superagentPatch)
import LogAggregatorAll from "LogAggregator" /* 7 */;
import Constants from "Constants" /* 1085 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import RequestDefault from "Request" /* 1283 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import UserLimitedAccessUtils from "UserLimitedAccessUtils" /* 9437 */;
import IdGenerator from "IdGenerator" /* 17419 */;
import getTimeZoneDefault from "getTimeZone" /* 17421 */;
import trackHttpRequestDefault from "trackHttpRequest" /* 17422 */;
import GuildLimitedAccessUtils from "GuildLimitedAccessUtils" /* 17433 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import Dispatcher from "Dispatcher" /* 584 */;
import HTTPUtils_mod from "HTTPUtils" /* 1282 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let arr, c2, c3, c4, importAll, importDefault, status;

let obj2;
function isAnalyticsEndpoint(pathname) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(pathname);
    return re8.test(uRL.pathname);
  } catch (err) {
    return re8.test(pathname);
  }
}
const AbortCodes = Constants.AbortCodes;
let closure_6 = ["https://cdn.discordapp.com/bad-domains/updated_hashes.json", "https://cdn.discordapp.com/bad-domains/hashes.json"];
RequestDefault.parse[""] = JSON.parse;
const idGenerator = new IdGenerator.IdGenerator();
const re8 = /\/api(\/v\d+)?\/science/;
let obj = { name: "2026-07-reject-with-error-kill-switch", kind: "user", defaultConfig: { migrationKilled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { migrationKilled: true };
const config = ApexExperiment.createApexExperiment(obj);
let closure_11 = null;
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  closure_11 = null;
});
let HTTPUtils = HTTPUtils_mod;
let result = HTTPUtils.setRejectWithMigratedError(function isRejectWithMigratedErrorEnabled() {
  let tmp = closure_11;
  if (null == closure_11) {
    const hasLoadedExperiments = ExperimentStore.hasLoadedExperiments;
    let tmp3 = !hasLoadedExperiments;
    if (hasLoadedExperiments) {
      const tmp5 = !config.getConfig({ location: "reject_with_error_migration" }).migrationKilled;
      closure_11 = tmp5;
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
});
HTTPUtils = HTTPUtils_mod;
let obj3 = {
  prepareRequest(promise) {
    let closure_1;
    function populateQValues(items) {
      let closure_0 = 10;
      const reduced = items.reduce((arr, item) => {
        if (10 === closure_0) {
          arr = arr.push(item);
        } else {
          const _HermesInternal = HermesInternal;
          arr.push("" + item + ";q=0." + closure_0);
        }
        closure_0 = Math.max(closure_0 - 1, 1);
        return arr;
      }, []);
      return reduced.join(",");
    }
    function getDatadogAPMUrl(generateResult) {
      const str = new URLSearchParams();
      str.append("query", "@http.x_client_trace_id:\"" + generateResult + "\"");
      str.append("showAllSpans", "true");
      const obj = closure_1(dependencyMap[5]);
      const str2 = obj.toURLSafe("traces?" + str.toString(), "https://datadog.discord.tools/apm/");
      let str1 = null;
      if (null != str2) {
        str1 = str2.toString();
      }
      return str1;
    }
    function shouldTrackHttpRequest(url) {
      return !isAnalyticsEndpoint(url);
    }
    _require = promise;
    const _default = require("AuthenticationStore").default;
    const _default2 = require("DeveloperOptionsStore").default;
    const _default3 = require("LocaleStore").default;
    const _default4 = require("UserStore").default;
    const _default5 = require("AnalyticsUtils").default;
    const isPlatformEmbedded = require("PlatformUtils").isPlatformEmbedded;
    importDefault = performance.now();
    if ("/" === promise.url[0]) {
      const tmpResult = require("HTTPUtils");
      promise.url = tmpResult.getAPIBaseURL() + promise.url;
      let tmp3 = "Authorization" in promise.header;
      if (!tmp3) {
        let str = "authorization";
        tmp3 = "authorization" in promise.header;
      }
      if (!tmp3) {
        const result = promise.set("Authorization", _default.getToken());
      }
      const tmpResult2 = require("updateDynamicSuperProperties");
      const result1 = tmpResult2.updateDynamicSuperProperties();
      const superPropertiesBase64 = _default5.getSuperPropertiesBase64();
      if (null != superPropertiesBase64) {
        let str2 = "X-Super-Properties";
        const result2 = promise.set("X-Super-Properties", superPropertiesBase64);
      }
      const fingerprint = _default.getFingerprint();
      let tmp10 = null != fingerprint && "" !== fingerprint;
      if (tmp10) {
        const result3 = promise.set("X-Fingerprint", fingerprint);
      }
      const installationForTracking = _default.getInstallationForTracking();
      let tmp13 = null != installationForTracking && "" !== installationForTracking;
      if (tmp13) {
        const result4 = promise.set("X-Installation-ID", installationForTracking);
      }
      if (isPlatformEmbedded) {
        let items = [];
        const _default6 = require("react-native").default;
        if (null != _default6) {
          let Languages = _default6.getConstants().Languages;
          if (Languages == null) {
            Languages = [];
          }
          items = Languages;
        }
        const result5 = promise.set("Accept-Language", populateQValues(items));
      }
      const result6 = promise.set("X-Discord-Locale", _default3.locale);
      const tmp18 = getTimeZoneDefault();
      if (null != tmp18) {
        const result7 = promise.set("X-Discord-Timezone", tmp18);
      }
      const debugOptionsHeaderValue = _default2.getDebugOptionsHeaderValue();
      const tmp21 = null != debugOptionsHeaderValue && "" !== debugOptionsHeaderValue;
      if (tmp21) {
        const result8 = promise.set("X-Debug-Options", debugOptionsHeaderValue);
      }
      const routingKeyHeaderValue = _default2.getRoutingKeyHeaderValue();
      const tmp24 = null != routingKeyHeaderValue && "" !== routingKeyHeaderValue;
      if (tmp24) {
        const result9 = promise.set("X-Routing-Key", routingKeyHeaderValue);
      }
      if (_default2.isTracingRequests) {
        const currentUser = _default4.getCurrentUser();
        let str14;
        const generate = idGenerator.generate;
        if (currentUser != null) {
          str14 = currentUser.id;
        }
        if (str14 == null) {
          str14 = "0";
        }
        const generateResult = generate(str14);
        const result10 = promise.set("x-client-trace-id", generateResult);
        try {
          const _URL = URL;
          const self = this;
          const self2 = this;
          const uRL = new URL(promise.url);
          if (!isAnalyticsEndpoint(uRL.pathname)) {
            getDatadogAPMUrl(generateResult);
          }
        } catch (err) {
        }
      }
    }
    importAll = shouldTrackHttpRequest(promise.url);
    let obj2 = LogAggregatorAll;
    obj2.report("Network", "Sending " + promise.method + " to " + promise.url);
    promise.on("response", (status) => {
      let method;
      let status1;
      let url;
      let text = null;
      if (null != status) {
        text = null;
        if (status.status >= 400) {
          text = status.text;
        }
      }
      let str = "";
      if (null != text) {
        const _HermesInternal = HermesInternal;
        str = "and body: " + text;
      }
      ({ method, url } = promise);
      status = undefined;
      const report = LogAggregatorAll.report;
      LogAggregatorAll;
      if (status != null) {
        status = status.status;
      }
      report("Network", "Completed " + method + " to " + url + " with status: " + status + " " + str);
      const tmp8 = c2;
      if (tmp8) {
        const request = { url: null, method: null, status_code: status1, duration_ms: Math.round(performance.now() - closure_1) };
        ({ url: obj.url, method: obj.method } = promise);
        status1 = undefined;
        const tmp10 = trackHttpRequestDefault;
        if (status != null) {
          status1 = status.status;
        }
        const _Math = Math;
        const _performance = performance;
        tmp10(request);
        c2 = false;
      }
    });
    promise.on("error", (status, text) => {
      let method;
      let request;
      let status1;
      let url;
      ({ method, url } = promise);
      status = undefined;
      const report = LogAggregatorAll.report;
      LogAggregatorAll;
      if (status != null) {
        status = status.status;
      }
      text = undefined;
      if (text != null) {
        text = text.text;
      }
      report("Network", "Failed " + method + " to " + url + " with status " + status + " and body: " + text);
      if (null != status) {
        if ("parse" in status) {
          if (status.parse) {
            let str = "[FILTERED]";
            if (closure_6.includes(promise.url)) {
              const xhr = promise.xhr;
              let substr;
              if (xhr != null) {
                const responseText = xhr.responseText;
                if (responseText != null) {
                  substr = responseText.slice(0, 1000);
                }
              }
              str = substr;
            }
            const obj2 = { category: "superagent", message: "Failed to parse HTTP response.", data: request };
            request = { method: null, url: null, responseText: str, status: status.status };
            ({ method: obj3.method, url: obj3.url } = promise);
            const obj = SentryUtilsDefault;
            obj.addBreadcrumb(obj2);
          }
        }
      }
      const tmp11 = c2;
      if (tmp11) {
        const request1 = { url: null, method: null, status_code: status1, duration_ms: Math.round(performance.now() - closure_1) };
        ({ url: obj4.url, method: obj4.method } = promise);
        status1 = undefined;
        const tmp13 = trackHttpRequestDefault;
        if (text != null) {
          status1 = text.status;
        }
        const _Math = Math;
        const _performance = performance;
        tmp13(request1);
        c2 = false;
      }
    });
  },
  interceptResponse(statusCode, arg1, arg2) {
    let flag;
    let closure_0 = statusCode;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (400 === statusCode.statusCode) {
      let body = statusCode.body;
      const tmp = null;
      let captcha_key;
      if (body != null) {
        captcha_key = body.captcha_key;
      }
      if (captcha_key) {
        const items = [asyncRequire(17425, dependencyMap.paths), asyncRequire(5407, dependencyMap.paths)];
        const allResult = all(items);
        const nextPromise = allResult.then((result) => {
          const iter = result[Symbol.iterator]();
          let nextResult;
          if (iter !== undefined) {
            nextResult = iter.next();
          }
          let nextResult1;
          let tmp4 = tmp;
          const _default = nextResult.default;
          if (!tmp4) {
            tmp4 = tmp6;
            if (!tmp4) {
              nextResult1 = iter.next();
              tmp4 = tmp6;
            }
          }
          const extractCaptchaPropsFromResponse = nextResult1.extractCaptchaPropsFromResponse;
          if (!tmp4) {
            iter.return();
          }
          return _default.showCaptchaAsync(extractCaptchaPropsFromResponse(closure_0.body));
        });
        const nextPromise1 = nextPromise.then((X_Captcha_Key) => {
          let captcha_rqtoken;
          let captcha_session_id;
          ({ captcha_rqtoken, captcha_session_id } = X_Captcha_Key);
          const obj = { "X-Captcha-Key": X_Captcha_Key.captcha_key };
          if (null != captcha_rqtoken) {
            obj["X-Captcha-Rqtoken"] = captcha_rqtoken;
          }
          if (null != captcha_session_id) {
            obj["X-Captcha-Session-Id"] = captcha_session_id;
          }
          closure_1(obj);
        });
        nextPromise1.catch(arg2);
        flag = true;
      }
      return flag;
    }
    if (401 === statusCode.statusCode) {
      const body2 = statusCode.body;
      let code;
      if (body2 != null) {
        code = body2.code;
      }
      if (code === AbortCodes.MFA_REQUIRED) {
        const body3 = statusCode.body;
        let mfa;
        if (body3 != null) {
          mfa = body3.mfa;
        }
        if (mfa) {
          const promise4 = asyncRequire(15497, dependencyMap.paths);
          const nextPromise2 = promise4.then((openMFAModal) => {
            openMFAModal.openMFAModal(closure_0.body.mfa, closure_1, closure_2);
          });
          nextPromise2.catch(arg2);
          flag = true;
        }
      }
    }
    const body4 = statusCode.body;
    let code1;
    const isLimitedAccessErrorCode = UserLimitedAccessUtils.isLimitedAccessErrorCode;
    statusCode = statusCode.statusCode;
    UserLimitedAccessUtils;
    if (body4 != null) {
      code1 = body4.code;
    }
    if (isLimitedAccessErrorCode(statusCode, code1)) {
      const promise3 = asyncRequire(5913, dependencyMap.paths);
      promise3.then((result) => {
        result.default();
      });
      flag = false;
    } else {
      const body5 = statusCode.body;
      let code2;
      const isLimitedAccessErrorCode2 = GuildLimitedAccessUtils.isLimitedAccessErrorCode;
      const statusCode2 = statusCode.statusCode;
      GuildLimitedAccessUtils;
      if (body5 != null) {
        code2 = body5.code;
      }
      if (isLimitedAccessErrorCode2(statusCode2, code2)) {
        const promise2 = asyncRequire(13643, dependencyMap.paths);
        promise2.then((result) => {
          const body = closure_0.body;
          let guild_id;
          const _default = result.default;
          if (body != null) {
            guild_id = body.guild_id;
          }
          _default(guild_id);
        });
        flag = false;
      } else {
        flag = 403 === statusCode.statusCode;
        if (flag) {
          const body6 = statusCode.body;
          let code3;
          if (body6 != null) {
            code3 = body6.code;
          }
          flag = code3 === AbortCodes.RESTRICTED_HOURS_ACTIVE;
        }
        if (flag) {
          const promise = asyncRequire(17434, dependencyMap.paths);
          promise.then((openRestrictedHoursModal) => {
            const result = openRestrictedHoursModal.openRestrictedHoursModal();
          });
          flag = false;
        }
      }
    }
  }
};
HTTPUtils.setRequestPatch(obj3);
HTTPUtils = HTTPUtils_mod;
const setAwaitOnline = HTTPUtils.setAwaitOnline;
let _require = _asyncToGenerator(async (arg0) => {
  let closure_1;
  let closure_2;
  closure_0 = arg0;
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const _HermesInternal2 = HermesInternal;
          const obj7 = tmp4(c3[19]);
          obj7.report("Network", "Request to " + closure_0 + " failed, will retry.");
          const obj8 = tmp(c3[30]);
          if (!obj8.isOnline()) {
            const tmp22Result = tmp(c3[30]);
            c3 = 1;
            c4 = 1;
            const obj4 = { value: tmp22Result.awaitOnline(), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const _HermesInternal = HermesInternal;
        const obj = tmp4(c3[19]);
        obj.report("Network", "Network detected online, retrying " + closure_0);
      }
      c4 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp13) {
      c4 = 3;
      throw tmp13;
    }
  }
});
setAwaitOnline(function() {
  return closure_0(...arguments);
});
let result1 = size.fileFinishedImporting("lib/superagentPatch.tsx");