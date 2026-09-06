// === Module 5410: IdleStore ===

// Module 5410 (IdleStore)
import initializeDefault from "initialize" /* 504 */;
import debounceDefault from "debounce" /* 551 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import UserSettings from "UserSettings" /* 1935 */;
import DiscordNativeDefault from "DiscordNative" /* 4182 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function checkIdleAFK() {
  if (Date.now() - idleSince <= hasOwnProperty) {
    let tmp2 = c11;
    if (!c11) {
      tmp2 = c12;
    }
    if (!tmp2) {
      let obj = PlatformUtils;
      tmp2 = obj.isAndroid() && closure_13;
      const tmp5 = obj.isAndroid() && closure_13;
    }
    if (!tmp2) {
      if (idle) {
        DispatcherDefault.dispatch({ type: "IDLE", idle: false });
      }
    }
    const AfkTimeout = UserSettings.AfkTimeout;
    const setting = AfkTimeout.getSetting();
    if (0 !== setting) {
      if (null == c3) {
        const _Date = Date;
        const _Math = Math;
        const diff = Date.now() - idleSince;
        if (diff <= Math.min(setting * DurationsDefault.Millis.SECOND, tmp)) {
          let tmp17 = c11;
          if (!c11) {
            tmp17 = c12;
          }
          if (!tmp17) {
            const tmp14Result = PlatformUtils;
            tmp17 = PlatformUtils.isAndroid() && closure_13;
            const tmp18 = PlatformUtils.isAndroid() && closure_13;
          }
          if (!tmp17) {
            if (afk) {
              DispatcherDefault.dispatch({ type: "AFK", afk: false });
              const tmp28Result = DispatcherDefault;
            }
          }
        }
      }
    }
    if (!afk) {
      DispatcherDefault.dispatch({ type: "AFK", afk: true });
    }
  }
  if (!idle) {
    obj = { type: "IDLE", idle: true, idleSince };
    DispatcherDefault.dispatch(obj);
  }
}
const Constants = fn(1074);
({ IDLE_DURATION: hasOwnProperty, AppStates: metroRequire } = Constants);
const SpeakingFlags = fn(4585).SpeakingFlags;
const idleSince = Date.now();
let idle = false;
let afk = false;
let c11 = false;
let c12 = false;
let closure_13 = false;
if (fn(1115).isPlatformEmbedded) {
  const importDefaultResult = DiscordNativeDefault;
  let powerMonitor;
  if (importDefaultResult != null) {
    powerMonitor = importDefaultResult.powerMonitor;
  }
  if (null != powerMonitor) {
    function checkNativeIdle() {
      const tmp3 = DiscordNativeDefault;
      let getSystemIdleTimeMs;
      if (tmp3 != null) {
        const powerMonitor = tmp3.powerMonitor;
        if (powerMonitor != null) {
          getSystemIdleTimeMs = powerMonitor.getSystemIdleTimeMs;
        }
      }
      if (null != getSystemIdleTimeMs) {
        const powerMonitor2 = DiscordNativeDefault.powerMonitor;
        const systemIdleTimeMs = powerMonitor2.getSystemIdleTimeMs();
        if (systemIdleTimeMs instanceof Promise) {
          systemIdleTimeMs.then(function handleIdleTime(result) {
            const diff = Date.now() - result;
            let tmp2 = null == c3;
            if (!tmp2) {
              tmp2 = diff > c3;
            }
            if (tmp2) {
              const _Math = Math;
              closure_8 = Math.max(diff, closure_8);
              c3 = null;
            }
            checkIdleAFK();
            const timerId = setTimeout(checkNativeIdle, 10 * DurationsDefault.Millis.SECOND);
          });
        } else {
          const _Date = Date;
          let diff = Date.now() - systemIdleTimeMs;
          let tmp7 = null == c3;
          if (!tmp7) {
            tmp7 = diff > c3;
          }
          if (tmp7) {
            let _Math = Math;
            closure_8 = Math.max(diff, closure_8);
            c3 = null;
          }
          checkIdleAFK();
          const _setTimeout = setTimeout;
          let timerId = setTimeout(checkNativeIdle, 10 * DurationsDefault.Millis.SECOND);
        }
      }
    }
    checkNativeIdle();
    powerMonitor = DiscordNativeDefault.powerMonitor;
    powerMonitor.on("resume", () => {
      c11 = false;
      checkIdleAFK();
    });
    let powerMonitor2 = DiscordNativeDefault.powerMonitor;
    powerMonitor2.on("suspend", () => {
      c11 = true;
      c3 = Date.now();
      checkIdleAFK();
      SelectedChannelActionCreatorsDefault.disconnect();
    });
    const powerMonitor3 = DiscordNativeDefault.powerMonitor;
    class IdleStore extends r10079 {
    }
    powerMonitor3.on("lock-screen", () => {
      c12 = true;
      c3 = Date.now();
      checkIdleAFK();
    });
    obj.on("unlock-screen", () => {
      c12 = false;
      checkIdleAFK();
    });
  }
  function handleGenericAction(timestamp) {
    timestamp = timestamp.timestamp;
    let tmp = "OVERLAY_SET_NOT_IDLE" === timestamp.type;
    if (tmp) {
      tmp = null != timestamp;
    }
    let bypassIdleUpdate = tmp;
    if (tmp) {
      bypassIdleUpdate = timestamp <= closure_8;
    }
    if (!bypassIdleUpdate) {
      bypassIdleUpdate = timestamp.bypassIdleUpdate;
    }
    if (!bypassIdleUpdate) {
      c3 = null;
      if (!tmp) {
        const _Date = Date;
        timestamp = Date.now();
      }
      closure_8 = timestamp;
      checkIdleAFK();
    }
    return false;
  }
  debounceDefault(() => {
    const obj = {};
    let timestamp = obj.timestamp;
    let tmp = "OVERLAY_SET_NOT_IDLE" === obj.type;
    if (tmp) {
      tmp = null != timestamp;
    }
    let bypassIdleUpdate = tmp;
    if (tmp) {
      bypassIdleUpdate = timestamp <= closure_8;
    }
    if (!bypassIdleUpdate) {
      bypassIdleUpdate = obj.bypassIdleUpdate;
    }
    if (!bypassIdleUpdate) {
      c3 = null;
      if (!tmp) {
        const _Date = Date;
        timestamp = Date.now();
      }
      closure_8 = timestamp;
      checkIdleAFK();
    }
  }, 500);
  const Store = initializeDefault.Store;
  class IdleStore extends r10079 {
  }
  const prototype = IdleStore.prototype;
  prototype["initialize"] = function initialize() {
    this.waitFor(AuthenticationStore);
  };
  prototype["isIdle"] = function isIdle() {
    return idle;
  };
  prototype["isAFK"] = function isAFK() {
    return afk;
  };
  prototype["getIdleSince"] = function getIdleSince() {
    let tmp = null;
    if (idle) {
      tmp = closure_8;
    }
    return tmp;
  };
  prototype["getSystemSuspended"] = function getSystemSuspended() {
    return c11;
  };
  prototype["getSystemLocked"] = function getSystemLocked() {
    return c12;
  };
  IdleStore.displayName = "IdleStore";
  obj = {
    IDLE: function handleIdle(idle) {
        idle = idle.idle;
      },
    AFK: function handleAFK(afk) {
        afk = afk.afk;
      },
    SPEAKING: function handleSpeaking(speakingFlags) {
        let tmp2 = speakingFlags.speakingFlags !== SpeakingFlags.NONE;
        if (tmp2) {
          tmp2 = tmp === AuthenticationStore.getId();
        }
        if (tmp2) {
          const obj = {};
          let timestamp = obj.timestamp;
          let tmp4 = "OVERLAY_SET_NOT_IDLE" === obj.type;
          if (tmp4) {
            tmp4 = null != timestamp;
          }
          let bypassIdleUpdate = tmp4;
          if (tmp4) {
            bypassIdleUpdate = timestamp <= closure_8;
          }
          if (!bypassIdleUpdate) {
            bypassIdleUpdate = obj.bypassIdleUpdate;
          }
          if (!bypassIdleUpdate) {
            c3 = null;
            if (!tmp4) {
              const _Date = Date;
              timestamp = Date.now();
            }
            closure_8 = timestamp;
            checkIdleAFK();
          }
        }
        return false;
      },
    APP_STATE_UPDATE: function handleAppStateUpdate(state) {
        closure_13 = state.state === constants.BACKGROUND;
        c3 = null;
        closure_8 = Date.now();
        checkIdleAFK();
        return false;
      },
    OVERLAY_SET_NOT_IDLE: handleGenericAction,
    CHANNEL_SELECT: handleGenericAction,
    VOICE_CHANNEL_SELECT: handleGenericAction,
    WINDOW_FOCUS: handleGenericAction,
    OVERLAY_INITIALIZE: handleGenericAction,
    OVERLAY_SET_INPUT_LOCKED: handleGenericAction
  };
  const idleStore = new IdleStore(DispatcherDefault, obj);
  const result = fn(2).fileFinishedImporting("stores/IdleStore.tsx");
  exports.default = idleStore;
}
let timerId = setInterval(checkIdleAFK, 30 * DurationsDefault.Millis.SECOND);