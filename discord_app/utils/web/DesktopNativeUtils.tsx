// discord_app/utils/web/DesktopNativeUtils.tsx
import _slicedToArray from "_slicedToArray";
import closure_4 from "set";
import { NativeFeatures } from "ME";
import set from "ME";
import { IPCEvents } from "../../../discord_common/js/packages/discord-native-types/IPCEvents.tsx";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { log } from "../../../discord_common/js/packages/logger/Logger.tsx";
import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";
import { DomainMigrationEventType } from "../../../discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx";
import { GuildThemeSourcePreference } from "../../flow/Client.tsx";
import { GameTheme } from "../../modules/game_detection/GameDetectionTypes.tsx";
import { set } from "../PlatformUtils.tsx";

let require = arg1;
function sanitizeFilename(arg0) {
  try {
    const _decodeURIComponent = decodeURIComponent;
    const str2 = decodeURIComponent(arg0);
    const str4 = decodeURIComponent(arg0).replace(closure_20, "$1");
    return decodeURIComponent(arg0).replace(closure_20, "$1").replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2").replace(closure_19, "_");
  } catch (err) {
    const str9 = str.replace(closure_21, "$1");
    return str.replace(closure_21, "$1").replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2").replace(closure_19, "_");
  }
}
function getFileData() {
  const self = this;
  const apply = _getFileData.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getFileData() {
  const self = this;
  const tmp = callback2((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const _fetch = fetch;
      const _Request = Request;
      const request = new Request(closure_0, { method: "GET", mode: "cors" });
      closure_0 = yield fetch(request);
      callback(38)(200 === closure_0.status, "Data fetch unsuccessful");
      callback = yield closure_0.arrayBuffer();
      callback(38)(null != callback, "Data is null");
      return callback;
    })();
  });
  const _getFileData = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getImageData(arg0, arg1, width, height) {
  return getFileData(arg0);
}
function _transcodeImageToPng() {
  const self = this;
  const tmp = callback2((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _slicedToArray = tmp3;
              let context = tmp5;
              let closure_0;
              let offscreenCanvas;
              context = undefined;
              _slicedToArray = undefined;
              const _Blob = Blob;
              const items = [closure_0];
              const obj1 = { type: null };
              obj1[0] = offscreenCanvas;
              const blob = new Blob(items, obj1);
              c6 = 1;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = globalThis.createImageBitmap(blob);
              return obj2;
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              closure_0 = arg1;
              let c5 = 1;
              offscreenCanvas = new globalThis.OffscreenCanvas(closure_0.width, closure_0.height);
              context = offscreenCanvas.getContext("2d");
              offscreenCanvas(context[3])(null != context, "Failed to acquire 2d context for image transcode");
              context.drawImage(closure_0, 0, 0);
              c6 = 3;
              c7 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = offscreenCanvas.convertToBlob({ type: "image/png" });
              return obj4;
            }
          } else if (2 === tmp8) {
            c5 = 0;
            closure_0.close();
            throw closure_4;
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_0.close();
              c7 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              _slicedToArray = arg1;
              c6 = 4;
              c7 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = _slicedToArray.arrayBuffer();
              return obj6;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.close();
            c7 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            c5 = 0;
            closure_0.close();
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp25) {
          closure_4 = tmp25;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp25;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _transcodeImageToPng = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function normalizeRunningGame(id) {
  let name2;
  let pidPath;
  let sandboxed;
  let windowHandle;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_13;
  }
  let str = id.id;
  if (str == null) {
    str = "";
  }
  const obj = { id: tmp[str], nativeProcessObserverId: null, name: null, origGameName: null, processName: null, hidden: null, elevated: null, sandboxed: null, lastFocused: null, exePath: null, exeName: null, cmdLine: null, distributor: null, sku: null, pid: null, pidPath: null, gameMetadata: null, windowHandle: null, fullscreenType: null, isLauncher: null, executableFingerprint: null };
  let str2 = id.id;
  if (str2 == null) {
    str2 = "";
  }
  obj[1] = parseInt(str2, 10);
  let name = id.gameName;
  if (name == null) {
    name = id.name;
  }
  obj[2] = name;
  ({ origGameName: obj[3], name: name2 } = id);
  if (name2 == null) {
    name2 = "";
  }
  obj[4] = name2;
  ({ hidden: obj[5], elevated: obj[6], sandboxed } = id);
  if (sandboxed == null) {
    sandboxed = false;
  }
  obj[7] = sandboxed;
  ({ lastFocused: obj[8], exePath: obj[9], exeName: obj[10], cmdLine: obj[11], distributor: obj[12], sku: obj[13], pid: obj[14], pidPath } = id);
  if (pidPath == null) {
    pidPath = [];
  }
  obj[15] = pidPath;
  ({ gameMetadata: obj[16], windowHandle } = id);
  if (windowHandle == null) {
    windowHandle = null;
  }
  obj[17] = windowHandle;
  let UNKNOWN = id.fullscreenType;
  if (UNKNOWN == null) {
    UNKNOWN = GuildThemeSourcePreference.RunningProcessFullscreenType.UNKNOWN;
  }
  obj[18] = UNKNOWN;
  let flag = id.isLauncher;
  if (flag == null) {
    flag = false;
  }
  obj[19] = flag;
  obj[20] = id.executableFingerprint;
  return obj;
}
function backwardCompatSend(APP_ASYNC_INDEX_TSX_LOADED) {
  const obj = set;
  if (obj.isDesktop()) {
    try {
      obj.sendIPC(APP_ASYNC_INDEX_TSX_LOADED);
    } catch (err) {
    }
  }
}
let set = new Set(["jpg", "jpeg", "jfif", "png"]);
const set1 = new Set(["webp", "avif"]);
const set2 = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]);
let closure_10 = null;
let buildNumber = null;
let moduleVersions = null;
let closure_13 = {};
let c14 = false;
let closure_15 = {};
if (null != DiscordNative) {
  let app = DiscordNative.app;
  let parts = app.getVersion().split(".");
  closure_10 = parts.map((joined) => parseInt(joined));
  const app2 = DiscordNative.app;
  moduleVersions = app2.getModuleVersions();
  const app3 = DiscordNative.app;
  buildNumber = app3.getBuildNumber();
  let str = app.getVersion();
}
new Set(["discord_erlpack", "discord_game_utils", "discord_rpc", "discord_spellcheck", "discord_utils", "discord_voice"]);
let c16 = false;
let c17 = null;
const lastImageSaveDirectory = "lastImageSaveDirectory";
const re19 = /[<>:"/\\|?*@]/g;
const re20 = /(\.[a-zA-Z0-9]+):[^.]*$/;
const re21 = /(\.[a-zA-Z0-9]+)%3A.+$/;
const re22 = /[^a-zA-Z0-9]/g;
const re23 = /\.[^.]*$/;
let obj = { SAVED: "saved", CANCELED: "canceled", ERRORED: "errored" };
obj = {
  requireModule(discord_krisp) {
    if (c14) {
      if (closure_15.hasOwnProperty(discord_krisp)) {
        if (null != tmp[discord_krisp]) {
          return tmp[discord_krisp];
        }
      }
    }
    const nativeModules = DiscordNative.nativeModules;
    const requireModuleResult = nativeModules.requireModule(discord_krisp);
    if (c14) {
      closure_15[discord_krisp] = requireModuleResult;
    }
    return requireModuleResult;
  },
  ensureModule(discord_voice) {
    if (set.isPlatformEmbedded) {
      const nativeModules = DiscordNative.nativeModules;
      let ensureModuleResult = nativeModules.ensureModule(discord_voice);
    } else {
      const _Error = Error;
      const error = new Error("not embedded");
      ensureModuleResult = Promise.reject(error);
    }
    return ensureModuleResult;
  }
};
Object.defineProperty(obj, "canBootstrapNewUpdater", { get: () => DiscordNative.nativeModules.canBootstrapNewUpdater || false, set: undefined });
obj.getCrashReporterMetadata = function getCrashReporterMetadata() {
  const crashReporter = DiscordNative.crashReporter;
  return crashReporter.getMetadata();
};
obj.getSetting = function getSetting(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return callback2(function*() {
    const settings = outer1_6.settings;
    yield settings.get(c0, c1);
    return arg1;
  })();
};
obj.beforeUnload = function beforeUnload() {
  const self = this;
  try {
    const requireModuleResult = self.requireModule("discord_overlay2");
    let reset = requireModuleResult;
    if (requireModuleResult) {
      reset = requireModuleResult.reset;
    }
    if (reset) {
      requireModuleResult.reset();
    }
    let destroyHostProcess = requireModuleResult;
    if (requireModuleResult) {
      destroyHostProcess = requireModuleResult.disconnectAllProcesses;
    }
    if (destroyHostProcess) {
      destroyHostProcess = requireModuleResult.destroyHostProcess;
    }
    if (destroyHostProcess) {
      const result = requireModuleResult.disconnectAllProcesses();
      requireModuleResult.destroyHostProcess();
    }
    const powerMonitor = DiscordNative.powerMonitor;
    powerMonitor.removeAllListeners();
    const _window = window;
    const _window2 = window;
    let supportsFeatureResult = window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
    if (supportsFeatureResult) {
      const Storage = Storage.Storage;
      supportsFeatureResult = true !== Storage.get(DomainMigrationEventType.DOMAIN_MIGRATION_SUCCESS_KEY);
    }
    if (supportsFeatureResult) {
      supportsFeatureResult = self.supportsFeature(NativeFeatures.USER_DATA_CACHE);
    }
    if (supportsFeatureResult) {
      const userDataCache = DiscordNative.userDataCache;
      const Storage2 = Storage.Storage;
      userDataCache.cacheUserData(Storage2.stringify());
    }
  } catch (err) {
  }
};
obj.inputEventRegister = function inputEventRegister(parsed, arr, arg2, arg3) {
  const discordUtils = this.getDiscordUtils();
  parsed = parseInt("" + parsed);
  discordUtils.inputEventRegister(parsed, arr.map((arg0) => {
    let tmp;
    let tmp2;
    let tmp3;
    [tmp, tmp2, tmp3] = arg0;
    if (typeof tmp3 === "string") {
      const items = [tmp, tmp2, tmp3];
      let items1 = items;
    } else {
      items1 = [tmp, tmp2];
    }
    return items1;
  }), arg2, arg3);
};
obj.inputEventUnregister = function inputEventUnregister(joined) {
  const discordUtils = this.getDiscordUtils();
  discordUtils.inputEventUnregister(parseInt(joined));
};
obj.setOnInputEventCallback = function setOnInputEventCallback(arg0) {
  if (set.isPlatformEmbedded) {
    const self = this;
    const discordUtils = this.getDiscordUtils();
    discordUtils.inputWatchAll(arg0);
  }
};
obj.setFocused = function setFocused(arg0) {
  const discordUtils = this.getDiscordUtils();
  discordUtils.inputSetFocused(arg0);
};
obj.setObservedGamesCallback = function setObservedGamesCallback(mapped, normalizeCallback) {
  let closure_0 = arg2;
  try {
    const self = this;
    let closure_13 = {};
    let c1 = 0;
    const discordUtils = this.getDiscordUtils();
    mapped = mapped.map((id) => {
      const sum = c1 + 1;
      c1 = sum;
      if (null != id.id) {
        closure_13[sum] = id.id;
      }
      const obj = {};
      const merged = Object.assign(id);
      obj.cmdline = id.cmdLine;
      obj.id = sum;
      return obj;
    });
    let closure_2 = closure_13;
    let tmp6 = null != arg3;
    if (tmp6) {
      tmp6 = null != discordUtils.setProcessObserverUserId;
    }
    if (tmp6) {
      const result = discordUtils.setProcessObserverUserId(arg3);
    }
    normalizeCallback = function normalizeCallback(arr) {
      return callback(arr.map((arg0) => outer1_30(arg0, closure_2)));
    };
    if (normalizeCallback) {
      if (null != discordUtils.setObservedGamesCallback2) {
        const result1 = discordUtils.setObservedGamesCallback2(mapped, normalizeCallback);
      }
    }
    const result2 = discordUtils.setObservedGamesCallback(mapped, normalizeCallback);
  } catch (err) {
  }
};
obj.setProcessObserverCollectExecutableFingerprint = function setProcessObserverCollectExecutableFingerprint(arg0) {
  const discordUtils = this.getDiscordUtils();
  const setProcessObserverCollectExecutableFingerprint = discordUtils.setProcessObserverCollectExecutableFingerprint;
  if (setProcessObserverCollectExecutableFingerprint != null) {
    const result = setProcessObserverCollectExecutableFingerprint(arg0);
  }
};
obj.getExecutableFingerprintForProcess = function getExecutableFingerprintForProcess(arg0) {
  const self = this;
  let closure_0 = arg0;
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const discordUtils = self.getDiscordUtils();
    let prop;
    if (discordUtils != null) {
      prop = discordUtils.getExecutableFingerprintForProcess;
    }
    if (null != prop) {
      prop(closure_0, (arg0) => {
        let tmp2 = null;
        if (null != arg0) {
          tmp2 = null;
          if ("" !== arg0) {
            tmp2 = arg0;
          }
        }
        return closure_0(tmp2);
      });
    } else {
      arg0(null);
    }
  });
};
obj.setGameDetectionCallback = function setGameDetectionCallback(arg0) {
  let closure_0 = arg0;
  const discordUtils = this.getDiscordUtils();
  if (discordUtils.setGameDetectionCallback != null) {
    const result = setGameDetectionCallback((arr, arr2) => {
      const mapped = arr.map((arg0) => callback(arg0));
      return callback(mapped, arr2.map((arg0) => callback(arg0)));
    });
  }
};
obj.setGameDetectionErrorCallback = function setGameDetectionErrorCallback(arg0) {
  const discordUtils = this.getDiscordUtils();
  if (discordUtils.setGameDetectionErrorCallback != null) {
    const result = setGameDetectionErrorCallback(arg0);
  }
};
obj.setRobloxSubgameDetectionConfig = function setRobloxSubgameDetectionConfig(arg0, arg1) {
  const discordUtils = this.getDiscordUtils();
  const setRobloxSubgameDetectionConfig = discordUtils.setRobloxSubgameDetectionConfig;
  if (setRobloxSubgameDetectionConfig != null) {
    const result = setRobloxSubgameDetectionConfig(arg0, arg1);
  }
};
obj.checkForRobloxSubgameUpdate = function checkForRobloxSubgameUpdate() {
  const discordUtils = this.getDiscordUtils();
  const checkForRobloxSubgameUpdate = discordUtils.checkForRobloxSubgameUpdate;
  if (checkForRobloxSubgameUpdate != null) {
    const result = checkForRobloxSubgameUpdate();
  }
};
obj.setCandidateGamesCallback = function setCandidateGamesCallback(arg0) {
  let closure_0 = arg0;
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setCandidateGamesCallback((arr) => {
    callback(arr.map((arg0) => callback(arg0)));
  });
};
obj.clearCandidateGamesCallback = function clearCandidateGamesCallback() {
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.clearCandidateGamesCallback();
};
obj.setGameCandidateOverrides = function setGameCandidateOverrides(arr) {
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setGameCandidateOverrides(arr.map((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    ({ id: obj.gameId, name: obj.gameName } = arg0);
    return obj;
  }));
};
obj.setObserverDebugCallback = function setObserverDebugCallback(arg0, NONE, arg2) {
  let closure_0 = arg0;
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setObserverDebugCallback((arg0) => callback(arg0), NONE, arg2);
};
obj.clearObserverDebugCallback = function clearObserverDebugCallback() {
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setObserverDebugCallback(null, GameTheme.GameDetectionDebugLevel.NONE, 0);
};
obj.shouldDisplayNotifications = function shouldDisplayNotifications() {
  const discordUtils = this.getDiscordUtils();
  return discordUtils.shouldDisplayNotifications();
};
obj.getVoiceEngine = function getVoiceEngine() {
  const requireModuleResult = this.requireModule("discord_voice");
  const require = requireModuleResult;
  if (!c16) {
    log.setNativeLogFn((arg0, arg1, arg2) => {
      closure_0.consoleLog(arg1, "[" + arg0 + "] " + arg2);
    });
    const obj = log;
  }
  c16 = true;
  return requireModuleResult;
};
obj.getDiscordUtils = function getDiscordUtils() {
  const self = this;
  if (!c16) {
    try {
      const voiceEngine = self.getVoiceEngine();
    } catch (err) {
    }
  }
  return self.requireModule("discord_utils");
};
obj.isSystemDarkMode = function isSystemDarkMode() {
  let isWindowsResult = set.isWindows();
  if (isWindowsResult) {
    const self = this;
    const discordUtils = this.getDiscordUtils();
    const isSystemDarkMode = discordUtils.isSystemDarkMode;
    let flag;
    if (isSystemDarkMode != null) {
      flag = isSystemDarkMode();
    }
    if (flag == null) {
      flag = true;
    }
    isWindowsResult = flag;
  }
  return isWindowsResult;
};
obj.getDiscordIsElevated = function getDiscordIsElevated() {
  let tmp = null;
  if (obj.isWindows()) {
    const self = this;
    tmp = null;
    if (null != this.getDiscordUtils().getDiscordIsElevated) {
      let tmp2 = discordIsElevated;
      if (null === discordIsElevated) {
        const discordUtils = self.getDiscordUtils();
        discordIsElevated = discordUtils.getDiscordIsElevated();
        tmp2 = discordIsElevated;
      }
      tmp = tmp2;
    }
  }
  return tmp;
};
obj.getGameUtils = function getGameUtils() {
  return this.requireModule("discord_game_utils");
};
obj.getCloudSync = function getCloudSync() {
  return this.requireModule("discord_cloudsync");
};
obj.getDispatch = function getDispatch() {
  return this.requireModule("discord_dispatch");
};
obj.setBadge = function setBadge(arg0) {
  if ("darwin" === obj.getPlatformName()) {
    let str2 = "\u2022";
    if (-1 !== arg0) {
      str2 = "";
      if (arg0 > 0) {
        const _HermesInternal = HermesInternal;
        str2 = "" + arg0;
      }
    }
    const dock = DiscordNative.app.dock;
    dock.setBadge(str2);
  } else {
    let tmpResult = tmp(500);
    if ("win32" === tmpResult.getPlatformName()) {
      const self = this;
      this.sendIPC(tmp(5392).IPCEvents.APP_BADGE_SET, arg0);
    } else {
      tmpResult = tmp(500);
      if ("linux" === tmpResult.getPlatformName()) {
        const app = DiscordNative.app;
        let num = 0;
        if (arg0 >= 0) {
          num = arg0;
        }
        app.setBadgeCount(num);
      }
    }
  }
};
obj.setSystemTrayIcon = function setSystemTrayIcon(arg0) {
  if (set.isPlatformEmbedded) {
    const self = this;
    this.sendIPC(IPCEvents.IPCEvents.SYSTEM_TRAY_SET_ICON, arg0);
  }
};
obj.setThumbarButtons = function setThumbarButtons(arg0, arg1) {
  if (set.isPlatformEmbedded) {
    const thumbar = DiscordNative.thumbar;
    if (thumbar != null) {
      const setThumbarButtons = thumbar.setThumbarButtons;
      if (setThumbarButtons != null) {
        const self = this;
        setThumbarButtons(arg0, this.isSystemDarkMode());
      }
    }
  }
};
obj.bounceDock = function bounceDock(arg0) {
  if (app(500).isPlatformEmbedded) {
    app = DiscordNative.app;
    if (null != app.dock) {
      let dock = app.dock;
      let closure_1 = dock.bounce(arg0);
      return callback2(function*() {
        if (c3 === 2) {
          c3 = 3;
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
                let closure_1 = tmp5;
                let dock = tmp2;
                dock = undefined;
                c2 = 1;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_1;
                return obj1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dock = arg1;
              dock = dock.dock;
              dock.cancelBounce(dock);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp11) {
            c3 = tmp;
            throw tmp11;
          }
        }
      });
    }
  }
};
obj.setSystemTrayApplications = function setSystemTrayApplications(arg0) {
  if (set.isPlatformEmbedded) {
    const self = this;
    this.sendIPC(IPCEvents.IPCEvents.SYSTEM_TRAY_SET_APPLICATIONS, arg0);
  }
};
Object.defineProperty(obj, "architecture", {
  get: () => {
    let str = "";
    if (set.isPlatformEmbedded) {
      str = DiscordNative.process.arch;
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(obj, "releaseChannel", {
  get: () => {
    let str = "";
    if (set.isPlatformEmbedded) {
      const app = DiscordNative.app;
      str = app.getReleaseChannel();
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(obj, "version", { get: () => closure_10, set: undefined });
Object.defineProperty(obj, "buildNumber", { get: () => closure_11, set: undefined });
Object.defineProperty(obj, "moduleVersions", { get: () => closure_12, set: undefined });
Object.defineProperty(obj, "parsedOSRelease", {
  get: () => {
    if (set.isPlatformEmbedded) {
      const parts = DiscordNative.os.release.split(".");
      let mapped = parts.map((joined) => parseInt(joined, 10));
      const str = DiscordNative.os.release;
    } else {
      mapped = [];
    }
    return mapped;
  },
  set: undefined
});
obj.copy = function copy(arg0) {
  if (set.isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    clipboard.copy(arg0);
  }
};
obj.copyImage = function copyImage(arg0, closure_1) {
  let closure_0 = arg0;
  return callback2(function*() {
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
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let combined = tmp5;
            let closure_1 = tmp2;
            let closure_0;
            closure_1 = undefined;
            combined = undefined;
            outer1_1(outer1_2[3])(outer1_0(outer1_2[5]).isPlatformEmbedded, "Copy image method called outside native app");
            outer1_1(outer1_2[3])(typeof outer1_6.clipboard.copyImage === "function", "Copy image not supported");
            c3 = 1;
            c4 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_28(outer1_0);
            return obj1;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            closure_1 = outer1_0(outer1_2[11]).decideFileExtension(outer1_0, outer1_1);
            if (null != closure_1) {
              if (outer1_8.has(closure_1)) {
                closure_0 = outer1_1;
                if (outer1_1 == null) {
                  const _HermesInternal2 = HermesInternal;
                  closure_0 = "image/" + outer1_1;
                }
                c3 = 2;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = (function transcodeImageToPng(arg0, closure_0) {
                  const self = this;
                  const apply = closure_29.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_0, closure_0);
                return obj3;
              }
            }
            if (null == closure_1) {
              combined = closure_0;
              const clipboard2 = outer1_6.clipboard;
              const _Buffer2 = Buffer;
              clipboard2.copyImage(Buffer.from(closure_0), combined);
              c4 = 3;
            }
            const _HermesInternal = HermesInternal;
            combined = "image." + closure_1;
            const obj8 = outer1_0(outer1_2[11]);
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          closure_0 = arg1;
          const clipboard = outer1_6.clipboard;
          const _Buffer = Buffer;
          clipboard.copyImage(Buffer.from(closure_0), "image.png");
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = undefined;
          return obj;
        }
      } catch (tmp42) {
        c4 = tmp;
        throw tmp42;
      }
    }
  })();
};
obj.copyImageBlob = function copyImageBlob(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
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
            let closure_1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0.arrayBuffer();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          const clipboard = outer1_6.clipboard;
          const _Buffer = Buffer;
          clipboard.copyImage(Buffer.from(closure_0), closure_1);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  })();
};
obj.canSaveImage = function canSaveImage(outer1_0, contentType) {
  if (null != outer1_0) {
    if (set.isPlatformEmbedded) {
      const decideFileExtensionResult = tmp(5393).decideFileExtension(outer1_0, contentType);
      let hasItem = null == decideFileExtensionResult;
      if (!hasItem) {
        hasItem = set2.has(decideFileExtensionResult);
      }
      return hasItem;
    }
    tmp = require;
  }
  return false;
};
obj.saveImage = function saveImage(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return callback2(function*() {
    if (c10 === 2) {
      c10 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
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
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c10 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_6 = tmp3;
            let c5 = tmp5;
            let closure_0;
            let closure_1;
            let directory;
            let c3;
            let c4;
            c5 = undefined;
            outer1_1(outer1_2[3])(outer1_0(outer1_2[5]).isPlatformEmbedded, "Save image method called outside native app");
            const tmp85 = outer1_1(outer1_2[3]);
            let tmp54 = outer1_0;
            const toURLSafeResult = outer1_1(outer1_2[12]).toURLSafe(outer1_0);
            if (null == toURLSafeResult) {
              c10 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = outer1_24.ERRORED;
              return obj1;
            } else {
              const parts = toURLSafeResult.pathname.split("/");
              const arr = parts.pop();
              closure_0 = arr;
              if (arr == null) {
                closure_0 = "unknown";
              }
              const str = outer1_25(closure_0);
              closure_0 = str;
              const searchParams = toURLSafeResult.searchParams;
              let str2 = searchParams.get("format");
              if (null != str2) {
                str2 = str2.replace(outer1_22, "").toLowerCase();
                if (str2.length > 0) {
                  const _HermesInternal2 = HermesInternal;
                  closure_0 = "" + str.replace(outer1_23, "") + "." + str2;
                }
                const str3 = str2.replace(outer1_22, "");
              } else if (!str.includes(".")) {
                let obj8 = outer1_0(outer1_2[11]);
                const decideFileExtensionResult = obj8.decideFileExtension(tmp54, outer1_1);
                directory = decideFileExtensionResult;
                if (decideFileExtensionResult == null) {
                  directory = outer1_2;
                }
                closure_1 = directory;
                if (directory == null) {
                  closure_1 = "png";
                }
                const _HermesInternal = HermesInternal;
                closure_0 = "" + str + "." + closure_1;
              }
              tmp54 = outer1_28(tmp54);
              c9 = 1;
              c10 = 1;
              const str12 = toURLSafeResult.pathname;
            }
            const obj13 = outer1_1(outer1_2[12]);
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c10 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            const outer1_3 = arg1;
            const _Buffer = Buffer;
            const outer1_4 = Buffer.from(outer1_3);
            const Storage2 = outer1_0(outer1_2[6]).Storage;
            let outer1_5 = Storage2.get(outer1_18);
            if (typeof outer1_5 !== "string") {
              outer1_5 = undefined;
            }
            if (typeof outer1_6.fileManager.saveWithDialog2 === "function") {
              const fileManager = outer1_6.fileManager;
              c3 = outer1_5;
              if (outer1_5 == null) {
                c3 = undefined;
              }
              c9 = 3;
              c10 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = fileManager.saveWithDialog2(outer1_4, outer1_0, c3);
              return obj3;
            } else {
              let c8 = 1;
              const fileManager2 = outer1_6.fileManager;
              c4 = outer1_5;
              if (outer1_5 == null) {
                c4 = undefined;
              }
              c9 = 4;
              c10 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = fileManager2.saveWithDialog(outer1_4, outer1_0, c4);
              return obj4;
            }
          }
        } else if (2 === tmp8) {
          c8 = 0;
          c10 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = outer1_24.ERRORED;
          return obj5;
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c10 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              closure_1 = arg1;
              if (null == arg1) {
                c10 = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = outer1_24.ERRORED;
                return obj7;
              } else if (closure_1.canceledByUser) {
                c10 = 3;
                obj8 = { value: null, done: true };
                obj8[0] = outer1_24.CANCELED;
                return obj8;
              } else {
                directory = closure_1.directory;
              }
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            directory = arg1;
            c8 = 0;
          }
          if (null != directory) {
            if ("" !== directory) {
              const Storage = outer1_0(outer1_2[6]).Storage;
              const result = Storage.set(outer1_18, directory);
              const SAVED = outer1_24.SAVED;
            }
            c10 = 3;
          }
          const ERRORED = outer1_24.ERRORED;
        }
      } catch (tmp56) {
        let closure_7 = tmp56;
        if (tmp4 === c8) {
          c10 = tmp2;
          throw tmp56;
        } else {
          c9 = tmp;
        }
      }
    }
  })();
};
obj.saveFile = function saveFile(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return callback2(function*() {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let _slicedToArray = tmp2;
            let closure_2 = tmp3;
            let closure_0;
            let closure_1;
            closure_2 = undefined;
            _slicedToArray = undefined;
            outer1_1(outer1_2[3])(outer1_0(outer1_2[5]).isPlatformEmbedded, "Save file method called outside native app");
            const tmp30 = outer1_1(outer1_2[3]);
            const toURLSafeResult = outer1_1(outer1_2[12]).toURLSafe(outer1_0);
            if (null == toURLSafeResult) {
              c5 = 3;
              return { value: null, done: true };
            } else {
              closure_1 = outer1_1;
              if (outer1_1 == null) {
                const parts = toURLSafeResult.pathname.split("/");
                closure_1 = parts.pop();
                const str = toURLSafeResult.pathname;
              }
              closure_0 = closure_1;
              if (closure_1 == null) {
                closure_0 = "unknown";
              }
              if (null == outer1_1) {
                closure_0 = outer1_25(tmp19);
              }
              c4 = 1;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_26(tmp33);
              return obj1;
            }
            const obj8 = outer1_1(outer1_2[12]);
            tmp33 = outer1_0;
          }
        } else if (1 === tmp6) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_1 = arg1;
            const _Buffer = Buffer;
            closure_2 = Buffer.from(closure_1);
            const fileManager = outer1_6.fileManager;
            c4 = 2;
            c5 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = fileManager.saveWithDialog(closure_2, closure_0, undefined);
            return obj3;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          _slicedToArray = arg1;
          let tmp9 = null;
          if (null != _slicedToArray) {
            tmp9 = _slicedToArray;
          }
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = tmp9;
          return obj;
        }
      } catch (tmp22) {
        c5 = tmp;
        throw tmp22;
      }
    }
  })();
};
obj.downloadMLModelFile = function downloadMLModelFile(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return callback2(function*() {
    v02(outer1_2[3])(v0(outer1_2[5]).isPlatformEmbedded, "Download ML model file method called outside native app");
    const tmp13 = v02(outer1_2[3]);
    const obj6 = v02(outer1_2[12]);
    v02(outer1_2[3])(null != v02(outer1_2[12]).toURLSafe(v0), "Could not download ML model, fileSrc was not a valid path");
    const fileManager = outer1_6.fileManager;
    yield fileManager.maybeDownloadMLModelFile(v0, v02, outer1_2);
    return arg1;
  })();
};
obj.stopMLModelDownloads = function stopMLModelDownloads() {
  const fileManager = DiscordNative.fileManager;
  fileManager.stopMLModelDownloads();
};
obj.canCheckMLModelFilesExist = function canCheckMLModelFilesExist() {
  return typeof DiscordNative.fileManager.checkMLModelFilesExist === "function";
};
obj.checkMLModelFilesExist = function checkMLModelFilesExist(c0) {
  let closure_0 = c0;
  return callback2(function*() {
    const fileManager = outer1_6.fileManager;
    yield fileManager.checkMLModelFilesExist(c0);
    return arg1;
  })();
};
obj.cleanupUnusedMLModelFiles = function cleanupUnusedMLModelFiles(c0) {
  let closure_0 = c0;
  return callback2(function*() {
    const fileManager = outer1_6.fileManager;
    yield fileManager.cleanupUnusedMLModelFiles(c0);
    return arg1;
  })();
};
obj.downloadClipsFile = function downloadClipsFile(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  return callback2(function*() {
    v02(outer1_2[3])(v0(outer1_2[5]).isPlatformEmbedded, "Download clips file method called outside native app");
    const tmp13 = v02(outer1_2[3]);
    const obj6 = v02(outer1_2[12]);
    v02(outer1_2[3])(null != v02(outer1_2[12]).toURLSafe(v0), "Could not download clips file, fileSrc was not a valid path");
    const fileManager = outer1_6.fileManager;
    yield fileManager.maybeDownloadClipsFile(v0, v02, outer1_2);
    return arg1;
  })();
};
obj.canCheckClipsFilesExist = function canCheckClipsFilesExist() {
  return typeof DiscordNative.fileManager.checkClipsFilesExist === "function";
};
obj.checkClipsFilesExist = function checkClipsFilesExist(c0) {
  let closure_0 = c0;
  return callback2(function*() {
    const fileManager = outer1_6.fileManager;
    yield fileManager.checkClipsFilesExist(c0);
    return arg1;
  })();
};
obj.cleanupUnusedClipsFiles = function cleanupUnusedClipsFiles(c0) {
  let closure_0 = c0;
  return callback2(function*() {
    const fileManager = outer1_6.fileManager;
    yield fileManager.cleanupUnusedClipsFiles(c0);
    return arg1;
  })();
};
obj.getClipsDataDirSync = function getClipsDataDirSync() {
  const fileManager = DiscordNative.fileManager;
  return fileManager.getClipsDataDirSync();
};
obj.getClipsSentryDirSync = function getClipsSentryDirSync() {
  if (null != DiscordNative.fileManager.getClipsSentryDirSync) {
    const fileManager = DiscordNative.fileManager;
    return fileManager.getClipsSentryDirSync();
  }
};
obj.downloadOpenH264 = function downloadOpenH264(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let _slicedToArray = arg3;
  return callback2(function*() {
    v02(outer1_2[3])(v0(outer1_2[5]).isPlatformEmbedded, "Download OpenH264 file method called outside native app");
    const tmp13 = v02(outer1_2[3]);
    const obj6 = v02(outer1_2[12]);
    v02(outer1_2[3])(null != v02(outer1_2[12]).toURLSafe(v0), "Could not download OpenH264, fileSrc was not a valid path");
    const fileManager = outer1_6.fileManager;
    yield fileManager.maybeDownloadOpenH264(v0, v02, outer1_2, outer1_3);
    return arg1;
  })();
};
obj.cleanupUnusedOpenH264Files = function cleanupUnusedOpenH264Files(c0) {
  let closure_0 = c0;
  return callback2(function*() {
    const fileManager = outer1_6.fileManager;
    yield fileManager.cleanupUnusedOpenH264Files(c0);
    return arg1;
  })();
};
obj.getOpenH264LibraryPath = function getOpenH264LibraryPath() {
  if (set.isPlatformEmbedded) {
    const fileManager = DiscordNative.fileManager;
    const getOpenH264LibraryPathSync = fileManager.getOpenH264LibraryPathSync;
    let openH264LibraryPathSync;
    if (getOpenH264LibraryPathSync != null) {
      openH264LibraryPathSync = getOpenH264LibraryPathSync();
    }
    return openH264LibraryPathSync;
  }
};
obj.canCopyImage = function canCopyImage(outer1_0) {
  if (set.isPlatformEmbedded) {
    if (typeof DiscordNative.clipboard.copyImage !== "function") {
      return false;
    } else {
      if (null != tmp) {
        const decideFileExtensionResult = tmp2(5393).decideFileExtension(tmp, undefined);
        if (null != decideFileExtensionResult) {
          if (!set.has(decideFileExtensionResult)) {
            if (!set1.has(decideFileExtensionResult)) {
              return false;
            }
          }
        }
        const tmp2Result = tmp2(5393);
      }
      return true;
    }
  } else {
    return false;
  }
  tmp2 = require;
};
obj.cut = function cut() {
  if (set.isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    clipboard.cut();
  }
};
obj.paste = function paste() {
  if (set.isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    clipboard.paste();
  }
};
obj.readClipboard = function readClipboard() {
  let str = "";
  if (set.isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    str = clipboard.read();
  }
  return str;
};
obj.clipboardHasMixedContent = function clipboardHasMixedContent() {
  let isPlatformEmbedded = set.isPlatformEmbedded;
  if (isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    const hasMixedContent = clipboard.hasMixedContent;
    let flag;
    if (hasMixedContent != null) {
      flag = hasMixedContent();
    }
    if (flag == null) {
      flag = false;
    }
    isPlatformEmbedded = flag;
  }
  return isPlatformEmbedded;
};
obj.on = function on(arg0, arg1) {
  const ipc = DiscordNative.ipc;
  ipc.on(arg0, arg1);
};
obj.onIPC = function onIPC(arg0, arg1) {
  const ipc = DiscordNative.ipc;
  ipc.on(arg0, arg1);
};
obj.invoke = function invoke(arg0) {
  const ipc = DiscordNative.ipc;
  const items = [arg0, ...HermesBuiltin.copyRestArgs()];
  return ipc.invoke.apply(items);
};
obj.invokeIPC = function invokeIPC(arg0) {
  const ipc = DiscordNative.ipc;
  const items = [arg0, ...HermesBuiltin.copyRestArgs()];
  return ipc.invoke.apply(items);
};
obj.send = function send(arg0) {
  const ipc = DiscordNative.ipc;
  const items = [arg0, ...HermesBuiltin.copyRestArgs()];
  ipc.send.apply(items);
};
obj.sendIPC = function sendIPC(APP_BADGE_SET, arg1) {
  const ipc = DiscordNative.ipc;
  const items = [APP_BADGE_SET, ...HermesBuiltin.copyRestArgs()];
  ipc.send.apply(items);
};
obj.isIPCReady = function isIPCReady() {
  if (set.isPlatformEmbedded) {
    try {
      let ipc;
      if (DiscordNative != null) {
        ipc = tmp.ipc;
      }
      let tmp4 = null != ipc;
      if (tmp4) {
        tmp4 = typeof tmp.ipc.send === "function";
      }
      return tmp4;
    } catch (err) {
      return false;
    }
  } else {
    return true;
  }
};
obj.waitForIPCReady = function waitForIPCReady() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 5000;
  }
  let _window = arg1;
  if (arg1 === undefined) {
    _window = window;
  }
  const self = this;
  return callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === iPCReady) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c1 = 1;
            let timestamp = tmp2;
            timestamp = undefined;
            const _Date2 = Date;
            timestamp = Date.now();
            const _Date3 = Date;
            if (Date.now() - timestamp < outer1_0) {
              if (iPCReady.isIPCReady()) {
                c3 = 3;
                return { value: true, done: true };
              } else {
                const promise = new Promise((scrollAnimation) => c1.requestAnimationFrame(scrollAnimation));
                iPCReady = 1;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = promise;
                return obj1;
              }
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          const _Date = Date;
        }
        c3 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
  })();
};
obj.flashFrame = function flashFrame(arg0) {
  const _window = DiscordNative.window;
  _window.flashFrame(arg0);
};
obj.webAuthnRegister = function webAuthnRegister(closure_0) {
  return callback2(function*() {
    const nativeModules = outer1_6.nativeModules;
    yield nativeModules.ensureModule("discord_webauthn");
    const webAuthn = outer1_6.webAuthn;
    yield webAuthn.webAuthnRegister(closure_0);
    return arg1;
  })();
};
obj.webAuthnAuthenticate = function webAuthnAuthenticate(closure_0) {
  return callback2(function*() {
    const nativeModules = outer1_6.nativeModules;
    yield nativeModules.ensureModule("discord_webauthn");
    const webAuthn = outer1_6.webAuthn;
    yield webAuthn.webAuthnAuthenticate(closure_0);
    return arg1;
  })();
};
obj.minimize = function minimize(arg0) {
  const _window = DiscordNative.window;
  _window.minimize(arg0);
};
obj.restore = function restore(arg0) {
  const _window = DiscordNative.window;
  _window.restore(arg0);
};
obj.maximize = function maximize(arg0) {
  const _window = DiscordNative.window;
  _window.maximize(arg0);
};
obj.focus = function focus(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let isWindowsResult = flag;
  if (flag) {
    isWindowsResult = set.isWindows();
    const obj = set;
  }
  if (isWindowsResult) {
    const self = this;
    this.minimize(null);
  }
  const _window = DiscordNative.window;
  _window.focus(flag, arg0);
};
obj.blur = function blur() {
  if (set.isPlatformEmbedded) {
    if (null != DiscordNative.window.blur) {
      const _window = DiscordNative.window;
      _window.blur();
    }
  }
  window.blur();
};
obj.fullscreen = function fullscreen(arg0) {
  const _window = DiscordNative.window;
  _window.fullscreen(arg0);
};
obj.close = function close(arg0) {
  const _window = DiscordNative.window;
  _window.close(arg0);
};
obj.clearNavigationHistory = function clearNavigationHistory() {
  backwardCompatSend(IPCEvents.IPCEvents.NAVIGATION_HISTORY_CLEAR);
};
obj.setAlwaysOnTop = function setAlwaysOnTop(arg0, arg1) {
  if (typeof DiscordNative.window.setAlwaysOnTop === "function") {
    const _window = tmp.window;
    _window.setAlwaysOnTop(arg0, arg1);
  }
};
obj.isAlwaysOnTop = function isAlwaysOnTop(outer1_0) {
  let closure_0 = outer1_0;
  return callback2(function*() {
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp2;
            closure_0 = false;
            if (typeof outer1_6.window.isAlwaysOnTop === "function") {
              const _window = outer1_6.window;
              c1 = 1;
              c2 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = _window.isAlwaysOnTop(outer1_0);
              return obj1;
            } else {
              c2 = 3;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1;
        }
        c2 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp10) {
        c2 = tmp;
        throw tmp10;
      }
    }
  })();
};
obj.showInactive = function showInactive(arg0) {
  let showInactive;
  if (DiscordNative != null) {
    const _window = tmp.window;
    if (_window != null) {
      showInactive = _window.showInactive;
    }
  }
  if (typeof showInactive === "function") {
    const _window2 = tmp.window;
    _window2.showInactive(arg0);
  }
};
obj.setMinimumSize = function setMinimumSize(arg0, arg1) {
  if (DiscordNative != null) {
    const _window = DiscordNative.window;
    if (_window != null) {
      const setMinimumSize = _window.setMinimumSize;
      if (setMinimumSize != null) {
        setMinimumSize(arg0, arg1);
      }
    }
  }
};
obj.setTrafficLightPosition = function setTrafficLightPosition(arg0) {
  if (set.isPlatformEmbedded) {
    if ("darwin" === tmpResult.getPlatformName()) {
      try {
        const self = this;
        this.sendIPC(tmp(5392).IPCEvents.WINDOW_SET_TRAFFIC_LIGHT_POSITION, arg0);
      } catch (err) {
      }
    }
    tmpResult = tmp(500);
  }
};
obj.purgeMemory = function purgeMemory() {
  if (set.isPlatformEmbedded) {
    const processUtils = DiscordNative.processUtils;
    processUtils.purgeMemory();
  }
};
obj.updateCrashReporter = function updateCrashReporter(arg0) {
  const crashReporter = DiscordNative.crashReporter;
  crashReporter.updateCrashReporter(arg0);
};
obj.triggerJSException = function triggerJSException(arg0) {
  const crashReporter = DiscordNative.crashReporter;
  crashReporter.triggerJSException(arg0);
};
obj.flushDNSCache = function flushDNSCache() {
  if (set.isPlatformEmbedded) {
    const processUtils = DiscordNative.processUtils;
    processUtils.flushDNSCache();
  }
};
obj.supportsFeature = function supportsFeature(arg0) {
  const features = DiscordNative.features;
  return features.supports(arg0);
};
obj.getEnableHardwareAcceleration = function getEnableHardwareAcceleration() {
  const isPlatformEmbedded = set.isPlatformEmbedded;
  let enableHardwareAcceleration = !isPlatformEmbedded;
  if (isPlatformEmbedded) {
    const gpuSettings = DiscordNative.gpuSettings;
    enableHardwareAcceleration = gpuSettings.getEnableHardwareAcceleration();
  }
  return enableHardwareAcceleration;
};
obj.setEnableHardwareAcceleration = function setEnableHardwareAcceleration(arg0) {
  const gpuSettings = DiscordNative.gpuSettings;
  const result = gpuSettings.setEnableHardwareAcceleration(arg0);
};
obj.setOpenH264Enabled = function setOpenH264Enabled(arg0) {
  if (DiscordNative != null) {
    const settings = DiscordNative.settings;
    if (settings != null) {
      if (settings.set != null) {
        const result = set("openH264Enabled", arg0);
      }
    }
  }
};
obj.setChromiumSwitches = function setChromiumSwitches(arg0) {
  const gpuSettings = DiscordNative.gpuSettings;
  gpuSettings.setChromiumSwitches(arg0);
};
obj.getOpenOnStart = function getOpenOnStart() {
  return callback2(function*() {
    const app = outer1_6.app;
    const getOpenOnStart = app.getOpenOnStart;
    if (getOpenOnStart != null) {
      const openOnStart = getOpenOnStart();
    }
    yield openOnStart;
    if (1 === tmp4) {
      if (arg0 === 1) {
        let c3 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj2 = { value: null, done: true };
        obj2[0] = arg1;
        return obj2;
      } else {
        let closure_0 = arg1;
      }
    } else if (arg0 === 1) {
      c3 = 3;
      throw arg1;
    } else if (arg0 === 2) {
      c3 = 3;
      const obj3 = { value: null, done: true };
      obj3[0] = arg1;
      return obj3;
    } else {
      closure_0 = arg1;
      if (arg1 == null) {
        settings = settings.settings;
        let c2 = 1;
        c3 = 1;
        const obj = { value: null, done: false };
        obj[0] = settings.get("OPEN_ON_STARTUP", true);
        return obj;
      }
    }
    return closure_0;
  })();
};
obj.getGPUDriverVersions = function getGPUDriverVersions() {
  if (obj.isWindows()) {
    const self = this;
    if (null != this.getDiscordUtils().getGPUDriverVersions) {
      const discordUtils = self.getDiscordUtils();
      let gPUDriverVersions = discordUtils.getGPUDriverVersions();
    }
    return gPUDriverVersions;
  }
  gPUDriverVersions = Promise.resolve(Object.freeze({}));
};
obj.setZoomFactor = function setZoomFactor(arg0) {
  let flag = set.isPlatformEmbedded;
  if (flag) {
    const _window = DiscordNative.window;
    _window.setZoomFactor(arg0);
    flag = true;
  }
  return flag;
};
obj.setBackgroundThrottling = function setBackgroundThrottling(arg0) {
  if (null != DiscordNative.window.setBackgroundThrottling) {
    const _window = tmp.window;
    const result = _window.setBackgroundThrottling(arg0);
  } else {
    const webContents = tmp.window.webContents;
    const result1 = webContents.setBackgroundThrottling(arg0);
  }
};
obj.setFocusable = function setFocusable(arg0, arg1) {
  if (typeof DiscordNative.window.setFocusable === "function") {
    const _window = tmp.window;
    _window.setFocusable(arg0, arg1);
  }
};
obj.pauseFrameEvictor = function pauseFrameEvictor() {
  const app = DiscordNative.app;
  const pauseFrameEvictor = app.pauseFrameEvictor;
  if (pauseFrameEvictor != null) {
    pauseFrameEvictor();
  }
};
obj.unpauseFrameEvictor = function unpauseFrameEvictor() {
  const app = DiscordNative.app;
  const unpauseFrameEvictor = app.unpauseFrameEvictor;
  if (unpauseFrameEvictor != null) {
    unpauseFrameEvictor();
  }
};
obj.getPreferredSystemLanguages = function getPreferredSystemLanguages() {
  const app = DiscordNative.app;
  const getPreferredSystemLanguages = app.getPreferredSystemLanguages;
  let preferredSystemLanguages;
  if (getPreferredSystemLanguages != null) {
    preferredSystemLanguages = getPreferredSystemLanguages();
  }
  return preferredSystemLanguages;
};
obj.getSystemUIDirection = function getSystemUIDirection() {
  const app = DiscordNative.app;
  const getSystemUIDirection = app.getSystemUIDirection;
  let systemUIDirection;
  if (getSystemUIDirection != null) {
    systemUIDirection = getSystemUIDirection();
  }
  return systemUIDirection;
};
obj.getPidFromDesktopSource = function getPidFromDesktopSource(str) {
  if (obj.isDesktop()) {
    const self = this;
    if (null != this.getDiscordUtils().getPidFromWindowHandle) {
      let parts;
      if (str != null) {
        parts = str.split(":");
      }
      let first;
      if (parts != null) {
        first = parts[0];
      }
      if ("window" === first) {
        let str5;
        if (parts != null) {
          str5 = parts[1];
        }
        if (str5 == null) {
          str5 = "";
        }
        const discordUtils = self.getDiscordUtils();
        const pidFromWindowHandle = discordUtils.getPidFromWindowHandle(str5);
        let tmp6 = null;
        if (null != pidFromWindowHandle) {
          tmp6 = null;
          if (0 !== pidFromWindowHandle) {
            tmp6 = pidFromWindowHandle;
          }
        }
        return tmp6;
      } else {
        if (first.startsWith("screen")) {
          let tmp4 = 1;
        } else {
          tmp4 = null;
        }
        return tmp4;
      }
    }
  }
  return null;
};
obj.getDesktopSourceFromPid = function getDesktopSourceFromPid(arg0) {
  if (obj.isWindows()) {
    const self = this;
    if (null != this.getDiscordUtils().getWindowHandleFromPid) {
      if (null != arg0) {
        const discordUtils = self.getDiscordUtils();
        const windowHandleFromPid = discordUtils.getWindowHandleFromPid(arg0);
        let joined = null;
        if (null != windowHandleFromPid) {
          joined = null;
          if (0 !== windowHandleFromPid.length) {
            const items = ["window", windowHandleFromPid, "0"];
            joined = items.join(":");
          }
        }
        return joined;
      }
    }
  }
  return null;
};
obj.generateSessionFromPid = function generateSessionFromPid(arg0) {
  const discordUtils = this.getDiscordUtils();
  return discordUtils.generateSessionFromPid(arg0);
};
obj.getAudioPid = function getAudioPid(arg0) {
  const self = this;
  let audioPid = arg0;
  if (null != this.getDiscordUtils().getAudioPid) {
    audioPid = arg0;
    if (null != arg0) {
      const discordUtils = self.getDiscordUtils();
      audioPid = discordUtils.getAudioPid(arg0);
    }
  }
  return audioPid;
};
obj.setForegroundProcess = function setForegroundProcess(arg0) {
  const setForegroundProcess = this.getDiscordUtils().setForegroundProcess;
  try {
    let setForegroundProcessResult = null != setForegroundProcess;
    if (setForegroundProcessResult) {
      setForegroundProcessResult = setForegroundProcess(arg0);
    }
    return setForegroundProcessResult;
  } catch (err) {
    return false;
  }
};
obj.getDiscordMemoryUsage = function getDiscordMemoryUsage() {
  const getDiscordMemoryUsage = this.getDiscordUtils().getDiscordMemoryUsage;
  let discordMemoryUsage = null;
  if (null != getDiscordMemoryUsage) {
    discordMemoryUsage = getDiscordMemoryUsage();
  }
  return discordMemoryUsage;
};
obj.getDiscordMemoryUsageElectronRenderer = function getDiscordMemoryUsageElectronRenderer() {
  const getDiscordMemoryUsageElectronRenderer = this.getDiscordUtils().getDiscordMemoryUsageElectronRenderer;
  let discordMemoryUsageElectronRenderer;
  if (getDiscordMemoryUsageElectronRenderer != null) {
    discordMemoryUsageElectronRenderer = getDiscordMemoryUsageElectronRenderer();
  }
  return discordMemoryUsageElectronRenderer;
};
obj.getDiscordMemoryPrivateUsageElectronRenderer = function getDiscordMemoryPrivateUsageElectronRenderer() {
  const getDiscordMemoryPrivUsageElectronRenderer = this.getDiscordUtils().getDiscordMemoryPrivUsageElectronRenderer;
  let discordMemoryPrivUsageElectronRenderer;
  if (getDiscordMemoryPrivUsageElectronRenderer != null) {
    discordMemoryPrivUsageElectronRenderer = getDiscordMemoryPrivUsageElectronRenderer();
  }
  return discordMemoryPrivUsageElectronRenderer;
};
obj.getDiscordMemoryUsageElectronProcessTypeDetails = function getDiscordMemoryUsageElectronProcessTypeDetails() {
  const getDiscordMemoryUsageElectronProcessTypeDetails = this.getDiscordUtils().getDiscordMemoryUsageElectronProcessTypeDetails;
  let discordMemoryUsageElectronProcessTypeDetails;
  if (getDiscordMemoryUsageElectronProcessTypeDetails != null) {
    discordMemoryUsageElectronProcessTypeDetails = getDiscordMemoryUsageElectronProcessTypeDetails();
  }
  return discordMemoryUsageElectronProcessTypeDetails;
};
obj.enablePerfMemoryHooks = function enablePerfMemoryHooks(arg0) {
  const enablePerfMemoryHooks = this.getDiscordUtils().enablePerfMemoryHooks;
  let result;
  if (enablePerfMemoryHooks != null) {
    result = enablePerfMemoryHooks(arg0);
  }
  return result;
};
obj.disablePerfMemoryHooks = function disablePerfMemoryHooks() {
  const disablePerfMemoryHooks = this.getDiscordUtils().disablePerfMemoryHooks;
  let result;
  if (disablePerfMemoryHooks != null) {
    result = disablePerfMemoryHooks();
  }
  return result;
};
obj.getPerfAttributedMemory = function getPerfAttributedMemory() {
  const getPerfAttributedMemory = this.getDiscordUtils().getPerfAttributedMemory;
  let perfAttributedMemory;
  if (getPerfAttributedMemory != null) {
    perfAttributedMemory = getPerfAttributedMemory();
  }
  return perfAttributedMemory;
};
obj.getPerfAttributedMemoryCallstacks = function getPerfAttributedMemoryCallstacks(arg0) {
  const getPerfAttributedMemoryCallstacks = this.getDiscordUtils().getPerfAttributedMemoryCallstacks;
  let perfAttributedMemoryCallstacks;
  if (getPerfAttributedMemoryCallstacks != null) {
    perfAttributedMemoryCallstacks = getPerfAttributedMemoryCallstacks(arg0);
  }
  return perfAttributedMemoryCallstacks;
};
obj.getPerfAttributedMemoryStats = function getPerfAttributedMemoryStats() {
  const getPerfAttributedMemoryStats = this.getDiscordUtils().getPerfAttributedMemoryStats;
  let perfAttributedMemoryStats;
  if (getPerfAttributedMemoryStats != null) {
    perfAttributedMemoryStats = getPerfAttributedMemoryStats();
  }
  return perfAttributedMemoryStats;
};
obj.startCPUProfiling = function startCPUProfiling(arg0) {
  const startCPUProfiling = this.getDiscordUtils().startCPUProfiling;
  let startCPUProfilingResult;
  if (startCPUProfiling != null) {
    startCPUProfilingResult = startCPUProfiling(arg0);
  }
  return startCPUProfilingResult;
};
obj.stopCPUProfiling = function stopCPUProfiling() {
  const self = this;
  return callback2(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            closure_0 = undefined;
            const stopCPUProfiling = outer1_0.getDiscordUtils().stopCPUProfiling;
            let stopCPUProfilingResult;
            if (stopCPUProfiling != null) {
              stopCPUProfilingResult = stopCPUProfiling();
            }
            c1 = 1;
            c2 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = stopCPUProfilingResult;
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          if (null == closure_0) {
            const _Error = Error;
            const error = new Error("Failed to stop CPU profiling");
            Promise.reject(error);
          } else {
            const _JSON = JSON;
            const parsed = JSON.parse(closure_0);
          }
          c2 = 3;
        }
      } catch (tmp21) {
        c2 = tmp;
        throw tmp21;
      }
    }
  })();
};
obj.gzipAndBase64Encode = function gzipAndBase64Encode(arg0) {
  const gzipAndBase64Encode = this.getDiscordUtils().gzipAndBase64Encode;
  let gzipAndBase64EncodeResult;
  if (gzipAndBase64Encode != null) {
    gzipAndBase64EncodeResult = gzipAndBase64Encode(arg0);
  }
  if (gzipAndBase64EncodeResult == null) {
    gzipAndBase64EncodeResult = Promise.resolve(null);
  }
  return gzipAndBase64EncodeResult;
};
obj.showOpenDialog = function showOpenDialog(properties) {
  const fileManager = DiscordNative.fileManager;
  return fileManager.showOpenDialog({ properties });
};
obj.flushStorageData = function flushStorageData(arg0) {
  let _Promise = Promise;
  if (set.isPlatformEmbedded) {
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      if (null != closure_6.processUtils.flushStorageData) {
        const processUtils = closure_6.processUtils;
        processUtils.flushStorageData((arg0) => {
          if (null != arg0) {
            const _Error = Error;
            const error = new Error(arg0);
            let tmp2 = callback2(error);
          } else {
            tmp2 = callback();
          }
          return tmp2;
        });
      } else {
        arg0();
      }
    });
  } else {
    _Promise = _Promise.resolve();
  }
  return _Promise;
};
obj.flushCookies = function flushCookies() {
  let _Promise = Promise;
  if (set.isPlatformEmbedded) {
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      if (null != closure_6.processUtils.flushCookies) {
        const processUtils = closure_6.processUtils;
        processUtils.flushCookies((arg0) => {
          if (null != arg0) {
            const _Error = Error;
            const error = new Error(arg0);
            let tmp2 = callback2(error);
          } else {
            tmp2 = callback();
          }
          return tmp2;
        });
      } else {
        arg0();
      }
    });
  } else {
    _Promise = _Promise.resolve();
  }
  return _Promise;
};
obj.setCrashInformation = function setCrashInformation(arg0, arg1) {
  let isPlatformEmbedded = set.isPlatformEmbedded;
  if (isPlatformEmbedded) {
    let setCrashInformation;
    if (DiscordNative != null) {
      const processUtils = DiscordNative.processUtils;
      if (processUtils != null) {
        setCrashInformation = processUtils.setCrashInformation;
      }
    }
    isPlatformEmbedded = null != setCrashInformation;
  }
  if (isPlatformEmbedded) {
    const processUtils2 = DiscordNative.processUtils;
    processUtils2.setCrashInformation(arg0, arg1);
  }
};
obj.blockDisplaySleep = function blockDisplaySleep() {
  let blockDisplaySleepResult = null;
  if (set.isPlatformEmbedded) {
    blockDisplaySleepResult = null;
    if (null != DiscordNative.powerSaveBlocker) {
      const powerSaveBlocker = DiscordNative.powerSaveBlocker;
      blockDisplaySleepResult = powerSaveBlocker.blockDisplaySleep();
    }
  }
  return blockDisplaySleepResult;
};
obj.unblockDisplaySleep = function unblockDisplaySleep(arg0) {
  let isPlatformEmbedded = set.isPlatformEmbedded;
  if (isPlatformEmbedded) {
    isPlatformEmbedded = null != DiscordNative.powerSaveBlocker;
  }
  if (isPlatformEmbedded) {
    const powerSaveBlocker = DiscordNative.powerSaveBlocker;
    powerSaveBlocker.unblockDisplaySleep(arg0);
  }
};
obj.cleanupDisplaySleep = function cleanupDisplaySleep() {
  let isPlatformEmbedded = set.isPlatformEmbedded;
  if (isPlatformEmbedded) {
    isPlatformEmbedded = null != DiscordNative.powerSaveBlocker;
  }
  if (isPlatformEmbedded) {
    const powerSaveBlocker = DiscordNative.powerSaveBlocker;
    powerSaveBlocker.cleanupDisplaySleep();
  }
};
obj.relaunch = function relaunch() {
  if (set.isPlatformEmbedded) {
    const app = DiscordNative.app;
    app.relaunch();
  }
};
obj.makeChunkedRequest = function makeChunkedRequest(closure_0, array, arg2, arg3) {
  let chunkInterval;
  let dependencyMap;
  let importDefault;
  let obj = _sendRequest;
  _require = "" + obj.getAPIBaseURL() + closure_0;
  if (_set.isPlatformEmbedded) {
    if (null == DiscordNative.http) {
      const _Error2 = Error;
      let error = new Error("HTTP module not available");
      return Promise.reject(error);
    } else {
      obj = { maxBps: 8000, chunkInterval: 50, contentType: "application/json" };
      const merged = Object.assign(arg2);
      ({ method: importDefault, token: dependencyMap, chunkInterval } = obj);
      const contentType = obj.contentType;
      let json = array;
      if ("application/json" === contentType) {
        const _JSON = JSON;
        json = JSON.stringify(array);
      }
      const result = obj.maxBps * (chunkInterval / 1000);
      const _Math = Math;
      const rounded = Math.ceil(json.length / result);
      const _Array = Array;
      array = new Array(rounded);
      for (let num2 = 0; num2 < rounded; num2 = num2 + 1) {
        let result1 = num2 * result;
        array[num2] = json.substring(result1, result1 + result);
      }
      const promise = new Promise((closure_0) => {
        let closure_1 = arg1;
        if (null != outer1_6.http) {
          const http = outer1_6.http;
          const obj = { method: null, chunkInterval: null, contentType: null, token: null };
          obj[0] = closure_1;
          obj[1] = chunkInterval;
          obj[2] = contentType;
          obj[3] = closure_2;
          const chunkedRequest = http.makeChunkedRequest(closure_0, array, obj, (arg0, status) => {
            if (null != arg0) {
              let tmp4 = callback2(arg0);
            } else if (status.status >= 400) {
              const _Error = Error;
              const error = new Error(status.body);
              tmp4 = callback2(error);
            } else {
              callback(status);
            }
            return tmp4;
          });
        }
      });
      return promise;
    }
  } else {
    let _Error = Error;
    const error1 = new Error("Not embedded!");
    return Promise.reject(error1);
  }
};
obj.submitLiveCrashReport = function submitLiveCrashReport(arg0) {
  let obj = set;
  if (obj.isWindows()) {
    const self = this;
    if (null != this.getDiscordUtils().submitLiveCrashReport) {
      const crashReporterMetadata = self.getCrashReporterMetadata();
      const app = DiscordNative.app;
      let sentry;
      const releaseChannel = app.getReleaseChannel();
      if (crashReporterMetadata != null) {
        sentry = crashReporterMetadata.sentry;
      }
      const discordUtils = self.getDiscordUtils();
      obj = {};
      const merged = Object.assign(sentry);
      const merged1 = Object.assign(arg0);
      return discordUtils.submitLiveCrashReport(releaseChannel, obj);
    }
  }
  return Promise.resolve();
};
obj.crash = function crash(arg0) {
  const crash = this.getDiscordUtils().crash;
  let flag = null != crash;
  if (flag) {
    crash(arg0);
    flag = true;
  }
  return flag;
};
obj.setApplicationBackgroundColor = function setApplicationBackgroundColor(arg0) {
  this.sendIPC(IPCEvents.IPCEvents.SETTINGS_UPDATE_BACKGROUND_COLOR, arg0);
};
obj.initializeExitHook = function initializeExitHook() {
  const initializeExitHook = this.getDiscordUtils().initializeExitHook;
  if (null != initializeExitHook) {
    initializeExitHook();
  }
};
obj.initializeWERHandler = function initializeWERHandler() {
  const initializeWERHandler = this.getDiscordUtils().initializeWERHandler;
  if (null != initializeWERHandler) {
    initializeWERHandler();
  }
};
obj.pollQueueMetrics = function pollQueueMetrics(arg0) {
  const pollQueueMetrics = this.getDiscordUtils().pollQueueMetrics;
  if (null != pollQueueMetrics) {
    pollQueueMetrics(arg0);
  }
};
obj.asyncify = function asyncify(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    callback(arg0);
  });
};
obj.IsGameDisplayModeUpdateSupported = function IsGameDisplayModeUpdateSupported() {
  return null != this.getDiscordUtils().gameDisplayModeUpdate;
};
obj.GameDisplayModeUpdate = function GameDisplayModeUpdate(arg0) {
  const gameDisplayModeUpdate = this.getDiscordUtils().gameDisplayModeUpdate;
  let result = null != gameDisplayModeUpdate && null != arg0;
  if (result) {
    result = gameDisplayModeUpdate(arg0);
  }
  return result;
};
obj.GameDisplayModeIsGameSupported = function GameDisplayModeIsGameSupported(arg0) {
  const gameDisplayModeIsSupported = this.getDiscordUtils().gameDisplayModeIsSupported;
  let result = null != gameDisplayModeIsSupported && null != arg0;
  if (result) {
    result = gameDisplayModeIsSupported(arg0);
  }
  return result;
};
obj.GetWindowFullscreenTypeByPid = function GetWindowFullscreenTypeByPid(arg0, arg1, arg2) {
  const getWindowFullscreenTypeByPid = this.getDiscordUtils().getWindowFullscreenTypeByPid;
  let windowFullscreenTypeByPid = null;
  if (0 !== arg0) {
    windowFullscreenTypeByPid = null;
    if (null != getWindowFullscreenTypeByPid) {
      windowFullscreenTypeByPid = null;
      if (null != arg1) {
        windowFullscreenTypeByPid = getWindowFullscreenTypeByPid(arg0, arg1);
      }
    }
  }
  if (-1 === windowFullscreenTypeByPid) {
    windowFullscreenTypeByPid = null;
  }
  if (windowFullscreenTypeByPid == null) {
    windowFullscreenTypeByPid = arg2;
  }
  if (windowFullscreenTypeByPid == null) {
    windowFullscreenTypeByPid = GuildThemeSourcePreference.RunningProcessFullscreenType.UNKNOWN;
  }
  return windowFullscreenTypeByPid;
};
obj.GetWindowFullscreenTypeExtraByPid = function GetWindowFullscreenTypeExtraByPid(arg0, arg1) {
  const getWindowFullscreenTypeExtraByPid = this.getDiscordUtils().getWindowFullscreenTypeExtraByPid;
  if (null != getWindowFullscreenTypeExtraByPid) {
    if (null != arg1) {
      let windowFullscreenTypeExtraByPid = getWindowFullscreenTypeExtraByPid(arg0, arg1);
    }
    return windowFullscreenTypeExtraByPid;
  }
  windowFullscreenTypeExtraByPid = { quns: GuildThemeSourcePreference.QueryUserNotificationState.QUNS_UNKNOWN };
};
obj.SetGPUBoostEnabledByPid = function SetGPUBoostEnabledByPid(arg0, arg1) {
  const setGPUBoostEnabledByPid = this.getDiscordUtils().setGPUBoostEnabledByPid;
  let result = null != setGPUBoostEnabledByPid;
  if (result) {
    result = setGPUBoostEnabledByPid(arg0, arg1);
  }
  return result;
};
obj.SetSystemServicePerformanceMonitorEnabled = function SetSystemServicePerformanceMonitorEnabled(arg0, arg1) {
  const setSystemServicePerformanceMonitorEnabled = this.getDiscordUtils().setSystemServicePerformanceMonitorEnabled;
  let result = null != setSystemServicePerformanceMonitorEnabled;
  if (result) {
    result = setSystemServicePerformanceMonitorEnabled(arg0, arg1);
  }
  return result;
};
obj.GetSystemServicePerformanceMonitorSnapshot = function GetSystemServicePerformanceMonitorSnapshot(arg0) {
  const _require = arg0;
  const getSystemServicePerformanceMonitorSnapshot = this.getDiscordUtils().getSystemServicePerformanceMonitorSnapshot;
  if (null == getSystemServicePerformanceMonitorSnapshot) {
    const systemServiceNotAvailableError = new _require(getSystemServicePerformanceMonitorSnapshot[14]).SystemServiceNotAvailableError();
    return Promise.reject(systemServiceNotAvailableError);
  } else {
    let promise = new Promise((arg0, arg1) => {
      let closure_0 = arg1;
      const timeout = setTimeout(() => {
        const error = new Error("Timed out waiting for performance snapshot");
        return callback(error);
      }, 1000);
    });
    promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      getSystemServicePerformanceMonitorSnapshot(closure_0, (arg0) => {
        if ("null" !== arg0) {
          try {
            const _JSON = JSON;
            callback(JSON.parse(arg0));
          } catch (tmp11) {
            let tmp12Result = globalThis;
            const _Error2 = Error;
            if (tmp11 instanceof Error) {
              let message = tmp11.message;
            } else {
              const _String = String;
              message = String(tmp11);
            }
            const error = new Error("Invalid performance snapshot JSON: " + message);
            tmp12Result = callback2(error);
            const tmp12 = callback2;
          }
        } else {
          const _Error = Error;
          const error1 = new Error("Performance snapshot not available");
          callback2(error1);
        }
      });
    });
    const items = [promise, promise];
    return Promise.race(items).finally(() => clearTimeout(closure_1));
  }
};
obj.IsHardwareAcceleratedGPUSchedulingEnabled = function IsHardwareAcceleratedGPUSchedulingEnabled() {
  const isHardwareAcceleratedGPUSchedulingEnabled = this.getDiscordUtils().isHardwareAcceleratedGPUSchedulingEnabled;
  let result = null != isHardwareAcceleratedGPUSchedulingEnabled;
  if (result) {
    result = isHardwareAcceleratedGPUSchedulingEnabled();
  }
  return result;
};
obj.AcquireGlobalLock = function AcquireGlobalLock(arg0) {
  const acquireGlobalLock = this.getDiscordUtils().acquireGlobalLock;
  if (null != acquireGlobalLock) {
    return acquireGlobalLock(arg0);
  }
};
obj.SetServiceChannel = function SetServiceChannel(arg0) {
  const setServiceChannel = this.getDiscordUtils().setServiceChannel;
  if (null != setServiceChannel) {
    setServiceChannel(arg0);
  }
};
obj.IsSystemServiceInstalled = function IsSystemServiceInstalled() {
  const isSystemServiceInstalled = this.getDiscordUtils().isSystemServiceInstalled;
  return null != isSystemServiceInstalled ? isSystemServiceInstalled() : undefined;
};
obj.CanSystemServiceBeInstalled = function CanSystemServiceBeInstalled() {
  const canSystemServiceBeInstalled = this.getDiscordUtils().canSystemServiceBeInstalled;
  return null != canSystemServiceBeInstalled ? canSystemServiceBeInstalled() : undefined;
};
obj.InstallSystemService = function InstallSystemService() {
  const installSystemService = this.getDiscordUtils().installSystemService;
  if (null != installSystemService) {
    let installSystemServiceResult = installSystemService();
  } else {
    const _Error = Error;
    const error = new Error("System service native not available");
    installSystemServiceResult = Promise.reject(error);
  }
  return installSystemServiceResult;
};
obj.DoesSystemServiceHaveUpdate = function DoesSystemServiceHaveUpdate() {
  const doesSystemServiceHaveUpdate = this.getDiscordUtils().doesSystemServiceHaveUpdate;
  if (null != doesSystemServiceHaveUpdate) {
    let result = doesSystemServiceHaveUpdate();
  } else {
    const _Error = Error;
    const error = new Error("System service native not available");
    result = Promise.reject(error);
  }
  return result;
};
obj.UpdateSystemService = function UpdateSystemService() {
  const updateSystemService = this.getDiscordUtils().updateSystemService;
  if (null != updateSystemService) {
    let updateSystemServiceResult = updateSystemService();
  } else {
    const _Error = Error;
    const error = new Error("System service native not available");
    updateSystemServiceResult = Promise.reject(error);
  }
  return updateSystemServiceResult;
};
obj.UninstallSystemService = function UninstallSystemService() {
  const uninstallSystemService = this.getDiscordUtils().uninstallSystemService;
  if (null != uninstallSystemService) {
    let result = uninstallSystemService();
  } else {
    const _Error = Error;
    const error = new Error("System service native not available");
    result = Promise.reject(error);
  }
  return result;
};
obj.InputEventServiceSetStatusCallback = function InputEventServiceSetStatusCallback(arg0) {
  const inputEventServiceSetStatusCallback = this.getDiscordUtils().inputEventServiceSetStatusCallback;
  if (null != inputEventServiceSetStatusCallback) {
    const result = inputEventServiceSetStatusCallback(arg0);
  }
};
obj.InputEventServiceSetAllowed = function InputEventServiceSetAllowed(arg0) {
  const inputEventServiceSetAllowed = this.getDiscordUtils().inputEventServiceSetAllowed;
  if (null != inputEventServiceSetAllowed) {
    return inputEventServiceSetAllowed(arg0);
  }
};
obj.ToolServiceSetStatusCallback = function ToolServiceSetStatusCallback(arg0) {
  const toolServiceSetStatusCallback = this.getDiscordUtils().toolServiceSetStatusCallback;
  if (null != toolServiceSetStatusCallback) {
    const result = toolServiceSetStatusCallback(arg0);
  }
};
obj.ToolServiceSetAllowed = function ToolServiceSetAllowed(arg0) {
  const toolServiceSetAllowed = this.getDiscordUtils().toolServiceSetAllowed;
  if (null != toolServiceSetAllowed) {
    return toolServiceSetAllowed(arg0);
  }
};
obj.isModuleVersionAtLeast = function isModuleVersionAtLeast(arg0, stable) {
  let tmp7;
  let tmp9;
  let items = closure_10;
  if (closure_10 == null) {
    items = [0, 0, 0];
  }
  const items1 = [...items];
  const moduleVersions = this.moduleVersions;
  let num;
  if (moduleVersions != null) {
    num = moduleVersions[arg0];
  }
  if (num == null) {
    num = 0;
  }
  items1.push(num);
  stable = stable[this.releaseChannel];
  if (stable == null) {
    stable = stable.stable;
  }
  const entries = items1.entries();
  const obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp5 = callback;
    let tmp6 = callback(tmp4, 2);
    [tmp7, tmp9] = tmp6;
    if (tmp9 > stable[tmp7]) {
      let tmp14 = obj;
      obj.return();
      let flag2 = true;
      return true;
    } else {
      let tmp11 = tmp9;
      let tmp12 = tmp7;
      if (tmp10 < stable[tmp8]) {
        let tmp13 = obj;
        obj.return();
        let flag = false;
        return false;
      }
    }
  }
  return true;
};
obj.fetchRiotGamesLiveClientData = function fetchRiotGamesLiveClientData(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (set.isPlatformEmbedded) {
    if (null == DiscordNative.riotGames) {
      const _Error2 = Error;
      const error = new Error("Riot Games module not available");
      let rejectResult = Promise.reject(error);
    } else {
      const riotGames = tmp6.riotGames;
      rejectResult = riotGames.fetchLiveClientData(arg0, obj);
    }
  } else {
    const _Error = Error;
    const error1 = new Error("Not embedded!");
    return Promise.reject(error1);
  }
};
obj.readCs2GsiToken = function readCs2GsiToken(arg0) {
  if (obj.isWindows()) {
    const cs2Gsi = DiscordNative.cs2Gsi;
    let cs2GsiToken;
    if (cs2Gsi != null) {
      cs2GsiToken = cs2Gsi.readCs2GsiToken(arg0);
    }
    if (cs2GsiToken == null) {
      cs2GsiToken = Promise.resolve(null);
    }
    let resolved = cs2GsiToken;
  } else {
    resolved = Promise.resolve(null);
  }
  return resolved;
};
obj.writeCs2GsiConfig = function writeCs2GsiConfig(arg0, arg1, arg2) {
  if (obj.isWindows()) {
    const cs2Gsi = DiscordNative.cs2Gsi;
    let writeCs2GsiConfigResult;
    if (cs2Gsi != null) {
      writeCs2GsiConfigResult = cs2Gsi.writeCs2GsiConfig(arg0, arg1, arg2);
    }
    if (writeCs2GsiConfigResult == null) {
      writeCs2GsiConfigResult = Promise.resolve(false);
    }
    let resolved = writeCs2GsiConfigResult;
  } else {
    resolved = Promise.resolve(false);
  }
  return resolved;
};
obj.deleteCs2GsiConfig = function deleteCs2GsiConfig(arg0) {
  if (obj.isWindows()) {
    const cs2Gsi = DiscordNative.cs2Gsi;
    let deleteCs2GsiConfigResult;
    if (cs2Gsi != null) {
      deleteCs2GsiConfigResult = cs2Gsi.deleteCs2GsiConfig(arg0);
    }
    if (deleteCs2GsiConfigResult == null) {
      deleteCs2GsiConfigResult = Promise.resolve(false);
    }
    let resolved = deleteCs2GsiConfigResult;
  } else {
    resolved = Promise.resolve(false);
  }
  return resolved;
};
obj.debugLogCs2GsiPayload = function debugLogCs2GsiPayload(arg0) {
  if (obj.isWindows()) {
    const cs2Gsi = DiscordNative.cs2Gsi;
    let result;
    if (cs2Gsi != null) {
      result = cs2Gsi.debugLogCs2GsiPayload(arg0);
    }
    if (result == null) {
      result = Promise.resolve();
    }
    let resolved = result;
  } else {
    resolved = Promise.resolve();
  }
  return resolved;
};
obj.appViewed = function appViewed() {
  if (obj.isDesktop()) {
    const self = this;
    const _performance = performance;
    performance.mark("app_viewed");
    this.sendIPC(IPCEvents.IPCEvents.APP_VIEWED);
  }
};
obj.appFirstRenderAfterReadyPayload = function appFirstRenderAfterReadyPayload(arg0) {
  if (obj.isDesktop()) {
    const self = this;
    const _performance = performance;
    performance.mark("app_first_render_after_ready_payload");
    this.sendIPC(IPCEvents.IPCEvents.APP_FIRST_RENDER_AFTER_READY_PAYLOAD, arg0);
  }
};
obj.appLoaded = function appLoaded() {
  backwardCompatSend(IPCEvents.IPCEvents.APP_LOADED);
};
obj.indexLoadedAsync = function indexLoadedAsync() {
  backwardCompatSend(IPCEvents.IPCEvents.APP_ASYNC_INDEX_TSX_LOADED);
};
obj.setUseRequireModuleCache = function setUseRequireModuleCache(arg0) {
  let closure_14 = arg0;
};
obj.GetSystemGpuStats = function GetSystemGpuStats(arg0) {
  let closure_0 = arg0;
  const self = this;
  return callback2(function*() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let gpuStats = tmp2;
            gpuStats = undefined;
            if (outer1_0(table[5]).isPlatformEmbedded) {
              table = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_1.ensureModule("discord_media");
              return obj1;
            } else {
              c3 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = [];
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          gpuStats = closure_1.requireModule("discord_media");
          let getGpuStats;
          if (gpuStats != null) {
            getGpuStats = gpuStats.getGpuStats;
          }
          if (null == getGpuStats) {
            const items = [];
          } else {
            gpuStats = gpuStats.getGpuStats(gpuStats);
            gpuStats.catch(() => []);
          }
          c3 = 3;
        }
      } catch (tmp13) {
        c3 = tmp;
        throw tmp13;
      }
    }
  })();
};
let result = set.fileFinishedImporting("utils/web/DesktopNativeUtils.tsx");

export default obj;
export const SaveImageResult = obj;
export { sanitizeFilename };
export { getFileData };
export { getImageData };
export const NativePermissionRequestType = { Camera: 0, [0]: "Camera", Microphone: 1, [1]: "Microphone", Photo: 2, [2]: "Photo", InputMonitoring: 3, [3]: "InputMonitoring", ScreenRecording: 4, [4]: "ScreenRecording" };