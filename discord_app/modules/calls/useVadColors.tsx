// discord_app/modules/calls/useVadColors.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useVadColors.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      const cResult = userId(guildId[3]).c(7);
      userId = userId.userId;
      guildId = userId.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        const fn = function n() {
          let user = null;
          if (null != userId) {
            user = UserStore.getUser(tmp);
          }
          return user;
        };
        cResult[1] = userId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = userId(guildId[3]);
      const stateFromStores = userId(guildId[4]).useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildMemberStore];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === guildId) {
        if (cResult[5] === userId) {
          let tmp10 = cResult[6];
        }
        const stateFromStores1 = tmp(tmp2[4]).useStateFromStores(tmp8, tmp10);
        let vadColors;
        if (stateFromStores1 != null) {
          vadColors = stateFromStores1.vadColors;
        }
        if (vadColors == null) {
          let vadColors1;
          if (stateFromStores != null) {
            vadColors1 = stateFromStores.vadColors;
          }
          vadColors = vadColors1;
        }
        if (vadColors == null) {
          vadColors = null;
        }
        return vadColors;
      }
      const fn2 = function f() {
        let member = null;
        if (null != userId) {
          member = null;
          if (null != guildId) {
            member = GuildMemberStore.getMember(tmp3, tmp);
          }
        }
        return member;
      };
      cResult[4] = guildId;
      cResult[5] = userId;
      cResult[6] = fn2;
      tmp10 = fn2;
      const tmpResult = userId(guildId[4]);
    }
  : (arg0) => {
      ({ userId: require, guildId: dependencyMap } = arg0);
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => {
        let user = null;
        if (null != require) {
          user = UserStore.getUser(tmp);
        }
        return user;
      });
      const items1 = [GuildMemberStore];
      const stateFromStores1 = initialize.useStateFromStores(items1, () => {
        let member = null;
        if (null != require) {
          member = null;
          if (null != dependencyMap) {
            member = GuildMemberStore.getMember(tmp3, tmp);
          }
        }
        return member;
      });
      let vadColors;
      if (stateFromStores1 != null) {
        vadColors = stateFromStores1.vadColors;
      }
      if (vadColors == null) {
        let vadColors1;
        if (stateFromStores != null) {
          vadColors1 = stateFromStores.vadColors;
        }
        vadColors = vadColors1;
      }
      if (vadColors == null) {
        vadColors = null;
      }
      return vadColors;
    };
