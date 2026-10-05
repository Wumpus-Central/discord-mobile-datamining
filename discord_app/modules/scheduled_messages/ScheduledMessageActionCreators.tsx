// === Module 7474: ScheduledMessageActionCreators ===

// Module 7474 (ScheduledMessageActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c8, closure_2;

let hasOwnProperty;
let metroRequire;
let obj = function _createScheduledMessage() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let closure_5;
    let obj10;
    let obj7;
    let value;
    let closure_0 = arg0;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let channelId;
        let scheduled_timestamp;
        let attachments;
        let errorMsg;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            channelId = undefined;
            scheduled_timestamp = undefined;
            attachments = undefined;
            ({ channelId: c0, scheduledTimestamp: c1, messageSendData: c2 } = closure_0);
            value = undefined;
            errorMsg = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj6 = { type: "SCHEDULED_MESSAGES_CREATE_START", channelId };
            const obj13 = closure_132_1(closure_132_2[4]);
            obj13.dispatch(obj6);
            c6 = 1;
            const HTTP = closure_132_0(closure_132_2[5]).HTTP;
            const request = { url: closure_132_5.SCHEDULED_MESSAGES, body: obj7, rejectWithError: true };
            obj7 = { channel_id: channelId, content: attachments.content, scheduled_timestamp, flags: attachments.flags, message_reference: attachments.message_reference, allowed_mentions: attachments.allowed_mentions, sticker_ids: attachments.sticker_ids, poll: attachments.poll, attachments };
            attachments = attachments.attachments;
            const post = HTTP.post;
            if (attachments == null) {
              attachments = [];
            }
            c7 = 3;
            c8 = 1;
            const obj8 = { value: post(request), done: false };
            return obj8;
          }
        } else if (2 === c7) {
          c6 = 0;
          const scheduledMessageLogger = closure_132_0(closure_132_2[6]).scheduledMessageLogger;
          scheduledMessageLogger.error("Failed to create scheduled message", tmp28);
          const body = tmp28.body;
          let message;
          if (body != null) {
            message = body.message;
          }
          let message2 = message;
          if (message == null) {
            message2 = tmp28.message;
          }
          errorMsg = message2;
          const obj9 = { type: "SCHEDULED_MESSAGES_CREATE_FAILURE", channelId, errorMsg };
          const obj3 = closure_132_1(closure_132_2[4]);
          obj3.dispatch(obj9);
          throw tmp28;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          const obj14 = { type: "SCHEDULED_MESSAGES_CREATE_SUCCESS", channelId, scheduledMessageSend: obj10.convertServerScheduledMessageSend(value.body) };
          const dispatch = closure_132_1(closure_132_2[4]).dispatch;
          const tmp39 = closure_132_1(closure_132_2[4]);
          obj10 = closure_132_0(closure_132_2[6]);
          dispatch(obj14);
          const obj15 = { dismissAction: closure_132_7.INDIRECT_ACTION };
          const obj11 = closure_132_0(closure_132_2[7]);
          const result = obj11.UNSAFE_markDismissibleContentAsDismissed(closure_132_0(closure_132_2[8]).DismissibleContent.SCHEDULED_MESSAGES_DRAFT_COACHMARK, obj15);
          c6 = 0;
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp28) {
        if (0 === c6) {
          c8 = 3;
          throw tmp28;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _updateScheduledMessage() {
  obj = _asyncToGenerator(async function(scheduledMessageId) {
    let c0;
    let c1;
    let c2;
    let c3;
    let obj2;
    let obj9;
    let removeFlag;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (scheduledMessageId === 1) {
        throw value;
      } else if (scheduledMessageId === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      let closure_5;
      try {
        let scheduled_timestamp;
        let content;
        let c4;
        let content2;
        let flags;
        let body;
        let errorMsg;
        c8 = 2;
        if (0 === c7) {
          if (scheduledMessageId === 1) {
            c8 = 3;
            throw value;
          } else if (scheduledMessageId === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp4;
            scheduledMessageId = undefined;
            scheduled_timestamp = undefined;
            content = undefined;
            c3 = undefined;
            ({ scheduledMessageId: c0, scheduledTimestamp: c1, content: c2, flags: c3 } = closure_0);
            c4 = undefined;
            closure_5 = undefined;
            content2 = undefined;
            flags = undefined;
            body = undefined;
            errorMsg = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c7) {
          if (scheduledMessageId === 1) {
            c8 = 3;
            throw value;
          } else if (scheduledMessageId === 2) {
            c8 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            let result;
            const obj7 = { type: "SCHEDULED_MESSAGES_UPDATE_START", scheduledMessageId };
            const obj12 = closure_132_1(closure_132_2[4]);
            obj12.dispatch(obj7);
            c6 = 1;
            if (null == content) {
              const items = [content, c3];
              result = items;
            } else {
              const obj8 = { content, flags: removeFlag(content, closure_132_6.SUPPRESS_NOTIFICATIONS) };
              const parseContentAndFlagsForSilentMessage = closure_132_0(closure_132_2[6]).parseContentAndFlagsForSilentMessage;
              const tmp78 = closure_132_0(closure_132_2[6]);
              content = c3;
              removeFlag = closure_132_0(closure_132_2[9]).removeFlag;
              const tmp82 = closure_132_0(closure_132_2[9]);
              if (c3 == null) {
                content = 0;
              }
              result = parseContentAndFlagsForSilentMessage(obj8);
            }
            c4 = result;
            closure_5 = closure_132_3(c4, 2);
            content2 = closure_5[0];
            flags = closure_5[1];
            const HTTP = closure_132_0(closure_132_2[5]).HTTP;
            const request = { url: closure_132_5.SCHEDULED_MESSAGE(scheduledMessageId), body: obj9, rejectWithError: true };
            const patch = HTTP.patch;
            obj9 = { scheduled_timestamp, content: content2, flags };
            c7 = 3;
            c8 = 1;
            const obj10 = { value: patch(request), done: false };
            return obj10;
          }
        } else if (2 === c7) {
          c6 = 0;
          let closure_10 = closure_5;
          const scheduledMessageLogger = closure_132_0(closure_132_2[6]).scheduledMessageLogger;
          scheduledMessageLogger.error("Failed to update scheduled message", closure_10);
          body = closure_10.body;
          let message;
          if (body != null) {
            message = body.message;
          }
          let message2 = message;
          if (message == null) {
            message2 = closure_10.message;
          }
          errorMsg = message2;
          const obj11 = { type: "SCHEDULED_MESSAGES_UPDATE_FAILURE", scheduledMessageId, errorMsg };
          const obj4 = closure_132_1(closure_132_2[4]);
          obj4.dispatch(obj11);
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error(errorMsg);
          throw error;
        } else if (scheduledMessageId === 1) {
          c8 = 3;
          throw value;
        } else if (scheduledMessageId === 2) {
          c6 = 0;
          c8 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          body = value;
          obj = { type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: obj2.convertServerScheduledMessageSend(body.body) };
          const dispatch = closure_132_1(closure_132_2[4]).dispatch;
          const tmp9 = closure_132_1(closure_132_2[4]);
          obj2 = closure_132_0(closure_132_2[6]);
          dispatch(obj);
          c6 = 0;
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp58) {
        closure_5 = tmp58;
        if (0 === c6) {
          c8 = 3;
          throw tmp58;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _deleteScheduledMessage() {
  obj = _asyncToGenerator(async (scheduledMessageId) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              errorMsg = undefined;
              const obj5 = { type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c6 = 2;
              c7 = 1;
              const obj6 = { url: closure_2_5.SCHEDULED_MESSAGE(scheduledMessageId), rejectWithError: true };
              const obj7 = { value: del(obj6), done: false };
              return obj7;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_2 = closure_4;
            const scheduledMessageLogger = closure_131_0(closure_131_2[6]).scheduledMessageLogger;
            scheduledMessageLogger.error("Failed to cancel scheduled message", closure_2);
            const body = closure_2.body;
            let message;
            if (body != null) {
              message = body.message;
            }
            let message2 = message;
            if (message == null) {
              message2 = closure_2.message;
            }
            errorMsg = message2;
            const obj8 = { type: "SCHEDULED_MESSAGES_DELETE_FAILURE", scheduledMessageId, errorMsg };
            const obj4 = closure_131_1(closure_131_2[4]);
            obj4.dispatch(obj8);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(errorMsg);
            throw error;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            const obj11 = { type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId };
            obj = closure_131_1(closure_131_2[4]);
            obj.dispatch(obj11);
            c5 = 0;
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp34) {
          closure_4 = tmp34;
          if (0 === c5) {
            c7 = 3;
            throw tmp34;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _sendScheduledMessageNow() {
  obj = _asyncToGenerator(async (scheduledMessageId) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              errorMsg = undefined;
              const obj5 = { type: "SCHEDULED_MESSAGES_SEND_NOW_START", scheduledMessageId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const post = HTTP.post;
              c6 = 2;
              c7 = 1;
              const obj6 = { url: closure_2_5.SCHEDULED_MESSAGE_SEND(scheduledMessageId), rejectWithError: true };
              const obj7 = { value: post(obj6), done: false };
              return obj7;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_2 = closure_4;
            const scheduledMessageLogger = closure_131_0(closure_131_2[6]).scheduledMessageLogger;
            scheduledMessageLogger.error("Failed to send scheduled message now", closure_2);
            const body = closure_2.body;
            let message;
            if (body != null) {
              message = body.message;
            }
            let message2 = message;
            if (message == null) {
              message2 = closure_2.message;
            }
            errorMsg = message2;
            const obj8 = { type: "SCHEDULED_MESSAGES_SEND_NOW_FAILURE", scheduledMessageId, errorMsg };
            const obj4 = closure_131_1(closure_131_2[4]);
            obj4.dispatch(obj8);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(errorMsg);
            throw error;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            const obj11 = { type: "SCHEDULED_MESSAGES_SEND_NOW_SUCCESS", scheduledMessageId };
            obj = closure_131_1(closure_131_2[4]);
            obj.dispatch(obj11);
            c5 = 0;
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp34) {
          closure_4 = tmp34;
          if (0 === c5) {
            c7 = 3;
            throw tmp34;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _getScheduledMessages() {
  obj = _asyncToGenerator(async () => {
    let c1;
    let c2;
    let closure_0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.SCHEDULED_MESSAGES, rejectWithError: true };
    await HTTP.get(obj4);
    const body = value.body;
    return body.map(closure_128_0(closure_128_2[6]).convertServerScheduledMessageSend);
  });
  return obj(...arguments);
};
obj = function _fetchScheduledMessages() {
  obj = _asyncToGenerator(async () => {
    function getScheduledMessages() {
      return closure_1_12(...arguments);
    }
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let error;
        let messages;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            error = tmp;
            messages = undefined;
            const obj6 = DispatcherDefault;
            obj6.dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: getScheduledMessages(), done: false };
            return obj5;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            error = closure_2;
            const scheduledMessageLogger2 = closure_129_0(closure_129_2[6]).scheduledMessageLogger;
            scheduledMessageLogger2.error("Failed to fetch scheduled messages", error);
            const obj7 = { type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error };
            const obj4 = closure_129_1(closure_129_2[4]);
            obj4.dispatch(obj7);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            messages = value;
            const scheduledMessageLogger = closure_129_0(closure_129_2[6]).scheduledMessageLogger;
            scheduledMessageLogger.info("Fetched scheduled messages", messages);
            const obj9 = { type: "FETCH_SCHEDULED_MESSAGES_SUCCESS", messages };
            obj = closure_129_1(closure_129_2[4]);
            obj.dispatch(obj9);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp30) {
        closure_2 = tmp30;
        if (0 === c3) {
          c5 = 3;
          throw tmp30;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ Endpoints: hasOwnProperty, MessageFlags: metroRequire } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageActionCreators.tsx");

export const createScheduledMessage = function createScheduledMessage() {
  return obj(...arguments);
};
export const updateScheduledMessage = function updateScheduledMessage() {
  return obj(...arguments);
};
export const deleteScheduledMessage = function deleteScheduledMessage() {
  return obj(...arguments);
};
export const sendScheduledMessageNow = function sendScheduledMessageNow() {
  return obj(...arguments);
};
export const fetchScheduledMessages = function fetchScheduledMessages() {
  return obj(...arguments);
};