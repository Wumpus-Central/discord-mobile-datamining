// === Module 10818: ActivityLaunchErrorLink ===

// Module 10818 (ActivityLaunchErrorLink)
import c from "c" /* 576 */;
import migration from "migration" /* 10819 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/ActivityLaunchErrorLink.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityLaunchErrorLink(arg0) {
  const cResult = c.c(3);
  ({ href, children } = arg0);
  if (cResult[0] === children) {
    if (cResult[1] === href) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(migration.IntlLink, { target: href, children });
  cResult[0] = children;
  cResult[1] = href;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function ActivityLaunchErrorLink(arg0) {
  ({ href, children } = arg0);
  return jsx(migration.IntlLink, { target, children });
});