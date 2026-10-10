// discord_app/modules/conjure/plan/useConjurePlanBotPreviewItems.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef3849 from "../intl/ConjureUntranslated.messages.js";
import MessageRecordUtils from "../../messages/MessageRecordUtils.tsx";
import InteractionTypes from "../../../../discord_common/js/shared/shared-constants/InteractionTypes.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import createMessage from "../../messages/createMessage.tsx";
import conjurePlanBot from "conjurePlanBot.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import UserRecord from "../../../records/UserRecord.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

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
      const obj6 = {
        id: StringResult,
        name: interactionName,
        type: InteractionTypes.InteractionTypes.APPLICATION_COMMAND,
        user: createMessage.userRecordToServer(currentUser),
      };
      obj5.interaction = obj6;
      let obj7 = obj5;
      const tmp2Result = createMessage;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    items.push({
      key: StringResult,
      record: obj2.createMessageRecord(obj4),
      isCommandReply: null != interactionName,
      menu: obj.menu,
    });
    const obj8 = {
      key: StringResult,
      record: obj2.createMessageRecord(obj4),
      isCommandReply: null != interactionName,
      menu: obj.menu,
    };
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
const Constants = fn(1085);
({ MessageStates: closure_8, MessageTypes: closure_9 } = Constants);
let c10 = "31337";
let c11 = "31338";
let c12 = "31339";
const guildTextChannelRecord = new fn(2069).GuildTextChannelRecord({
  id: "1337",
  guild_id: "1337",
  type: Constants.ChannelTypes.GUILD_TEXT,
  name: "preview",
});
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSampleUser(id, username, arg2) {
      const _require = id;
      importDefault = username;
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
      class E {
        constructor() {
          tmp = enabled;
          if (enabled) {
            tmp2 = null;
            username = undefined;
            if (closure_5 != null) {
              username = closure_5.username;
            }
            tmp4 = closure_1;
            tmp = username !== closure_1;
          }
          if (tmp) {
            tmp5 = closure_0;
            tmp6 = closure_2;
            obj = closure_0(closure_2[10]);
            tmp7 = closure_5;
            obj1 = { id: null, username: null, discriminator: null, bot: null };
            tmp8 = closure_0;
            obj1.id = closure_0;
            tmp9 = closure_1;
            obj1.username = closure_1;
            tmp10 = discriminator;
            obj1.discriminator = discriminator;
            tmp11 = bot;
            obj1.bot = bot;
            tmp12 = new.target;
            tmp13 = new.target;
            tmp14 = obj1;
            tmp15 = new closure_5(obj1);
            tmp16 = tmp15;
            insertStaticUserResult = obj.insertStaticUser(tmp15);
          }
          return;
        }
      }
      cResult[10] = username1;
      cResult[11] = username;
      cResult[12] = E;
      tmp14 = E;
      const tmpResult = require("initialize");
    }
  : function useSampleUser(id, username) {
      const _require = id;
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
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => UserStore.getUser(closure_0),
        items1,
      );
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
    };
const re15 = /^@\S+/;
fn(558);
ReactCompilerGating = fn(558);
let obj = { id: "1337", guild_id: "1337", type: Constants.ChannelTypes.GUILD_TEXT, name: "preview" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjurePlanBotExchanges(proposal) {
      const cResult = c.c(8);
      if (cResult[0] !== proposal) {
        const conjurePlanBotInteraction = conjurePlanBot.getConjurePlanBotInteraction(proposal);
        cResult[0] = proposal;
        cResult[1] = conjurePlanBotInteraction;
        let tmp4 = conjurePlanBotInteraction;
        const tmpResult = conjurePlanBot;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp4) {
        if (cResult[3] === proposal) {
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
        obj3.message = intl.string(_modDef3849.J7qggf);
        const intl2 = util.intl;
        obj3.reply = intl2.string(_modDef3849.nqYtiy);
        const intl3 = util.intl;
        obj3.event = intl3.string(_modDef3849["05lU9W"]);
        items = conjurePlanBot.getConjurePlanBotExchanges(proposal, tmp4, obj3);
        const tmpResult2 = conjurePlanBot;
      }
      cResult[2] = tmp4;
      cResult[3] = proposal;
      cResult[4] = items;
    }
  : function useConjurePlanBotExchanges(proposal) {
      const _require = proposal;
      const conjurePlanBotInteraction = require("conjurePlanBot").getConjurePlanBotInteraction(proposal);
      let items = [proposal, conjurePlanBotInteraction];
      let obj = require("conjurePlanBot");
      return {
        botInteraction: conjurePlanBotInteraction,
        botExchanges: noop.useMemo(() => {
          if (null == conjurePlanBotInteraction) {
            let items = [];
          } else {
            const obj2 = { message: null, reply: null, event: null };
            const intl = util.intl;
            obj2.message = intl.string(_modDef3849.J7qggf);
            const intl2 = util.intl;
            obj2.reply = intl2.string(_modDef3849.nqYtiy);
            const intl3 = util.intl;
            obj2.event = intl3.string(_modDef3849["05lU9W"]);
            items = conjurePlanBot.getConjurePlanBotExchanges(closure_0, tmp, obj2);
          }
          return items;
        }, items),
      };
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanBotPreviewItems.tsx");

export const CONJURE_PLAN_BOT_PREVIEW_CHANNEL = guildTextChannelRecord;
export const useConjurePlanBotExchanges = tmp4;
export const useConjurePlanBotPreviewItems = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjurePlanBotPreviewItems(arg0, arg1) {
      const _require = arg0;
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
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        const items3 = [application_id];
        cResult[6] = application_id;
        cResult[7] = I;
        cResult[8] = items3;
        let tmp16 = items3;
      } else {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        tmp16 = cResult[8];
      }
      const tmpResult4 = require("initialize");
      const stateFromStores2 = require("initialize").useStateFromStores(tmp13, I, tmp16);
      if (stateFromStores1 != null) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
      }
      if (cResult[9] !== undefined) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        if (stateFromStores1 != null) {
          class I {
            constructor() {
              application = closure_4.getApplication(application_id);
              iconURL = undefined;
              if (application != null) {
                num = 80;
                iconURL = application.getIconURL(80);
              }
              if (iconURL == null) {
                iconURL = null;
              }
              return iconURL;
            }
          }
        }
        if (stringResult == null) {
          class I {
            constructor() {
              application = closure_4.getApplication(application_id);
              iconURL = undefined;
              if (application != null) {
                num = 80;
                iconURL = application.getIconURL(80);
              }
              if (iconURL == null) {
                iconURL = null;
              }
              return iconURL;
            }
          }
          stringResult = obj5.string(application_id(3849).JEYq8M);
        }
        if (stateFromStores1 != null) {
          class I {
            constructor() {
              application = closure_4.getApplication(application_id);
              iconURL = undefined;
              if (application != null) {
                num = 80;
                iconURL = application.getIconURL(80);
              }
              if (iconURL == null) {
                iconURL = null;
              }
              return iconURL;
            }
          }
        }
        cResult[9] = undefined;
        cResult[10] = stringResult;
        const tmp18 = stringResult;
      } else {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        const items4 = [UserStore];
        cResult[11] = items4;
        const tmp22 = items4;
      } else {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
      }
      if (cResult[12] !== application_id) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        const items5 = [application_id];
        cResult[12] = application_id;
        cResult[13] = items5;
        cResult[14] = tmp25;
        let tmp24 = tmp25;
        const tmp23 = items5;
      } else {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        tmp24 = cResult[14];
      }
      const tmpResult5 = require("initialize");
      const stateFromStores3 = require("initialize").useStateFromStores(tmp22, tmp24, tmp23);
      if (stateFromStores3 != null) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
      }
      if ((cResult[15] !== true) !== undefined) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        tmp30[1] = tmp28;
        cResult[15] = tmp28;
        cResult[16] = tmp30;
      } else {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
      }
      const tmpResult6 = require("initialize");
      if (true === undefined) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
      }
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        const stringResult1 = obj7.string(application_id(3849)["9iAOsw"]);
        const obj2 = { discriminator: "0003" };
        cResult[17] = stringResult1;
        cResult[18] = obj2;
        let tmp34 = obj2;
        const tmp33 = stringResult1;
      } else {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        tmp34 = cResult[18];
      }
      closure_14(c11, tmp33, tmp34);
      if (cResult[19] !== stateFromStores) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        const name = obj9.getName(stateFromStores);
        if (name == null) {
          class I {
            constructor() {
              application = closure_4.getApplication(application_id);
              iconURL = undefined;
              if (application != null) {
                num = 80;
                iconURL = application.getIconURL(80);
              }
              if (iconURL == null) {
                iconURL = null;
              }
              return iconURL;
            }
          }
        }
        cResult[19] = stateFromStores;
        cResult[20] = name;
        const tmp38 = name;
      } else {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
      }
      if (cResult[21] !== (null != stateFromStores)) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
        tmp42[0] = tmp40;
        cResult[21] = tmp40;
        cResult[22] = tmp42;
      } else {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
      }
      closure_14(c12, tmp38, tmp42);
      if (cResult[23] === tmp32) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
      }
      if (null != stateFromStores) {
        class I {
          constructor() {
            application = closure_4.getApplication(application_id);
            iconURL = undefined;
            if (application != null) {
              num = 80;
              iconURL = application.getIconURL(80);
            }
            if (iconURL == null) {
              iconURL = null;
            }
            return iconURL;
          }
        }
      }
      tmp32 = closure_14(c10, tmp18, tmp30);
    }
  : function useConjurePlanBotPreviewItems(arg0, arg1) {
      const _require = arg0;
      importDefault = arg1;
      const items = [currentUser];
      stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj = require("initialize");
      const tmp3 = currentUser;
      const items1 = [ConjureProjectStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
        ConjureProjectStore.getProject(closure_0),
      );
      let application_id;
      if (stateFromStores1 != null) {
        application_id = stateFromStores1.application_id;
      }
      let obj2 = require("initialize");
      const items2 = [obj6];
      const items3 = [application_id];
      let stateFromStores2 = require("initialize").useStateFromStores(
        items2,
        () => {
          const application = ApplicationStore.getApplication(application_id);
          let iconURL;
          if (application != null) {
            iconURL = application.getIconURL(80);
          }
          if (iconURL == null) {
            iconURL = null;
          }
          return iconURL;
        },
        items3,
      );
      let name;
      if (stateFromStores1 != null) {
        name = stateFromStores1.name;
      }
      if (name == null) {
        let intl = tmp(tmp2[15]).intl;
        name = intl.string(require("../intl/ConjureUntranslated.messages.js").JEYq8M);
      }
      const tmpResult = require("initialize");
      const items4 = [tmp3];
      const items5 = [application_id];
      const stateFromStores3 = require("initialize").useStateFromStores(
        items4,
        () => {
          let user;
          if (null != application_id) {
            user = UserStore.getUser(tmp);
          }
          return user;
        },
        items5,
      );
      let bot;
      if (stateFromStores3 != null) {
        bot = stateFromStores3.bot;
      }
      obj6 = closure_14(c10, name, { bot: true, enabled: true !== bot });
      if (true === bot) {
        obj6 = stateFromStores3;
      }
      let intl2 = tmp(tmp2[15]).intl;
      const tmp13Result = closure_14(c11, intl2.string(require("../intl/ConjureUntranslated.messages.js")["9iAOsw"]), {
        discriminator: "0003",
      });
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
                obj2.targetMessage = intl.string(_modDef3849["y+QYes"]);
                const intl2 = util.intl;
                obj2.memberMessage = intl2.string(_modDef3849.BUTRDc);
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
    };
