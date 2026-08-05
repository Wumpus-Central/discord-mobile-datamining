// _runtime/04434_flatten.js

export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = require("04435_baseFlatten.js") /* baseFlatten */(arg0, 1);
  } else {
    items = [];
  }
  return items;
};