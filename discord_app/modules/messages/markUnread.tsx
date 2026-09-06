// discord_app/modules/messages/markUnread.tsx
import LoggerDefault from "../debug/Logger.tsx";
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import ThreadActionCreatorsDefault from "../threads/ThreadActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import JoinedThreadsStore from "../threads/JoinedThreadsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
let closure_11 = async function _markUnread(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          dependencyMap = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          currentUser = currentUser.getCurrentUser();
          closure_130_2 = currentUser;
          if (null != currentUser) {
            messages = messages.getMessages(closure_0);
            const found = messages.toArray().filter((id) => closure_1(11).compare(id.id, closure_1_1) < 0);
            const sorted = found.sort((id, id2) => closure_1_1(11).compare(id.id, id2.id));
            const first = sorted.reverse()[0];
            if (null == first) {
              let obj2 = SnowflakeUtilsDefault;
              let id = obj2.atPreviousMillisecond(closure_1);
            } else {
              id = first.id;
            }
            closure_130_3 = id;
            closure_130_4 = 0;
            messages.forAll((id) => {
              let tmp = closure_1(11).compare(id.id, closure_1_3) > 0;
              if (tmp) {
                tmp = closure_2_7(id, dependencyMap);
              }
              if (tmp) {
                closure_4 = closure_4 + 1;
              }
              const obj = closure_1(11);
            });
            channel = channel.getChannel(closure_0);
            closure_130_5 = channel;
            let isThreadResult = null != channel;
            if (isThreadResult) {
              isThreadResult = channel.isThread();
            }
            if (isThreadResult) {
              if (channel.isArchivedThread()) {
                c4 = 1;
                c5 = 1;
                const obj1 = { value: ThreadActionCreatorsDefault.unarchiveThread(channel, false), done: false };
                return obj1;
              }
            }
            obj2 = { channelId: closure_130_0, messageId: closure_130_1 };
            closure_131_10.log("Marking unread", obj2);
            const HTTP = closure_131_0(closure_131_2[10]).HTTP;
            const request = {
              url: closure_131_9.MESSAGE_ACK(closure_130_0, closure_130_3),
              body: null,
              oldFormErrors: true,
              rejectWithError: true,
            };
            const obj3 = { manual: true, mention_count: closure_130_4 };
            request.body = obj3;
            HTTP.post(request);
            const toArrayResult = messages.toArray();
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj4 = { value, done: true };
          return obj4;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      }
      if (!closure_131_4.hasJoined(closure_130_0)) {
        obj4 = closure_131_1(closure_131_2[9]);
        c4 = 2;
        c5 = 1;
        const obj5 = { value: obj4.joinThread(closure_130_5, "Mark Unread"), done: false };
        return obj5;
      }
    } catch (tmp35) {
      c5 = tmp;
      throw tmp35;
    }
  }
};
const shouldBadgeMessage = fn(4575).shouldBadgeMessage;
const Endpoints = fn(1074).Endpoints;
let closure_10 = new LoggerDefault("markUnread");
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/markUnread.tsx");

export default function markUnread() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
