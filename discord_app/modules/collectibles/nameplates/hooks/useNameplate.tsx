// discord_app/modules/collectibles/nameplates/hooks/useNameplate.tsx
import utils from "../utils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/hooks/useNameplate.tsx");

export const useNameplate = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNameplate(user) {
      let nameplate3 = user;
      let nameplate = guildId;
      const cResult = user(guildId[3]).c(7);
      user = user.user;
      guildId = user.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === user) {
          let tmp5 = cResult[3];
        }
        let collectibles = nameplate3(nameplate[4]).useStateFromStores(first, tmp5);
        let tmp6 = null;
        if (null != user) {
          let nameplate1;
          if (collectibles != tmp6) {
            const collectibles2 = collectibles.collectibles;
            if (collectibles2 != tmp6) {
              nameplate1 = collectibles2.nameplate;
            }
          }
          if (cResult[4] === nameplate1) {
          }
          let nameplate2;
          if (collectibles != tmp6) {
            const collectibles3 = collectibles.collectibles;
            if (collectibles3 != tmp6) {
              nameplate2 = collectibles3.nameplate;
            }
          }
          nameplate = nameplate3(nameplate[5]).getNameplateData(nameplate2);
          if (nameplate == tmp6) {
            nameplate = user.nameplate;
          }
          nameplate3 = undefined;
          if (collectibles != tmp6) {
            collectibles = collectibles.collectibles;
            tmp6 = collectibles == tmp6;
            if (!tmp6) {
              nameplate3 = collectibles.nameplate;
            }
          }
          cResult[4] = nameplate3;
          cResult[5] = user;
          cResult[6] = nameplate;
          const nameplate3Result1 = nameplate3(nameplate[5]);
        }
        const nameplate3Result = nameplate3(nameplate[4]);
      }
      const fn = function u() {
        let member = null;
        if (null != guildId) {
          member = null;
          if (null != user) {
            member = GuildMemberStore.getMember(tmp, tmp3.id);
          }
        }
        return member;
      };
      cResult[1] = guildId;
      cResult[2] = user;
      cResult[3] = fn;
      tmp5 = fn;
      const obj = user(guildId[3]);
    }
  : function useNameplate(user) {
      user = user.user;
      const guildId = user.guildId;
      const items = [GuildMemberStore];
      const stateFromStores = user(guildId[4]).useStateFromStores(items, () => {
        let member = null;
        if (null != guildId) {
          member = null;
          if (null != user) {
            member = GuildMemberStore.getMember(tmp, tmp3.id);
          }
        }
        return member;
      });
      const items1 = [stateFromStores, user];
      return stateFromStores.useMemo(() => {
        if (null != user) {
          let nameplate1;
          if (stateFromStores != null) {
            const collectibles = stateFromStores.collectibles;
            if (collectibles != null) {
              nameplate1 = collectibles.nameplate;
            }
          }
          let nameplate = utils.getNameplateData(nameplate1);
          if (nameplate == null) {
            nameplate = tmp.nameplate;
          }
          return nameplate;
        }
      }, items1);
    };
