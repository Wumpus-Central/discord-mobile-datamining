// discord_app/modules/guild_communication_disabled/useUserCommunicationDisabled.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import CommunicationDisabledUtils from "CommunicationDisabledUtils.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let currentUser;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      return closure_4(id, arg0);
    }
  : (arg0) => {
      let currentUser;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      return closure_4(id, arg0);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      const tmp2 = dependencyMap;
      const obj = require("react");
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp6;
        let tmp7;
        let tmp9;
        if (cResult[2] === arg0) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const tmpResult = require("get initialized");
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
        if (cResult[5] !== stateFromStores) {
          let prop;
          if (stateFromStores != null) {
            prop = stateFromStores.communicationDisabledUntil;
          }
          if (prop == null) {
            prop = null;
          }
          const items1 = [prop];
          const tmpResult2 = require("CommunicationDisabledUtils");
          items1[1] = tmpResult2.isMemberCommunicationDisabled(stateFromStores);
          cResult[5] = stateFromStores;
          cResult[6] = items1;
          tmp9 = items1;
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
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      const tmp2 = dependencyMap;
      const items = [GuildMemberStore];
      const items1 = [arg1, arg0];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(
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
      const tmp = _require;
      if (stateFromStores != null) {
        prop = stateFromStores.communicationDisabledUntil;
      }
      if (prop == null) {
        prop = null;
      }
      const items2 = [prop];
      const tmpResult = tmp(4502);
      items2[1] = tmpResult.isMemberCommunicationDisabled(stateFromStores);
      return items2;
    };
let closure_4 = tmp3;
const result = size.fileFinishedImporting("modules/guild_communication_disabled/useUserCommunicationDisabled.tsx");

export default tmp3;
export const useCurrentUserCommunicationDisabled = tmp2;
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
  const items = [prop];
  const obj2 = CommunicationDisabledUtils;
  items[1] = obj2.isMemberCommunicationDisabled(member);
  return items;
};
