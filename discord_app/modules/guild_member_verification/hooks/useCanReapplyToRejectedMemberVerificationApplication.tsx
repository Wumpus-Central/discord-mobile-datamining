// === Module 9341: useCanReapplyToRejectedMemberVerificationApplication ===

// Module 9341 (useCanReapplyToRejectedMemberVerificationApplication)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import updateInvite from "updateInvite";
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx");

export const useCanReapplyToRejectedMemberVerificationApplication = function useCanReapplyToRejectedMemberVerificationApplication(guildId) {
  let _require = guildId;
  const isLoading = callback2(React.useState(true), 2);
  let closure_1 = isLoading[1];
  const items = [handleGatewayJoinRequestUpdate];
  const stateFromStores = _require(callback[6]).useStateFromStores(items, () => {
    let joinRequestGuild;
    if (null != closure_0) {
      joinRequestGuild = outer1_7.getJoinRequestGuild(tmp);
    }
    return joinRequestGuild;
  });
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c5 = 0;
    let c4 = 0;
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
              const callback = tmp3;
              let c4 = 1;
              const inviteKeyForGuildId = outer2_6.getInviteKeyForGuildId(closure_0);
              if (null != inviteKeyForGuildId) {
                let obj1 = callback(callback[7]);
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
            outer1_1(false);
            throw ME;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            outer1_1(false);
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c4 = 0;
          outer1_1(false);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp18) {
          ME = tmp18;
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