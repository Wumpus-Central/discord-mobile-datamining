// discord_app/modules/conjure/projects/ConjureActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ReadStateConstants from "../../read_states/ReadStateConstants.tsx";
import ConjureTypes from "../ConjureTypes.tsx";
import ConjureAnalytics from "../shared/ConjureAnalytics.tsx";
import ConjurePlatformUtilsDefault from "../shared/ConjurePlatformUtils.native.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureProjectStore from "ConjureProjectStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c7, closure_10, closure_11, closure_17, currentUser, projectsFetchState, resourceIds;

function reloadConjureAppFrames(application_id) {
  obj = ConjurePlatformUtilsDefault;
  obj.reloadAppFrames(application_id);
}
function listProjects() {
  return obj(...arguments);
}
let obj = function _listProjects() {
  obj = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let tmp44;
      function forgetMissingProjects() {
        return closure_1_15(...arguments);
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              guildId = undefined;
              body = undefined;
              closure_2 = undefined;
              if (guildId == null) {
                guildId = null;
              }
              projectsFetchState = projectsFetchState.getProjectsFetchState();
              let type;
              if (projectsFetchState != null) {
                type = projectsFetchState.type;
              }
              if ("loading" !== type) {
                closure_10 = tmp32;
                const obj5 = { type: "CONJURE_PROJECTS_FETCH_START", guildId };
                const obj6 = DispatcherDefault;
                obj6.dispatch(obj5);
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const request = { url: constants.CONJURE_PROJECTS, query: tmp44, rejectWithError: true };
                tmp44 = undefined;
                const get = HTTP.get;
                if (null != guildId) {
                  tmp44 = { guild_id: guildId };
                  const obj7 = { guild_id: guildId };
                }
                c5 = 2;
                c6 = 1;
                const obj8 = { value: get(request), done: false };
                return obj8;
              } else {
                const tmp36 = null != tmp32 && tmp32 !== closure_10;
                if (tmp36) {
                  closure_11 = tmp32;
                }
              }
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj9 = { type: "CONJURE_PROJECTS_FETCH_FAIL", guildId };
              const obj4 = closure_131_1(closure_131_2[6]);
              obj4.dispatch(obj9);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              body = value.body;
              const obj11 = { type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: body, guildId };
              obj = closure_131_1(closure_131_2[6]);
              obj.dispatch(obj11);
              forgetMissingProjects();
              c4 = 0;
            }
            closure_2 = c11;
            c11 = null;
            const tmp23 = null != closure_2 && closure_2 !== guildId;
            if (tmp23) {
              closure_131_12(closure_2);
            }
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp45) {
          if (0 === c4) {
            c6 = 3;
            throw tmp45;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _forgetMissingProjects() {
  obj = _asyncToGenerator(async () => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let closure_2;
        let c0;
        let closure_1;
        let closure_0;
        c7 = 2;
        let tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            closure_2 = tmp4;
            c0 = undefined;
            closure_1 = undefined;
            let tmp59 = c14;
            if (!tmp59) {
              c14 = true;
              resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
              closure_0 = resourceIds[Symbol.iterator]();
              if (closure_0 !== undefined) {
                let c5 = 1;
                c0 = tmp36;
                if (null == closure_131_6.getProject(c0)) {
                  if (0 !== closure_131_4.getMentionCount(c0, closure_131_8.CONJURING_PROJECT)) {
                    let obj5 = closure_131_0(closure_131_2[10]);
                    let _Math = Math;
                    c6 = 2;
                    c7 = 1;
                    let obj6 = { value: obj5.sleep(5000 * Math.random()), done: false };
                    return obj6;
                  } else {
                    let tmp46 = closure_131_16(c0);
                  }
                }
              }
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === tmp4) {
          c5 = 0;
          closure_0.return();
          throw closure_1_4;
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0.return();
            c7 = 3;
            let obj7 = { value, done: true };
            return obj7;
          } else if (null == closure_131_6.getProject(c0)) {
            c5 = 2;
            c6 = 4;
            c7 = 1;
            let obj8 = { value: closure_131_19(c0), done: false };
            return obj8;
          }
        } else if (3 === tmp4) {
          c5 = 1;
          closure_2 = closure_1_4;
          let obj2 = closure_131_0(closure_131_2[11]);
          closure_1 = obj2.createFailureStatus(closure_2);
          let tmp14 = 403 !== closure_1;
          if (tmp14) {
            tmp14 = 404 !== closure_1;
          }
          if (!tmp14) {
            let tmp21 = closure_131_16(c0);
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_0.return();
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 1;
        }
        c5 = 0;
      }
    }
  });
  return obj(...arguments);
};
function forgetProject(projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId };
  obj.dispatch(obj2);
}
obj = function _fetchProjectLimit() {
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        let max_projects;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            max_projects = undefined;
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            let c0 = id;
            if (id == null) {
              c0 = null;
            }
            closure_0 = c0;
            if (null != c0) {
              if (closure_17 !== c0) {
                if (!ConjureProjectStore.hasFetchedProjectLimit()) {
                  closure_17 = tmp16;
                  max_projects = null;
                  c3 = 1;
                  const HTTP = HTTPUtils.HTTP;
                  const obj4 = { url: constants.CONJURE_PROJECT_LIMIT, rejectWithError: true };
                  c4 = 2;
                  c5 = 1;
                  const obj5 = { value: HTTP.get(obj4), done: false };
                  return obj5;
                }
              }
            }
          }
        } else {
          if (1 === c4) {
            c3 = 0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            max_projects = value.body.max_projects;
            c3 = 0;
          }
          if (c17 === closure_0) {
            c17 = null;
          }
          const currentUser1 = currentUser.getCurrentUser();
          let id1;
          if (currentUser1 != null) {
            id1 = currentUser1.id;
          }
          if (id1 === closure_0) {
            const obj7 = { type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: max_projects };
            const obj6 = closure_130_1(closure_130_2[6]);
            obj6.dispatch(obj7);
          }
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp21) {
        if (0 === c3) {
          c5 = 3;
          throw tmp21;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function getProject() {
  return obj(...arguments);
}
obj = function _getProject() {
  obj = _asyncToGenerator(async (arg0, signal) => {
    let closure_3;
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let aborted;
      function updateIntegrationStatus(projectId, integrationStatus) {
        obj = signal(closure_1_2[6]);
        const obj2 = { type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus };
        obj.dispatch(obj2);
      }
      value = tmp;
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: Endpoints.CONJURE_PROJECT(closure_0), rejectWithError: false, signal };
      await get(obj4);
      if (signal != null) {
        aborted = signal.aborted;
      }
      const ok = true !== aborted && value.ok;
      if (ok) {
        obj = closure_131_1(closure_131_2[6]);
        const obj7 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: value.body.project };
        obj.dispatch(obj7);
        const obj8 = {
          bot_permissions_changed: value.body.bot_permissions_changed,
          integration_installed: value.body.integration_installed,
          preview_ready: value.body.preview_ready,
          has_activity: value.body.has_activity,
          owner_authorization_revoked: value.body.owner_authorization_revoked,
        };
        updateIntegrationStatus(closure_0, obj8);
      }
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _createProject() {
  obj = _asyncToGenerator(async function (arg0) {
    let obj4;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        let body;
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
            let closure_2 = tmp;
            closure_1 = tmp4;
            body = undefined;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.CONJURE_PROJECTS, body: obj4, rejectWithError: false };
            obj4 = { flags: ConjureTypes.ConjureProjectFlags.PUBLIC };
            const post = HTTP.post;
            const merged = Object.assign(closure_0);
            c5 = 2;
            c6 = 1;
            const obj7 = { value: post(request), done: false };
            return obj7;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_1 = closure_3;
          const ConjureCreateError = closure_130_0(closure_130_2[11]).ConjureCreateError;
          const obj5 = closure_130_0(closure_130_2[11]);
          const result = obj5.classifyCreateFailure(closure_1);
          const self = this;
          const self2 = this;
          const obj6 = closure_130_0(closure_130_2[11]);
          const conjureCreateError = new ConjureCreateError(result, obj6.createFailureStatus(closure_1));
          throw conjureCreateError;
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
          const obj9 = { type: "CONJURE_PROJECT_CREATE_SUCCESS", project: body };
          obj = closure_130_1(closure_130_2[6]);
          obj.dispatch(obj9);
          c6 = 3;
          const obj10 = { value: body.id, done: true };
          return obj10;
        }
      } catch (tmp29) {
        closure_3 = tmp29;
        if (0 === c4) {
          c6 = 3;
          throw tmp29;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function patchProject() {
  return obj(...arguments);
}
obj = function _patchProject() {
  obj = _asyncToGenerator(async (value, body) => {
    let closure_2;
    let closure_3;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.CONJURE_PROJECT(value), body, rejectWithError: false };
      const patch = HTTP.patch;
      await patch(request);
      if (value.ok) {
        const obj6 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: value.body };
        obj = closure_131_1(closure_131_2[6]);
        obj.dispatch(obj6);
      }
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _setProjectIcon() {
  obj = _asyncToGenerator(async (value, icon) => {
    let closure_2;
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj3;
      const obj5 = { icon };
      await patchProject(value, obj5);
      if (1 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          return { value, done: true };
        } else if (value.ok) {
          const preview_application_id = value.body.preview_application_id;
          if (null != preview_application_id) {
            c4 = 1;
            c5 = 3;
            c6 = 1;
            const obj8 = { value: obj3.fetchApplication(preview_application_id), done: false };
            obj3 = closure_131_0(closure_131_2[13]);
            return obj8;
          }
        }
      } else if (2 === c5) {
        c4 = 0;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        return { value, done: true };
      } else {
        c4 = 0;
      }
      return value;
    })();
  });
  return obj(...arguments);
};
function deleteProject() {
  return obj(...arguments);
}
obj = function _deleteProject() {
  obj = _asyncToGenerator(async (projectId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              value = undefined;
              const obj5 = { type: "CONJURE_PROJECT_DELETE_START", projectId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c5 = 2;
              c6 = 1;
              const obj6 = { url: Endpoints.CONJURE_PROJECT(projectId), rejectWithError: false };
              const obj7 = { value: del(obj6), done: false };
              return obj7;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj8 = { type: "CONJURE_PROJECT_DELETE_FAIL", projectId };
            const obj4 = closure_130_1(closure_130_2[6]);
            obj4.dispatch(obj8);
            throw closure_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            let str = "CONJURE_PROJECT_DELETE_FAIL";
            const dispatch = closure_130_1(closure_130_2[6]).dispatch;
            closure_130_1(closure_130_2[6]);
            if (value.ok) {
              str = "CONJURE_PROJECT_DELETE_SUCCESS";
            }
            obj = { type: str, projectId };
            dispatch(obj);
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp23) {
          closure_3 = tmp23;
          if (0 === c4) {
            c6 = 3;
            throw tmp23;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _refreshPublishedProject() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    let isPreview = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let application_id;
      let bot_permissions_changed;
      let integration_installed;
      let obj7;
      await closure_131_19(closure_0);
      if (2 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else {
          const body = value.body;
          bot_permissions_changed = body.bot_permissions_changed;
          integration_installed = body.integration_installed;
          const project = body.project;
          if (isPreview) {
            application_id = tmp52.preview_application_id;
          } else {
            application_id = tmp52.application_id;
          }
          if (null != application_id) {
            c4 = 3;
            c5 = 1;
            const obj10 = { value: obj7.fetchApplication(application_id), done: false };
            obj7 = closure_131_0(closure_131_2[13]);
            return obj10;
          }
        }
      } else if (3 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          return { value, done: true };
        } else {
          const obj2 = closure_131_0(closure_131_2[14]);
          const widgetConfigs = obj2.fetchWidgetConfigs(application_id, { force: true });
          c4 = 4;
          c5 = 1;
          const obj12 = {
            value: widgetConfigs.catch(() => {}),
            done: false,
          };
          return obj12;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        return { value, done: true };
      } else {
        let tmp7 = !isPreview;
        if (!tmp7) {
          tmp7 = integration_installed && !bot_permissions_changed;
          const tmp9 = integration_installed && !bot_permissions_changed;
        }
        if (tmp7) {
          closure_131_9(application_id);
        }
      }
      const obj13 = { isPreview };
      const obj5 = closure_131_0(closure_131_2[7]);
      obj5.trackConjureDeployed(closure_0, obj13);
      await "IconComponent";
      isPreview = isPreview.isPreview;
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let c10 = null;
let c11 = null;
let c14 = false;
let c17 = null;
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureActionCreators.tsx");

export const trackPublishFailed = function trackPublishFailed(projectId, message, isPreview) {
  let str;
  const tmp = ConjureAnalytics;
  const trackConjureErrored = tmp.trackConjureErrored;
  obj = {
    location: "publish",
    code: ConjureAnalytics.ConjureErrorCodes.PUBLISH_FAILED,
    message: "publish" + str + " failed",
    details: message,
    isPreview,
  };
  str = "";
  if (isPreview) {
    str = "-preview";
  }
  trackConjureErrored(projectId, obj);
};
export { reloadConjureAppFrames };
export const reloadConjureProjectFrames = function reloadConjureProjectFrames(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
  if (null != project) {
    const application_id = project.application_id;
    obj = ConjurePlatformUtilsDefault;
    obj.reloadAppFrames(application_id);
    let prop = project.preview_application_id;
    if (prop == null) {
      prop = null;
    }
    const tmp2Result = ConjurePlatformUtilsDefault;
    tmp2Result.reloadAppFrames(prop);
  }
};
export { listProjects };
export const fetchProjectLimit = function fetchProjectLimit() {
  return obj(...arguments);
};
export { getProject };
export const createProject = function createProject() {
  return obj(...arguments);
};
export const renameProject = function renameProject(projectId, name) {
  obj = { name };
  return patchProject(projectId, obj);
};
export const updateProjectSettings = function updateProjectSettings(first2, arg1) {
  return patchProject(first2, arg1);
};
export const setProjectIcon = function setProjectIcon() {
  return obj(...arguments);
};
export const setGuildHints = function setGuildHints(first2, arg1) {
  return patchProject(first2, arg1);
};
export { deleteProject };
export const deleteProjectInBackground = function deleteProjectInBackground(id, arg1) {
  let closure_0 = arg1;
  const promise = deleteProject(id);
  promise.then((ok) => {
    if (!ok.ok) {
      closure_0();
    }
  }, arg1);
};
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(guildId, projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_SELECT", guildId, projectId };
  obj.dispatch(obj2);
};
export const refreshPublishedProject = function refreshPublishedProject() {
  return obj(...arguments);
};
export const setComposerDraft = function setComposerDraft(projectId, draft) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_COMPOSER_DRAFT_SET", projectId, draft };
  obj.dispatch(obj2);
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width };
  obj.dispatch(obj2);
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_APPLICATION_SET", applicationId };
  obj.dispatch(obj2);
};
export const setBuilderPreviewMobile = function setBuilderPreviewMobile(enabled) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_MOBILE_SET", enabled };
  obj.dispatch(obj2);
};
export const setBuilderPreviewLandscape = function setBuilderPreviewLandscape(landscape) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_BUILDER_PREVIEW_LANDSCAPE_SET", landscape };
  obj.dispatch(obj2);
};
export const markLogsSeen = function markLogsSeen(projectId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_LOGS_SEEN", projectId };
  obj.dispatch(obj2);
};
