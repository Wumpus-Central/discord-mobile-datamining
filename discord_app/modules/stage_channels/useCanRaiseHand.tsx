// discord_app/modules/stage_channels/useCanRaiseHand.tsx
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1096).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          return PermissionStore.can(Permissions.REQUEST_TO_SPEAK, closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      _require = arg0;
      const items = [PermissionStore];
      return require("initialize").useStateFromStores(items, () =>
        PermissionStore.can(Permissions.REQUEST_TO_SPEAK, closure_0),
      );
    };
