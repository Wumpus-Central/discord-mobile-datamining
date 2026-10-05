// discord_app/modules/stage_channels/useCurrentUserStageRoles.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import StageChannelRoleStore from "StageChannelRoleStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(5);
      dependencyMap = tmp4;
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StageChannelRoleStore, AuthenticationStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === (undefined !== arg1 && arg1)) {
        let tmp8;
        let tmp9;
        if (cResult[2] === arg0) {
          tmp8 = cResult[3];
          tmp9 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
      }
      const fn = function c() {
        return StageChannelRoleStore.getPermissionsForUser(AuthenticationStore.getId(), closure_0, closure_1);
      };
      const items1 = [arg0, undefined !== arg1 && arg1];
      cResult[1] = undefined !== arg1 && arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp9 = items1;
      tmp8 = fn;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      const items = [StageChannelRoleStore, AuthenticationStore];
      const items1 = [arg0, flag];
      const obj = require("get initialized");
      return obj.useStateFromStoresObject(
        items,
        () => StageChannelRoleStore.getPermissionsForUser(AuthenticationStore.getId(), closure_0, flag),
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

export default tmp2;
