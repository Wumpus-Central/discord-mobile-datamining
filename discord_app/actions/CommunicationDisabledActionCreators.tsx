// === Module 12095: CommunicationDisabledActionCreators ===

// Module 12095 (CommunicationDisabledActionCreators)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const size = fn(2);
const result = size.fileFinishedImporting("actions/CommunicationDisabledActionCreators.tsx");

export default {
  setCommunicationDisabledDuration(guildId, id, value, current, arg4, arg5) {
    closure_0 = guildId;
    closure_1 = id;
    asyncGeneratorStep = value;
    closure_3 = current;
    closure_4 = arg4;
    closure_5 = arg5;
    return (async () => {
      if (guildId === 2) {
        guildId = 3;
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
          guildId = 2;
          if (0 === userId) {
            if (arg0 === 1) {
              guildId = 3;
              throw value;
            } else if (arg0 === 2) {
              guildId = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let toISOStringResult = null;
              if (null != duration) {
                const obj2 = guildId(userId[1])();
                toISOStringResult = guildId(userId[1])().add(duration, "s").toISOString();
                const addResult = guildId(userId[1])().add(duration, "s");
              }
              const obj6 = { guildId, userId, communicationDisabledUntilTimestamp: toISOStringResult, duration, reason, location: _location, moderatorReportId };
              userId = 1;
              guildId = 1;
              const obj7 = { value: guildId(userId[2]).setCommunicationDisabledUntil(obj6), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            guildId = 3;
            throw value;
          } else if (arg0 === 2) {
            guildId = 3;
            const obj = { value, done: true };
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
  }
};