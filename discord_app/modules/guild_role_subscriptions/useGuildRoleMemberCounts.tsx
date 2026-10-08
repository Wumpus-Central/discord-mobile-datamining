// discord_app/modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx
import GuildRoleMemberActionCreatorsAll from "../guild_settings/GuildRoleMemberActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildRoleMemberCountStore from "../guild_settings/GuildRoleMemberCountStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_5 = {};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildRoleMemberCounts(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(7);
      let num = 0;
      if (undefined !== arg1) {
        num = arg1;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleMemberCountStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          return GuildRoleMemberCountStore.getRoleMemberCount(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
      }
      require("initialize");
      if (cResult[3] === arg0) {
        if (cResult[4] === num) {
          let tmp9 = cResult[5];
          let tmp10 = cResult[6];
        }
        const effect = noop.useEffect(tmp9, tmp10);
        return tmp8;
      }
      const fn2 = function v() {
        if (null != closure_0) {
          let tmp4 = null != tmp3;
          if (tmp4) {
            tmp4 = num > 0;
          }
          if (tmp4) {
            const _Date = Date;
            tmp4 = Date.now() - tmp3 < num;
          }
          if (!tmp4) {
            const _Date2 = Date;
            closure_5[closure_0] = Date.now();
            const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(closure_0);
          }
        }
      };
      const items1 = [arg0, num];
      cResult[3] = arg0;
      cResult[4] = num;
      cResult[5] = fn2;
      cResult[6] = items1;
      tmp10 = items1;
      tmp9 = fn2;
      let obj = require("c");
    }
  : function useGuildRoleMemberCounts(arg0) {
      _require = arg0;
      let num = arg1;
      if (arg1 === undefined) {
        num = 0;
      }
      const items = [GuildRoleMemberCountStore];
      const items1 = [arg0, num];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildRoleMemberCountStore.getRoleMemberCount(closure_0),
      );
      const effect = noop.useEffect(() => {
        if (null != closure_0) {
          let tmp4 = null != tmp3;
          if (tmp4) {
            tmp4 = num > 0;
          }
          if (tmp4) {
            const _Date = Date;
            tmp4 = Date.now() - tmp3 < num;
          }
          if (!tmp4) {
            const _Date2 = Date;
            closure_5[closure_0] = Date.now();
            const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(closure_0);
          }
        }
      }, items1);
      return stateFromStores;
    };
