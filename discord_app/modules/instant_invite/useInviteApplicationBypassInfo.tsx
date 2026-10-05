// discord_app/modules/instant_invite/useInviteApplicationBypassInfo.tsx
import PermissionStore from "../../stores/PermissionStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, features;

let c3;
let closure_4;
({ GuildFeatures: c3, Permissions: closure_4 } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let obj2;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(9);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class E {
          constructor() {
            return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
          }
        }
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = E;
        cResult[3] = items1;
        tmp7 = items1;
      } else {
        class E {
          constructor() {
            return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
          }
        }
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, E, tmp7);
      const tmp9 = cResult[4];
      if (arg0 != null) {
        class E {
          constructor() {
            return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
          }
        }
      }
      if (tmp9 !== undefined) {
        let hasItem;
        class E {
          constructor() {
            return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
          }
        }
        if (arg0 != null) {
          class E {
            constructor() {
              return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
            }
          }
          hasItem = obj3.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
        }
        if (hasItem) {
          let hasItem1;
          class E {
            constructor() {
              return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
            }
          }
          if (arg0 != null) {
            class E {
              constructor() {
                return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
              }
            }
            hasItem1 = obj4.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
          }
          hasItem = hasItem1;
        }
        if (arg0 != null) {
          class E {
            constructor() {
              return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
            }
          }
        }
        cResult[4] = undefined;
        cResult[5] = hasItem;
      } else {
        class E {
          constructor() {
            return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
          }
        }
      }
      if (cResult[6] === tmp10) {
        class E {
          constructor() {
            return closure_2.can(Permissions.KICK_MEMBERS, closure_0);
          }
        }
        return obj2;
      }
      obj2 = { canCreateApplicationBypassInvites: tmp10 && stateFromStores, isManualApprovalGuild: tmp10 };
      cResult[6] = tmp10;
      cResult[7] = tmp10 && stateFromStores;
      cResult[8] = obj2;
    }
  : (features) => {
      _require = features;
      const items = [PermissionStore];
      const items1 = [features];
      let hasItem;
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(
        items,
        () => PermissionStore.can(constants.KICK_MEMBERS, features),
        items1,
      );
      if (features != null) {
        features = features.features;
        hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
      }
      let tmp4 = !hasItem;
      if (hasItem) {
        let hasItem1;
        if (features != null) {
          const features2 = features.features;
          hasItem1 = features2.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
        }
        tmp4 = !hasItem1;
      }
      const isManualApprovalGuild = !tmp4;
      const canCreateApplicationBypassInvites = isManualApprovalGuild && stateFromStores;
      return { canCreateApplicationBypassInvites, isManualApprovalGuild };
    };
const result = size.fileFinishedImporting("modules/instant_invite/useInviteApplicationBypassInfo.tsx");

export const useInviteApplicationBypassInfo = tmp3;
