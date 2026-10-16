// discord_app/modules/conjure/projects/ConjureActionCreators.tsx
import BackoffDefault from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ConjureProjectTypes from "ConjureProjectTypes.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import conjureAppInServer from "conjureAppInServer.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureProjectStore from "ConjureProjectStore.tsx";

require = fn;
function updateIntegrationStatus(projectId, integrationStatus) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus });
}
function listProjects() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _listProjects() {
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
              closure_10 = tmp37;
              const obj5 = { type: "CONJURE_PROJECTS_FETCH_START", guildId: tmp37 };
              DispatcherDefault.dispatch(obj5);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
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
                if (tmp37 !== closure_10) {
                  closure_11 = tmp37;
                }
              }
              let tmp42 = null == tmp37;
              if (tmp42) {
                tmp42 = null != closure_10;
              }
              if (tmp42) {
                c12 = true;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            const obj9 = { type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: closure_130_0 };
            closure_131_1(closure_131_2[6]).dispatch(obj9);
            const obj4 = closure_131_1(closure_131_2[6]);
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
            closure_131_1(closure_131_2[6]).dispatch(obj11);
            closure_131_12 = false;
            (function forgetMissingProjects() {
              const self = this;
              const apply = closure_1_16.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
            c4 = 0;
            const obj = closure_131_1(closure_131_2[6]);
          }
          closure_130_2 = closure_131_11;
          closure_131_11 = null;
          if (null == closure_130_2) {
            if (closure_131_12) {
              closure_131_12 = false;
              closure_131_13();
            }
          }
          closure_131_13(closure_130_2);
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
let closure_16 = async function _forgetMissingProjects() {
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
          if (!c15) {
            c15 = true;
            resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
            _require = resourceIds[Symbol.iterator]();
            if (_require !== undefined) {
              c5 = 1;
              closure_130_0 = tmp36;
              if (null == closure_131_6.getProject(closure_130_0)) {
                let obj5 = closure_131_0(closure_131_2[8]);
                if (obj5.isConjureProjectUnread(closure_130_0)) {
                  let obj6 = closure_131_0(closure_131_2[9]);
                  let _Math = Math;
                  c6 = 2;
                  c7 = 1;
                  let obj7 = { value: obj6.sleep(5000 * Math.random()), done: false };
                  return obj7;
                } else {
                  let tmp46 = closure_131_17(closure_130_0);
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
        throw ReadStateStore;
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
        } else if (null == closure_131_6.getProject(closure_130_0)) {
          c5 = 2;
          c6 = 4;
          c7 = 1;
          let obj9 = { value: closure_131_27(closure_130_0), done: false };
          return obj9;
        }
      } else if (3 === tmp4) {
        c5 = 1;
        closure_130_2 = ReadStateStore;
        let obj2 = closure_131_0(closure_131_2[10]);
        closure_130_1 = obj2.createFailureStatus(closure_130_2);
        let tmp14 = 403 !== closure_130_1;
        if (tmp14) {
          tmp14 = 404 !== closure_130_1;
        }
        if (!tmp14) {
          let tmp21 = closure_131_17(closure_130_0);
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
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _drainMissingProjects() {
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
          closure_130_3 = undefined;
          c22 = true;
          closure_130_0 = [];
          closure_1 = dependencyMap;
          _require = dependencyMap[Symbol.iterator]();
          if (_require === undefined) {
            closure_131_22 = false;
            if (0 !== closure_130_0.length) {
              let failResult = closure_131_18.fail(() => {
                for (const item10005 of closure_1_0) {
                  let addResult = set.add(item10005);
                  continue;
                }
                if (!closure_2_22) {
                  closure_2_23();
                }
              });
            } else {
              let succeedResult = closure_131_18.succeed();
            }
            c7 = 3;
          } else {
            c5 = 1;
            closure_130_1 = tmp38;
            let deleteResult = closure_131_21.delete(closure_130_1);
            if (!closure_131_20.has(closure_130_1)) {
              let addResult = closure_131_20.add(closure_130_1);
              if (null == closure_131_6.getProject(closure_130_1)) {
                closure_130_2 = undefined;
                c5 = 2;
                c6 = 3;
                c7 = 1;
                let obj5 = { value: closure_131_27(closure_130_1), done: false };
                return obj5;
              }
            }
          }
        }
      } else if (1 === tmp5) {
        c5 = 0;
        _require.return();
        throw ReadStateStore;
      } else {
        if (2 === tmp5) {
          c5 = 1;
          closure_130_4 = ReadStateStore;
          let obj2 = closure_131_0(closure_131_2[10]);
          closure_130_2 = obj2.createFailureStatus(closure_130_4);
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
          closure_130_3 = value;
          let num2 = 200;
          if (!closure_130_3.ok) {
            num2 = closure_130_3.status;
          }
          closure_130_2 = num2;
          c5 = 1;
        }
        if (200 !== closure_130_2) {
          if (403 !== closure_130_2) {
            if (404 !== closure_130_2) {
              let deleteResult1 = closure_131_20.delete(closure_130_1);
              let arr = closure_130_0.push(closure_130_1);
            }
          }
          let tmp32 = closure_131_17(closure_130_1);
        }
      }
      c5 = 0;
    }
  }
};
let closure_26 = async function _fetchProjectLimit() {
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
            if (closure_25 !== tmp18) {
              if (!ConjureProjectStore.hasFetchedProjectLimit()) {
                closure_25 = tmp18;
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
        if (closure_130_25 === closure_129_0) {
          closure_130_25 = null;
        }
        const currentUser1 = closure_130_5.getCurrentUser();
        let id1;
        if (currentUser1 != null) {
          id1 = currentUser1.id;
        }
        dispatchResult = closure_129_0;
        if (id1 === closure_129_0) {
          const obj7 = { type: "CONJURE_PROJECT_LIMIT_FETCH_SETTLE", maxProjects: max_projects };
          dispatchResult = closure_130_1(closure_130_2[6]).dispatch(obj7);
          const obj6 = closure_130_1(closure_130_2[6]);
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
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_28 = async function _getProject(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    closure_2 = tmp2;
    closure_130_0 = closure_0;
    closure_130_1 = signal;
    const HTTP = HTTPUtils.HTTP;
    await HTTP.get({ url: Endpoints.CONJURE_PROJECT(closure_0), rejectWithError: false, signal });
    closure_130_2 = value;
    if (closure_130_1 != null) {
      const aborted = closure_130_1.aborted;
    }
    let ok = true !== aborted;
    if (ok) {
      ok = closure_130_2.ok;
    }
    if (ok) {
      closure_131_1(closure_131_2[6]).dispatch({
        type: "CONJURE_PROJECT_UPDATE_SUCCESS",
        project: closure_130_2.body.project,
      });
      closure_131_9(closure_130_0, {
        bot_permissions_changed: closure_130_2.body.bot_permissions_changed,
        integration_installed: closure_130_2.body.integration_installed,
        preview_ready: closure_130_2.body.preview_ready,
        has_activity: closure_130_2.body.has_activity,
        owner_authorization_revoked: closure_130_2.body.owner_authorization_revoked,
      });
      closure_131_1(closure_131_2[6]);
    }
    return closure_130_2;
  })();
};
let closure_29 = async function _createProject(arg0) {
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            let body;
            flags = flags.flags;
            GUILD_COLLABORATION = flags;
            if (flags == null) {
              GUILD_COLLABORATION = ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION;
            }
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.CONJURE_PROJECTS, body: null, rejectWithError: false };
            const obj4 = {};
            const merged = Object.assign(tmp51);
            obj4.flags = GUILD_COLLABORATION;
            request.body = obj4;
            c6 = 2;
            c7 = 1;
            const obj7 = { value: HTTP.post(request), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_1 = closure_4;
          const result = closure_131_0(closure_131_2[10]).classifyCreateFailure(closure_130_1);
          const obj5 = closure_131_0(closure_131_2[10]);
          const conjureCreateError = new closure_131_0(closure_131_2[10]).ConjureCreateError(
            result,
            closure_131_0(closure_131_2[10]).createFailureStatus(closure_130_1),
          );
          throw conjureCreateError;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          body = value.body;
          c5 = 0;
          const obj9 = { type: "CONJURE_PROJECT_CREATE_SUCCESS", project: body };
          closure_131_1(closure_131_2[6]).dispatch(obj9);
          c7 = 3;
          const obj10 = { value: body.id, done: true };
          return obj10;
        }
      } catch (tmp43) {
        closure_4 = tmp43;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp43;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
function patchProject() {
  const self = this;
  const apply = closure_31.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_31 = async function _patchProject(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp2;
    closure_2 = tmp5;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CONJURE_PROJECT(closure_0), body, rejectWithError: false };
    await HTTP.patch(request);
    closure_130_0 = value;
    if (closure_130_0.ok) {
      closure_131_1(closure_131_2[6]).dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: closure_130_0.body });
      closure_131_1(closure_131_2[6]);
    }
    return closure_130_0;
  })();
};
function updateProjectSettings() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_33 = async function _updateProjectSettings(arg0) {
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          c5 = 1;
          c6 = 1;
          const obj5 = { value: patchProject(closure_0, closure_1), done: false };
          return obj5;
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_130_1 = value;
            if (closure_130_1.ok) {
              closure_130_2 = closure_130_1.body.preview_application_id;
              if (null != closure_130_2) {
                c4 = 1;
                c5 = 3;
                c6 = 1;
                const obj7 = { value: closure_131_0(closure_131_2[13]).fetchApplication(closure_130_2), done: false };
                return obj7;
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
    } catch (tmp27) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp27;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_34 = async function _fetchApplicationChannels(arg0) {
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
          const HTTP = HTTPUtils.HTTP;
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
  const apply = closure_36.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_36 = async function _deleteProject() {
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
            const HTTP = HTTPUtils.HTTP;
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
          closure_130_1(closure_130_2[6]).dispatch(obj8);
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
          let str = "CONJURE_PROJECT_DELETE_FAIL";
          if (closure_129_1.ok) {
            str = "CONJURE_PROJECT_DELETE_SUCCESS";
          }
          const obj11 = { type: str, projectId: closure_129_0 };
          closure_130_1(closure_130_2[6]).dispatch(obj11);
          c6 = 3;
          const obj12 = { value: closure_129_1, done: true };
          return obj12;
        }
      } catch (tmp25) {
        closure_3 = tmp25;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp25;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1087).Endpoints;
const ReadStateTypes = fn(6186).ReadStateTypes;
let c10 = null;
let c11 = null;
let c12 = false;
let c15 = false;
let closure_18 = new BackoffDefault(30000, 300000);
let id = null;
const set = new Set();
const set1 = new Set();
let c22 = false;
let c25 = null;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureActionCreators.tsx");

export const applyPublishedPreview = function applyPublishedPreview(projectId, arg1) {
  ({ project, hasActivity, integrationInstalled, botPermissionsChanged } = arg1);
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project });
  const integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
  let flag;
  if (integrationStatus != null) {
    flag = integrationStatus.owner_authorization_revoked;
  }
  if (flag == null) {
    flag = false;
  }
  DispatcherDefault.dispatch({
    type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE",
    projectId,
    integrationStatus: {
      owner_authorization_revoked: flag,
      preview_ready: true,
      has_activity: hasActivity,
      integration_installed: integrationInstalled,
      bot_permissions_changed: botPermissionsChanged,
    },
  });
  const obj2 = {
    type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE",
    projectId,
    integrationStatus: {
      owner_authorization_revoked: flag,
      preview_ready: true,
      has_activity: hasActivity,
      integration_installed: integrationInstalled,
      bot_permissions_changed: botPermissionsChanged,
    },
  };
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
    closure_18.cancel();
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
  let pending = c22;
  if (!c22) {
    pending = closure_18.pending;
  }
  if (!pending) {
    drainMissingProjects();
  }
};
export const fetchProjectLimit = function fetchProjectLimit() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { getProject };
export const createProject = function createProject() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
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
  const apply = closure_34.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { deleteProject };
export const deleteProjectInBackground = function deleteProjectInBackground(id, arg1) {
  closure_0 = arg1;
  deleteProject(id).then((ok) => {
    if (!ok.ok) {
      closure_0();
    }
  }, arg1);
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
