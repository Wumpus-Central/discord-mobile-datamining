
export default function getSideChannel() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        let tmp3 = outer1_0(obj[3]);
        tmp3 = new tmp3("Side channel does not contain " + outer1_0(obj[4])(arg0));
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
      let obj = closure_0;
      if (!closure_0) {
        const tmp2 = outer1_2();
        closure_0 = tmp2;
        obj = tmp2;
      }
      const result = obj.set(arg0, arg1);
    }
  };
  return obj;
};