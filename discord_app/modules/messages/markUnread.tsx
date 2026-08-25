// === Module 9886: markUnreadBySnowflakeID ===

// Module 9886 (markUnreadBySnowflakeID)
import timestampDefault from "timestamp" /* 3 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "storeThread" /* 4027 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "reinjectEphemerals" /* 4623 */;
import { shouldBadgeMessage } from "generateOldThreadCutoff" /* 4395 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import { Endpoints } from "ME" /* 676 */;

const require = arg1;
function markUnreadBySnowflakeID(arg0, id, c3) {
  const self = this;
  const apply = _markUnreadBySnowflakeID.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _markUnreadBySnowflakeID() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === channel) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              channel = tmp2;
              channel = undefined;
              channel = channel.getChannel(callback);
              let isThreadResult = null != channel;
              if (isThreadResult) {
                isThreadResult = channel.isThread();
              }
              if (isThreadResult) {
                if (channel.isArchivedThread()) {
                  channel = 1;
                  c6 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = callback2(7368).unarchiveThread(channel, false);
                  return obj1;
                }
              }
              const HTTP = callback(530).HTTP;
              let obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
              obj2[0] = closure_9.MESSAGE_ACK(callback, callback2);
              const obj3 = { manual: true, mention_count: null };
              obj3[1] = dependencyMap;
              obj2[1] = obj3;
              HTTP.post(obj2);
              c6 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          if (!closure_4.hasJoined(callback)) {
            obj2 = callback2(7368);
            channel = 2;
            c6 = 1;
            const obj5 = { value: null, done: false };
            obj5[0] = obj2.joinThread(channel, "Mark Unread");
            return obj5;
          }
        } catch (tmp27) {
          c6 = tmp;
          throw tmp27;
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = new timestampDefault("markUnread");
const tmp2 = new timestampDefault("markUnread");
const result = require("set").fileFinishedImporting("modules/messages/markUnread.tsx");

export default function markUnread(arg0, arg1) {
  let logResult = arg1;
  closure_0 = arg1;
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    messages = messages.getMessages(arg0);
    const found = messages.toArray().filter((id) => currentUser(id[8]).compare(id.id, closure_0) < 0);
    const sorted = found.sort((id, id2) => currentUser(id[8]).compare(id.id, id2.id));
    const first = sorted.reverse()[0];
    if (null == first) {
      let obj = currentUser(id[8]);
      id = obj.atPreviousMillisecond(logResult);
    } else {
      id = first.id;
    }
    c3 = 0;
    messages.forAll((id) => {
      let tmp = currentUser(id[8]).compare(id.id, id) > 0;
      if (tmp) {
        tmp = closure_1_7(id, currentUser);
      }
      if (tmp) {
        closure_3 = closure_3 + 1;
      }
    });
    messages = logger;
    obj = { channelId: null, messageId: null };
    obj[0] = arg0;
    obj[1] = logResult;
    logResult = logger.log("Marking unread", obj);
    markUnreadBySnowflakeID(arg0, id, c3);
    const toArrayResult = messages.toArray();
  }
};
export { markUnreadBySnowflakeID };