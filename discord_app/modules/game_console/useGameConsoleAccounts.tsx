// discord_app/modules/game_console/useGameConsoleAccounts.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ConnectedAccountsStore from "../../stores/ConnectedAccountsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PlatformTypes = Constants.PlatformTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConnectedAccountsStore];
        const fn = function o() {
          const items = [
            ConnectedAccountsStore.getAccount(null, constants.XBOX),
            ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION),
            ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING),
          ];
          return items.filter(GlobalUtils.isNotNullish);
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStoresArray(tmp4, tmp5);
    }
  : () => {
      let items = [ConnectedAccountsStore];
      const obj = get_initialized;
      return obj.useStateFromStoresArray(items, () => {
        const items = [
          ConnectedAccountsStore.getAccount(null, constants.XBOX),
          ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION),
          ConnectedAccountsStore.getAccount(null, constants.PLAYSTATION_STAGING),
        ];
        return items.filter(GlobalUtils.isNotNullish);
      });
    };
const result = size.fileFinishedImporting("modules/game_console/useGameConsoleAccounts.tsx");

export default tmp2;
