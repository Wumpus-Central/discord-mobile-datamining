// === Module 17228: NativeAppStartup ===

// Module 17228 (NativeAppStartup)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import Storage4 from "Storage" /* 510 */;
import TokenManagerAll from "TokenManager" /* 1099 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2003 */;
import timeRequireDefault from "timeRequire" /* 7492 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13637 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import AppStateStore from "AppStateStore" /* 1895 */;

require = fn;
function linkFromAppsFlyer(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
    const searchParams = uRL.searchParams;
    return "true" === searchParams.get("fromAppsFlyer");
  } catch (tmp8) {
    obj = { url: tmp, error: tmp8 };
    closure_20.error("Failed to parse URL in linkFromAppsFlyer", obj);
    return false;
  }
}
function getInitialURLs() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _getInitialURLs() {
  closure_0 = tmp2;
  closure_128_0 = [];
  DeepLinkManager = DeepLinkManager.DeepLinkManager;
  await DeepLinkManager.getInitialURL();
  if (1 === tmp5) {
    if (arg0 === 1) {
      c3 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 3;
      return { value, done: true };
    } else {
      closure_128_1 = value;
      if (null != closure_128_1) {
        if (null != closure_128_1.url) {
          if (closure_129_22(closure_128_1.url)) {
            let push = closure_129_0(closure_129_3[14]).DeeplinkSource;
            if (closure_128_1.isDeferred) {
              let AppsFlyer = push.AppsFlyerDeferred;
            } else {
              AppsFlyer = push.AppsFlyer;
            }
            closure_128_2 = AppsFlyer;
            push = closure_128_0.push;
            push({ url: closure_128_1.url, source: closure_128_2 });
          } else {
            closure_128_0.push({ url: closure_128_1.url, source: closure_129_0(closure_129_3[14]).DeeplinkSource.OS });
            c3 = 3;
            { url: closure_128_1.url, source: closure_129_0(closure_129_3[14]).DeeplinkSource.OS };
          }
        }
      }
      c2 = 2;
      c3 = 1;
      return { value: closure_129_8.getInitialURL(), done: false };
    }
  } else if (arg0 === 1) {
    c3 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_3 = value;
    if (null != closure_128_3) {
      closure_128_0.push({ url: closure_128_3, source: closure_129_0(closure_129_3[14]).DeeplinkSource.ReactNativeLinking });
      { url: closure_128_3, source: closure_129_0(closure_129_3[14]).DeeplinkSource.ReactNativeLinking };
    }
  }
  return value;
};
function sharedInit() {
  function handleNotification(arg0) {
    if (c0) {
      timeRequireDefault("receiveNotification", () => _true(handleNotification[31])).default(arg0, false);
      TTITrackerDefault.extraProperties.tapped_notification = true;
    } else {
      closure_1.push(arg0);
    }
  }
  function handleLocalNotification(getData) {
    if (c0) {
      const result = timeRequireDefault("LocalPushNotificationActionCreators", () => _true(handleNotification[32])).receiveLocalNotification(getData);
    } else {
      closure_2.push(getData);
    }
  }
  obj = require("BundleUpdater");
  let result = obj.setupOTAAssetFallback();
  const Emitter = require("initialize").Emitter;
  const result1 = Emitter.injectBatchEmitChanges(require("ReactBatchUpdates").batchUpdates);
  const TelemetryRingLifecycle = require("TelemetryRingLifecycle").TelemetryRingLifecycle;
  TelemetryRingLifecycle.initialize();
  const result2 = require("websocketTelemetryHook").installWebsocketTelemetryHook((arg0) => {
    closure_1(handleNotification[22]).append(constants.WEBSOCKET_MESSAGE_RECEIVED, arg0);
  });
  const listener = closure_8.addEventListener("url", (event) => {
    const url = event.url;
    let isAndroidResult = url(handleNotification[23]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = url === url;
    }
    if (!isAndroidResult) {
      promise.then(() => {
        closure_2_20.log("Handling URL: " + url);
        obj = closure_1(handleNotification[24]);
        obj.mark("\u2757", "Handle URL " + url);
        obj = { url, source: null };
        const DeeplinkSource = url(handleNotification[14]).DeeplinkSource;
        obj.source = linkFromAppsFlyer(url) ? DeeplinkSource.AppsFlyer : DeeplinkSource.OS;
        closure_1(handleNotification[15])("handleURL", () => closure_1_0(paths[16])).default(obj, false);
        const tmp5 = linkFromAppsFlyer(url);
      });
    }
    obj = url(handleNotification[23]);
  });
  closure_9.ignoreLogs(["Non-serializable values were found in the navigation state", "Overriding previous layout animation with new one before the first began", "Check the render method of `SceneView`", "Open debugger to view warnings."]);
  const obj2 = require("websocketTelemetryHook");
  const tmp4 = _require;
  const initialBundleDownloaded = require("BundleUpdater").getInitialBundleDownloaded();
  initialBundleDownloaded.then((versionRequired) => {
    if (tmp) {
      const _HermesInternal = HermesInternal;
      closure_1_20.verbose("Get initial downloaded bundle " + versionRequired.versionRequired);
      closure_1(handleNotification[25]).prepareUpdate(versionRequired.versionRequired);
      obj = closure_1(handleNotification[25]);
    }
    tmp = null != versionRequired && null != versionRequired.versionRequired;
  });
  const obj3 = require("BundleUpdater");
  const listener1 = require("BundleUpdater").addEventListener("downloaded", (event) => {
    const versionRequired = event.versionRequired;
    closure_1_20.verbose("Bundle Event: bundle downloaded for " + versionRequired);
    closure_1(handleNotification[25]).prepareUpdate(versionRequired);
  });
  const obj4 = require("BundleUpdater");
  const initialOtaUpdateChecked = require("BundleUpdater").getInitialOtaUpdateChecked();
  initialOtaUpdateChecked.then((metrics) => {
    metrics = metrics.metrics;
    closure_1_20.verbose("Initial OTA update check metrics", metrics);
    for (const item10010 of metrics) {
      obj = closure_1(handleNotification[17]);
      let emitOtaMetricResult = obj.emitOtaMetric(item10010);
      continue;
    }
  });
  const obj5 = require("BundleUpdater");
  const listener2 = require("BundleUpdater").addEventListener("otaUpdateChecked", (event) => {
    const metrics = event.metrics;
    closure_1_20.verbose("OTA update check metrics", metrics);
    for (const item10010 of metrics) {
      obj = closure_1(handleNotification[17]);
      let emitOtaMetricResult = obj.emitOtaMetric(item10010);
      continue;
    }
  });
  const obj6 = require("BundleUpdater");
  new closure_7(require("NativeAppLifecycleModule")).addListener("appWillEnterForeground", () => {
    closure_1(handleNotification[27]).dispatch({ type: "APP_STATE_UPDATE_WILL_BECOME_ACTIVE" });
  });
  if (AppStateStore.getState() !== currentState.currentState) {
    tmp(tmp2[15])("handleAppStateChange", () => _true(handleNotification[28])).default(currentState.currentState);
  } else {
    if (!tmp4Result.isAndroid()) {
      if (!c21) {
        if (currentState.currentState === constants.ACTIVE) {
          c21 = true;
          tmp(tmp2[15])("trackAppOpened", () => _true(handleNotification[29])).trackAppOpened("launcher");
        }
      }
    }
    tmp4Result = tmp4(tmp2[23]);
  }
  const listener3 = currentState.addEventListener("change", (event) => {
    const appStateChangeStart = closure_1(handleNotification[12]).imports.appStateChangeStart;
    appStateChangeStart.record();
    obj = closure_1(handleNotification[24]);
    obj.resumeTracing();
    obj = { message: "App state changed to " + event, category: "appState" };
    closure_1(handleNotification[30]).addBreadcrumb(obj);
    closure_1(handleNotification[15])("handleAppStateChange", () => _true(handleNotification[28])).default(event);
    const appStateChangeEnd = closure_1(handleNotification[12]).imports.appStateChangeEnd;
    appStateChangeEnd.record();
  });
  if (null != closure_10.Hosts) {
    const Hosts = closure_10.Hosts;
    const _location = location;
    const _window = window;
    let _HermesInternal = HermesInternal;
    const _location2 = location;
    const _window2 = window;
    const _HermesInternal2 = HermesInternal;
    const combined = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
    Hosts.setHosts(combined, "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST);
  }
  _require = false;
  importDefault = [];
  closure_2 = [];
  let tmpResult = tmp(tmp2[33]);
  const result3 = tmpResult.addNotificationEventListener("notification", (arg0) => {
    const state = AppStateStore.getState();
    closure_20.log("Push notification received, the app state is " + state);
    if (state !== constants.ACTIVE) {
      if (c0) {
        timeRequireDefault("receiveNotification", () => _true(handleNotification[31])).default(arg0, false);
        TTITrackerDefault.extraProperties.tapped_notification = true;
      } else {
        closure_1.push(arg0);
      }
    }
  });
  tmpResult = tmp(tmp2[33]);
  const result4 = tmpResult.addNotificationEventListener("localNotification", handleLocalNotification);
  obj = {
    onStorageInitialize() {
      c0 = true;
      const item = closure_1.forEach(handleNotification);
      const item1 = closure_2.forEach(handleLocalNotification);
      closure_1.length = 0;
      closure_2.length = 0;
    }
  };
  return obj;
}
let closure_27 = async function _trackFirstLaunched() {
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
          closure_2 = tmp2;
          const Storage2 = require("Storage").Storage;
          if (Storage2.get(constants.APP_FIRST_LAUNCHED, true)) {
            const tmp18 = AnalyticsUtilsDefault;
            closure_3 = tmp18;
            const track = tmp18.track;
            const APP_FIRST_LAUNCHED = constants.APP_FIRST_LAUNCHED;
            const obj1 = {};
            let obj2 = require("PlatformUtils");
            if (obj2.isAndroid()) {
              let IOS = constants.ANDROID;
            } else {
              IOS = constants.IOS;
            }
            obj1.platform = IOS;
            InstallReferrer = InstallReferrer.InstallReferrer;
            value = undefined;
            if (InstallReferrer != null) {
              value = InstallReferrer.get();
            }
            c5 = 1;
            c6 = 1;
            obj2 = { value, done: false };
            return obj2;
          } else {
            c6 = 3;
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        obj1.referrer = value;
        track(APP_FIRST_LAUNCHED, obj1);
        const Storage = closure_130_0(closure_130_3[34]).Storage;
        const result = Storage.set(closure_130_15.APP_FIRST_LAUNCHED, false);
      }
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp26) {
      c6 = tmp;
      throw tmp26;
    }
  }
};
function loadStorage() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_29 = async function _loadStorage() {
  closure_1 = tmp3;
  const loadStorage2 = TTITrackerDefault.loadStorage;
  loadStorage2.recordStart();
  let Storage = require("Storage").Storage;
  await Storage.refresh([], closure_2_18);
  if (1 === tmp7) {
    c3 = 0;
    closure_128_1 = closure_2;
    closure_129_20.error("Unable to load Storage", closure_128_1);
    c5 = 3;
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_0 = value;
    loadStorage = closure_129_1(closure_129_3[12]).loadStorage;
    loadStorage.recordEnd();
    const parseStorage = closure_129_1(closure_129_3[12]).parseStorage;
    parseStorage.measureAsync(async () => {
      const Storage = closure_0(c3[34]).Storage;
      return Storage.parse(closure_1_0);
    });
    c3 = 0;
  }
  return value;
};
function loadKvStorage() {
  try {
    DatabaseManagerDefault.initialize();
    return Promise.resolve();
  } catch (tmp4) {
    closure_20.warn("DatabaseManager.initialize errored.", tmp4);
    SentryUtilsDefault.captureException(tmp4);
  }
}
function initializeIntl() {
  const self = this;
  const apply = closure_36.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_36 = async function _initializeIntl(arg0) {
  let log = arg0;
  c3 = 0;
  c4 = 0;
  let iter = (async (arg0) => {
    await closure_130_0(closure_130_3[39]).preloadAllIntlMessageFiles();
    await closure_130_0(closure_130_3[40]).waitForAllDefaultIntlMessagesLoaded();
    if (log2) {
      closure_130_1(closure_130_3[24]).markAndLog(closure_130_20, "\u{1F30E}", "i18n loaded");
      closure_130_1(closure_130_3[24]);
    }
    await closure_130_0(closure_130_3[42])(closure_130_3[41], closure_130_3.paths);
    closure_129_1 = value.default;
    await closure_129_1();
    closure_130_11(() => closure_1_1());
    await "HermesInternal";
    closure_2 = tmp2;
    log2 = log.log;
    return "PX_16";
  })();
  iter.next();
  return iter;
};
let closure_38 = async function _init(_payload) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (_payload === 1) {
      throw value;
    } else if (_payload === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      let num2 = 0;
      if (0 === c2) {
        if (_payload === 1) {
          c3 = 3;
          throw value;
        } else if (_payload === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          let onStorageInitialize;
          closure_128_2 = undefined;
          closure_128_3 = undefined;
          closure_128_4 = undefined;
          closure_128_5 = undefined;
          closure_128_6 = undefined;
          closure_128_7 = undefined;
          closure_128_8 = undefined;
          closure_128_9 = undefined;
          let channelId;
          closure_128_11 = undefined;
          let promise2;
          closure_128_13 = undefined;
          closure_128_14 = undefined;
          closure_128_15 = undefined;
          closure_128_16 = undefined;
          closure_128_17 = undefined;
          closure_128_18 = undefined;
          closure_128_19 = undefined;
          if (Full !== Full.Full) {
            closure_128_0 = tmp170;
            Full = tmp234.Full;
            onStorageInitialize = nextPromise;
            if (Full !== tmp234.HeadlessRan) {
              onStorageInitialize = sharedInit().onStorageInitialize;
            }
            const obj14 = require("PlatformUtils");
            let _Promise6 = require("DeviceOrientation");
            if (isAndroidResult) {
              _Promise6.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
            } else {
              let result = _Promise6.lockOrientationForiOS();
            }
            require("TTITracker").didBackgroundApp = currentState.currentState === constants.BACKGROUND;
            const loadStorageStart = require("TTITracker").imports.loadStorageStart;
            loadStorageStart.record();
            _Promise6 = Promise;
            const items = [getInitialURLs(), , , , ];
            isAndroidResult = require("PlatformUtils").isAndroid();
            const initialNotification = require("PushNotification").getInitialNotification();
            items[1] = initialNotification.catch(() => null);
            items[2] = loadStorage();
            items[3] = loadKvStorage();
            num2 = require("asyncRequireImpl");
            const obj15 = require("PushNotification");
            nextPromise = num2(paths[44], paths.paths).then((result) => result.default());
            items[4] = nextPromise;
            Promise.all(items);
            c2 = 1;
            c3 = 1;
            const num2Result = num2(paths[44], paths.paths);
          } else {
            require("SentryUtils").addBreadcrumb({ message: "Init called when already initialized" });
            c3 = 3;
            const obj13 = require("SentryUtils");
          }
        }
      } else {
        if (1 === tmp6) {
          if (_payload === 1) {
            c3 = 3;
            throw value;
          } else if (_payload === 2) {
            c3 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_128_2 = value;
            closure_128_3 = closure_129_4(closure_128_2, 2);
            closure_128_4 = closure_128_3[0];
            closure_128_5 = closure_128_3[1];
            const loadStorageEnd = closure_129_1(closure_129_3[12]).imports.loadStorageEnd;
            loadStorageEnd.record();
            if (obj18.isAndroid()) {
              if (closure_129_0(closure_129_3[45]).isTTITest) {
                closure_128_6 = closure_129_0(closure_129_3[46]).default;
                c2 = 2;
                c3 = 1;
                let obj2 = { value: closure_128_6.yieldConfig(), done: false };
                return obj2;
              }
            }
            obj18 = closure_129_0(closure_129_3[23]);
          }
        } else if (2 === tmp6) {
          if (_payload === 1) {
            c3 = 3;
            throw value;
          } else if (_payload === 2) {
            c3 = 3;
            let obj3 = { value, done: true };
            return obj3;
          }
        } else if (_payload === 1) {
          c3 = 3;
          throw value;
        } else if (_payload !== 2) {
          closure_128_14 = value;
          closure_128_15 = closure_129_4(closure_128_14, 5);
          const first = closure_128_15[0];
          closure_128_16 = closure_128_15[1].default;
          closure_128_17 = closure_128_15[2].default;
          closure_128_18 = closure_128_15[3].default;
          closure_128_19 = closure_128_15[4];
          const result1 = closure_128_16.registerNotificationCategories();
          closure_128_16.registerListener();
          const server = closure_128_17.loadServer();
          closure_128_18.addChangeListener(() => {
            const result = closure_1(paths[33]).setApplicationIconBadgeNumber(totalMentionCount.getTotalMentionCount());
          });
          if (!closure_128_0) {
            closure_128_19.init();
          }
          closure_129_0(closure_129_3[66]);
          obj = closure_129_0(closure_129_3[67]);
          const sessionHeartbeatScheduler = obj.initSessionHeartbeatScheduler();
        }
        if (closure_128_0) {
          let resolved = Promise.resolve();
        } else {
          resolved = closure_129_35({ log: true });
        }
        closure_128_7 = resolved;
        obj3 = closure_129_1(closure_129_3[24]);
        obj3.markAndLog(closure_129_20, "\u{1F3C3}", "The initial promise has resolved");
        let tmp34 = null != closure_128_4;
        if (tmp34) {
          tmp34 = closure_128_4.length > num2;
        }
        if (tmp34) {
          closure_129_20.log("initialURLs", closure_128_4);
        }
        if (null != closure_128_5) {
          closure_129_20.log("initialNotification", closure_128_5);
        }
        const Storage = closure_129_0(closure_129_3[34]).Storage;
        if (null == Storage.get(closure_129_16)) {
          const Storage2 = closure_129_0(closure_129_3[34]).Storage;
          const _Date = Date;
          const result2 = Storage2.set(closure_129_16, Date.now());
        }
        (function trackFirstLaunched() {
          const self = this;
          const apply = closure_1_27.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
        if (!closure_128_0) {
          closure_129_40();
          if (onStorageInitialize != null) {
            onStorageInitialize();
          }
        }
        closure_129_1(closure_129_3[15])("DispatcherBridge", () => {
          closure_1_0(paths[47]);
        });
        if (closure_128_0) {
          let obj5 = closure_129_1(closure_129_3[24]);
          obj5.markAndLog(closure_129_20, "\u{1F3C3}", "Flux already initialized.");
        } else {
          let obj4 = closure_129_1(closure_129_3[24]);
          obj4.time("\u{1F3C3}", "Flux.initialize()", () => {
            closure_1_1(paths[18]).initialize();
            closure_1_20.verbose("Flux has initialized");
          });
        }
        closure_129_1(closure_129_3[48])();
        const result3 = closure_129_0(closure_129_3[49]).setupLibdiscoreTimersMonitor();
        const item = closure_128_4.forEach((url) => {
          url = url.url;
          closure_1_1(paths[15])("handleURL", () => closure_1_0(paths[16])).default(url, true);
        });
        closure_128_8 = false;
        if (null != closure_128_5) {
          closure_128_9 = closure_129_1(closure_129_3[15])("receiveNotification", () => closure_1_0(paths[31])).default;
          closure_129_1(closure_129_3[12]).extraProperties.tapped_notification = true;
          closure_128_8 = closure_128_9(closure_128_5, true);
        }
        if (!closure_128_8) {
          channelId = closure_129_12.getChannelId();
          if (null != channelId) {
            obj4 = { channelId, isPreload: true, skipLocalFetch: true, fetchKey: closure_129_0(closure_129_3[51]).INITIAL_MESSAGE_FETCH_KEY };
            const messages = closure_129_1(closure_129_3[50]).fetchMessages(obj4);
            const obj8 = closure_129_1(closure_129_3[50]);
          }
        }
        const loadMiniCacheStart = closure_129_1(closure_129_3[12]).imports.loadMiniCacheStart;
        loadMiniCacheStart.record();
        let items2 = globalThis;
        promise = new Promise((arg0) => {
          closure_0 = arg0;
          closure_0(paths[42])(paths[52], paths.paths).then((result) => result.default.loadCacheAsync(closure_2_4(closure_2_0(paths[53]).computeInitialNavigationState(), 1)[0], async () => {
            closure_0(14438).updateSaturation(closure_0(4552).default.saturation);
            obj = closure_0(14438);
            closure_0(16958).updateVisualRefresh(true);
            const obj2 = closure_0(16958);
            closure_0(16959).updateTheme(closure_0(1183).default.theme);
            closure_1_0();
          }));
        });
        closure_128_11 = promise;
        promise2 = null;
        const obj7 = closure_129_0(closure_129_3[49]);
        if (null != obj10.getToken()) {
          promise2 = items2.Promise.resolve();
          const _Promise3 = items2.Promise;
        } else {
          closure_128_13 = closure_129_0(closure_129_3[60]);
          const result4 = closure_128_13.beginLoadedExperimentsTimeout();
          promise2 = closure_128_13.getPromise();
        }
        const items1 = [closure_128_11, promise2];
        const _Promise4 = items2.Promise;
        obj10 = closure_129_2(closure_129_3[59]);
        items2.Promise.all(items1).then(() => {
          closure_1_32.resolve();
        });
        items2 = [closure_129_0(closure_129_3[42])(closure_129_3[61], closure_129_3.paths), closure_129_0(closure_129_3[42])(closure_129_3[62], closure_129_3.paths), closure_129_0(closure_129_3[42])(closure_129_3[63], closure_129_3.paths), closure_129_0(closure_129_3[42])(closure_129_3[64], closure_129_3.paths), closure_129_0(closure_129_3[42])(closure_129_3[65], closure_129_3.paths), closure_128_7];
        items2.Promise.all(items2);
        c2 = 3;
        c3 = 1;
        const _Promise5 = items2.Promise;
        const allResult = items2.Promise.all(items1);
      }
      c3 = 3;
      obj5 = { value, done: true };
      return obj5;
    } catch (tmp198) {
      c3 = tmp;
      throw tmp198;
    }
  }
};
let closure_39 = async function _initHeadlessTask() {
  if (c3 === 2) {
    c3 = 3;
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp2;
          let onStorageInitialize;
          closure_128_1 = undefined;
          if (HeadlessRan === __initData12.None) {
            HeadlessRan = __initData12.HeadlessRan;
            onStorageInitialize = sharedInit().onStorageInitialize;
            const items = [loadStorage(), loadKvStorage(), initializeIntl({ log: false })];
            c2 = 1;
            c3 = 1;
            const obj1 = { value: Promise.all(items), done: false };
            return obj1;
          } else {
            c3 = 3;
          }
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_129_40();
          onStorageInitialize();
          closure_129_0(closure_129_3[68]);
          closure_129_0(closure_129_3[47]);
          closure_129_1(closure_129_3[18]).initialize();
          const obj8 = closure_129_1(closure_129_3[18]);
          closure_129_0(closure_129_3[42])(closure_129_3[52], closure_129_3.paths).then((result) => {
            const cacheAsync = result.default.loadCacheAsync({ page: "other" }, async () => {
              closure_1_32.resolve();
            });
          });
          const items1 = [closure_129_0(closure_129_3[42])(closure_129_3[65], closure_129_3.paths)];
          c2 = 2;
          c3 = 1;
          const obj3 = { value: Promise.all(items1), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_1 = value;
        const first = closure_129_4(closure_128_1, 1)[0];
        first.init();
        closure_129_1(closure_129_3[48])();
      }
      c3 = 3;
      const obj4 = { value, done: true };
      return obj4;
    } catch (tmp20) {
      c3 = tmp;
      throw tmp20;
    }
  }
};
function initializeTokenStorage() {
  const Storage = Storage4.Storage;
  if (null == Storage.get(closure_1_17)) {
    const token = NativeFastConnectModuleDefault.getConstants().token;
    if (null != token) {
      closure_20.log("Applying token storage fix.");
      const Storage2 = Storage4.Storage;
      const result = Storage2.set(closure_1_17, token);
      obj = closure_20;
    } else {
      closure_20.log("Cannot apply token storage fix as token not in NSUserDefaults.");
      obj = closure_20;
    }
  } else {
    obj = closure_20;
    closure_20.verbose("No need to apply token storage fix as token already exists.");
  }
  TokenManagerAll.init();
  const Storage3 = Storage4.Storage;
  obj = { storageHasToken: null != Storage3.get(closure_1_17), tokenManagerHasToken: null != TokenManagerAll.getToken() };
  obj.verbose("Token manager has initialized", obj);
  global();
  const tmp12 = null != TokenManagerAll.getToken();
}
const module_17229 = fn(17229);
const superagentPatch = fn(17279);
get_ActivityIndicator = fn(17);
({ AppState: metroRequire, NativeEventEmitter: closure_7, Linking: closure_8, LogBox: closure_9, NativeModules: c10 } = get_ActivityIndicator);
const logThirdPartyImportsDone = fn(17299);
let closure_11 = fn(2026).subscribeToIntlLoadingSuccess;
const AnalyticsTrackingStore = fn(7460);
const ManagerRegistry = fn(17300);
const Constants = fn(1074);
({ AppStates: closure_14, AnalyticEvents: closure_15, FIRST_RUN_DATE_KEY: closure_16, TOKEN_KEY: closure_17, STORAGE_SECURE_KEYS: closure_18, Platforms: closure_19 } = Constants);
const loadImports = TTITrackerDefault.loadImports;
loadImports.recordEnd();
let closure_20 = new LoggerDefault("index.native.tsx");
let c21 = false;
let c25 = null;
const future = new fn(9293).Future();
let obj = { None: 0, [0]: "None", HeadlessRan: 1, [1]: "HeadlessRan", Full: 2, [2]: "Full" };
const None = obj.None;
let promise = new Promise((arg0) => {
  global = arg0;
});
const loadIndex = TTITrackerDefault.loadIndex;
loadIndex.recordEnd();
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_startup/native/NativeAppStartup.tsx");

export const applicationReady = future;
export const init = function init() {
  const self = this;
  const apply = closure_38.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const initHeadlessTask = function initHeadlessTask() {
  const self = this;
  const apply = closure_39.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};