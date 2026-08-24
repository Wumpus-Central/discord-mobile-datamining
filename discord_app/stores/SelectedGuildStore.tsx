// === Module 4201: handleConnectionOpen ===

// Module 4201 (handleConnectionOpen)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import transitionTo from "transitionTo" /* 1222 */;
import matchPath from "matchPath" /* 4206 */;
import RouteParam2 from "RouteParam" /* 4219 */;
import closure_2 from "handleGatewayJoinRequestUpdate" /* 4202 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "initialize" /* 4205 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;

require = arg1;
function handleConnectionOpen() {
  let tmp = null != c8;
  if (tmp) {
    tmp = null == store2.getGuild(c8);
  }
  if (tmp) {
    tmp = null == store.getRequest(c8);
  }
  if (tmp) {
    c8 = null;
  }
  let tmp6 = null != c9;
  if (tmp6) {
    tmp6 = null == store2.getGuild(c9);
  }
  if (tmp6) {
    tmp6 = null == store.getRequest(c9);
  }
  if (tmp6) {
    c9 = null;
  }
  if (null != c8) {
    const _Date = Date;
    closure_10[tmp11] = Date.now();
  }
}
({ ME: closure_6, Routes: error } = ME);
let c8 = null;
let c9 = null;
let closure_10 = {};
const PersistedStore = initializeDefault.PersistedStore;
class SelectedGuildStore extends PersistedStore {
}
const prototype = SelectedGuildStore.prototype;
prototype["initialize"] = function initialize(selectedGuildTimestampMillis) {
  this.mustEmitChanges((type) => "CONNECTION_OPEN" !== type.type);
  this.waitFor(closure_3, closure_4, closure_5, closure_2);
  let prop;
  if (selectedGuildTimestampMillis != null) {
    prop = selectedGuildTimestampMillis.selectedGuildTimestampMillis;
  }
  if (prop == null) {
    prop = {};
  }
  let selectedGuildId;
  if (selectedGuildTimestampMillis != null) {
    selectedGuildId = selectedGuildTimestampMillis.selectedGuildId;
  }
  if (selectedGuildId == null) {
    selectedGuildId = null;
  }
  let guildId = selectedGuildId;
  let lastSelectedGuildId;
  if (selectedGuildTimestampMillis != null) {
    lastSelectedGuildId = selectedGuildTimestampMillis.lastSelectedGuildId;
  }
  if (lastSelectedGuildId == null) {
    lastSelectedGuildId = null;
  }
  const obj = { path: null };
  const RouteParam = RouteParam2.RouteParam;
  obj[0] = closure_7.CHANNEL(RouteParam.guildId());
  const matchPathResult = matchPath.matchPath(closure_4.lastNonVoiceRoute, obj);
  guildId = undefined;
  if (matchPathResult != null) {
    const params = matchPathResult.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  let tmp8 = null;
  if (guildId !== closure_6) {
    if (guildId == null) {
      guildId = null;
    }
    tmp8 = guildId;
  }
  let tmp9 = null != tmp8;
  if (tmp9) {
    tmp9 = tmp8 !== guildId;
  }
  if (tmp9) {
    guildId = tmp8;
  }
};
prototype["getState"] = function getState() {
  return { selectedGuildTimestampMillis: closure_10, selectedGuildId: c8, lastSelectedGuildId: c9 };
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
    num = table[arg0];
  }
  return num;
};
SelectedGuildStore.displayName = "SelectedGuildStore";
SelectedGuildStore.persistKey = "SelectedGuildStore";
const selectedGuildStore = new SelectedGuildStore(dispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedGuildId) {
    selectedGuildId = selectedGuildId.selectedGuildId;
    c9 = undefined;
    handleConnectionOpen();
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (guildId === guildId) {
      return false;
    } else {
      if (null != tmp) {
        const _Date = Date;
        closure_10[tmp] = Date.now();
      }
      if (null != guildId) {
        const _Date2 = Date;
        closure_10[guildId] = Date.now();
      }
    }
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    let tmp3 = id;
    const tmp4 = guildId.user.id === id.getId();
    if (!tmp4) {
      return tmp4;
    } else {
      delete tmp[tmp2];
      let flag = false;
      if (c9 === guildId) {
        c9 = null;
        flag = true;
      }
      if (closure_8 === guildId) {
        tmp3 = (function pickFallbackGuildId(guildId) {
          closure_0 = guildId;
          if (null != c9) {
            if (null != store.getGuild(c9)) {
              return c9;
            }
          }
          let tmp3 = null;
          let num = 0;
          const keys = Object.keys(table);
          for (const item10022 of keys) {
            let tmp5 = item10022;
            if (item10022 !== arg0) {
              let tmp6 = table;
              let tmp7 = item10022;
              let tmp8 = table[tmp5];
              let tmp9 = tmp8;
              let tmp10 = num;
              let tmp11 = tmp8 > num;
              if (tmp11) {
                let tmp12 = store;
                let tmp13 = item10022;
                tmp11 = null != store.getGuild(tmp5);
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
            const guildsArray = store.getGuildsArray();
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
          closure_8 = null;
          transitionTo.replaceWith(closure_7.ME);
          flag = true;
          const obj = transitionTo;
        }
      }
      closure_8 = tmp3;
      transitionTo.replaceWith(closure_7.CHANNEL(tmp3));
      flag = true;
      const obj2 = transitionTo;
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
      if (closure_8 === id) {
        let tmp8 = (function pickFallbackGuildId(guildId) {
          closure_0 = guildId;
          if (null != c9) {
            if (null != store.getGuild(c9)) {
              return c9;
            }
          }
          let tmp3 = null;
          let num = 0;
          const keys = Object.keys(table);
          for (const item10022 of keys) {
            let tmp5 = item10022;
            if (item10022 !== arg0) {
              let tmp6 = table;
              let tmp7 = item10022;
              let tmp8 = table[tmp5];
              let tmp9 = tmp8;
              let tmp10 = num;
              let tmp11 = tmp8 > num;
              if (tmp11) {
                let tmp12 = store;
                let tmp13 = item10022;
                tmp11 = null != store.getGuild(tmp5);
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
            const guildsArray = store.getGuildsArray();
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
          closure_8 = null;
          transitionTo.replaceWith(closure_7.ME);
          flag = true;
          const obj = transitionTo;
        }
      }
      closure_8 = tmp8;
      transitionTo.replaceWith(closure_7.CHANNEL(tmp8));
      flag = true;
      const obj2 = transitionTo;
    }
  },
  LOGOUT: function handleLogout() {
    c8 = null;
    c9 = null;
  }
});
const result = require("set").fileFinishedImporting("stores/SelectedGuildStore.tsx");

export default selectedGuildStore;
export const SELECTED_GUILD_TIMESTAMP_NOW = -1;