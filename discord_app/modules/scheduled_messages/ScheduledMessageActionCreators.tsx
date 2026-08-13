// discord_app/modules/scheduled_messages/ScheduledMessageActionCreators.tsx
import _slicedToArray from "_slicedToArray";
import dispatcher from "dispatcher";
import ME from "ME";

let c5;
let closure_6;
const require = arg1;
function _uploadAttachments() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let closure_1 = tmp2;
              let cloudUploader;
              closure_1 = undefined;
              if (0 !== cloudUploader.length) {
                let obj2 = callback(table[3]);
                cloudUploader = obj2.createCloudUploader();
                table = 1;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = cloudUploader.uploadFiles(tmp23);
                return obj1;
              } else {
                c3 = 3;
                return { value: "HermesInternal", done: null };
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
              const error = new Error("Upload aborted");
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
  const _uploadAttachments = tmp;
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
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c4;
      let closure_2;
      let _slicedToArray;
      let message;
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
          return { value: "HermesInternal", done: null };
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
              ({ channelId: c0, scheduledTimestamp: message, messageSendData: closure_2, attachments: _slicedToArray, attachmentsToUpload: c4 } = callback);
              let constants;
              let dependencyMap;
              c7 = undefined;
              c8 = undefined;
              let closure_9;
              let closure_10;
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
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                let obj2 = { type: "SCHEDULED_MESSAGES_CREATE_START", channelId: null };
                obj2[1] = callback;
                message(closure_2[5]).dispatch(obj2);
                dependencyMap = 1;
                const obj16 = message(closure_2[5]);
                const obj3 = { content: null, flags: null };
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
              let closure_11 = constants;
              const scheduledMessageLogger = callback(closure_2[6]).scheduledMessageLogger;
              scheduledMessageLogger.error("Failed to create scheduled message", closure_11);
              const body = closure_11.body;
              message = undefined;
              if (body != null) {
                message = body.message;
              }
              if (message == null) {
                message = closure_11.message;
              }
              closure_10 = message;
              let obj6 = message(closure_2[5]);
              const obj5 = { type: "SCHEDULED_MESSAGES_CREATE_FAILURE", channelId: null, errorMsg: null };
              obj5[1] = callback;
              obj5[2] = closure_10;
              obj6.dispatch(obj5);
              const _Error2 = Error;
              const error = new Error(closure_10);
              throw error;
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c8 = 3;
                obj6 = { value: null, done: true };
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
              closure_9 = arg1;
              if (closure_9.ok) {
                obj = message(closure_2[5]);
                const obj8 = { type: "SCHEDULED_MESSAGES_CREATE_SUCCESS", channelId: null, scheduledMessageSend: null };
                obj8[1] = callback;
                obj2 = callback(closure_2[6]);
                obj8[2] = obj2.convertServerScheduledMessageSend(closure_9.body);
                obj.dispatch(obj8);
                dependencyMap = 0;
                c8 = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = closure_9;
                return obj9;
              } else {
                const _Error = Error;
                const error1 = new Error("Failed to create scheduled message");
                throw error1;
              }
            }
            const HTTP = callback(closure_2[7]).HTTP;
            const obj10 = { url: null, body: null, rejectWithError: true };
            obj10[0] = constants.SCHEDULED_MESSAGES;
            const obj11 = { channel_id: null, content: null, scheduled_timestamp: null, flags: null, message_reference: null, allowed_mentions: null, attachments: null };
            obj11[0] = callback;
            obj11[1] = c7;
            obj11[2] = message;
            obj11[3] = c8;
            obj11[4] = closure_2.message_reference;
            obj11[5] = closure_2.allowed_mentions;
            closure_2 = callback2;
            if (callback2 == null) {
              closure_2 = [];
            }
            obj11[6] = closure_2;
            obj10[1] = obj11;
            c7 = 4;
            c8 = 1;
            const obj12 = { value: null, done: false };
            obj12[0] = HTTP.post(obj10);
            return obj12;
          }
        } catch (tmp62) {
          constants = tmp62;
          if (tmp4 === dependencyMap) {
            c8 = tmp2;
            throw tmp62;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _createScheduledMessage = tmp;
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
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c2;
      let c3;
      let message;
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
          return { value: "HermesInternal", done: null };
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
              let c4 = tmp3;
              let callback2 = tmp7;
              let callback;
              message = undefined;
              let dependencyMap;
              callback2 = undefined;
              ({ scheduledMessageId: c0, scheduledTimestamp: message, content: c2, flags: c3 } = callback);
              c4 = undefined;
              let closure_5;
              let constants;
              c7 = undefined;
              c8 = undefined;
              let closure_9;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj1 = { value: null, done: true };
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
                const obj14 = callback(11443);
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
              c8 = 1;
              const obj12 = message(709);
            }
          } else if (2 === tmp7) {
            constants = 0;
            let closure_10 = closure_5;
            const scheduledMessageLogger = callback(11443).scheduledMessageLogger;
            scheduledMessageLogger.error("Failed to update scheduled message", closure_10);
            const body = closure_10.body;
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
            const _Error2 = Error;
            const error = new Error(closure_9);
            throw error;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            c8 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            c8 = arg1;
            if (c8.ok) {
              obj = message(709);
              const obj8 = { type: "SCHEDULED_MESSAGES_UPDATE_SUCCESS", scheduledMessageSend: null };
              obj2 = callback(11443);
              obj8[1] = obj2.convertServerScheduledMessageSend(c8.body);
              obj.dispatch(obj8);
              constants = 0;
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const _Error = Error;
              const error1 = new Error("Failed to update scheduled message");
              throw error1;
            }
          }
        } catch (tmp67) {
          closure_5 = tmp67;
          if (tmp4 === constants) {
            c8 = tmp2;
            throw tmp67;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _updateScheduledMessage = tmp;
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
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, ok) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw ok;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = ok;
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
              throw ok;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = ok;
              return obj;
            } else {
              let _slicedToArray = tmp3;
              let closure_2 = tmp7;
              let callback2;
              const obj1 = { type: "SCHEDULED_MESSAGES_DELETE_START", scheduledMessageId: null };
              obj1[1] = callback;
              outer1_1(outer1_2[5]).dispatch(obj1);
              let c5 = 1;
              const HTTP = callback(outer1_2[7]).HTTP;
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
            closure_2 = dispatcher;
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
            const _Error2 = Error;
            const error = new Error(callback2);
            throw error;
          } else if (arg0 === 1) {
            c7 = 3;
            throw ok;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = ok;
            return obj5;
          } else if (ok.ok) {
            obj = callback2(closure_2[5]);
            const obj6 = { type: "SCHEDULED_MESSAGES_DELETE_SUCCESS", scheduledMessageId: null };
            obj6[1] = callback;
            obj.dispatch(obj6);
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const _Error = Error;
            const error1 = new Error("Failed to delete scheduled message");
            throw error1;
          }
        } catch (tmp43) {
          dispatcher = tmp43;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp43;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const _deleteScheduledMessage = tmp;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp2;
            let lib = tmp5;
            lib = undefined;
            const HTTP = outer1_0(530).HTTP;
            const obj1 = { url: null, rejectWithError: true };
            obj1[0] = outer1_5.SCHEDULED_MESSAGES;
            dependencyMap = 1;
            c3 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          lib = arg1;
          if (lib.ok) {
            const body = lib.body;
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = body.map(lib(11443).convertServerScheduledMessageSend);
            return obj;
          } else {
            const _Error = Error;
            const error = new Error("Failed to fetch scheduled messages");
            throw error;
          }
        }
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
  });
  const _getScheduledMessages = tmp;
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
    outer1_1(outer1_2[5]).dispatch({ type: "FETCH_SCHEDULED_MESSAGES" });
    let c3 = 1;
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
      const scheduledMessageLogger2 = callback(11443).scheduledMessageLogger;
      scheduledMessageLogger2.error("Failed to fetch scheduled messages", callback2);
      let obj3 = callback2(709);
      const obj2 = { type: "FETCH_SCHEDULED_MESSAGES_FAILURE", error: null };
      obj2[1] = callback2;
      obj3.dispatch(obj2);
      let c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      callback = arg1;
      const scheduledMessageLogger = callback(11443).scheduledMessageLogger;
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
  const _fetchScheduledMessages = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: c5, MessageFlags: closure_6 } = ME);
let result = require("ME").fileFinishedImporting("modules/scheduled_messages/ScheduledMessageActionCreators.tsx");

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
export const updateScheduledMessage = function updateScheduledMessage() {
  const self = this;
  const apply = _updateScheduledMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteScheduledMessage = function deleteScheduledMessage() {
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