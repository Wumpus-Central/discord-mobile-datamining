// _runtime/01405_hasPropertyDescriptors.js
function hasPropertyDescriptors(arg0) {
  return require("00564_flag.js") /* flag */;
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (require("00564_flag.js") /* flag */) {
    try {
      return 1 !== require("00564_flag.js") /* flag */([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;