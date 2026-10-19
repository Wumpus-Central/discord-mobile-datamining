// === Module 17475: useGuildsBarGuildMediaState ===

// Module 17475 (useGuildsBarGuildMediaState)
import GuildMediaStateStore from "GuildMediaStateStore" /* 14788 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/useGuildsBarGuildMediaState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildsBarGuildMediaState(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMediaStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return GuildMediaStateStore.getGuildMediaState(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useGuildsBarGuildMediaState(arg0) {
  _require = arg0;
  const items = [GuildMediaStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => GuildMediaStateStore.getGuildMediaState(closure_0), items1);
});