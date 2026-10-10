// === Module 17060: conjureRemoveApp ===

// Module 17060 (conjureRemoveApp)
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import useChannelName from "useChannelName" /* 5421 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import conjureAppInServer from "conjureAppInServer" /* 11409 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10651 */;

const require = globalThis.__r;

require = fn;
function readConjureRemoveTarget(project) {
  guild = null;
  if (null != project.guild_id) {
    guild = GuildStore.getGuild(project.guild_id);
  }
  if (null != guild) {
    if ("in_server" === obj5.readConjureAppServerPresence(project)) {
      const result = tmp10(11409).findConjureAppChannels(guild.id, project.application_id);
      const found = result.filter((item) => PermissionStore.can(constants.MANAGE_CHANNELS, item));
      const obj = { projectName: project.name, appName: null, previewAppName: null, guildName: null, channelNames: null, keptChannelNames: null, canRemoveBot: null, canRemovePreviewBot: null };
      const application = ApplicationStore.getApplication(project.application_id);
      let name;
      if (application != null) {
        name = application.name;
      }
      if (name == null) {
        name = project.name;
      }
      obj.appName = name;
      let tmp4 = null;
      if (null != project.preview_application_id) {
        const application1 = ApplicationStore.getApplication(project.preview_application_id);
        let name1;
        if (application1 != null) {
          name1 = application1.name;
        }
        if (name1 == null) {
          const _HermesInternal = HermesInternal;
          name1 = "" + project.name + " (Preview)";
        }
        tmp4 = name1;
      }
      obj.previewAppName = tmp4;
      obj.guildName = guild.name;
      obj.channelNames = found.map(channelName);
      const found1 = result.filter((item) => !found.includes(item));
      obj.keptChannelNames = found1.map(channelName);
      const tmp10Result = tmp10(11409);
      const tmp10Result5 = tmp10(11409);
      obj.canRemoveBot = tmp10Result5.canRemoveConjureBot(guild, tmp10(11409).conjureProductionBotUserId(project));
      let canRemoveConjureBotResult = null == project.preview_application_id;
      if (!canRemoveConjureBotResult) {
        const tmp10Result7 = tmp10(11409);
        canRemoveConjureBotResult = tmp10Result7.canRemoveConjureBot(guild, tmp10(11409).conjurePreviewBotUserId(project));
        const tmp10Result8 = tmp10(11409);
      }
      obj.canRemovePreviewBot = canRemoveConjureBotResult;
      return obj;
    }
    obj5 = found(11409);
  }
  return null;
}
function channelName(channel) {
  return useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
}
const Permissions = fn(1085).Permissions;
fn(558);
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureBotMembers(arg0) {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore, ApplicationStore, GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let project = null;
      if (null != closure_0) {
        project = ConjureProjectStore.getProject(tmp);
      }
      let guild_id;
      if (project != null) {
        guild_id = project.guild_id;
      }
      if (null != project) {
        if (null != guild_id) {
          let obj = { guildId: guild_id, botUserIds: null };
          const items = [conjureAppInServer.conjureProductionBotUserId(project), ];
          items[1] = conjureAppInServer.conjurePreviewBotUserId(project);
          obj.botUserIds = items.filter((item) => {
            let tmp = null != item;
            if (tmp) {
              tmp = null == member.getMember(guild_id, item);
            }
            return tmp;
          });
        }
        return obj;
      }
      obj = { guildId: null, botUserIds: [] };
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp8, tmp9, tmp(tmp2[16]).isEqual);
  const guildId = stateFromStores.guildId;
  botUserIds = stateFromStores.botUserIds;
  if (cResult[4] === botUserIds) {
    if (cResult[5] === guildId) {
      let tmp11 = cResult[6];
      let tmp12 = cResult[7];
    }
    const effect = noop.useEffect(tmp11, tmp12);
  }
  const fn2 = function v() {
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = botUserIds.length > 0;
    }
    if (tmp2) {
      const membersById = GuildActionCreatorsDefault.requestMembersById(guildId, botUserIds, false);
    }
  };
  const items2 = [guildId, botUserIds];
  cResult[4] = botUserIds;
  cResult[5] = guildId;
  cResult[6] = fn2;
  cResult[7] = items2;
  tmp12 = items2;
  tmp11 = fn2;
  const tmpResult = require("initialize");
}) : (function useConjureBotMembers(arg0) {
  _require = arg0;
  let items = [ConjureProjectStore, ApplicationStore, GuildMemberStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let guild_id;
    if (project != null) {
      guild_id = project.guild_id;
    }
    if (null != project) {
      if (null != guild_id) {
        let obj = { guildId: guild_id, botUserIds: null };
        const items = [conjureAppInServer.conjureProductionBotUserId(project), ];
        items[1] = conjureAppInServer.conjurePreviewBotUserId(project);
        obj.botUserIds = items.filter((item) => {
          let tmp = null != item;
          if (tmp) {
            tmp = null == member.getMember(guild_id, item);
          }
          return tmp;
        });
      }
      return obj;
    }
    obj = { guildId: null, botUserIds: [] };
  }, items1, require("module_12").isEqual);
  const guildId = stateFromStores.guildId;
  botUserIds = stateFromStores.botUserIds;
  const items2 = [guildId, botUserIds];
  const effect = noop.useEffect(() => {
    let tmp2 = null != guildId;
    if (tmp2) {
      tmp2 = botUserIds.length > 0;
    }
    if (tmp2) {
      const membersById = GuildActionCreatorsDefault.requestMembersById(guildId, botUserIds, false);
    }
  }, items2);
});
function conjurePreviewAppItem(target) {
  const previewAppName = target.previewAppName;
  let tmp = null;
  if (null != previewAppName) {
    const obj = { key: "preview-app", kind: "app", label: previewAppName };
    tmp = obj;
  }
  return tmp;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/conjureRemoveApp.tsx");

export { readConjureRemoveTarget };
export const useConjureRemoveTarget = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemoveTarget(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  closure_16(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class I {
      constructor() {
        project = null;
        if (null != closure_0) {
          tmp3 = closure_12;
          project = closure_12.getProject(tmp);
        }
        tmp4 = null;
        if (null != project) {
          tmp5 = readConjureRemoveTarget;
          tmp4 = readConjureRemoveTarget(project);
        }
        return tmp4;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = I;
    cResult[3] = items1;
    let tmp16 = items1;
  } else {
    class I {
      constructor() {
        project = null;
        if (null != closure_0) {
          tmp3 = closure_12;
          project = closure_12.getProject(tmp);
        }
        tmp4 = null;
        if (null != project) {
          tmp5 = readConjureRemoveTarget;
          tmp4 = readConjureRemoveTarget(project);
        }
        return tmp4;
      }
    }
    tmp16 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, I, tmp16, require("module_12").isEqual);
}) : (function useConjureRemoveTarget(arg0) {
  _require = arg0;
  closure_16(arg0);
  const items = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null;
    if (null != project) {
      tmp4 = readConjureRemoveTarget(project);
    }
    return tmp4;
  }, items1, require("module_12").isEqual);
});
export const conjureRemoveAppItems = function conjureRemoveAppItems(target) {
  const channelNames = target.channelNames;
  return channelNames.map((item) => ({ key: "channel:" + item, kind: "channel", label: "#" + item }));
};
export const conjureDeleteProjectItems = function conjureDeleteProjectItems(target) {
  const items = [{ key: "project", kind: "project", label: target.projectName }];
  const channelNames = target.channelNames;
  const items1 = [...channelNames.map((item) => ({ key: "channel:" + item, kind: "channel", label: "#" + item }))];
  items.push.apply(items1);
  const previewAppName = target.previewAppName;
  let tmp2 = null;
  if (null != previewAppName) {
    const obj2 = { key: "preview-app", kind: "app", label: previewAppName };
    tmp2 = obj2;
  }
  if (null != tmp2) {
    items.push(tmp2);
  }
  return items;
};
export { conjurePreviewAppItem };
export const conjureRemoveAppKeptChannels = function conjureRemoveAppKeptChannels(target) {
  const keptChannelNames = target.keptChannelNames;
  if (0 === keptChannelNames.length) {
    return null;
  } else {
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(util.intl.currentLocale, { type: "conjunction" });
    const intl = util.intl;
    const obj = { channels: listFormat.format(keptChannelNames.map((item) => "#" + item)) };
    return intl.formatToPlainString(_modDef3849.pE4Cec, obj);
  }
};
export function conjureTitleWithAppTag(arg0) {
  return arg0;
}
export const conjureRemoveAppSuccess = function conjureRemoveAppSuccess(arg0) {
  ({ appName, guildName } = arg0);
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3849.SNFGxP, { app, server });
};
export const conjureDeleteProjectBody = function conjureDeleteProjectBody(target) {
  ({ appName, guildName } = target);
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3849["9CvVB9"], { app, server });
};