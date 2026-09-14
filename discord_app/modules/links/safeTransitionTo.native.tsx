// === Module 7350: safeTransitionTo ===

// Module 7350 (safeTransitionTo)
import router_utils from "router_utils" /* 1100 */;
import LinkUtils from "LinkUtils" /* 4790 */;
import DiceRollActionCreators from "DiceRollActionCreators" /* 7351 */;
import isAccessibleChannelOrThreadPathDefault from "isAccessibleChannelOrThreadPath" /* 7352 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
let closure_6 = async function _safeTransitionTo(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c4 = 0;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = undefined;
          let guild;
          let channelId2;
          const tryParseDiceRollLinkResult = LinkUtils.tryParseDiceRollLink(closure_0);
          if (null != tryParseDiceRollLinkResult) {
            const channelId = tryParseDiceRollLinkResult.channelId;
            ({ guildId, diceCount, diceSides } = tryParseDiceRollLinkResult);
            DiceRollActionCreators.startDiceRoll(channelId, diceCount, diceSides);
            router_utils.transitionTo(Routes.CHANNEL(guildId, channelId), closure_1);
            c6 = 3;
            const obj5 = { value: undefined, done: true };
            return obj5;
          } else {
            const tryParseChannelPathResult = LinkUtils.tryParseChannelPath(closure_0);
            closure_131_2 = tryParseChannelPathResult;
            if (null != tryParseChannelPathResult) {
              c5 = 1;
              c6 = 1;
              const obj6 = { value: isAccessibleChannelOrThreadPathDefault(tryParseChannelPathResult), done: false };
              return obj6;
            }
          }
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else if (!value) {
            const obj11 = { title: null, body: null, confirmText: null };
            const intl = closure_132_0(closure_132_2[8]).intl;
            obj11.title = intl.string(closure_132_0(closure_132_2[8]).t.r0DLNm);
            const intl2 = closure_132_0(closure_132_2[8]).intl;
            obj11.body = intl2.string(closure_132_0(closure_132_2[8]).t["6Y0JlN"]);
            const intl3 = closure_132_0(closure_132_2[8]).intl;
            obj11.confirmText = intl3.string(closure_132_0(closure_132_2[8]).t.BddRzS);
            closure_132_1(closure_132_2[7]).show(obj11);
            c6 = 3;
            const obj3 = closure_132_1(closure_132_2[7]);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (!value) {
            closure_132_0(closure_132_2[5]).transitionTo(closure_131_0, closure_131_1);
            const obj = closure_132_0(closure_132_2[5]);
          }
        }
        c6 = 3;
        const obj12 = { value, done: true };
        return obj12;
      }
      if (null != closure_131_2) {
        if (null != closure_131_2.guildId) {
          guild = closure_132_4.getGuild(closure_131_2.guildId);
          channelId2 = closure_131_2.channelId;
          if (null != guild) {
            if (obj7.isModeratorReportOrPostChannelId(channelId2)) {
              const obj15 = { title: null, body: null, confirmText: null };
              const intl4 = closure_132_0(closure_132_2[8]).intl;
              obj15.title = intl4.string(closure_132_1(closure_132_2[10]).iCIEAV);
              const intl5 = closure_132_0(closure_132_2[8]).intl;
              obj15.body = intl5.string(closure_132_1(closure_132_2[10]).bvzo6p);
              const intl6 = closure_132_0(closure_132_2[8]).intl;
              obj15.confirmText = intl6.string(closure_132_0(closure_132_2[8]).t.BddRzS);
              closure_132_1(closure_132_2[7]).show(obj15);
              c6 = 3;
              const obj16 = { value: undefined, done: true };
              return obj16;
            }
            obj7 = closure_132_0(closure_132_2[9]);
          }
        }
      }
      closure_2 = closure_131_2;
      if (closure_131_2 == null) {
        closure_2 = { guildId: "r" };
      }
      c5 = 2;
      c6 = 1;
      const obj17 = { value: closure_132_1(closure_132_2[11]).maybePerformRoleSubscriptionUpsellRedirect(closure_2), done: false };
      return obj17;
    } catch (tmp76) {
      c6 = tmp;
      throw tmp76;
    }
  }
};
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/links/safeTransitionTo.native.tsx");

export default function safeTransitionTo() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};