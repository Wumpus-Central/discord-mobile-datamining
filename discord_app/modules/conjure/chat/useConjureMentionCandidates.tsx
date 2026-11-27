// === Module 18855: useConjureMentionCandidates ===

// Module 18855 (useConjureMentionCandidates)
import PermissionUtilsAll from "PermissionUtils" /* 4980 */;
import GuildUtilsDefault from "GuildUtils" /* 6990 */;
import conjureMentions from "conjureMentions" /* 18701 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import GuildStore from "GuildStore" /* 4914 */;
import UserStore from "UserStore" /* 1387 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1071).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureMentionCandidates.tsx");

export default function useConjureMentionCandidates(arg0, str) {
  _require = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let creator;
  let stateFromStores1;
  let formatted;
  items = [ConjureProjectStore];
  let items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj = require("initialize");
  const conjureProjectPeople = require("useConjureProjectCreator").useConjureProjectPeople(stateFromStores);
  creator = conjureProjectPeople.creator;
  const collaborators = conjureProjectPeople.collaborators;
  let obj2 = require("useConjureProjectCreator");
  let items2 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => stateFromStores1.getId());
  let guild_id;
  if (null != stateFromStores) {
    if (tmpResult.isProjectGuildCollaborationEnabled(stateFromStores)) {
      guild_id = stateFromStores.guild_id;
    }
    tmpResult = tmp(tmp2[9]);
  }
  formatted = undefined;
  if (str != null) {
    formatted = str.toLowerCase();
  }
  if (formatted == null) {
    formatted = null;
  }
  let items3 = [flag, guild_id, formatted];
  const effect = collaborators.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = null != guild_id;
    }
    if (tmp) {
      tmp = null != formatted;
    }
    if (tmp) {
      const members = GuildUtilsDefault.requestMembers(guild_id, formatted, 100);
    }
  }, items3);
  let obj3 = require("initialize");
  let items4 = [guild_id, formatted, UserStore];
  const items5 = [stateFromStores, guild_id, formatted, creator, collaborators, stateFromStores1];
  return require("initialize").useStateFromStoresArray(items4, () => {
    if (null == formatted) {
      return [];
    } else {
      guild = null;
      if (null != guild_id) {
        guild = formatted.getGuild(tmp26);
      }
      function matches(id) {
        let nick = null;
        if (null != guild) {
          nick = GuildMemberStore.getNick(tmp2.id, id.id);
        }
        return conjureMentions.matchesConjureMentionQuery(id, formatted, nick);
      }
      let prop;
      if (set != null) {
        prop = set.collaborator_role_ids;
      }
      if (prop == null) {
        prop = [];
      }
      set = new Set(prop);
      let hasItem = null != guild;
      if (hasItem) {
        hasItem = set.has(flag(creator[12]).castGuildIdAsEveryoneGuildRoleId(guild.id));
        let obj2 = flag(creator[12]);
      }
      if (null == guild) {
        items = [];
      } else {
        const memberIds = guild_id.getMemberIds(guild.id);
        const mapped = memberIds.map((item) => user.getUser(item));
        items = mapped.filter((id) => {
          let result = null != id;
          if (result) {
            if (typeof matches === "function") {
              let nick = null;
              if (null != guild) {
                nick = GuildMemberStore.getNick(tmp6.id, id.id);
              }
              result = conjureMentions.matchesConjureMentionQuery(id, formatted, nick);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          if (result) {
            let someResult = hasItem;
            if (!hasItem) {
              const member = GuildMemberStore.getMember(guild.id, id.id);
              let roles;
              if (member != null) {
                roles = member.roles;
              }
              if (roles == null) {
                roles = [];
              }
              someResult = roles.some((item) => set.has(item));
            }
            if (!someResult) {
              const obj3 = { permission: Permissions.MANAGE_GUILD, user: id, context: guild };
              someResult = PermissionUtilsAll.can(obj3);
            }
            result = someResult;
          }
          return result;
        });
      }
      const _Set = Set;
      const set1 = new Set();
      if (null != hasItem) {
        const items1 = [tmp16];
        let items2 = items1;
      } else {
        items2 = [];
      }
      const items3 = [];
      HermesBuiltin.arraySpread(set1, HermesBuiltin.arraySpread(items2, 0));
      const items4 = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(items3.filter(matches), 0));
      return items4.filter((id) => {
        flag = id.id !== stateFromStores1 && !id.bot;
        if (flag) {
          flag = !set1.has(id.id);
        }
        if (flag) {
          set1.add(id.id);
          flag = true;
        }
        return flag;
      });
    }
  }, items5);
};