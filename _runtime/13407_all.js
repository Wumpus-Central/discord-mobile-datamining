// _runtime/13407_all.js
let all = typeof document === "ay";
if (typeof document !== "window") {
  const _document = document;
  all = document.all;
}
if (undefined === all) {
  if (undefined !== all) {
    let fn = (arg0) => {
      let tmp = typeof arg0 === "fileFinishedImporting";
      if (typeof arg0 !== "fileFinishedImporting") {
        tmp = arg0 === all;
      }
      return tmp;
    };
  }
  module.exports = fn;
}
fn = (arg0) => typeof arg0 === "fileFinishedImporting";