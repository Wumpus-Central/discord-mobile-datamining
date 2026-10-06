// discord_app/modules/stage_channels/useRequestToSpeakPermission.tsx
import Constants from "../../Constants.tsx";
import StageChannelActionCreators from "StageChannelActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, tmp3, tmp6;

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let closure_2;
      let first;
      let items2;
      let tmp13;
      let tmp14;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class E {
          constructor() {
            return closure_5.getChannel(closure_0);
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
            return closure_5.getChannel(closure_0);
          }
        }
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, E, tmp7);
      if (cResult[4] !== stateFromStores) {
        class E {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
        const obj3 = stateFromStores(4520);
        cResult[4] = stateFromStores;
        cResult[5] = obj3.canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
        const canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
      } else {
        class E {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
      }
      [tmp13, tmp14] = react.useState(tmp9);
      dependencyMap = tmp14;
      _slicedToArray(react.useState(tmp9), 2);
      if (tmp9 !== tmp13) {
        class E {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
      }
      if (cResult[6] !== stateFromStores) {
        class R {
          constructor(arg0) {
            if (null != closure_1) {
              tmp2 = arg0;
              tmp3 = closure_2;
              tmp4 = closure_2(arg0);
              tmp5 = closure_0;
              tmp6 = closure_2;
              obj = closure_0(closure_2[8]);
              tmp7 = Permissions;
              result = obj.setEveryoneRolePermissionAllowed(tmp, Permissions.REQUEST_TO_SPEAK, arg0);
            }
            return;
          }
        }
        cResult[6] = stateFromStores;
        cResult[7] = R;
      } else {
        class R {
          constructor(arg0) {
            if (null != closure_1) {
              tmp2 = arg0;
              tmp3 = closure_2;
              tmp4 = closure_2(arg0);
              tmp5 = closure_0;
              tmp6 = closure_2;
              obj = closure_0(closure_2[8]);
              tmp7 = Permissions;
              result = obj.setEveryoneRolePermissionAllowed(tmp, Permissions.REQUEST_TO_SPEAK, arg0);
            }
            return;
          }
        }
      }
      if (cResult[8] === tmp13) {
        class R {
          constructor(arg0) {
            if (null != closure_1) {
              tmp2 = arg0;
              tmp3 = closure_2;
              tmp4 = closure_2(arg0);
              tmp5 = closure_0;
              tmp6 = closure_2;
              obj = closure_0(closure_2[8]);
              tmp7 = Permissions;
              result = obj.setEveryoneRolePermissionAllowed(tmp, Permissions.REQUEST_TO_SPEAK, arg0);
            }
            return;
          }
        }
        return items2;
      }
      items2 = [tmp13, R];
      cResult[8] = tmp13;
      cResult[9] = R;
      cResult[10] = items2;
    }
  : (arg0) => {
      let closure_0;
      let closure_2;
      let tmp4;
      let tmp5;
      _require = arg0;
      let obj = require("get initialized");
      const items = [ChannelStore];
      const items1 = [arg0];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0), items1);
      const obj2 = stateFromStores(4520);
      const canEveryoneRoleResult = obj2.canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
      [tmp4, tmp5] = react.useState(canEveryoneRoleResult);
      dependencyMap = tmp5;
      _slicedToArray(react.useState(canEveryoneRoleResult), 2);
      if (canEveryoneRoleResult !== tmp4) {
        tmp5(canEveryoneRoleResult);
      }
      const items2 = [
        tmp4,
        (arg0) => {
          if (null != stateFromStores) {
            require(arg0);
            const obj = StageChannelActionCreators;
            const result = obj.setEveryoneRolePermissionAllowed(tmp, Permissions.REQUEST_TO_SPEAK, arg0);
          }
        },
      ];
      return items2;
    };
let result = size.fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = tmp2;
