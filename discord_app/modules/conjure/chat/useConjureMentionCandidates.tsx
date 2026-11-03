// discord_app/modules/conjure/chat/useConjureMentionCandidates.tsx
import PermissionUtilsAll from "../../../utils/PermissionUtils.tsx";
import GuildUtilsDefault from "../../../utils/GuildUtils.tsx";
import conjureMentions from "conjureMentions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
const Permissions = fn(1072).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureMentionCandidates.tsx");

export default function useConjureMentionCandidates(arg0, str) {
  _require = arg0;
  items = [ConjureProjectStore];
  let items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ConjureProjectStore.getProject(closure_0),
    items1,
  );
  let obj = require("initialize");
  const conjureProjectPeople = require("useConjureProjectCreator").useConjureProjectPeople(stateFromStores);
  const creator = conjureProjectPeople.creator;
  collaborators = conjureProjectPeople.collaborators;
  let obj2 = require("useConjureProjectCreator");
  let items2 = [guild_id];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => guild_id.getId());
  guild_id = undefined;
  if (null != stateFromStores) {
    if (tmpResult.isProjectGuildCollaborationEnabled(stateFromStores)) {
      guild_id = stateFromStores.guild_id;
    }
    tmpResult = tmp(tmp2[9]);
  }
  let formatted;
  if (str != null) {
    formatted = str.toLowerCase();
  }
  if (formatted == null) {
    formatted = null;
  }
  let items3 = [guild_id, formatted];
  const effect = stateFromStores1.useEffect(() => {
    let tmp2 = null != guild_id;
    if (tmp2) {
      tmp2 = null != formatted;
    }
    if (tmp2) {
      const members = GuildUtilsDefault.requestMembers(guild_id, formatted, 100);
    }
  }, items3);
  let obj3 = require("initialize");
  let items4 = [formatted, GuildStore, UserStore];
  const items5 = [stateFromStores, guild_id, formatted, creator, collaborators, stateFromStores1];
  return require("initialize").useStateFromStoresArray(
    items4,
    () => {
      if (null == formatted) {
        return [];
      } else {
        guild = null;
        if (null != guild_id) {
          guild = guild.getGuild(tmp26);
        }
        function matches(id) {
          let nick = null;
          if (null != guild) {
            nick = GuildMemberStore.getNick(tmp2.id, id.id);
          }
          return conjureMentions.matchesConjureMentionQuery(id, formatted, nick);
        }
        let prop;
        if (matches != null) {
          prop = matches.collaborator_role_ids;
        }
        if (prop == null) {
          prop = [];
        }
        const set = new Set(prop);
        let hasItem = null != guild;
        if (hasItem) {
          hasItem = set.has(stateFromStores(collaborators[12]).castGuildIdAsEveryoneGuildRoleId(guild.id));
          let obj2 = stateFromStores(collaborators[12]);
        }
        if (null == guild) {
          items = [];
        } else {
          const memberIds = formatted.getMemberIds(guild.id);
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
        if (null != set) {
          const items1 = [tmp16];
          let items2 = items1;
        } else {
          items2 = [];
        }
        const items3 = [];
        HermesBuiltin.arraySpread(hasItem, HermesBuiltin.arraySpread(items2, 0));
        const items4 = [];
        HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(items3.filter(matches), 0));
        return items4.filter((id) => {
          let flag = id.id !== stateFromStores1 && !id.bot;
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
    },
    items5,
  );
}
