// === Module 535: getSideChannel ===

// Module 535 (getSideChannel)
import getSideChannelWeakMap from "getSideChannelWeakMap" /* 536 */;
import _mod574 from "module_574" /* 574 */;
import getSideChannelList from "getSideChannelList" /* 575 */;

let closure_2 = getSideChannelWeakMap || _mod574 || getSideChannelList;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        let tmp3 = closure_1_0(obj[3]);
        tmp3 = new tmp3("Side channel does not contain " + closure_1_0(obj[4])(arg0));
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
      let value = closure_0;
      if (closure_0) {
        value = closure_0.get(arg0);
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
        const tmp2 = closure_1_2();
        closure_0 = tmp2;
        obj = tmp2;
      }
      const result = obj.set(arg0, arg1);
    }
  };
  return obj;
};