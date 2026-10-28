// === Module 12297: conjureRemoveApp ===

// Module 12297 (conjureRemoveApp)
import util from "util" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import useChannelName from "useChannelName" /* 5640 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6866 */;
import conjureAppInServer from "conjureAppInServer" /* 10768 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 10842 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import UserProfileStore from "UserProfileStore" /* 7738 */;
import GuildChannelStore from "GuildChannelStore" /* 4934 */;
import GuildMemberStore from "GuildMemberStore" /* 4916 */;
import GuildStore from "GuildStore" /* 4878 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import RelationshipStore from "RelationshipStore" /* 4946 */;
import UserStore from "UserStore" /* 1389 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10749 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

const require = globalThis.__r;

require = fn;
function readConjureRemoveTarget(project) {
  guild = null;
  if (null != project.guild_id) {
    guild = GuildStore.getGuild(project.guild_id);
  }
  if (null != guild) {
    if ("in_server" === obj5.readConjureAppServerPresence(project)) {
      const result = tmp10(10768).findConjureAppChannels(guild.id, project.application_id);
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
      const tmp10Result = tmp10(10768);
      const tmp10Result5 = tmp10(10768);
      obj.canRemoveBot = tmp10Result5.canRemoveConjureBot(guild, tmp10(10768).conjureProductionBotUserId(project));
      let canRemoveConjureBotResult = null == project.preview_application_id;
      if (!canRemoveConjureBotResult) {
        const tmp10Result7 = tmp10(10768);
        canRemoveConjureBotResult = tmp10Result7.canRemoveConjureBot(guild, tmp10(10768).conjurePreviewBotUserId(project));
        const tmp10Result8 = tmp10(10768);
      }
      obj.canRemovePreviewBot = canRemoveConjureBotResult;
      return obj;
    }
    obj5 = found(10768);
  }
  return null;
}
function channelName(channel) {
  return useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
}
const Permissions = fn(1084).Permissions;
fn(558);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureBotMembers(arg0) {
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
    const fn = function s() {
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
  const stateFromStores = require("initialize").useStateFromStores(first, tmp8, tmp9, tmp(tmp2[17]).isEqual);
  const guildId = stateFromStores.guildId;
  botUserIds = stateFromStores.botUserIds;
  if (cResult[4] === botUserIds) {
    if (cResult[5] === guildId) {
      let tmp11 = cResult[6];
      let tmp12 = cResult[7];
    }
    const effect = noop.useEffect(tmp11, tmp12);
  }
  const fn2 = function j() {
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
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemoveTarget(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  closure_17(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class P {
      constructor() {
        project = null;
        if (null != closure_0) {
          tmp3 = closure_13;
          project = closure_13.getProject(tmp);
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
    cResult[2] = P;
    cResult[3] = items1;
    let tmp16 = items1;
  } else {
    class P {
      constructor() {
        project = null;
        if (null != closure_0) {
          tmp3 = closure_13;
          project = closure_13.getProject(tmp);
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
  return require("initialize").useStateFromStores(first, P, tmp16, require("module_12").isEqual);
}) : (function useConjureRemoveTarget(arg0) {
  _require = arg0;
  closure_17(arg0);
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
function conjurePreviewAppItem(target) {
  const previewAppName = target.previewAppName;
  let tmp = null;
  if (null != previewAppName) {
    const obj = { key: "preview-app", kind: "app", label: previewAppName };
    tmp = obj;
  }
  return tmp;
}
function isPublishedConjureUserApp(project, publishStatus) {
  let isConjureLiveResult = "user" === project.install_scope;
  if (isConjureLiveResult) {
    isConjureLiveResult = null != publishStatus;
  }
  if (isConjureLiveResult) {
    isConjureLiveResult = ConjurePublishTypes.isConjureLive(publishStatus.publishState);
  }
  return isConjureLiveResult;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/conjureRemoveApp.tsx");

export { readConjureRemoveTarget };
export const useConjureRemoveTarget = tmp2;
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
    return intl.formatToPlainString(_modDef3863.pE4Cec, obj);
  }
};
export function conjureTitleWithAppTag(arg0) {
  return arg0;
}
export const conjureRemoveAppSuccess = function conjureRemoveAppSuccess(arg0) {
  ({ appName, guildName } = arg0);
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3863.SNFGxP, { app, server });
};
export const conjureDeleteProjectBody = function conjureDeleteProjectBody(target) {
  ({ appName, guildName } = target);
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3863["9CvVB9"], { app, server });
};
export { isPublishedConjureUserApp };
export const useIsPublishedConjureUserApp = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPublishedConjureUserApp(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, ConjurePublishStatusStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let project = null;
      if (null != closure_0) {
        project = ConjureProjectStore.getProject(tmp);
      }
      let tmp4 = null != project;
      if (tmp4) {
        const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
        let isConjureLiveResult = "user" === project.install_scope && null != publishStatus;
        if (isConjureLiveResult) {
          isConjureLiveResult = ConjurePublishTypes.isConjureLive(publishStatus.publishState);
        }
        tmp4 = isConjureLiveResult;
      }
      return tmp4;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useIsPublishedConjureUserApp(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore, ConjurePublishStatusStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null != project;
    if (tmp4) {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
      let isConjureLiveResult = "user" === project.install_scope && null != publishStatus;
      if (isConjureLiveResult) {
        isConjureLiveResult = ConjurePublishTypes.isConjureLive(publishStatus.publishState);
      }
      tmp4 = isConjureLiveResult;
    }
    return tmp4;
  }, items1);
});