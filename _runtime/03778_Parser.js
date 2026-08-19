// === Module 3778: Parser ===

// Module 3778 (Parser)
const Parser = arg1;
const dependencyMap = arg6;
arg5.Parser = undefined;
class Parser {
  constructor() {
    if (this instanceof Parser) {
      return;
    } else {
      tmp = globalThis;
      _TypeError = TypeError;
      tmp2 = new.target;
      str = "Cannot call a class as a function";
      tmp3 = new.target;
      typeError = new TypeError("Cannot call a class as a function");
      tmp5 = typeError;
      throw typeError;
    }
  }
}
const items = [
  {
    key: "run",
    value: function run(arg0, arg1, arg2, arg3) {
      const self = this;
      const iter = this.parse(arg0, arg1, arg2, arg3);
      let tmp = null;
      if (iter) {
        const obj = { setter: null, rest: null };
        const valueSetter = new Parser(3775).ValueSetter(iter.value, self.validate, self.set, self.priority, self.subPriority);
        obj[0] = valueSetter;
        obj[1] = iter.rest;
        tmp = obj;
      }
      return tmp;
    }
  },
  {
    key: "validate",
    value: function validate(arg0, arg1, arg2) {
      return true;
    }
  }
];
for (let num = 0; num < items.length; num = num + 1) {
  let tmp3 = items[num];
  let flag = tmp3.enumerable;
  let tmp4 = num;
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
arg5.Parser = Parser;