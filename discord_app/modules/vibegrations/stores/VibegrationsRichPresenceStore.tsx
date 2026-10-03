// discord_app/modules/vibegrations/stores/VibegrationsRichPresenceStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import conjuringActivity from "../lib/conjuringActivity.tsx";
import IdleStore from "../../../stores/IdleStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import VibegrationsProjectStore from "VibegrationsProjectStore.tsx";

require = fn;
function updateActivity(withGracePeriod) {
  if (IdleStore.isIdle()) {
    if (null != timeout) {
      const _clearTimeout7 = clearTimeout;
      clearTimeout(timeout);
      timeout = null;
    }
    if (null != timeout2) {
      const _clearTimeout8 = clearTimeout;
      clearTimeout(timeout2);
      timeout2 = null;
    }
    selectedProjectId = null;
    let flag4 = null != obj2;
    if (flag4) {
      obj2 = null;
      flag4 = true;
    }
    return flag4;
  } else {
    if (null != selectedProjectId) {
      if (null == VibegrationsProjectStore.getProject(selectedProjectId)) {
        if (null != timeout) {
          const _clearTimeout5 = clearTimeout;
          clearTimeout(timeout);
          timeout = null;
        }
        if (null != timeout2) {
          const _clearTimeout6 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        selectedProjectId = null;
        let flag3 = null != obj2;
        if (flag3) {
          obj2 = null;
          flag3 = true;
        }
        return flag3;
      }
    }
    let tmp7 = null;
    if (SelectedChannelStore.getChannelId() === StaticChannelRoute.VIBEGRATIONS) {
      const guildId = SelectedGuildStore.getGuildId();
      tmp7 = null;
      if (null != guildId) {
        selectedProjectId = VibegrationsProjectStore.getSelectedProjectId(guildId);
        let tmp11 = null;
        if (null != selectedProjectId) {
          tmp11 = null;
          if (null != VibegrationsProjectStore.getProject(selectedProjectId)) {
            tmp11 = selectedProjectId;
          }
        }
        tmp7 = tmp11;
      }
    }
    if (null == tmp7) {
      if (null == obj2) {
        if (null != timeout) {
          const _clearTimeout3 = clearTimeout;
          clearTimeout(timeout);
          timeout = null;
        }
        if (null != timeout2) {
          const _clearTimeout4 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        selectedProjectId = null;
        let flag2 = null != obj2;
        if (flag2) {
          obj2 = null;
          flag2 = true;
        }
      }
      flag2 = false;
      if (null == timeout) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(() => {
          c11 = null;
          if (null != c12) {
            const _clearTimeout = clearTimeout;
            clearTimeout(c12);
            c12 = null;
          }
          c9 = null;
          let flag = null != c10;
          if (flag) {
            c10 = null;
            flag = true;
          }
          if (flag) {
            vibegrationsRichPresenceStore.emitChange();
          }
        }, 30000);
        flag2 = false;
      }
    } else {
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      let flag = tmp7 !== selectedProjectId;
      if (!flag) {
        flag = null == obj2;
      }
      if (flag) {
        selectedProjectId = tmp7;
        obj2 = { type: ActivityTypes.PLAYING, name: conjuringActivity.CONJURING_ACTIVITY_NAME, details: null, timestamps: null };
        c0 = undefined;
        const prop = conjuringActivity.CONJURING_ACTIVITY_LINES;
        const found = prop.filter((item) => item !== details);
        const _Math = Math;
        const _Math2 = Math;
        obj2.details = found[Math.floor(Math, Math.random(Math) * found.length)];
        const obj3 = { start: null };
        const _Date = Date;
        obj3.start = Date.now();
        obj2.timestamps = obj3;
        if (null != timeout2) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        const _setTimeout = setTimeout;
        timeout2 = setTimeout(() => {
          let timeout = null;
          if (null != closure_1_10) {
            let obj = {};
            let merged = Object.assign(closure_1_10);
            details = closure_1_10.details;
            let prop = closure_1_0(closure_1_1[6]).CONJURING_ACTIVITY_LINES;
            let found = prop.filter((item) => item !== details);
            let _Math = Math;
            let _Math2 = Math;
            obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
            closure_1_10 = obj;
            if (null != timeout) {
              let _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              timeout = null;
            }
            let _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              let timeout = null;
              if (null != closure_1_10) {
                let obj = {};
                let merged = Object.assign(closure_1_10);
                details = closure_1_10.details;
                let prop = closure_1_0(closure_1_1[6]).CONJURING_ACTIVITY_LINES;
                let found = prop.filter((item) => item !== details);
                let _Math = Math;
                let _Math2 = Math;
                obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                closure_1_10 = obj;
                if (null != timeout) {
                  let _clearTimeout = clearTimeout;
                  clearTimeout(timeout);
                  timeout = null;
                }
                let _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  let timeout = null;
                  if (null != closure_1_10) {
                    let obj = {};
                    let merged = Object.assign(closure_1_10);
                    details = closure_1_10.details;
                    let prop = closure_1_0(closure_1_1[6]).CONJURING_ACTIVITY_LINES;
                    let found = prop.filter((item) => item !== details);
                    let _Math = Math;
                    let _Math2 = Math;
                    obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                    closure_1_10 = obj;
                    if (null != timeout) {
                      let _clearTimeout = clearTimeout;
                      clearTimeout(timeout);
                      timeout = null;
                    }
                    let _setTimeout = setTimeout;
                    timeout = setTimeout(() => {
                      let timeout = null;
                      if (null != closure_1_10) {
                        let obj = {};
                        let merged = Object.assign(closure_1_10);
                        details = closure_1_10.details;
                        let prop = closure_1_0(closure_1_1[6]).CONJURING_ACTIVITY_LINES;
                        let found = prop.filter(/* F106349 */ function() { ... });
                        let _Math = Math;
                        let _Math2 = Math;
                        obj.details = found[Math.floor(Math, Math.random(Math) * found.length)];
                        closure_1_10 = obj;
                        if (null != timeout) {
                          let _clearTimeout = clearTimeout;
                          clearTimeout(timeout);
                          timeout = null;
                        }
                        let _setTimeout = setTimeout;
                        timeout = setTimeout(() => { ... }, closure_1_8);
                        closure_1_14.emitChange();
                      }
                    }, closure_1_8);
                    closure_1_14.emitChange();
                  }
                }, closure_1_8);
                closure_1_14.emitChange();
              }
            }, closure_1_8);
            closure_1_14.emitChange();
          }
        }, c8);
        flag = true;
      }
      return flag;
    }
  }
}
const ActivityTypes = fn(1085).ActivityTypes;
const StaticChannelRoute = fn(2058).StaticChannelRoute;
let c8 = 300000;
let selectedProjectId = null;
let c11 = null;
let closure_12 = null;
const Store = initializeDefault.Store;
class VibegrationsRichPresenceStore extends Store {
}
const prototype = VibegrationsRichPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [IdleStore, SelectedChannelStore, SelectedGuildStore, VibegrationsProjectStore];
  this.syncWith(items, () => updateActivity({ withGracePeriod: true }));
};
prototype["getActivity"] = function getActivity() {
  return obj2;
};
VibegrationsRichPresenceStore.displayName = "VibegrationsRichPresenceStore";
const vibegrationsRichPresenceStore = new VibegrationsRichPresenceStore(DispatcherDefault, {
  CONNECTION_OPEN() {
    return updateActivity({ withGracePeriod: false });
  },
  LOGOUT: function clearActivity() {
    if (null != c11) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c11);
      c11 = null;
    }
    if (null != closure_12) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_12);
      closure_12 = null;
    }
    selectedProjectId = null;
    let flag = null != obj2;
    if (flag) {
      flag = true;
    }
    return flag;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/stores/VibegrationsRichPresenceStore.tsx");

export default vibegrationsRichPresenceStore;
export const CONJURING_ACTIVITY_GRACE_PERIOD_MS = 30000;
export const CONJURING_ACTIVITY_LINE_ROTATION_MS = 300000;