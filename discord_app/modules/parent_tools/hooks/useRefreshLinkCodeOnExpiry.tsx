// discord_app/modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx
import useStableCallbackDefault from "../../../hooks/useStableCallback.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx");

export default function useRefreshLinkCodeOnExpiry(arg0, arg1) {
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
}
