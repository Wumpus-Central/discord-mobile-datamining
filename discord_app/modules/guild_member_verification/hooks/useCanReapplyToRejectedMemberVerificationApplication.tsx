// === Module 7677: useCanReapplyToRejectedMemberVerificationApplication ===

// Module 7677 (useCanReapplyToRejectedMemberVerificationApplication)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "updateInvite" /* 4462 */;
import closure_7 from "handleGatewayJoinRequestUpdate" /* 4300 */;
import { GuildFeatures } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx");

export const useCanReapplyToRejectedMemberVerificationApplication = function useCanReapplyToRejectedMemberVerificationApplication(guildId) {
  let _require = guildId;
  const isLoading = callback2(React.useState(true), 2);
  closure_1 = isLoading[1];
  const items = [closure_7];
  const stateFromStores = _require(callback[6]).useStateFromStores(items, () => {
    let joinRequestGuild;
    if (null != closure_0) {
      joinRequestGuild = closure_1_7.getJoinRequestGuild(tmp);
    }
    return joinRequestGuild;
  });
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c5 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              callback = tmp3;
              c4 = 1;
              const inviteKeyForGuildId = closure_2_6.getInviteKeyForGuildId(closure_0);
              if (null != inviteKeyForGuildId) {
                obj1 = callback(callback[7]);
                c2 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.fetchVerificationForm(tmp30, inviteKeyForGuildId);
                return obj1;
              }
              tmp30 = closure_0;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_1_1(false);
            throw closure_3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_1_1(false);
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c4 = 0;
          closure_1_1(false);
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
    })();
  });
  callback = React.useCallback(function() {
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
  const effect = React.useEffect(() => {
    if (null == closure_0) {
      callback(false);
    } else {
      callback(true);
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