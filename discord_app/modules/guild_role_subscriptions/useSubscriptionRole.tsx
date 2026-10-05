// discord_app/modules/guild_role_subscriptions/useSubscriptionRole.tsx
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      let subscriptionListing;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      const obj2 = require("GuildRoleSubscriptionsHooks");
      const tmp2 = subscriptionListing;
      subscriptionListing = obj2.useSubscriptionListing(arg1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp7;
        if (cResult[2] === subscriptionListing) {
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(tmp2[4]);
        return tmpResult.useStateFromStores(first, tmp7);
      }
      const fn = function u() {
        let role;
        if (null != closure_0) {
          if (null != subscriptionListing) {
            role = GuildRoleStore.getRole(tmp, tmp3.role_id);
          }
        }
        return role;
      };
      cResult[1] = arg0;
      cResult[2] = subscriptionListing;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      const obj = require("GuildRoleSubscriptionsHooks");
      dependencyMap = obj.useSubscriptionListing(arg1);
      const items = [GuildRoleStore];
      const obj2 = require("get initialized");
      return obj2.useStateFromStores(items, () => {
        let role;
        if (null != closure_0) {
          if (null != closure_1) {
            role = GuildRoleStore.getRole(tmp, tmp3.role_id);
          }
        }
        return role;
      });
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useSubscriptionRole.tsx");

export default tmp2;
