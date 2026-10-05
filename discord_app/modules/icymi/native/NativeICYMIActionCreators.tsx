// discord_app/modules/icymi/native/NativeICYMIActionCreators.tsx
import Constants from "../../../Constants.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let constants, guild_score;

const Endpoints = Constants.Endpoints;
let obj = {
  customScoreGuild(arg0) {
    let guild_id;
    ({ guildId: require, channelScores: importDefault, guildScore: dependencyMap } = arg0);
    return (async () => {
      let closure_0;
      let closure_2;
      let intl;
      let intl2;
      let mapped;
      let obj4;
      let v1;
      if (constants === 2) {
        constants = 3;
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
        let c3;
        try {
          constants = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj11 = tmp(guild_score[2]);
              if (obj11.icymiEnabled("customScores")) {
                c3 = 1;
                const HTTP = tmp(guild_score[3]).HTTP;
                const request = { url: constants.GRAVITY_CUSTOM_GUILD_SCORES, body: obj4, rejectWithError: true };
                obj4 = { guild_id: require, channel_scores: mapped, guild_score: dependencyMap };
                mapped = undefined;
                const put = HTTP.put;
                if (importDefault != null) {
                  mapped = importDefault.map((channelId) => ({
                    channel_id: channelId.channelId,
                    score: channelId.score,
                  }));
                }
                v1 = 2;
                constants = 1;
                const obj5 = { value: put(request), done: false };
                return obj5;
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            const obj6 = { key: "GravityGuildScore", content: intl.string(tmp(guild_score[6]).t.CG4Hks) };
            const open = v1(guild_score[5]).open;
            const tmp9 = v1(guild_score[5]);
            intl = tmp(guild_score[6]).intl;
            open(obj6);
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            constants = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const obj7 = {
              type: "ICYMI_CUSTOM_SCORES_UPDATED",
              guildId: closure_128_0,
              channelScores: closure_128_1,
              guildScore: closure_128_2,
            };
            const obj8 = v1(guild_score[4]);
            obj8.dispatch(obj7);
            const obj9 = { key: "GravityGuildScore", content: intl2.string(tmp(guild_score[6]).t.OMdbs1) };
            const open2 = v1(guild_score[5]).open;
            const tmp37 = v1(guild_score[5]);
            intl2 = tmp(guild_score[6]).intl;
            open2(obj9);
            c3 = 0;
          }
          constants = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp21) {
          guild_score = tmp21;
          if (0 === c3) {
            constants = 3;
            throw tmp21;
          } else {
            v1 = 1;
          }
        }
      }
    })();
  },
};
const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIActionCreators.tsx");

export default obj;
