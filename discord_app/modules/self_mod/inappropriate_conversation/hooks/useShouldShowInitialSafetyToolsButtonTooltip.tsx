// discord_app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx
import ChannelSafetyWarningsStore from "../../ChannelSafetyWarningsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const obj2 = require("useInappropriateConversationSafetyToolsWarningForChannel");
      const inappropriateConversationSafetyToolsWarningForChannel =
        obj2.useInappropriateConversationSafetyToolsWarningForChannel(arg0);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelSafetyWarningsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          return ChannelSafetyWarningsStore.hasShownInitialTooltipForChannel(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const tmp8 =
        null != inappropriateConversationSafetyToolsWarningForChannel && !tmpResult.useStateFromStores(first, tmp7);
      return tmp8;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const obj = require("useInappropriateConversationSafetyToolsWarningForChannel");
      const inappropriateConversationSafetyToolsWarningForChannel =
        obj.useInappropriateConversationSafetyToolsWarningForChannel(arg0);
      const items = [ChannelSafetyWarningsStore];
      const obj2 = require("get initialized");
      const tmp2 =
        null != inappropriateConversationSafetyToolsWarningForChannel &&
        !obj2.useStateFromStores(items, () => ChannelSafetyWarningsStore.hasShownInitialTooltipForChannel(closure_0));
      return tmp2;
    };
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx",
);

export const useShouldShowInitialSafetyToolsButtonTooltip = tmp2;
