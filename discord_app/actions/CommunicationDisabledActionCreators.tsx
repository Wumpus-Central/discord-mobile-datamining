// discord_app/actions/CommunicationDisabledActionCreators.tsx
import closure_2 from "../../_runtime/00005_asyncGeneratorStep.js";

const result = require("set").fileFinishedImporting("actions/CommunicationDisabledActionCreators.tsx");

export default {
  setCommunicationDisabledDuration(closure_1_0, c1, value, current) {
    closure_0 = closure_1_0;
    closure_1 = c1;
    const callback = value;
    closure_3 = current;
    closure_4 = arg4;
    closure_5 = arg5;
    return callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let toISOStringResult = null;
              if (null != closure_1_2) {
                obj1 = v0(4044)();
                toISOStringResult = obj1.add(tmp21, "s").toISOString();
                const addResult = obj1.add(tmp21, "s");
              }
              obj1 = { guildId: null, userId: null, communicationDisabledUntilTimestamp: null, duration: null, reason: null, location: null, moderatorReportId: null };
              obj1[0] = v0;
              obj1[1] = dependencyMap;
              obj1[2] = toISOStringResult;
              obj1[3] = closure_1_2;
              obj1[4] = closure_1_3;
              obj1[5] = closure_1_4;
              obj1[6] = closure_1_5;
              dependencyMap = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = v0(5422).setCommunicationDisabledUntil(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          v0 = tmp;
          throw tmp15;
        }
      }
    })();
  }
};