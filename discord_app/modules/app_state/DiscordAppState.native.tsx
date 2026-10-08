// === Module 6076: DiscordAppState ===

// Module 6076 (DiscordAppState)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import AppStateStore from "AppStateStore" /* 1998 */;

require = fn;
let obj = {
  canUIRequestGatewaySocket() {
    return "active" === AppStateStore.getState();
  },
  getState() {
    return AppStateStore.getState();
  },
  useCanUIRequestGatewaySocket: null
};
const ReactCompilerGating = fn(558);
obj.useCanUIRequestGatewaySocket = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanUIRequestGatewaySocket() {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useCanUIRequestGatewaySocket() {
  const items = [AppStateStore];
  return initialize.useStateFromStores(items, () => "active" === state.getState());
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default obj;