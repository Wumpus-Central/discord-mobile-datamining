// === Module 8156: getOptionValue ===

// Module 8156 (getOptionValue)
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import useCanUnarchiveThread from "useCanUnarchiveThread" /* 6116 */;
import _modDef8159 from "module_8159" /* 8159 */;
import importDefaultResult from "asyncGeneratorStep" /* 5 */;
import closure_4 from "ensureGuildLoaded" /* 1387 */;
import closure_5 from "getUncachedChannelPermissions" /* 4121 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { BuiltInSectionId } from "TRUE_OPTION_NAME" /* 4952 */;
import ME from "ME" /* 676 */;
import ROLL_DURATION_MS from "ROLL_DURATION_MS" /* 8157 */;
import { getDisableCommunicationDurationOptions as closure_11 } from "getFriendlyDurationString" /* 1994 */;
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING" /* 4471 */;

require = arg1;
function getOptionValue(arr) {
  closure_0 = arg1;
  const iter = arr.find((name) => name.name === size);
  let value;
  if (iter != null) {
    value = iter.value;
  }
  return value;
}
let c3 = importDefaultResult;
({ Permissions: error, MARKDOWN_SPOILER_WRAPPER: closure_8, ME: c9, DISPLAY_NAME_MAX_LENGTH, MAX_CHANNEL_NAME_LENGTH } = ME);
({ ALLOWED_DICE_SIDES, MAX_DICE_COUNT } = ROLL_DURATION_MS);
let obj = {};
obj = { id: BuiltInSectionId.BUILT_IN, type: require("ApplicationCommandSectionType").ApplicationCommandSectionType.BUILT_IN };
Object.defineProperty(obj, "name", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.fI5MTa);
  },
  set: undefined
});
obj[BuiltInSectionId.BUILT_IN] = obj;
obj = { id: BuiltInSectionId.FRECENCY, type: require("ApplicationCommandSectionType").ApplicationCommandSectionType.BUILT_IN };
Object.defineProperty(obj, "name", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+cGVV6"]);
  },
  set: undefined
});
obj[BuiltInSectionId.FRECENCY] = obj;
let items = [...require("get untranslatedDescription").default];
let obj1 = { id: "-1", untranslatedName: "shrug", displayName: "shrug", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj1, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.j5xUSW);
  },
  set: undefined
});
Object.defineProperty(obj1, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.j5xUSW);
  },
  set: undefined
});
let obj2 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj2, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.JewOrS);
  },
  set: undefined
});
Object.defineProperty(obj2, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.JewOrS);
  },
  set: undefined
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
let obj3 = { id: "-2", untranslatedName: "tableflip", displayName: "tableflip", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj3, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.nrQRce);
  },
  set: undefined
});
Object.defineProperty(obj3, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.nrQRce);
  },
  set: undefined
});
let obj4 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj4, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.EI80tw);
  },
  set: undefined
});
Object.defineProperty(obj4, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.EI80tw);
  },
  set: undefined
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
let obj5 = { id: "-3", untranslatedName: "unflip", displayName: "unflip", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj5, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.pnnn8e);
  },
  set: undefined
});
Object.defineProperty(obj5, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.pnnn8e);
  },
  set: undefined
});
let obj6 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj6, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ETs6go);
  },
  set: undefined
});
Object.defineProperty(obj6, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ETs6go);
  },
  set: undefined
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
let obj7 = { id: "-4", untranslatedName: "tts", displayName: "tts", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj7, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jZcIid);
  },
  set: undefined
});
Object.defineProperty(obj7, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jZcIid);
  },
  set: undefined
});
let obj8 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj8, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["k+sw9g"]);
  },
  set: undefined
});
Object.defineProperty(obj8, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["k+sw9g"]);
  },
  set: undefined
});
obj8.required = true;
const items4 = [obj8];
obj7.options = items4;
obj7.predicate = function predicate(channel) {
  channel = channel.channel;
  let setting = null != channel && !channel.isPrivate();
  if (setting) {
    const EnableTTSCommand = explicitContentFromProto.EnableTTSCommand;
    setting = EnableTTSCommand.getSetting();
  }
  if (setting) {
    setting = closure_5.can(constants.SEND_TTS_MESSAGES, channel);
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
const obj9 = { id: "-5", untranslatedName: "me", displayName: "me", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj9, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.UGO8fU);
  },
  set: undefined
});
Object.defineProperty(obj9, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.UGO8fU);
  },
  set: undefined
});
let obj10 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj10, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.RWTgNd);
  },
  set: undefined
});
Object.defineProperty(obj10, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.RWTgNd);
  },
  set: undefined
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
const obj11 = { id: "-6", untranslatedName: "spoiler", displayName: "spoiler", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj11, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.v0eDdV);
  },
  set: undefined
});
Object.defineProperty(obj11, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.v0eDdV);
  },
  set: undefined
});
const obj12 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj12, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.D13pbc);
  },
  set: undefined
});
Object.defineProperty(obj12, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.D13pbc);
  },
  set: undefined
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
  const obj = { content: callback(str).trim() };
  return obj;
};
items[sum4] = obj11;
const sum5 = sum4 + 1;
const obj13 = { id: "-7", untranslatedName: "nick", displayName: "nick", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj13, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["jiHfS/"]);
  },
  set: undefined
});
Object.defineProperty(obj13, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["jiHfS/"]);
  },
  set: undefined
});
const obj14 = { name: "new_nick", displayName: "new_nick", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj14, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.WTSzVu);
  },
  set: undefined
});
Object.defineProperty(obj14, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.WTSzVu);
  },
  set: undefined
});
obj14.maxLength = DISPLAY_NAME_MAX_LENGTH;
const items7 = [obj14];
obj13.options = items7;
obj13.predicate = function predicate(channel) {
  channel = channel.channel;
  let tmp = null != channel && !channel.isPrivate();
  if (tmp) {
    tmp = closure_5.can(constants.CHANGE_NICKNAME, channel) || closure_5.can(constants.MANAGE_NICKNAMES, channel);
    const obj = closure_5;
    const tmp2 = constants;
    const tmp3 = closure_5.can(constants.CHANGE_NICKNAME, channel) || closure_5.can(constants.MANAGE_NICKNAMES, channel);
  }
  return tmp;
};
obj13.execute = function execute(arr) {
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
      const obj = _modDef8159;
      const id = guild.id;
      const id2 = channel.id;
      if (!str) {
        str = "";
      }
      obj.changeNickname(id, id2, closure_9, str);
    }
  }
};
items[sum5] = obj13;
const sum6 = sum5 + 1;
const obj15 = { id: "-10", untranslatedName: "thread", displayName: "thread", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj15, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.t6ZAS0);
  },
  set: undefined
});
Object.defineProperty(obj15, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.t6ZAS0);
  },
  set: undefined
});
const obj16 = { name: "name", displayName: "name", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj16, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.TffOfY);
  },
  set: undefined
});
Object.defineProperty(obj16, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.TffOfY);
  },
  set: undefined
});
obj16.required = true;
obj16.maxLength = MAX_CHANNEL_NAME_LENGTH;
const items8 = [obj16, ];
const obj17 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj17, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.QXfSfU);
  },
  set: undefined
});
Object.defineProperty(obj17, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.QXfSfU);
  },
  set: undefined
});
Object.defineProperty(obj17, "maxLength", { get: () => require(8160) /* useMessageMaxLength */.getMaxMessageLength(), set: undefined });
obj17.required = true;
items8[1] = obj17;
obj15.options = items8;
obj15.predicate = function predicate(channel) {
  channel = channel.channel;
  let canStartPublicThread = null != channel;
  if (canStartPublicThread) {
    canStartPublicThread = useCanUnarchiveThread.computeCanStartPublicThread(channel);
    const obj = useCanUnarchiveThread;
  }
  return canStartPublicThread;
};
let closure_14 = importDefaultResult((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  const iter = (function*(arg0, arg1) {
    if (c7 === 2) {
      c7 = 3;
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
            closure_5 = tmp5;
            let id = tmp2;
            let channel;
            channel = channel.channel;
            dependencyMap = undefined;
            closure_3 = undefined;
            id = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "PX_16", done: null };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            const tmp50 = callback2(callback, "name");
            dependencyMap = tmp50;
            if (tmp50 == null) {
              dependencyMap = "";
            }
            const tmp11 = callback2(callback, "message");
            closure_3 = tmp11;
            if (tmp11 == null) {
              closure_3 = "";
            }
            obj1 = callback(8161);
            let obj2 = callback(8162);
            c6 = 2;
            c7 = 1;
            obj2 = { value: null, done: false };
            obj2[0] = obj1.createThread(channel, dependencyMap, callback(692).ChannelTypes.PUBLIC_THREAD, obj2.getAutoArchiveDuration(channel, null), "Slash Command");
            return obj2;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          id = arg1;
          const obj8 = channel(7201);
          id = id.id;
          const obj3 = { location: null };
          obj3[0] = constants.THREAD_CREATION;
          obj8.sendMessage(id, channel(7427).parse(id, closure_3), true, obj3);
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp27) {
        c7 = tmp;
        throw tmp27;
      }
    }
  })();
  iter.next();
  return iter;
});
obj15.execute = function() {
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
const obj18 = { id: "-11", untranslatedName: "kick", displayName: "kick", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj18, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["03N0UL"]);
  },
  set: undefined
});
Object.defineProperty(obj18, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["03N0UL"]);
  },
  set: undefined
});
const obj19 = { name: "user", displayName: "user", type: require("PermissionOverwriteType").ApplicationCommandOptionType.USER };
Object.defineProperty(obj19, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.gF8IpD);
  },
  set: undefined
});
Object.defineProperty(obj19, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.gF8IpD);
  },
  set: undefined
});
obj19.required = true;
const items9 = [obj19, ];
const obj20 = { name: "reason", displayName: "reason", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj20, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.QWldgj);
  },
  set: undefined
});
Object.defineProperty(obj20, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.QWldgj);
  },
  set: undefined
});
obj20.required = false;
items9[1] = obj20;
obj18.options = items9;
obj18.predicate = function predicate(guild) {
  return closure_5.can(constants.KICK_MEMBERS, guild.guild);
};
obj18.execute = function execute(arr, guild) {
  let user = arr;
  guild = guild.guild;
  const channel = guild.channel;
  let str;
  function _handler() {
    const self = this;
    const tmp = str(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const id = tmp2;
              closure_1 = tmp3;
              c0 = undefined;
              if (null != closure_1_1) {
                if (null != closure_1_2) {
                  user = closure_1_6.getUser(c3);
                  c0 = user;
                  if (null == user) {
                    const _Error = Error;
                    error = new Error();
                    throw error;
                  } else {
                    obj1 = closure_1_1(closure_1_2[22]);
                    const tmp15 = closure_1_13(closure_1_0, "reason");
                    c0 = tmp15;
                    if (tmp15 == null) {
                      c0 = "";
                    }
                    c3 = 1;
                    c4 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj1.kickUser(tmp40.id, tmp9, c0);
                    return obj1;
                  }
                  tmp9 = c3;
                }
              }
              c4 = 3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const intl = closure_1_0(closure_1_2[10]).intl;
            const obj2 = { user: null };
            const obj6 = closure_1_1(closure_1_2[20]);
            obj2[0] = closure_1_1(closure_1_2[23]).getUserTag(c0);
            obj6.sendBotMessage(id.id, intl.formatToPlainString(closure_1_0(closure_1_2[10]).t["9wzHDV"], obj2));
            const obj8 = closure_1_1(closure_1_2[23]);
          }
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp22) {
          c4 = tmp;
          throw tmp22;
        }
      }
    });
    closure_4 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
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
      if (closure_5.canManageUser(constants.KICK_MEMBERS, str, guild)) {
        (function handler() {
          const self = this;
          const apply = _handler.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })().catch(() => {
          const intl = user(channel[10]).intl;
          guild(channel[20]).sendBotMessage(channel.id, intl.string(user(channel[10]).t.l0gNlp));
        });
        const promise = (function handler() {
          const self = this;
          const apply = _handler.apply;
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
const obj21 = { id: "-12", untranslatedName: "ban", displayName: "ban", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj21, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.HWuskv);
  },
  set: undefined
});
Object.defineProperty(obj21, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.HWuskv);
  },
  set: undefined
});
const obj22 = { name: "user", displayName: "user", type: require("PermissionOverwriteType").ApplicationCommandOptionType.USER };
Object.defineProperty(obj22, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.z3XPjr);
  },
  set: undefined
});
Object.defineProperty(obj22, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.z3XPjr);
  },
  set: undefined
});
obj22.required = true;
const items10 = [obj22, , ];
const obj23 = { name: "delete_messages", displayName: "delete_messages", type: require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj23, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.smrvA6);
  },
  set: undefined
});
Object.defineProperty(obj23, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.smrvA6);
  },
  set: undefined
});
obj23.required = true;
Object.defineProperty(obj23, "choices", {
  get: () => {
    let obj = { name: null, displayName: null, value: 0 };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["4obaMS"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["4obaMS"]);
    items = [obj, , , , , , ];
    obj = { name: null, displayName: null, value: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.RKpitY);
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl4.string(require(1236) /* getSystemLocale */.t.RKpitY);
    obj[2] = importDefault(687).Seconds.HOUR;
    items[1] = obj;
    obj = { name: null, displayName: null, value: null };
    const intl5 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl5.string(require(1236) /* getSystemLocale */.t["8WfJZ8"]);
    const intl6 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl6.string(require(1236) /* getSystemLocale */.t["8WfJZ8"]);
    obj[2] = 6 * importDefault(687).Seconds.HOUR;
    items[2] = obj;
    obj1 = { name: null, displayName: null, value: null };
    const intl7 = require(1236) /* getSystemLocale */.intl;
    obj1[0] = intl7.string(require(1236) /* getSystemLocale */.t.p1up7u);
    const intl8 = require(1236) /* getSystemLocale */.intl;
    obj1[1] = intl8.string(require(1236) /* getSystemLocale */.t.p1up7u);
    obj1[2] = 12 * importDefault(687).Seconds.HOUR;
    items[3] = obj1;
    const obj2 = { name: null, displayName: null, value: null };
    const intl9 = require(1236) /* getSystemLocale */.intl;
    obj2[0] = intl9.string(require(1236) /* getSystemLocale */.t.XuVkkD);
    const intl10 = require(1236) /* getSystemLocale */.intl;
    obj2[1] = intl10.string(require(1236) /* getSystemLocale */.t.XuVkkD);
    obj2[2] = importDefault(687).Seconds.DAY;
    items[4] = obj2;
    const obj3 = { name: null, displayName: null, value: null };
    const intl11 = require(1236) /* getSystemLocale */.intl;
    obj3[0] = intl11.string(require(1236) /* getSystemLocale */.t["gMcDS+"]);
    const intl12 = require(1236) /* getSystemLocale */.intl;
    obj3[1] = intl12.string(require(1236) /* getSystemLocale */.t["gMcDS+"]);
    obj3[2] = 3 * importDefault(687).Seconds.DAY;
    items[5] = obj3;
    const obj4 = { name: null, displayName: null, value: null };
    const intl13 = require(1236) /* getSystemLocale */.intl;
    obj4[0] = intl13.string(require(1236) /* getSystemLocale */.t.FA7IUk);
    const intl14 = require(1236) /* getSystemLocale */.intl;
    obj4[1] = intl14.string(require(1236) /* getSystemLocale */.t.FA7IUk);
    obj4[2] = 7 * importDefault(687).Seconds.DAY;
    items[6] = obj4;
    return items;
  },
  set: undefined
});
items10[1] = obj23;
const obj24 = { name: "reason", displayName: "reason", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj24, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.dG4noU);
  },
  set: undefined
});
Object.defineProperty(obj24, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.dG4noU);
  },
  set: undefined
});
obj24.required = false;
items10[2] = obj24;
obj21.options = items10;
obj21.predicate = function predicate(guild) {
  return closure_5.can(constants.BAN_MEMBERS, guild.guild);
};
obj21.execute = function execute(arr, guild) {
  let user = arr;
  guild = guild.guild;
  const channel = guild.channel;
  let str;
  function _handler2() {
    const self = this;
    const tmp = str(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp2;
              const id = tmp3;
              user = undefined;
              if (null != closure_1_1) {
                if (null != closure_1_2) {
                  if ("" === closure_1_3) {
                    const _Error = Error;
                    error = new Error();
                    throw error;
                  } else {
                    const tmp52 = closure_1_13(closure_1_0, "delete_messages");
                    user = tmp52;
                    if (tmp52 == null) {
                      user = 0;
                    }
                    const tmp50Result = closure_1_13(closure_1_0, "reason");
                    c1 = tmp50Result;
                    if (tmp50Result == null) {
                      c1 = "";
                    }
                    user = closure_1_6.getUser(closure_1_3);
                    let obj3 = closure_1_1(closure_1_2[22]);
                    c4 = 1;
                    c5 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = obj3.banUser(tmp48.id, closure_1_3, user, c1);
                    return obj1;
                  }
                }
              }
              c5 = 3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const intl = closure_1_0(closure_1_2[10]).intl;
            if (null != user) {
              obj = closure_1_1(closure_1_2[23]);
              let userTag = obj.getUserTag(user);
            } else {
              userTag = closure_3;
            }
            const obj2 = { user: null };
            obj2[0] = userTag;
            closure_1_1(closure_1_2[20]).sendBotMessage(id.id, intl.formatToPlainString(closure_1_0(closure_1_2[10]).t.YflWdM, obj2));
            const obj8 = closure_1_1(closure_1_2[20]);
          }
          c5 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } catch (tmp32) {
          c5 = tmp;
          throw tmp32;
        }
      }
    });
    closure_4 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
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
      if (closure_5.canManageUser(constants.BAN_MEMBERS, str, guild)) {
        (function handler() {
          const self = this;
          const apply = _handler2.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })().catch(() => {
          const intl = user(channel[10]).intl;
          guild(channel[20]).sendBotMessage(channel.id, intl.string(user(channel[10]).t.w2J6Qs));
        });
        const promise = (function handler() {
          const self = this;
          const apply = _handler2.apply;
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
const obj25 = { id: "-13", untranslatedName: "timeout", displayName: "timeout", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj25, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.KkPcep);
  },
  set: undefined
});
Object.defineProperty(obj25, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.KkPcep);
  },
  set: undefined
});
const obj26 = { name: "user", displayName: "user", type: require("PermissionOverwriteType").ApplicationCommandOptionType.USER };
Object.defineProperty(obj26, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.UU3VRm);
  },
  set: undefined
});
Object.defineProperty(obj26, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.UU3VRm);
  },
  set: undefined
});
obj26.required = true;
const items11 = [obj26, , ];
const obj27 = { name: "duration", displayName: "duration", type: require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj27, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.SNqN1e);
  },
  set: undefined
});
Object.defineProperty(obj27, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.SNqN1e);
  },
  set: undefined
});
obj27.required = true;
Object.defineProperty(obj27, "choices", {
  get: () => callback2().map((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    ({ label: obj.name, label: obj.displayName } = arg0);
    return obj;
  }),
  set: undefined
});
items11[1] = obj27;
const obj28 = { name: "reason", displayName: "reason", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj28, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.akHScA);
  },
  set: undefined
});
Object.defineProperty(obj28, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.akHScA);
  },
  set: undefined
});
obj28.required = false;
items11[2] = obj28;
obj25.options = items11;
obj25.predicate = function predicate(guild) {
  return closure_5.can(constants.MODERATE_MEMBERS, guild.guild);
};
obj25.execute = function execute(arr, guild) {
  let user = arr;
  guild = guild.guild;
  const channel = guild.channel;
  c3 = undefined;
  function _handler3() {
    const self = this;
    const tmp = _undefined(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              const id = tmp2;
              closure_0 = undefined;
              user = undefined;
              if (null != closure_1_1) {
                if (null != closure_1_2) {
                  const tmp10 = closure_1_13(closure_1_0, "duration");
                  closure_0 = tmp10;
                  if (tmp10 == null) {
                    closure_0 = "";
                  }
                  const tmp8Result = closure_1_13(closure_1_0, "reason");
                  user = tmp8Result;
                  if (tmp8Result == null) {
                    user = "";
                  }
                  user = closure_1_6.getUser(closure_1_3);
                  if (null == user) {
                    const _Error = Error;
                    error = new Error();
                    throw error;
                  } else {
                    obj1 = { guildId: null, userId: null, communicationDisabledUntilTimestamp: null, duration: null, reason: null };
                    obj1[0] = tmp41.id;
                    obj1[1] = tmp15;
                    const obj8 = closure_1_1(closure_1_2[22]);
                    const obj10 = closure_1_1(closure_1_2[26])();
                    obj1[2] = closure_1_1(closure_1_2[26])().add(tmp11, "s").toISOString();
                    obj1[3] = tmp11;
                    obj1[4] = tmp13;
                    c4 = 1;
                    c5 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = obj8.setCommunicationDisabledUntil(obj1);
                    return obj2;
                  }
                  tmp13 = user;
                  tmp15 = closure_1_3;
                  const tmp8 = closure_1_13;
                  const tmp9 = closure_1_0;
                }
              }
              c5 = 3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            const intl = closure_1_0(closure_1_2[10]).intl;
            const obj3 = { user: null, duration: null };
            const obj5 = closure_1_1(closure_1_2[20]);
            obj3[0] = closure_1_1(closure_1_2[23]).getUserTag(user);
            obj3[1] = closure_0;
            obj5.sendBotMessage(id.id, intl.formatToPlainString(closure_1_0(closure_1_2[10]).t.BbRV6o, obj3));
            const obj7 = closure_1_1(closure_1_2[23]);
          }
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp22) {
          c5 = tmp;
          throw tmp22;
        }
      }
    });
    closure_4 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  if (null != guild) {
    if (null != channel) {
      user = "user";
      const iter = arr.find((name) => name.name === size);
      let value;
      if (iter != null) {
        value = iter.value;
      }
      c3 = value;
      if (obj.canToggleCommunicationDisableOnUser(guild.id, value)) {
        (function handler() {
          const self = this;
          const apply = _handler3.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })().catch(() => {
          const intl = user(channel[10]).intl;
          guild(channel[20]).sendBotMessage(channel.id, intl.string(user(channel[10]).t["+mWyVq"]));
        });
        const promise = (function handler() {
          const self = this;
          const apply = _handler3.apply;
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
const obj29 = { id: "-14", untranslatedName: "msg", displayName: "msg", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj29, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Dg8XZw);
  },
  set: undefined
});
Object.defineProperty(obj29, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Dg8XZw);
  },
  set: undefined
});
const obj30 = { name: "user", displayName: "user", type: require("PermissionOverwriteType").ApplicationCommandOptionType.USER };
Object.defineProperty(obj30, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["KmVq/D"]);
  },
  set: undefined
});
Object.defineProperty(obj30, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["KmVq/D"]);
  },
  set: undefined
});
obj30.required = true;
const items12 = [obj30, ];
const obj31 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj31, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.oGUuOJ);
  },
  set: undefined
});
Object.defineProperty(obj31, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.oGUuOJ);
  },
  set: undefined
});
obj31.required = true;
Object.defineProperty(obj31, "maxLength", { get: () => require(8160) /* useMessageMaxLength */.getMaxMessageLength(), set: undefined });
items12[1] = obj31;
obj29.options = items12;
obj29.execute = function execute(arr, channel) {
  channel = channel.channel;
  let message = channel;
  c1 = undefined;
  let str2;
  function _handler4(arg0) {
    const self = this;
    const tmp = _handler4(function*() {
      if (c0 === 2) {
        c0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c0 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = v0(closure_1_2[27]);
              obj1 = { recipientIds: null };
              obj1[0] = v0;
              v0 = 1;
              c0 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj1.openPrivateChannel(obj1).then((arg0) => {
                const channel = closure_1_4.getChannel(arg0);
                v1(closure_1_2[28])(null != channel, "Newly created PrivateChannel is null");
                let obj = v1(closure_1_2[20]);
                obj = { location: closure_1_12.PRIVATE_MESSAGE_COMMAND };
                obj.sendMessage(channel.id, v1(closure_1_2[21]).parse(channel, closure_2), true, obj);
              });
              return obj2;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    });
    closure_3 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  if (null != channel) {
    message = "user";
    const iter2 = arr.find((name) => name.name === size);
    let value;
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
      const apply = _handler4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })().catch(() => {
      const intl = message(str2[10]).intl;
      _undefined(str2[20]).sendBotMessage(message.id, intl.string(message(str2[10]).t["3XaE95"]));
    });
    const promise = (function handler() {
      const self = this;
      const apply = _handler4.apply;
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
const obj32 = { id: "-18", untranslatedName: "roll-dice", displayName: "roll-dice", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj32, "untranslatedDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.reVgOh);
  },
  set: undefined
});
Object.defineProperty(obj32, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.reVgOh);
  },
  set: undefined
});
const obj33 = { name: "count", displayName: "count", type: require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj33, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.iSbJTZ, { max: MAX_DICE_COUNT });
  },
  set: undefined
});
Object.defineProperty(obj33, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.iSbJTZ, { max: MAX_DICE_COUNT });
  },
  set: undefined
});
obj33.minValue = 1;
obj33.maxValue = MAX_DICE_COUNT;
const items13 = [obj33, ];
const obj34 = { name: "size", displayName: "size", type: require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj34, "description", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.pV214H);
  },
  set: undefined
});
Object.defineProperty(obj34, "displayDescription", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.pV214H);
  },
  set: undefined
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
    size(6092).startDiceRoll(channel.id, NumberResult, NumberResult1);
    const obj = size(6092);
  }
};
items[sum10 + 1] = obj32;
const found = items.filter((untranslatedName) => {
  items = ["gif", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"];
  return items.includes(untranslatedName.untranslatedName);
});
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandBuiltIns.tsx");

export const PLATFORM_COMMANDS = require("get untranslatedDescription").default;
export const BUILT_IN_SECTIONS = obj;
export const BUILT_IN_COMMANDS = items;
export const BUILT_IN_COMMANDS_ORIGINAL = found;
export const getBuiltInCommands = function getBuiltInCommands(commandTypes, arg1, arg2) {
  closure_0 = commandTypes;
  importDefault = arg2;
  enabled = importDefault(enabled[30]).getConfig({ location: "getBuiltInCommands" }).enabled;
  return arg1 ? items : found.filter((type) => {
    let hasItem = commandTypes.includes(type.type);
    if (hasItem) {
      let tmp3 = !closure_1;
      if (closure_1) {
        tmp3 = type.inputType === commandTypes(enabled[9]).ApplicationCommandInputType.BUILT_IN_TEXT;
      }
      if (!tmp3) {
        tmp3 = type.inputType === commandTypes(enabled[9]).ApplicationCommandInputType.BUILT_IN_INTEGRATION;
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