// discord_app/modules/app_state/DiscordAppState.native.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import AppStateStore from "../../stores/native/AppStateStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let ReactCompilerGating;
let obj = {
  canUIRequestGatewaySocket() {
    return "active" === AppStateStore.getState();
  },
  getState() {
    return AppStateStore.getState();
  },
  useCanUIRequestGatewaySocket: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let state;
        let tmp4;
        let tmp5;
        const obj = react;
        const cResult = obj.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AppStateStore];
          const fn = function c() {
            return "active" === state.getState();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const tmpResult = get_initialized;
        return tmpResult.useStateFromStores(tmp4, tmp5);
      }
    : () => {
        let state;
        const items = [AppStateStore];
        const obj = get_initialized;
        return obj.useStateFromStores(items, () => "active" === state.getState());
      },
};
ReactCompilerGating = ReactCompilerGating_mod;
const result = size.fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default obj;
