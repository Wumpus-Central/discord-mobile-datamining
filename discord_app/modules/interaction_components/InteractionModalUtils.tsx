// === Module 17520: InteractionModalUtils ===

// Module 17520 (InteractionModalUtils)
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Server from "Server" /* 1985 */;
import DraftStore from "DraftStore" /* 7031 */;
import stageAttachmentFilesDefault from "stageAttachmentFiles" /* 7472 */;
import ComponentStateContext from "ComponentStateContext" /* 7795 */;
import getURLForApplicationDefault from "getURLForApplication" /* 8706 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8812 */;
import InteractionModalStore2 from "InteractionModalStore" /* 14162 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7267 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 7796 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const InteractionModalStore = InteractionModalStore2;
let _require, c1, c5, c6, importDefault, set;

function validate(arr) {
  let c0 = true;
  const item = arr.forEach((fn) => {
    if (!fn()) {
      c0 = false;
    }
  });
  return c0;
}
function getData(arg0, arr, arg2) {
  const f130973 = (type) => {
    let components;
    let items;
    let mapped;
    let mapped1;
    let type6;
    let value;
    let value2;
    let values;
    let values2;
    type = type.type;
    if (Server.ComponentType.ACTION_ROW === type) {
      const obj4 = { type: type.type, components: components.map(f130973) };
      components = type.components;
      return obj4;
    } else if (Server.ComponentType.TEXT_INPUT === type) {
      const iter3 = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
      const obj5 = { type: null, custom_id: null, value };
      ({ type: obj9.type, customId: obj9.custom_id } = type);
      let type1;
      if (iter3 != null) {
        type1 = iter3.type;
      }
      value = null;
      if (type1 === type.type) {
        value = iter3.value;
      }
      return obj5;
    } else if (Server.ComponentType.FILE_UPLOAD === type) {
      const interactionComponentState = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
      let type2;
      if (interactionComponentState != null) {
        type2 = interactionComponentState.type;
      }
      let uploadIds = null;
      if (type2 === type.type) {
        uploadIds = interactionComponentState.uploadIds;
      }
      const obj10 = { type: null, custom_id: null, values: mapped };
      ({ type: obj8.type, customId: obj8.custom_id } = type);
      mapped = undefined;
      if (uploadIds != null) {
        mapped = uploadIds.map((item) => {
          closure_0 = item;
          uploads = uploads.uploads;
          return uploads.findIndex((id) => id.id === closure_0);
        });
      }
      if (mapped == null) {
        mapped = null;
      }
      return obj10;
    } else if (Server.ComponentType.STRING_SELECT === type) {
      const interactionComponentState1 = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
      const obj19 = { type: null, custom_id: null, values };
      ({ type: obj7.type, customId: obj7.custom_id } = type);
      let type3;
      if (interactionComponentState1 != null) {
        type3 = interactionComponentState1.type;
      }
      values = null;
      if (type3 === type.type) {
        values = interactionComponentState1.values;
      }
      return obj19;
    } else {
      if (Server.ComponentType.USER_SELECT !== type) {
        if (Server.ComponentType.ROLE_SELECT !== type) {
          if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
            if (Server.ComponentType.CHANNEL_SELECT !== type) {
              if (Server.ComponentType.TEXT_DISPLAY === type) {
                return { type: type.type };
              } else if (Server.ComponentType.LABEL === type) {
                const obj21 = { type: type.type, component: items.map(f130973)[0] };
                items = [type.component];
                return obj21;
              } else if (Server.ComponentType.RADIO_GROUP === type) {
                const iter2 = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
                const obj22 = { type: null, custom_id: null, value: value2 };
                ({ type: obj3.type, customId: obj3.custom_id } = type);
                let type4;
                if (iter2 != null) {
                  type4 = iter2.type;
                }
                value2 = null;
                if (type4 === type.type) {
                  value2 = iter2.value;
                }
                return obj22;
              } else if (Server.ComponentType.CHECKBOX_GROUP === type) {
                const interactionComponentState2 = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
                const obj23 = { type: null, custom_id: null, values: values2 };
                ({ type: obj2.type, customId: obj2.custom_id } = type);
                let type5;
                if (interactionComponentState2 != null) {
                  type5 = interactionComponentState2.type;
                }
                values2 = null;
                if (type5 === type.type) {
                  values2 = interactionComponentState2.values;
                }
                return obj23;
              } else if (Server.ComponentType.CHECKBOX === type) {
                const iter = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
                obj = { type: null, custom_id: null, value: type6 === type.type && iter.value };
                ({ type: obj.type, customId: obj.custom_id } = type);
                type6 = undefined;
                if (iter != null) {
                  type6 = iter.type;
                }
                return obj;
              } else {
                _modDef38(false, "unreachable");
              }
            }
          }
        }
      }
      const interactionComponentState3 = LocalInteractionComponentStateStore.getInteractionComponentState(closure_0, type.id);
      const obj24 = { type: null, custom_id: null, values: mapped1 };
      ({ type: obj6.type, customId: obj6.custom_id } = type);
      let type7;
      if (interactionComponentState3 != null) {
        type7 = interactionComponentState3.type;
      }
      mapped1 = null;
      if (type7 === type.type) {
        const selectedOptions = interactionComponentState3.selectedOptions;
        mapped1 = selectedOptions.map((value) => value.value);
      }
      return obj24;
    }
  };
  let closure_0 = arg0;
  let closure_1 = arg2;
  return arr.map(f130973);
}
function getUploadsForModal(id, customId) {
  let closure_0 = customId;
  const uploads = UploadAttachmentStore.getUploads(id, DraftType.InteractionModal);
  return uploads.filter((id) => {
    obj = closure_2_0(closure_2_2[26]);
    const result = obj.deserializeComponentUploadId(id.id);
    let containerId;
    if (result != null) {
      containerId = result.containerId;
    }
    return containerId === closure_0;
  });
}
function submitModal() {
  return obj(...arguments);
}
let obj = function _submitModal() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_1;
    let closure_2;
    let obj5;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let arr;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp2;
            let closure_3 = tmp;
            channel = undefined;
            let length;
            let components;
            const channelId = closure_0.channelId;
            channel = channel.getChannel(channelId);
            _modDef38(null != channel, "expected channel");
            arr = getUploadsForModal(channelId, closure_0.customId);
            let tmp6;
            if (arr.length > 0) {
              tmp6 = stageAttachmentFilesDefault(arr);
            }
            const obj4 = { data: obj5, preflight: tmp6 };
            obj5 = { interactionType: require("Server").InteractionTypes.MODAL_SUBMIT, applicationId: closure_0.application.id };
            const addQueued = require("InteractionActionCreators").addQueued;
            const tmp8 = require("InteractionActionCreators");
            addQueued(nonce, obj4);
            c5 = 1;
            c6 = 1;
            const obj6 = { value: tmp6, done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          length = arr.map((item, index) => {
            obj = closure_1_0(nonce[29]);
            return obj.getAttachmentPayload(item, index);
          });
          const obj7 = { uploads: arr };
          components = closure_132_18(closure_0.customId, closure_0.components, obj7);
          function send() {
            let body;
            let obj5;
            let tmp9;
            if (null != closure_1_3) {
              let aborted;
              if (signal != null) {
                aborted = signal.aborted;
              }
              if (!aborted) {
                const HTTP = closure_0(nonce[30]).HTTP;
                const request = { url: constants.INTERACTIONS, body, signal, rejectWithError: false };
                body = { type: closure_0(nonce[14]).InteractionTypes.MODAL_SUBMIT, application_id: closure_1_0.application.id, channel_id: null, guild_id: null, data: obj5, session_id: components.getSessionId(), nonce };
                const post = HTTP.post;
                ({ id: obj2.channel_id, guild_id: obj2.guild_id } = closure_1_3);
                obj5 = { id: null, custom_id: null, components, attachments: tmp9 };
                ({ id: obj3.id, customId: obj3.custom_id } = closure_1_0);
                tmp9 = undefined;
                if (length.length > 0) {
                  tmp9 = length;
                }
                const postResult = post(request);
                postResult.catch((error) => {
                  if (429 === error.status) {
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(closure_1_7, error.body.retry_after * signal(nonce[31]).Millis.SECOND);
                  } else {
                    obj = closure_2_0(nonce[28]);
                    obj.setFailed(closure_1_2);
                  }
                });
              }
            }
          }
          send();
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        c6 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
const DraftType = DraftStore.DraftType;
const InteractionModalState = InteractionModalStore2.InteractionModalState;
const Endpoints = Constants.Endpoints;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  obj = ComponentStateContext;
  const componentStateContext = obj.useComponentStateContext();
  let first;
  if (componentStateContext != null) {
    const modal = componentStateContext.modal;
    if (modal != null) {
      first = modal.components[0];
    }
  }
  let type;
  if (first != null) {
    type = first.type;
  }
  let tmp6 = type === Server.ComponentType.ACTION_ROW && first.components[0].id === arg0;
  if (!tmp6) {
    let type1;
    if (first != null) {
      type1 = first.type;
    }
    tmp6 = type1 === Server.ComponentType.LABEL && first.component.id === arg0;
    type1 === Server.ComponentType.LABEL && first.component.id === arg0;
  }
  return tmp6;
}) : ((arg0) => {
  obj = ComponentStateContext;
  const componentStateContext = obj.useComponentStateContext();
  let first;
  if (componentStateContext != null) {
    const modal = componentStateContext.modal;
    if (modal != null) {
      first = modal.components[0];
    }
  }
  let type;
  if (first != null) {
    type = first.type;
  }
  let tmp6 = type === Server.ComponentType.ACTION_ROW && first.components[0].id === arg0;
  if (!tmp6) {
    let type1;
    if (first != null) {
      type1 = first.type;
    }
    tmp6 = type1 === Server.ComponentType.LABEL && first.component.id === arg0;
    type1 === Server.ComponentType.LABEL && first.component.id === arg0;
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((bot) => {
  obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] === bot.bot) {
    if (cResult[1] === bot.icon) {
      let tmp3;
      let tmp4;
      let name;
      let tmp13;
      if (cResult[2] === bot.id) {
        tmp3 = cResult[3];
        tmp4 = cResult[4];
      }
      let nick;
      if (tmp3 != null) {
        nick = tmp3.nick;
      }
      if (null != nick) {
        name = tmp3.nick;
      } else if (null != bot.bot) {
        name = bot.bot.username;
      } else {
        name = bot.name;
      }
      if (cResult[5] !== bot.id) {
        const tmp15 = getURLForApplicationDefault(bot.id);
        cResult[5] = bot.id;
        cResult[6] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === tmp13) {
        if (cResult[8] === tmp4) {
          let tmp16;
          if (cResult[9] === name) {
            tmp16 = cResult[10];
          }
          return tmp16;
        }
      }
      const obj2 = { applicationIconURL: tmp4, applicationName: name, applicationBaseUrl: tmp13 };
      cResult[7] = tmp13;
      cResult[8] = tmp4;
      cResult[9] = name;
      cResult[10] = obj2;
      tmp16 = obj2;
    }
  }
  const guildId = SelectedGuildStore.getGuildId();
  let member;
  if (null != guildId) {
    if (null != bot.bot) {
      member = GuildMemberStore.getMember(guildId, bot.bot.id);
    }
  }
  const obj3 = { id: bot.id, icon: bot.icon, botIconFirst: true, bot, guildMember: member };
  bot = undefined;
  const getApplicationIconURL = AvatarUtilsDefault.getApplicationIconURL;
  AvatarUtilsDefault;
  if (null != member) {
    bot = bot.bot;
  }
  const applicationIconURL = getApplicationIconURL(obj3);
  cResult[0] = bot.bot;
  cResult[1] = bot.icon;
  cResult[2] = bot.id;
  cResult[3] = member;
  cResult[4] = applicationIconURL;
  tmp4 = applicationIconURL;
  tmp3 = member;
}) : ((arg0) => {
  const user = arg0;
  const items = [, , , ];
  ({ id: arr[0], icon: arr[1], name: arr[2], bot: arr[3] } = arg0);
  return react.useMemo(() => {
    let bot;
    let name;
    const guildId = SelectedGuildStore.getGuildId();
    let member;
    if (null != guildId) {
      if (null != user.bot) {
        member = GuildMemberStore.getMember(guildId, tmp3.bot.id);
      }
    }
    obj = { id: user.id, icon: user.icon, botIconFirst: true, bot, guildMember: member };
    bot = undefined;
    const getApplicationIconURL = AvatarUtilsDefault.getApplicationIconURL;
    AvatarUtilsDefault;
    if (null != member) {
      bot = user.bot;
    }
    let nick;
    const obj2 = { applicationIconURL: getApplicationIconURL(obj), applicationName: name, applicationBaseUrl: getURLForApplicationDefault(user.id) };
    if (member != null) {
      nick = member.nick;
    }
    if (null != nick) {
      name = member.nick;
    } else if (null != user.bot) {
      name = user.bot.username;
    } else {
      name = user.name;
    }
    return obj2;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((customId, arg1) => {
  let application;
  let closure_1;
  let closure_3;
  let closure_6;
  let components;
  let first;
  let first1;
  let tmp12;
  let tmp15;
  _require = customId;
  importDefault = arg1;
  const tmp2 = customId;
  obj = require("react");
  const cResult = obj.c(30);
  customId = customId.customId;
  ({ components, application } = customId);
  const tmp5 = require("useUnmountAbortSignal")();
  _asyncToGenerator = tmp5;
  let obj2 = first;
  const tmp7 = _slicedToArray(first.useState(null), 2);
  [r10024, _slicedToArray] = tmp7;
  [first, closure_6] = first.useState(null);
  const tmp = _require;
  const tmp4 = importDefault;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = {};
    cResult[0] = obj3;
    first1 = obj3;
  } else {
    first1 = cResult[0];
  }
  _slicedToArray(obj2.useState(first1), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [InteractionModalStore];
    cResult[1] = items;
    tmp12 = items;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] !== first) {
    class N {
      constructor() {
        return InteractionModalStore.getModalState(first);
      }
    }
    const items1 = [first];
    cResult[2] = first;
    cResult[3] = N;
    cResult[4] = items1;
    tmp15 = items1;
  } else {
    class N {
      constructor() {
        return InteractionModalStore.getModalState(first);
      }
    }
    tmp15 = cResult[4];
  }
  const tmpResult = tmp(tmp2[19]);
  const stateFromStores = tmpResult.useStateFromStores(tmp12, N, tmp15);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        set = new Set();
        return set;
      }
    }
    cResult[5] = P;
  } else {
    class P {
      constructor() {
        set = new Set();
        return set;
      }
    }
  }
  const tmp18 = tmp4(tmp2[20])(P);
  let closure_8 = tmp18;
  if (cResult[6] === tmp5) {
    class P {
      constructor() {
        set = new Set();
        return set;
      }
    }
  }
  _require = _asyncToGenerator(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1_4(null);
            closure_1_6(null);
            if (validate(closure_1_8)) {
              const _Date = Date;
              const obj2 = closure_2_1(customId[21]);
              const fromTimestampResult = obj2.fromTimestamp(Date.now());
              closure_1_6(fromTimestampResult);
              c1 = 1;
              c0 = 1;
              const obj5 = { value: submitModal(c0, closure_1_3, fromTimestampResult), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp12) {
        c0 = 3;
        throw tmp12;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[6] = tmp5;
  cResult[7] = customId;
  cResult[8] = tmp18;
  cResult[9] = fn;
}) : ((customId, arg1) => {
  let application;
  let closure_1;
  let closure_3;
  let closure_6;
  let components;
  let first;
  let tmp3;
  let tmp7;
  let tmp8;
  _require = customId;
  importDefault = arg1;
  customId = customId.customId;
  ({ application, components } = customId);
  const tmp = require("useUnmountAbortSignal")();
  _asyncToGenerator = tmp;
  const tmp2 = _slicedToArray(first.useState(null), 2);
  [tmp3, _slicedToArray] = tmp2;
  [first, closure_6] = first.useState(null);
  [tmp7, tmp8] = _slicedToArray(first.useState({}), 2);
  const tmp6 = _slicedToArray(first.useState({}), 2);
  obj = require("get initialized");
  const items = [InteractionModalStore];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => InteractionModalStore.getModalState(first), items1);
  const tmp10 = require("useInitialValue")(() => {
    set = new Set();
    return set;
  });
  let closure_8 = tmp10;
  const items2 = [tmp, customId, tmp10];
  const items3 = [first, stateFromStores, arg1, customId, customId.channelId];
  const callback = first.useCallback(_asyncToGenerator(async () => {
    let v1;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _slicedToArray(null);
            closure_6(null);
            if (validate(closure_8)) {
              const _Date = Date;
              const obj2 = v1(customId[21]);
              const fromTimestampResult = obj2.fromTimestamp(Date.now());
              closure_6(fromTimestampResult);
              v1 = 1;
              c0 = 1;
              const obj5 = { value: submitModal(closure_0, closure_3, fromTimestampResult), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp12) {
        c0 = 3;
        throw tmp12;
      }
    }
  }), items2);
  const effect = first.useEffect(() => {
    if (stateFromStores === InteractionModalState.SUCCEEDED) {
      obj = DispatcherDefault;
      const obj2 = { type: "CLEAR_INTERACTION_MODAL_STATE", customId };
      obj.dispatch(obj2);
      const removeFiles = UploadAttachmentActionCreatorsDefault.removeFiles;
      const channelId = customId.channelId;
      UploadAttachmentActionCreatorsDefault;
      const uploads = UploadAttachmentStore.getUploads(customId.channelId, DraftType.InteractionModal);
      const found = uploads.filter((id) => {
        obj = closure_2_0(closure_2_2[26]);
        const result = obj.deserializeComponentUploadId(id.id);
        let containerId;
        if (result != null) {
          containerId = result.containerId;
        }
        return containerId === closure_0;
      });
      removeFiles(channelId, found.map((id) => id.id), DraftType.InteractionModal);
      closure_1();
    }
    if (stateFromStores === InteractionModalState.ERRORED) {
      const intl = intl2.intl;
      _slicedToArray(intl.string(intl2.t.uJgdEu));
    }
  }, items3);
  const tmp13 = closure_17(application);
  let obj2 = { components, applicationIconURL: tmp13.applicationIconURL, applicationName: tmp13.applicationName, submissionState: stateFromStores, error: tmp3, validators: tmp10, validationErrors: tmp7, setValidationErrors: tmp8, onSubmit: callback };
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function(channelId) {
  let application;
  let applicationBaseUrl;
  let applicationIconURL;
  let applicationName;
  let customId;
  let tmp4;
  obj = react2;
  const cResult = obj.c(16);
  ({ application, customId } = channelId);
  ({ applicationIconURL, applicationName, applicationBaseUrl } = closure_17(application));
  closure_17(application);
  if (cResult[0] !== channelId.channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    cResult[0] = channelId.channelId;
    cResult[1] = channel;
    tmp4 = channel;
  } else {
    tmp4 = cResult[1];
  }
  _modDef38(null != tmp4, "channel should not be null");
  const combined = "" + channelId.channelId + ":" + application.id + ":" + customId;
  if (cResult[2] === tmp4.guild_id) {
    if (cResult[3] === customId) {
      if (cResult[4] === combined) {
        let tmp9;
        if (cResult[5] === channelId.channelId) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === applicationBaseUrl) {
          let tmp11;
          if (cResult[8] === channelId.iframePath) {
            tmp11 = cResult[9];
          }
          if (cResult[10] === applicationBaseUrl) {
            if (cResult[11] === applicationIconURL) {
              if (cResult[12] === applicationName) {
                if (cResult[13] === tmp11) {
                  let tmp15;
                  if (cResult[14] === tmp9) {
                    tmp15 = cResult[15];
                  }
                  return tmp15;
                }
              }
            }
          }
          const obj2 = { applicationIconURL, applicationName, applicationBaseUrl, queryParams: tmp9, iframeUrl: tmp11 };
          cResult[10] = applicationBaseUrl;
          cResult[11] = applicationIconURL;
          cResult[12] = applicationName;
          cResult[13] = tmp11;
          cResult[14] = tmp9;
          cResult[15] = obj2;
          tmp15 = obj2;
        }
        let str = applicationBaseUrl;
        const _URL = URL;
        if (applicationBaseUrl == null) {
          str = "";
        }
        const self = this;
        const self2 = this;
        const str2 = new _URL(str);
        str2.pathname = channelId.iframePath;
        const str1 = str2.toString();
        cResult[7] = applicationBaseUrl;
        cResult[8] = channelId.iframePath;
        cResult[9] = str1;
        tmp11 = str1;
      }
    }
  }
  const obj3 = { instance_id: combined, custom_id: customId, channel_id: channelId.channelId };
  const tmp10 = null != tmp4.guild_id && "" !== tmp4.guild_id;
  if (tmp10) {
    obj3.guild_id = tmp4.guild_id;
  }
  cResult[2] = tmp4.guild_id;
  cResult[3] = customId;
  cResult[4] = combined;
  cResult[5] = channelId.channelId;
  cResult[6] = obj3;
  tmp9 = obj3;
}) : ((channelId) => {
  let application;
  let applicationIconURL;
  let applicationName;
  let customId;
  ({ application, customId } = channelId);
  const tmp = closure_17(application);
  const applicationBaseUrl = tmp.applicationBaseUrl;
  ({ applicationIconURL, applicationName } = tmp);
  const channel = ChannelStore.getChannel(channelId.channelId);
  _modDef38(null != channel, "channel should not be null");
  const queryParams = { instance_id: "" + channelId.channelId + ":" + application.id + ":" + customId, custom_id: customId, channel_id: channelId.channelId };
  const tmp4 = null != channel.guild_id && "" !== channel.guild_id;
  if (tmp4) {
    queryParams.guild_id = channel.guild_id;
  }
  let str = applicationBaseUrl;
  const _URL = URL;
  if (applicationBaseUrl == null) {
    str = "";
  }
  const str2 = new _URL(str);
  str2.pathname = channelId.iframePath;
  const obj2 = { applicationIconURL, applicationName, applicationBaseUrl, queryParams, iframeUrl: str2.toString() };
  return obj2;
});
let result = size.fileFinishedImporting("modules/interaction_components/InteractionModalUtils.tsx");

export const useIsFirstTextInputInModal = tmp2;
export const useModalState = tmp3;
export const useIframeModalState = tmp4;
export { submitModal };