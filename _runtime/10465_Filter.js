// === Module 10465: Filter ===

// Module 10465 (Filter)
import MergingRefiner from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

class Filter {
  constructor() {
    tmp = MergingRefiner(this, MergingRefiner);
    return;
  }
}
MergingRefiner = Filter;
let obj = {
  key: "refine",
  value: function refine(arg0, arr) {
    const self = this;
    closure_0 = arg0;
    return arr.filter((arg0) => self.isValid(closure_0, arg0));
  }
};
let items = [obj];
class MergingRefiner {
  constructor() {
    tmp = MergingRefiner(this, MergingRefiner);
    return;
  }
}
obj = {
  key: "refine",
  value: function refine(text) {
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
          let tmp3 = self;
          let tmp4 = substr;
          let tmp5 = first;
          let tmp6 = tmp;
          let tmp7 = text;
          let tmp9 = num2;
          if (self.shouldMergeResults(substr, first, tmp, text)) {
            closure_1 = tmp;
            let tmp12 = self;
            let tmp13 = substr;
            let tmp14 = first;
            let tmp15 = tmp;
            let tmp16 = text;
            let mergeResultsResult = self.mergeResults(substr, tmp8, tmp, text);
            closure_2 = mergeResultsResult;
            let debugResult = text.debug(() => {
              console.log("" + first.constructor.name + " merged " + first + " and " + closure_1 + " into " + closure_2);
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
const items1 = [obj];

export const Filter = _createClass(Filter, items);
export const MergingRefiner = _createClass(MergingRefiner, items1);