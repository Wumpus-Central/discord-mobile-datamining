// discord_app/modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const jsx = Fragment.jsx;
let closure_4 = react.lazy(() => asyncRequire(12199, dependencyMap.paths));
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId, powerup) => {
      _require = guildId;
      dependencyMap = powerup;
      let obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === guildId) {
        let tmp2;
        if (cResult[1] === powerup) {
          tmp2 = cResult[2];
        }
        return tmp2;
      }
      const fn = function p() {
        const obj = useAlertStore;
        obj.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
      };
      cResult[0] = guildId;
      cResult[1] = powerup;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : (guildId, powerup) => {
      const items = [guildId, powerup];
      return react.useCallback(() => {
        const obj = useAlertStore;
        obj.openAlert("guild-powerups-deactivate-alert", <closure_4 guildId={guildId} powerup={powerup} />);
      }, items);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowDeactivate.tsx");

export default tmp2;
