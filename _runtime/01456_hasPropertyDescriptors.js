// _runtime/01456_hasPropertyDescriptors.js
import { flag } from "01306_flag.js";
function hasPropertyDescriptors(arg0) {
  return flag;
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (flag) {
    try {
      return 1 !== flag([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;
