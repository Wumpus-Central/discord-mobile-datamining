// === Module 16564: MentionsBadge ===

// Module 16564 (MentionsBadge)
import c from "c" /* 576 */;
import native from "native" /* 1200 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MentionsBadge(arg0) {
  const cResult = c.c(3);
  ({ mentionsCount, isMentionLowImportance } = arg0);
  if (cResult[0] === isMentionLowImportance) {
    if (cResult[1] === mentionsCount) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(native.Badge, { value: mentionsCount, isMentionLowImportance });
  cResult[0] = isMentionLowImportance;
  cResult[1] = mentionsCount;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function MentionsBadge(arg0) {
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(native.Badge, { value, isMentionLowImportance });
});