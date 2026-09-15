// discord_app/lib/superagentPatch.tsx
import LogAggregatorAll from "../modules/debug/LogAggregator.tsx";
import SentryUtilsDefault from "../utils/SentryUtils.native.tsx";
import _createForOfIteratorHelperDefault from "../../_runtime/01272__createForOfIteratorHelper.js";
import getTimeZoneDefault from "getTimeZone.native.tsx";
import trackHttpRequestDefault from "../modules/telemetry_ring/trackHttpRequest.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ExperimentStore from "../modules/experiments/ExperimentStore.tsx";
import Dispatcher from "../Dispatcher.tsx";

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
let closure_6 = [
  "https://cdn.discordapp.com/bad-domains/updated_hashes.json",
  "https://cdn.discordapp.com/bad-domains/hashes.json",
];
_createForOfIteratorHelperDefault.parse[""] = JSON.parse;
const idGenerator = new fn(17432).IdGenerator();
const re8 = /\/api(\/v\d+)?\/science/;
const ApexExperiment = fn(1434);
let obj2 = {
  name: "2026-07-reject-with-error-kill-switch",
  kind: "user",
  defaultConfig: { migrationKilled: false },
  variations: null,
};
let obj3 = { 1: null };
obj3[1] = { migrationKilled: true };
obj2.variations = obj3;
const config = ApexExperiment.createApexExperiment(obj2);
let closure_11 = null;
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  closure_11 = null;
});
let HTTPUtils = fn(1271);
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
HTTPUtils = fn(1271);
HTTPUtils.setRequestPatch({
  prepareRequest(promise) {
    const _default = promise(502).default;
    const _default2 = promise(1346).default;
    const _default3 = promise(1372).default;
    importDefault = performance.now();
    if ("/" === promise.url[0]) {
      promise.url = tmp(1271).getAPIBaseURL() + promise.url;
      let tmp3 = "Authorization" in promise.header;
      if (!tmp3) {
        tmp3 = "authorization" in promise.header;
      }
      if (!tmp3) {
        const result = promise.set("Authorization", _default.getToken());
      }
      const tmpResult = tmp(1271);
      const result1 = tmp(17433).updateDynamicSuperProperties();
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
      if (promise(1364).isPlatformEmbedded) {
        let items = [];
        const _default5 = tmp(1116).default;
        if (null != _default5) {
          let Languages = _default5.getConstants().Languages;
          if (Languages == null) {
            Languages = [];
          }
          items = Languages;
        }
        const result5 = promise.set(
          "Accept-Language",
          (function populateQValues(items) {
            closure_0 = 10;
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
          })(items),
        );
      }
      const result6 = promise.set("X-Discord-Locale", promise(2026).default.locale);
      const tmp18 = getTimeZoneDefault();
      if (null != tmp18) {
        const result7 = promise.set("X-Discord-Timezone", tmp18);
      }
      const debugOptionsHeaderValue = _default2.getDebugOptionsHeaderValue();
      let tmp21 = null != debugOptionsHeaderValue;
      if (tmp21) {
        tmp21 = "" !== debugOptionsHeaderValue;
      }
      if (tmp21) {
        const result8 = promise.set("X-Debug-Options", debugOptionsHeaderValue);
      }
      const routingKeyHeaderValue = _default2.getRoutingKeyHeaderValue();
      let tmp24 = null != routingKeyHeaderValue;
      if (tmp24) {
        tmp24 = "" !== routingKeyHeaderValue;
      }
      if (tmp24) {
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
              const str = new URLSearchParams();
              str.append("query", '@http.x_client_trace_id:"' + generateResult + '"');
              str.append("showAllSpans", "true");
              const str2 = closure_1(dependencyMap[5]).toURLSafe(
                "traces?" + str.toString(),
                "https://datadog.discord.tools/apm/",
              );
              let str1 = null;
              if (null != str2) {
                str1 = str2.toString();
              }
              return str1;
            })(generateResult);
          }
        } catch (err) {}
      }
      const tmpResult2 = tmp(17433);
    }
    importAll = (function shouldTrackHttpRequest(url) {
      return !isAnalyticsEndpoint(url);
    })(promise.url);
    _default4 = promise(1241).default;
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
      ({ method, url } = promise);
      status = undefined;
      if (status != null) {
        status = status.status;
      }
      text = undefined;
      if (text != null) {
        text = text.text;
      }
      LogAggregatorAll.report(
        "Network",
        "Failed " + method + " to " + url + " with status " + status + " and body: " + text,
      );
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
            const obj3 = { category: "superagent", message: "Failed to parse HTTP response.", data: null };
            const request = { method: null, url: null, responseText: null, status: null };
            ({ method: obj4.method, url: obj4.url } = promise);
            request.responseText = str;
            request.status = status.status;
            obj3.data = request;
            SentryUtilsDefault.addBreadcrumb(obj3);
          }
        }
      }
      if (c2) {
        const request1 = { url: null, method: null, status_code: null, duration_ms: null };
        ({ url: obj5.url, method: obj5.method } = promise);
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
        const items = [statusCode(1897)(17438, dependencyMap.paths), statusCode(1897)(11415, dependencyMap.paths)];
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
        Promise.all(items)
          .then((result) => {
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
          })
          .then((X_Captcha_Key) => {
            ({ captcha_rqtoken, captcha_session_id } = X_Captcha_Key);
            const obj = { "X-Captcha-Key": X_Captcha_Key.captcha_key };
            if (null != captcha_rqtoken) {
              obj["X-Captcha-Rqtoken"] = captcha_rqtoken;
            }
            if (null != captcha_session_id) {
              obj["X-Captcha-Session-Id"] = captcha_session_id;
            }
            closure_1(obj);
          })
          .catch(arg2);
        let flag = true;
        const nextPromise1 = Promise.all(items)
          .then((result) => {
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
          })
          .then((X_Captcha_Key) => {
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
          const promise4 = statusCode(1897)(15766, dependencyMap.paths);
          statusCode(1897)(15766, dependencyMap.paths)
            .then((openMFAModal) => {
              openMFAModal.openMFAModal(statusCode.body.mfa, closure_1, closure_2);
            })
            .catch(arg2);
          flag = true;
          const nextPromise2 = statusCode(1897)(15766, dependencyMap.paths).then((openMFAModal) => {
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
      tmp7(1897)(5607, dependencyMap.paths).then((result) => {
        result.default();
      });
      flag = false;
      const promise3 = tmp7(1897)(5607, dependencyMap.paths);
    } else {
      const body5 = statusCode.body;
      let code2;
      if (body5 != null) {
        code2 = body5.code;
      }
      if (tmp7Result.isLimitedAccessErrorCode(statusCode.statusCode, code2)) {
        tmp7(1897)(13924, dependencyMap.paths).then((result) => {
          const body = statusCode.body;
          let guild_id;
          if (body != null) {
            guild_id = body.guild_id;
          }
          result.default(guild_id);
        });
        flag = false;
        const promise2 = tmp7(1897)(13924, dependencyMap.paths);
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
          tmp7(1897)(17445, dependencyMap.paths).then((openRestrictedHoursModal) => {
            const result = openRestrictedHoursModal.openRestrictedHoursModal();
          });
          flag = false;
          const promise = tmp7(1897)(17445, dependencyMap.paths);
        }
      }
      tmp7Result = tmp7(17444);
    }
    obj = statusCode(9177);
  },
});
HTTPUtils = fn(1271);
let closure_0 = asyncGeneratorStep(async (arg0) => {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_129_0 = closure_0;
          const _HermesInternal2 = HermesInternal;
          tmp5(7).report("Network", "Request to " + closure_0 + " failed, will retry.");
          const obj7 = tmp5(7);
          if (obj8.isOnline()) {
            c4 = 3;
          } else {
            dependencyMap = 1;
            c4 = 1;
            const obj4 = { value: tmp2(1462).awaitOnline(), done: false };
            return obj4;
          }
          obj8 = tmp2(1462);
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const _HermesInternal = HermesInternal;
        tmp5(7).report("Network", "Network detected online, retrying " + closure_129_0);
        const obj = tmp5(7);
      }
      c4 = 3;
      const obj5 = { value, done: true };
      return obj5;
    } catch (tmp14) {
      c4 = tmp;
      throw tmp14;
    }
  }
});
HTTPUtils.setAwaitOnline(function () {
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
