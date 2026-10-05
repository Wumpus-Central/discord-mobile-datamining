// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import UserProfileSettingsStore from "../../user_profile/UserProfileSettingsStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1) => {
      let closure_1;
      let first;
      _require = id;
      importDefault = arg1;
      const obj = require("react");
      const cResult = obj.c(7);
      const obj2 = UserUtilsDefault;
      const name = obj2.useName(id);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileSettingsStore, GuildMemberStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp11;
        id = undefined;
        const tmp8 = cResult[2];
        if (id != null) {
          id = id.id;
        }
        if (tmp8 === id) {
          tmp11 = cResult[3];
        }
        if (cResult[4] === arg1) {
          let tmp13;
          if (cResult[5] === id) {
            tmp13 = cResult[6];
          }
          const tmpResult = tmp(504);
          let str = tmpResult.useStateFromStores(first, tmp11, tmp13);
          if (str == null) {
            str = name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        }
        const items1 = [arg1, id];
        cResult[4] = arg1;
        cResult[5] = id;
        cResult[6] = items1;
        tmp13 = items1;
      }
      cResult[1] = arg1;
      let id1;
      if (id != null) {
        id1 = id.id;
      }
      const fn = function u() {
        let pendingGlobalName;
        const pendingChanges = UserProfileSettingsStore.getPendingChanges(closure_1);
        if (null != closure_1) {
          let pendingNickname = pendingChanges.pendingNickname;
          if (pendingNickname == null) {
            id = undefined;
            const getNick = GuildMemberStore.getNick;
            if (id != null) {
              id = id.id;
            }
            pendingNickname = getNick(closure_1, id);
          }
          pendingGlobalName = pendingNickname;
        } else {
          pendingGlobalName = pendingChanges.pendingGlobalName;
        }
        return pendingGlobalName;
      };
      cResult[2] = id1;
      cResult[3] = fn;
      tmp11 = fn;
    }
  : (guildId, arg1) => {
      let closure_1;
      _require = guildId;
      importDefault = arg1;
      const obj = UserUtilsDefault;
      const name = obj.useName(guildId);
      const items = [UserProfileSettingsStore, GuildMemberStore];
      const items1 = [arg1, guildId];
      const obj2 = require("get initialized");
      let str = obj2.useStateFromStores(
        items,
        () => {
          let pendingGlobalName;
          const pendingChanges = UserProfileSettingsStore.getPendingChanges(closure_1);
          if (null != closure_1) {
            let pendingNickname = pendingChanges.pendingNickname;
            if (pendingNickname == null) {
              let id;
              const getNick = GuildMemberStore.getNick;
              if (guildId != null) {
                id = guildId.id;
              }
              pendingNickname = getNick(closure_1, id);
            }
            pendingGlobalName = pendingNickname;
          } else {
            pendingGlobalName = pendingChanges.pendingGlobalName;
          }
          return pendingGlobalName;
        },
        items1,
      );
      if (str == null) {
        str = name;
      }
      if (str == null) {
        str = "";
      }
      return str;
    };
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = tmp2;
