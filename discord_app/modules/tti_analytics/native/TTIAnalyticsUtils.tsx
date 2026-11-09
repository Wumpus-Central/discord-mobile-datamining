// discord_app/modules/tti_analytics/native/TTIAnalyticsUtils.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import AppStartPerformanceDefault from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import NativeTTIManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeTTIManagerModule.tsx";
import getMediaPerformanceClassDefault from "../../device/getMediaPerformanceClass.android.tsx";
import AppStartInfo2 from "AppStartInfo.android.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
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
function consumeAppOpenBadgeState() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_26 = async function _consumeAppOpenBadgeState() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      if (0 === c1) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_0 = tmp3;
          c3 = 1;
          c1 = 2;
          c4 = 1;
          const obj5 = { value: NativeTTIManagerModuleDefault.consumeAppOpenBadgeState(), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        (function logBadgeStateFailure(arg0) {
          if (!c21) {
            c21 = true;
            logger.warn("Failed to read app-open badge state", arg0);
          }
        })(closure_2);
        c4 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        c3 = 0;
        c4 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp14) {
      closure_2 = tmp14;
      if (tmp4 === c3) {
        c4 = tmp2;
        throw tmp14;
      } else {
        c1 = tmp;
      }
    }
  }
};
function sharedProperties(screen_name, has_cached_data, arg2) {
  obj = { load_id, duration_ms_since_app_opened: Date.now() - arg2, screen_name, has_cached_data, manifest: null };
  let tmp = null;
  if (Manifest.length > 0) {
    tmp = Manifest;
  }
  obj.manifest = tmp;
  return obj;
}
let closure_28 = async function _trackAppUIViewedAsync(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
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
          const obj4 = { value: require("NativeTTIManagerModule").getAppFirstVisibleTimestamp(), done: false };
          return obj4;
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
        closure_132_1(closure_132_2[19]).reportFullyDrawn();
        const obj5 = closure_132_1(closure_132_2[19]);
        closure_132_1(closure_132_2[20]).mark("\u2757", "Track app_ui_viewed");
        const obj6 = closure_132_1(closure_132_2[20]);
        closure_132_1(closure_132_2[20]).addDetail("TTI", closure_131_5);
        const obj7 = closure_132_1(closure_132_2[20]);
        closure_132_1(closure_132_2[20]).markAt("\u{1F3C3}", "app_opened", closure_131_4);
        const obj8 = closure_132_1(closure_132_2[20]);
        closure_132_0(closure_132_2[24]).ttiRecorded(closure_131_5);
        let _setTimeout = setTimeout;
        let timerId = setTimeout(() => {
          let str = closure_1_0;
          if (closure_1_0 == null) {
            str = "unknownn";
          }
          !(function logLegacyAppUiViewed() {
            const self = this;
            const apply = closure_1_29.apply;
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
              closure_1_32();
              c30 = null;
            }, 15 * closure_1_1(1089).Millis.SECOND);
            closure_1_1(9).setTTICallback(() => {
              const tmp = closure_1_24();
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
                clearTimeout(c30);
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => {
                  closure_1_32();
                  c30 = null;
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
let closure_29 = async function _logLegacyAppUiViewed(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
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
          const obj4 = { value: NativeTTIManagerModuleDefault.getJSBundleTimestamps(), done: false };
          return obj4;
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
        closure_134_1(closure_134_2[20]).markAt("\u{1F3C3}", "JS Bundle Loaded", closure_133_4);
        const obj5 = closure_134_1(closure_134_2[20]);
        closure_134_1(closure_134_2[20]).mark("\u{1F3C3}", "app_ui_viewed logged");
        const obj6 = closure_134_1(closure_134_2[20]);
        closure_134_1(closure_134_2[20]).addDetail("Since Bundle Parsed", +closure_133_1 - closure_133_5);
        const _Date = Date;
        const obj7 = closure_134_1(closure_134_2[20]);
        closure_134_1(closure_134_2[20]).endTime = Date.now() + 20000;
        const tmp30 = closure_134_1(closure_134_2[20]);
        const obj9 = {};
        const merged = Object.assign(closure_133_2);
        const merged1 = Object.assign(closure_134_16());
        obj9.duration_ms_since_required_js_bundle_loaded = closure_133_1 - closure_133_4;
        obj9.duration_ms_since_required_js_bundle_parsed = closure_133_1 - closure_133_5;
        obj9.theme = closure_134_7.theme;
        const merged2 = Object.assign(closure_133_0);
        closure_134_1(closure_134_2[22]).track(closure_134_11.APP_UI_VIEWED, obj9, { logEventProperties: true });
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
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_33 = async function _trackAppUIViewed() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
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
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          let appCreatedTime;
          let appFirstVisibleTime;
          let extraProperties;
          closure_131_7 = undefined;
          closure_131_8 = undefined;
          closure_131_9 = undefined;
          const tmp94 = getRedesignScreenName();
          let unknown = tmp94;
          if (tmp94 == null) {
            unknown = "unknown";
          }
          closure_131_0 = unknown;
          const AppStartInfo = AppStartInfo2.AppStartInfo;
          items = [AppStartInfo.getAppStartInfo(), consumeAppOpenBadgeState()];
          c5 = 1;
          c6 = 1;
          const obj12 = { value: Promise.all(items), done: false };
          return obj12;
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_131_1 = value;
          closure_131_2 = closure_132_3(closure_131_1, 2);
          closure_131_3 = closure_131_2[0];
          appCreatedTime = closure_131_3.appCreatedTime;
          appFirstVisibleTime = closure_131_3.appFirstVisibleTime;
          extraProperties = closure_131_3.extraProperties;
          closure_131_7 = closure_131_2[1];
          const allNativeTimestamps = closure_132_1(closure_132_2[19]).getAllNativeTimestamps();
          c5 = 2;
          c6 = 1;
          const obj14 = {
            value: allNativeTimestamps.then((nativeLogs) => {
              c1(paths[20]).logGroups[0].nativeLogs = nativeLogs;
              c1(paths[25]).processNativeLogs(nativeLogs, closure_1_4);
            }),
            done: false,
          };
          return obj14;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          const cumulativeCPUUsage = closure_132_1(closure_132_2[27]).getCumulativeCPUUsage();
          let usage;
          if (cumulativeCPUUsage != null) {
            usage = cumulativeCPUUsage.usage;
          }
          c1 = usage;
          if (usage == null) {
            c1 = null;
          }
          closure_131_8 = c1;
          const obj16 = {};
          let merged = Object.assign(closure_132_16());
          let paths = extraProperties;
          if (extraProperties == null) {
            paths = {};
          }
          const merged1 = Object.assign(paths);
          const merged2 = Object.assign(closure_131_7);
          const obj19 = closure_132_1(closure_132_2[27]);
          const merged3 = Object.assign(closure_132_1(closure_132_2[25]).serializeTTITracker(appFirstVisibleTime));
          obj16.load_id = closure_132_17;
          obj16.screen_name = closure_131_0;
          obj16.has_cached_data = closure_132_5.hasCache();
          obj16.startup_cpu_usage_cumulative = closure_131_8;
          obj16.theme = closure_132_7.theme;
          const obj3 = closure_132_1(closure_132_2[25]);
          let result = null;
          if (obj4.isIOS()) {
            result = closure_132_0(closure_132_2[29]).isIOSAnchoredChatScrollerEnabled();
            const obj5 = closure_132_0(closure_132_2[29]);
          }
          obj16.ios_using_anchored_scroller = result;
          closure_131_9 = obj16;
          obj4 = closure_132_0(closure_132_2[28]);
          closure_132_1(closure_132_2[20]).mark("\u2757", "Track app_ui_viewed2");
          const obj6 = closure_132_1(closure_132_2[20]);
          closure_132_1(closure_132_2[22]).track(closure_132_11.APP_UI_VIEWED2, closure_131_9, {
            logEventProperties: true,
          });
          const obj7 = closure_132_1(closure_132_2[22]);
          const result1 = closure_132_0(closure_132_2[30]).trackAndroidArtProfileSnapshot(
            closure_132_17,
            closure_132_16(),
          );
          closure_132_31 = closure_131_9;
          if (closure_132_10.alertStartupMetrics) {
            const obj17 = {
              importer() {
                return unknown(paths[33])(paths[32], paths.paths).then((result) => {
                  closure_0 = result.default;
                  return (arg0) => {
                    let str = closure_2_9.app_launch_scenario;
                    if (str == null) {
                      str = "-";
                    }
                    obj = { title: "App start times", body: null };
                    const combined =
                      "\nFirstContentfulPaint (TTI): " +
                      closure_2_9.time_first_contentful_paint +
                      "ms\n  \u2022 App start \u2192 JS bundle start: " +
                      closure_2_9.time_before_js_bundle_start +
                      "ms\n  \u2022 MainAppl. \u2192 MainActivity start: " +
                      closure_2_9.android_time_creation_to_create_main_activity +
                      "ms\n    \u2022 Start type: " +
                      closure_2_9.app_start_type +
                      "\n    \u2022 Launch scenario: " +
                      str +
                      "\n(legacy) Cached msg render: " +
                      closure_2_9.time_display_messages_with_cache_end +
                      "ms\n              ";
                    obj.body = combined.trimStart();
                    const merged = Object.assign(arg0);
                    return closure_3_14(closure_0, obj);
                  };
                });
              },
              isDismissable: false,
            };
            closure_132_1(closure_132_2[31]).openLazy(obj17);
            const obj9 = closure_132_1(closure_132_2[31]);
          }
          const obj8 = closure_132_0(closure_132_2[30]);
          c5 = 3;
          c6 = 1;
          const obj18 = { value: closure_132_1(closure_132_2[19]).logToDeviceEnabled(), done: false };
          return obj18;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        if (value) {
          (function logToDevice(json) {
            obj = {};
            let merged = Object.assign(json);
            obj.logged_at = Date.now();
            obj.user_id = id.getId();
            const timestamp = Date.now();
            const item = closure_34(obj).forEach((item) => {
              obj = {};
              const merged = Object.assign(item);
              obj.type = "app_ui_viewed";
              obj.batch_id = batch_id;
              const json = JSON.stringify(obj);
              closure_2_1(paths[19]).logToDevice(json);
            });
            const batch_id = timestamp + 1;
            const arr = closure_34(obj);
            const item1 = closure_34(allExperimentAssignments.getAllExperimentAssignments()).forEach((item) => {
              obj = {};
              const merged = Object.assign(item);
              obj.batch_id = batch_id;
              obj.type = "experiments";
              const json = JSON.stringify(obj);
              closure_2_1(paths[19]).logToDevice(json);
            });
            json = JSON.stringify({ type: "finished" });
            const arr2 = closure_34(allExperimentAssignments.getAllExperimentAssignments());
            closure_1(paths[19]).logToDevice(json);
            const obj2 = closure_1(paths[19]);
            closure_1(paths[19]).trackTTILogged();
          })(closure_131_9);
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp72) {
      c6 = tmp;
      throw tmp72;
    }
  }
};
function batchKeys(arg0) {
  const keys = Object.keys(arg0);
  items = [];
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
let closure_35 = async function _trackAppLaunchCompletedAsync(arg0) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp2;
          c5 = 0;
          closure_133_0 = undefined;
          ExperimentStore = sharedProperties;
          closure_3 = closure_0;
          closure_2 = closure_1;
          c7 = 1;
          c8 = 1;
          const obj5 = { value: NativeTTIManagerModuleDefault.getAppFirstVisibleTimestamp(), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_133_0 = ExperimentStore(closure_3, closure_2, value);
        closure_132_1(closure_132_2[22]).track(closure_132_11.APP_LAUNCH_COMPLETED, closure_133_0, {
          logEventProperties: true,
        });
        c8 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp21) {
      c8 = tmp;
      throw tmp21;
    }
  }
};
const AnalyticEvents = fn(1072).AnalyticEvents;
const ACCEPT_INVITE_MODAL_KEY = fn(7889).ACCEPT_INVITE_MODAL_KEY;
const StaticChannelRoutes = fn(4996).StaticChannelRoutes;
const jsx = fn(21).jsx;
const v1 = fn(1266);
const load_id = v1.v4();
const Manifest = ClientInfoUtils.getConstants().Manifest;
let c19 = false;
let closure_20 = new LoggerDefault("TTIAnalytics");
let c21 = false;
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
let c30 = null;
let c31 = null;
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/TTIAnalyticsUtils.tsx");

export { getDeviceMetadata };
export function currentLoadId() {
  return closure_17;
}
export function trackAppOpened(launcher) {
  AppStartPerformanceDefault.mark("\u{1F3C3}", "Track app_opened");
  SentryUtilsDefault.addBreadcrumb({ category: "lifecycle", message: "App opened", data: { openFrom: launcher } });
  const obj3 = { category: "lifecycle", message: "App opened", data: { openFrom: launcher } };
  const obj5 = {};
  const merged = Object.assign(getDeviceMetadata());
  obj5.opened_from = launcher;
  obj5.load_id = load_id;
  obj5.theme = ThemeStore.theme;
  AnalyticsUtilsDefault.track(AnalyticEvents.APP_OPENED, obj5, { logEventProperties: true });
}
export function trackAppUIViewed() {
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
      const apply = closure_1_28.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(tmp, obj, hasCacheResult);
  }
}
export function getLastTrackedAppUiViewed2Properties() {
  return c31;
}
export function trackAppLaunchCompleted() {
  let str = unknown;
  if (unknown === undefined) {
    str = getRedesignScreenName();
  }
  if (hasCacheResult === undefined) {
    hasCacheResult = CacheStore.hasCache();
  }
  if (!c19) {
    AppStartPerformanceDefault.mark("\u{1F3C3}", "Track app_launch");
    c19 = true;
    if (str == null) {
      str = "unknown";
    }
    (function trackAppLaunchCompletedAsync() {
      const self = this;
      const apply = closure_1_35.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(str, hasCacheResult);
  }
}
