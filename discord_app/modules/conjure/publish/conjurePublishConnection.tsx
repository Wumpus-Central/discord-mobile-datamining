// discord_app/modules/conjure/publish/conjurePublishConnection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjurePublishActionCreators from "ConjurePublishActionCreators.tsx";
import conjureProjectSockets from "../connection/conjureProjectSockets.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "ConjurePublishStatusStore.tsx";

require = fn;
function rejectPendingPatchNotesDraft(projectId, arg1) {
  value = map1.get(projectId);
  if (null != value) {
    map1.delete(projectId);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timeout);
    const _Error = Error;
    const error = new Error(arg1);
    value.reject(error);
  }
}
const map = new Map();
const map1 = new Map();
const set = new Set(["activity", "automod", "widget", "bot"]);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishConnection.tsx");

export const publishFrameHandlers = {
  publish_notice(id, projectId) {
    DispatcherDefault.dispatch({
      type: "CONJURE_CHAT_PUBLISH_NOTICE",
      projectId: projectId.projectId,
      id: id.id,
      content: id.content,
      timestamp: id.ts,
      publishNotice: id.publish_notice,
    });
  },
};
export const publishStepHandlers = {
  publish_cta(publish_cta, arg1) {
    if (null != publish_cta.publish_cta) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: publish_cta.turn_id, patch: null };
      const surface = publish_cta.publish_cta.surface;
      let tmp3 = null;
      if (null != surface) {
        tmp3 = null;
        if (set.has(surface)) {
          tmp3 = surface;
        }
      }
      const obj = { publishCta: null };
      const obj4 = { surface: tmp3 };
      obj.publishCta = obj4;
      obj2.patch = obj;
      DispatcherDefault.dispatch(obj2);
    }
  },
  publish_status(published, projectId) {
    const obj2 = {
      type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
      projectId: projectId.projectId,
      published: true === published.published,
      hasUnpublishedChanges: true === published.has_unpublished_changes,
      surface: null,
      previewAppChannels: null,
      publishedRevision: null,
      publishedAt: null,
      publishing: null,
    };
    const surface = published.surface;
    let tmp = null;
    if (null != surface) {
      tmp = null;
      if (set.has(surface)) {
        tmp = surface;
      }
    }
    obj2.surface = tmp;
    if (Array.isArray(published.preview_app_channels)) {
      const preview_app_channels = published.preview_app_channels;
      let found = preview_app_channels.filter((item) => typeof item === "string");
    } else {
      found = [];
    }
    obj2.previewAppChannels = found;
    let published_revision = null;
    if (typeof published.published_revision === "number") {
      published_revision = published.published_revision;
    }
    obj2.publishedRevision = published_revision;
    let published_at = null;
    if (typeof published.published_at === "string") {
      published_at = published.published_at;
    }
    obj2.publishedAt = published_at;
    obj2.publishing = true === published.publishing;
    DispatcherDefault.dispatch(obj2);
  },
  publish_result(ok, projectId) {
    projectId = projectId.projectId;
    value = map.get(projectId);
    map.delete(projectId);
    if (null != value) {
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timeout);
      value.resolve(ok);
    }
    if (true !== ok.ok) {
      let str = ok.error;
      if (str == null) {
        str = "publish_result not ok";
      }
      ConjurePublishActionCreators.trackPublishFailed(projectId, str, false);
    } else {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
      if (null != publishStatus) {
        const obj = {
          type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
          projectId,
          published: true,
          hasUnpublishedChanges: false,
          surface: null,
          previewAppChannels: null,
          publishedRevision: null,
          publishedAt: null,
        };
        ({
          surface: obj4.surface,
          previewAppChannels: obj4.previewAppChannels,
          publishedRevision: obj4.publishedRevision,
          publishedAt: obj4.publishedAt,
        } = publishStatus);
        DispatcherDefault.dispatch(obj);
      }
    }
  },
  patch_notes_draft(nonce, projectId) {
    projectId = projectId.projectId;
    value = map1.get(projectId);
    if (tmp) {
      map1.delete(projectId);
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timeout);
      value.resolve(nonce);
    }
    tmp = null != value && value.nonce === nonce.nonce;
  },
};
export const publishProject = function publishProject(id) {
  const projectId = id;
  c1 = false;
  const promise = new Promise((resolve, reject) => {
    const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
    if (null != conjureSocket) {
      if (map.has(projectId)) {
        const _Error2 = Error;
        let error = new Error("Publish already in flight");
        reject(error);
      } else {
        const _setTimeout = setTimeout;
        const obj4 = {
          resolve,
          reject,
          timeout: setTimeout(() => {
            value = map.get(projectId);
            if (null != value) {
              map.delete(projectId);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const error = new Error("Publish timed out");
              value.reject(error);
            }
          }, 900000),
        };
        const result = map.set(projectId, obj4);
        c1 = true;
        const obj6 = { type: "CONJURE_PROJECT_PUBLISH_START", projectId };
        DispatcherDefault.dispatch(obj6);
        try {
          conjureSocket.sendPublish();
        } catch (error1) {
          obj2.delete(tmp4);
          obj.clearTimeout(tmp3);
          if (!(error1 instanceof obj.Error)) {
            error1 = new obj.Error("publish send failed");
          }
          tmp2(error1);
        }
      }
    } else {
      let _Error = Error;
      const error2 = new Error("Not connected");
      reject(error2);
    }
  });
  return new Promise((resolve, reject) => {
    const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
    if (null != conjureSocket) {
      if (map.has(projectId)) {
        const _Error2 = Error;
        let error = new Error("Publish already in flight");
        reject(error);
      } else {
        const _setTimeout = setTimeout;
        const obj4 = {
          resolve,
          reject,
          timeout: setTimeout(() => {
            value = map.get(projectId);
            if (null != value) {
              map.delete(projectId);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const error = new Error("Publish timed out");
              value.reject(error);
            }
          }, 900000),
        };
        const result = map.set(projectId, obj4);
        c1 = true;
        const obj6 = { type: "CONJURE_PROJECT_PUBLISH_START", projectId };
        DispatcherDefault.dispatch(obj6);
        try {
          conjureSocket.sendPublish();
        } catch (error1) {
          obj2.delete(tmp4);
          obj.clearTimeout(tmp3);
          if (!(error1 instanceof obj.Error)) {
            error1 = new obj.Error("publish send failed");
          }
          tmp2(error1);
        }
      }
    } else {
      let _Error = Error;
      const error2 = new Error("Not connected");
      reject(error2);
    }
  })
    .catch((error) => {
      let str = "publish failed";
      if (error instanceof Error) {
        str = error.message;
      }
      ConjurePublishActionCreators.trackPublishFailed(closure_0, str, false);
      throw error;
    })
    .finally(() => {
      if (c1) {
        const obj2 = { type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId };
        DispatcherDefault.dispatch(obj2);
      }
    });
};
export const draftPatchNotes = function draftPatchNotes(id) {
  closure_0 = id;
  return new Promise((resolve, reject) => {
    const conjureSocket = conjureProjectSockets.getConjureSocket(closure_0);
    if (null != conjureSocket) {
      rejectPendingPatchNotesDraft(closure_0, "Superseded by a newer draft request");
      const _Date = Date;
      const _Math = Math;
      const timestamp = Date.now();
      const str3 = Math.random();
      const _HermesInternal = HermesInternal;
      const combined = "" + timestamp + "-" + Math.random().toString(36).slice(2);
      const _setTimeout = setTimeout;
      const obj4 = {
        resolve,
        reject,
        timeout: setTimeout(() => {
          value = map1.get(id);
          if (null != value) {
            map1.delete(id);
            const _clearTimeout = clearTimeout;
            clearTimeout(value.timeout);
            const _Error = Error;
            const error = new Error("Draft timed out");
            value.reject(error);
          }
        }, 45000),
        nonce: combined,
      };
      const result = map1.set(closure_0, obj4);
      try {
        const project = ConjureProjectStore.getProject(closure_0);
        let name;
        if (project != null) {
          name = project.name;
        }
        conjureSocket.sendDraftPatchNotes(combined, name);
      } catch (error) {
        obj2.delete(tmp4);
        obj.clearTimeout(tmp3);
        if (!(error instanceof obj.Error)) {
          error = new obj.Error("draft send failed");
        }
        tmp2(error);
      }
      const str1 = Math.random().toString(36);
    } else {
      let _Error = Error;
      const error1 = new Error("Not connected");
      reject(error1);
    }
  });
};
export const rejectPendingPublish = function rejectPendingPublish(projectId, arg1) {
  value = map.get(projectId);
  if (null != value) {
    map.delete(projectId);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timeout);
    const _Error = Error;
    const error = new Error(arg1);
    value.reject(error);
  }
};
export { rejectPendingPatchNotesDraft };
