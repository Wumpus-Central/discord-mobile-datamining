// discord_app/modules/stage_channels/useMyCurrentStageChannelRole.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import StageChannelRoleStore from "StageChannelRoleStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannelRole.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore, SelectedChannelStore, StageChannelRoleStore];
        cResult[0] = items;
        let first = items;
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
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp8, tmp9);
    }
  : (arg0) => {
      _require = arg0;
      const items = [AuthenticationStore, SelectedChannelStore, StageChannelRoleStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
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
