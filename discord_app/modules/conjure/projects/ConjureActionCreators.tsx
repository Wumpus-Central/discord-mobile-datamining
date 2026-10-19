// discord_app/modules/conjure/projects/ConjureActionCreators.tsx
import BackoffDefault from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import conjureAppInServer from "conjureAppInServer.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore.tsx";
import ConjureProjectStore from "ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
function updateIntegrationStatus(projectId, integrationStatus) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus });
}
function listProjects() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _listProjects() {
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
              closure_13 = tmp37;
              const obj5 = { type: "CONJURE_PROJECTS_FETCH_START", guildId: tmp37 };
              DispatcherDefault.dispatch(obj5);
              c4 = 1;
              const HTTP = require("HTTPUtils").HTTP;
              const request = { url: constants.CONJURE_PROJECTS, query: null, rejectWithError: true };
              let tmp50;
              if (null != guild_id) {
                const obj7 = { guild_id };
                tmp50 = obj7;
              }
              request.query = tmp50;
              c5 = 2;
              c6 = 1;
              const obj8 = { value: HTTP.get(request), done: false };
              return obj8;
            } else {
              if (null != tmp37) {
                if (tmp37 !== closure_13) {
                  closure_14 = tmp37;
                }
              }
              let tmp42 = null == tmp37;
              if (tmp42) {
                tmp42 = null != closure_13;
              }
              if (tmp42) {
                c15 = true;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            const obj9 = { type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: closure_130_0 };
            closure_131_1(closure_131_2[8]).dispatch(obj9);
            const obj4 = closure_131_1(closure_131_2[8]);
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
            const obj11 = { type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: body, guildId: closure_130_0 };
            closure_131_1(closure_131_2[8]).dispatch(obj11);
            closure_131_15 = false;
            (function forgetMissingProjects() {
              const self = this;
              const apply = closure_1_19.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
            c4 = 0;
            const obj = closure_131_1(closure_131_2[8]);
          }
          closure_130_2 = closure_131_14;
          closure_131_14 = null;
          if (null == closure_130_2) {
            if (closure_131_15) {
              closure_131_15 = false;
              closure_131_16();
            }
          }
          closure_131_16(closure_130_2);
        }
        c6 = 3;
      } catch (tmp51) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp51;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_19 = async function _forgetMissingProjects() {
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
          closure_3 = tmp;
          closure_2 = tmp4;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          if (!c18) {
            c18 = true;
            resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
            _require = resourceIds[Symbol.iterator]();
            if (_require !== undefined) {
              c5 = 1;
              closure_130_0 = tmp36;
              if (null == closure_131_9.getProject(closure_130_0)) {
                let obj5 = closure_131_0(closure_131_2[10]);
                if (obj5.isConjureProjectUnread(closure_130_0)) {
                  let obj6 = closure_131_0(closure_131_2[11]);
                  let _Math = Math;
                  c6 = 2;
                  c7 = 1;
                  let obj7 = { value: obj6.sleep(5000 * Math.random()), done: false };
                  return obj7;
                } else {
                  let tmp46 = closure_131_20(closure_130_0);
                }
              }
            }
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } else if (1 === tmp4) {
        c5 = 0;
        _require.return();
        throw _objectWithoutProperties;
      } else if (2 === tmp4) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          _require.return();
          c7 = 3;
          let obj8 = { value, done: true };
          return obj8;
        } else if (null == closure_131_9.getProject(closure_130_0)) {
          c5 = 2;
          c6 = 4;
          c7 = 1;
          let obj9 = { value: closure_131_32(closure_130_0), done: false };
          return obj9;
        }
      } else if (3 === tmp4) {
        c5 = 1;
        closure_130_2 = _objectWithoutProperties;
        let obj2 = closure_131_0(closure_131_2[12]);
        closure_130_1 = obj2.createFailureStatus(closure_130_2);
        let tmp14 = 403 !== closure_130_1;
        if (tmp14) {
          tmp14 = 404 !== closure_130_1;
        }
        if (!tmp14) {
          let tmp21 = closure_131_20(closure_130_0);
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        _require.return();
        c7 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        c5 = 1;
      }
      c5 = 0;
    }
  }
};
function forgetProject(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId });
}
function drainMissingProjects() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_27 = async function _drainMissingProjects() {
  if (c7 === 2) {
    c7 = 3;
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
    while (true) {
      c7 = 2;
      let tmp5 = c6;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          c25 = true;
          closure_130_0 = [];
          closure_1 = dependencyMap;
          _require = dependencyMap[Symbol.iterator]();
          if (_require === undefined) {
            closure_131_25 = false;
            if (0 !== closure_130_0.length) {
              let failResult = closure_131_21.fail(() => {
                for (const item10005 of closure_1_0) {
                  let addResult = set.add(item10005);
                  continue;
                }
                if (!closure_2_25) {
                  closure_2_26();
                }
              });
            } else {
              let succeedResult = closure_131_21.succeed();
            }
            c7 = 3;
          } else {
            c5 = 1;
            closure_130_1 = tmp34;
            let deleteResult = closure_131_24.delete(closure_130_1);
            if (!closure_131_23.has(closure_130_1)) {
              let addResult = closure_131_23.add(closure_130_1);
              if (null == closure_131_9.getProject(closure_130_1)) {
                closure_130_2 = undefined;
                c5 = 2;
                c6 = 3;
                c7 = 1;
                let obj5 = { value: closure_131_32(closure_130_1), done: false };
                return obj5;
              }
            }
          }
        }
      } else if (1 === tmp5) {
        c5 = 0;
        _require.return();
        throw _objectWithoutProperties;
      } else {
        if (2 === tmp5) {
          c5 = 1;
          closure_130_3 = _objectWithoutProperties;
          let obj2 = closure_131_0(closure_131_2[12]);
          closure_130_2 = obj2.createFailureStatus(closure_130_3);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          _require.return();
          c7 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          closure_130_2 = 200;
          c5 = 1;
        }
        if (200 !== closure_130_2) {
          if (403 !== closure_130_2) {
            if (404 !== closure_130_2) {
              let deleteResult1 = closure_131_23.delete(closure_130_1);
              let arr = closure_130_0.push(closure_130_1);
            }
          }
          let tmp28 = closure_131_20(closure_130_1);
        }
      }
      c5 = 0;
    }
  }
};
let closure_29 = async function _fetchProjectLimit() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c5 = 2;
      let dispatchResult = c4;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_129_0 = undefined;
          let max_projects;
          currentUser = currentUser.getCurrentUser();
          id = undefined;
          if (currentUser != null) {
            id = currentUser.id;
          }
          c0 = id;
          if (id == null) {
            c0 = null;
          }
          closure_129_0 = c0;
          if (null != c0) {
            if (closure_28 !== tmp18) {
              if (!ConjureProjectStore.hasFetchedProjectLimit()) {
                closure_28 = tmp18;
                max_projects = null;
                c3 = 1;
                const HTTP = require("HTTPUtils").HTTP;
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
        if (1 === dispatchResult) {
          c3 = 0;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          max_projects = value.body.max_projects;
          c3 = 0;
        }
        if (closure_130_28 === closure_129_0) {
          closure_130_28 = null;
        }
        const currentUser1 = closure_130_7.getCurrentUser();
        let id1;
        if (currentUser1 != null) {
          id1 = currentUser1.id;
        }
        dispatchResult = closure_129_0;
        if (id1 === closure_129_0) {
          const obj7 = { type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: max_projects };
          dispatchResult = closure_130_1(closure_130_2[8]).dispatch(obj7);
          const obj6 = closure_130_1(closure_130_2[8]);
        }
      }
      c5 = 3;
    } catch (tmp23) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp23;
      } else {
        c4 = tmp;
      }
    }
  }
};
function getProject() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_33 = async function _getProject(arg0) {
  closure_0 = arg0;
  closure_2 = arg2;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    closure_4 = tmp3;
    closure_3 = tmp2;
    closure_131_0 = closure_0;
    closure_131_1 = signal;
    closure_131_2 = closure_2;
    const HTTP = require("HTTPUtils").HTTP;
    await HTTP.get({ url: Endpoints.CONJURE_PROJECT(closure_0), rejectWithError: false, signal });
    closure_131_3 = value;
    let tmp14 = undefined !== closure_131_2;
    if (tmp14) {
      const currentUser = closure_132_7.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp14 = id !== closure_131_2;
    }
    if (!tmp14) {
      let aborted;
      if (closure_131_1 != null) {
        aborted = closure_131_1.aborted;
      }
      if (true !== aborted) {
        closure_132_1(closure_132_2[8]).dispatch({
          type: "CONJURE_PROJECT_UPDATE_SUCCESS",
          project: closure_131_3.body.project,
        });
        closure_132_12(closure_131_0, {
          bot_permissions_changed: closure_131_3.body.bot_permissions_changed,
          integration_installed: closure_131_3.body.integration_installed,
          preview_ready: closure_131_3.body.preview_ready,
          has_activity: closure_131_3.body.has_activity,
          owner_authorization_revoked: closure_131_3.body.owner_authorization_revoked,
          preview_app_channels: closure_131_3.body.preview_app_channels,
        });
        closure_132_1(closure_132_2[8]);
      }
    }
    return closure_131_3;
  })();
};
let closure_34 = async function _createProject(arg0) {
  let flags = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = undefined;
            let body;
            let ws_ticket;
            flags = flags.flags;
            GUILD_COLLABORATION = flags;
            if (flags == null) {
              GUILD_COLLABORATION = require("ConjureProjectTypes").ConjureProjectFlags.GUILD_COLLABORATION;
            }
            c5 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const request = { url: constants.CONJURE_PROJECTS, body: null, rejectWithError: false };
            const obj5 = {};
            const merged = Object.assign(tmp64);
            obj5.flags = GUILD_COLLABORATION;
            request.body = obj5;
            c6 = 2;
            c7 = 1;
            const obj8 = { value: HTTP.post(request), done: false };
            return obj8;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_3 = closure_4;
          const result = closure_131_0(closure_131_2[12]).classifyCreateFailure(closure_130_3);
          const obj6 = closure_131_0(closure_131_2[12]);
          const conjureCreateError = new closure_131_0(closure_131_2[12]).ConjureCreateError(
            result,
            closure_131_0(closure_131_2[12]).createFailureStatus(closure_130_3),
          );
          throw conjureCreateError;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          body = value.body;
          ws_ticket = body.ws_ticket;
          closure_130_0 = closure_131_4(body, closure_131_3);
          if (null != ws_ticket) {
            const result1 = closure_131_0(closure_131_2[15]).rememberCreatedProjectTicket(closure_130_0.id, ws_ticket);
            const obj = closure_131_0(closure_131_2[15]);
          }
          c5 = 0;
          const obj10 = { type: "CONJURE_PROJECT_CREATE_SUCCESS", project: closure_130_0 };
          closure_131_1(closure_131_2[8]).dispatch(obj10);
          c7 = 3;
          const obj11 = { value: closure_130_0.id, done: true };
          return obj11;
        }
      } catch (tmp49) {
        closure_4 = tmp49;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp49;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
function patchProject() {
  const self = this;
  const apply = closure_36.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_36 = async function _patchProject(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp2;
    closure_2 = tmp5;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: Endpoints.CONJURE_PROJECT(closure_0), body, rejectWithError: false };
    await HTTP.patch(request);
    closure_130_0 = value;
    closure_131_1(closure_131_2[8]).dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: closure_130_0.body });
    return closure_130_0;
  })();
};
function updateProjectSettings() {
  const self = this;
  const apply = closure_39.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_39 = async function _updateProjectSettings() {
  closure_3 = tmp5;
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await patchProject(closure_0, closure_1);
  closure_130_1 = value;
  closure_130_2 = closure_130_1.body.preview_application_id;
  if (null != closure_130_2) {
    const application = closure_131_0(closure_131_2[17]).fetchApplication(closure_130_2);
    closure_131_0(closure_131_2[17]);
    closure_130_3 = application
      .catch(() => {})
      .then(() => {
        if (map.get(closure_1_2) === closure_1_3) {
          map.delete(closure_1_2);
        }
      });
    const result = closure_131_37.set(closure_130_2, closure_130_3);
    application.catch(() => {});
  }
  return closure_130_1;
};
let closure_40 = async function _fetchApplicationChannels(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c3 = 1;
          const HTTP = require("HTTPUtils").HTTP;
          const obj4 = { url: Endpoints.CONJURE_APPLICATION_CHANNELS(closure_0), rejectWithError: true };
          c2 = 2;
          c1 = 1;
          const obj5 = { value: HTTP.get(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp6) {
        c3 = 0;
        c1 = 3;
        const obj6 = { value: [], done: true };
        return obj6;
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c1 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c3 = 0;
        c1 = 3;
        const obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp11) {
      if (tmp3 === c3) {
        c1 = tmp2;
        throw tmp11;
      } else {
        c2 = tmp;
      }
    }
  }
};
function deleteProject() {
  const self = this;
  const apply = closure_42.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_42 = async function _deleteProject() {
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = projectId;
            closure_129_1 = undefined;
            const obj4 = { type: "CONJURE_PROJECT_DELETE_START", projectId };
            DispatcherDefault.dispatch(obj4);
            c4 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const obj6 = { url: Endpoints.CONJURE_PROJECT(projectId), rejectWithError: false };
            c5 = 2;
            c6 = 1;
            const obj7 = { value: HTTP.del(obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_2 = closure_3;
          const obj8 = { type: "CONJURE_PROJECT_DELETE_FAIL", projectId: closure_129_0 };
          closure_130_1(closure_130_2[8]).dispatch(obj8);
          throw closure_129_2;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_129_1 = value;
          c4 = 0;
          const obj11 = { type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId: closure_129_0 };
          closure_130_1(closure_130_2[8]).dispatch(obj11);
          c6 = 3;
          const obj12 = { value: closure_129_1, done: true };
          return obj12;
        }
      } catch (tmp23) {
        closure_3 = tmp23;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp23;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_3 = ["ws_ticket"];
const Endpoints = fn(1087).Endpoints;
const ReadStateTypes = fn(6223).ReadStateTypes;
let c13 = null;
let c14 = null;
let c15 = false;
let c18 = false;
let closure_21 = new BackoffDefault(30000, 300000);
let id = null;
const set = new Set();
const set1 = new Set();
let c25 = false;
let c28 = null;
const set2 = new Set();
let c31 = null;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureActionCreators.tsx");

export const applyPublishedPreview = function applyPublishedPreview(projectId, arg1) {
  ({ project, hasActivity, integrationInstalled, botPermissionsChanged } = arg1);
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project });
  let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
  if (integrationStatus == null) {
    integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(projectId);
  }
  let flag;
  if (integrationStatus != null) {
    flag = integrationStatus.owner_authorization_revoked;
  }
  if (flag == null) {
    flag = false;
  }
  const obj2 = { owner_authorization_revoked: flag };
  let preview_app_channels;
  if (integrationStatus != null) {
    preview_app_channels = integrationStatus.preview_app_channels;
  }
  if (null != preview_app_channels) {
    const obj3 = { preview_app_channels: integrationStatus.preview_app_channels };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  obj2.preview_ready = true;
  obj2.has_activity = hasActivity;
  obj2.integration_installed = integrationInstalled;
  obj2.bot_permissions_changed = botPermissionsChanged;
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus: obj2 });
  const obj5 = { type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus: obj2 };
  const tmpResult = DispatcherDefault;
};
export { listProjects };
export const loadMissingConjureProjects = function loadMissingConjureProjects(arg0) {
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id == null) {
    id = null;
  }
  if (id !== id) {
    set.clear();
    set1.clear();
    closure_21.cancel();
  }
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp10 = nextResult;
    if (!set.has(nextResult)) {
      let addResult = set1.add(tmp10);
    }
    continue;
  }
  let pending = c25;
  if (!c25) {
    pending = closure_21.pending;
  }
  if (!pending) {
    drainMissingProjects();
  }
};
export const fetchProjectLimit = function fetchProjectLimit() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const prefetchProject = function prefetchProject(projectId) {
  _require = projectId;
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id == null) {
    id = null;
  }
  if (id !== id) {
    set2.clear();
  }
  if (null == obj.getConjureSocket(projectId)) {
    tmp5(11004).prefetchWorkerTicket(projectId);
    const tmp5Result = tmp5(11004);
  }
  let hasItem = set2.has(projectId);
  if (!hasItem) {
    hasItem = null != ConjureProjectStore.getIntegrationStatus(projectId);
  }
  if (!hasItem) {
    set2.add(projectId);
    getProject(projectId, undefined, id).catch(() => set2.delete(closure_0));
    const promise = getProject(projectId, undefined, id);
  }
  obj = require("conjureProjectSockets");
  tmp5 = _require;
};
export { getProject };
export const createProject = function createProject() {
  const self = this;
  const apply = closure_34.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const previewApplicationReread = function previewApplicationReread(prop) {
  let resolved = map.get(prop);
  if (resolved == null) {
    resolved = Promise.resolve();
  }
  return resolved;
};
export { updateProjectSettings };
export const setProjectIcon = function setProjectIcon(arg0, icon) {
  return updateProjectSettings(arg0, { icon });
};
export const setProjectCover = function setProjectCover(arg0, cover_image) {
  return updateProjectSettings(arg0, { cover_image });
};
export const setGuildHints = function setGuildHints(first2, arg1) {
  return patchProject(first2, arg1);
};
export const fetchApplicationChannels = function fetchApplicationChannels() {
  const self = this;
  const apply = closure_40.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { deleteProject };
export const deleteProjectInBackground = function deleteProjectInBackground(id, arg1) {
  deleteProject(id).then(() => {}, arg1);
};
export const refreshConjureInstallState = function refreshConjureInstallState(projectId) {
  const project = ConjureProjectStore.getProject(projectId);
  if (null != project) {
    getProject(projectId).catch(() => {});
    const promise = getProject(projectId);
    const obj = UserActionCreators;
    const profile = obj.fetchProfile(conjureAppInServer.conjureProductionBotUserId(project), {
      withMutualGuilds: true,
    });
    profile.catch(() => {});
  }
};
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(guildId, projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId, projectId });
};
