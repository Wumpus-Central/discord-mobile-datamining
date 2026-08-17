// discord_app/modules/app_startup/native/NativeAppStartup.tsx
import timestampDefault from "timestamp" /* 3 */;
import serializeDefault from "serialize" /* 9 */;
import enforcingDefault from "enforcing" /* 502 */;
import Storage4 from "Storage" /* 595 */;
import setSecondaryTokenAll from "setSecondaryToken" /* 707 */;
import _modDef1208 from "module_1208" /* 1208 */;
import databaseNameDefault from "databaseName" /* 1971 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import index from "../../../i18n/native/index.tsx" /* 16442 */;
import isAnalyticsEndpoint from "isAnalyticsEndpoint" /* 16492 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import timestamp from "timestamp" /* 16512 */;
import { subscribeToIntlLoadingSuccess as closure_11 } from "_setAppLocale" /* 1995 */;
import closure_12 from "handleConnectionOpen" /* 1979 */;
import closure_13 from "getState" /* 7383 */;
import result from "result" /* 5053 */;
import ManagerRegistry.native from "../ManagerRegistry.native.tsx" /* 16513 */;
import ME from "ME" /* 676 */;

require = arg1;
function linkFromAppsFlyer(arg0) {
  try {
    const _URL = URL;
    const uRL = new URL(arg0);
    const searchParams = uRL.searchParams;
    return "true" === searchParams.get("fromAppsFlyer");
  } catch (tmp8) {
    obj = { url: null, error: null };
    obj[0] = tmp;
    obj[1] = tmp8;
    closure_20.error("Failed to parse URL in linkFromAppsFlyer", obj);
    return false;
  }
}
function getInitialURLs() {
  const self = this;
  const apply = _getInitialURLs.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getInitialURLs() {
  const self = this;
  const tmp = callback(function*() {
    let arr = tmp2;
    arr = [];
    const DeepLinkManager = closure_1_10.DeepLinkManager;
    yield DeepLinkManager.getInitialURL();
    if (1 === tmp5) {
      if (arg0 === 1) {
        dependencyMap = 3;
        throw arg1;
      } else if (arg0 === 2) {
        dependencyMap = 3;
        const obj2 = { value: null, done: true };
        obj2[0] = arg1;
        return obj2;
      } else {
        closure_1 = arg1;
        if (null != closure_1) {
          if (null != closure_1.url) {
            if (callback(closure_1.url)) {
              let push = arr(17111).DeeplinkSource;
              if (closure_1.isDeferred) {
                let AppsFlyer = push.AppsFlyerDeferred;
              } else {
                AppsFlyer = push.AppsFlyer;
              }
              c2 = AppsFlyer;
              push = arr.push;
              const obj3 = { url: null, source: null };
              obj3[0] = closure_1.url;
              obj3[1] = c2;
              arr = push(obj3);
            } else {
              const obj4 = { url: null, source: null };
              obj4[0] = closure_1.url;
              obj4[1] = arr(17111).DeeplinkSource.OS;
              arr = arr.push(obj4);
              dependencyMap = 3;
            }
          }
        }
        c2 = 2;
        dependencyMap = 1;
        const obj5 = { value: null, done: false };
        obj5[0] = initialURL.getInitialURL();
        return obj5;
      }
    } else if (arg0 === 1) {
      dependencyMap = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      dependencyMap = arg1;
      if (null != dependencyMap) {
        const obj6 = { url: null, source: null };
        obj6[0] = dependencyMap;
        obj6[1] = arr(17111).DeeplinkSource.ReactNativeLinking;
        arr.push(obj6);
      }
    }
    return arg1;
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
function sharedInit() {
  function handleNotification(arg0) {
    if (c0) {
      arr(handleNotification[15])("receiveNotification", () => callback(table[31])).default(arg0, false);
      arr(handleNotification[12]).extraProperties.tapped_notification = true;
    } else {
      arr = arr.push(arg0);
    }
  }
  function handleLocalNotification(getData) {
    if (c0) {
      const result = arr(handleNotification[15])("LocalPushNotificationActionCreators", () => callback(table[32])).receiveLocalNotification(getData);
    } else {
      arr = arr2.push(getData);
    }
  }
  obj = importDefault(handleNotification[17]);
  let result = obj.setupOTAAssetFallback();
  const Emitter = importDefault(handleNotification[18]).Emitter;
  const result1 = Emitter.injectBatchEmitChanges(_require(handleNotification[19]).batchUpdates);
  const TelemetryRingLifecycle = _require(handleNotification[20]).TelemetryRingLifecycle;
  TelemetryRingLifecycle.initialize();
  const result2 = _require(handleNotification[21]).installWebsocketTelemetryHook((arg0) => {
    arr(handleNotification[22]).append(constants.WEBSOCKET_MESSAGE_RECEIVED, arg0);
  });
  const listener = closure_8.addEventListener("url", (url) => {
    url = url.url;
    let isAndroidResult = url(handleNotification[23]).isAndroid();
    if (isAndroidResult) {
      isAndroidResult = url === url;
    }
    if (!isAndroidResult) {
      promise.then(() => {
        closure_1_20.log("Handling URL: " + url);
        obj = closure_1_1(closure_1_3[24]);
        obj.mark("\u2757", "Handle URL " + url);
        obj = { url, source: null };
        const DeeplinkSource = url(closure_1_3[14]).DeeplinkSource;
        obj[1] = closure_1_22(url) ? DeeplinkSource.AppsFlyer : DeeplinkSource.OS;
        closure_1_1(closure_1_3[15])("handleURL", () => callback(table[16])).default(obj, false);
      });
    }
  });
  closure_9.ignoreLogs(["Non-serializable values were found in the navigation state", "Overriding previous layout animation with new one before the first began", "Check the render method of `SceneView`", "Open debugger to view warnings."]);
  const obj2 = _require(handleNotification[21]);
  const tmp4 = _require;
  const initialBundleDownloaded = importDefault(handleNotification[17]).getInitialBundleDownloaded();
  initialBundleDownloaded.then((versionRequired) => {
    if (tmp) {
      const _HermesInternal = HermesInternal;
      closure_20.verbose("Get initial downloaded bundle " + versionRequired.versionRequired);
      arr(handleNotification[25]).prepareUpdate(versionRequired.versionRequired);
      obj = arr(handleNotification[25]);
    }
  });
  const obj3 = importDefault(handleNotification[17]);
  const listener1 = importDefault(handleNotification[17]).addEventListener("downloaded", (versionRequired) => {
    versionRequired = versionRequired.versionRequired;
    closure_20.verbose("Bundle Event: bundle downloaded for " + versionRequired);
    arr(handleNotification[25]).prepareUpdate(versionRequired);
  });
  const obj4 = importDefault(handleNotification[17]);
  const initialOtaUpdateChecked = importDefault(handleNotification[17]).getInitialOtaUpdateChecked();
  initialOtaUpdateChecked.then((metrics) => {
    metrics = metrics.metrics;
    closure_20.verbose("Initial OTA update check metrics", metrics);
    for (const item10010 of metrics) {
      let tmp2 = arr;
      let tmp3 = handleNotification;
      obj = arr(handleNotification[17]);
      let emitOtaMetricResult = obj.emitOtaMetric(item10010);
      continue;
    }
  });
  const obj5 = importDefault(handleNotification[17]);
  const listener2 = importDefault(handleNotification[17]).addEventListener("otaUpdateChecked", (metrics) => {
    metrics = metrics.metrics;
    closure_20.verbose("OTA update check metrics", metrics);
    for (const item10010 of metrics) {
      let tmp2 = arr;
      let tmp3 = handleNotification;
      obj = arr(handleNotification[17]);
      let emitOtaMetricResult = obj.emitOtaMetric(item10010);
      continue;
    }
  });
  const obj6 = importDefault(handleNotification[17]);
  new closure_7(importDefault(handleNotification[26])).addListener("appWillEnterForeground", () => {
    arr(handleNotification[27]).dispatch({ type: "APP_STATE_UPDATE_WILL_BECOME_ACTIVE" });
  });
  if (state.getState() !== currentState.currentState) {
    tmp(tmp2[15])("handleAppStateChange", () => callback(handleNotification[28])).default(obj8.currentState);
  } else {
    if (!tmp4Result.isAndroid()) {
      if (!c21) {
        if (obj8.currentState === constants.ACTIVE) {
          c21 = true;
          tmp(tmp2[15])("trackAppOpened", () => callback(handleNotification[29])).trackAppOpened("launcher");
        }
      }
    }
    tmp4Result = tmp4(tmp2[23]);
  }
  const listener3 = obj8.addEventListener("change", (arg0) => {
    const appStateChangeStart = arr(handleNotification[12]).imports.appStateChangeStart;
    appStateChangeStart.record();
    obj = arr(handleNotification[24]);
    obj.resumeTracing();
    obj = { message: "App state changed to " + arg0, category: "appState" };
    arr(handleNotification[30]).addBreadcrumb(obj);
    arr(handleNotification[15])("handleAppStateChange", () => callback(table[28])).default(arg0);
    const appStateChangeEnd = arr(handleNotification[12]).imports.appStateChangeEnd;
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
    const state = closure_1_13.getState();
    closure_1_20.log("Push notification received, the app state is " + state);
    if (state !== closure_1_14.ACTIVE) {
      if (c0) {
        arr(handleNotification[15])("receiveNotification", () => callback(table[31])).default(arg0, false);
        arr(handleNotification[12]).extraProperties.tapped_notification = true;
      } else {
        arr = arr.push(arg0);
      }
    }
  });
  tmpResult = tmp(tmp2[33]);
  const result4 = tmpResult.addNotificationEventListener("localNotification", handleLocalNotification);
  obj = {
    onStorageInitialize(arg0) {
      c0 = true;
      const item = arr.forEach(handleNotification);
      const item1 = arr2.forEach(handleLocalNotification);
      arr.length = 0;
      arr2.length = 0;
    }
  };
  return obj;
}
function _trackFirstLaunched() {
  const self = this;
  const tmp = callback(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp2;
            const Storage2 = closure_1_0(closure_1_3[34]).Storage;
            if (Storage2.get(closure_1_15.APP_FIRST_LAUNCHED, true)) {
              const tmp18 = closure_1_1(closure_1_3[35]);
              const table = tmp18;
              const track = tmp18.track;
              const APP_FIRST_LAUNCHED = closure_1_15.APP_FIRST_LAUNCHED;
              obj1 = {};
              let obj2 = closure_1_0(closure_1_3[23]);
              if (obj2.isAndroid()) {
                let IOS = tmp22.ANDROID;
              } else {
                IOS = tmp22.IOS;
              }
              obj1.platform = IOS;
              const InstallReferrer = closure_1_10.InstallReferrer;
              let value;
              if (InstallReferrer != null) {
                value = InstallReferrer.get();
              }
              c5 = 1;
              c6 = 1;
              obj2 = { value: null, done: false };
              obj2[0] = value;
              return obj2;
            } else {
              c6 = 3;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          obj1.referrer = arg1;
          track(APP_FIRST_LAUNCHED, obj1);
          const Storage = obj1(table[34]).Storage;
          const result = Storage.set(constants.APP_FIRST_LAUNCHED, false);
        }
        c6 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp26) {
        c6 = tmp;
        throw tmp26;
      }
    }
  });
  closure_27 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function loadStorage() {
  const self = this;
  const apply = _loadStorage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadStorage() {
  const self = this;
  const tmp = callback(function*() {
    let callback = tmp3;
    dependencyMap = 1;
    const loadStorage2 = closure_1_1(9).loadStorage;
    loadStorage2.recordStart();
    let Storage = closure_1_0(595).Storage;
    yield Storage.refresh([], closure_1_18);
    if (1 === tmp7) {
      dependencyMap = 0;
      callback = closure_2;
      logger.error("Unable to load Storage", callback);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      closure_0 = arg1;
      loadStorage = callback(9).loadStorage;
      loadStorage.recordEnd();
      const parseStorage = callback(9).parseStorage;
      parseStorage.measureAsync(() => {
        const Storage = callback(table[34]).Storage;
        return Storage.parse(callback);
      });
      dependencyMap = 0;
    }
    dependencyMap = 0;
    return arg1;
  });
  closure_29 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function loadKvStorage() {
  try {
    databaseNameDefault.initialize();
    return Promise.resolve();
  } catch (tmp4) {
    closure_20.warn("DatabaseManager.initialize errored.", tmp4);
    _modDef1208.captureException(tmp4);
    const obj2 = _modDef1208;
  }
}
function initializeIntl() {
  const self = this;
  const apply = _initializeIntl.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _initializeIntl() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp2;
              let callback = tmp5;
              let log;
              log = log.log;
              callback = undefined;
              paths = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              paths = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = log(paths[39]).preloadAllIntlMessageFiles();
              return obj2;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              let obj6 = log(paths[40]);
              paths = 3;
              c4 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj6.waitForAllDefaultIntlMessagesLoaded();
              return obj4;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              if (log) {
                obj3 = callback(paths[24]);
                obj3.markAndLog(closure_20, "\u{1F30E}", "i18n loaded");
              }
              paths = 4;
              c4 = 1;
              obj6 = { value: null, done: false };
              obj6[0] = log(paths[42])(paths[41], paths.paths);
              return obj6;
            }
          } else if (4 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              callback = arg1.default;
              paths = 5;
              c4 = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = callback();
              return obj8;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback2(() => callback());
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp29) {
          c4 = tmp;
          throw tmp29;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_36 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _init(_payload) {
  let self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      let throwTypeErrorResult = HermesBuiltin.throwTypeError();
    } else {
      throwTypeErrorResult = arg1;
      throwTypeErrorResult = arg0;
      throwTypeErrorResult = tmp4;
      if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          let num2 = 0;
          if (0 === v0) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let onStorageInitialize = tmp3;
              let callback = tmp2;
              callback = undefined;
              onStorageInitialize = undefined;
              v0 = undefined;
              c3 = undefined;
              let lib;
              closure_5 = undefined;
              c6 = undefined;
              let resolved;
              c8 = undefined;
              c9 = undefined;
              c10 = undefined;
              c11 = undefined;
              closure_13 = undefined;
              closure_14 = undefined;
              dependencyMap = undefined;
              closure_16 = undefined;
              closure_17 = undefined;
              closure_18 = undefined;
              closure_19 = undefined;
              throwTypeErrorResult = Full;
              throwTypeErrorResult = closure_1_33;
              if (Full !== closure_1_33.Full) {
                throwTypeErrorResult = Full;
                throwTypeErrorResult = Full === throwTypeErrorResult.HeadlessRan;
                callback = throwTypeErrorResult;
                Full = throwTypeErrorResult.Full;
                onStorageInitialize = throwTypeErrorResult;
                if (!throwTypeErrorResult) {
                  throwTypeErrorResult = closure_1_26;
                  onStorageInitialize = closure_1_26().onStorageInitialize;
                }
                throwTypeErrorResult = closure_1_0;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = closure_1_0;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = closure_1_0(500).isAndroid();
                let _Promise6 = closure_1_0(8671);
                if (throwTypeErrorResult) {
                  throwTypeErrorResult = _Promise6.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
                } else {
                  throwTypeErrorResult = _Promise6.lockOrientationForiOS();
                }
                throwTypeErrorResult = closure_1_1;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = closure_6;
                throwTypeErrorResult = closure_1_14;
                closure_1_1(9).didBackgroundApp = closure_6.currentState === closure_1_14.BACKGROUND;
                throwTypeErrorResult = closure_1_1;
                throwTypeErrorResult = c3;
                const loadStorageStart = closure_1_1(9).imports.loadStorageStart;
                throwTypeErrorResult = loadStorageStart.record();
                throwTypeErrorResult = globalThis;
                _Promise6 = Promise;
                throwTypeErrorResult = closure_1_23;
                const items = [closure_1_23(), , , , ];
                throwTypeErrorResult = closure_1_1;
                throwTypeErrorResult = c3;
                const obj14 = closure_1_0(500);
                const initialNotification = closure_1_1(11579).getInitialNotification();
                items[1] = initialNotification.catch(() => null);
                throwTypeErrorResult = closure_1_28;
                items[2] = closure_1_28();
                throwTypeErrorResult = closure_1_30;
                items[3] = closure_1_30();
                throwTypeErrorResult = closure_1_0;
                throwTypeErrorResult = c3;
                num2 = closure_1_0(2007);
                throwTypeErrorResult = c3;
                throwTypeErrorResult = c3;
                const obj15 = closure_1_1(11579);
                throwTypeErrorResult = num2(17121, c3.paths).then((arg0) => arg0.default());
                items[4] = throwTypeErrorResult;
                throwTypeErrorResult = Promise.all(items);
                v0 = 1;
                c3 = 1;
                const num2Result = num2(17121, c3.paths);
              } else {
                throwTypeErrorResult = closure_1_1;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = closure_1_1(1208).addBreadcrumb({ message: "Init called when already initialized" });
                c3 = 3;
                const obj13 = closure_1_1(1208);
              }
            }
          } else {
            if (1 === tmp6) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                throwTypeErrorResult = callback;
                throwTypeErrorResult = onStorageInitialize;
                v0 = arg1;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = v0;
                c3 = lib(v0, 2);
                throwTypeErrorResult = c3;
                lib = 32;
                throwTypeErrorResult = c3;
                closure_5 = 5;
                throwTypeErrorResult = onStorageInitialize;
                throwTypeErrorResult = c3;
                const loadStorageEnd = onStorageInitialize(9).imports.loadStorageEnd;
                throwTypeErrorResult = loadStorageEnd.record();
                throwTypeErrorResult = callback;
                throwTypeErrorResult = c3;
                if (obj18.isAndroid()) {
                  if (callback(13766).isTTITest) {
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = onStorageInitialize;
                    throwTypeErrorResult = closure_1_0;
                    throwTypeErrorResult = c3;
                    closure_6 = closure_1_0(5420).default;
                    throwTypeErrorResult = closure_6;
                    v0 = 2;
                    c3 = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = closure_6.yieldConfig();
                    return obj2;
                  }
                }
                obj18 = callback(500);
              }
            } else if (2 === tmp6) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              throwTypeErrorResult = callback;
              throwTypeErrorResult = onStorageInitialize;
              closure_14 = arg1;
              throwTypeErrorResult = lib;
              throwTypeErrorResult = closure_14;
              dependencyMap = lib(closure_14, 5);
              throwTypeErrorResult = dependencyMap;
              throwTypeErrorResult = 32;
              throwTypeErrorResult = dependencyMap;
              closure_16 = 5.default;
              throwTypeErrorResult = dependencyMap;
              closure_17 = 16442.default;
              throwTypeErrorResult = dependencyMap;
              closure_18 = 16492.default;
              throwTypeErrorResult = dependencyMap;
              closure_19 = 17;
              throwTypeErrorResult = closure_16;
              throwTypeErrorResult = closure_16.registerNotificationCategories();
              throwTypeErrorResult = closure_16;
              throwTypeErrorResult = closure_16.registerListener();
              throwTypeErrorResult = closure_17;
              throwTypeErrorResult = closure_17.loadServer();
              throwTypeErrorResult = closure_18;
              throwTypeErrorResult = closure_18.addChangeListener(() => {
                const result = onStorageInitialize(paths[33]).setApplicationIconBadgeNumber(totalMentionCount.getTotalMentionCount());
              });
              throwTypeErrorResult = callback;
              if (!callback) {
                closure_19.init();
              }
              callback(6377);
              obj = callback(5054);
              const sessionHeartbeatScheduler = obj.initSessionHeartbeatScheduler();
            }
            if (callback) {
              resolved = Promise.resolve();
            } else {
              resolved = callback3({ log: true });
            }
            obj3 = onStorageInitialize(10);
            obj3.markAndLog(logger, "\u{1F3C3}", "The initial promise has resolved");
            let tmp34 = null != lib;
            if (tmp34) {
              tmp34 = lib.length > num2;
            }
            if (tmp34) {
              logger.log("initialURLs", lib);
            }
            if (null != closure_5) {
              logger.log("initialNotification", closure_5);
            }
            const Storage = callback(595).Storage;
            if (null == Storage.get(closure_16)) {
              const Storage2 = callback(595).Storage;
              const _Date = Date;
              let result = Storage2.set(closure_16, Date.now());
            }
            (function trackFirstLaunched() {
              const self = this;
              const apply = closure_27.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
            if (!callback) {
              closure_1_40();
              if (onStorageInitialize != null) {
                onStorageInitialize();
              }
            }
            closure_1_1(5086)("DispatcherBridge", () => {
              _undefined(paths[47]);
            });
            if (callback) {
              let obj5 = closure_1_1(10);
              obj5.markAndLog(closure_1_20, "\u{1F3C3}", "Flux already initialized.");
            } else {
              let obj4 = closure_1_1(10);
              obj4.time("\u{1F3C3}", "Flux.initialize()", () => {
                onStorageInitialize(paths[18]).initialize();
                closure_20.verbose("Flux has initialized");
              });
            }
            closure_1_1(17140)();
            const result1 = closure_1_0(17141).setupLibdiscoreTimersMonitor();
            const item = closure_1_4.forEach((url) => {
              url = url.url;
              onStorageInitialize(paths[15])("handleURL", () => callback(table[16])).default(url, true);
            });
            closure_8 = false;
            if (null != closure_1_5) {
              const callback2 = closure_1_1(5086)("receiveNotification", () => _undefined(paths[31])).default;
              closure_1_1(9).extraProperties.tapped_notification = true;
              throwTypeErrorResult = callback2;
              throwTypeErrorResult = closure_1_5;
              closure_8 = callback2(closure_1_5, true);
            }
            throwTypeErrorResult = callback;
            throwTypeErrorResult = closure_8;
            if (!closure_8) {
              throwTypeErrorResult = onStorageInitialize;
              throwTypeErrorResult = _null;
              const channelId = _null.getChannelId();
              throwTypeErrorResult = channelId;
              if (null != channelId) {
                throwTypeErrorResult = callback;
                throwTypeErrorResult = onStorageInitialize;
                throwTypeErrorResult = onStorageInitialize;
                throwTypeErrorResult = c3;
                obj4 = { channelId: null, isPreload: true, skipLocalFetch: true, fetchKey: null };
                throwTypeErrorResult = c10;
                obj4[0] = c10;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = c3;
                obj4[3] = callback(5082).INITIAL_MESSAGE_FETCH_KEY;
                throwTypeErrorResult = onStorageInitialize(9084).fetchMessages(obj4);
                const obj8 = onStorageInitialize(9084);
              }
            }
            throwTypeErrorResult = callback;
            throwTypeErrorResult = onStorageInitialize;
            throwTypeErrorResult = closure_1_1;
            throwTypeErrorResult = c3;
            const loadMiniCacheStart = closure_1_1(9).imports.loadMiniCacheStart;
            throwTypeErrorResult = loadMiniCacheStart.record();
            let items2 = globalThis;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Promise((arg0) => {
              const _undefined = arg0;
              _undefined(paths[42])(paths[52], paths.paths).then((arg0) => arg0.default.loadCacheAsync(closure_1_4(callback(closure_1_3[53]).computeInitialNavigationState(), 1)[0], () => {
                closure_1_0(closure_1_3[57]).updateSaturation(closure_1_0(closure_1_3[55]).default.saturation);
                obj = closure_1_0(closure_1_3[57]);
                closure_1_0(closure_1_3[58]).updateVisualRefresh(closure_1_0(closure_1_3[56]).isMobileVisualRefreshEnabled("NativeAppStartup"));
                const obj2 = closure_1_0(closure_1_3[58]);
                closure_1_0(closure_1_3[59]).updateTheme(closure_1_0(closure_1_3[54]).default.theme);
                callback();
              }));
            });
            _null = null;
            throwTypeErrorResult = v0;
            throwTypeErrorResult = c3;
            const obj7 = closure_1_0(17141);
            if (null != obj10.getToken()) {
              throwTypeErrorResult = callback;
              items2.Promise.resolve();
              const _Promise3 = items2.Promise;
            } else {
              throwTypeErrorResult = callback;
              throwTypeErrorResult = onStorageInitialize;
              throwTypeErrorResult = closure_1_0;
              throwTypeErrorResult = c3;
              closure_13 = closure_1_0(13555);
              throwTypeErrorResult = closure_13;
              throwTypeErrorResult = closure_13.beginLoadedExperimentsTimeout();
              throwTypeErrorResult = closure_13;
              closure_13.getPromise();
            }
            throwTypeErrorResult = callback;
            throwTypeErrorResult = onStorageInitialize;
            const items1 = [throwTypeErrorResult, ];
            throwTypeErrorResult = _null;
            items1[1] = _null;
            const _Promise4 = items2.Promise;
            obj10 = v0(707);
            throwTypeErrorResult = items2.Promise.all(items1).then(() => {
              closure_32.resolve();
            });
            throwTypeErrorResult = closure_1_0;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            items2 = [closure_1_0(2007)(5052, c3.paths), , , , , ];
            throwTypeErrorResult = closure_1_0;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            items2[1] = closure_1_0(2007)(13819, c3.paths);
            throwTypeErrorResult = closure_1_0;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            items2[2] = closure_1_0(2007)(13832, c3.paths);
            throwTypeErrorResult = closure_1_0;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            items2[3] = closure_1_0(2007)(5383, c3.paths);
            throwTypeErrorResult = closure_1_0;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            items2[4] = closure_1_0(2007)(17142, c3.paths);
            throwTypeErrorResult = closure_1_7;
            items2[5] = closure_1_7;
            throwTypeErrorResult = items2.Promise.all(items2);
            v0 = 3;
            c3 = 1;
            const _Promise5 = items2.Promise;
            const allResult = items2.Promise.all(items1);
          }
          c3 = 3;
          obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } catch (throwTypeErrorResult) {
          c3 = throwTypeErrorResult;
          throw throwTypeErrorResult;
        }
      }
    }
  });
  closure_38 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _initHeadlessTask() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp3;
            let onStorageInitialize = tmp2;
            onStorageInitialize = undefined;
            callback = undefined;
            if (HeadlessRan === closure_1_33.None) {
              HeadlessRan = closure_1_33.HeadlessRan;
              onStorageInitialize = closure_1_26().onStorageInitialize;
              const items = [closure_1_28(), closure_1_30(), closure_1_35({ log: false })];
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.all(items);
              return obj1;
            } else {
              c3 = 3;
            }
          }
        } else if (1 === tmp6) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            callback3();
            onStorageInitialize();
            onStorageInitialize(c3[69]);
            onStorageInitialize(c3[47]);
            callback(c3[18]).initialize();
            const obj8 = callback(c3[18]);
            onStorageInitialize(c3[42])(c3[52], c3.paths).then((arg0) => {
              const cacheAsync = arg0.default.loadCacheAsync({ page: "other" }, () => {
                closure_32.resolve();
              });
            });
            const items1 = [onStorageInitialize(c3[42])(c3[66], c3.paths)];
            c2 = 2;
            c3 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = Promise.all(items1);
            return obj3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          callback = arg1;
          const first = callback2(callback, 1)[0];
          first.init();
          callback(c3[48])();
        }
        c3 = 3;
        const obj4 = { value: null, done: true };
        obj4[0] = arg1;
        return obj4;
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  });
  closure_39 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function initializeTokenStorage() {
  const Storage = Storage4.Storage;
  if (null == Storage.get(closure_17)) {
    if (tmpResult.isAndroid()) {
      let token = enforcingDefault.getConstants().token;
      const obj3 = enforcingDefault;
    } else {
      token = closure_10.DCDFastConnectManager.token;
    }
    if (null != token) {
      closure_20.log("Applying token storage fix.");
      const Storage2 = tmp(595).Storage;
      const result = Storage2.set(tmp3, token);
      obj = closure_20;
    } else {
      closure_20.log("Cannot apply token storage fix as token not in NSUserDefaults.");
      obj = closure_20;
    }
    tmpResult = tmp(500);
  } else {
    obj = closure_20;
    closure_20.verbose("No need to apply token storage fix as token already exists.");
  }
  setSecondaryTokenAll.init();
  const obj4 = setSecondaryTokenAll;
  const obj5 = setSecondaryTokenAll;
  const Storage3 = tmp(595).Storage;
  obj = { storageHasToken: null != Storage3.get(tmp3), tokenManagerHasToken: null != setSecondaryTokenAll.getToken() };
  obj.verbose("Token manager has initialized", obj);
  callback2();
}
({ AppState: closure_6, NativeEventEmitter: error, Linking: closure_8, LogBox: c9, NativeModules: c10 } = get_ActivityIndicator);
({ AppStates: closure_14, AnalyticEvents: closure_15, FIRST_RUN_DATE_KEY: closure_16, TOKEN_KEY: closure_17, STORAGE_SECURE_KEYS: closure_18, Platforms: closure_19 } = ME);
const loadImports = serializeDefault.loadImports;
loadImports.recordEnd();
let closure_20 = new timestampDefault("index.native.tsx");
let c21 = false;
let c25 = null;
const future = new require("Future").Future();
let obj = { None: 0, [0]: "None", HeadlessRan: 1, [1]: "HeadlessRan", Full: 2, [2]: "Full" };
const None = obj.None;
const promise = new Promise((arg0) => {
  closure_31 = arg0;
});
const loadIndex = serializeDefault.loadIndex;
loadIndex.recordEnd();
const tmp10 = new timestampDefault("index.native.tsx");
result = require("set").fileFinishedImporting("modules/app_startup/native/NativeAppStartup.tsx");

export const applicationReady = future;
export const init = function init() {
  const self = this;
  const apply = _init.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const initHeadlessTask = function initHeadlessTask() {
  const self = this;
  const apply = _initHeadlessTask.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};