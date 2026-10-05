// discord_app/modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import VerifiedKeyStore from "../VerifiedKeyStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let userIds;
      const obj = react;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStoresArray(tmp4, tmp5);
    }
  : () => {
      let userIds;
      const items = [VerifiedKeyStore];
      const obj = get_initialized;
      return obj.useStateFromStoresArray(items, () => userIds.getUserIds());
    };
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = tmp2;
