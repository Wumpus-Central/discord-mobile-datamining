// === Module 11804: _createGuildFromTemplate ===

// Module 11804 (_createGuildFromTemplate)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function _createGuildFromTemplate() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c9 = 0;
    c10 = 0;
    c8 = 0;
    return (function*(arg0, body) {
      if (c10 === 2) {
        c10 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw body;
            } else if (arg0 === 2) {
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_6 = tmp3;
              closure_5 = tmp7;
              c8 = 1;
              obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
              obj1[0] = constants.GUILDS;
              const obj2 = { name: null, icon: null, channels: null, system_channel_id: null, roles: null, guild_template_code: null, staff_only: null };
              obj2[0] = callback;
              obj2[1] = callback2;
              ({ channels: obj10[2], system_channel_id: obj10[3], roles: obj10[4], code: obj10[5] } = dependencyMap);
              obj2[6] = constants;
              obj1[1] = obj2;
              const obj3 = { event: null, properties: null };
              obj3[0] = callback(503).NetworkActionNames.GUILD_CREATE;
              const obj4 = { template_name: null, is_community_intent: null };
              obj4[0] = dependencyMap.id;
              obj4[1] = closure_3;
              obj3[1] = obj4;
              obj1[2] = obj3;
              c9 = 2;
              c10 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = callback2(4666).post(obj1);
              return obj5;
            }
          } else if (1 === tmp7) {
            c8 = 0;
            callback = closure_7;
            const aPIError = new callback(4343).APIError(callback);
            throw aPIError;
          } else if (arg0 === 1) {
            c10 = 3;
            throw body;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            c8 = 0;
            c10 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp22) {
          closure_7 = tmp22;
          if (tmp4 === c8) {
            c10 = tmp2;
            throw tmp22;
          } else {
            c9 = tmp;
          }
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/create_guild/CreateGuildActionCreators.tsx");

export default {
  createGuildFromTemplate(c4, c5, id, c3, closure_1_9) {
    const self = this;
    const apply = _createGuildFromTemplate.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};