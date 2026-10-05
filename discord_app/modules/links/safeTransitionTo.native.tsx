// === Module 6750: safeTransitionTo ===

// Module 6750 (safeTransitionTo)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import LinkUtils from "LinkUtils" /* 5044 */;
import DiceRollActionCreators from "DiceRollActionCreators" /* 6751 */;
import isAccessibleChannelOrThreadPathDefault from "isAccessibleChannelOrThreadPath" /* 6752 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

let c5, c6;

let obj = function _safeTransitionTo() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_3;
    let diceCount;
    let diceSides;
    let guildId;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let c2;
        let guild;
        let channelId2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let c4 = 0;
            c2 = undefined;
            guild = undefined;
            channelId2 = undefined;
            const obj15 = LinkUtils;
            const tryParseDiceRollLinkResult = obj15.tryParseDiceRollLink(closure_0);
            if (null != tryParseDiceRollLinkResult) {
              const channelId = tryParseDiceRollLinkResult.channelId;
              ({ guildId, diceCount, diceSides } = tryParseDiceRollLinkResult);
              const obj10 = DiceRollActionCreators;
              obj10.startDiceRoll(channelId, diceCount, diceSides);
              const obj11 = router_utils;
              obj11.transitionTo(Routes.CHANNEL(guildId, channelId), closure_1);
              c6 = 3;
              const obj4 = { value: undefined, done: true };
              return obj4;
            } else {
              const obj16 = LinkUtils;
              const tryParseChannelPathResult = obj16.tryParseChannelPath(closure_0);
              c2 = tryParseChannelPathResult;
              if (null != tryParseChannelPathResult) {
                c5 = 1;
                c6 = 1;
                const obj5 = { value: isAccessibleChannelOrThreadPathDefault(tryParseChannelPathResult), done: false };
                return obj5;
              }
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else if (!value) {
              const obj8 = { title: intl.string(closure_132_0(closure_132_2[8]).t.r0DLNm), body: intl2.string(closure_132_0(closure_132_2[8]).t["6Y0JlN"]), confirmText: intl3.string(closure_132_0(closure_132_2[8]).t.BddRzS) };
              const show = closure_132_1(closure_132_2[7]).show;
              const tmp15 = closure_132_1(closure_132_2[7]);
              intl = closure_132_0(closure_132_2[8]).intl;
              intl2 = closure_132_0(closure_132_2[8]).intl;
              intl3 = closure_132_0(closure_132_2[8]).intl;
              show(obj8);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else if (!value) {
            obj = closure_132_0(closure_132_2[5]);
            obj.transitionTo(closure_0, closure_1);
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
        if (null != c2) {
          if (null != c2.guildId) {
            guild = closure_132_4.getGuild(c2.guildId);
            channelId2 = c2.channelId;
            if (null != guild) {
              const obj6 = closure_132_0(closure_132_2[9]);
              if (obj6.isModeratorReportOrPostChannelId(channelId2)) {
                const obj12 = { title: intl4.string(closure_132_1(closure_132_2[10]).iCIEAV), body: intl5.string(closure_132_1(closure_132_2[10]).bvzo6p), confirmText: intl6.string(closure_132_0(closure_132_2[8]).t.BddRzS) };
                const show2 = closure_132_1(closure_132_2[7]).show;
                const tmp57 = closure_132_1(closure_132_2[7]);
                intl4 = closure_132_0(closure_132_2[8]).intl;
                intl5 = closure_132_0(closure_132_2[8]).intl;
                intl6 = closure_132_0(closure_132_2[8]).intl;
                show2(obj12);
                c6 = 3;
                const obj13 = { value: undefined, done: true };
                return obj13;
              }
            }
          }
        }
        let closure_2 = c2;
        const maybePerformRoleSubscriptionUpsellRedirect = closure_132_1(closure_132_2[11]).maybePerformRoleSubscriptionUpsellRedirect;
        const tmp51 = closure_132_1(closure_132_2[11]);
        if (c2 == null) {
          closure_2 = { guildId: "r" };
        }
        c5 = 2;
        c6 = 1;
        const obj14 = { value: maybePerformRoleSubscriptionUpsellRedirect(closure_2), done: false };
        return obj14;
      } catch (tmp78) {
        c6 = 3;
        throw tmp78;
      }
    }
  });
  return obj(...arguments);
};
const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/links/safeTransitionTo.native.tsx");

export default function safeTransitionTo() {
  return obj(...arguments);
};