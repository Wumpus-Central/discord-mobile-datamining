// === Module 13206: conjureRemoveApp ===

// Module 13206 (conjureRemoveApp)
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import useChannelName from "useChannelName" /* 5954 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6917 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7018 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 7384 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;
import GuildChannelStore from "GuildChannelStore" /* 5236 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;

const require = globalThis.__r;

require = fn;
function readConjureRemoveTarget(project) {
  let guild_id = item;
  if (item === undefined) {
    guild_id = project.guild_id;
  }
  let found;
  guild = null;
  if (null != guild_id) {
    guild = GuildStore.getGuild(guild_id);
  }
  if (null != guild) {
    const id = guild.id;
    if (id === project.guild_id) {
      let tmp3 = "in_server" === found(7351).readConjureAppServerPresence(project);
      const obj = found(7351);
    } else {
      tmp3 = "guild" === project.install_scope;
      if (tmp3) {
        const guild_ids = project.guild_ids;
        let hasItem;
        if (guild_ids != null) {
          hasItem = guild_ids.includes(id);
        }
        tmp3 = true === hasItem;
      }
    }
    if (tmp3) {
      const result = found(7351).findConjureAppChannels(guild.id, project.application_id);
      found = result.filter((item) => PermissionStore.can(constants.MANAGE_CHANNELS, item));
      const obj5 = { projectName: project.name, appName: null, previewAppName: null, guildId: null, guildName: null, channelNames: null, keptChannelNames: null, canRemoveBot: null, canRemovePreviewBot: null };
      const application = ApplicationStore.getApplication(project.application_id);
      let name;
      if (application != null) {
        name = application.name;
      }
      if (name == null) {
        name = project.name;
      }
      obj5.appName = name;
      let tmp11 = null;
      if (null != project.preview_application_id) {
        tmp11 = null;
        if (guild.id === project.guild_id) {
          const application1 = ApplicationStore.getApplication(project.preview_application_id);
          let name1;
          if (application1 != null) {
            name1 = application1.name;
          }
          if (name1 == null) {
            const _HermesInternal = HermesInternal;
            name1 = "" + project.name + " (Preview)";
          }
          tmp11 = name1;
        }
      }
      obj5.previewAppName = tmp11;
      ({ id: obj3.guildId, name: obj3.guildName } = guild);
      obj5.channelNames = found.map(channelName);
      const found1 = result.filter((item) => !found.includes(item));
      obj5.keptChannelNames = found1.map(channelName);
      const obj2 = found(7351);
      const tmp7Result = found(7351);
      obj5.canRemoveBot = tmp7Result.canRemoveConjureBot(guild, found(7351).conjureProductionBotUserId(project));
      let canRemoveConjureBotResult = null == project.preview_application_id;
      if (!canRemoveConjureBotResult) {
        const tmp7Result5 = tmp7(7351);
        canRemoveConjureBotResult = tmp7Result5.canRemoveConjureBot(guild, tmp7(7351).conjurePreviewBotUserId(project));
        const tmp7Result6 = tmp7(7351);
      }
      obj5.canRemovePreviewBot = canRemoveConjureBotResult;
      return obj5;
    }
  }
  return null;
}
function channelName(channel) {
  return useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
}
const Permissions = fn(1072).Permissions;
let closure_13 = [];
let items = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
let closure_17 = [];
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/conjureRemoveApp.tsx");

export { readConjureRemoveTarget };
export function useConjureRemoveTarget(id) {
  _require = id;
  closure_129_0 = id;
  items = [ConjureProjectStore, ApplicationStore, GuildMemberStore, GuildStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let project = null;
    if (null != project) {
      project = ConjureProjectStore.getProject(tmp);
    }
    if (null != project) {
      if (null != project.guild_id) {
        items = [project.guild_id];
        let result = ConjureProjectTypes.conjureProjectServerIds(project);
        HermesBuiltin.arraySpread(result.filter((item) => item !== project.guild_id), 1);
        const found = items.filter((item) => null != guild.getGuild(item));
        const mapped = found.map((guildId) => {
          project = guildId;
          const obj = { guildId, botUserIds: null };
          items = [project(7351).conjureProductionBotUserId(project), ];
          let result = null;
          if (guildId === project.guild_id) {
            result = project(7351).conjurePreviewBotUserId(project);
            const tmpResult = project(7351);
          }
          items[1] = result;
          obj.botUserIds = items.filter((item) => {
            let tmp = null != item;
            if (tmp) {
              tmp = null == member.getMember(closure_0, item);
            }
            return tmp;
          });
          return obj;
        });
        let found1 = mapped.filter((botUserIds) => botUserIds.botUserIds.length > 0);
      }
      return found1;
    }
    found1 = closure_17;
  }, items1, require("apply").isEqual);
  closure_129_1 = stateFromStores;
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    const iter = dependencyMap[Symbol.iterator]();
    while (iter !== undefined) {
      ({ guildId, botUserIds } = nextResult);
      let obj = GuildActionCreatorsDefault;
      let membersById = obj.requestMembersById(guildId, botUserIds, false);
      continue;
    }
    nextResult = iter.next();
  }, items2);
  const obj = require("initialize");
  const items3 = [id];
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
  }, items3, require("apply").isEqual);
}
export function readConjureViewedRemoveTarget(project, guildId) {
  let tmp = null;
  if (null != guildId) {
    tmp = null;
    if (guildId !== project.guild_id) {
      tmp = readConjureRemoveTarget(project, guildId);
    }
  }
  if (tmp == null) {
    tmp = readConjureRemoveTarget(project);
  }
  return tmp;
}
export function useConjureViewedRemoveTarget(id, guildId) {
  _require = id;
  closure_1 = guildId;
  items = [id, guildId];
  return require("initialize").useStateFromStores(items, () => {
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null;
    if (null != project) {
      let tmp6 = null;
      if (null != closure_1) {
        tmp6 = null;
        if (closure_1 !== project.guild_id) {
          tmp6 = readConjureRemoveTarget(project, closure_1);
        }
      }
      if (tmp6 == null) {
        tmp6 = readConjureRemoveTarget(project);
      }
      tmp4 = tmp6;
    }
    return tmp4;
  }, items, require("apply").isEqual);
}
export function canRemoveConjureAppFromServer(conjureViewedRemoveTarget, arg1) {
  return conjureViewedRemoveTarget.canRemoveBot || arg1;
}
export function useConjureProjectServers(projectId) {
  _require = projectId;
  closure_129_0 = projectId;
  items = [ConjureProjectStore, ApplicationStore, GuildMemberStore, GuildStore];
  const items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let project = null;
    if (null != project) {
      project = ConjureProjectStore.getProject(tmp);
    }
    if (null != project) {
      if (null != project.guild_id) {
        items = [project.guild_id];
        let result = ConjureProjectTypes.conjureProjectServerIds(project);
        HermesBuiltin.arraySpread(result.filter((item) => item !== project.guild_id), 1);
        const found = items.filter((item) => null != guild.getGuild(item));
        const mapped = found.map((guildId) => {
          project = guildId;
          const obj = { guildId, botUserIds: null };
          items = [project(7351).conjureProductionBotUserId(project), ];
          let result = null;
          if (guildId === project.guild_id) {
            result = project(7351).conjurePreviewBotUserId(project);
            const tmpResult = project(7351);
          }
          items[1] = result;
          obj.botUserIds = items.filter((item) => {
            let tmp = null != item;
            if (tmp) {
              tmp = null == member.getMember(closure_0, item);
            }
            return tmp;
          });
          return obj;
        });
        let found1 = mapped.filter((botUserIds) => botUserIds.botUserIds.length > 0);
      }
      return found1;
    }
    found1 = closure_17;
  }, items1, require("apply").isEqual);
  closure_129_1 = stateFromStores;
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    const iter = dependencyMap[Symbol.iterator]();
    while (iter !== undefined) {
      ({ guildId, botUserIds } = nextResult);
      let obj = GuildActionCreatorsDefault;
      let membersById = obj.requestMembersById(guildId, botUserIds, false);
      continue;
    }
    nextResult = iter.next();
  }, items2);
  let obj = require("initialize");
  const items3 = [projectId];
  return require("initialize").useStateFromStores(items, () => {
    project = ConjureProjectStore.getProject(project);
    if (null == project) {
      let mapped = closure_13;
    } else {
      const result = ConjureProjectTypes.conjureProjectServerIds(project);
      mapped = result.map((guildId) => {
        guild = guild.getGuild(guildId);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        const obj = { guildId, guildName: null, isTestServer: null, removeTarget: null };
        let stringResult = name;
        if (name == null) {
          const intl = project(1113).intl;
          stringResult = intl.string(dependencyMap(4131)["6bhivN"]);
        }
        obj.guildName = stringResult;
        let usesPreviewAppResult = guildId === project.guild_id;
        if (usesPreviewAppResult) {
          usesPreviewAppResult = project(7018).usesPreviewApp(project);
          const obj2 = project(7018);
        }
        if (usesPreviewAppResult) {
          usesPreviewAppResult = project(7018).conjureProjectServerIds(project).length > 1;
          const obj3 = project(7018);
        }
        obj.isTestServer = usesPreviewAppResult;
        let tmp13 = readConjureRemoveTarget(project, guildId);
        if (tmp13 == null) {
          let tmp20 = null;
          if (null == name) {
            const obj4 = { projectName: project.name, appName: null, previewAppName: null, guildId: null, guildName: null, channelNames: null, keptChannelNames: null, canRemoveBot: false, canRemovePreviewBot: false };
            application = application.getApplication(project.application_id);
            let name1;
            if (application != null) {
              name1 = application.name;
            }
            if (name1 == null) {
              name1 = project.name;
            }
            obj4.appName = name1;
            obj4.guildId = guildId;
            const intl2 = project(1113).intl;
            obj4.guildName = intl2.string(dependencyMap(4131)["6bhivN"]);
            obj4.channelNames = [];
            obj4.keptChannelNames = [];
            tmp20 = obj4;
          }
          tmp13 = tmp20;
        }
        obj.removeTarget = tmp13;
        return obj;
      });
    }
    return mapped;
  }, items3, require("apply").isEqual);
}
export function readConjureOtherRemoveTargets(project) {
  _require = project;
  const result = require("ConjureProjectTypes").conjureProjectServerIds(project);
  const found = result.filter((item) => item !== project.guild_id);
  const mapped = found.map((item) => readConjureRemoveTarget(closure_0, item));
  return mapped.filter((item) => null != item);
}
export function conjureDeleteProjectItems(target) {
  items = otherTargets;
  if (otherTargets === undefined) {
    items = [];
  }
  const items1 = [{ key: "project", kind: "project", label: target.projectName }];
  const items2 = [target, ...items];
  const item = items2.forEach((item, index) => {
    const iter = item.channelNames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let obj = { key: null, kind: "channel", label: null };
      let _HermesInternal = HermesInternal;
      obj.key = "channel:" + index + ":" + nextResult;
      if (0 === items.length) {
        let _HermesInternal2 = HermesInternal;
        let combined = "#" + tmp3;
      } else {
        let intl = util.intl;
        let obj2 = { channel: null, server: null };
        obj2.channel = tmp3;
        obj2.server = tmp;
        combined = intl.formatToPlainString(_modDef4131.kCC2X2, obj2);
      }
      obj.label = combined;
      let arr = items1.push(obj);
      continue;
    }
  });
  const previewAppName = target.previewAppName;
  let tmp2 = null;
  if (null != previewAppName) {
    let obj2 = { key: "preview-app", kind: "app", label: previewAppName };
    tmp2 = obj2;
  }
  if (null != tmp2) {
    items1.push(tmp2);
  }
  return items1;
}
export function conjureRemoveAppKeptChannels(target) {
  const keptChannelNames = target.keptChannelNames;
  if (0 === keptChannelNames.length) {
    return null;
  } else {
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(util.intl.currentLocale, { type: "conjunction" });
    const intl = util.intl;
    const obj = { channels: listFormat.format(keptChannelNames.map((item) => "#" + item)) };
    return intl.formatToPlainString(_modDef4131.pE4Cec, obj);
  }
}
export function conjureTitleWithAppTag(arg0) {
  return arg0;
}
export function conjureDeleteProjectBody(target) {
  items = otherTargets;
  ({ appName, guildName } = target);
  if (otherTargets === undefined) {
    items = [];
  }
  const intl = util.intl;
  const obj = { app: appName, server: null };
  const listFormat = new Intl.ListFormat(util.intl.currentLocale, { type: "conjunction" });
  const items1 = [guildName, ...items.map((guildName) => guildName.guildName)];
  obj.server = listFormat.format(items1);
  return intl.formatToPlainString(_modDef4131["9CvVB9"], obj);
}
export function isPublishedConjureUserApp(project, publishStatus) {
  let isConjureLiveResult = "user" === project.install_scope;
  if (isConjureLiveResult) {
    isConjureLiveResult = null != publishStatus;
  }
  if (isConjureLiveResult) {
    isConjureLiveResult = ConjurePublishTypes.isConjureLive(publishStatus.publishState);
  }
  return isConjureLiveResult;
}
export function useIsPublishedConjureUserApp(arg0) {
  _require = arg0;
  items = [ConjureProjectStore, ConjurePublishStatusStore];
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
}