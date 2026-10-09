// discord_app/modules/stage_channels/useRequestToSpeakPermission.tsx
import StageChannelActionCreators from "StageChannelActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRequestToSpeakPermission(arg0) {
      _require = arg0;
      const cResult = require("c").c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class S {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = S;
        cResult[3] = items1;
        let tmp7 = items1;
      } else {
        class S {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
        tmp7 = cResult[3];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, S, tmp7);
      if (cResult[4] !== stateFromStores) {
        class S {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
        const canEveryoneRoleResult = stateFromStores(4714).canEveryoneRole(
          Permissions.REQUEST_TO_SPEAK,
          stateFromStores,
        );
        cResult[4] = stateFromStores;
        cResult[5] = canEveryoneRoleResult;
        const obj3 = stateFromStores(4714);
      } else {
        class S {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
      }
      const tmpResult = require("initialize");
      [tmp13, tmp14] = noop.useState(tmp9);
      dependencyMap = tmp14;
      if (tmp9 !== tmp13) {
        class S {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
      }
      if (cResult[6] !== stateFromStores) {
        class S {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
        cResult[6] = stateFromStores;
        cResult[7] = tmp16;
      } else {
        class S {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
      }
      if (cResult[8] === tmp13) {
        class S {
          constructor() {
            return closure_5.getChannel(closure_0);
          }
        }
        return items2;
      }
      items2 = [tmp13, tmp16];
      cResult[8] = tmp13;
      cResult[9] = tmp16;
      cResult[10] = items2;
      const tmp12 = _slicedToArray(noop.useState(tmp9), 2);
    }
  : function useRequestToSpeakPermission(arg0) {
      _require = arg0;
      const items = [ChannelStore];
      const items1 = [arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => ChannelStore.getChannel(closure_0),
        items1,
      );
      let obj = require("initialize");
      const canEveryoneRoleResult = stateFromStores(4714).canEveryoneRole(
        Permissions.REQUEST_TO_SPEAK,
        stateFromStores,
      );
      const obj2 = stateFromStores(4714);
      [tmp4, tmp5] = noop.useState(canEveryoneRoleResult);
      dependencyMap = tmp5;
      if (canEveryoneRoleResult !== tmp4) {
        tmp5(canEveryoneRoleResult);
      }
      const items2 = [
        tmp4,
        function setRequestToSpeakEnabled(arg0) {
          if (null != stateFromStores) {
            require(arg0);
            const result = StageChannelActionCreators.setEveryoneRolePermissionAllowed(
              tmp,
              Permissions.REQUEST_TO_SPEAK,
              arg0,
            );
          }
        },
      ];
      return items2;
    };
