// _runtime/04322_registerHost.js
import { print } from "04323_print.js";
const require = arg1;
const dependencyMap = arg6;
function registerHost(arg0, arg1) {

}
function removePortal(closure_21) {
  const _require = arg2;
  if (arg1 in closure_21) {
    const findIndexResult = closure_21[arg1].findIndex((name) => name.name === portalName);
    if (-1 !== findIndexResult) {
      closure_21[arg1].splice(findIndexResult, 1);
      const arr = closure_21[arg1];
    }
    return closure_21;
  } else {
    let obj = print;
    obj = { component: null, method: null, params: null };
    obj[0] = reducer.name;
    obj[1] = removePortal.name;
    const _HermesInternal = HermesInternal;
    obj[2] = "Failed to remove portal '" + arg2 + "', '" + arg1 + "' was not registered!";
    obj.print(obj);
    return closure_21;
  }
}
function reducer(arg0, type) {
  type = type.type;
  let obj = {};
  const merged = Object.assign(arg0);
  if (portalName(4318).ACTIONS.REGISTER_HOST === type) {
    const hostName4 = type.hostName;
    if (typeof registerHost !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (!(hostName4 in obj)) {
      obj[hostName4] = [];
    }
    return obj;
  } else if (tmp4(4318).ACTIONS.DEREGISTER_HOST === type) {
    const hostName3 = type.hostName;
    delete tmp[tmp2];
    return obj;
  } else if (tmp4(4318).ACTIONS.ADD_UPDATE_PORTAL === type) {
    ({ hostName: hostName2, portalName: portalName2, node } = type);
    portalName = portalName2;
    if (!(hostName2 in obj)) {
      if (typeof registerHost !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (!(hostName2 in obj)) {
        obj[hostName2] = [];
      }
    }
    const findIndexResult = obj[hostName2].findIndex((name) => name.name === portalName);
    if (-1 !== findIndexResult) {
      obj[hostName2][findIndexResult].node = node;
    } else {
      obj = { name: null, node: null };
      obj[0] = portalName2;
      obj[1] = node;
      let arr = obj[hostName2].push(obj);
      const arr2 = obj[hostName2];
    }
    return obj;
  } else if (tmp4(4318).ACTIONS.REMOVE_PORTAL === type) {
    ({ hostName, portalName } = type);
    if (typeof removePortal !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (hostName in obj) {
      const findIndexResult1 = obj[hostName].findIndex((name) => name.name === portalName);
      if (-1 !== findIndexResult1) {
        arr = obj[hostName];
        arr.splice(findIndexResult1, 1);
      }
      const obj4 = obj[hostName];
    } else {
      obj = { component: null, method: null, params: null };
      obj[0] = reducer.name;
      obj[1] = removePortal.name;
      const _HermesInternal = HermesInternal;
      obj[2] = "Failed to remove portal '" + portalName + "', '" + hostName + "' was not registered!";
      tmp4(4323).print(obj);
      const tmp4Result = tmp4(4323);
    }
    return obj;
  } else {
    return arg0;
  }
}
arg5.reducer = reducer;