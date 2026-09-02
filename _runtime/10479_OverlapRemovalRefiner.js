// === Module 10479: OverlapRemovalRefiner ===

// Module 10479 (OverlapRemovalRefiner)
import OverlapRemovalRefiner from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class OverlapRemovalRefiner {
  constructor() {
    tmp = OverlapRemovalRefiner(this, OverlapRemovalRefiner);
    return;
  }
}
let items = [
  {
    key: "refine",
    value: function refine(debug) {
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
            let tmp2 = first;
            let tmp3 = num2;
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
                console.log("" + first.constructor.name + " remove " + closure_1 + " by " + first);
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
    }
  }
];

export default _createClass(OverlapRemovalRefiner, items);