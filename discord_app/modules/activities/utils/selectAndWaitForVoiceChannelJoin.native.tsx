// === Module 9545: selectAndWaitForVoiceChannelJoin ===

// Module 9545 (selectAndWaitForVoiceChannelJoin)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

let closure_5 = async function _selectAndWaitForVoiceChannelJoin(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ channelId: closure_129_0, timeoutMs } = closure_0);
          if (timeoutMs === undefined) {
            timeoutMs = 10000;
          }
          closure_129_1 = timeoutMs;
          closure_129_2 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          const promise = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            const timeout = setTimeout(() => {
              closure_1(new c4("Joining voice channel has timed out."));
            }, closure_1);
            const result = closure_1_3.addConditionalChangeListener(() => {
              let flag = voiceChannelId.getVoiceChannelId() !== closure_2_0;
              if (!flag) {
                const _clearTimeout = clearTimeout;
                clearTimeout(closure_2);
                closure_0();
                flag = false;
              }
              return flag;
            });
          });
          closure_129_2 = promise;
          obj1 = closure_130_0(closure_130_1[2]);
          const voiceChannel = obj1.selectVoiceChannel(closure_129_0);
          c4 = 1;
          c5 = 3;
          c6 = 1;
          const obj2 = { value: closure_129_2, done: false };
          return obj2;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_3 = closure_3;
        if (closure_129_3 instanceof closure_130_4) {
          c6 = 3;
          return { value: false, done: true };
        } else {
          throw closure_129_3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        c6 = 3;
        return { value: true, done: true };
      }
    } catch (tmp28) {
      closure_3 = tmp28;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp28;
      } else {
        c5 = tmp;
      }
    }
  }
};
const prototype = function JoinTimeoutError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx");

export default function selectAndWaitForVoiceChannelJoin() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};