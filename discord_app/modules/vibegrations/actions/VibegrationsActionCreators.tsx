// discord_app/modules/vibegrations/actions/VibegrationsActionCreators.tsx
import dispatcherDefault from "../../../Dispatcher.tsx";
import _launchFrameOnNativeDefault from "../../frames/FramesActionCreators.native.tsx";
import vibegrationLocation from "../lib/VibegrationsAnalytics.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../frames/FramesStore.tsx";
import closure_5 from "../stores/VibegrationsProjectStore.tsx";
import { Endpoints } from "../../../Constants.tsx";
import { isLaunched } from "../../frames/FramesConstants.tsx";

require = arg1;
function reloadVibegrationsAppFrames(application_id) {
  if (null != application_id) {
    allFrames = allFrames.getAllFrames();
    for (const item10005 of allFrames) {
      let tmp2 = item10005;
      let tmp3 = isLaunched;
      let tmp4 = isLaunched(item10005);
      if (tmp4) {
        let tmp5 = item10005;
        tmp4 = tmp2.applicationId === arg0;
      }
      if (tmp4) {
        let tmp6 = item10005;
        tmp4 = !tmp2.data.proxyTicketRefreshing;
      }
      if (tmp4) {
        let tmp7 = importDefault;
        let tmp8 = dependencyMap;
        let obj = _launchFrameOnNativeDefault;
        let tmp9 = item10005;
        let refreshProxyTicketResult = obj.refreshProxyTicket(tmp2.id);
      }
      continue;
    }
  }
}
function listProjects(guildId) {
  const self = this;
  const apply = _listProjects.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _listProjects() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function* (arg0, body) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          constants = 2;
          if (0 === projectsFetchState) {
            if (arg0 === 1) {
              constants = 3;
              throw body;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp20;
              let callback;
              body = undefined;
              dependencyMap = undefined;
              body = callback;
              if (callback == null) {
                body = null;
              }
              callback = body;
              projectsFetchState = projectsFetchState.getProjectsFetchState();
              let type;
              if (projectsFetchState != null) {
                type = projectsFetchState.type;
              }
              if ("loading" !== type) {
                closure_9 = tmp30;
                let obj4 = closure_1_1(closure_1_2[5]);
                obj4.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
                c4 = 1;
                const HTTP = callback(closure_1_2[8]).HTTP;
                obj1 = { url: null, query: null, rejectWithError: true };
                obj1[0] = constants.VIBEGRATIONS_PROJECTS;
                let tmp41;
                if (null != tmp49) {
                  const obj2 = { guild_id: null };
                  obj2[0] = tmp49;
                  tmp41 = obj2;
                }
                obj1[1] = tmp41;
                projectsFetchState = 2;
                constants = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj1);
                return obj3;
              } else {
                tmp20 = null != tmp30;
                if (tmp20) {
                  tmp20 = tmp30 !== closure_9;
                }
                if (tmp20) {
                  closure_10 = tmp30;
                }
              }
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              obj3 = body(573);
              obj3.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
            } else if (arg0 === 1) {
              constants = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 0;
              constants = 3;
              obj4 = { value: null, done: true };
              obj4[0] = body;
              return obj4;
            } else {
              body = body.body;
              obj = body(573);
              const obj5 = { type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: null, guildId: null };
              obj5[1] = body;
              obj5[2] = callback;
              obj.dispatch(obj5);
              c4 = 0;
            }
            tmp20 = closure_3;
            dependencyMap = c10;
            c10 = null;
            let tmp23 = null != dependencyMap;
            if (tmp23) {
              tmp20 = callback;
              tmp23 = dependencyMap !== callback;
            }
            if (tmp23) {
              tmp20 = callback2;
              callback2(dependencyMap);
            }
          }
          constants = 3;
        } catch (tmp42) {
          tmp20 = c4;
          if (tmp4 === c4) {
            constants = tmp2;
            throw tmp42;
          } else {
            projectsFetchState = tmp;
          }
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getProject() {
  const self = this;
  const apply = _getProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getProject() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function* (arg0, arg1) {
      closure_3 = tmp3;
      closure_2 = tmp2;
      const HTTP = callback(closure_1_2[8]).HTTP;
      obj1 = { url: null, rejectWithError: false, signal: null };
      obj1[0] = closure_1_6.VIBEGRATIONS_PROJECT(callback);
      obj1[2] = lib;
      closure_2 = yield HTTP.get(obj1);
      if (lib != null) {
        const aborted = lib.aborted;
      }
      let ok = true !== aborted;
      if (ok) {
        ok = closure_2.ok;
      }
      if (ok) {
        let obj = lib(closure_2[5]);
        const obj4 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: null };
        obj4[1] = closure_2.body.project;
        obj.dispatch(obj4);
        const obj5 = {
          bot_permissions_changed: null,
          integration_installed: null,
          preview_ready: null,
          has_activity: null,
          owner_authorization_revoked: null,
        };
        obj5[0] = closure_2.body.bot_permissions_changed;
        obj5[1] = closure_2.body.integration_installed;
        obj5[2] = closure_2.body.preview_ready;
        obj5[3] = closure_2.body.has_activity;
        obj5[4] = closure_2.body.owner_authorization_revoked;
        (function updateIntegrationStatus(closure_0, integrationStatus) {
          let obj = callback(table[5]);
          obj = { type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: closure_0, integrationStatus };
          obj.dispatch(obj);
        })(callback, obj5);
      }
      return closure_1_2;
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createProject() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function* (arg0, body) {
      const table = tmp2;
      const callback2 = tmp5;
      const HTTP = callback(closure_1_2[8]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: false };
      obj1[0] = closure_1_6.VIBEGRATIONS_PROJECTS;
      const obj2 = { flags: null };
      obj2[0] = callback(closure_1_2[9]).VibegrationsProjectFlags.PUBLIC;
      const merged = Object.assign(body);
      obj1[1] = obj2;
      yield HTTP.post(obj1);
      body = body.body;
      const obj = callback2(table[5]);
      const obj5 = { type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: null };
      obj5[1] = body;
      obj.dispatch(obj5);
      return body.id;
    })();
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function patchProject(closure_1_0, arg1) {
  const self = this;
  const apply = _patchProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _patchProject() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function* (arg0, arg1) {
      closure_3 = tmp2;
      const table = tmp5;
      const HTTP = lib(closure_1_2[8]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: false };
      obj1[0] = closure_1_6.VIBEGRATIONS_PROJECT(lib);
      obj1[1] = callback;
      lib = yield HTTP.patch(obj1);
      if (lib.ok) {
        const obj = callback(table[5]);
        const obj4 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: null };
        obj4[1] = lib.body;
        obj.dispatch(obj4);
      }
      return lib;
    })();
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setProjectIcon() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function* (arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              const table = tmp7;
              let lib;
              let preview_application_id;
              obj1 = { icon: null };
              obj1[0] = preview_application_id;
              c5 = 1;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = closure_1_16(lib, obj1);
              return obj2;
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                lib = arg1;
                if (lib.ok) {
                  preview_application_id = lib.body.preview_application_id;
                  if (null != preview_application_id) {
                    c4 = 1;
                    obj1 = lib(table[10]);
                    c5 = 3;
                    c6 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = obj1.fetchApplication(preview_application_id);
                    return obj4;
                  }
                }
              }
            } else {
              if (2 === tmp7) {
                c4 = 0;
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                c4 = 0;
              }
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c6 = 3;
          }
        } catch (tmp21) {
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp21;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteProject() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function* (arg0) {
      const table = tmp2;
      let callback2 = tmp5;
      const HTTP = callback(closure_1_2[8]).HTTP;
      obj1 = { url: null, rejectWithError: false };
      obj1[0] = closure_1_6.VIBEGRATIONS_PROJECT(callback);
      callback2 = yield HTTP.del(obj1);
      const obj = callback2(table[5]);
      const obj4 = { type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: null };
      obj4[1] = callback;
      obj.dispatch(obj4);
      return callback2;
    })();
  });
  closure_19 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _refreshPublishedProject() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    const iter = (function* (arg0, body) {
      if (project === 2) {
        project = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          project = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              project = 3;
              throw body;
            } else if (arg0 === 2) {
              project = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let bot_permissions_changed = tmp5;
              body = tmp2;
              let isPreview;
              isPreview = isPreview.isPreview;
              body = undefined;
              bot_permissions_changed = undefined;
              c4 = undefined;
              project = undefined;
              let application_id;
              c4 = 1;
              project = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              project = 3;
              throw body;
            } else if (arg0 === 2) {
              project = 3;
              obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              c4 = 2;
              project = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback3(callback);
              return obj2;
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                project = 3;
                throw body;
              } else if (arg0 === 2) {
                project = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = body;
                return obj3;
              } else {
                body = body.body;
                bot_permissions_changed = body.bot_permissions_changed;
                c4 = body.integration_installed;
                project = body.project;
                if (isPreview) {
                  application_id = tmp55.preview_application_id;
                } else {
                  application_id = tmp55.application_id;
                }
                if (null != application_id) {
                  let obj6 = callback(body[10]);
                  c4 = 3;
                  project = 1;
                  let obj4 = { value: null, done: false };
                  obj4[0] = obj6.fetchApplication(application_id);
                  return obj4;
                } else {
                  obj4 = callback(body[6]);
                  const obj5 = { isPreview: null };
                  obj5[0] = isPreview;
                  const result = obj4.trackVibegrationDeployed(callback, obj5);
                  project = 3;
                }
              }
            } else if (3 === tmp5) {
              if (arg0 === 1) {
                project = 3;
                throw body;
              } else if (arg0 === 2) {
                project = 3;
                obj6 = { value: null, done: true };
                obj6[0] = body;
                return obj6;
              } else {
                obj1 = callback(body[11]);
                const widgetConfigs = obj1.fetchWidgetConfigs(application_id, { force: true });
                c4 = 4;
                project = 1;
                const obj7 = { value: null, done: false };
                obj7[0] = widgetConfigs.catch(() => {});
                return obj7;
              }
            } else if (arg0 === 1) {
              project = 3;
              throw body;
            } else if (arg0 !== 2) {
              let tmp8 = !isPreview;
              if (isPreview) {
                let tmp10 = c4;
                if (c4) {
                  tmp10 = !bot_permissions_changed;
                }
                tmp8 = tmp10;
              }
              if (tmp8) {
                callback2(application_id);
              }
            }
            project = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          }
        } catch (tmp43) {
          project = tmp;
          throw tmp43;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c9 = null;
let c10 = null;
let result = require("set").fileFinishedImporting("modules/vibegrations/actions/VibegrationsActionCreators.tsx");

export const trackPublishFailed = function trackPublishFailed(project_id, message, arg2) {
  let obj = vibegrationLocation;
  obj = {
    location: "publish",
    code: vibegrationLocation.VibegrationErrorCodes.PUBLISH_FAILED,
    message: null,
    details: null,
    isPreview: null,
  };
  let str = "";
  if (arg2) {
    str = "-preview";
  }
  obj[2] = "publish" + str + " failed";
  obj[3] = message;
  obj[4] = arg2;
  const result = obj.trackVibegrationErrored(project_id, obj);
};
export { reloadVibegrationsAppFrames };
export const reloadVibegrationsProjectFrames = function reloadVibegrationsProjectFrames(arg0) {
  project = project.getProject(arg0);
  if (null != project) {
    reloadVibegrationsAppFrames(project.application_id);
    let prop = project.preview_application_id;
    if (prop == null) {
      prop = null;
    }
    reloadVibegrationsAppFrames(prop);
    const tmp2 = reloadVibegrationsAppFrames;
  }
};
export { listProjects };
export { getProject };
export const createProject = function createProject(arg0) {
  const self = this;
  const apply = _createProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const renameProject = function renameProject(closure_1_0, name) {
  return patchProject(closure_1_0, { name });
};
export const updateProjectSettings = function updateProjectSettings(closure_1_0, arg1) {
  return patchProject(closure_1_0, arg1);
};
export const setProjectIcon = function setProjectIcon(projectId, icon) {
  const self = this;
  const apply = _setProjectIcon.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setGuildHints = function setGuildHints(closure_1_0) {
  return patchProject(closure_1_0, arg1);
};
export const deleteProject = function deleteProject() {
  const self = this;
  const apply = _deleteProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(closure_0, projectId) {
  let obj = dispatcherDefault;
  obj = { type: "VIBEGRATIONS_PROJECT_SELECT", guildId: closure_0, projectId };
  obj.dispatch(obj);
};
export const refreshPublishedProject = function refreshPublishedProject(closure_0, arg1) {
  const self = this;
  const apply = _refreshPublishedProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setComposerDraft = function setComposerDraft(projectId, draft) {
  let obj = dispatcherDefault;
  obj = { type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId, draft };
  obj.dispatch(obj);
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  let obj = dispatcherDefault;
  obj = { type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width };
  obj.dispatch(obj);
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  let obj = dispatcherDefault;
  obj = { type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId };
  obj.dispatch(obj);
};
export const setBuilderPreviewMobile = function setBuilderPreviewMobile(enabled) {
  let obj = dispatcherDefault;
  obj = { type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled };
  obj.dispatch(obj);
};
export const markLogsSeen = function markLogsSeen(projectId) {
  let obj = dispatcherDefault;
  obj = { type: "VIBEGRATIONS_LOGS_SEEN", projectId };
  obj.dispatch(obj);
};
