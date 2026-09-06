// === Module 4381: SelectedGuildStore ===

// Module 4381 (SelectedGuildStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import router_utils from "router_utils" /* 1100 */;
import matchPathCompat from "matchPathCompat" /* 4386 */;
import RouteUtils from "RouteUtils" /* 4399 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4382 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4385 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function handleConnectionOpen() {
  let tmp = null != c8;
  if (tmp) {
    tmp = null == GuildStore.getGuild(c8);
  }
  if (tmp) {
    tmp = null == UserGuildJoinRequestStore.getRequest(c8);
  }
  if (tmp) {
    c8 = null;
  }
  let tmp6 = null != c9;
  if (tmp6) {
    tmp6 = null == GuildStore.getGuild(c9);
  }
  if (tmp6) {
    tmp6 = null == UserGuildJoinRequestStore.getRequest(c9);
  }
  if (tmp6) {
    c9 = null;
  }
  if (null != c8) {
    const _Date = Date;
    prop[tmp11] = Date.now();
  }
}
const Constants = fn(1074);
({ ME: metroRequire, Routes: closure_7 } = Constants);
let c8 = null;
let c9 = null;
let prop = {};
const PersistedStore = initializeDefault.PersistedStore;
class SelectedGuildStore extends PersistedStore {
}
const prototype = SelectedGuildStore.prototype;
prototype["initialize"] = function initialize(selectedGuildTimestampMillis) {
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
  c8 = selectedGuildId;
  lastSelectedGuildId = undefined;
  if (selectedGuildTimestampMillis != null) {
    lastSelectedGuildId = selectedGuildTimestampMillis.lastSelectedGuildId;
  }
  if (lastSelectedGuildId == null) {
    lastSelectedGuildId = null;
  }
  c9 = lastSelectedGuildId;
  const obj = { path: null };
  const RouteParam = RouteUtils.RouteParam;
  obj.path = React5.CHANNEL(RouteParam.guildId());
  const matchPathResult = matchPathCompat.matchPath(DefaultRouteStore.lastNonVoiceRoute, obj);
  let guildId;
  if (matchPathResult != null) {
    const params = matchPathResult.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  let tmp8 = null;
  if (guildId !== timestampProducer) {
    if (guildId == null) {
      guildId = null;
    }
    tmp8 = guildId;
  }
  let tmp9 = null != tmp8;
  if (tmp9) {
    tmp9 = tmp8 !== c8;
  }
  if (tmp9) {
    c8 = tmp8;
  }
};
prototype["getState"] = function getState() {
  return { selectedGuildTimestampMillis: prop, selectedGuildId, lastSelectedGuildId };
};
prototype["getGuildId"] = function getGuildId() {
  return c8;
};
prototype["getLastSelectedGuildId"] = function getLastSelectedGuildId() {
  return c9;
};
prototype["getLastSelectedTimestamp"] = function getLastSelectedTimestamp(arg0) {
  let num = -1;
  if (c8 !== arg0) {
    num = prop[arg0];
  }
  return num;
};
SelectedGuildStore.displayName = "SelectedGuildStore";
SelectedGuildStore.persistKey = "SelectedGuildStore";
const selectedGuildStore = new SelectedGuildStore(DispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedGuildId) {
    selectedGuildId = selectedGuildId.selectedGuildId;
    c9 = undefined;
    handleConnectionOpen();
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (c8 === guildId) {
      return false;
    } else {
      if (null != tmp) {
        const _Date = Date;
        prop[tmp] = Date.now();
      }
      if (null != guildId) {
        const _Date2 = Date;
        prop[guildId] = Date.now();
      }
      if (null != guildId) {
        c9 = guildId;
      }
      c8 = guildId;
    }
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    let tmp3 = AuthenticationStore;
    const tmp4 = guildId.user.id === AuthenticationStore.getId();
    if (!tmp4) {
      return tmp4;
    } else {
      delete tmp[tmp2];
      let flag = false;
      if (c9 === guildId) {
        c9 = null;
        flag = true;
      }
      if (c8 === guildId) {
        tmp3 = (function pickFallbackGuildId(guildId) {
          closure_0 = guildId;
          if (null != lastSelectedGuildId) {
            if (null != GuildStore.getGuild(lastSelectedGuildId)) {
              return lastSelectedGuildId;
            }
          }
          let tmp3 = null;
          let num = 0;
          const keys = Object.keys(prop);
          for (const item10022 of keys) {
            let tmp5 = item10022;
            if (item10022 !== arg0) {
              let tmp8 = prop[tmp5];
              let tmp11 = tmp8 > num;
              if (tmp11) {
                tmp11 = null != GuildStore.getGuild(tmp5);
              }
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
        if (null == tmp3) {
          c8 = null;
          router_utils.replaceWith(React5.ME);
          flag = true;
        }
      }
      c8 = tmp3;
      router_utils.replaceWith(React5.CHANNEL(tmp3));
      flag = true;
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    let id = guild.id;
    if (true === guild.unavailable) {
      return tmp3;
    } else {
      delete tmp[tmp2];
      let flag = false;
      if (c9 === id) {
        c9 = null;
        flag = true;
      }
      if (c8 === id) {
        let tmp8 = (function pickFallbackGuildId(guildId) {
          closure_0 = guildId;
          if (null != lastSelectedGuildId) {
            if (null != GuildStore.getGuild(lastSelectedGuildId)) {
              return lastSelectedGuildId;
            }
          }
          let tmp3 = null;
          let num = 0;
          const keys = Object.keys(prop);
          for (const item10022 of keys) {
            let tmp5 = item10022;
            if (item10022 !== arg0) {
              let tmp8 = prop[tmp5];
              let tmp11 = tmp8 > num;
              if (tmp11) {
                tmp11 = null != GuildStore.getGuild(tmp5);
              }
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
        if (null == tmp8) {
          c8 = null;
          router_utils.replaceWith(React5.ME);
          flag = true;
        }
      }
      c8 = tmp8;
      router_utils.replaceWith(React5.CHANNEL(tmp8));
      flag = true;
    }
  },
  LOGOUT: function handleLogout() {
    c8 = null;
    c9 = null;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/SelectedGuildStore.tsx");

export default selectedGuildStore;
export const SELECTED_GUILD_TIMESTAMP_NOW = -1;