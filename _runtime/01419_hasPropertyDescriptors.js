// === Module 1419: hasPropertyDescriptors ===

// Module 1419 (hasPropertyDescriptors)
function hasPropertyDescriptors(arg0) {
  return require(561) /* flag */;
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (require(561) /* flag */) {
    try {
      return 1 !== require(561) /* flag */([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;