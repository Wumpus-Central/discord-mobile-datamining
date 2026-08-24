// discord_app/modules/guild_config_gates/GuildConfigGates.tsx
import importDefaultResult1 from "GuildConfigGatesStore.tsx";
import { Endpoints } from "../../Constants.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import importDefaultResult from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
initialize = {
  getQueryId(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = null;
    }
    return tmp;
  },
  get(arg0) {
    let tmp = null;
    if (null != arg0) {
      let gates = null;
      if (importDefaultResult1.hasLoaded(arg0)) {
        gates = obj.getGates(arg0);
      }
      tmp = gates;
      obj = importDefaultResult1;
    }
    return tmp;
  },
  load: null
};
let closure_3 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c5 = 0;
  c6 = 0;
  return (function*(arg0, body) {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw body;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = body;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            closure_4 = tmp5;
            closure_3 = tmp2;
            let lib;
            if (null != callback) {
              const HTTP = callback(closure_1_2[4]).HTTP;
              c5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = HTTP.get(c5.GUILD_CONFIG_GATES(tmp27));
              return obj1;
            } else {
              c6 = 3;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw body;
        } else if (arg0 !== 2) {
          lib = body.body;
          const obj2 = { type: "GUILD_CONFIG_GATES_FETCH_SUCCESS", guildId: null, guildVerificationRoleEnabled: null, applicationIdentityLinkedRolesEnabled: null };
          obj2[1] = callback;
          const guild_verification_role_enabled = lib.guild_verification_role_enabled;
          lib = guild_verification_role_enabled;
          if (guild_verification_role_enabled == null) {
            lib = false;
          }
          obj2[2] = lib;
          const application_identity_linked_roles_enabled = lib.application_identity_linked_roles_enabled;
          let table = application_identity_linked_roles_enabled;
          if (application_identity_linked_roles_enabled == null) {
            table = false;
          }
          obj2[3] = table;
          lib(table[5]).dispatch(obj2);
          const obj5 = lib(table[5]);
        }
        c6 = 3;
        obj = { value: null, done: true };
        obj[0] = body;
        return obj;
      } catch (tmp14) {
        c6 = tmp;
        throw tmp14;
      }
    }
  })();
});
initialize[2] = function() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_6 = initialize.createFetchStore(importDefaultResult1, initialize);
const result = require("set").fileFinishedImporting("modules/guild_config_gates/GuildConfigGates.tsx");

export const useGuildVerificationRoleEnabled = function useGuildVerificationRoleEnabled(arg0) {
  const data = callback(arg0).data;
  let flag;
  if (data != null) {
    flag = data.guildVerificationRoleEnabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const useApplicationIdentityLinkedRolesEnabled = function useApplicationIdentityLinkedRolesEnabled(arg0) {
  const data = callback(arg0).data;
  let flag;
  if (data != null) {
    flag = data.applicationIdentityLinkedRolesEnabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};