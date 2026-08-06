// discord_app/modules/premium/PremiumGiftingUtils.tsx
import _resolveGiftCode from "_resolveGiftCode";
import ensureGuildLoaded from "ensureGuildLoaded";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
function _sendGiftMessage() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      let _resolveGiftCode = tmp5;
      let dependencyMap = tmp2;
      const callback = lib;
      if (null == lib) {
        const _Error2 = Error;
        let error = new Error("giftCode must be defined");
        throw error;
      }
      if (null == tmp40) {
        let _Error = Error;
        const error1 = new Error("Recipient must be defined");
        throw error1;
      }
      const obj2 = lib(outer1_2[3]);
      const obj1 = { recipientIds: null };
      obj1[0] = tmp40.id;
      lib = yield obj2.openPrivateChannel(obj1).then((arg0) => {
        channel = channel.getChannel(arg0);
        callback(table[4])(null != channel, "PrivateChannel is null");
        if (null == channel) {
          const _Error = Error;
          const error = new Error("Channel must be defined");
          throw error;
        } else {
          return channel;
        }
      });
      dependencyMap = callback(4519).getGiftCodeURL(callback);
      const obj9 = lib(6838);
      const id = lib.id;
      const obj8 = callback(4519);
      const obj4 = { isGiftLinkSentOnBehalfOfUser: true, location: null };
      obj4[1] = constants.GIFTING;
      return obj9.sendMessage(id, lib(7063).parse(lib, dependencyMap), undefined, obj4);
    })();
  });
  const _sendGiftMessage = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("MESSAGE_GROUP_SPACING").fileFinishedImporting("modules/premium/PremiumGiftingUtils.tsx");

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
export function unhandledGiftIntent(giftIntentType) {

}