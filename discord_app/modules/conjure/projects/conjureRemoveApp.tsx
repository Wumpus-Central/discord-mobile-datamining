// === Module 12513: conjureRemoveApp ===

// Module 12513 (conjureRemoveApp)
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import useChannelName from "useChannelName" /* 5647 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6896 */;
import conjureAppInServer from "conjureAppInServer" /* 10866 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 10941 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const require = globalThis.__r;

require = fn;
function readConjureRemoveTarget(project) {
  let guild = null;
  if (null != project.guild_id) {
    guild = GuildStore.getGuild(project.guild_id);
  }
  if (null != guild) {
    if ("in_server" === obj5.readConjureAppServerPresence(project)) {
      const result = tmp10(10866).findConjureAppChannels(guild.id, project.application_id);
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
      const tmp10Result = tmp10(10866);
      const tmp10Result5 = tmp10(10866);
      obj.canRemoveBot = tmp10Result5.canRemoveConjureBot(guild, tmp10(10866).conjureProductionBotUserId(project));
      let canRemoveConjureBotResult = null == project.preview_application_id;
      if (!canRemoveConjureBotResult) {
        const tmp10Result7 = tmp10(10866);
        canRemoveConjureBotResult = tmp10Result7.canRemoveConjureBot(guild, tmp10(10866).conjurePreviewBotUserId(project));
        const tmp10Result8 = tmp10(10866);
      }
      obj.canRemovePreviewBot = canRemoveConjureBotResult;
      return obj;
    }
    obj5 = found(10866);
  }
  return null;
}
function channelName(channel) {
  return useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
}
const Permissions = fn(1072).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/conjureRemoveApp.tsx");

export { readConjureRemoveTarget };
export function useConjureRemoveTarget(projectId) {
  _require = projectId;
  closure_129_0 = projectId;
  let items = [ConjureProjectStore, ApplicationStore, GuildMemberStore];
  const items1 = [projectId];
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
  closure_129_1 = guildId;
  const botUserIds = stateFromStores.botUserIds;
  closure_129_2 = botUserIds;
  const items2 = [guildId, botUserIds];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_1_1;
    if (tmp2) {
      tmp2 = length.length > 0;
    }
    if (tmp2) {
      const membersById = GuildActionCreatorsDefault.requestMembersById(closure_1_1, length, false);
    }
  }, items2);
  let obj = require("initialize");
  const items3 = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
  const items4 = [projectId];
  return require("initialize").useStateFromStores(items3, () => {
    let project = null;
    if (null != closure_0) {
      project = ConjureProjectStore.getProject(tmp);
    }
    let tmp4 = null;
    if (null != project) {
      tmp4 = readConjureRemoveTarget(project);
    }
    return tmp4;
  }, items4, require("module_12").isEqual);
}
export function conjureRemoveAppItems(target) {
  const channelNames = target.channelNames;
  return channelNames.map((item) => ({ key: "channel:" + item, kind: "channel", label: "#" + item }));
}
export function conjureDeleteProjectItems(target) {
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
}
export function conjurePreviewAppItem(target) {
  const previewAppName = target.previewAppName;
  let tmp = null;
  if (null != previewAppName) {
    const obj = { key: "preview-app", kind: "app", label: previewAppName };
    tmp = obj;
  }
  return tmp;
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
    return intl.formatToPlainString(_modDef3865.pE4Cec, obj);
  }
}
export function conjureTitleWithAppTag(arg0) {
  return arg0;
}
export function conjureRemoveAppSuccess(arg0) {
  ({ appName, guildName } = arg0);
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3865.SNFGxP, { app, server });
}
export function conjureDeleteProjectBody(target) {
  ({ appName, guildName } = target);
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3865["9CvVB9"], { app, server });
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
}