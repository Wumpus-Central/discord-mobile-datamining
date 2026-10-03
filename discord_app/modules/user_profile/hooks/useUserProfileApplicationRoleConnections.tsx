// discord_app/modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../UserProfileStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
let closure_4 = [];
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileApplicationRoleConnections.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
          return UserProfileStore.getUserProfile(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.applicationRoleConnections;
      }
      return null != prop ? stateFromStores.applicationRoleConnections : closure_4;
    }
  : (arg0) => {
      _require = arg0;
      const items = [UserProfileStore];
      stateFromStores = require("initialize").useStateFromStores(items, () =>
        UserProfileStore.getUserProfile(closure_0),
      );
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.applicationRoleConnections;
      }
      const items1 = [prop];
      return useMemo(() => {
        let prop;
        if (stateFromStores != null) {
          prop = stateFromStores.applicationRoleConnections;
        }
        return null == prop ? closure_4 : stateFromStores.applicationRoleConnections;
      }, items1);
    };
