// _runtime/metro/14215__.js
import ArgType from "../14198_ArgType.js";

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
    },
  };
};
