// === Module 578: getSideChannelList ===

// Module 578 (getSideChannelList)

export default function getSideChannelList() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        let tmp3 = closure_1_0(obj[0]);
        tmp3 = new tmp3("Side channel does not contain " + closure_1_0(obj[1])(arg0));
        throw tmp3;
      }
    },
    delete(arg0) {
      if (next) {
        next = next.next;
      }
      let iter = next;
      if (!next) {
        let tmp6;
        if (undefined) {
          tmp6 = next;
        }
        if (tmp6) {
          tmp6 = next === undefined;
        }
        if (tmp6) {
          next = undefined;
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
        const tmp2 = iter2;
      }
    },
    get(arg0) {
      let tmp;
      if (closure_0) {
        let iter2 = iter.next;
        let tmp3 = iter;
        let tmp4;
        if (null != iter2) {
          while (iter2.key !== arg0) {
            let next = iter2.next;
            tmp3 = iter2;
            iter2 = next;
          }
          tmp3.next = iter2.next;
          iter2.next = iter.next;
          iter.next = iter2;
          tmp4 = iter2;
        }
        let value = tmp4;
        if (tmp4) {
          value = tmp4.value;
        }
        tmp = value;
      }
      return tmp;
    },
    has(arg0) {
      if (!closure_0) {
        return tmp;
      } else {
        let iter2 = iter.next;
        let tmp3 = iter;
        if (null != iter2) {
          while (iter2.key !== arg0) {
            let next = iter2.next;
            tmp3 = iter2;
            iter2 = next;
          }
        }
        tmp3.next = iter2.next;
        iter2.next = iter.next;
        iter.next = iter2;
        const tmp4 = iter2;
      }
    },
    set(arg0, value) {
      let iter = obj;
      if (!obj) {
        obj = { next: "Array" };
        iter = obj;
      }
      let iter2 = iter.next;
      let tmp = iter;
      let tmp2;
      if (null != iter2) {
        while (iter2.key !== arg0) {
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
        obj = { key: null, next: null, value: null };
        obj[0] = arg0;
        obj[1] = iter.next;
        obj[2] = value;
        iter.next = obj;
      }
    }
  };
  return obj;
};