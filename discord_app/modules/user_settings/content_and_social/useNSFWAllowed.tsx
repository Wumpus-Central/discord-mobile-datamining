// discord_app/modules/user_settings/content_and_social/useNSFWAllowed.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useNSFWAllowed.tsx");

export const useNSFWAllowed = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNSFWAllowed() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function l() {
          currentUser = currentUser.getCurrentUser();
          let nsfwAllowed;
          if (currentUser != null) {
            nsfwAllowed = currentUser.nsfwAllowed;
          }
          if (nsfwAllowed == null) {
            nsfwAllowed = null;
          }
          return nsfwAllowed;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : function useNSFWAllowed() {
      const items = [UserStore];
      return initialize.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        if (nsfwAllowed == null) {
          nsfwAllowed = null;
        }
        return nsfwAllowed;
      });
    };
