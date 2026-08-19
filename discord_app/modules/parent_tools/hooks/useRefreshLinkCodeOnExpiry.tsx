// === Module 14234: useRefreshLinkCodeOnExpiry ===

// Module 14234 (useRefreshLinkCodeOnExpiry)
import obj132Default from "obj132" /* 8601 */;
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx");

export default function useRefreshLinkCodeOnExpiry(arg0, arg1) {
  importDefault = arg0;
  const tmp = obj132Default(arg1);
  dependencyMap = tmp;
  const items = [arg0, tmp];
  const effect = React.useEffect(() => {
    if (null != timeout) {
      const _Date = Date;
      const diff = tmp - Date.now();
      if (diff <= 0) {
        callback();
      } else {
        const _setTimeout = setTimeout;
        timeout = setTimeout(callback, diff);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
};