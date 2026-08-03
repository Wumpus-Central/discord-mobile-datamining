// === Module 4072: registerHost ===

// Module 4072 (registerHost)
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
    let obj = _require(4073);
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
  let hostName;
  let hostName2;
  let node;
  let portalName;
  let portalName2;
  type = type.type;
  let obj = {};
  const merged = Object.assign(arg0);
  if (portalName(4068).ACTIONS.REGISTER_HOST === type) {
    const hostName4 = type.hostName;
    if (typeof registerHost !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    if (!(hostName4 in obj)) {
      obj[hostName4] = [];
    }
    return obj;
  } else if (tmp4(4068).ACTIONS.DEREGISTER_HOST === type) {
    const hostName3 = type.hostName;
    delete tmp[tmp2];
    return obj;
  } else if (tmp4(4068).ACTIONS.ADD_UPDATE_PORTAL === type) {
    ({ hostName: hostName2, portalName: portalName2, node } = type);
    portalName = portalName2;
    if (!(hostName2 in obj)) {
      if (typeof registerHost !== "fileFinishedImporting") {
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
  } else if (tmp4(4068).ACTIONS.REMOVE_PORTAL === type) {
    ({ hostName, portalName } = type);
    if (typeof removePortal !== "fileFinishedImporting") {
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
      tmp4(4073).print(obj);
      const tmp4Result = tmp4(4073);
    }
    return obj;
  } else {
    return arg0;
  }
}
arg5.reducer = reducer;