// === Module 13687: withoutSetter ===

// Module 13687 (withoutSetter)
import _mod13673 from "module_13673" /* 13673 */;
import prop2 from "prop" /* 13688 */;
import prop3 from "prop" /* 13692 */;
import sum from "sum" /* 13695 */;
import call from "call" /* 13696 */;
import prop from "prop" /* 13691 */;

let closure_2 = prop2("wks");
let _Symbol = _mod13673.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod13673.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod13673.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = sum;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (call(table, arg0)) {
    return table[arg0];
  } else {
    if (!prop3) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      table[arg0] = tmp5;
    } else {
      call;
    }
    _Symbol = _mod13673.Symbol;
    tmp5 = _Symbol[arg0];
  }
};