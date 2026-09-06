// === Module 14420: assertHasStateResponsePlugin ===

// Module 14420 (assertHasStateResponsePlugin)
function hasStateResponsePlugin(stateActionComplete) {
  let tmp = stateActionComplete;
  if (stateActionComplete) {
    tmp = "stateActionComplete" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateActionComplete === "function";
  }
  if (tmp) {
    tmp = "stateValuesResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateValuesResponse === "function";
  }
  if (tmp) {
    tmp = "stateKeysResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateKeysResponse === "function";
  }
  if (tmp) {
    tmp = "stateValuesChange" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateValuesChange === "function";
  }
  if (tmp) {
    tmp = "stateBackupResponse" in stateActionComplete;
  }
  if (tmp) {
    tmp = typeof stateActionComplete.stateBackupResponse === "function";
  }
  return tmp;
}

export default () => (arg0) => {
  closure_0 = arg0;
  return {
    features: {
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
      stateValuesChange(changes) {
        let sendResult = changes.length > 0;
        if (sendResult) {
          const obj = { changes };
          sendResult = closure_0.send("state.values.change", obj);
        }
        return sendResult;
      },
      stateBackupResponse(state) {
        return closure_0.send("state.backup.response", { state });
      }
    }
  };
};
export { hasStateResponsePlugin };
export const assertHasStateResponsePlugin = (stateActionComplete) => {
  if (typeof hasStateResponsePlugin === "function") {
    let tmp2 = stateActionComplete;
    if (stateActionComplete) {
      tmp2 = "stateActionComplete" in stateActionComplete;
    }
    if (tmp2) {
      tmp2 = typeof stateActionComplete.stateActionComplete === "function";
    }
    if (tmp2) {
      tmp2 = "stateValuesResponse" in stateActionComplete;
    }
    if (tmp2) {
      tmp2 = typeof stateActionComplete.stateValuesResponse === "function";
    }
    if (tmp2) {
      tmp2 = "stateKeysResponse" in stateActionComplete;
    }
    if (tmp2) {
      tmp2 = typeof stateActionComplete.stateKeysResponse === "function";
    }
    if (tmp2) {
      tmp2 = "stateValuesChange" in stateActionComplete;
    }
    if (tmp2) {
      tmp2 = typeof stateActionComplete.stateValuesChange === "function";
    }
    if (tmp2) {
      tmp2 = "stateBackupResponse" in stateActionComplete;
    }
    if (tmp2) {
      tmp2 = typeof stateActionComplete.stateBackupResponse === "function";
    }
    if (!tmp2) {
      const _Error = Error;
      const error = new Error("This Reactotron client has not had the state responses plugin applied to it. Make sure that you add `use(stateResponse())` before adding this plugin.");
      throw error;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};