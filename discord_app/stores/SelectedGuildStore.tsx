// discord_app/stores/SelectedGuildStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import matchPathCompat from "../modules/routing/matchPathCompat.tsx";
import RouteUtils from "../modules/routing/RouteUtils.tsx";
import UserGuildJoinRequestStore from "../modules/guild_member_verification/UserGuildJoinRequestStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import DefaultRouteStore from "DefaultRouteStore.tsx";
import GuildStore from "GuildStore.tsx";

require = fn;
function handleConnectionOpen() {
  let tmp = null != c9;
  if (tmp) {
    tmp = c9 !== metroImportDefault;
  }
  if (tmp) {
    tmp = null == GuildStore.getGuild(c9);
  }
  if (tmp) {
    tmp = null == UserGuildJoinRequestStore.getRequest(c9);
  }
  if (tmp) {
    c9 = null;
  }
  let tmp8 = null != c10;
  if (tmp8) {
    tmp8 = c10 !== metroImportDefault;
  }
  if (tmp8) {
    tmp8 = null == GuildStore.getGuild(c10);
  }
  if (tmp8) {
    tmp8 = null == UserGuildJoinRequestStore.getRequest(c10);
  }
  if (tmp8) {
    c10 = null;
  }
  if (null != c9) {
    const _Date = Date;
    prop[tmp15] = Date.now();
  }
}
const Constants = fn(1072);
({ ME: closure_6, MOBILE_GUILD_UPSELL_LIST: metroImportDefault, Routes: closure_8 } = Constants);
let c9 = null;
let c10 = null;
let prop = {};
const PersistedStore = initializeDefault.PersistedStore;
class SelectedGuildStore extends PersistedStore {}
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
  c9 = selectedGuildId;
  lastSelectedGuildId = undefined;
  if (selectedGuildTimestampMillis != null) {
    lastSelectedGuildId = selectedGuildTimestampMillis.lastSelectedGuildId;
  }
  if (lastSelectedGuildId == null) {
    lastSelectedGuildId = null;
  }
  c10 = lastSelectedGuildId;
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
    tmp9 = tmp8 !== c9;
  }
  if (tmp9) {
    c9 = tmp8;
  }
};
prototype["getState"] = function getState() {
  return { selectedGuildTimestampMillis: prop, selectedGuildId, lastSelectedGuildId };
};
prototype["getGuildId"] = function getGuildId() {
  return c9;
};
prototype["getLastSelectedGuildId"] = function getLastSelectedGuildId() {
  return c10;
};
prototype["getLastSelectedTimestamp"] = function getLastSelectedTimestamp(arg0) {
  let num = -1;
  if (c9 !== arg0) {
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
    c10 = undefined;
    handleConnectionOpen();
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (c9 === guildId) {
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
        c10 = guildId;
      }
      c9 = guildId;
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
      if (c10 === guildId) {
        c10 = null;
        flag = true;
      }
      if (c9 === guildId) {
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
          c9 = null;
          router_utils.replaceWith(React5.ME);
          flag = true;
        }
      }
      c9 = tmp3;
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
      if (c10 === id) {
        c10 = null;
        flag = true;
      }
      if (c9 === id) {
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
          c9 = null;
          router_utils.replaceWith(React5.ME);
          flag = true;
        }
      }
      c9 = tmp8;
      router_utils.replaceWith(React5.CHANNEL(tmp8));
      flag = true;
    }
  },
  LOGOUT: function handleLogout() {
    c9 = null;
    c10 = null;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/SelectedGuildStore.tsx");

export default selectedGuildStore;
export const SELECTED_GUILD_TIMESTAMP_NOW = -1;
