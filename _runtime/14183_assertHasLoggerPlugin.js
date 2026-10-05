// _runtime/14183_assertHasLoggerPlugin.js
function hasLoggerPlugin(log) {
  return (
    log &&
    "log" in log &&
    typeof log.log === "function" &&
    "logImportant" in log &&
    typeof log.logImportant === "function" &&
    "debug" in log &&
    typeof log.debug === "function" &&
    "warn" in log &&
    typeof log.warn === "function" &&
    "error" in log &&
    typeof log.error === "function"
  );
}

export default () => (arg0) => {
  let closure_0 = arg0;
  let obj = {
    features: {
      log() {
        const items = [...arguments];
        let first = items;
        if (first) {
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
        if (first) {
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
        const obj = { level: "debug", message };
        return closure_0.send("log", obj, flag);
      },
      warn(message) {
        const obj = { level: "warn", message };
        return closure_0.send("log", obj, true);
      },
      error(message, stack) {
        const error = { level: "error", message, stack };
        return closure_0.send("log", error, true);
      },
    },
  };
  return obj;
};
export { hasLoggerPlugin };
export const assertHasLoggerPlugin = function (log) {
  if (typeof hasLoggerPlugin === "function") {
    const tmp2 =
      log &&
      "log" in log &&
      typeof log.log === "function" &&
      "logImportant" in log &&
      typeof log.logImportant === "function" &&
      "debug" in log &&
      typeof log.debug === "function" &&
      "warn" in log &&
      typeof log.warn === "function" &&
      "error" in log &&
      typeof log.error === "function";
    if (!tmp2) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(
        "This Reactotron client has not had the logger plugin applied to it. Make sure that you add `use(logger())` before adding this plugin.",
      );
      throw error;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
