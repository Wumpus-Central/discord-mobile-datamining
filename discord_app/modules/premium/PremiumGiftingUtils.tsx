// === Module 7862: _sendGiftMessage ===

// Module 7862 (_sendGiftMessage)
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
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          constants = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _resolveGiftCode = tmp5;
              let dependencyMap = tmp2;
              const callback = lib;
              lib = undefined;
              dependencyMap = undefined;
              if (null == lib) {
                const _Error2 = Error;
                let error = new Error("giftCode must be defined");
                throw error;
              } else if (null == tmp40) {
                let _Error = Error;
                const error1 = new Error("Recipient must be defined");
                throw error1;
              } else {
                let obj2 = lib(outer1_2[3]);
                const obj1 = { recipientIds: null };
                obj1[0] = tmp40.id;
                c4 = 1;
                constants = 1;
                obj2 = { value: null, done: false };
                obj2[0] = obj2.openPrivateChannel(obj1).then((arg0) => {
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
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            dependencyMap = callback(4428).getGiftCodeURL(callback);
            const obj9 = lib(5718);
            const id = lib.id;
            const obj8 = callback(4428);
            const obj4 = { isGiftLinkSentOnBehalfOfUser: true, location: null };
            obj4[1] = constants.GIFTING;
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = obj9.sendMessage(id, lib(5971).parse(lib, dependencyMap), undefined, obj4);
            return obj;
          }
        } catch (tmp18) {
          constants = tmp;
          throw tmp18;
        }
      }
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