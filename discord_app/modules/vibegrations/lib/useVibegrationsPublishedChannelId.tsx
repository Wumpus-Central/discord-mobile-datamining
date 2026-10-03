// === Module 16583: useVibegrationsPublishedChannelId ===

// Module 16583 (useVibegrationsPublishedChannelId)
import VibegrationsUtils from "VibegrationsUtils" /* 6746 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPublishedChannelId.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function u() {
    let result = null;
    if (null != closure_1) {
      result = VibegrationsUtils.findVibegrationChannelId(closure_0, tmp);
    }
    return result;
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  let obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildChannelStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let result = null;
    if (null != closure_1) {
      result = VibegrationsUtils.findVibegrationChannelId(closure_0, tmp);
    }
    return result;
  }, items1);
});