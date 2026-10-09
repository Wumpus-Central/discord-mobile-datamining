// discord_app/modules/game_organization_invites/sendGameOrganizationInvite.tsx
import util from "../../intl/index.native.tsx";
import shared from "../../design/shared.tsx";
import GameOrganizationInviteSendActionCreatorsDefault from "GameOrganizationInviteSendActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_8 = async function _sendGameOrganizationInvite(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  let user = arg2;
  closure_3 = arg3;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp5;
            closure_132_0 = closure_0;
            closure_132_1 = user;
            closure_132_2 = closure_3;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            setSendState(closure_0, user.id, constants.SENDING);
            const AccessibilityAnnouncer3 = shared.AccessibilityAnnouncer;
            const intl3 = util.intl;
            AccessibilityAnnouncer3.announce(intl3.string(util.t.kC3ZRG));
            c7 = 1;
            const _HermesInternal = HermesInternal;
            const combined = "" + closure_0 + ":" + user.id;
            closure_132_3 = combined;
            closure_132_4 = map.get(combined);
            if (null == closure_132_4) {
              c8 = 2;
              c9 = 1;
              const obj6 = {
                value: GameOrganizationInviteSendActionCreatorsDefault.createInvite(
                  closure_1.applicationId,
                  closure_1.gameOrganizationId,
                  user.id,
                ),
                done: false,
              };
              return obj6;
            } else {
              closure_133_1(closure_133_2[6]).sendInvite(closure_132_1.id, closure_132_4);
              c8 = 3;
              c9 = 1;
              const obj3 = closure_133_1(closure_133_2[6]);
            }
          }
        } else {
          if (1 === tmp8) {
            c7 = 0;
            closure_132_5 = closure_6;
            closure_133_4(closure_132_0, closure_132_1.id, closure_133_6.ERROR);
            const AccessibilityAnnouncer = closure_133_0(closure_133_2[4]).AccessibilityAnnouncer;
            const intl = closure_133_0(closure_133_2[5]).intl;
            AccessibilityAnnouncer.announce(intl.string(closure_133_0(closure_133_2[5]).t.fEptJP));
            let tmp34 = closure_132_5 instanceof closure_133_1(closure_133_2[7]);
            if (tmp34) {
              tmp34 = closure_132_5.code === closure_133_5;
            }
            if (tmp34) {
              closure_132_2();
            }
            c9 = 3;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_132_4 = value;
              const result = closure_133_7.set(closure_132_3, closure_132_4);
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_133_7.delete(closure_132_3);
            closure_133_4(closure_132_0, closure_132_1.id, closure_133_6.SENT);
            const AccessibilityAnnouncer2 = closure_133_0(closure_133_2[4]).AccessibilityAnnouncer;
            const intl2 = closure_133_0(closure_133_2[5]).intl;
            AccessibilityAnnouncer2.announce(intl2.string(closure_133_0(closure_133_2[5]).t.PuLLzP));
            c7 = 0;
          }
          c7 = 0;
          c9 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c7 = 0;
        c9 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } catch (tmp51) {
        closure_6 = tmp51;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp51;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
const setSendState = fn(8747).setSendState;
let closure_5 = fn(10452).GAME_ORGANIZATION_INVITE_TOO_MANY_INVITES_ERROR_CODE;
const InviteSendStates = fn(7423).InviteSendStates;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_organization_invites/sendGameOrganizationInvite.tsx");

export default function sendGameOrganizationInvite() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
