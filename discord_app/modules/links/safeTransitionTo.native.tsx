// === Module 7249: _safeTransitionTo ===

// Module 7249 (_safeTransitionTo)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import { Routes } from "ME" /* 676 */;

const require = arg1;
function _safeTransitionTo() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let channelId = 0;
              let guild = tmp2;
              closure_2 = undefined;
              guild = undefined;
              channelId = undefined;
              const tryParseDiceRollLinkResult = callback(closure_1_2[3]).tryParseDiceRollLink(callback);
              if (null != tryParseDiceRollLinkResult) {
                channelId = tryParseDiceRollLinkResult.channelId;
                ({ guildId, diceCount, diceSides } = tryParseDiceRollLinkResult);
                callback(closure_1_2[4]).startDiceRoll(channelId, diceCount, diceSides);
                const obj13 = callback(closure_1_2[4]);
                callback(closure_1_2[5]).transitionTo(c5.CHANNEL(guildId, channelId), tmp83);
                c6 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = undefined;
                return obj1;
              } else {
                const tryParseChannelPathResult = callback(closure_1_2[3]).tryParseChannelPath(tmp82);
                closure_2 = tryParseChannelPathResult;
                if (null != tryParseChannelPathResult) {
                  c5 = 1;
                  c6 = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = callback2(closure_1_2[6])(tryParseChannelPathResult);
                  return obj2;
                }
                const obj19 = callback(closure_1_2[3]);
              }
              const obj18 = callback(closure_1_2[3]);
              tmp82 = callback;
              tmp83 = callback2;
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else if (!arg1) {
                obj2 = callback2(closure_2[7]);
                const obj4 = { title: null, body: null, confirmText: null };
                const intl = callback(closure_2[8]).intl;
                obj4[0] = intl.string(callback(closure_2[8]).t.r0DLNm);
                const intl2 = callback(closure_2[8]).intl;
                obj4[1] = intl2.string(callback(closure_2[8]).t["6Y0JlN"]);
                const intl3 = callback(closure_2[8]).intl;
                obj4[2] = intl3.string(callback(closure_2[8]).t.BddRzS);
                obj2.show(obj4);
                c6 = 3;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (!arg1) {
                obj = callback(closure_2[5]);
                obj.transitionTo(callback, callback2);
              }
            }
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
          if (null != closure_2) {
            if (null != closure_2.guildId) {
              guild = channelId.getGuild(closure_2.guildId);
              channelId = closure_2.channelId;
              if (null != guild) {
                let obj6 = callback(closure_2[9]);
                if (obj6.isModeratorReportOrPostChannelId(channelId)) {
                  obj6 = { title: null, body: null, confirmText: null };
                  const intl4 = callback(closure_2[8]).intl;
                  obj6[0] = intl4.string(callback2(closure_2[10]).iCIEAV);
                  const intl5 = callback(closure_2[8]).intl;
                  obj6[1] = intl5.string(callback2(closure_2[10]).bvzo6p);
                  const intl6 = callback(closure_2[8]).intl;
                  obj6[2] = intl6.string(callback(closure_2[8]).t.BddRzS);
                  callback2(closure_2[7]).show(obj6);
                  c6 = 3;
                  let obj7 = { value: null, done: true };
                  obj7[0] = undefined;
                  return obj7;
                }
              }
            }
          }
          obj7 = callback2(closure_2[11]);
          if (closure_2 == null) {
            closure_2 = { guildId: "r" };
          }
          c5 = 2;
          c6 = 1;
          const obj8 = { value: null, done: false };
          obj8[0] = obj7.maybePerformRoleSubscriptionUpsellRedirect(closure_2);
          return obj8;
        } catch (tmp76) {
          c6 = tmp;
          throw tmp76;
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/links/safeTransitionTo.native.tsx");

export default function safeTransitionTo() {
  const self = this;
  const apply = _safeTransitionTo.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};