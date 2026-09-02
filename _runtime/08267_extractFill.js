// _runtime/08267_extractFill.js
const module = arg2;
const dependencyMap = arg6;
let closure_2 = { evenodd: 0, nonzero: 1 };
const obj = { type: 0, payload: require("get ActivityIndicator").processColor("black") };
arg5.default = function extractFill(arg0, arg1, arr) {
  ({ fill, fillRule, fillOpacity } = arg1);
  if (null != fill) {
    arr.push("fill");
    if (!fill) {
      if (typeof fill !== "number") {
        let tmp5 = obj;
      }
      arg0.fill = tmp5;
    }
    tmp5 = module(8268)(fill);
  } else {
    arg0.fill = obj;
    if (null != fillOpacity) {
      arr.push("fillOpacity");
      arg0.fillOpacity = module(8256)(fillOpacity);
    }
    if (null != fillRule) {
      arr.push("fillRule");
      let num2 = 1;
      if (fillRule) {
        num2 = 1;
        if (0 === table[fillRule]) {
          num2 = 0;
        }
      }
      arg0.fillRule = num2;
    }
  }
};
