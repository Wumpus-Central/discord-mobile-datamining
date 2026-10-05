// discord_app/modules/applications/getApplicationFromBotUserId.tsx
import Constants from "../../Constants.tsx";
import UserProfileStore from "../user_profile/UserProfileStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          let tmp = closure_0;
          let tmp2;
          if (null !== closure_0) {
            const getUserProfile = UserProfileStore.getUserProfile;
            if (tmp == null) {
              tmp = EMPTY_STRING_SNOWFLAKE_ID;
            }
            const userProfile = getUserProfile(tmp);
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      return stateFromStores;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [UserProfileStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
        let tmp = closure_0;
        let tmp2;
        if (null !== closure_0) {
          const getUserProfile = UserProfileStore.getUserProfile;
          if (tmp == null) {
            tmp = EMPTY_STRING_SNOWFLAKE_ID;
          }
          const userProfile = getUserProfile(tmp);
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
const result = size.fileFinishedImporting("modules/applications/getApplicationFromBotUserId.tsx");

export default tmp2;
