// === Module 14431: ? ===

// Module 14431
import emptyPromise from "emptyPromise" /* 14414 */;

require = arg1;
const dependencyMap = arg6;

export default () => (log) => {
  const result = emptyPromise.assertHasLoggerPlugin(log);
  closure_0 = log;
  return {
    onConnect() {
      log = console.log;
      console.log = () => {
        const items = [...arguments];
        log(...items);
        const items1 = [...items];
        log.log.apply(items1);
      };
      console.warn = () => {
        const items = [...arguments];
        warn(...items);
        log.warn(items[0]);
      };
      console.debug = () => {
        const items = [...arguments];
        debug(...items);
        log.debug(items[0]);
      };
    }
  };
};