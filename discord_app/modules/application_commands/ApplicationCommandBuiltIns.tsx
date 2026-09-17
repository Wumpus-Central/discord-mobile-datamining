// discord_app/modules/application_commands/ApplicationCommandBuiltIns.tsx
import UserSettings from "../user_settings/UserSettings.tsx";
import DiceRollActionCreators from "../dice_roll/DiceRollActionCreators.tsx";
import ThreadHooks from "../threads/ThreadHooks.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import ApplicationCommandTypes from "ApplicationCommandTypes.tsx";
import ChangeNicknameActionCreatorsDefault from "../../actions/ChangeNicknameActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function getOptionValue(arr, arg1) {
  closure_0 = arg1;
  const iter = arr.find((name) => name.name === size);
  value = undefined;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}
const BuiltInSectionId = fn(5086).BuiltInSectionId;
const Constants = fn(1074);
({
  Permissions: closure_7,
  MARKDOWN_SPOILER_WRAPPER: closure_8,
  ME: closure_9,
  DISPLAY_NAME_MAX_LENGTH,
  MAX_CHANNEL_NAME_LENGTH,
} = Constants);
const DiceRollConstants = fn(9455);
({ ALLOWED_DICE_SIDES, MAX_DICE_COUNT } = DiceRollConstants);
let closure_11 = fn(2024).getDisableCommunicationDurationOptions;
const MessageSendLocation = fn(4633).MessageSendLocation;
let obj = {};
let obj2 = { id: BuiltInSectionId.BUILT_IN, type: fn(7637).ApplicationCommandSectionType.BUILT_IN };
Object.defineProperty(obj2, "name", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.fI5MTa);
  },
  set: undefined,
});
obj[BuiltInSectionId.BUILT_IN] = obj2;
let obj3 = { id: BuiltInSectionId.FRECENCY, type: fn(7637).ApplicationCommandSectionType.BUILT_IN };
Object.defineProperty(obj3, "name", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["+cGVV6"]);
  },
  set: undefined,
});
obj[BuiltInSectionId.FRECENCY] = obj3;
let items = [...fn(9456).default];
let obj4 = {
  id: "-1",
  untranslatedName: "shrug",
  displayName: "shrug",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj4, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.j5xUSW);
  },
  set: undefined,
});
Object.defineProperty(obj4, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.j5xUSW);
  },
  set: undefined,
});
let obj5 = { name: "message", displayName: "message", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj5, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.JewOrS);
  },
  set: undefined,
});
Object.defineProperty(obj5, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.JewOrS);
  },
  set: undefined,
});
const items1 = [obj5];
obj4.options = items1;
obj4.execute = function execute(arr) {
  const message = "message";
  const iter = arr.find((name) => name.name === size);
  let str;
  if (iter != null) {
    str = iter.value;
  }
  if (str == null) {
    str = "";
  }
  const obj = { content: "" + str + " \u00AF\\_(\u30C4)_/\u00AF".trim() };
  return obj;
};
items[tmp5] = obj4;
const sum = tmp5 + 1;
let obj6 = {
  id: "-2",
  untranslatedName: "tableflip",
  displayName: "tableflip",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj6, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.nrQRce);
  },
  set: undefined,
});
Object.defineProperty(obj6, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.nrQRce);
  },
  set: undefined,
});
let obj7 = { name: "message", displayName: "message", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj7, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.EI80tw);
  },
  set: undefined,
});
Object.defineProperty(obj7, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.EI80tw);
  },
  set: undefined,
});
const items2 = [obj7];
obj6.options = items2;
obj6.execute = function execute(arr) {
  const message = "message";
  const iter = arr.find((name) => name.name === size);
  let str;
  if (iter != null) {
    str = iter.value;
  }
  if (str == null) {
    str = "";
  }
  const obj = { content: "" + str + " (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B".trim() };
  return obj;
};
items[sum] = obj6;
const sum1 = sum + 1;
let obj8 = {
  id: "-3",
  untranslatedName: "unflip",
  displayName: "unflip",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj8, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.pnnn8e);
  },
  set: undefined,
});
Object.defineProperty(obj8, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.pnnn8e);
  },
  set: undefined,
});
let obj9 = { name: "message", displayName: "message", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj9, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.ETs6go);
  },
  set: undefined,
});
Object.defineProperty(obj9, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.ETs6go);
  },
  set: undefined,
});
const items3 = [obj9];
obj8.options = items3;
obj8.execute = function execute(arr) {
  const message = "message";
  const iter = arr.find((name) => name.name === size);
  let str;
  if (iter != null) {
    str = iter.value;
  }
  if (str == null) {
    str = "";
  }
  const obj = { content: "" + str + " \u252C\u2500\u252C\u30CE( \u00BA _ \u00BA\u30CE)".trim() };
  return obj;
};
items[sum1] = obj8;
const sum2 = sum1 + 1;
let obj10 = {
  id: "-4",
  untranslatedName: "tts",
  displayName: "tts",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj10, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.jZcIid);
  },
  set: undefined,
});
Object.defineProperty(obj10, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.jZcIid);
  },
  set: undefined,
});
const obj11 = { name: "message", displayName: "message", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj11, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["k+sw9g"]);
  },
  set: undefined,
});
Object.defineProperty(obj11, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["k+sw9g"]);
  },
  set: undefined,
});
obj11.required = true;
const items4 = [obj11];
obj10.options = items4;
obj10.predicate = function predicate(channel) {
  channel = channel.channel;
  let setting = null != channel && !channel.isPrivate();
  if (setting) {
    const EnableTTSCommand = UserSettings.EnableTTSCommand;
    setting = EnableTTSCommand.getSetting();
  }
  if (setting) {
    setting = PermissionStore.can(constants.SEND_TTS_MESSAGES, channel);
  }
  return setting;
};
obj10.execute = function execute(arr) {
  const message = "message";
  const iter = arr.find((name) => name.name === size);
  let content;
  if (iter != null) {
    content = iter.value;
  }
  if (content == null) {
    content = "";
  }
  return { content, tts: true };
};
items[sum2] = obj10;
const sum3 = sum2 + 1;
const obj12 = {
  id: "-5",
  untranslatedName: "me",
  displayName: "me",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj12, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.UGO8fU);
  },
  set: undefined,
});
Object.defineProperty(obj12, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.UGO8fU);
  },
  set: undefined,
});
const obj13 = { name: "message", displayName: "message", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj13, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.RWTgNd);
  },
  set: undefined,
});
Object.defineProperty(obj13, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.RWTgNd);
  },
  set: undefined,
});
obj13.required = true;
const items5 = [obj13];
obj12.options = items5;
obj12.execute = function execute(arr) {
  const message = "message";
  const iter = arr.find((name) => name.name === size);
  let str;
  if (iter != null) {
    str = iter.value;
  }
  if (str == null) {
    str = "";
  }
  return { content: "_" + str + "_" };
};
items[sum3] = obj12;
const sum4 = sum3 + 1;
const obj14 = {
  id: "-6",
  untranslatedName: "spoiler",
  displayName: "spoiler",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj14, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.v0eDdV);
  },
  set: undefined,
});
Object.defineProperty(obj14, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.v0eDdV);
  },
  set: undefined,
});
const obj15 = { name: "message", displayName: "message", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj15, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.D13pbc);
  },
  set: undefined,
});
Object.defineProperty(obj15, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.D13pbc);
  },
  set: undefined,
});
obj15.required = true;
const items6 = [obj15];
obj14.options = items6;
obj14.execute = function execute(arr) {
  const message = "message";
  const iter = arr.find((name) => name.name === size);
  let str;
  if (iter != null) {
    str = iter.value;
  }
  if (str == null) {
    str = "";
  }
  const obj = { content: React6(str).trim() };
  return obj;
};
items[sum4] = obj14;
const sum5 = sum4 + 1;
const obj16 = {
  id: "-7",
  untranslatedName: "nick",
  displayName: "nick",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj16, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["jiHfS/"]);
  },
  set: undefined,
});
Object.defineProperty(obj16, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["jiHfS/"]);
  },
  set: undefined,
});
const obj17 = { name: "new_nick", displayName: "new_nick", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj17, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.WTSzVu);
  },
  set: undefined,
});
Object.defineProperty(obj17, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.WTSzVu);
  },
  set: undefined,
});
obj17.maxLength = DISPLAY_NAME_MAX_LENGTH;
const items7 = [obj17];
obj16.options = items7;
obj16.predicate = function predicate(channel) {
  channel = channel.channel;
  let tmp = null != channel && !channel.isPrivate();
  if (tmp) {
    tmp =
      PermissionStore.can(constants.CHANGE_NICKNAME, channel) ||
      PermissionStore.can(constants.MANAGE_NICKNAMES, channel);
    const tmp3 =
      PermissionStore.can(constants.CHANGE_NICKNAME, channel) ||
      PermissionStore.can(constants.MANAGE_NICKNAMES, channel);
  }
  return tmp;
};
obj16.execute = function execute(arr, arg1) {
  ({ guild, channel } = arg1);
  if (null != guild) {
    if (null != channel) {
      const new_nick = "new_nick";
      const iter = arr.find((name) => name.name === size);
      let str;
      if (iter != null) {
        str = iter.value;
      }
      if (str == null) {
        str = "";
      }
      const obj = ChangeNicknameActionCreatorsDefault;
      const id = guild.id;
      const id2 = channel.id;
      if (!str) {
        str = "";
      }
      obj.changeNickname(id, id2, React7, str);
    }
  }
};
items[sum5] = obj16;
const sum6 = sum5 + 1;
const obj18 = {
  id: "-10",
  untranslatedName: "thread",
  displayName: "thread",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj18, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.t6ZAS0);
  },
  set: undefined,
});
Object.defineProperty(obj18, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.t6ZAS0);
  },
  set: undefined,
});
const obj19 = { name: "name", displayName: "name", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj19, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.TffOfY);
  },
  set: undefined,
});
Object.defineProperty(obj19, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.TffOfY);
  },
  set: undefined,
});
obj19.required = true;
obj19.maxLength = MAX_CHANNEL_NAME_LENGTH;
const items8 = [obj19];
const obj20 = { name: "message", displayName: "message", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj20, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.QXfSfU);
  },
  set: undefined,
});
Object.defineProperty(obj20, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.QXfSfU);
  },
  set: undefined,
});
Object.defineProperty(obj20, "maxLength", {
  get: () => require("useMessageMaxLength").getMaxMessageLength(),
  set: undefined,
});
obj20.required = true;
items8[1] = obj20;
obj18.options = items8;
obj18.predicate = function predicate(channel) {
  channel = channel.channel;
  let canStartPublicThread = null != channel;
  if (canStartPublicThread) {
    canStartPublicThread = ThreadHooks.computeCanStartPublicThread(channel);
  }
  return canStartPublicThread;
};
let closure_14 = asyncGeneratorStep(async (arg0, arg1) => {
  closure_0 = arg0;
  const channel = arg1;
  c6 = 0;
  c7 = 0;
  const iter = (async (arg0, value) => {
    const tmp49 = closure_133_13(closure_132_0, "name");
    c2 = tmp49;
    if (tmp49 == null) {
      c2 = "";
    }
    closure_132_2 = c2;
    const tmp11 = closure_133_13(closure_132_0, "message");
    c3 = tmp11;
    if (tmp11 == null) {
      c3 = "";
    }
    closure_132_3 = c3;
    await closure_133_0(closure_133_2[17]).createThread(
      channel2,
      closure_132_2,
      closure_133_0(closure_133_2[18]).ChannelTypes.PUBLIC_THREAD,
      closure_133_0(closure_133_2[19]).getAutoArchiveDuration(channel2, null),
      "Slash Command",
    );
    closure_132_4 = value;
    closure_133_0(closure_133_2[17]);
    const id = closure_132_4.id;
    closure_133_1(closure_133_2[20]).sendMessage(
      id,
      closure_133_1(closure_133_2[21]).parse(closure_132_4, closure_132_3),
      true,
      { location: closure_133_12.THREAD_CREATION },
    );
    await "HermesInternal";
    closure_4 = tmp2;
    closure_132_0 = closure_0;
    channel2 = channel.channel;
    return "PX_16";
  })();
  iter.next();
  return iter;
});
obj18.execute = function () {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[sum6] = obj18;
const sum7 = sum6 + 1;
const obj21 = {
  id: "-11",
  untranslatedName: "kick",
  displayName: "kick",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj21, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["03N0UL"]);
  },
  set: undefined,
});
Object.defineProperty(obj21, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["03N0UL"]);
  },
  set: undefined,
});
const obj22 = { name: "user", displayName: "user", type: fn(1895).ApplicationCommandOptionType.USER };
Object.defineProperty(obj22, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.gF8IpD);
  },
  set: undefined,
});
Object.defineProperty(obj22, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.gF8IpD);
  },
  set: undefined,
});
obj22.required = true;
const items9 = [obj22];
const obj23 = { name: "reason", displayName: "reason", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj23, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.QWldgj);
  },
  set: undefined,
});
Object.defineProperty(obj23, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.QWldgj);
  },
  set: undefined,
});
obj23.required = false;
items9[1] = obj23;
obj21.options = items9;
obj21.predicate = function predicate(guild) {
  return PermissionStore.can(constants.KICK_MEMBERS, guild.guild);
};
obj21.execute = function execute(arr, guild) {
  let user = arr;
  guild = guild.guild;
  const channel = guild.channel;
  let str;
  closure_4 = async function _handler() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_129_0 = undefined;
            if (null != guild) {
              if (null != channel) {
                user = user.getUser(str);
                closure_129_0 = user;
                if (null == user) {
                  const _Error = Error;
                  const error = new Error();
                  throw error;
                } else {
                  const tmp15 = getOptionValue(require, "reason");
                  let _var = tmp15;
                  if (tmp15 == null) {
                    _var = "";
                  }
                  c3 = 1;
                  c4 = 1;
                  const obj5 = { value: tmp3(tmp2[22]).kickUser(tmp39.id, tmp9, _var), done: false };
                  return obj5;
                }
                tmp9 = str;
              }
            }
            c4 = 3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const intl = _var(tmp2[10]).intl;
          const obj7 = { user: null };
          const obj6 = tmp3(tmp2[20]);
          obj7.user = tmp3(tmp2[23]).getUserTag(closure_129_0);
          obj6.sendBotMessage(closure_130_2.id, intl.formatToPlainString(_var(tmp2[10]).t["9wzHDV"], obj7));
          const obj8 = tmp3(tmp2[23]);
        }
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp22) {
        c4 = tmp;
        throw tmp22;
      }
    }
  };
  if (null != guild) {
    if (null != channel) {
      user = "user";
      const iter = arr.find((name) => name.name === size);
      str = undefined;
      if (iter != null) {
        str = iter.value;
      }
      if (str == null) {
        str = "";
      }
      if (PermissionStore.canManageUser(constants.KICK_MEMBERS, str, guild)) {
        (function handler() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })().catch(() => {
          const intl = require("util").intl;
          MessageActionCreatorsDefault.sendBotMessage(channel.id, intl.string(require("util").t.l0gNlp));
        });
        const promise = (function handler() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      } else {
        let intl = user(channel[10]).intl;
        guild(channel[20]).sendBotMessage(channel.id, intl.string(user(channel[10]).t["6RIwPI"]));
        let obj = guild(channel[20]);
      }
    }
  }
};
items[sum7] = obj21;
const sum8 = sum7 + 1;
const obj24 = {
  id: "-12",
  untranslatedName: "ban",
  displayName: "ban",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj24, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.HWuskv);
  },
  set: undefined,
});
Object.defineProperty(obj24, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.HWuskv);
  },
  set: undefined,
});
const obj25 = { name: "user", displayName: "user", type: fn(1895).ApplicationCommandOptionType.USER };
Object.defineProperty(obj25, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.z3XPjr);
  },
  set: undefined,
});
Object.defineProperty(obj25, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.z3XPjr);
  },
  set: undefined,
});
obj25.required = true;
const items10 = [obj25, ,];
const obj26 = {
  name: "delete_messages",
  displayName: "delete_messages",
  type: fn(1895).ApplicationCommandOptionType.INTEGER,
};
Object.defineProperty(obj26, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.smrvA6);
  },
  set: undefined,
});
Object.defineProperty(obj26, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.smrvA6);
  },
  set: undefined,
});
obj26.required = true;
Object.defineProperty(obj26, "choices", {
  get: () => {
    const obj = { name: null, displayName: null, value: 0 };
    const intl = require("util").intl;
    obj.name = intl.string(require("util").t["4obaMS"]);
    const intl2 = require("util").intl;
    obj.displayName = intl2.string(require("util").t["4obaMS"]);
    items = [obj, , , , , ,];
    const obj2 = { name: null, displayName: null, value: null };
    const intl3 = require("util").intl;
    obj2.name = intl3.string(require("util").t.RKpitY);
    const intl4 = require("util").intl;
    obj2.displayName = intl4.string(require("util").t.RKpitY);
    obj2.value = require("Durations").Seconds.HOUR;
    items[1] = obj2;
    const obj3 = { name: null, displayName: null, value: null };
    const intl5 = require("util").intl;
    obj3.name = intl5.string(require("util").t["8WfJZ8"]);
    const intl6 = require("util").intl;
    obj3.displayName = intl6.string(require("util").t["8WfJZ8"]);
    obj3.value = 6 * require("Durations").Seconds.HOUR;
    items[2] = obj3;
    const obj4 = { name: null, displayName: null, value: null };
    const intl7 = require("util").intl;
    obj4.name = intl7.string(require("util").t.p1up7u);
    const intl8 = require("util").intl;
    obj4.displayName = intl8.string(require("util").t.p1up7u);
    obj4.value = 12 * require("Durations").Seconds.HOUR;
    items[3] = obj4;
    const obj5 = { name: null, displayName: null, value: null };
    const intl9 = require("util").intl;
    obj5.name = intl9.string(require("util").t.XuVkkD);
    const intl10 = require("util").intl;
    obj5.displayName = intl10.string(require("util").t.XuVkkD);
    obj5.value = require("Durations").Seconds.DAY;
    items[4] = obj5;
    const obj6 = { name: null, displayName: null, value: null };
    const intl11 = require("util").intl;
    obj6.name = intl11.string(require("util").t["gMcDS+"]);
    const intl12 = require("util").intl;
    obj6.displayName = intl12.string(require("util").t["gMcDS+"]);
    obj6.value = 3 * require("Durations").Seconds.DAY;
    items[5] = obj6;
    const obj7 = { name: null, displayName: null, value: null };
    const intl13 = require("util").intl;
    obj7.name = intl13.string(require("util").t.FA7IUk);
    const intl14 = require("util").intl;
    obj7.displayName = intl14.string(require("util").t.FA7IUk);
    obj7.value = 7 * require("Durations").Seconds.DAY;
    items[6] = obj7;
    return items;
  },
  set: undefined,
});
items10[1] = obj26;
const obj27 = { name: "reason", displayName: "reason", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj27, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.dG4noU);
  },
  set: undefined,
});
Object.defineProperty(obj27, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.dG4noU);
  },
  set: undefined,
});
obj27.required = false;
items10[2] = obj27;
obj24.options = items10;
obj24.predicate = function predicate(guild) {
  return PermissionStore.can(constants.BAN_MEMBERS, guild.guild);
};
obj24.execute = function execute(arr, guild) {
  let user = arr;
  guild = guild.guild;
  const channel = guild.channel;
  let str;
  closure_4 = async function _handler2() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp2;
            let user2;
            if (null != guild) {
              if (null != channel) {
                if ("" === "") {
                  const _Error = Error;
                  const error = new Error();
                  throw error;
                } else {
                  const tmp51 = getOptionValue(require, "delete_messages");
                  let v0 = tmp51;
                  if (tmp51 == null) {
                    v0 = 0;
                  }
                  const tmp49Result = getOptionValue(require, "reason");
                  let _var = tmp49Result;
                  if (tmp49Result == null) {
                    _var = "";
                  }
                  user2 = user.getUser(str);
                  const obj4 = _var(tmp3[22]);
                  c4 = 1;
                  c5 = 1;
                  const obj5 = { value: obj4.banUser(tmp47.id, str, v0, _var), done: false };
                  return obj5;
                }
              }
            }
            c5 = 3;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const intl = v0(tmp3[10]).intl;
          if (null != user2) {
            let userTag = _var(tmp3[23]).getUserTag(user2);
            const obj = _var(tmp3[23]);
          } else {
            userTag = closure_131_3;
          }
          const obj6 = { user: userTag };
          _var(tmp3[20]).sendBotMessage(closure_131_2.id, intl.formatToPlainString(v0(tmp3[10]).t.YflWdM, obj6));
          const obj8 = _var(tmp3[20]);
        }
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } catch (tmp32) {
        c5 = tmp;
        throw tmp32;
      }
    }
  };
  if (null != guild) {
    if (null != channel) {
      user = "user";
      const iter = arr.find((name) => name.name === size);
      str = undefined;
      if (iter != null) {
        str = iter.value;
      }
      if (str == null) {
        str = "";
      }
      if (PermissionStore.canManageUser(constants.BAN_MEMBERS, str, guild)) {
        (function handler() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })().catch(() => {
          const intl = require("util").intl;
          MessageActionCreatorsDefault.sendBotMessage(channel.id, intl.string(require("util").t.w2J6Qs));
        });
        const promise = (function handler() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      } else {
        let intl = user(channel[10]).intl;
        guild(channel[20]).sendBotMessage(channel.id, intl.string(user(channel[10]).t.R27LJl));
        let obj = guild(channel[20]);
      }
    }
  }
};
items[sum8] = obj24;
const sum9 = sum8 + 1;
const obj28 = {
  id: "-13",
  untranslatedName: "timeout",
  displayName: "timeout",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj28, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.KkPcep);
  },
  set: undefined,
});
Object.defineProperty(obj28, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.KkPcep);
  },
  set: undefined,
});
const obj29 = { name: "user", displayName: "user", type: fn(1895).ApplicationCommandOptionType.USER };
Object.defineProperty(obj29, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.UU3VRm);
  },
  set: undefined,
});
Object.defineProperty(obj29, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.UU3VRm);
  },
  set: undefined,
});
obj29.required = true;
const items11 = [obj29, ,];
const obj30 = { name: "duration", displayName: "duration", type: fn(1895).ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj30, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.SNqN1e);
  },
  set: undefined,
});
Object.defineProperty(obj30, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.SNqN1e);
  },
  set: undefined,
});
obj30.required = true;
Object.defineProperty(obj30, "choices", {
  get: () =>
    closure_11().map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      ({ label: obj.name, label: obj.displayName } = item);
      return obj;
    }),
  set: undefined,
});
items11[1] = obj30;
const obj31 = { name: "reason", displayName: "reason", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj31, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.akHScA);
  },
  set: undefined,
});
Object.defineProperty(obj31, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.akHScA);
  },
  set: undefined,
});
obj31.required = false;
items11[2] = obj31;
obj28.options = items11;
obj28.predicate = function predicate(guild) {
  return PermissionStore.can(constants.MODERATE_MEMBERS, guild.guild);
};
obj28.execute = function execute(arr, guild) {
  let user = arr;
  guild = guild.guild;
  const channel = guild.channel;
  c3 = undefined;
  closure_4 = async function _handler3() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp3;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            if (null != guild) {
              if (null != channel) {
                const tmp10 = getOptionValue(require, "duration");
                let _var = tmp10;
                if (tmp10 == null) {
                  _var = "";
                }
                closure_130_0 = _var;
                const tmp8Result = getOptionValue(require, "reason");
                let var2 = tmp8Result;
                if (tmp8Result == null) {
                  var2 = "";
                }
                user = user.getUser(userId);
                closure_130_1 = user;
                if (null == user) {
                  const _Error = Error;
                  const error = new Error();
                  throw error;
                } else {
                  const obj4 = {
                    guildId: tmp40.id,
                    userId,
                    communicationDisabledUntilTimestamp: null,
                    duration: null,
                    reason: null,
                  };
                  const obj8 = var2(tmp2[22]);
                  const obj10 = var2(tmp2[26])();
                  obj4.communicationDisabledUntilTimestamp = var2(tmp2[26])().add(tmp11, "s").toISOString();
                  obj4.duration = tmp11;
                  obj4.reason = tmp13;
                  c4 = 1;
                  c5 = 1;
                  const obj6 = { value: obj8.setCommunicationDisabledUntil(obj4), done: false };
                  return obj6;
                }
                tmp13 = var2;
              }
            }
            c5 = 3;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const intl = _var(tmp2[10]).intl;
          const obj9 = { user: null, duration: null };
          const obj5 = var2(tmp2[20]);
          obj9.user = var2(tmp2[23]).getUserTag(closure_130_1);
          obj9.duration = closure_130_0;
          obj5.sendBotMessage(closure_131_2.id, intl.formatToPlainString(_var(tmp2[10]).t.BbRV6o, obj9));
          const obj7 = var2(tmp2[23]);
        }
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp22) {
        c5 = tmp;
        throw tmp22;
      }
    }
  };
  if (null != guild) {
    if (null != channel) {
      user = "user";
      const iter = arr.find((name) => name.name === size);
      value = undefined;
      if (iter != null) {
        value = iter.value;
      }
      c3 = value;
      if (obj.canToggleCommunicationDisableOnUser(guild.id, value)) {
        (function handler() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })().catch(() => {
          const intl = require("util").intl;
          MessageActionCreatorsDefault.sendBotMessage(channel.id, intl.string(require("util").t["+mWyVq"]));
        });
        const promise = (function handler() {
          const self = this;
          const apply = closure_4.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      } else {
        let intl = tmp2(tmp3[10]).intl;
        guild(tmp3[20]).sendBotMessage(channel.id, intl.string(tmp2(tmp3[10]).t.F5pqSf));
        let obj2 = guild(tmp3[20]);
      }
      obj = user(channel[25]);
    }
  }
};
items[sum9] = obj28;
const sum10 = sum9 + 1;
const obj32 = {
  id: "-14",
  untranslatedName: "msg",
  displayName: "msg",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj32, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.Dg8XZw);
  },
  set: undefined,
});
Object.defineProperty(obj32, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.Dg8XZw);
  },
  set: undefined,
});
const obj33 = { name: "user", displayName: "user", type: fn(1895).ApplicationCommandOptionType.USER };
Object.defineProperty(obj33, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["KmVq/D"]);
  },
  set: undefined,
});
Object.defineProperty(obj33, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["KmVq/D"]);
  },
  set: undefined,
});
obj33.required = true;
const items12 = [obj33];
const obj34 = { name: "message", displayName: "message", type: fn(1895).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj34, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.oGUuOJ);
  },
  set: undefined,
});
Object.defineProperty(obj34, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.oGUuOJ);
  },
  set: undefined,
});
obj34.required = true;
Object.defineProperty(obj34, "maxLength", {
  get: () => require("useMessageMaxLength").getMaxMessageLength(),
  set: undefined,
});
items12[1] = obj34;
obj32.options = items12;
obj32.execute = function execute(arr, channel) {
  channel = channel.channel;
  let message = channel;
  c1 = undefined;
  let str2;
  closure_3 = async function _handler4() {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
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
            const obj5 = { recipientIds };
            const obj2 = v1(4653);
            v1 = 1;
            c0 = 1;
            const obj6 = {
              value: v1(4653)
                .openPrivateChannel(obj5)
                .then((result) => {
                  channel = channel.getChannel(result);
                  c1(38)(null != channel, "Newly created PrivateChannel is null");
                  const obj = c1(7570);
                  obj.sendMessage(channel.id, c1(7796).parse(channel, dependencyMap), true, {
                    location: constants.PRIVATE_MESSAGE_COMMAND,
                  });
                }),
              done: false,
            };
            return obj6;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        c0 = tmp;
        throw tmp8;
      }
    }
  };
  if (null != channel) {
    message = "user";
    const iter2 = arr.find((name) => name.name === size);
    value = undefined;
    if (iter2 != null) {
      value = iter2.value;
    }
    c1 = value;
    message = "message";
    const iter = arr.find((name) => name.name === size);
    str2 = undefined;
    if (iter != null) {
      str2 = iter.value;
    }
    if (str2 == null) {
      str2 = "";
    }
    (function handler() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })().catch(() => {
      const intl = require("util").intl;
      MessageActionCreatorsDefault.sendBotMessage(message.id, intl.string(require("util").t["3XaE95"]));
    });
    const promise = (function handler() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }
};
items[sum10] = obj32;
const obj35 = {
  id: "-18",
  untranslatedName: "roll-dice",
  displayName: "roll-dice",
  type: fn(1895).ApplicationCommandType.CHAT,
  inputType: fn(7637).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj35, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.reVgOh);
  },
  set: undefined,
});
Object.defineProperty(obj35, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.reVgOh);
  },
  set: undefined,
});
const obj36 = { name: "count", displayName: "count", type: fn(1895).ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj36, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.formatToPlainString(require("util").t.iSbJTZ, { max: MAX_DICE_COUNT });
  },
  set: undefined,
});
Object.defineProperty(obj36, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.formatToPlainString(require("util").t.iSbJTZ, { max: MAX_DICE_COUNT });
  },
  set: undefined,
});
obj36.minValue = 1;
obj36.maxValue = MAX_DICE_COUNT;
const items13 = [obj36];
const obj37 = { name: "size", displayName: "size", type: fn(1895).ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj37, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.pV214H);
  },
  set: undefined,
});
Object.defineProperty(obj37, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.pV214H);
  },
  set: undefined,
});
obj37.choices = ALLOWED_DICE_SIDES.map((value) => ({ name: "D" + value, displayName: "D" + value, value }));
items13[1] = obj37;
obj35.options = items13;
obj35.execute = function execute(arr, channel) {
  channel = channel.channel;
  if (null != channel) {
    let size = "count";
    const iter2 = arr.find((name) => name.name === size);
    let num;
    if (iter2 != null) {
      num = iter2.value;
    }
    if (num == null) {
      num = 1;
    }
    size = "size";
    const iter = arr.find((name) => name.name === size);
    let num2;
    if (iter != null) {
      num2 = iter.value;
    }
    if (num2 == null) {
      num2 = 6;
    }
    const NumberResult = Number(num);
    const NumberResult1 = Number(num2);
    DiceRollActionCreators.startDiceRoll(channel.id, NumberResult, NumberResult1);
  }
};
items[sum10 + 1] = obj35;
const found = items.filter((untranslatedName) => {
  items = ["gif", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"];
  return items.includes(untranslatedName.untranslatedName);
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandBuiltIns.tsx");

export const PLATFORM_COMMANDS = fn(9456).default;
export const BUILT_IN_SECTIONS = obj;
export const BUILT_IN_COMMANDS = items;
export const BUILT_IN_COMMANDS_ORIGINAL = found;
export const getBuiltInCommands = function getBuiltInCommands(commandTypes, arg1, arg2) {
  importDefault = arg2;
  enabled = require("DiceRollExperiment").getConfig({ location: "getBuiltInCommands" }).enabled;
  return arg1
    ? items
    : found.filter((type) => {
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
          let tmp8 = enabled;
          if (!enabled) {
            tmp8 = "roll-dice" !== type.untranslatedName;
          }
          hasItem = tmp8;
        }
        return hasItem;
      });
};
