import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import { Store } from "initialize";

function handleGuildTemplateResolveSuccess(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const code = guildTemplate.code;
  if (null != code) {
    const value = map.get(code);
    if (null != value) {
      let obj = {};
      const merged = Object.assign(value);
    } else {
      obj = { code: null, state: null };
      obj[0] = code;
      obj[1] = GuildTemplateStates.RESOLVING;
    }
    const tmp7 = importDefault(5722)(guildTemplate);
    for (const key10019 in tmp7) {
      let tmp17 = key10019;
      obj[key10019] = tmp7[key10019];
      continue;
    }
    const _Map = Map;
    map = new Map(map);
    const result = map.set(code, obj);
  }
}
function handleGuildTemplateResolveFailure(code) {
  code = code.code;
  if (null != code) {
    let value = map.get(code);
    if (null != value) {
      let obj = {};
      const merged = Object.assign(value);
    } else {
      obj = { code: null, state: null };
      obj[0] = code;
      obj[1] = GuildTemplateStates.RESOLVING;
    }
    obj.state = GuildTemplateStates.EXPIRED;
    const _Map = Map;
    value = new.target;
    map = new Map(map);
    const result = map.set(code, obj);
  }
}
let map = new Map();
let c4 = null;
class GuildTemplateStore extends Store {
}
const prototype = GuildTemplateStore.prototype;
prototype["getGuildTemplate"] = function getGuildTemplate(code) {
  if (null != code) {
    return map.get(code);
  }
};
prototype["getGuildTemplates"] = function getGuildTemplates() {
  return map;
};
prototype["getForGuild"] = function getForGuild(arg0) {
  const keys = map.keys();
  const obj = keys[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = map;
    let value = map.get(tmp2);
    let tmp5 = value;
    if (null != value) {
      let tmp6 = value;
      if ("sourceGuildId" in tmp5) {
        let tmp7 = value;
        if (tmp5.sourceGuildId === arg0) {
          let tmp8 = value;
          let tmp9 = GuildTemplateStates;
          if (tmp5.state !== GuildTemplateStates.EXPIRED) {
            let tmp10 = obj;
            obj.return();
            return value;
          }
        }
      }
    }
    continue;
  }
};
prototype["getDisplayedGuildTemplateCode"] = function getDisplayedGuildTemplateCode() {
  return c4;
};
GuildTemplateStore.displayName = "GuildTemplateStore";
const guildTemplateStore = new GuildTemplateStore(require("dispatcher"), {
  GUILD_TEMPLATE_RESOLVE: function handleGuildTemplateResolve(code) {
    code = code.code;
    map = new Map(map);
    const result = map.set(code, { code, state: GuildTemplateStates.RESOLVING });
  },
  GUILD_TEMPLATE_CREATE_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_SYNC_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_RESOLVE_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function handleGuildTemplateLoadForGuildSuccess(guildTemplates) {
    guildTemplates = guildTemplates.guildTemplates;
    const item = guildTemplates.forEach((code) => {
      code = code.code;
      if (null != code) {
        const value = map.get(code);
        if (null != value) {
          let obj = {};
          const merged = Object.assign(value);
        } else {
          obj = { code: null, state: null };
          obj[0] = code;
          obj[1] = constants.RESOLVING;
        }
        const tmp7 = callback(table[1])(code);
        for (const key10018 in tmp7) {
          let tmp17 = key10018;
          obj[key10018] = tmp7[key10018];
          continue;
        }
        const _Map = Map;
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
      let value = map.get(code);
      if (null != value) {
        let obj = {};
        const merged = Object.assign(value);
      } else {
        obj = { code: null, state: null };
        obj[0] = code;
        obj[1] = GuildTemplateStates.RESOLVING;
      }
      obj.state = GuildTemplateStates.ACCEPTING;
      const _Map = Map;
      value = new.target;
      map = new Map(map);
      const result = map.set(code, obj);
    }
  },
  GUILD_TEMPLATE_ACCEPT_SUCCESS: function handleGuildTemplateAcceptSuccess(code) {
    code = code.code;
    if (null != code) {
      const value = map.get(code);
      if (null != value) {
        let obj = {};
        const merged = Object.assign(value);
      } else {
        obj = { code: null, state: null };
        obj[0] = code;
        obj[1] = GuildTemplateStates.RESOLVING;
      }
      obj.state = GuildTemplateStates.ACCEPTED;
      let num = obj.usageCount;
      if (num == null) {
        num = 0;
      }
      obj.usageCount = num + 1;
      const _Map = Map;
      map = new Map(map);
      const result = map.set(code, obj);
    }
  },
  GUILD_TEMPLATE_ACCEPT_FAILURE: function handleAcceptInviteFailure(code) {
    code = code.code;
    if (null != code) {
      let value = map.get(code);
      if (null != value) {
        let obj = {};
        const merged = Object.assign(value);
      } else {
        obj = { code: null, state: null };
        obj[0] = code;
        obj[1] = GuildTemplateStates.RESOLVING;
      }
      obj.state = GuildTemplateStates.RESOLVED;
      const _Map = Map;
      value = new.target;
      map = new Map(map);
      const result = map.set(code, obj);
    }
  },
  GUILD_TEMPLATE_MODAL_SHOW: function handleGuildTemplateModalShow(code) {
    code = code.code;
  },
  GUILD_TEMPLATE_MODAL_HIDE: function handleGuildTemplateModalHide() {
    let c4 = null;
  }
});
let result = require("initialize").fileFinishedImporting("modules/guild_templates/GuildTemplateStore.tsx");

export default guildTemplateStore;