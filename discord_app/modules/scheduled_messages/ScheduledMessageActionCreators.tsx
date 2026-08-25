// === Module 11570: _uploadAttachments ===

// Module 11570 (_uploadAttachments)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import ME from "ME" /* 676 */;

const require = arg1;
function _uploadAttachments() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              let cloudUploader;
              closure_1 = undefined;
              if (0 !== cloudUploader.length) {
                let obj2 = callback(table[3]);
                cloudUploader = obj2.createCloudUploader();
                table = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = cloudUploader.uploadFiles(tmp23);
                return obj1;
              } else {
                c3 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_1 = arg1;
            if (cloudUploader._aborted) {
              const _Error = Error;
              error = new Error("Upload aborted");
              throw error;
            } else {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = closure_1.map((closure_0, closure_1) => cloudUploader(table[4]).getAttachmentPayload(closure_0, closure_1));
              return obj;
            }
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createScheduledMessage() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = tmp3;
              let callback2 = tmp7;
              let callback;
              message = undefined;
              closure_2 = undefined;
              callback2 = undefined;
              c4 = undefined;
              ({ channelId: c0, scheduledTimestamp: message, messageSendData: closure_2, attachments: closure_3, attachmentsToUpload: c4 } = callback);
              let constants;
              dependencyMap = undefined;
              c7 = undefined;
              c8 = undefined;
              let body;
              closure_10 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                const obj2 = { type: "SCHEDULED_MESSAGES_CREATE_START", channelId: null };
                obj2[1] = callback;
                message(closure_2[5]).dispatch(obj2);
                dependencyMap = 1;
                const obj16 = message(closure_2[5]);
                let obj3 = { content: null, flags: null };
                obj3[0] = closure_2.content;
                obj3[1] = closure_2.flags;
                constants = callback(closure_2[6]).parseContentAndFlagsForSilentMessage(obj3);
                dependencyMap = callback2(constants, 2);
                c7 = 32;
                c8 = 5;
                if (null != c4) {
                  c7 = 3;
                  c8 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = (function uploadAttachments(c4) {
                    const self = this;
                    const apply = c7.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(c4);
                  return obj4;
                }
                const obj18 = callback(closure_2[6]);
              }
            } else if (2 === tmp7) {
              dependencyMap = 0;
              closure_11 = constants;
              const scheduledMessageLogger = callback(closure_2[6]).scheduledMessageLogger;
              scheduledMessageLogger.error("Failed to create scheduled message", closure_11);
              body = closure_11.body;
              message = undefined;
              if (body != null) {
                message = body.message;
              }
              if (message == null) {
                message = closure_11.message;
              }
              closure_10 = message;
              obj3 = message(closure_2[5]);
              const obj5 = { type: "SCHEDULED_MESSAGES_CREATE_FAILURE", channelId: null, errorMsg: null };
              obj5[1] = callback;
              obj5[2] = closure_10;
              obj3.dispatch(obj5);
              const _Error = Error;
              error = new Error(closure_10);
              throw error;
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c8 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                callback2 = arg1;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c8 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              body = arg1;
              const obj8 = { type: "SCHEDULED_MESSAGES_CREATE_SUCCESS", channelId: null, scheduledMessageSend: null };
              obj8[1] = callback;
              const obj13 = message(closure_2[5]);
              obj8[2] = callback(closure_2[6]).convertServerScheduledMessageSend(body.body);
              obj13.dispatch(obj8);
              dependencyMap = 0;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            }
            const HTTP = callback(closure_2[7]).HTTP;
            const obj9 = { url: null, body: null, rejectWithError: true };
            obj9[0] = constants.SCHEDULED_MESSAGES;
            const obj10 = { channel_id: null, content: null, scheduled_timestamp: null, flags: null, message_reference: null, allowed_mentions: null, attachments: null };
            obj10[0] = callback;
            obj10[1] = c7;
            obj10[2] = message;
            obj10[3] = c8;
            obj10[4] = closure_2.message_reference;
            obj10[5] = closure_2.allowed_mentions;
            closure_2 = callback2;
            if (callback2 == null) {
              closure_2 = [];
            }
            obj10[6] = closure_2;
            obj9[1] = obj10;
            c7 = 4;
            c8 = 1;
            const obj11 = { value: null, done: false };
            obj11[0] = HTTP.post(obj9);
            return obj11;
          }
        } catch (tmp49) {
          constants = tmp49;
          if (tmp4 === dependencyMap) {
            c8 = tmp2;
            throw tmp49;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_8 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateScheduledMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (body === 2) {
        body = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          body = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              body = 3;
              throw arg1;
            } else if (arg0 === 2) {
              body = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = tmp3;
              let callback2 = tmp7;
              let callback;
              message = undefined;
              dependencyMap = undefined;
              callback2 = undefined;
              ({ scheduledMessageId: c0, scheduledTimestamp: message, content: c2, flags: c3 } = callback);
              c4 = undefined;
              closure_5 = undefined;
              let constants;
              c7 = undefined;
              body = undefined;
              closure_9 = undefined;
              c7 = 1;
              body = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              body = 3;
              throw arg1;
            } else if (arg0 === 2) {
              body = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj2 = { type: "SCHEDULED_MESSAGES_UPDATE_START", scheduledMessageId: null };
              obj2[1] = callback;
              message(709).dispatch(obj2);
              constants = 1;
              if (null == dependencyMap) {
                const items = [dependencyMap, callback2];
                let result = items;
              } else {
                const obj3 = { content: null, flags: null };
                obj3[0] = dependencyMap;
                const obj14 = callback(11572);
                dependencyMap = callback2;
                if (callback2 == null) {
                  dependencyMap = 0;
                }
                obj3[1] = callback(1403).removeFlag(dependencyMap, constants.SUPPRESS_NOTIFICATIONS);
                result = obj14.parseContentAndFlagsForSilentMessage(obj3);
                const obj16 = callback(1403);
              }
              c4 = result;
              closure_5 = callback2(c4, 2);
              constants = closure_5[0];
              c7 = closure_5[1];
              const HTTP = callback(530).HTTP;
              let obj4 = { url: null, body: null, rejectWithError: true };
              obj4[0] = closure_5.SCHEDULED_MESSAGE(callback);
              const obj5 = { scheduled_timestamp: null, content: null, flags: null };
              obj5[0] = message;
              obj5[1] = constants;
              obj5[2] = c7;
              obj4[1] = obj5;
              HTTP.patch(obj4);
              c7 = 3;
              body = 1;
              const obj12 = message(709);
            }
          } else if (2 === tmp7) {
            constants = 0;
            closure_10 = closure_5;
            const scheduledMessageLogger = callback(11572).scheduledMessageLogger;
            scheduledMessageLogger.error("Failed to update scheduled message", closure_10);
            body = closure_10.body;
            message = undefined;
            if (body != null) {
              message = body.message;
            }
            if (message == null) {
              message = closure_10.message;
            }
            closure_9 = message;
            obj4 = message(709);
            const obj6 = { type: "SCHEDULED_MESSAGES_UPDATE_FAILURE", scheduledMessageId: null, errorMsg: null };
            obj6[1] = callback;
            obj6[2] = closure_9;
            obj4.dispatch(obj6);
            const _Error = Error;
            error = new Error(closure_9);
            throw error;
          } else if (arg0 === 1) {
            body = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            body = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            body = arg1;
            obj = message(709);
            const obj8 = { type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: null };
            obj2 = callback(11572);
            obj8[1] = obj2.convertServerScheduledMessageSend(body.body);
            obj.dispatch(obj8);
            constants = 0;
            body = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp63) {
          closure_5 = tmp63;
          if (tmp4 === constants) {
            body = tmp2;
            throw tmp63;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteScheduledMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp7;
              let callback2;
              obj1 = { type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId: null };
              obj1[1] = callback;
              closure_1_1(closure_1_2[5]).dispatch(obj1);
              c5 = 1;
              const HTTP = callback(closure_1_2[7]).HTTP;
              const obj2 = { url: null, rejectWithError: true };
              obj2[0] = c5.SCHEDULED_MESSAGE(callback);
              c6 = 2;
              c7 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.del(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_2 = closure_4;
            const scheduledMessageLogger = callback(closure_2[6]).scheduledMessageLogger;
            scheduledMessageLogger.error("Failed to cancel scheduled message", closure_2);
            const body = closure_2.body;
            let message;
            if (body != null) {
              message = body.message;
            }
            callback2 = message;
            if (message == null) {
              callback2 = closure_2.message;
            }
            obj3 = callback2(closure_2[5]);
            const obj4 = { type: "SCHEDULED_MESSAGES_DELETE_FAILURE", scheduledMessageId: null, errorMsg: null };
            obj4[1] = callback;
            obj4[2] = callback2;
            obj3.dispatch(obj4);
            const _Error = Error;
            error = new Error(callback2);
            throw error;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            obj = callback2(closure_2[5]);
            const obj6 = { type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId: null };
            obj6[1] = callback;
            obj.dispatch(obj6);
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getScheduledMessages() {
  const self = this;
  const tmp = callback(function*() {
    const callback = tmp2;
    const HTTP = closure_1_0(530).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_1_5.SCHEDULED_MESSAGES;
    yield HTTP.get(obj1);
    const body = arg1.body;
    return body.map(callback(11572).convertServerScheduledMessageSend);
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchScheduledMessages() {
  let self = this;
  const tmp = callback(function*() {
    let callback2 = tmp3;
    closure_1_1(closure_1_2[5]).dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
    c3 = 1;
    yield (function getScheduledMessages() {
      const self = this;
      const apply = closure_11.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    if (1 === tmp7) {
      c3 = 0;
      callback2 = dependencyMap;
      const scheduledMessageLogger2 = callback(11572).scheduledMessageLogger;
      scheduledMessageLogger2.error("Failed to fetch scheduled messages", callback2);
      let obj3 = callback2(709);
      const obj2 = { type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error: null };
      obj2[1] = callback2;
      obj3.dispatch(obj2);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      callback = arg1;
      const scheduledMessageLogger = callback(11572).scheduledMessageLogger;
      scheduledMessageLogger.info("Fetched scheduled messages", callback);
      const obj = callback2(709);
      obj3 = { type: "FETCH_SCHEDULED_MESSAGES_SUCCESS", messages: null };
      obj3[1] = callback;
      obj.dispatch(obj3);
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  });
  closure_12 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: c5, MessageFlags: closure_6 } = ME);
let result = require("set").fileFinishedImporting("modules/scheduled_messages/ScheduledMessageActionCreators.tsx");

export const createScheduledMessage = function createScheduledMessage(arg0) {
  const self = this;
  const apply = _createScheduledMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateScheduledMessage = function updateScheduledMessage(arg0) {
  const self = this;
  const apply = _updateScheduledMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteScheduledMessage = function deleteScheduledMessage(closure_0) {
  const self = this;
  const apply = _deleteScheduledMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchScheduledMessages = function fetchScheduledMessages() {
  const self = this;
  const apply = _fetchScheduledMessages.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};