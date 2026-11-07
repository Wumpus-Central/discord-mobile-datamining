// === Module 5171: SelectedGuildStore ===

// Module 5171 (SelectedGuildStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1099 */;
import matchPathCompat from "matchPathCompat" /* 5176 */;
import RouteUtils from "RouteUtils" /* 5189 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5172 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DefaultRouteStore from "DefaultRouteStore" /* 5175 */;
import GuildStore from "GuildStore" /* 5011 */;

require = fn;
function handleConnectionOpen() {
  let tmp = null == c10;
  if (!tmp) {
    let tmp4 = c10 === metroImportDefault;
    if (!tmp4) {
      tmp4 = tmp2 === React6;
    }
    tmp = tmp4;
  }
  if (!tmp) {
    tmp = null != GuildStore.getGuild(c10);
  }
  if (!tmp) {
    tmp = null != UserGuildJoinRequestStore.getRequest(c10);
  }
  if (!tmp) {
    c10 = null;
  }
  let tmp10 = null == c11;
  if (!tmp10) {
    let tmp13 = c11 === metroImportDefault;
    if (!tmp13) {
      tmp13 = tmp11 === React6;
    }
    tmp10 = tmp13;
  }
  if (!tmp10) {
    tmp10 = null != GuildStore.getGuild(c11);
  }
  if (!tmp10) {
    tmp10 = null != UserGuildJoinRequestStore.getRequest(c11);
  }
  if (!tmp10) {
    c11 = null;
  }
  if (null != c10) {
    const _Date = Date;
    prop[tmp19] = Date.now();
  }
}
const Constants = fn(1072);
({ ME: closure_6, MOBILE_GUILD_UPSELL_LIST: metroImportDefault, Routes: closure_8, WATERWHEELS: closure_9 } = Constants);
let c10 = null;
let c11 = null;
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
  c10 = selectedGuildId;
  lastSelectedGuildId = undefined;
  if (selectedGuildTimestampMillis != null) {
    lastSelectedGuildId = selectedGuildTimestampMillis.lastSelectedGuildId;
  }
  if (lastSelectedGuildId == null) {
    lastSelectedGuildId = null;
  }
  c11 = lastSelectedGuildId;
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
    tmp9 = tmp8 !== c10;
  }
  if (tmp9) {
    c10 = tmp8;
  }
};
prototype["getState"] = function getState() {
  return { selectedGuildTimestampMillis: prop, selectedGuildId, lastSelectedGuildId };
};
prototype["getGuildId"] = function getGuildId() {
  return c10;
};
prototype["getLastSelectedGuildId"] = function getLastSelectedGuildId() {
  return c11;
};
prototype["getLastSelectedTimestamp"] = function getLastSelectedTimestamp(arg0) {
  let num = -1;
  if (c10 !== arg0) {
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
    c11 = undefined;
    handleConnectionOpen();
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (c10 === guildId) {
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
        c11 = guildId;
      }
      c10 = guildId;
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
      if (c11 === guildId) {
        c11 = null;
        flag = true;
      }
      if (c10 === guildId) {
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
            if (item10022 !== arg0) {
              let tmp8 = prop[item10022];
              let tmp11 = tmp8 > num;
              if (tmp11) {
                tmp11 = null != GuildStore.getGuild(item10022);
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
          c10 = null;
          router_utils.replaceWith(React5.ME);
          flag = true;
        }
      }
      c10 = tmp3;
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
      if (c11 === id) {
        c11 = null;
        flag = true;
      }
      if (c10 === id) {
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
            if (item10022 !== arg0) {
              let tmp8 = prop[item10022];
              let tmp11 = tmp8 > num;
              if (tmp11) {
                tmp11 = null != GuildStore.getGuild(item10022);
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
          c10 = null;
          router_utils.replaceWith(React5.ME);
          flag = true;
        }
      }
      c10 = tmp8;
      router_utils.replaceWith(React5.CHANNEL(tmp8));
      flag = true;
    }
  },
  LOGOUT: function handleLogout() {
    c10 = null;
    c11 = null;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/SelectedGuildStore.tsx");

export default selectedGuildStore;
export const SELECTED_GUILD_TIMESTAMP_NOW = -1;