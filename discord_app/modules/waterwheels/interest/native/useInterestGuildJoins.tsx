// === Module 19833: useInterestGuildJoins ===

// Module 19833 (useInterestGuildJoins)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5012 */;

const require = fn;
const JoinGuildSources = fn(1072).JoinGuildSources;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestGuildJoins.tsx");

export default function useInterestGuildJoins() {
  return _slicedToArray(noop.useState(() => {
    closure_0 = closure_3(function*(arg0) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          v3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              guild = guild.getGuild(closure_0);
              let joinedAt;
              if (guild != null) {
                joinedAt = guild.joinedAt;
              }
              if (null == joinedAt) {
                const obj5 = { autoNavigate: false, source: constants.WATERWHEELS_INTEREST_SERVERS };
                dependencyMap = 1;
                v3 = 1;
                const obj6 = { value: v3(dependencyMap[6]).joinGuild(closure_0, obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          v3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp9) {
          v3 = tmp;
          throw tmp9;
        }
      }
    });
    const interestGuildJoins = new closure_0(dependencyMap[5]).InterestGuildJoins(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, (arg0) => {
      if (!(arg0 instanceof closure_0(dependencyMap[7]).JoinGuildRefusedError)) {
        const intl = closure_0(dependencyMap[9]).intl;
        closure_0(dependencyMap[8]).presentError(intl.string(closure_1_1(dependencyMap[10]).grYfmA));
        const tmpResult = closure_0(dependencyMap[8]);
      }
    });
    return interestGuildJoins;
  }), 1)[0];
};