// === Module 10180: ? ===

// Module 10180
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class Filter {
  constructor() {
    _classCallCheck(this, Filter);
  }
}
const entry = {
  key: "refine",
  value: function refine(arg0, arr) {
    const self = this;
    let closure_0 = arg0;
    return arr.filter((item) => self.isValid(closure_0, item));
  }
};
let items = [entry];
class MergingRefiner {
  constructor() {
    _classCallCheck(this, MergingRefiner);
  }
}
const entry1 = {
  key: "refine",
  value: function refine(text, arg1) {
    const self = this;
    if (arg1.length < 2) {
      return arg1;
    } else {
      const items = [];
      let first = arg1[0];
      let num = 1;
      let num2 = 1;
      let tmp20 = first;
      if (1 < arg1.length) {
        do {
          let tmp11;
          let tmp = arg1[num];
          let str = text.text;
          let substr = str.substring(first.index + first.text.length, tmp.index);
          if (self.shouldMergeResults(substr, first, tmp, text)) {
            let closure_1 = tmp;
            let mergeResultsResult = self.mergeResults(substr, tmp8, tmp, text);
            let debugResult = text.debug(() => {
              console.log("" + self.constructor.name + " merged " + first + " and " + closure_1 + " into " + mergeResultsResult);
            });
            tmp11 = mergeResultsResult;
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
const Filter_export = _createClass(Filter, items);
const MergingRefiner_export = _createClass(MergingRefiner, items1);

export { Filter_export as Filter };
export { MergingRefiner_export as MergingRefiner };