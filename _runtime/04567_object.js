// _runtime/04567_object.js
let object = require;
object = function object() {

};

export default (arg0) => {
  if (object(606)(arg0)) {
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