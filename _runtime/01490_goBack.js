// _runtime/01490_goBack.js

export function goBack() {
  return { type: "GO_BACK" };
}
export const navigate = function navigate() {
  const items = [...arguments];
  if (typeof items[0] === "string") {
    [tmp8, tmp9, arr2] = items;
    if (typeof arr2 === "boolean") {
      const _console2 = console;
      console.warn(
        "Passing a boolean as the third argument to 'navigate' is deprecated. Pass '{ merge: true }' instead.",
      );
    }
    const obj = { name: tmp8, params: tmp9, merge: null, pop: null };
    let tmp10 = arr2;
    if (typeof arr2 !== "boolean") {
      let merge;
      if (arr2 != null) {
        merge = arr2.merge;
      }
      tmp10 = merge;
    }
    obj.merge = tmp10;
    let pop;
    if (arr2 != null) {
      pop = arr2.pop;
    }
    const action = { type: "NAVIGATE", payload: null };
    obj.pop = pop;
    action.payload = obj;
    return action;
  } else {
    const tmp = items[0] || {};
    if ("name" in tmp) {
      const _console = console;
      console.warn(
        "Passing an object as the argument to 'navigate' is deprecated. Use 'navigate(name, params, options)' instead.",
      );
      const action1 = { type: "NAVIGATE", payload: tmp };
      return action1;
    } else {
      const _Error = Error;
      const error = new Error(
        "You need to specify a name when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.",
      );
      throw error;
    }
  }
};
export const navigateDeprecated = function navigateDeprecated() {
  const items = [...arguments];
  if (typeof items[0] === "string") {
    const action = { type: "NAVIGATE_DEPRECATED", payload: null };
    [obj3.name, obj3.params] = items;
    action.payload = { name: null, params: null };
    return action;
  } else {
    const tmp = items[0] || {};
    if ("name" in tmp) {
      const action1 = { type: "NAVIGATE_DEPRECATED", payload: tmp };
      return action1;
    } else {
      const _Error = Error;
      const error = new Error(
        "You need to specify a name when calling navigateDeprecated with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigatelegacy for usage.",
      );
      throw error;
    }
  }
};
export function reset(payload) {
  const action = { type: "RESET", payload };
  return action;
}
export function setParams(params) {
  const action = { type: "SET_PARAMS", payload: { params } };
  return action;
}
export function replaceParams(params) {
  const action = { type: "REPLACE_PARAMS", payload: { params } };
  return action;
}
export function preload(name, params) {
  const action = { type: "PRELOAD", payload: { name, params } };
  return action;
}
