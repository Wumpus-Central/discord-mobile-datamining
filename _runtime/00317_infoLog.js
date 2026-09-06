// _runtime/00317_infoLog.js

export default function infoLog() {
  const items = [...HermesBuiltin.copyRestArgs()];
  return console.log.apply(items);
}
