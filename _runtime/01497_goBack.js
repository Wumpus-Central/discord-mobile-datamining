// === Module 1497: goBack ===

// Module 1497 (goBack)

export function goBack() {
  return { type: "GO_BACK" };
}
export const navigate = function navigate() {
  let arr2;
  let pop;
  let tmp6;
  let tmp7;
  let tmp8;
  const items = [...arguments];
  if (typeof items[0] === "string") {
    [tmp6, tmp7, arr2] = items;
    if (typeof arr2 === "boolean") {
      const _console2 = console;
      console.warn("Passing a boolean as the third argument to 'navigate' is deprecated. Pass '{ merge: true }' instead.");
    }
    const obj = { name: tmp6, params: tmp7, merge: tmp8, pop };
    tmp8 = arr2;
    if (typeof arr2 !== "boolean") {
      let merge;
      if (arr2 != null) {
        merge = arr2.merge;
      }
      tmp8 = merge;
    }
    pop = undefined;
    if (arr2 != null) {
      pop = arr2.pop;
    }
    const action = { type: "NAVIGATE", payload: obj };
    return action;
  } else {
    const tmp = items[0] || {};
    if ("name" in tmp) {
      const _console = console;
      console.warn("Passing an object as the argument to 'navigate' is deprecated. Use 'navigate(name, params, options)' instead.");
      const action1 = { type: "NAVIGATE", payload: tmp };
      return action1;
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("You need to specify a name when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.");
      throw error;
    }
  }
};
export const navigateDeprecated = function navigateDeprecated() {
  let obj;
  const items = [...arguments];
  if (typeof items[0] === "string") {
    const action = { type: "NAVIGATE_DEPRECATED", payload: obj };
    obj = { name: null, params: null };
    [obj3.name, obj3.params] = items;
    return action;
  } else {
    const tmp = items[0] || {};
    if ("name" in tmp) {
      const action1 = { type: "NAVIGATE_DEPRECATED", payload: tmp };
      return action1;
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("You need to specify a name when calling navigateDeprecated with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigatelegacy for usage.");
      throw error;
    }
  }
};
export function reset(payload) {
  const action = { type: "RESET", payload };
  return action;
}
export function setParams(params) {
  const action = { type: "SET_PARAMS", payload: obj };
  return action;
}
export function replaceParams(params) {
  const action = { type: "REPLACE_PARAMS", payload: obj };
  return action;
}
export function preload(name, params) {
  const action = { type: "PRELOAD", payload: obj };
  return action;
}