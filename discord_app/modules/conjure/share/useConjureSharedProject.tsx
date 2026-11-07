// === Module 12999: useConjureSharedProject ===

// Module 12999 (useConjureSharedProject)
import loadConjureSharedProjectDefault from "loadConjureSharedProject" /* 11719 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import UserStore from "UserStore" /* 1385 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 11713 */;

const require = globalThis.__r;

const require = fn;
const canRemixProject = fn(6899).canRemixProject;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProject.tsx");

export default function useConjureSharedProject(arg0) {
  _require = arg0;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  c1 = tmp;
  let stateFromStores;
  let projectId;
  let stateFromStores2;
  let stateFromStores3;
  closure_7 = undefined;
  items = [ConjureSharedProjectStore];
  const items1 = [arg0, tmp];
  stateFromStores = require("initialize").useStateFromStores(items, () => ConjureSharedProjectStore.getStatus(closure_0, c1), items1);
  let obj = require("initialize");
  const items2 = [projectId];
  const items3 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let application = ApplicationStore.getApplication(closure_0);
    if (application == null) {
      application = null;
    }
    return application;
  }, items3);
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  projectId = null;
  if ("ready" === type) {
    projectId = stateFromStores.projectId;
  }
  let obj2 = require("initialize");
  const items4 = [stateFromStores3];
  const items5 = [projectId];
  stateFromStores2 = require("initialize").useStateFromStores(items4, () => {
    let tmp2 = null;
    if (null != projectId) {
      let project = ConjureProjectStore.getProject(tmp);
      if (project == null) {
        project = null;
      }
      tmp2 = project;
    }
    return tmp2;
  }, items5);
  const tmp2Result = require("initialize");
  const items6 = [stateFromStores2];
  stateFromStores3 = require("initialize").useStateFromStores(items6, () => {
    const currentUser = stateFromStores2.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (id == null) {
      id = null;
    }
    return id;
  });
  let tmp10 = null == stateFromStores;
  if (!tmp10) {
    tmp10 = null != projectId && null == stateFromStores2;
    const tmp11 = null != projectId && null == stateFromStores2;
  }
  closure_7 = tmp10;
  const items7 = [arg0, tmp, tmp10, stateFromStores3];
  const effect = stateFromStores1.useEffect(() => {
    let tmp = closure_7;
    if (closure_7) {
      tmp = null != stateFromStores3;
    }
    if (tmp) {
      loadConjureSharedProjectDefault(closure_0, c1);
    }
  }, items7);
  const items8 = [stateFromStores, stateFromStores1, stateFromStores2];
  return stateFromStores1.useMemo(() => {
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("unavailable" !== stateFromStores.type) {
          if ("no_access" !== stateFromStores.type) {
            if ("expired" !== stateFromStores.type) {
              if (null == stateFromStores1) {
                let obj = { type: "unavailable" };
              } else if ("info_only" === stateFromStores.type) {
                const obj2 = { type: "info_only", application: stateFromStores1 };
                obj = obj2;
              } else if (null == stateFromStores2) {
                obj = { type: "loading" };
              } else {
                obj = { type: "ready", application: stateFromStores1, project: stateFromStores2, canRemix: null };
                let ticketValid = stateFromStores.ticketValid;
                if (!ticketValid) {
                  ticketValid = canRemixProject(stateFromStores2);
                }
                obj.canRemix = ticketValid;
              }
            }
          }
        }
        const obj3 = { type: stateFromStores.type };
        obj = obj3;
      }
      return obj;
    }
    obj = { type: "loading" };
  }, items8);
};