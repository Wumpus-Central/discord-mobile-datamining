// === Module 10736: useConjureChannelProject ===

// Module 10736 (useConjureChannelProject)
import ConjureActionCreators from "ConjureActionCreators" /* 8700 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8699 */;

require = fn;
const isProjectOwner = fn(8699).isProjectOwner;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_channel/useConjureChannelProject.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
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
  importDefault = tmp6;
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
    const fn = function j() {
      guild = null;
      if (null != guild_id) {
        guild = GuildStore.getGuild(tmp);
      }
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      }
      return canResult;
    };
    const items1 = [guild_id];
    cResult[3] = guild_id;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp12 = items1;
    let tmp11 = fn;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp11, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStoresArray];
    cResult[6] = items2;
    let tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== guild_id) {
    const fn2 = function y() {
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
    };
    const items3 = [guild_id];
    cResult[7] = guild_id;
    cResult[8] = fn2;
    cResult[9] = items3;
    let tmp17 = items3;
    let tmp16 = fn2;
  } else {
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult4 = require("initialize");
  stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp14, tmp16, tmp17);
  if (cResult[10] === tmp4) {
    if (cResult[11] === guild_id) {
      if (cResult[12] === tmp6) {
        let tmp19 = cResult[13];
      }
      if (cResult[14] === tmp4) {
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === stateFromStoresArray) {
            if (cResult[17] === guild_id) {
              if (cResult[18] === tmp6) {
                let tmp20 = cResult[19];
              }
              const effect = stateFromStores.useEffect(tmp19, tmp20);
              const _Symbol = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const items4 = [ConjureProjectStore];
                cResult[20] = items4;
                let tmp23 = items4;
              } else {
                tmp23 = cResult[20];
              }
              if (cResult[21] === tmp4) {
                if (cResult[22] === stateFromStores) {
                  if (cResult[23] === stateFromStoresArray) {
                    if (cResult[24] === guild_id) {
                      let tmp25 = cResult[25];
                      let tmp26 = cResult[26];
                    }
                    return tmp(tmp2[9]).useStateFromStores(tmp23, tmp25, tmp26);
                  }
                }
              }
              class M {
                constructor() {
                  if (null == closure_0) {
                    return null;
                  } else {
                    tmp11 = closure_1_7;
                    result = closure_1_7.findProjectByApplicationId(tmp);
                    if (null != result) {
                      tmp13 = closure_1_8;
                      if (!closure_1_8(result)) {
                        tmp2 = c2;
                        result1 = null;
                        if (null != c2) {
                          tmp4 = closure_1;
                          tmp5 = c2;
                          obj = closure_1(c2[11]);
                          result1 = obj.castGuildIdAsEveryoneGuildRoleId(tmp2);
                        }
                        closure_0 = result1;
                        prop = result.collaborator_role_ids;
                        if (prop == null) {
                          prop = [];
                        }
                        tmp7 = null;
                        if (result.guild_id === tmp2) {
                          tmp8 = closure_0;
                          tmp9 = c2;
                          obj2 = closure_0(c2[12]);
                          tmp7 = null;
                          if (obj2.isProjectPublic(result)) {
                            tmp10 = closure_3;
                            if (closure_3) {
                              tmp7 = result;
                            } else {
                              tmp7 = null;
                            }
                          }
                        }
                        return tmp7;
                      }
                    }
                    return result;
                  }
                }
              }
              const items5 = [tmp4, stateFromStores, stateFromStoresArray, guild_id];
              cResult[21] = tmp4;
              cResult[22] = stateFromStores;
              cResult[23] = stateFromStoresArray;
              cResult[24] = guild_id;
              cResult[25] = M;
              cResult[26] = items5;
              tmp26 = items5;
              tmp25 = M;
            }
          }
        }
      }
      const items6 = [tmp6, tmp4, guild_id, stateFromStores, ];
      cResult[14] = tmp4;
      cResult[15] = stateFromStores;
      cResult[16] = stateFromStoresArray;
      cResult[17] = guild_id;
      cResult[18] = tmp6;
      cResult[19] = items6;
      tmp20 = items6;
    }
  }
  class E {
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
  cResult[13] = E;
  tmp19 = E;
  const tmpResult5 = require("initialize");
}) : ((guild_id) => {
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
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = null;
    if (null != guild_id) {
      guild = GuildStore.getGuild(tmp);
    }
    let canResult = null != guild;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    }
    return canResult;
  }, items1);
  const tmpResult = require("initialize");
  const items2 = [stateFromStoresArray];
  const items3 = [guild_id];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => {
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
  }, items3);
  const items4 = [null != conjureChannelAppIdResult, conjureChannelAppIdResult, guild_id, stateFromStores, stateFromStoresArray];
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
  return require("initialize").useStateFromStores(items5, () => {
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
  }, items6);
});