// === Module 11467: CommunicationDisabledActionCreators ===

// Module 11467 (CommunicationDisabledActionCreators)
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let _asyncToGenerator = _asyncToGenerator_mod;
let obj = {
  setCommunicationDisabledDuration(guildId, id, value, current, arg4, arg5) {
    let closure_0 = guildId;
    let closure_1 = id;
    _asyncToGenerator = value;
    let closure_3 = current;
    let closure_4 = arg4;
    let closure_5 = arg5;
    return (async () => {
      let userId;
      if (guildId === 2) {
        guildId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
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
              if (null != _asyncToGenerator) {
                const obj2 = guildId(userId[1])();
                const addResult = obj2.add(_asyncToGenerator, "s");
                toISOStringResult = addResult.toISOString();
              }
              const obj6 = { guildId, userId, communicationDisabledUntilTimestamp: toISOStringResult, duration: _asyncToGenerator, reason, location: _location, moderatorReportId };
              const obj4 = guildId(userId[2]);
              userId = 1;
              guildId = 1;
              const obj7 = { value: obj4.setCommunicationDisabledUntil(obj6), done: false };
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          guildId = 3;
          throw tmp14;
        }
      }
    })();
  }
};
const result = size.fileFinishedImporting("actions/CommunicationDisabledActionCreators.tsx");

export default obj;