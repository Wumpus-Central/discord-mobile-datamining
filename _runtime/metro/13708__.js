// _runtime/metro/13708__.js
import _mod13677 from "module_13677" /* 13677 */;
import element from "element" /* 13709 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13676 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13677(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;