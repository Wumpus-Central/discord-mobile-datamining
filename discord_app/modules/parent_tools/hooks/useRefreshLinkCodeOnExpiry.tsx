// discord_app/modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx
import setDefault from "../../../hooks/useStableCallback.tsx";
import closure_2 from "../../../../_runtime/00019_noop.js";

const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx");

export default function useRefreshLinkCodeOnExpiry(arg0, arg1) {
  importDefault = arg0;
  const tmp = setDefault(arg1);
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