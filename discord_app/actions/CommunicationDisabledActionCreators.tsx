// discord_app/actions/CommunicationDisabledActionCreators.tsx
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

const size = fn(2);
const result = size.fileFinishedImporting("actions/CommunicationDisabledActionCreators.tsx");

export default {
  setCommunicationDisabledDuration(arg0, id, value, current, arg4, arg5) {
    closure_0 = arg0;
    closure_1 = id;
    asyncGeneratorStep = value;
    closure_3 = current;
    closure_4 = arg4;
    closure_5 = arg5;
    return (async (arg0, value) => {
      if (guildId === 2) {
        guildId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          guildId = 2;
          if (0 === userId) {
            if (arg0 === 1) {
              guildId = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let toISOStringResult = null;
              if (null != duration) {
                let obj1 = guildId(userId[1])();
                toISOStringResult = obj1.add(tmp20, "s").toISOString();
                const addResult = obj1.add(tmp20, "s");
              }
              obj1 = {
                guildId,
                userId,
                communicationDisabledUntilTimestamp: toISOStringResult,
                duration,
                reason,
                location: _location,
                moderatorReportId,
              };
              userId = 1;
              guildId = 1;
              const obj2 = { value: guildId(userId[2]).setCommunicationDisabledUntil(obj1), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            guildId = 3;
            throw value;
          } else if (arg0 === 2) {
            guildId = 3;
            obj = { value, done: true };
            return obj;
          } else {
            guildId = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          guildId = tmp;
          throw tmp15;
        }
      }
    })();
  },
};
