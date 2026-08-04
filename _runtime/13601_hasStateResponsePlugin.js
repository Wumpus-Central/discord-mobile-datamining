arg5.assertHasStateResponsePlugin = undefined;
arg5.default = undefined;
arg5.hasStateResponsePlugin = undefined;
arg5.default = () => (arg0) => {
  let closure_0 = arg0;
  const features = {
    stateActionComplete(name, action) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      return closure_0.send("state.action.complete", { name, action }, flag);
    },
    stateValuesResponse(path, value) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = true;
      }
      return closure_0.send("state.values.response", { path, value, valid: flag });
    },
    stateKeysResponse(path, keys) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = true;
      }
      return closure_0.send("state.keys.response", { path, keys, valid: flag });
    },
    stateValuesChange(arg0) {
      let sendResult = arg0.length > 0;
      if (sendResult) {
        const obj = { changes: null };
        obj[0] = arg0;
        sendResult = closure_0.send("state.values.change", obj);
      }
      return sendResult;
    },
    stateBackupResponse(state) {
      return closure_0.send("state.backup.response", { state });
    }
  };
  return { features };
};
function hasStateResponsePlugin(stateActionComplete) {
  let tmp = stateActionComplete;
  if (stateActionComplete) {
    tmp = "stateActionComplete" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateActionComplete === "find";
  }
  if (tmp) {
    tmp = "stateValuesResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateValuesResponse === "find";
  }
  if (tmp) {
    tmp = "stateKeysResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateKeysResponse === "find";
  }
  if (tmp) {
    tmp = "stateValuesChange" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateValuesChange === "find";
  }
  if (tmp) {
    tmp = "stateBackupResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateBackupResponse === "find";
  }
  return tmp;
}
arg5.hasStateResponsePlugin = hasStateResponsePlugin;
arg5.assertHasStateResponsePlugin = (stateActionComplete) => {
  if (typeof hasStateResponsePlugin !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = stateActionComplete;
  if (stateActionComplete) {
    tmp = "stateActionComplete" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateActionComplete === "find";
  }
  if (tmp) {
    tmp = "stateValuesResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateValuesResponse === "find";
  }
  if (tmp) {
    tmp = "stateKeysResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateKeysResponse === "find";
  }
  if (tmp) {
    tmp = "stateValuesChange" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateValuesChange === "find";
  }
  if (tmp) {
    tmp = "stateBackupResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateBackupResponse === "find";
  }
  if (!tmp) {
    const _Error = Error;
    const error = new Error("This Reactotron client has not had the state responses plugin applied to it. Make sure that you add `use(stateResponse())` before adding this plugin.");
    throw error;
  }
};