// discord_app/modules/frames/FramesActionCreators.native.tsx
import _launchFrameAll from "FramesActionCreators.shared.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/VoiceStateStore.tsx";

function _launchFrameOnNative() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function* (arg0) {
      c1 = 0;
      const obj2 = closure_1_1(table[3]);
      closure_0 = yield obj2.launchFrame(closure_0);
      (function closeVoicePanel() {
        if (currentClientInVoiceChannel.isCurrentClientInVoiceChannel()) {
          callback(table[2])();
        }
      })();
      return closure_0;
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const obj = {};
const merged = Object.assign(_launchFrameAll);
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
const result = require("set").fileFinishedImporting("modules/frames/FramesActionCreators.native.tsx");

export default obj;
