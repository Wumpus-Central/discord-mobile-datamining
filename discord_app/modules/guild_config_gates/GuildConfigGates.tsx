// discord_app/modules/guild_config_gates/GuildConfigGates.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GuildConfigGatesStore from "GuildConfigGatesStore.tsx";

require = fn;
const Endpoints = fn(1074).Endpoints;
const initialize = fn(504);
let obj2 = {
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
      if (GuildConfigGatesStore.hasLoaded(arg0)) {
        gates = GuildConfigGatesStore.getGates(arg0);
      }
      tmp = gates;
    }
    return tmp;
  },
  load: null,
};
let closure_3 = asyncGeneratorStep(async (arg0) => {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          let body;
          if (null != closure_0) {
            const HTTP = HTTPUtils.HTTP;
            c5 = 1;
            c6 = 1;
            const obj4 = { value: HTTP.get(Endpoints.GUILD_CONFIG_GATES(tmp26)), done: false };
            return obj4;
          } else {
            c6 = 3;
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        body = value.body;
        const obj6 = {
          type: "GUILD_CONFIG_GATES_FETCH_SUCCESS",
          guildId: closure_131_0,
          guildVerificationRoleEnabled: null,
          applicationIdentityLinkedRolesEnabled: null,
        };
        const guild_verification_role_enabled = body.guild_verification_role_enabled;
        let guildVerificationRoleEnabled = guild_verification_role_enabled;
        if (guild_verification_role_enabled == null) {
          guildVerificationRoleEnabled = false;
        }
        obj6.guildVerificationRoleEnabled = guildVerificationRoleEnabled;
        const application_identity_linked_roles_enabled = body.application_identity_linked_roles_enabled;
        let applicationIdentityLinkedRolesEnabled = application_identity_linked_roles_enabled;
        if (application_identity_linked_roles_enabled == null) {
          applicationIdentityLinkedRolesEnabled = false;
        }
        obj6.applicationIdentityLinkedRolesEnabled = applicationIdentityLinkedRolesEnabled;
        closure_132_1(closure_132_2[5]).dispatch(obj6);
        const obj5 = closure_132_1(closure_132_2[5]);
      }
      c6 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp14) {
      c6 = tmp;
      throw tmp14;
    }
  }
});
obj2.load = function () {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_6 = initialize.createFetchStore(GuildConfigGatesStore, obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_config_gates/GuildConfigGates.tsx");

export const useGuildVerificationRoleEnabled = function useGuildVerificationRoleEnabled(arg0) {
  const data = closure_6(arg0).data;
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
  const data = closure_6(arg0).data;
  let flag;
  if (data != null) {
    flag = data.applicationIdentityLinkedRolesEnabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
