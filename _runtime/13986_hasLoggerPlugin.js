// === Module 13986: hasLoggerPlugin ===

// Module 13986 (hasLoggerPlugin)
arg5.assertHasLoggerPlugin = undefined;
arg5.default = undefined;
arg5.hasLoggerPlugin = undefined;
arg5.default = () => (arg0) => {
  closure_0 = arg0;
  const features = {
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
      return closure_0.send("log", { level: "error", message, stack }, true);
    }
  };
  return { features };
};
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
arg5.hasLoggerPlugin = hasLoggerPlugin;
arg5.assertHasLoggerPlugin = (log) => {
  if (typeof hasLoggerPlugin !== "function") {
    HermesBuiltin.throwTypeError();
  }
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
  if (!tmp) {
    const _Error = Error;
    error = new Error("This Reactotron client has not had the logger plugin applied to it. Make sure that you add `use(logger())` before adding this plugin.");
    throw error;
  }
};