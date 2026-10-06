// === Module 10749: useConjureChannelProject ===

// Module 10749 (useConjureChannelProject)
import Constants from "Constants" /* 1085 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 8734 */;
import ConjureActionCreators from "ConjureActionCreators" /* 8735 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureProjectStore = ConjureProjectStore2;
let _require, guild_id, importDefault;

const isProjectOwner = ConjureProjectStore2.isProjectOwner;
const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  let closure_0;
  let closure_1;
  let stateFromStoresArray;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp4;
  let tmp8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(27);
  if (cResult[0] !== guild_id) {
    const tmpResult = tmp(guild_id[8]);
    const conjureChannelAppIdResult = tmpResult.conjureChannelAppId(guild_id);
    cResult[0] = guild_id;
    cResult[1] = conjureChannelAppIdResult;
    tmp4 = conjureChannelAppIdResult;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  const tmp6 = null != tmp4;
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
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== guild_id) {
    const fn = function j() {
      let guild = null;
      if (null != guild_id) {
        guild = GuildStore.getGuild(tmp);
      }
      const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      return canResult;
    };
    const items1 = [guild_id];
    cResult[3] = guild_id;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp12 = items1;
    tmp11 = fn;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult4 = tmp(guild_id[9]);
  const stateFromStores = tmpResult4.useStateFromStores(tmp8, tmp11, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStoresArray];
    cResult[6] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== guild_id) {
    const fn2 = function y() {
      let items;
      if (null != guild_id) {
        const selfMember = GuildMemberStore.getSelfMember(tmp);
        let roles;
        if (selfMember != null) {
          roles = selfMember.roles;
        }
        if (roles == null) {
          roles = [];
        }
        items = roles;
      } else {
        items = [];
      }
      return items;
    };
    const items3 = [guild_id];
    cResult[7] = guild_id;
    cResult[8] = fn2;
    cResult[9] = items3;
    tmp17 = items3;
    tmp16 = fn2;
  } else {
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult5 = tmp(guild_id[9]);
  stateFromStoresArray = tmpResult5.useStateFromStoresArray(tmp14, tmp16, tmp17);
  if (cResult[10] === tmp4) {
    if (cResult[11] === guild_id) {
      let tmp19;
      if (cResult[12] === tmp6) {
        tmp19 = cResult[13];
      }
      if (cResult[14] === tmp4) {
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === stateFromStoresArray) {
            if (cResult[17] === guild_id) {
              let tmp20;
              let tmp23;
              if (cResult[18] === tmp6) {
                tmp20 = cResult[19];
              }
              const effect = stateFromStores.useEffect(tmp19, tmp20);
              const _Symbol = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const items4 = [ConjureProjectStore];
                cResult[20] = items4;
                tmp23 = items4;
              } else {
                tmp23 = cResult[20];
              }
              if (cResult[21] === tmp4) {
                if (cResult[22] === stateFromStores) {
                  if (cResult[23] === stateFromStoresArray) {
                    let tmp25;
                    let tmp26;
                    if (cResult[24] === guild_id) {
                      tmp25 = cResult[25];
                      tmp26 = cResult[26];
                    }
                    const tmpResult6 = tmp(guild_id[9]);
                    return tmpResult6.useStateFromStores(tmp23, tmp25, tmp26);
                  }
                }
              }
              class M {
                constructor() {
                  let result1;
                  if (null == result1) {
                    return null;
                  } else {
                    const result = ConjureProjectStore.findProjectByApplicationId(tmp);
                    if (null != result) {
                      if (!isProjectOwner(result)) {
                        result1 = null;
                        if (null != guild_id) {
                          const obj = closure_1(guild_id[11]);
                          result1 = obj.castGuildIdAsEveryoneGuildRoleId(guild_id);
                        }
                        let prop = result.collaborator_role_ids;
                        if (prop == null) {
                          prop = [];
                        }
                        let tmp7 = null;
                        if (result.guild_id === guild_id) {
                          tmp7 = null;
                          const obj2 = closure_0(guild_id[12]);
                          if (obj2.isProjectPublic(result)) {
                            if (stateFromStores) {
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
      const tmp = closure_1 && null != closure_0;
      if (tmp) {
        const listProjects = ConjureActionCreators.listProjects;
        ConjureActionCreators;
        listProjects(guild_id);
      }
    }
  }
  cResult[10] = tmp4;
  cResult[11] = guild_id;
  cResult[12] = tmp6;
  cResult[13] = E;
  tmp19 = E;
}) : ((guild_id) => {
  let require;
  let stateFromStoresArray;
  let tmp = require;
  let obj = require("ConjureUtils");
  const conjureChannelAppIdResult = obj.conjureChannelAppId(guild_id);
  require = conjureChannelAppIdResult;
  let closure_1 = tmp4;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  let items = [GuildStore, PermissionStore];
  const items1 = [guild_id];
  const tmpResult = tmp(guild_id[9]);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    let guild = null;
    if (null != guild_id) {
      guild = GuildStore.getGuild(tmp);
    }
    const canResult = null != guild && PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    return canResult;
  }, items1);
  const items2 = [stateFromStoresArray];
  const items3 = [guild_id];
  const tmpResult3 = tmp(guild_id[9]);
  stateFromStoresArray = tmpResult3.useStateFromStoresArray(items2, () => {
    let items;
    if (null != guild_id) {
      const selfMember = GuildMemberStore.getSelfMember(tmp);
      let roles;
      if (selfMember != null) {
        roles = selfMember.roles;
      }
      if (roles == null) {
        roles = [];
      }
      items = roles;
    } else {
      items = [];
    }
    return items;
  }, items3);
  const items4 = [null != conjureChannelAppIdResult, conjureChannelAppIdResult, guild_id, stateFromStores, stateFromStoresArray];
  const effect = stateFromStores.useEffect(() => {
    const tmp = closure_1 && null != require;
    if (tmp) {
      const listProjects = ConjureActionCreators.listProjects;
      ConjureActionCreators;
      listProjects(guild_id);
    }
  }, items4);
  const items5 = [ConjureProjectStore];
  const items6 = [conjureChannelAppIdResult, stateFromStores, stateFromStoresArray, guild_id];
  const tmpResult4 = tmp(guild_id[9]);
  return tmpResult4.useStateFromStores(items5, () => {
    let result1;
    if (null == result1) {
      return null;
    } else {
      const result = ConjureProjectStore.findProjectByApplicationId(tmp);
      if (null != result) {
        if (!isProjectOwner(result)) {
          result1 = null;
          if (null != guild_id) {
            const obj = closure_1(guild_id[11]);
            result1 = obj.castGuildIdAsEveryoneGuildRoleId(guild_id);
          }
          let prop = result.collaborator_role_ids;
          if (prop == null) {
            prop = [];
          }
          let tmp7 = null;
          if (result.guild_id === guild_id) {
            tmp7 = null;
            const obj2 = require("ConjureTypes");
            if (obj2.isProjectPublic(result)) {
              if (stateFromStores) {
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
  }, items6);
});
let result = size.fileFinishedImporting("modules/conjure/app_channel/useConjureChannelProject.tsx");

export default tmp2;