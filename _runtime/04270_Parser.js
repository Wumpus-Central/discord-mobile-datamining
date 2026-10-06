// _runtime/04270_Parser.js
import DateToSystemTimezoneSetter from "04267_DateToSystemTimezoneSetter.js";

let num;
class Parser {
  constructor() {
    if (!(this instanceof Parser)) {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Cannot call a class as a function");
      throw typeError;
    }
  }
}
const entry = {
  key: "run",
  value: function run(arg0, arg1, arg2, arg3) {
    let valueSetter;
    const self = this;
    const iter = this.parse(arg0, arg1, arg2, arg3);
    let tmp = null;
    if (iter) {
      const self2 = this;
      const self3 = this;
      const obj = { setter: valueSetter, rest: iter.rest };
      valueSetter = new DateToSystemTimezoneSetter.ValueSetter(
        iter.value,
        self.validate,
        self.set,
        self.priority,
        self.subPriority,
      );
      tmp = obj;
    }
    return tmp;
  },
};
const items = [
  entry,
  {
    key: "validate",
    value: function validate(arg0, arg1, arg2) {
      return true;
    },
  },
];
for (let num = 0; num < items.length; num = num + 1) {
  let tmp3 = items[num];
  let flag = tmp3.enumerable;
  if (!flag) {
    flag = false;
  }
  tmp3.enumerable = flag;
  tmp3.configurable = true;
  if ("value" in tmp3) {
    tmp3.writable = true;
  }
  let _Object = Object;
  let definePropertyResult1 = Object.defineProperty(tmp2, tmp3.key, tmp3);
}

export { Parser };
