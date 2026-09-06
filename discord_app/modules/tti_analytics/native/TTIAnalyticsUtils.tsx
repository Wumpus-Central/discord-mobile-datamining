// discord_app/modules/tti_analytics/native/TTIAnalyticsUtils.tsx
import AppStartPerformanceDefault from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import NativeTTIManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import getMediaPerformanceClassDefault from "../../device/getMediaPerformanceClass.android.tsx";
import AppStartInfo2 from "AppStartInfo.android.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import CacheStore from "../../cache/CacheStore.tsx";
import ExperimentStore from "../../experiments/ExperimentStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import DeveloperOptionsStore from "../../../stores/DeveloperOptionsStore.tsx";
import ClientInfoUtils from "../../../utils/native/ClientInfoUtils.tsx";

require = fn;
function getDeviceMetadata() {
  if (null == obj) {
    obj = {
      device_model: DeviceUtils.getDeviceModel(),
      device_brand: null,
      device_product: null,
      device_manufacturer: null,
      smallest_screen_width_dp: null,
      device_performance_class: null,
      soc_name: null,
      ram_size: null,
      max_cpu_freq: null,
    };
    obj.device_brand = DeviceUtils.getDeviceBrand();
    obj.device_product = DeviceUtils.getDeviceProduct();
    obj.device_manufacturer = DeviceUtils.getDeviceManufacturer();
    obj.smallest_screen_width_dp = DeviceUtils.getSmallestScreenWidthDp();
    obj.device_performance_class = getMediaPerformanceClassDefault();
    obj.soc_name = DeviceUtils.getSocName();
    obj.ram_size = DeviceUtils.getRamSize();
    obj.max_cpu_freq = DeviceUtils.getMaxCpuFreq();
  }
  return obj;
}
function getRedesignScreenName() {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
            const channel = ChannelStore.getChannel(channelId);
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
    tmpResult = NavigationRouteUtils;
  }
}
function sharedProperties(screen_name, has_cached_data, arg2) {
  obj = { load_id, duration_ms_since_app_opened: Date.now() - arg2, screen_name, has_cached_data, manifest: null };
  let tmp = null;
  if (Manifest.length > 0) {
    tmp = Manifest;
  }
  obj.manifest = tmp;
  return obj;
}
let closure_23 = async function _trackAppUIViewedAsync(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = dependencyMap;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          const _Date = Date;
          closure_131_3 = Date.now();
          c5 = 1;
          c6 = 1;
          const obj1 = { value: require("NativeTTIManagerModule").getAppFirstVisibleTimestamp(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_131_4 = value;
        closure_131_5 = closure_131_3 - closure_131_4;
        closure_132_1(closure_132_2[21]).reportFullyDrawn();
        const obj5 = closure_132_1(closure_132_2[21]);
        closure_132_1(closure_132_2[17]).mark("\u2757", "Track app_ui_viewed");
        const obj6 = closure_132_1(closure_132_2[17]);
        closure_132_1(closure_132_2[17]).addDetail("TTI", closure_131_5);
        const obj7 = closure_132_1(closure_132_2[17]);
        closure_132_1(closure_132_2[17]).markAt("\u{1F3C3}", "app_opened", closure_131_4);
        const obj8 = closure_132_1(closure_132_2[17]);
        closure_132_0(closure_132_2[22]).ttiRecorded(closure_131_5);
        let _setTimeout = setTimeout;
        let timerId = setTimeout(() => {
          let str = closure_1_0;
          if (closure_1_0 == null) {
            str = "unknownn";
          }
          !(function logLegacyAppUiViewed() {
            const self = this;
            const apply = closure_1_24.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(str, closure_1_1, dependencyMap, closure_1_3, closure_1_4);
        }, 1000);
        (function scheduleTrackAppUiViewed2() {
          if (null == timeout) {
            let _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              closure_1_1(9).setTTICallback(() => true);
              closure_1_27();
              c25 = null;
            }, 15 * closure_1_1(1090).Millis.SECOND);
            closure_1_1(9).setTTICallback(() => {
              const tmp = closure_1_21();
              let flag = false;
              if (null != tmp) {
                if (!set2.has(tmp)) {
                  flag = true;
                  if (set.has(tmp)) {
                    const readySupplemental2 = closure_1_1(9).readySupplemental;
                    let hasDataResult = readySupplemental2.hasData();
                    if (hasDataResult) {
                      const firstContentfulPaint = closure_1_1(9).firstContentfulPaint;
                      let hasDataResult1 = firstContentfulPaint.hasData();
                      if (!hasDataResult1) {
                        const renderLatestMessages = closure_1_1(9).renderLatestMessages;
                        hasDataResult1 = renderLatestMessages.hasData() || null != closure_1_1(9).interstitial;
                        const tmp10 = renderLatestMessages.hasData() || null != closure_1_1(9).interstitial;
                      }
                      hasDataResult = hasDataResult1;
                    }
                    flag = hasDataResult;
                  }
                } else {
                  const readySupplemental = closure_1_1(9).readySupplemental;
                  flag = false;
                }
              }
              let flag2 = flag;
              if (flag2) {
                const _clearTimeout = clearTimeout;
                clearTimeout(c25);
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => {
                  closure_1_27();
                  c25 = null;
                }, 1000);
                flag2 = true;
              }
              return flag2;
            });
            obj = closure_1_1(9);
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
};
let closure_24 = async function _logLegacyAppUiViewed(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_6 = tmp2;
          closure_5 = tmp3;
          closure_133_0 = closure_1;
          closure_133_1 = closure_3;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          closure_133_4 = undefined;
          closure_133_5 = undefined;
          closure_133_2 = sharedProperties(closure_0, closure_2, closure_4);
          c7 = 1;
          c8 = 1;
          const obj1 = { value: NativeTTIManagerModuleDefault.getJSBundleTimestamps(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_133_3 = value;
        closure_133_4 = closure_133_3.JSBundleLoadedTimestamp;
        closure_133_5 = closure_133_3.JSBundleParsedTimestamp;
        closure_134_1(closure_134_2[17]).markAt("\u{1F3C3}", "JS Bundle Loaded", closure_133_4);
        const obj5 = closure_134_1(closure_134_2[17]);
        closure_134_1(closure_134_2[17]).mark("\u{1F3C3}", "app_ui_viewed logged");
        const obj6 = closure_134_1(closure_134_2[17]);
        closure_134_1(closure_134_2[17]).addDetail("Since Bundle Parsed", +closure_133_1 - closure_133_5);
        const _Date = Date;
        const obj7 = closure_134_1(closure_134_2[17]);
        closure_134_1(closure_134_2[17]).endTime = Date.now() + 20000;
        const tmp30 = closure_134_1(closure_134_2[17]);
        const obj2 = {};
        const merged = Object.assign(closure_133_2);
        const merged1 = Object.assign(closure_134_15());
        obj2.duration_ms_since_required_js_bundle_loaded = closure_133_1 - closure_133_4;
        obj2.duration_ms_since_required_js_bundle_parsed = closure_133_1 - closure_133_5;
        obj2.theme = closure_134_6.theme;
        const merged2 = Object.assign(closure_133_0);
        closure_134_1(closure_134_2[19]).track(closure_134_10.APP_UI_VIEWED, obj2, { logEventProperties: true });
        c8 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp7) {
      c8 = tmp;
      throw tmp7;
    }
  }
};
function trackAppUIViewed2() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_28 = async function _trackAppUIViewed() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          let appCreatedTime;
          let appFirstVisibleTime;
          let extraProperties;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          const tmp75 = getRedesignScreenName();
          let unknown = tmp75;
          if (tmp75 == null) {
            unknown = "unknown";
          }
          closure_131_0 = unknown;
          const AppStartInfo = AppStartInfo2.AppStartInfo;
          c5 = 1;
          c6 = 1;
          let obj1 = { value: AppStartInfo.getAppStartInfo(), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_131_1 = value;
          appCreatedTime = closure_131_1.appCreatedTime;
          appFirstVisibleTime = closure_131_1.appFirstVisibleTime;
          extraProperties = closure_131_1.extraProperties;
          const allNativeTimestamps = closure_132_1(closure_132_2[21]).getAllNativeTimestamps();
          c5 = 2;
          c6 = 1;
          let obj3 = {
            value: allNativeTimestamps.then((nativeLogs) => {
              c1(paths[17]).logGroups[0].nativeLogs = nativeLogs;
              c1(paths[23]).processNativeLogs(nativeLogs, closure_1_2);
            }),
            done: false,
          };
          return obj3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        let obj4 = { value, done: true };
        return obj4;
      } else {
        const cumulativeCPUUsage = closure_132_1(closure_132_2[25]).getCumulativeCPUUsage();
        let usage;
        if (cumulativeCPUUsage != null) {
          usage = cumulativeCPUUsage.usage;
        }
        c1 = usage;
        if (usage == null) {
          c1 = null;
        }
        closure_131_5 = c1;
        obj = {};
        let merged = Object.assign(closure_132_15());
        let paths = extraProperties;
        if (extraProperties == null) {
          paths = {};
        }
        const merged1 = Object.assign(paths);
        obj1 = closure_132_1(closure_132_2[23]);
        const merged2 = Object.assign(obj1.serializeTTITracker(appFirstVisibleTime));
        obj.load_id = closure_132_16;
        obj.screen_name = closure_131_0;
        obj.has_cached_data = closure_132_4.hasCache();
        obj.startup_cpu_usage_cumulative = closure_131_5;
        obj.theme = closure_132_6.theme;
        closure_131_6 = obj;
        obj2 = closure_132_1(closure_132_2[17]);
        obj2.mark("\u2757", "Track app_ui_viewed2");
        obj3 = closure_132_1(closure_132_2[19]);
        obj3.track(closure_132_10.APP_UI_VIEWED2, closure_131_6, { logEventProperties: true });
        obj4 = closure_132_0(closure_132_2[26]);
        const result = obj4.trackAndroidArtProfileSnapshot(closure_132_16, closure_132_15());
        closure_132_26 = closure_131_6;
        if (closure_132_9.alertStartupMetrics) {
          let obj5 = closure_132_1(closure_132_2[27]);
          obj5 = {
            importer() {
              return unknown(paths[29])(paths[28], paths.paths).then((result) => {
                closure_0 = result.default;
                return (arg0) => {
                  let str = closure_2_6.app_launch_scenario;
                  if (str == null) {
                    str = "-";
                  }
                  obj = { title: "App start times", body: null };
                  const combined =
                    "\nFirstContentfulPaint (TTI): " +
                    closure_2_6.time_first_contentful_paint +
                    "ms\n  \u2022 App start \u2192 JS bundle start: " +
                    closure_2_6.time_before_js_bundle_start +
                    "ms\n  \u2022 MainAppl. \u2192 MainActivity start: " +
                    closure_2_6.android_time_creation_to_create_main_activity +
                    "ms\n    \u2022 Start type: " +
                    closure_2_6.app_start_type +
                    "\n    \u2022 Launch scenario: " +
                    str +
                    "\n(legacy) Cached msg render: " +
                    closure_2_6.time_display_messages_with_cache_end +
                    "ms\n              ";
                  obj.body = combined.trimStart();
                  const merged = Object.assign(arg0);
                  return closure_3_13(closure_0, obj);
                };
              });
            },
          };
          obj5.openLazy(obj5);
        }
        const obj15 = closure_132_1(closure_132_2[25]);
        if (obj8.runningTTIAutomation()) {
          (function logToDevice(json) {
            obj = {};
            let merged = Object.assign(json);
            obj.logged_at = Date.now();
            obj.user_id = id.getId();
            const timestamp = Date.now();
            const item = closure_29(obj).forEach((item) => {
              obj = {};
              const merged = Object.assign(item);
              obj.type = "app_ui_viewed";
              obj.batch_id = batch_id;
              const json = JSON.stringify(obj);
              closure_2_1(paths[21]).logToDevice(json);
            });
            const batch_id = timestamp + 1;
            const arr = closure_29(obj);
            const item1 = closure_29(allExperimentAssignments.getAllExperimentAssignments()).forEach((item) => {
              obj = {};
              const merged = Object.assign(item);
              obj.batch_id = batch_id;
              obj.type = "experiments";
              const json = JSON.stringify(obj);
              closure_2_1(paths[21]).logToDevice(json);
            });
            json = JSON.stringify({ type: "finished" });
            const arr2 = closure_29(allExperimentAssignments.getAllExperimentAssignments());
            closure_1(paths[21]).logToDevice(json);
            const obj2 = closure_1(paths[21]);
            closure_1(paths[21]).trackTTILogged();
          })(closure_131_6);
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp57) {
      c6 = tmp;
      throw tmp57;
    }
  }
};
function batchKeys(arg0) {
  const keys = Object.keys(arg0);
  const items = [];
  let num = 0;
  if (0 < keys.length) {
    const sum = num + 10;
    const substr = keys.slice(num, sum);
    obj = {};
    const iter = substr[Symbol.iterator]();
    do {
      let nextResult = iter.next();
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
let closure_30 = async function _trackAppLaunchCompletedAsync(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp2;
          c5 = 0;
          closure_133_0 = undefined;
          ThemeStore = sharedProperties;
          closure_3 = closure_0;
          closure_2 = closure_1;
          let obj2 = NativeTTIManagerModuleDefault;
          c7 = 1;
          c8 = 1;
          const obj1 = { value: obj2.getAppFirstVisibleTimestamp(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        obj2 = { value, done: true };
        return obj2;
      } else {
        closure_133_0 = ThemeStore(closure_3, closure_2, value);
        obj = closure_132_1(closure_132_2[19]);
        obj.track(closure_132_10.APP_LAUNCH_COMPLETED, closure_133_0, { logEventProperties: true });
        c8 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp21) {
      c8 = tmp;
      throw tmp21;
    }
  }
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const ACCEPT_INVITE_MODAL_KEY = fn(7671).ACCEPT_INVITE_MODAL_KEY;
const StaticChannelRoutes = fn(1964).StaticChannelRoutes;
const jsx = fn(21).jsx;
const v1 = fn(1256);
const load_id = v1.v4();
const Manifest = ClientInfoUtils.getConstants().Manifest;
let c18 = false;
const set = new Set([
  "private_channel",
  "guild-forum",
  "guild-directory",
  "guild-text",
  "thread",
  "redesign-guilds",
  "redesign-messages",
]);
const set1 = new Set([
  "friends_list",
  "guild-voice",
  "redesign-guild-voice",
  "unknown-channel",
  "redesign-unknown-channel",
  "channel-list",
  "other",
]);
let c25 = null;
let c26 = null;
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/TTIAnalyticsUtils.tsx");

export { getDeviceMetadata };
export function currentLoadId() {
  return closure_16;
}
export const trackAppOpened = function trackAppOpened(launcher) {
  obj = AppStartPerformanceDefault;
  obj.mark("\u{1F3C3}", "Track app_opened");
  obj = { category: "lifecycle", message: "App opened", data: { openFrom: launcher } };
  SentryUtilsDefault.addBreadcrumb(obj);
  obj = {};
  const merged = Object.assign(getDeviceMetadata());
  obj.opened_from = launcher;
  obj.load_id = load_id;
  obj.theme = ThemeStore.theme;
  AnalyticsUtilsDefault.track(AnalyticEvents.APP_OPENED, obj, { logEventProperties: true });
};
export const trackAppUIViewed = function trackAppUIViewed() {
  let tmp = ModalScreen;
  if (ModalScreen === undefined) {
    tmp = getRedesignScreenName();
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (hasCacheResult === undefined) {
    hasCacheResult = CacheStore.hasCache();
  }
  const AppStartInfo = AppStartInfo2.AppStartInfo;
  if (!AppStartInfo.getAppUIViewed()) {
    (function trackAppUIViewedAsync() {
      const self = this;
      const apply = closure_1_23.apply;
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
export const trackAppLaunchCompleted = function trackAppLaunchCompleted() {
  let str = unknown;
  if (unknown === undefined) {
    str = getRedesignScreenName();
  }
  if (hasCacheResult === undefined) {
    hasCacheResult = CacheStore.hasCache();
  }
  if (!c18) {
    AppStartPerformanceDefault.mark("\u{1F3C3}", "Track app_launch");
    c18 = true;
    if (str == null) {
      str = "unknown";
    }
    (function trackAppLaunchCompletedAsync() {
      const self = this;
      const apply = closure_1_30.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(str, hasCacheResult);
  }
};
