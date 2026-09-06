// _runtime/10465_OverlapRemovalRefiner.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class OverlapRemovalRefiner {
  constructor() {
    tmp = closure_0(this, OverlapRemovalRefiner);
    return;
  }
}
_classCallCheck = OverlapRemovalRefiner;
const entry = {
  key: "refine",
  value: function refine(debug, arg1) {
    let first = this;
    if (arg1.length < 2) {
      return arg1;
    } else {
      const items = [];
      first = arg1[0];
      let num = 1;
      let num2 = 1;
      let tmp8 = first;
      if (1 < arg1.length) {
        do {
          let tmp = arg1[num];
          if (tmp.index >= first.index + first.text.length) {
            let arr = items.push(first);
            let tmp4 = tmp;
          } else {
            first = null;
            closure_1 = null;
            if (tmp.text.length > first.text.length) {
              first = tmp;
              closure_1 = first;
              tmp4 = tmp;
            } else {
              closure_1 = tmp;
              tmp4 = first;
            }
            let debugResult = debug.debug(() => {
              console.log("" + _classCallCheck.constructor.name + " remove " + closure_1 + " by " + first);
            });
          }
          num = num2 + 1;
          first = tmp4;
          tmp8 = tmp4;
          num2 = num;
        } while (num < arg1.length);
      }
      if (null != tmp8) {
        items.push(tmp8);
      }
      return items;
    }
  },
};
let items = [entry];

export default _createClass(OverlapRemovalRefiner, items);
