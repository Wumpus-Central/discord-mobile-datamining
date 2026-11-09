// _runtime/metro/16577__.js
import emptyPromise from "../16560_emptyPromise.js";

require = arg1;
const dependencyMap = arg6;

export default () => (log) => {
  const result = emptyPromise.assertHasLoggerPlugin(log);
  closure_0 = log;
  return {
    onConnect() {
      log = console.log;
      console.log = () => {
        items = [...arguments];
        log(...items);
        const items1 = [...items];
        log.log.apply(items1);
      };
      console.warn = () => {
        items = [...arguments];
        warn(...items);
        log.warn(items[0]);
      };
      console.debug = () => {
        items = [...arguments];
        debug(...items);
        log.debug(items[0]);
      };
    },
  };
};
