// === Module 5567: IdleStore ===

// Module 5567 (IdleStore)
import _mod2 from "module_2" /* 2 */;
import get_initializedDefault from "get initialized" /* 504 */;
import debounceDefault from "debounce" /* 551 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import UserSettings from "UserSettings" /* 2028 */;
import DiscordNativeDefault from "DiscordNative" /* 4490 */;
import Constants2 from "Constants" /* 4915 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5568 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1085 */;

let c3;

let hasOwnProperty;
let metroRequire;
let obj;
function checkIdleAFK() {
  if (Date.now() - idleSince <= hasOwnProperty) {
    let tmp2 = c11 || c12;
    if (!tmp2) {
      const obj = PlatformUtils;
      tmp2 = obj.isAndroid() && closure_13;
      obj.isAndroid() && closure_13;
    }
    if (!tmp2) {
      if (idle) {
        const obj2 = DispatcherDefault;
        obj2.dispatch({ type: "IDLE", idle: false });
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
          let tmp18 = c11 || c12;
          if (!tmp18) {
            const tmp15Result = PlatformUtils;
            tmp18 = tmp15Result.isAndroid() && closure_13;
            tmp15Result.isAndroid() && closure_13;
          }
          if (!tmp18) {
            if (afk) {
              const tmp29Result = DispatcherDefault;
              tmp29Result.dispatch({ type: "AFK", afk: false });
            }
          }
        }
      }
    }
    if (!afk) {
      const obj7 = DispatcherDefault;
      obj7.dispatch({ type: "AFK", afk: true });
    }
  }
  if (!idle) {
    const obj4 = { type: "IDLE", idle: true, idleSince };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj4);
  }
}
({ IDLE_DURATION: hasOwnProperty, AppStates: metroRequire } = Constants);
const SpeakingFlags = Constants2.SpeakingFlags;
const idleSince = Date.now();
let idle = false;
let afk = false;
let c11 = false;
let c12 = false;
let closure_13 = false;
if (PlatformUtils.isPlatformEmbedded) {
  const importDefaultResult = DiscordNativeDefault;
  let tmp4 = null;
  let powerMonitor1;
  if (importDefaultResult != null) {
    powerMonitor1 = importDefaultResult.powerMonitor;
  }
  if (null != powerMonitor1) {
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
            const tmp2 = null == c3 || diff > c3;
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
          const tmp7 = null == c3 || diff > c3;
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
    let powerMonitor = DiscordNativeDefault.powerMonitor;
    powerMonitor.on("resume", () => {
      c11 = false;
      checkIdleAFK();
    });
    let powerMonitor2 = DiscordNativeDefault.powerMonitor;
    powerMonitor2.on("suspend", () => {
      c11 = true;
      c3 = Date.now();
      checkIdleAFK();
      const obj = SelectedChannelActionCreatorsDefault;
      obj.disconnect();
    });
    const powerMonitor3 = DiscordNativeDefault.powerMonitor;
    class IdleStore extends Store {
      initialize() {
        this.waitFor(AuthenticationStore);
      }
      isIdle() {
        return idle;
      }
      isAFK() {
        return afk;
      }
      getIdleSince() {
        let tmp = null;
        if (idle) {
          tmp = idleSince;
        }
        return tmp;
      }
      getSystemSuspended() {
        return c11;
      }
      getSystemLocked() {
        return c12;
      }
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
    const bypassIdleUpdate = timestamp.bypassIdleUpdate;
    if (tmp) {
      tmp = null != timestamp;
    }
    const tmp3 = tmp && timestamp <= closure_8 || bypassIdleUpdate;
    if (!tmp3) {
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
    const bypassIdleUpdate = obj.bypassIdleUpdate;
    if (tmp) {
      tmp = null != timestamp;
    }
    const tmp3 = tmp && timestamp <= closure_8 || bypassIdleUpdate;
    if (!tmp3) {
      c3 = null;
      if (!tmp) {
        const _Date = Date;
        timestamp = Date.now();
      }
      closure_8 = timestamp;
      checkIdleAFK();
    }
  }, 500);
  const Store = get_initializedDefault.Store;
  class IdleStore extends Store {
    initialize() {
      this.waitFor(AuthenticationStore);
    }
    isIdle() {
      return idle;
    }
    isAFK() {
      return afk;
    }
    getIdleSince() {
      let tmp = null;
      if (idle) {
        tmp = idleSince;
      }
      return tmp;
    }
    getSystemSuspended() {
      return c11;
    }
    getSystemLocked() {
      return c12;
    }
  }
  const prototype = IdleStore.prototype;
  IdleStore.displayName = "IdleStore";
  let obj2 = {
    IDLE: function handleIdle(idle) {
        idle = idle.idle;
      },
    AFK: function handleAFK(afk) {
        afk = afk.afk;
      },
    SPEAKING: function handleSpeaking(speakingFlags) {
        const tmp2 = speakingFlags.speakingFlags !== SpeakingFlags.NONE && tmp === AuthenticationStore.getId();
        if (tmp2) {
          const obj = {};
          let timestamp = obj.timestamp;
          let tmp4 = "OVERLAY_SET_NOT_IDLE" === obj.type;
          const bypassIdleUpdate = obj.bypassIdleUpdate;
          if (tmp4) {
            tmp4 = null != timestamp;
          }
          const tmp6 = tmp4 && timestamp <= closure_8 || bypassIdleUpdate;
          if (!tmp6) {
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
        closure_13 = state.state === metroRequire.BACKGROUND;
        c3 = null;
        let closure_8 = Date.now();
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
  const idleStore = new IdleStore(DispatcherDefault, obj2);
  const _module1 = _mod2;
  const result = _module1.fileFinishedImporting("stores/IdleStore.tsx");
  exports.default = idleStore;
}
let timerId = setInterval(checkIdleAFK, 30 * DurationsDefault.Millis.SECOND);