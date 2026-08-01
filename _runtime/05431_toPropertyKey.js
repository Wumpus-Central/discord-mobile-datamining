// === Module 5431: toPropertyKey ===

// Module 5431 (toPropertyKey)

export default function toPropertyKey(arg0) {
  const tmp = require(5432) /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};