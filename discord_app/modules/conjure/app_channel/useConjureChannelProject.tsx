// discord_app/modules/conjure/app_channel/useConjureChannelProject.tsx
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
const isProjectOwner = fn(11251).isProjectOwner;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_channel/useConjureChannelProject.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureChannelProject(guild_id) {
      const cResult = require("c").c(27);
      if (cResult[0] !== guild_id) {
        const conjureChannelAppIdResult = tmp(tmp2[8]).conjureChannelAppId(guild_id);
        cResult[0] = guild_id;
        cResult[1] = conjureChannelAppIdResult;
        let tmp4 = conjureChannelAppIdResult;
        const tmpResult = tmp(tmp2[8]);
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      closure_1 = tmp6;
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore, PermissionStore];
        cResult[2] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== guild_id) {
        class S {
          constructor() {
            guild = null;
            if (null != c2) {
              tmp3 = closure_5;
              guild = closure_5.getGuild(tmp);
            }
            canResult = null != guild;
            if (canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        const items1 = [guild_id];
        cResult[3] = guild_id;
        cResult[4] = S;
        cResult[5] = items1;
        let tmp12 = items1;
      } else {
        class S {
          constructor() {
            guild = null;
            if (null != c2) {
              tmp3 = closure_5;
              guild = closure_5.getGuild(tmp);
            }
            canResult = null != guild;
            if (canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        tmp12 = cResult[5];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp8, S, tmp12);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            guild = null;
            if (null != c2) {
              tmp3 = closure_5;
              guild = closure_5.getGuild(tmp);
            }
            canResult = null != guild;
            if (canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        const items2 = [stateFromStoresArray];
        cResult[6] = items2;
        const tmp14 = items2;
      } else {
        class S {
          constructor() {
            guild = null;
            if (null != c2) {
              tmp3 = closure_5;
              guild = closure_5.getGuild(tmp);
            }
            canResult = null != guild;
            if (canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
      }
      if (cResult[7] !== guild_id) {
        class S {
          constructor() {
            guild = null;
            if (null != c2) {
              tmp3 = closure_5;
              guild = closure_5.getGuild(tmp);
            }
            canResult = null != guild;
            if (canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        const items3 = [guild_id];
        cResult[7] = guild_id;
        cResult[8] = tmp17;
        cResult[9] = items3;
        let tmp16 = items3;
      } else {
        class S {
          constructor() {
            guild = null;
            if (null != c2) {
              tmp3 = closure_5;
              guild = closure_5.getGuild(tmp);
            }
            canResult = null != guild;
            if (canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        tmp16 = cResult[9];
      }
      const tmpResult3 = require("initialize");
      stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp14, tmp17, tmp16);
      if (cResult[10] === tmp4) {
        class S {
          constructor() {
            guild = null;
            if (null != c2) {
              tmp3 = closure_5;
              guild = closure_5.getGuild(tmp);
            }
            canResult = null != guild;
            if (canResult) {
              tmp5 = closure_6;
              tmp6 = Permissions;
              canResult = closure_6.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
      }
      class C {
        constructor() {
          tmp = closure_1;
          if (closure_1) {
            tmp2 = closure_0;
            tmp3 = null;
            tmp = null != closure_0;
          }
          if (tmp) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj = closure_0(closure_2[10]);
            tmp6 = c2;
            tmp7 = null;
            listProjectsResult = obj.listProjects(tmp6);
          }
          return;
        }
      }
      cResult[10] = tmp4;
      cResult[11] = guild_id;
      cResult[12] = null != tmp4;
      cResult[13] = C;
      const tmpResult4 = require("initialize");
    }
  : function useConjureChannelProject(guild_id) {
      const conjureChannelAppIdResult = require("ConjureUtils").conjureChannelAppId(guild_id);
      require = conjureChannelAppIdResult;
      closure_1 = tmp4;
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      let obj = require("ConjureUtils");
      let items = [GuildStore, PermissionStore];
      const items1 = [guild_id];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          guild = null;
          if (null != guild_id) {
            guild = GuildStore.getGuild(tmp);
          }
          let canResult = null != guild;
          if (canResult) {
            canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
          }
          return canResult;
        },
        items1,
      );
      const tmpResult = require("initialize");
      const items2 = [stateFromStoresArray];
      const items3 = [guild_id];
      stateFromStoresArray = require("initialize").useStateFromStoresArray(
        items2,
        () => {
          if (null != guild_id) {
            const selfMember = GuildMemberStore.getSelfMember(tmp);
            let roles;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            let items = roles;
          } else {
            items = [];
          }
          return items;
        },
        items3,
      );
      const items4 = [
        null != conjureChannelAppIdResult,
        conjureChannelAppIdResult,
        guild_id,
        stateFromStores,
        stateFromStoresArray,
      ];
      const effect = stateFromStores.useEffect(() => {
        let tmp = closure_1;
        if (closure_1) {
          tmp = null != conjureChannelAppIdResult;
        }
        if (tmp) {
          ConjureActionCreators.listProjects(guild_id);
        }
      }, items4);
      const tmpResult3 = require("initialize");
      const items5 = [ConjureProjectStore];
      const items6 = [conjureChannelAppIdResult, stateFromStores, stateFromStoresArray, guild_id];
      return require("initialize").useStateFromStores(
        items5,
        () => {
          if (null == result1) {
            return null;
          } else {
            const result = ConjureProjectStore.findProjectByApplicationId(tmp);
            if (null != result) {
              if (!isProjectOwner(result)) {
                result1 = null;
                if (null != guild_id) {
                  result1 = closure_1(guild_id[11]).castGuildIdAsEveryoneGuildRoleId(guild_id);
                  const obj = closure_1(guild_id[11]);
                }
                let prop = result.collaborator_role_ids;
                if (prop == null) {
                  prop = [];
                }
                let tmp7 = null;
                if (result.guild_id === guild_id) {
                  tmp7 = null;
                  if (obj2.isProjectPublic(result)) {
                    if (stateFromStores) {
                      tmp7 = result;
                    } else {
                      tmp7 = null;
                    }
                  }
                  obj2 = conjureChannelAppIdResult(guild_id[12]);
                }
                return tmp7;
              }
            }
            return result;
          }
        },
        items6,
      );
    };
