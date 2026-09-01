// _runtime/14086_keys.js
const require = arg1;
const dependencyMap = arg6;
arg5.default = () => (arg0) => {
  const result = callback(table[0]).assertHasLoggerPlugin(arg0);
  callback = arg0;
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
