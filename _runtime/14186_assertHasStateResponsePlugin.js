// _runtime/14186_assertHasStateResponsePlugin.js
function hasStateResponsePlugin(stateActionComplete) {
  return (
    stateActionComplete &&
    "stateActionComplete" in stateActionComplete &&
    typeof stateActionComplete.stateActionComplete === "function" &&
    "stateValuesResponse" in stateActionComplete &&
    typeof stateActionComplete.stateValuesResponse === "function" &&
    "stateKeysResponse" in stateActionComplete &&
    typeof stateActionComplete.stateKeysResponse === "function" &&
    "stateValuesChange" in stateActionComplete &&
    typeof stateActionComplete.stateValuesChange === "function" &&
    "stateBackupResponse" in stateActionComplete &&
    typeof stateActionComplete.stateBackupResponse === "function"
  );
}

export default () => (arg0) => {
  let closure_0 = arg0;
  let obj = {
    features: {
      stateActionComplete(name, action) {
        let flag = arg2;
        if (arg2 === undefined) {
          flag = false;
        }
        const obj = { name, action };
        return closure_0.send("state.action.complete", obj, flag);
      },
      stateValuesResponse(path, value) {
        let flag = arg2;
        if (arg2 === undefined) {
          flag = true;
        }
        const obj = { path, value, valid: flag };
        return closure_0.send("state.values.response", obj);
      },
      stateKeysResponse(path, keys) {
        let flag = arg2;
        if (arg2 === undefined) {
          flag = true;
        }
        const obj = { path, keys, valid: flag };
        return closure_0.send("state.keys.response", obj);
      },
      stateValuesChange(changes) {
        let sendResult = changes.length > 0;
        if (sendResult) {
          const obj = { changes };
          sendResult = closure_0.send("state.values.change", obj);
        }
        return sendResult;
      },
      stateBackupResponse(state) {
        const obj = { state };
        return closure_0.send("state.backup.response", obj);
      },
    },
  };
  return obj;
};
export { hasStateResponsePlugin };
export const assertHasStateResponsePlugin = function (stateActionComplete) {
  if (typeof hasStateResponsePlugin === "function") {
    const tmp2 =
      stateActionComplete &&
      "stateActionComplete" in stateActionComplete &&
      typeof stateActionComplete.stateActionComplete === "function" &&
      "stateValuesResponse" in stateActionComplete &&
      typeof stateActionComplete.stateValuesResponse === "function" &&
      "stateKeysResponse" in stateActionComplete &&
      typeof stateActionComplete.stateKeysResponse === "function" &&
      "stateValuesChange" in stateActionComplete &&
      typeof stateActionComplete.stateValuesChange === "function" &&
      "stateBackupResponse" in stateActionComplete &&
      typeof stateActionComplete.stateBackupResponse === "function";
    if (!tmp2) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(
        "This Reactotron client has not had the state responses plugin applied to it. Make sure that you add `use(stateResponse())` before adding this plugin.",
      );
      throw error;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
