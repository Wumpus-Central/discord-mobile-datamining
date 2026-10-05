// === Module 16146: MentionsBadge ===

// Module 16146 (MentionsBadge)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isMentionLowImportance;
  let mentionsCount;
  const obj = react2;
  const cResult = obj.c(3);
  ({ mentionsCount, isMentionLowImportance } = arg0);
  if (cResult[0] === isMentionLowImportance) {
    let tmp4;
    if (cResult[1] === mentionsCount) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(native.Badge, { value: mentionsCount, isMentionLowImportance });
  cResult[0] = isMentionLowImportance;
  cResult[1] = mentionsCount;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  let isMentionLowImportance;
  let mentionsCount;
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(native.Badge, { value, isMentionLowImportance });
});
const result = size.fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default tmp3;