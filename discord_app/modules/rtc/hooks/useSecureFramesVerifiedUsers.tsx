// discord_app/modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import VerifiedKeyStore from "../VerifiedKeyStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [VerifiedKeyStore];
        const fn = function o() {
          return userIds.getUserIds();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStoresArray(tmp4, tmp5);
    }
  : () => {
      const items = [VerifiedKeyStore];
      return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
    };
