// discord_app/modules/icymi/native/NativeICYMIActionCreators.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              if (obj13.icymiEnabled("customScores")) {
                c3 = 1;
                const HTTP = tmp3(tmp23[3]).HTTP;
                const request = { url: constants.GRAVITY_CUSTOM_GUILD_SCORES, body: null, rejectWithError: true };
                let obj1 = { guild_id, channel_scores: null, guild_score: null };
                let mapped;
                if (importDefault != null) {
                  mapped = importDefault.map((channelId) => ({
                    channel_id: channelId.channelId,
                    score: channelId.score,
                  }));
                }
                obj1.channel_scores = mapped;
                obj1.guild_score = guild_score;
                request.body = obj1;
                v2 = 2;
                constants = 1;
                const obj2 = { value: HTTP.put(request), done: false };
                return obj2;
              }
              obj13 = tmp3(tmp23[2]);
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              obj1 = v2(tmp23[5]);
              const obj3 = { key: "GravityGuildScore", content: null };
              const intl = tmp3(tmp23[6]).intl;
              obj3.content = intl.string(tmp3(tmp23[6]).t.CG4Hks);
              obj1.open(obj3);
            } else if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 !== 2) {
              const obj4 = {
                type: "ICYMI_CUSTOM_SCORES_UPDATED",
                guildId: closure_128_0,
                channelScores: closure_128_1,
                guildScore: closure_128_2,
              };
              v2(tmp23[4]).dispatch(obj4);
              const obj9 = v2(tmp23[4]);
              const obj5 = { key: "GravityGuildScore", content: null };
              const intl2 = tmp3(tmp23[6]).intl;
              obj5.content = intl2.string(tmp3(tmp23[6]).t.OMdbs1);
              v2(tmp23[5]).open(obj5);
              c3 = 0;
              const obj11 = v2(tmp23[5]);
            }
            c3 = 0;
            constants = 3;
            obj = { value, done: true };
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
  },
};
