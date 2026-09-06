// === Module 10451: Filter ===

// Module 10451 (Filter)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class Filter {
  constructor() {
    tmp = closure_0(this, MergingRefiner);
    return;
  }
}
_classCallCheck = Filter;
const entry = {
  key: "refine",
  value: function refine(arg0, arr) {
    const self = this;
    closure_0 = arg0;
    return arr.filter((item) => self.isValid(closure_0, item));
  }
};
let items = [entry];
class MergingRefiner {
  constructor() {
    tmp = closure_0(this, MergingRefiner);
    return;
  }
}
_classCallCheck = MergingRefiner;
const entry1 = {
  key: "refine",
  value: function refine(text, arg1) {
    const self = this;
    let first = this;
    if (arg1.length < 2) {
      return arg1;
    } else {
      const items = [];
      first = arg1[0];
      let num = 1;
      let num2 = 1;
      let tmp20 = first;
      if (1 < arg1.length) {
        do {
          let tmp = arg1[num];
          let str = text.text;
          let substr = str.substring(first.index + first.text.length, tmp.index);
          if (self.shouldMergeResults(substr, first, tmp, text)) {
            closure_1 = tmp;
            let mergeResultsResult = self.mergeResults(substr, tmp8, tmp, text);
            closure_2 = mergeResultsResult;
            let debugResult = text.debug(() => {
              console.log("" + _classCallCheck.constructor.name + " merged " + first + " and " + closure_1 + " into " + mergeResultsResult);
            });
            let tmp11 = mergeResultsResult;
          } else {
            let arr = items.push(first);
            tmp11 = tmp;
          }
          num = num2 + 1;
          first = tmp11;
          tmp20 = tmp11;
          num2 = num;
        } while (num < arg1.length);
      }
      if (null != tmp20) {
        items.push(tmp20);
      }
      return items;
    }
  }
};
const items1 = [entry1];

export const Filter = _createClass(Filter, items);
export const MergingRefiner = _createClass(MergingRefiner, items1);