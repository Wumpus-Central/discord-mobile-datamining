// discord_app/modules/applications/getApplicationFromBotUserId.tsx
import UserProfileStore from "../user_profile/UserProfileStore.tsx";

const require = globalThis.__r;

const require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/getApplicationFromBotUserId.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGetApplicationFromBotUserId(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          let tmp = closure_0;
          let tmp2;
          if (null !== closure_0) {
            if (tmp == null) {
              tmp = EMPTY_STRING_SNOWFLAKE_ID;
            }
            const userProfile = UserProfileStore.getUserProfile(tmp);
            let application;
            if (userProfile != null) {
              application = userProfile.application;
            }
            tmp2 = application;
          }
          return tmp2;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      return stateFromStores;
    }
  : function useGetApplicationFromBotUserId(arg0) {
      _require = arg0;
      const items = [UserProfileStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        let tmp = closure_0;
        let tmp2;
        if (null !== closure_0) {
          if (tmp == null) {
            tmp = EMPTY_STRING_SNOWFLAKE_ID;
          }
          const userProfile = UserProfileStore.getUserProfile(tmp);
          let application;
          if (userProfile != null) {
            application = userProfile.application;
          }
          tmp2 = application;
        }
        return tmp2;
      });
      return stateFromStores;
    };
