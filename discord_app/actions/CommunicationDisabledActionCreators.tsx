// discord_app/actions/CommunicationDisabledActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

const result = require("showTooManyUserGuildsAlert").fileFinishedImporting("actions/CommunicationDisabledActionCreators.tsx");

export default {
  setCommunicationDisabledDuration(outer1_0, c1, value, current) {
    let closure_0 = outer1_0;
    let closure_1 = c1;
    const callback = value;
    let closure_3 = current;
    let closure_4 = arg4;
    let closure_5 = arg5;
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
              if (null != outer1_2) {
                let obj1 = v0(3943)();
                toISOStringResult = obj1.add(tmp21, "s").toISOString();
                const addResult = obj1.add(tmp21, "s");
              }
              obj1 = { guildId: null, userId: null, communicationDisabledUntilTimestamp: null, duration: null, reason: null, location: null, moderatorReportId: null };
              obj1[0] = v0;
              obj1[1] = dependencyMap;
              obj1[2] = toISOStringResult;
              obj1[3] = outer1_2;
              obj1[4] = outer1_3;
              obj1[5] = outer1_4;
              obj1[6] = outer1_5;
              dependencyMap = 1;
              v0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = v0(5293).setCommunicationDisabledUntil(obj1);
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