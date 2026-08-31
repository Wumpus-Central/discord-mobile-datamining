// discord_app/modules/tti_analytics/native/TTIAnalyticsUtils.tsx
import isTracingDefault from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef1208 from "../../../utils/SentryUtils.native.tsx";
import getConstantsAll from "../../../utils/native/ClientInfoUtils.tsx";
import coerceMainRoute from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import getRootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import DCDDeviceManager from "../../../utils/native/DeviceUtils.tsx";
import getMediaPerformanceClassDefault from "../../device/getMediaPerformanceClass.android.tsx";
import AppStartInfo2 from "AppStartInfo.android.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../cache/CacheStore.tsx";
import closure_5 from "../../experiments/ExperimentStore.tsx";
import closure_6 from "../../user_settings/ThemeStore.tsx";
import closure_7 from "../../../stores/AuthenticationStore.tsx";
import closure_8 from "../../../stores/ChannelStore.tsx";
import closure_9 from "../../../stores/DeveloperOptionsStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { ACCEPT_INVITE_MODAL_KEY } from "../../accept_invite/native/AcceptInviteConstants.tsx";
import { StaticChannelRoutes } from "../../channel/ChannelConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import v1 from "../../../../_runtime/00514_v1.js";
import set from "../../../../_runtime/00002_set.js";

require = arg1;
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
    obj[5] = getMediaPerformanceClassDefault();
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
    tmpResult = coerceMainRoute;
  }
  const obj = getRootNavigationRef;
  const tmp = require;
}
function sharedProperties(screen_name, has_cached_data) {
  const obj = { load_id: closure_16, duration_ms_since_app_opened: Date.now() - arg2, screen_name, has_cached_data, manifest: null };
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === closure_5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = 0;
              closure_3 = tmp2;
              closure_3 = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              const _Date = Date;
              closure_3 = Date.now();
              closure_5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback2(4309).getAppFirstVisibleTimestamp();
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
            closure_4 = arg1;
            closure_5 = closure_3 - closure_4;
            callback2(4309).reportFullyDrawn();
            const obj5 = callback2(4309);
            callback2(10).mark("\u2757", "Track app_ui_viewed");
            const obj6 = callback2(10);
            callback2(10).addDetail("TTI", closure_5);
            const obj7 = callback2(10);
            callback2(10).markAt("\u{1F3C3}", "app_opened", closure_4);
            const obj8 = callback2(10);
            callback(7386).ttiRecorded(closure_5);
            let _setTimeout = setTimeout;
            let timerId = setTimeout(() => {
              let str = closure_0;
              if (closure_0 == null) {
                str = "unknownn";
              }
              !(function logLegacyAppUiViewed(arg0, closure_1, closure_2, closure_3, closure_4) {
                const self = this;
                const apply = closure_24.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(str, closure_1, closure_2, closure_3, closure_4);
            }, 1000);
            (function scheduleTrackAppUiViewed2() {
              if (null == timeout) {
                let _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  callback(9).setTTICallback(/* F122703 */ function() { ... });
                  callback3();
                  c25 = null;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp6) {
          c6 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  closure_23 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c7 = 0;
    c8 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_0 = callback;
              callback = closure_3;
              dependencyMap = undefined;
              closure_3 = undefined;
              let JSBundleLoadedTimestamp;
              JSBundleParsedTimestamp = undefined;
              dependencyMap = closure_1_22(closure_0, dependencyMap, JSBundleLoadedTimestamp);
              c7 = 1;
              c8 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(4309).getJSBundleTimestamps();
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
            closure_3 = arg1;
            JSBundleLoadedTimestamp = closure_3.JSBundleLoadedTimestamp;
            JSBundleParsedTimestamp = closure_3.JSBundleParsedTimestamp;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp7) {
          c8 = tmp;
          throw tmp7;
        }
      }
    })();
  });
  closure_24 = tmp;
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        theme = 2;
        if (0 === closure_5) {
          if (arg0 === 1) {
            theme = 3;
            throw arg1;
          } else if (arg0 === 2) {
            theme = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let extraProperties = tmp5;
            c3 = tmp2;
            let callback;
            let lib;
            let appCreatedTime;
            c3 = undefined;
            extraProperties = undefined;
            closure_5 = undefined;
            theme = undefined;
            const tmp76 = closure_1_21();
            callback = tmp76;
            if (tmp76 == null) {
              callback = "unknown";
            }
            const AppStartInfo = closure_1_0(appCreatedTime[20]).AppStartInfo;
            closure_5 = 1;
            theme = 1;
            obj1 = { value: null, done: false };
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
            lib = arg1;
            appCreatedTime = lib.appCreatedTime;
            const appFirstVisibleTime = lib.appFirstVisibleTime;
            extraProperties = lib.extraProperties;
            const allNativeTimestamps = lib(appCreatedTime[21]).getAllNativeTimestamps();
            closure_5 = 2;
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
          const cumulativeCPUUsage = lib(appCreatedTime[25]).getCumulativeCPUUsage();
          let usage;
          if (cumulativeCPUUsage != null) {
            usage = cumulativeCPUUsage.usage;
          }
          lib = usage;
          if (usage == null) {
            lib = null;
          }
          closure_5 = lib;
          obj = {};
          let merged = Object.assign(callback2());
          appCreatedTime = extraProperties;
          if (extraProperties == null) {
            appCreatedTime = {};
          }
          const merged1 = Object.assign(appCreatedTime);
          obj1 = lib(appCreatedTime[23]);
          const merged2 = Object.assign(obj1.serializeTTITracker(c3));
          obj.load_id = closure_16;
          obj.screen_name = callback;
          obj.has_cached_data = extraProperties.hasCache();
          obj.startup_cpu_usage_cumulative = closure_5;
          obj.theme = theme.theme;
          theme = obj;
          obj2 = lib(appCreatedTime[17]);
          obj2.mark("\u2757", "Track app_ui_viewed2");
          obj3 = lib(appCreatedTime[19]);
          obj3.track(APP_UI_VIEWED2.APP_UI_VIEWED2, theme, { logEventProperties: true });
          obj4 = callback(appCreatedTime[26]);
          const result = obj4.trackAndroidArtProfileSnapshot(closure_16, callback2());
          closure_26 = theme;
          if (alertStartupMetrics.alertStartupMetrics) {
            let obj5 = lib(appCreatedTime[27]);
            obj5 = { importer: null };
            obj5[0] = function importer() {
              return callback(paths[29])(paths[28], paths.paths).then((arg0) => {
                closure_0 = arg0.default;
                return (arg0) => {
                  let str = closure_1_6.app_launch_scenario;
                  if (str == null) {
                    str = "-";
                  }
                  const obj = { title: "App start times", body: null };
                  const combined = "\nFirstContentfulPaint (TTI): " + closure_1_6.time_first_contentful_paint + "ms\n  \u2022 App start \u2192 JS bundle start: " + closure_1_6.time_before_js_bundle_start + "ms\n  \u2022 MainAppl. \u2192 MainActivity start: " + closure_1_6.android_time_creation_to_create_main_activity + "ms\n    \u2022 Start type: " + closure_1_6.app_start_type + "\n    \u2022 Launch scenario: " + str + "\n(legacy) Cached msg render: " + closure_1_6.time_display_messages_with_cache_end + "ms\n              ";
                  obj[1] = combined.trimStart();
                  const merged = Object.assign(arg0);
                  return closure_2_13(closure_0, obj);
                };
              });
            };
            obj5.openLazy(obj5);
          }
          const obj15 = lib(appCreatedTime[25]);
          if (obj8.runningTTIAutomation()) {
            (function logToDevice(json) {
              let obj = {};
              let merged = Object.assign(json);
              obj.logged_at = Date.now();
              obj.user_id = id.getId();
              const timestamp = Date.now();
              closure_0 = timestamp;
              const item = callback2(obj).forEach((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.type = "app_ui_viewed";
                obj.batch_id = closure_0;
                const json = JSON.stringify(obj);
                closure_1_1(closure_1_2[21]).logToDevice(json);
              });
              closure_0 = timestamp + 1;
              const arr = callback2(obj);
              const item1 = callback2(allExperimentAssignments.getAllExperimentAssignments()).forEach((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.batch_id = closure_0;
                obj.type = "experiments";
                const json = JSON.stringify(obj);
                closure_1_1(closure_1_2[21]).logToDevice(json);
              });
              json = JSON.stringify({ type: "finished" });
              const arr2 = callback2(allExperimentAssignments.getAllExperimentAssignments());
              _null(paths[21]).logToDevice(json);
              const obj2 = _null(paths[21]);
              _null(paths[21]).trackTTILogged();
            })(theme);
          }
          theme = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp57) {
        theme = tmp;
        throw tmp57;
      }
    }
  });
  closure_28 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_4 = tmp2;
              c5 = 0;
              closure_0 = undefined;
              const callback2 = closure_1_22;
              closure_3 = closure_0;
              const table = callback;
              let obj2 = callback(closure_1_2[21]);
              c7 = 1;
              c8 = 1;
              obj1 = { value: null, done: false };
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
            closure_0 = callback2(closure_3, table, arg1);
            obj = callback(table[19]);
            obj.track(constants.APP_LAUNCH_COMPLETED, closure_0, { logEventProperties: true });
            c8 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp21) {
          c8 = tmp;
          throw tmp21;
        }
      }
    })();
  });
  closure_30 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c14 = null;
let closure_16 = v1.v4();
const Manifest = getConstantsAll.getConstants().Manifest;
let c18 = false;
let set = new Set(["private_channel", "guild-forum", "guild-directory", "guild-text", "thread", "redesign-guilds", "redesign-messages"]);
const set1 = new Set(["friends_list", "guild-voice", "redesign-guild-voice", "unknown-channel", "redesign-unknown-channel", "channel-list", "other"]);
let c25 = null;
let c26 = null;
let result = set.fileFinishedImporting("modules/tti_analytics/native/TTIAnalyticsUtils.tsx");

export { getDeviceMetadata };
export function currentLoadId() {
  return closure_16;
}
export const trackAppOpened = function trackAppOpened(launcher) {
  let obj = isTracingDefault;
  obj.mark("\u{1F3C3}", "Track app_opened");
  obj = { openFrom: launcher };
  _modDef1208.addBreadcrumb({ category: "lifecycle", message: "App opened", data: obj });
  const obj2 = _modDef1208;
  obj = {};
  const merged = Object.assign(getDeviceMetadata());
  obj.opened_from = launcher;
  obj.load_id = closure_16;
  obj.theme = theme.theme;
  expandEventPropertiesDefault.track(AnalyticEvents.APP_OPENED, obj, { logEventProperties: true });
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
    hasCacheResult = closure_4.hasCache();
  }
  const AppStartInfo = AppStartInfo2.AppStartInfo;
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
    hasCacheResult = closure_4.hasCache();
  }
  if (!c18) {
    isTracingDefault.mark("\u{1F3C3}", "Track app_launch");
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
    const obj = isTracingDefault;
  }
};