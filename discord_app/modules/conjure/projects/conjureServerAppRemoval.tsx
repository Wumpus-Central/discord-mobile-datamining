// === Module 11408: conjureServerAppRemoval ===

// Module 11408 (conjureServerAppRemoval)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6852 */;
import ConjureUtils from "ConjureUtils" /* 6945 */;
import conjureAppInServer from "conjureAppInServer" /* 11409 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

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
  guild = null;
  if (null != arg0) {
    guild = GuildStore.getGuild(arg0);
  }
  let application = null;
  if (null != arg1) {
    application = ApplicationStore.getApplication(arg1);
  }
  let prop;
  if (application != null) {
    prop = application.vibegrationsProjectId;
  }
  if (null != guild) {
    if (null != application) {
      if (null != prop) {
        const mapped = appChannelApplicationIds(guild.id).map((item) => application.getApplication(item));
        let id = mapped.find((vibegrationsProjectId) => {
          prop = undefined;
          if (vibegrationsProjectId != null) {
            prop = vibegrationsProjectId.vibegrationsProjectId;
          }
          return prop === prop;
        });
        if (null == id) {
          let items = [];
        } else {
          items = guild(11409).findConjureAppChannels(guild.id, id.id);
          let obj = guild(11409);
        }
        let canRemoveConjureBotResult = null != id;
        if (canRemoveConjureBotResult) {
          let bot = application.bot;
          let id1;
          if (bot != null) {
            id1 = bot.id;
          }
          canRemoveConjureBotResult = guild(11409).canRemoveConjureBot(guild, id1);
          const obj2 = guild(11409);
        }
        if (canRemoveConjureBotResult) {
          const bot2 = id.bot;
          let id2;
          if (bot2 != null) {
            id2 = bot2.id;
          }
          canRemoveConjureBotResult = guild(11409).canRemoveConjureBot(guild, id2);
          const obj3 = guild(11409);
        }
        if (canRemoveConjureBotResult) {
          closure_129_0 = prop;
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
              prop = undefined;
              if (application != null) {
                prop = application.vibegrationsProjectId;
              }
              tmp3 = prop === guild;
            }
            return tmp3;
          });
          canRemoveConjureBotResult = found.every((item) => conjureAppInServer.canRemoveConjureBot(guild, item));
        }
        if (canRemoveConjureBotResult) {
          canRemoveConjureBotResult = items.every((item) => PermissionStore.can(constants.MANAGE_CHANNELS, item));
        }
        const obj4 = { projectId: prop, guildId: null, guildName: null, targetAppName: null, rest: null };
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
      let prop;
      if (application != null) {
        prop = application.vibegrationsProjectId;
      }
      if (null == prop) {
        c5 = 3;
      } else {
        c4 = 2;
        c5 = 1;
        return { value: Promise.all(closure_131_19(closure_130_0).map(closure_131_21)), done: false };
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
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _loadMissingApplication(arg0) {
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
      return { value: "IconComponent", done: "+51" };
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
      return { value: "IconComponent", done: "+51" };
    } catch (tmp7) {
      c1 = tmp;
      throw tmp7;
    }
  }
};
let closure_7 = fn(4748).GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = fn(1085).Permissions;
let c14 = " (Preview)";
fn(558);
const ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureBotMembers(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function c() {
      let application = null;
      if (null != closure_1) {
        application = ApplicationStore.getApplication(tmp);
      }
      let prop;
      if (application != null) {
        prop = application.vibegrationsProjectId;
      }
      if (null == prop) {
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
    };
    const items1 = [arg1];
    cResult[1] = arg1;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === arg0) {
    if (cResult[5] === stateFromStores) {
      let tmp9 = cResult[6];
      let tmp10 = cResult[7];
    }
    const effect = noop.useEffect(tmp9, tmp10);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [GuildMemberStore, UserStore, ApplicationStore];
      class I {
        constructor() {
          if (null != closure_0) {
            tmp2 = closure_2;
            if (null != closure_2) {
              tmp3 = closure_8;
              memberIds = closure_8.getMemberIds(tmp);
              found = memberIds.filter((item) => {
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
              tmp4 = conjureApplicationIdForBot;
              mapped = found.map(conjureApplicationIdForBot);
              found1 = mapped.filter((item) => null == application.getApplication(item));
            }
            return [];
          }
          return;
        }
      }
      cResult[8] = items2;
    }
    if (cResult[9] === arg0) {
      const tmpResult2 = tmp(tmp2[14]);
      const useStateFromStores = tmpResult2.useStateFromStores;
      class I {
        constructor() {
          if (null != closure_0) {
            tmp2 = closure_2;
            if (null != closure_2) {
              tmp3 = closure_8;
              memberIds = closure_8.getMemberIds(tmp);
              found = memberIds.filter((item) => {
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
              tmp4 = conjureApplicationIdForBot;
              mapped = found.map(conjureApplicationIdForBot);
              found1 = mapped.filter((item) => null == application.getApplication(item));
            }
            return [];
          }
          return;
        }
      }
      asyncGeneratorStep = tmp23;
      if (cResult[13] !== tmp23) {
        class M {
          constructor() {
            tmp = closure_3;
            tmp2 = closure_3[Symbol.iterator]();
            while (tmp2 !== undefined) {
              tmp4 = fetchMissingApplication;
              tmp5 = fetchMissingApplication(tmp3);
              continue;
            }
            return;
          }
        }
        const items3 = [tmp23];
        cResult[13] = tmp23;
        cResult[14] = M;
        class I {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_2;
              if (null != closure_2) {
                tmp3 = closure_8;
                memberIds = closure_8.getMemberIds(tmp);
                found = memberIds.filter((item) => {
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
                tmp4 = conjureApplicationIdForBot;
                mapped = found.map(conjureApplicationIdForBot);
                found1 = mapped.filter((item) => null == application.getApplication(item));
              }
              return [];
            }
            return;
          }
        }
        cResult[15] = items3;
        let tmp25 = items3;
      } else {
        class M {
          constructor() {
            tmp = closure_3;
            tmp2 = closure_3[Symbol.iterator]();
            while (tmp2 !== undefined) {
              tmp4 = fetchMissingApplication;
              tmp5 = fetchMissingApplication(tmp3);
              continue;
            }
            return;
          }
        }
        tmp25 = cResult[15];
      }
      const effect1 = noop.useEffect(M, tmp25);
    }
    class I {
      constructor() {
        if (null != closure_0) {
          tmp2 = closure_2;
          if (null != closure_2) {
            tmp3 = closure_8;
            memberIds = closure_8.getMemberIds(tmp);
            found = memberIds.filter((item) => {
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
            tmp4 = conjureApplicationIdForBot;
            mapped = found.map(conjureApplicationIdForBot);
            found1 = mapped.filter((item) => null == application.getApplication(item));
          }
          return [];
        }
        return;
      }
    }
    const items4 = [arg0, stateFromStores];
    cResult[9] = arg0;
    cResult[10] = stateFromStores;
    cResult[11] = I;
    cResult[12] = items4;
  }
  const fn2 = function v() {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      const obj = GuildActionCreatorsDefault;
      const members = obj.requestMembers(closure_0, stateFromStores, 10, false);
    }
  };
  const items5 = [arg0, stateFromStores];
  cResult[4] = arg0;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  cResult[7] = items5;
  tmp10 = items5;
  tmp9 = fn2;
  const tmpResult = require("initialize");
}) : (function useConjureBotMembers(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [ApplicationStore];
  const items1 = [arg1];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let application = null;
    if (null != closure_1) {
      application = ApplicationStore.getApplication(tmp);
    }
    let prop;
    if (application != null) {
      prop = application.vibegrationsProjectId;
    }
    if (null == prop) {
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
  }, items1);
  const items2 = [arg0, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != stateFromStores;
    }
    if (tmp2) {
      const obj = GuildActionCreatorsDefault;
      const members = obj.requestMembers(closure_0, stateFromStores, 10, false);
    }
  }, items2);
  let obj = require("initialize");
  const items3 = [GuildMemberStore, UserStore, ApplicationStore];
  const items4 = [arg0, stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
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
  }, items4, require("module_12").isEqual);
  const items5 = [stateFromStores1];
  const effect1 = noop.useEffect(() => {
    while (tmp2 !== undefined) {
      let tmp5 = fetchMissingApplication(tmp3);
      continue;
    }
    tmp2 = stateFromStores1[Symbol.iterator]();
  }, items5);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/conjureServerAppRemoval.tsx");

export { conjureApplicationIdForBot };
export { readConjureServerApp };
export const useConjureServerApp = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureServerApp(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function h() {
      let tmp2 = null != closure_1;
      if (tmp2) {
        const application = ApplicationStore.getApplication(tmp);
        let prop;
        if (application != null) {
          prop = application.vibegrationsProjectId;
        }
        tmp2 = null != prop;
      }
      return tmp2;
    };
    const items1 = [arg1];
    cResult[1] = arg1;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== arg1) {
    class S {
      constructor() {
        tmp = closure_1;
        if (null != closure_1) {
          obj = closure_5;
          tmp2 = null != closure_5.getApplication(tmp) || obj.isFetchingApplication(tmp);
          if (!tmp2) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj2 = closure_0(closure_2[18]);
            application = obj2.fetchApplication(tmp);
            catchPromise = application.catch(() => {

            });
          }
        }
        return;
      }
    }
    const items2 = [arg1];
    cResult[4] = arg1;
    cResult[5] = S;
    cResult[6] = items2;
    let tmp10 = items2;
  } else {
    class S {
      constructor() {
        tmp = closure_1;
        if (null != closure_1) {
          obj = closure_5;
          tmp2 = null != closure_5.getApplication(tmp) || obj.isFetchingApplication(tmp);
          if (!tmp2) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj2 = closure_0(closure_2[18]);
            application = obj2.fetchApplication(tmp);
            catchPromise = application.catch(() => {

            });
          }
        }
        return;
      }
    }
    tmp10 = cResult[6];
  }
  const effect = noop.useEffect(S, tmp10);
  if (cResult[7] === arg0) {
    class S {
      constructor() {
        tmp = closure_1;
        if (null != closure_1) {
          obj = closure_5;
          tmp2 = null != closure_5.getApplication(tmp) || obj.isFetchingApplication(tmp);
          if (!tmp2) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj2 = closure_0(closure_2[18]);
            application = obj2.fetchApplication(tmp);
            catchPromise = application.catch(() => {

            });
          }
        }
        return;
      }
    }
    const effect1 = noop.useEffect(M, items5);
    closure_18(arg0, arg1);
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          tmp = closure_1;
          if (null != closure_1) {
            obj = closure_5;
            tmp2 = null != closure_5.getApplication(tmp) || obj.isFetchingApplication(tmp);
            if (!tmp2) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj2 = closure_0(closure_2[18]);
              application = obj2.fetchApplication(tmp);
              catchPromise = application.catch(() => {

              });
            }
          }
          return;
        }
      }
      const items3 = [ApplicationStore, GuildStore, GuildChannelStore, GuildMemberStore, PermissionStore, UserStore, RelationshipStore];
      cResult[11] = items3;
    } else {
      class S {
        constructor() {
          tmp = closure_1;
          if (null != closure_1) {
            obj = closure_5;
            tmp2 = null != closure_5.getApplication(tmp) || obj.isFetchingApplication(tmp);
            if (!tmp2) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj2 = closure_0(closure_2[18]);
              application = obj2.fetchApplication(tmp);
              catchPromise = application.catch(() => {

              });
            }
          }
          return;
        }
      }
    }
    if (cResult[12] === arg1) {
      class S {
        constructor() {
          tmp = closure_1;
          if (null != closure_1) {
            obj = closure_5;
            tmp2 = null != closure_5.getApplication(tmp) || obj.isFetchingApplication(tmp);
            if (!tmp2) {
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj2 = closure_0(closure_2[18]);
              application = obj2.fetchApplication(tmp);
              catchPromise = application.catch(() => {

              });
            }
          }
          return;
        }
      }
      const tmpResult2 = tmp(tmp2[14]);
      return tmpResult2.useStateFromStores(tmp15, tmp22, tmp23, tmp(tmp2[15]).isEqual);
    }
    const fn2 = function y() {
      return readConjureServerApp(closure_0, closure_1);
    };
    const items4 = [arg0, arg1];
    cResult[12] = arg1;
    cResult[13] = arg0;
    cResult[14] = fn2;
    cResult[15] = items4;
  }
  class M {
    constructor() {
      if (null != closure_0) {
        tmp2 = closure_2;
        if (closure_2) {
          tmp3 = appChannelApplicationIds;
          num = 0;
          tmp4 = appChannelApplicationIds(tmp);
          tmp5 = tmp4;
          tmp6 = tmp4;
          for (const item10010 of tmp4) {
            tmp7 = fetchMissingApplication;
            tmp8 = fetchMissingApplication(item10010);
            continue;
          }
        }
      }
      return;
    }
  }
  items5 = [arg0, stateFromStores];
  cResult[7] = arg0;
  cResult[8] = stateFromStores;
  cResult[9] = M;
  cResult[10] = items5;
  const tmpResult = require("initialize");
}) : (function useConjureServerApp(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [ApplicationStore];
  const items1 = [arg1];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      const application = ApplicationStore.getApplication(tmp);
      let prop;
      if (application != null) {
        prop = application.vibegrationsProjectId;
      }
      tmp2 = null != prop;
    }
    return tmp2;
  }, items1);
  const items2 = [arg1];
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
  const items3 = [arg0, stateFromStores];
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
  closure_18(arg0, arg1);
  const obj = require("initialize");
  const items4 = [ApplicationStore, GuildStore, GuildChannelStore, GuildMemberStore, PermissionStore, UserStore, RelationshipStore];
  const items5 = [arg0, arg1];
  return require("initialize").useStateFromStores(items4, () => readConjureServerApp(closure_0, closure_1), items5, require("module_12").isEqual);
});
export const loadConjureServerApp = function loadConjureServerApp() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const conjureKickAppItems = function conjureKickAppItems(rest) {
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
};
export const conjureDeleteAppChannelItems = function conjureDeleteAppChannelItems(rest, channelId) {
  closure_0 = channelId;
  const channels = rest.channels;
  const found = channels.filter((id) => id.id !== closure_0);
  const items = [...found.map((id) => ({ key: "channel:" + id.id, kind: "channel", label: "#" + id.name })), obj, obj2];
  return items;
};