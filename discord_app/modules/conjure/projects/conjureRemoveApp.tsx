// === Module 16868: conjureRemoveApp ===

// Module 16868 (conjureRemoveApp)
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import conjureAppInServer from "conjureAppInServer" /* 12378 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import UserProfileStore from "UserProfileStore" /* 7309 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;
import GuildStore from "GuildStore" /* 2086 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;

const require = globalThis.__r;

require = fn;
function readConjureRemoveTarget(project) {
  guild = null;
  if (null != project.guild_id) {
    guild = GuildStore.getGuild(project.guild_id);
  }
  let tmp3 = null;
  if (null != guild) {
    tmp3 = null;
    if (canPublishProject(project)) {
      tmp3 = null;
      if ("in_server" === obj.readConjureAppServerPresence(project)) {
        const obj2 = { projectName: project.name, appName: null, previewAppName: null, guildName: null, channelNames: null };
        const application = ApplicationStore.getApplication(project.application_id);
        let name;
        if (application != null) {
          name = application.name;
        }
        if (name == null) {
          name = project.name;
        }
        obj2.appName = name;
        let tmp8 = null;
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
          tmp8 = name1;
        }
        obj2.previewAppName = tmp8;
        obj2.guildName = guild.name;
        const result = conjureAppInServer.findConjureAppChannels(guild.id, project.application_id);
        obj2.channelNames = result.map((item) => require("useChannelName").computeChannelName(item, UserStore, RelationshipStore));
        tmp3 = obj2;
        const tmp5Result = conjureAppInServer;
      }
      obj = conjureAppInServer;
    }
  }
  return tmp3;
}
const canPublishProject = fn(11251).canPublishProject;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/conjureRemoveApp.tsx");

export { readConjureRemoveTarget };
export const useConjureRemoveTarget = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemoveTarget(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, GuildStore, GuildChannelStore, UserProfileStore, ApplicationStore, UserStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function v() {
      let project = null;
      if (null != closure_0) {
        project = ConjureProjectStore.getProject(tmp);
      }
      let tmp4 = null;
      if (null != project) {
        tmp4 = readConjureRemoveTarget(project);
      }
      return tmp4;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp13 = items1;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp12, tmp13, require("module_12").isEqual);
}) : (function useConjureRemoveTarget(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore, GuildStore, GuildChannelStore, UserProfileStore, ApplicationStore, UserStore, RelationshipStore];
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
  if (null != target.previewAppName) {
    const obj2 = { key: "preview-app", kind: "app", label: target.previewAppName };
    items.push(obj2);
  }
  return items;
};
export function conjureTitleWithAppTag(tmp9Result4) {
  return tmp9Result4;
}
export const conjureRemoveAppSuccess = function conjureRemoveAppSuccess(arg0) {
  ({ appName, guildName } = arg0);
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3827.SNFGxP, { app, server });
};
export const conjureDeleteProjectBody = function conjureDeleteProjectBody(target) {
  ({ appName, guildName } = target);
  const intl = util.intl;
  return intl.formatToPlainString(_modDef3827["9CvVB9"], { app, server });
};