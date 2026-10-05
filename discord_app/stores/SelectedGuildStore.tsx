// === Module 4699: SelectedGuildStore ===

// Module 4699 (SelectedGuildStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1112 */;
import matchPathCompat from "matchPathCompat" /* 4704 */;
import RouteUtils from "RouteUtils" /* 4717 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4700 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4703 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function handleConnectionOpen() {
  const tmp = null != selectedGuildId && null == GuildStore.getGuild(selectedGuildId) && null == UserGuildJoinRequestStore.getRequest(selectedGuildId);
  if (tmp) {
    selectedGuildId = null;
  }
  const tmp6 = null != lastSelectedGuildId && null == GuildStore.getGuild(lastSelectedGuildId) && null == UserGuildJoinRequestStore.getRequest(lastSelectedGuildId);
  if (tmp6) {
    lastSelectedGuildId = null;
  }
  if (null != selectedGuildId) {
    const _Date = Date;
    prop[tmp11] = Date.now();
  }
}
({ ME: metroRequire, Routes: metroImportDefault } = Constants);
let selectedGuildId = null;
let lastSelectedGuildId = null;
let prop = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class SelectedGuildStore extends PersistedStore {
  initialize(selectedGuildTimestampMillis) {
    let CHANNEL;
    let RouteParam;
    this.mustEmitChanges((type) => "CONNECTION_OPEN" !== type.type);
    this.waitFor(AuthenticationStore, DefaultRouteStore, GuildStore, UserGuildJoinRequestStore);
    prop = undefined;
    if (selectedGuildTimestampMillis != null) {
      prop = selectedGuildTimestampMillis.selectedGuildTimestampMillis;
    }
    if (prop == null) {
      prop = {};
    }
    selectedGuildId = undefined;
    if (selectedGuildTimestampMillis != null) {
      selectedGuildId = selectedGuildTimestampMillis.selectedGuildId;
    }
    if (selectedGuildId == null) {
      selectedGuildId = null;
    }
    lastSelectedGuildId = undefined;
    if (selectedGuildTimestampMillis != null) {
      lastSelectedGuildId = selectedGuildTimestampMillis.lastSelectedGuildId;
    }
    if (lastSelectedGuildId == null) {
      lastSelectedGuildId = null;
    }
    const lastNonVoiceRoute = DefaultRouteStore.lastNonVoiceRoute;
    const obj = { path: CHANNEL(RouteParam.guildId()) };
    const matchPath = matchPathCompat.matchPath;
    CHANNEL = metroImportDefault.CHANNEL;
    matchPathCompat;
    RouteParam = RouteUtils.RouteParam;
    const matchPathResult = matchPath(lastNonVoiceRoute, obj);
    let guildId;
    if (matchPathResult != null) {
      const params = matchPathResult.params;
      if (params != null) {
        guildId = params.guildId;
      }
    }
    let tmp9 = null;
    if (guildId !== metroRequire) {
      if (guildId == null) {
        guildId = null;
      }
      tmp9 = guildId;
    }
    const tmp10 = null != tmp9 && tmp9 !== selectedGuildId;
    if (tmp10) {
      selectedGuildId = tmp9;
    }
  }
  getState() {
    return { selectedGuildTimestampMillis: prop, selectedGuildId, lastSelectedGuildId };
  }
  getGuildId() {
    return selectedGuildId;
  }
  getLastSelectedGuildId() {
    return lastSelectedGuildId;
  }
  getLastSelectedTimestamp(arg0) {
    let num = -1;
    if (selectedGuildId !== arg0) {
      num = prop[arg0];
    }
    return num;
  }
}
const prototype = SelectedGuildStore.prototype;
SelectedGuildStore.displayName = "SelectedGuildStore";
SelectedGuildStore.persistKey = "SelectedGuildStore";
let obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedGuildId) {
    selectedGuildId = selectedGuildId.selectedGuildId;
    lastSelectedGuildId = undefined;
    handleConnectionOpen();
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (selectedGuildId === guildId) {
      return false;
    } else {
      if (null != selectedGuildId) {
        const _Date = Date;
        prop[selectedGuildId] = Date.now();
      }
      if (null != guildId) {
        const _Date2 = Date;
        prop[guildId] = Date.now();
      }
      if (null != guildId) {
        lastSelectedGuildId = guildId;
      }
      selectedGuildId = guildId;
    }
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    let tmp = guildId.user.id === AuthenticationStore.getId();
    if (tmp) {
      delete prop[guildId];
      let flag = false;
      if (lastSelectedGuildId === guildId) {
        lastSelectedGuildId = null;
        flag = true;
      }
      if (selectedGuildId === guildId) {
        const tmp5 = (function pickFallbackGuildId(guildId) {
          let closure_0 = guildId;
          if (null != lastSelectedGuildId) {
            if (null != GuildStore.getGuild(lastSelectedGuildId)) {
              return lastSelectedGuildId;
            }
          }
          let tmp3 = null;
          let num = 0;
          const keys = Object.keys(prop);
          for (const item10022 of keys) {
            if (item10022 !== guildId) {
              let tmp8 = prop[item10022];
              let tmp11 = tmp8 > num && null != GuildStore.getGuild(item10022);
              if (tmp11) {
                tmp3 = item10022;
                num = tmp8;
              }
            }
            continue;
          }
          if (null != tmp3) {
            return tmp3;
          } else {
            const guildsArray = GuildStore.getGuildsArray();
            const found = guildsArray.find((id) => id.id !== closure_0);
            let id;
            if (found != null) {
              id = found.id;
            }
            if (id == null) {
              id = null;
            }
            return id;
          }
        })(guildId);
        if (null != tmp5) {
          selectedGuildId = tmp5;
          const obj2 = router_utils;
          obj2.replaceWith(metroImportDefault.CHANNEL(tmp5));
          flag = true;
        } else {
          selectedGuildId = null;
          const obj = router_utils;
          obj.replaceWith(metroImportDefault.ME);
          flag = true;
        }
      }
      tmp = flag;
    }
    return tmp;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    let id = guild.id;
    let tmp = true !== guild.unavailable;
    if (tmp) {
      delete prop[id];
      let flag = false;
      if (lastSelectedGuildId === id) {
        let tmp3 = null;
        lastSelectedGuildId = null;
        flag = true;
      }
      if (selectedGuildId === id) {
        let num = 0;
        const tmp5 = (function pickFallbackGuildId(guildId) {
          let closure_0 = guildId;
          if (null != lastSelectedGuildId) {
            if (null != GuildStore.getGuild(lastSelectedGuildId)) {
              return lastSelectedGuildId;
            }
          }
          let tmp3 = null;
          let num = 0;
          const keys = Object.keys(prop);
          for (const item10022 of keys) {
            if (item10022 !== guildId) {
              let tmp8 = prop[item10022];
              let tmp11 = tmp8 > num && null != GuildStore.getGuild(item10022);
              if (tmp11) {
                tmp3 = item10022;
                num = tmp8;
              }
            }
            continue;
          }
          if (null != tmp3) {
            return tmp3;
          } else {
            const guildsArray = GuildStore.getGuildsArray();
            const found = guildsArray.find((id) => id.id !== closure_0);
            let id;
            if (found != null) {
              id = found.id;
            }
            if (id == null) {
              id = null;
            }
            return id;
          }
        })(id);
        if (null != tmp5) {
          selectedGuildId = tmp5;
          const obj2 = router_utils;
          obj2.replaceWith(metroImportDefault.CHANNEL(tmp5));
          flag = true;
        } else {
          selectedGuildId = null;
          const obj = router_utils;
          obj.replaceWith(metroImportDefault.ME);
          flag = true;
        }
      }
      tmp = flag;
    }
    return tmp;
  },
  LOGOUT: function handleLogout() {
    selectedGuildId = null;
    lastSelectedGuildId = null;
  }
};
const selectedGuildStore = new SelectedGuildStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/SelectedGuildStore.tsx");

export default selectedGuildStore;
export const SELECTED_GUILD_TIMESTAMP_NOW = -1;