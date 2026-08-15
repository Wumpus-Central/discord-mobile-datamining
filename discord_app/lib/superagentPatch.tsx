// discord_app/lib/superagentPatch.tsx
import getHash from "getHash";
import { AbortCodes } from "ME";
import ApexExperiment from "ApexExperiment";
import importDefaultResult from "isDiscordProxiedAssetUrl";
import sendRequest from "sendRequest";
import sendRequest from "sendRequest";
import sendRequest from "sendRequest";
import importDefaultResult1 from "dispatcher";
import { getTimeZone } from "getTimeZone.native.tsx";

let closure_0 = arg1;
function isAnalyticsEndpoint(pathname) {
  try {
    const _URL = URL;
    const uRL = new URL(pathname);
    return regex.test(uRL.pathname);
  } catch (err) {
    return regex.test(tmp);
  }
}
let closure_6 = ["https://cdn.discordapp.com/bad-domains/updated_hashes.json", "https://cdn.discordapp.com/bad-domains/hashes.json"];
require("_createForOfIteratorHelper").parse[""] = JSON.parse;
const idGenerator = new require("IdGenerator").IdGenerator();
const re8 = /\/api(\/v\d+)?\/science/;
ApexExperiment = { 1: null };
ApexExperiment[1] = { migrationKilled: true };
let closure_10 = ApexExperiment.createApexExperiment({ name: "2026-07-reject-with-error-kill-switch", kind: "user", defaultConfig: { migrationKilled: false }, variations: ApexExperiment });
let c11 = null;
const subscription = require("dispatcher").subscribe("LOGOUT", () => {
  let c11 = null;
});
let result = sendRequest.setRejectWithMigratedError(function isRejectWithMigratedErrorEnabled() {
  let tmp = c11;
  if (null == c11) {
    hasLoadedExperiments = hasLoadedExperiments.hasLoadedExperiments;
    let tmp3 = !hasLoadedExperiments;
    if (hasLoadedExperiments) {
      const tmp5 = !config.getConfig({ location: "reject_with_error_migration" }).migrationKilled;
      c11 = tmp5;
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
});
ApexExperiment = {
  prepareRequest(promise) {
    const callback = promise;
    const _default = callback(1218).default;
    const _default2 = callback(706).default;
    const _default3 = callback(1922).default;
    const importDefault = performance.now();
    if ("/" === promise.url[0]) {
      let tmpResult = tmp(530);
      promise.url = tmpResult.getAPIBaseURL() + promise.url;
      let tmp3 = "Authorization" in promise.header;
      if (!tmp3) {
        tmp3 = "authorization" in promise.header;
      }
      if (!tmp3) {
        const result = promise.set("Authorization", _default.getToken());
      }
      tmpResult = tmp(16494);
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
      if (callback(500).isPlatformEmbedded) {
        const tmpResult1 = tmp(17);
        if (tmpResult2.isAndroid()) {
          let LocalizationManager = tmp(666).default;
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
          let c0 = 10;
          const reduced = items.reduce((arr) => {
            if (10 === closure_0) {
              arr.push(arg1);
            } else {
              const _HermesInternal = HermesInternal;
              arr.push("" + arg1 + ";q=0." + closure_0);
            }
            closure_0 = Math.max(closure_0 - 1, 1);
            return arr;
          }, []);
          return reduced.join(",");
        })(items));
        tmpResult2 = tmp(500);
      }
      const result6 = promise.set("X-Discord-Locale", callback(1994).default.locale);
      const tmp19 = getTimeZone();
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
              const str2 = callback(table[5]).toURLSafe("traces?" + str.toString(), "https://datadog.discord.tools/apm/");
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
    const importAll = (function shouldTrackHttpRequest(url) {
      return !callback3(url);
    })(promise.url);
    _default4 = callback(698).default;
    importAll(7).report("Network", "Sending " + promise.method + " to " + promise.url);
    promise.on("response", (status) => {
      let method;
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
      let obj = callback2(outer1_3[20]);
      ({ method, url } = closure_0);
      status = undefined;
      if (status != null) {
        status = status.status;
      }
      obj.report("Network", "Completed " + method + " to " + url + " with status: " + status + " " + str);
      if (c2) {
        obj = { url: null, method: null, status_code: null, duration_ms: null };
        ({ url: obj2[0], method: obj2[1] } = closure_0);
        let status1;
        if (status != null) {
          status1 = status.status;
        }
        obj[2] = status1;
        const _Math = Math;
        const _performance = performance;
        obj[3] = Math.round(performance.now() - callback);
        callback(outer1_3[19])(obj);
        c2 = false;
        const tmp8 = callback(outer1_3[19]);
      }
    });
    promise.on("error", (status, text) => {
      let method;
      let url;
      let obj = callback2(outer1_3[20]);
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
            if (outer1_6.includes(tmp2.url)) {
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
            let obj1 = callback(tmp[21]);
            obj = { category: "superagent", message: "Failed to parse HTTP response.", data: null };
            obj = { method: null, url: null, responseText: null, status: null };
            ({ method: obj4[0], url: obj4[1] } = tmp2);
            obj[2] = str;
            obj[3] = status.status;
            obj[2] = obj;
            obj1.addBreadcrumb(obj);
          }
        }
      }
      if (c2) {
        obj1 = { url: null, method: null, status_code: null, duration_ms: null };
        ({ url: obj5[0], method: obj5[1] } = tmp2);
        let status1;
        if (text != null) {
          status1 = text.status;
        }
        obj1[2] = status1;
        const _Math = Math;
        const _performance = performance;
        obj1[3] = Math.round(performance.now() - callback);
        callback(tmp[19])(obj1);
        c2 = false;
        const tmp11 = callback(tmp[19]);
      }
    });
  },
  interceptResponse(statusCode) {
    const callback = statusCode;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (400 === statusCode.statusCode) {
      let body = statusCode.body;
      let captcha_key;
      if (body != null) {
        captcha_key = body.captcha_key;
      }
      if (captcha_key) {
        const items = [callback(2007)(16499, dependencyMap.paths), callback(2007)(10478, dependencyMap.paths)];
        const allPromises = Promise.all(items);
        const nextPromise = Promise.all(items).then((arg0) => {
          const iter = arg0[Symbol.iterator]();
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
        Promise.all(items).then((arg0) => {
          const iter = arg0[Symbol.iterator]();
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
          callback(obj);
        }).catch(arg2);
        let flag = true;
        const nextPromise1 = Promise.all(items).then((arg0) => {
          const iter = arg0[Symbol.iterator]();
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
          callback(obj);
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
          const promise4 = callback(2007)(15118, dependencyMap.paths);
          callback(2007)(15118, dependencyMap.paths).then((openMFAModal) => {
            openMFAModal.openMFAModal(statusCode.body.mfa, closure_1, closure_2);
          }).catch(arg2);
          flag = true;
          const nextPromise2 = callback(2007)(15118, dependencyMap.paths).then((openMFAModal) => {
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
      tmp7(2007)(6780, tmp8.paths).then((arg0) => {
        arg0.default();
      });
      flag = false;
      const promise3 = tmp7(2007)(6780, tmp8.paths);
    } else {
      const body5 = statusCode.body;
      let code2;
      if (body5 != null) {
        code2 = body5.code;
      }
      if (tmp7Result.isLimitedAccessErrorCode(statusCode.statusCode, code2)) {
        tmp7(2007)(4655, tmp8.paths).then((arg0) => {
          const body = statusCode.body;
          let guild_id;
          if (body != null) {
            guild_id = body.guild_id;
          }
          arg0.default(guild_id);
        });
        flag = false;
        const promise2 = tmp7(2007)(4655, tmp8.paths);
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
          tmp7(2007)(16506, tmp8.paths).then((openRestrictedHoursModal) => {
            const result = openRestrictedHoursModal.openRestrictedHoursModal();
          });
          flag = false;
          const promise = tmp7(2007)(16506, tmp8.paths);
        }
      }
      tmp7Result = tmp7(16505);
    }
  }
};
ApexExperiment = sendRequest.setRequestPatch(ApexExperiment);
closure_0 = undefined;
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  return (function*(arg0) {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp5;
            let closure_1 = tmp2;
            const _HermesInternal2 = HermesInternal;
            outer1_2(7).report("Network", "Request to " + closure_0 + " failed, will retry.");
            const obj7 = outer1_2(7);
            const tmp25 = outer1_1;
            if (obj8.isOnline()) {
              c4 = 3;
            } else {
              dependencyMap = 1;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = tmp25(1474).awaitOnline();
              return obj1;
            }
            obj8 = outer1_1(1474);
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          obj = outer1_2(7);
          const _HermesInternal = HermesInternal;
          obj.report("Network", "Network detected online, retrying " + closure_0);
        }
        c4 = 3;
        const obj2 = { value: null, done: true };
        obj2[0] = arg1;
        return obj2;
      } catch (tmp14) {
        c4 = tmp;
        throw tmp14;
      }
    }
  })();
});
sendRequest.setAwaitOnline(function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
});
let result1 = require("ME").fileFinishedImporting("lib/superagentPatch.tsx");