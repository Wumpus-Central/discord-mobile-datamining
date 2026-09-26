// === Module 5858: useCanReapplyToRejectedMemberVerificationApplication ===

// Module 5858 (useCanReapplyToRejectedMemberVerificationApplication)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import InviteStore from "InviteStore" /* 4817 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4656 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx");

export const useCanReapplyToRejectedMemberVerificationApplication = function useCanReapplyToRejectedMemberVerificationApplication(guildId) {
  _require = guildId;
  const isLoading = _slicedToArray(noop.useState(true), 2);
  closure_1 = isLoading[1];
  const items = [UserGuildJoinRequestStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let joinRequestGuild;
    if (null != closure_0) {
      joinRequestGuild = UserGuildJoinRequestStore.getJoinRequestGuild(tmp);
    }
    return joinRequestGuild;
  });
  _require = asyncGeneratorStep(async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
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
              const obj5 = { value: tmp3(callback[7]).fetchVerificationForm(closure_0, inviteKeyForGuildId), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          tmp3(false);
          throw closure_3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          tmp3(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 0;
        tmp3(false);
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp18) {
        closure_3 = tmp18;
        if (tmp4 === c4) {
          c5 = tmp2;
          throw tmp18;
        } else {
          c2 = tmp;
        }
      }
    }
  });
  callback = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  const items1 = [guildId, callback];
  const effect = noop.useEffect(() => {
    if (null == closure_0) {
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
  return { canReapply, isLoading: isLoading[0] };
};