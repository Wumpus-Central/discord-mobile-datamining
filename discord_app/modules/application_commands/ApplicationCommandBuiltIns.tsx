// discord_app/modules/application_commands/ApplicationCommandBuiltIns.tsx
import Server from "../../flow/Server.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import GuildDisableCommunicationConstants from "../guild_communication_disabled/GuildDisableCommunicationConstants.tsx";
import MessageConstants from "../messages/MessageConstants.tsx";
import ApplicationCommandConstants from "ApplicationCommandConstants.tsx";
import DiceRollActionCreators from "../dice_roll/DiceRollActionCreators.tsx";
import ThreadHooks from "../threads/ThreadHooks.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import ApplicationCommandTypes from "ApplicationCommandTypes.tsx";
import application_commands_ApplicationCommandBuiltIns from "native/ApplicationCommandBuiltIns.tsx";
import ChangeNicknameActionCreatorsDefault from "../../actions/ChangeNicknameActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import DiceRollConstants from "../dice_roll/DiceRollConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c0, c2, c4, c5, closure_5, importDefault;

let ALLOWED_DICE_SIDES;
let DISPLAY_NAME_MAX_LENGTH;
let MAX_CHANNEL_NAME_LENGTH;
let MAX_DICE_COUNT;
let c9;
let items1;
let items10;
let items11;
let items12;
let items13;
let items2;
let items3;
let items4;
let items5;
let items6;
let items7;
let items8;
let items9;
let metroImportAll;
let metroImportDefault;
let tmp5;
function getOptionValue(arr, arg1) {
  let closure_0 = arg1;
  const iter = arr.find((name) => name.name === size_str);
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
({
  Permissions: metroImportDefault,
  MARKDOWN_SPOILER_WRAPPER: metroImportAll,
  ME: c9,
  DISPLAY_NAME_MAX_LENGTH,
  MAX_CHANNEL_NAME_LENGTH,
} = Constants);
({ ALLOWED_DICE_SIDES, MAX_DICE_COUNT } = DiceRollConstants);
let closure_11 = GuildDisableCommunicationConstants.getDisableCommunicationDurationOptions;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let obj = {};
let obj2 = { id: BuiltInSectionId.BUILT_IN, type: ApplicationCommandTypes.ApplicationCommandSectionType.BUILT_IN };
const BUILT_IN = BuiltInSectionId.BUILT_IN;
Object.defineProperty(obj2, "name", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.fI5MTa);
  },
  set: undefined,
});
obj[BUILT_IN] = obj2;
let obj3 = { id: BuiltInSectionId.FRECENCY, type: ApplicationCommandTypes.ApplicationCommandSectionType.BUILT_IN };
const FRECENCY = BuiltInSectionId.FRECENCY;
Object.defineProperty(obj3, "name", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["+cGVV6"]);
  },
  set: undefined,
});
obj[FRECENCY] = obj3;
let items = [...application_commands_ApplicationCommandBuiltIns.default];
let obj4 = {
  id: "-1",
  untranslatedName: "shrug",
  displayName: "shrug",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items1,
  execute(arr) {
    let str2;
    const message = "message";
    const iter = arr.find((name) => name.name === size_str);
    let str;
    if (iter != null) {
      str = iter.value;
    }
    if (str == null) {
      str = "";
    }
    const obj = { content: str2.trim() };
    str2 = "" + str + " \u00AF\\_(\u30C4)_/\u00AF";
    return obj;
  },
};
Object.defineProperty(obj4, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.j5xUSW);
  },
  set: undefined,
});
Object.defineProperty(obj4, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.j5xUSW);
  },
  set: undefined,
});
let obj5 = { name: "message", displayName: "message", type: Server.ApplicationCommandOptionType.STRING };
Object.defineProperty(obj5, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.JewOrS);
  },
  set: undefined,
});
Object.defineProperty(obj5, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.JewOrS);
  },
  set: undefined,
});
items1 = [obj5];
items[tmp5] = obj4;
const sum = tmp5 + 1;
let obj6 = {
  id: "-2",
  untranslatedName: "tableflip",
  displayName: "tableflip",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items2,
  execute(arr) {
    let str2;
    const message = "message";
    const iter = arr.find((name) => name.name === size_str);
    let str;
    if (iter != null) {
      str = iter.value;
    }
    if (str == null) {
      str = "";
    }
    const obj = { content: str2.trim() };
    str2 = "" + str + " (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B";
    return obj;
  },
};
Object.defineProperty(obj6, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.nrQRce);
  },
  set: undefined,
});
Object.defineProperty(obj6, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.nrQRce);
  },
  set: undefined,
});
let obj7 = { name: "message", displayName: "message", type: Server.ApplicationCommandOptionType.STRING };
Object.defineProperty(obj7, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.EI80tw);
  },
  set: undefined,
});
Object.defineProperty(obj7, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.EI80tw);
  },
  set: undefined,
});
items2 = [obj7];
items[sum] = obj6;
const sum1 = sum + 1;
let obj8 = {
  id: "-3",
  untranslatedName: "unflip",
  displayName: "unflip",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items3,
  execute(arr) {
    let str2;
    const message = "message";
    const iter = arr.find((name) => name.name === size_str);
    let str;
    if (iter != null) {
      str = iter.value;
    }
    if (str == null) {
      str = "";
    }
    const obj = { content: str2.trim() };
    str2 = "" + str + " \u252C\u2500\u252C\u30CE( \u00BA _ \u00BA\u30CE)";
    return obj;
  },
};
Object.defineProperty(obj8, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.pnnn8e);
  },
  set: undefined,
});
Object.defineProperty(obj8, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.pnnn8e);
  },
  set: undefined,
});
const obj9 = { name: "message", displayName: "message", type: Server.ApplicationCommandOptionType.STRING };
Object.defineProperty(obj9, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.ETs6go);
  },
  set: undefined,
});
Object.defineProperty(obj9, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.ETs6go);
  },
  set: undefined,
});
items3 = [obj9];
items[sum1] = obj8;
const sum2 = sum1 + 1;
const obj10 = {
  id: "-4",
  untranslatedName: "tts",
  displayName: "tts",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items4,
  predicate(channel) {
    channel = channel.channel;
    let setting = null != channel && !channel.isPrivate();
    if (setting) {
      const EnableTTSCommand = UserSettings.EnableTTSCommand;
      setting = EnableTTSCommand.getSetting();
    }
    if (setting) {
      setting = PermissionStore.can(metroImportDefault.SEND_TTS_MESSAGES, channel);
    }
    return setting;
  },
  execute(arr) {
    const message = "message";
    const iter = arr.find((name) => name.name === size_str);
    let content;
    if (iter != null) {
      content = iter.value;
    }
    if (content == null) {
      content = "";
    }
    return { content, tts: true };
  },
};
Object.defineProperty(obj10, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.jZcIid);
  },
  set: undefined,
});
Object.defineProperty(obj10, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.jZcIid);
  },
  set: undefined,
});
const obj11 = {
  name: "message",
  displayName: "message",
  type: Server.ApplicationCommandOptionType.STRING,
  required: true,
};
Object.defineProperty(obj11, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["k+sw9g"]);
  },
  set: undefined,
});
Object.defineProperty(obj11, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["k+sw9g"]);
  },
  set: undefined,
});
items4 = [obj11];
items[sum2] = obj10;
const sum3 = sum2 + 1;
const obj12 = {
  id: "-5",
  untranslatedName: "me",
  displayName: "me",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items5,
  execute(arr) {
    const message = "message";
    const iter = arr.find((name) => name.name === size_str);
    let str;
    if (iter != null) {
      str = iter.value;
    }
    if (str == null) {
      str = "";
    }
    const obj = { content: "_" + str + "_" };
    return obj;
  },
};
Object.defineProperty(obj12, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.UGO8fU);
  },
  set: undefined,
});
Object.defineProperty(obj12, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.UGO8fU);
  },
  set: undefined,
});
const obj13 = {
  name: "message",
  displayName: "message",
  type: Server.ApplicationCommandOptionType.STRING,
  required: true,
};
Object.defineProperty(obj13, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.RWTgNd);
  },
  set: undefined,
});
Object.defineProperty(obj13, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.RWTgNd);
  },
  set: undefined,
});
items5 = [obj13];
items[sum3] = obj12;
const sum4 = sum3 + 1;
const obj14 = {
  id: "-6",
  untranslatedName: "spoiler",
  displayName: "spoiler",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items6,
  execute(arr) {
    let str2;
    const message = "message";
    const iter = arr.find((name) => name.name === size_str);
    let str;
    if (iter != null) {
      str = iter.value;
    }
    if (str == null) {
      str = "";
    }
    const obj = { content: str2.trim() };
    str2 = metroImportAll(str);
    return obj;
  },
};
Object.defineProperty(obj14, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.v0eDdV);
  },
  set: undefined,
});
Object.defineProperty(obj14, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.v0eDdV);
  },
  set: undefined,
});
const obj15 = {
  name: "message",
  displayName: "message",
  type: Server.ApplicationCommandOptionType.STRING,
  required: true,
};
Object.defineProperty(obj15, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.D13pbc);
  },
  set: undefined,
});
Object.defineProperty(obj15, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.D13pbc);
  },
  set: undefined,
});
items6 = [obj15];
items[sum4] = obj14;
const sum5 = sum4 + 1;
const obj16 = {
  id: "-7",
  untranslatedName: "nick",
  displayName: "nick",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items7,
  predicate(channel) {
    channel = channel.channel;
    let tmp = null != channel && !channel.isPrivate();
    if (tmp) {
      tmp =
        PermissionStore.can(metroImportDefault.CHANGE_NICKNAME, channel) ||
        PermissionStore.can(metroImportDefault.MANAGE_NICKNAMES, channel);
      PermissionStore.can(metroImportDefault.CHANGE_NICKNAME, channel) ||
        PermissionStore.can(metroImportDefault.MANAGE_NICKNAMES, channel);
    }
    return tmp;
  },
  execute(arr, arg1) {
    let channel;
    let guild;
    ({ guild, channel } = arg1);
    if (null != guild) {
      if (null != channel) {
        const new_nick = "new_nick";
        const iter = arr.find((name) => name.name === size_str);
        let str;
        if (iter != null) {
          str = iter.value;
        }
        if (str == null) {
          str = "";
        }
        const id = guild.id;
        const id2 = channel.id;
        const changeNickname = ChangeNicknameActionCreatorsDefault.changeNickname;
        if (!str) {
          str = "";
        }
        changeNickname(id, id2, React4, str);
      }
    }
  },
};
Object.defineProperty(obj16, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["jiHfS/"]);
  },
  set: undefined,
});
Object.defineProperty(obj16, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["jiHfS/"]);
  },
  set: undefined,
});
const obj17 = {
  name: "new_nick",
  displayName: "new_nick",
  type: Server.ApplicationCommandOptionType.STRING,
  maxLength: DISPLAY_NAME_MAX_LENGTH,
};
Object.defineProperty(obj17, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.WTSzVu);
  },
  set: undefined,
});
Object.defineProperty(obj17, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.WTSzVu);
  },
  set: undefined,
});
items7 = [obj17];
items[sum5] = obj16;
const sum6 = sum5 + 1;
const obj18 = {
  id: "-10",
  untranslatedName: "thread",
  displayName: "thread",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items8,
  predicate(channel) {
    channel = channel.channel;
    let canStartPublicThread = null != channel;
    if (canStartPublicThread) {
      const obj = ThreadHooks;
      canStartPublicThread = obj.computeCanStartPublicThread(channel);
    }
    return canStartPublicThread;
  },
  execute: function () {
    return closure_14(...arguments);
  },
};
Object.defineProperty(obj18, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.t6ZAS0);
  },
  set: undefined,
});
Object.defineProperty(obj18, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.t6ZAS0);
  },
  set: undefined,
});
const obj19 = {
  name: "name",
  displayName: "name",
  type: Server.ApplicationCommandOptionType.STRING,
  required: true,
  maxLength: MAX_CHANNEL_NAME_LENGTH,
};
Object.defineProperty(obj19, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.TffOfY);
  },
  set: undefined,
});
Object.defineProperty(obj19, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.TffOfY);
  },
  set: undefined,
});
items8 = [obj19];
const obj20 = {
  name: "message",
  displayName: "message",
  type: Server.ApplicationCommandOptionType.STRING,
  required: true,
};
Object.defineProperty(obj20, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.QXfSfU);
  },
  set: undefined,
});
Object.defineProperty(obj20, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.QXfSfU);
  },
  set: undefined,
});
Object.defineProperty(obj20, "maxLength", {
  get: () => {
    const obj = require("useMessageMaxLength");
    return obj.getMaxMessageLength();
  },
  set: undefined,
});
items8[1] = obj20;
let closure_14 = _asyncToGenerator(async (arg0, arg1) => {
  let closure_0 = arg0;
  let channel = arg1;
  let c6 = 0;
  let c7 = 0;
  const iter = (async (arg0, value) => {
    let obj2;
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
        let closure_2;
        let closure_3;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_5 = tmp4;
            channel = undefined;
            channel = channel.channel;
            closure_2 = undefined;
            closure_3 = undefined;
            id = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            const tmp49 = closure_133_13(closure_0, "name");
            c2 = tmp49;
            if (tmp49 == null) {
              c2 = "";
            }
            closure_2 = c2;
            const tmp10 = closure_133_13(closure_0, "message");
            c3 = tmp10;
            if (tmp10 == null) {
              c3 = "";
            }
            closure_3 = c3;
            const createThread = closure_133_0(closure_133_2[17]).createThread;
            const tmp16 = closure_133_0(closure_133_2[17]);
            const PUBLIC_THREAD = closure_133_0(closure_133_2[18]).ChannelTypes.PUBLIC_THREAD;
            c6 = 2;
            c7 = 1;
            const obj6 = {
              value: createThread(
                channel,
                closure_2,
                PUBLIC_THREAD,
                obj2.getAutoArchiveDuration(channel, null),
                "Slash Command",
              ),
              done: false,
            };
            obj2 = closure_133_0(closure_133_2[19]);
            return obj6;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          return { value, done: true };
        } else {
          id = value;
          id = id.id;
          const sendMessage = closure_133_1(closure_133_2[20]).sendMessage;
          const obj8 = { location: closure_133_12.THREAD_CREATION };
          const tmp35 = closure_133_1(closure_133_2[20]);
          const obj7 = closure_133_1(closure_133_2[21]);
          sendMessage(id, obj7.parse(id, closure_3), true, obj8);
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp27) {
        c7 = 3;
        throw tmp27;
      }
    }
  })();
  iter.next();
  return iter;
});
items[sum6] = obj18;
const sum7 = sum6 + 1;
const obj21 = {
  id: "-11",
  untranslatedName: "kick",
  displayName: "kick",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items9,
  predicate(guild) {
    return PermissionStore.can(metroImportDefault.KICK_MEMBERS, guild.guild);
  },
  execute(arr, guild) {
    function handler() {
      return obj(...arguments);
    }
    _require = arr;
    guild = guild.guild;
    const channel = guild.channel;
    let str;
    let obj = function _handler() {
      obj = _asyncToGenerator(async function () {
        let closure_1;
        let obj6;
        if (c4 === 2) {
          c4 = 3;
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
            let closure_2;
            let user;
            let _var;
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_2 = tmp;
                user = undefined;
                if (null != guild) {
                  if (null != channel) {
                    user = user.getUser(str);
                    const tmp8 = str;
                    if (null == user) {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error = new Error();
                      throw error;
                    } else {
                      const kickUser = tmp2(closure_2[22]).kickUser;
                      const id = tmp38.id;
                      const tmp12 = tmp2(closure_2[22]);
                      const tmp15 = closure_1_13(arr, "reason");
                      _var = tmp15;
                      if (tmp15 == null) {
                        _var = "";
                      }
                      c3 = 1;
                      c4 = 1;
                      const obj4 = { value: kickUser(id, tmp8, _var), done: false };
                      return obj4;
                    }
                  }
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const sendBotMessage = tmp2(closure_2[20]).sendBotMessage;
              const id2 = closure_130_2.id;
              const tmp28 = tmp2(closure_2[20]);
              const intl = _var(closure_2[10]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const obj5 = { user: obj6.getUserTag(user) };
              const v9wzHDV = _var(closure_2[10]).t["9wzHDV"];
              obj6 = tmp2(closure_2[23]);
              sendBotMessage(id2, formatToPlainString(v9wzHDV, obj5));
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp20) {
            c4 = 3;
            throw tmp20;
          }
        }
      });
      return obj(...arguments);
    };
    if (null != guild) {
      if (null != channel) {
        let user = "user";
        const iter = arr.find((name) => name.name === size_str);
        str = undefined;
        if (iter != null) {
          str = iter.value;
        }
        if (str == null) {
          str = "";
        }
        if (PermissionStore.canManageUser(constants.KICK_MEMBERS, str, guild)) {
          const promise = handler();
          promise.catch(() => {
            const sendBotMessage = MessageActionCreatorsDefault.sendBotMessage;
            const id = channel.id;
            MessageActionCreatorsDefault;
            const intl = require("intl").intl;
            sendBotMessage(id, intl.string(require("intl").t.l0gNlp));
          });
        } else {
          const tmp4 = channel;
          let sendBotMessage = guild(channel[20]).sendBotMessage;
          let id = channel.id;
          const tmp5 = guild(channel[20]);
          let intl = require("intl").intl;
          sendBotMessage(id, intl.string(require("intl").t["6RIwPI"]));
        }
      }
    }
  },
};
Object.defineProperty(obj21, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["03N0UL"]);
  },
  set: undefined,
});
Object.defineProperty(obj21, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["03N0UL"]);
  },
  set: undefined,
});
const obj22 = { name: "user", displayName: "user", type: Server.ApplicationCommandOptionType.USER, required: true };
Object.defineProperty(obj22, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.gF8IpD);
  },
  set: undefined,
});
Object.defineProperty(obj22, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.gF8IpD);
  },
  set: undefined,
});
items9 = [obj22];
const obj23 = {
  name: "reason",
  displayName: "reason",
  type: Server.ApplicationCommandOptionType.STRING,
  required: false,
};
Object.defineProperty(obj23, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.QWldgj);
  },
  set: undefined,
});
Object.defineProperty(obj23, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.QWldgj);
  },
  set: undefined,
});
items9[1] = obj23;
items[sum7] = obj21;
const sum8 = sum7 + 1;
const obj24 = {
  id: "-12",
  untranslatedName: "ban",
  displayName: "ban",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items10,
  predicate(guild) {
    return PermissionStore.can(metroImportDefault.BAN_MEMBERS, guild.guild);
  },
  execute(arr, guild) {
    function handler() {
      return obj(...arguments);
    }
    _require = arr;
    guild = guild.guild;
    const channel = guild.channel;
    let str;
    let obj = function _handler2() {
      obj = _asyncToGenerator(async function () {
        if (c5 === 2) {
          c5 = 3;
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
            let closure_2;
            let user2;
            let v0;
            let _var;
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
                let closure_3 = tmp;
                closure_2 = tmp2;
                user2 = undefined;
                if (null != guild) {
                  if (null != channel) {
                    if ("" === "") {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error = new Error();
                      throw error;
                    } else {
                      const tmp48 = closure_1_13(arr, "delete_messages");
                      v0 = tmp48;
                      if (tmp48 == null) {
                        v0 = 0;
                      }
                      const tmp46Result = closure_1_13(arr, "reason");
                      _var = tmp46Result;
                      if (tmp46Result == null) {
                        _var = "";
                      }
                      user2 = user.getUser(str);
                      const obj4 = _var(closure_2[22]);
                      c4 = 1;
                      c5 = 1;
                      const obj5 = { value: obj4.banUser(tmp44.id, "", v0, _var), done: false };
                      return obj5;
                    }
                  }
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              let userTag;
              const sendBotMessage = _var(closure_2[20]).sendBotMessage;
              const id = closure_131_2.id;
              const tmp37 = _var(closure_2[20]);
              const intl = v0(closure_2[10]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const YflWdM = v0(closure_2[10]).t.YflWdM;
              if (null != user2) {
                obj = _var(closure_2[23]);
                userTag = obj.getUserTag(user2);
              } else {
                userTag = closure_131_3;
              }
              const obj7 = { user: userTag };
              sendBotMessage(id, formatToPlainString(YflWdM, obj7));
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp29) {
            c5 = 3;
            throw tmp29;
          }
        }
      });
      return obj(...arguments);
    };
    if (null != guild) {
      if (null != channel) {
        const user = "user";
        const iter = arr.find((name) => name.name === size_str);
        str = undefined;
        if (iter != null) {
          str = iter.value;
        }
        if (str == null) {
          str = "";
        }
        if (PermissionStore.canManageUser(constants.BAN_MEMBERS, str, guild)) {
          const promise = handler();
          promise.catch(() => {
            const sendBotMessage = MessageActionCreatorsDefault.sendBotMessage;
            const id = channel.id;
            MessageActionCreatorsDefault;
            const intl = require("intl").intl;
            sendBotMessage(id, intl.string(require("intl").t.w2J6Qs));
          });
        } else {
          const tmp4 = channel;
          let sendBotMessage = guild(channel[20]).sendBotMessage;
          let id = channel.id;
          const tmp5 = guild(channel[20]);
          let intl = require("intl").intl;
          sendBotMessage(id, intl.string(require("intl").t.R27LJl));
        }
      }
    }
  },
};
Object.defineProperty(obj24, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.HWuskv);
  },
  set: undefined,
});
Object.defineProperty(obj24, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.HWuskv);
  },
  set: undefined,
});
const obj25 = { name: "user", displayName: "user", type: Server.ApplicationCommandOptionType.USER, required: true };
Object.defineProperty(obj25, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.z3XPjr);
  },
  set: undefined,
});
Object.defineProperty(obj25, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.z3XPjr);
  },
  set: undefined,
});
items10 = [obj25, ,];
const obj26 = {
  name: "delete_messages",
  displayName: "delete_messages",
  type: Server.ApplicationCommandOptionType.INTEGER,
  required: true,
};
Object.defineProperty(obj26, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.smrvA6);
  },
  set: undefined,
});
Object.defineProperty(obj26, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.smrvA6);
  },
  set: undefined,
});
Object.defineProperty(obj26, "choices", {
  get: () => {
    let intl;
    let intl10;
    let intl11;
    let intl12;
    let intl13;
    let intl14;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    const obj = {
      name: intl.string(require("intl").t["4obaMS"]),
      displayName: intl2.string(require("intl").t["4obaMS"]),
      value: 0,
    };
    intl = require("intl").intl;
    intl2 = require("intl").intl;
    items = [obj, , , , , ,];
    const obj2 = {
      name: intl3.string(require("intl").t.RKpitY),
      displayName: intl4.string(require("intl").t.RKpitY),
      value: require("Durations").Seconds.HOUR,
    };
    intl3 = require("intl").intl;
    intl4 = require("intl").intl;
    items[1] = obj2;
    const obj3 = {
      name: intl5.string(require("intl").t["8WfJZ8"]),
      displayName: intl6.string(require("intl").t["8WfJZ8"]),
      value: 6 * require("Durations").Seconds.HOUR,
    };
    intl5 = require("intl").intl;
    intl6 = require("intl").intl;
    items[2] = obj3;
    const obj4 = {
      name: intl7.string(require("intl").t.p1up7u),
      displayName: intl8.string(require("intl").t.p1up7u),
      value: 12 * require("Durations").Seconds.HOUR,
    };
    intl7 = require("intl").intl;
    intl8 = require("intl").intl;
    items[3] = obj4;
    const obj5 = {
      name: intl9.string(require("intl").t.XuVkkD),
      displayName: intl10.string(require("intl").t.XuVkkD),
      value: require("Durations").Seconds.DAY,
    };
    intl9 = require("intl").intl;
    intl10 = require("intl").intl;
    items[4] = obj5;
    const obj6 = {
      name: intl11.string(require("intl").t["gMcDS+"]),
      displayName: intl12.string(require("intl").t["gMcDS+"]),
      value: 3 * require("Durations").Seconds.DAY,
    };
    intl11 = require("intl").intl;
    intl12 = require("intl").intl;
    items[5] = obj6;
    const obj7 = {
      name: intl13.string(require("intl").t.FA7IUk),
      displayName: intl14.string(require("intl").t.FA7IUk),
      value: 7 * require("Durations").Seconds.DAY,
    };
    intl13 = require("intl").intl;
    intl14 = require("intl").intl;
    items[6] = obj7;
    return items;
  },
  set: undefined,
});
items10[1] = obj26;
const obj27 = {
  name: "reason",
  displayName: "reason",
  type: Server.ApplicationCommandOptionType.STRING,
  required: false,
};
Object.defineProperty(obj27, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.dG4noU);
  },
  set: undefined,
});
Object.defineProperty(obj27, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.dG4noU);
  },
  set: undefined,
});
items10[2] = obj27;
items[sum8] = obj24;
const sum9 = sum8 + 1;
const obj28 = {
  id: "-13",
  untranslatedName: "timeout",
  displayName: "timeout",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items11,
  predicate(guild) {
    return PermissionStore.can(metroImportDefault.MODERATE_MEMBERS, guild.guild);
  },
  execute(arr, guild) {
    function handler() {
      return obj(...arguments);
    }
    _require = arr;
    guild = guild.guild;
    const channel = guild.channel;
    let c3;
    let obj = function _handler3() {
      let userId;
      obj = _asyncToGenerator(async function () {
        let addResult;
        let obj6;
        if (c5 === 2) {
          c5 = 3;
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
            let closure_2;
            let duration;
            let user;
            let _var;
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
                let closure_3 = tmp2;
                closure_2 = tmp;
                duration = undefined;
                user = undefined;
                if (null != guild) {
                  if (null != channel) {
                    const tmp9 = closure_1_13(arr, "duration");
                    duration = tmp9;
                    if (tmp9 == null) {
                      duration = "";
                    }
                    const tmp7Result = closure_1_13(arr, "reason");
                    _var = tmp7Result;
                    if (tmp7Result == null) {
                      _var = "";
                    }
                    user = user.getUser(userId);
                    const tmp12 = _var;
                    if (null == user) {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error = new Error();
                      throw error;
                    } else {
                      const obj4 = {
                        guildId: tmp37.id,
                        userId,
                        communicationDisabledUntilTimestamp: addResult.toISOString(),
                        duration,
                        reason: tmp12,
                      };
                      const setCommunicationDisabledUntil = _var(closure_2[22]).setCommunicationDisabledUntil;
                      const tmp41 = _var(closure_2[22]);
                      const obj8 = _var(closure_2[26])();
                      addResult = obj8.add(duration, "s");
                      c4 = 1;
                      c5 = 1;
                      const obj5 = { value: setCommunicationDisabledUntil(obj4), done: false };
                      return obj5;
                    }
                  }
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const sendBotMessage = _var(closure_2[20]).sendBotMessage;
              const id = closure_131_2.id;
              const tmp27 = _var(closure_2[20]);
              const intl = duration(closure_2[10]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const obj7 = { user: obj6.getUserTag(user), duration };
              const BbRV6o = duration(closure_2[10]).t.BbRV6o;
              obj6 = _var(closure_2[23]);
              sendBotMessage(id, formatToPlainString(BbRV6o, obj7));
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp19) {
            c5 = 3;
            throw tmp19;
          }
        }
      });
      return obj(...arguments);
    };
    if (null != guild) {
      if (null != channel) {
        let user = "user";
        const iter = arr.find((name) => name.name === size_str);
        let value;
        if (iter != null) {
          value = iter.value;
        }
        c3 = value;
        const tmp2 = _require;
        obj = require("useCanToggleCommunicationDisableOnUser");
        if (obj.canToggleCommunicationDisableOnUser(guild.id, value)) {
          const promise = handler();
          promise.catch(() => {
            const sendBotMessage = MessageActionCreatorsDefault.sendBotMessage;
            const id = channel.id;
            MessageActionCreatorsDefault;
            const intl = require("intl").intl;
            sendBotMessage(id, intl.string(require("intl").t["+mWyVq"]));
          });
        } else {
          const tmp4 = guild;
          let sendBotMessage = guild(tmp3[20]).sendBotMessage;
          let id = channel.id;
          const tmp5 = guild(tmp3[20]);
          let intl = tmp2(tmp3[10]).intl;
          sendBotMessage(id, intl.string(tmp2(tmp3[10]).t.F5pqSf));
        }
      }
    }
  },
};
Object.defineProperty(obj28, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.KkPcep);
  },
  set: undefined,
});
Object.defineProperty(obj28, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.KkPcep);
  },
  set: undefined,
});
const obj29 = { name: "user", displayName: "user", type: Server.ApplicationCommandOptionType.USER, required: true };
Object.defineProperty(obj29, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.UU3VRm);
  },
  set: undefined,
});
Object.defineProperty(obj29, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.UU3VRm);
  },
  set: undefined,
});
items11 = [obj29, ,];
const obj30 = {
  name: "duration",
  displayName: "duration",
  type: Server.ApplicationCommandOptionType.INTEGER,
  required: true,
};
Object.defineProperty(obj30, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.SNqN1e);
  },
  set: undefined,
});
Object.defineProperty(obj30, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.SNqN1e);
  },
  set: undefined,
});
Object.defineProperty(obj30, "choices", {
  get: () => {
    const arr = closure_11();
    return arr.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      ({ label: obj.name, label: obj.displayName } = item);
      return obj;
    });
  },
  set: undefined,
});
items11[1] = obj30;
const obj31 = {
  name: "reason",
  displayName: "reason",
  type: Server.ApplicationCommandOptionType.STRING,
  required: false,
};
Object.defineProperty(obj31, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.akHScA);
  },
  set: undefined,
});
Object.defineProperty(obj31, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.akHScA);
  },
  set: undefined,
});
items11[2] = obj31;
items[sum9] = obj28;
const sum10 = sum9 + 1;
const obj32 = {
  id: "-14",
  untranslatedName: "msg",
  displayName: "msg",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items12,
  execute(arr, channel) {
    function handler() {
      return obj(...arguments);
    }
    channel = channel.channel;
    let c1;
    let str2;
    let obj = function _handler4() {
      let recipientIds;
      obj = _asyncToGenerator(async () => {
        let openPrivateChannelResult;
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
                let obj2 = v1(str2[27]);
                const obj5 = { recipientIds };
                v1 = 1;
                c0 = 1;
                const obj6 = {
                  value: openPrivateChannelResult.then((result) => {
                    channel = channel.getChannel(result);
                    c1(closure_2_2[28])(null != channel, "Newly created PrivateChannel is null");
                    const id = channel.id;
                    const sendMessage = c1(closure_2_2[20]).sendMessage;
                    c1(closure_2_2[20]);
                    obj = c1(closure_2_2[21]);
                    const obj2 = { location: constants.PRIVATE_MESSAGE_COMMAND };
                    sendMessage(id, obj.parse(channel, closure_1_2), true, obj2);
                  }),
                  done: false,
                };
                openPrivateChannelResult = obj2.openPrivateChannel(obj5);
                return obj6;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c0 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp7) {
            c0 = 3;
            throw tmp7;
          }
        }
      });
      return obj(...arguments);
    };
    if (null != channel) {
      let tmp3 = arr;
      const user = "user";
      const iter2 = arr.find((name) => name.name === size_str);
      let value;
      if (iter2 != null) {
        value = iter2.value;
      }
      c1 = value;
      const message_str = "message";
      const iter = arr.find((name) => name.name === size_str);
      str2 = undefined;
      if (iter != null) {
        str2 = iter.value;
      }
      if (str2 == null) {
        str2 = "";
      }
      const promise = handler();
      promise.catch(() => {
        const sendBotMessage = MessageActionCreatorsDefault.sendBotMessage;
        const id = channel.id;
        MessageActionCreatorsDefault;
        const intl = require("intl").intl;
        sendBotMessage(id, intl.string(require("intl").t["3XaE95"]));
      });
    }
  },
};
Object.defineProperty(obj32, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.Dg8XZw);
  },
  set: undefined,
});
Object.defineProperty(obj32, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.Dg8XZw);
  },
  set: undefined,
});
const obj33 = { name: "user", displayName: "user", type: Server.ApplicationCommandOptionType.USER, required: true };
Object.defineProperty(obj33, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["KmVq/D"]);
  },
  set: undefined,
});
Object.defineProperty(obj33, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t["KmVq/D"]);
  },
  set: undefined,
});
items12 = [obj33];
const obj34 = {
  name: "message",
  displayName: "message",
  type: Server.ApplicationCommandOptionType.STRING,
  required: true,
};
Object.defineProperty(obj34, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.oGUuOJ);
  },
  set: undefined,
});
Object.defineProperty(obj34, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.oGUuOJ);
  },
  set: undefined,
});
Object.defineProperty(obj34, "maxLength", {
  get: () => {
    const obj = require("useMessageMaxLength");
    return obj.getMaxMessageLength();
  },
  set: undefined,
});
items12[1] = obj34;
items[sum10] = obj32;
const obj35 = {
  id: "-18",
  untranslatedName: "roll-dice",
  displayName: "roll-dice",
  type: Server.ApplicationCommandType.CHAT,
  inputType: ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
  options: items13,
  execute(arr, channel) {
    channel = channel.channel;
    if (null != channel) {
      const count_str = "count";
      const _Number2 = Number;
      const iter2 = arr.find((name) => name.name === size_str);
      let num;
      if (iter2 != null) {
        num = iter2.value;
      }
      if (num == null) {
        num = 1;
      }
      const size_str = "size";
      const _Number = Number;
      const _Number2Result = _Number2(num);
      const iter = arr.find((name) => name.name === size_str);
      let num2;
      if (iter != null) {
        num2 = iter.value;
      }
      if (num2 == null) {
        num2 = 6;
      }
      const _NumberResult = _Number(num2);
      const obj = DiceRollActionCreators;
      obj.startDiceRoll(channel.id, _Number2Result, _NumberResult);
    }
  },
};
Object.defineProperty(obj35, "untranslatedDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.reVgOh);
  },
  set: undefined,
});
Object.defineProperty(obj35, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.reVgOh);
  },
  set: undefined,
});
const obj36 = {
  name: "count",
  displayName: "count",
  type: Server.ApplicationCommandOptionType.INTEGER,
  minValue: 1,
  maxValue: MAX_DICE_COUNT,
};
Object.defineProperty(obj36, "description", {
  get: () => {
    const intl = require("intl").intl;
    const obj = { max: MAX_DICE_COUNT };
    return intl.formatToPlainString(require("intl").t.iSbJTZ, obj);
  },
  set: undefined,
});
Object.defineProperty(obj36, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    const obj = { max: MAX_DICE_COUNT };
    return intl.formatToPlainString(require("intl").t.iSbJTZ, obj);
  },
  set: undefined,
});
items13 = [obj36];
const obj37 = {
  name: "size",
  displayName: "size",
  type: Server.ApplicationCommandOptionType.INTEGER,
  choices: ALLOWED_DICE_SIDES.map((value) => {
    const obj = { name: "D" + value, displayName: "D" + value, value };
    return obj;
  }),
};
Object.defineProperty(obj37, "description", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.pV214H);
  },
  set: undefined,
});
Object.defineProperty(obj37, "displayDescription", {
  get: () => {
    const intl = require("intl").intl;
    return intl.string(require("intl").t.pV214H);
  },
  set: undefined,
});
items13[1] = obj37;
items[sum10 + 1] = obj35;
const found = items.filter((untranslatedName) => {
  items = ["gif", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"];
  return items.includes(untranslatedName.untranslatedName);
});
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandBuiltIns.tsx");

export const PLATFORM_COMMANDS = application_commands_ApplicationCommandBuiltIns.default;
export const BUILT_IN_SECTIONS = obj;
export const BUILT_IN_COMMANDS = items;
export const BUILT_IN_COMMANDS_ORIGINAL = found;
export const getBuiltInCommands = function getBuiltInCommands(commandTypes, arg1, arg2) {
  let closure_1;
  let enabled;
  importDefault = arg2;
  const arr = arg1 ? items : found;
  const obj = require("DiceRollExperiment");
  enabled = obj.getConfig({ location: "getBuiltInCommands" }).enabled;
  return arr.filter((type) => {
    let hasItem = commandTypes.includes(type.type);
    if (hasItem) {
      let tmp3 = !closure_1;
      if (closure_1) {
        tmp3 = type.inputType === ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN_TEXT;
      }
      if (!tmp3) {
        tmp3 = type.inputType === ApplicationCommandTypes.ApplicationCommandInputType.BUILT_IN_INTEGRATION;
      }
      hasItem = tmp3;
    }
    if (hasItem) {
      hasItem = enabled || "roll-dice" !== type.untranslatedName;
      const tmp8 = enabled || "roll-dice" !== type.untranslatedName;
    }
    return hasItem;
  });
};
