// _runtime/04563_mod.js

export default function mod(arg0, arg1) {
  const result = arg0 % arg1;
  let sum = result;
  if (result < 0) {
    sum = result + arg1;
  }
  return require("metro/00566__.js")(sum);
};