// discord_app/modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx
import Constants from "../../../Constants.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import InviteStore from "../../../stores/InviteStore.tsx";
import UserGuildJoinRequestStore from "../UserGuildJoinRequestStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c2, c5, closure_0, closure_3, inviteKeyForGuildId;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx",
);

export const useCanReapplyToRejectedMemberVerificationApplication =
  function useCanReapplyToRejectedMemberVerificationApplication(guildId) {
    let callback;
    let closure_1;
    let isLoading;
    _require = guildId;
    [isLoading, closure_1] = react.useState(true);
    let obj = require("get initialized");
    const items = [UserGuildJoinRequestStore];
    const stateFromStores = obj.useStateFromStores(items, () => {
      let joinRequestGuild;
      if (null != guildId) {
        joinRequestGuild = UserGuildJoinRequestStore.getJoinRequestGuild(tmp);
      }
      return joinRequestGuild;
    });
    const useCallback = react.useCallback;
    _require = _asyncToGenerator(async (arg0) => {
      let obj2;
      closure_0 = arg0;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          c5 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c4 = 1;
              inviteKeyForGuildId = inviteKeyForGuildId.getInviteKeyForGuildId(closure_0);
              if (null != inviteKeyForGuildId) {
                c2 = 2;
                c5 = 1;
                const obj5 = { value: obj2.fetchVerificationForm(closure_0, inviteKeyForGuildId), done: false };
                obj2 = closure_2_1(callback[7]);
                return obj5;
              }
            }
          } else if (1 === tmp4) {
            c4 = 0;
            tmp(false);
            throw closure_3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            tmp(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c4 = 0;
          tmp(false);
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          closure_3 = tmp15;
          if (0 === c4) {
            c5 = 3;
            throw tmp15;
          } else {
            c2 = 1;
          }
        }
      }
    });
    callback = useCallback(function () {
      return closure_0(...arguments);
    }, []);
    const items1 = [guildId, callback];
    const effect = react.useEffect(() => {
      if (null == guildId) {
        closure_1(false);
      } else {
        closure_1(true);
        callback(tmp);
      }
    }, items1);
    let canReapply = null != stateFromStores;
    if (canReapply) {
      const features = stateFromStores.features;
      canReapply = features.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    return { canReapply, isLoading };
  };
