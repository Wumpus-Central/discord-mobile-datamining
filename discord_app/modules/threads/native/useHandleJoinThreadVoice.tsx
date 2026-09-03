// === Module 7657: useHandleJoinThreadVoice ===

// Module 7657 (useHandleJoinThreadVoice)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "storeThread" /* 4122 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/threads/native/useHandleJoinThreadVoice.tsx");

export default function useHandleJoinThreadVoice(arg0) {
  closure_0 = arg0;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp2;
            let guildId = tmp5;
            guildId = undefined;
            guildId = closure_1_0.getGuildId();
            if (null != guildId) {
              let obj8 = closure_1_0(c2[2]);
              if (obj8.shouldShowMembershipVerificationGate(guildId)) {
                c2 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_0(c2[4])(c2[3], c2.paths);
                return obj1;
              }
            }
            c2 = 2;
            c3 = 1;
            let obj2 = { value: null, done: false };
            obj2[0] = closure_1_1(c2[5]).unarchiveThreadIfNecessary(closure_1_0.id);
            return obj2;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c3 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1.openMemberVerificationModal(guildId);
            return obj4;
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else if (!closure_1_4.hasJoined(guildId.id)) {
              obj2 = closure_1_1(c2[5]);
              c2 = 3;
              c3 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = obj2.joinThread(guildId, "Join Voice");
              return obj6;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            arg1.openGuildVoiceModal(guildId, "Thread Header");
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
          c2 = 4;
          c3 = 1;
          obj8 = { value: null, done: false };
          obj8[0] = closure_1_0(c2[4])(c2[6], c2.paths);
          return obj8;
        }
      } catch (tmp29) {
        c3 = tmp;
        throw tmp29;
      }
    }
  });
};