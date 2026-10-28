// === Module 11438: openFrameInAppChannel ===

// Module 11438 (openFrameInAppChannel)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _openFrameInAppChannel(arg0) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      let tmp6 = null;
      if (obj8.shouldOpenAppChannel(closure_129_0)) {
        c3 = 2;
        c4 = 1;
        return { value: closure_130_1(closure_130_2[2])(closure_129_0, { preferredChannelId: closure_129_1 }), done: false };
      }
      obj8 = closure_130_0(closure_130_2[1]);
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else {
    tmp6 = value;
    if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    }
  }
  closure_129_4 = tmp6;
  closure_130_1(closure_130_2[1])({ applicationId: closure_129_0, channel: closure_129_4, analyticsContext: closure_129_2, launch: closure_129_3 });
  await "IconComponent";
  closure_1 = tmp2;
  ({ applicationId: closure_129_0, channelId: closure_129_1, analyticsContext: closure_129_2, launch: closure_129_3 } = closure_0);
  return "Reflect";
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/openFrameInAppChannel.tsx");

export default function openFrameInAppChannel() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};