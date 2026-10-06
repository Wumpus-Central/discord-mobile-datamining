// === Module 14215: ? ===

// Module 14215
import ArgType from "ArgType" /* 14198 */;


export default () => (log) => {
  const result = ArgType.assertHasLoggerPlugin(log);
  let closure_0 = log;
  return {
    onConnect() {
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