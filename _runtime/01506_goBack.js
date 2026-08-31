// _runtime/01506_goBack.js
arg5.goBack = function goBack() {
  return { type: "GO_BACK" };
};
arg5.navigate = function navigate() {
  const items = [...arguments];
  if (typeof items[0] === "string") {
    [tmp8, tmp9, arr2] = items;
    if (typeof arr2 === "boolean") {
      const _console2 = console;
      console.warn("Passing a boolean as the third argument to 'navigate' is deprecated. Pass '{ merge: true }' instead.");
    }
    let obj = { name: null, params: null, merge: null, pop: null };
    obj[0] = tmp8;
    obj[1] = tmp9;
    let tmp10 = arr2;
    if (typeof arr2 !== "boolean") {
      let merge;
      if (arr2 != null) {
        merge = arr2.merge;
      }
      tmp10 = merge;
    }
    obj[2] = tmp10;
    let pop;
    if (arr2 != null) {
      pop = arr2.pop;
    }
    obj = { type: "NAVIGATE", payload: null };
    obj[3] = pop;
    obj[1] = obj;
    return obj;
  } else {
    const tmp = items[0] || {};
    if ("name" in tmp) {
      const _console = console;
      console.warn("Passing an object as the argument to 'navigate' is deprecated. Use 'navigate(name, params, options)' instead.");
      obj = { type: "NAVIGATE", payload: null };
      obj[1] = tmp;
      return obj;
    } else {
      const _Error = Error;
      error = new Error("You need to specify a name when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.");
      throw error;
    }
  }
};
arg5.navigateDeprecated = function navigateDeprecated() {
  const items = [...arguments];
  if (typeof items[0] === "string") {
    let obj = { type: "NAVIGATE_DEPRECATED", payload: null };
    obj = { name: null, params: null };
    [obj3[0], obj3[1]] = items;
    obj[1] = obj;
    return obj;
  } else {
    const tmp = items[0] || {};
    if ("name" in tmp) {
      obj = { type: "NAVIGATE_DEPRECATED", payload: null };
      obj[1] = tmp;
      return obj;
    } else {
      const _Error = Error;
      error = new Error("You need to specify a name when calling navigateDeprecated with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigatelegacy for usage.");
      throw error;
    }
  }
};
arg5.reset = function reset(payload) {
  return { type: "RESET", payload };
};
arg5.setParams = function setParams(params) {
  const payload = { params };
  return { type: "SET_PARAMS", payload };
};
arg5.replaceParams = function replaceParams(params) {
  const payload = { params };
  return { type: "REPLACE_PARAMS", payload };
};
arg5.preload = function preload(name, params) {
  const payload = { name, params };
  return { type: "PRELOAD", payload };
};