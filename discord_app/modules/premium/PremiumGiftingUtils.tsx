// discord_app/modules/premium/PremiumGiftingUtils.tsx
import MessageConstants from "../messages/MessageConstants.tsx";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channel, closure_3;

let obj = function _sendGiftMessage() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_2;
    let id = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async function (arg0, value) {
      let obj9;
      let openPrivateChannelResult;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let giftCodeURL;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              id = undefined;
              giftCodeURL = undefined;
              if (null == id) {
                const _Error2 = Error;
                const self3 = this;
                const self4 = this;
                let error = new Error("giftCode must be defined");
                throw error;
              } else if (null == id) {
                let _Error = Error;
                let self = this;
                let self2 = this;
                const error1 = new Error("Recipient must be defined");
                throw error1;
              } else {
                const obj5 = { recipientIds: id.id };
                c4 = 1;
                c5 = 1;
                const obj3 = ChannelActionCreatorsDefault;
                const obj6 = {
                  value: openPrivateChannelResult.then(function (result) {
                    channel = channel.getChannel(result);
                    id(closure_1_2[4])(null != channel, "PrivateChannel is null");
                    if (null == channel) {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error = new Error("Channel must be defined");
                      throw error;
                    } else {
                      return channel;
                    }
                  }),
                  done: false,
                };
                openPrivateChannelResult = obj3.openPrivateChannel(obj5);
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            id = value;
            const obj8 = closure_131_0(closure_131_2[5]);
            giftCodeURL = obj8.getGiftCodeURL(id);
            id = id.id;
            const sendMessage = closure_131_1(closure_131_2[6]).sendMessage;
            c5 = 3;
            const obj10 = { isGiftLinkSentOnBehalfOfUser: true, location: closure_131_5.GIFTING };
            const tmp24 = closure_131_1(closure_131_2[6]);
            obj = { value: sendMessage(id, obj9.parse(id, giftCodeURL), undefined, obj10), done: true };
            obj9 = closure_131_1(closure_131_2[7]);
            return obj;
          }
        } catch (tmp13) {
          c5 = 3;
          throw tmp13;
        }
      }
    })();
  });
  return obj(...arguments);
};
const MessageSendLocation = MessageConstants.MessageSendLocation;
const result = size.fileFinishedImporting("modules/premium/PremiumGiftingUtils.tsx");

export const AnimationState = { ACTION: "action", LOOP: "loop", IDLE: "idle" };
export const sendGiftMessage = function sendGiftMessage() {
  return obj(...arguments);
};
export function unhandledGiftIntent() {}
