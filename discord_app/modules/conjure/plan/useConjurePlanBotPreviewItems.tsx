// === Module 12446: useConjurePlanBotPreviewItems ===

// Module 12446 (useConjurePlanBotPreviewItems)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6013 */;
import InteractionTypes from "InteractionTypes" /* 6020 */;
import UserActionCreators from "UserActionCreators" /* 8670 */;
import createMessage from "createMessage" /* 10209 */;
import conjurePlanBot from "conjurePlanBot" /* 12447 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import UserRecord from "UserRecord" /* 1403 */;
import UserStore from "UserStore" /* 1389 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;

const require = globalThis.__r;
const createMessageDefault = createMessage;

require = fn;
function mentionBot(user, bot) {
  return user.trim().replace(re15, "<@" + bot.id + ">");
}
function mentionMember(bot, member) {
  const parts = bot.split("@" + member.username);
  return parts.join("<@" + member.id + ">");
}
function buildPreviewItems(arg0, arg1, memberMessage) {
  ({ bot, currentUser } = arg1);
  ({ viewer, member } = arg1);
  function add(bot, bot2, arg2) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    ({ interactionName, messageType } = obj);
    const StringResult = String(items.length + 1);
    const obj3 = { channelId: guildTextChannelRecord.id, content: bot, author: bot2, type: null };
    const obj2 = MessageRecordUtils;
    if (messageType == null) {
      messageType = constants2.DEFAULT;
    }
    const obj4 = {};
    obj3.type = messageType;
    const merged = Object.assign(createMessageDefault(obj3));
    obj4.id = StringResult;
    obj4.state = constants.SENT;
    if (null != interactionName) {
      const obj5 = { interaction: null };
      const obj6 = { id: StringResult, name: interactionName, type: InteractionTypes.InteractionTypes.APPLICATION_COMMAND, user: createMessage.userRecordToServer(currentUser) };
      obj5.interaction = obj6;
      let obj7 = obj5;
      const tmp2Result = createMessage;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    items.push({ key: StringResult, record: obj2.createMessageRecord(obj4), isCommandReply: null != interactionName, menu: obj.menu });
    const obj8 = { key: StringResult, record: obj2.createMessageRecord(obj4), isCommandReply: null != interactionName, menu: obj.menu };
  }
  const items = [];
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let kind = nextResult.kind;
    if ("command" === kind) {
      ({ user, bot: bot3 } = tmp2);
      let str2 = user.trim();
      let str3 = str2.replace(/^\//, "");
      let str4 = str3.split(/\s+/)[0];
      if (str4 == null) {
        str4 = "";
      }
      let obj2 = { interactionName: str4, messageType: constants2.CHAT_INPUT_COMMAND };
      let addResult = add(bot3, bot, obj2);
    } else {
      if ("user_command" !== kind) {
        if ("message_command" !== kind) {
          if ("message" === kind) {
            let addResult1 = add(mentionBot(tmp2.user, bot), currentUser);
            let bot2 = tmp2.bot;
            let tmp6 = bot2;
            if (bot2.includes("<@")) {
              let combined = bot2;
            } else {
              let _HermesInternal = HermesInternal;
              combined = "<@" + viewer.id + "> " + tmp6;
            }
            let addResult2 = add(combined, bot);
          } else if ("event" === kind) {
            let addResult3 = add(mentionMember(tmp2.bot, member), bot);
          }
        }
      }
      let tmp13 = "user_command" === tmp2.kind;
      let tmp14 = tmp13;
      let tmp17 = currentUser;
      let tmp15 = tmp13 ? memberMessage.memberMessage : memberMessage.targetMessage;
      if (tmp14) {
        tmp17 = member;
      }
      let str = "message";
      if (tmp14) {
        str = "user";
      }
      let obj = { menu: null };
      let obj3 = { target: str, commandName: null };
      obj3.commandName = tmp2.user;
      obj.menu = obj3;
      let addResult4 = add(tmp15, tmp17, obj);
      let obj4 = { interactionName: tmp2.user, messageType: constants2.CONTEXT_MENU_COMMAND };
      let addResult5 = add(tmp2.bot, bot, obj4);
    }
    continue;
  }
  return items;
}
const Constants = fn(1084);
({ MessageStates: closure_8, MessageTypes: closure_9 } = Constants);
let c10 = "31337";
let c11 = "31338";
let c12 = "31339";
const guildTextChannelRecord = new fn(4828).GuildTextChannelRecord({ id: "1337", guild_id: "1337", type: Constants.ChannelTypes.GUILD_TEXT, name: "preview" });
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSampleUser(id, username, arg2) {
  _require = id;
  const cResult = require("c").c(20);
  if (cResult[0] !== arg2) {
    let obj2 = arg2;
    if (undefined === arg2) {
      obj2 = {};
    }
    cResult[0] = arg2;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ bot, discriminator, enabled } = tmp4);
  dependencyMap = tmp5;
  let str = "0000";
  if (undefined !== discriminator) {
    str = discriminator;
  }
  closure_4 = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[2] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== id) {
    const fn = function p() {
      return UserStore.getUser(closure_0);
    };
    const items1 = [id];
    cResult[3] = id;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp7, tmp9, tmp10);
  if (cResult[6] === (undefined !== bot && bot)) {
    if (cResult[7] === str) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === id) {
          username = undefined;
          if (stateFromStores != null) {
            username = stateFromStores.username;
          }
          if (cResult[10] === username) {
            if (cResult[11] === username) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] === tmp5) {
              if (cResult[14] === str) {
                if (cResult[15] === tmp6) {
                  if (cResult[16] === id) {
                    if (cResult[17] === stateFromStores) {
                      if (cResult[18] === username) {
                        let tmp16 = cResult[19];
                      }
                      const effect = str.useEffect(tmp14, tmp16);
                      return stateFromStores;
                    }
                  }
                }
              }
            }
            const items2 = [tmp6, stateFromStores, id, username, str, tmp5];
            cResult[13] = tmp5;
            cResult[14] = str;
            cResult[15] = tmp6;
            cResult[16] = id;
            cResult[17] = stateFromStores;
            cResult[18] = username;
            cResult[19] = items2;
            tmp16 = items2;
          }
        }
      }
    }
  }
  cResult[6] = undefined !== bot && bot;
  cResult[7] = str;
  cResult[8] = undefined === enabled || enabled;
  cResult[9] = id;
  let username1;
  if (stateFromStores != null) {
    username1 = stateFromStores.username;
  }
  const fn2 = function h() {
    let tmp = closure_4;
    if (closure_4) {
      username = undefined;
      if (stateFromStores != null) {
        username = stateFromStores.username;
      }
      tmp = username !== username;
    }
    if (tmp) {
      const obj2 = { id, username, discriminator: str, bot };
      const tmp15 = new UserRecord(obj2);
      UserActionCreators.insertStaticUser(tmp15);
    }
  };
  cResult[10] = username1;
  cResult[11] = username;
  cResult[12] = fn2;
  tmp14 = fn2;
  const tmpResult = require("initialize");
}) : (function useSampleUser(id, username) {
  _require = id;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.bot;
  if (flag === undefined) {
    flag = false;
  }
  let str = obj.discriminator;
  if (str === undefined) {
    str = "0000";
  }
  let flag2 = obj.enabled;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const items = [UserStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_0), items1);
  const items2 = [flag2, stateFromStores, id, username, str, flag];
  const effect = str.useEffect(() => {
    let tmp = flag2;
    if (flag2) {
      username = undefined;
      if (stateFromStores != null) {
        username = stateFromStores.username;
      }
      tmp = username !== username;
    }
    if (tmp) {
      const obj2 = { id, username, discriminator: str, bot: flag };
      const tmp15 = new UserRecord(obj2);
      UserActionCreators.insertStaticUser(tmp15);
    }
  }, items2);
  return stateFromStores;
});
const re15 = /^@\S+/;
fn(558);
ReactCompilerGating = fn(558);
let obj = { id: "1337", guild_id: "1337", type: Constants.ChannelTypes.GUILD_TEXT, name: "preview" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanBotExchanges(supported_surfaces) {
  const cResult = c.c(8);
  if (cResult[0] !== supported_surfaces) {
    const conjurePlanBotInteraction = conjurePlanBot.getConjurePlanBotInteraction(supported_surfaces);
    cResult[0] = supported_surfaces;
    cResult[1] = conjurePlanBotInteraction;
    let tmp4 = conjurePlanBotInteraction;
    const tmpResult = conjurePlanBot;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    if (cResult[3] === supported_surfaces) {
      if (cResult[5] === cResult[4]) {
        if (cResult[6] === tmp4) {
          let tmp7 = cResult[7];
        }
        return tmp7;
      }
      const obj2 = { botInteraction: tmp4, botExchanges: cResult[4] };
      cResult[5] = cResult[4];
      cResult[6] = tmp4;
      cResult[7] = obj2;
      tmp7 = obj2;
    }
  }
  if (null == tmp4) {
    let items = [];
  } else {
    const obj3 = { message: null, reply: null, event: null };
    const intl = util.intl;
    obj3.message = intl.string(_modDef3831.J7qggf);
    const intl2 = util.intl;
    obj3.reply = intl2.string(_modDef3831.nqYtiy);
    const intl3 = util.intl;
    obj3.event = intl3.string(_modDef3831["05lU9W"]);
    items = conjurePlanBot.getConjurePlanBotExchanges(supported_surfaces, tmp4, obj3);
    const tmpResult2 = conjurePlanBot;
  }
  cResult[2] = tmp4;
  cResult[3] = supported_surfaces;
  cResult[4] = items;
}) : (function useConjurePlanBotExchanges(supported_surfaces) {
  _require = supported_surfaces;
  const conjurePlanBotInteraction = require("conjurePlanBot").getConjurePlanBotInteraction(supported_surfaces);
  let items = [supported_surfaces, conjurePlanBotInteraction];
  let obj = require("conjurePlanBot");
  return {
    botInteraction: conjurePlanBotInteraction,
    botExchanges: noop.useMemo(() => {
      if (null == conjurePlanBotInteraction) {
        let items = [];
      } else {
        const obj2 = { message: null, reply: null, event: null };
        const intl = util.intl;
        obj2.message = intl.string(_modDef3831.J7qggf);
        const intl2 = util.intl;
        obj2.reply = intl2.string(_modDef3831.nqYtiy);
        const intl3 = util.intl;
        obj2.event = intl3.string(_modDef3831["05lU9W"]);
        items = conjurePlanBot.getConjurePlanBotExchanges(closure_0, tmp, obj2);
      }
      return items;
    }, items)
  };
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanCommandExchanges(commands) {
  let intl = require;
  const cResult = c.c(2);
  if (cResult[0] !== commands) {
    commands = commands.commands;
    if (commands.some(conjurePlanBot.isAppCommand)) {
      const obj2 = {};
      const merged = Object.assign(commands);
      obj2.bot = undefined;
      const obj3 = { message: null, reply: null, event: null };
      const intl2 = util.intl;
      obj3.message = intl2.string(_modDef3831.J7qggf);
      const intl3 = util.intl;
      obj3.reply = intl3.string(_modDef3831.nqYtiy);
      intl = util.intl;
      obj3.event = intl.string(_modDef3831["05lU9W"]);
      let conjurePlanBotExchanges = conjurePlanBot.getConjurePlanBotExchanges(obj2, "commands", obj3);
      const intlResult = conjurePlanBot;
    } else {
      conjurePlanBotExchanges = [];
    }
    cResult[0] = commands;
    cResult[1] = conjurePlanBotExchanges;
  } else {
    return cResult[1];
  }
}) : (function useConjurePlanCommandExchanges(arg0) {
  let commands = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    commands = commands.commands;
    if (commands.some(conjurePlanBot.isAppCommand)) {
      const obj = {};
      const merged = Object.assign(tmp);
      obj.bot = undefined;
      const obj2 = { message: null, reply: null, event: null };
      const intl = util.intl;
      obj2.message = intl.string(_modDef3831.J7qggf);
      const intl2 = util.intl;
      obj2.reply = intl2.string(_modDef3831.nqYtiy);
      const intl3 = util.intl;
      obj2.event = intl3.string(_modDef3831["05lU9W"]);
      let conjurePlanBotExchanges = conjurePlanBot.getConjurePlanBotExchanges(obj, "commands", obj2);
      const tmp2Result = conjurePlanBot;
    } else {
      conjurePlanBotExchanges = [];
    }
    return conjurePlanBotExchanges;
  }, items);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanBotPreviewItems.tsx");

export const CONJURE_PLAN_BOT_PREVIEW_CHANNEL = guildTextChannelRecord;
export const useConjurePlanBotExchanges = tmp4;
export const useConjurePlanCommandExchanges = tmp5;
export const useConjurePlanBotPreviewItems = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanBotPreviewItems(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(36);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ConjureProjectStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function p() {
      return ConjureProjectStore.getProject(closure_0);
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  let application_id;
  if (stateFromStores1 != null) {
    application_id = stateFromStores1.application_id;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ApplicationStore];
    cResult[5] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== application_id) {
    const fn3 = function y() {
      const application = ApplicationStore.getApplication(application_id);
      let iconURL;
      if (application != null) {
        iconURL = application.getIconURL(80);
      }
      if (iconURL == null) {
        iconURL = null;
      }
      return iconURL;
    };
    const items3 = [application_id];
    cResult[6] = application_id;
    cResult[7] = fn3;
    cResult[8] = items3;
    let tmp16 = items3;
    let tmp15 = fn3;
  } else {
    tmp15 = cResult[7];
    tmp16 = cResult[8];
  }
  const tmpResult4 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp13, tmp15, tmp16);
  let name;
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  if (cResult[9] !== name) {
    let name1;
    if (stateFromStores1 != null) {
      name1 = stateFromStores1.name;
    }
    if (name1 == null) {
      const intl = tmp(1125).intl;
      name1 = intl.string(application_id(3831).JEYq8M);
    }
    let name2;
    if (stateFromStores1 != null) {
      name2 = stateFromStores1.name;
    }
    cResult[9] = name2;
    cResult[10] = name1;
    let tmp19 = name1;
  } else {
    tmp19 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [UserStore];
    cResult[11] = items4;
    let tmp23 = items4;
  } else {
    tmp23 = cResult[11];
  }
  if (cResult[12] !== application_id) {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
    const items5 = [application_id];
    cResult[12] = application_id;
    cResult[13] = items5;
    cResult[14] = N;
    let tmp26 = N;
    const tmp25 = items5;
  } else {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
    tmp26 = cResult[14];
  }
  const tmpResult5 = require("initialize");
  const stateFromStores3 = require("initialize").useStateFromStores(tmp23, tmp26, tmp25);
  if (stateFromStores3 != null) {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
  }
  if (cResult[15] !== true !== undefined) {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
    tmp31[1] = tmp29;
    cResult[15] = tmp29;
    cResult[16] = tmp31;
  } else {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
  }
  const tmpResult6 = require("initialize");
  if (true === undefined) {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
    const stringResult = obj6.string(application_id(3831)["9iAOsw"]);
    const obj2 = { discriminator: "0003" };
    cResult[17] = stringResult;
    cResult[18] = obj2;
    let tmp35 = obj2;
    const tmp34 = stringResult;
  } else {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
    tmp35 = cResult[18];
  }
  closure_14(c11, tmp34, tmp35);
  if (cResult[19] !== stateFromStores) {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
    const name3 = obj8.getName(stateFromStores);
    if (name3 == null) {
      class N {
        constructor() {
          user = undefined;
          if (null != application_id) {
            tmp3 = closure_6;
            user = closure_6.getUser(tmp);
          }
          return user;
        }
      }
    }
    cResult[19] = stateFromStores;
    cResult[20] = name3;
    const tmp39 = name3;
  } else {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
  }
  if (cResult[21] !== (null != stateFromStores)) {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
    tmp43[0] = tmp41;
    cResult[21] = tmp41;
    cResult[22] = tmp43;
  } else {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
  }
  closure_14(c12, tmp39, tmp43);
  if (cResult[23] === tmp33) {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
  }
  if (null != stateFromStores) {
    class N {
      constructor() {
        user = undefined;
        if (null != application_id) {
          tmp3 = closure_6;
          user = closure_6.getUser(tmp);
        }
        return user;
      }
    }
  }
  tmp33 = closure_14(c10, tmp19, tmp31);
}) : (function useConjurePlanBotPreviewItems(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const items = [currentUser];
  stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require("initialize");
  const tmp3 = currentUser;
  const items1 = [ConjureProjectStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ConjureProjectStore.getProject(closure_0));
  let application_id;
  if (stateFromStores1 != null) {
    application_id = stateFromStores1.application_id;
  }
  let obj2 = require("initialize");
  const items2 = [obj6];
  const items3 = [application_id];
  let stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    const application = ApplicationStore.getApplication(application_id);
    let iconURL;
    if (application != null) {
      iconURL = application.getIconURL(80);
    }
    if (iconURL == null) {
      iconURL = null;
    }
    return iconURL;
  }, items3);
  let name;
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  if (name == null) {
    let intl = tmp(tmp2[15]).intl;
    name = intl.string(require("module_3831").JEYq8M);
  }
  const tmpResult = require("initialize");
  const items4 = [tmp3];
  const items5 = [application_id];
  const stateFromStores3 = require("initialize").useStateFromStores(items4, () => {
    let user;
    if (null != application_id) {
      user = UserStore.getUser(tmp);
    }
    return user;
  }, items5);
  let bot;
  if (stateFromStores3 != null) {
    bot = stateFromStores3.bot;
  }
  obj6 = closure_14(c10, name, { bot: true, enabled: true !== bot });
  if (true === bot) {
    obj6 = stateFromStores3;
  }
  let intl2 = tmp(tmp2[15]).intl;
  const tmp13Result = closure_14(c11, intl2.string(require("module_3831")["9iAOsw"]), { discriminator: "0003" });
  closure_5 = tmp13Result;
  const obj3 = { bot: true, enabled: true !== bot };
  const tmpResult3 = require("initialize");
  let str = require("UserUtils").getName(stateFromStores);
  if (str == null) {
    str = "";
  }
  const tmp13Result2 = closure_14(c12, str, { enabled: null != stateFromStores });
  currentUser = tmp13Result2;
  const obj5 = { items: null, botIcon: stateFromStores2, appIconSrc: null };
  const items6 = [arg1, obj6, stateFromStores, tmp13Result2, tmp13Result];
  obj5.items = application_id.useMemo(() => {
    if (null != stateFromStores) {
      if (null != closure_6) {
        if (null != obj6) {
          if (null != closure_5) {
            const obj = { bot: tmp4, currentUser: tmp, viewer: tmp3, member: tmp5 };
            const obj2 = { targetMessage: null, memberMessage: null };
            const intl = util.intl;
            obj2.targetMessage = intl.string(_modDef3831["y+QYes"]);
            const intl2 = util.intl;
            obj2.memberMessage = intl2.string(_modDef3831.BUTRDc);
            buildPreviewItems(closure_1, obj, obj2);
          }
          return [];
        }
      }
    }
  }, items6);
  if (stateFromStores2 == null) {
    let avatarURL;
    if (obj6 != null) {
      avatarURL = obj6.getAvatarURL(undefined, 80);
    }
    stateFromStores2 = avatarURL;
  }
  obj5.appIconSrc = stateFromStores2;
  return obj5;
});