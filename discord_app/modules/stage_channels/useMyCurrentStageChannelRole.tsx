// discord_app/modules/stage_channels/useMyCurrentStageChannelRole.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import StageChannelRoleStore from "StageChannelRoleStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp8;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore, SelectedChannelStore, StageChannelRoleStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          const id = AuthenticationStore.getId();
          let permissionsForUser = null;
          if (SelectedChannelStore.getVoiceChannelId() === closure_0) {
            permissionsForUser = StageChannelRoleStore.getPermissionsForUser(id, tmp2);
          }
          return permissionsForUser;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp8, tmp9);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [AuthenticationStore, SelectedChannelStore, StageChannelRoleStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const id = AuthenticationStore.getId();
          let permissionsForUser = null;
          if (SelectedChannelStore.getVoiceChannelId() === closure_0) {
            permissionsForUser = StageChannelRoleStore.getPermissionsForUser(id, tmp2);
          }
          return permissionsForUser;
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannelRole.tsx");

export default tmp2;
