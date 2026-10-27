// discord_app/modules/links/safeTransitionTo.native.tsx
import router_utils from "../routing/router_utils.tsx";
import LinkUtils from "LinkUtils.tsx";
import DiceRollActionCreators from "../dice_roll/DiceRollActionCreators.tsx";
import isAccessibleChannelOrThreadPathDefault from "isAccessibleChannelOrThreadPath.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GuildStore from "../../stores/GuildStore.tsx";

require = fn;
let closure_6 = async function _safeTransitionTo(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c4 = 0;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = undefined;
          guild = undefined;
          let channelId2;
          const tryParseDiceRollLinkResult = LinkUtils.tryParseDiceRollLink(closure_0);
          if (null != tryParseDiceRollLinkResult) {
            const channelId = tryParseDiceRollLinkResult.channelId;
            ({ guildId, diceCount, diceSides } = tryParseDiceRollLinkResult);
            DiceRollActionCreators.startDiceRoll(channelId, diceCount, diceSides);
            router_utils.transitionTo(Routes.CHANNEL(guildId, channelId), closure_1);
            c6 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else {
            const tryParseChannelPathResult = LinkUtils.tryParseChannelPath(closure_0);
            closure_131_2 = tryParseChannelPathResult;
            if (null != tryParseChannelPathResult) {
              c5 = 1;
              c6 = 1;
              const obj7 = { value: isAccessibleChannelOrThreadPathDefault(tryParseChannelPathResult), done: false };
              return obj7;
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
            const obj10 = { value, done: true };
            return obj10;
          } else if (!value) {
            const obj12 = { title: null, body: null, confirmText: null };
            const intl = closure_132_0(closure_132_2[8]).intl;
            obj12.title = intl.string(closure_132_0(closure_132_2[8]).t.r0DLNm);
            const intl2 = closure_132_0(closure_132_2[8]).intl;
            obj12.body = intl2.string(closure_132_0(closure_132_2[8]).t["6Y0JlN"]);
            const intl3 = closure_132_0(closure_132_2[8]).intl;
            obj12.confirmText = intl3.string(closure_132_0(closure_132_2[8]).t.BddRzS);
            closure_132_1(closure_132_2[7]).show(obj12);
            c6 = 3;
            const obj4 = closure_132_1(closure_132_2[7]);
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (!value) {
            let hash;
            if (closure_131_1 != null) {
              hash = closure_131_1.hash;
            }
            let tmp9 = null != hash;
            if (tmp9) {
              let channelId1;
              if (closure_131_2 != null) {
                channelId1 = closure_131_2.channelId;
              }
              tmp9 = null != channelId1;
            }
            if (tmp9) {
              tmp9 = null == closure_131_2.threadId;
            }
            if (tmp9) {
              tmp9 = null == closure_131_2.messageId;
            }
            if (tmp9) {
              closure_132_0(closure_132_2[12]).queueFrameDeepLink(closure_131_2.channelId, closure_131_1.hash);
              const obj = closure_132_0(closure_132_2[12]);
            }
            closure_132_0(closure_132_2[5]).transitionTo(closure_131_0, closure_131_1);
            const obj2 = closure_132_0(closure_132_2[5]);
          }
        }
        c6 = 3;
        const obj13 = { value, done: true };
        return obj13;
      }
      if (null != closure_131_2) {
        if (null != closure_131_2.guildId) {
          guild = closure_132_4.getGuild(closure_131_2.guildId);
          channelId2 = closure_131_2.channelId;
          if (null != guild) {
            if (obj8.isModeratorReportOrPostChannelId(channelId2)) {
              const obj16 = { title: null, body: null, confirmText: null };
              const intl4 = closure_132_0(closure_132_2[8]).intl;
              obj16.title = intl4.string(closure_132_1(closure_132_2[10]).iCIEAV);
              const intl5 = closure_132_0(closure_132_2[8]).intl;
              obj16.body = intl5.string(closure_132_1(closure_132_2[10]).bvzo6p);
              const intl6 = closure_132_0(closure_132_2[8]).intl;
              obj16.confirmText = intl6.string(closure_132_0(closure_132_2[8]).t.BddRzS);
              closure_132_1(closure_132_2[7]).show(obj16);
              c6 = 3;
              const obj17 = { value: undefined, done: true };
              return obj17;
            }
            obj8 = closure_132_0(closure_132_2[9]);
          }
        }
      }
      closure_2 = closure_131_2;
      if (closure_131_2 == null) {
        closure_2 = { guildId: "rejectWithError" };
      }
      c5 = 2;
      c6 = 1;
      const obj18 = {
        value: closure_132_1(closure_132_2[11]).maybePerformRoleSubscriptionUpsellRedirect(closure_2),
        done: false,
      };
      return obj18;
    } catch (tmp93) {
      c6 = tmp;
      throw tmp93;
    }
  }
};
const Routes = fn(1084).Routes;
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
}
