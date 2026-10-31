// discord_app/modules/conjure/plan/useConjurePlanBotPreviewItems.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3868 from "../intl/ConjureUntranslated.messages.js";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import conjurePlanBot from "conjurePlanBot.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import UserRecord from "../../../records/UserRecord.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
function useSampleUser(_31337, name) {
  _require = _31337;
  let username = name;
  let flag = bot.bot;
  if (flag === undefined) {
    flag = false;
  }
  let str = bot.discriminator;
  if (str === undefined) {
    str = "0000";
  }
  let flag2 = bot.enabled;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const items = [UserStore];
  const items1 = [_31337];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_0), items1);
  const items2 = [flag2, stateFromStores, _31337, name, str, flag];
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
}
function mentionBot(str, id) {
  str = str.trim();
  return str.replace(re12, "<@" + id.id + ">");
}
function mentionMember(str, username) {
  const parts = str.split("@" + username.username);
  return parts.join("<@" + username.id + ">");
}
const Constants = fn(1072);
({ MessageStates: closure_8, MessageTypes: closure_9 } = Constants);
const guildTextChannelRecord = new fn(4867).GuildTextChannelRecord({
  id: "1337",
  guild_id: "1337",
  type: Constants.ChannelTypes.GUILD_TEXT,
  name: "preview",
});
const re12 = /^@\S+/;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanBotPreviewItems.tsx");

export const CONJURE_PLAN_BOT_PREVIEW_CHANNEL = guildTextChannelRecord;
export function useConjurePlanBotExchanges(proposal) {
  _require = proposal;
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
        obj2.message = intl.string(_modDef3868.J7qggf);
        const intl2 = util.intl;
        obj2.reply = intl2.string(_modDef3868.nqYtiy);
        const intl3 = util.intl;
        obj2.event = intl3.string(_modDef3868["05lU9W"]);
        items = conjurePlanBot.getConjurePlanBotExchanges(closure_0, tmp, obj2);
      }
      return items;
    }, items),
  };
}
export function useConjurePlanCommandExchanges(proposal) {
  const items = [proposal];
  return noop.useMemo(() => {
    const commands = proposal.commands;
    if (commands.some(conjurePlanBot.isAppCommand)) {
      const obj = {};
      const merged = Object.assign(proposal);
      obj.bot = undefined;
      const obj2 = { message: null, reply: null, event: null };
      const intl = util.intl;
      obj2.message = intl.string(_modDef3868.J7qggf);
      const intl2 = util.intl;
      obj2.reply = intl2.string(_modDef3868.nqYtiy);
      const intl3 = util.intl;
      obj2.event = intl3.string(_modDef3868["05lU9W"]);
      let conjurePlanBotExchanges = conjurePlanBot.getConjurePlanBotExchanges(obj, "commands", obj2);
      const tmp2Result = conjurePlanBot;
    } else {
      conjurePlanBotExchanges = [];
    }
    return conjurePlanBotExchanges;
  }, items);
}
export function useConjurePlanBotPreviewItems(projectId, exchanges) {
  _require = projectId;
  importDefault = exchanges;
  let items = [currentUser];
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
    let intl = tmp(tmp2[13]).intl;
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
  obj6 = useSampleUser("31337", name, { bot: true, enabled: true !== bot });
  if (true === bot) {
    obj6 = stateFromStores3;
  }
  let intl2 = tmp(tmp2[13]).intl;
  const tmp13Result = useSampleUser(
    "31338",
    intl2.string(require("../intl/ConjureUntranslated.messages.js")["9iAOsw"]),
    { discriminator: "0003" },
  );
  closure_5 = tmp13Result;
  let obj3 = { bot: true, enabled: true !== bot };
  const tmpResult3 = require("initialize");
  let str = require("UserUtils").getName(stateFromStores);
  if (str == null) {
    str = "";
  }
  const tmp13Result2 = useSampleUser("31339", str, { enabled: null != stateFromStores });
  currentUser = tmp13Result2;
  let obj5 = { items: null, botIcon: stateFromStores2, appIconSrc: null };
  const items6 = [exchanges, obj6, stateFromStores, tmp13Result2, tmp13Result];
  obj5.items = application_id.useMemo(() => {
    if (null != stateFromStores) {
      if (null != closure_6) {
        if (null != obj6) {
          if (null != closure_5) {
            let obj = { bot: tmp4, currentUser: tmp, viewer: tmp3, member: tmp5 };
            let obj2 = { targetMessage: null, memberMessage: null };
            const intl = util.intl;
            obj2.targetMessage = intl.string(_modDef3868["y+QYes"]);
            const intl2 = util.intl;
            obj2.memberMessage = intl2.string(_modDef3868.BUTRDc);
            (function buildPreviewItems(arg0, arg1, memberMessage) {
              ({ bot, currentUser } = arg1);
              ({ viewer, member } = arg1);
              function add(bot, bot2, arg2) {
                let obj = arg2;
                if (arg2 === undefined) {
                  obj = {};
                }
                ({ interactionName, messageType } = obj);
                const StringResult = String(items.length + 1);
                const obj3 = { channelId: id.id, content: bot, author: bot2, type: null };
                const obj2 = projectId(6063);
                if (messageType == null) {
                  messageType = constants2.DEFAULT;
                }
                const obj4 = {};
                obj3.type = messageType;
                const merged = Object.assign(exchanges(10319)(obj3));
                obj4.id = StringResult;
                obj4.state = constants.SENT;
                if (null != interactionName) {
                  const obj5 = { interaction: null };
                  obj6 = {
                    id: StringResult,
                    name: interactionName,
                    type: projectId(6070).InteractionTypes.APPLICATION_COMMAND,
                    user: projectId(10319).userRecordToServer(currentUser),
                  };
                  obj5.interaction = obj6;
                  let obj7 = obj5;
                  const tmp2Result = projectId(10319);
                } else {
                  obj7 = {};
                }
                const merged1 = Object.assign(obj7);
                const tmp4 = exchanges(10319);
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
                        let addResult1 = add(closure_13(tmp2.user, bot), currentUser);
                        let bot2 = tmp2.bot;
                        let tmp7 = bot2;
                        if (bot2.includes("<@")) {
                          let combined = bot2;
                        } else {
                          let _HermesInternal = HermesInternal;
                          combined = "<@" + viewer.id + "> " + tmp7;
                        }
                        let addResult2 = add(combined, bot);
                      } else if ("event" === kind) {
                        let addResult3 = add(closure_14(tmp2.bot, member), bot);
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
            })(closure_1, obj, obj2);
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
}
