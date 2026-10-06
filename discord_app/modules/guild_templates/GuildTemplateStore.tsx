// === Module 6979: GuildTemplateStore ===

// Module 6979 (GuildTemplateStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import createResolvedGuildTemplateDefault from "createResolvedGuildTemplate" /* 6838 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 6839 */;
import size from "module_2" /* 2 */;

function handleGuildTemplateResolveSuccess(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const code = guildTemplate.code;
  if (null != code) {
    let obj;
    const value = map.get(code);
    if (null != value) {
      const obj2 = {};
      const merged = Object.assign(value);
      obj = obj2;
    } else {
      obj = { code, state: GuildTemplateStates.RESOLVING };
    }
    const tmp7 = createResolvedGuildTemplateDefault(guildTemplate);
    for (const key10019 in tmp7) {
      obj[key10019] = tmp7[key10019];
      continue;
    }
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map(map);
    const result = map.set(code, obj);
  }
}
function handleGuildTemplateResolveFailure(code) {
  code = code.code;
  if (null != code) {
    let obj;
    const value = map.get(code);
    if (null != value) {
      const obj2 = {};
      const merged = Object.assign(value);
      obj = obj2;
    } else {
      obj = { code, state: GuildTemplateStates.RESOLVING };
    }
    obj.state = GuildTemplateStates.EXPIRED;
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map(map);
    const result = map.set(code, obj);
  }
}
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
let map = new Map();
let c4 = null;
const Store = get_initializedDefault.Store;
class GuildTemplateStore extends Store {
  getGuildTemplate(code) {
    if (null != code) {
      return map.get(code);
    }
  }
  getGuildTemplates() {
    return map;
  }
  getForGuild(arg0) {
    const keys = map.keys();
    const obj = keys[Symbol.iterator]();
    while (obj !== undefined) {
      let value = map.get(tmp2);
      let tmp5 = value;
      if (null != value) {
        if ("sourceGuildId" in tmp5) {
          if (tmp5.sourceGuildId === arg0) {
            if (tmp5.state !== GuildTemplateStates.EXPIRED) {
              obj.return();
              return value;
            }
          }
        }
      }
      continue;
    }
  }
  getDisplayedGuildTemplateCode() {
    return c4;
  }
}
const prototype = GuildTemplateStore.prototype;
GuildTemplateStore.displayName = "GuildTemplateStore";
let obj = {
  GUILD_TEMPLATE_RESOLVE: function handleGuildTemplateResolve(code) {
    code = code.code;
    map = new Map(map);
    const obj = { code, state: GuildTemplateStates.RESOLVING };
    const result = map.set(code, obj);
  },
  GUILD_TEMPLATE_CREATE_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_SYNC_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_RESOLVE_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function handleGuildTemplateLoadForGuildSuccess(guildTemplates) {
    guildTemplates = guildTemplates.guildTemplates;
    const item = guildTemplates.forEach(function(code) {
      code = code.code;
      if (null != code) {
        let obj;
        const value = map.get(code);
        if (null != value) {
          const obj2 = {};
          const merged = Object.assign(value);
          obj = obj2;
        } else {
          obj = { code, state: constants.RESOLVING };
        }
        const tmp7 = createResolvedGuildTemplateDefault(code);
        for (const key10018 in tmp7) {
          obj[key10018] = tmp7[key10018];
          continue;
        }
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map(map);
        const result = map.set(code, obj);
      }
    });
  },
  GUILD_TEMPLATE_RESOLVE_FAILURE: handleGuildTemplateResolveFailure,
  GUILD_TEMPLATE_DELETE_SUCCESS: handleGuildTemplateResolveFailure,
  GUILD_TEMPLATE_ACCEPT: function handleGuildTemplateAccept(code) {
    code = code.code;
    if (null != code) {
      let obj;
      const value = map.get(code);
      if (null != value) {
        const obj2 = {};
        const merged = Object.assign(value);
        obj = obj2;
      } else {
        obj = { code, state: GuildTemplateStates.RESOLVING };
      }
      obj.state = GuildTemplateStates.ACCEPTING;
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      const result = map.set(code, obj);
    }
  },
  GUILD_TEMPLATE_ACCEPT_SUCCESS: function handleGuildTemplateAcceptSuccess(code) {
    code = code.code;
    if (null != code) {
      let obj;
      const value = map.get(code);
      if (null != value) {
        const obj2 = {};
        const merged = Object.assign(value);
        obj = obj2;
      } else {
        obj = { code, state: GuildTemplateStates.RESOLVING };
      }
      obj.state = GuildTemplateStates.ACCEPTED;
      let num = obj.usageCount;
      if (num == null) {
        num = 0;
      }
      obj.usageCount = num + 1;
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      const result = map.set(code, obj);
    }
  },
  GUILD_TEMPLATE_ACCEPT_FAILURE: function handleAcceptInviteFailure(code) {
    code = code.code;
    if (null != code) {
      let obj;
      const value = map.get(code);
      if (null != value) {
        const obj2 = {};
        const merged = Object.assign(value);
        obj = obj2;
      } else {
        obj = { code, state: GuildTemplateStates.RESOLVING };
      }
      obj.state = GuildTemplateStates.RESOLVED;
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      const result = map.set(code, obj);
    }
  },
  GUILD_TEMPLATE_MODAL_SHOW: function handleGuildTemplateModalShow(code) {
    code = code.code;
  },
  GUILD_TEMPLATE_MODAL_HIDE: function handleGuildTemplateModalHide() {
    c4 = null;
  }
};
const guildTemplateStore = new GuildTemplateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateStore.tsx");

export default guildTemplateStore;