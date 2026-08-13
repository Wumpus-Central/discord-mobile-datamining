// discord_app/modules/tti_analytics/native/TTIAnalyticsUtils.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleClearCaches from "handleClearCaches";
import getHash from "getHash";
import handleThemeChange from "handleThemeChange";
import fetchFingerprint from "fetchFingerprint";
import closure_8 from "ensureGuildLoaded";
import refreshSourceMapCookie from "refreshSourceMapCookie";
import { AnalyticEvents } from "ME";
import { ACCEPT_INVITE_MODAL_KEY } from "ACCEPT_INVITE_MODAL_KEY";
import { StaticChannelRoutes } from "set";
import { jsx } from "enforcing";
import v1 from "v1";
import set from "getHash";
import { isTracing } from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { DCDDeviceManager } from "../../../utils/native/DeviceUtils.tsx";
import { SentryUtils.native } from "../../../utils/SentryUtils.native.tsx";
import { getMediaPerformanceClass } from "../../device/getMediaPerformanceClass.android.tsx";
import { getRootNavigationRef } from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import { AppStartInfo } from "AppStartInfo.android.tsx";

const require = arg1;
function getDeviceMetadata() {
  if (null == obj) {
    obj = { device_model: null, device_brand: null, device_product: null, device_manufacturer: null, smallest_screen_width_dp: null, device_performance_class: null, soc_name: null, ram_size: null, max_cpu_freq: null };
    obj[0] = DCDDeviceManager.getDeviceModel();
    const obj2 = DCDDeviceManager;
    obj[1] = DCDDeviceManager.getDeviceBrand();
    const obj3 = DCDDeviceManager;
    obj[2] = DCDDeviceManager.getDeviceProduct();
    const obj4 = DCDDeviceManager;
    obj[3] = DCDDeviceManager.getDeviceManufacturer();
    const obj5 = DCDDeviceManager;
    obj[4] = DCDDeviceManager.getSmallestScreenWidthDp();
    obj[5] = getMediaPerformanceClass();
    const obj6 = DCDDeviceManager;
    obj[6] = DCDDeviceManager.getSocName();
    const obj7 = DCDDeviceManager;
    obj[7] = DCDDeviceManager.getRamSize();
    const obj8 = DCDDeviceManager;
    obj[8] = DCDDeviceManager.getMaxCpuFreq();
    const obj9 = DCDDeviceManager;
  }
  return obj;
}
function getRedesignScreenName() {
  let name;
  let params;
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  let currentRoute;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
  }
  if (null == currentRoute) {
    return null;
  } else {
    if (tmpResult.isModalOpen(ACCEPT_INVITE_MODAL_KEY)) {
      return "invite";
    } else {
      ({ name, params } = currentRoute);
      if (params != null) {
        const channelId = params.channelId;
      }
      if ("channel" === name) {
        if (null != channelId) {
          if (StaticChannelRoutes.has(channelId)) {
            return channelId;
          } else {
            channel = channel.getChannel(channelId);
            let str3 = "unknown-channel";
            if (null != channel) {
              let str4 = "thread";
              if (!channel.isThread()) {
                let str5 = "private_channel";
                if (!channel.isPrivate()) {
                  let str6 = "guild-voice";
                  if (!channel.isGuildVocal()) {
                    let str7 = "guild-forum";
                    if (!channel.isForumLikeChannel()) {
                      let str8 = "guild-text";
                      if (channel.isDirectory()) {
                        str8 = "guild-directory";
                      }
                      str7 = str8;
                    }
                    str6 = str7;
                  }
                  str5 = str6;
                }
                str4 = str5;
              }
              str3 = str4;
            }
            return str3;
          }
        }
      }
      const _HermesInternal = HermesInternal;
      return "redesign-" + name;
    }
    tmpResult = tmp(4197);
  }
  const obj = getRootNavigationRef;
  tmp = require;
}
function sharedProperties(screen_name, has_cached_data) {
  const obj = { load_id: v1, duration_ms_since_app_opened: Date.now() - arg2, screen_name, has_cached_data, manifest: null };
  let tmp = null;
  if (Manifest.length > 0) {
    tmp = Manifest;
  }
  obj[4] = tmp;
  return obj;
}
function _trackAppUIViewedAsync() {
  let self = this;
  let tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === getHash) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let handleClearCaches = 0;
              let ensureGuildLoaded = tmp2;
              ensureGuildLoaded = undefined;
              handleClearCaches = undefined;
              getHash = undefined;
              const _Date = Date;
              ensureGuildLoaded = Date.now();
              getHash = 1;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback2(4204).getAppFirstVisibleTimestamp();
              return obj1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            handleClearCaches = arg1;
            getHash = ensureGuildLoaded - handleClearCaches;
            callback2(4204).reportFullyDrawn();
            const obj5 = callback2(4204);
            callback2(10).mark("\u2757", "Track app_ui_viewed");
            const obj6 = callback2(10);
            callback2(10).addDetail("TTI", getHash);
            const obj7 = callback2(10);
            callback2(10).markAt("\u{1F3C3}", "app_opened", handleClearCaches);
            const obj8 = callback2(10);
            callback(7180).ttiRecorded(getHash);
            let _setTimeout = setTimeout;
            let timerId = setTimeout(() => {
              let str = closure_0;
              if (closure_0 == null) {
                str = "unknownn";
              }
              !(function logLegacyAppUiViewed(arg0, closure_1, closure_2, ensureGuildLoaded, handleClearCaches) {
                const self = this;
                const apply = closure_24.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(str, closure_1, closure_2, ensureGuildLoaded, handleClearCaches);
            }, 1000);
            (function scheduleTrackAppUiViewed2() {
              if (null == timeout) {
                let _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  callback(9).setTTICallback(/* F120421 */ function() { ... });
                  callback3();
                  let c25 = null;
                }, 15 * callback(687).Millis.SECOND);
                callback(9).setTTICallback(() => {
                  const tmp = callback2();
                  let flag = false;
                  if (null != tmp) {
                    if (!set2.has(tmp)) {
                      flag = true;
                      if (set.has(tmp)) {
                        const readySupplemental2 = callback(9).readySupplemental;
                        let hasDataResult = readySupplemental2.hasData();
                        if (hasDataResult) {
                          const firstContentfulPaint = tmp6(9).firstContentfulPaint;
                          let hasDataResult1 = firstContentfulPaint.hasData();
                          if (!hasDataResult1) {
                            const renderLatestMessages = tmp6(9).renderLatestMessages;
                            hasDataResult1 = renderLatestMessages.hasData() || null != tmp6(9).interstitial;
                            const tmp10 = renderLatestMessages.hasData() || null != tmp6(9).interstitial;
                          }
                          hasDataResult = hasDataResult1;
                        }
                        flag = hasDataResult;
                      }
                    } else {
                      const readySupplemental = callback(9).readySupplemental;
                      flag = false;
                    }
                  }
                  let flag2 = flag;
                  if (flag2) {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(closure_25);
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(() => { ... }, 1000);
                    flag2 = true;
                  }
                  return flag2;
                });
              }
            })();
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp6) {
          c6 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  const _trackAppUIViewedAsync = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _logLegacyAppUiViewed() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let ensureGuildLoaded = arg3;
    let handleClearCaches = arg4;
    let c7 = 0;
    let c8 = 0;
    return (function*(arg0, arg1, arg2, arg3, arg4) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const theme = tmp2;
              let JSBundleParsedTimestamp = tmp3;
              let closure_0 = callback;
              callback = ensureGuildLoaded;
              let dependencyMap;
              ensureGuildLoaded = undefined;
              let JSBundleLoadedTimestamp;
              JSBundleParsedTimestamp = undefined;
              dependencyMap = outer1_22(closure_0, dependencyMap, JSBundleLoadedTimestamp);
              c7 = 1;
              c8 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback(4204).getJSBundleTimestamps();
              return obj1;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            ensureGuildLoaded = arg1;
            JSBundleLoadedTimestamp = ensureGuildLoaded.JSBundleLoadedTimestamp;
            JSBundleParsedTimestamp = ensureGuildLoaded.JSBundleParsedTimestamp;
            callback(10).markAt("\u{1F3C3}", "JS Bundle Loaded", JSBundleLoadedTimestamp);
            const obj5 = callback(10);
            callback(10).mark("\u{1F3C3}", "app_ui_viewed logged");
            const obj6 = callback(10);
            callback(10).addDetail("Since Bundle Parsed", +callback - JSBundleParsedTimestamp);
            const _Date = Date;
            const obj7 = callback(10);
            callback(10).endTime = Date.now() + 20000;
            const tmp31 = callback(10);
            const obj2 = {};
            const merged = Object.assign(dependencyMap);
            const merged1 = Object.assign(callback2());
            obj2.duration_ms_since_required_js_bundle_loaded = callback - JSBundleLoadedTimestamp;
            obj2.duration_ms_since_required_js_bundle_parsed = callback - JSBundleParsedTimestamp;
            obj2.theme = theme.theme;
            const merged2 = Object.assign(closure_0);
            callback(698).track(constants.APP_UI_VIEWED, obj2, { logEventProperties: true });
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp7) {
          c8 = tmp;
          throw tmp7;
        }
      }
    })();
  });
  const _logLegacyAppUiViewed = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function trackAppUIViewed2() {
  const self = this;
  const apply = _trackAppUIViewed.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _trackAppUIViewed() {
  const self = this;
  const tmp = callback(function*() {
    if (theme === 2) {
      theme = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        theme = 2;
        if (0 === getHash) {
          if (arg0 === 1) {
            theme = 3;
            throw arg1;
          } else if (arg0 === 2) {
            theme = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c4 = tmp5;
            let c3 = tmp2;
            let closure_0;
            let callback;
            let dependencyMap;
            c3 = undefined;
            c4 = undefined;
            getHash = undefined;
            theme = undefined;
            const tmp72 = outer1_21();
            closure_0 = tmp72;
            if (tmp72 == null) {
              closure_0 = "unknown";
            }
            const AppStartInfo = outer1_0(outer1_2[20]).AppStartInfo;
            getHash = 1;
            theme = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = AppStartInfo.getAppStartInfo();
            return obj1;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            theme = 3;
            throw arg1;
          } else if (arg0 === 2) {
            theme = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            const outer1_1 = arg1;
            outer1_2 = outer1_1.appCreatedTime;
            const outer1_3 = outer1_1.appFirstVisibleTime;
            const outer1_4 = outer1_1.extraProperties;
            const allNativeTimestamps = callback(4204).getAllNativeTimestamps();
            getHash = 2;
            theme = 1;
            let obj3 = { value: null, done: false };
            obj3[0] = allNativeTimestamps.then((nativeLogs) => {
              _null(paths[17]).logGroups[0].nativeLogs = nativeLogs;
              _null(paths[23]).processNativeLogs(nativeLogs, paths);
            });
            return obj3;
          }
        } else if (arg0 === 1) {
          theme = 3;
          throw arg1;
        } else if (arg0 === 2) {
          theme = 3;
          let obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          const cumulativeCPUUsage = callback(7181).getCumulativeCPUUsage();
          let usage;
          if (cumulativeCPUUsage != null) {
            usage = cumulativeCPUUsage.usage;
          }
          callback = usage;
          if (usage == null) {
            callback = null;
          }
          getHash = callback;
          obj = {};
          let merged = Object.assign(callback2());
          dependencyMap = c4;
          if (c4 == null) {
            dependencyMap = {};
          }
          const merged1 = Object.assign(dependencyMap);
          obj1 = callback(9);
          const merged2 = Object.assign(obj1.serializeTTITracker(c3));
          obj.load_id = closure_16;
          obj.screen_name = closure_0;
          obj.has_cached_data = c4.hasCache();
          obj.startup_cpu_usage_cumulative = getHash;
          obj.theme = theme.theme;
          theme = obj;
          obj2 = callback(10);
          obj2.mark("\u2757", "Track app_ui_viewed2");
          obj3 = callback(698);
          obj3.track(APP_UI_VIEWED2.APP_UI_VIEWED2, theme, { logEventProperties: true });
          let closure_26 = theme;
          if (alertStartupMetrics.alertStartupMetrics) {
            obj4 = callback(4684);
            const obj5 = { importer: null };
            obj5[0] = function importer() {
              return callback(paths[28])(paths[27], paths.paths).then((arg0) => {
                let closure_0 = arg0.default;
                return (arg0) => {
                  let str = outer1_6.app_launch_scenario;
                  if (str == null) {
                    str = "-";
                  }
                  const obj = { title: "App start times", body: null };
                  const combined = "\nFirstContentfulPaint (TTI): " + outer1_6.time_first_contentful_paint + "ms\n  \u2022 App start \u2192 JS bundle start: " + outer1_6.time_before_js_bundle_start + "ms\n  \u2022 MainAppl. \u2192 MainActivity start: " + outer1_6.android_time_creation_to_create_main_activity + "ms\n    \u2022 Start type: " + outer1_6.app_start_type + "\n    \u2022 Launch scenario: " + str + "\n(legacy) Cached msg render: " + outer1_6.time_display_messages_with_cache_end + "ms\n              ";
                  obj[1] = combined.trimStart();
                  const merged = Object.assign(arg0);
                  return outer2_13(closure_0, obj);
                };
              });
            };
            obj4.openLazy(obj5);
          }
          const obj14 = callback(7181);
          if (obj7.runningTTIAutomation()) {
            (function logToDevice(json) {
              let obj = {};
              let merged = Object.assign(json);
              obj.logged_at = Date.now();
              obj.user_id = id.getId();
              const timestamp = Date.now();
              let closure_0 = timestamp;
              const item = callback2(obj).forEach((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.type = "app_ui_viewed";
                obj.batch_id = closure_0;
                const json = JSON.stringify(obj);
                outer1_1(outer1_2[21]).logToDevice(json);
              });
              closure_0 = timestamp + 1;
              const arr = callback2(obj);
              const item1 = callback2(allExperimentAssignments.getAllExperimentAssignments()).forEach((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.batch_id = closure_0;
                obj.type = "experiments";
                const json = JSON.stringify(obj);
                outer1_1(outer1_2[21]).logToDevice(json);
              });
              json = JSON.stringify({ type: "finished" });
              const arr2 = callback2(allExperimentAssignments.getAllExperimentAssignments());
              _null(paths[21]).logToDevice(json);
              const obj2 = _null(paths[21]);
              _null(paths[21]).trackTTILogged();
            })(theme);
          }
          theme = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp53) {
        theme = tmp;
        throw tmp53;
      }
    }
  });
  const _trackAppUIViewed = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function batchKeys(arg0) {
  const keys = Object.keys(arg0);
  const items = [];
  let num = 0;
  if (0 < keys.length) {
    const sum = num + 10;
    const substr = keys.slice(num, sum);
    const obj = {};
    const iter = substr[Symbol.iterator]();
    do {
      let tmp4 = substr;
      let nextResult = iter.next();
      let tmp6 = iter;
      while (iter !== undefined) {
        obj[nextResult] = arg0[nextResult];
        continue;
      }
      let arr = items.push(obj);
      num = sum;
    } while (sum < keys.length);
  }
  return items;
}
function _trackAppLaunchCompletedAsync() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    return (function*(arg0, arg1) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let handleClearCaches = tmp2;
              let c5 = 0;
              let closure_0;
              const callback2 = outer1_22;
              let ensureGuildLoaded = closure_0;
              const table = callback;
              let obj2 = callback(outer1_2[21]);
              c7 = 1;
              c8 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.getAppFirstVisibleTimestamp();
              return obj1;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = callback2(ensureGuildLoaded, table, arg1);
            obj = callback(table[19]);
            obj.track(constants.APP_LAUNCH_COMPLETED, closure_0, { logEventProperties: true });
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp21) {
          c8 = tmp;
          throw tmp21;
        }
      }
    })();
  });
  const _trackAppLaunchCompletedAsync = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c14 = null;
v1 = v1.v4();
const Manifest = require("getConstants").getConstants().Manifest;
let c18 = false;
let set = new Set(["private_channel", "guild-forum", "guild-directory", "guild-text", "thread", "redesign-guilds", "redesign-messages"]);
const set1 = new Set(["friends_list", "guild-voice", "redesign-guild-voice", "unknown-channel", "redesign-unknown-channel", "channel-list", "other"]);
let c25 = null;
let c26 = null;
const result = set.fileFinishedImporting("modules/tti_analytics/native/TTIAnalyticsUtils.tsx");

export { getDeviceMetadata };
export function currentLoadId() {
  return v1;
}
export const trackAppOpened = function trackAppOpened(launcher) {
  let obj = isTracing;
  obj.mark("\u{1F3C3}", "Track app_opened");
  obj = { openFrom: launcher };
  SentryUtils.native.addBreadcrumb({ category: "lifecycle", message: "App opened", data: obj });
  const obj2 = SentryUtils.native;
  obj = {};
  const merged = Object.assign(getDeviceMetadata());
  obj.opened_from = launcher;
  obj.load_id = v1;
  obj.theme = theme.theme;
  expandEventProperties.track(AnalyticEvents.APP_OPENED, obj, { logEventProperties: true });
};
export const trackAppUIViewed = function trackAppUIViewed(ModalScreen, arg1, hasCacheResult) {
  let tmp = ModalScreen;
  if (ModalScreen === undefined) {
    tmp = getRedesignScreenName();
  }
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (hasCacheResult === undefined) {
    hasCacheResult = handleClearCaches.hasCache();
  }
  const AppStartInfo = AppStartInfo.AppStartInfo;
  if (!AppStartInfo.getAppUIViewed()) {
    (function trackAppUIViewedAsync(ModalScreen, arg1, hasCacheResult) {
      const self = this;
      const apply = closure_23.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(tmp, obj, hasCacheResult);
  }
};
export function getLastTrackedAppUiViewed2Properties() {
  return c26;
}
export const trackAppLaunchCompleted = function trackAppLaunchCompleted(arg0, hasCacheResult) {
  let str = arg0;
  if (arg0 === undefined) {
    str = getRedesignScreenName();
  }
  if (hasCacheResult === undefined) {
    hasCacheResult = handleClearCaches.hasCache();
  }
  if (!c18) {
    isTracing.mark("\u{1F3C3}", "Track app_launch");
    c18 = true;
    if (str == null) {
      str = "unknown";
    }
    (function trackAppLaunchCompletedAsync(arg0, hasCacheResult) {
      const self = this;
      const apply = closure_30.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(str, hasCacheResult);
    const obj = isTracing;
  }
};