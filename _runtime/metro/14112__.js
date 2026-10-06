// _runtime/metro/14112__.js
import _mod14087 from "14087__.js";

let fn;
if (_mod14087) {
  fn = call.bind(call);
} else {
  fn = function () {
    return call(...arguments);
  };
}

export default fn;
