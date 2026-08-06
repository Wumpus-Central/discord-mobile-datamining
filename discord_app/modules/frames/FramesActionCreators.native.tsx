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
      let c1 = 0;
      const obj2 = outer1_1(table[3]);
      closure_0 = yield obj2.launchFrame(closure_0);
      (function closeVoicePanel() {
        if (currentClientInVoiceChannel.isCurrentClientInVoiceChannel()) {
          callback(table[2])();
        }
      })();
      return closure_0;
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
const obj = {};
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