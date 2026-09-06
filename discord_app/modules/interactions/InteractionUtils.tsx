// === Module 8116: InteractionUtils ===

// Module 8116 (InteractionUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Server from "Server" /* 1894 */;
import InteractionActionCreators from "InteractionActionCreators" /* 8117 */;
import SkemaUtils from "SkemaUtils" /* 8118 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import InteractionStore from "InteractionStore" /* 7941 */;

require = fn;
let closure_10 = async function _executeMessageComponentInteraction(arg0, value) {
  if (1 === tmp7) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      let obj1 = { value, done: true };
      return obj1;
    } else {
      const _Date = Date;
      closure_129_9 = closure_130_1(closure_130_2[4]).fromTimestamp(Date.now());
      if (closure_130_5.canQueueInteraction(closure_129_1, closure_129_9)) {
        c3 = 1;
        let obj8 = closure_130_1(closure_130_2[5]);
        c4 = 3;
        c5 = 1;
        return { value: obj8.unarchiveThreadIfNecessary(closure_129_6), done: false };
      }
      closure_130_1(closure_130_2[4]);
    }
  } else if (2 === tmp7) {
    c3 = 0;
    c5 = 3;
    return { value: "HermesInternal", done: null };
  } else if (3 === tmp7) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 0;
      c5 = 3;
      return { value, done: true };
    } else {
      c3 = 0;
      const obj4 = { messageId: closure_129_1, data: null, onFailure: null };
      let obj5 = { interactionType: closure_130_0(closure_130_2[7]).InteractionTypes.MESSAGE_COMPONENT, applicationId: closure_129_5, customId: closure_129_3, componentId: closure_129_4 };
      obj4.data = obj5;
      obj4.onFailure = function onFailure(code, arg1) {
        let tmp2 = null == arg1;
        if (tmp2) {
          tmp2 = null != code;
        }
        if (tmp2) {
          closure_1(dependencyMap[9]).sendClydeError(closure_1_6, code);
          const obj = closure_1(dependencyMap[9]);
        }
      };
      closure_130_0(closure_130_2[6]).addQueued(closure_129_9, obj4);
      if (null != closure_129_8) {
        obj1 = closure_130_0(closure_130_2[6]);
        const result = obj1.queueInteractionComponentState(closure_129_1, closure_129_9, closure_129_8, closure_129_4);
      }
      const obj6 = { type: closure_130_0(closure_130_2[7]).InteractionTypes.MESSAGE_COMPONENT, nonce: closure_129_9, guild_id: closure_129_7, channel_id: closure_129_6, message_flags: closure_129_2, message_id: closure_129_1, application_id: closure_129_5, session_id: closure_130_4.getSessionId(), data: null };
      const merged = Object.assign(closure_130_11(closure_129_8));
      obj6.data = { component_type: closure_129_0, custom_id: closure_129_3 };
      closure_129_10 = obj6;
      const HTTP = closure_130_0(closure_130_2[8]).HTTP;
      const request = { url: closure_130_6.INTERACTIONS, body: closure_129_10, timeout: 3000, rejectWithError: null };
      obj5 = closure_130_0(closure_130_2[8]);
      request.rejectWithError = obj5.rejectWithMigratedError();
      c4 = 4;
      c5 = 1;
      obj8 = {
        value: HTTP.post(request, (arg0) => {
              closure_2_12(closure_1_9, arg0, closure_1_5, closure_1_6, closure_1_7);
            }),
        done: false
      };
      return obj8;
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 === 2) {
    c5 = 3;
    return { value, done: true };
  }
  await "HermesInternal";
  closure_2 = tmp3;
  ({ componentType: closure_129_0, messageId: closure_129_1, messageFlags: closure_129_2, customId: closure_129_3, componentId: closure_129_4, applicationId: closure_129_5, channelId: closure_129_6, guildId: closure_129_7, localState: closure_129_8 } = closure_0);
  return "PX_16";
};
function mapMessageComponentLocalStateForAPI(type) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if (Server.ComponentType.TEXT_INPUT !== type) {
      if (tmp(1894).ComponentType.FILE_UPLOAD !== type) {
        if (tmp(1894).ComponentType.RADIO_GROUP !== type) {
          if (tmp(1894).ComponentType.CHECKBOX_GROUP !== type) {
            if (tmp(1894).ComponentType.CHECKBOX !== type) {
              if (tmp(1894).ComponentType.STRING_SELECT === type) {
                return type;
              } else {
                if (tmp(1894).ComponentType.USER_SELECT !== type) {
                  if (tmp(1894).ComponentType.ROLE_SELECT !== type) {
                    if (tmp(1894).ComponentType.MENTIONABLE_SELECT !== type) {
                      if (tmp(1894).ComponentType.CHANNEL_SELECT !== type) {
                        return null;
                      }
                    }
                  }
                }
                const selectedOptions = type.selectedOptions;
                const obj = { type: type.type, values: selectedOptions.map((value) => value.value) };
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
      InteractionActionCreators.setFailed(nonce);
    } else {
      if (ok.status >= 400) {
        if (ok.status < 500) {
          if (ok.body) {
            let tmp9 = guildId;
            if (ok.body.code === constants.INVALID_FORM_BODY) {
              if (ok.body.errors) {
                const firstSkemaError = SkemaUtils.getFirstSkemaError(ok.body.errors);
                let tmp28 = null == firstSkemaError;
                if (!tmp28) {
                  let tmp29 = "INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" !== firstSkemaError.code;
                  if (tmp29) {
                    tmp29 = "INTERACTION_APPLICATION_COMMAND_INVALID" !== firstSkemaError.code;
                  }
                  tmp28 = tmp29;
                }
                if (!tmp28) {
                  let obj = { type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", applicationId, channelId, guildId: null };
                  if (tmp9 == null) {
                    tmp9 = null;
                  }
                  obj.guildId = tmp9;
                  DispatcherDefault.dispatch(obj);
                }
                let message;
                if (firstSkemaError != null) {
                  message = firstSkemaError.message;
                }
                InteractionActionCreators.setFailed(nonce, undefined, message);
              }
            }
            if (ok.body.code === constants.UNKNOWN_INTEGRATION) {
              obj = { type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", applicationId, channelId, guildId: null };
              let tmp20 = tmp9;
              if (tmp9 == null) {
                tmp20 = null;
              }
              obj.guildId = tmp20;
              DispatcherDefault.dispatch(obj);
              InteractionActionCreators.setFailed(nonce, undefined, ok.body.message);
            } else {
              const obj2 = InteractionActionCreators;
              obj2.setFailed(nonce, ok.body.code, ok.body.message, ok.status);
            }
            return tmp16;
          }
        }
      }
      obj = InteractionActionCreators;
      const body = ok.body;
      let code;
      if (body != null) {
        code = body.code;
      }
      obj.setFailed(nonce, code);
    }
  }
}
const Constants = fn(1074);
({ Endpoints: metroRequire, AbortCodes: closure_7, MessageStates: closure_8, MessageFlags: closure_9 } = Constants);
const InteractionStatusViewState = { SENDING: 0, [0]: "SENDING", CREATED: 1, [1]: "CREATED", FAILED: 2, [2]: "FAILED", TIMED_OUT: 3, [3]: "TIMED_OUT", EPHEMERAL_SUCCESS: 4, [4]: "EPHEMERAL_SUCCESS" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/interactions/InteractionUtils.tsx");

export const getInteractionTimeoutTimestamp = function getInteractionTimeoutTimestamp(arg0) {
  if (null != arg0) {
    if ("" !== arg0) {
      const _Number = Number;
      if (!Number.isNaN(arg0)) {
        let sum = SnowflakeUtilsDefault.extractTimestamp(arg0) + 900000;
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
        let sum = SnowflakeUtilsDefault.extractTimestamp(arg0) + 3000;
      }
      return sum;
    }
  }
  sum = Date.now();
};
export const executeMessageComponentInteraction = function executeMessageComponentInteraction() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { handleInteractionResponse };
export { InteractionStatusViewState };
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
      const tmp21 = interactionType === Server.InteractionTypes.APPLICATION_COMMAND;
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
            let sum = SnowflakeUtilsDefault.extractTimestamp(id2) + 3000;
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
          obj = SnowflakeUtilsDefault;
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
    if (options[0].type === Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
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
          let tmp7 = require;
          tmp4 = options1;
          if (options1[0].type === Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
            continue;
          } else {
            tmp4 = options1;
            items = options1;
            if (options1[0].type !== tmp7(1894).ApplicationCommandOptionType.SUB_COMMAND) {
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
  }
  if (items == null) {
    items = [];
  }
  for (const item10042 of items) {
    if (item10042.type === Server.ApplicationCommandOptionType.ATTACHMENT) {
      obj.return();
      let flag = false;
      return false;
    }
  }
  return true;
};
export const interactionCallbackErrorReason = fn(4787).interactionCallbackErrorReason;