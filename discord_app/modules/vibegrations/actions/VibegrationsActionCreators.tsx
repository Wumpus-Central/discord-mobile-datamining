// === Module 5689: trackPublishFailed ===

// Module 5689 (trackPublishFailed)
import _launchFrameOnNative from "_launchFrameOnNative";
import map from "map";
import handleProjectUpsert from "handleProjectUpsert";
import { Endpoints } from "ME";

const require = arg1;
function trackPublishFailed(project_id) {
  let obj = require(5697) /* vibegrationLocation */;
  obj = { location: "publish", code: require(5697) /* vibegrationLocation */.VibegrationErrorCodes.PUBLISH_FAILED, message: null, details: null, isPreview: null };
  let str = "";
  if (arg2) {
    str = "-preview";
  }
  obj[2] = "publish" + str + " failed";
  obj[3] = "HTTP " + arg1;
  obj[4] = arg2;
  const result = obj.trackVibegrationErrored(project_id, obj);
}
function reloadActivityIfRunning(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    connectedFrame = connectedFrame.getConnectedFrame();
    let applicationId;
    if (connectedFrame != null) {
      applicationId = connectedFrame.applicationId;
    }
    tmp = applicationId === arg0;
  }
  if (tmp) {
    let obj = importDefault(5698);
    obj = { applicationId: null };
    obj[0] = arg0;
    obj.refreshProxyTicket(obj);
  }
}
function _listProjects() {
  const self = this;
  const tmp = callback(function*() {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            let body = tmp7;
            body = undefined;
            const projectsFetchState = outer1_5.getProjectsFetchState();
            let type;
            if (projectsFetchState != null) {
              type = projectsFetchState.type;
            }
            if ("loading" !== type) {
              let obj4 = outer1_1(709);
              obj4.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_START" });
              let dependencyMap = 1;
              const HTTP = outer1_0(530).HTTP;
              const obj1 = { url: null, rejectWithError: true };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECTS;
              c3 = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            let obj3 = callback(709);
            obj3.dispatch({ type: "VIBEGRATIONS_PROJECTS_FETCH_FAIL" });
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            body = arg1.body;
            obj = callback(709);
            obj3 = { type: "VIBEGRATIONS_PROJECTS_FETCH_SUCCESS", projects: null };
            obj3[1] = body;
            obj.dispatch(obj3);
            dependencyMap = 0;
          }
          dependencyMap = 0;
          c4 = 3;
          obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        }
        c4 = 3;
      } catch (tmp25) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp25;
        } else {
          c3 = tmp;
        }
      }
    }
  });
  const _listProjects = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const table = tmp2;
              const callback2 = tmp5;
              body = undefined;
              const HTTP = callback(outer1_2[7]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECTS;
              obj1[1] = body;
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            obj = callback2(table[6]);
            const obj4 = { type: "VIBEGRATIONS_PROJECT_CREATE_SUCCESS", project: null };
            obj4[1] = body;
            obj.dispatch(obj4);
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body.id;
            return obj5;
          }
        } catch (tmp17) {
          c4 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  const _createProject = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _renameProject() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _launchFrameOnNative = tmp2;
              const table = tmp5;
              let lib;
              const HTTP = lib(outer1_2[7]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECT(lib);
              const obj2 = { name: null };
              obj2[0] = callback;
              obj1[1] = obj2;
              c4 = 1;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            lib = arg1;
            if (lib.ok) {
              obj = callback(table[6]);
              const obj5 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: null };
              obj5[1] = lib.body;
              obj.dispatch(obj5);
            }
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = lib;
            return obj6;
          }
        } catch (tmp15) {
          c5 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  const _renameProject = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setGuildHints() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _launchFrameOnNative = tmp2;
              const table = tmp5;
              let lib;
              const HTTP = lib(outer1_2[7]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECT(lib);
              obj1[1] = callback;
              c4 = 1;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.patch(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            if (lib.ok) {
              obj = callback(table[6]);
              const obj4 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: null };
              obj4[1] = lib.body;
              obj.dispatch(obj4);
            }
            c5 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = lib;
            return obj5;
          }
        } catch (tmp15) {
          c5 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  const _setGuildHints = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp2;
              let lib = tmp5;
              lib = undefined;
              const HTTP = callback(outer1_2[7]).HTTP;
              const obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECT(callback);
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            if (lib.ok) {
              obj = lib(table[6]);
              const obj4 = { type: "VIBEGRATIONS_PROJECT_DELETE_SUCCESS", projectId: null };
              obj4[1] = callback;
              obj.dispatch(obj4);
            }
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = lib;
            return obj5;
          }
        } catch (tmp19) {
          c4 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  const _deleteProject = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _publishProject() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (project === 2) {
        project = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          project = 2;
          if (0 === application) {
            if (arg0 === 1) {
              project = 3;
              throw arg1;
            } else if (arg0 === 2) {
              project = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp3;
              let lib = tmp2;
              lib = undefined;
              body = undefined;
              application = undefined;
              project = undefined;
              const HTTP = callback(outer1_2[7]).HTTP;
              let obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_6.VIBEGRATIONS_PROJECT_PUBLISH(callback);
              application = 1;
              project = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            project = 3;
            throw arg1;
          } else if (arg0 === 2) {
            project = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            if (lib.ok) {
              body = lib.body;
              application = body.application;
              project = body.project;
              obj1 = lib(body[6]);
              const obj4 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: null };
              obj4[1] = project;
              obj1.dispatch(obj4);
              obj3 = lib(body[6]);
              let obj5 = { type: "APPLICATION_FETCH_SUCCESS", application: null, isHydrated: true };
              obj5[1] = application;
              obj3.dispatch(obj5);
              callback3(application.id);
              obj5 = callback(body[4]);
              const result = obj5.trackVibegrationDeployed(callback, { isPreview: false });
              project = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = lib;
              return obj6;
            } else {
              callback2(callback, lib.status, false);
              project = 3;
              obj = { value: null, done: true };
              obj[0] = lib;
              return obj;
            }
          }
        } catch (tmp28) {
          project = tmp;
          throw tmp28;
        }
      }
    })();
  });
  const _publishProject = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _publishPreviewProject() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      if (project === 2) {
        project = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          project = 2;
          if (0 === application) {
            if (arg0 === 1) {
              project = 3;
              throw arg1;
            } else if (arg0 === 2) {
              project = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp5;
              let closure_2 = tmp2;
              let flag2;
              let obj1 = flag2;
              if (flag2 === undefined) {
                obj1 = {};
              }
              flag2 = obj1.countAsDeploy;
              if (flag2 === undefined) {
                flag2 = true;
              }
              closure_2 = undefined;
              body = undefined;
              application = undefined;
              project = undefined;
              application = 1;
              project = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              project = 3;
              throw arg1;
            } else if (arg0 === 2) {
              project = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              const HTTP = callback(closure_2[7]).HTTP;
              let obj3 = { url: null, rejectWithError: false };
              obj3[0] = closure_6.VIBEGRATIONS_PROJECT_PUBLISH_PREVIEW(callback);
              application = 2;
              project = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj3);
              return obj4;
            }
          } else if (arg0 === 1) {
            project = 3;
            throw arg1;
          } else if (arg0 === 2) {
            project = 3;
            let obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_2 = arg1;
            if (closure_2.ok) {
              body = closure_2.body;
              application = body.application;
              project = body.project;
              obj1 = flag2(closure_2[6]);
              const obj6 = { type: "VIBEGRATIONS_PROJECT_UPDATE_SUCCESS", project: null };
              obj6[1] = project;
              obj1.dispatch(obj6);
              obj3 = flag2(closure_2[6]);
              const obj7 = { type: "APPLICATION_FETCH_SUCCESS", application: null, isHydrated: true };
              obj7[1] = application;
              obj3.dispatch(obj7);
              callback3(application.id);
              if (flag2) {
                obj5 = callback(closure_2[4]);
                const result = obj5.trackVibegrationDeployed(callback, { isPreview: true });
              }
              project = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = closure_2;
              return obj8;
            } else {
              callback2(callback, closure_2.status, true);
              project = 3;
              obj = { value: null, done: true };
              obj[0] = closure_2;
              return obj;
            }
          }
        } catch (tmp38) {
          project = tmp;
          throw tmp38;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _publishPreviewProject = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("handleProjectUpsert").fileFinishedImporting("modules/vibegrations/actions/VibegrationsActionCreators.tsx");

export const listProjects = function listProjects() {
  const self = this;
  const apply = _listProjects.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createProject = function createProject() {
  const self = this;
  const apply = _createProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const renameProject = function renameProject() {
  const self = this;
  const apply = _renameProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setGuildHints = function setGuildHints() {
  const self = this;
  const apply = _setGuildHints.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
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
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(guildId, projectId) {
  let obj = importDefault(709);
  obj = { type: "VIBEGRATIONS_PROJECT_SELECT", guildId, projectId };
  obj.dispatch(obj);
};
export const publishProject = function publishProject() {
  const self = this;
  const apply = _publishProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const publishPreviewProject = function publishPreviewProject(closure_0, arg1) {
  const self = this;
  const apply = _publishPreviewProject.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  let obj = importDefault(709);
  obj = { type: "VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET", width };
  obj.dispatch(obj);
};
export const setBuilderPreviewApplicationId = function setBuilderPreviewApplicationId(applicationId) {
  let obj = importDefault(709);
  obj = { type: "VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET", applicationId };
  obj.dispatch(obj);
};