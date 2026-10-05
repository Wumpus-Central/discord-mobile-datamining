// discord_app/modules/guild_config_gates/GuildConfigGates.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import GuildConfigGatesStore from "GuildConfigGatesStore.tsx";
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let applicationIdentityLinkedRolesEnabled, closure_4, guildVerificationRoleEnabled;

const Endpoints = Constants.Endpoints;
const obj = {
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
  load: function () {
    return closure_3(...arguments);
  },
};
const createFetchStore = get_initialized.createFetchStore;
let closure_3 = _asyncToGenerator(async (guildId) => {
  let c5 = 0;
  let c6 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let body;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_4 = tmp4;
            closure_3 = tmp;
            body = undefined;
            if (null != guildId) {
              const HTTP = HTTPUtils.HTTP;
              c5 = 1;
              c6 = 1;
              const obj4 = { value: HTTP.get(Endpoints.GUILD_CONFIG_GATES(tmp25)), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          return { value, done: true };
        } else {
          body = value.body;
          const guild_verification_role_enabled = body.guild_verification_role_enabled;
          const obj5 = {
            type: "GUILD_CONFIG_GATES_FETCH_SUCCESS",
            guildId,
            guildVerificationRoleEnabled,
            applicationIdentityLinkedRolesEnabled,
          };
          guildVerificationRoleEnabled = guild_verification_role_enabled;
          const dispatch = closure_132_1(closure_132_2[5]).dispatch;
          closure_132_1(closure_132_2[5]);
          if (guild_verification_role_enabled == null) {
            guildVerificationRoleEnabled = false;
          }
          const application_identity_linked_roles_enabled = body.application_identity_linked_roles_enabled;
          applicationIdentityLinkedRolesEnabled = application_identity_linked_roles_enabled;
          if (application_identity_linked_roles_enabled == null) {
            applicationIdentityLinkedRolesEnabled = false;
          }
          dispatch(obj5);
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp13) {
        c6 = 3;
        throw tmp13;
      }
    }
  })();
});
let closure_6 = createFetchStore(GuildConfigGatesStore, obj);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/guild_config_gates/GuildConfigGates.tsx");

export const useGuildVerificationRoleEnabled = (arg0) => {
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
export const useApplicationIdentityLinkedRolesEnabled = (id) => {
  const data = closure_6(id).data;
  let flag;
  if (data != null) {
    flag = data.applicationIdentityLinkedRolesEnabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
