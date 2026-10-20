// === Module 12858: playFrameFromEmbed ===

// Module 12858 (playFrameFromEmbed)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _playFrameFromEmbed(arg0) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else if (null != closure_129_0.conjureProjectId) {
      if (obj2.shouldOpenAppChannel(closure_129_0.id)) {
        c3 = 2;
        c4 = 1;
        return { value: closure_130_0(closure_130_2[2]).fetchApplicationChannels(closure_129_0.id), done: false };
      }
      obj2 = closure_130_0(closure_130_2[1]);
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
  const obj8 = { applicationId: closure_129_0.id, channel: null, analyticsContext: null };
  let tmp19 = null;
  if (null != closure_129_2) {
    tmp19 = { guildId: closure_129_2.guild_id, channelId: closure_129_2.channel_id };
  }
  obj8.channel = tmp19;
  obj8.analyticsContext = closure_129_1;
  closure_130_1(closure_130_2[1])(obj8);
  await "IconComponent";
  closure_1 = tmp2;
  ({ application: closure_129_0, analyticsContext: closure_129_1 } = closure_0);
  return "test";
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/playFrameFromEmbed.tsx");

export default function playFrameFromEmbed() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};