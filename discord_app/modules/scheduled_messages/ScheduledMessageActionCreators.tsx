// discord_app/modules/scheduled_messages/ScheduledMessageActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_8 = async function _createScheduledMessage(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          ({ channelId: closure_131_0, scheduledTimestamp: closure_131_1, messageSendData: closure_131_2 } = closure_0);
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let obj2 = { type: "SCHEDULED_MESSAGES_CREATE_START", channelId: closure_131_0 };
          closure_132_1(closure_132_2[4]).dispatch(obj2);
          c6 = 1;
          const HTTP = closure_132_0(closure_132_2[5]).HTTP;
          const request = { url: closure_132_5.SCHEDULED_MESSAGES, body: null, rejectWithError: true };
          const obj3 = {
            channel_id: closure_131_0,
            content: closure_131_2.content,
            scheduled_timestamp: closure_131_1,
            flags: closure_131_2.flags,
            message_reference: closure_131_2.message_reference,
            allowed_mentions: closure_131_2.allowed_mentions,
            sticker_ids: closure_131_2.sticker_ids,
            poll: closure_131_2.poll,
            attachments: null,
          };
          let attachments = closure_131_2.attachments;
          if (attachments == null) {
            attachments = [];
          }
          obj3.attachments = attachments;
          request.body = obj3;
          c7 = 3;
          c8 = 1;
          const obj4 = { value: HTTP.post(request), done: false };
          return obj4;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_5 = closure_5;
        const scheduledMessageLogger = closure_132_0(closure_132_2[6]).scheduledMessageLogger;
        scheduledMessageLogger.error("Failed to create scheduled message", closure_131_5);
        const body = closure_131_5.body;
        let message;
        if (body != null) {
          message = body.message;
        }
        if (message == null) {
          message = closure_131_5.message;
        }
        closure_131_4 = message;
        obj2 = closure_132_1(closure_132_2[4]);
        const obj5 = { type: "SCHEDULED_MESSAGES_CREATE_FAILURE", channelId: closure_131_0, errorMsg: closure_131_4 };
        obj2.dispatch(obj5);
        throw closure_131_5;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_131_3 = value;
        let obj8 = closure_132_1(closure_132_2[4]);
        const obj7 = {
          type: "SCHEDULED_MESSAGES_CREATE_SUCCESS",
          channelId: closure_131_0,
          scheduledMessageSend: closure_132_0(closure_132_2[6]).convertServerScheduledMessageSend(closure_131_3.body),
        };
        obj8.dispatch(obj7);
        const obj11 = closure_132_0(closure_132_2[6]);
        obj8 = { dismissAction: closure_132_7.INDIRECT_ACTION };
        const result = closure_132_0(closure_132_2[7]).UNSAFE_markDismissibleContentAsDismissed(
          closure_132_0(closure_132_2[8]).DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK,
          obj8,
        );
        c6 = 0;
        c8 = 3;
        obj = { value: closure_131_3, done: true };
        return obj;
      }
    } catch (tmp31) {
      closure_5 = tmp31;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp31;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_9 = async function _updateScheduledMessage(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          ({
            scheduledMessageId: closure_131_0,
            scheduledTimestamp: closure_131_1,
            content: closure_131_2,
            flags: closure_131_3,
          } = closure_0);
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          closure_131_8 = undefined;
          closure_131_9 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let obj2 = { type: "SCHEDULED_MESSAGES_UPDATE_START", scheduledMessageId: closure_131_0 };
          closure_132_1(closure_132_2[4]).dispatch(obj2);
          c6 = 1;
          if (null == closure_131_2) {
            const items = [closure_131_2, closure_131_3];
            let result = items;
          } else {
            const obj3 = { content: closure_131_2, flags: null };
            const obj14 = closure_132_0(closure_132_2[6]);
            c2 = closure_131_3;
            if (closure_131_3 == null) {
              c2 = 0;
            }
            obj3.flags = closure_132_0(closure_132_2[9]).removeFlag(c2, closure_132_6.SUPPRESS_NOTIFICATIONS);
            result = obj14.parseContentAndFlagsForSilentMessage(obj3);
            const obj16 = closure_132_0(closure_132_2[9]);
          }
          closure_131_4 = result;
          closure_131_5 = closure_132_3(closure_131_4, 2);
          closure_131_6 = closure_131_5[0];
          closure_131_7 = closure_131_5[1];
          const HTTP = closure_132_0(closure_132_2[5]).HTTP;
          const request = { url: closure_132_5.SCHEDULED_MESSAGE(closure_131_0), body: null, rejectWithError: true };
          let obj4 = { scheduled_timestamp: closure_131_1, content: closure_131_6, flags: closure_131_7 };
          request.body = obj4;
          HTTP.patch(request);
          c7 = 3;
          c8 = 1;
          const obj12 = closure_132_1(closure_132_2[4]);
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_10 = closure_5;
        const scheduledMessageLogger = closure_132_0(closure_132_2[6]).scheduledMessageLogger;
        scheduledMessageLogger.error("Failed to update scheduled message", closure_131_10);
        const body = closure_131_10.body;
        let message;
        if (body != null) {
          message = body.message;
        }
        if (message == null) {
          message = closure_131_10.message;
        }
        closure_131_9 = message;
        obj4 = closure_132_1(closure_132_2[4]);
        const obj5 = {
          type: "SCHEDULED_MESSAGES_UPDATE_FAILURE",
          scheduledMessageId: closure_131_0,
          errorMsg: closure_131_9,
        };
        obj4.dispatch(obj5);
        const _Error = Error;
        const error = new Error(closure_131_9);
        throw error;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_131_8 = value;
        obj = closure_132_1(closure_132_2[4]);
        const obj7 = { type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: null };
        obj2 = closure_132_0(closure_132_2[6]);
        obj7.scheduledMessageSend = obj2.convertServerScheduledMessageSend(closure_131_8.body);
        obj.dispatch(obj7);
        c6 = 0;
        c8 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp63) {
      closure_5 = tmp63;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp63;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_10 = async function _deleteScheduledMessage() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = scheduledMessageId;
            closure_130_1 = undefined;
            const obj1 = { type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId };
            DispatcherDefault.dispatch(obj1);
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj2 = { url: closure_2_5.SCHEDULED_MESSAGE(scheduledMessageId), rejectWithError: true };
            c6 = 2;
            c7 = 1;
            let obj3 = { value: HTTP.del(obj2), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_2 = closure_4;
          const scheduledMessageLogger = closure_131_0(closure_131_2[6]).scheduledMessageLogger;
          scheduledMessageLogger.error("Failed to cancel scheduled message", closure_130_2);
          const body = closure_130_2.body;
          message = undefined;
          if (body != null) {
            message = body.message;
          }
          if (message == null) {
            message = closure_130_2.message;
          }
          closure_130_1 = message;
          obj3 = closure_131_1(closure_131_2[4]);
          const obj4 = {
            type: "SCHEDULED_MESSAGES_DELETE_FAILURE",
            scheduledMessageId: closure_130_0,
            errorMsg: closure_130_1,
          };
          obj3.dispatch(obj4);
          const _Error = Error;
          const error = new Error(closure_130_1);
          throw error;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          obj = closure_131_1(closure_131_2[4]);
          const obj6 = { type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId: closure_130_0 };
          obj.dispatch(obj6);
          c5 = 0;
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp39) {
        closure_4 = tmp39;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp39;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_11 = async function _sendScheduledMessageNow() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = scheduledMessageId;
            closure_130_1 = undefined;
            const obj1 = { type: "SCHEDULED_MESSAGES_SEND_NOW_START", scheduledMessageId };
            DispatcherDefault.dispatch(obj1);
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj2 = { url: closure_2_5.SCHEDULED_MESSAGE_SEND(scheduledMessageId), rejectWithError: true };
            c6 = 2;
            c7 = 1;
            let obj3 = { value: HTTP.post(obj2), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_2 = closure_4;
          const scheduledMessageLogger = closure_131_0(closure_131_2[6]).scheduledMessageLogger;
          scheduledMessageLogger.error("Failed to send scheduled message now", closure_130_2);
          const body = closure_130_2.body;
          message = undefined;
          if (body != null) {
            message = body.message;
          }
          if (message == null) {
            message = closure_130_2.message;
          }
          closure_130_1 = message;
          obj3 = closure_131_1(closure_131_2[4]);
          const obj4 = {
            type: "SCHEDULED_MESSAGES_SEND_NOW_FAILURE",
            scheduledMessageId: closure_130_0,
            errorMsg: closure_130_1,
          };
          obj3.dispatch(obj4);
          const _Error = Error;
          const error = new Error(closure_130_1);
          throw error;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          obj = closure_131_1(closure_131_2[4]);
          const obj6 = { type: "SCHEDULED_MESSAGES_SEND_NOW_SUCCESS", scheduledMessageId: closure_130_0 };
          obj.dispatch(obj6);
          c5 = 0;
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp39) {
        closure_4 = tmp39;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp39;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_12 = async function _getScheduledMessages() {
  closure_0 = tmp2;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: constants.SCHEDULED_MESSAGES, rejectWithError: true });
  const body = value.body;
  return body.map(closure_128_0(closure_128_2[6]).convertServerScheduledMessageSend);
};
let closure_13 = async function _fetchScheduledMessages() {
  closure_1 = tmp3;
  DispatcherDefault.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
  await (function getScheduledMessages() {
    const self = this;
    const apply = closure_1_12.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  if (1 === tmp7) {
    c3 = 0;
    closure_128_1 = closure_2;
    const scheduledMessageLogger2 = closure_129_0(closure_129_2[6]).scheduledMessageLogger;
    scheduledMessageLogger2.error("Failed to fetch scheduled messages", closure_128_1);
    let obj3 = closure_129_1(closure_129_2[4]);
    obj3.dispatch({ type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error: closure_128_1 });
    c5 = 3;
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_0 = value;
    const scheduledMessageLogger = closure_129_0(closure_129_2[6]).scheduledMessageLogger;
    scheduledMessageLogger.info("Fetched scheduled messages", closure_128_0);
    obj3 = { type: "FETCH_SCHEDULED_MESSAGES_SUCCESS", messages: closure_128_0 };
    closure_129_1(closure_129_2[4]).dispatch(obj3);
    c3 = 0;
    closure_129_1(closure_129_2[4]);
  }
  return value;
};
const Constants = fn(1074);
({ Endpoints: hasOwnProperty, MessageFlags: metroRequire } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageActionCreators.tsx");

export const createScheduledMessage = function createScheduledMessage() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateScheduledMessage = function updateScheduledMessage() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteScheduledMessage = function deleteScheduledMessage() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const sendScheduledMessageNow = function sendScheduledMessageNow() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchScheduledMessages = function fetchScheduledMessages() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
