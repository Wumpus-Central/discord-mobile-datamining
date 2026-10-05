// discord_app/modules/user_settings/content_and_social/useNSFWAllowed.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let currentUser;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [UserStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => {
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
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useNSFWAllowed.tsx");

export const useNSFWAllowed = tmp2;
