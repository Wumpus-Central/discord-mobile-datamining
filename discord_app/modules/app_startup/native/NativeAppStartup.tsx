import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";
import { Storage } from "../../../../discord_common/js/packages/storage/Storage.tsx";
import { SentryUtils.native } from "../../../utils/SentryUtils.native.tsx";
import { databaseName } from "../../app_database/system/DatabaseManager.tsx";
// discord_app/modules/app_startup/native/NativeAppStartup.tsx
import onStageConnectionError from "onStageConnectionError";
import closure_5 from "timestamp";
import index from "../../../i18n/native/index.tsx";
import isAnalyticsEndpoint from "isAnalyticsEndpoint";
import get_ActivityIndicator from "BundleUpdaterManager";
import timestamp from "timestamp";
import { subscribeToIntlLoadingSuccess as closure_11 } from "_setAppLocale";
import handleConnectionOpen from "handleConnectionOpen";
import getState from "getState";
import result from "result";
import ManagerRegistry.native from "../ManagerRegistry.native.tsx";
import ME from "ME";
import { loadImports } from "result";
import { loadIndex } from "result";

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function linkFromAppsFlyer(arg0) {
  try {
    const _URL = URL;
    const uRL = new URL(arg0);
    const searchParams = uRL.searchParams;
    return "true" === searchParams.get("fromAppsFlyer");
  } catch (tmp8) {
    const obj = { url: null, error: null };
    obj[0] = tmp;
    obj[1] = tmp8;
    tmp10.error("Failed to parse URL in linkFromAppsFlyer", obj);
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
    const DeepLinkManager = outer1_10.DeepLinkManager;
    yield DeepLinkManager.getInitialURL();
    if (1 === tmp5) {
      if (arg0 === 1) {
        let dependencyMap = 3;
        throw arg1;
      } else if (arg0 === 2) {
        dependencyMap = 3;
        const obj2 = { value: null, done: true };
        obj2[0] = arg1;
        return obj2;
      } else {
        let closure_1 = arg1;
        if (null != closure_1) {
          if (null != closure_1.url) {
            if (callback(closure_1.url)) {
              let push = arr(16850).DeeplinkSource;
              if (closure_1.isDeferred) {
                let AppsFlyer = push.AppsFlyerDeferred;
              } else {
                AppsFlyer = push.AppsFlyer;
              }
              let c2 = AppsFlyer;
              push = arr.push;
              const obj3 = { url: null, source: null };
              obj3[0] = closure_1.url;
              obj3[1] = c2;
              arr = push(obj3);
            } else {
              const obj4 = { url: null, source: null };
              obj4[0] = closure_1.url;
              obj4[1] = arr(16850).DeeplinkSource.OS;
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
        obj6[1] = arr(16850).DeeplinkSource.ReactNativeLinking;
        arr.push(obj6);
      }
    }
    return arg1;
  });
  const _getInitialURLs = tmp;
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
      arr(handleNotification[15])("receiveNotification", () => callback(table[32])).default(arg0, false);
      arr(handleNotification[12]).extraProperties.tapped_notification = true;
    } else {
      arr = arr.push(arg0);
    }
  }
  function handleLocalNotification(getData) {
    if (c0) {
      const result = arr(handleNotification[15])("LocalPushNotificationActionCreators", () => callback(table[33])).receiveLocalNotification(getData);
    } else {
      arr = arr2.push(getData);
    }
  }
  let obj = importDefault(handleNotification[17]);
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
        outer1_20.log("Handling URL: " + url);
        let obj = outer1_1(outer1_3[24]);
        obj.mark("\u2757", "Handle URL " + url);
        obj = { url, source: null };
        const DeeplinkSource = url(outer1_3[14]).DeeplinkSource;
        obj[1] = outer1_22(url) ? DeeplinkSource.AppsFlyer : DeeplinkSource.OS;
        outer1_1(outer1_3[15])("handleURL", () => callback(table[16])).default(obj, false);
      });
    }
  });
  closure_9.ignoreLogs(["Non-serializable values were found in the navigation state", "Overriding previous layout animation with new one before the first began", "Check the render method of `SceneView`", "Open debugger to view warnings."]);
  const obj2 = _require(handleNotification[21]);
  const initialBundleDownloaded = importDefault(handleNotification[17]).getInitialBundleDownloaded();
  initialBundleDownloaded.then((versionRequired) => {
    if (tmp) {
      const _HermesInternal = HermesInternal;
      closure_20.verbose("Get initial downloaded bundle " + versionRequired.versionRequired);
      arr(handleNotification[25]).prepareUpdate(versionRequired.versionRequired);
      const obj = arr(handleNotification[25]);
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
      let obj = arr(handleNotification[17]);
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
      let obj = arr(handleNotification[17]);
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
  } else if (tmp4(tmp2[29]).isBridgeless) {
    if (!tmp4Result.isAndroid()) {
      if (!c21) {
        if (obj8.currentState === constants.ACTIVE) {
          c21 = true;
          tmp(tmp2[15])("trackAppOpened", () => callback(handleNotification[30])).trackAppOpened("launcher");
        }
      }
    }
    tmp4Result = tmp4(tmp2[23]);
  }
  const listener3 = obj8.addEventListener("change", (arg0) => {
    const appStateChangeStart = arr(handleNotification[12]).imports.appStateChangeStart;
    appStateChangeStart.record();
    let obj = arr(handleNotification[24]);
    obj.resumeTracing();
    obj = { message: "App state changed to " + arg0, category: "appState" };
    arr(handleNotification[31]).addBreadcrumb(obj);
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
  let closure_2 = [];
  let tmpResult = tmp(tmp2[34]);
  const result3 = tmpResult.addNotificationEventListener("notification", (arg0) => {
    const state = outer1_13.getState();
    outer1_20.log("Push notification received, the app state is " + state);
    if (state !== outer1_14.ACTIVE) {
      if (c0) {
        arr(handleNotification[15])("receiveNotification", () => callback(table[32])).default(arg0, false);
        arr(handleNotification[12]).extraProperties.tapped_notification = true;
      } else {
        arr = arr.push(arg0);
      }
    }
  });
  tmpResult = tmp(tmp2[34]);
  const result4 = tmpResult.addNotificationEventListener("localNotification", handleLocalNotification);
  obj = {
    onStorageInitialize(arg0) {
      let c0 = true;
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
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp2;
            const Storage2 = outer1_0(outer1_3[35]).Storage;
            if (Storage2.get(outer1_15.APP_FIRST_LAUNCHED, true)) {
              const tmp18 = outer1_1(outer1_3[36]);
              const table = tmp18;
              const track = tmp18.track;
              const APP_FIRST_LAUNCHED = outer1_15.APP_FIRST_LAUNCHED;
              const obj1 = {};
              let obj2 = outer1_0(outer1_3[23]);
              if (obj2.isAndroid()) {
                let IOS = tmp22.ANDROID;
              } else {
                IOS = tmp22.IOS;
              }
              obj1.platform = IOS;
              const InstallReferrer = outer1_10.InstallReferrer;
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
          const Storage = obj1(table[35]).Storage;
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
  const _trackFirstLaunched = tmp;
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
    let dependencyMap = 1;
    const loadStorage2 = outer1_1(9).loadStorage;
    loadStorage2.recordStart();
    let Storage = outer1_0(595).Storage;
    yield Storage.refresh([], outer1_18);
    if (1 === tmp7) {
      dependencyMap = 0;
      callback = closure_2;
      logger.error("Unable to load Storage", callback);
      let c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      let closure_0 = arg1;
      const loadStorage = callback(9).loadStorage;
      loadStorage.recordEnd();
      const parseStorage = callback(9).parseStorage;
      parseStorage.measureAsync(() => {
        const Storage = callback(table[35]).Storage;
        return Storage.parse(callback);
      });
      dependencyMap = 0;
    }
    dependencyMap = 0;
    return arg1;
  });
  const _loadStorage = tmp;
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
    databaseName.initialize();
    return Promise.resolve();
  } catch (tmp4) {
    tmp10.warn("DatabaseManager.initialize errored.", tmp4);
    SentryUtils.native.captureException(tmp4);
    const obj2 = SentryUtils.native;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: null };
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
              let closure_2 = tmp2;
              let callback = tmp5;
              let log;
              log = log.log;
              callback = undefined;
              paths = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              paths = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = log(paths[40]).preloadAllIntlMessageFiles();
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
              let obj6 = log(paths[41]);
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
              obj6[0] = log(paths[43])(paths[42], paths.paths);
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
            return { value: "HermesInternal", done: null };
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
  const _initializeIntl = tmp;
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
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              let closure_5;
              let c6;
              let resolved;
              let c8;
              let c9;
              let c10;
              let c11;
              let getState;
              let closure_14;
              let dependencyMap;
              let closure_16;
              let closure_17;
              let closure_18;
              let closure_19;
              throwTypeErrorResult = outer1_34;
              throwTypeErrorResult = outer1_33;
              if (outer1_34 !== outer1_33.Full) {
                throwTypeErrorResult = outer1_34;
                throwTypeErrorResult = outer1_34 === throwTypeErrorResult.HeadlessRan;
                callback = throwTypeErrorResult;
                outer1_34 = throwTypeErrorResult.Full;
                onStorageInitialize = throwTypeErrorResult;
                if (!throwTypeErrorResult) {
                  throwTypeErrorResult = outer1_26;
                  onStorageInitialize = outer1_26().onStorageInitialize;
                }
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = outer1_0(500).isAndroid();
                let _Promise6 = outer1_0(8817);
                if (throwTypeErrorResult) {
                  throwTypeErrorResult = _Promise6.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
                } else {
                  throwTypeErrorResult = _Promise6.lockOrientationForiOS();
                }
                throwTypeErrorResult = outer1_1;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = outer1_6;
                throwTypeErrorResult = outer1_14;
                outer1_1(9).didBackgroundApp = outer1_6.currentState === outer1_14.BACKGROUND;
                throwTypeErrorResult = outer1_1;
                throwTypeErrorResult = c3;
                const loadStorageStart = outer1_1(9).imports.loadStorageStart;
                throwTypeErrorResult = loadStorageStart.record();
                throwTypeErrorResult = globalThis;
                _Promise6 = Promise;
                throwTypeErrorResult = outer1_23;
                const items = [outer1_23(), , , , ];
                throwTypeErrorResult = outer1_1;
                throwTypeErrorResult = c3;
                const obj15 = outer1_0(500);
                const initialNotification = outer1_1(10668).getInitialNotification();
                items[1] = initialNotification.catch(() => null);
                throwTypeErrorResult = outer1_28;
                items[2] = outer1_28();
                throwTypeErrorResult = outer1_30;
                items[3] = outer1_30();
                throwTypeErrorResult = outer1_0;
                throwTypeErrorResult = c3;
                num2 = outer1_0(1959);
                throwTypeErrorResult = c3;
                throwTypeErrorResult = c3;
                const obj16 = outer1_1(10668);
                throwTypeErrorResult = num2(16860, c3.paths).then((arg0) => arg0.default());
                items[4] = throwTypeErrorResult;
                throwTypeErrorResult = Promise.all(items);
                v0 = 1;
                c3 = 1;
                const num2Result = num2(16860, c3.paths);
              } else {
                throwTypeErrorResult = outer1_1;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = outer1_1(1208).addBreadcrumb({ message: "Init called when already initialized" });
                c3 = 3;
                const obj14 = outer1_1(1208);
              }
            }
          } else {
            if (1 === tmp6) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj1 = { value: null, done: true };
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
                if (obj19.isAndroid()) {
                  if (callback(13570).isTTITest) {
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = onStorageInitialize;
                    throwTypeErrorResult = outer1_0;
                    throwTypeErrorResult = c3;
                    outer1_6 = outer1_0(7053).default;
                    throwTypeErrorResult = outer1_6;
                    v0 = 2;
                    c3 = 1;
                    let obj2 = { value: null, done: false };
                    obj2[0] = outer1_6.yieldConfig();
                    return obj2;
                  }
                }
                obj19 = callback(500);
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
              closure_17 = 16166.default;
              throwTypeErrorResult = dependencyMap;
              closure_18 = 16216.default;
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
                const result = onStorageInitialize(paths[34]).setApplicationIconBadgeNumber(totalMentionCount.getTotalMentionCount());
              });
              throwTypeErrorResult = callback;
              if (!callback) {
                closure_19.init();
              }
              callback(5368);
              obj = callback(6832);
              const sessionHeartbeatScheduler = obj.initSessionHeartbeatScheduler();
            }
            if (callback) {
              resolved = Promise.resolve();
            } else {
              resolved = callback2({ log: true });
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
              outer1_40();
              if (onStorageInitialize != null) {
                onStorageInitialize();
              }
            }
            outer1_1(6860)("DispatcherBridge", () => {
              _undefined(paths[48]);
            });
            if (callback) {
              let obj5 = outer1_1(10);
              obj5.markAndLog(outer1_20, "\u{1F3C3}", "Flux already initialized.");
            } else {
              let obj4 = outer1_1(10);
              obj4.time("\u{1F3C3}", "Flux.initialize()", () => {
                onStorageInitialize(paths[18]).initialize();
                closure_20.verbose("Flux has initialized");
              });
            }
            outer1_1(16879)();
            const result1 = outer1_0(16880).setupLibdiscoreTimersMonitor();
            const obj7 = outer1_0(16880);
            const result2 = outer1_0(16881).installRNGHMountReactionsBridge();
            const item = outer1_4.forEach((url) => {
              url = url.url;
              onStorageInitialize(paths[15])("handleURL", () => callback(table[16])).default(url, true);
            });
            let outer1_8 = false;
            if (null != outer1_5) {
              throwTypeErrorResult = c3;
              const outer1_9 = outer1_1(6860)("receiveNotification", () => _undefined(paths[32])).default;
              throwTypeErrorResult = outer1_1;
              throwTypeErrorResult = c3;
              outer1_1(9).extraProperties.tapped_notification = true;
              throwTypeErrorResult = outer1_9;
              throwTypeErrorResult = outer1_5;
              outer1_8 = outer1_9(outer1_5, true);
            }
            throwTypeErrorResult = callback;
            throwTypeErrorResult = outer1_8;
            if (!outer1_8) {
              throwTypeErrorResult = onStorageInitialize;
              throwTypeErrorResult = outer1_12;
              const outer1_10 = outer1_12.getChannelId();
              throwTypeErrorResult = outer1_10;
              if (null != outer1_10) {
                throwTypeErrorResult = callback;
                throwTypeErrorResult = onStorageInitialize;
                throwTypeErrorResult = onStorageInitialize;
                throwTypeErrorResult = c3;
                obj4 = { channelId: null, isPreload: true, skipLocalFetch: true, fetchKey: null };
                throwTypeErrorResult = c10;
                obj4[0] = c10;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = c3;
                obj4[3] = callback(6856).INITIAL_MESSAGE_FETCH_KEY;
                throwTypeErrorResult = onStorageInitialize(9660).fetchMessages(obj4);
                const obj9 = onStorageInitialize(9660);
              }
            }
            throwTypeErrorResult = callback;
            throwTypeErrorResult = onStorageInitialize;
            throwTypeErrorResult = outer1_1;
            throwTypeErrorResult = c3;
            const loadMiniCacheStart = outer1_1(9).imports.loadMiniCacheStart;
            throwTypeErrorResult = loadMiniCacheStart.record();
            let items2 = globalThis;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new.target;
            throwTypeErrorResult = new Promise((arg0) => {
              const _undefined = arg0;
              _undefined(paths[43])(paths[54], paths.paths).then((arg0) => arg0.default.loadCacheAsync(outer1_4(callback(outer1_3[55]).computeInitialNavigationState(), 1)[0], () => {
                outer1_0(outer1_3[59]).updateSaturation(outer1_0(outer1_3[57]).default.saturation);
                const obj = outer1_0(outer1_3[59]);
                outer1_0(outer1_3[60]).updateVisualRefresh(outer1_0(outer1_3[58]).isMobileVisualRefreshEnabled("NativeAppStartup"));
                const obj2 = outer1_0(outer1_3[60]);
                outer1_0(outer1_3[61]).updateTheme(outer1_0(outer1_3[56]).default.theme);
                callback();
              }));
            });
            const outer1_11 = throwTypeErrorResult;
            outer1_12 = null;
            throwTypeErrorResult = v0;
            throwTypeErrorResult = c3;
            const obj8 = outer1_0(16881);
            if (null != obj11.getToken()) {
              throwTypeErrorResult = callback;
              items2.Promise.resolve();
              const _Promise3 = items2.Promise;
            } else {
              throwTypeErrorResult = callback;
              throwTypeErrorResult = onStorageInitialize;
              throwTypeErrorResult = outer1_0;
              throwTypeErrorResult = c3;
              getState = outer1_0(13359);
              throwTypeErrorResult = getState;
              throwTypeErrorResult = getState.beginLoadedExperimentsTimeout();
              throwTypeErrorResult = getState;
              getState.getPromise();
            }
            throwTypeErrorResult = callback;
            throwTypeErrorResult = onStorageInitialize;
            throwTypeErrorResult = outer1_11;
            const items1 = [outer1_11, ];
            throwTypeErrorResult = outer1_12;
            items1[1] = outer1_12;
            const _Promise4 = items2.Promise;
            obj11 = v0(707);
            throwTypeErrorResult = items2.Promise.all(items1).then(() => {
              closure_32.resolve();
            });
            throwTypeErrorResult = outer1_0;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            items2 = [outer1_0(1959)(6830, c3.paths), , , , , ];
            throwTypeErrorResult = outer1_0;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            items2[1] = outer1_0(1959)(13623, c3.paths);
            throwTypeErrorResult = outer1_0;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            items2[2] = outer1_0(1959)(13636, c3.paths);
            throwTypeErrorResult = outer1_0;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            items2[3] = outer1_0(1959)(7017, c3.paths);
            throwTypeErrorResult = outer1_0;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            throwTypeErrorResult = c3;
            items2[4] = outer1_0(1959)(16883, c3.paths);
            throwTypeErrorResult = outer1_7;
            items2[5] = outer1_7;
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
  const _init = tmp;
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
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            if (outer1_34 === outer1_33.None) {
              outer1_34 = outer1_33.HeadlessRan;
              onStorageInitialize = outer1_26().onStorageInitialize;
              const items = [outer1_28(), outer1_30(), outer1_35({ log: false })];
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
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
            onStorageInitialize(c3[71]);
            onStorageInitialize(c3[48]);
            callback(c3[18]).initialize();
            const obj8 = callback(c3[18]);
            onStorageInitialize(c3[43])(c3[54], c3.paths).then((arg0) => {
              const cacheAsync = arg0.default.loadCacheAsync({ page: "other" }, () => {
                closure_32.resolve();
              });
            });
            const items1 = [onStorageInitialize(c3[43])(c3[68], c3.paths)];
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
          callback(c3[49])();
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
  const _initHeadlessTask = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function initializeTokenStorage() {
  const Storage = Storage /* Storage */.Storage;
  if (null == Storage.get(closure_17)) {
    if (tmpResult.isAndroid()) {
      let token = enforcing.getConstants().token;
      const obj3 = enforcing;
    } else {
      token = closure_10.DCDFastConnectManager.token;
    }
    if (null != token) {
      tmp10.log("Applying token storage fix.");
      const Storage2 = tmp(595).Storage;
      const result = Storage2.set(tmp3, token);
      let obj = tmp10;
    } else {
      tmp10.log("Cannot apply token storage fix as token not in NSUserDefaults.");
      obj = tmp10;
    }
    tmpResult = tmp(500);
  } else {
    obj = tmp10;
    tmp10.verbose("No need to apply token storage fix as token already exists.");
  }
  importAll(707).init();
  const obj4 = importAll(707);
  const obj5 = importAll(707);
  const Storage3 = tmp(595).Storage;
  obj = { storageHasToken: null != Storage3.get(tmp3), tokenManagerHasToken: null != importAll(707).getToken() };
  obj.verbose("Token manager has initialized", obj);
  callback2();
}
({ AppState: closure_6, NativeEventEmitter: error, Linking: metroImportAll, LogBox: c9, NativeModules: c10 } = get_ActivityIndicator);
({ AppStates: closure_14, AnalyticEvents: closure_15, FIRST_RUN_DATE_KEY: closure_16, TOKEN_KEY: closure_17, STORAGE_SECURE_KEYS: closure_18, Platforms: closure_19 } = ME);
loadImports.recordEnd();
let closure_20 = new require("isAnalyticsEndpoint")("index.native.tsx");
let c21 = false;
let c25 = null;
const future = new require("Future").Future();
let obj = { None: 0, [0]: "None", HeadlessRan: 1, [1]: "HeadlessRan", Full: 2, [2]: "Full" };
const None = obj.None;
const promise = new Promise((arg0) => {
  let closure_31 = arg0;
});
loadIndex.recordEnd();
const tmp10 = new require("isAnalyticsEndpoint")("index.native.tsx");
result = require("module_16166").fileFinishedImporting("modules/app_startup/native/NativeAppStartup.tsx");

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