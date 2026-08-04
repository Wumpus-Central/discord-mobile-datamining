// _runtime/01405_hasPropertyDescriptors.js
function hasPropertyDescriptors(arg0) {
  return require(564) /* flag */;
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (require(564) /* flag */) {
    try {
      return 1 !== require(564) /* flag */([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;