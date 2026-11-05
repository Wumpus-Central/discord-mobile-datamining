// === Module 11060: ConjureActionCreators ===

// Module 11060 (ConjureActionCreators)
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5811 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6983 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7019 */;
import UserActionCreators from "UserActionCreators" /* 8898 */;
import conjureProjectSockets from "conjureProjectSockets" /* 11059 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 11065 */;
import prefetchConjurePreviewFrame from "prefetchConjurePreviewFrame" /* 11067 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11068 */;
import createProxyTicket from "createProxyTicket" /* 11070 */;
import conjureAppInServer from "conjureAppInServer" /* 11079 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ReadStateStore from "ReadStateStore" /* 6980 */;
import UserStore from "UserStore" /* 1385 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 11061 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6982 */;

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
            const obj5 = { value, done: true };
            return obj5;
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
              closure_14 = tmp43;
              const obj6 = { type: "CONJURE_PROJECTS_FETCH_START", guildId: tmp43 };
              DispatcherDefault.dispatch(obj6);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              let get = HTTP.get;
              const request = { url: constants.CONJURE_PROJECTS, query: null, rejectWithError: true };
              if (null != guild_id) {
                const obj7 = { guild_id };
                let obj8 = obj7;
              } else {
                obj8 = { include_shared: true };
              }
              request.query = obj8;
              get = get(request);
              c5 = 2;
              c6 = 1;
            } else {
              if (null != tmp43) {
                if (tmp43 !== closure_14) {
                  closure_15 = tmp43;
                }
              }
              let tmp48 = null == tmp43;
              if (tmp48) {
                tmp48 = null != closure_14;
              }
              if (tmp48) {
                c16 = true;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            const obj9 = { type: "CONJURE_PROJECTS_FETCH_FAIL", guildId: closure_130_0 };
            closure_131_1(closure_131_2[8]).dispatch(obj9);
            const obj2 = closure_131_1(closure_131_2[8]);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            body = value.body;
            const obj10 = { type: "CONJURE_PROJECTS_FETCH_SUCCESS", projects: body, guildId: closure_130_0 };
            closure_131_1(closure_131_2[8]).dispatch(obj10);
            closure_131_19(body.map((id) => id.id));
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
            const obj11 = closure_131_1(closure_131_2[8]);
          }
          closure_130_2 = closure_131_15;
          closure_131_15 = null;
          if (closure_131_10.isReconnectListPending()) {
            closure_131_16 = false;
            let tmp33 = null != closure_130_2;
            if (tmp33) {
              tmp33 = closure_130_2 !== closure_130_0;
            }
            if (tmp33) {
              closure_131_15 = closure_130_2;
            }
            closure_131_17();
          } else {
            if (null == closure_130_2) {
              if (closure_131_16) {
                closure_131_16 = false;
                closure_131_17();
              }
            }
            closure_131_17(closure_130_2);
          }
        }
        c6 = 3;
      } catch (tmp56) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp56;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
function markParticipatingProjects(arr) {
  new Set(ReadStateStore.getResourceIds(ReadStateTypes.CONJURING_PROJECT));
  const found = arr.filter((item) => set.has(item));
  if (found.length > 0) {
    const obj2 = { type: "CONJURE_PARTICIPATING_PROJECTS_MARK", projectIds: found };
    DispatcherDefault.dispatch(obj2);
  }
}
let closure_20 = async function _forgetMissingProjects() {
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
      return { value: "HermesInternal", done: null };
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
          let tmp74 = currentSession();
          closure_130_0 = tmp74;
          let userId = tmp74.userId;
          if (null != userId) {
            if (missingProjectsCheckedUserId.getMissingProjectsCheckedUserId() !== userId) {
              let obj10 = DispatcherDefault;
              let obj7 = { type: "CONJURE_MISSING_PROJECTS_CHECK_START", userId };
              let dispatchResult = obj10.dispatch(obj7);
              resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
              _require = resourceIds[Symbol.iterator]();
              if (_require !== undefined) {
                c5 = 1;
                closure_130_1 = tmp45;
                if (null == closure_131_10.getProject(closure_130_1)) {
                  let obj5 = closure_131_0(closure_131_2[10]);
                  if (obj5.isConjureProjectUnread(closure_130_1)) {
                    let obj6 = closure_131_0(closure_131_2[11]);
                    let _Math = Math;
                    c6 = 2;
                    c7 = 1;
                    let obj8 = { value: obj6.sleep(5000 * Math.random()), done: false };
                    return obj8;
                  } else {
                    let tmp55 = closure_131_23(closure_130_1);
                  }
                }
              }
            }
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (1 === tmp5) {
        c5 = 0;
        _require.return();
        throw closure_1_4;
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          _require.return();
          c7 = 3;
          let obj9 = { value, done: true };
          return obj9;
        } else if (closure_131_22(closure_130_0)) {
          if (null == closure_131_10.getProject(closure_130_1)) {
            closure_130_2 = null;
            c5 = 2;
            c6 = 4;
            c7 = 1;
            let obj11 = { value: closure_131_40(closure_130_1, undefined, closure_130_0), done: false };
            return obj11;
          }
        } else {
          c5 = 0;
          _require.return();
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else {
        if (3 === tmp5) {
          c5 = 1;
          closure_130_3 = closure_1_4;
          let obj2 = closure_131_0(closure_131_2[12]);
          closure_130_2 = obj2.createFailureStatus(closure_130_3);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          _require.return();
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 1;
        }
        if (closure_131_22(closure_130_0)) {
          if (null == closure_130_2) {
            items = [closure_130_1];
            let tmp33 = closure_131_19(items);
          } else {
            let tmp23 = 403 !== closure_130_2;
            if (tmp23) {
              tmp23 = 404 !== closure_130_2;
            }
            if (!tmp23) {
              let tmp28 = closure_131_23(closure_130_1);
            }
          }
        } else {
          c5 = 0;
          _require.return();
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      }
      c5 = 0;
    }
  }
};
function currentSession() {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id == null) {
    id = null;
  }
  return { userId: id, generation: ConjureProjectStore.getSessionGeneration() };
}
function isCurrentSession(generation) {
  let tmp = generation.generation === ConjureProjectStore.getSessionGeneration();
  if (tmp) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (id == null) {
      id = null;
    }
    tmp = generation.userId === id;
  }
  return tmp;
}
function forgetProject(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_DELETE_SUCCESS", projectId });
}
function resetMissingProjectsOnUserChange() {
  let tmp = null != obj;
  if (tmp) {
    let tmp4 = obj.generation === ConjureProjectStore.getSessionGeneration();
    if (tmp4) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (id == null) {
        id = null;
      }
      tmp4 = tmp2.userId === id;
    }
    tmp = tmp4;
    tmp2 = obj;
  }
  if (!tmp) {
    const currentUser1 = UserStore.getCurrentUser();
    let id1;
    if (currentUser1 != null) {
      id1 = currentUser1.id;
    }
    if (id1 == null) {
      id1 = null;
    }
    obj = { userId: id1, generation: ConjureProjectStore.getSessionGeneration() };
    set.clear();
    set1.clear();
    set2.clear();
    closure_24.cancel();
  }
}
function fetchMissingProject() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_33 = async function _fetchMissingProject(arg0) {
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
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          const tmp40 = currentSession();
          closure_129_2 = tmp40;
          closure_30 = closure_0;
          c4 = 1;
          c5 = 2;
          c6 = 1;
          const obj5 = { value: getProject(closure_0, undefined, tmp40), done: false };
          return obj5;
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          closure_129_3 = closure_3;
          closure_129_1 = closure_130_0(closure_130_2[12]).createFailureStatus(closure_129_3);
          const obj2 = closure_130_0(closure_130_2[12]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_129_1 = 200;
          c4 = 0;
        }
        closure_130_30 = null;
        let tmp19 = 200 === closure_129_1;
        if (!tmp19) {
          tmp19 = !closure_130_22(closure_129_2);
        }
        if (tmp19) {
          c6 = 3;
          const obj6 = { value: tmp22, done: true };
          return obj6;
        } else {
          if (403 !== closure_129_1) {
            if (404 !== closure_129_1) {
              closure_130_26.delete(closure_129_0);
              let flag = true;
            }
          }
          closure_130_27.add(closure_129_0);
          closure_130_23(closure_129_0);
          flag = false;
        }
      }
    } catch (tmp42) {
      closure_3 = tmp42;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp42;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_34 = async function _fetchMissingConjureProjectNow() {
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
        return { value: "HermesInternal", done: null };
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
          obj = closure_130_1(closure_130_2[8]);
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
  const apply = closure_36.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_36 = async function _drainMissingProjects() {
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
      return { value: "HermesInternal", done: null };
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
          c29 = true;
          closure_131_0 = [];
          closure_1 = dependencyMap;
          _require = dependencyMap[Symbol.iterator]();
          if (_require === undefined) {
            closure_132_29 = false;
            if (0 !== closure_131_0.length) {
              let failResult = closure_132_24.fail(() => {
                for (const item10005 of closure_1_0) {
                  let addResult = set.add(item10005);
                  continue;
                }
                if (!closure_2_29) {
                  closure_2_35();
                }
              });
            } else {
              let succeedResult = closure_132_24.succeed();
            }
            c8 = 3;
          } else {
            c6 = 1;
            closure_131_1 = tmp12;
            let deleteResult = closure_132_28.delete(closure_131_1);
            if (!closure_132_26.has(closure_131_1)) {
              let addResult = closure_132_26.add(closure_131_1);
              let tmp20 = null == closure_132_10.getProject(closure_131_1);
              closure_2 = tmp20;
              if (tmp20) {
                c7 = 2;
                c8 = 1;
                let obj4 = { value: closure_132_32(closure_131_1), done: false };
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
        obj = { value, done: true };
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
let closure_38 = async function _fetchProjectLimit() {
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
      return { value: "HermesInternal", done: null };
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
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          c0 = id;
          if (id == null) {
            c0 = null;
          }
          closure_129_0 = c0;
          if (null != c0) {
            if (closure_37 !== tmp18) {
              if (!ConjureProjectStore.hasFetchedProjectLimit()) {
                closure_37 = tmp18;
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
          obj = { value, done: true };
          return obj;
        } else {
          max_projects = value.body.max_projects;
          c3 = 0;
        }
        if (closure_130_37 === closure_129_0) {
          closure_130_37 = null;
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
  const apply = closure_41.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_41 = async function _getProject(arg0) {
  closure_0 = arg0;
  closure_2 = arg2;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
            closure_4 = tmp3;
            closure_3 = tmp2;
            closure_131_0 = closure_0;
            closure_131_1 = signal;
            closure_131_2 = closure_2;
            closure_131_3 = undefined;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.CONJURE_PROJECT(closure_0), rejectWithError: false, signal };
            c5 = 1;
            c6 = 1;
            const obj6 = { value: HTTP.get(obj4), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_131_3 = value;
          let aborted = null;
          if (null != closure_131_2) {
            c6 = 3;
          }
          aborted = undefined;
          if (!tmp14) {
            aborted = closure_131_1.aborted;
          }
          if (true !== aborted) {
            const obj7 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: closure_131_3.body.project };
            closure_132_1(closure_132_2[8]).dispatch(obj7);
            aborted = closure_131_0;
            const obj8 = { bot_permissions_changed: closure_131_3.body.bot_permissions_changed, integration_installed: closure_131_3.body.integration_installed, preview_ready: closure_131_3.body.preview_ready, has_activity: closure_131_3.body.has_activity, owner_authorization_revoked: closure_131_3.body.owner_authorization_revoked, preview_app_channels: closure_131_3.body.preview_app_channels };
            closure_132_13(closure_131_0, obj8);
            const obj5 = closure_132_1(closure_132_2[8]);
          }
          tmp14 = closure_131_1 == aborted;
        }
      } catch (tmp18) {
        c6 = tmp;
        throw tmp18;
      }
    }
  })();
};
let closure_42 = async function _createProject() {
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
let closure_43 = async function _createRemix() {
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
  const apply = closure_45.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_45 = async function _postProject(arg0) {
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
        return { value: "HermesInternal", done: null };
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
            flags2 = flags;
            if (flags == null) {
              flags2 = ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION | ConjureProjectTypes.ConjureProjectFlags.PUBLIC;
            }
            obj6.flags = flags2;
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
            obj = closure_131_0(closure_131_2[15]);
          }
          c5 = 0;
          c7 = 3;
          const obj9 = { value: body, done: true };
          return obj9;
        }
      } catch (tmp41) {
        closure_4 = tmp41;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp41;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
function patchProject() {
  const self = this;
  const apply = closure_47.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_47 = async function _patchProject(arg0) {
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
  const apply = closure_49.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_49 = async function _fetchConjureApplication(arg0) {
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
      return { value: "HermesInternal", done: null };
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
          obj = closure_130_1(closure_130_2[8]);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp18) {
      c4 = tmp;
      throw tmp18;
    }
  }
};
let closure_50 = async function _refreshPreviewApplication(arg0) {
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
      return { value: "HermesInternal", done: null };
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
        obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp11) {
      c1 = tmp;
      throw tmp11;
    }
  }
};
let closure_51 = async function _updateProjectSettings() {
  closure_3 = tmp5;
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  project = project.getProject(closure_0);
  if (project != null) {
    const prop = project.preview_application_id;
  }
  closure_130_1 = prop;
  await patchProject(closure_0, closure_1);
  closure_130_2 = value;
  closure_130_3 = closure_130_2.body.preview_application_id;
  let tmp9 = null != closure_130_1;
  if (tmp9) {
    tmp9 = closure_130_1 !== closure_130_3;
  }
  if (tmp9) {
    closure_131_1(closure_131_2[22])(closure_130_1);
  }
  let tmp18 = null == closure_130_3;
  if (!tmp18) {
    let tmp21 = null == closure_130_0.name;
    if (tmp21) {
      tmp21 = null == closure_130_0.icon;
    }
    if (tmp21) {
      tmp21 = null == closure_130_0.description;
    }
    if (tmp21) {
      tmp21 = !("cover_image" in closure_130_0);
    }
    if (tmp21) {
      tmp21 = null == closure_130_0.uses_preview_app;
    }
    tmp18 = tmp21;
  }
  if (!tmp18) {
    closure_131_48(closure_130_3).catch(() => {

    });
    closure_131_48(closure_130_3);
  }
  return closure_130_2;
};
let closure_52 = async function _fetchApplicationChannels(arg0) {
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
      return { value: "HermesInternal", done: null };
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
        obj = { value: value.body, done: true };
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
  const apply = closure_54.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_54 = async function _deleteProject() {
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
const Endpoints = fn(1072).Endpoints;
const ReadStateTypes = fn(6914).ReadStateTypes;
let c14 = null;
let c15 = null;
let c16 = false;
let closure_24 = new BackoffDefault(30000, 300000);
const set = new Set();
const set1 = new Set();
const set2 = new Set();
let c29 = false;
let c30 = null;
let c37 = null;
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureActionCreators.tsx");

export function applyPublishedPreview(projectId, arg1) {
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
}
export { listProjects };
export function refetchProjectsAfterReconnect() {
  let result = ConjureProjectStore.isReconnectListPending();
  if (result) {
    const projectsFetchState = ConjureProjectStore.getProjectsFetchState();
    let type;
    if (projectsFetchState != null) {
      type = projectsFetchState.type;
    }
    result = "loading" !== type;
  }
  if (result) {
    listProjects();
  }
}
export function isConjureProjectUnavailable(c1) {
  let hasItem = set1.has(c1);
  if (hasItem) {
    hasItem = null == ConjureProjectStore.getProject(c1);
  }
  return hasItem;
}
export function loadMissingConjureProjects(items) {
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
      hasItem = c30 !== tmp3;
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
  let pending = c29;
  if (!c29) {
    pending = closure_24.pending;
  }
  if (!pending) {
    drainMissingProjects();
  }
}
export function fetchMissingConjureProjectNow() {
  const self = this;
  const apply = closure_34.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function fetchProjectLimit() {
  const self = this;
  const apply = closure_38.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function prefetchProject(projectId) {
  if (null == obj.getConjureSocket(projectId)) {
    ConjureWorkerTickets.prefetchWorkerTicket(projectId);
    const tmpResult = ConjureWorkerTickets;
  }
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (id == null) {
    id = null;
  }
  const obj2 = { userId: id, generation: ConjureProjectStore.getSessionGeneration() };
  const promise = getProject(projectId, undefined, obj2);
  promise.catch(() => {

  });
  obj = conjureProjectSockets;
  const result = map.set(projectId, { read: promise, at: Date.now(), session: obj2 });
  const obj3 = { read: promise, at: Date.now(), session: obj2 };
  const result1 = prefetchConjurePreviewFrame.prefetchConjurePreviewFrame(projectId);
  const tmpResult2 = prefetchConjurePreviewFrame;
}
export function takePrefetchedRead(arg0) {
  value = map.get(arg0);
  map.delete(arg0);
  let read = null;
  if (null != value) {
    const session = value.session;
    let tmp5 = session.generation === ConjureProjectStore.getSessionGeneration();
    if (tmp5) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (id == null) {
        id = null;
      }
      tmp5 = session.userId === id;
    }
    read = null;
    if (tmp5) {
      const _Date = Date;
      read = null;
      if (Date.now() - value.at < 5000) {
        read = value.read;
      }
    }
  }
  return read;
}
export { getProject };
export function createProject() {
  const self = this;
  const apply = closure_42.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function createRemix() {
  const self = this;
  const apply = closure_43.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function applyRemixPreview(id, remix_preview) {
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
}
export { fetchConjureApplication };
export function refreshPreviewApplication() {
  const self = this;
  const apply = closure_50.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function updateProjectSettings() {
  const self = this;
  const apply = closure_51.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function setGuildHints(first2, arg1) {
  return patchProject(first2, arg1);
}
export function fetchApplicationChannels() {
  const self = this;
  const apply = closure_52.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export { deleteProject };
export function deleteProjectInBackground(id, arg1) {
  deleteProject(id).then(() => {

  }, arg1);
}
export function refreshConjureInstallState(projectId) {
  const project = ConjureProjectStore.getProject(projectId);
  if (null != project) {
    getProject(projectId).catch(() => {

    });
    const promise = getProject(projectId);
    obj = UserActionCreators;
    const profile = obj.fetchProfile(conjureAppInServer.conjureProductionBotUserId(project), { withMutualGuilds: true });
    profile.catch(() => {

    });
  }
}
export function setSelectedProjectForGuild(guildId, c1) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_SELECT", guildId, projectId: importDefault });
}
export function selectGlobalChatProject(c1) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_GLOBAL_SELECT", projectId: importDefault });
}
export function clearGlobalChatProject(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_GLOBAL_CLEAR", projectId });
}