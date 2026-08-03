// === Module 10044: _markUnread ===

// Module 10044 (_markUnread)
import mergeGuildAvatar from "mergeGuildAvatar";
import storeThread from "storeThread";
import ensureGuildLoaded from "ensureGuildLoaded";
import reinjectEphemerals from "reinjectEphemerals";
import { shouldBadgeMessage } from "generateOldThreadCutoff";
import closure_8 from "mergeGuildAvatar";
import { Endpoints } from "ME";

const require = arg1;
function _markUnread() {
  const self = this;
  let tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (channel === 2) {
        channel = 3;
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
          channel = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              channel = 3;
              throw arg1;
            } else if (arg0 === 2) {
              channel = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let id = tmp5;
              let currentUser = tmp2;
              currentUser = undefined;
              id = undefined;
              c4 = undefined;
              channel = undefined;
              currentUser = outer1_8.getCurrentUser();
              if (null != currentUser) {
                const messages = outer1_6.getMessages(tmp41);
                const found = messages.toArray().filter((id) => callback(currentUser[8]).compare(id.id, callback) < 0);
                const sorted = found.sort((id, id2) => callback(currentUser[8]).compare(id.id, id2.id));
                const first = sorted.reverse()[0];
                if (null == first) {
                  let obj2 = callback2(outer1_2[8]);
                  id = obj2.atPreviousMillisecond(callback2);
                } else {
                  id = first.id;
                }
                c4 = 0;
                messages.forAll((id) => {
                  let tmp = callback(currentUser[8]).compare(id.id, id) > 0;
                  if (tmp) {
                    tmp = outer1_7(id, currentUser);
                  }
                  if (tmp) {
                    storeThread = storeThread + 1;
                  }
                });
                channel = channel.getChannel(tmp41);
                let isThreadResult = null != channel;
                if (isThreadResult) {
                  isThreadResult = channel.isThread();
                }
                if (isThreadResult) {
                  if (channel.isArchivedThread()) {
                    c4 = 1;
                    channel = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = callback2(outer1_2[9]).unarchiveThread(channel, false);
                    return obj1;
                  }
                }
                obj2 = { channelId: null, messageId: null };
                obj2[0] = callback;
                obj2[1] = callback2;
                logger.log("Marking unread", obj2);
                const HTTP = callback(currentUser[10]).HTTP;
                const obj3 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
                obj3[0] = closure_9.MESSAGE_ACK(callback, id);
                let obj4 = { manual: true, mention_count: null };
                obj4[1] = c4;
                obj3[1] = obj4;
                HTTP.post(obj3);
                const toArrayResult = messages.toArray();
              }
              channel = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              channel = 3;
              throw arg1;
            } else if (arg0 === 2) {
              channel = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            }
          } else if (arg0 === 1) {
            channel = 3;
            throw arg1;
          } else if (arg0 === 2) {
            channel = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          if (!c4.hasJoined(callback)) {
            obj4 = callback2(currentUser[9]);
            c4 = 2;
            channel = 1;
            const obj6 = { value: null, done: false };
            obj6[0] = obj4.joinThread(channel, "Mark Unread");
            return obj6;
          }
        } catch (tmp35) {
          channel = tmp;
          throw tmp35;
        }
      }
    })();
  });
  const _markUnread = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c10 = new require("reinjectEphemerals")("markUnread");
const tmp2 = new require("reinjectEphemerals")("markUnread");
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/messages/markUnread.tsx");

export default function markUnread() {
  const self = this;
  const apply = _markUnread.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};