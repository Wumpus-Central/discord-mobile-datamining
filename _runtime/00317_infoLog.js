// _runtime/00317_infoLog.js
arg5.default = function infoLog() {
  const items = [...HermesBuiltin.copyRestArgs()];
  return console.log.apply(items);
};