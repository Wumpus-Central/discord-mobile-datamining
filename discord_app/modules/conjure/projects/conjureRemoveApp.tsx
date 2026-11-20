// === Module 12265: conjureRemoveApp ===

// Module 12265 (conjureRemoveApp)
import util from "util" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import useChannelName from "useChannelName" /* 5410 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6392 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6503 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 12190 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2163 */;
import UserProfileStore from "UserProfileStore" /* 6837 */;
import GuildChannelStore from "GuildChannelStore" /* 4724 */;
import GuildMemberStore from "GuildMemberStore" /* 4706 */;
import GuildStore from "GuildStore" /* 4665 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import RelationshipStore from "RelationshipStore" /* 4736 */;
import UserStore from "UserStore" /* 1386 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6860 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;

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
      let tmp3 = "in_server" === found(6836).readConjureAppServerPresence(project);
      const obj = found(6836);
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
      const result = found(6836).findConjureAppChannels(guild.id, project.application_id);
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
      const obj2 = found(6836);
      const tmp7Result = found(6836);
      obj5.canRemoveBot = tmp7Result.canRemoveConjureBot(guild, found(6836).conjureProductionBotUserId(project));
      let canRemoveConjureBotResult = null == project.preview_application_id;
      if (!canRemoveConjureBotResult) {
        const tmp7Result5 = tmp7(6836);
        canRemoveConjureBotResult = tmp7Result5.canRemoveConjureBot(guild, tmp7(6836).conjurePreviewBotUserId(project));
        const tmp7Result6 = tmp7(6836);
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
const Permissions = fn(1071).Permissions;
let items = [ConjureProjectStore, GuildStore, GuildChannelStore, GuildMemberStore, UserProfileStore, ApplicationStore, PermissionStore, UserStore, RelationshipStore];
let closure_16 = [];
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
          items = [project(dependencyMap[12]).conjureProductionBotUserId(project), ];
          let result = null;
          if (guildId === project.guild_id) {
            result = project(dependencyMap[12]).conjurePreviewBotUserId(project);
            const tmpResult = project(dependencyMap[12]);
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
    found1 = closure_16;
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
        combined = intl.formatToPlainString(_modDef4091.kCC2X2, obj2);
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
    return intl.formatToPlainString(_modDef4091.pE4Cec, obj);
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
  return intl.formatToPlainString(_modDef4091["9CvVB9"], obj);
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