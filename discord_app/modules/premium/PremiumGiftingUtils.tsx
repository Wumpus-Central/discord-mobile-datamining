// discord_app/modules/premium/PremiumGiftingUtils.tsx
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = fn;
let closure_6 = async function _sendGiftMessage() {
  closure_3 = tmp5;
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  if (null == closure_1) {
    const _Error2 = Error;
    let error = new Error("giftCode must be defined");
    throw error;
  }
  if (null == tmp39) {
    let _Error = Error;
    const error1 = new Error("Recipient must be defined");
    throw error1;
  }
  closure_130_1 = await ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: tmp39.id }).then((result) => {
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
  const giftCodeURL = closure_131_0(closure_131_2[5]).getGiftCodeURL(closure_130_0);
  ChannelActionCreatorsDefault;
  const id = closure_130_1.id;
  closure_131_0(closure_131_2[5]);
  return closure_131_1(closure_131_2[6]).sendMessage(
    id,
    closure_131_1(closure_131_2[7]).parse(closure_130_1, giftCodeURL),
    undefined,
    { isGiftLinkSentOnBehalfOfUser: true, location: closure_131_5.GIFTING },
  );
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
export function unhandledGiftIntent() {}
