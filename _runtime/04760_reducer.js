// === Module 4760: reducer ===

// Module 4760 (reducer)
import ACTIONS from "ACTIONS" /* 4756 */;
import print2 from "print" /* 4761 */;

function registerHost(arg0, arg1) {

}
function removePortal(arg0, arg1, arg2) {
  let closure_0 = arg2;
  if (arg1 in arg0) {
    const obj2 = arg0[arg1];
    const findIndexResult = obj2.findIndex((name) => name.name === portalName);
    if (-1 !== findIndexResult) {
      const arr = arg0[arg1];
      arr.splice(findIndexResult, 1);
    }
    return arg0;
  } else {
    const _HermesInternal = HermesInternal;
    const obj = { component: reducer.name, method: removePortal.name, params: "Failed to remove portal '" + arg2 + "', '" + arg1 + "' was not registered!" };
    const print = print2.print;
    print2;
    print(obj);
    return arg0;
  }
}
function reducer(arg0, type) {
  let hostName;
  let hostName2;
  let node;
  let portalName;
  let portalName2;
  type = type.type;
  const obj = {};
  const merged = Object.assign(arg0);
  if (ACTIONS.ACTIONS.REGISTER_HOST === type) {
    const hostName3 = type.hostName;
    if (typeof registerHost === "function") {
      if (!(hostName3 in obj)) {
        obj[hostName3] = [];
      }
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else if (ACTIONS.ACTIONS.DEREGISTER_HOST === type) {
    delete obj[type.hostName];
    return obj;
  } else if (ACTIONS.ACTIONS.ADD_UPDATE_PORTAL === type) {
    ({ hostName: hostName2, portalName: portalName2, node } = type);
    if (!(hostName2 in obj)) {
      if (typeof registerHost === "function") {
        if (!(hostName2 in obj)) {
          obj[hostName2] = [];
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const obj4 = obj[hostName2];
    const findIndexResult = obj4.findIndex((name) => name.name === portalName2);
    if (-1 !== findIndexResult) {
      obj[hostName2][findIndexResult].node = node;
    } else {
      const arr2 = obj[hostName2];
      const obj2 = { name: portalName2, node };
      arr2.push(obj2);
    }
    return obj;
  } else if (ACTIONS.ACTIONS.REMOVE_PORTAL === type) {
    ({ hostName, portalName } = type);
    if (typeof removePortal === "function") {
      if (hostName in obj) {
        const obj3 = obj[hostName];
        const findIndexResult1 = obj3.findIndex((name) => name.name === portalName);
        if (-1 !== findIndexResult1) {
          const arr = obj[hostName];
          arr.splice(findIndexResult1, 1);
        }
      } else {
        const _HermesInternal = HermesInternal;
        const obj5 = { component: reducer.name, method: tmp4.name, params: "Failed to remove portal '" + portalName + "', '" + hostName + "' was not registered!" };
        const print = print2.print;
        print2;
        print(obj5);
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