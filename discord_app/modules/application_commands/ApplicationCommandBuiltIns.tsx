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
const BuiltInSectionId = fn(4999).BuiltInSectionId;
const Constants = fn(1074);
({
  Permissions: closure_7,
  MARKDOWN_SPOILER_WRAPPER: closure_8,
  ME: closure_9,
  DISPLAY_NAME_MAX_LENGTH,
  MAX_CHANNEL_NAME_LENGTH,
} = Constants);
const DiceRollConstants = fn(9301);
({ ALLOWED_DICE_SIDES, MAX_DICE_COUNT } = DiceRollConstants);
let closure_11 = fn(2023).getDisableCommunicationDurationOptions;
const MessageSendLocation = fn(4553).MessageSendLocation;
let obj = {};
obj = { id: BuiltInSectionId.BUILT_IN, type: fn(7523).ApplicationCommandSectionType.BUILT_IN };
Object.defineProperty(obj, "name", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.fI5MTa);
  },
  set: undefined,
});
obj[BuiltInSectionId.BUILT_IN] = obj;
obj = { id: BuiltInSectionId.FRECENCY, type: fn(7523).ApplicationCommandSectionType.BUILT_IN };
Object.defineProperty(obj, "name", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["+cGVV6"]);
  },
  set: undefined,
});
obj[BuiltInSectionId.FRECENCY] = obj;
let items = [...fn(9302).default];
let obj1 = {
  id: "-1",
  untranslatedName: "shrug",
  displayName: "shrug",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj1, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.j5xUSW);
  },
  set: undefined,
});
Object.defineProperty(obj1, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.j5xUSW);
  },
  set: undefined,
});
let obj2 = { name: "message", displayName: "message", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj2, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.JewOrS);
  },
  set: undefined,
});
Object.defineProperty(obj2, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.JewOrS);
  },
  set: undefined,
});
const items1 = [obj2];
obj1.options = items1;
obj1.execute = function execute(arr) {
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
items[tmp5] = obj1;
const sum = tmp5 + 1;
let obj3 = {
  id: "-2",
  untranslatedName: "tableflip",
  displayName: "tableflip",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj3, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.nrQRce);
  },
  set: undefined,
});
Object.defineProperty(obj3, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.nrQRce);
  },
  set: undefined,
});
let obj4 = { name: "message", displayName: "message", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj4, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.EI80tw);
  },
  set: undefined,
});
Object.defineProperty(obj4, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.EI80tw);
  },
  set: undefined,
});
const items2 = [obj4];
obj3.options = items2;
obj3.execute = function execute(arr) {
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
items[sum] = obj3;
const sum1 = sum + 1;
let obj5 = {
  id: "-3",
  untranslatedName: "unflip",
  displayName: "unflip",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj5, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.pnnn8e);
  },
  set: undefined,
});
Object.defineProperty(obj5, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.pnnn8e);
  },
  set: undefined,
});
let obj6 = { name: "message", displayName: "message", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj6, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.ETs6go);
  },
  set: undefined,
});
Object.defineProperty(obj6, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.ETs6go);
  },
  set: undefined,
});
const items3 = [obj6];
obj5.options = items3;
obj5.execute = function execute(arr) {
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
items[sum1] = obj5;
const sum2 = sum1 + 1;
let obj7 = {
  id: "-4",
  untranslatedName: "tts",
  displayName: "tts",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj7, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.jZcIid);
  },
  set: undefined,
});
Object.defineProperty(obj7, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.jZcIid);
  },
  set: undefined,
});
let obj8 = { name: "message", displayName: "message", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj8, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["k+sw9g"]);
  },
  set: undefined,
});
Object.defineProperty(obj8, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["k+sw9g"]);
  },
  set: undefined,
});
obj8.required = true;
const items4 = [obj8];
obj7.options = items4;
obj7.predicate = function predicate(channel) {
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
obj7.execute = function execute(arr) {
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
items[sum2] = obj7;
const sum3 = sum2 + 1;
const obj9 = {
  id: "-5",
  untranslatedName: "me",
  displayName: "me",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj9, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.UGO8fU);
  },
  set: undefined,
});
Object.defineProperty(obj9, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.UGO8fU);
  },
  set: undefined,
});
let obj10 = { name: "message", displayName: "message", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj10, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.RWTgNd);
  },
  set: undefined,
});
Object.defineProperty(obj10, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.RWTgNd);
  },
  set: undefined,
});
obj10.required = true;
const items5 = [obj10];
obj9.options = items5;
obj9.execute = function execute(arr) {
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
items[sum3] = obj9;
const sum4 = sum3 + 1;
const obj11 = {
  id: "-6",
  untranslatedName: "spoiler",
  displayName: "spoiler",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN_TEXT,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj11, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.v0eDdV);
  },
  set: undefined,
});
Object.defineProperty(obj11, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.v0eDdV);
  },
  set: undefined,
});
const obj12 = { name: "message", displayName: "message", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj12, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.D13pbc);
  },
  set: undefined,
});
Object.defineProperty(obj12, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.D13pbc);
  },
  set: undefined,
});
obj12.required = true;
const items6 = [obj12];
obj11.options = items6;
obj11.execute = function execute(arr) {
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
items[sum4] = obj11;
const sum5 = sum4 + 1;
const obj13 = {
  id: "-7",
  untranslatedName: "nick",
  displayName: "nick",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj13, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["jiHfS/"]);
  },
  set: undefined,
});
Object.defineProperty(obj13, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["jiHfS/"]);
  },
  set: undefined,
});
const obj14 = { name: "new_nick", displayName: "new_nick", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj14, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.WTSzVu);
  },
  set: undefined,
});
Object.defineProperty(obj14, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.WTSzVu);
  },
  set: undefined,
});
obj14.maxLength = DISPLAY_NAME_MAX_LENGTH;
const items7 = [obj14];
obj13.options = items7;
obj13.predicate = function predicate(channel) {
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
obj13.execute = function execute(arr, arg1) {
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
items[sum5] = obj13;
const sum6 = sum5 + 1;
const obj15 = {
  id: "-10",
  untranslatedName: "thread",
  displayName: "thread",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj15, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.t6ZAS0);
  },
  set: undefined,
});
Object.defineProperty(obj15, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.t6ZAS0);
  },
  set: undefined,
});
const obj16 = { name: "name", displayName: "name", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj16, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.TffOfY);
  },
  set: undefined,
});
Object.defineProperty(obj16, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.TffOfY);
  },
  set: undefined,
});
obj16.required = true;
obj16.maxLength = MAX_CHANNEL_NAME_LENGTH;
const items8 = [obj16];
const obj17 = { name: "message", displayName: "message", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj17, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.QXfSfU);
  },
  set: undefined,
});
Object.defineProperty(obj17, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.QXfSfU);
  },
  set: undefined,
});
Object.defineProperty(obj17, "maxLength", {
  get: () => require("useMessageMaxLength").getMaxMessageLength(),
  set: undefined,
});
obj17.required = true;
items8[1] = obj17;
obj15.options = items8;
obj15.predicate = function predicate(channel) {
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
    closure_132_4 = await closure_133_0(closure_133_2[17]).createThread(
      channel2,
      closure_132_2,
      closure_133_0(closure_133_2[18]).ChannelTypes.PUBLIC_THREAD,
      closure_133_0(closure_133_2[19]).getAutoArchiveDuration(channel2, null),
      "Slash Command",
    );
    closure_133_0(closure_133_2[19]);
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
obj15.execute = function () {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[sum6] = obj15;
const sum7 = sum6 + 1;
const obj18 = {
  id: "-11",
  untranslatedName: "kick",
  displayName: "kick",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj18, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["03N0UL"]);
  },
  set: undefined,
});
Object.defineProperty(obj18, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["03N0UL"]);
  },
  set: undefined,
});
const obj19 = { name: "user", displayName: "user", type: fn(1894).ApplicationCommandOptionType.USER };
Object.defineProperty(obj19, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.gF8IpD);
  },
  set: undefined,
});
Object.defineProperty(obj19, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.gF8IpD);
  },
  set: undefined,
});
obj19.required = true;
const items9 = [obj19];
const obj20 = { name: "reason", displayName: "reason", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj20, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.QWldgj);
  },
  set: undefined,
});
Object.defineProperty(obj20, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.QWldgj);
  },
  set: undefined,
});
obj20.required = false;
items9[1] = obj20;
obj18.options = items9;
obj18.predicate = function predicate(guild) {
  return PermissionStore.can(constants.KICK_MEMBERS, guild.guild);
};
obj18.execute = function execute(arr, guild) {
  let user = arr;
  guild = guild.guild;
  const channel = guild.channel;
  let str;
  closure_4 = async function _handler(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
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
                  let obj1 = tmp3(tmp2[22]);
                  const tmp15 = getOptionValue(require, "reason");
                  let _var = tmp15;
                  if (tmp15 == null) {
                    _var = "";
                  }
                  c3 = 1;
                  c4 = 1;
                  obj1 = { value: null, done: false };
                  obj1.value = obj1.kickUser(tmp39.id, tmp9, _var);
                  return obj1;
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
          const obj2 = { user: null };
          const obj6 = tmp3(tmp2[20]);
          obj2.user = tmp3(tmp2[23]).getUserTag(closure_129_0);
          obj6.sendBotMessage(closure_130_2.id, intl.formatToPlainString(_var(tmp2[10]).t["9wzHDV"], obj2));
          const obj8 = tmp3(tmp2[23]);
        }
        c4 = 3;
        obj = { value, done: true };
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
items[sum7] = obj18;
const sum8 = sum7 + 1;
const obj21 = {
  id: "-12",
  untranslatedName: "ban",
  displayName: "ban",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj21, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.HWuskv);
  },
  set: undefined,
});
Object.defineProperty(obj21, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.HWuskv);
  },
  set: undefined,
});
const obj22 = { name: "user", displayName: "user", type: fn(1894).ApplicationCommandOptionType.USER };
Object.defineProperty(obj22, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.z3XPjr);
  },
  set: undefined,
});
Object.defineProperty(obj22, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.z3XPjr);
  },
  set: undefined,
});
obj22.required = true;
const items10 = [obj22, ,];
const obj23 = {
  name: "delete_messages",
  displayName: "delete_messages",
  type: fn(1894).ApplicationCommandOptionType.INTEGER,
};
Object.defineProperty(obj23, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.smrvA6);
  },
  set: undefined,
});
Object.defineProperty(obj23, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.smrvA6);
  },
  set: undefined,
});
obj23.required = true;
Object.defineProperty(obj23, "choices", {
  get: () => {
    let obj = { name: null, displayName: null, value: 0 };
    const intl = require("util").intl;
    obj.name = intl.string(require("util").t["4obaMS"]);
    const intl2 = require("util").intl;
    obj.displayName = intl2.string(require("util").t["4obaMS"]);
    items = [obj, , , , , ,];
    obj = { name: null, displayName: null, value: null };
    const intl3 = require("util").intl;
    obj.name = intl3.string(require("util").t.RKpitY);
    const intl4 = require("util").intl;
    obj.displayName = intl4.string(require("util").t.RKpitY);
    obj.value = require("Durations").Seconds.HOUR;
    items[1] = obj;
    obj = { name: null, displayName: null, value: null };
    const intl5 = require("util").intl;
    obj.name = intl5.string(require("util").t["8WfJZ8"]);
    const intl6 = require("util").intl;
    obj.displayName = intl6.string(require("util").t["8WfJZ8"]);
    obj.value = 6 * require("Durations").Seconds.HOUR;
    items[2] = obj;
    const obj1 = { name: null, displayName: null, value: null };
    const intl7 = require("util").intl;
    obj1.name = intl7.string(require("util").t.p1up7u);
    const intl8 = require("util").intl;
    obj1.displayName = intl8.string(require("util").t.p1up7u);
    obj1.value = 12 * require("Durations").Seconds.HOUR;
    items[3] = obj1;
    const obj2 = { name: null, displayName: null, value: null };
    const intl9 = require("util").intl;
    obj2.name = intl9.string(require("util").t.XuVkkD);
    const intl10 = require("util").intl;
    obj2.displayName = intl10.string(require("util").t.XuVkkD);
    obj2.value = require("Durations").Seconds.DAY;
    items[4] = obj2;
    const obj3 = { name: null, displayName: null, value: null };
    const intl11 = require("util").intl;
    obj3.name = intl11.string(require("util").t["gMcDS+"]);
    const intl12 = require("util").intl;
    obj3.displayName = intl12.string(require("util").t["gMcDS+"]);
    obj3.value = 3 * require("Durations").Seconds.DAY;
    items[5] = obj3;
    const obj4 = { name: null, displayName: null, value: null };
    const intl13 = require("util").intl;
    obj4.name = intl13.string(require("util").t.FA7IUk);
    const intl14 = require("util").intl;
    obj4.displayName = intl14.string(require("util").t.FA7IUk);
    obj4.value = 7 * require("Durations").Seconds.DAY;
    items[6] = obj4;
    return items;
  },
  set: undefined,
});
items10[1] = obj23;
const obj24 = { name: "reason", displayName: "reason", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj24, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.dG4noU);
  },
  set: undefined,
});
Object.defineProperty(obj24, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.dG4noU);
  },
  set: undefined,
});
obj24.required = false;
items10[2] = obj24;
obj21.options = items10;
obj21.predicate = function predicate(guild) {
  return PermissionStore.can(constants.BAN_MEMBERS, guild.guild);
};
obj21.execute = function execute(arr, guild) {
  let user = arr;
  guild = guild.guild;
  const channel = guild.channel;
  let str;
  closure_4 = async function _handler2(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
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
                  let obj3 = _var(tmp3[22]);
                  c4 = 1;
                  c5 = 1;
                  const obj1 = { value: obj3.banUser(tmp47.id, str, v0, _var), done: false };
                  return obj1;
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
            obj = _var(tmp3[23]);
            let userTag = obj.getUserTag(user2);
          } else {
            userTag = closure_131_3;
          }
          const obj2 = { user: userTag };
          _var(tmp3[20]).sendBotMessage(closure_131_2.id, intl.formatToPlainString(v0(tmp3[10]).t.YflWdM, obj2));
          const obj8 = _var(tmp3[20]);
        }
        c5 = 3;
        obj3 = { value, done: true };
        return obj3;
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
items[sum8] = obj21;
const sum9 = sum8 + 1;
const obj25 = {
  id: "-13",
  untranslatedName: "timeout",
  displayName: "timeout",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj25, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.KkPcep);
  },
  set: undefined,
});
Object.defineProperty(obj25, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.KkPcep);
  },
  set: undefined,
});
const obj26 = { name: "user", displayName: "user", type: fn(1894).ApplicationCommandOptionType.USER };
Object.defineProperty(obj26, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.UU3VRm);
  },
  set: undefined,
});
Object.defineProperty(obj26, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.UU3VRm);
  },
  set: undefined,
});
obj26.required = true;
const items11 = [obj26, ,];
const obj27 = { name: "duration", displayName: "duration", type: fn(1894).ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj27, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.SNqN1e);
  },
  set: undefined,
});
Object.defineProperty(obj27, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.SNqN1e);
  },
  set: undefined,
});
obj27.required = true;
Object.defineProperty(obj27, "choices", {
  get: () =>
    closure_11().map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      ({ label: obj.name, label: obj.displayName } = item);
      return obj;
    }),
  set: undefined,
});
items11[1] = obj27;
const obj28 = { name: "reason", displayName: "reason", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj28, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.akHScA);
  },
  set: undefined,
});
Object.defineProperty(obj28, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.akHScA);
  },
  set: undefined,
});
obj28.required = false;
items11[2] = obj28;
obj25.options = items11;
obj25.predicate = function predicate(guild) {
  return PermissionStore.can(constants.MODERATE_MEMBERS, guild.guild);
};
obj25.execute = function execute(arr, guild) {
  let user = arr;
  guild = guild.guild;
  const channel = guild.channel;
  c3 = undefined;
  closure_4 = async function _handler3(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
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
                user = user.getUser(asyncGeneratorStep);
                closure_130_1 = user;
                if (null == user) {
                  const _Error = Error;
                  const error = new Error();
                  throw error;
                } else {
                  const obj1 = {
                    guildId: tmp40.id,
                    userId: tmp15,
                    communicationDisabledUntilTimestamp: null,
                    duration: null,
                    reason: null,
                  };
                  const obj8 = var2(tmp2[22]);
                  const obj10 = var2(tmp2[26])();
                  obj1.communicationDisabledUntilTimestamp = var2(tmp2[26])().add(tmp11, "s").toISOString();
                  obj1.duration = tmp11;
                  obj1.reason = tmp13;
                  c4 = 1;
                  c5 = 1;
                  const obj2 = { value: obj8.setCommunicationDisabledUntil(obj1), done: false };
                  return obj2;
                }
                tmp13 = var2;
                tmp15 = asyncGeneratorStep;
              }
            }
            c5 = 3;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const intl = _var(tmp2[10]).intl;
          const obj3 = { user: null, duration: null };
          const obj5 = var2(tmp2[20]);
          obj3.user = var2(tmp2[23]).getUserTag(closure_130_1);
          obj3.duration = closure_130_0;
          obj5.sendBotMessage(closure_131_2.id, intl.formatToPlainString(_var(tmp2[10]).t.BbRV6o, obj3));
          const obj7 = var2(tmp2[23]);
        }
        c5 = 3;
        obj = { value, done: true };
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
items[sum9] = obj25;
const sum10 = sum9 + 1;
const obj29 = {
  id: "-14",
  untranslatedName: "msg",
  displayName: "msg",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj29, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.Dg8XZw);
  },
  set: undefined,
});
Object.defineProperty(obj29, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.Dg8XZw);
  },
  set: undefined,
});
const obj30 = { name: "user", displayName: "user", type: fn(1894).ApplicationCommandOptionType.USER };
Object.defineProperty(obj30, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["KmVq/D"]);
  },
  set: undefined,
});
Object.defineProperty(obj30, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["KmVq/D"]);
  },
  set: undefined,
});
obj30.required = true;
const items12 = [obj30];
const obj31 = { name: "message", displayName: "message", type: fn(1894).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj31, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.oGUuOJ);
  },
  set: undefined,
});
Object.defineProperty(obj31, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.oGUuOJ);
  },
  set: undefined,
});
obj31.required = true;
Object.defineProperty(obj31, "maxLength", {
  get: () => require("useMessageMaxLength").getMaxMessageLength(),
  set: undefined,
});
items12[1] = obj31;
obj29.options = items12;
obj29.execute = function execute(arr, channel) {
  channel = channel.channel;
  let message = channel;
  c1 = undefined;
  let str2;
  closure_3 = async function _handler4(arg0, value) {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c0 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = v1(4573);
            obj1 = { recipientIds };
            v1 = 1;
            c0 = 1;
            const obj2 = {
              value: obj1.openPrivateChannel(obj1).then((result) => {
                channel = channel.getChannel(result);
                c1(38)(null != channel, "Newly created PrivateChannel is null");
                c1(7456);
                const obj = { location: constants.PRIVATE_MESSAGE_COMMAND };
                obj.sendMessage(channel.id, c1(7682).parse(channel, dependencyMap), true, obj);
              }),
              done: false,
            };
            return obj2;
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
items[sum10] = obj29;
const obj32 = {
  id: "-18",
  untranslatedName: "roll-dice",
  displayName: "roll-dice",
  type: fn(1894).ApplicationCommandType.CHAT,
  inputType: fn(7523).ApplicationCommandInputType.BUILT_IN,
  applicationId: BuiltInSectionId.BUILT_IN,
};
Object.defineProperty(obj32, "untranslatedDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.reVgOh);
  },
  set: undefined,
});
Object.defineProperty(obj32, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.reVgOh);
  },
  set: undefined,
});
const obj33 = { name: "count", displayName: "count", type: fn(1894).ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj33, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.formatToPlainString(require("util").t.iSbJTZ, { max: MAX_DICE_COUNT });
  },
  set: undefined,
});
Object.defineProperty(obj33, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.formatToPlainString(require("util").t.iSbJTZ, { max: MAX_DICE_COUNT });
  },
  set: undefined,
});
obj33.minValue = 1;
obj33.maxValue = MAX_DICE_COUNT;
const items13 = [obj33];
const obj34 = { name: "size", displayName: "size", type: fn(1894).ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj34, "description", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.pV214H);
  },
  set: undefined,
});
Object.defineProperty(obj34, "displayDescription", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.pV214H);
  },
  set: undefined,
});
obj34.choices = ALLOWED_DICE_SIDES.map((value) => ({ name: "D" + value, displayName: "D" + value, value }));
items13[1] = obj34;
obj32.options = items13;
obj32.execute = function execute(arr, channel) {
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
items[sum10 + 1] = obj32;
const found = items.filter((untranslatedName) => {
  items = ["gif", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"];
  return items.includes(untranslatedName.untranslatedName);
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandBuiltIns.tsx");

export const PLATFORM_COMMANDS = fn(9302).default;
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
