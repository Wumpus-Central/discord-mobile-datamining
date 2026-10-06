// === Module 9048: selectAndWaitForVoiceChannelJoin ===

// Module 9048 (selectAndWaitForVoiceChannelJoin)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3;

let obj = function _selectAndWaitForVoiceChannelJoin() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let timeoutMs;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let promise;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            timeoutMs = undefined;
            ({ channelId: c0, timeoutMs } = closure_0);
            if (timeoutMs === undefined) {
              timeoutMs = 10000;
            }
            promise = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const self = this;
            const self2 = this;
            promise = new Promise((arg0, arg1) => {
              let voiceChannelId;
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
            const obj2 = closure_130_0(closure_130_1[2]);
            const voiceChannel = obj2.selectVoiceChannel(c0);
            c4 = 1;
            c5 = 3;
            c6 = 1;
            const obj6 = { value: promise, done: false };
            return obj6;
          }
        } else if (2 === c5) {
          c4 = 0;
          if (closure_3 instanceof closure_130_4) {
            c6 = 3;
            return { value: false, done: true };
          } else {
            throw closure_3;
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
      } catch (tmp23) {
        closure_3 = tmp23;
        if (0 === c4) {
          c6 = 3;
          throw tmp23;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
class JoinTimeoutError extends Error {
}
let result = size.fileFinishedImporting("modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx");

export default function selectAndWaitForVoiceChannelJoin() {
  return obj(...arguments);
};