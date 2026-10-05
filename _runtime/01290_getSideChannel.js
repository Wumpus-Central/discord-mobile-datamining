// === Module 1290: getSideChannel ===

// Module 1290 (getSideChannel)
import _mod1291 from "module_1291" /* 1291 */;
import _mod1293 from "module_1293" /* 1293 */;
import inspect_ from "inspect_" /* 1327 */;
import _mod1329 from "module_1329" /* 1329 */;
import getSideChannelList from "getSideChannelList" /* 1330 */;

let closure_0;

let closure_2 = _mod1291 || _mod1329 || getSideChannelList;
_mod1291 || _mod1329 || getSideChannelList;

export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const self = this;
        const self2 = this;
        const tmp3 = _mod1293;
        const tmp32 = new tmp3("Side channel does not contain " + inspect_(arg0));
        throw tmp32;
      }
    },
    delete: (arg0) => {
      const deleteResult = set && set.delete(arg0);
      return deleteResult;
    },
    get(arg0) {
      const value = set && set.get(arg0);
      return value;
    },
    has(arg0) {
      const hasItem = set && set.has(arg0);
      return hasItem;
    },
    set(arg0, arg1) {
      obj = closure_0;
      if (!obj) {
        const tmp2 = closure_2();
        closure_0 = tmp2;
        obj = tmp2;
      }
      const result = obj.set(arg0, arg1);
    }
  };
  return obj;
};