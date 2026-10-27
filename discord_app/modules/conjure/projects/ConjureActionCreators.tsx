// === Module 10723: ConjureActionCreators ===

// Module 10723 (ConjureActionCreators)
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5627 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6775 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6811 */;
import UserActionCreators from "UserActionCreators" /* 8670 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10722 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10728 */;
import conjurePreviewTicket from "conjurePreviewTicket" /* 10730 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10731 */;
import createProxyTicket from "createProxyTicket" /* 10733 */;
import conjureAppInServer from "conjureAppInServer" /* 10734 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ReadStateStore from "ReadStateStore" /* 6772 */;
import UserStore from "UserStore" /* 1389 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 10724 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;

require = fn;
function updateIntegrationStatus(projectId, integrationStatus) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId, integrationStatus });
}
function listProjects() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _listProjects() {
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
              closure_14 = tmp37;
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
                if (tmp37 !== closure_14) {
                  closure_15 = tmp37;
                }
              }
              let tmp42 = null == tmp37;
              if (tmp42) {
                tmp42 = null != closure_14;
              }
              if (tmp42) {
                c16 = true;
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
            closure_131_16 = false;
            (function forgetMissingProjects() {
              const self = this;
              const apply = closure_1_20.apply;
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
          closure_130_2 = closure_131_15;
          closure_131_15 = null;
          if (null == closure_130_2) {
            if (closure_131_16) {
              closure_131_16 = false;
              closure_131_17();
            }
          }
          closure_131_17(closure_130_2);
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
let closure_20 = async function _forgetMissingProjects() {
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
          if (!c19) {
            c19 = true;
            resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
            _require = resourceIds[Symbol.iterator]();
            if (_require !== undefined) {
              c5 = 1;
              closure_130_0 = tmp36;
              if (null == closure_131_10.getProject(closure_130_0)) {
                let obj5 = closure_131_0(closure_131_2[10]);
                if (obj5.isConjureProjectUnread(closure_130_0)) {
                  let obj6 = closure_131_0(closure_131_2[11]);
                  let _Math = Math;
                  c6 = 2;
                  c7 = 1;
                  let obj7 = { value: obj6.sleep(5000 * Math.random()), done: false };
                  return obj7;
                } else {
                  let tmp46 = closure_131_21(closure_130_0);
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
        throw closure_1_4;
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
        } else if (null == closure_131_10.getProject(closure_130_0)) {
          c5 = 2;
          c6 = 4;
          c7 = 1;
          let obj9 = { value: closure_131_38(closure_130_0), done: false };
          return obj9;
        }
      } else if (3 === tmp4) {
        c5 = 1;
        closure_130_2 = closure_1_4;
        let obj2 = closure_131_0(closure_131_2[12]);
        closure_130_1 = obj2.createFailureStatus(closure_130_2);
        let tmp14 = 403 !== closure_130_1;
        if (tmp14) {
          tmp14 = 404 !== closure_130_1;
        }
        if (!tmp14) {
          let tmp21 = closure_131_21(closure_130_0);
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
function resetMissingProjectsOnUserChange() {
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
    set2.clear();
    closure_22.cancel();
  }
}
function fetchMissingProject() {
  const self = this;
  const apply = closure_31.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_31 = async function _fetchMissingProject(arg0) {
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
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_28 = closure_0;
          c4 = 1;
          c5 = 2;
          c6 = 1;
          const obj5 = { value: getProject(closure_0), done: false };
          return obj5;
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          closure_129_2 = closure_3;
          closure_129_1 = closure_130_0(closure_130_2[12]).createFailureStatus(closure_129_2);
          const obj2 = closure_130_0(closure_130_2[12]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_129_1 = 200;
          c4 = 0;
        }
        closure_130_28 = null;
        if (200 === closure_129_1) {
          c6 = 3;
          const obj6 = { value: tmp19, done: true };
          return obj6;
        } else {
          if (403 !== closure_129_1) {
            if (404 !== closure_129_1) {
              closure_130_24.delete(closure_129_0);
              let flag = true;
            }
          }
          closure_130_25.add(closure_129_0);
          closure_130_21(closure_129_0);
          flag = false;
        }
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
let closure_32 = async function _fetchMissingConjureProjectNow() {
  c3 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp2;
            closure_1 = tmp3;
            closure_129_0 = projectId;
            closure_129_1 = undefined;
            if ("loading" !== projectLoadStatus.getProjectLoadStatus(projectId)) {
              resetMissingProjectsOnUserChange();
              set2.delete(projectId);
              set.add(projectId);
              const obj5 = { type: "CONJURE_PROJECT_LOAD_STATUS", projectId, status: "loading" };
              DispatcherDefault.dispatch(obj5);
              c3 = 1;
              c4 = 1;
              const obj6 = { value: fetchMissingProject(projectId), done: false };
              return obj6;
            } else {
              c4 = 3;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          const obj7 = { type: "CONJURE_PROJECT_LOAD_STATUS", projectId: closure_129_0, status: null };
          let str = null;
          if (closure_129_1) {
            str = "failed";
          }
          obj7.status = str;
          closure_130_1(closure_130_2[8]).dispatch(obj7);
          const obj = closure_130_1(closure_130_2[8]);
        }
        c4 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } catch (tmp24) {
        c4 = tmp;
        throw tmp24;
      }
    }
  })();
};
function drainMissingProjects() {
  const self = this;
  const apply = closure_34.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_34 = async function _drainMissingProjects() {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    while (true) {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp;
          closure_3 = tmp2;
          closure_131_1 = undefined;
          c27 = true;
          closure_131_0 = [];
          closure_1 = dependencyMap;
          _require = dependencyMap[Symbol.iterator]();
          if (_require === undefined) {
            closure_132_27 = false;
            if (0 !== closure_131_0.length) {
              let failResult = closure_132_22.fail(() => {
                for (const item10005 of closure_1_0) {
                  let addResult = set.add(item10005);
                  continue;
                }
                if (!closure_2_27) {
                  closure_2_33();
                }
              });
            } else {
              let succeedResult = closure_132_22.succeed();
            }
            c8 = 3;
          } else {
            c6 = 1;
            closure_131_1 = tmp12;
            let deleteResult = closure_132_26.delete(closure_131_1);
            if (!closure_132_24.has(closure_131_1)) {
              let addResult = closure_132_24.add(closure_131_1);
              let tmp20 = null == closure_132_10.getProject(closure_131_1);
              closure_2 = tmp20;
              if (tmp20) {
                c7 = 2;
                c8 = 1;
                let obj4 = { value: closure_132_30(closure_131_1), done: false };
                return obj4;
              }
            }
            c6 = 0;
          }
        }
      } else if (1 === tmp5) {
        c6 = 0;
        _require.return();
        throw _objectWithoutProperties;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        _require.return();
        c8 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        closure_2 = value;
      }
      if (closure_2) {
        let arr = closure_131_0.push(closure_131_1);
      }
    }
  }
};
let closure_36 = async function _fetchProjectLimit() {
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
            if (closure_35 !== tmp18) {
              if (!ConjureProjectStore.hasFetchedProjectLimit()) {
                closure_35 = tmp18;
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
        if (closure_130_35 === closure_129_0) {
          closure_130_35 = null;
        }
        const currentUser1 = closure_130_8.getCurrentUser();
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
  const apply = closure_39.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_39 = async function _getProject(arg0) {
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
    const HTTP = HTTPUtils.HTTP;
    await HTTP.get({ url: Endpoints.CONJURE_PROJECT(closure_0), rejectWithError: false, signal });
    closure_131_3 = value;
    let tmp14 = undefined !== closure_131_2;
    if (tmp14) {
      const currentUser = closure_132_8.getCurrentUser();
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
        closure_132_1(closure_132_2[8]).dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: closure_131_3.body.project });
        closure_132_13(closure_131_0, { bot_permissions_changed: closure_131_3.body.bot_permissions_changed, integration_installed: closure_131_3.body.integration_installed, preview_ready: closure_131_3.body.preview_ready, has_activity: closure_131_3.body.has_activity, owner_authorization_revoked: closure_131_3.body.owner_authorization_revoked, preview_app_channels: closure_131_3.body.preview_app_channels });
        closure_132_1(closure_132_2[8]);
      }
    }
    return closure_131_3;
  })();
};
let closure_40 = async function _createProject() {
  closure_2 = tmp5;
  closure_1 = tmp2;
  await postProject(closure_0);
  closure_129_0 = value;
  const ws_ticket = closure_129_0.ws_ticket;
  const remix_preview = closure_129_0.remix_preview;
  closure_129_1 = closure_130_5(closure_129_0, closure_130_3);
  closure_130_1(closure_130_2[8]).dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: closure_129_1 });
  return closure_129_1.id;
};
let closure_41 = async function _createRemix() {
  closure_2 = tmp5;
  closure_1 = tmp2;
  await postProject(closure_0);
  closure_129_0 = value;
  const ws_ticket = closure_129_0.ws_ticket;
  const remix_preview = closure_129_0.remix_preview;
  closure_129_1 = closure_130_5(closure_129_0, closure_130_4);
  closure_130_1(closure_130_2[8]).dispatch({ type: "CONJURE_PROJECT_CREATE_SUCCESS", project: closure_129_1 });
  return closure_129_0;
};
function postProject() {
  const self = this;
  const apply = closure_43.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_43 = async function _postProject(arg0) {
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
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.CONJURE_PROJECTS, body: null, rejectWithError: false };
            const obj6 = {};
            const merged = Object.assign(flags);
            flags = flags.flags;
            GUILD_COLLABORATION = flags;
            if (flags == null) {
              GUILD_COLLABORATION = ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION;
            }
            obj6.flags = GUILD_COLLABORATION;
            request.body = obj6;
            c6 = 2;
            c7 = 1;
            const obj7 = { value: HTTP.post(request), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_1 = closure_4;
          const result = closure_131_0(closure_131_2[12]).classifyCreateFailure(closure_130_1);
          const obj4 = closure_131_0(closure_131_2[12]);
          const conjureCreateError = new closure_131_0(closure_131_2[12]).ConjureCreateError(result, closure_131_0(closure_131_2[12]).createFailureStatus(closure_130_1));
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
          if (null != body.ws_ticket) {
            const result1 = closure_131_0(closure_131_2[15]).rememberCreatedProjectTicket(body.id, body.ws_ticket);
            const obj = closure_131_0(closure_131_2[15]);
          }
          c5 = 0;
          c7 = 3;
          const obj9 = { value: body, done: true };
          return obj9;
        }
      } catch (tmp39) {
        closure_4 = tmp39;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp39;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
function patchProject() {
  const self = this;
  const apply = closure_45.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_45 = async function _patchProject(arg0) {
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
    closure_131_1(closure_131_2[8]).dispatch({ type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: closure_130_0.body });
    return closure_130_0;
  })();
};
function fetchConjureApplication() {
  const self = this;
  const apply = closure_47.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_47 = async function _fetchConjureApplication(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          let bot;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: ApplicationActionCreators.fetchApplication(closure_0), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        bot = value.bot;
        if (null != bot) {
          const obj7 = { type: "USER_UPDATE", user: bot };
          closure_130_1(closure_130_2[8]).dispatch(obj7);
          const obj = closure_130_1(closure_130_2[8]);
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp18) {
      c4 = tmp;
      throw tmp18;
    }
  }
};
let closure_48 = async function _refreshPreviewApplication(arg0) {
  if (c1 === 2) {
    c1 = 3;
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
          project = project.getProject(closure_0);
          let prop;
          if (project != null) {
            prop = project.preview_application_id;
          }
          if (null != prop) {
            c2 = 1;
            c1 = 1;
            const obj4 = { value: fetchConjureApplication(prop), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp11) {
      c1 = tmp;
      throw tmp11;
    }
  }
};
let closure_49 = async function _updateProjectSettings() {
  closure_3 = tmp5;
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await patchProject(closure_0, closure_1);
  closure_130_1 = value;
  closure_130_2 = closure_130_1.body.preview_application_id;
  let tmp15 = null == closure_130_2;
  if (!tmp15) {
    let tmp8 = null == closure_130_0.name;
    if (tmp8) {
      tmp8 = null == closure_130_0.icon;
    }
    if (tmp8) {
      tmp8 = null == closure_130_0.description;
    }
    if (tmp8) {
      tmp8 = !("cover_image" in closure_130_0);
    }
    tmp15 = tmp8;
  }
  if (!tmp15) {
    closure_131_46(closure_130_2).catch(() => {

    });
    closure_131_46(closure_130_2);
  }
  return closure_130_1;
};
let closure_50 = async function _fetchApplicationChannels(arg0) {
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
  const apply = closure_52.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_52 = async function _deleteProject() {
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
let closure_3 = ["ws_ticket", "remix_preview"];
let closure_4 = ["ws_ticket", "remix_preview"];
const Endpoints = fn(1084).Endpoints;
const ReadStateTypes = fn(6706).ReadStateTypes;
let c14 = null;
let c15 = null;
let c16 = false;
let c19 = false;
let closure_22 = new BackoffDefault(30000, 300000);
let id = null;
const set = new Set();
const set1 = new Set();
const set2 = new Set();
let c27 = false;
let c28 = null;
let c35 = null;
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
export const isConjureProjectUnavailable = function isConjureProjectUnavailable(projectId) {
  let hasItem = set1.has(projectId);
  if (hasItem) {
    hasItem = null == ConjureProjectStore.getProject(projectId);
  }
  return hasItem;
};
export const loadMissingConjureProjects = function loadMissingConjureProjects(items) {
  resetMissingProjectsOnUserChange();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let hasItem = set.has(nextResult);
    if (hasItem) {
      hasItem = !set1.has(tmp3);
    }
    if (hasItem) {
      hasItem = c28 !== tmp3;
    }
    if (hasItem) {
      hasItem = null == ConjureProjectStore.getProject(tmp3);
    }
    if (hasItem) {
      let deleteResult = set.delete(tmp3);
    }
    if (!set.has(tmp3)) {
      let addResult = set2.add(tmp3);
    }
    continue;
  }
  let pending = c27;
  if (!c27) {
    pending = closure_22.pending;
  }
  if (!pending) {
    drainMissingProjects();
  }
};
export const fetchMissingConjureProjectNow = function fetchMissingConjureProjectNow() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchProjectLimit = function fetchProjectLimit() {
  const self = this;
  const apply = closure_36.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const prefetchProject = function prefetchProject(projectId) {
  if (null == obj.getConjureSocket(projectId)) {
    ConjureWorkerTickets.prefetchWorkerTicket(projectId);
    const tmpResult = ConjureWorkerTickets;
  }
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id == null) {
    id = null;
  }
  const promise = getProject(projectId, undefined, id);
  promise.catch(() => {

  });
  obj = conjureProjectSockets;
  const result = map.set(projectId, { read: promise, at: Date.now(), userId: id });
  const obj2 = { read: promise, at: Date.now(), userId: id };
  const result1 = conjurePreviewTicket.prefetchConjurePreviewTicket(projectId);
  const tmpResult2 = conjurePreviewTicket;
};
export const takePrefetchedRead = function takePrefetchedRead(arg0) {
  value = map.get(arg0);
  map.delete(arg0);
  let tmp3 = null;
  if (null != value) {
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (id == null) {
      id = null;
    }
    tmp3 = null;
    if (value.userId === id) {
      const _Date = Date;
      let read = null;
      if (Date.now() - value.at < 5000) {
        read = value.read;
      }
      tmp3 = read;
    }
  }
  return tmp3;
};
export { getProject };
export const createProject = function createProject() {
  const self = this;
  const apply = closure_40.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createRemix = function createRemix() {
  const self = this;
  const apply = closure_41.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const applyRemixPreview = function applyRemixPreview(id, remix_preview) {
  DispatcherDefault.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: remix_preview.application, isHydrated: true });
  if (null != remix_preview.proxy_ticket) {
    const obj3 = createProxyTicket;
    const proxy_ticket = remix_preview.proxy_ticket;
    obj3.rememberProxyTicket(proxy_ticket, remix_preview.application.id, conjurePreviewSurface.CONJURE_UNKNOWN_CHANNEL, EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL);
  }
  const obj2 = { type: "APPLICATION_FETCH_SUCCESS", application: remix_preview.application, isHydrated: true };
  const obj4 = { preview_ready: true, has_activity: remix_preview.has_activity, preview_app_channels: remix_preview.preview_app_channels, integration_installed: false, bot_permissions_changed: false, owner_authorization_revoked: false };
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: id, integrationStatus: obj4 });
  const obj5 = { type: "CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE", projectId: id, integrationStatus: obj4 };
  const tmpResult = DispatcherDefault;
  const obj6 = { type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId: id, publishState: "not_live", surface: null, previewAppChannels: null };
  let str = null;
  if (remix_preview.has_activity) {
    str = "activity";
  }
  obj6.surface = str;
  obj6.previewAppChannels = remix_preview.preview_app_channels;
  DispatcherDefault.dispatch(obj6);
  const tmpResult2 = DispatcherDefault;
};
export { fetchConjureApplication };
export const refreshPreviewApplication = function refreshPreviewApplication() {
  const self = this;
  const apply = closure_48.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateProjectSettings = function updateProjectSettings() {
  const self = this;
  const apply = closure_49.apply;
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
export const fetchApplicationChannels = function fetchApplicationChannels() {
  const self = this;
  const apply = closure_50.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { deleteProject };
export const deleteProjectInBackground = function deleteProjectInBackground(id, arg1) {
  deleteProject(id).then(() => {

  }, arg1);
};
export const refreshConjureInstallState = function refreshConjureInstallState(projectId) {
  const project = ConjureProjectStore.getProject(projectId);
  if (null != project) {
    getProject(projectId).catch(() => {

    });
    const promise = getProject(projectId);
    const obj = UserActionCreators;
    const profile = obj.fetchProfile(conjureAppInServer.conjureProductionBotUserId(project), { withMutualGuilds: true });
    profile.catch(() => {

    });
  }
};
export const setSelectedProjectForGuild = function setSelectedProjectForGuild(guildId, projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId, projectId });
};
export const selectGlobalChatProject = function selectGlobalChatProject(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_GLOBAL_SELECT", projectId });
};
export const clearGlobalChatProject = function clearGlobalChatProject(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_GLOBAL_CLEAR", projectId });
};