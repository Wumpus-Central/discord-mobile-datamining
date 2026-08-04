// discord_app/modules/frames/FramesActionCreators.native.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import updateVoiceState from "updateVoiceState";
import merged from "_launchFrame";

function _launchFrameOnNative() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c1 = 0;
              let obj1 = outer1_1(table[3]);
              table = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.launchFrame(closure_0);
              return obj1;
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
            (function closeVoicePanel() {
              if (currentClientInVoiceChannel.isCurrentClientInVoiceChannel()) {
                callback(table[2])();
              }
            })();
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const _launchFrameOnNative = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let obj = {};
obj.launchFrame = function launchFrameOnNative() {
  const self = this;
  const apply = _launchFrameOnNative.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
const result = require("closeVoicePanels").fileFinishedImporting("modules/frames/FramesActionCreators.native.tsx");

export default obj;