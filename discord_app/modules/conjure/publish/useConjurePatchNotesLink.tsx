// discord_app/modules/conjure/publish/useConjurePatchNotesLink.tsx
import router_utils from "../../routing/router_utils.tsx";
import useConjurePublishAction from "useConjurePublishAction.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "ConjurePublishStatusStore.tsx";

const require = globalThis.__r;

require = fn;
const canPublishProject = fn(6758).canPublishProject;
const Routes = fn(1087).Routes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePatchNotesLink.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjurePatchNotesLink(arg0, published_revision) {
      _require = arg0;
      dependencyMap = published_revision;
      const cResult = require("c").c(12);
      const context = guildId.useContext(require("useConjurePublishAction").ConjurePublishActionContext);
      guildId = undefined;
      if (context != null) {
        guildId = context.guildId;
      }
      if (guildId == null) {
        guildId = null;
      }
      published_revision = published_revision.published_revision;
      if (published_revision == null) {
        published_revision = null;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjurePublishStatusStore, published_revision];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === published_revision.update) {
          if (cResult[3] === arg0) {
            if (cResult[4] === published_revision) {
              let tmp10 = cResult[5];
              let tmp11 = cResult[6];
            }
            const stateFromStoresObject = tmp(504).useStateFromStoresObject(first, tmp10, tmp11);
            const sent = stateFromStoresObject.sent;
            if (null != sent) {
              if (cResult[7] !== sent) {
                const obj2 = { state: "sent", sent };
                cResult[7] = sent;
                cResult[8] = obj2;
              }
            } else {
              let tmp14 = null;
              if (tmp13) {
                tmp14 = null;
                if (null != published_revision) {
                  tmp14 = null;
                  if (null != guildId) {
                    if (cResult[9] === guildId) {
                    }
                    const obj3 = { state: "offer", publishedRevision: published_revision, fallbackGuildId: guildId };
                    cResult[9] = guildId;
                    cResult[10] = published_revision;
                    cResult[11] = obj3;
                  }
                }
              }
              return tmp14;
            }
            const tmpResult = tmp(504);
          }
        }
      }
      const fn = function p() {
        const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
        const project = ConjureProjectStore.getProject(closure_0);
        let tmp4 = null;
        if (null != published_revision) {
          let found;
          if (publishStatus != null) {
            const patchNotesSent = publishStatus.patchNotesSent;
            if (patchNotesSent != null) {
              found = patchNotesSent.find(
                (publishedRevision) => publishedRevision.publishedRevision === published_revision,
              );
            }
          }
          if (found == null) {
            found = null;
          }
          tmp4 = found;
        }
        const obj = { sent: tmp4, canOffer: null };
        let update = null != published_revision;
        if (update) {
          update = published_revision.update;
        }
        if (update) {
          let publishedRevision;
          if (publishStatus != null) {
            publishedRevision = publishStatus.publishedRevision;
          }
          update = published_revision === publishedRevision;
        }
        if (update) {
          update = null != guildId;
        }
        if (update) {
          update = null != project;
        }
        if (update) {
          update = "user" !== project.install_scope;
        }
        if (update) {
          update = canPublishProject(project);
        }
        obj.canOffer = update;
        return obj;
      };
      const items1 = [arg0, published_revision, published_revision.update, guildId];
      cResult[1] = guildId;
      cResult[2] = published_revision.update;
      cResult[3] = arg0;
      cResult[4] = published_revision;
      cResult[5] = fn;
      cResult[6] = items1;
      tmp11 = items1;
      tmp10 = fn;
      let obj = require("c");
      tmp = _require;
    }
  : function useConjurePatchNotesLink(arg0, published_revision) {
      _require = arg0;
      dependencyMap = published_revision;
      const context = guildId.useContext(require("useConjurePublishAction").ConjurePublishActionContext);
      guildId = undefined;
      if (context != null) {
        guildId = context.guildId;
      }
      if (guildId == null) {
        guildId = null;
      }
      published_revision = published_revision.published_revision;
      if (published_revision == null) {
        published_revision = null;
      }
      const items = [ConjurePublishStatusStore, published_revision];
      const items1 = [arg0, published_revision, published_revision.update, guildId];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(
        items,
        () => {
          const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
          const project = ConjureProjectStore.getProject(closure_0);
          let tmp4 = null;
          if (null != published_revision) {
            let found;
            if (publishStatus != null) {
              const patchNotesSent = publishStatus.patchNotesSent;
              if (patchNotesSent != null) {
                found = patchNotesSent.find(
                  (publishedRevision) => publishedRevision.publishedRevision === published_revision,
                );
              }
            }
            if (found == null) {
              found = null;
            }
            tmp4 = found;
          }
          const obj = { sent: tmp4, canOffer: null };
          let update = null != published_revision;
          if (update) {
            update = published_revision.update;
          }
          if (update) {
            let publishedRevision;
            if (publishStatus != null) {
              publishedRevision = publishStatus.publishedRevision;
            }
            update = published_revision === publishedRevision;
          }
          if (update) {
            update = null != guildId;
          }
          if (update) {
            update = null != project;
          }
          if (update) {
            update = "user" !== project.install_scope;
          }
          if (update) {
            update = canPublishProject(project);
          }
          obj.canOffer = update;
          return obj;
        },
        items1,
      );
      const sent = stateFromStoresObject.sent;
      if (null != sent) {
        let obj = { state: "sent", sent };
        let tmp8 = obj;
      } else {
        tmp8 = null;
        if (tmp7) {
          tmp8 = null;
          if (null != published_revision) {
            tmp8 = null;
            if (null != guildId) {
              const obj2 = { state: "offer", publishedRevision: published_revision, fallbackGuildId: guildId };
              tmp8 = obj2;
            }
          }
        }
      }
      return tmp8;
    };
export const openConjureSentPatchNotes = function openConjureSentPatchNotes(sent) {
  ({ guildId, channelId, messageId } = sent);
  router_utils.transitionTo(Routes.CHANNEL(guildId, channelId, messageId));
};
export const conjurePatchNotesEditorProps = function conjurePatchNotesEditorProps(projectId, arg1) {
  ({ publishedRevision, fallbackGuildId } = arg1);
  const project = ConjureProjectStore.getProject(projectId);
  let publishGuildIdResult = null;
  if (null != project) {
    publishGuildIdResult = useConjurePublishAction.publishGuildId(project, fallbackGuildId);
  }
  let tmp5 = null;
  if (null != project) {
    tmp5 = null;
    if (null != publishGuildIdResult) {
      const obj3 = {
        projectId,
        guildId: publishGuildIdResult,
        applicationId: null,
        projectName: null,
        publishedRevision: null,
      };
      ({ application_id: obj2.applicationId, name: obj2.projectName } = project);
      obj3.publishedRevision = publishedRevision;
      tmp5 = obj3;
    }
  }
  return tmp5;
};
