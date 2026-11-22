// === Module 12496: onTapCheckpointCard ===

// Module 12496 (onTapCheckpointCard)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 4762 */;

const require = fn;
let closure_4 = async function _onTapCheckpointCard(arg0) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      if (obj8.getIsCheckpointEnabled("onTapCheckpointCard")) {
        const result = closure_130_0(closure_130_1[3]).trackCheckpoint2026CardClicked(closure_129_1, closure_130_3.getChannel(closure_129_0.channel_id));
        closure_130_0(closure_130_1[3]);
        c3 = 2;
        c4 = 1;
        return { value: closure_130_0(closure_130_1[4]).openCheckpoint("message_component"), done: false };
      }
      obj8 = closure_130_0(closure_130_1[2]);
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  }
  await "HermesInternal";
  closure_1 = tmp2;
  ({ message: closure_129_0, authorId: closure_129_1 } = closure_0);
  return "Path";
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/onTapCheckpointCard.tsx");

export function onTapCheckpointCard() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}