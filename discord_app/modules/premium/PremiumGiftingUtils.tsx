// === Module 8082: PremiumGiftingUtils ===

// Module 8082 (PremiumGiftingUtils)
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
let closure_6 = async function _sendGiftMessage(arg0, arg1) {
  let id = arg0;
  closure_1 = arg1;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp5;
    closure_2 = tmp2;
    closure_130_0 = closure_1;
    if (null == closure_1) {
      const _Error2 = Error;
      let error = new Error("giftCode must be defined");
      throw error;
    }
    if (null == id) {
      let _Error = Error;
      const error1 = new Error("Recipient must be defined");
      throw error1;
    }
    await ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: id.id }).then((result) => {
      channel = channel.getChannel(result);
      closure_1_1(closure_1_2[4])(null != channel, "PrivateChannel is null");
      if (null == channel) {
        const _Error = Error;
        const error = new Error("Channel must be defined");
        throw error;
      } else {
        return channel;
      }
    });
    closure_130_1 = value;
    const giftCodeURL = closure_131_0(closure_131_2[5]).getGiftCodeURL(closure_130_0);
    ChannelActionCreatorsDefault;
    id = closure_130_1.id;
    closure_131_0(closure_131_2[5]);
    return closure_131_1(closure_131_2[6]).sendMessage(id, closure_131_1(closure_131_2[7]).parse(closure_130_1, giftCodeURL), undefined, { isGiftLinkSentOnBehalfOfUser: true, location: closure_131_5.GIFTING });
  })();
};
const MessageSendLocation = fn(4553).MessageSendLocation;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/PremiumGiftingUtils.tsx");

export const AnimationState = { ACTION: "action", LOOP: "loop", IDLE: "idle" };
export const sendGiftMessage = function sendGiftMessage() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export function unhandledGiftIntent() {

}