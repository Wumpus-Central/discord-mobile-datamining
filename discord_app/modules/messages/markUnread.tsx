// === Module 10055: markUnread ===

// Module 10055 (markUnread)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1085 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7261 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let channel, closure_2, closure_3, closure_4, currentUser, mention_count, messages;

let obj = function _markUnread() {
  obj = _asyncToGenerator(async (channelId, messageId) => {
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj10;
      let obj5;
      let obj8;
      let tmp;
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
          c5 = 2;
          if (0 === mention_count) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              currentUser = undefined;
              let id;
              mention_count = undefined;
              channel = undefined;
              currentUser = currentUser.getCurrentUser();
              if (null != currentUser) {
                messages = messages.getMessages(channelId);
                const toArrayResult = messages.toArray();
                const found = toArrayResult.filter((id) => {
                  obj = messageId(closure_2_2[8]);
                  return obj.compare(id.id, closure_1_1) < 0;
                });
                const sorted = found.sort((id, id2) => {
                  obj = messageId(closure_1_2[8]);
                  return obj.compare(id.id, id2.id);
                });
                const first = sorted.reverse()[0];
                if (null == first) {
                  const obj3 = SnowflakeUtilsDefault;
                  id = obj3.atPreviousMillisecond(messageId);
                } else {
                  id = first.id;
                }
                mention_count = 0;
                messages.forAll((id) => {
                  obj = messageId(closure_2_2[8]);
                  const tmp = obj.compare(id.id, closure_1_3) > 0 && closure_2_7(id, closure_1_2);
                  if (tmp) {
                    closure_4 = closure_4 + 1;
                  }
                });
                channel = channel.getChannel(channelId);
                const isThreadResult = null != channel && channel.isThread();
                if (isThreadResult) {
                  if (channel.isArchivedThread()) {
                    mention_count = 1;
                    c5 = 1;
                    const obj6 = { value: obj10.unarchiveThread(channel, false), done: false };
                    obj10 = ThreadActionCreatorsDefault;
                    return obj6;
                  }
                }
                const obj7 = { channelId, messageId };
                closure_131_10.log("Marking unread", obj7);
                const HTTP = closure_131_0(closure_131_2[10]).HTTP;
                const request = { url: closure_131_9.MESSAGE_ACK(channelId, id), body: obj8, oldFormErrors: true, rejectWithError: true };
                const post = HTTP.post;
                obj8 = { manual: true, mention_count };
                post(request);
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === mention_count) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
          if (!closure_131_4.hasJoined(channelId)) {
            mention_count = 2;
            c5 = 1;
            const obj11 = { value: obj5.joinThread(channel, "Mark Unread"), done: false };
            obj5 = closure_131_1(closure_131_2[9]);
            return obj11;
          }
        } catch (tmp34) {
          c5 = 3;
          throw tmp34;
        }
      }
    })();
  });
  return obj(...arguments);
};
const shouldBadgeMessage = ReadStateStore.shouldBadgeMessage;
const Endpoints = Constants.Endpoints;
let closure_10 = new LoggerDefault("markUnread");
new LoggerDefault("markUnread");
const result = size.fileFinishedImporting("modules/messages/markUnread.tsx");

export default function markUnread() {
  return obj(...arguments);
};