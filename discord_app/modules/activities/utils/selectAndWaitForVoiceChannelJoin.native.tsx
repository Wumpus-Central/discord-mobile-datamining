import asyncGeneratorStep from "asyncGeneratorStep";
import handleConnectionOpen from "handleConnectionOpen";

function _selectAndWaitForVoiceChannelJoin() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let timeoutMs;
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let promise = tmp3;
              timeoutMs = tmp7;
              let callback;
              timeoutMs = undefined;
              ({ channelId: c0, timeoutMs } = callback);
              if (timeoutMs === undefined) {
                timeoutMs = 10000;
              }
              promise = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              promise = new Promise((arg0, arg1) => {
                let closure_0 = arg0;
                let closure_1 = arg1;
                const timeout = setTimeout(() => {
                  callback2(new c4("Joining voice channel has timed out."));
                }, closure_1);
                const result = tmp28.addConditionalChangeListener(() => {
                  let flag = voiceChannelId.getVoiceChannelId() !== callback;
                  if (!flag) {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(asyncGeneratorStep);
                    callback();
                    flag = false;
                  }
                  return flag;
                });
              });
              obj1 = callback(timeoutMs[2]);
              const voiceChannel = obj1.selectVoiceChannel(callback);
              let c4 = 1;
              c5 = 3;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = promise;
              return obj2;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            if (handleConnectionOpen instanceof c4) {
              c6 = 3;
              return { value: false, done: true };
            } else {
              throw handleConnectionOpen;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 0;
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp28) {
          handleConnectionOpen = tmp28;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp28;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _selectAndWaitForVoiceChannelJoin = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const prototype = function JoinTimeoutError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
let result = require("module_5067").fileFinishedImporting("modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx");

export default function selectAndWaitForVoiceChannelJoin() {
  const self = this;
  const apply = _selectAndWaitForVoiceChannelJoin.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};