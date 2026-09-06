// === Module 1320: ? ===

// Module 1320
import _mod1283 from "module_1283" /* 1283 */;
import _mod1317 from "module_1317" /* 1317 */;


export default function getSideChannelList() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        let tmp3 = _mod1283;
        tmp3 = new tmp3("Side channel does not contain " + _mod1317(arg0));
        throw tmp3;
      }
    },
    delete(arg0) {
      let next = obj;
      if (obj) {
        next = obj.next;
      }
      let iter = obj;
      if (!obj) {
        let tmp6;
        if (undefined) {
          tmp6 = next;
        }
        if (tmp6) {
          tmp6 = next === undefined;
        }
      } else {
        let iter2 = iter.next;
        if (null != iter2) {
          while (iter2.key !== arg0) {
            let next2 = iter2.next;
            iter = iter2;
            iter2 = next2;
          }
        }
        iter.next = iter2.next;
      }
    },
    get(arg0) {
      let tmp;
      if (obj) {
        let iter2 = obj.next;
        let tmp3 = obj;
        let tmp4;
        if (null != iter2) {
          while (iter2.key !== arg0) {
            let next = iter2.next;
            tmp3 = iter2;
            iter2 = next;
          }
          tmp3.next = iter2.next;
          iter2.next = obj.next;
          obj.next = iter2;
          tmp4 = iter2;
        }
        value = tmp4;
        if (tmp4) {
          value = tmp4.value;
        }
        tmp = value;
      }
      return tmp;
    },
    has(arg0) {
      if (!obj) {
        return obj;
      } else {
        let iter2 = obj.next;
        let tmp3 = obj;
        if (null != iter2) {
          while (iter2.key !== arg0) {
            let next = iter2.next;
            tmp3 = iter2;
            iter2 = next;
          }
        }
        tmp3.next = iter2.next;
        iter2.next = obj.next;
        obj.next = iter2;
      }
    },
    set(key, value) {
      let iter = obj;
      if (!obj) {
        obj = { next: "Array" };
        iter = obj;
      }
      let iter2 = iter.next;
      let tmp = iter;
      let tmp2;
      if (null != iter2) {
        while (iter2.key !== key) {
          let next = iter2.next;
          tmp = iter2;
          iter2 = next;
        }
        tmp.next = iter2.next;
        iter2.next = iter.next;
        iter.next = iter2;
        tmp2 = iter2;
      }
      if (tmp2) {
        tmp2.value = value;
      } else {
        const entry = { key, next: iter.next, value };
        iter.next = entry;
      }
    }
  };
  return obj;
};