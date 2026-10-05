// === Module 16852: GuildChannelMemberRow ===

// Module 16852 (GuildChannelMemberRow)
import c from "c" /* 576 */;
import UserRowDefault from "UserRow" /* 10602 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelMemberRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp10 = jsx(UserRowDefault, {});
    cResult[0] = arg0;
    cResult[1] = tmp10;
    let tmp3 = tmp10;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((arg0) => {
  const merged = Object.assign(arg0);
  return jsx(UserRowDefault, {});
});