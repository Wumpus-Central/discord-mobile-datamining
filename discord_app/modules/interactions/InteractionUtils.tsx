// === Module 7799: InteractionUtils ===

// Module 7799 (InteractionUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Server from "Server" /* 1985 */;
import interactionCallbackErrorReason from "interactionCallbackErrorReason" /* 5117 */;
import InteractionActionCreators from "InteractionActionCreators" /* 7800 */;
import _slicedToArray from "_slicedToArray" /* 7801 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import InteractionStore from "InteractionStore" /* 7600 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _executeMessageComponentInteraction() {
  obj = _asyncToGenerator(async (component_type) => {
    let application_id;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let closure_1;
    let componentId;
    let custom_id;
    let nonce;
    let obj11;
    let obj13;
    let obj6;
    let obj9;
    if (1 === componentId) {
      if (component_type === 1) {
        application_id = 3;
        throw value;
      } else if (component_type === 2) {
        application_id = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const _Date = Date;
        const obj16 = closure_130_1(closure_130_2[4]);
        nonce = obj16.fromTimestamp(Date.now());
        if (closure_130_5.canQueueInteraction(message_id, nonce)) {
          custom_id = 1;
          componentId = 3;
          application_id = 1;
          const obj7 = { value: obj9.unarchiveThreadIfNecessary(channel_id), done: false };
          obj9 = closure_130_1(closure_130_2[5]);
          return obj7;
        }
      }
    } else if (2 === componentId) {
      custom_id = 0;
      application_id = 3;
      return { value: "IconComponent", done: null };
    } else if (3 === componentId) {
      if (component_type === 1) {
        application_id = 3;
        throw value;
      } else if (component_type === 2) {
        custom_id = 0;
        application_id = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        custom_id = 0;
        const obj10 = {
          messageId: message_id,
          data: obj11,
          onFailure(code, arg1) {
                const tmp2 = null == arg1 && null != code;
                if (tmp2) {
                  obj = closure_1(message_flags[9]);
                  obj.sendClydeError(channel_id, code);
                }
              }
        };
        obj11 = { interactionType: closure_130_0(closure_130_2[7]).InteractionTypes.MESSAGE_COMPONENT, applicationId: application_id, customId: custom_id, componentId };
        const addQueued = closure_130_0(closure_130_2[6]).addQueued;
        const tmp54 = closure_130_0(closure_130_2[6]);
        addQueued(nonce, obj10);
        if (null != c8) {
          const obj2 = closure_130_0(closure_130_2[6]);
          const result = obj2.queueInteractionComponentState(message_id, nonce, c8, componentId);
        }
        const obj12 = { type: closure_130_0(closure_130_2[7]).InteractionTypes.MESSAGE_COMPONENT, nonce, guild_id, channel_id, message_flags, message_id, application_id, session_id: closure_130_4.getSessionId(), data: obj13 };
        obj13 = { component_type, custom_id };
        const merged = Object.assign(closure_130_11(c8));
        const HTTP = closure_130_0(closure_130_2[8]).HTTP;
        const request = { url: closure_130_6.INTERACTIONS, body: obj12, timeout: 3000, rejectWithError: obj6.rejectWithMigratedError() };
        const post = HTTP.post;
        obj6 = closure_130_0(closure_130_2[8]);
        componentId = 4;
        application_id = 1;
        const obj14 = {
          value: post(request, (arg0) => {
                closure_2_12(nonce, arg0, closure_1_5, channel_id, guild_id);
              }),
          done: false
        };
        return obj14;
      }
    } else if (component_type === 1) {
      application_id = 3;
      throw value;
    } else if (component_type === 2) {
      application_id = 3;
      obj = { value, done: true };
      return obj;
    }
    await "IconComponent";
    ({ componentType: c0, messageId: c1, messageFlags: c2, customId: c3, componentId: c4, applicationId: c5, channelId: c6, guildId: c7, localState: c8 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
function mapMessageComponentLocalStateForAPI(type) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if (Server.ComponentType.TEXT_INPUT !== type) {
      if (Server.ComponentType.FILE_UPLOAD !== type) {
        if (Server.ComponentType.RADIO_GROUP !== type) {
          if (Server.ComponentType.CHECKBOX_GROUP !== type) {
            if (Server.ComponentType.CHECKBOX !== type) {
              if (Server.ComponentType.STRING_SELECT === type) {
                return type;
              } else {
                if (Server.ComponentType.USER_SELECT !== type) {
                  if (Server.ComponentType.ROLE_SELECT !== type) {
                    if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
                      if (Server.ComponentType.CHANNEL_SELECT !== type) {
                        return null;
                      }
                    }
                  }
                }
                const selectedOptions = type.selectedOptions;
                obj = { type: type.type, values: selectedOptions.map((value) => value.value) };
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
  let tmp22;
  if (!ok.ok) {
    if (ok.hasErr) {
      const obj6 = InteractionActionCreators;
      obj6.setFailed(nonce);
    } else {
      if (ok.status >= 400) {
        if (ok.status < 500) {
          if (ok.body) {
            let tmp10 = guildId;
            if (ok.body.code === metroImportDefault.INVALID_FORM_BODY) {
              if (ok.body.errors) {
                const obj4 = _slicedToArray;
                const firstSkemaError = obj4.getFirstSkemaError(ok.body.errors);
                let tmp30 = null == firstSkemaError;
                if (!tmp30) {
                  tmp30 = "INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" !== firstSkemaError.code && "INTERACTION_APPLICATION_COMMAND_INVALID" !== firstSkemaError.code;
                  const tmp31 = "INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" !== firstSkemaError.code && "INTERACTION_APPLICATION_COMMAND_INVALID" !== firstSkemaError.code;
                }
                if (!tmp30) {
                  const obj2 = { type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", applicationId, channelId, guildId: tmp10 };
                  const dispatch2 = DispatcherDefault.dispatch;
                  DispatcherDefault;
                  if (tmp10 == null) {
                    tmp10 = null;
                  }
                  dispatch2(obj2);
                }
                let message;
                const setFailed2 = InteractionActionCreators.setFailed;
                InteractionActionCreators;
                if (firstSkemaError != null) {
                  message = firstSkemaError.message;
                }
                setFailed2(nonce, undefined, message);
              }
            }
            if (ok.body.code === metroImportDefault.UNKNOWN_INTEGRATION) {
              const obj5 = { type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", applicationId, channelId, guildId: tmp22 };
              tmp22 = tmp10;
              const dispatch = DispatcherDefault.dispatch;
              DispatcherDefault;
              if (tmp10 == null) {
                tmp22 = null;
              }
              dispatch(obj5);
              const obj3 = InteractionActionCreators;
              obj3.setFailed(nonce, undefined, ok.body.message);
            } else {
              obj = InteractionActionCreators;
              obj.setFailed(nonce, ok.body.code, ok.body.message, ok.status);
            }
            return tmp17;
          }
        }
      }
      const body = ok.body;
      let code;
      const setFailed = InteractionActionCreators.setFailed;
      InteractionActionCreators;
      if (body != null) {
        code = body.code;
      }
      setFailed(nonce, code);
    }
  }
}
({ Endpoints: metroRequire, AbortCodes: metroImportDefault, MessageStates: metroImportAll, MessageFlags: c9 } = Constants);
obj = { SENDING: 0, [0]: "SENDING", CREATED: 1, [1]: "CREATED", FAILED: 2, [2]: "FAILED", TIMED_OUT: 3, [3]: "TIMED_OUT", EPHEMERAL_SUCCESS: 4, [4]: "EPHEMERAL_SUCCESS" };
let result = size.fileFinishedImporting("modules/interactions/InteractionUtils.tsx");
const interactionCallbackErrorReason_export = interactionCallbackErrorReason.interactionCallbackErrorReason;

export const getInteractionTimeoutTimestamp = function getInteractionTimeoutTimestamp(arg0) {
  if (null != arg0) {
    if ("" !== arg0) {
      let sum;
      const _Number = Number;
      if (!Number.isNaN(arg0)) {
        obj = SnowflakeUtilsDefault;
        sum = obj.extractTimestamp(arg0) + 900000;
      }
      return sum;
    }
  }
  sum = Date.now();
};
export const getInteractionInitialResponseDeadlineTimestamp = function getInteractionInitialResponseDeadlineTimestamp(arg0) {
  if (null != arg0) {
    if ("" !== arg0) {
      let sum;
      const _Number = Number;
      if (!Number.isNaN(arg0)) {
        obj = SnowflakeUtilsDefault;
        sum = obj.extractTimestamp(arg0) + 3000;
      }
      return sum;
    }
  }
  sum = Date.now();
};
export const executeMessageComponentInteraction = function executeMessageComponentInteraction() {
  return obj(...arguments);
};
export { handleInteractionResponse };
export const InteractionStatusViewState = obj;
export const getInteractionStatusViewState = function getInteractionStatusViewState(state, state2) {
  let SENDING;
  if (state2 != null) {
    state = state2.state;
  }
  let tmp2 = state.state === metroImportAll.SENT;
  if (tmp2) {
    const id = state.id;
    if (null != id) {
      if ("" !== id) {
        let sum;
        const _Number = Number;
        if (!Number.isNaN(id)) {
          obj = SnowflakeUtilsDefault;
          sum = obj.extractTimestamp(id) + 900000;
        }
        const _Date2 = Date;
        tmp2 = sum < Date.now();
      }
    }
    const _Date = Date;
    sum = Date.now();
  }
  let tmp9 = state.state === metroImportAll.SEND_FAILED;
  if (tmp9) {
    const id2 = state.id;
    if (null != id2) {
      if ("" !== id2) {
        let sum1;
        const _Number2 = Number;
        if (!Number.isNaN(id2)) {
          const obj2 = SnowflakeUtilsDefault;
          sum1 = obj2.extractTimestamp(id2) + 3000;
        }
        const _Date4 = Date;
        tmp9 = sum1 < Date.now();
      }
    }
    const _Date3 = Date;
    sum1 = Date.now();
  }
  let interactionType;
  if (state2 != null) {
    interactionType = state2.data.interactionType;
  }
  const tmp19 = interactionType === Server.InteractionTypes.APPLICATION_COMMAND;
  const isCommandTypeResult = state.isCommandType();
  if (!tmp19) {
    if (isCommandTypeResult) {
      if (state.state === metroImportAll.SENDING) {
        return SENDING;
      }
    }
    if (!tmp19) {
      if (null != state.interaction) {
        SENDING = obj.TIMED_OUT;
      }
      if (isCommandTypeResult) {
        if (state.state === metroImportAll.SEND_FAILED) {
          SENDING = obj.FAILED;
        }
      }
      if (null != state.interaction) {
        if (state.hasFlag(constants3.EPHEMERAL)) {
          SENDING = obj.EPHEMERAL_SUCCESS;
        }
      }
    }
    SENDING = obj.CREATED;
  }
  SENDING = obj.SENDING;
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
          tmp4 = options1;
          if (options1[0].type === Server.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
            continue;
          } else {
            tmp4 = options1;
            items = options1;
            if (options1[0].type !== Server.ApplicationCommandOptionType.SUB_COMMAND) {
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
export { interactionCallbackErrorReason_export as interactionCallbackErrorReason };