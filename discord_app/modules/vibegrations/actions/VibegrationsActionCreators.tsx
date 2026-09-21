// === Module 9310: VibegrationsActionCreators ===

// Module 9310 (VibegrationsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5275 */;
import VibegrationsAnalytics from "VibegrationsAnalytics" /* 9311 */;
import VibegrationsPlatformUtilsDefault from "VibegrationsPlatformUtils" /* 9312 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9309 */;

require = fn;
function reloadVibegrationsAppFrames(application_id) {
  VibegrationsPlatformUtilsDefault.reloadAppFrames(application_id);
}
function listProjects() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _listProjects() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        let tmp7 = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = undefined;
            let body;
            closure_130_2 = undefined;
            c1 = guild_id;
            if (guild_id == null) {
              c1 = null;
            }
            closure_130_0 = c1;
            projectsFetchState = projectsFetchState.getProjectsFetchState();
            let type;
            if (projectsFetchState != null) {
              type = projectsFetchState.type;
            }
            if ("loading" !== type) {
              closure_7 = tmp32;
              const obj5 = { type: "VIBEGRATIONS_PROJECTS_FETCH_START", guildId: tmp32 };
              DispatcherDefault.dispatch(obj5);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.VIBEGRATIONS_PROJECTS, query: null, rejectWithError: true };
              let tmp43;
              if (null != guild_id) {
                const obj7 = { guild_id };
                tmp43 = obj7;
              }
              request.query = tmp43;
              c5 = 2;
              c6 = 1;
              const obj8 = { value: HTTP.get(request), done: false };
              return obj8;
            } else {
              tmp7 = null != tmp32;
              if (tmp7) {
                tmp7 = tmp32 !== closure_7;
              }
              if (tmp7) {
                closure_8 = tmp32;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            const obj9 = { type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL", guildId: closure_130_0 };
            closure_131_1(closure_131_2[3]).dispatch(obj9);
            const obj4 = closure_131_1(closure_131_2[3]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            body = value.body;
            const obj11 = { type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: body, guildId: closure_130_0 };
            closure_131_1(closure_131_2[3]).dispatch(obj11);
            c4 = 0;
            const obj = closure_131_1(closure_131_2[3]);
          }
          closure_130_2 = closure_131_8;
          closure_131_8 = null;
          tmp7 = null != closure_130_2;
          if (tmp7) {
            tmp7 = closure_130_2 !== closure_130_0;
          }
          if (tmp7) {
            tmp7 = closure_131_9(closure_130_2);
          }
        }
        c6 = 3;
      } catch (tmp44) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp44;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
function getProject() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _getProject(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    closure_2 = tmp2;
    closure_130_0 = closure_0;
    closure_130_1 = signal;
    const HTTP = HTTPUtils.HTTP;
    await HTTP.get({ url: Endpoints.VIBEGRATIONS_PROJECT(closure_0), rejectWithError: false, signal });
    closure_130_2 = value;
    if (closure_130_1 != null) {
      const aborted = closure_130_1.aborted;
    }
    let ok = true !== aborted;
    if (ok) {
      ok = closure_130_2.ok;
    }
    if (ok) {
      closure_131_1(closure_131_2[3]).dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: closure_130_2.body.project });
      (function updateIntegrationStatus(projectId, integrationStatus) {
        signal(closure_1_2[3]).dispatch({ type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus });
      })(closure_130_0, { bot_permissions_changed: closure_130_2.body.bot_permissions_changed, integration_installed: closure_130_2.body.integration_installed, preview_ready: closure_130_2.body.preview_ready, has_activity: closure_130_2.body.has_activity, owner_authorization_revoked: closure_130_2.body.owner_authorization_revoked });
      closure_131_1(closure_131_2[3]);
    }
    return closure_130_2;
  })();
};
let closure_13 = async function _createProject(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          let body;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.VIBEGRATIONS_PROJECTS, body: null, rejectWithError: false };
          const obj4 = { flags: VibegrationsTypes.VibegrationsProjectFlags.PUBLIC };
          const merged = Object.assign(closure_0);
          request.body = obj4;
          c5 = 2;
          c6 = 1;
          const obj7 = { value: HTTP.post(request), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        const result = closure_130_0(closure_130_2[8]).classifyCreateFailure(closure_129_1);
        const obj5 = closure_130_0(closure_130_2[8]);
        const vibegrationsCreateError = new closure_130_0(closure_130_2[8]).VibegrationsCreateError(result, closure_130_0(closure_130_2[8]).createFailureStatus(closure_129_1));
        throw vibegrationsCreateError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        body = value.body;
        c4 = 0;
        const obj9 = { type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: body };
        closure_130_1(closure_130_2[3]).dispatch(obj9);
        c6 = 3;
        const obj10 = { value: body.id, done: true };
        return obj10;
      }
    } catch (tmp34) {
      closure_3 = tmp34;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp34;
      } else {
        c5 = tmp;
      }
    }
  }
};
function patchProject() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _patchProject(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp2;
    closure_2 = tmp5;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.VIBEGRATIONS_PROJECT(closure_0), body, rejectWithError: false };
    await HTTP.patch(request);
    closure_130_0 = value;
    if (closure_130_0.ok) {
      closure_131_1(closure_131_2[3]).dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: closure_130_0.body });
      closure_131_1(closure_131_2[3]);
    }
    return closure_130_0;
  })();
};
let closure_16 = async function _setProjectIcon(arg0) {
  closure_0 = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            const obj5 = { icon };
            c5 = 1;
            c6 = 1;
            const obj6 = { value: patchProject(closure_0, obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_130_0 = value;
              if (closure_130_0.ok) {
                closure_130_1 = closure_130_0.body.preview_application_id;
                if (null != closure_130_1) {
                  c4 = 1;
                  c5 = 3;
                  c6 = 1;
                  const obj8 = { value: closure_131_0(closure_131_2[9]).fetchApplication(closure_130_1), done: false };
                  return obj8;
                }
              }
            }
          } else {
            if (2 === tmp7) {
              c4 = 0;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
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
};
let closure_17 = async function _deleteProject() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  closure_129_0 = closure_0;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.del({ url: Endpoints.VIBEGRATIONS_PROJECT(closure_0), rejectWithError: false });
  closure_129_1 = value;
  closure_130_1(closure_130_2[3]).dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: closure_129_0 });
  return closure_129_1;
};
let closure_18 = async function _refreshPublishedProject(arg0, arg1) {
  closure_0 = arg0;
  let isPreview = arg1;
  c4 = 0;
  c5 = 0;
  let iter = (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp5;
            closure_2 = tmp2;
            let isPreview2;
            closure_130_0 = closure_0;
            isPreview2 = isPreview.isPreview;
            let body;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            let project;
            closure_130_6 = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c4 = 2;
            c5 = 1;
            const obj8 = { value: closure_131_11(closure_130_0), done: false };
            return obj8;
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              body = value.body;
              closure_130_3 = body.bot_permissions_changed;
              closure_130_4 = body.integration_installed;
              project = body.project;
              if (isPreview2) {
                let application_id = tmp54.preview_application_id;
              } else {
                application_id = tmp54.application_id;
              }
              closure_130_6 = application_id;
              if (null != closure_130_6) {
                c4 = 3;
                c5 = 1;
                const obj10 = { value: closure_131_0(closure_131_2[9]).fetchApplication(closure_130_6), done: false };
                return obj10;
              } else {
                const obj11 = { isPreview: isPreview2 };
                const result = closure_131_0(closure_131_2[4]).trackVibegrationDeployed(closure_130_0, obj11);
                c5 = 3;
                const obj5 = closure_131_0(closure_131_2[4]);
              }
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              const widgetConfigs = closure_131_0(closure_131_2[10]).fetchWidgetConfigs(closure_130_6, { force: true });
              c4 = 4;
              c5 = 1;
              const obj13 = {
                value: widgetConfigs.catch(() => {

                          }),
                done: false
              };
              return obj13;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            let tmp8 = !isPreview2;
            if (isPreview2) {
              let tmp10 = closure_130_4;
              if (closure_130_4) {
                tmp10 = !closure_130_3;
              }
              tmp8 = tmp10;
            }
            if (tmp8) {
              closure_131_6(closure_130_6);
            }
          }
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp43) {
        c5 = tmp;
        throw tmp43;
      }
    }
  })();
  iter.next();
  return iter;
};
const Endpoints = fn(1074).Endpoints;
let c7 = null;
let c8 = null;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/actions/VibegrationsActionCreators.tsx");

export const trackPublishFailed = function trackPublishFailed(projectId, message, isPreview) {
  const obj2 = { location: "publish", code: VibegrationsAnalytics.VibegrationErrorCodes.PUBLISH_FAILED, message: null, details: null, isPreview: null };
  let str = "";
  if (isPreview) {
    str = "-preview";
  }
  obj2.message = "publish" + str + " failed";
  obj2.details = message;
  obj2.isPreview = isPreview;
  const result = VibegrationsAnalytics.trackVibegrationErrored(projectId, obj2);
};
export { reloadVibegrationsAppFrames };
export const reloadVibegrationsProjectFrames = function reloadVibegrationsProjectFrames(arg0) {
  const project = VibegrationsProjectStore.getProject(arg0);
  if (null != project) {
    VibegrationsPlatformUtilsDefault.reloadAppFrames(project.application_id);
    let prop = project.preview_application_id;
    if (prop == null) {
      prop = null;
    }
    VibegrationsPlatformUtilsDefault.reloadAppFrames(prop);
    const tmp2Result = VibegrationsPlatformUtilsDefault;
  }
};
export { listProjects };
export { getProject };
export const createProject = function createProject() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const renameProject = function renameProject(projectId, name) {
  return patchProject(projectId, { name });
};
export const updateProjectSettings = function updateProjectSettings(projectId, arg1) {
  return patchProject(projectId, arg1);
};
export const setProjectIcon = function setProjectIcon() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setGuildHints = function setGuildHints(id, arg1) {
  return patchProject(id, arg1);
};
export const deleteProject = function deleteProject() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(guildId, projectId) {
  DispatcherDefault.dispatch({ type: "VIBEGRATIONS_PROJECT_SELECT", guildId, projectId });
};
export const refreshPublishedProject = function refreshPublishedProject() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setComposerDraft = function setComposerDraft(projectId, draft) {
  DispatcherDefault.dispatch({ type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId, draft });
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  DispatcherDefault.dispatch({ type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width });
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  DispatcherDefault.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId });
};
export const setBuilderPreviewMobile = function setBuilderPreviewMobile(enabled) {
  DispatcherDefault.dispatch({ type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled });
};
export const markLogsSeen = function markLogsSeen(projectId) {
  DispatcherDefault.dispatch({ type: "VIBEGRATIONS_LOGS_SEEN", projectId });
};