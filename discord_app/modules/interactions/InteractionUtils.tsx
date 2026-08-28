// discord_app/modules/interactions/InteractionUtils.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import PermissionOverwriteType from "../../flow/Server.tsx";
import _fetchMessageInteractionData from "InteractionActionCreators.tsx";
import getFirstSkemaFieldError from "SkemaUtils.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/AuthenticationStore.tsx";
import closure_5 from "InteractionStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function _executeMessageComponentInteraction() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === sessionId) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              sessionId = undefined;
              c5 = undefined;
              let constants;
              c7 = undefined;
              c8 = undefined;
              ({ componentType: c0, messageId: c1, messageFlags: c2, customId: c3, componentId: c4, applicationId: c5, channelId: c6, guildId: c7, localState: c8 } = callback);
              closure_9 = undefined;
              let obj6;
              sessionId = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                const _Date = Date;
                closure_9 = callback2(11).fromTimestamp(Date.now());
                if (c5.canQueueInteraction(callback2, closure_9)) {
                  c3 = 1;
                  let obj8 = callback2(7456);
                  sessionId = 3;
                  c5 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = obj8.unarchiveThreadIfNecessary(constants);
                  return obj2;
                }
                const obj17 = callback2(11);
              }
            } else if (2 === tmp7) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                c3 = 0;
                const obj4 = { messageId: null, data: null, onFailure: null };
                obj4[0] = callback2;
                let obj5 = { interactionType: null, applicationId: null, customId: null, componentId: null };
                obj5[0] = callback(1956).InteractionTypes.MESSAGE_COMPONENT;
                obj5[1] = c5;
                obj5[2] = c3;
                obj5[3] = sessionId;
                obj4[1] = obj5;
                obj4[2] = function onFailure(code) {
                  let tmp2 = null == arg1;
                  if (tmp2) {
                    tmp2 = null != code;
                  }
                  if (tmp2) {
                    _undefined(_undefined2[9]).sendClydeError(c6, code);
                    obj = _undefined(_undefined2[9]);
                  }
                };
                callback(7972).addQueued(closure_9, obj4);
                if (null != c8) {
                  obj1 = callback(7972);
                  const result = obj1.queueInteractionComponentState(callback2, closure_9, c8, sessionId);
                }
                obj6 = { type: null, nonce: null, guild_id: null, channel_id: null, message_flags: null, message_id: null, application_id: null, session_id: null, data: null };
                obj6[0] = callback(1956).InteractionTypes.MESSAGE_COMPONENT;
                obj6[1] = closure_9;
                obj6[2] = c7;
                obj6[3] = constants;
                obj6[4] = dependencyMap;
                obj6[5] = callback2;
                obj6[6] = c5;
                obj6[7] = sessionId.getSessionId();
                const obj7 = { component_type: null, custom_id: null };
                obj7[0] = callback;
                obj7[1] = c3;
                const merged = Object.assign(callback3(c8));
                obj6[8] = obj7;
                const HTTP = callback(530).HTTP;
                obj8 = { url: null, body: null, timeout: 3000, rejectWithError: null };
                obj8[0] = constants.INTERACTIONS;
                obj8[1] = obj6;
                obj5 = callback(530);
                obj8[3] = obj5.rejectWithMigratedError();
                sessionId = 4;
                c5 = 1;
                const obj9 = { value: null, done: false };
                obj9[0] = HTTP.post(obj8, (arg0) => {
                  closure_1_12(closure_9, arg0, c5, c6, c7);
                });
                return obj9;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp46) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp46;
          } else {
            sessionId = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
function mapMessageComponentLocalStateForAPI(type) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if (PermissionOverwriteType.ComponentType.TEXT_INPUT !== type) {
      if (tmp(1956).ComponentType.FILE_UPLOAD !== type) {
        if (tmp(1956).ComponentType.RADIO_GROUP !== type) {
          if (tmp(1956).ComponentType.CHECKBOX_GROUP !== type) {
            if (tmp(1956).ComponentType.CHECKBOX !== type) {
              if (tmp(1956).ComponentType.STRING_SELECT === type) {
                return type;
              } else {
                if (tmp(1956).ComponentType.USER_SELECT !== type) {
                  if (tmp(1956).ComponentType.ROLE_SELECT !== type) {
                    if (tmp(1956).ComponentType.MENTIONABLE_SELECT !== type) {
                      if (tmp(1956).ComponentType.CHANNEL_SELECT !== type) {
                        return null;
                      }
                    }
                  }
                }
                const selectedOptions = type.selectedOptions;
                obj = { type: null, values: null };
                obj[0] = type.type;
                obj[1] = selectedOptions.map((value) => value.value);
                return obj;
              }
            }
          }
        }
      }
    }
    return null;
  }
}
function handleInteractionResponse(nonce, ok, applicationId, channelId, guildId) {
  if (!ok.ok) {
    if (ok.hasErr) {
      _fetchMessageInteractionData.setFailed(nonce);
      const obj10 = _fetchMessageInteractionData;
    } else {
      if (ok.status >= 400) {
        if (ok.status < 500) {
          if (ok.body) {
            let tmp9 = guildId;
            if (ok.body.code === constants.INVALID_FORM_BODY) {
              if (ok.body.errors) {
                const firstSkemaError = getFirstSkemaFieldError.getFirstSkemaError(ok.body.errors);
                let tmp28 = null == firstSkemaError;
                if (!tmp28) {
                  let tmp29 = "INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" !== firstSkemaError.code;
                  if (tmp29) {
                    tmp29 = "INTERACTION_APPLICATION_COMMAND_INVALID" !== firstSkemaError.code;
                  }
                  tmp28 = tmp29;
                }
                if (!tmp28) {
                  obj = { type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", applicationId: null, channelId: null, guildId: null };
                  obj[1] = applicationId;
                  obj[2] = channelId;
                  if (tmp9 == null) {
                    tmp9 = null;
                  }
                  obj[3] = tmp9;
                  dispatcherDefault.dispatch(obj);
                  const obj7 = dispatcherDefault;
                }
                const obj6 = getFirstSkemaFieldError;
                const tmp24 = require;
                let message;
                if (firstSkemaError != null) {
                  message = firstSkemaError.message;
                }
                _fetchMessageInteractionData.setFailed(nonce, undefined, message);
              }
            }
            if (ok.body.code === constants.UNKNOWN_INTEGRATION) {
              obj = { type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", applicationId: null, channelId: null, guildId: null };
              obj[1] = applicationId;
              obj[2] = channelId;
              let tmp20 = tmp9;
              if (tmp9 == null) {
                tmp20 = null;
              }
              obj[3] = tmp20;
              dispatcherDefault.dispatch(obj);
              const obj3 = dispatcherDefault;
              _fetchMessageInteractionData.setFailed(nonce, undefined, ok.body.message);
              const obj5 = _fetchMessageInteractionData;
            } else {
              const obj2 = _fetchMessageInteractionData;
              obj2.setFailed(nonce, ok.body.code, ok.body.message, ok.status);
            }
            return tmp16;
          }
        }
      }
      obj = _fetchMessageInteractionData;
      const body = ok.body;
      let code;
      if (body != null) {
        code = body.code;
      }
      obj.setFailed(nonce, code);
    }
  }
}
({ Endpoints: closure_6, AbortCodes: error, MessageStates: closure_8, MessageFlags: c9 } = ME);
let obj = { SENDING: 0, [0]: "SENDING", CREATED: 1, [1]: "CREATED", FAILED: 2, [2]: "FAILED", TIMED_OUT: 3, [3]: "TIMED_OUT", EPHEMERAL_SUCCESS: 4, [4]: "EPHEMERAL_SUCCESS" };
let result = require("set").fileFinishedImporting("modules/interactions/InteractionUtils.tsx");

export const getInteractionTimeoutTimestamp = function getInteractionTimeoutTimestamp(arg0) {
  if (null != arg0) {
    if ("" !== arg0) {
      const _Number = Number;
      if (!Number.isNaN(arg0)) {
        let sum = DISCORD_EPOCHDefault.extractTimestamp(arg0) + 900000;
        obj = DISCORD_EPOCHDefault;
      }
      return sum;
    }
  }
  sum = Date.now();
};
export const getInteractionInitialResponseDeadlineTimestamp = function getInteractionInitialResponseDeadlineTimestamp(arg0) {
  if (null != arg0) {
    if ("" !== arg0) {
      const _Number = Number;
      if (!Number.isNaN(arg0)) {
        let sum = DISCORD_EPOCHDefault.extractTimestamp(arg0) + 3000;
        obj = DISCORD_EPOCHDefault;
      }
      return sum;
    }
  }
  sum = Date.now();
};
export const executeMessageComponentInteraction = function executeMessageComponentInteraction(arg0) {
  const self = this;
  const apply = _executeMessageComponentInteraction.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { handleInteractionResponse };
export const InteractionStatusViewState = obj;
export const getInteractionStatusViewState = function getInteractionStatusViewState(state, state2) {
  if (state2 != null) {
    state = state2.state;
  }
  if (state.state !== constants2.SENT) {
    if (state.state !== tmp.SEND_FAILED) {
      let interactionType;
      if (state2 != null) {
        interactionType = state2.data.interactionType;
      }
      const tmp21 = interactionType === PermissionOverwriteType.InteractionTypes.APPLICATION_COMMAND;
      const isCommandTypeResult = state.isCommandType();
      if (!tmp21) {
        if (isCommandTypeResult) {
          if (state.state === tmp.SENDING) {
            return SENDING;
          }
        }
        if (!tmp21) {
          if (null != state.interaction) {
            SENDING = obj.TIMED_OUT;
          }
          if (isCommandTypeResult) {
            if (state.state === tmp.SEND_FAILED) {
              SENDING = obj.FAILED;
            }
          }
          if (null != state.interaction) {
            if (state.hasFlag(tmp23.EPHEMERAL)) {
              SENDING = obj.EPHEMERAL_SUCCESS;
            }
          }
        }
        SENDING = obj.CREATED;
      }
      SENDING = obj.SENDING;
    } else {
      const id2 = state.id;
      if (null != id2) {
        if ("" !== id2) {
          const _Number2 = Number;
          if (!Number.isNaN(id2)) {
            let sum = DISCORD_EPOCHDefault.extractTimestamp(id2) + 3000;
            const obj2 = DISCORD_EPOCHDefault;
          }
          const _Date4 = Date;
          sum < Date.now();
        }
      }
      const _Date3 = Date;
      sum = Date.now();
    }
  } else {
    const id = state.id;
    if (null != id) {
      if ("" !== id) {
        const _Number = Number;
        if (!Number.isNaN(id)) {
          obj = DISCORD_EPOCHDefault;
          let sum1 = obj.extractTimestamp(id) + 900000;
        }
        const _Date2 = Date;
        sum1 < Date.now();
      }
    }
    const _Date = Date;
    sum1 = Date.now();
  }
};
export const canRetryInteractionData = function canRetryInteractionData(interactionData) {
  const options = interactionData.options;
  let length;
  if (options != null) {
    length = options.length;
  }
  let items = options;
  if (1 === length) {
    let tmp4 = options;
    if (options[0].type === PermissionOverwriteType.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      while (true) {
        let options1 = tmp4[0].options;
        let length1;
        if (options1 != null) {
          length1 = options1.length;
        }
        items = options1;
        if (1 !== length1) {
          break;
        } else {
          let tmp6 = require;
          let tmp7 = require;
          let tmp8 = dependencyMap;
          let tmp9 = dependencyMap;
          tmp4 = options1;
          if (options1[0].type === PermissionOverwriteType.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
            continue;
          } else {
            let tmp10 = tmp6;
            let tmp11 = tmp8;
            tmp4 = options1;
            items = options1;
            if (options1[0].type !== tmp7(1956).ApplicationCommandOptionType.SUB_COMMAND) {
              break;
            }
          }
          continue;
        }
      }
    } else {
      tmp4 = options;
      items = options;
    }
    const tmp17 = require;
    const tmp18 = require;
    const tmp19 = dependencyMap;
  }
  if (items == null) {
    items = [];
  }
  for (const item10042 of items) {
    let tmp12 = require;
    let tmp13 = require;
    let tmp14 = dependencyMap;
    let tmp15 = dependencyMap;
    if (item10042.type === PermissionOverwriteType.ApplicationCommandOptionType.ATTACHMENT) {
      let tmp16 = obj;
      obj.return();
      let flag = false;
      return false;
    }
  }
  return true;
};
export const interactionCallbackErrorReason = require("interactionCallbackErrorReason").interactionCallbackErrorReason;