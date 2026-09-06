// discord_app/modules/vibegrations/actions/VibegrationsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import VibegrationsTypes from "../VibegrationsTypes.tsx";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import VibegrationsAnalytics from "../lib/VibegrationsAnalytics.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import FramesStore from "../../frames/FramesStore.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

require = fn;
function reloadVibegrationsAppFrames(application_id) {
  if (null != application_id) {
    const allFrames = FramesStore.getAllFrames();
    for (const item10005 of allFrames) {
      let tmp2 = item10005;
      let tmp4 = isLaunched(item10005);
      if (tmp4) {
        tmp4 = tmp2.applicationId === arg0;
      }
      if (tmp4) {
        tmp4 = !tmp2.data.proxyTicketRefreshing;
      }
      if (tmp4) {
        let obj = FramesActionCreatorsDefault;
        let refreshProxyTicketResult = obj.refreshProxyTicket(tmp2.id);
      }
      continue;
    }
  }
}
function listProjects() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _listProjects(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp20;
          closure_130_0 = undefined;
          let body;
          closure_130_2 = undefined;
          c1 = closure_0;
          if (closure_0 == null) {
            c1 = null;
          }
          closure_130_0 = c1;
          projectsFetchState = projectsFetchState.getProjectsFetchState();
          let type;
          if (projectsFetchState != null) {
            type = projectsFetchState.type;
          }
          if ("loading" !== type) {
            closure_9 = tmp30;
            let obj4 = DispatcherDefault;
            obj4.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.VIBEGRATIONS_PROJECTS, query: null, rejectWithError: true };
            let tmp41;
            if (null != tmp48) {
              const obj1 = { guild_id: tmp48 };
              tmp41 = obj1;
            }
            request.query = tmp41;
            c5 = 2;
            c6 = 1;
            const obj2 = { value: HTTP.get(request), done: false };
            return obj2;
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
          let obj3 = closure_131_1(closure_131_2[5]);
          obj3.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj3 = { value, done: true };
          return obj3;
        } else {
          body = value.body;
          obj = closure_131_1(closure_131_2[5]);
          obj4 = { type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: body, guildId: closure_130_0 };
          obj.dispatch(obj4);
          c4 = 0;
        }
        tmp20 = closure_3;
        closure_130_2 = closure_131_10;
        closure_131_10 = null;
        let tmp23 = null != closure_130_2;
        if (tmp23) {
          tmp20 = closure_130_0;
          tmp23 = closure_130_2 !== closure_130_0;
        }
        if (tmp23) {
          tmp20 = closure_131_11;
          closure_131_11(closure_130_2);
        }
      }
      c6 = 3;
    } catch (tmp42) {
      tmp20 = c4;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp42;
      } else {
        c5 = tmp;
      }
    }
  }
};
function getProject() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _getProject(arg0, signal) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    closure_2 = tmp2;
    closure_130_0 = closure_0;
    closure_130_1 = signal;
    const HTTP = HTTPUtils.HTTP;
    closure_130_2 = await HTTP.get({ url: Endpoints.VIBEGRATIONS_PROJECT(closure_0), rejectWithError: false, signal });
    if (closure_130_1 != null) {
      const aborted = closure_130_1.aborted;
    }
    let ok = true !== aborted;
    if (ok) {
      ok = closure_130_2.ok;
    }
    if (ok) {
      closure_131_1(closure_131_2[5]).dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: closure_130_2.body.project });
      (function updateIntegrationStatus(projectId, integrationStatus) {
        signal(closure_1_2[5]);
        const obj = { type: "VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus };
        obj.dispatch(obj);
      })(closure_130_0, { bot_permissions_changed: closure_130_2.body.bot_permissions_changed, integration_installed: closure_130_2.body.integration_installed, preview_ready: closure_130_2.body.preview_ready, has_activity: closure_130_2.body.has_activity, owner_authorization_revoked: closure_130_2.body.owner_authorization_revoked });
      closure_131_1(closure_131_2[5]);
    }
    return closure_130_2;
  })();
};
let closure_15 = async function _createProject() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.VIBEGRATIONS_PROJECTS, body: null, rejectWithError: false };
  const merged = Object.assign(closure_0);
  request.body = { flags: VibegrationsTypes.VibegrationsProjectFlags.PUBLIC };
  await HTTP.post(request);
  const body = arg1.body;
  { flags: VibegrationsTypes.VibegrationsProjectFlags.PUBLIC };
  closure_130_1(closure_130_2[5]).dispatch({ type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: body });
  return body.id;
};
function patchProject() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _patchProject(arg0, body) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp2;
    closure_2 = tmp5;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.VIBEGRATIONS_PROJECT(closure_0), body, rejectWithError: false };
    closure_130_0 = await HTTP.patch(request);
    if (closure_130_0.ok) {
      closure_131_1(closure_131_2[5]).dispatch({ type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: closure_130_0.body });
      closure_131_1(closure_131_2[5]);
    }
    return closure_130_0;
  })();
};
let closure_18 = async function _setProjectIcon(arg0, icon) {
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
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            let obj1 = { icon };
            c5 = 1;
            c6 = 1;
            const obj2 = { value: patchProject(closure_0, obj1), done: false };
            return obj2;
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_130_0 = value;
              if (closure_130_0.ok) {
                closure_130_1 = closure_130_0.body.preview_application_id;
                if (null != closure_130_1) {
                  c4 = 1;
                  obj1 = closure_131_0(closure_131_2[10]);
                  c5 = 3;
                  c6 = 1;
                  const obj4 = { value: obj1.fetchApplication(closure_130_1), done: false };
                  return obj4;
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
            obj = { value, done: true };
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
let closure_19 = async function _deleteProject() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  closure_129_0 = closure_0;
  const HTTP = HTTPUtils.HTTP;
  closure_129_1 = await HTTP.del({ url: Endpoints.VIBEGRATIONS_PROJECT(closure_0), rejectWithError: false });
  { url: Endpoints.VIBEGRATIONS_PROJECT(closure_0), rejectWithError: false };
  closure_130_1(closure_130_2[5]).dispatch({ type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: closure_129_0 });
  return closure_129_1;
};
let closure_20 = async function _refreshPublishedProject(arg0, arg1) {
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
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
            let obj1 = { value, done: true };
            return obj1;
          } else {
            c4 = 2;
            c5 = 1;
            const obj2 = { value: closure_131_13(closure_130_0), done: false };
            return obj2;
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
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
                let obj6 = closure_131_0(closure_131_2[10]);
                c4 = 3;
                c5 = 1;
                let obj4 = { value: obj6.fetchApplication(closure_130_6), done: false };
                return obj4;
              } else {
                obj4 = closure_131_0(closure_131_2[6]);
                const obj5 = { isPreview: isPreview2 };
                const result = obj4.trackVibegrationDeployed(closure_130_0, obj5);
                c5 = 3;
              }
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj6 = { value, done: true };
              return obj6;
            } else {
              obj1 = closure_131_0(closure_131_2[11]);
              const widgetConfigs = obj1.fetchWidgetConfigs(closure_130_6, { force: true });
              c4 = 4;
              c5 = 1;
              const obj7 = {
                value: widgetConfigs.catch(() => {

                          }),
                done: false
              };
              return obj7;
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
              closure_131_8(closure_130_6);
            }
          }
          c5 = 3;
          obj = { value, done: true };
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
const isLaunched = fn(9511).isLaunched;
let c9 = null;
let c10 = null;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/actions/VibegrationsActionCreators.tsx");

export const trackPublishFailed = function trackPublishFailed(projectId, message, isPreview) {
  const obj = { location: "publish", code: VibegrationsAnalytics.VibegrationErrorCodes.PUBLISH_FAILED, message: null, details: null, isPreview: null };
  let str = "";
  if (isPreview) {
    str = "-preview";
  }
  obj.message = "publish" + str + " failed";
  obj.details = message;
  obj.isPreview = isPreview;
  const result = obj.trackVibegrationErrored(projectId, obj);
};
export { reloadVibegrationsAppFrames };
export const reloadVibegrationsProjectFrames = function reloadVibegrationsProjectFrames(arg0) {
  const project = VibegrationsProjectStore.getProject(arg0);
  if (null != project) {
    reloadVibegrationsAppFrames(project.application_id);
    let prop = project.preview_application_id;
    if (prop == null) {
      prop = null;
    }
    reloadVibegrationsAppFrames(prop);
  }
};
export { listProjects };
export { getProject };
export const createProject = function createProject() {
  const self = this;
  const apply = closure_15.apply;
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
export const updateProjectSettings = function updateProjectSettings(first2, arg1) {
  return patchProject(first2, arg1);
};
export const setProjectIcon = function setProjectIcon() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setGuildHints = function setGuildHints(first2, arg1) {
  return patchProject(first2, arg1);
};
export const deleteProject = function deleteProject() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(guildId, projectId) {
  const obj = { type: "VIBEGRATIONS_PROJECT_SELECT", guildId, projectId };
  obj.dispatch(obj);
};
export const refreshPublishedProject = function refreshPublishedProject() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setComposerDraft = function setComposerDraft(projectId, draft) {
  const obj = { type: "VIBEGRATIONS_COMPOSER_DRAFT_SET", projectId, draft };
  obj.dispatch(obj);
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  const obj = { type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width };
  obj.dispatch(obj);
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  const obj = { type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId };
  obj.dispatch(obj);
};
export const setBuilderPreviewMobile = function setBuilderPreviewMobile(enabled) {
  const obj = { type: "VIBEGRATIONS_BUILDER_PREVIEW_MOBILE_SET", enabled };
  obj.dispatch(obj);
};
export const markLogsSeen = function markLogsSeen(projectId) {
  const obj = { type: "VIBEGRATIONS_LOGS_SEEN", projectId };
  obj.dispatch(obj);
};