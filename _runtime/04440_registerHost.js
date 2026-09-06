// _runtime/04440_registerHost.js
import ACTIONS from "04436_ACTIONS.js";
import print from "04441_print.js";

require = arg1;
const dependencyMap = arg6;
function registerHost(arg0, arg1) {}
function removePortal(arg0, arg1, arg2) {
  closure_0 = arg2;
  if (arg1 in arg0) {
    const findIndexResult = arg0[arg1].findIndex((name) => name.name === portalName);
    if (-1 !== findIndexResult) {
      arg0[arg1].splice(findIndexResult, 1);
    }
    return arg0;
  } else {
    const obj = { component: reducer.name, method: removePortal.name, params: null };
    const _HermesInternal = HermesInternal;
    obj.params = "Failed to remove portal '" + arg2 + "', '" + arg1 + "' was not registered!";
    obj.print(obj);
    return arg0;
  }
}
function reducer(arg0, type) {
  type = type.type;
  let obj = {};
  const merged = Object.assign(arg0);
  if (ACTIONS.ACTIONS.REGISTER_HOST === type) {
    const hostName4 = type.hostName;
    if (typeof registerHost === "function") {
      if (!(hostName4 in obj)) {
        obj[hostName4] = [];
      }
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (ACTIONS.ACTIONS.DEREGISTER_HOST === type) {
    const hostName3 = type.hostName;
    delete tmp[tmp2];
    return obj;
  } else if (ACTIONS.ACTIONS.ADD_UPDATE_PORTAL === type) {
    ({ hostName: hostName2, portalName: portalName2, node } = type);
    portalName = portalName2;
    if (!(hostName2 in obj)) {
      if (typeof registerHost === "function") {
        if (!(hostName2 in obj)) {
          obj[hostName2] = [];
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const findIndexResult = obj[hostName2].findIndex((name) => name.name === portalName);
    if (-1 !== findIndexResult) {
      obj[hostName2][findIndexResult].node = node;
    } else {
      obj = { name: portalName2, node };
      let arr = obj[hostName2].push(obj);
    }
    return obj;
  } else if (ACTIONS.ACTIONS.REMOVE_PORTAL === type) {
    ({ hostName, portalName } = type);
    if (typeof removePortal === "function") {
      if (hostName in obj) {
        const findIndexResult1 = obj[hostName].findIndex((name) => name.name === portalName);
        if (-1 !== findIndexResult1) {
          arr = obj[hostName];
          arr.splice(findIndexResult1, 1);
        }
      } else {
        obj = { component: reducer.name, method: tmp6.name, params: null };
        const _HermesInternal = HermesInternal;
        obj.params = "Failed to remove portal '" + portalName + "', '" + hostName + "' was not registered!";
        print.print(obj);
        const tmp4Result = print;
      }
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    return arg0;
  }
}

export { reducer };
