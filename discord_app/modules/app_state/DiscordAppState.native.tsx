// === Module 10015: DiscordAppState ===

// Module 10015 (DiscordAppState)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating;
let obj = {
  canUIRequestGatewaySocket() {
    return "active" === AppStateStore.getState();
  },
  getState() {
    return AppStateStore.getState();
  },
  useCanUIRequestGatewaySocket: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
  }) : (() => {
    let state;
    const items = [AppStateStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => "active" === state.getState());
  })
};
ReactCompilerGating = ReactCompilerGating_mod;
const result = size.fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default obj;