// === Module 13228: conjureServerAppRemoval ===

// Module 13228 (conjureServerAppRemoval)
import ApplicationActionCreators from "ApplicationActionCreators" /* 6875 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6896 */;
import ConjureUtils from "ConjureUtils" /* 7413 */;
import conjureAppInServer from "conjureAppInServer" /* 10866 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;

const require = globalThis.__r;

require = fn;
function conjureApplicationIdForBot(userId) {
  let appIdForBotUserId = ApplicationStore.getAppIdForBotUserId(userId);
  if (appIdForBotUserId == null) {
    appIdForBotUserId = userId;
  }
  return appIdForBotUserId;
}
function readConjureServerApp(arg0, arg1) {
  let guild = null;
  if (null != arg0) {
    guild = GuildStore.getGuild(arg0);
  }
  let application = null;
  if (null != arg1) {
    application = ApplicationStore.getApplication(arg1);
  }
  let conjureProjectId;
  if (application != null) {
    conjureProjectId = application.conjureProjectId;
  }
  if (null != guild) {
    if (null != application) {
      if (null != conjureProjectId) {
        const mapped = appChannelApplicationIds(guild.id).map((item) => application.getApplication(item));
        let id = mapped.find((conjureProjectId) => {
          conjureProjectId = undefined;
          if (conjureProjectId != null) {
            conjureProjectId = conjureProjectId.conjureProjectId;
          }
          return conjureProjectId === conjureProjectId;
        });
        if (null == id) {
          let items = [];
        } else {
          items = guild(10866).findConjureAppChannels(guild.id, id.id);
          let obj = guild(10866);
        }
        let canRemoveConjureBotResult = null != id;
        if (canRemoveConjureBotResult) {
          let bot = application.bot;
          let id1;
          if (bot != null) {
            id1 = bot.id;
          }
          canRemoveConjureBotResult = guild(10866).canRemoveConjureBot(guild, id1);
          const obj2 = guild(10866);
        }
        if (canRemoveConjureBotResult) {
          const bot2 = id.bot;
          let id2;
          if (bot2 != null) {
            id2 = bot2.id;
          }
          canRemoveConjureBotResult = guild(10866).canRemoveConjureBot(guild, id2);
          const obj3 = guild(10866);
        }
        if (canRemoveConjureBotResult) {
          closure_129_0 = conjureProjectId;
          const memberIds = GuildMemberStore.getMemberIds(guild.id);
          const found = memberIds.filter((item) => {
            const user = UserStore.getUser(item);
            let bot;
            if (user != null) {
              bot = user.bot;
            }
            let tmp3 = true === bot;
            if (tmp3) {
              let appIdForBotUserId = ApplicationStore.getAppIdForBotUserId(item);
              if (appIdForBotUserId == null) {
                appIdForBotUserId = item;
              }
              application = ApplicationStore.getApplication(appIdForBotUserId);
              conjureProjectId = undefined;
              if (application != null) {
                conjureProjectId = application.conjureProjectId;
              }
              tmp3 = conjureProjectId === guild;
            }
            return tmp3;
          });
          canRemoveConjureBotResult = found.every((item) => conjureAppInServer.canRemoveConjureBot(guild, item));
        }
        if (canRemoveConjureBotResult) {
          canRemoveConjureBotResult = items.every((item) => PermissionStore.can(constants.MANAGE_CHANNELS, item));
        }
        const obj4 = { projectId: conjureProjectId, guildId: null, guildName: null, targetAppName: null, rest: null };
        ({ id: obj5.guildId, name: obj5.guildName } = guild);
        obj4.targetAppName = application.name;
        let tmp16 = null;
        if (null != id) {
          tmp16 = null;
          if (0 !== items.length) {
            tmp16 = null;
            if (canRemoveConjureBotResult) {
              const obj6 = { appName: id.name, previewAppName: null, channels: null, targetIsPreview: null };
              if (id.id === application.id) {
                const _HermesInternal = HermesInternal;
                let name = "" + id.name + c14;
              } else {
                name = application.name;
              }
              obj6.previewAppName = name;
              obj6.channels = items.map((id) => {
                const obj = { id: id.id, name: guild(dependencyMap[11]).computeChannelName(id, UserStore, RelationshipStore) };
                return obj;
              });
              id = id.id;
              application = application.id;
              obj6.targetIsPreview = id !== application;
            }
          }
        }
        obj4.rest = tmp16;
        return obj4;
      }
    }
  }
  return null;
}
let closure_17 = async function _loadConjureServerApp(arg0) {
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  closure_130_1 = closure_1;
  await loadMissingApplication(closure_1);
  if (1 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      const application = closure_131_5.getApplication(closure_130_1);
      let conjureProjectId;
      if (application != null) {
        conjureProjectId = application.conjureProjectId;
      }
      if (null == conjureProjectId) {
        c5 = 3;
      } else {
        c4 = 2;
        c5 = 1;
        return { value: Promise.all(closure_131_18(closure_130_0).map(closure_131_20)), done: false };
      }
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_131_16(closure_130_0, closure_130_1);
  }
  return value;
};
function appChannelApplicationIds(id) {
  const set = new Set();
  const iter = GuildChannelStore.getChannels(id)[closure_7][Symbol.iterator]();
  while (iter !== undefined) {
    let obj2 = ConjureUtils;
    let conjureChannelAppIdResult = obj2.conjureChannelAppId(iter.next().channel);
    if (null != conjureChannelAppIdResult) {
      let addResult = set.add(tmp4);
    }
    continue;
  }
  const items = [...set];
  return items;
}
function fetchMissingApplication(item10010) {
  if (!tmp) {
    const application = ApplicationActionCreators.fetchApplication(item10010);
    application.catch(() => {

    });
  }
  tmp = null != ApplicationStore.getApplication(item10010) || ApplicationStore.isFetchingApplication(item10010);
}
function loadMissingApplication() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _loadMissingApplication(arg0) {
  if (c1 === 2) {
    c1 = 3;
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (null == application.getApplication(closure_0)) {
          application = require("ApplicationActionCreators").fetchApplication(closure_0);
          c2 = 1;
          c1 = 1;
          const obj5 = {
            value: application.catch(() => {

                    }),
            done: false
          };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp7) {
      c1 = tmp;
      throw tmp7;
    }
  }
};
let closure_7 = fn(4939).GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = fn(1072).Permissions;
let c14 = " (Preview)";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/conjureServerAppRemoval.tsx");

export { conjureApplicationIdForBot };
export { readConjureServerApp };
export function useConjureServerApp(guildId, applicationId) {
  _require = guildId;
  closure_1 = applicationId;
  const items = [ApplicationStore];
  const items1 = [applicationId];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      const application = ApplicationStore.getApplication(tmp);
      let conjureProjectId;
      if (application != null) {
        conjureProjectId = application.conjureProjectId;
      }
      tmp2 = null != conjureProjectId;
    }
    return tmp2;
  }, items1);
  const items2 = [applicationId];
  const effect = noop.useEffect(() => {
    if (null != closure_1) {
      if (!tmp2) {
        const application = ApplicationActionCreators.fetchApplication(closure_1);
        application.catch(() => {

        });
      }
      tmp2 = null != ApplicationStore.getApplication(closure_1) || ApplicationStore.isFetchingApplication(closure_1);
    }
  }, items2);
  const items3 = [guildId, stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (null != closure_0) {
      if (stateFromStores) {
        const tmp4 = appChannelApplicationIds(tmp);
        for (const item10010 of tmp4) {
          let tmp8 = fetchMissingApplication(item10010);
          continue;
        }
      }
    }
  }, items3);
  closure_129_0 = guildId;
  closure_129_1 = applicationId;
  let obj = require("initialize");
  const items4 = [ApplicationStore];
  const items5 = [applicationId];
  const stateFromStores1 = require("initialize").useStateFromStores(items4, () => {
    let application = null;
    if (null != closure_1) {
      application = ApplicationStore.getApplication(tmp);
    }
    let conjureProjectId;
    if (application != null) {
      conjureProjectId = application.conjureProjectId;
    }
    if (null == conjureProjectId) {
      return null;
    } else {
      const bot = application.bot;
      let username;
      if (bot != null) {
        username = bot.username;
      }
      if (username == null) {
        username = application.name;
      }
      let str = username;
      if (username.endsWith(c14)) {
        str = username.slice(0, -10);
      }
      return str.toLowerCase();
    }
  }, items5);
  closure_129_2 = stateFromStores1;
  const items6 = [guildId, stateFromStores1];
  const effect2 = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      const obj = GuildActionCreatorsDefault;
      const members = obj.requestMembers(closure_0, stateFromStores, 10, false);
    }
  }, items6);
  let obj2 = require("initialize");
  const items7 = [GuildMemberStore, UserStore, ApplicationStore];
  const items8 = [guildId, stateFromStores1];
  const stateFromStores2 = require("initialize").useStateFromStores(items7, () => {
    if (null != closure_0) {
      if (null != stateFromStores) {
        const memberIds = GuildMemberStore.getMemberIds(tmp);
        const found = memberIds.filter((item) => {
          user = user.getUser(item);
          let bot;
          if (user != null) {
            bot = user.bot;
          }
          let startsWithResult = true === bot;
          if (startsWithResult) {
            const formatted = user.username.toLowerCase();
            startsWithResult = formatted.startsWith(stateFromStores);
          }
          return startsWithResult;
        });
        const mapped = found.map(conjureApplicationIdForBot);
        const found1 = mapped.filter((item) => null == application.getApplication(item));
      }
      return [];
    }
  }, items8, require("module_12").isEqual);
  closure_129_3 = stateFromStores2;
  const items9 = [stateFromStores2];
  const effect3 = noop.useEffect(() => {
    while (tmp2 !== undefined) {
      let tmp5 = fetchMissingApplication(tmp3);
      continue;
    }
    tmp2 = dependencyMap[Symbol.iterator]();
  }, items9);
  const obj3 = require("initialize");
  const items10 = [ApplicationStore, GuildStore, GuildChannelStore, GuildMemberStore, PermissionStore, UserStore, RelationshipStore];
  const items11 = [guildId, applicationId];
  return require("initialize").useStateFromStores(items10, () => readConjureServerApp(closure_0, closure_1), items11, require("module_12").isEqual);
}
export function loadConjureServerApp() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function conjureKickAppItems(rest) {
  const channels = rest.channels;
  const items = [...channels.map((id) => ({ key: "channel:" + id.id, kind: "channel", label: "#" + id.name }))];
  if (rest.targetIsPreview) {
    const obj2 = { key: "main-app", kind: "app", label: rest.appName };
    let obj = obj2;
  } else {
    obj = { key: "preview-app", kind: "app", label: rest.previewAppName };
  }
  items[tmp] = obj;
  return items;
}
export function conjureDeleteAppChannelItems(rest, channelId) {
  closure_0 = channelId;
  const channels = rest.channels;
  const found = channels.filter((id) => id.id !== closure_0);
  const items = [...found.map((id) => ({ key: "channel:" + id.id, kind: "channel", label: "#" + id.name })), obj, obj2];
  return items;
}