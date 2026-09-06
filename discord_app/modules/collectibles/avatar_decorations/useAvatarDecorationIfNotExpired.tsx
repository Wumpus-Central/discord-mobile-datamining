// discord_app/modules/collectibles/avatar_decorations/useAvatarDecorationIfNotExpired.tsx
import AvatarDecorationUtils from "AvatarDecorationUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const MAX_TIMEOUT_MS = fn(1074).MAX_TIMEOUT_MS;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationIfNotExpired.tsx");

export default function useAvatarDecorationIfNotExpired(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  _slicedToArray = tmp[1];
  noop = noop.useRef(null);
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function maybeScheduleExpirationCheck() {
      if (null != closure_0) {
        if ("expiresAt" in tmp) {
          if (null != tmp.expiresAt) {
            const result = AvatarDecorationUtils.isAvatarDecorationExpired(tmp);
            closure_2(result);
            const _Date = Date;
            const result1 = 1000 * tmp.expiresAt;
            const diff = result1 - Date.now();
            if (!result) {
              if (0 < diff) {
                const timeout = new tmp3(4447).Timeout();
                const _Math = Math;
                timeout.start(Math.min(MAX_TIMEOUT_MS, diff), () => {
                  maybeScheduleExpirationCheck();
                });
                closure_3.current = timeout;
              }
            }
            tmp3 = require;
          }
        }
      }
      closure_2(false);
    }
    let result = maybeScheduleExpirationCheck();
    return () => {
      const current = ref.current;
      let stopResult;
      if (current != null) {
        stopResult = current.stop();
      }
      return stopResult;
    };
  }, items);
  const items1 = [first];
  const effect1 = noop.useEffect(() => {
    if (first) {
      const current = ref.current;
      if (current != null) {
        current.stop();
      }
    }
  }, items1);
  let tmp5;
  if (!first) {
    tmp5 = arg0;
  }
  return tmp5;
}
