// === Module 10796: conjurePublishConnection ===

// Module 10796 (conjurePublishConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10719 */;
import ConjurePublishActionCreators from "ConjurePublishActionCreators" /* 10786 */;
import requestConjureDevicePermissionsDefault from "requestConjureDevicePermissions" /* 10797 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 10799 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10714 */;

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
function rejectPendingPublishOptions(arg0, arg1) {
  value = map2.get(arg0);
  if (null != value) {
    map2.delete(arg0);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timeout);
    const _Error = Error;
    const error = new Error(arg1);
    value.reject(error);
  }
}
const map = new Map();
const map1 = new Map();
let set = new Set(fn(10805).CONJURE_PUBLISH_PROGRESS_STAGES);
const set1 = new Set(["activity", "automod", "widget", "bot"]);
const map2 = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishConnection.tsx");

export const publishFrameHandlers = {
  publish_notice(id, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_CHAT_PUBLISH_NOTICE", projectId: projectId.projectId, id: id.id, content: id.content, timestamp: id.ts, publishNotice: id.publish_notice });
  }
};
export const publishStepHandlers = {
  publish_options(nonce, projectId) {
    projectId = projectId.projectId;
    let options;
    value = map2.get(projectId);
    if (null != value) {
      if (value.nonce === nonce.nonce) {
        map2.delete(projectId);
        const _clearTimeout = clearTimeout;
        clearTimeout(value.timeout);
        options = nonce.options;
        if (true === nonce.ok) {
          if (null != options) {
            const _Array = Array;
            if (Array.isArray(options.destinations)) {
              if (0 !== options.destinations.length) {
                if (options.destinations.length <= 7) {
                  const destinations2 = options.destinations;
                  if (!destinations2.some((id) => {
                    id = undefined;
                    if (id != null) {
                      id = id.id;
                    }
                    let tmp2 = typeof id !== "string";
                    if (typeof id === "string") {
                      tmp2 = 0 === id.id.length;
                    }
                    if (!tmp2) {
                      tmp2 = id.id.length > 100;
                    }
                    if (!tmp2) {
                      tmp2 = typeof id.label !== "string";
                    }
                    if (!tmp2) {
                      tmp2 = 0 === id.label.length;
                    }
                    if (!tmp2) {
                      tmp2 = id.label.length > 100;
                    }
                    return tmp2;
                  })) {
                    const _Set = Set;
                    const destinations1 = options.destinations;
                    set = new Set(destinations1.map((id) => id.id));
                    if (set.size === options.destinations.length) {
                      const destinations = options.destinations;
                      if (destinations.some((id) => id.id === options.selected_destination_id)) {
                        value.resolve(options);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let str = nonce.error;
        if (str == null) {
          str = "Could not load publish destinations. Try again.";
        }
        const error = new Error(str);
        value.reject(error);
      }
    }
  },
  publish_approval_required(arg0, projectId) {
    closure_0 = arg0;
    projectId = projectId.projectId;
    return (async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              if (obj7.validPublishApproval(tmp2.approval_url, tmp2.approval_kind)) {
                if (publishApprovalUrl.getPublishApprovalUrl(projectId) === tmp2.approval_url) {
                  c2 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  const obj5 = { type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: tmp2.approval_url };
                  v1(tmp21[4]).dispatch(obj5);
                  v1 = 1;
                  c2 = 1;
                  const obj6 = { value: tmp2(tmp21[8])(tmp21[7], tmp21.paths), done: false };
                  return obj6;
                }
              } else {
                c2 = 3;
              }
              obj7 = tmp2(c2[6]);
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const result = value.promptPublishApproval(closure_128_0.approval_url);
          }
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp15) {
          c2 = tmp;
          throw tmp15;
        }
      }
    })();
  },
  publish_progress(stage, projectId) {
    projectId = projectId.projectId;
    if (set.has(stage.stage)) {
      const _Number = Number;
      let num2 = 0;
      if (Number.isFinite(stage.stage_elapsed_ms)) {
        const _Math = Math;
        num2 = Math.max(0, stage.stage_elapsed_ms);
      }
      if ("approval" !== stage.stage) {
        const obj2 = { type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null };
        DispatcherDefault.dispatch(obj2);
      }
      const obj4 = { type: "CONJURE_PROJECT_PUBLISH_PROGRESS", projectId, progress: null };
      const obj5 = { stage: stage.stage, stageStartedAt: null };
      const _Date = Date;
      obj5.stageStartedAt = Date.now() - num2;
      obj4.progress = obj5;
      DispatcherDefault.dispatch(obj4);
    }
  },
  publish_cta(publish_cta, arg1) {
    if (null != publish_cta.publish_cta) {
      const obj2 = { type: "CONJURE_CHAT_TURN_PATCH", projectId: tmp, turnId: publish_cta.turn_id, patch: null };
      const surface = publish_cta.publish_cta.surface;
      let tmp3 = null;
      if (null != surface) {
        tmp3 = null;
        if (set1.has(surface)) {
          tmp3 = surface;
        }
      }
      const obj = { surface: tmp3, reason: null };
      let str = "first_publish";
      if ("new_ui" === publish_cta.publish_cta.reason) {
        str = "new_ui";
      }
      const obj4 = { publishCta: null };
      obj.reason = str;
      obj4.publishCta = obj;
      obj2.patch = obj4;
      DispatcherDefault.dispatch(obj2);
    }
  },
  publish_status(publish_state, projectId) {
    DispatcherDefault;
    let obj = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId: projectId.projectId, publishState: null, surface: null, previewAppChannels: null, previewDevicePermissions: null, publishedRevision: null, publishedAt: null, publishing: null, patchNotesSent: null, newUiUnpublished: null };
    if (typeof publish_state.publish_state === "string") {
      if ("" !== publish_state.publish_state) {
        let str = publish_state.publish_state;
      }
      obj.publishState = str;
      const surface = publish_state.surface;
      let tmp5 = null;
      if (null != surface) {
        tmp5 = null;
        if (set1.has(surface)) {
          tmp5 = surface;
        }
      }
      obj.surface = tmp5;
      const _Array = Array;
      if (Array.isArray(publish_state.preview_app_channels)) {
        const preview_app_channels = publish_state.preview_app_channels;
        let found = preview_app_channels.filter((item) => typeof item === "string");
      } else {
        found = [];
      }
      obj.previewAppChannels = found;
      const _Array2 = Array;
      if (Array.isArray(publish_state.preview_device_permissions)) {
        const prop = publish_state.preview_device_permissions;
        let found1 = prop.filter(conjureDevicePermissions.isConjureDevicePermissionName);
      } else {
        found1 = [];
      }
      obj.previewDevicePermissions = found1;
      let published_revision = null;
      if (typeof publish_state.published_revision === "number") {
        published_revision = publish_state.published_revision;
      }
      obj.publishedRevision = published_revision;
      let published_at = null;
      if (typeof publish_state.published_at === "string") {
        published_at = publish_state.published_at;
      }
      obj.publishedAt = published_at;
      obj.publishing = true === publish_state.publishing;
      const _Array3 = Array;
      let flatMapResult;
      if (Array.isArray(publish_state.patch_notes_sent)) {
        const patch_notes_sent = publish_state.patch_notes_sent;
        flatMapResult = patch_notes_sent.flatMap((published_revision) => {
          published_revision = undefined;
          if (published_revision != null) {
            published_revision = published_revision.published_revision;
          }
          if (typeof published_revision === "number") {
            if (typeof published_revision.guild_id === "string") {
              if (typeof published_revision.channel_id === "string") {
                if (typeof published_revision.message_id === "string") {
                  const obj = { publishedRevision: null, guildId: null, channelId: null, messageId: null };
                  ({ published_revision: obj.publishedRevision, guild_id: obj.guildId, channel_id: obj.channelId, message_id: obj.messageId } = published_revision);
                  const items = [obj];
                }
                return [];
              }
            }
          }
        });
      }
      obj.patchNotesSent = flatMapResult;
      obj.newUiUnpublished = true === publish_state.new_ui_unpublished;
      tmp3(obj);
    }
    if (true !== publish_state.published) {
      let str2 = "nothing_built";
      if (true === publish_state.has_unpublished_changes) {
        str2 = "not_live";
      }
      str = str2;
    } else {
      str = "live_current";
      if (true === publish_state.has_unpublished_changes) {
        str = "live_outdated";
      }
    }
  },
  publish_result(ok, projectId) {
    projectId = projectId.projectId;
    DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null });
    value = map.get(projectId);
    map.delete(projectId);
    if (null != value) {
      const _clearTimeout = clearTimeout;
      clearTimeout(value.timeout);
      value.resolve(ok);
    }
    if (true !== ok.ok) {
      let str2 = ok.error;
      if (str2 == null) {
        str2 = "publish_result not ok";
      }
      ConjurePublishActionCreators.trackPublishFailed(projectId, str2, false);
    } else {
      const project = ConjureProjectStore.getProject(projectId);
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
      if (publishStatus != null) {
        const previewDevicePermissions = publishStatus.previewDevicePermissions;
      }
      let install_scope;
      if (project != null) {
        install_scope = project.install_scope;
      }
      if ("user" === install_scope) {
        if ("" !== project.application_id) {
          if (null != previewDevicePermissions) {
            const application_id = project.application_id;
            const obj2 = { applicationId: application_id, appName: null, iframeId: null, permissions: null };
            const application = ApplicationStore.getApplication(application_id);
            let name;
            if (application != null) {
              name = application.name;
            }
            if (name == null) {
              name = project.name;
            }
            obj2.appName = name;
            obj2.permissions = previewDevicePermissions;
            requestConjureDevicePermissionsDefault(obj2);
            const tmpResult = requestConjureDevicePermissionsDefault;
          }
        }
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
  }
};
export const preparePublish = function preparePublish(projectId) {
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  if (conjureSocket != null) {
    conjureSocket.sendPreparePublish();
  }
};
export const publishProject = function publishProject(projectId, arg1) {
  closure_1 = arg1;
  c2 = false;
  const promise = new Promise((resolve, reject) => {
    const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
    if (null != conjureSocket) {
      if (map.has(projectId)) {
        let _Error2 = Error;
        let error = new Error("Publish already in flight");
        reject(error);
      } else {
        const _setTimeout = setTimeout;
        const obj4 = {
          resolve,
          reject,
          timeout: setTimeout(() => {
                closure_1(dependencyMap[4]).dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null });
                value = map2.get(projectId);
                if (null != value) {
                  map2.delete(projectId);
                  const _clearTimeout = clearTimeout;
                  clearTimeout(value.timeout);
                  const _Error = Error;
                  const error = new Error("Publish timed out");
                  value.reject(error);
                }
                value2 = map.get(projectId);
                if (null != value2) {
                  map.delete(projectId);
                  const _clearTimeout2 = clearTimeout;
                  clearTimeout(value2.timeout);
                  const _Error2 = Error;
                  const error1 = new Error("Publish timed out");
                  value2.reject(error1);
                }
                const obj = closure_1(dependencyMap[4]);
                const obj2 = { type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null };
              }, 900000)
        };
        const result = map.set(projectId, obj4);
        c2 = true;
        const obj6 = { type: "CONJURE_PROJECT_PUBLISH_START", projectId };
        DispatcherDefault.dispatch(obj6);
        try {
          conjureSocket.sendPublish(closure_1);
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
        let _Error2 = Error;
        let error = new Error("Publish already in flight");
        reject(error);
      } else {
        const _setTimeout = setTimeout;
        const obj4 = {
          resolve,
          reject,
          timeout: setTimeout(() => {
                closure_1(dependencyMap[4]).dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null });
                value = map2.get(projectId);
                if (null != value) {
                  map2.delete(projectId);
                  const _clearTimeout = clearTimeout;
                  clearTimeout(value.timeout);
                  const _Error = Error;
                  const error = new Error("Publish timed out");
                  value.reject(error);
                }
                value2 = map.get(projectId);
                if (null != value2) {
                  map.delete(projectId);
                  const _clearTimeout2 = clearTimeout;
                  clearTimeout(value2.timeout);
                  const _Error2 = Error;
                  const error1 = new Error("Publish timed out");
                  value2.reject(error1);
                }
                const obj = closure_1(dependencyMap[4]);
                const obj2 = { type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null };
              }, 900000)
        };
        const result = map.set(projectId, obj4);
        c2 = true;
        const obj6 = { type: "CONJURE_PROJECT_PUBLISH_START", projectId };
        DispatcherDefault.dispatch(obj6);
        try {
          conjureSocket.sendPublish(closure_1);
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
  }).catch((error) => {
    let str = "publish failed";
    if (error instanceof Error) {
      str = error.message;
    }
    ConjurePublishActionCreators.trackPublishFailed(closure_0, str, false);
    throw error;
  }).finally(() => {
    if (c2) {
      const obj2 = { type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId };
      DispatcherDefault.dispatch(obj2);
    }
  });
};
export const draftPatchNotes = function draftPatchNotes(arg0) {
  closure_0 = arg0;
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
            value = map1.get(closure_1_0);
            if (null != value) {
              map1.delete(closure_1_0);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const error = new Error("Draft timed out");
              value.reject(error);
            }
          }, 45000),
        nonce: combined
      };
      const result = map1.set(closure_0, obj4);
      try {
        conjureSocket.sendDraftPatchNotes(combined);
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
export const recordPatchNotesSent = function recordPatchNotesSent(projectId, sent, source_sha) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId, sent });
  try {
    const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
    if (null == conjureSocket) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      obj4.sendPatchNotesSent(sent, source_sha);
    }
    obj4 = conjureSocket;
  } catch (err) {
  }
  const obj2 = { type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId, sent };
};
export const rejectPendingPublish = function rejectPendingPublish(projectId, arg1) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null });
  value = map2.get(projectId);
  if (null != value) {
    map2.delete(projectId);
    const _clearTimeout = clearTimeout;
    clearTimeout(value.timeout);
    const _Error = Error;
    const error = new Error(arg1);
    value.reject(error);
  }
  value2 = map.get(projectId);
  if (null != value2) {
    map.delete(projectId);
    const _clearTimeout2 = clearTimeout;
    clearTimeout(value2.timeout);
    const _Error2 = Error;
    const error1 = new Error(arg1);
    value2.reject(error1);
  }
  const obj2 = { type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId, approvalUrl: null };
};
export { rejectPendingPatchNotesDraft };
export const publishStateFromFrame = function publishStateFromFrame(publish_state) {
  if (typeof publish_state.publish_state === "string") {
    if ("" !== publish_state.publish_state) {
      let str = publish_state.publish_state;
    }
    return str;
  }
  if (true !== publish_state.published) {
    let str2 = "nothing_built";
    if (true === publish_state.has_unpublished_changes) {
      str2 = "not_live";
    }
    str = str2;
  } else {
    str = "live_current";
    if (true === publish_state.has_unpublished_changes) {
      str = "live_outdated";
    }
  }
};
export const requestPublishOptions = function requestPublishOptions(id) {
  closure_0 = id;
  return new Promise((resolve, reject) => {
    const conjureSocket = conjureProjectSockets.getConjureSocket(closure_0);
    if (null == conjureSocket) {
      let _Error = Error;
      let error = new Error("Not connected");
      return reject(error);
    } else if (conjureSocket.supportsPublishOptions) {
      rejectPendingPublishOptions(closure_0, "Superseded by a newer publish request");
      const _Date = Date;
      const _Math = Math;
      const timestamp = Date.now();
      const str2 = Math.random();
      const _HermesInternal = HermesInternal;
      const combined = "" + timestamp + "-" + Math.random().toString(36).slice(2);
      const _setTimeout = setTimeout;
      const obj2 = {
        resolve,
        reject,
        timeout: setTimeout(() => {
            value = map2.get(id);
            if (null != value) {
              map2.delete(id);
              const _clearTimeout = clearTimeout;
              clearTimeout(value.timeout);
              const _Error = Error;
              const error = new Error("Could not load publish destinations. Try again.");
              value.reject(error);
            }
          }, 15000),
        nonce: combined
      };
      const result = map2.set(closure_0, obj2);
      try {
        conjureSocket.sendPublishOptions(combined);
      } catch (err) {
        tmp2(tmp3, "Could not load publish destinations. Try again.");
      }
      const str1 = Math.random().toString(36);
    } else {
      const obj3 = { destinations: null, selected_destination_id: "conjuring" };
      const items = [{ id: "conjuring", label: "Conjuring" }];
      obj3.destinations = items;
      resolve(obj3);
    }
  });
};