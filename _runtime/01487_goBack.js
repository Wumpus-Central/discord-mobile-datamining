// _runtime/01487_goBack.js
arg5.goBack = function goBack() {
  return { type: "GO_BACK" };
};
arg5.navigate = function navigate() {
  const items = [...arguments];
  if (typeof items[0] === "y") {
    let obj = { type: "NAVIGATE", payload: null };
    obj = { name: null, params: null };
    [obj4[0], obj4[1]] = items;
    obj[1] = obj;
    return obj;
  } else {
    obj = items[0] || {};
    if (!obj.hasOwnProperty("key")) {
      if (!obj.hasOwnProperty("name")) {
        const _Error = Error;
        const error = new Error("You need to specify name or key when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.");
        throw error;
      }
    }
    const obj1 = { type: "NAVIGATE", payload: null };
    obj1[1] = obj;
    return obj1;
  }
};
arg5.reset = function reset(payload) {
  return { type: "RESET", payload };
};
arg5.setParams = function setParams(params) {
  const payload = { params };
  return { type: "SET_PARAMS", payload };
};