// discord_app/modules/conjure/presence/ConjureRichPresenceStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import ChannelConstants from "../../channel/ChannelConstants.tsx";
import conjurePresenceActivity from "conjurePresenceActivity.tsx";
import IdleStore from "../../../stores/IdleStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let _null, c10, c12, c9;

function updateActivity(withGracePeriod) {
  let found;
  let obj3;
  let timeout;
  let timeout2;
  const f106495 = () => {
    let found;
    let timeout = null;
    if (null != _null) {
      const obj = { details: found[Math.floor(Math, Math.random(Math) * found.length)] };
      const merged = Object.assign(_null);
      const details = _null.details;
      const prop = conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_LINES;
      found = prop.filter((item) => item !== details);
      const _Math = Math;
      const _Math2 = Math;
      _null = obj;
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(f106495, closure_1_8);
      conjureRichPresenceStore.emitChange();
    }
  };
  withGracePeriod = withGracePeriod.withGracePeriod;
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
    let flag;
    if (null != selectedProjectId) {
      if (null == ConjureProjectStore.getProject(selectedProjectId)) {
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
    if (SelectedChannelStore.getChannelId() === StaticChannelRoute.CONJURE) {
      const guildId = SelectedGuildStore.getGuildId();
      tmp7 = null;
      if (null != guildId) {
        selectedProjectId = ConjureProjectStore.getSelectedProjectId(guildId);
        let tmp11 = null;
        if (null != selectedProjectId) {
          tmp11 = null;
          if (null != ConjureProjectStore.getProject(selectedProjectId)) {
            tmp11 = selectedProjectId;
          }
        }
        tmp7 = tmp11;
      }
    }
    if (null == tmp7) {
      let flag2;
      if (null != obj2) {
        if (withGracePeriod) {
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
                conjureRichPresenceStore.emitChange();
              }
            }, 30000);
            flag2 = false;
          }
        }
        flag = flag2;
      }
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
      flag2 = null != obj2;
      if (flag2) {
        obj2 = null;
        flag2 = true;
      }
    } else {
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
        timeout = null;
      }
      flag = tmp7 !== selectedProjectId || null == obj2;
      if (flag) {
        selectedProjectId = tmp7;
        obj2 = {
          type: ActivityTypes.PLAYING,
          name: conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_NAME,
          details: found[Math.floor(Math, Math.random(Math) * found.length)],
          timestamps: obj3,
        };
        let c0;
        let prop = conjurePresenceActivity.CONJURE_PRESENCE_ACTIVITY_LINES;
        found = prop.filter((item) => item !== details);
        let _Math = Math;
        let _Math2 = Math;
        const _Date = Date;
        obj3 = { start: Date.now() };
        if (null != timeout2) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout2);
          timeout2 = null;
        }
        let _setTimeout = setTimeout;
        timeout2 = setTimeout(f106495, c8);
        flag = true;
      }
    }
    return flag;
  }
}
const ActivityTypes = Constants.ActivityTypes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let c8 = 300000;
let selectedProjectId = null;
let obj2 = null;
let c11 = null;
let closure_12 = null;
const Store = get_initializedDefault.Store;
class ConjureRichPresenceStore extends Store {
  initialize() {
    const items = [IdleStore, SelectedChannelStore, SelectedGuildStore, ConjureProjectStore];
    this.syncWith(items, () => updateActivity({ withGracePeriod: true }));
  }
  getActivity() {
    return obj2;
  }
}
const prototype = ConjureRichPresenceStore.prototype;
ConjureRichPresenceStore.displayName = "ConjureRichPresenceStore";
let obj = {
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
    return null != obj2 && true;
  },
};
const conjureRichPresenceStore = new ConjureRichPresenceStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conjure/presence/ConjureRichPresenceStore.tsx");

export default conjureRichPresenceStore;
export const CONJURE_PRESENCE_ACTIVITY_GRACE_PERIOD_MS = 30000;
export const CONJURE_PRESENCE_ACTIVITY_LINE_ROTATION_MS = 300000;
