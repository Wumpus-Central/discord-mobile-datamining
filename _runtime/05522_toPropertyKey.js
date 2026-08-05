// _runtime/05522_toPropertyKey.js

export default function toPropertyKey(arg0) {
  const tmp = require("05523_toPrimitive.js") /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};