// _runtime/05431_toPropertyKey.js

export default function toPropertyKey(arg0) {
  const tmp = require(5432) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};