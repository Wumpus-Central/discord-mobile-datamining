// === Module 10804: FramesActionCreators ===

// Module 10804 (FramesActionCreators)
import _launchFrameAll from "_launchFrame" /* 10806 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import VoiceStateStore from "VoiceStateStore" /* 5666 */;

const require = fn;
let closure_6 = async function _launchFrameOnNative() {
  closure_1 = tmp2;
  closure_129_0 = closure_0;
  await _launchFrameAll.launchFrame(closure_0);
  closure_129_1 = value;
  if (closure_129_0.surface.type !== closure_130_0(closure_130_3[4]).EmbeddedSurfaceType.VOICE_CHANNEL) {
    (function closeVoicePanel() {
      if (currentClientInVoiceChannel.isCurrentClientInVoiceChannel()) {
        closure_1_1(closure_1_3[2])();
      }
    })();
  }
  return closure_129_1;
};
const obj = {};
const _launchFrame = Object.assign(_launchFrameAll);
obj.launchFrame = function launchFrameOnNative() {
  const self = this;
  const apply = closure_6.apply;
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