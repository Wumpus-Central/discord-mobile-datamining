// _runtime/13489_text.js

export default (arg0) => {
  const tmp = require(13490)(arg0, "string");
  let text = tmp;
  if (!require(13504)(tmp)) {
    text = `${tmp}`;
  }
  return text;
};