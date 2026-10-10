// discord_app/modules/guild_communication_disabled/useUserCommunicationDisabled.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import CommunicationDisabledUtils from "CommunicationDisabledUtils.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUserCommunicationDisabled(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
        if (cResult[5] !== stateFromStores) {
          let prop;
          if (stateFromStores != null) {
            prop = stateFromStores.communicationDisabledUntil;
          }
          if (prop == null) {
            prop = null;
          }
          const items1 = [prop, tmp(4737).isMemberCommunicationDisabled(stateFromStores)];
          cResult[5] = stateFromStores;
          cResult[6] = items1;
          let tmp9 = items1;
          const tmpResult2 = tmp(4737);
        } else {
          tmp9 = cResult[6];
        }
        return tmp9;
      }
      const fn = function s() {
        let member = null;
        if (null != closure_1) {
          member = null;
          if (null != closure_0) {
            member = GuildMemberStore.getMember(tmp2, closure_0);
          }
        }
        return member;
      };
      const items2 = [arg1, arg0];
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items2;
      tmp7 = items2;
      tmp6 = fn;
      const obj = require("c");
    }
  : function useUserCommunicationDisabled(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const items = [GuildMemberStore];
      const items1 = [arg1, arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          let member = null;
          if (null != closure_1) {
            member = null;
            if (null != closure_0) {
              member = GuildMemberStore.getMember(tmp2, closure_0);
            }
          }
          return member;
        },
        items1,
      );
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.communicationDisabledUntil;
      }
      if (prop == null) {
        prop = null;
      }
      const items2 = [prop];
      const obj = require("initialize");
      items2[1] = require("CommunicationDisabledUtils").isMemberCommunicationDisabled(stateFromStores);
      return items2;
    };
let closure_4 = tmp3;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/useUserCommunicationDisabled.tsx");

export default tmp3;
export const useCurrentUserCommunicationDisabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCurrentUserCommunicationDisabled(arg0) {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      return closure_4(id, arg0);
    }
  : function useCurrentUserCommunicationDisabled(arg0) {
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      return closure_4(id, arg0);
    };
export const userCommunicationDisabled = function userCommunicationDisabled(id, guildId) {
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = GuildMemberStore.getMember(guildId, id);
    }
  }
  let prop;
  if (member != null) {
    prop = member.communicationDisabledUntil;
  }
  if (prop == null) {
    prop = null;
  }
  const items = [prop, CommunicationDisabledUtils.isMemberCommunicationDisabled(member)];
  return items;
};
