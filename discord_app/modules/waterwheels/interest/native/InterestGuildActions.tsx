// === Module 20193: InterestGuildActions ===

// Module 20193 (InterestGuildActions)
import MemberVerificationTypes from "MemberVerificationTypes" /* 5289 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6854 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5287 */;
import GuildMembershipStore from "GuildMembershipStore" /* 5094 */;

require = fn;
let closure_8 = async function _joinInterestGuild(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_4 = tmp4;
          closure_3 = tmp6;
          closure_131_0 = closure_0;
          closure_131_1 = closure_2;
          closure_131_2 = undefined;
          if (!set.has(closure_0)) {
            if (!member.isMember(closure_0)) {
              request = request.getRequest(closure_0);
              let applicationStatus;
              if (request != null) {
                applicationStatus = request.applicationStatus;
              }
              if (applicationStatus !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
                set.add(closure_0);
                if (importDefault != null) {
                  importDefault();
                }
                c6 = 2;
                const obj6 = { autoNavigate: false, source: constants.WATERWHEELS_INTEREST_SERVERS };
                c7 = 3;
                c8 = 1;
                const obj7 = { value: GuildActionCreatorsDefault.joinGuild(closure_0, obj6), done: false };
                return obj7;
              }
            }
          }
          c8 = 3;
        }
      } else if (1 !== tmp9) {
        if (2 === tmp9) {
          c6 = 1;
          if (!(closure_5 instanceof closure_132_0(closure_132_2[6]).JoinGuildRefusedError)) {
            const intl = closure_132_0(closure_132_2[8]).intl;
            closure_132_0(closure_132_2[7]).presentError(intl.string(closure_132_1(closure_132_2[9]).grYfmA));
            const obj2 = closure_132_0(closure_132_2[7]);
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_132_7.delete(closure_131_0);
          let str = "joined";
          if (!closure_132_5.isMember(closure_131_0)) {
            const request1 = closure_132_4.getRequest(closure_131_0);
            let applicationStatus1;
            if (request1 != null) {
              applicationStatus1 = request1.applicationStatus;
            }
            let str2 = "failed";
            if (applicationStatus1 === closure_132_0(closure_132_2[4]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
              str2 = "pending";
            }
            str = str2;
          }
          closure_131_2 = str;
          if (closure_131_1 != null) {
            tmp27(closure_131_2);
          }
          c8 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c6 = 1;
        }
        c6 = 0;
        closure_132_7.delete(closure_131_0);
        let str3 = "joined";
        if (!closure_132_5.isMember(closure_131_0)) {
          const request2 = closure_132_4.getRequest(closure_131_0);
          let applicationStatus2;
          if (request2 != null) {
            applicationStatus2 = request2.applicationStatus;
          }
          let str4 = "failed";
          if (applicationStatus2 === closure_132_0(closure_132_2[4]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
            str4 = "pending";
          }
          str3 = str4;
        }
        closure_131_2 = str3;
        if (closure_131_1 != null) {
          tmp61(closure_131_2);
        }
      }
      c6 = 0;
      closure_132_7.delete(closure_131_0);
      let str5 = "joined";
      if (!closure_132_5.isMember(closure_131_0)) {
        const request3 = closure_132_4.getRequest(closure_131_0);
        let applicationStatus3;
        if (request3 != null) {
          applicationStatus3 = request3.applicationStatus;
        }
        let str6 = "failed";
        if (applicationStatus3 === closure_132_0(closure_132_2[4]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
          str6 = "pending";
        }
        str5 = str6;
      }
      closure_131_2 = str5;
      if (closure_131_1 != null) {
        tmp81(closure_131_2);
      }
      throw closure_5;
    } catch (tmp97) {
      closure_5 = tmp97;
      if (tmp5 === c6) {
        c8 = tmp3;
        throw tmp97;
      } else if (tmp2 === tmp99) {
        c7 = tmp2;
      } else {
        c7 = tmp;
      }
    }
  }
};
const JoinGuildSources = fn(1072).JoinGuildSources;
const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildActions.tsx");

export function getInterestGuildJoinsInFlight() {
  return Array.from(set);
}
export function joinInterestGuild() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}