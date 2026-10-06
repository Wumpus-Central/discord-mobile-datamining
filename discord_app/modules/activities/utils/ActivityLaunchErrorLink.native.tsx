// === Module 9074: ActivityLaunchErrorLink ===

// Module 9074 (ActivityLaunchErrorLink)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import migration from "migration" /* 9075 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let href;
  const obj = react2;
  const cResult = obj.c(3);
  ({ href, children } = arg0);
  if (cResult[0] === children) {
    let tmp4;
    if (cResult[1] === href) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(migration.IntlLink, { target: href, children });
  cResult[0] = children;
  cResult[1] = href;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  let children;
  let href;
  ({ href, children } = arg0);
  return jsx(migration.IntlLink, { target, children });
});
const result = size.fileFinishedImporting("modules/activities/utils/ActivityLaunchErrorLink.native.tsx");

export default tmp3;