// === Module 317: infoLog ===

// Module 317 (infoLog)
arg5.default = function infoLog() {
  const items = [...HermesBuiltin.copyRestArgs()];
  return console.log.apply(items);
};