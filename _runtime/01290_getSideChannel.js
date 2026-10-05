// _runtime/01290_getSideChannel.js
import _mod1291 from "metro/01291__.js";
import _mod1293 from "metro/01293__.js";
import inspect_ from "01327_inspect_.js";
import _mod1329 from "metro/01329__.js";
import getSideChannelList from "01330_getSideChannelList.js";

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
    },
  };
  return obj;
}
