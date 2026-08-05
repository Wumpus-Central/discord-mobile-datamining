// _runtime/07379_instrumentUnhandledRejection.js
const require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = require(7376) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection;
  require(7376) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    callback(table[0]).triggerHandlers("unhandledrejection", arg0);
    if (!onunhandledrejection) {
      return !onunhandledrejection;
    } else {
      const self = this;
      const apply = onunhandledrejection.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      const tmp2 = onunhandledrejection;
    }
  };
  require(7376) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  require(7373) /* addHandler */.addHandler("unhandledrejection", arg0);
  const obj = require(7373) /* addHandler */;
  require(7373) /* addHandler */.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};