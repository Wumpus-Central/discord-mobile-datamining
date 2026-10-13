// _runtime/metro/18486__.js
import _mod18487 from "18487__.js";
import capitalize from "../18495_capitalize.js";

export default _mod18487((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
