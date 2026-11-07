// discord_app/modules/conjure/share/loadConjureSharedProject.tsx
import ApplicationActionCreatorsDefault from "../../applications/ApplicationActionCreators.tsx";
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import conjureProjectLink from "conjureProjectLink.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjureSharedProjectStore from "ConjureSharedProjectStore.tsx";
import Dispatcher from "../../../Dispatcher.tsx";

require = fn;
function resetSessionLoads() {
  if (null != obj2) {
    const backoffs = obj2.backoffs;
    const values = backoffs.values();
    for (const item10010 of values) {
      let cancelResult = item10010.cancel();
      continue;
    }
  }
}
function load() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _load(arg0, arg1, arg2) {
  let loading = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value, arg2) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = loading;
            closure_131_1 = closure_1;
            closure_131_2 = closure_2;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            const result = conjureProjectLink.conjureProjectLinkCode(closure_1, closure_2);
            closure_131_3 = result;
            const loading3 = loading.loading;
            loading3.add(result);
            if (null == status.getStatus(closure_1, closure_2)) {
              dispatchStatus(result, { type: "loading" });
            }
            closure_131_4 = null;
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj6 = {
              value: (function resolveStatus() {
                const self = this;
                const apply = closure_1_12.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(closure_1, closure_2, loading),
              done: false,
            };
            return obj6;
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_131_4 = value;
            c5 = 0;
          }
          loading = closure_131_0.loading;
          loading.delete(closure_131_3);
          if (closure_131_0 !== closure_132_8) {
            let hasItem;
            if (closure_132_8 != null) {
              const loading2 = tmp22.loading;
              hasItem = loading2.has(closure_131_3);
            }
            let tmp26 = true === hasItem;
            if (!tmp26) {
              status = closure_132_6.getStatus(closure_131_1, closure_131_2);
              let type;
              if (status != null) {
                type = status.type;
              }
              tmp26 = "loading" !== type;
            }
            if (!tmp26) {
              closure_132_13(closure_131_3, null);
            }
            c7 = 3;
          } else {
            closure_132_0(closure_132_2[5]);
          }
          const backoffs = closure_131_0.backoffs;
          closure_131_5 = backoffs.get(closure_131_3);
          if (null == closure_131_4) {
            if (null == closure_131_5) {
              const tmp62 = new closure_132_1(closure_132_2[8])(5000, 300000);
              closure_131_5 = tmp62;
              const backoffs3 = closure_131_0.backoffs;
              const result1 = backoffs3.set(closure_131_3, closure_131_5);
            }
            closure_131_5.fail(() => {
              let hasItem = loading !== closure_2_8;
              if (!hasItem) {
                loading = loading.loading;
                hasItem = loading.has(closure_1_3);
              }
              if (!hasItem) {
                closure_2_10(loading, closure_1_1, closure_1_2);
              }
            });
            c7 = 3;
            const obj7 = { value: undefined, done: true };
            return obj7;
          } else {
            if (closure_131_5 != null) {
              obj3.succeed();
            }
            const backoffs2 = closure_131_0.backoffs;
            backoffs2.delete(closure_131_3);
            closure_132_13(closure_131_3, closure_131_4);
            obj3 = closure_131_5;
          }
        }
      } catch (tmp73) {
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp73;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_12 = async function _resolveStatus(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_5 = tmp2;
          closure_4 = tmp6;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = closure_2;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          if (!hydrated.isHydrated(closure_0)) {
            items = [closure_0];
            c8 = 1;
            c9 = 1;
            const obj5 = { value: ApplicationActionCreatorsDefault.fetchApplications(items), done: false };
            return obj5;
          }
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj7 = { value, done: true };
          return obj7;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else if (closure_133_5.getProjectLimitFailureCode() === closure_133_7.INVALID_ACCESS) {
          c9 = 3;
          const obj9 = { value: { type: "info_only" }, done: true };
          return obj9;
        } else {
          closure_132_5 = false;
          c7 = 1;
          const obj6 = closure_133_0(closure_133_2[5]);
          const session = closure_132_2.session;
          c3 = closure_132_1;
          if (closure_132_1 == null) {
            c3 = undefined;
          }
          c8 = 4;
          c9 = 1;
          const obj10 = { value: obj6.getProject(closure_132_3, undefined, session, c3), done: false };
          return obj10;
        }
      } else if (3 === tmp6) {
        c7 = 0;
        closure_132_7 = closure_6;
        const tmp32 = closure_133_1(closure_133_2[10])(closure_132_7);
        if (closure_133_7.INVALID_ACCESS !== tmp32) {
          if (closure_133_7.UNKNOWN_CONJURE_PROJECT !== tmp32) {
            throw closure_132_7;
          }
        }
        if (null == closure_132_1) {
          c9 = 3;
        } else {
          closure_133_0(closure_133_2[7]);
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        c9 = 3;
        const obj15 = { value, done: true };
        return obj15;
      } else {
        closure_132_6 = value;
        let tmp9 = null != closure_132_1;
        if (tmp9) {
          tmp9 = true === closure_132_6.body.share_ticket_valid;
        }
        closure_132_5 = tmp9;
        c7 = 0;
        if (null == closure_132_1) {
          const ticketOnlyProjectIds2 = closure_132_2.ticketOnlyProjectIds;
          ticketOnlyProjectIds2.delete(closure_132_3);
        } else {
          let tmp13 = closure_132_5;
          if (closure_132_5) {
            tmp13 = !closure_132_4;
          }
          if (tmp13) {
            const ticketOnlyProjectIds = closure_132_2.ticketOnlyProjectIds;
            ticketOnlyProjectIds.add(closure_132_3);
          }
        }
        const obj = { type: "ready", projectId: closure_132_3, ticketValid: closure_132_5 };
        c9 = 3;
      }
      const application = closure_133_4.getApplication(closure_132_0);
      let conjureProjectId;
      if (application != null) {
        conjureProjectId = application.conjureProjectId;
      }
      closure_132_3 = conjureProjectId;
      if (null == closure_132_3) {
        c9 = 3;
        const obj16 = { value: { type: "unavailable" }, done: true };
        return obj16;
      } else {
        let tmp69 = null != closure_133_5.getProject(closure_132_3);
        if (tmp69) {
          const ticketOnlyProjectIds3 = closure_132_2.ticketOnlyProjectIds;
          tmp69 = !ticketOnlyProjectIds3.has(closure_132_3);
        }
        closure_132_4 = tmp69;
        if (null == closure_132_1) {
          if (closure_132_4) {
            const obj17 = { type: "ready", projectId: closure_132_3, ticketValid: false };
            c9 = 3;
            const obj18 = { value: obj17, done: true };
            return obj18;
          }
        }
        c8 = 2;
        c9 = 1;
        const obj19 = { value: closure_133_0(closure_133_2[5]).fetchProjectLimit(), done: false };
        return obj19;
      }
    } catch (tmp78) {
      closure_6 = tmp78;
      if (tmp3 === c7) {
        c9 = tmp;
        throw tmp78;
      } else {
        c8 = tmp;
      }
    }
  }
};
function dispatchStatus(linkCode, status) {
  Dispatcher.dispatch({ type: "CONJURE_SHARED_PROJECT_STATUS", linkCode, status });
}
const AbortCodes = fn(1072).AbortCodes;
const subscription = Dispatcher.subscribe("LOGOUT", resetSessionLoads);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/loadConjureSharedProject.tsx");

export default function loadConjureSharedProject(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  let isCurrentSessionResult = null != obj2;
  if (isCurrentSessionResult) {
    isCurrentSessionResult = ConjureActionCreators.isCurrentSession(obj2.session);
  }
  if (!isCurrentSessionResult) {
    resetSessionLoads();
    obj2 = {
      session: ConjureActionCreators.currentSession(),
      loading: null,
      backoffs: null,
      ticketOnlyProjectIds: null,
    };
    const _Set = Set;
    const set = new Set();
    obj2.loading = set;
    const _Map = Map;
    const map = new Map();
    obj2.backoffs = map;
    const _Set2 = Set;
    const set1 = new Set();
    obj2.ticketOnlyProjectIds = set1;
  }
  if (null != obj2.session.userId) {
    const result = conjureProjectLink.conjureProjectLinkCode(arg0, tmp);
    const loading = tmp23.loading;
    if (!loading.has(result)) {
      const backoffs = tmp23.backoffs;
      value = backoffs.get(result);
      let pending;
      if (value != null) {
        pending = value.pending;
      }
      if (true !== pending) {
        const status = ConjureSharedProjectStore.getStatus(arg0, tmp);
        let tmp28 = null == status;
        if (!tmp28) {
          let tmp29 = "ready" === status.type;
          if (tmp29) {
            tmp29 = null == ConjureProjectStore.getProject(status.projectId);
          }
          tmp28 = tmp29;
        }
        if (tmp28) {
          load(tmp23, arg0, tmp);
        }
      }
    }
  }
}
