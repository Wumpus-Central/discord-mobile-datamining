// discord_app/modules/premium/PremiumGiftingUtils.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/ChannelStore.tsx";
import { MessageSendLocation } from "../messages/MessageConstants.tsx";

const require = arg1;
function _sendGiftMessage() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function* (arg0, arg1) {
      closure_3 = tmp5;
      dependencyMap = tmp2;
      const callback = lib;
      if (null == lib) {
        const _Error2 = Error;
        error = new Error("giftCode must be defined");
        throw error;
      }
      if (null == tmp40) {
        let _Error = Error;
        const error1 = new Error("Recipient must be defined");
        throw error1;
      }
      const obj2 = lib(closure_1_2[3]);
      obj1 = { recipientIds: null };
      obj1[0] = tmp40.id;
      lib = yield obj2.openPrivateChannel(obj1).then((arg0) => {
        channel = channel.getChannel(arg0);
        callback(table[4])(null != channel, "PrivateChannel is null");
        if (null == channel) {
          const _Error = Error;
          error = new Error("Channel must be defined");
          throw error;
        } else {
          return channel;
        }
      });
      dependencyMap = callback(4752).getGiftCodeURL(callback);
      const obj9 = lib(7201);
      const id = lib.id;
      const obj8 = callback(4752);
      const obj4 = { isGiftLinkSentOnBehalfOfUser: true, location: null };
      obj4[1] = constants.GIFTING;
      return obj9.sendMessage(id, lib(7427).parse(lib, dependencyMap), undefined, obj4);
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/premium/PremiumGiftingUtils.tsx");

export const AnimationState = { ACTION: "action", LOOP: "loop", IDLE: "idle" };
export const sendGiftMessage = function sendGiftMessage() {
  const self = this;
  const apply = _sendGiftMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export function unhandledGiftIntent(giftIntentType) {}
