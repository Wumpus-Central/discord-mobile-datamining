// discord_app/modules/conjure/server_share/useConjureServerChangeButtons.tsx
import _modDef4089 from "../intl/ConjureUntranslated.messages.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
const isProjectOwner = fn(6500).isProjectOwner;
let obj = {
  add_to_server: _modDef4089["7SD3ul"],
  remove_from_server: _modDef4089.j1NMdG,
  change_server: _modDef4089["1E5/ay"],
};
let obj2 = {
  add_to_server: _modDef4089["Wy+mGW"],
  remove_from_server: _modDef4089.wBUA8n,
  change_server: _modDef4089.MfnSEe,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_share/useConjureServerChangeButtons.tsx");

export default function useConjureServerChangeButtons(projectId, action) {
  _require = projectId;
  importDefault = action;
  obj = require("initialize");
  items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  obj2 = require("conjureServerProject");
  const result = obj2.conjureServerProjectGuildId(stateFromStores);
  dependencyMap = result;
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  let guild_id = result;
  if ("remove_from_server" === action.action) {
    guild_id = action.guild_id;
  }
  closure_129_0 = guild_id;
  const items2 = [GuildStore];
  const items3 = [guild_id];
  let stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => {
      guild = GuildStore.getGuild(closure_0);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      return name;
    },
    items3,
  );
  if (stateFromStores1 == null) {
    const intl = tmp(1113).intl;
    stateFromStores1 = intl.string(_modDef4089["6bhivN"]);
  }
  const tmpResult = require("initialize");
  const tmpResult3 = require("useConjureProjectServerChange");
  let tmp8 = require("useConjureProjectServerChange").useConjureProjectServerCandidates(projectId).length > 0;
  const items4 = [ConjureChatStore];
  const items5 = [projectId, action, result];
  let tmp9 =
    require("initialize").useStateFromStores(
      items4,
      () =>
        (function doneLineHolds(messages, action, result) {
          closure_0 = action;
          const findIndexResult = messages.findIndex((serverChange) => serverChange.serverChange === closure_0);
          if (-1 === findIndexResult) {
            return false;
          } else {
            items = [];
            const substr = messages.slice(findIndexResult + 1);
            const iter = substr[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp5 = nextResult;
              if (null != nextResult.serverChange) {
                iter.return();
                let flag = false;
                return false;
              } else {
                let projectEvent = tmp5.projectEvent;
                let type;
                if (projectEvent != null) {
                  type = projectEvent.type;
                }
                if ("app_removed" === type) {
                  let arr = items.push(tmp5.projectEvent);
                }
                continue;
              }
            }
            if ("add_to_server" === action.action) {
              return 0 === items.length;
            } else {
              if ("remove_from_server" === action.action) {
                if (0 === items.length) {
                  return true;
                }
              }
              if (1 !== items.length) {
                return false;
              } else {
                const first = items[0];
                if ("change_server" === action.action) {
                  let tmp14 = null != result && first.moved_to_guild_id === result;
                  if (tmp14) {
                    tmp14 = null == action.guild_id || first.guild_id === action.guild_id;
                    const tmp15 = null == action.guild_id || first.guild_id === action.guild_id;
                  }
                  let tmp12 = tmp14;
                } else {
                  tmp12 = null == first.moved_to_guild_id && first.guild_id === action.guild_id;
                }
                return tmp12;
              }
            }
          }
        })(ConjureChatStore.getMessages(closure_0), closure_1, result),
      items5,
    ) && null != stateFromStores;
  if (tmp9) {
    let tmp11 = tmp10;
    if ("remove_from_server" === action.action) {
      tmp11 = !tmp10;
    }
    tmp9 = tmp11;
  }
  let tmp13 = null != stateFromStores;
  if (tmp13) {
    let tmp14 = tmp10;
    if ("add_to_server" === action.action) {
      tmp14 = !tmp10;
    }
    tmp13 = tmp14;
  }
  if (tmp13) {
    tmp13 = tmp12;
  }
  if (tmp13) {
    tmp13 = !tmp9;
  }
  let tmp15 = null != stateFromStores;
  if (tmp15) {
    tmp15 = isProjectOwner(stateFromStores);
  }
  let tmp18 = null;
  if (tmp13) {
    tmp18 = null;
    if (tmp15) {
      let tmp19 = "remove_from_server" !== tmp17;
      const obj3 = { kind: action.action, label: null, disabled: null };
      const intl2 = tmp(1113).intl;
      obj3.label = intl2.string(obj[action.action]);
      if (tmp19) {
        tmp19 = !tmp8;
      }
      obj3.disabled = tmp19;
      tmp18 = obj3;
    }
  }
  if (tmp13) {
    if (!tmp15) {
      const intl3 = tmp(1113).intl;
      let stringResult = intl3.string(_modDef4089.Kt9exT);
    }
    const obj4 = { project: stateFromStores, action: tmp18, done: null, note: null };
    let formatToPlainStringResult = null;
    if (tmp9) {
      const intl5 = tmp(1113).intl;
      const obj5 = { server: stateFromStores1 };
      formatToPlainStringResult = intl5.formatToPlainString(obj2[action.action], obj5);
    }
    obj4.done = formatToPlainStringResult;
    obj4.note = stringResult;
    return obj4;
  }
  let disabled;
  if (tmp18 != null) {
    disabled = tmp18.disabled;
  }
  stringResult = null;
  if (true === disabled) {
    const intl4 = tmp(1113).intl;
    stringResult = intl4.string(_modDef4089.NXvmoQ);
  }
  tmp12 = "change_server" !== action.action || null == action.guild_id || result === action.guild_id;
  const tmpResult4 = require("initialize");
}
