// === Module 15788: ? ===

// Module 15788
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/native/NativeICYMIActionCreators.tsx");

export default {
  customScoreGuild(arg0) {
    ({ guildId: require, channelScores: importDefault, guildScore: dependencyMap } = arg0);
    return callback(function*() {
      if (constants === 2) {
        constants = 3;
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
          constants = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp3;
              if (obj13.icymiEnabled("customScores")) {
                c3 = 1;
                const HTTP = closure_1_0(closure_1_2[3]).HTTP;
                obj1 = { url: null, body: null, rejectWithError: true };
                obj1[0] = constants.GRAVITY_CUSTOM_GUILD_SCORES;
                const obj2 = { guild_id: null, channel_scores: null, guild_score: null };
                obj2[0] = closure_1_0;
                let mapped;
                if (v0 != null) {
                  mapped = v0.map((channelId) => ({ channel_id: channelId.channelId, score: channelId.score }));
                }
                obj2[1] = mapped;
                obj2[2] = closure_1_2;
                obj1[1] = obj2;
                v0 = 2;
                constants = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.put(obj1);
                return obj3;
              }
              obj13 = closure_1_0(closure_1_2[2]);
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              obj1 = v0(closure_1_2[5]);
              const obj4 = { key: "GravityGuildScore", content: null };
              const intl = closure_1_0(closure_1_2[6]).intl;
              obj4[1] = intl.string(closure_1_0(closure_1_2[6]).t.CG4Hks);
              obj1.open(obj4);
            } else if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              const obj5 = { type: "ICYMI_CUSTOM_SCORES_UPDATED", guildId: null, channelScores: null, guildScore: null };
              obj5[1] = closure_0;
              obj5[2] = v0;
              obj5[3] = closure_2;
              v0(closure_1_2[4]).dispatch(obj5);
              const obj9 = v0(closure_1_2[4]);
              const obj6 = { key: "GravityGuildScore", content: null };
              const intl2 = closure_1_0(closure_1_2[6]).intl;
              obj6[1] = intl2.string(closure_1_0(closure_1_2[6]).t.OMdbs1);
              v0(closure_1_2[5]).open(obj6);
              c3 = 0;
              const obj11 = v0(closure_1_2[5]);
            }
            c3 = 0;
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          constants = 3;
        } catch (tmp23) {
          closure_2 = tmp23;
          if (tmp4 === c3) {
            constants = tmp2;
            throw tmp23;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
  }
};