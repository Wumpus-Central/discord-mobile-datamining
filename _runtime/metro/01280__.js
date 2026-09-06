// _runtime/metro/01280__.js
import _mod1281 from "01281__.js";
import _mod1283 from "01283__.js";
import _mod1317 from "01317__.js";
import _mod1319 from "01319__.js";
import _mod1320 from "01320__.js";

let closure_2 = _mod1281 || _mod1319 || _mod1320;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        let tmp3 = _mod1283;
        tmp3 = new tmp3("Side channel does not contain " + _mod1317(arg0));
        throw tmp3;
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
