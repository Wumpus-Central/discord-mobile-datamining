// discord_app/utils/web/DesktopNativeUtils.tsx
import logger_Logger from "../../../discord_common/js/packages/logger/Logger.tsx";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import Constants from "../../Constants.tsx";
import flow_Client from "../../flow/Client.tsx";
import discord_common_DiscordNative from "../../../discord_common/js/packages/discord-native-types/DiscordNative.tsx";
import DomainMigrationUtils from "../../../discord_common/js/shared/domain-migration/DomainMigrationUtils.tsx";
import GameDetectionDebugLevel from "../../modules/game_detection/GameDetectionDebugLevel.tsx";
import IPCEvents from "../../../discord_common/js/packages/discord-native-types/IPCEvents.tsx";
import FileExtensionUtils from "../../modules/media/FileExtensionUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c10, c9, closeResult, importDefault;

function sanitizeFilename(str) {
  try {
    const _decodeURIComponent = decodeURIComponent;
    str = decodeURIComponent(str);
    const str3 = str.replace(re19, "$1");
    const str5 = str3.replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2");
    return str5.replace(re18, "_");
  } catch (err) {
    const str8 = str.replace(re20, "$1");
    const str10 = str8.replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2");
    return str10.replace(re18, "_");
  }
}
function getFileData() {
  return obj(...arguments);
}
let obj = function _getFileData() {
  obj = _asyncToGenerator(async function (arg0) {
    let c3;
    let c4;
    let closure_0 = arg0;
    let closure_2 = tmp3;
    const value = tmp3;
    const _fetch = fetch;
    const _Request = Request;
    const self = this;
    const self2 = this;
    const request = new Request(closure_0, { method: "GET", mode: "cors" });
    await fetch(request);
    closure_0 = value;
    closure_130_1(closure_130_2[3])(200 === closure_0.status, "Data fetch unsuccessful");
    await closure_0.arrayBuffer();
    closure_130_1(closure_130_2[3])(null != value, "Data is null");
    return value;
  });
  return obj(...arguments);
};
function getImageData(arg0) {
  return getFileData(arg0);
}
obj = function _transcodeImageToPng() {
  obj = _asyncToGenerator(async (arg0, type) => {
    let closure_3;
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function (arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let offscreenCanvas;
          let tmp;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_0 = undefined;
              offscreenCanvas = undefined;
              closeResult = undefined;
              tmp = undefined;
              const _Blob = Blob;
              const items = [closure_0];
              const self3 = this;
              const self4 = this;
              const obj4 = { type };
              const blob = new Blob(items, obj4);
              c6 = 1;
              c7 = 1;
              const obj5 = { value: globalThis.createImageBitmap(blob), done: false };
              return obj5;
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_0 = value;
              c5 = 1;
              const self = this;
              const self2 = this;
              offscreenCanvas = new globalThis.OffscreenCanvas(closure_0.width, closure_0.height);
              closeResult = offscreenCanvas.getContext("2d");
              closure_131_1(closure_131_2[3])(null != closeResult, "Failed to acquire 2d context for image transcode");
              closeResult.drawImage(closure_0, 0, 0);
              c6 = 3;
              c7 = 1;
              const obj7 = { value: offscreenCanvas.convertToBlob({ type: "image/png" }), done: false };
              return obj7;
            }
          } else if (2 === c6) {
            c5 = 0;
            closeResult = closure_0.close();
            throw closure_4;
          } else if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closeResult = closure_0;
              closure_0.close();
              c7 = 3;
              return { value, done: true };
            } else {
              tmp = value;
              closeResult = tmp.arrayBuffer();
              c6 = 4;
              c7 = 1;
              return { value: closeResult, done: false };
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closeResult = closure_0;
            closure_0.close();
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            closeResult = closure_0;
            closure_0.close();
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp18) {
          closure_4 = tmp18;
          if (0 === c5) {
            c7 = 3;
            throw tmp18;
          } else {
            c6 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function normalizeRunningGame(id, arg1) {
  let UNKNOWN;
  let _parseInt;
  let flag;
  let name;
  let name2;
  let pidPath;
  let sandboxed;
  let str2;
  let windowHandle;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_13;
  }
  let str = id.id;
  if (str == null) {
    str = "";
  }
  obj = {
    id: tmp[str],
    nativeProcessObserverId: _parseInt(str2, 10),
    name,
    origGameName: null,
    processName: name2,
    hidden: null,
    elevated: null,
    sandboxed,
    lastFocused: null,
    exePath: null,
    exeName: null,
    cmdLine: null,
    distributor: null,
    sku: null,
    pid: null,
    pidPath,
    gameMetadata: null,
    windowHandle,
    fullscreenType: UNKNOWN,
    isLauncher: flag,
    executableFingerprint: id.executableFingerprint,
  };
  str2 = id.id;
  _parseInt = parseInt;
  if (str2 == null) {
    str2 = "";
  }
  name = id.gameName;
  if (name == null) {
    name = id.name;
  }
  ({ origGameName: obj.origGameName, name: name2 } = id);
  if (name2 == null) {
    name2 = "";
  }
  ({ hidden: obj.hidden, elevated: obj.elevated, sandboxed } = id);
  if (sandboxed == null) {
    sandboxed = false;
  }
  ({
    lastFocused: obj.lastFocused,
    exePath: obj.exePath,
    exeName: obj.exeName,
    cmdLine: obj.cmdLine,
    distributor: obj.distributor,
    sku: obj.sku,
    pid: obj.pid,
    pidPath,
  } = id);
  if (pidPath == null) {
    pidPath = [];
  }
  ({ gameMetadata: obj.gameMetadata, windowHandle } = id);
  if (windowHandle == null) {
    windowHandle = null;
  }
  UNKNOWN = id.fullscreenType;
  if (UNKNOWN == null) {
    UNKNOWN = flow_Client.RunningProcessFullscreenType.UNKNOWN;
  }
  flag = id.isLauncher;
  if (flag == null) {
    flag = false;
  }
  return obj;
}
function backwardCompatSend(APP_ASYNC_INDEX_TSX_LOADED) {
  const substr = [...arguments].slice();
  obj = require("PlatformUtils");
  if (obj.isDesktop()) {
    try {
      const sendIPC = obj2.sendIPC;
      const items = [APP_ASYNC_INDEX_TSX_LOADED];
      HermesBuiltin.arraySpread(items, substr, 1);
      HermesBuiltin.apply(sendIPC, items, obj2);
    } catch (err) {}
  }
}
const NativeFeatures = Constants.NativeFeatures;
const set = new Set(["jpg", "jpeg", "jfif", "png"]);
const set1 = new Set(["webp", "avif"]);
const set2 = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]);
let closure_10 = null;
let buildNumber = null;
let moduleVersions = null;
let closure_13 = {};
let closure_14 = {};
if (null != DiscordNative) {
  let app = DiscordNative.app;
  let str = app.getVersion();
  let str2 = ".";
  let parts = str.split(".");
  closure_10 = parts.map((item) => parseInt(item));
  const app2 = DiscordNative.app;
  moduleVersions = app2.getModuleVersions();
  const app3 = DiscordNative.app;
  buildNumber = app3.getBuildNumber();
}
new Set([
  "discord_erlpack",
  "discord_game_utils",
  "discord_rpc",
  "discord_spellcheck",
  "discord_utils",
  "discord_voice",
]);
let c15 = false;
let discordIsElevated = null;
const lastImageSaveDirectory = "lastImageSaveDirectory";
const re18 = /[<>:"/\\|?*@]/g;
const re19 = /(\.[a-zA-Z0-9]+):[^.]*$/;
const re20 = /(\.[a-zA-Z0-9]+)%3A.+$/;
const re21 = /[^a-zA-Z0-9]/g;
const re22 = /\.[^.]*$/;
obj = { SAVED: "saved", CANCELED: "canceled", ERRORED: "errored" };
let obj2 = {
  requireModule(discord_voice) {
    if (closure_14.hasOwnProperty(discord_voice)) {
      if (null != closure_14[discord_voice]) {
        return closure_14[discord_voice];
      }
    }
    const nativeModules = DiscordNative.nativeModules;
    const requireModuleResult = nativeModules.requireModule(discord_voice);
    closure_14[discord_voice] = requireModuleResult;
    return requireModuleResult;
  },
  ensureModule(discord_voice) {
    let ensureModuleResult;
    if (require("PlatformUtils").isPlatformEmbedded) {
      const nativeModules = DiscordNative.nativeModules;
      ensureModuleResult = nativeModules.ensureModule(discord_voice);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("not embedded");
      ensureModuleResult = reject(error);
    }
    return ensureModuleResult;
  },
  getCrashReporterMetadata() {
    const crashReporter = DiscordNative.crashReporter;
    return crashReporter.getMetadata();
  },
  getSetting(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let c0;
      let c1;
      let settings;
      settings = settings.settings;
      await settings.get(closure_0, closure_1);
      return value;
    })();
  },
  beforeUnload() {
    const self = this;
    let requireModuleResult;
    try {
      requireModuleResult = self.requireModule("discord_overlay2");
    } catch (err) {}
    const reset = requireModuleResult && requireModuleResult.reset;
    if (reset) {
      requireModuleResult.reset();
    }
    const destroyHostProcess =
      requireModuleResult && requireModuleResult.disconnectAllProcesses && requireModuleResult.destroyHostProcess;
    if (destroyHostProcess) {
      const result = requireModuleResult.disconnectAllProcesses();
      requireModuleResult.destroyHostProcess();
    }
    const powerMonitor = DiscordNative.powerMonitor;
    powerMonitor.removeAllListeners();
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
      const cacheUserData = userDataCache.cacheUserData;
      const Storage2 = Storage3.Storage;
      cacheUserData(Storage2.stringify());
    }
  },
  inputEventRegister(parsed, arr, arg2, arg3) {
    const discordUtils = this.getDiscordUtils();
    const inputEventRegister = discordUtils.inputEventRegister;
    parsed = parseInt("" + parsed);
    inputEventRegister(
      parsed,
      arr.map((item) => {
        let items1;
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = item;
        if (typeof tmp3 === "string") {
          const items = [tmp, tmp2, tmp3];
          items1 = items;
        } else {
          items1 = [tmp, tmp2];
        }
        return items1;
      }),
      arg2,
      arg3,
    );
  },
  inputEventUnregister(match) {
    const discordUtils = this.getDiscordUtils();
    discordUtils.inputEventUnregister(parseInt(match));
  },
  setOnInputEventCallback(arg0) {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const self = this;
      const discordUtils = this.getDiscordUtils();
      discordUtils.inputWatchAll(arg0);
    }
  },
  setFocused(arg0) {
    const discordUtils = this.getDiscordUtils();
    discordUtils.inputSetFocused(arg0);
  },
  setObservedGamesCallback(mapped, normalizeCallback, arg2, arg3) {
    let sum;
    let closure_0 = arg2;
    try {
      const self = this;
      closure_13 = {};
      importDefault = 0;
      const discordUtils = this.getDiscordUtils();
      mapped = mapped.map((id) => {
        importDefault = importDefault + 1;
        if (null != id.id) {
          closure_13[importDefault] = id.id;
        }
        obj = { cmdline: id.cmdLine, id: importDefault };
        const merged = Object.assign(id);
        return obj;
      });
      let closure_2 = closure_13;
      const tmp6 = null != arg3 && null != discordUtils.setProcessObserverUserId;
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
    } catch (err) {}
  },
  setProcessObserverCollectExecutableFingerprint(arg0) {
    const discordUtils = this.getDiscordUtils();
    const setProcessObserverCollectExecutableFingerprint = discordUtils.setProcessObserverCollectExecutableFingerprint;
    if (setProcessObserverCollectExecutableFingerprint != null) {
      const result = setProcessObserverCollectExecutableFingerprint(arg0);
    }
  },
  getExecutableFingerprintForProcess(arg0) {
    const self = this;
    let closure_0 = arg0;
    const promise = new Promise((fn) => {
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
    return promise;
  },
  setGameDetectionCallback(arg0) {
    let closure_0 = arg0;
    const discordUtils = this.getDiscordUtils();
    if (discordUtils.setGameDetectionCallback != null) {
      const result = setGameDetectionCallback((arr, arr2) => {
        const mapped = arr.map((item) => closure_1_29(item));
        return closure_0(
          mapped,
          arr2.map((item) => closure_1_29(item)),
        );
      });
    }
  },
  setGameDetectionErrorCallback(arg0) {
    const discordUtils = this.getDiscordUtils();
    if (discordUtils.setGameDetectionErrorCallback != null) {
      const result = setGameDetectionErrorCallback(arg0);
    }
  },
  setRobloxSubgameDetectionConfig(arg0, arg1) {
    const discordUtils = this.getDiscordUtils();
    const setRobloxSubgameDetectionConfig = discordUtils.setRobloxSubgameDetectionConfig;
    if (setRobloxSubgameDetectionConfig != null) {
      const result = setRobloxSubgameDetectionConfig(arg0, arg1);
    }
  },
  checkForRobloxSubgameUpdate() {
    const discordUtils = this.getDiscordUtils();
    const checkForRobloxSubgameUpdate = discordUtils.checkForRobloxSubgameUpdate;
    if (checkForRobloxSubgameUpdate != null) {
      const result = checkForRobloxSubgameUpdate();
    }
  },
  setCandidateGamesCallback(arg0) {
    let closure_0 = arg0;
    const discordUtils = this.getDiscordUtils();
    const result = discordUtils.setCandidateGamesCallback((arr) => {
      closure_0(arr.map((item) => closure_1_29(item)));
    });
  },
  clearCandidateGamesCallback() {
    const discordUtils = this.getDiscordUtils();
    const result = discordUtils.clearCandidateGamesCallback();
  },
  setGameCandidateOverrides(arr) {
    const discordUtils = this.getDiscordUtils();
    const result = discordUtils.setGameCandidateOverrides(
      arr.map((item) => {
        obj = {};
        const merged = Object.assign(item);
        ({ id: obj.gameId, name: obj.gameName } = item);
        return obj;
      }),
    );
  },
  setObserverDebugCallback(arg0, NONE, arg2) {
    let closure_0 = arg0;
    const discordUtils = this.getDiscordUtils();
    const result = discordUtils.setObserverDebugCallback((arg0) => closure_0(arg0), NONE, arg2);
  },
  clearObserverDebugCallback() {
    const discordUtils = this.getDiscordUtils();
    const result = discordUtils.setObserverDebugCallback(null, GameDetectionDebugLevel.GameDetectionDebugLevel.NONE, 0);
  },
  shouldDisplayNotifications() {
    const discordUtils = this.getDiscordUtils();
    return discordUtils.shouldDisplayNotifications();
  },
  getVoiceEngine() {
    const requireModuleResult = this.requireModule("discord_voice");
    const tmp2 = c15;
    if (!tmp2) {
      obj = logger_Logger;
      obj.setNativeLogFn((arg0, arg1, arg2) => {
        requireModuleResult.consoleLog(arg1, "[" + arg0 + "] " + arg2);
      });
    }
    c15 = true;
    return requireModuleResult;
  },
  getDiscordUtils() {
    const self = this;
    if (!c15) {
      try {
        const voiceEngine = self.getVoiceEngine();
      } catch (err) {}
    }
    return self.requireModule("discord_utils");
  },
  isSystemDarkMode() {
    obj = require("PlatformUtils");
    let isWindowsResult = obj.isWindows();
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
  },
  getDiscordIsElevated() {
    let tmp = null;
    obj = require("PlatformUtils");
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
  },
  getGameUtils() {
    return this.requireModule("discord_game_utils");
  },
  getCloudSync() {
    return this.requireModule("discord_cloudsync");
  },
  getDispatch() {
    return this.requireModule("discord_dispatch");
  },
  setBadge(arg0) {
    obj = require("PlatformUtils");
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
      const tmpResult = require("PlatformUtils");
      if ("win32" === tmpResult.getPlatformName()) {
        const self = this;
        this.sendIPC(IPCEvents.IPCEvents.APP_BADGE_SET, arg0);
      } else {
        const tmpResult2 = require("PlatformUtils");
        if ("linux" === tmpResult2.getPlatformName()) {
          const app = DiscordNative.app;
          let num = 0;
          const setBadgeCount = app.setBadgeCount;
          if (arg0 >= 0) {
            num = arg0;
          }
          setBadgeCount(num);
        }
      }
    }
  },
  setSystemTrayIcon(arg0) {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const self = this;
      this.sendIPC(IPCEvents.IPCEvents.SYSTEM_TRAY_SET_ICON, arg0);
    }
  },
  setSystemTrayApplications(arg0) {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const self = this;
      this.sendIPC(IPCEvents.IPCEvents.SYSTEM_TRAY_SET_APPLICATIONS, arg0);
    }
  },
  setSystemTrayStates(arg0) {
    backwardCompatSend(IPCEvents.IPCEvents.SYSTEM_TRAY_SET_STATES, arg0);
  },
  setSystemTrayStrings(arg0) {
    backwardCompatSend(IPCEvents.IPCEvents.SYSTEM_TRAY_SET_STRINGS, arg0);
  },
  setThumbarButtons(arg0) {
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
  },
  bounceDock(arg0) {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const app = DiscordNative.app;
      if (null != app.dock) {
        const tmp3 = arg0;
        let dock = app.dock;
        let closure_1 = dock.bounce(arg0);
        return _asyncToGenerator(async () => {
          let value;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let closure_0;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  value = tmp4;
                  closure_0 = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value, done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                const dock = closure_129_0.dock;
                dock.cancelBounce(closure_0);
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp10) {
              c3 = 3;
              throw tmp10;
            }
          }
        });
      }
    }
  },
  copy(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let clipboard;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (v3(dependencyMap[5]).isPlatformEmbedded) {
              clipboard = clipboard.clipboard;
              c1 = 1;
              v3 = 1;
              const obj4 = { value: clipboard.copy(closure_0), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp8) {
          v3 = 3;
          throw tmp8;
        }
      }
    })();
  },
  copyImage(arg0, combined) {
    let closure_0 = arg0;
    let closure_1 = combined;
    return (async () => {
      let closure_1;
      function transcodeImageToPng() {
        return closure_1_28(...arguments);
      }
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_2;
          let tmp;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp4;
              closure_0 = undefined;
              tmp = undefined;
              combined = undefined;
              const tmp53 = tmp(closure_2[3]);
              tmp53(closure_0(closure_2[5]).isPlatformEmbedded, "Copy image method called outside native app");
              tmp(closure_2[3])(typeof DiscordNative.clipboard.copyImage === "function", "Copy image not supported");
              c3 = 1;
              c4 = 1;
              const obj4 = { value: getImageData(closure_0), done: false };
              return obj4;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_0 = value;
              const obj12 = closure_0(closure_2[11]);
              tmp = obj12.decideFileExtension(closure_130_0, closure_130_1);
              if (null != tmp) {
                if (set2.has(tmp)) {
                  closure_0 = closure_130_1;
                  const tmp33 = closure_0;
                  if (closure_130_1 == null) {
                    const _HermesInternal2 = HermesInternal;
                    closure_0 = "image/" + tmp;
                  }
                  c3 = 2;
                  c4 = 1;
                  const obj6 = { value: transcodeImageToPng(tmp33, closure_0), done: false };
                  return obj6;
                }
              }
              if (null != tmp) {
                if (set.has(tmp)) {
                  const _HermesInternal = HermesInternal;
                  combined = "image." + tmp;
                }
                const clipboard2 = DiscordNative.clipboard;
                const _Buffer2 = Buffer;
                c3 = 4;
                c4 = 1;
                const obj7 = { value: clipboard2.copyImage(Buffer.from(closure_0), combined), done: false };
                return obj7;
              }
              combined = closure_130_0;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_0 = value;
              const clipboard = DiscordNative.clipboard;
              const _Buffer = Buffer;
              c3 = 3;
              c4 = 1;
              const obj9 = { value: clipboard.copyImage(Buffer.from(closure_0), "image.png"), done: false };
              return obj9;
            }
          } else if (3 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              c4 = 3;
              const obj11 = { value: undefined, done: true };
              return obj11;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp39) {
          c4 = 3;
          throw tmp39;
        }
      }
    })();
  },
  copyImageBlob(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let clipboard;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp4;
              tmp = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: tmp.arrayBuffer(), done: false };
              return obj4;
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              tmp = value;
              clipboard = clipboard.clipboard;
              const _Buffer = Buffer;
              c2 = 2;
              c3 = 1;
              const obj6 = { value: clipboard.copyImage(Buffer.from(tmp), closure_129_1), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    })();
  },
  canSaveImage(uri, contentType) {
    if (null != uri) {
      if (require("PlatformUtils").isPlatformEmbedded) {
        const tmpResult = FileExtensionUtils;
        const decideFileExtensionResult = tmpResult.decideFileExtension(uri, contentType);
        const hasItem = null == decideFileExtensionResult || set2.has(decideFileExtensionResult);
        return hasItem;
      }
    }
    return false;
  },
  saveImage(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async () => {
      let closure_6;
      let unknown_str;
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c8;
        try {
          let png;
          let directory;
          let closure_3;
          let closure_4;
          let c5;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = undefined;
              png = undefined;
              directory = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              c5 = undefined;
              const tmp75 = png(directory[3]);
              tmp75(unknown_str(directory[5]).isPlatformEmbedded, "Save image method called outside native app");
              const obj15 = png(directory[12]);
              const toURLSafeResult = obj15.toURLSafe(closure_0);
              if (null == toURLSafeResult) {
                c10 = 3;
                const obj4 = { value: constants.ERRORED, done: true };
                return obj4;
              } else {
                const str12 = toURLSafeResult.pathname;
                const parts = str12.split("/");
                const arr = parts.pop();
                unknown_str = arr;
                if (arr == null) {
                  unknown_str = "unknown";
                }
                const str = sanitizeFilename(unknown_str);
                closure_0 = str;
                const searchParams = toURLSafeResult.searchParams;
                const str2 = searchParams.get("format");
                if (null != str2) {
                  const str3 = str2.replace(closure_1_21, "");
                  const formatted = str3.toLowerCase();
                  if (formatted.length > 0) {
                    const _HermesInternal2 = HermesInternal;
                    closure_0 = "" + str.replace(closure_1_22, "") + "." + formatted;
                  }
                } else if (!str.includes(".")) {
                  const obj10 = unknown_str(directory[11]);
                  const decideFileExtensionResult = obj10.decideFileExtension(closure_0, png);
                  directory = decideFileExtensionResult;
                  png = directory;
                  if (directory == null) {
                    png = "png";
                  }
                  const _HermesInternal = HermesInternal;
                  closure_0 = "" + str + "." + png;
                }
                c9 = 1;
                c10 = 1;
                const obj5 = { value: getImageData(closure_0), done: false };
                return obj5;
              }
            }
          } else {
            let get;
            if (1 === c9) {
              if (arg0 === 1) {
                c10 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_3 = value;
                const _Buffer = Buffer;
                closure_4 = Buffer.from(closure_3);
                const Storage2 = unknown_str(directory[6]).Storage;
                get = Storage2.get;
                c5 = get(lastImageSaveDirectory);
                if (typeof c5 !== "string") {
                  c5 = undefined;
                }
                if (typeof tmp.fileManager.saveWithDialog2 === "function") {
                  const fileManager = tmp.fileManager;
                  get = closure_4;
                  let c3 = c5;
                  const saveWithDialog2 = fileManager.saveWithDialog2;
                  const tmp33 = closure_0;
                  if (c5 == null) {
                    c3 = undefined;
                  }
                  c9 = 3;
                  c10 = 1;
                  const obj7 = { value: saveWithDialog2(get, tmp33, c3), done: false };
                  return obj7;
                } else {
                  c8 = 1;
                  const fileManager2 = tmp.fileManager;
                  get = closure_4;
                  let c4 = c5;
                  const saveWithDialog = fileManager2.saveWithDialog;
                  const tmp71 = closure_0;
                  if (c5 == null) {
                    c4 = undefined;
                  }
                  c9 = 4;
                  c10 = 1;
                  const obj8 = { value: saveWithDialog(get, tmp71, c4), done: false };
                  return obj8;
                }
              }
            } else if (2 === c9) {
              c8 = 0;
              c10 = 3;
              const obj9 = { value: constants.ERRORED, done: true };
              return obj9;
            } else {
              if (3 === c9) {
                if (arg0 === 1) {
                  c10 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c10 = 3;
                  const obj11 = { value, done: true };
                  return obj11;
                } else {
                  png = value;
                  if (null == value) {
                    c10 = 3;
                    const obj12 = { value: constants.ERRORED, done: true };
                    return obj12;
                  } else if (png.canceledByUser) {
                    c10 = 3;
                    const obj13 = { value: constants.CANCELED, done: true };
                    return obj13;
                  } else {
                    directory = png.directory;
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
                let ERRORED;
                if ("" !== directory) {
                  const Storage = unknown_str(directory[6]).Storage;
                  get = lastImageSaveDirectory;
                  const result = Storage.set(lastImageSaveDirectory, directory);
                  ERRORED = constants.SAVED;
                }
                c10 = 3;
                const obj14 = { value: ERRORED, done: true };
                return obj14;
              }
              ERRORED = constants.ERRORED;
            }
          }
        } catch (tmp49) {
          let closure_7 = tmp49;
          if (0 === c8) {
            c10 = 3;
            throw tmp49;
          } else {
            c9 = 2;
          }
        }
      }
    })();
  },
  saveFile(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let c4;
      let c5;
      let fileManager;
      let unknown_str;
      let closure_3 = tmp;
      let closure_2 = tmp2;
      const tmp27 = closure_1(closure_2[3]);
      tmp27(unknown_str(closure_2[5]).isPlatformEmbedded, "Save file method called outside native app");
      const obj8 = closure_1(closure_2[12]);
      const toURLSafeResult = obj8.toURLSafe(closure_0);
      const tmp30 = closure_0;
      if (null == toURLSafeResult) {
        return null;
      }
      const tmp33 = closure_1;
      if (closure_1 == null) {
        const str = toURLSafeResult.pathname;
        const parts = str.split("/");
        closure_1 = parts.pop();
      }
      unknown_str = closure_1;
      if (closure_1 == null) {
        unknown_str = "unknown";
      }
      closure_0 = unknown_str;
      if (null == tmp33) {
        closure_0 = sanitizeFilename(tmp18);
      }
      await closure_1_25(tmp30);
      closure_1 = value;
      const _Buffer = Buffer;
      closure_2 = Buffer.from(closure_1);
      fileManager = fileManager.fileManager;
      await fileManager.saveWithDialog(closure_2, closure_0, undefined);
      closure_3 = value;
      let tmp8 = null;
      if (null != closure_3) {
        tmp8 = closure_3;
      }
      return tmp8;
    })();
  },
  downloadMLModelFile(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async () => {
      let fileManager;
      const tmp10 = v1(closure_1_2[3]);
      tmp10(v3(closure_1_2[5]).isPlatformEmbedded, "Download ML model file method called outside native app");
      const obj6 = v1(closure_1_2[12]);
      const toURLSafeResult = obj6.toURLSafe(closure_0);
      v1(closure_1_2[3])(null != toURLSafeResult, "Could not download ML model, fileSrc was not a valid path");
      fileManager = fileManager.fileManager;
      await fileManager.maybeDownloadMLModelFile(closure_0, closure_1, closure_2);
      return value;
    })();
  },
  stopMLModelDownloads() {
    const fileManager = DiscordNative.fileManager;
    fileManager.stopMLModelDownloads();
  },
  canCheckMLModelFilesExist() {
    return typeof DiscordNative.fileManager.checkMLModelFilesExist === "function";
  },
  checkMLModelFilesExist(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c0;
      let c1;
      let fileManager;
      fileManager = fileManager.fileManager;
      await fileManager.checkMLModelFilesExist(closure_0);
      return value;
    })();
  },
  cleanupUnusedMLModelFiles(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c0;
      let c1;
      let fileManager;
      fileManager = fileManager.fileManager;
      await fileManager.cleanupUnusedMLModelFiles(closure_0);
      return value;
    })();
  },
  downloadClipsFile(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async () => {
      let fileManager;
      const tmp10 = v1(closure_1_2[3]);
      tmp10(v3(closure_1_2[5]).isPlatformEmbedded, "Download clips file method called outside native app");
      const obj6 = v1(closure_1_2[12]);
      const toURLSafeResult = obj6.toURLSafe(closure_0);
      v1(closure_1_2[3])(null != toURLSafeResult, "Could not download clips file, fileSrc was not a valid path");
      fileManager = fileManager.fileManager;
      await fileManager.maybeDownloadClipsFile(closure_0, closure_1, closure_2);
      return value;
    })();
  },
  canCheckClipsFilesExist() {
    return typeof DiscordNative.fileManager.checkClipsFilesExist === "function";
  },
  checkClipsFilesExist(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c0;
      let c1;
      let fileManager;
      fileManager = fileManager.fileManager;
      await fileManager.checkClipsFilesExist(closure_0);
      return value;
    })();
  },
  cleanupUnusedClipsFiles(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c0;
      let c1;
      let fileManager;
      fileManager = fileManager.fileManager;
      await fileManager.cleanupUnusedClipsFiles(closure_0);
      return value;
    })();
  },
  getClipsDataDirSync() {
    const fileManager = DiscordNative.fileManager;
    return fileManager.getClipsDataDirSync();
  },
  getClipsSentryDirSync() {
    if (null != DiscordNative.fileManager.getClipsSentryDirSync) {
      const fileManager = DiscordNative.fileManager;
      return fileManager.getClipsSentryDirSync();
    }
  },
  downloadOpenH264(arg0, arg1, arg2, arg3) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    return (async () => {
      let fileManager;
      const tmp10 = v1(closure_1_2[3]);
      tmp10(v3(closure_1_2[5]).isPlatformEmbedded, "Download OpenH264 file method called outside native app");
      const obj6 = v1(closure_1_2[12]);
      const toURLSafeResult = obj6.toURLSafe(closure_0);
      v1(closure_1_2[3])(null != toURLSafeResult, "Could not download OpenH264, fileSrc was not a valid path");
      fileManager = fileManager.fileManager;
      await fileManager.maybeDownloadOpenH264(closure_0, closure_1, closure_2, closure_3);
      return value;
    })();
  },
  cleanupUnusedOpenH264Files(items) {
    let closure_0 = items;
    return (async () => {
      let c0;
      let c1;
      let fileManager;
      fileManager = fileManager.fileManager;
      await fileManager.cleanupUnusedOpenH264Files(items);
      return value;
    })();
  },
  getOpenH264LibraryPath() {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const fileManager = DiscordNative.fileManager;
      const getOpenH264LibraryPathSync = fileManager.getOpenH264LibraryPathSync;
      let openH264LibraryPathSync;
      if (getOpenH264LibraryPathSync != null) {
        openH264LibraryPathSync = getOpenH264LibraryPathSync();
      }
      return openH264LibraryPathSync;
    }
  },
  canCopyImage() {
    if (require("PlatformUtils").isPlatformEmbedded) {
      if (typeof DiscordNative.clipboard.copyImage !== "function") {
        return false;
      } else {
        if (null != uri) {
          const tmp2Result = FileExtensionUtils;
          const decideFileExtensionResult = tmp2Result.decideFileExtension(uri, undefined);
          if (null != decideFileExtensionResult) {
            if (!set.has(decideFileExtensionResult)) {
              if (!set1.has(decideFileExtensionResult)) {
                return false;
              }
            }
          }
        }
        return true;
      }
    } else {
      return false;
    }
  },
  cut() {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const clipboard = DiscordNative.clipboard;
      clipboard.cut();
    }
  },
  paste() {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const clipboard = DiscordNative.clipboard;
      clipboard.paste();
    }
  },
  readClipboard() {
    let str = "";
    if (require("PlatformUtils").isPlatformEmbedded) {
      const clipboard = DiscordNative.clipboard;
      str = clipboard.read();
    }
    return str;
  },
  clipboardHasMixedContent() {
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
  },
  on(arg0, arg1) {
    const ipc = DiscordNative.ipc;
    ipc.on(arg0, arg1);
  },
  onIPC(arg0, arg1) {
    const ipc = DiscordNative.ipc;
    ipc.on(arg0, arg1);
  },
  invoke(arg0) {
    const ipc = DiscordNative.ipc;
    const items = [arg0, ...HermesBuiltin.copyRestArgs()];
    return ipc.invoke.apply(items);
  },
  invokeIPC(arg0) {
    const ipc = DiscordNative.ipc;
    const items = [arg0, ...HermesBuiltin.copyRestArgs()];
    return ipc.invoke.apply(items);
  },
  send(arg0) {
    const ipc = DiscordNative.ipc;
    const items = [arg0, ...HermesBuiltin.copyRestArgs()];
    ipc.send.apply(items);
  },
  sendIPC(APP_BADGE_SET) {
    const ipc = DiscordNative.ipc;
    const items = [APP_BADGE_SET, ...HermesBuiltin.copyRestArgs()];
    ipc.send.apply(items);
  },
  isIPCReady() {
    if (require("PlatformUtils").isPlatformEmbedded) {
      try {
        let ipc;
        if (DiscordNative != null) {
          ipc = DiscordNative.ipc;
        }
        return null != ipc && typeof DiscordNative.ipc.send === "function";
      } catch (err) {
        return false;
      }
    } else {
      return true;
    }
  },
  waitForIPCReady() {
    let _window = arg1;
    if (arg1 === undefined) {
      const tmp = globalThis;
      _window = window;
    }
    let self = this;
    return (async function () {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let c1 = 1;
              let closure_0 = tmp;
              const _Date2 = Date;
              const timestamp = Date.now();
              const _Date3 = Date;
              if (Date.now() - timestamp >= 2) {
                c3 = 3;
                return { value: false, done: true };
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
            const _Date = Date;
          }
          if (closure_129_2.isIPCReady()) {
            c3 = 3;
            return { value: true, done: true };
          } else {
            self = this;
            const self2 = this;
            const promise = new Promise((step) => closure_1_1.requestAnimationFrame(step));
            c2 = 1;
            c3 = 1;
            const obj4 = { value: promise, done: false };
            return obj4;
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    })();
  },
  flashFrame(arg0) {
    const _window = DiscordNative.window;
    _window.flashFrame(arg0);
  },
  webAuthnRegister(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c1;
      let c2;
      const nativeModules = DiscordNative.nativeModules;
      await nativeModules.ensureModule("discord_webauthn");
      const webAuthn = DiscordNative.webAuthn;
      await webAuthn.webAuthnRegister(closure_128_0);
      return value;
    })();
  },
  webAuthnAuthenticate(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c1;
      let c2;
      const nativeModules = DiscordNative.nativeModules;
      await nativeModules.ensureModule("discord_webauthn");
      const webAuthn = DiscordNative.webAuthn;
      await webAuthn.webAuthnAuthenticate(closure_128_0);
      return value;
    })();
  },
  minimize(arg0) {
    const _window = DiscordNative.window;
    _window.minimize(arg0);
  },
  restore(arg0) {
    const _window = DiscordNative.window;
    _window.restore(arg0);
  },
  maximize(arg0) {
    const _window = DiscordNative.window;
    _window.maximize(arg0);
  },
  focus(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let isWindowsResult = flag;
    if (isWindowsResult) {
      obj = require("PlatformUtils");
      isWindowsResult = obj.isWindows();
    }
    if (isWindowsResult) {
      const self = this;
      this.minimize(null);
    }
    const _window = DiscordNative.window;
    _window.focus(flag, arg0);
  },
  blur() {
    if (require("PlatformUtils").isPlatformEmbedded) {
      if (null != DiscordNative.window.blur) {
        const _window = DiscordNative.window;
        _window.blur();
      }
    }
    window.blur();
  },
  fullscreen(arg0) {
    const _window = DiscordNative.window;
    _window.fullscreen(arg0);
  },
  close(arg0) {
    const _window = DiscordNative.window;
    _window.close(arg0);
  },
  clearNavigationHistory() {
    backwardCompatSend(IPCEvents.IPCEvents.NAVIGATION_HISTORY_CLEAR);
  },
  setAlwaysOnTop(arg0, arg1) {
    if (typeof DiscordNative.window.setAlwaysOnTop === "function") {
      const _window = tmp.window;
      _window.setAlwaysOnTop(arg0, arg1);
    }
  },
  isAlwaysOnTop(value) {
    let closure_0 = value;
    return (async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              value = false;
              if (typeof DiscordNative.window.isAlwaysOnTop === "function") {
                const _window = DiscordNative.window;
                c1 = 1;
                c2 = 1;
                const obj4 = { value: _window.isAlwaysOnTop(value), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          }
          c2 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    })();
  },
  showInactive(arg0) {
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
  },
  setMinimumSize(arg0, arg1) {
    if (DiscordNative != null) {
      const _window = DiscordNative.window;
      if (_window != null) {
        const setMinimumSize = _window.setMinimumSize;
        if (setMinimumSize != null) {
          setMinimumSize(arg0, arg1);
        }
      }
    }
  },
  setTrafficLightPosition(arg0) {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const tmpResult = require("PlatformUtils");
      if ("darwin" === tmpResult.getPlatformName()) {
        try {
          const self = this;
          this.sendIPC(IPCEvents.IPCEvents.WINDOW_SET_TRAFFIC_LIGHT_POSITION, arg0);
        } catch (err) {}
      }
    }
  },
  setTrafficLightAppearance(arg0, arg1) {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const tmpResult = require("PlatformUtils");
      if ("darwin" === tmpResult.getPlatformName()) {
        try {
          const self = this;
          this.sendIPC(IPCEvents.IPCEvents.WINDOW_SET_TRAFFIC_LIGHT_APPEARANCE, arg0, arg1);
        } catch (err) {}
      }
    }
  },
  purgeMemory() {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const processUtils = DiscordNative.processUtils;
      processUtils.purgeMemory();
    }
  },
  updateCrashReporter(arg0) {
    const crashReporter = DiscordNative.crashReporter;
    crashReporter.updateCrashReporter(arg0);
  },
  triggerJSException(arg0) {
    const crashReporter = DiscordNative.crashReporter;
    crashReporter.triggerJSException(arg0);
  },
  flushDNSCache() {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const processUtils = DiscordNative.processUtils;
      processUtils.flushDNSCache();
    }
  },
  supportsFeature(arg0) {
    const features = DiscordNative.features;
    return features.supports(arg0);
  },
  getEnableHardwareAcceleration() {
    const isPlatformEmbedded = require("PlatformUtils").isPlatformEmbedded;
    let enableHardwareAcceleration = !isPlatformEmbedded;
    if (isPlatformEmbedded) {
      const gpuSettings = DiscordNative.gpuSettings;
      enableHardwareAcceleration = gpuSettings.getEnableHardwareAcceleration();
    }
    return enableHardwareAcceleration;
  },
  setEnableHardwareAcceleration(arg0) {
    const gpuSettings = DiscordNative.gpuSettings;
    const result = gpuSettings.setEnableHardwareAcceleration(arg0);
  },
  setOpenH264Enabled(arg0) {
    if (DiscordNative != null) {
      const settings = DiscordNative.settings;
      if (settings != null) {
        if (settings.set != null) {
          const result = set("openH264Enabled", arg0);
        }
      }
    }
  },
  setChromiumSwitches(arg0) {
    const gpuSettings = DiscordNative.gpuSettings;
    gpuSettings.setChromiumSwitches(arg0);
  },
  getOpenOnStart() {
    return (async () => {
      let closure_1;
      let openOnStart;
      app = app.app;
      const getOpenOnStart = app.getOpenOnStart;
      if (getOpenOnStart != null) {
        openOnStart = getOpenOnStart();
      }
      await openOnStart;
      if (1 === c2) {
        if (arg0 === 1) {
          let c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else if (value == null) {
        const settings = closure_129_6.settings;
        c2 = 1;
        c3 = 1;
        obj = { value: settings.get("OPEN_ON_STARTUP", true), done: false };
        return obj;
      }
      return value;
    })();
  },
  getGPUDriverVersions() {
    obj = require("PlatformUtils");
    if (obj.isWindows()) {
      let gPUDriverVersions;
      const self = this;
      if (null != this.getDiscordUtils().getGPUDriverVersions) {
        const discordUtils = self.getDiscordUtils();
        gPUDriverVersions = discordUtils.getGPUDriverVersions();
      }
      return gPUDriverVersions;
    }
    gPUDriverVersions = Promise.resolve(Object.freeze({}));
  },
  setZoomFactor(arg0) {
    let flag = require("PlatformUtils").isPlatformEmbedded;
    if (flag) {
      const _window = DiscordNative.window;
      _window.setZoomFactor(arg0);
      flag = true;
    }
    return flag;
  },
  setBackgroundThrottling(arg0) {
    if (null != DiscordNative.window.setBackgroundThrottling) {
      const _window = DiscordNative.window;
      const result = _window.setBackgroundThrottling(arg0);
    } else {
      const webContents = DiscordNative.window.webContents;
      const result1 = webContents.setBackgroundThrottling(arg0);
    }
  },
  setFocusable(arg0, arg1) {
    if (typeof DiscordNative.window.setFocusable === "function") {
      const _window = tmp.window;
      _window.setFocusable(arg0, arg1);
    }
  },
  pauseFrameEvictor() {
    const app = DiscordNative.app;
    const pauseFrameEvictor = app.pauseFrameEvictor;
    if (pauseFrameEvictor != null) {
      pauseFrameEvictor();
    }
  },
  unpauseFrameEvictor() {
    const app = DiscordNative.app;
    const unpauseFrameEvictor = app.unpauseFrameEvictor;
    if (unpauseFrameEvictor != null) {
      unpauseFrameEvictor();
    }
  },
  getPreferredSystemLanguages() {
    const app = DiscordNative.app;
    const getPreferredSystemLanguages = app.getPreferredSystemLanguages;
    let preferredSystemLanguages;
    if (getPreferredSystemLanguages != null) {
      preferredSystemLanguages = getPreferredSystemLanguages();
    }
    return preferredSystemLanguages;
  },
  getSystemUIDirection() {
    const app = DiscordNative.app;
    const getSystemUIDirection = app.getSystemUIDirection;
    let systemUIDirection;
    if (getSystemUIDirection != null) {
      systemUIDirection = getSystemUIDirection();
    }
    return systemUIDirection;
  },
  getPidFromDesktopSource(str) {
    obj = require("PlatformUtils");
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
          let tmp4;
          if (first.startsWith("screen")) {
            tmp4 = 1;
          } else {
            tmp4 = null;
          }
          return tmp4;
        }
      }
    }
    return null;
  },
  getDesktopSourceFromPid(arg0) {
    obj = require("PlatformUtils");
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
  },
  generateSessionFromPid(arg0) {
    const discordUtils = this.getDiscordUtils();
    return discordUtils.generateSessionFromPid(arg0);
  },
  getAudioPid(arg0) {
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
  },
  setForegroundProcess(arg0) {
    const setForegroundProcess = this.getDiscordUtils().setForegroundProcess;
    try {
      const setForegroundProcessResult = null != setForegroundProcess && setForegroundProcess(arg0);
      return setForegroundProcessResult;
    } catch (err) {
      return false;
    }
  },
  getDiscordMemoryUsage() {
    const getDiscordMemoryUsage = this.getDiscordUtils().getDiscordMemoryUsage;
    let discordMemoryUsage = null;
    if (null != getDiscordMemoryUsage) {
      discordMemoryUsage = getDiscordMemoryUsage();
    }
    return discordMemoryUsage;
  },
  getDiscordMemoryUsageElectronRenderer() {
    const getDiscordMemoryUsageElectronRenderer = this.getDiscordUtils().getDiscordMemoryUsageElectronRenderer;
    let discordMemoryUsageElectronRenderer;
    if (getDiscordMemoryUsageElectronRenderer != null) {
      discordMemoryUsageElectronRenderer = getDiscordMemoryUsageElectronRenderer();
    }
    return discordMemoryUsageElectronRenderer;
  },
  getDiscordMemoryPrivateUsageElectronRenderer() {
    const getDiscordMemoryPrivUsageElectronRenderer = this.getDiscordUtils().getDiscordMemoryPrivUsageElectronRenderer;
    let discordMemoryPrivUsageElectronRenderer;
    if (getDiscordMemoryPrivUsageElectronRenderer != null) {
      discordMemoryPrivUsageElectronRenderer = getDiscordMemoryPrivUsageElectronRenderer();
    }
    return discordMemoryPrivUsageElectronRenderer;
  },
  getDiscordMemoryUsageElectronProcessTypeDetails() {
    const getDiscordMemoryUsageElectronProcessTypeDetails =
      this.getDiscordUtils().getDiscordMemoryUsageElectronProcessTypeDetails;
    let discordMemoryUsageElectronProcessTypeDetails;
    if (getDiscordMemoryUsageElectronProcessTypeDetails != null) {
      discordMemoryUsageElectronProcessTypeDetails = getDiscordMemoryUsageElectronProcessTypeDetails();
    }
    return discordMemoryUsageElectronProcessTypeDetails;
  },
  enablePerfMemoryHooks(arg0) {
    const enablePerfMemoryHooks = this.getDiscordUtils().enablePerfMemoryHooks;
    let result;
    if (enablePerfMemoryHooks != null) {
      result = enablePerfMemoryHooks(arg0);
    }
    return result;
  },
  disablePerfMemoryHooks() {
    const disablePerfMemoryHooks = this.getDiscordUtils().disablePerfMemoryHooks;
    let result;
    if (disablePerfMemoryHooks != null) {
      result = disablePerfMemoryHooks();
    }
    return result;
  },
  getPerfAttributedMemory() {
    const getPerfAttributedMemory = this.getDiscordUtils().getPerfAttributedMemory;
    let perfAttributedMemory;
    if (getPerfAttributedMemory != null) {
      perfAttributedMemory = getPerfAttributedMemory();
    }
    return perfAttributedMemory;
  },
  getPerfAttributedMemoryCallstacks(arg0) {
    const getPerfAttributedMemoryCallstacks = this.getDiscordUtils().getPerfAttributedMemoryCallstacks;
    let perfAttributedMemoryCallstacks;
    if (getPerfAttributedMemoryCallstacks != null) {
      perfAttributedMemoryCallstacks = getPerfAttributedMemoryCallstacks(arg0);
    }
    return perfAttributedMemoryCallstacks;
  },
  getPerfAttributedMemoryStats() {
    const getPerfAttributedMemoryStats = this.getDiscordUtils().getPerfAttributedMemoryStats;
    let perfAttributedMemoryStats;
    if (getPerfAttributedMemoryStats != null) {
      perfAttributedMemoryStats = getPerfAttributedMemoryStats();
    }
    return perfAttributedMemoryStats;
  },
  startCPUProfiling(arg0) {
    const startCPUProfiling = this.getDiscordUtils().startCPUProfiling;
    let startCPUProfilingResult;
    if (startCPUProfiling != null) {
      startCPUProfilingResult = startCPUProfiling(arg0);
    }
    return startCPUProfilingResult;
  },
  stopCPUProfiling() {
    let self = this;
    return (async function () {
      let c1;
      let c2;
      let rejectResult;
      let stopCPUProfilingResult;
      let closure_0 = tmp3;
      const stopCPUProfiling = self.getDiscordUtils().stopCPUProfiling;
      if (stopCPUProfiling != null) {
        stopCPUProfilingResult = stopCPUProfiling();
      }
      await stopCPUProfilingResult;
      closure_0 = value;
      if (null == closure_0) {
        const _Error = Error;
        self = this;
        const self2 = this;
        const error = new Error("Failed to stop CPU profiling");
        rejectResult = reject(error);
      } else {
        const _JSON = JSON;
        rejectResult = JSON.parse(closure_0);
      }
      return rejectResult;
    })();
  },
  gzipAndBase64Encode(arg0) {
    const gzipAndBase64Encode = this.getDiscordUtils().gzipAndBase64Encode;
    let gzipAndBase64EncodeResult;
    if (gzipAndBase64Encode != null) {
      gzipAndBase64EncodeResult = gzipAndBase64Encode(arg0);
    }
    if (gzipAndBase64EncodeResult == null) {
      gzipAndBase64EncodeResult = Promise.resolve(null);
    }
    return gzipAndBase64EncodeResult;
  },
  showOpenDialog(properties) {
    const fileManager = DiscordNative.fileManager;
    obj = { properties };
    return fileManager.showOpenDialog(obj);
  },
  flushStorageData() {
    let _Promise1;
    if (require("PlatformUtils").isPlatformEmbedded) {
      let self = this;
      let self2 = this;
      _Promise1 = new _Promise((fn, arg1) => {
        let closure_0 = fn;
        let closure_1 = arg1;
        if (null != DiscordNative.processUtils.flushStorageData) {
          const processUtils = DiscordNative.processUtils;
          processUtils.flushStorageData(function (arg0) {
            let tmp2;
            if (null != arg0) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(arg0);
              tmp2 = closure_1(error);
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
      _Promise1 = _Promise.resolve();
    }
    return _Promise1;
  },
  flushCookies() {
    let _Promise1;
    if (require("PlatformUtils").isPlatformEmbedded) {
      let self = this;
      let self2 = this;
      _Promise1 = new _Promise((fn, arg1) => {
        let closure_0 = fn;
        let closure_1 = arg1;
        if (null != DiscordNative.processUtils.flushCookies) {
          const processUtils = DiscordNative.processUtils;
          processUtils.flushCookies(function (arg0) {
            let tmp2;
            if (null != arg0) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(arg0);
              tmp2 = closure_1(error);
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
      _Promise1 = _Promise.resolve();
    }
    return _Promise1;
  },
  setCrashInformation(arg0, arg1) {
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
  },
  blockDisplaySleep() {
    let blockDisplaySleepResult = null;
    if (require("PlatformUtils").isPlatformEmbedded) {
      blockDisplaySleepResult = null;
      if (null != DiscordNative.powerSaveBlocker) {
        const powerSaveBlocker = DiscordNative.powerSaveBlocker;
        blockDisplaySleepResult = powerSaveBlocker.blockDisplaySleep();
      }
    }
    return blockDisplaySleepResult;
  },
  unblockDisplaySleep(arg0) {
    const isPlatformEmbedded = require("PlatformUtils").isPlatformEmbedded && null != DiscordNative.powerSaveBlocker;
    if (isPlatformEmbedded) {
      const powerSaveBlocker = DiscordNative.powerSaveBlocker;
      powerSaveBlocker.unblockDisplaySleep(arg0);
    }
  },
  cleanupDisplaySleep() {
    const isPlatformEmbedded = require("PlatformUtils").isPlatformEmbedded && null != DiscordNative.powerSaveBlocker;
    if (isPlatformEmbedded) {
      const powerSaveBlocker = DiscordNative.powerSaveBlocker;
      powerSaveBlocker.cleanupDisplaySleep();
    }
  },
  relaunch() {
    if (require("PlatformUtils").isPlatformEmbedded) {
      const app = DiscordNative.app;
      app.relaunch();
    }
  },
  makeChunkedRequest(arg0, array, arg2) {
    let chunkInterval;
    let method;
    let token;
    obj = require("HTTPUtils");
    _require = "" + obj.getAPIBaseURL() + arg0;
    if (require("PlatformUtils").isPlatformEmbedded) {
      let tmp4 = null;
      if (null == DiscordNative.http) {
        const _Error2 = Error;
        const self7 = this;
        const self8 = this;
        const reject2 = Promise.reject;
        let error = new Error("HTTP module not available");
        return reject2(error);
      } else {
        let num2;
        obj2 = { maxBps: 8000, chunkInterval: 50, contentType: "application/json" };
        const merged = Object.assign(arg2);
        ({ method: importDefault, token: dependencyMap, chunkInterval } = obj2);
        const contentType = obj2.contentType;
        let json = array;
        const maxBps = obj2.maxBps;
        if ("application/json" === contentType) {
          const _JSON = JSON;
          json = JSON.stringify(array);
        }
        const result = maxBps * (chunkInterval / 1000);
        const _Math = Math;
        const rounded = Math.ceil(json.length / result);
        const _Array = Array;
        const self3 = this;
        const self4 = this;
        array = new Array(rounded);
        for (let num2 = 0; num2 < rounded; num2 = num2 + 1) {
          let result1 = num2 * result;
          array[num2] = json.substring(result1, result1 + result);
        }
        const self5 = this;
        const self6 = this;
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          let closure_1 = arg1;
          if (null != DiscordNative.http) {
            const http = DiscordNative.http;
            obj = { method: importDefault, chunkInterval, contentType, token: dependencyMap };
            const chunkedRequest = http.makeChunkedRequest(closure_0, array, obj, function (arg0, status) {
              let tmp4;
              if (null != arg0) {
                tmp4 = closure_1(arg0);
              } else if (status.status >= 400) {
                const _Error = Error;
                const self = this;
                const self2 = this;
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
      let self = this;
      let self2 = this;
      const error1 = new Error("Not embedded!");
      return reject(error1);
    }
  },
  submitLiveCrashReport(arg0) {
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
        const submitLiveCrashReport = discordUtils.submitLiveCrashReport;
        obj2 = {};
        const merged = Object.assign(sentry);
        const merged1 = Object.assign(arg0);
        return submitLiveCrashReport(releaseChannel, obj2);
      }
    }
    return Promise.resolve();
  },
  crash(arg0) {
    const crash = this.getDiscordUtils().crash;
    let flag = null != crash;
    if (flag) {
      crash(arg0);
      flag = true;
    }
    return flag;
  },
  setApplicationBackgroundColor(arg0) {
    this.sendIPC(IPCEvents.IPCEvents.SETTINGS_UPDATE_BACKGROUND_COLOR, arg0);
  },
  initializeExitHook() {
    const initializeExitHook = this.getDiscordUtils().initializeExitHook;
    if (null != initializeExitHook) {
      initializeExitHook();
    }
  },
  initializeWERHandler() {
    const initializeWERHandler = this.getDiscordUtils().initializeWERHandler;
    if (null != initializeWERHandler) {
      initializeWERHandler();
    }
  },
  pollQueueMetrics(arg0) {
    const pollQueueMetrics = this.getDiscordUtils().pollQueueMetrics;
    if (null != pollQueueMetrics) {
      pollQueueMetrics(arg0);
    }
  },
  asyncify(arg0) {
    let closure_0 = arg0;
    const promise = new Promise((arg0) => {
      closure_0(arg0);
    });
    return promise;
  },
  IsGameDisplayModeUpdateSupported() {
    return null != this.getDiscordUtils().gameDisplayModeUpdate;
  },
  GameDisplayModeUpdate(arg0) {
    const gameDisplayModeUpdate = this.getDiscordUtils().gameDisplayModeUpdate;
    const result = null != gameDisplayModeUpdate && null != arg0 && gameDisplayModeUpdate(arg0);
    return result;
  },
  GameDisplayModeIsGameSupported(arg0) {
    const gameDisplayModeIsSupported = this.getDiscordUtils().gameDisplayModeIsSupported;
    const result = null != gameDisplayModeIsSupported && null != arg0 && gameDisplayModeIsSupported(arg0);
    return result;
  },
  GetWindowFullscreenTypeByPid(arg0, arg1, arg2) {
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
      windowFullscreenTypeByPid = flow_Client.RunningProcessFullscreenType.UNKNOWN;
    }
    return windowFullscreenTypeByPid;
  },
  GetWindowFullscreenTypeExtraByPid(arg0, arg1) {
    const getWindowFullscreenTypeExtraByPid = this.getDiscordUtils().getWindowFullscreenTypeExtraByPid;
    if (null != getWindowFullscreenTypeExtraByPid) {
      let windowFullscreenTypeExtraByPid;
      if (null != arg1) {
        windowFullscreenTypeExtraByPid = getWindowFullscreenTypeExtraByPid(arg0, arg1);
      }
      return windowFullscreenTypeExtraByPid;
    }
    windowFullscreenTypeExtraByPid = { quns: flow_Client.QueryUserNotificationState.QUNS_UNKNOWN };
    ({ quns: flow_Client.QueryUserNotificationState.QUNS_UNKNOWN });
  },
  SetGPUBoostEnabledByPid(arg0, arg1) {
    const setGPUBoostEnabledByPid = this.getDiscordUtils().setGPUBoostEnabledByPid;
    const result = null != setGPUBoostEnabledByPid && setGPUBoostEnabledByPid(arg0, arg1);
    return result;
  },
  SetSystemServicePerformanceMonitorEnabled(arg0, arg1) {
    const setSystemServicePerformanceMonitorEnabled = this.getDiscordUtils().setSystemServicePerformanceMonitorEnabled;
    const result =
      null != setSystemServicePerformanceMonitorEnabled && setSystemServicePerformanceMonitorEnabled(arg0, arg1);
    return result;
  },
  GetSystemServicePerformanceMonitorSnapshot(arg0) {
    let closure_0 = arg0;
    const getSystemServicePerformanceMonitorSnapshot =
      this.getDiscordUtils().getSystemServicePerformanceMonitorSnapshot;
    if (null == getSystemServicePerformanceMonitorSnapshot) {
      const self5 = this;
      const self6 = this;
      const systemServiceNotAvailableError = new discord_common_DiscordNative.SystemServiceNotAvailableError();
      return reject(systemServiceNotAvailableError);
    } else {
      let self = this;
      let self2 = this;
      const promise = new Promise((arg0, arg1) => {
        closure_0 = arg1;
        const timeout = setTimeout(() => {
          const error = new Error("Timed out waiting for performance snapshot");
          return closure_0(error);
        }, 1000);
      });
      let self3 = this;
      let self4 = this;
      const promise3 = new Promise((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        getSystemServicePerformanceMonitorSnapshot(closure_0, function (arg0) {
          if ("null" !== arg0) {
            try {
              const _JSON = JSON;
              closure_0(JSON.parse(arg0));
            } catch (tmp9) {
              let message;
              const _Error3 = Error;
              const _Error2 = Error;
              if (tmp9 instanceof Error) {
                message = tmp9.message;
              } else {
                const _String = String;
                message = String(tmp9);
              }
              const _HermesInternal = HermesInternal;
              const self3 = this;
              const self4 = this;
              const _Error21 = new _Error2("Invalid performance snapshot JSON: " + message);
              closure_1(_Error21);
            }
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Performance snapshot not available");
            closure_1(error);
          }
        });
      });
      const items = [,];
      items[0] = promise3;
      items[1] = promise;
      const racePromise = Promise.race(items);
      return racePromise.finally(() => clearTimeout(closure_1));
    }
  },
  IsHardwareAcceleratedGPUSchedulingEnabled() {
    const isHardwareAcceleratedGPUSchedulingEnabled = this.getDiscordUtils().isHardwareAcceleratedGPUSchedulingEnabled;
    const result = null != isHardwareAcceleratedGPUSchedulingEnabled && isHardwareAcceleratedGPUSchedulingEnabled();
    return result;
  },
  AcquireGlobalLock(arg0) {
    const acquireGlobalLock = this.getDiscordUtils().acquireGlobalLock;
    if (null != acquireGlobalLock) {
      return acquireGlobalLock(arg0);
    }
  },
  SetServiceChannel(arg0) {
    const setServiceChannel = this.getDiscordUtils().setServiceChannel;
    if (null != setServiceChannel) {
      setServiceChannel(arg0);
    }
  },
  IsSystemServiceInstalled() {
    const isSystemServiceInstalled = this.getDiscordUtils().isSystemServiceInstalled;
    return null != isSystemServiceInstalled ? isSystemServiceInstalled() : undefined;
  },
  CanSystemServiceBeInstalled() {
    const canSystemServiceBeInstalled = this.getDiscordUtils().canSystemServiceBeInstalled;
    return null != canSystemServiceBeInstalled ? canSystemServiceBeInstalled() : undefined;
  },
  InstallSystemService() {
    let installSystemServiceResult;
    const installSystemService = this.getDiscordUtils().installSystemService;
    if (null != installSystemService) {
      installSystemServiceResult = installSystemService();
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("System service native not available");
      installSystemServiceResult = reject(error);
    }
    return installSystemServiceResult;
  },
  DoesSystemServiceHaveUpdate() {
    let result;
    const doesSystemServiceHaveUpdate = this.getDiscordUtils().doesSystemServiceHaveUpdate;
    if (null != doesSystemServiceHaveUpdate) {
      result = doesSystemServiceHaveUpdate();
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("System service native not available");
      result = reject(error);
    }
    return result;
  },
  UpdateSystemService() {
    let updateSystemServiceResult;
    const updateSystemService = this.getDiscordUtils().updateSystemService;
    if (null != updateSystemService) {
      updateSystemServiceResult = updateSystemService();
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("System service native not available");
      updateSystemServiceResult = reject(error);
    }
    return updateSystemServiceResult;
  },
  UninstallSystemService() {
    let result;
    const uninstallSystemService = this.getDiscordUtils().uninstallSystemService;
    if (null != uninstallSystemService) {
      result = uninstallSystemService();
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("System service native not available");
      result = reject(error);
    }
    return result;
  },
  InputEventServiceSetStatusCallback(arg0) {
    const inputEventServiceSetStatusCallback = this.getDiscordUtils().inputEventServiceSetStatusCallback;
    if (null != inputEventServiceSetStatusCallback) {
      const result = inputEventServiceSetStatusCallback(arg0);
    }
  },
  InputEventServiceSetAllowed(arg0) {
    const inputEventServiceSetAllowed = this.getDiscordUtils().inputEventServiceSetAllowed;
    if (null != inputEventServiceSetAllowed) {
      return inputEventServiceSetAllowed(arg0);
    }
  },
  ToolServiceSetStatusCallback(arg0) {
    const toolServiceSetStatusCallback = this.getDiscordUtils().toolServiceSetStatusCallback;
    if (null != toolServiceSetStatusCallback) {
      const result = toolServiceSetStatusCallback(arg0);
    }
  },
  ToolServiceSetAllowed(arg0) {
    const toolServiceSetAllowed = this.getDiscordUtils().toolServiceSetAllowed;
    if (null != toolServiceSetAllowed) {
      return toolServiceSetAllowed(arg0);
    }
  },
  isModuleVersionAtLeast(arg0, stable) {
    let tmp7;
    let tmp9;
    let items = closure_10;
    if (closure_10 == null) {
      items = [0, 0, 0];
    }
    const items1 = [...items];
    const moduleVersions = this.moduleVersions;
    let num;
    const push = items1.push;
    if (moduleVersions != null) {
      num = moduleVersions[arg0];
    }
    if (num == null) {
      num = 0;
    }
    push(num);
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
  },
  fetchRiotGamesLiveClientData(arg0) {
    let rejectResult;
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    if (require("PlatformUtils").isPlatformEmbedded) {
      let reject2Result;
      if (null == DiscordNative.riotGames) {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const reject2 = Promise.reject;
        const error = new Error("Riot Games module not available");
        reject2Result = reject2(error);
      } else {
        const riotGames = tmp5.riotGames;
        reject2Result = riotGames.fetchLiveClientData(arg0, obj);
      }
      rejectResult = reject2Result;
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("Not embedded!");
      rejectResult = reject(error1);
    }
    return rejectResult;
  },
  readCs2GsiToken(arg0) {
    let resolved;
    obj = require("PlatformUtils");
    if (obj.isWindows()) {
      const cs2Gsi = DiscordNative.cs2Gsi;
      let cs2GsiToken;
      if (cs2Gsi != null) {
        cs2GsiToken = cs2Gsi.readCs2GsiToken(arg0);
      }
      if (cs2GsiToken == null) {
        cs2GsiToken = Promise.resolve(null);
      }
      resolved = cs2GsiToken;
    } else {
      resolved = Promise.resolve(null);
    }
    return resolved;
  },
  writeCs2GsiConfig(arg0, arg1, arg2) {
    let resolved;
    obj = require("PlatformUtils");
    if (obj.isWindows()) {
      const cs2Gsi = DiscordNative.cs2Gsi;
      let writeCs2GsiConfigResult;
      if (cs2Gsi != null) {
        writeCs2GsiConfigResult = cs2Gsi.writeCs2GsiConfig(arg0, arg1, arg2);
      }
      if (writeCs2GsiConfigResult == null) {
        writeCs2GsiConfigResult = Promise.resolve(false);
      }
      resolved = writeCs2GsiConfigResult;
    } else {
      resolved = Promise.resolve(false);
    }
    return resolved;
  },
  deleteCs2GsiConfig(arg0) {
    let resolved;
    obj = require("PlatformUtils");
    if (obj.isWindows()) {
      const cs2Gsi = DiscordNative.cs2Gsi;
      let deleteCs2GsiConfigResult;
      if (cs2Gsi != null) {
        deleteCs2GsiConfigResult = cs2Gsi.deleteCs2GsiConfig(arg0);
      }
      if (deleteCs2GsiConfigResult == null) {
        deleteCs2GsiConfigResult = Promise.resolve(false);
      }
      resolved = deleteCs2GsiConfigResult;
    } else {
      resolved = Promise.resolve(false);
    }
    return resolved;
  },
  debugLogCs2GsiPayload(arg0) {
    let resolved;
    obj = require("PlatformUtils");
    if (obj.isWindows()) {
      const cs2Gsi = DiscordNative.cs2Gsi;
      let result;
      if (cs2Gsi != null) {
        result = cs2Gsi.debugLogCs2GsiPayload(arg0);
      }
      if (result == null) {
        result = Promise.resolve();
      }
      resolved = result;
    } else {
      resolved = Promise.resolve();
    }
    return resolved;
  },
  readDotaGsiToken(arg0) {
    let resolved;
    obj = require("PlatformUtils");
    if (obj.isWindows()) {
      const dotaGsi = DiscordNative.dotaGsi;
      let dotaGsiToken;
      if (dotaGsi != null) {
        dotaGsiToken = dotaGsi.readDotaGsiToken(arg0);
      }
      if (dotaGsiToken == null) {
        dotaGsiToken = Promise.resolve(null);
      }
      resolved = dotaGsiToken;
    } else {
      resolved = Promise.resolve(null);
    }
    return resolved;
  },
  writeDotaGsiConfig(arg0, arg1, arg2) {
    let resolved;
    obj = require("PlatformUtils");
    if (obj.isWindows()) {
      const dotaGsi = DiscordNative.dotaGsi;
      let writeDotaGsiConfigResult;
      if (dotaGsi != null) {
        writeDotaGsiConfigResult = dotaGsi.writeDotaGsiConfig(arg0, arg1, arg2);
      }
      if (writeDotaGsiConfigResult == null) {
        writeDotaGsiConfigResult = Promise.resolve(false);
      }
      resolved = writeDotaGsiConfigResult;
    } else {
      resolved = Promise.resolve(false);
    }
    return resolved;
  },
  deleteDotaGsiConfig(arg0) {
    let resolved;
    obj = require("PlatformUtils");
    if (obj.isWindows()) {
      const dotaGsi = DiscordNative.dotaGsi;
      let deleteDotaGsiConfigResult;
      if (dotaGsi != null) {
        deleteDotaGsiConfigResult = dotaGsi.deleteDotaGsiConfig(arg0);
      }
      if (deleteDotaGsiConfigResult == null) {
        deleteDotaGsiConfigResult = Promise.resolve(false);
      }
      resolved = deleteDotaGsiConfigResult;
    } else {
      resolved = Promise.resolve(false);
    }
    return resolved;
  },
  debugLogDotaGsiPayload(arg0) {
    let resolved;
    obj = require("PlatformUtils");
    if (obj.isWindows()) {
      const dotaGsi = DiscordNative.dotaGsi;
      let result;
      if (dotaGsi != null) {
        result = dotaGsi.debugLogDotaGsiPayload(arg0);
      }
      if (result == null) {
        result = Promise.resolve();
      }
      resolved = result;
    } else {
      resolved = Promise.resolve();
    }
    return resolved;
  },
  appViewed() {
    obj = require("PlatformUtils");
    if (obj.isDesktop()) {
      const self = this;
      const _performance = performance;
      performance.mark("app_viewed");
      this.sendIPC(IPCEvents.IPCEvents.APP_VIEWED);
    }
  },
  appFirstRenderAfterReadyPayload(arg0) {
    obj = require("PlatformUtils");
    if (obj.isDesktop()) {
      const self = this;
      const _performance = performance;
      performance.mark("app_first_render_after_ready_payload");
      this.sendIPC(IPCEvents.IPCEvents.APP_FIRST_RENDER_AFTER_READY_PAYLOAD, arg0);
    }
  },
  appLoaded() {
    backwardCompatSend(IPCEvents.IPCEvents.APP_LOADED);
  },
  indexLoadedAsync() {
    backwardCompatSend(IPCEvents.IPCEvents.APP_ASYNC_INDEX_TSX_LOADED);
  },
  GetSystemGpuStats(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (async () => {
      let c3;
      let closure_1;
      let getGpuStats;
      let items;
      let gpuStats = tmp;
      if (!gpuStats(c2[5]).isPlatformEmbedded) {
        return [];
      }
      await self.ensureModule("discord_media");
      gpuStats = closure_129_1.requireModule("discord_media");
      if (gpuStats != null) {
        getGpuStats = gpuStats.getGpuStats;
      }
      if (null == getGpuStats) {
        items = [];
      } else {
        gpuStats = gpuStats.getGpuStats(closure_129_0);
        items = gpuStats.catch(() => []);
      }
      return items;
    })();
  },
};
Object.defineProperty(obj2, "canBootstrapNewUpdater", {
  get: () => DiscordNative.nativeModules.canBootstrapNewUpdater || false,
  set: undefined,
});
Object.defineProperty(obj2, "architecture", {
  get: () => {
    let str = "";
    if (require("PlatformUtils").isPlatformEmbedded) {
      str = DiscordNative.process.arch;
    }
    return str;
  },
  set: undefined,
});
Object.defineProperty(obj2, "releaseChannel", {
  get: () => {
    let str = "";
    if (require("PlatformUtils").isPlatformEmbedded) {
      const app = DiscordNative.app;
      str = app.getReleaseChannel();
    }
    return str;
  },
  set: undefined,
});
Object.defineProperty(obj2, "friendlyReleaseName", {
  get: function () {
    const releaseChannel = this.releaseChannel;
    if ("development" === releaseChannel) {
      return "Discord Development";
    } else if ("canary" === releaseChannel) {
      return "Discord Canary";
    } else if ("ptb" === releaseChannel) {
      return "Discord PTB";
    } else {
      return "Discord";
    }
  },
  set: undefined,
});
Object.defineProperty(obj2, "version", { get: () => closure_10, set: undefined });
Object.defineProperty(obj2, "buildNumber", { get: () => closure_11, set: undefined });
Object.defineProperty(obj2, "moduleVersions", { get: () => closure_12, set: undefined });
Object.defineProperty(obj2, "parsedOSRelease", {
  get: () => {
    let mapped;
    if (require("PlatformUtils").isPlatformEmbedded) {
      const str = DiscordNative.os.release;
      const parts = str.split(".");
      mapped = parts.map((item) => parseInt(item, 10));
    } else {
      mapped = [];
    }
    return mapped;
  },
  set: undefined,
});
let result = size.fileFinishedImporting("utils/web/DesktopNativeUtils.tsx");

export default obj2;
export const SaveImageResult = obj;
export { sanitizeFilename };
export { getFileData };
export { getImageData };
export const NativePermissionRequestType = {
  Camera: 0,
  [0]: "Camera",
  Microphone: 1,
  [1]: "Microphone",
  Photo: 2,
  [2]: "Photo",
  InputMonitoring: 3,
  [3]: "InputMonitoring",
  ScreenRecording: 4,
  [4]: "ScreenRecording",
};
