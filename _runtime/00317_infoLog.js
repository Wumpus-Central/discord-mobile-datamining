// === Module 317: infoLog ===

// Module 317 (infoLog)

export default function infoLog() {
  items = [...HermesBuiltin.copyRestArgs()];
  return console.log.apply(items);
};