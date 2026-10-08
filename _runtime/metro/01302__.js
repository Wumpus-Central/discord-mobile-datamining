// _runtime/metro/01302__.js
import _mod1303 from "01303__.js";
import _mod1305 from "01305__.js";
import _mod1339 from "01339__.js";
import _mod1341 from "01341__.js";
import _mod1342 from "01342__.js";

let closure_2 = _mod1303 || _mod1341 || _mod1342;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const tmp32 = new _mod1305("Side channel does not contain " + _mod1339(arg0));
        throw tmp32;
      }
    },
    delete(arg0) {
      let deleteResult = set;
      if (deleteResult) {
        deleteResult = set.delete(arg0);
      }
      return deleteResult;
    },
    get(arg0) {
      value = set;
      if (set) {
        value = set.get(arg0);
      }
      return value;
    },
    has(arg0) {
      let hasItem = set;
      if (hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    },
    set(arg0, arg1) {
      obj = closure_0;
      if (!closure_0) {
        const tmp2 = closure_2();
        closure_0 = tmp2;
        obj = tmp2;
      }
      const result = obj.set(arg0, arg1);
    },
  };
  return obj;
}
