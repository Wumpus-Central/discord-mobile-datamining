// === Module 4683: object ===

// Module 4683 (object)
function object() {

}

export default (arg0) => {
  if (object(521)(arg0)) {
    if (create) {
      return create(arg0);
    } else {
      object.prototype = arg0;
      object.prototype = undefined;
      return Object.create(object.prototype);
    }
  } else {
    return {};
  }
};