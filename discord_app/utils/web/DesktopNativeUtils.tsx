// === Module 5565: DesktopNativeUtils ===

// Module 5565 (DesktopNativeUtils)
import logger_Logger from "logger/Logger" /* 4 */;
import Storage3 from "Storage" /* 510 */;
import GameDetectionTypes from "GameDetectionTypes" /* 1934 */;
import Client from "Client" /* 4491 */;
import discord_common_DiscordNative from "discord_common/DiscordNative" /* 4586 */;
import DomainMigrationUtils from "DomainMigrationUtils" /* 5566 */;
import IPCEvents from "IPCEvents" /* 5567 */;
import FileExtensionUtils from "FileExtensionUtils" /* 5568 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function sanitizeFilename(arg0) {
  try {
    const _decodeURIComponent = decodeURIComponent;
    const str2 = decodeURIComponent(arg0);
    const str4 = decodeURIComponent(arg0).replace(re20, "$1");
    return decodeURIComponent(arg0).replace(re20, "$1").replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2").replace(re19, "_");
  } catch (err) {
    const str9 = str.replace(re21, "$1");
    return str.replace(re21, "$1").replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2").replace(re19, "_");
  }
}
function getFileData() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_27 = async function _getFileData() {
  const _fetch = fetch;
  const _Request = Request;
  const request = new Request(closure_0, { method: "GET", mode: "cors" });
  await fetch(request);
  closure_129_0 = value;
  closure_130_1(closure_130_2[3])(200 === closure_129_0.status, "Data fetch unsuccessful");
  await closure_129_0.arrayBuffer();
  closure_129_1 = value;
  closure_130_1(closure_130_2[3])(null != closure_129_1, "Data is null");
  return closure_129_1;
};
function getImageData(arg0) {
  return getFileData(arg0);
}
let closure_29 = async function _transcodeImageToPng(arg0) {
  closure_0 = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp5;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            let context;
            closure_130_3 = undefined;
            const _Blob = Blob;
            const items = [closure_0];
            const obj1 = { type };
            const blob = new Blob(items, obj1);
            c6 = 1;
            c7 = 1;
            const obj2 = { value: globalThis.createImageBitmap(blob), done: false };
            return obj2;
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_130_0 = value;
            c5 = 1;
            const offscreenCanvas = new globalThis.OffscreenCanvas(closure_130_0.width, closure_130_0.height);
            closure_130_1 = offscreenCanvas;
            context = closure_130_1.getContext("2d");
            closure_131_1(closure_131_2[3])(null != context, "Failed to acquire 2d context for image transcode");
            context.drawImage(closure_130_0, 0, 0);
            c6 = 3;
            c7 = 1;
            const obj4 = { value: closure_130_1.convertToBlob({ type: "image/png" }), done: false };
            return obj4;
          }
        } else if (2 === tmp8) {
          c5 = 0;
          closure_130_0.close();
          throw closure_4;
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_130_0.close();
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_130_3 = value;
            c6 = 4;
            c7 = 1;
            const obj6 = { value: closure_130_3.arrayBuffer(), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_130_0.close();
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c5 = 0;
          closure_130_0.close();
          c7 = 3;
          obj = { value, done: true };
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
};
function normalizeRunningGame(id, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_13;
  }
  let str = id.id;
  if (str == null) {
    str = "";
  }
  obj = { id: tmp[str], nativeProcessObserverId: null, name: null, origGameName: null, processName: null, hidden: null, elevated: null, sandboxed: null, lastFocused: null, exePath: null, exeName: null, cmdLine: null, distributor: null, sku: null, pid: null, pidPath: null, gameMetadata: null, windowHandle: null, fullscreenType: null, isLauncher: null, executableFingerprint: null };
  let str2 = id.id;
  if (str2 == null) {
    str2 = "";
  }
  obj.nativeProcessObserverId = parseInt(str2, 10);
  let name = id.gameName;
  if (name == null) {
    name = id.name;
  }
  obj.name = name;
  ({ origGameName: obj.origGameName, name: name2 } = id);
  if (name2 == null) {
    name2 = "";
  }
  obj.processName = name2;
  ({ hidden: obj.hidden, elevated: obj.elevated, sandboxed } = id);
  if (sandboxed == null) {
    sandboxed = false;
  }
  obj.sandboxed = sandboxed;
  ({ lastFocused: obj.lastFocused, exePath: obj.exePath, exeName: obj.exeName, cmdLine: obj.cmdLine, distributor: obj.distributor, sku: obj.sku, pid: obj.pid, pidPath } = id);
  if (pidPath == null) {
    pidPath = [];
  }
  obj.pidPath = pidPath;
  ({ gameMetadata: obj.gameMetadata, windowHandle } = id);
  if (windowHandle == null) {
    windowHandle = null;
  }
  obj.windowHandle = windowHandle;
  let UNKNOWN = id.fullscreenType;
  if (UNKNOWN == null) {
    UNKNOWN = Client.RunningProcessFullscreenType.UNKNOWN;
  }
  obj.fullscreenType = UNKNOWN;
  let flag = id.isLauncher;
  if (flag == null) {
    flag = false;
  }
  obj.isLauncher = flag;
  obj.executableFingerprint = id.executableFingerprint;
  return obj;
}
function backwardCompatSend(APP_ASYNC_INDEX_TSX_LOADED) {
  obj = require("PlatformUtils");
  if (obj.isDesktop()) {
    try {
      obj.sendIPC(APP_ASYNC_INDEX_TSX_LOADED);
    } catch (err) {
    }
  }
}
const NativeFeatures = fn(1074).NativeFeatures;
const set = new Set(["jpg", "jpeg", "jfif", "png"]);
const set1 = new Set(["webp", "avif"]);
const set2 = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]);
let closure_10 = null;
let buildNumber = null;
let moduleVersions = null;
let closure_13 = {};
let global = false;
let closure_15 = {};
if (null != DiscordNative) {
  let app = DiscordNative.app;
  let parts = app.getVersion().split(".");
  closure_10 = parts.map((item) => parseInt(item));
  const app2 = DiscordNative.app;
  moduleVersions = app2.getModuleVersions();
  const app3 = DiscordNative.app;
  buildNumber = app3.getBuildNumber();
  let str = app.getVersion();
}
new Set(["discord_erlpack", "discord_game_utils", "discord_rpc", "discord_spellcheck", "discord_utils", "discord_voice"]);
let c16 = false;
let discordIsElevated = null;
const lastImageSaveDirectory = "lastImageSaveDirectory";
const re19 = /[<>:"/\\|?*@]/g;
const re20 = /(\.[a-zA-Z0-9]+):[^.]*$/;
const re21 = /(\.[a-zA-Z0-9]+)%3A.+$/;
const re22 = /[^a-zA-Z0-9]/g;
const re23 = /\.[^.]*$/;
let obj = { SAVED: "saved", CANCELED: "canceled", ERRORED: "errored" };
obj = {
  requireModule(discord_voice) {
    if (global) {
      if (closure_15.hasOwnProperty(discord_voice)) {
        if (null != closure_15[discord_voice]) {
          return closure_15[discord_voice];
        }
      }
    }
    const nativeModules = DiscordNative.nativeModules;
    const requireModuleResult = nativeModules.requireModule(discord_voice);
    if (global) {
      closure_15[discord_voice] = requireModuleResult;
    }
    return requireModuleResult;
  },
  ensureModule(discord_voice) {
    if (require("PlatformUtils").isPlatformEmbedded) {
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
  closure_0 = arg0;
  closure_1 = arg1;
  return (async () => {
    settings = settings.settings;
    await settings.get(closure_0, closure_1);
    return value;
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
      const Storage = Storage3.Storage;
      supportsFeatureResult = true !== Storage.get(DomainMigrationUtils.DOMAIN_MIGRATION_SUCCESS_KEY);
    }
    if (supportsFeatureResult) {
      supportsFeatureResult = self.supportsFeature(NativeFeatures.USER_DATA_CACHE);
    }
    if (supportsFeatureResult) {
      const userDataCache = DiscordNative.userDataCache;
      const Storage2 = Storage3.Storage;
      userDataCache.cacheUserData(Storage2.stringify());
    }
  } catch (err) {
  }
};
obj.inputEventRegister = function inputEventRegister(parsed, arr, arg2, arg3) {
  const discordUtils = this.getDiscordUtils();
  parsed = parseInt("" + parsed);
  discordUtils.inputEventRegister(parsed, arr.map((item) => {
    [tmp, tmp2, tmp3] = item;
    if (typeof tmp3 === "string") {
      const items = [tmp, tmp2, tmp3];
      let items1 = items;
    } else {
      items1 = [tmp, tmp2];
    }
    return items1;
  }), arg2, arg3);
};
obj.inputEventUnregister = function inputEventUnregister(match) {
  const discordUtils = this.getDiscordUtils();
  discordUtils.inputEventUnregister(parseInt(match));
};
obj.setOnInputEventCallback = function setOnInputEventCallback(arg0) {
  if (require("PlatformUtils").isPlatformEmbedded) {
    const self = this;
    const discordUtils = this.getDiscordUtils();
    discordUtils.inputWatchAll(arg0);
  }
};
obj.setFocused = function setFocused(arg0) {
  const discordUtils = this.getDiscordUtils();
  discordUtils.inputSetFocused(arg0);
};
obj.setObservedGamesCallback = function setObservedGamesCallback(mapped, normalizeCallback, arg2, arg3) {
  closure_0 = arg2;
  try {
    const self = this;
    closure_13 = {};
    c1 = 0;
    const discordUtils = this.getDiscordUtils();
    mapped = mapped.map((id) => {
      const sum = c1 + 1;
      c1 = sum;
      if (null != id.id) {
        closure_13[sum] = id.id;
      }
      obj = {};
      const merged = Object.assign(id);
      obj.cmdline = id.cmdLine;
      obj.id = sum;
      return obj;
    });
    closure_2 = closure_13;
    let tmp6 = null != arg3;
    if (tmp6) {
      tmp6 = null != discordUtils.setProcessObserverUserId;
    }
    if (tmp6) {
      const result = discordUtils.setProcessObserverUserId(arg3);
    }
    normalizeCallback = function normalizeCallback(arr) {
      return closure_0(arr.map((item) => normalizeRunningGame(item, closure_1_2)));
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
  closure_0 = arg0;
  return new Promise((fn) => {
    closure_0 = fn;
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
      fn(null);
    }
  });
};
obj.setGameDetectionCallback = function setGameDetectionCallback(arg0) {
  closure_0 = arg0;
  const discordUtils = this.getDiscordUtils();
  if (discordUtils.setGameDetectionCallback != null) {
    const result = setGameDetectionCallback((arr, arr2) => {
      const mapped = arr.map((item) => closure_1_30(item));
      return closure_0(mapped, arr2.map((item) => closure_1_30(item)));
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
  closure_0 = arg0;
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setCandidateGamesCallback((arr) => {
    closure_0(arr.map((item) => closure_1_30(item)));
  });
};
obj.clearCandidateGamesCallback = function clearCandidateGamesCallback() {
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.clearCandidateGamesCallback();
};
obj.setGameCandidateOverrides = function setGameCandidateOverrides(arr) {
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setGameCandidateOverrides(arr.map((item) => {
    obj = {};
    const merged = Object.assign(item);
    ({ id: obj.gameId, name: obj.gameName } = item);
    return obj;
  }));
};
obj.setObserverDebugCallback = function setObserverDebugCallback(arg0, NONE, arg2) {
  closure_0 = arg0;
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setObserverDebugCallback((arg0) => closure_0(arg0), NONE, arg2);
};
obj.clearObserverDebugCallback = function clearObserverDebugCallback() {
  const discordUtils = this.getDiscordUtils();
  const result = discordUtils.setObserverDebugCallback(null, GameDetectionTypes.GameDetectionDebugLevel.NONE, 0);
};
obj.shouldDisplayNotifications = function shouldDisplayNotifications() {
  const discordUtils = this.getDiscordUtils();
  return discordUtils.shouldDisplayNotifications();
};
obj.getVoiceEngine = function getVoiceEngine() {
  const requireModuleResult = this.requireModule("discord_voice");
  const require = requireModuleResult;
  if (!c16) {
    logger_Logger.setNativeLogFn((arg0, arg1, arg2) => {
      requireModuleResult.consoleLog(arg1, "[" + arg0 + "] " + arg2);
    });
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
  let isWindowsResult = require("PlatformUtils").isWindows();
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
    let tmpResult = require("PlatformUtils");
    if ("win32" === tmpResult.getPlatformName()) {
      const self = this;
      this.sendIPC(IPCEvents.IPCEvents.APP_BADGE_SET, arg0);
    } else {
      tmpResult = require("PlatformUtils");
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
  obj = require("PlatformUtils");
};
obj.setSystemTrayIcon = function setSystemTrayIcon(arg0) {
  if (require("PlatformUtils").isPlatformEmbedded) {
    const self = this;
    this.sendIPC(IPCEvents.IPCEvents.SYSTEM_TRAY_SET_ICON, arg0);
  }
};
obj.setThumbarButtons = function setThumbarButtons(arg0) {
  if (require("PlatformUtils").isPlatformEmbedded) {
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
  if (require("PlatformUtils").isPlatformEmbedded) {
    const app = DiscordNative.app;
    if (null != app.dock) {
      let dock = app.dock;
      closure_1 = dock.bounce(arg0);
      return asyncGeneratorStep(async () => {
        if (c3 === 2) {
          c3 = 3;
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
                value = tmp5;
                closure_0 = tmp2;
                closure_128_0 = undefined;
                c2 = 1;
                c3 = 1;
                const obj1 = { value, done: false };
                return obj1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = value;
              const dock = closure_129_0.dock;
              dock.cancelBounce(closure_128_0);
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
  if (require("PlatformUtils").isPlatformEmbedded) {
    const self = this;
    this.sendIPC(IPCEvents.IPCEvents.SYSTEM_TRAY_SET_APPLICATIONS, arg0);
  }
};
Object.defineProperty(obj, "architecture", {
  get: () => {
    let str = "";
    if (require("PlatformUtils").isPlatformEmbedded) {
      str = DiscordNative.process.arch;
    }
    return str;
  },
  set: undefined
});
Object.defineProperty(obj, "releaseChannel", {
  get: () => {
    let str = "";
    if (require("PlatformUtils").isPlatformEmbedded) {
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
    if (require("PlatformUtils").isPlatformEmbedded) {
      const parts = DiscordNative.os.release.split(".");
      let mapped = parts.map((item) => parseInt(item, 10));
    } else {
      mapped = [];
    }
    return mapped;
  },
  set: undefined
});
obj.copy = function copy(arg0) {
  if (require("PlatformUtils").isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    clipboard.copy(arg0);
  }
};
obj.copyImage = function copyImage(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (async () => {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            dependencyMap = tmp5;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            tmp2(38)(closure_0(1115).isPlatformEmbedded, "Copy image method called outside native app");
            tmp2(38)(typeof DiscordNative.clipboard.copyImage === "function", "Copy image not supported");
            c3 = 1;
            c4 = 1;
            const obj1 = { value: getImageData(closure_0), done: false };
            return obj1;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_129_0 = value;
            closure_129_1 = closure_0(5568).decideFileExtension(closure_130_0, closure_130_1);
            if (null != closure_129_1) {
              if (set2.has(closure_129_1)) {
                closure_0 = closure_130_1;
                if (closure_130_1 == null) {
                  const _HermesInternal2 = HermesInternal;
                  closure_0 = "image/" + closure_129_1;
                }
                c3 = 2;
                c4 = 1;
                const obj3 = {
                  value: (function transcodeImageToPng() {
                                const self = this;
                                const apply = closure_1_29.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              })(closure_129_0, closure_0),
                  done: false
                };
                return obj3;
              }
            }
            if (null == closure_129_1) {
              let combined = closure_130_0;
              closure_129_2 = combined;
              const clipboard2 = DiscordNative.clipboard;
              const _Buffer2 = Buffer;
              clipboard2.copyImage(Buffer.from(closure_129_0), closure_129_2);
              c4 = 3;
            }
            const _HermesInternal = HermesInternal;
            combined = "image." + closure_129_1;
            const obj8 = closure_0(5568);
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_0 = value;
          const clipboard = DiscordNative.clipboard;
          const _Buffer = Buffer;
          clipboard.copyImage(Buffer.from(closure_129_0), "image.png");
          c4 = 3;
          obj = { value: undefined, done: true };
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
  closure_0 = arg0;
  closure_1 = arg1;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
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
            closure_1 = tmp5;
            closure_128_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: tmp2.arrayBuffer(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          clipboard = clipboard.clipboard;
          const _Buffer = Buffer;
          clipboard.copyImage(Buffer.from(closure_128_0), closure_129_1);
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
obj.canSaveImage = function canSaveImage(uri, contentType) {
  if (null != uri) {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const decideFileExtensionResult = FileExtensionUtils.decideFileExtension(uri, contentType);
      let hasItem = null == decideFileExtensionResult;
      if (!hasItem) {
        hasItem = set2.has(decideFileExtensionResult);
      }
      return hasItem;
    }
  }
  return false;
};
obj.saveImage = function saveImage(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return (async () => {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp5;
            closure_133_0 = undefined;
            closure_133_1 = undefined;
            let directory;
            closure_133_3 = undefined;
            closure_133_4 = undefined;
            closure_133_5 = undefined;
            png(38)(unknown(1115).isPlatformEmbedded, "Save image method called outside native app");
            const tmp84 = png(38);
            let tmp54 = closure_0;
            const toURLSafeResult = png(1365).toURLSafe(closure_0);
            if (null == toURLSafeResult) {
              c10 = 3;
              const obj1 = { value: constants.ERRORED, done: true };
              return obj1;
            } else {
              const parts = toURLSafeResult.pathname.split("/");
              const arr = parts.pop();
              unknown = arr;
              if (arr == null) {
                unknown = "unknown";
              }
              closure_133_0 = unknown;
              const str = sanitizeFilename(unknown);
              closure_133_0 = str;
              const searchParams = toURLSafeResult.searchParams;
              let str2 = searchParams.get("format");
              if (null != str2) {
                str2 = str2.replace(closure_1_22, "").toLowerCase();
                if (str2.length > 0) {
                  const _HermesInternal2 = HermesInternal;
                  closure_133_0 = "" + str.replace(closure_1_23, "") + "." + str2;
                }
                const str3 = str2.replace(closure_1_22, "");
              } else if (!str.includes(".")) {
                let obj8 = unknown(5568);
                const decideFileExtensionResult = obj8.decideFileExtension(tmp54, closure_1);
                dependencyMap = decideFileExtensionResult;
                png = dependencyMap;
                if (dependencyMap == null) {
                  png = "png";
                }
                const _HermesInternal = HermesInternal;
                closure_133_0 = "" + str + "." + png;
              }
              tmp54 = getImageData(tmp54);
              c9 = 1;
              c10 = 1;
            }
            const obj13 = png(1365);
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_133_3 = value;
            const _Buffer = Buffer;
            closure_133_4 = Buffer.from(closure_133_3);
            const Storage2 = unknown(510).Storage;
            closure_133_5 = Storage2.get(lastImageSaveDirectory);
            if (typeof closure_133_5 !== "string") {
              closure_133_5 = undefined;
            }
            if (typeof tmp3.fileManager.saveWithDialog2 === "function") {
              const fileManager = tmp3.fileManager;
              c3 = closure_133_5;
              if (closure_133_5 == null) {
                c3 = undefined;
              }
              c9 = 3;
              c10 = 1;
              const obj3 = { value: fileManager.saveWithDialog2(closure_133_4, closure_133_0, c3), done: false };
              return obj3;
            } else {
              c8 = 1;
              const fileManager2 = tmp3.fileManager;
              c4 = closure_133_5;
              if (closure_133_5 == null) {
                c4 = undefined;
              }
              c9 = 4;
              c10 = 1;
              const obj4 = { value: fileManager2.saveWithDialog(closure_133_4, closure_133_0, c4), done: false };
              return obj4;
            }
          }
        } else if (2 === tmp8) {
          c8 = 0;
          c10 = 3;
          const obj5 = { value: constants.ERRORED, done: true };
          return obj5;
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_133_1 = value;
              if (null == value) {
                c10 = 3;
                const obj7 = { value: constants.ERRORED, done: true };
                return obj7;
              } else if (closure_133_1.canceledByUser) {
                c10 = 3;
                obj8 = { value: constants.CANCELED, done: true };
                return obj8;
              } else {
                directory = closure_133_1.directory;
              }
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            directory = value;
            c8 = 0;
          }
          if (null != directory) {
            if ("" !== directory) {
              const Storage = unknown(510).Storage;
              const result = Storage.set(lastImageSaveDirectory, directory);
              const SAVED = constants.SAVED;
            }
            c10 = 3;
          }
          const ERRORED = constants.ERRORED;
        }
      } catch (tmp56) {
        closure_7 = tmp56;
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
  closure_0 = arg0;
  closure_1 = arg1;
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp2;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_1(tmp3[3])(unknown(tmp3[5]).isPlatformEmbedded, "Save file method called outside native app");
            const tmp29 = closure_1(tmp3[3]);
            const toURLSafeResult = closure_1(tmp3[12]).toURLSafe(closure_0);
            if (null == toURLSafeResult) {
              c5 = 3;
              return { value: null, done: true };
            } else {
              if (closure_1 == null) {
                const parts = toURLSafeResult.pathname.split("/");
                closure_1 = parts.pop();
              }
              unknown = closure_1;
              if (closure_1 == null) {
                unknown = "unknown";
              }
              closure_130_0 = unknown;
              if (null == closure_1) {
                closure_130_0 = sanitizeFilename(tmp19);
              }
              c4 = 1;
              c5 = 1;
              const obj1 = { value: getFileData(closure_0), done: false };
              return obj1;
            }
            const obj8 = closure_1(tmp3[12]);
          }
        } else if (1 === tmp6) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_130_1 = value;
            const _Buffer = Buffer;
            closure_130_2 = Buffer.from(closure_130_1);
            fileManager = fileManager.fileManager;
            c4 = 2;
            c5 = 1;
            const obj3 = { value: fileManager.saveWithDialog(closure_130_2, closure_130_0, undefined), done: false };
            return obj3;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_130_3 = value;
          let tmp9 = null;
          if (null != closure_130_3) {
            tmp9 = closure_130_3;
          }
          c5 = 3;
          obj = { value: tmp9, done: true };
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
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return (async () => {
    v1(38)(v3(1115).isPlatformEmbedded, "Download ML model file method called outside native app");
    v1(38)(null != v1(1365).toURLSafe(closure_0), "Could not download ML model, fileSrc was not a valid path");
    fileManager = fileManager.fileManager;
    await fileManager.maybeDownloadMLModelFile(closure_0, closure_1, closure_2);
    return value;
  })();
};
obj.stopMLModelDownloads = function stopMLModelDownloads() {
  const fileManager = DiscordNative.fileManager;
  fileManager.stopMLModelDownloads();
};
obj.canCheckMLModelFilesExist = function canCheckMLModelFilesExist() {
  return typeof DiscordNative.fileManager.checkMLModelFilesExist === "function";
};
obj.checkMLModelFilesExist = function checkMLModelFilesExist(arg0) {
  closure_0 = arg0;
  return (async () => {
    fileManager = fileManager.fileManager;
    await fileManager.checkMLModelFilesExist(closure_0);
    return value;
  })();
};
obj.cleanupUnusedMLModelFiles = function cleanupUnusedMLModelFiles(arg0) {
  closure_0 = arg0;
  return (async () => {
    fileManager = fileManager.fileManager;
    await fileManager.cleanupUnusedMLModelFiles(closure_0);
    return value;
  })();
};
obj.downloadClipsFile = function downloadClipsFile(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  return (async () => {
    v1(38)(v3(1115).isPlatformEmbedded, "Download clips file method called outside native app");
    v1(38)(null != v1(1365).toURLSafe(closure_0), "Could not download clips file, fileSrc was not a valid path");
    fileManager = fileManager.fileManager;
    await fileManager.maybeDownloadClipsFile(closure_0, closure_1, closure_2);
    return value;
  })();
};
obj.canCheckClipsFilesExist = function canCheckClipsFilesExist() {
  return typeof DiscordNative.fileManager.checkClipsFilesExist === "function";
};
obj.checkClipsFilesExist = function checkClipsFilesExist(arg0) {
  closure_0 = arg0;
  return (async () => {
    fileManager = fileManager.fileManager;
    await fileManager.checkClipsFilesExist(closure_0);
    return value;
  })();
};
obj.cleanupUnusedClipsFiles = function cleanupUnusedClipsFiles(arg0) {
  closure_0 = arg0;
  return (async () => {
    fileManager = fileManager.fileManager;
    await fileManager.cleanupUnusedClipsFiles(closure_0);
    return value;
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
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  return (async () => {
    v1(38)(v3(1115).isPlatformEmbedded, "Download OpenH264 file method called outside native app");
    v1(38)(null != v1(1365).toURLSafe(closure_0), "Could not download OpenH264, fileSrc was not a valid path");
    fileManager = fileManager.fileManager;
    await fileManager.maybeDownloadOpenH264(closure_0, closure_1, closure_2, closure_3);
    return value;
  })();
};
obj.cleanupUnusedOpenH264Files = function cleanupUnusedOpenH264Files(items) {
  closure_0 = items;
  return (async () => {
    fileManager = fileManager.fileManager;
    await fileManager.cleanupUnusedOpenH264Files(closure_0);
    return value;
  })();
};
obj.getOpenH264LibraryPath = function getOpenH264LibraryPath() {
  if (require("PlatformUtils").isPlatformEmbedded) {
    const fileManager = DiscordNative.fileManager;
    const getOpenH264LibraryPathSync = fileManager.getOpenH264LibraryPathSync;
    let openH264LibraryPathSync;
    if (getOpenH264LibraryPathSync != null) {
      openH264LibraryPathSync = getOpenH264LibraryPathSync();
    }
    return openH264LibraryPathSync;
  }
};
obj.canCopyImage = function canCopyImage() {
  if (require("PlatformUtils").isPlatformEmbedded) {
    if (typeof DiscordNative.clipboard.copyImage !== "function") {
      return false;
    } else {
      if (null != tmp) {
        const decideFileExtensionResult = FileExtensionUtils.decideFileExtension(tmp, undefined);
        if (null != decideFileExtensionResult) {
          if (!set.has(decideFileExtensionResult)) {
            if (!set1.has(decideFileExtensionResult)) {
              return false;
            }
          }
        }
        const tmp2Result = FileExtensionUtils;
      }
      return true;
    }
  } else {
    return false;
  }
};
obj.cut = function cut() {
  if (require("PlatformUtils").isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    clipboard.cut();
  }
};
obj.paste = function paste() {
  if (require("PlatformUtils").isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    clipboard.paste();
  }
};
obj.readClipboard = function readClipboard() {
  let str = "";
  if (require("PlatformUtils").isPlatformEmbedded) {
    const clipboard = DiscordNative.clipboard;
    str = clipboard.read();
  }
  return str;
};
obj.clipboardHasMixedContent = function clipboardHasMixedContent() {
  let isPlatformEmbedded = require("PlatformUtils").isPlatformEmbedded;
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
obj.sendIPC = function sendIPC(APP_BADGE_SET) {
  const ipc = DiscordNative.ipc;
  const items = [APP_BADGE_SET, ...HermesBuiltin.copyRestArgs()];
  ipc.send.apply(items);
};
obj.isIPCReady = function isIPCReady() {
  if (require("PlatformUtils").isPlatformEmbedded) {
    try {
      let ipc;
      if (DiscordNative != null) {
        ipc = DiscordNative.ipc;
      }
      let tmp4 = null != ipc;
      if (tmp4) {
        tmp4 = typeof DiscordNative.ipc.send === "function";
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
  let _window = arg1;
  if (arg1 === undefined) {
    _window = window;
  }
  const self = this;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
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
            c1 = 1;
            closure_0 = tmp2;
            closure_128_0 = undefined;
            const _Date2 = Date;
            const timestamp = Date.now();
            closure_128_0 = timestamp;
            const _Date3 = Date;
            if (Date.now() - timestamp < num) {
              if (closure_129_2.isIPCReady()) {
                c3 = 3;
                return { value: true, done: true };
              } else {
                const promise = new Promise((scrollAnimation) => closure_1_1.requestAnimationFrame(scrollAnimation));
                c2 = 1;
                c3 = 1;
                const obj1 = { value: promise, done: false };
                return obj1;
              }
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const _Date = Date;
        }
        c3 = 3;
        obj = { value, done: true };
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
obj.webAuthnRegister = function webAuthnRegister(arg0) {
  closure_0 = arg0;
  return (async () => {
    const nativeModules = DiscordNative.nativeModules;
    await nativeModules.ensureModule("discord_webauthn");
    const webAuthn = DiscordNative.webAuthn;
    await webAuthn.webAuthnRegister(closure_128_0);
    return value;
  })();
};
obj.webAuthnAuthenticate = function webAuthnAuthenticate(arg0) {
  closure_0 = arg0;
  return (async () => {
    const nativeModules = DiscordNative.nativeModules;
    await nativeModules.ensureModule("discord_webauthn");
    const webAuthn = DiscordNative.webAuthn;
    await webAuthn.webAuthnAuthenticate(closure_128_0);
    return value;
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
    isWindowsResult = require("PlatformUtils").isWindows();
    obj = require("PlatformUtils");
  }
  if (isWindowsResult) {
    const self = this;
    this.minimize(null);
  }
  const _window = DiscordNative.window;
  _window.focus(flag, arg0);
};
obj.blur = function blur() {
  if (require("PlatformUtils").isPlatformEmbedded) {
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
obj.isAlwaysOnTop = function isAlwaysOnTop(arg0) {
  closure_0 = arg0;
  return (async () => {
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp2;
            closure_128_0 = false;
            if (typeof DiscordNative.window.isAlwaysOnTop === "function") {
              const _window = DiscordNative.window;
              c1 = 1;
              c2 = 1;
              const obj1 = { value: _window.isAlwaysOnTop(closure_0), done: false };
              return obj1;
            } else {
              c2 = 3;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
        }
        c2 = 3;
        obj = { value, done: true };
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
    const _window = DiscordNative.window;
    if (_window != null) {
      showInactive = _window.showInactive;
    }
  }
  if (typeof showInactive === "function") {
    const _window2 = DiscordNative.window;
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
  if (require("PlatformUtils").isPlatformEmbedded) {
    if ("darwin" === tmpResult.getPlatformName()) {
      try {
        const self = this;
        this.sendIPC(IPCEvents.IPCEvents.WINDOW_SET_TRAFFIC_LIGHT_POSITION, arg0);
      } catch (err) {
      }
    }
    tmpResult = require("PlatformUtils");
  }
};
obj.purgeMemory = function purgeMemory() {
  if (require("PlatformUtils").isPlatformEmbedded) {
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
  if (require("PlatformUtils").isPlatformEmbedded) {
    const processUtils = DiscordNative.processUtils;
    processUtils.flushDNSCache();
  }
};
obj.supportsFeature = function supportsFeature(arg0) {
  const features = DiscordNative.features;
  return features.supports(arg0);
};
obj.getEnableHardwareAcceleration = function getEnableHardwareAcceleration() {
  const isPlatformEmbedded = require("PlatformUtils").isPlatformEmbedded;
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
  return (async (arg0) => {
    app = app.app;
    const getOpenOnStart = app.getOpenOnStart;
    if (getOpenOnStart != null) {
      const openOnStart = getOpenOnStart();
    }
    await openOnStart;
    if (1 === tmp4) {
      if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        return { value, done: true };
      }
    } else if (arg0 === 1) {
      c3 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 3;
      return { value, done: true };
    } else if (value == null) {
      const settings = closure_129_6.settings;
      c2 = 1;
      c3 = 1;
      return { value: settings.get("OPEN_ON_STARTUP", true), done: false };
    }
    return value;
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
  let flag = require("PlatformUtils").isPlatformEmbedded;
  if (flag) {
    const _window = DiscordNative.window;
    _window.setZoomFactor(arg0);
    flag = true;
  }
  return flag;
};
obj.setBackgroundThrottling = function setBackgroundThrottling(arg0) {
  if (null != DiscordNative.window.setBackgroundThrottling) {
    const _window = DiscordNative.window;
    const result = _window.setBackgroundThrottling(arg0);
  } else {
    const webContents = DiscordNative.window.webContents;
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
  return (async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp4;
            closure_128_0 = undefined;
            const stopCPUProfiling = self.getDiscordUtils().stopCPUProfiling;
            let stopCPUProfilingResult;
            if (stopCPUProfiling != null) {
              stopCPUProfilingResult = stopCPUProfiling();
            }
            c1 = 1;
            c2 = 1;
            const obj1 = { value: stopCPUProfilingResult, done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          if (null == closure_128_0) {
            const _Error = Error;
            const error = new Error("Failed to stop CPU profiling");
            Promise.reject(error);
          } else {
            const _JSON = JSON;
            const parsed = JSON.parse(closure_128_0);
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
obj.flushStorageData = function flushStorageData() {
  let _Promise = Promise;
  if (require("PlatformUtils").isPlatformEmbedded) {
    _Promise = new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      if (null != DiscordNative.processUtils.flushStorageData) {
        const processUtils = DiscordNative.processUtils;
        processUtils.flushStorageData((arg0) => {
          if (null != arg0) {
            const _Error = Error;
            const error = new Error(arg0);
            let tmp2 = closure_1(error);
          } else {
            tmp2 = closure_0();
          }
          return tmp2;
        });
      } else {
        fn();
      }
    });
  } else {
    _Promise = _Promise.resolve();
  }
  return _Promise;
};
obj.flushCookies = function flushCookies() {
  let _Promise = Promise;
  if (require("PlatformUtils").isPlatformEmbedded) {
    _Promise = new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      if (null != DiscordNative.processUtils.flushCookies) {
        const processUtils = DiscordNative.processUtils;
        processUtils.flushCookies((arg0) => {
          if (null != arg0) {
            const _Error = Error;
            const error = new Error(arg0);
            let tmp2 = closure_1(error);
          } else {
            tmp2 = closure_0();
          }
          return tmp2;
        });
      } else {
        fn();
      }
    });
  } else {
    _Promise = _Promise.resolve();
  }
  return _Promise;
};
obj.setCrashInformation = function setCrashInformation(arg0, arg1) {
  let isPlatformEmbedded = require("PlatformUtils").isPlatformEmbedded;
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
  if (require("PlatformUtils").isPlatformEmbedded) {
    blockDisplaySleepResult = null;
    if (null != DiscordNative.powerSaveBlocker) {
      const powerSaveBlocker = DiscordNative.powerSaveBlocker;
      blockDisplaySleepResult = powerSaveBlocker.blockDisplaySleep();
    }
  }
  return blockDisplaySleepResult;
};
obj.unblockDisplaySleep = function unblockDisplaySleep(arg0) {
  let isPlatformEmbedded = require("PlatformUtils").isPlatformEmbedded;
  if (isPlatformEmbedded) {
    isPlatformEmbedded = null != DiscordNative.powerSaveBlocker;
  }
  if (isPlatformEmbedded) {
    const powerSaveBlocker = DiscordNative.powerSaveBlocker;
    powerSaveBlocker.unblockDisplaySleep(arg0);
  }
};
obj.cleanupDisplaySleep = function cleanupDisplaySleep() {
  let isPlatformEmbedded = require("PlatformUtils").isPlatformEmbedded;
  if (isPlatformEmbedded) {
    isPlatformEmbedded = null != DiscordNative.powerSaveBlocker;
  }
  if (isPlatformEmbedded) {
    const powerSaveBlocker = DiscordNative.powerSaveBlocker;
    powerSaveBlocker.cleanupDisplaySleep();
  }
};
obj.relaunch = function relaunch() {
  if (require("PlatformUtils").isPlatformEmbedded) {
    const app = DiscordNative.app;
    app.relaunch();
  }
};
obj.makeChunkedRequest = function makeChunkedRequest(arg0, array, arg2) {
  obj = require("HTTPUtils");
  _require = "" + obj.getAPIBaseURL() + arg0;
  if (require("PlatformUtils").isPlatformEmbedded) {
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
      const promise = new Promise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        if (null != DiscordNative.http) {
          const http = DiscordNative.http;
          obj = { method, chunkInterval, contentType, token };
          const chunkedRequest = http.makeChunkedRequest(closure_0, array, obj, (arg0, status) => {
            if (null != arg0) {
              let tmp4 = closure_1(arg0);
            } else if (status.status >= 400) {
              const _Error = Error;
              const error = new Error(status.body);
              tmp4 = closure_1(error);
            } else {
              closure_0(status);
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
  obj = require("PlatformUtils");
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
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0(arg0);
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
    windowFullscreenTypeByPid = Client.RunningProcessFullscreenType.UNKNOWN;
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
  windowFullscreenTypeExtraByPid = { quns: Client.QueryUserNotificationState.QUNS_UNKNOWN };
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
  closure_0 = arg0;
  const getSystemServicePerformanceMonitorSnapshot = this.getDiscordUtils().getSystemServicePerformanceMonitorSnapshot;
  if (null == getSystemServicePerformanceMonitorSnapshot) {
    const systemServiceNotAvailableError = new discord_common_DiscordNative.SystemServiceNotAvailableError();
    return Promise.reject(systemServiceNotAvailableError);
  } else {
    new Promise((arg0, arg1) => {
      closure_0 = arg1;
      const timeout = setTimeout(() => {
        const error = new Error("Timed out waiting for performance snapshot");
        return closure_0(error);
      }, 1000);
    });
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      getSystemServicePerformanceMonitorSnapshot(closure_0, (arg0) => {
        if ("null" !== arg0) {
          try {
            const _JSON = JSON;
            closure_0(JSON.parse(arg0));
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
            tmp12Result = closure_1(error);
          }
        } else {
          const _Error = Error;
          const error1 = new Error("Performance snapshot not available");
          closure_1(error1);
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
  obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp6 = _slicedToArray(tmp4, 2);
    [tmp7, tmp9] = tmp6;
    if (tmp9 > stable[tmp7]) {
      obj.return();
      let flag2 = true;
      return true;
    } else if (tmp10 < stable[tmp8]) {
      obj.return();
      let flag = false;
      return false;
    }
  }
  return true;
};
obj.fetchRiotGamesLiveClientData = function fetchRiotGamesLiveClientData(arg0) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (require("PlatformUtils").isPlatformEmbedded) {
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
  obj = require("PlatformUtils");
};
obj.appFirstRenderAfterReadyPayload = function appFirstRenderAfterReadyPayload(arg0) {
  if (obj.isDesktop()) {
    const self = this;
    const _performance = performance;
    performance.mark("app_first_render_after_ready_payload");
    this.sendIPC(IPCEvents.IPCEvents.APP_FIRST_RENDER_AFTER_READY_PAYLOAD, arg0);
  }
  obj = require("PlatformUtils");
};
obj.appLoaded = function appLoaded() {
  backwardCompatSend(IPCEvents.IPCEvents.APP_LOADED);
};
obj.indexLoadedAsync = function indexLoadedAsync() {
  backwardCompatSend(IPCEvents.IPCEvents.APP_ASYNC_INDEX_TSX_LOADED);
};
obj.setUseRequireModuleCache = function setUseRequireModuleCache(arg0) {
  global = arg0;
};
obj.GetSystemGpuStats = function GetSystemGpuStats(arg0) {
  closure_0 = arg0;
  const self = this;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
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
            closure_1 = tmp5;
            closure_128_0 = undefined;
            if (tmp2(c2[5]).isPlatformEmbedded) {
              c2 = 1;
              c3 = 1;
              const obj1 = { value: self.ensureModule("discord_media"), done: false };
              return obj1;
            } else {
              c3 = 3;
              const obj2 = { value: [], done: true };
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = closure_129_1.requireModule("discord_media");
          let getGpuStats;
          if (closure_128_0 != null) {
            getGpuStats = closure_128_0.getGpuStats;
          }
          if (null == getGpuStats) {
            const items = [];
          } else {
            const gpuStats = closure_128_0.getGpuStats(closure_129_0);
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
const size = fn(2);
let result = size.fileFinishedImporting("utils/web/DesktopNativeUtils.tsx");

export default obj;
export const SaveImageResult = obj;
export { sanitizeFilename };
export { getFileData };
export { getImageData };
export const NativePermissionRequestType = { Camera: 0, [0]: "Camera", Microphone: 1, [1]: "Microphone", Photo: 2, [2]: "Photo", InputMonitoring: 3, [3]: "InputMonitoring", ScreenRecording: 4, [4]: "ScreenRecording" };