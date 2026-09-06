// === Module 17279: superagentPatch ===

// Module 17279 (superagentPatch)
import LogAggregatorAll from "LogAggregator" /* 7 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import _createForOfIteratorHelperDefault from "_createForOfIteratorHelper" /* 1273 */;
import getTimeZoneDefault from "getTimeZone" /* 17282 */;
import trackHttpRequestDefault from "trackHttpRequest" /* 17283 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ExperimentStore from "ExperimentStore" /* 4476 */;
import Dispatcher from "Dispatcher" /* 573 */;

function isAnalyticsEndpoint(pathname) {
  try {
    const _URL = URL;
    const uRL = new URL(pathname);
    return re8.test(uRL.pathname);
  } catch (err) {
    return re8.test(tmp);
  }
}
const AbortCodes = fn(1074).AbortCodes;
let closure_6 = ["https://cdn.discordapp.com/bad-domains/updated_hashes.json", "https://cdn.discordapp.com/bad-domains/hashes.json"];
_createForOfIteratorHelperDefault.parse[""] = JSON.parse;
const idGenerator = new fn(17280).IdGenerator();
const re8 = /\/api(\/v\d+)?\/science/;
fn(1433);
let ApexExperiment = { name: "2026-07-reject-with-error-kill-switch", kind: "user", defaultConfig: { migrationKilled: false }, variations: null };
ApexExperiment = { 1: null };
ApexExperiment[1] = { migrationKilled: true };
ApexExperiment.variations = ApexExperiment;
const config = ApexExperiment.createApexExperiment(ApexExperiment);
let closure_11 = null;
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  closure_11 = null;
});
let HTTPUtils = fn(1272);
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
HTTPUtils = fn(1272);
HTTPUtils.setRequestPatch({
  prepareRequest(promise) {
    closure_0 = promise;
    const _default = closure_0(502).default;
    const _default2 = closure_0(1347).default;
    const _default3 = closure_0(1371).default;
    importDefault = performance.now();
    if ("/" === promise.url[0]) {
      let tmpResult = tmp(1272);
      promise.url = tmpResult.getAPIBaseURL() + promise.url;
      let tmp3 = "Authorization" in promise.header;
      if (!tmp3) {
        tmp3 = "authorization" in promise.header;
      }
      if (!tmp3) {
        const result = promise.set("Authorization", _default.getToken());
      }
      tmpResult = tmp(17281);
      const result1 = tmpResult.updateDynamicSuperProperties();
      const superPropertiesBase64 = _default4.getSuperPropertiesBase64();
      if (null != superPropertiesBase64) {
        const result2 = promise.set("X-Super-Properties", superPropertiesBase64);
      }
      const fingerprint = _default.getFingerprint();
      let tmp10 = null != fingerprint;
      if (tmp10) {
        tmp10 = "" !== fingerprint;
      }
      if (tmp10) {
        const result3 = promise.set("X-Fingerprint", fingerprint);
      }
      const installationForTracking = _default.getInstallationForTracking();
      let tmp13 = null != installationForTracking;
      if (tmp13) {
        tmp13 = "" !== installationForTracking;
      }
      if (tmp13) {
        const result4 = promise.set("X-Installation-ID", installationForTracking);
      }
      if (closure_0(1115).isPlatformEmbedded) {
        const tmpResult1 = tmp(17);
        if (tmpResult2.isAndroid()) {
          let LocalizationManager = tmp(1117).default;
        } else {
          LocalizationManager = tmpResult1.NativeModules.LocalizationManager;
        }
        let items = [];
        if (null != LocalizationManager) {
          let Languages = LocalizationManager.getConstants().Languages;
          if (Languages == null) {
            Languages = [];
          }
          items = Languages;
        }
        const result5 = promise.set("Accept-Language", (function populateQValues(items) {
          closure_0 = 10;
          const reduced = items.reduce((arr, item) => {
            if (10 === closure_0) {
              arr.push(item);
            } else {
              const _HermesInternal = HermesInternal;
              arr.push("" + item + ";q=0." + closure_0);
            }
            closure_0 = Math.max(closure_0 - 1, 1);
            return arr;
          }, []);
          return reduced.join(",");
        })(items));
        tmpResult2 = tmp(1115);
      }
      const result6 = promise.set("X-Discord-Locale", closure_0(2025).default.locale);
      const tmp19 = getTimeZoneDefault();
      if (null != tmp19) {
        const result7 = promise.set("X-Discord-Timezone", tmp19);
      }
      const debugOptionsHeaderValue = _default2.getDebugOptionsHeaderValue();
      let tmp22 = null != debugOptionsHeaderValue;
      if (tmp22) {
        tmp22 = "" !== debugOptionsHeaderValue;
      }
      if (tmp22) {
        const result8 = promise.set("X-Debug-Options", debugOptionsHeaderValue);
      }
      const routingKeyHeaderValue = _default2.getRoutingKeyHeaderValue();
      let tmp25 = null != routingKeyHeaderValue;
      if (tmp25) {
        tmp25 = "" !== routingKeyHeaderValue;
      }
      if (tmp25) {
        const result9 = promise.set("X-Routing-Key", routingKeyHeaderValue);
      }
      if (_default2.isTracingRequests) {
        const currentUser = _default3.getCurrentUser();
        let str14;
        if (currentUser != null) {
          str14 = currentUser.id;
        }
        if (str14 == null) {
          str14 = "0";
        }
        const generateResult = idGenerator.generate(str14);
        const result10 = promise.set("x-client-trace-id", generateResult);
        try {
          const _URL = URL;
          const uRL = new URL(promise.url);
          if (!isAnalyticsEndpoint(uRL.pathname)) {
            (function getDatadogAPMUrl(generateResult) {
              let str = new URLSearchParams();
              str.append("query", "@http.x_client_trace_id:\"" + generateResult + "\"");
              str.append("showAllSpans", "true");
              const str2 = closure_1(dependencyMap[5]).toURLSafe("traces?" + str.toString(), "https://datadog.discord.tools/apm/");
              str = null;
              if (null != str2) {
                str = str2.toString();
              }
              return str;
            })(generateResult);
          }
        } catch (err) {
        }
      }
    }
    importAll = (function shouldTrackHttpRequest(url) {
      return !isAnalyticsEndpoint(url);
    })(promise.url);
    _default4 = closure_0(1242).default;
    LogAggregatorAll.report("Network", "Sending " + promise.method + " to " + promise.url);
    promise.on("response", (status) => {
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
      ({ method, url } = closure_0);
      status = undefined;
      if (status != null) {
        status = status.status;
      }
      LogAggregatorAll.report("Network", "Completed " + method + " to " + url + " with status: " + status + " " + str);
      if (c2) {
        const request = { url: null, method: null, status_code: null, duration_ms: null };
        ({ url: obj2.url, method: obj2.method } = closure_0);
        let status1;
        if (status != null) {
          status1 = status.status;
        }
        request.status_code = status1;
        const _Math = Math;
        const _performance = performance;
        request.duration_ms = Math.round(performance.now() - closure_1);
        trackHttpRequestDefault(request);
        c2 = false;
      }
    });
    promise.on("error", (status, text) => {
      let obj = LogAggregatorAll;
      ({ method, url } = closure_0);
      status = undefined;
      if (status != null) {
        status = status.status;
      }
      text = undefined;
      if (text != null) {
        text = text.text;
      }
      obj.report("Network", "Failed " + method + " to " + url + " with status " + status + " and body: " + text);
      if (null != status) {
        if ("parse" in status) {
          if (status.parse) {
            let str = "[FILTERED]";
            if (closure_6.includes(tmp2.url)) {
              const xhr = tmp2.xhr;
              let substr;
              if (xhr != null) {
                const responseText = xhr.responseText;
                if (responseText != null) {
                  substr = responseText.slice(0, 1000);
                }
              }
              str = substr;
            }
            obj = { category: "superagent", message: "Failed to parse HTTP response.", data: null };
            const request = { method: null, url: null, responseText: null, status: null };
            ({ method: obj4.method, url: obj4.url } = tmp2);
            request.responseText = str;
            request.status = status.status;
            obj.data = request;
            SentryUtilsDefault.addBreadcrumb(obj);
          }
        }
      }
      if (c2) {
        const request1 = { url: null, method: null, status_code: null, duration_ms: null };
        ({ url: obj5.url, method: obj5.method } = tmp2);
        let status1;
        if (text != null) {
          status1 = text.status;
        }
        request1.status_code = status1;
        const _Math = Math;
        const _performance = performance;
        request1.duration_ms = Math.round(performance.now() - closure_1);
        trackHttpRequestDefault(request1);
        c2 = false;
      }
    });
  },
  interceptResponse(statusCode, arg1, arg2) {
    closure_1 = arg1;
    closure_2 = arg2;
    if (400 === statusCode.statusCode) {
      let body = statusCode.body;
      let captcha_key;
      if (body != null) {
        captcha_key = body.captcha_key;
      }
      if (captcha_key) {
        const items = [statusCode(1896)(17286, dependencyMap.paths), statusCode(1896)(11277, dependencyMap.paths)];
        const allPromises = Promise.all(items);
        const nextPromise = Promise.all(items).then((result) => {
          const iter = result[Symbol.iterator]();
          let nextResult;
          if (iter !== undefined) {
            nextResult = iter.next();
          }
          let nextResult1;
          let tmp4 = tmp;
          if (iter !== undefined) {
            tmp4 = tmp6;
            if (iter !== undefined) {
              nextResult1 = iter.next();
              tmp4 = tmp6;
            }
          }
          if (!tmp4) {
            iter.return();
          }
          return nextResult.default.showCaptchaAsync(nextResult1.extractCaptchaPropsFromResponse(statusCode.body));
        });
        Promise.all(items).then((result) => {
          const iter = result[Symbol.iterator]();
          let nextResult;
          if (iter !== undefined) {
            nextResult = iter.next();
          }
          let nextResult1;
          let tmp4 = tmp;
          if (iter !== undefined) {
            tmp4 = tmp6;
            if (iter !== undefined) {
              nextResult1 = iter.next();
              tmp4 = tmp6;
            }
          }
          if (!tmp4) {
            iter.return();
          }
          return nextResult.default.showCaptchaAsync(nextResult1.extractCaptchaPropsFromResponse(statusCode.body));
        }).then((X_Captcha_Key) => {
          ({ captcha_rqtoken, captcha_session_id } = X_Captcha_Key);
          const obj = { "X-Captcha-Key": X_Captcha_Key.captcha_key };
          if (null != captcha_rqtoken) {
            obj["X-Captcha-Rqtoken"] = captcha_rqtoken;
          }
          if (null != captcha_session_id) {
            obj["X-Captcha-Session-Id"] = captcha_session_id;
          }
          closure_1(obj);
        }).catch(arg2);
        let flag = true;
        const nextPromise1 = Promise.all(items).then((result) => {
          const iter = result[Symbol.iterator]();
          let nextResult;
          if (iter !== undefined) {
            nextResult = iter.next();
          }
          let nextResult1;
          let tmp4 = tmp;
          if (iter !== undefined) {
            tmp4 = tmp6;
            if (iter !== undefined) {
              nextResult1 = iter.next();
              tmp4 = tmp6;
            }
          }
          if (!tmp4) {
            iter.return();
          }
          return nextResult.default.showCaptchaAsync(nextResult1.extractCaptchaPropsFromResponse(statusCode.body));
        }).then((X_Captcha_Key) => {
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
          const promise4 = statusCode(1896)(15664, dependencyMap.paths);
          statusCode(1896)(15664, dependencyMap.paths).then((openMFAModal) => {
            openMFAModal.openMFAModal(statusCode.body.mfa, closure_1, closure_2);
          }).catch(arg2);
          flag = true;
          const nextPromise2 = statusCode(1896)(15664, dependencyMap.paths).then((openMFAModal) => {
            openMFAModal.openMFAModal(statusCode.body.mfa, closure_1, closure_2);
          });
        }
      }
    }
    const body4 = statusCode.body;
    let code1;
    if (body4 != null) {
      code1 = body4.code;
    }
    if (obj.isLimitedAccessErrorCode(statusCode.statusCode, code1)) {
      tmp7(1896)(5522, tmp8.paths).then((result) => {
        result.default();
      });
      flag = false;
      const promise3 = tmp7(1896)(5522, tmp8.paths);
    } else {
      const body5 = statusCode.body;
      let code2;
      if (body5 != null) {
        code2 = body5.code;
      }
      if (tmp7Result.isLimitedAccessErrorCode(statusCode.statusCode, code2)) {
        tmp7(1896)(13830, tmp8.paths).then((result) => {
          const body = statusCode.body;
          let guild_id;
          if (body != null) {
            guild_id = body.guild_id;
          }
          result.default(guild_id);
        });
        flag = false;
        const promise2 = tmp7(1896)(13830, tmp8.paths);
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
          tmp7(1896)(17293, tmp8.paths).then((openRestrictedHoursModal) => {
            const result = openRestrictedHoursModal.openRestrictedHoursModal();
          });
          flag = false;
          const promise = tmp7(1896)(17293, tmp8.paths);
        }
      }
      tmp7Result = tmp7(17292);
    }
  }
});
HTTPUtils = fn(1272);
let closure_0 = asyncGeneratorStep(async (arg0, value) => {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === dependencyMap) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_129_0 = closure_0;
          const _HermesInternal2 = HermesInternal;
          tmp5(7).report("Network", "Request to " + closure_0 + " failed, will retry.");
          const obj7 = tmp5(7);
          const tmp24 = tmp2;
          if (obj8.isOnline()) {
            c4 = 3;
          } else {
            dependencyMap = 1;
            c4 = 1;
            const obj1 = { value: tmp24(1461).awaitOnline(), done: false };
            return obj1;
          }
          obj8 = tmp2(1461);
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        obj = tmp5(7);
        const _HermesInternal = HermesInternal;
        obj.report("Network", "Network detected online, retrying " + closure_129_0);
      }
      c4 = 3;
      const obj2 = { value, done: true };
      return obj2;
    } catch (tmp14) {
      c4 = tmp;
      throw tmp14;
    }
  }
});
HTTPUtils.setAwaitOnline(function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
});
const size = fn(2);
let result1 = size.fileFinishedImporting("lib/superagentPatch.tsx");