// === Module 10395: useShouldShowInitialSafetyToolsButtonTooltip ===

// Module 10395 (useShouldShowInitialSafetyToolsButtonTooltip)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10251 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowInitialSafetyToolsButtonTooltip(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  const obj = require("c");
  const tmp = _require;
  const inappropriateConversationSafetyToolsWarningForChannel = require("useInappropriateConversationSafetyToolsWarningForChannel").useInappropriateConversationSafetyToolsWarningForChannel(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSafetyWarningsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return ChannelSafetyWarningsStore.hasShownInitialTooltipForChannel(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj2 = require("useInappropriateConversationSafetyToolsWarningForChannel");
  const tmpResult = tmp(504);
  return null != inappropriateConversationSafetyToolsWarningForChannel && !tmp(504).useStateFromStores(first, tmp7);
}) : (function useShouldShowInitialSafetyToolsButtonTooltip(arg0) {
  _require = arg0;
  const inappropriateConversationSafetyToolsWarningForChannel = require("useInappropriateConversationSafetyToolsWarningForChannel").useInappropriateConversationSafetyToolsWarningForChannel(arg0);
  const obj = require("useInappropriateConversationSafetyToolsWarningForChannel");
  const items = [ChannelSafetyWarningsStore];
  const obj2 = require("initialize");
  return null != inappropriateConversationSafetyToolsWarningForChannel && !require("initialize").useStateFromStores(items, () => ChannelSafetyWarningsStore.hasShownInitialTooltipForChannel(closure_0));
});