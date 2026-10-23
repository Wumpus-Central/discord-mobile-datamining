// === Module 11352: openFrameInAppChannel ===

// Module 11352 (openFrameInAppChannel)
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
      if (obj9.shouldOpenAppChannel(closure_129_0)) {
        c3 = 2;
        c4 = 1;
        return { value: closure_130_0(closure_130_2[2]).fetchApplicationChannels(closure_129_0), done: false };
      }
      obj9 = closure_130_0(closure_130_2[1]);
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  } else {
    const first = value[0];
  }
  closure_129_2 = first;
  const obj7 = { applicationId: closure_129_0, channel: null, analyticsContext: null };
  let tmp14 = null;
  if (null != closure_129_2) {
    tmp14 = { guildId: closure_129_2.guild_id, channelId: closure_129_2.channel_id };
  }
  obj7.channel = tmp14;
  obj7.analyticsContext = closure_129_1;
  closure_130_1(closure_130_2[1])(obj7);
  await "IconComponent";
  closure_1 = tmp2;
  ({ applicationId: closure_129_0, analyticsContext: closure_129_1 } = closure_0);
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