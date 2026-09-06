// discord_app/stores/IdleStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import debounceDefault from "../../_runtime/00551_debounce.js";
import dispatcherDefault from "../Dispatcher.tsx";
import setDefault from "../utils/Durations.tsx";
import set from "../utils/PlatformUtils.tsx";
import explicitContentFromProto from "../modules/user_settings/UserSettings.tsx";
import setDefault2 from "../lib/DiscordNative.tsx";
import _modDef5411 from "../actions/SelectedChannelActionCreators.tsx";
import closure_4 from "AuthenticationStore.tsx";
import ME from "../Constants.tsx";
import { SpeakingFlags } from "../../discord_common/js/packages/media-engine/Constants.tsx";

require = arg1;
function checkIdleAFK() {
  if (Date.now() - closure_8 <= closure_5) {
    let tmp2 = c11;
    if (!c11) {
      tmp2 = c12;
    }
    if (!tmp2) {
      let obj = set;
      tmp2 = obj.isAndroid() && c13;
      const tmp5 = obj.isAndroid() && c13;
    }
    if (!tmp2) {
      if (c9) {
        dispatcherDefault.dispatch({ type: "IDLE", idle: false });
        const obj2 = dispatcherDefault;
      }
    }
    const AfkTimeout = explicitContentFromProto.AfkTimeout;
    const setting = AfkTimeout.getSetting();
    if (0 !== setting) {
      if (null == closure_3) {
        const _Date = Date;
        const _Math = Math;
        const diff = Date.now() - closure_8;
        if (diff <= Math.min(setting * setDefault.Millis.SECOND, tmp)) {
          let tmp17 = c11;
          if (!c11) {
            tmp17 = c12;
          }
          if (!tmp17) {
            const tmp14Result = tmp14(1115);
            tmp17 = tmp14(1115).isAndroid() && c13;
            const tmp18 = tmp14(1115).isAndroid() && c13;
          }
          if (!tmp17) {
            if (c10) {
              tmp28(573).dispatch({ type: "AFK", afk: false });
              const tmp28Result = tmp28(573);
            }
          }
        }
        tmp28 = importDefault;
      }
    }
    if (!c10) {
      dispatcherDefault.dispatch({ type: "AFK", afk: true });
      const obj7 = dispatcherDefault;
    }
    tmp14 = require;
  }
  if (!c9) {
    obj = { type: "IDLE", idle: true, idleSince: null };
    obj[2] = closure_8;
    dispatcherDefault.dispatch(obj);
    const obj3 = dispatcherDefault;
  }
}
({ IDLE_DURATION: c5, AppStates: closure_6 } = ME);
let closure_8 = Date.now();
let c9 = false;
let c10 = false;
let c11 = false;
let c12 = false;
let c13 = false;
if (require("set").isPlatformEmbedded) {
  const importDefaultResult = setDefault2;
  let powerMonitor;
  if (importDefaultResult != null) {
    powerMonitor = importDefaultResult.powerMonitor;
  }
  if (null != powerMonitor) {
    function checkNativeIdle() {
      const tmp3 = setDefault2;
      let getSystemIdleTimeMs;
      if (tmp3 != null) {
        const powerMonitor = tmp3.powerMonitor;
        if (powerMonitor != null) {
          getSystemIdleTimeMs = powerMonitor.getSystemIdleTimeMs;
        }
      }
      if (null != getSystemIdleTimeMs) {
        const powerMonitor2 = tmp(4182).powerMonitor;
        const systemIdleTimeMs = powerMonitor2.getSystemIdleTimeMs();
        if (systemIdleTimeMs instanceof Promise) {
          systemIdleTimeMs.then(function handleIdleTime(arg0) {
            const diff = Date.now() - arg0;
            let tmp2 = null == c3;
            if (!tmp2) {
              tmp2 = diff > c3;
            }
            if (tmp2) {
              const _Math = Math;
              closure_8 = Math.max(diff, closure_8);
              c3 = null;
            }
            callback2();
            const timerId = setTimeout(closure_15, 10 * callback(table[5]).Millis.SECOND);
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
          let timerId = setTimeout(checkNativeIdle, 10 * tmp(1090).Millis.SECOND);
        }
      }
    }
    checkNativeIdle();
    powerMonitor = setDefault2.powerMonitor;
    powerMonitor.on("resume", () => {
      c11 = false;
      checkIdleAFK();
    });
    let powerMonitor2 = setDefault2.powerMonitor;
    powerMonitor2.on("suspend", () => {
      c11 = true;
      closure_3 = Date.now();
      checkIdleAFK();
      _modDef5411.disconnect();
    });
    const powerMonitor3 = setDefault2.powerMonitor;
    class IdleStore extends r10079 {}
    powerMonitor3.on("lock-screen", () => {
      c12 = true;
      closure_3 = Date.now();
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
      bypassIdleUpdate = timestamp <= timestamp;
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
      bypassIdleUpdate = timestamp <= timestamp;
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
      checkIdleAFK();
    }
  }, 500);
  const Store = initializeDefault.Store;
  class IdleStore extends r10079 {}
  const prototype = IdleStore.prototype;
  prototype["initialize"] = function initialize() {
    this.waitFor(closure_4);
  };
  prototype["isIdle"] = function isIdle() {
    return c9;
  };
  prototype["isAFK"] = function isAFK() {
    return c10;
  };
  prototype["getIdleSince"] = function getIdleSince() {
    let tmp = null;
    if (c9) {
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
    IDLE: null,
    AFK: null,
    SPEAKING: null,
    APP_STATE_UPDATE: null,
    OVERLAY_SET_NOT_IDLE: null,
    CHANNEL_SELECT: null,
    VOICE_CHANNEL_SELECT: null,
    WINDOW_FOCUS: null,
    OVERLAY_INITIALIZE: null,
    OVERLAY_SET_INPUT_LOCKED: null,
  };
  obj[0] = function handleIdle(idle) {
    idle = idle.idle;
  };
  obj[1] = function handleAFK(afk) {
    afk = afk.afk;
  };
  obj[2] = function handleSpeaking(speakingFlags) {
    let tmp2 = speakingFlags.speakingFlags !== SpeakingFlags.NONE;
    if (tmp2) {
      tmp2 = tmp === id.getId();
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
        bypassIdleUpdate = timestamp <= timestamp;
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
        checkIdleAFK();
      }
    }
    return false;
  };
  obj[3] = function handleAppStateUpdate(state) {
    closure_13 = state.state === constants.BACKGROUND;
    c3 = null;
    closure_8 = Date.now();
    checkIdleAFK();
    return false;
  };
  obj[4] = handleGenericAction;
  obj[5] = handleGenericAction;
  obj[6] = handleGenericAction;
  obj[7] = handleGenericAction;
  obj[8] = handleGenericAction;
  obj[9] = handleGenericAction;
  const idleStore = new IdleStore(dispatcherDefault, obj);
  const result = require("set").fileFinishedImporting("stores/IdleStore.tsx");
  exports.default = idleStore;
}
let timerId = setInterval(checkIdleAFK, 30 * setDefault.Millis.SECOND);
