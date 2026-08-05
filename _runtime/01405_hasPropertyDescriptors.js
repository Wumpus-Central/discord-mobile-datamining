// _runtime/01405_hasPropertyDescriptors.js
import { flag } from "00564_flag.js";
function hasPropertyDescriptors(arg0) {
  return flag /* flag */;
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (flag /* flag */) {
    try {
      return 1 !== flag /* flag */([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;