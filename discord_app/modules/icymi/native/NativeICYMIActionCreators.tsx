// === Module 16814: NativeICYMIActionCreators ===

// Module 16814 (NativeICYMIActionCreators)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIActionCreators.tsx");

export default {
  customScoreGuild(arg0) {
    ({ guildId: require, channelScores: importDefault, guildScore: dependencyMap } = arg0);
    return (async () => {
      if (constants === 2) {
        constants = 3;
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
          constants = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              if (obj13.icymiEnabled("customScores")) {
                c3 = 1;
                const HTTP = tmp3(tmp23[3]).HTTP;
                const request = { url: constants.GRAVITY_CUSTOM_GUILD_SCORES, body: null, rejectWithError: true };
                const obj5 = { guild_id, channel_scores: null, guild_score: null };
                let mapped;
                if (importDefault != null) {
                  mapped = importDefault.map((channelId) => ({ channel_id: channelId.channelId, score: channelId.score }));
                }
                obj5.channel_scores = mapped;
                obj5.guild_score = guild_score;
                request.body = obj5;
                v2 = 2;
                constants = 1;
                const obj6 = { value: HTTP.put(request), done: false };
                return obj6;
              }
              obj13 = tmp3(tmp23[2]);
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              const obj7 = { key: "GravityGuildScore", content: null };
              const intl = tmp3(tmp23[6]).intl;
              obj7.content = intl.string(tmp3(tmp23[6]).t.CG4Hks);
              v2(tmp23[5]).open(obj7);
              const obj2 = v2(tmp23[5]);
            } else if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 !== 2) {
              const obj8 = { type: "ICYMI_CUSTOM_SCORES_UPDATED", guildId: closure_128_0, channelScores: closure_128_1, guildScore: closure_128_2 };
              v2(tmp23[4]).dispatch(obj8);
              const obj9 = v2(tmp23[4]);
              const obj10 = { key: "GravityGuildScore", content: null };
              const intl2 = tmp3(tmp23[6]).intl;
              obj10.content = intl2.string(tmp3(tmp23[6]).t.OMdbs1);
              v2(tmp23[5]).open(obj10);
              c3 = 0;
              const obj11 = v2(tmp23[5]);
            }
            c3 = 0;
            constants = 3;
            const obj = { value, done: true };
            return obj;
          }
          constants = 3;
        } catch (tmp23) {
          if (tmp4 === c3) {
            constants = tmp2;
            throw tmp23;
          } else {
            v2 = tmp;
          }
        }
      }
    })();
  }
};