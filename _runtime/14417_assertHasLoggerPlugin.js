// _runtime/14417_assertHasLoggerPlugin.js
function hasLoggerPlugin(log) {
  let tmp = log;
  if (log) {
    tmp = "log" in log;
  }
  if (tmp) {
    tmp = typeof log.log === "function";
  }
  if (tmp) {
    tmp = "logImportant" in log;
  }
  if (tmp) {
    tmp = typeof log.logImportant === "function";
  }
  if (tmp) {
    tmp = "debug" in log;
  }
  if (tmp) {
    tmp = typeof log.debug === "function";
  }
  if (tmp) {
    tmp = "warn" in log;
  }
  if (tmp) {
    tmp = typeof log.warn === "function";
  }
  if (tmp) {
    tmp = "error" in log;
  }
  if (tmp) {
    tmp = typeof log.error === "function";
  }
  return tmp;
}

export default () => (arg0) => {
  closure_0 = arg0;
  return {
    features: {
      log() {
        const items = [...arguments];
        let first = items;
        if (items) {
          first = items;
          if (1 === items.length) {
            first = items[0];
          }
        }
        closure_0.send("log", { level: "debug", message: first }, false);
      },
      logImportant() {
        const items = [...arguments];
        let first = items;
        if (items) {
          first = items;
          if (1 === items.length) {
            first = items[0];
          }
        }
        closure_0.send("log", { level: "debug", message: first }, true);
      },
      debug(message) {
        let flag = arg1;
        if (arg1 === undefined) {
          flag = false;
        }
        return closure_0.send("log", { level: "debug", message }, flag);
      },
      warn(message) {
        return closure_0.send("log", { level: "warn", message }, true);
      },
      error(message, stack) {
        const error = { level: "error", message, stack };
        return closure_0.send("log", error, true);
      },
    },
  };
};
export { hasLoggerPlugin };
export const assertHasLoggerPlugin = (log) => {
  if (typeof hasLoggerPlugin === "function") {
    let tmp2 = log;
    if (log) {
      tmp2 = "log" in log;
    }
    if (tmp2) {
      tmp2 = typeof log.log === "function";
    }
    if (tmp2) {
      tmp2 = "logImportant" in log;
    }
    if (tmp2) {
      tmp2 = typeof log.logImportant === "function";
    }
    if (tmp2) {
      tmp2 = "debug" in log;
    }
    if (tmp2) {
      tmp2 = typeof log.debug === "function";
    }
    if (tmp2) {
      tmp2 = "warn" in log;
    }
    if (tmp2) {
      tmp2 = typeof log.warn === "function";
    }
    if (tmp2) {
      tmp2 = "error" in log;
    }
    if (tmp2) {
      tmp2 = typeof log.error === "function";
    }
    if (!tmp2) {
      const _Error = Error;
      const error = new Error(
        "This Reactotron client has not had the logger plugin applied to it. Make sure that you add `use(logger())` before adding this plugin.",
      );
      throw error;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
