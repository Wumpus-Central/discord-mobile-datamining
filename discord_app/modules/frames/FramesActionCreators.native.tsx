// discord_app/modules/frames/FramesActionCreators.native.tsx
import _launchFrameAll from "FramesActionCreators.shared.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

let closure_5 = async function _launchFrameOnNative() {
  await _launchFrameAll.launchFrame(closure_0);
  closure_129_0 = value;
  (function closeVoicePanel() {
    if (currentClientInVoiceChannel.isCurrentClientInVoiceChannel()) {
      closure_1_0(closure_1_2[2])();
    }
  })();
  return closure_129_0;
};
const obj = {};
const _launchFrame = Object.assign(_launchFrameAll);
obj.launchFrame = function launchFrameOnNative() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/FramesActionCreators.native.tsx");

export default obj;
