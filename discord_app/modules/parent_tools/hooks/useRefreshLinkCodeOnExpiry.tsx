// === Module 14681: useRefreshLinkCodeOnExpiry ===

// Module 14681 (useRefreshLinkCodeOnExpiry)
import c from "c" /* 576 */;
import useStableCallbackDefault from "useStableCallback" /* 6452 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  closure_0 = arg0;
  const cResult = c.c(4);
  const tmp2 = useStableCallbackDefault(arg1);
  closure_1 = tmp2;
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
  }
  const fn = function u() {
    if (null != timeout) {
      const _Date = Date;
      const diff = tmp - Date.now();
      if (diff <= 0) {
        closure_1();
      } else {
        const _setTimeout = setTimeout;
        timeout = setTimeout(closure_1, diff);
        return () => clearTimeout(closure_0);
      }
    }
  };
  const items = [arg0, tmp2];
  cResult[0] = arg0;
  cResult[1] = tmp2;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  const tmp = useStableCallbackDefault(arg1);
  closure_1 = tmp;
  const items = [arg0, tmp];
  const effect = noop.useEffect(() => {
    if (null != timeout) {
      const _Date = Date;
      const diff = tmp - Date.now();
      if (diff <= 0) {
        closure_1();
      } else {
        const _setTimeout = setTimeout;
        timeout = setTimeout(closure_1, diff);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
});