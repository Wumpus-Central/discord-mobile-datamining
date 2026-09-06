// === Module 1456: hasPropertyDescriptors ===

// Module 1456 (hasPropertyDescriptors)
function hasPropertyDescriptors(arg0) {
  return require(1306) /* flag */;
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (require(1306) /* flag */) {
    try {
      return 1 !== require(1306) /* flag */([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;